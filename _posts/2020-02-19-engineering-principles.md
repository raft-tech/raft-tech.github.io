---
layout: post
title:  "Raft Engineering Principles"
date:   2020-02-19
categories:
featimg: /assets/images/featimage/engineering_principles.jpg
bgimg: /assets/images/bgimg/eng.jpg
author: Bhaarat Sharma
headerAlign: left
headerOverlay: left
---

These principles are a part of our culture and each project we undertake. They are not specific to any programming language, framework, platform, or tool, but specific to the fundamentals and best practices we use when building and maintaining software for ourselves and our customers. By being open and transparent about sharing these principles, we want to show how the sausage is made.

## Tl;DR

- Start With the User 
- Find the Right Tools for the Right Job 
- Follow an Opinionated Gitflow 
- Sustain High Quality (Agile)
- Stand on Shoulders of Giants
- Choose Open Source Over Vendor Lock-In
- Cut the Buzz Words
- Design for Scale
- Always Be Learning
- Strive for Automation
- Share Lessons Learned
- Obey the 15-Minute Rule
- Code Readability Over Short Code
- Learn the Tools

## Start With the User 

Every behind-the-scenes decision we take as engineers has an impact on the end user. The impact might be direct (e.g. adding a large dependency), indirect (e.g. fixing a CVE), or specific to a subset of users. But thinking about that impact during every stage of the decision-making process allows us to collaborate with our user-experience team and, when advantageous, pivot our approach. 


## Find the Right Tools for the Right Job 

We have a generalist approach when it comes to programming languages, frameworks, libraries, platforms, etc. We believe that understanding the mission by thoroughly evaluating the problem to be solved is a precursor to selecting the most effective tool chain. Problems like data validation are easier to solve with strongly typed languages (e.g. Scala, Java) rather than dynamically typed (e.g. Ruby, Python). Running an application that needs horizontal scalability on bare bones EC2 won't work as well as containerizing it on Kubernetes. A problem requiring a machine learning model will operate better in an R or Python ecosystem than in most others. Below are some questions we ask ourselves when choosing these tools:

- What are the ecosystems and communities around these tools?
- Will the tools allow us to pivot, iterate, and ship faster?
- Will the tools be around 5 to 10 years from now?
- What is the learning curve for the new members?
- Does the problem we're trying to fix have commonalities with projects we've done in the past? 

## Follow an Opinionated GitFlow 

Once you understand the fundamentals of a Git repository, it is clear why Git is the preferred version control tool. However, learning Git internals takes time and patience. We've seen senior engineers struggle with Git problems that sidetrack them from adding business value. That is why we follow an opinionated GitFlow with aliases, origins, upstreams, separate branches, pull requests, and more. Using an opinionated GitFlow ensures that our engineering team is always on the same page.

## Sustain High Quality (Agile)

