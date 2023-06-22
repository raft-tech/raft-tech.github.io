---
layout: post
title: "NextJS in Docker"
short_title: "NextJS in Docker"
date: 2022-06-27
categories: 
thumbnail: /images/featimage/nextjs-docker.svg
author: Benjamin Marte
tags: ["Docker", "NextJS", "Kubernetes", "k8s", "Data Fabric"]
---

Being a Full Stack R&D Developer at [Raft](https://goraft.tech) comes with a few interesting challenges to solve. In this blog post, we will discuss one of the latest problems my team and I ran into during the development of [DataFabric](https://datafabric.goraft.tech).

Data Fabric, is a complex data platform assembled from open source technologies, [Datahub](https://datahubproject.io/), [Superset](https://superset.apache.org/), [Kafka](https://kafka.apache.org/) and [Trino](https://trino.io/) to name a few. Undreneath the hood, Data Fabric is a container based platform, utilizing [Docker](https://www.docker.com/) and [Kubernetes](https://kubernetes.io/). There are many nuts and bolts to Data Fabric, including many integration points among these technologies. Making them play nice with each other can sometimes lead to going down a deep rabbit hole that has no end in sight.

_Would you like to continue?_

## The NextJS environment variable problem

We use [NextJS](https://nextjs.org/) for Data Fabric’s front end. It's one of the best Reactjs app frameworks with a ton of features that make it a joy to work with but sometimes those features can pose a unique challenge. If you’ve ever created an app and used docker you always end up using environment variables to customize some portions of your app based on the environment it will be deployed on. NextJS takes app security seriously, this is why to be able to access environment variables in your app's user interface (UI) they need to be prefixed with `NEXT_PUBLIC_`.

Looking at their docs for [exposing environment variables to the browser](https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser) I want to bring your attention to this portion where it states:



> In order to **expose** a variable to the browser you have to **prefix** the variable with `NEXT_PUBLIC_`.
>
>For example: `NEXT_PUBLIC_ANALYTICS_ID=abcdefghijk`
>
>This loads `process.env.NEXT_PUBLIC_ANALYTICS_ID` into the Node.js environment automatically, allowing you to use it anywhere in your code. The value will be **inlined** into JavaScript sent to the browser because of the `NEXT_PUBLIC_` prefix. This inlining occurs at **build time**, so your various `NEXT_PUBLIC_` envs need to be set **when the project is built**.



The words in bold here are the keywords we need to focus on, as you can see, NextJS will inline any environment variables prefixed with `NEXT_PUBLIC_` at **build** time. This poses a problem if you need to make a docker image with your app since it will hardcode any environment variables prefixed with `NEXT_PUBLIC_` into your docker image, preventing you from overriding them at run time in docker or Kubernetes using a helm chart (no bueno) and effectively breaking the [12 Factor App Rules](https://12factor.net/).

It seems I wasn’t the only one running into this issue as you can see [here](https://github.com/vercel/next.js/discussions/16995), being security-conscious about my apps, I was not happy with having a docker image with possibly sensitive information embedded in it. I took the plunge into the deep dark rabbit hole (someone help me).

## Searching for a solution

One of the first solutions I tried was the one suggested by the user fabb [here](https://github.com/vercel/next.js/discussions/16995#discussioncomment-1031659) but that seemed too complicated for my liking; however, I did use some of his suggestions mainly using the [`publicRuntimeConfig`](https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration) which states:

> Anything accessible to both client and server-side code should be under `publicRuntimeConfig`.

Cool, so any environment variables we specify in `publicRuntimeConfig`, our app will be able to access them either client-side or server-side. This is starting to sound very promising but upon further reading, you are met with:

> A page that relies on `publicRuntimeConfig` must use `getInitialProps` or `getServerSideProps` or your application must have a **Custom App** with `getInitialProps` to opt-out of Automatic Static Optimization. Runtime configuration won't be available to any page (or component in a page) without being server-side rendered.

Great, so none of these environment variables will be accessible unless you make a server-side call using `getInitialProps` of `getServerSideProps` which can only be used in pages, meaning you can’t access them in a component (not cool).

At this point, you can see I was not happy with this solution either since I need to access environment variables in some of my components and NextJS simply does not support this.

## The eureka moment

I already established that using `publicRuntimeConfig` was part of solving the problem, so I started looking into customizing my `_app.js` and see how I can leverage `getInitialProps` so I could get it working. After many google searches and countless hours of failed attempts, I got it working and with very minimal changes to my app.

## The fix

The fix is suprisingly very simple, you just need to modify 2 files in your application: `next.config.js` and `_app.js`.

In your `next.config.js`, simply add an entry for `publicRuntimeConfig` with the following:


```
/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    // remove private variables from processEnv
    processEnv: Object.fromEntries(
      Object.entries(process.env).filter(([key]) =>
        key.includes('NEXT_PUBLIC_')
      )
    ),
  },
}

module.exports = nextConfig
```

What we’re doing here is making a `processEnv` object from all environment variables and filtering them out to only include environment variables that have `NEXT_PUBLIC_` in their name, ensuring no sensitive information is being included in our `processEnv` object.

For your `_app.js`, we simply need to use the `Custom App` template NextJS provides us and uncomment the `MyApp.getInitialProps` method.


```

import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps }
}

export default MyApp
```

> Keep in mind that using `getInitialProps` will disable **Automatic Static Optimization**. If you still need to use this feature, I have another method you can use which I will discuss in the next section.

With these changes in place, you are now ready to access your environment variables in pages and/or any component in your app. Simply add the following to your page or component:

```
import getConfig from 'next/config';

const {
  publicRuntimeConfig: { processEnv },
} = getConfig();
```

Now you can destructure `processEnv` in your page or component to access your environment variables.

```
const {NEXT_PUBLIC_MESSAGE} = processEnv;
```

Here is an example of what a page/component would look like using this method:

```
import getConfig from 'next/config';

const {
  publicRuntimeConfig: { processEnv },
} = getConfig();

const Header = () => {

  const {NEXT_PUBLIC_MESSAGE} = processEnv;
  
  return (
    <div>
      Hello, {NEXT_PUBLIC_MESSAGE}
    </div>
  )
}

export default Header;
```

## But I don't want to opt out of Automatic Static Optimization

I hear you and I’m happy to tell you that you don’t have to. The alternative way to use it is by commenting out `MyApp.getInitialProps` method from `_app.js` and then using `getServerSideProps` on any page that will need to access an environment variable. Here’s an example of what a page would look like using this method:

```
import getConfig from 'next/config';

const {
  publicRuntimeConfig: { processEnv },
} = getConfig();

const Header = () => {

  const {NEXT_PUBLIC_MESSAGE} = processEnv;
  
  return (
    <div>
      Hello, {NEXT_PUBLIC_MESSAGE}
    </div>
  )
}

export default Header;

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
```

> Using this method works for components as long as any component that needs access to the environment variables is within the page and has a `getServerSideProps` function.

I prefer the first method since it kind of works as a global context of sorts for my environment variables allowing me to access them anywhere in my app or components but it's always nice to have options.

## Dockerizing my app

Here is where I ran into issues, I used the dockerfile provided by NextJS in their [with-docker](https://github.com/vercel/next.js/tree/canary/examples/with-docker) example repo and it simply would not work when I built the docker image for my app. I was back at stage one until my co-worker, [Edward Morgan](https://www.linkedin.com/in/edwardwmorgan/) told me the words every developer hates to hear: ***“It works on my machine”***. This made me look into what I was doing differently in my branch and after many hours of comparing files and changes, I found the culprit.

## The Dockerfile

As I mentioned above, I was using the latest Dockerfile provided by NextJS, but my co-worker had a previous version of the Dockerfile that worked with my code. It worked, but I didn’t understand why it was working, and this was driving me crazy because I need to know why it works. After spending some more time tinkering, I realized that the new Dockerfile got rid of a few lines of code, so I tried adding those back to my Dockerfile and it worked. I finally understood why it worked.

The Dockerfile provided by NextJS uses the following docker command to start the app:

`CMD ["node", "server.js"]`

The previous version of the Dockerfile had this to start the app:

`CMD ["node_modules/.bin/next", "start"]`

This is where it all made sense because when you start your app with `next start`, it loads your environment variables, whereas the `node server.js` simply runs your app without processing environment variables. Knowing this, I went back to my Dockerfile, modified it with the necessary code, built my docker image, and ran it. Finally, my app was working as intended in Docker.

Here is what the updated Dockerfile looks like:


```
# Install dependencies only when needed
FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image, copy all the files and run next
FROM node:alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node_modules/.bin/next", "start"]
```

## Local Development & deployment

Using this method also allows us to use a `.env.development` file in our repo, so devs can do local development with the required environment variables and any other environment type of `.env` files described in the [NextJS Environment Variable Load Order](https://nextjs.org/docs/basic-features/environment-variables#environment-variable-load-order) or, in our case, using environment variables in a helm chart at run time with our docker image.

## Example App & NextJS Starter Template

I made a GitHub repo with a sample app using this setup so you can see how it works if you’re interested in making edits and testing it yourself. Feel free to clone my example app [here](https://github.com/benmarte/nextjs-docker). You can also use it as a starter template for your NextJS project by running the following in your terminal:

```
npx create-next-app -e https://github.com/benmarte/nextjs-docker --use-npm
```

## Closing thoughts

This whole process took me two weeks of constant trial and error, testing things locally, testing things in docker, and then testing things in Kubernetes. I tried many different things until I finally got this working as DRY and simple as possible while still respecting security and the 12 Factor App rules. I want to give a special shout-out to my co-workers: [Edward Morgan](https://www.linkedin.com/in/edwardwmorgan/) for his invaluable Kubernetes knowledge and help, and [Tejendra Patel](https://www.linkedin.com/in/tejendrapatel/) for being my rubber duck, keeping me sane, and ensuring I write better code. I couldn’t have solved this without their assistance.

If this kind of challenge/problem is your kind of jam, check out our [open positions](https://boards.greenhouse.io/raft) at [Raft](https://goraft.tech) and come work with me and tons of other very talented individuals solving interesting problems.
