---
layout: post
title:  "5 Things Every Developer Should Know About Repo Documentation"
shorter_title: "The Importance of READMEs"
date:   2020-04-01
categories:
featimg: assets/images/featimage/Documentation_feat.jpg
bgimg: assets/images/bgimg/Documentation_bg.jpg
author: Barak Stout
---
Documentation is a vital part of the development process that is often overlooked. In the worst cases scenarios, no documentation is recorded at all, leaving an impenetrable wall of code that takes time and resources to decipher. However, many programmers write poor documentation regarding their software and rely on outdated documentation when something goes wrong. This _incomplete documentation_ can be a nightmare for new hires who are often tasked to _"follow the documentation"_. So to establish a practice of developer etiquette, I've created this list of 5 lessons I've recently learned to avoid saddling my fellow developers with poor and incomplete documentation.

<img style="float: right; padding: 10px;" src="assets/images/SingleImages/Documentation_image.jpg" height="400px" alt="Frustrated man at computer with no README documentation">

## 1. Do More Than Just Link to Documentation Repos
Earlier this week, I was tasked with creating a system backup using a README file left by the previous developer. The very first line in the documentation file referred to another documentation file that was so old the link 404ed. To make matters even worse, the previous developer left the company 8 months ago. While you can and *should* include relevant links in your README, the whole point of a README is to inform others about the specific operation of *your* software. While linking to other documentation repos can be helpful, always provide as much context and information as possible directly in your README file. 

## 2. Store all Referenced Files in the Same Repo as the README File 
Thankfully, the link to docs repo I needed referenced GitHub, so after fiddling with the URL a bit I finally found the version of the docs I needed. Unfortunately, the instructions in the README referenced several config files that were automatically generated when the software was first installed. After consulting the previous developer, I discovered that the files were on a laptop that was long gone - as in recycled. Again, there is nothing wrong with linking out to other document repos, but all essential files referenced in the README should be stored in the same repo on the off chance that the original files are removed or destroyed.

## 3. Record EVERYTHING you Learn in the README
After digging through more GitHub, StackOverflow and GitHub rabbit holes, I found the versions of the config files that I needed to proceed. After entering few more commands (which took literally hours), I was finally able to complete the backup and restore the system. While going through this exercise was not fun, I learned a lot about the process along the way. Typically after completing a task most authors are forced to move on to the next one, however I knew I might forget the wealth of background knowledge I had acquired the next time I needed to revisit the issue. If I didn't take the time to update the README with everything I had learned, that information would be forgotten, or worse, some other new-hire would waste time trying to solve the problem all over again.

## 4. Set Time Aside for Writing Documentation
To be fair to the original README author, dedicated documentation time is a rarity in a tightly managed scrum. The squeaky wheel gets the oil, and in most cases just about everything else (even testing) takes priority. In the initial stages of development, stakeholders don't benefit directly from documentation. However, setting aside a fixed amount of time for writing a README during and after each task, can save stakeholders both time and money when maintenance is inevitably required. By allotting time for documentation during task estimation, developers can incorporate these updates as part of their daily work. Documentation is just as important as testing, treat it that way.

## 5. Leave Descriptive and Explanatory Documentation
It's easy to get lost in the woods, that's why the trails are so well marked. As a developer, you should view documentation as a clear, easy to understand, detailed map, created not only for your benefit, but others' as well. All too often, I've seen documentation that only contains basic run commands with little to no information explaining what they do or the logic behind them. Documentation is useless, and your product unsustainable, if the person following your README lacks the background knowledge you assume they have. If you spent a great deal of thought and time creating a product, put in the extra work to document it properly. Your README should be written in a way that, given the repo, anyone could complete any task quickly and understand how they did it. Leaving incomplete documentation for the next developer is worse than creating an incomplete or faulty product, it's just not cool.

## Contact Us
If you’re interested in learning more about how you can integrate detailed documentation into your next project, our team of dedicated architects and engineers would love to talk shop. Reach out to us at [hireus@goraft.tech](mailto:hireus@goraft.tech).

