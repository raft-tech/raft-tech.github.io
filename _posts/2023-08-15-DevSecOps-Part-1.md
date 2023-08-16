---
layout: post
title: "DevSecOps: Part 1 - Development"
short_title: "DevSecOps: Development"
date: 2023-08-15
categories:
featimg: /assets/images/featimage/developers_at_work.jpg
bgimg: /assets/images/featimage/developers_at_work.jpg
author: Dagan Henderson
---

# What Is Software Development?
It seems like a silly question, but if you were to ask folks across your organization what they considered the role of the developer to be, I think you would be quite surprised at the range of answers. I have asked that question in a lot of organizations over the past 10 years, and answers have ranged from “committing code” to “generating revenue for the business.” That is a wide spread.
For my money, software development is the practice of delivering secure, reliable and cost-effective features to end-users. Until that is done, there is no value beyond the academic exercise of designing and writing code.
The DevSecOps philosophy works towards this objective by “shifting left,” and in this series of posts I am going to step through what I believe to be the core tenants of each piece. In this post, I’ll focus on the first piece: Development.

## When Is Development Done?
There are a lot of ways to define done. In one extreme, development is done when every feature is complete and every bug is squashed. In another, development is never done. These days, though, most organizations are Agile and consider a delivery to be done when the release is ready to be deployed (at which point the team is planning for the next iteration). So how do we get there?
Each organization has its set of policies, principles and processes, but generally four things need to happen:
 - system architecture/design
 - user interface design
 - programming
 - testing/validation

Let’s dive in to each of these.

### System Architecture
1.	What will the system do?
2.	How will the system be divided into sub-systems and components?
3.	What will each component’s responsibilities be, and what core algorithms will be used?
4.	How will components interact, and what guarantees will they provide?

Not every project has a dedicated architect, but whether it is developed on-the-fly by individual developers or provided by an architecture team, the architecture does get defined. Additionally, architecture goes deeper than high-level system architecture. Every component, data type, and function has its own individual architecture.

### User Interface Design
1.	What will the interface look like?
2.	What interactive controls will be exposed to the users?
3.	What is the workflow for each user task?

If your application has end users then it has a user interface, and it deserves a lot of attention. Like architecture, some projects have dedicated user experience teams tasked with providing a consistent look and common patterns across the application; other projects expect the frontend developers to maintain consistency.

### Programming
1.	What language or languages will be used?
2.	What frameworks and libraries will be used?
3.	Implement the architecture and design.

Programming is where the architecture and design get implemented. There are still decisions to be made (i.e., the language, libraries, etc.), but the work moves from conceptual to concrete during the programming phase.

### Testing and Validation
1.	Does the software provide the expected features?
2.	Does the software have any unexpected behaviors?
3.	Is the software stable?
4.	Squash any bugs and implement any required changes based on tester feedback.

Testing and validation is generally performed by a combination of automated and manual testing. Because it is fast and consistent, automation is generally preferred. However, manual tests should not be overlooked. Automation cannot emulate what users experience, and that should always be carefully considered.

## Achieving Done
At this point, the development piece of DevSecOps is done. But wait! Is the team’s job done? I would argue no. By my definition, software development means delivering secure, reliable, and cost-effective features to end users, and so far, the only thing we’ve accomplished is the creation of a deployable application. To really be done, we need to consider the other two parts of DevSecOps. In my next post, we’ll look at security.

## About the Author
Dagan has been developing software professionally for more than 20 years. In that time, he has worked at everything from freelance gigs and startups to Fortune 500 enterprises, including heavily regulated industries (i.e., healthcare, financial services, FedRAMP, and Department of Defense). He has developed commercial software in 10 different languages.
