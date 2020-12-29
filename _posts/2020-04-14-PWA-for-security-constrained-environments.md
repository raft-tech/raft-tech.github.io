---
layout: post 
title: "PWAs for Security Constrained Environments" 
short_title: "PWAs for offline mode" 
date: 2020-04-14
categories: 
featimg: /assets/images/featimage/pwa-small.jpg
bgimg: /assets/images/bgimg/pwa.jpg
author: Meissa Meida
--- 

[Though we've already expressed our support of Progressive Web Applications (PWAs) as the future of mobile development](https://goraft.tech/2020/03/05/pwas-are-the-future-of-mobile-development.html), I'd like to dive a bit deeper into how they operate and explore a few potential applications. 

## What makes PWAs secure? 

PWAs provide an easy form of distribution as they are installable from an application URL. However, this ease-of-access is not at the cost of security as one of the primary requirements to enable PWA installation is that it is served from a secure domain (HTTPS), ensuring that all client-server [communication is encrypted](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Installable_PWAs). If you want to restrict who can install your app, controls can be applied at the URL level. Beyond controlling app access, further security can be applied by implementing authentication when accessing your backend resources. There are many vetted services that provide drop-in authentication solutions, such as Google Firebase, or well documented work flows for integrating your custom auth solution when complete control of the [login process is required](https://www.oauth.com/oauth2-servers/single-page-apps/).

Having a single codebase that drives both your desktop and mobile functionality helps to reduce the risk of code drift across repos. The service worker, another requirement for installable PWAs, automatically detects and downloads updates, which applies changes during the next application launch. Considering that these updates do not need to be pushed through the red tape of an app store approval process, developers are able to quickly deliver security patches and new features to users' devices, helping to reduce system vulnerabilities.

## How do PWAs operate offline?

The service worker is key to the offline availability of a PWA. To make the most of the service worker you need to evaluate how you expect your app to function when it is unable to access the network and implement the appropriate caching strategy for your content. Monterail Senior Frontend Developer, Mateusz Adamczyk provides a [fantastic summary of your best options](https://www.monterail.com/blog/pwa-offline-dynamic-data). Leveraging the browser's Navigator API to tap into the online/offline events lets us alter our caching strategy when network connectivity is unavailable, sync locally stored changes with our backend services, and ensure the user is aware of any altered or reduced functionality by displaying a notification in our UI. 

When an offline device is able to reestablish connectivity, I'd love for the syncing of changes to automatically happen in the background, though this is not currently a well-supported option for PWAs. While the Background Sync API should become the goto option in the future, it currently lacks implementation in iOS Safari, Firefox, and IE, [limiting it's usability](https://caniuse.com/#search=background%20sync). In the meantime, syncing in the foreground is a very reasonable alternative, triggered either through user actions or during Navigator events. However, it's important to note that "connected" doesn't always mean ["accessible"](https://stackoverflow.com/a/44909646).

## Applications of secure, offline PWAs

### Air Gapped Environments

Though PWAs require connection to an HTTPS server for installation, they would still be a viable option for [air gapped devices](https://www.thesslstore.com/blog/air-gapped-computer/), provided that the device's network access is restricted. In these environments, devices would primarily operate offline but should not feel restricted by this constraint. To achieve a fluid user experience, we would make use of [optimistic UI updates](https://www.apollographql.com/docs/react/performance/optimistic-ui/), treating actions that need to be synced with our backend as successful even though we lack the required network connectivity. This could be combined with a hybrid caching strategy:
- When securely "online", we would use a [network-then-cache approach](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-falling-back-to-cache) to provide users the most up-to-date data as quickly as possible.
- When unable to access a secured network, the application would operate "offline" using a [cache-only strategy](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-only), storing all user created data locally while also marking this data as "waiting to sync" so that when a secure connection is established we are able to push these new updates to the backend.

### Low Bandwidth Areas

When operating in areas with low-bandwidth or intermittent connectivity, we must be mindful of network loads. This considerations may also be paired with concerns about device storage capacity, and so the size of our application may need to be minimized. Although frameworks such as React or Angular are popular, they may push app sizes beyond the desired threshold. Plain JS is [always an option](https://www.freecodecamp.org/news/build-a-pwa-from-scratch-with-html-css-and-javascript/) and can help shave crucial KBs. However, don't miss out on the large ecosystem of reusable components provided by React, et al. dev communities. [Preact](https://preactjs.com) provides a strong middle ground as it has the smallest footprint ([3kb vs 80kb for React](https://blog.knoldus.com/preact-an-alternative-to-react/)) of any PWA framework while also providing compatibility with the React ecosystem and a better developer [experience than Angular](https://2019.stateofjs.com/front-end-frameworks/#front_end_frameworks_experience_ranking). This means you don't need to sacrifice developer productivity in the process of meeting the requirements of your target devices. 

Though there is an expectation of more frequent network connectivity here than with air gapped devices, our application of optimistic UI updates, combined with a hybrid caching strategy work equally well. Providing users with a consistent experience despite slow/no data transmission capabilities extends the usefulness of our apps and can deliver impactful functionality to regions and communities lacking extensive infrastructure. 

## Contact Us
Whether you’re looking to transition from a native app or starting from scratch, we can help you decide if a PWA is right for your project. Reach out at [hireus@goraft.tech](mailto:hireus@goraft.tech).