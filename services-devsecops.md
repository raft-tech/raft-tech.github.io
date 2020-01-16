---
layout: services
title: DevSecOps
permalink: /services/devsecops
main_nav: false
featimg: /assets/pressBanner.jpg
subpage: services
pageTitle: DevSecOps Approach
pageTitle2: Our Experience
header: Scalable pipelines to accelerate innovation
services:
  service1:
    head: Developer Focused
    img: /assets/cap-icon1.png
    txt: Our DevSecOps pipelines are focused on the productivity of the Developers while at the same time ensuring the security is ensured. As developers embrace cloud native platforms such as Kubernetes, our team builds pipelines that provide the developers a direct view into the security so that security isn’t an after-thought.
  service2:
    head: Zero Trust
    img: /assets/cap-icon2.png
    txt: Our team utilizes Istio to enable a zero trust model where all communications are encrypted between microservices, centrally authorized, and continually validated against a service mesh policy. Our team achieves this by pushing a centralized policy configuration into the Envoy sidecar proxies for each pod.
  service3:
    head: Pipeline Driven
    img: /assets/cap-icon3.png
    txt: We believe in a cloud native environment most things should be automated. Whether that’d be finding CVEs at the time of building container images, static/dynamic code analysis, runtime security, testing, or deploying, our team prepares pipelines that trigger all these things at the time of merge into master branch
  service4:
    head: Continuous Monitoring
    img: /assets/cap-icon4.png
    txt: Receiving Authority To Operate (ATO) shouldn’t be one all and be all for the solution. Rather than spending man hours to periodically manually going through the compliance of the security controls, our team believes in continuous monitoring that is triggered at the time of any change to the system.
  service5:
    head: Immutable
    img: /assets/cap-icon4.png
    txt: Null Pointer Exceptions and Buffer Overflows are a thing of the past when using Immutable structures and pattern matching. At the core of our teams approach to immutability is automation. We automate every part of the deployment down to the lowest level so that any change in a deployed system requires deploying a new system.
  service6:
    head: Fault Tolerance
    img: /assets/cap-icon4.png
    txt: Modern critical applications must remain available even in the presence of failures. At the application layer, our engineers provide automated fault tolerance (using Hystrix) when microservices fail. While at the infrastructure level, we configure multiple availability zones, and use K8s (control plane) to automatically reschedule the pods from the faulty node onto other healthy nodes in the cluster.    
experiences:
  experience1:
    head: Microservices
    text: Smaller microservices working together to fulfil business requirements provide the software agility needed in enterprise software. Our team builds RESTFul microservices that are containerized and platform/cloud agnostic. Each microservice exposes its health metrics that are fetched by prometheus. 
  experience2:
    head: Kubernetes
    text: Using a mix of open source tools and best practices, our engineering team builds Kubernetes clusters that are quick to setup and yet secure. The clusters built and maintained are production ready and include necessary tools like EFK, Prometheus, Grafana, Istio, and Admission Control.
  experience3:  
    head: Air gapped environments
    text: Our team knows the process and benefits of building low and deploying high. The containers built by our team are self-contained, include all external dependencies, and can be built on air-gapped environments. Additionally, our team understands the intricacies between classified offering of cloud vendors (C2S, Azure Classified Cloud).
  experience4:
    head: Kafka
    text: Event driven architectures are made possible by using Kafka to pub/sub events between microservices. Our team also uses Kafka to prepare stream processing pipelines and KSQL to gather real time insights from the data. 
  experience5:
    head: Infrastructure as Code (IaC)
    text: Our team lives by the moto If it isnt in code, it doesnt exist. Using IaC allows our engineers to build K8s clusters in shorter time and ensure that the clusters are security configured from Day 1.
  experience6:
    head: Serverless
    text: From writing one-off functions in the cloud to running complex microservices on serverless platforms, our team ensures costs, application state, and security are all managed with a fair balance. 
---
