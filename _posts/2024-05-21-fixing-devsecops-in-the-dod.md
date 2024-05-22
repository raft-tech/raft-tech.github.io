---
layout: post
title: "Fixing DevSecOps in the DoD"
date: 2024-05-21
featimg: /assets/images/featimage/inigo_montoya.jpg
author: Dagan Henderson
---

There are two very different definitions of DevSecOps in broad usage within the U.S. Department of Defense, and almost nobody seems to realize it. Unknowingly , entire organizations have been built around the term, resulting in whole departments talking past each other.

“You keep using that word. I do not think it means what you think it means.”
—Inigo Montoya

Let’s take a look at the two definitions and why the DoD needs to rethink software factories in order to meet the needs of the applications warfighters need today.

## Definition One: DevSecOps is Security Automation
“The main characteristic of DevSecOps is to automate, monitor, and apply security at all phases of the software lifecycle.”

—DoD [DevSecOps Reference Design](https://ac.cto.mil/wp-content/uploads/2020/05/DoD-DevSecOps-Ref-v1.0.pdf), v1.0

“The goal of DevSecOps is to improve customer outcomes and mission value through the automation, monitoring, and application of security at every phase of the software lifecycle.”

—DoD [DevSecOps Fundamentals Guidebook](https://dl.dod.cyber.mil/wp-content/uploads/devsecops/pdf/DevSecOpsTools-ActivitiesGuidebook.pdf), v2.0

By this definition, DevSecOps is very specifically the process of securing applications. In short, DevSecOps enables faster feature delivery by automating the security bits.

## Definition Two: DevSecOps is DevOps + Security

“Under a DevOps model, development and operations teams are no longer ‘siloed.’ Sometimes, these two teams are merged into a single team where the engineers work across the entire application lifecycle, from development and test to deployment to operations . . .”

—[Amazon](https://aws.amazon.com/devops/what-is-devops/#:~:text=DevOps%20is%20the%20combination%20of,development%20and%20infrastructure%20management%20processes.)

“DevSecOps is an evolution of DevOps that weaves application security practices into every stage of software development.”

—[GitLab](https://about.gitlab.com/topics/devsecops/)

By this conflicting definition, DevSecOps is an evolution of DevOps that incorporates strong security practices throughout the DevOps-driven software-development lifecycle.

## How We Got Here

Skipping the long [history lesson](https://everythingdevops.dev/a-brief-history-of-devops-and-its-impact-on-software-development/), [DevOps](https://en.wikipedia.org/wiki/DevOps) was born out of the 2006–2009 era of X as a Service:

 * In 2006, AWS, Facebook (public availability) and Twitter all launched.
 * In 2007, iPhone was released, Airbnb launched, and Netflix introduced streaming.
 * In 2008, the Apple App Store launched, and Android was released.
 * In 2009, Uber launched, and AWS introduced RDS.

 Developers were moving away from shipping software (e.g., either in a box or via downloads) and towards deploying software. At the same time, there was a global financial crisis driving [mass layoffs](https://www.bls.gov/opub/ted/2011/ted_20110504.htm) and [diminishing venture funding](https://news.crunchbase.com/startups/lessons-from-2008-how-the-downturn-impacted-funding-two-to-four-years-out/). Teams were getting smaller and needed to spend less on infrastructure. The drivers for innovation were all there, and DevOps was born.

“All that we have is what is currently deployed, and any old versions don’t really matter anymore.”

—Flickr’s [Paul Hammond, 2009](https://youtu.be/LdOe18KhtT4?t=968&si=GF18_ZH_-cW5HlzM)

In the “as a service” paradigm, delivering reliable code into production became the single most important activity, and that is exactly what DevOps culture, philosophy, and tools were created to do. DevOps was the practice of enabling application teams to deliver outcomes in production.

## DevSecOps in the DoD

“It is shocking that the U.S. Department of Defense has not yet adopted this new thing that startups the world-over are embracing!”

—Literally Nobody. Ever.

AWS launched its C2S Secret Region in [late 2017](https://aws.amazon.com/blogs/publicsector/announcing-the-new-aws-secret-region/, eight years after the start of DevOps and [a year after](https://trends.google.com/trends/explore?date=2006-01-01%202024-05-17&geo=US&q=DevSecOps&hl=en) the DevOps evolution to DevSecOps. That was the first time at which large-scale X as a Service was even a possibility for the DoD. Introducing DevOps to the defense ecosystem at that point was as revolutionary as DevOps was to the tech sector a decade earlier—minus the economic driver of a global financial crisis.

So what made the DoD bite? Security. Plain and simple. The security tools developed for the DevSecOps ecosystem tempted security teams everywhere by promising automated, constant visibility into applications’ risks. At that point, defining DevSecOps as automated security was entirely understandable. In the defense tech ecosystem, security was the sole driver of the adoption of DevSecOps tools.

What happened next was the DoD’s CIO office began seriously evaluating the value of DevSecOps (DevOps+Security) and investing in the evolution of software development within the DoD. Industry experts from outside the DoD were consulted and hired to help lead the effort, and they brought with them the decade plus of experience with DevOps+Security. Inside the massive DoD, though, DevOps had never taken off, and DevSecOps (automated security) was the main driver of adoption. The invisible rift was formed.

## The Problems

We see a lot of organizational challenges with the differing definitions of DevSecOps at their heart, with few people (if anyone) realizing it. In retrospect, it is trivial to understand why:

 * Application teams are either responsible for maintaining their applications in production or only responsible for passing security pipelines.
 * Pipeline teams are responsible for either enabling DevSecOps practices across teams or for owning DevSecOps for the organization.
 * Platform teams are responsible for either enabling DevSecOps deployments and maintenance or for owning integration efforts.

Regardless of the merits of one definition versus the other, a lack of shared meaning for DevSecOps dooms a software organization to rely on individual heroics to achieve any measure of success.

The truth is the DevOps definition of DevSecOps is hard to implement in the DoD for two reasons:

 1.	A substantial number of DoD applications do not lend themselves to X as a Service models because they are deployed to segmented environments with limited and intermittent connectivity (e.g., in ships, aircraft and submersibles, and at the tactical edge).
 2. A common acquisition strategy for software involves separate contracts for development, integration, and platform.

## The Path Forward
DoD Software Factories need to 
decide which model is right for them. Are they supporting X as a Service or are they developing applications that will be distributed (i.e., shipped) to run adjacent to their users? (Or are they doing both?).

The X as a Service model requires application teams that are staffed for DevOps, a DevOps-friendly application platform, and clear organizational alignment of the shared responsibility model.

The shipped-software model requires infrastructure and resources to train and support the integrators that will be deploying and maintaining installations and pipelines specifically designed to generate deployable artifacts.

In truth, we don’t think we’re that far off from huge wins in accelerating the delivery of software capabilities to the warfighters. Just like coding, the hardest part is finding the bug. Fixing it is usually easy. 
