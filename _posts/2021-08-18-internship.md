---
layout: post
title: "Interning at Raft"
short_title: "Internship"
date: 2021-08-18
categories:
featimg: /assets/images/featimage/Learning_Cycle.jpg
bgimg: /assets/images/bgimg/Learning_Cycle.jpg
author: Thomas Lee
---

## Where to even begin?

Let's start from the very beginning. I was just finishing up my Junior Year at George Mason University studying Computer Science. I had learned many concepts such as data structures, handling frontend and backend programs, inheritance, polymorphism, and so much more. I was eager to land an internship to test what I had learned. Luckily, I was granted the opportunity to Intern at Raft.  Here is the story of my experience here at Raft.

## Interview

The interview process is as the [join tab](https://goraft.tech/join/) stated.

>First, I met up with the Raft recruiter who walked me through the interview process and answered a few macro questions about the Internship.

>Second, the recruiter set up a meeting for my first interview with my soon-to-be supervisor, [Barak Stout](https://goraft.tech/about/barak_stout), who introduced himself and asked a few questions about my experience and capabilities. After that, he went over a quick rundown on a few options I would be working on and I expressed interest in the Home Mortgage Disclosure Act (HMDA) project for the [Consumer Financial Protection Bureau (CFPB)](https://www.consumerfinance.gov/data-research/hmda/). The HMDA project was essentially compilation of mass amounts of home mortgage lending data for analysis to detect errors and patterns. During this compilation, there are a series of validity, syntactical, and quality checks that the mortgage information needs to go through. The HMDA program collects over 80 million data records from 20K+ financial lending institutions annually and enables public officials, academic researchers, journalists, and consumer groups to ensure lenders are serving the needs of their communities as well as bringing attention to discriminatory or similarly undesirable practices.

>Third, the recruiter set up a meeting for my second interview with [Bhaarat Sharma](https://goraft.tech/about/bhaarat_sharma) who introduced himself and also asked a few more questions about what I want to do as an intern.

>Finally, after passing the interviews and filling out some paperwork, I was ready for my first day.

## First Day

Not knowing what to expect, I get myself setup and await a message from Barak which came around 10:30am. He went over the first big project, the HMDA platform. He gave me a basic rundown at a macro level on how it works, where to find the documentation, and most importantly, how to produce test files. I went ahead and produced a few test tiles on my own and tested them on the [HMDA platform](https://github.com/cfpb/hmda-platform) using a software unfamiliar to me known as Postman. My first few thoughts were nothing but astonishment at how much work has been put into this project. This project has been in the works for over three years with thousands of lines of code produced in various different coding languages like Scala and CSS. It would have to handle processing so much data that an excel file wouldn’t be large enough to handle it, go through each of the criteria per entry, determine which of the hundreds of checks it passes or fails, and complete all of this in a reasonable amount of time. Given that I love data handling, this was simply amazing to witness. I was excited to get to work and glad that I had the opportunity to be a part of it.

Next, I was asked about conducting research. I learned that Raft had previous Interns that also conducted research, but I would be the first to be a software development Intern. I was eager to learn as many new things as possible and decided to take the route of research and coding. The rest of the day was simply downloading all sorts of appropriate packages and software to run HMDA and I had fun with it.

## The HMDA Test Files

My first assignment was with the [hmda test files repository](https://github.com/raft-tech/hmda-test-files), where I was tasked with creating the test file generator for the year 2021. This would mean I have to sift through thousands of lines of python code meant to generate test files for the year 2020 and modify it as needed for 2021 while maintaining format and functionality. After some time and effort, I managed to produce code which worked on my own. The part that held me up was where the code ran tests to remove errors, then attempt to resolve them in another function, and bounce back to test again. Without output, I couldn’t figure out what specific section was having this error, but after running with debug enabled I discovered there was a debug method built in the code to display extra information. With this addition, developers working on the HMDA platform would be able to generate test files for 2021 to ensure the platform accounts for validity, syntactical, and quality errors according to 2021 standards. I was excited that I managed to complete my first task and tested it repeatedly to ensure quality before submitting a pull request. With that out of the way, it was onto my next task, Research. 

## Research

My next assignment was conducting research for Raft. I got to speak with [Rob Murtha](https://goraft.tech/about/rob_murtha) about the things I am interested in as well as what Raft is interested in resulting in a multitude of fascinating questions that needed answers being produced. I got to do a deep dive into numerous government policies, programs, procedures, as well as advancements in technologies like [Starlink](https://www.starlink.com/) and [Machine Learning](https://www.sas.com/en_us/insights/analytics/machine-learning.html) programs. It’s amazing to me how much information is just sitting out there on the internet but the lack of interest causes it to go unnoticed. My general approach to most of these questions is answering them while attempting to incorporate what role Raft can play. For example, my favorite question asked about Cross Domain Solutions (CDS) and what is its current status within the government. After some digging, I found the name of the government project meant to implement CDS into government agencies, [WOLFDOOR](https://govtribe.com/file/government-file/wolfdoor-rfi-dot-pdf), as well as a few companies involved with the project. With that in mind, Raft could get in contact with these companies and see what help if any is needed. Hopefully, Raft can get involved with this project and yield more funding and awareness. Nearing the end of researching, I received another task: Updating the Raft website.

## Raft Website

With the submission of my research to Rob, I switched over to working on the website which Barak had me test running locally way in advance so I was familiar with the [repository](https://github.com/raft-tech/raft-tech.github.io). I was given an updated list of Raft team members that needed to be added to the website by [Heather Stout](https://goraft.tech/about/heather_stout). I was unfamiliar with building websites, but the README provided more than enough information to create or update the necessary files to update the team member page. I was missing some information from a few members, and contacted [Rebecca Mancuso](https://goraft.tech/about/rebecca_mancuso) who was more than willing to lend a hand. I also merged pull requests from GitHub bots and experienced how bots aren’t always the most accurate. There were a few complications and I wound up crashing my local version of the site a few times. The issue here was the instantiation of the same software with two different versions as a result of the various bot merges. Luckily, with utilization of error information, I was able to locate and remove the older version of the software. This was probably one of my favorite tasks because I got to actually see my work go up, little as it may be. With that out of the way, Barak had another fun task for me with Raft R&D.

## OpenCV

I was first given some time to install and experiment with OpenCV, a package with functions designed for computer vision. After that, I was asked to create a method to detect movement in a video. After some research I produced a method which did just that, but the quality wasn’t as good as I had hoped. After talking with Barak, I went ahead and produced two more methods which did the same thing and yielded results with varying quality. For the most part, they found the moving objects, but they would also find small bits of nothing inside these moving objects as well as off in the background. I proposed a compilation of these methods in an attempt to improve the quality of the output as the moving object would need to be found in all three methods in order to appear in the output. With some trial and error, it was successful, but the third method was so bad that I removed it from the compilation. I presented it to Barak and Rob and received positive feedback. This was great as I managed to discover new functions, complete a task, conceptualize and verbalize a means of improving the outcome, and implement my idea to yield better results.

## Kafka

Up next was experimenting with [Kafka](https://kafka.apache.org/), a data streaming service I have used before, but knew it was used in the HMDA project. The task was simply to send in, or produce, some input to a local docker container of Kafka and then retrieve, or consume, that input to print out. It was a simple task, but I ran into a major error that I was really struggling to get past. On Barak’s recommendation, I met with [Ryan Salcido](https://goraft.tech/about/ryan_salcido) to discuss the error and after a two hour call it was resolved. The issue lied in the setup of the docker container. While the producer and consumer programs were made correctly, when sending information to the container it would somehow divert information to a different container with a random string for a name rather than localhost in the producer program. Then the consumer program would make another container of a random string name and never find any information. The resolution was to explicitly define localhost as the advertised listener for the kafka container so that these containers of a random string name are not formed.

## Key Takeaways

There are a few key takeaways from this experience.

>First, GitHub is a platform many software developers use to collaborate and display their code. Applicants can provide a link to their GitHub profile for Employers to [view](https://www.builtinchicago.org/2018/05/08/what-companies-look-for-on-github), and many companies I have applied to have a box specifically for this link. With this experience, I was able to fork projects I was working on into my GitHub profile as well as commit changes and create pull requests which all appear on [my profile](https://github.com/TT22000). 

>Second, I had very little experience with [Docker](https://www.docker.com/), but with this experience I was creating, utilizing, and deleting containers almost daily to complete various tasks. 

>Third, exposure to research topics, conducting a deep dive in order to uncover as much information as available, and drawing conclusions based on that information. 

>Fourth, with various tasks coming my way, I had to utilize prioritization in the workplace. While not too many, I did have to handle multiple tasks coming from different people which had nothing to do with each other and determine which to tackle first. My typical rule of thumb is tackling the tasks which would take the shortest amount of time to complete. However, deadlines and urgent requests would overrule this policy. This was often updating the Raft website which took me around 10-15 minutes to create a pull request with the new information. After that came research and then the large projects.

>Fifth, I really just had a great time with this experience and developed many new skills. Every day I learned something new was a personal achievement for me which will inevitably help me in the future. I can’t wait to see what the future holds and how these new skills will come to light.

## Conclusion

Overall, being an Intern at Raft was without a doubt an excellent choice for me. I got to meet many intelligent and welcoming individuals, develop and utilize new skills, and build experience for the future. I am so grateful for what they have done for me and look forward to seeing where life takes me.
