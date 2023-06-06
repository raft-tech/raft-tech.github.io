---
layout: post 
title: "Continuous Integration and Automated Testing"
short_title: "Automated Testing" 
date: 2020-05-15
categories:
featimg: /assets/images/automated-testing/automated-testing-small.png
bgimg: /assets/images/automated-testing/automated-testing-large.jpeg
author: Barak Stout
--- 

One of the foundations of any Agile framework for developing software is continuous delivery. But how can you be sure that the features being iteratively developed and shipped every two to three weeks are actually working and complying with their Definition of Done (DoD). Traditionally, DoD's are measured and tested using a mix of manual methods, unit testing, or integration testing. Although these approaches are good, they don't repeatedly test the software from the end user perspective. Manual testing can't be automated, unit testing ensures the code being written is tested from the developers perspective and integration testing tests how different code dependencies work together when combined.

At raft we go a step above when developing modern software applications by performing automated end-to-end testing that mimics the interactions that the end user would take. These end-to-end tests are integrated at each pull-request (PR) level to ensure the master branch always remains fully tested from the end user perspective. There are many commercial and open source tools available that enable this testing. At raft, we love working in the open source and not tying our customers to a COTS licensing fee. We use [Newman](https://www.npmjs.com/package/newman) for end-to-end backend API testing, [Cypress](https://www.cypress.io/) for end-to-end user testing and [Locust](https://locust.io/) for load testing the scalability of software. We have integrated these tests into our development pipeline, testing the system as it's being developed. Additionally, in production, we use Newman and Cypress to continuously test the system as a monitoring and early detection component.

## Newman

Many developers are familiar with [Postman](https://www.postman.com/) as a development tool for APIs. Newman is a command line tool that can execute a collection of postman tests. This means that the Postman collection we create anyways while developing the backend API, could be re-used as an end-to-end testing suite in our continuous integration pipeline at the PR level via Jenkins, Travis, CircleCI -- any CI/CD tool of your choice. It also means that the entire end-to-end test suite can be containerized and executed periodically using cron jobs such as cf-cron, K8s cron jobs, etc. How often we test a production system will vary based on multitude of factors -- system sensitivity, peak activity times, etc. We don't need to introduce traffic to our system if it's not needed. Typically we deploy 2 Newman jobs: one that runs periodically in the background and alerts us via Mattermost hooks if an error occurs, another once a day as an _all clear_ signal notifying us that the system is running expectedly. By integrating Newman into our pipeline and production system, we detect potential problems before end users detect them and take corrective measures.

## Cypress

Cypress is an end-to-end testing framework that can test anything in a browser as an end user would. That means that on its own, Cypress can be integrated into our pipeline as a frontend testing suite. It also means we can re-use the same testing suite to run against any environment as an end-to-end test, testing the frontend and backend. Much like Newman, we containerize and run Cypress periodically in the background, listening for failures, and once a day for an _all clear_ message. Cypress tests can be created via the [Cypress Scenario Recorder Chrome Extention](https://chrome.google.com/webstore/detail/cypress-scenario-recorder/fmpgoobcionmfneadjapdabmjfkmfekb?hl=en) and do not require a ton of coding skills. Cypress can test a large site for all potential user interaction in a very short period, faster than any human-driven smoke test would. Since Cypress can test all pathways, it can ensure the frontend is working as expected and alerts our team for any anomalies. Check out the GIF below recorded with Cypress. It is important to note that all actions taken in this GIF are via Cypress and no human involvement whatsoever.

![Automated Testing](/assets/images/automated-testing/automated-testing.gif)

## Locust

When deploying APIs that are going to be consumed by a large number of users/systems, it is crucial to test how the system would behave during peak load times. Locust is a distributed swarm testing tool, written in Python that can simulate a large load on a system to troubleshoot performance bottlenecks that usually happen during peak usage times. We've recently used Locust effectively to storm our APIs with thousands of users hitting the system for over 24 hours. Setting up Locust is relatively straight forward. All you need to do is define the behavior of the endpoints and data you want to test with, and Locust does the rest. Locust is configurable to the total number of users you would like and the rate at which you want to add new users. Given enough resources, Locust can swarm with _millions_ of API requests. We use Locust as a tool during end of each Sprint to ensure the features being shipped to production can withstand the load expected in the production application. We observe the system's behavior while scaling the application up and seeing how the system behaves while under constant load for a long period of time. How much load and for how long we test depends on the applications goals defined during our user discovery phase. Unlike Newman and Cypress, we don't integrate locust at each PR level because of the time it takes to execute an entire locust test. Additionally, unlike Newman and Cypress, we typically won't run Locust against a production system. Running Locust can get expensive, since you are basically generating and potential processing lots of _"junk"_ traffic on your own system. Being in a cloud hosted and auto scaling production environment this can translate to lots of computational costs -- aka dollars. Locust tests need to be thought out and used strategically to expose scalability problems during development and sprint planning.

## Final Thoughts

Whether it's during development or while monitoring a production system, end-to-end testing and early detection systems are never a bad idea. With tools like Newman, Cypress and Locust, there is really no reason not to continuously test systems from the users perspective and stress test it so you could sleep better at night. Over the next few posts we'll do a detailed walk through of each tool, how to get started, and how it integrates into PRs.

## Contact Us

If you’re interested in continuously delivering applications with high assurance of confidence, Reach out to us at [hireus@goraft.tech](mailto:hireus@goraft.tech).
