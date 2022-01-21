---
layout: post
title: "Agile is About Measuring Your Turning Radius, Not Your 0-60 Start Time"
short_title: "The Real Meaning of Agile"
date: 2022-02-07
categories: agile, devops, cicd, govtech
featimg: /assets/images/featimage/devops__learn_tek.jpg
bgimg: /assets/images/bgimg/2018-05-01_Basketball,_easyCredit_Basketball-Bundesliga,_Science_City_Jena_-_Rockets_StP_5092_by_Stepro.jpg
author: Alex Floyd Marshall
---

# Agile is About Measuring Your Turning Radius, Not Your 0-60 Start Time

My kids— boys aged 2 and 4— have been obsessed for well over a year with the Disney series *Cars*. About once a week we do a family “movie dinner,” and we’ve watched all three *Cars* movies multiple times. The lead character in the series, Lightning McQueen, is a champion race car. Before every race he chants a mantra to himself: “Speed. I am speed.”

One might be forgiven for thinking that mantra is also being chanted by developers and product leaders at virtually every startup under the sun these days. We hear about the frequency of deployments, the speed with which teams can get code from developer laptops to production servers, the (short) duration of feature sprints, the rapidness with which development environments can be spun up, and so on and so forth. Speed, we are speed.

But what if all that speed is aimed in the wrong direction?

In the first *Cars* installation, Lightning is challenged by an older car to a race in desert sand. In tortoise-and-hare like fashion, he goes from 0-100+ immediately. Then he hits a curve. Not knowing how to turn on sand, he flies off the track and lands in a cactus patch. His older, slower challenger easily wins the race.

The point of the story isn’t that we should be slow. It’s that you have to know how to turn or your speed will end up wrecking you.

Everyone these days wants to be “agile.” But “agile” is a synonym for “nimble,” and being nimble is about how fast you can change directions, not how fast you can move in a straight line. Think about a basketball player who can react quickly to where the defense is setting up and find just the right angle for their pass or shot. That’s what it means to be nimble.

In other words “agile” is a special kind of speed. In fact, it's a combination of two special kinds of speed. First, you need the raw physical speed for a certain kind of movement, namely, transitions. Our basketball player needs to be physically quick at moving side to side and spinning on their pivot foot. But second, and just as important, you need speed in analyzing the situation and making a decision about how to position yourself based on what you see. Our basketball player needs to be able to quickly determine which lanes are open so that their pass isn’t intercepted or their shot blocked before it can get to the net. It's the combination of both of these-- speed in transitions and speed in decision making-- that makes a player nimble.

## CI Is About More than Automation

The most popular manifestation of the agile business philosophy in the realms of software development and IT management is the "DevOps" methodology. No one can deny that DevOps has made a positive contribution to the industry. By doing things like creating common development environments that mirror production, managing infrastructure "as code," and operating in "the cloud," teams following a DevOps approach are able to automate their testing and deployments. This is a powerful move that reduces redundant work, eliminates a lot of potential for error, and results in an overall improvement in software quality and deployment success. Wins all around.

An often used shorthand for this methodology is "CI/CD": Continuous Integration, Continuous Deployment (or sometimes Delivery). Integration here refers to the constant process of running new code through automated testing pipelines to ensure its ready to be merged into the production branch.

But if we're being true to the real meaning of agile-- nimbleness, or the ability to pivot-- then there's another way to look at CI. In fact, I prefer to call it "**Contnuous Improvement**," making our products better with every change we implement (or integrate). In order for those changes to represent true improvements, we need those two kinds of speed that we described our basketball player as having. So what do those kinds of speed look like in the realm of software development?

## Speed in Transition

Another way of saying "speed in transition"-- that speed moving side to side or pivoting-- is the ability to make low-cost, big impact changes. Consider the following scenarios:
- Let's say you discover a bottleneck in your application performance around data reads and writes. Your options for improving performance are the following. *How hard would it be to make each change to your codebase?*
    - Horizontally scaling your database will improve performance, but result in needing to change to an "eventual consistency" model for data. *Can your application handle that change?*
    - Switching databases from mySQL to postgresSQL might improve performance, but also require an API change. *How hard would rewriting your database API calls be?*
    - You could also change the read/write portions of your application so that data writes could happen asynchronously with other tasks, but in your case this would require implementing those portions of the codebase in a different language. *How much of a challenge would that pose?*
