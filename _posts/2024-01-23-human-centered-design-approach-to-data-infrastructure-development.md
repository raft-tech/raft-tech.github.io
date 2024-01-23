---
layout: post
title: "A Human-Centered Design Approach to Data Infrastructure Development"
short_title: "A Human-Centered Design Approach to Data Infrastructure Development"
date: 2024-01-23
featimg: /assets/images/featimage/HCD_datafabric_thumbnail.png
bgimg: /assets/images/featimage/HCD_datafabric_thumbnail.png
author: Kristen Shaw, Michael Smith
---

## Introduction

Raft’s Human-Centered Design (HCD) approach focuses on the User Experience at the data layer to support warfighters and facilitate mission enablement. Approaching the design and development of the data infrastructure of a complex system with a human-centered mindset improves the user experience for warfighters by proactively identifying and solving pain points related to data, improving Operator efficiency, reducing cognitive load, and reducing manual, time-intensive tasks.

Often, when we think of User Experience (UX), we think of the interaction between the human and the system via the User Interface (UI). However, it’s important to remember that User Experience encompasses all aspects of a user’s interactions with a system, including how they individually use the tool in their role and in their physical environment, how the system is leveraged by the larger organization construct in a complex and dynamic environment, and the technology subsystems that interact with the system to send or receive data.

In the diagram below, the Operator’s activities both influence and are impacted by the tools, people, and processes in their environment. Raft’s HCD approach ensures that we deliver innovative technology solutions that ensure seamless data integrations to meet the “big picture” needs of the mission, and optimizes the data delivery, availability, and discoverability to elevate the capabilities of the Operators. To accomplish this, Raft places the Operators at the heart of the design and development process. We strive to deeply understand the needs, behaviors, and experiences of the warfighters to create innovative solutions and craft user experiences that are tailored to their unique challenges and preferences that give data meaning and making it actionable.

![HCD Data Fabric](/assets/images/hcd/hcd-flow-1.png)

## User Interface: Medium For Interacting With Processes In The World

On one level, a User Interface (UI) is where interactions between the user and the software happen. But on another level, the UI is the medium through which the user interacts with the processes or parts of the world they are observing and controlling. By analogy, the driver of a car is operating the steering wheel and pedals, but they are also moving a car within the physical environment. More complex technology offers a thicker medium of interaction with a greater reach, increasing the range of things that a human Operator can monitor and manipulate and the speed with which they do that. With the development of such technology, it is important to widen the aperture on what is often considered to be the “user experience” and shift UX methods and approaches left, in both the project timeline sense and as means of creating a positive and holistic user experience that is meaningful and valuable. The ‘thicker medium’ is not just the visual user interface but also other parts of the system that extend the user’s interaction with the processes or parts of the world they are working on; it is where users are able to make sense of the data, and where data transforms into meaning.

![HCD Data Fabric](/assets/images/hcd/hcd-flow-2.png)

## CBC2 And Raft’S Data Platform

Raft’s work on ABMS CBC2 solution is an example of shifting left on UX to beyond the visual interface, guiding the design of the data infrastructure and applying a HCD mindset to our solution development.

To make good decisions, Operators need information about the state and location of different forces, availability of resources, conditions in the environment, presence of civilians and infrastructure, etc. This information comes from a wide variety of sources, including radar, visual object recognition software, sensors, and databases. The data from these sources is part of the window through which Operators can see the battlespace.

The challenge is not only to get the right data to the right person (or computer agent) at the right time, but also to get it in the right format, with the right metadata, and as part of the right set of data. This is what Raft’s *Data Platform* – known as Comms Broker – is designed to accomplish. It pulls in information from all different sources and integrates the information to provide Operators with an accurate and up-to-date view of the battlespace. It is part of the effort from the USAF C3BM office to enhance warfighter capabilities through the seamless integration and coordination of military activities.

## Design To Support The Cognitive Work Of Warfighters

Comms Broker is not simply a hub for receiving and passing on data. It transforms data into usable information. The formatting and integration are critical to support the cognitive work of the Operators in the air defense sectors and regions. If the data were delivered in the same format it was generated, it might not be easily readable. If it were presented by itself, without other relevant information or without metadata indicating the recency and applicability of the data, it would be very difficult to interpret and act upon the data.

