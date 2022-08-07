---
layout: post
title: "Really long blog title"
short_title: "Shorter title"
date: 2021-07-14
categories:
featimg: /assets/images/featimage/...
bgimg: /assets/images/bgimg/pipelines.png
author: Angela Milash
---

### Before coming to this internship

I finished up my 2nd year at Georgia Tech, majoring in Computer Science. I also did an internship a summer ago, one which oddly enough contributed to me getting to work here at Raft this year Summer 2022. The internship last summer was the X-Force Fellowship, which is a program where I partner with other engineers and build stuff that can solve the challenges outlined by my project sponsors. Interestingly enough, the project sponsor was [Brian Sells](https://goraft.tech/about/brian_sells).

### What made me come to this internship?

I worked with Brian throughout my time at the X-Force Fellowship last summer. The project he introduced to me and my team was to build a Full-Stack Application or tool that can lower the barrier of marksmanship data collection, analytics, and metrics for the 1/75 Ranger Battalion. At that time, I finished my 1st year at Georgia Tech, eager to learn about the industry and contribute to the world. So as you can probably imagine, I was really excited to start coding and deploying. About 11 weeks later, the fellowship ended, and I was able to successfully build a Minimum Viable Product for Brian and get it deployed. In the midst of all of this, I had the pleasure of getting introduced to this wonderful organization, Raft. There, I met with Robert Murtha, and he introduced me to all the projects, perspectives, and pipelines that were, and still are, in the works at Raft. It was at that moment when I told myself that I want to work at Raft. Afterwards, it was just a matter of talking to Robert Murtha and Brian Sells about an Internship at Raft, and just like that they were able to extend me an offer as well as an Internship package.

### Raft Internship

Throughout my Internship, I had the pleasure to experience working in multiple aspects of development, deployment, and data science. I worked in 2 teams: Gravity and Data Fabric.

#### SpaceCAMP/Gravity

##### Introduction to Kubernetes
I got introduced to Gravity during Day One of my internship. I started working under [Ryan Salcido](https://goraft.tech/about/ryan_salcido). Since Day One, he helped me learn about multiple tools used at Raft: Kubernetes, its different distributions such as Nginx, K3d, Kind, and Minikube, as well as the Kubectl command line interface for Kubernetes. There were some networking concepts that I had to brush up with before I could understand Kubernetes and its network model. I spent time doing some research, writing my own shell scripts to describe different configuration files for Kubernetes, and just deploying my own mini-clusters using nginx along with deploying services to the clusters. This is what I spent time doing throughout my first week. I also introduced myself to the Gravity team during a standup call with [Hitesh Sharma](https://goraft.tech/about/hitesh_sharma), [Keerthi Chinthaguntla](https://goraft.tech/about/keerthi_chinthaguntla), [Aidan Stein](https://goraft.tech/about/aidan_stein), Anthony Wendt, and Ryan as well. Overall, it was a pretty solid way to start the experience, especially considering I never worked with Kubernetes directlyt before.

##### Continuing with Kubernetes, Leadup to Gravity Cluster
Come 2nd and 3rd weeks, I started researching more complex ideas and asking Ryan and the experienced members of Gravity questions about these ideas, notably Infrastructure as Code, Helm Releases, Flux, and the deployment process itself. All of this was leading to me learning about the Gravity platform, Bigbang, and how they intertwine. Most of my time was also spent shadowing Ryan and asking the team questions on some of the services being integrated into our platform, such as Grafana, ArgoCD, and Kyverno.
During the 3rd week, I shadowed Ryan on the GitLab Data Persistence issue. The problem was that there were no jobs configured in the Kubernetes cluster that handle backing up the Gitlab Repo data. This could have been a problem especially when the cluster shuts down or crashes and it cannot restore the data that was there previously. The process for configuring it is having an IAM user for the  AWS S3 bucket for Gitlab Repo storage (configured in IaC repo), allowing some actions/policies for that user in IaC, configuring the Bootstrap repo to point to that user and that bucket, and testing a CronJob to backup Gitlab at a specified time every day. I was involved with the research and some small edits in the Bootstrap repo, so it helped me dive into the repo a bit and learn about its organization a little bit/

##### My first Gravity ticket: Low Resources

This would have been my 4th week here at Raft, and I was given my 1st ticket for Gravity. I was tasked with deploying my Management Cluster, going through the services, and lowering the resource limits and requests. The accepted criteria is the reduced amount of CPU usage overall with each resource, and no "out-of-memory killed" errors where not enough resources were provided for the services to do their jobs.
This ticket required knowledge about helm deployment, the repo structure, flux-cd for Countinuous Delivery, and knowing how to navigate through the cluster in the K9s UI tool. Ryan helped me with the testing, and I started to get the feel for the cluster navigation by the time I made a Merge Request with all the tested changes for this ticket. It was overall a positive experience getting to have my own Management Cluster and do some of my own testing.

##### Documentation

Throughout my next 4 weeks, while I was still working with the low-resource ticket, it was time for me to dive real deep into Gravity, the services in the platform and their roles, virtual services, the Istio Service Mesh, the precedence flowchart with Gravity and BigBang packages, and Ironbank. To do this, Hitesh tasked me with the Service Documentation ticket, where I put together information about these services and about Gravity in a README file. By Week 9, I got a 1st draft ready, and subsequently I got iterations of feedback from both experienced and novice members of Gravity. This allowed me to really hone in my knowledge about helm charts, service deployment, and the deployment configurations.

##### More advanced tickets

Now that I had a good foundation on Gravity, I started working on more tickets, some more advanced. I worked with Ryan, Eric Lipe, and Michael Kruggel on the BigBang upgrades, Sonar plugins auto-install feature, Kyverno policy failure resolutions, and the Secrets Management tickets. The last ticket still needs more investigation and testing, considering the stuff the team and I found online about managing secrets. For the most part, I was testing out different ways to synchronize secrets to enable a more scalable way to manage secrets for when tenants get onboarded to Gravity. I also performed some cost-benefit analysis on which solutions, or combination of solutions would work the best. That was where I had to leave off in my last week here at Raft.

Overall, I was happy with how much I have grown as a Computer Scientist and as a person. Gravity is a complex platform, and I had a pleasure getting to work on that platform in the mind of a DevSecOps Engineer and a User.


#### Data Fabric

I met with [Bhaarat Sharma](https://goraft.tech/about/bhaarat_sharma) early on in the internship and discussed about my interests in Data Science/Engineering and Machine Learning. He gave really good advice on trying different projects around Raft and seeing what interests me and what does not. This inspired me to try everything and learn everything, which would then help me narrow down to what I am really interested in. This got me into looking at Data Fabric.
I got involved in Data Fabric a little bit later than Gravity. I got introduced to it in my 2nd week by [Barak Stout](https://goraft.tech/about/barak_stout) and [Edward Morgan](https://goraft.tech/about/edward_morgan). The purpose behind Data Fabric, I would say, was what propelled me to dive into it the most, as it involved a lot of Data Pipelining, Engineering, and Automation. On top of that, working along with Data Fabric and Gravity simultaneously would give me another perspective on the Platform side.

##### Data Ingestion Ticket

I was assigned to look into testing the Data Ingestion process with Trino, Postgres, and Superset. This helped me get my hands dirty with the platform and learn how everything works in the data side of things. I worked on that for around 2 weeks before I ironed out the process. However, I wanted to work on something a little more automated. This led me to Kafka.

##### Kafka Producers

This probably was one of my biggest projects here at Raft. There were many phases with this project: the learning phase where I was learning Kafka and how it works and building my own local producer and consumer, the investigation phase where I learned how Kafka is integrated with the Data Fabric platform, the development and testing phase where I developed the producer (with a ton of help from Edward, James Mullinix, Levi, Dane Curran, Ben Marte, and Karthik Appukuttan) and tested the producer, and the demo phase. For more information, see my technical post in the `cp-kafka-producer.md` file under `data-fabric/df-docs/content/docs` in the `Data Fabric` Github Repo.

### Conclusion

Overall, I was extremely happy with the experience here. I got to work in two of the biggest projects here at Raft, research and develop tools to enable use cases for clients, and present my work to the teams with overall positive feedback. I have learned to be patient and to not worry too much about what might happen as long as I have a process going. My documentation skills have also improved substantially as I was able to document most of these complicated issues while I was doing testing. I hope that my insight has been helpful to both Gravity and Data Fabric, and I also know that the experiences I have learned here will propel me far wherever I go in my Computer Science Career.