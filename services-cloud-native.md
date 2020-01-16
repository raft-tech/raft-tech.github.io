---
layout: services
title: Cloud Native
permalink: /services/cloudnative
main_nav: false
order: 2
featimg: /assets/pressBanner.jpg
pageTitle: Cloud Native Approach
pageTitle2: Our Experience
header: Automation driven operations culture
subpage: services
services:
  service1:
    head: Automation
    img: /assets/automation.svg
    txt: Agile systems that respond to rapid changes require automation. We obsess over automated pipelines like GitOps to provision our infrastructure, K8s to auto scale, slash commands to deploy code, and container runtime security to detect anomalous behavior.
  service2:
    head: Vendor Agnostic
    img: /assets/Vendor_Agnostic.svg
    txt: Being tied to a specific vendor or technology incurs substantial long-term feed and reduces your agility. Instead, we architect open source solutions that provide flexibility to switch between cloud providers without impacting mission objective.
  service3:
    head: Scalability
    img: /assets/Scalable.svg
    txt: Modern software should be scalable from the first day of production. For applicaiton level scalability, we break down the solution into microservices following the 12 factor app, reactive manifesto, and use non-blocking IO. Then on the infrastructure level, we utilize best battle tested open source container orchestration system currently available, Kubernetes.
  service4:
    head: Event Sourcing
    img: /assets/Event_Sourcing.svg
    txt: A traditional database driven application can only answer questions about the <i>current</i> state of the application, however having access to the full history of the applicaton is incredibly valuable. By building event sourcing architecture, our engineers can decode the data evolution, clarify product operation, and allow for faster debugging.
  service5:
    head: Domain Driven Design (DDD)
    img: /assets/ddd.svg
    txt: Domain experts and engineers are two separate pieces of the development process, but they should speak the same language. Bu establishing a ubiquitous code (Domain Specific Language - DSL), tailored to our client's domain, we ensure collaborative cooperation and avoid programming discrepancies.
  service6:
    head: Fault Tolerance
    img: /assets/Fault_Tolerance.svg
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