To properly design the formatting and integration, we have conducted research to explore, for particular Operator roles in ABMS CBC2, these key questions:

- What information is most important for the warfighter to sufficiently understand situations and make decisions?
- What format will make it easiest for the warfighter to quickly assess what is most meaningful in the data?
- What additional information is necessary for the warfighter to assess the accuracy and relevance of the data?

Understanding the Operator personas and gathering answers to these questions is what it means to apply Human-Centered Design principles to the design of data layers and truly consider the User Experience that encompasses all aspects of the warfighter’s interaction with the system. It is building empathy and understanding through researching the users’ needs with broad exploration of the mission domain, operations tempo and work environment, formal and informal work structures and processes, tasks, roles, and responsibilities, and the variety of individual user preferences, behaviors, and expertise. We use the knowledge gained to generate designs to support the users’ cognitive work, minimizing pain points and risks of error while maximizing efficient and resilient performance.

## Raft’s Approach To UX At The Data Layer

### Building empathy, understanding the problem space, and generating requirements

The key needs we have identified include reducing the cognitive load of Operators, reducing the time required for the completion of certain tasks, and reducing the risk of errors to increase mission effectiveness.

We take what we are have learned about the work, the users, and the technical and operational environment, and we narrow in on the key leverage points in the problem space, framing these in terms of system requirements.

We articulate the data needs for making decisions and assessing situations.

Additionally, we identified requirements for data formats, entity merging/data fusion to support the Operator’s needs for information displayed on the Common Operating Picture (COP), and speed and performance requirements for the execution of operations.

Some of the key problem sets revolve around integration of data from multiple sources to support principal Operator cognitive functions: situational awareness of the air picture, assessing and analyzing potential threats, responding to events, reporting and debriefing, and communicating across sectors and with external agencies.

### Ideation to explore the solution space

We broadly explore possible design solutions to the problems and requirements, considering the capabilities available through our (Raft’s) development of the data layer. We conduct iterative prototyping sessions to engage with and refine concepts.

For *Comms Broker*, potential solutions include:

- Statistical and ML methods to assess reliability of data, to interpolate missing data, and predict near-term future data
- Validate data integrity through continuous AI/ML for Cyber Ops
- Tools to help with review of past events for reporting, future planning, and organizational learning

Many of these solutions envision a shift in the Operator’s role, from primarily accessing stove-piped data to primarily supervising automation that does most of the low-level data capture and calculations for these functions.

### Testing design hypotheses through validation

We check these possible solutions against reality, through qualitative and quantitative user feedback, and interactive prototypes to evaluate designs with end users and other stakeholders. For *Comms Broker*, we have been engaging in regular design review sessions with warfighters.

An important element of validation is to take requirements and turn them into success metrics. Some examples of indicators for user support via the data layer design are:

- Does the output of the data fusion match what expert Operators would expect, based on the raw unfused data?
- How well does the fused data support an Operator’s making sense of what is happening (i.e., situational awareness)?
- Is Operator mental workload (i.e., NASA Task Load Index (TLX)) reduced with the data fusion capabilities?

## Benefits Of UX For Data Layers

By including the data layer, not only the UI, in the UX design process for supporting the cognitive work of the Operators, overall mission performance will be improved.

We expect impacts in these areas:

- Operators are more efficiently performing in their roles, due to reduced time spent on manual data comparison, copying, calculations, and similar time-consuming tasks
- Operators are able to respond faster to events with easier comparison of data sources, which will improve the ability to assess the trustworthiness of the data and determine appropriate courses of action
- Operators will have an improved ability to maintain situational awareness, due to better integration and formatting of information, and due to reduction in the Operator’s burden of vigilance (the Operator will not have to spend as much time monitoring for occasional signals of suspicious aircraft against a noisy background), thus reducing cognitive load and providing Operators capacity to do more in less time

These benefits will lead to better and faster detection, assessment, and response to suspicious aircraft. This in turn will facilitate the overall ‘kill chain’ response to threats, and decision superiority.

## Conclusion/Take Away

Good design of the data integration layers is essential for mission performance. Raft’s *Data Platform* provides integration and formatting of information that matches the cognitive requirements of ABMS CBC2, and distribution of information that matches the coordination requirements of ABMS CBC2. This is the product of shifting UX to the left of the product design to encompass the data layer.
