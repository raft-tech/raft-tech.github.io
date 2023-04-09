---
layout: post
title: "Dynamic Schema Inference for Kafka Messages: Simplifying Data Engineering Pipelines- by Levi Le"
short_title: "Dynamic Kafka Schema Producer"
date: 2023-03-27
categories:
featimg: /assets/images/featimage/data-background.jpg
bgimg: /assets/images/featimage/data-background.jpg
author: Levi Le
---

## History

Data Fabric is a unified platform that allows organizations to manage and share data across different systems and cloud environments. It provides a single, consistent view of data across an organization's IT infrastructure, making it easier to access and analyze data. Data Fabric makes it easy for organizations to add new data sources or processing capabilities without disrupting existing workflows.

Kafka plays a crucial role as the data backbone of data fabric. Thanks to its distributed architecture, Kafka offers a scalable and fault-tolerant platform for handling large volumes of data in real-time from multiple sources. By serving as a messaging system and data hub, Kafka enables seamless data integration between disparate systems and applications.

## Challenges
While Kafka is an excellent platform for managing data, it is not possible to access and analyze it using SQL-like operations with KSQL or Trino when the data lacks a schema. This makes it essential for organizations to invest in a schema management solution that can define, evolve, and govern schemas for data ingested into Kafka. 

Unfortunately, manually defining and maintaining schemas for each dataset our clients have is physically impossible. For instance, having 1000 datasets would require creating 1000 Kafka topics and manually writing 1000 schemas. This does not account for maintenance as the data changes, which could result in a daunting and time-consuming task for organizations.

## Solution

Introducing: Dynamic Kafka Schema Producer. 

The "Dynamic Kafka Schema Producer" is a Python Kafka Producer that streamlines the process of generating, updating, and registering schemas with the schema registry. Built as a wrapper around confluentinc's Python Kafka library's "SerializingProducer", the tool automatically generates a new Avro schema based on the JSON structure of your data and adaptively updates the schema while keeping it backward compatible as your data changes. By abstracting away the code required to set up the producer to work with a schema, the "Dynamic Kafka Schema Producer" reduces the coding effort required to just a few lines of code:

```
producer = DynamicSchemaProducer(producer_config, "schema_registry_url", "kafka_topic")
producer.produce({"field_1": 432, "field_2": "hello", "field_3": ["A","B","C"],"field_4":{"inner_field_1":"inner","inner_field_2": 92046}})
producer.flush(timeout=1)
```

## How it works:
![](/assets/images/dynamic-kafka-producer/dynamic-kafka-producer-flow.png)

## Demo:

- Publish:
```
producer_config = {
    "bootstrap.servers": "localhost:9092",
    "client.id": socket.gethostname(),
}
producer = AutoAvroSchemaProducer(producer_config, "http://localhost:8082", "test-topic")
producer.produce({"field_1": "string", "field_2": 12345.123, "field_3": [1, 2, 3], "field_4": ["a", "b", "c"],
                  "field_5": {"field_5_1": 12.0, "field_5_2": "hello"}})
producer.flush(timeout=1)
```
- Publish again with additional fields on the payload and see the schema changes

```
producer.produce({"field_1": "string", "field_2": 12345.123, "field_3": [1, 2, 3], "field_4": ["a", "b", "c"],
                  "field_5": {"field_5_1": 12.0, "field_5_2": "hello"},
                  "field_6": {"field_6_1": {"field_6_1_1": "hello"}}})
```

Querying from Trino:

## Final Words:

As streaming data becomes increasingly popular, more people will want the ability to perform SQL over Kafka messages using tools like Trino or KSQL. However, to achieve this, you will need a schema for each Kafka topic. As the number of topics grows, maintaining the schemas for each one can become incredibly challenging. By utilizing the Dynamic Schema Producer, you can autonomously handle schema generation, saving you time and headaches in the future.