Our teams are not pigeonholed into following a specific software development methodology as long as it is [not SAFe](https://software.af.mil/wp-content/uploads/2019/12/CSO-MFR-on-Agile-Frameworks-12282019.pdf). Rather, the cornerstones of our software development principles allow our engineering teams to produce high-quality features quickly.

- Working in short (2 to 3 week) sprints
- Breaking big tasks into smaller tasks that can be validated
- Sprint planning -> Execution -> Retrospective -> Iterate
- Ship it -> Measure it -> Iterate
- Strive for automation.


## Stand on the Shoulders of Giants 

Don't re-invent the wheel. Engineers naturally want to build things themselves, but must understand the costs. What do we gain by rolling our own logging? Building our own Cloud? Creating another CMS? What value is it providing our end users? If there's a specific engineering problem we're running into, we do the research to see if folks outside our team/company have run into a similar problem (chances usually are that they have). This goes back to choosing source solutions that have a strong ecosystem and supportive communities around them. This ensures that we are adding dependencies that allow us to focus on value-driven development. For public facing projects, we prefer to leverage solutions that are readily available: Need to add search? Use [Search.gov](http://search.gov). Need to add Login? Use [Login.gov](http://login.gov). Need to deploy a cloud native application? Use [Cloud.gov](https://cloud.gov). Need a well designed, modern website? Use [Federalist](https://federalist.18f.gov/). Need to deploy a DoD application in the cloud with baked in security? Use [Platform One by LevelUP](https://software.af.mil/team/levelup/)

## Choose Open Source Over Vendor Lock-in

Vendor lock-in is a bloated term that can mean different things to different people. [Martin Fowler has a great piece on vendor lock-in](https://martinfowler.com/articles/oss-lockin.html). To us, avoiding vendor lock-in means that the architecture we decide on should not be dependent on one specific vendor. We should be able to take our application and infrastructure code, then move it freely between cloud vendors if the need arises. However, it does not mean creating our own AWS, Azure, or Google Cloud. We prefer to use open source frameworks and libraries over COTS products that tie our customers into long term contracts with high license cost. [We like this quote](https://www.governing.com/now/Why-Government-Leaders-Need-to-Become-Digital-Leaders.html) from Jennifer Pahlka of Code for America: 
>Buying an app will not ensure the outcomes you want any more than buying a new pair of running shoes will ensure that you finish a marathon. You still have to do the work — every piece of it, top to bottom. 

All engineers are encouraged to contribute their learnings back to the open source by either closing issues, sending pull requests, or updating documentation. 


## Cut the Buzz Words

We're not fans of buzz words. Buzz words are great for helping creative sales teams simplify complicated engineering topics for non-technical folk. However, more often than not, they are misleading and exhibit a vendor bias. For example, this blog is completely "Serverless," but we have no idea whether it runs on AWS, Azure, Bare Metals, etc. We don't throw "Machine Learning" at "Big Data" and expect magical insights. Rather, we focus on the business insights our users desire and work backwards to pick the learning algorithms that will work best over time with the least [Mean Squared Error](https://en.wikipedia.org/wiki/Mean_squared_error).

## Design for Scale 

We work on public facing applications that parse, validate, and ingest over 40 million records in 60 days (with over 80% of the submissions in the last 10 days). While designing applications, we think about how the applications will scale early on in the design process. Throwing cloud resources at a scale problem only gets you so far. We choose programming languages capable of handling concurrency with ease (e.g. Scala), software patterns like Command Query Responsibility Segregation (CQRS), modular micro-services, event driven systems (e.g. Kafka), and platforms capable of keeping up with scale (e.g. Kubernetes). These choices are critical to the success of the applications we work on in the public sector, so we dedicate specific sprints early in the project life cycle to make these engineering decisions.

## Always Be Learning

This is more of a life principle, but the opportunity cost of not implementing it in engineering is quite high. We believe the best way to learn a new tool or a programming language is to find a use case for it and work backwards. We encourage members of our team to learn a new programming language, tool, framework, or skill each year to incorporate into our toolchain. Then each month, we host lunch-and-learns with the team where members are encouraged to present something new they've learn. The team members are also encouraged to learn about the work of their peers and trade places for a month. For example, a DevSecOps engineer can trade places with a Backend Engineer, or a Frontend Engineer can shadow a DevSecOps engineer. 


## Strive for Automation

Any manually-performed, technical task that _can_ be automated _must_ be automated. Automation provides us repeatability, time to focus on value-driven development, assured security, and shorter feedback loops when troubleshooting issues. Each pull request merged into master must go through an automated execution of unit tests, integration tests, code coverage, static code scanning, dependency checking, building, and deploying the container to each development platform. Each image built must live on a private registry which is automatically scanned for high and critical CVEs. Any cron job must be a K8s CronJob, rather than hidden behind SSH. Backups and restores must be automated, recur at regular intervals, and only alert us when they fail. End-to-end integration testing of our APIs using Newman must be automated and alert us when integration tests fail. 

## Share Lessons Learned 

Engineering, especially software engineering, allows for starting small, validating, learning from mistakes, and iterating. Knowledge gained doesn't go far unless there is a formal process for incorporating that knowledge into a document, script, or automated pipeline. At the end of each retrospective, we hold a "dev talk" where each engineer has a chance to share what they learned and how they've incorporated it into our current processes. 

## Obey the 15-Minute Rule

We use a principle similar to [rubber duck debugging](https://en.wikipedia.org/wiki/Rubber_duck_debugging), called the 15-minute rule. If an engineer is stuck on a problem, they step away for 15 minutes. Stepping away could mean simply closing the laptop, going for a literal walk, staring at a wall, etc. The idea is to give the brain time to deeply understand the problem, step through what has already been tried, and come up with a plan for what's next. If, and only if, a team member is still stuck after that, then they'll reach out to another member on the team to hop on a screen sharing session.

## Code Readability Over Short Code 

Rather than writing short unreadable code, we prefer to write code that is readable and well commented. This practice makes it easier for other engineers to step through the code and understand the thought process of the person who originally wrote it. This is especially true when writing code in languages such as Scala, that allow functional programming, as well as object oriented programming. It is easy to use glamorous scala tricks, but it often makes the code unreadable for new engineers. 


## Learn the Tools 

We use opinionated tools like Tmux, ZSH, Git, Aliases, IDEs, Code Editors (Vim, Sublime, VSCode), Tracing, Debugging, etc. Similar to GitFlow, these tools allow us to move fast in feature development and troubleshoot while maintaining high quality. As mentioned above in Always Be Learning, we encourage our engineers to learn, but each engineer should have a core set of tools and libraries that enable them to work efficiently.

