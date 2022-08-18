---
layout: post
title: "Abhijat Chauhan Raft Internship: Summer 2022"
short_title: "Raft Internship"
date: 2022-08-05
categories:
featimg: /assets/images/featimage/ci-cd.png
bgimg: /assets/images/bgimg/pipelines.png
author: Abhijat Chauhan
---

### Before coming to this internship

I finished up my 2nd year at Georgia Tech, majoring in Computer Science. 
The summer before I did an internship at X-Force Fellowship, where I partnered with other engineers to design and build solutions to real-world challenges outlined by project sponsors. My project sponsor for the X-Force internship was [Brian Sells](https://goraft.tech/about/brian_sells).

### What made me come to this internship?

At X-Force, I worked with Brian on a full-stack development project. He tasked me to build a Full-Stack Application or tool that can lower the barrier of marksmanship data collection, analytics, and metrics for the 1/75 Ranger Battalion. At that time, I had finished my 1st year at Georgia Tech and was eager to learn about the industry and contribute to the world. So as you can probably imagine, I was really excited to start coding. About 11 weeks later, the fellowship ended, and I was able to successfully build a Minimum Viable Product for Brian and get it deployed. In the midst of all of this, I had the pleasure of getting to know about this wonderful organization, Raft. There, I met with Robert Murtha, who introduced me to all the projects, perspectives, and pipelines that were, and still are, in the works at Raft. It was at that moment when I realized  that I wanted to work at Raft. Afterwards, I talked with Robert Murtha and Brian Sells about an opportunity to intern at Raft, and they were gracious enough to extend me an offer and Internship package.

### Raft Internship

Throughout my Internship, I had the opportunity to work on multiple aspects of different tech projects, specifically Gravity ([SpaceCAMP](https://spacecamp.il2.dso.mil/#/home)'s software plaftorm) and [Data Fabric](https://datafabric.goraft.tech/).

#### SpaceCAMP/Gravity

##### Introduction to Kubernetes
I got introduced to Gravity during day one of my internship. I started working under [Ryan Salcido](https://goraft.tech/about/ryan_salcido). Since day one, he helped me learn about multiple tools used at Raft: Kubernetes, its different distributions such as Nginx, K3d, Kind, and Minikube, as well as the Kubectl command line interface for Kubernetes. There were some networking concepts that I had to brush up with before I could understand Kubernetes and its network model. I spent time doing some research, writing my own shell scripts to describe different configuration files for Kubernetes, and just deploying my own mini-clusters using nginx along with deploying services to the clusters. This is what I spent time doing throughout my first week. I also introduced myself to the Gravity team during a standup call with [Hitesh Sharma](https://goraft.tech/about/hitesh_sharma), [Keerthi Chinthaguntla](https://goraft.tech/about/keerthi_chinthaguntla), [Aidan Stein](https://goraft.tech/about/aidan_stein), Anthony Wendt, and Ryan as well. Overall, it was a pretty solid way to start the experience, especially considering I never worked with Kubernetes directly before.

##### Continuing with Kubernetes, Leadup to Gravity Cluster
During the 2nd and 3rd weeks, I started researching more complex ideas and asking Ryan and the experienced members of the Gravity team questions about these ideas, notably Infrastructure as Code, Helm Releases, Flux, and the deployment process itself. All of this was leading  me to learning about the Gravity platform, Bigbang, and how they intertwine. Most of my time was also spent shadowing Ryan and asking the team questions on some of the services being integrated into our platform, such as Grafana, ArgoCD, and Kyverno.
During the 3rd week, I shadowed Ryan on the GitLab Data Persistence issue. The problem was that there were no jobs configured in the Kubernetes cluster that handle backing up the Gitlab Repo data. This could have been a problem especially when the cluster shuts down or crashes and it cannot restore the data that was there previously. The process for configuring it is having an IAM user for the  AWS S3 bucket for Gitlab Repo storage (configured in IaC repo), allowing some actions/policies for that user in IaC, configuring the Bootstrap repo to point to that user and that bucket, and testing a CronJob to backup Gitlab at a specified time every day. I was involved with the research and some small edits in the Bootstrap repo, so it helped me dive into the source code a bit.

##### My first Gravity ticket: Low Resources

During my 4th week here at Raft, I got my 1st ticket for Gravity. I was tasked with deploying my Management Cluster, going through the services, and lowering the resource limits and requests for new integrations. The accepted criteria is the reduced amount of CPU usage overall with each resource, and no "out-of-memory" related errors displayed. Otherwise, this meant that not enough resources were provided for the services to do their jobs.
This ticket required knowledge about helm deployment, the repo structure, flux-cd for Continuous Delivery, and knowing how to navigate through the cluster in the K9s UI tool. With Ryan's help, I started to get the feel for navigating the cluster. It was overall a positive experience getting to have my own Management Cluster and do some of my own testing.

##### Documentation

Throughout my next 4 weeks, while I was still working with the low-resource ticket, it was time for me to dive even deeper into the project. For that, I started researching about the services in the platform and their roles, virtual services, the Istio Service Mesh, the precedence flowchart with Gravity and BigBang packages, and Ironbank. Hitesh also tasked me with the Service Documentation ticket, where I put together information about these services and about Gravity in a README file. By Week 9, I got a 1st draft ready, and subsequently I got iterations of feedback from both experienced and novice members of Gravity. This allowed me to really hone in on acquiring knowledge about helm charts, service deployment, and CI/CD.

##### More advanced tickets

Now that I had a good foundation on Gravity, I started working on more tickets, some of which were more advanced. I worked with Ryan, Eric Lipe, and Michael Kruggel on the BigBang upgrades, Sonar plugins auto-install feature, Kyverno policy failure resolutions, and the Secrets Management tickets. The last ticket still needs more investigation and testing, considering the stuff the team and I found online about managing secrets. For the most part, I was testing out different ways to synchronize secrets to enable a more scalable way to manage secrets for when tenants get onboarded to Gravity. I also performed some cost-benefit analysis on which solutions, or combination of solutions would work the best. 

That was where I had to leave off in my last week here at Raft. Gravity is a complex platform, and I am grateful for getting to work on that platform  as a DevSecOps Engineer.

#### Data Fabric

I met with [Bhaarat Sharma](https://goraft.tech/about/bhaarat_sharma) early on in the internship and discussed my interests in Data Science/Engineering and Machine Learning. He gave really good advice on trying different projects around Raft and seeing what interests me and what does not. This inspired me to try and learn everything, and narrow down my interests, one of which turned out to be Data Fabric.
I got introduced to Data Fabric in my 2nd week by [Barak Stout](https://goraft.tech/about/barak_stout) and [Edward Morgan](https://goraft.tech/about/edward_morgan). The purpose behind Data Fabric, I would say, was what propelled me to dive into it the most, as it involved a lot of Data Pipelining, Engineering, and Automation. On top of that, working along with Data Fabric and Gravity simultaneously would give me another perspective on the Platform side.

##### Data Ingestion Ticket

I was assigned to look into testing the Data Ingestion process with Trino, Postgres, and Superset. This helped me get my hands dirty with the platform and learn how everything works in the data side of things. I worked on that for around 2 weeks before I ironed out the process. However, I wanted to work on something a little more automated. This led me to Kafka.

##### Kafka Producers

This probably was one of my biggest projects here at Raft. There were many phases with this project; the initial phase was learning about Kafka, how it works, and how to build my own producer and consumer. The next phase was investigating the Kafka integration with the Data Fabric platform. The final phase was the development and testing phase where I developed the producer (with a ton of help from Edward, James Mullinix, Levi, Dane Curran, Ben Marte, and Karthik Appukuttan) and tested the producer, and the demo phase. 

### Conclusion

Overall, I was extremely happy with the experience here. I got to work in two of the biggest projects here at Raft, research and develop tools to enable use cases for clients, and present my work to the teams with overall positive feedback. I have learned to be patient and to not worry too much about what might happen as long as I have a process going. My documentation skills have also improved substantially as I was able to document most of these complicated issues while I was doing testing. I hope that my insight has been helpful to both Gravity and Data Fabric, and I also know that the experiences I have learned here will propel me far wherever I go in my Computer Science Career.
