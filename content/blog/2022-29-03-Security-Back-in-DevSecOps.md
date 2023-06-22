---
layout: post
title: "Putting the Security Back in DevSecOps in an Open Source, Cloud-Native World"
short_title: "Security in DevSecOps"
date: 2022-03-29
categories: 
thumbnail: /images/featimage/Shift_Left_small.png
author: Shubhi Mishra
tags: ["Security", "DevSecOps", "Open Source"]
---

As technology advances and adversaries mature their cyber tactics, America needs to keep up as a nation to avoid falling victim to devastating cyberattacks. Our posture must adapt to current threats, and developers and security teams need to work together to make sure that happens.

Congress introduced the [Strengthening American Cybersecurity Act of 2022](https://www.congress.gov/bill/117th-congress/senate-bill/3600/text) for this very reason – we can’t stay stagnant. What worked last year needs to evolve. The act says CISA must perform ongoing and continuous assessments of federal risk posture – especially as the U.S. continues to support Ukraine, and Russian-sponsored attacks are on the uptick. It also says agencies and critical infrastructure operators need to report cyberattacks to CISA and authorize FedRAMP so agencies can quickly adopt secure cloud technologies. 

## But who’s responsible for securing applications in the ecosystem?

A [2021 GitLab survey](https://about.gitlab.com/developer-survey/) found the most practiced development methodology is DevOps/DevSecOps because of its code quality, faster time to market and security. But the weight of securing applications shouldn’t just be put on DevSecOps teams – there should be a shared responsibility including the developers building the IT and the security teams finding the vulnerabilities. 
 
I’ll dive into the details: GitLab found over 84% of developers are releasing code faster than ever before. That’s because of new processes and added automation from development to production, helping to catch errors and speed up releases. While this rids developers of many manual processes, testing and tasks, there’s a bunch of things they say they need to be working on that they aren’t yet. The most critical here being shift left security, or guaranteeing application security at the earliest stages in the development lifecycle. 
 
So, when the pressure to build and deliver an application is high, do developers have the right training, education, coaching and security champions on their team to ship secure applications? 
 
Let’s talk about security teams. GitLab found that while 39% of developers feel fully responsible for security in their organizations, 32% said they share the burden with other teams. And though security and development teams are “friendlier,” there’s still confusion over who owns security. (By the way, the answer is both teams, and they need to work together.) 
 
**This requires change at the cultural level.**
 
Most respondents rated their organization’s security efforts as “good,” rather than “strong,” and that’s a huge problem in 2022. And while over 70% of security pros report their teams have shifted left, various security scan results aren’t making their way to developers or aren’t easily available to them. For a security shift left to work, developers must get access to results while in their integrated development environment. Security teams shouldn’t just be giving out false positives and negatives. Instead, they should feel an increased responsibility to provide more data and details about problems or bugs in apps or code. Security teams should help developers understand which lines of code need to be fixed. Don’t just tell them what the problem is – try giving some direction on how to solve the issue. 
 
This becomes challenging given the ratio of security to product teams, so it needs to be a shared responsibility. Drop the finger-pointing over who did and didn’t catch what vulnerabilities, and work together to ensure all efforts are pointed to the same cause. 
 
## How do we fix this?
 
Changing the above mindset is cultural, but there are also ways we can tackle this through processes:
 
- **Think of security as a “tax” to pay on development**: Nothing in life is tax free, including security. Security tax is always due; it just depends on when you decide to pay it. If you pay your taxes late, the IRS typically fines you. Well, with security, if you shift left and incorporate security at the beginning, there’s less tech debt compared to paying at the end of the chain when applications are already developed. Development teams should work against a security tax. 
- **Overhaul onboarding**: By onboarding teams correctly, you ensure security posture is thought through from the start, and software developers are thinking of security as they’re building the tools – not after.  
- **Implement security as a culture**: Rather than only investing in privacy security training that focuses on when things happen, organizations should invest in training like [Security Warrior](https://www.securecodewarrior.com/), which helps developers secure code. Also, incorporate the [OWASP Top Ten](https://owasp.org/www-project-top-ten/) into your team’s training. Use [Sigstore](https://www.sigstore.dev/) and [Cosign](https://github.com/sigstore/cosign) to verify Software -- [Chainguard is leading by example](https://www.prnewswire.com/news-releases/raft-llc-announces-its-partnership-with-chainguard-inc-301468671.html). 
- **Better tracing**: Consider the use of tracing and collecting telemetry data across distributed microservices like [OpenTelemetry](https://opentelemetry.io/) to analyze your software’s performance and behavior. Catch anomalies in action before they cause trouble. 
- **Define and balance technical debt**: Decide when it’s acceptable to have technical debt, and when it’s not, because you’ll always be behind on resources. Share this definition with your organization, as it’s the responsibility of engineering leadership to make sure it’s in line with the current problems it’s working to solve and the impact being made. [Hyrum’s Law](https://www.hyrumslaw.com/) can help. 
- **Bridge the DevSecOps gap with Zero Trust**: Great starting point is the [DoD's Enterprise DevSecOps Reference Design Guide](https://dodcio.defense.gov/Portals/0/Documents/DoD%20Enterprise%20DevSecOps%20Reference%20Design%20v1.0_Public%20Release.pdf). Adopt architecure based on your organizational needs. 

 
If your organization is facing obstacles implementing these security practices or finding it tough to make that cultural shift, we are always shifting left at Raft – come ask us how we do it. 
