---
layout: post
title: "DAGOBAH: Data Governance and Business Automation for Humans"
short_title: "DAGOBAH Project"
date: 2021-07-14
categories:
thumbnail: /images/featimage/Dagobah_Blog_Index-01.png
author: Angela Milash
tags: ["Dagobah", "Data Governance", "Automation"]
---

## What is Project Dagobah?

Project Dagobah was formed out of the Air Force Air University, specifically from the Blue Horizons program, part of the Air Force Center for Strategy and Technology (CSAT) out of the Air War College. Every year a select few (~14) are chosen as [Blue Horizon Fellows](https://www.airuniversity.af.edu/CSAT/Display/Article/2242531/blue-horizons-program/), who then will engage in long term strategic thinking and learning focusing on technology and its strategic and actual implications for U.S. national security. Blue Horizon Fellows engage in a 10-month Professional development Education where they get to learn and are given budget to prototype working technology modeling solutions to the opportunities they identify through their program. Project Dagobah is one of these projects. A SBIR grant is then funded, and in this case, the Raft team, was contracted to build the prototype.

![Dagobah logo](/images/Dagobah_Logo_Animation.gif)

Dagobah is a partnered effort between Raft and Blue Horizon Fellows Major Devon “Devo” Messecar and Major Benjamin “Coco” Heruska, and Airman Coder Alex Grover, of the United States Air Force to spend 6 months and provide a working Proof of Concept of the technical capabilities and a recommendation for how to bridge old, siloed data systems with modern governance and permissions approaches. The Dagobah Project teams Proof of Concept will deliver a tool that Data Owners across the DoD can use to provide other teams across to their data as near-real time data streams with the appropriate permissions applied to protect sensitive data as well as to allow more specific data sharing than is currently possible with the technical capabilities of legacy systems. This enables applications and empowers their users to make faster, highly informed decisions, and can reduce manual work across the DoD through scalable, platform agnostic production quality tools and capabilities. Dagobah provides an Administrators Portal interface, where governance to the enabled data is applied, and a back-end system that is extensible. The system is designed to scale to ~500,000 users (about half the population of South Dakota) and will help mitigate the need for the restructuring of existing databases, or additional exorbitant license fees.

This project is timely and aligned as the Air Force CDO (Chief Data Office), CIO (Chief Information Officer) and CAO (Chief Architect Office) offices are aligning their approach for Data Federation and Data Sharing. Point and case, the DD, and [Pentagons recent directives](https://www.c4isrnet.com/battlefield-tech/it-networks/2021/05/11/new-pentagon-directive-to-manage-gobs-of-data-make-it-all-sharable/) for making data shareable across communities of interest, as well the [DoD CDO’s charter to execute the Digital Modernization Strategy](https://www.defense.gov/Explore/News/Article/Article/2226020/dods-chief-data-officer-aims-to-deliver-data-reform/) and empower joint, all-domain operations, and the [Air Force CDO’s recent move to train and certify data governance personnel](https://www.af.mil/News/Article-Display/Article/2478289/daf-chief-data-office-launches-unprecedented-data-governance-training-certifica/).

The Dagobah Systems Proof of concept build was initiated in January of 2021, and Raft developers, designers and Product Leaders are partnered with Airman coders, like Alex “Tree” Grover, and Major Benjamin “Coco” Heruska, to design and build the system. The V1 Proof of Concept build will finish in July of 2021. The Raft team continues to survey Data Owners around their pain points and find valuable use cases where cross-functional data success could be an asset to warfighters and decision makers. The feedback has been resoundingly positive that there is a real need and desire for this solution, and the value add is high.

In May, 2021 Dagobah was demonstrated to the Chief of Staff of the Air Force, as well as folks across the Air Force CIO and CDO, as well as Key Leaders at the Pentagon. The Air Force and DoD Leaders are marshalling their vision and efforts towards comprehensive Data Federation and Access. The team at Raft continue to promote and support the effort in every way we can. Raft’s Blue Horizon Product Owner Partners Major Messencar and Major Heruska will graduate their fellowship program, and move on to Space Force, and Directing Operations for the 33rd Network Warfare Squadron, respectively.

**View or Download the [Dagobah One Pager Overview .PDF](/assets/downloads/Dagobah_One-Pager_05102021.pdf)**

### So, What Does Dagobah Do?

Dagobah enables Federated Data Permission by delivering streaming data from formerly siloed systems to Applications and their users by applying attribute and Policy Based Access to data that is managed and controlled by different governing bodies and teams. The data is streamed and transformed then tagged to ensure data protection and to allow data sharing at the field level. Then Data access roles and policies are created to define who can see data with which tags.

This solution will allow the Air Force and DoD to make use of modern technical capabilities for data analysis and access while they undergo the process of updating the underlying tech serving up legacy systems, allowing them to begin to federate data access now, rather than wait until all data is stored and managed centrally.

The Policy Based Access approach enables users and systems to have more granular access to cross functional data than was previously available based on the separateness of the different systems data is stored and managed within, and the permissions policies being based on systems, rather than data. With Policy based access approaches, we can protect the data based on broad and granular data tags such as Community of interest, Impact Level, Class, Sensitivity level, and associate the data protection tags with roles. This not only creates granular protections and permissions but enables easier management of permissions. When you have a role-based policy, the access is decoupled from a person. As a person’s role changes their access will also, and therefore some of the access management becomes automated. With a user base of ~500,000+ the impact is significant to both data protection accuracy and overhead.

### What Problem(s) is it solving?

Beyond general ease of management and access that comes along with moving towards data federation there will be a host of very specific pain points Dagobah can help with. We surveyed Commanders and Data Owners asking questions about the impacts to Command of having data in many siloed systems on their daily operations and their ability to make decisions, both to support teams and to prepare for and operate missions. Additionally, we performed a series of user interviews and continued research to identify current data owners/stewards, and their pain points. The following synthesizes summarizes broad themes of pain points we heard during our research:

- Too Many Systems

- Legacy System Performance Suffered – Including availability, performance, and inconsistent browser support.

- User Interface Issues for Users – Including Poor Data Quality and usability. Lack of Data Searchability and Unusable Data Outputs, lack of ability to export and aggregate easily leading to lots of manual workarounds.

- Access Issues – Including insufficient permissions, cumbersome manual processes to gain access that could be automated.

- Administration could be better enabled - The current Administrators of the databases are not charged with this as their primary duty, it is a secondary responsibility. This calls for the need for training and empowering a new class of Data Administrators, which the CDO is working on. The administrators are often not provided the technical training or chosen because of their technical acumen. In the future they could be certified and specialized.

The surveyed Commanders wanted to spend time and have the technology available to do predictive analytics, trend analysis, and have seamless access to the records of their team(s), so they could better support their career growth and be successful mentors and leaders. With Federated Data Access these leaders could be leveraging data to make new insights rather than doing manual workarounds to accomplish their base level duties. This is in keeping with general industry trends and capabilities available in private and commercial sectors for data standards and enablement.

![Dagobah Synthesis](/images/Dagobah_Synthesis.png)

_Diagram of the broad pain-point themes discovered from the Commanders Survey._

## Who does this impact?

Felt impacts from these issues has resulted in lots of time spent trying to gain access or dealing with down systems, manual workarounds to data comprehension, time spent manually aggregating data into spreadsheets to gain insights - rather than time being spent developing strategies, making decisions, and managing personnel based on insights that come from data. These issues impact Commanders, Air Force Leadership, Airmen, and data owners/operators/beneficiaries (or Data Citizens). Our research shows that for some commanders or their staff 10-40% of their time is spent on manual work arounds to aggregating data from disparate systems. Note that data aggregation and even data analysis is not part of the Commanders job role - making sound mentoring and mission readiness decisions based on current cross functional data is.

There were several startling anecdotal impacts to having data in many places and limited access to that data reported. Notably:

### Delays

> "We contacted those with access and attained the information. Result was a time delay."

> "Slow/late admin actions, which can have negative career impacts."

> "Frustration, lost hours of work, lots of wine"

> "Delayed payments of death benefits to an airman who lost a child because we couldn’t see if they had life insurance or not."

> "There was a delay in getting the mission accomplished."

> "Missed application deadline that required ROPs [because of time spent by the Airman to aggregate data from so many systems, and Commander didn’t have direct access to that data]"

### More work for more people

> "Exceeding time allocation and duplication of effort by squadrons"

> "Having to hand jam datasets for thousands of observations a week"

> "Inefficient use of valuable front office and unit member time"

> "I had to wait a day or so until I could come back to the task."

> "Had to spend extra brain bytes trying to figure it out when it should have been easily accessible"

> "I would end up taking my laptop home and trying to access later in the evening."

### Mission Impacts

> "It also makes it difficult to establish checks and balances in our processes"

> "Mission overlap, gaps, and potential Blue v Blue mishaps due to lack of an integrated Blue Force OB"

> "Limited awareness of TFAT completion as a CC program; delayed mission analysis"

### Difficulty in managing personnel

> "Inaccurate manning requests for the unit; and thus, could not take care of our people or report correct to HHQ"

> "Not recognizing personnel or providing feedback to a member prior to public release"

> "Failed supervision changes and MSEL errors gir SCODs"

There have been external communities and channels created to support as a secondary externality of Commanders not having direct and comprehensive data access for their reports (on Facebook and Reddit). A Commander mentor said that in order to support a suicidal Airman, they reached out to them on Reddit groups that have evolved as a stop gap from having readily accessible data, which has impacted Commanders’ ability to mentor directly.

These are a just a few examples of the tangible impacts of not having federated, consistent, and granular data access easily available to people in roles where having data access and insights for making critical descisions to support airman and missions is necessary and essential. There are many opportunities across the Air Force and DoD where having Federated Data Access and policy-based access is enabled will act as a force multiplier for leadership.

There is another set of valuable potential use cases that for having federated policy-based access to streaming data (or real time data). Data that is needed for making real time strategic decisions for warfighters in theatre. Command and operations could gain insights from supported data sets they previously had no access to because the data was in siloed databases and access was blunted by the capabilities (or lack of) within legacy systems.

## Opportunities for Impact

Below are a few use cases that demonstrate the opportunities of having federated data:

- **ROP's**- If Records of Performance (ROP) were accessible in one system or location, as a single record, and the Airman of record was able to give their current commander access to that record data in an automated (or even manual way), this would save thousands+ of Airman tens of hours of data gathering and manual aggregation for collecting these records every time a review, mentorship opportunity, or promotion was possible/needed.

- **Procurement Effectiveness** - Imagine if a purchasing team wanted to identify cost savings opportunities for any number of procurement items across communities. If one had access to information about not only what devices were being purchased, but the cost of them and the suppliers, imagine the insights that could be gained from having access to the data across those communities. A purchasing analyst could see areas to streamline costs by purchasing in bulk or identifying similar devices that cost less.

- **Et al** - Imagine any scenario where it would be useful for a team or decision maker to have access to the non-sensitive pieces of data from cross-functional communities of interest to gain insight or do analysis to find opportunities for growth, efficiency, or strategic enablement.

We saw and heard numerous use cases for impact even in our limited scope of 6 months of research. When commanders are able to spend more time utilizing insights and intelligence from data that is aggregated and protected and filtered cross functionally - _rather than manually aggregating data and rather than spending 10-40% of their team and their support staffs time manually copy and pasting data to aggregate it_ (or flying around the world with briefcases for 3 years in order to pull together data for analysis. True story, ask Major Messencar about this), we gain true efficiencies for the warfighter and general defense capabilities.

## What is next for Dagobah? (Roadmap)

The initial Raft SIBR ends in June 2021. To realize the promise of Dagobah in helping to reduce data silos and enable more granular federated permissions across the Air Force and DoD, the following institutional support is recommended and will be needed.

- **An Org of Record** - One the DAF (Department of Air Force) and DOD (Department of Defense) define and fund who will own and operate the technology for delivering Data Federation, the capabilities of Dagobah can be extended and integrated with other Data Federation efforts.

- **Pilot and Adoption** – V2 can take the form of solving for one discrete use case or set of use cases to deliver and Dagobah features can be refined throughout this Pilot. Following that data can be onboarded and enabled through applying governance via the Dagobah Admin Portal, and applications and their users can begin to consume enabled data.

- **Qualified Admin Users** – Identification and empowerment of Data Owners and the folks who will use the Dagobah Admin Portal will need to be critical for onboarding data to ensure proper permissions policies are applied and built within the System as data is enabled and released.

- **Product Support and New Feature Development Team(s)** – as the System is adopted there will need to be team(s) identified to own support and extend the onboarding, data enablement, and integration with other Data Federation technical capabilities.

The Dagobah team is confident and excited about the value of Policy Based Access for the Air Force and DOD.

> “For the past ~5+ years I have seen and built Enterprise Data Federation Solutions and Secure Data Platforms, supporting Digital Transformation efforts in the Private/ Corporate sector. The DAF and DOD (Department of Defense) are right on track with their modernization efforts. It is exciting to see the momentum within the leadership be so aligned. I look forward to continuing to realize the vision for Defense Leadership and Warfighters to make better decisions more quickly by enabling better data access.” Angela Milash, Raft's Dagobah Product Manager

The Raft team is committed and stands ready to continue supporting Data Federation in partnership with DOD and DAF teams, and to deliver and extend capabilities that empower and enable Airman and Leaders in this important effort. We wish our Blue Horizon Fellows all the best success in their next ventures, we know they will succeed and provide value through their service wherever they are.

## The Dagobah Project Team Members

Major Devon "Devo" Messencar - Product Owner

Benjamin "Coco" Heruska - Product Owner & Technical Lead

Alex "Tree" Grover - Airman Coder

Angela Milash – Raft Product Management Lead

Nick Grippin – Raft Technical Lead, Sr. DEVSECOPS Engineer

John Willis – Raft Full Stack Engineer & Solution Architect

Ethan Bienstock – Raft Sr. Data Engineer

Dmitri Knapp – Raft Sr. UX Researcher and Designer

Marc Phillips – Raft Customer Success Manager

Bhaarat Sharma - Raft CTO

Shubhi Mishra – Raft CEO
