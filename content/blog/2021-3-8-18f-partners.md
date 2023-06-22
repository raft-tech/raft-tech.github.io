---
layout: post
title:  "Raft Helps 18F and OFA Assist Children & Families"
short_title: "Partnering with 18F"
date: 2021-3-8
categories:
thumbnail: /images/featimage/18F-partners_Feature-01.png
author: Marc Phillips
tags: ["DevOPs", "Partners", "Automation"]
---

Hello humans. For a change, let’s talk about something good that happened in 2020. To begin, if you’re not familiar with [18F](https://18f.gsa.gov/), part of Technology Transformation Services ([TTS](https://www.gsa.gov/about-us/organization/federal-acquisition-service/technology-transformation-services)), they’re a group of fantastic people dedicated to making government work better for all of us. 18F helps government agencies build and buy new technology to create better user experiences and improve program results. For example, what do you do if you’re responsible for tracking the results of over $16.5 billion dollars’ worth of annual grants to states, tribes, and territories (STT) and all you have is a system consisting of emails and spreadsheets created during the heyday of Hootie and the Blowfish?  

This was the challenge faced by the Administration for Children & Families’ Office of Family Assistance ([OFA](https://www.acf.hhs.gov/ofa)). Grantees of the Temporary Assistance for Needy Families ([TANF](https://www.acf.hhs.gov/ofa/programs/temporary-assistance-needy-families-tanf)) struggled to get data ready from multiple sources in the format required, with frequent errors requiring multiple rounds of edits and submissions. The burden was similarly felt by OFA team members who had to manually review each submission, and who rarely received the full set of data they needed on the timelines required to properly analyze program outcomes and ensure funds were being put to best use.

## 18F and assisted acquisition

In late 2019, OFA leaders engaged with 18F to perform initial research into their challenge and potential solutions. This led to the development of an [RFQ](https://github.com/18F/tdrs-app-rfq) and multi-phase vendor evaluation process consisting of a written technical approach, staffing plan, and submission of existing open source projects demonstrating prior success through an agile and iterative approach to solving similar problems. Finally, 18F and OFA staff used a remote interview to complete the exercise which began with 37 companies who initially responded and concluded in July 2020 with the [selection of Raft as the best partner](https://18f.gsa.gov/2020/12/17/18f-and-tts-office-of-acquisition-award-first-assisted-acquisition/) to work with 18F and achieve OFA’s objectives to build a modern, secure, human-centered [open source platform](https://github.com/HHS/TANF-app) to streamline the entire process and create better results for children and families.

## Who is Raft?

Named for a [user-friendly consensus algorithm](https://raft.github.io/), Raft is a team of ‘geeks for good’ committed to helping federal government agencies increase their own internal capabilities and deliver maximum, sustainable value for the American public they serve. We are a remote-first company of self-driven, collaborative individuals who believe in open and frequent communication and the philosophy of “strong opinions, loosely held” to ensure diverse perspectives are always present and considered in service of agency missions. Our team consists of industry-recognized architects, engineers, designers, researchers, and product and project managers. We are a Cloud Native Computing Foundation ([CNCF](https://www.cncf.io/about/members/)) Silver member, and the only 8(a) woman-owned small business Kubernetes Certified Service Provider ([KCSP](https://kubernetes.io/partners/)) in the country. Our team members are open source contributors, public cloud solution architects, human-centered design ([HCD](https://goraft.tech/2020/05/20/hcd.html)) leaders, and practical agile innovators. Above all, [we care](https://goraft.tech/2020/06/22/what_fourth_of_july_means_to_me_at_raft.html) about the agency missions and the people they serve. Technology is hard; solving for the complexities of human relationships is harder. These are truly exciting times.

## A plan for success

Transforming the manual-intensive and error prone process into a cloud native, user-friendly TANF Reporting System ([TDRS](https://github.com/HHS/TANF-app/blob/main/docs/README.md)) platform would not be easy. At Raft, we love (and live) our maxims, including “how you begin is how you will end” and “how you do anything is how you do everything.” As such, one of the first goals of our 8-member cross-functional team (distributed across the country) was to collaborate with the OFA product owner (PO) to establish a [shared team charter](https://github.com/HHS/TANF-app/tree/main/docs/How-We-Work) outlining team values, expectations, communication channels, and responsibilities of each team member.

The combined team determined a [Scrumban](https://www.agilealliance.org/what-is-scrumban/) approach leveraging appropriate aspects of Scrum and Kanban would produce the optimal workflow and accelerate desired outcomes given the unique challenges and goals of TDRS. We would leverage [ZenHub](https://www.zenhub.com/) integrated with [GitHub](https://github.com/raft-tech/TANF-app) and work in two-week increments, with project boards for the overall Product Backlog and the Current Sprint and clear WIP limits. We would use an agile, human-centered approach with collaborative, research-based design strategies to engage the PO, program stakeholders, and product users to iteratively discover the “right” product needed to achieve desired program outcomes. Each sprint would start with collaborative planning sessions and end with a demo and review of sprint goals to verify the team had met Definition of Done and Quality Assurance Surveillance Plan ([QASP](https://derisking-guide.18f.gov/qasp/)) commitments for all user stories. Finally, a team retrospective would facilitate transparency, with feedback from these interactive sessions used to add new stories to the product backlog and create a cycle of continuous performance improvement.

## But first, research

Despite its numerous shortcomings, the existing manual TANF data reporting process had been in place for over 20 years and was, if nothing else, the devil everyone knew. Creating an entirely new technology solution would be of limited value if existing users, both grantees and OFA staff, were not brought along for the journey. Digital transformation cannot be designed in a vacuum – new solutions must be discovered through collaborative, iterative processes and co-creation with stakeholders and end users. We therefore began in conversation with the PO to identify the most critical areas to investigate first. Our process was as follows:

* Start with problem definition and persona identification.
* Develop a research plan with key questions, assumptions, methods, ethics and privacy considerations, and expected outcomes.
* Create a conversation guide, participation agreement, and interview protocol to clarify logistics and ensure efficient use of time.
* Use the conversation guide to conduct in-depth interviews and initial design mockups for concept testing.
* Leverage [Mural](https://www.mural.co/) boards to plan and synthesize research, and [Figma](https://www.figma.com/) to create design mockups.
* Use observations and insights from each round to refine and prioritize the product roadmap and documented open questions for future research.

We applied these steps to interview OFA analysts with broad exposure to administrative tasks and data submission scenarios within the current system. As a result, we were able to understand existing workflows and pain points around receiving TANF data submissions and how these experiences compare across the grantees - states, tribes, and territories.

## Build, Measure, Learn, Repeat

Based on our initial learnings, we continued to build out our plan for further discovery and development. Next, we set out to dive in deeper with OFA analysts around TANF report submissions, primarily to identify the most common causes of resubmission and to test the initial admin interface. We produced several artifacts during this exercise, including OFA proto-journey maps, dev-ready mockups, a quantitative data set with grantee attributes, and a guide on how to use this data for future research. Based on what we learned, we set up impactful key performance indicators (KPI) to be measured over time, especially around data quality and error management. Furthermore, we worked with the PO to update the product roadmap and begin prioritizing epics and themes for an MVP release.
User research is an ongoing, iterative process; each round of delivery must not only be tested with users for its own merits, but also in light of the new potential paths each release opens up for future consideration.

For TDRS, our next round of research focused on how grantees receive and compile TANF reports from various information silos. We documented the challenges of coding and de-coding data as it moves through each step. The process was as follows:

* Evaluate two conceptual prototypes that simulate creation and editing of TANF report and assess plain language labels to explain error notification.
* Identify how grantees create new flat files, transmit them to OFA, track the status (e.g., drafted, edited, submitted, re-submitted) and maintain transparency of that status across their teams.
* Document how roles and responsibilities are distributed in grantee teams.
* Synthesize with the OFA data team via affinity mapping.
* Create refined user personas, current and aspirational state journey maps, dev-ready mockups, and an updated process map.
* Update the product roadmap and refine priorities for OFA MVP epics and themes.

## Collaborative co-creation

We are currently planning our next collaborative design workshop with the TANF grantees, focusing on what we have discovered regarding MVP feature priorities. In this workshop, grantees will be invited to validate prior findings and then co-design user flows with our research and design team. A key outcome of workshop will be mock-up designs for our development team to build out and enable further, higher-fidelity testing.

## Focus on user value

As mentioned previously, our partnership with 18F and OFA on TDRS is a multi-phase project which our combined team is approaching with a mantra of iterative value delivery and continuous measurement and validation of positive progress.  

**Clear, shared goals:** Each phase is defined by an outcome-based goal, value to TDRS users, epics and high-level user stories, measurable success criteria, and a completion timeline.

**Keep the end in mind:** The measure of success for the OFA MVP is to operationalize ACF’s access management policy, receive preliminary Authority to Operate ([ATO](https://cloud.gov/docs/compliance/ato-process/)), and submit TANF reports.

**Refine, refine, refine:** Every two weeks, review, prioritize the product roadmap, and conduct a user story mapping session. The epics and user stories from the sessions are added to the product backlog as “thinly sliced” stories.

Throughout the process we we work closely with the OFA PO to ensure we are delivering user value with each release; acceptance criteria and Definition of Done ensure that backend and frontend functionality are delivered together as a functional “slice” rather than as an individual layer, so the user value is clear.

## Shift left...

In the past, critical aspects of product engineering like security and accessibility testing were traditionally left by many organizations to the end of the software development cycle. Even then, they were often performed by isolated teams disconnected from both the “why” and “for whom” the system was being built. Worse still, the lack of understanding and direct feedback regarding such qualities perpetuated ignorant developer practices resulting in critical software vulnerabilities being released in production, and applications that were in many cases simply not usable by large percentages of the users it was supposed to be for.

At Raft, we know that shifting left – bringing testing of all forms as early into the design and development process as possible - creates better products and solves more user problems. This means, for example, that accessibility is considered and addressed at every phase of feature and product development and each team member understands how to apply accessibility concepts to their roles and tasks. Furthermore, we automate the testing and verification process to catch issues early and assist team members in detecting and fixing problems. Here are a few examples of how we ensure we deliver highly accessible software solutions to users while simultaneously streamlining the development process with rapid and low-impact feedback loops and plain language, automated error reporting.  

* Leverage ACF digital standards and the U.S. Web Design System ([USWDS](https://designsystem.digital.gov/)).
* Adhere to [WCAG 2.0 AA](https://www.w3.org/WAI/WCAG2AA-Conformance) and [18F Accessibility guidelines](https://accessibility.18f.gov/) starting at the mockup stage with Figma’s [Stark](https://www.figma.com/community/plugin/732603254453395948) plugin and “[Do’s and Don’ts](https://github.com/raft-tech/TANF-app/blob/raft-tdp-main/docs/Technical-Documentation/rafts-accessibility-dos-and-donts.md)” list including choice of colors, contrast, text size, content hierarchy, annotation of placeholders, and descriptive buttons.
* Automate [Pa11y](https://pa11y.org/) checks in our CI/CD pipeline and manual verifications with [tota11y](https://khan.github.io/tota11y/), keyboard navigation, and screen readers prior to delivery.
* Ensure every frontend user story has an acceptance criteria item to meet both automated and manual [a11y](https://www.a11yproject.com/) checks.

## Automate for the win

Developers should focus on adding value for customers in the form of accessible, intuitive, functional, and secure product and platform features. Product managers and POs should be able to understand project health at a glance, with [plain language](https://goraft.tech/2020/12/22/plain-language-magic.html) details to help them quickly understand and engage with the team on concerns. Therefore, the TDRS team established a highly automated CI/CD pipeline early on to continuously run tests, report code quality, and highlight project health stats.

Our DevOps pipeline includes:

* [CircleCI](https://circleci.com/) infrastructure for continuous integration and delivery
* [Snyk](https://snyk.io/) and [OWASP ZAP](https://owasp.org/www-project-zap/) for continuous security testing and vulnerability scanning
* [Jest](https://jestjs.io/) for JavaScript testing
* [Newman](https://www.npmjs.com/package/newman) for backend API validation
* [Codecov](https://about.codecov.io/) for code coverage checking, which has been maintained at 98%+ throughout the project

We use GitHub badges to monitor Raft internal and government repo health, including build status and frontend and backend security validations and code coverage stats. Not only are we able to shift left for testing and security, we do it in a way that enhances developer productivity rather than creating additional burdens. With each code check-in, the team receives automated, rapid feedback on any issues detected, along with plain language reports to facilitate fixing of the immediate issue while expanding developer knowledge and capabilities to improve future code not yet written. As an added bonus, the TDRS CI/CD pipeline outputs hardened Docker containers to enable easy migration to ACF’s production deployment in cloud.gov.

## We stand on the shoulders of giants

In all of our projects, we work closely with the agency PO and other stakeholders with a relentless focus on setting clear process, maintaining open communications, and creating exceptional program outcomes. We know technology is just a means to the end of solving human problems, and the importance of choosing the right tool for the right job and avoiding the allure of ‘shiny objects.’ We choose to reuse rather than build from scratch. This means leveraging open source – to which we also actively contribute – as well as using appropriate shared services such as login.gov for authorization and authentication. Our priority is to use our knowledge of and skills wielding a wide range of technologies across open source, COTS, and shared government services to orchestrate human-centered, API-first, flexible and extensible, and above all well documented solutions including Architectural Decision Records ([ADR](https://adr.github.io/)) for solving agency problems. We reserve custom code development for innovation and integration, not for reinventing existing wheels.  

## Because we care

At the end of the day, our partnership with 18F and OFA to deliver the TDRS project isn’t about technology or methodology. It’s about helping OFA program staff create better outcomes for children and families. We deliver new functionality each sprint not just to keep up with a story point burndown chart; we do it because we know, based on our user research, the impact each new feature will have on the agency’s ability to better serve the American public. At the end of the day, that’s what really gets us up in the morning.
