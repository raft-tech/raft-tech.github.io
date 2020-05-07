---
layout: work
title: Our Work
permalink: /our-work/
main_nav: true
order: 2
featimg: /assets/pressBanner.jpg
pageTitle: Our Work
header: Mission focused recent work

works:
  work1:
    head: Platform Operations
    img: /assets/cloud_native.svg
    challenge: Our client worked with us to build, maintain, and scale a mission critical public facing application. The application is meant to be used by over 15K institutions to submit over 40M records of data in only 60 days. Additionally, the application is expected to have significant surge in traffic.
    solution: Our team took a holistic approach to meet the unique needs of the application -- from both application and infrastructure levels. We architected a cloud native platform on Kubernetes using microservices with baked in security. At the platform level our team avoided vendor lock-in by providing a flexible architecture and working with open source CNCF solutions for log aggregation, alerting/monitoring, chaos testing, and security. At the application layer, our team built a caching layer using redis, enabled faster writes with Cassandra, fault tolerance using Hystrix, and concurrency using Scala. Utilizing this architecture, we built a platform with low latency and high throughput capable of handling the expected surge.
    technique: Open Source Development, Agile Development (2 week sprints), Istio as sidecar, Infrastructure as Code (IaC), Upstream Kubernetes, EFK, Prometheus, Grafana, Redis, Profiling, Scala, Cassandra, PostgreSQL, etc.

  work2:
    head: DevSecOps
    img: /assets/devsecops.svg
    challenge: Our client needed to build a pipeline that would allow developers, ops, and security folks to collaborate cohesively on the mission while still being agile. Additionally, our client needed infrastructure that would be least trust by default.
    solution: Our team architected a pipeline based on containers with Kubernetes as the orchestration. The pipeline enabled ops engineers to implement the needs of the security team as automated policies in the CI/CD pipeline which further enabled developers to get a clear vision into the needs of the infrastructure at the time of the build. Our team used Istio service mesh to enable authentication, observability, and resiliency at the microservice level. The pipeline was triggered on each merge into master and each pull-request. Each trigger did the following - static & dynamic code analysis, dependency monitoring, base container image CVE and root usage, building the image, storing the image into a private registry, and deploying from the private registry. Additionally, our team utilized GitOps, RBAC, and K8s Admission Control to manage security of the platform.
    technique: Twistlock, GitOps, Immutable Infrastructure, ThreadSafe, Open Container Images, Sidecar pattern, Infrastructure as Code, Trivy, Penentration Testing, Jenkins, etc.

  work3:
    head: Data Science
    img: /assets/data_science.svg
    challenge: Create an innovative solution to detect objects in digital images and videos in real time from aerial imagery. Multiple objects should be detected at any given time with bounding box coordinates.
    solution: We developed a product with a success rate of approximately 95% of detecting objects from the real world images and videos using a machine learning algorithm based on Dataset for Object DeTection in Aerial images (DOTA). The machine learning model can detect up to 15 objects (cars, cargo, trucks, airplanes, etc). The model is wrapped around with a RESTful API and is containerized as a microservice. We also  built an end-to-end ML pipeline using Kubeflow that is capable of constantly automatically re-training the model after it has been put in production.
    technique: Convolution Neural Network (CNN), PyTorch, Kubeflow, ImageMagik, OpenCV, Generative Adverserial Networks (GANs), Hyperparameter Tuning

  work4:
    head: Product Strategy
    img: /assets/product_strategy.svg
    challenge: Our client engaged us to digitize paper based financial educational tools that empower consumers to make better informed decisions about their financial health.
    solution: Following a user-centered and progressive web approach, we created mobile-first tools that aligned with product strategy and met the needs of the target consumers. Our team created these tools using a combination of best practices and creative problem solving, including evaluating the current paper based financial tool, analyzing market trends, interviewing consumer for their needs and wants, researching industry partnerships and performing competitor research.
    technique: Literature review, Environmental scan, Consumer Tool Analysis, Stakeholder and focus group interviews, User personas development, Empathy mapping, Wireframes, Clickable prototypes, Usability testing.   

---
