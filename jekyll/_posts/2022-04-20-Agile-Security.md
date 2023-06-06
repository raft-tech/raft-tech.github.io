---
layout: post
title: "How Do You Make Security Agile?"
short_title: "Agile Security"
date: 2022-04-20
categories:
featimg: /assets/images/featimage/DEFx Boston Poster_cropped.jpeg
bgimg: /assets/images/bgimg/DEFx Boston Panel.jpg
author: Alex Floyd Marshall
---

## Some Reflections From DEFx Boston 2022

Ever have those moments where you realize something that in retrospect was incredibly obvious, but you just had never put together before?

On April 7th, a group of Rafters attended the DEFx Boston conference about innovation in the defense ecosystem. Behind most of the talks was an assumption that innovation emerges from some sort of “agile” process (by whatever name, still as sweet). I’ve [written before](https://goraft.tech/2022/02/07/Agile-Is-About-Measuring-Your-Turning-Radius.html) about how that term can be overloaded to mostly just mean we’re moving fast and automating things, while in reality, it should mean that we are creating feedback loops that present us with data to drive a process of continuous improvement. Keep that in mind.

The day started for me (after being stuck in Boston traffic— can we get some innovation around that?) with a talk by Karen Hold on Design Thinking and its role in innovation. The way she framed it, we start with observations, then we form a hypothesis to test (a “minimum viable concept”), then we test the hypothesis, and finally we collect data on that to refine our hypothesis and continue the cycle. And it suddenly hit me: the agile process of “continuous improvement” is the application of the scientific method to business/design/problem-solving/etc. I mean, of course it is! How obvious in retrospect. But also: how easy it is to lose sight of a centuries old paradigm for research and discovery amid all the buzzwords that form today’s startup ecosystem.

This unlock is powerful for a few reasons:

1. True scientific research is aimed at answering questions or solving problems. As such, the “observations,” “hypotheses,” and “data” collected are all about the subject matter. If I’m studying trees, I observe trees, I come up with a hypothesis about trees, I design a study to test that hypothesis on actual trees, I collect data on how the trees respond to the study. How does that translate to our business/tech/design ecosystem? An agile/scientific process is going to be grounded in observing, experimenting _with_ (not on), and collecting data from the target audience of the innovation we are driving towards. Another way of saying this: **truly agile/scientific business development is inherently empathetic to its target audience.** To drill down a little further: “agile” is applying the scientific method to business. It’s not pure computer science/technological research, it’s inventing ways to solve real human problems. As our own CEO, Shubhi Mishra, shared in her talk later in the day: it’s not about ivory-tower expertise in a technical subject, it’s about a willingness to solve problems _for our customers_ creatively using different angles and approaches. That’s the power of empathy here, keeping us grounded in the business goal of the work, not the elegance or technical “correctness” of a given implementation.
2. Scientific research never starts with a comprehensive theory of everything. It starts small and works its way up. Early experiments are often simple and are very, very targeted in the data they are collecting. In other words, they are MVPs, not finished/polished deliverables. As Karen put it, “perfection is the enemy of innovation.” Another way of translating this to business: **if you already know the end state of the product/service before you do any experimenting/testing of hypotheses, it’s not agile.** That doesn’t mean it’s a terrible business. Plenty of very successful businesses are implementations of a known formula. But to be agile, your offering needs to be the product of learning from lots of small experiments, and that means starting with the unknowns.
3. Scientific research is not necessarily fast. A study could take years, maybe even decades to complete. But it is methodologically robust, reproducible, and grounded in real-world data. As a result, what is (often) fast in scientific research is knowing what the next step should be, what the next question is that needs to be answered. That’s what agile is all about, too: it’s about learning from the information you collect so you can quickly and (most importantly) accurately decide what the next move for your business/product should be. Put another way, **[agile is about your turning radius, not your 0-60 start time](https://goraft.tech/2022/02/07/Agile-Is-About-Measuring-Your-Turning-Radius.html).**
4. There’s a reason agile has so often coincided with -aaS (X-as-a-Service) business models. In a scientific study, you want to leave as little to chance as possible. So you tightly control all the inputs and focus your attention on the small number of “variables” you are testing (usually just one). Translate this to a design/technological context, and you get the concept of “abstraction.” **We “abstract away” as many of the implementation details as possible so that it’s only the pieces we want to test that are under the target audience’s control.** How do you turn “abstraction” into a business concept? One way is to supply all those implementation details as-a-service, taking them out of the user's hands.

That last one has had me noodling a bit in the days since the conference. I’m a security engineer working to support an existing team doing innovative software development within the DoD space. My job isn’t so much to invent new things out of whole cloth (what we usually think of as innovation) as it is to protect the developers who are and the things they produce. _But_ at the same time, I must be able to keep up with their pace of development if I’m going to keep them and their work secure. That means being able to adapt the security we provide to a rapidly changing set of inputs. To me, that sounds like an environment where an agile/scientific approach would be highly beneficial.

## So How Do We Make Security Agile?

First, we need to **understand, and empathize with, our audiences.** In my context, I have at least three:

1. The **developers** I work with, who want their products to succeed and their development cycles to remain agile. Security can’t be a roadblock, or they’ll just find a way around it.
2. The “**assessors**” who are deciding whether the products those developers make are going to get authorized for deployment in secured environments.
3. The **end users**, defense professionals who are going to rely on these products to do their jobs, and who are counting on the products being secure when they use them.

I also like to think I have a fourth audience: all the citizens of countries who are relying on those defense professionals to keep them safe. They are somewhat proxied through the assessors, who are standing in for the people to say “yes, this is going to work to keep us safe” or “no, try again.”

Second, we need to **figure out how to abstract away as much of the security process as possible**. The DEFx Boston day ended with a talk about cATOs (Continuous Authorities to Operate) by Bryon Kroger. One of his main points was exactly this: to maintain a Continuous ATO, you need to have a base level of security controls built into the systems and platforms you are using so that the developers building applications on top of those platforms inherit those controls from the start. How do we abstract away security? We bake it into the infrastructure on which our developers do their work, whether that be the laptops they are coding on or the cloud platforms they are testing and deploying to. We make it so that this shared infrastructure is inherently secure such that developers don’t need to do anything to activate or turn on that security and, ideally, can’t do anything to turn it off. This has at least two key benefits:

1. Abstraction also gives us the ability to make needed changes to platform/infrastructure security without requiring application teams to do anything themselves. In other words, security for everything below the level of their code is being provided “as a service”.
2. Abstraction pushes security “experimentation” to the level at which our application developers are experimenting. Now the only things we are “testing” in the security space are in the realm of the actual products being developed.

Third we need to **understand how to measure “security”**: is it by measuring compliance with a set of standards? Do we measure it as a cost-benefit tradeoff between the potential financial risk of an attack vs. the actual cost of implementing a control? Do we measure it as attack surface reduction? Or as a reduction in actual attacks/incidents experienced by the org over time?

Building on the notion of empathy with our audience(s) and abstraction of common infrastructure so that we are left with the “variable” space of the applications we are developing gives us some guidance here. There’s a common core to the goals of each of the target audiences we’ve named: getting the application delivered. The application cannot be delivered if it doesn’t (a) meet the needs (including security needs) of the customers, (b) pass the requirements of the assessors, and (c) get developed by the developers. This helps us establish a core set of requirements (what security elements must be included in this application). We could claim that’s what we’re measuring in “security,” but really that’s what the assessors are measuring when deciding go/no-go on any given app.  

What else can we measure? How about **how effectively each of our stakeholder audiences can implement and/or validate the security requirements from their point of view?** In other words: how effective are our developers at creating secure applications? Is meeting security requirements a bottleneck or does it fit naturally into the rest of the application’s development? How much visibility do our assessors have into the implementation of those requirements? Are they able to make informed judgments about whether the requirements have been met? How confident are our customers that the information provided to them about the security of the product is accurate? Are they able to verify it? Do they need to do anything to implement security on their side? If so, how effective are they at doing that?

Here’s the take-away:

1. The questions I’m asking above are all aimed at the “application” space— they are operating in the “variable” realm of the product we are delivering. Meanwhile, the security of the infrastructure underlying that product has been abstracted away.
2. These are all questions around which we can design tests and experiments to improve the experience and effectiveness of each team/audience.
3. The end goal here is not to make the security team responsible for ensuring every bit of code the developers produce is secure before it ships or that every user of that code is following “best practices.” That’s up to the developers and the end users. It’s up to security to give them the right tools and conditions for that to happen. In other words, what we’re trying to find in our experiments is “what can we supply that makes developers more effective at creating a secure app?” And “what can we give assessors that makes them more effective and determining whether an app is or isn’t secure?” And “what can we give end users to make them feel confident this app is secure and/or make it easy for them to use it in a secure way?”

So finally, we need to **design and run some experiments**. Let’s try an example aimed at developers. It’s become a mantra that we should “shift security left.” What I take that to mean is we want security to be part of an application early in its development cycle, not bolted on at the end. From a developer perspective, this should be a big win: if we build something only to be told we must completely refactor it to meet a bunch of security requirements, that’s major time/effort wasted. So, one way of framing “shifting left” is “how can we empower developers to build apps that are secure so that they aren’t blocked in their work by needing to fix security bugs later?” So how could we do that? We form some hypothesis and we test them against the actual results of our development teams. Here’s a few we might try:

- Providing developers with training on “secure coding” practices/how to write code that avoids common security pitfalls
- Developing a set of pre-commit hooks installed on developer machines that will prevent them committing code that follows the pattern of known security bugs
- Supplying a library of code snippets developers can copy and paste from for common patterns that are known to be recurring places of security issues
- Supplying base libraries/SDKs that developers can build off which have already been “pre-secured”
- Supplying scanning tools in CI/CD pipelines that alert developers to security issues in their code when they are running tests before merging/pushing code out to production

Each of these are things we could “test” to determine if they improve the rate at which developers get sent back by assessors to fix security bugs in their code. And if our tests show improvement in those outcomes, we can drill deeper, figure out what makes those solutions the most effective, and increasingly optimize the developer experience of security. As a result, developers will be shipping more secure apps more quickly. That’s what an “agile” security program in a software development shop can look like.

## Summary

Here’s the TLDR version of everything I’ve just said:

1. “Agile” is the scientific method (observe, form hypothesis, test hypothesis, collect data, repeat) applied to business. Implication: if you aren’t forming and testing hypotheses, you’re not agile.
2. Scientific studies want as small a set of variables as possible, so they “control” everything else. Translate this to business: abstract away everything except what you want to experiment with by providing the underlying details “as a service.”
3. To abstract away security in a software development shop, provide secure infrastructure on which developers can build so that the only “variables” are in the space of the applications they are creating.
4. What kinds of hypotheses and experiments can you run in that application development space? Try testing and developing tools/strategies that make your developers/assessors/end-users better at securing what they build/assess/use.
5. Oh, and somebody please fix Boston traffic.