- Let's say your business leadership learns that most users are doing something totally unexpected with your product. You thought they'd use it for cat photos, but instead it's being used as a pastebin. Your business leaders want to take advantage of this unexpected development and pivot towards the pastebin use case, adding features like "ephemeral links" and "anonymous posting" and dropping features like commenting or following other users. *Can you do this without totally rewriting your codebase?*
- Your business is acquired by a company that uses a different cloud provider. They need you to move all your infrastructure into their provider of choice. *How tightly coupled are your applications to the infrastructure they are currently running on?*
- Your new acquierer also has a "design library" that they need your front-end to adhere to in its next release. Your current front-end is built using a totally different framework than theirs. *How much of a pain is it going to be for both your front-end developers and your DevOps teams to design a new front end and a new deployment pipeline for it?*

What I'm hoping these examples illustrate is that speed in transition is as much about having good software architecture as it is about having good automation. In other words, if you're application is a giant spaghetti monster of inter-dependent components instead of well architected, atomic/independent ones, major changes will always be breaking changes no matter how smoothly you've automated the testing and deployment process. Similarly, if you've tightly tied your application to certain external dependencies (whether they are "infrastructure" dependencies or software ones), you're going to find it extremely difficult to change those dependencies if you ever need to. All of these things can make major changes very high-cost. Cactus patch, here we come!

## Speed in Decision Making

The second kind of speed we described our basketball player as having was speed in analyzing the layout of the court and making a decision about what to do next. It's fairly easy to translate that, at least conceptually, into the language of business: it's all about data! But what kind of data do you need to collect for this? For those decisions to be accurate, business leaders need data that tells them about the business value of potential decisions and the environment the business is operating in. Think about the scenarious we outlined above: *how would you determine whether a bottleneck in your application is a business priority to solve? How would you know if your customers were doing something unexpected with your app? How would your business leaders know whether this was the right time to sell or if they should hold on and do another round of private funding?* Not all of these decisions are going to be tied up solely in your tech stack, but the data you collect on the applications you produce and how your customers are using them will certainly play a role in guiding those decisions.

So what kinds of things should you be looking for? Here are a few ideas:
1. **Success/Failure Rates on key desired outcomes**. If you’re building a shopping cart app, you should be measuring things like successful order completions vs. abandoned carts and tracking whether new features or design changes noticeably change this relationship.
2. **Subsets of stakeholders experiencing the same errors**. If everyone using a certain browser or operating system or in a certain location or reaching a certain point in your application flow or with some other shared characteristic is experiencing an error, you want to know about that so you can get a fix in the works.
3. **Security/policy implications of changes**. Running automated security scanning on your codebase and test environments can help flag if changes are exposing you or your customers to an unforeseen risk. This helps you make smart decisions about changes you implement so that you don’t have to rapidly backtrack or implement quick bug fixes that detract from knowing whether the features you’ve implemented are achieving the business goals they were intended for.

In short, the data we collect should be focused on the stakeholders that drive business decisions: customers, regulators, front-line staff, etc. As technologists, we should be thinking about what information they need to make smart decisions and building in the capability to collect that information so we can inform (and perhaps even antipate) their thinking. 

## Conclusion

Raft is all about using data to design better solutions, paricularly for government tech. Many in the Silicon Valley tech startup culture might scoff at the idea of government as "agile," but in some ways the government tech space makes it easier to capture the true meaning of agile development. Government procurement and budget cycles may at times act as a brake on purely forward movement. But those same cycles also drive home-- if you are paying attention-- the importance of stakeholder input, using data to shape decisions, and reducing changing costs so that you can make rapid pivots if the data (or Congress) demands it. So how do you avoid the cactus patch? How do you put your shot on target in a fast moving, competitive landscape? To be truly agile, or nimble, you need three things: good architecture (giving you the ability to make low-cost, high impact changes), good data (letting you make accurate decisions about what changes to make), and some automation to keep things running smooth.
