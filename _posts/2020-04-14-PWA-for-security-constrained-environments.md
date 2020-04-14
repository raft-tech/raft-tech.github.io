---
layout: post 
title: "PWAs for Security Constrained Environments" 
short_title: "PWAs for offline mode" 
date: 2020-04-14
categories: 
featimg: /assets/images/featimage/pwa-small.jpg
bgimg: /assets/images/bgimg/pwa.jpg
author: Meissa 
--- 

## PWAs for Security Constrained Environments

Though we've already expressed our support of Progressive Web Applications as the future of mobile development<sup>[15]</sup>, I'd like to dive a bit deeper into how they operate and explore a few potential applications. 

## What makes PWAs secure? 

PWAs provide an easy form of distribution as they are installable from an application URL. However, this ease-of-access is not at the cost of security as one of the primary requirements to enable PWA installation is that it is served from a secure domain (HTTPS), ensuring that all client-server communication is encrypted<sup>[1]</sup>. If you want to restrict who can install your app, controls can be applied at the URL level. Beyond controlling app access, further security can be applied by implementing authentication when accessing your backend resources.  There are many vetted services that provide drop-in authentication solutions, such as Google Firebase, or well documented work flows for integrating your custom auth solution when complete control of the login process is required<sup>[2]</sup>.

Having a single codebase that drives both your desktop and mobile functionality helps to reduce the risk of code drift across repos.  The service worker, another requirement for installable PWAs, automatically detects and downloads updates, with changes applied on the next launch of the application. Considering that these updates do not need to be pushed through the red tape of an app store approval process, developers are able to quickly deliver security patches and new features to users' devices, helping to reduce attack surface.

## How do PWAs operate offline?

The service worker is key to the offline availability of a PWA, and Missy already covered how get started by caching your app's shell<sup>[4]</sup>.  To make the most of the service worker you need to evaluate how you expect your app to function when unable to access the network and implement the appropriate caching strategy for your content. Mateusz Adamczyk provides a fantastic summary of your top options <sup>[3]</sup>. Leveraging the browser's Navigator API to tap into the online/offline events allows us the ability the alter our caching strategy when network connectivity is unavailable, sync locally stored changes with our backend services, and ensure the user is aware of any altered or reduced functionality by displaying a notification in our UI. 

When an offline device is able to reestablish connectivity, I'd love for the syncing of changes to automatically happen in the background, though this is not currently a well supported option for PWAs.  While the Background Sync API should become the goto option in the future, it currently lacks implementation in iOS Safari, Firefox, and IE, limiting it's usability <sup>[6]</sup>.  Syncing in the foreground is very reasonable alternative, triggered either through a user action or during Navigator events.  However, it's important to note that "connected" doesn't always mean "accessible" <sup>[7]</sup>.

## Applications of secure, offline PWAs

**Air Gapped Environments**

Though PWAs require connection to an HTTPS server for installation, they would still be a viable option for air gapped devices<sup>[8]</sup>, provided that device network access is restricted.  In these environments, devices would primarily operate offline but should not feel restricted by this constraint.  To achieve a fluid user experience, we would make use of optimistic UI updates<sup>[9]</sup>, treating actions that need to be synced with our backend as successful even though we lack the required network connectivity.  This would be combined with a hybrid caching strategy:
- When securely "online", we would use a network-then-cache approach<sup>[10]</sup> to provide users the most up-to-date data as quickly as possible.
- When unable to access a secured network the application would operate "offline" using a cache-only strategy<sup>[11]</sup>, storing all user created data locally while also marking this data as "waiting to sync" so that when a secure connection is established we are able to push these new updates to the backend.

**Low Bandwidth Areas**

When operating in areas with low-bandwidth or intermittent connectivity, it is imperative that we be mindful of network loads.  These considerations may also be paired with concerns about device storage capacity, and so the size of our application may need to be minimized.  Though frameworks such as React or Angular are popular, they may push app sizes beyond the desired threshold.  Plain JS is always an option<sup>[12]</sup>, and can help shave crucial KBs, but you may miss out on the large ecosystem of reusable components provided by React, et al. dev communities and will need to code more functionality yourself.  Preact provides a strong middle ground as it has the smallest footprint (3kb vs 80kb for React)<sup>[13]</sup> of any PWA framework while also providing compatability with the React ecosystem and better developer experience than Angular<sup>[14]</sup>.  This means you don't need to sacrifice developer productivity in the process of meeting the requirements of your target devices. 

Though there is an expectation of more frequent network connectivity here than with air gapped devices, our application of optimistic UI updates, combined with a hybrid caching strategy work equally well. Providing users a consistent experience despite slow/no data transmission capabilities extends the usefulness of our apps and can deliver impactful functionality to regions and communities lacking extensive infrastructure. 




## References

[1] How to make PWAs installable
https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Installable_PWAs

[2] SPA Authentication Flow
https://www.oauth.com/oauth2-servers/single-page-apps/

[3] Cache Strategies
https://www.monterail.com/blog/pwa-offline-dynamic-data
https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/

[4] Missy's Post

[5] Browser Navigator
https://developer.mozilla.org/en-US/docs/Web/API/Navigator

[6] Background sync support
https://caniuse.com/#search=background%20sync

[7] Connected vs Accessible
 https://stackoverflow.com/a/44909646

[8] Air Gap
https://www.thesslstore.com/blog/air-gapped-computer/

[9] Optimistic UI
https://www.apollographql.com/docs/react/performance/optimistic-ui/

[10] Network Falling Back to Cache
https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-falling-back-to-cache

[11] Cache Only
https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-only

[12] PWA from scratch
https://www.freecodecamp.org/news/build-a-pwa-from-scratch-with-html-css-and-javascript/

[13] Preact vs React size
https://blog.knoldus.com/preact-an-alternative-to-react/

[14] Frontend Satisfaction Rankings
https://2019.stateofjs.com/front-end-frameworks/#front_end_frameworks_experience_ranking

[14 image] https://2019.stateofjs.com/images/captures/front_end_frameworks_experience_ranking.png

[15] Shubhi's Post
https://goraft.tech/2020/03/05/pwas-are-the-future-of-mobile-development.html