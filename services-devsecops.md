---
layout: services
title: DevSecOps
excerpt: We create products driven by user outcomes, not of features. By focusing our efforts on your users we empower them to meet and exceed your organizational goals.
permalink: /services/devsecops
main_nav: false
featimg: /assets/pressBanner.jpg
subpage: services
pageTitle: How we do DevSecOps
pageTitle2: Our Expertise
pageText: Our DevSecOps journey has been an evolution of architecting automated CI/CD pipelines to integrating security into the platform operations so systems are least trust by default.
header: Scalable pipelines to accelerate innovation
services:
  service1:
    head: Developer Focused
    img: /assets/Developer_Focused.svg
    txt: Our DevSecOps pipelines are focused on the productivity of the developers while simultaneously ensuring application security. By embracing cloud native platforms, such as Kubernetes, our team builds pipelines that provide developers a direct view into container vulerabilities so that security isn’t an afterthought.
  service2:
    head: Zero Trust
    img: /assets/Zero_trust.svg
    txt: Our team utilizes Istio to enable a zero trust model where all communications are encrypted between microservices, centrally authorized, and continually validated against a service mesh policy. Our team achieves this by pushing a centralized policy configuration into the Envoy sidecar proxies for each pod.
  service3:
    head: Pipeline Driven
    img: /assets/Pipeline_Driven.svg
    txt: We believe that in a cloud native environment, most things should be automated. Our team prepares pipelines that scan containers for CVEs at build-time, perform static/dynamic code analysis, evaluate runtime security, run test suites, and deploy on each merge into the master branch.
  service4:
    head: Continuous Monitoring
    img: /assets/Continuous_Monitoring.svg
    txt: Receiving Authority To Operate (ATO) shouldn’t be-all and end-all for the solution. Rather than spending man hours to periodically manually go through the compliance of the security controls, our team believes in continuous monitoring that is triggered at the time of any change to the system.
  service5:
    head: Immutable
    img: /assets/immutability.svg
    txt: Null Pointer Exceptions and Buffer Overflows are a thing of the past when using Immutable structures and pattern matching. At the core of our team's approach to immutability is automation. We automate every part of the deployment down to the lowest level so that any change in a deployed system requires deploying a new system.
  service6:
    head: GitOps
    img: /assets/gitops.svg
    txt: Our team maintains the codebase of the infrastructure in Git so that the entire infrastructure can be re-deployed from the code with the least amount of human intervention. GitOps is the basis for our team to use automated monitoring to alert our engineers when the configuration running in our cloud native environment doesn’t match the configuration in code.
experiences:
  experience1:
    head: Kubernetes
    text: This open source ecosystem for orchestrating, managing and customizing application specific workflows, and automating at scale is the key to launching a stable and secure product quickly. Our team utilizes its revolutionary capacity to design, deploy, and manage cluster based container systems. To ensure the public facing clusters are secure we leverage K8s Admission Control and RBAC.
  experience2:
    head: Service Mesh
    text: Scaling and Securing microservices as they grows in size and complexity can become difficult to manage and understand. Using Service Mesh, our team addresses these challenges where cross-cutting concerns, such as service discovery, service-to-service and origin-to-service security, observability and resiliency, are configured as code  Our team uses both Edge Routing (using Ambassador - Envoy) and Ingress (using Istio - Envoy) to secure network communication down to the pod level. Using Istio as a sidecar, our team provides authentication, observability, relillience, and traffic management.
  experience3:   
    head: Securing etcd
    text: Etcd (the brain behind K8s) is a prized component for attackers to get access to. Our team uses authentication and firewalls to restrict access to etcd as well as encrypt the data in etcd (at rest).
  experience4:  
    head: Falco
    text: Kubernetes runtime security in production environments is critical and necessary to avoid any operational and reputational costs of security breaches. Our team participates with the open source Falco project for container native runtime security. Working at the most basic layer, the kernel, our team can detect anomalous activity at both application and infrastructure level.
---
