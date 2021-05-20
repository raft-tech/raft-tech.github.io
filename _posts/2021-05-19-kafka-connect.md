---
layout: post
title: "Kafka Connect With SQL and NoSQL Databases"
short_title: "Kafka Connect" 
date: 2021-05-19
categories:
featimg: /assets/images/featimage/Kafka_Connect_Feature-01.png
bgimg: /assets/images/bgimg/Kafka_Connect_Header-01.png
author: Le Chen
---

# Kafka Connect With SQL and NoSQL Databases

## Overview
With Kafka Connect, we are able to set up Kafka to interact with external data stores. In this article, we will be using source connectors to monitor and retrieve data from the configured traditional data sources.

## Prerequisites
* Have [Confluent](https://docs.confluent.io/5.5.0/quickstart/ce-quickstart.html) running with [Connectors](https://docs.confluent.io/home/connect/overview.html) component configured with the appropriate connector plugins.
* Configure Kafka with `auto.create.topics.enable` property set to `true`, or have the appropriate topics created.
* Have RDBMS (e.g. PostgreSQL) running and accessible.
* Have NoSQL (e.g. MongoDB) running and accessible.

## JDBC (PostgreSQL) Setup
RDBMS databses are connected using JDBC, so the configurations remain similar across engines when creating a new connector:
 * This can be done via rest api
    ```bash
    curl -X POST http://connectors:8083/connectors -H "Content-Type: application/json" -d '{
          "name": "<JDBC source connector name>",
          "config": {
                  "connector.class": "io.confluent.connect.jdbc.JdbcSourceConnector",
                  "connection.url": "jdbc:postgresql://<PostgreSQL connection URL>",
                  "connection.user": "<user name>",
                  "connection.password": "<password>",
                  "topic.prefix": "<topic prefix>",
                  "mode":"timestamp",
                  "timestamp.column.name": "update_ts",
                  "table.whitelist": "<tables to monitor>",
                  "validate.non.null": false
                  }
          }'
    ```
 * or through the Confluent Control Center's Connectors configuration screen
   ![Connector Config](/assets/images/kafka-connect/connector_config.png)
  * __Notes__:
    * Within the `config` section of the payload, `poll.interval.ms` attribute can also be added and set to desired value, by default this is to `5000` if unspecified.
    * for the `mode` attribute, the possible values are `bulk`, `incrementing`, `timestamp`, or `timestamp+incrementing`.
      * `bulk` instructs the connector that entire table should be published each time the poll interval occurs.
      * `incrementing` tells the connector that whenever a new record is added to the database, it should be published to kafka as well. _`incrementing.column.name`_ can be added to specify a static column; otherwise, connector will try to use a non-null autoincrementing column.
      * `timestamp` would have the connector publish a new kafka message whenever a record is modified based on _`timestamp.column.name`_ attribute.
      * `timestamp+incrementing` combines the 2 afformentioned.
    * For additional JDBC configuration info, check out [JDBC Source Connector Configuration Properties](https://docs.confluent.io/kafka-connect-jdbc/current/source-connector/source_config_options.html) page.

## NoSQL (MongoDB) Setup
NoSQL connectors are database engine dependent, so the setup from one engine will differ to another. For this article, we're using MongoDB as an example.
* We can create the source connector via rest api or UI as before, below is the curl command:
  ```bash
  curl -X POST http://connectors:8083/connectors -H "Content-Type: application/json" -d '{
        "name": "<MongoDB source connector name>",
        "config": {
                "connector.class": "com.mongodb.kafka.connect.MongoSourceConnector",
                "connection.uri": "mongodb://<MongoDB connection URI>",
                "topic.prefix": "<topic prefix>"
                }
        }'
  ```
* __Notes__:
  * Similar to JDBC, `poll.await.time.ms` attribute can be added to set polling time, by default this is `5000`.
  * We can specify the database to monitor by adding the `database` attribute.
  * For more granularity, we can also specify the `collection` attribute.
  * We can specify `copy.existing` to `true` if existing data should be copied during connector creation.
  * To publish only the document instead of the complete change stream document with metadata, we can specify `publish.full.document.only` to `true`, this by default is `false`.
  * For additional MongoDB configuration info, check out [Kafka Source Connector Guide](https://docs.mongodb.com/kafka-connector/current/kafka-source/).

## Running the System
* Once the connectors have been created and setup correctly, we can see them in the `Connectors` page of the Control Center.
  ![Connectors Sample](/assets/images/kafka-connect/running_connectors.png)
  * We can check for more details through the rest api:
    ```bash
    curl -X GET http://connectors:8083/connectors/<connector name>/status -H "Content-Type: application/json"
    ```
    * if there are any errors, rest api response would show more details than the Control Center UI.

* New messages should populate the corresponding topics.
  ![Topic Sample](/assets/images/kafka-connect/running_topics.png)

## References
* [Kafka Connect Userguide](https://docs.confluent.io/platform/current/connect/userguide.html)
* [JDBC Source Connector for Confluent Platform
](https://docs.confluent.io/kafka-connect-jdbc/current/source-connector/index.html)
* [MongoDB Kafka Source Connector Guide](https://docs.mongodb.com/kafka-connector/current/kafka-source/)