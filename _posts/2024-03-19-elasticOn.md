---
layout: post
title: "2024 ElasticON Conference"
short_title: "2024 ElasticON Conference"
date: 2024-03-19
categories: 
featimg: /assets/images/featimage/elastic_on_thumb.jpeg
bgimg: /assets/images/featimage/elastic_on_thumb.jpeg
author: Aaron Owens
---

The Generative AI train has arrived and government agencies need to get on board before it departs the station! Insights from the 2024 ElasticON Conference.

Last week, I was able to attend the 2024 ElasticON conference in Chicago. In his keynote, Elastic founder, and CTO Shay Banon introduced exciting new technologies including the Elasticsearch Relevancy Engine (ESRE) and the new query language ES/QL which was called “The one query language to rule them all”: a reference to the powerful ring in The Lord of the Rings. This exciting new query language is currently in beta but should be in one of the official releases soon. ESRE uses vector search to more efficiently create, store and search vector embeddings at scale. The new Elasticsearch AI assistant is powered by ESRE. ES/QL is much simpler to use that legacy query languages and it is very powerful. Elastic has a demo site at esql.demo.elastic.co for anyone who wants to try it out.

However, the real focus of the event was on how Elastic will take advantage of Generative AI over the next year. In this rapidly evolving landscape, the 2024 ElasticON conference clearly showed where Elastic is focused, particularly in the areas of search, logging, monitoring, and alerting. The spotlight was on the relationship between Generative AI and Elasticsearch, painting a future where search is not dead, but reborn. The following is a deep dive into how this transformation is looking, based on the keynotes, live demos, and panel discussions at ElasticON.

## Generative AI: The Game Changer

Generative AI has been making waves across various sectors, but its integration with search technologies, especially Elasticsearch, has sparked a new revolution. The conference highlighted several breakthroughs where Generative AI enhances Elasticsearch's capabilities as a Security Information and Event Management (SIEM) tool. The key takeaway? Generative AI is not replacing search; it's augmenting it to be more intelligent, responsive, and efficient.

## Enhanced Query Understanding

One of the standout innovations discussed was the way Generative AI can improve query understanding in Elasticsearch. This AI-enhanced Elasticsearch can now interpret the intent and context of queries more accurately, leading to more relevant search results. This advancement is crucial for SIEM applications where the precision of query results can significantly impact security monitoring and incident response.

## Smart Logging

The integration of Generative AI with Elasticsearch is set to revolutionize logging. AI can now automatically categorize and tag logs, making it easier to sift through vast amounts of data. This capability is particularly beneficial for organizations dealing with high volumes of log data, enabling them to quickly identify patterns or anomalies indicative of security threats.

## OpenTelemetry for Multicloud Environments

Elastic pledges to be the leader in adopting OpenTelemetry from the Cloud Native Computing Foundation (CNCF). As more and more customers have completed a migration to the cloud, they are now considering hosting data in multiple cloud environments. As the organizations take this next leap OpenTelemetry will become very important. Customers will be able to operate off a single pane of glass while viewing key operational data, metrics, and security alerts in dashboards that reflect all their environments.

## Proactive Monitoring and Alerting

Generative AI's predictive capabilities are paving the way for more proactive monitoring and alerting within Elasticsearch. By analyzing historical data and current trends, AI can forecast potential issues and alert users before they escalate. This forward-looking approach can enhance operational efficiency and tighten security postures, offering a more dynamic response to potential threats.

## Customizable Security Insights

The fusion of Generative AI with Elasticsearch offers unprecedented customization in security insights. Users can tailor the AI to focus on specific areas of interest or concern, ensuring that the monitoring and alerting system is finely tuned to their unique security landscape. This personalization enhances the effectiveness of SIEM tools, making them more agile and adept at handling the nuances of different environments.

## The Future of Search and SIEM

The discussions at ElasticON 2024 made it clear: the future of search, especially within the context of SIEM for logging, monitoring, and alerting, is more vibrant than ever. The integration of Generative AI with Elasticsearch is creating a more intelligent, efficient, and customizable search experience. Far from being dead, search is evolving, becoming an even more powerful tool with AI to simultaneously optimize operations, boost visibility of real time metrics, and quickly mitigate security concerns. From a SOC perspective the AI analysis can act as a junior security analyst providing relevant data quickly to decrease the Mean Time To Respond (MTTR). As these technologies continue to mature and integrate, we can expect to see even more innovative applications and security benefits emerging.

Large Language Models (LLM) like ChatGPT have exploded in capability and adoption over the past year. Generative AI is here to stay, and it will transform almost everything we do in one way or another. A challenge for the federal government is that most of its data environments are designed to protect Controlled Unclassified Information (CUI) at Impact Level 4 (IL4) or above. This prevents protected data in those environments from being sent to an unapproved environment such as a LLM like ChatGPT. The federal government needs to put the appropriate resources into an approved LLM for its organizations to use. The advancements in Logging, Monitoring, and Alerting from Elasticsearch are just the tip of the iceberg. One company which may be providing a solution to this problem is [Ask Sage](https://www.asksage.ai/). According to the company’s website, it provides a LLM that is approved for government CUI and it can integrate with Elasticsearch. Another option would be for government organizations to run their own LLMs but the required manpower and compute costs may make going with another provider more efficient.

The 2024 ElasticON conference has illuminated the path forward for Elasticsearch and Generative AI. The synergy between these technologies is transforming the importance of a powerful SIEM, one where logging, monitoring, and alerting are not just necessary utilities but strategic advantages. As we move forward, it's critical that the federal government quickly adopts the use of LLMs and that it jumps onboard the train. Better yet, I’d like to see the government driving the train! Technology companies are just beginning to unlock AI’s full potential. The benefits of AI will quickly go from being a competitive advantage to a major deficit for any organization that doesn’t utilize them.
