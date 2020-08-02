---
layout: post
title:  "Rook: The Storage Orchestrator"
short_title: "Rook on K8s"
date: 2020-08-01
categories:
featimg: /assets/images/featimage/featimg-blog-rook.jpg
bgimg: /assets/images/bgimg/Blog_Rook_2.00_V3-01.png
author: James
---
## What is Rook? 

Rook is a cloud-native, open-source storage orchestration platform for Kubernetes environments. It provides a way to automate the tasks of a storage administrator (deployment, provisioning, scaling migration, disaster recovery, monitoring and rescue management). You can use it for file, block, and object storage. It’s an incubating project of Cloud-Native Foundation. 


## Rook works with several storage providers.  

Ceph and EdgeFS are the most stable within the list of storage providers.
- <strong>CEPH (Stable):</strong> Ceph is a highly scalable distributed storage solution for block storage, object storage, and shared filesystems with years of production deployments. 
- <strong>EdgeFS (Stable):</strong> EdgeFS is high-performance and fault-tolerant decentralized data fabric with access to object, file, NoSQL and block. 
- <strong>CockroachDB (Alpha):</strong> CockroachDB is a cloud-native SQL database for building global, scalable cloud services that can survive disasters. 
- <strong>Cassandra (Alpha):</strong> Cassandra is a highly available NoSQL database featuring lightning fast performance, tunable consistency, and massive scalability. 
- <strong>NFS (Alpha):</strong> NFS allows remote hosts to mount filesystems over a network and interact with those filesystems as though they are mounted locally. 
- <strong>Yugabyte DB (Alpha):</strong> YugaByteDB is a high-performance, cloud-native distributed SQL database which can recover from disk, node, zone, and region failures automatically. 

## Benefits: 

One of the main benefits of Rook is that it interacts with data storage through Kubernetes via configuration files. You will no longer need to manually configure storage providers using direct commands.  

For example, if you would like to create CephFS in a cluster, all you would have to do is create a yaml file.

- You can automate provisioning of storage in Kubernetes 
- It eliminates running manual configuration commands for creating storage 
- You can run software distributed systems (SDS) (such as Ceph) on top of Kubernetes 
- Rook can work with several storage providers. Some are in alpha stage but Ceph and EdgeFS are stable 
- Health checks for MONs (ceph-mon is the cluster monitor daemon for the Ceph distributed file system) with automatic failover 
- Simple management of Ceph clusters, pools, and filesystem through Kubernetes objects 
- Offers storage selections in one central place 
 
## Why is it needed? 

- Simple and reliable automated resource management 
- Hyper-scale or hyper-converge your storage clusters 
- Efficiently distribute and replicate data to minimize loss 
- Provision, file, block, and object with multiple storage providers 
- Manage open-source storage technologies 
- Easily enable elastic storage in your datacenter 
- It is open-source software released under the Apache 2.0 license 
- Optimize workloads on commodity hardware 

## Getting Started 

For more info, you can take a look at the [Quick Start Guide](https://rook.io/docs/rook/v0.9/quickstart-toc.html), at the [GitHub repo](https://github.com/rook/rook), Here are the basic steps used to get Rook running using Ceph as an example.

### Prerequisites for CephFS 

You will need at least one unformatted disk. 

- Raw device (no partitions or formatted file systems) 
- RAW Partition (no formatted filesystems) 

   Rook is made up of several pre-defined yaml files for each storage provider. The best way to run Rook is by cloning the git repository.  

   Getting the repository: 
  ```

  $ git clone https://github.com/rook/rook.git 

  ```


Once you have cloned the repository, you can `cd` into the Ceph directory to run all the pods needed for Rook. 

```
$ cd rook/cluster/examples/kubernetes/ceph 

```

First we need common.yaml , operator.yaml , cluster.yaml, and the toolbox.yaml. 

 

### Common.yaml: 
This will basically create everything that is required by the Rook operator and the Ceph-Cluster. It provides:

- Namespace 

- CustomResourceDefinitionRole 

- ServiceAccount 

- RoleBinding 

- ClusterRole 

- ClusterRoleBinding 


```

$ kubectl create -f common.yaml 

```


### operator.yaml: 
This deploys the operator. It provides:

- Deployment 

```

$ kubectl create -f operator.yaml 

```

### cluster.yaml: 
This will take a few minutes. It provides:

- CephCluster 

```

$ kubectl create -f cluster.yaml 

```


### toolbox.yaml:
This will deploy a Pod which can we use to check the integrity of the cluster for example the Ceph health status. It provides:

- Deployment
- Health Monitoring

```
 
$ kubectl create -f toolbox.yaml 
$ ceph status 

```
 

### Block Storage 

 
A storage class is also needed. 

 
You can use the predefined storageclass.yaml file located at `rook/cluster/examples/kubernetes/ceph/csi/rbd/storageclass.yaml`

```

$kubectl create –f storageclass.yaml 

```
 

Example PVC Claim for Block Storage: 

```

apiVersion: v1 

kind: PersistantVolumeClaim 

metadata:  

     name: rook-ceph-block-pvc 

spec: 

     storageClassName: rook-ceph-block 

     accessModes: 

     - ReadWriteOnce 

     resources:  

         requests: 

             storage: 1Gi    

```
 

## Shared Filesystems 

A shared filesystem can be mounted with read/write permission from multiple pods. This may be useful for applications which can be clustered using a shared filesystem. To run a shared filesystem, we will need a storageclass.yaml and filesystem.yaml 

 

### filesystem.yaml: 

Create the filesystem by specifying the desired settings for the metadata pool, data pools, and metadata server in the CephFilesystem CRD. In this example we create the metadata pool with replication of three and a single data pool with replication of three. For more options, see the documentation on creating shared filesystems. This config file provides:
- CephFilesystem 


```

$ kubectl create -f rook/cluster/examples/kubernetes/ceph/csi/cephfs/filesystem.yaml 

```
 

### storageclass.yaml: 

Before Rook can start provisioning storage, a StorageClass needs to be created based on the filesystem. This is needed for Kubernetes to interoperate with the CSI driver to create persistent volumes. This config file provides:
- StorageClass 


```

$ kubectl create -f csi/cephfs/storageclass.yaml 

```
 

## Verify a succesfull deployment 

You can verify the status of CEPH by running a command on the rook-ceph-tool container 

``` 

$ kubectl exec -n rook-ceph rook-ceph-tools-<randomID> ceph status 

```

 
## Example PVC claim for CephFS: 

```

apiVersion: v1 

kind: PersistentVolumeClaim 

metadata: 

  name: cephfs-pvc 

spec: 

  accessModes: 

  - ReadWriteMany 

  resources: 

    requests: 

      storage: 1Gi 

  storageClassName: rook-cephfs 

```

I mentioned the steps to get Rook running on a Kubernetes Cluster. You can customize to fit your needs and scale to your environment.  
 
 
## Should I run my database in a container?

 
The consensus says it’s usually not recommended to run a DB within a K8 cluster container. There are many factors to think about when deciding to run a DB within a container.  

**Scalability** 

Scaling the database/data Store is one of the primary challenges we face when the workload is dynamic. Most data stores have Read Scalability, but what about Write Scalability? Most RDBMSs are yet to have the Write Scalability option as of today. 

 
**Ease of Installation and configuration** 

How many times do you really need to install database/data store on a production setup in a month? The answers are usually zero or at max a single digit.  It’s pretty easy to get a container with a base image up and running and the post-install can be accomplished with an automation tool (ie. Ansible). 

 
**Rollup upgrade and patching** 

How many times do you usually update a db within a year? The answer is zero or maybe a few time a year. 

 
**Performance** 

There is a theory that running database/data store in container improves performance. Database performance mostly comes from I/O and Memory. If you are assigning an external volume to a container as the data store, you depend on persistence storage APIs like Ceph. Database vendors recommend local SSD for better performance. 

 
**Cost** 

It’s possible to save associated database licensing and VM costs when you use containers in database. Many RDBMS/Data store vendors still do not have a clear policy on licensing for usage of databases in Containers. For most databases, cost is based on underlying cpu cores. If this is the case, I don’t see much savings in going the container route. 

 
**Portability** 

This is where the container route is above the rest. You can just ship your container images with complete environment configuration to another environment very easily.  

 
**Challenges** 

There are also some key challenges while running databases in containers such as persistent storage, maintenance of your DevOps environment along with your database maintenance, container security, skills (you need DevOps engineers along with DBAs or the DBAs need to re-skill). 

 
So it appears running a DB within a container does have it’s advantages. You do get some benefits from the automation Kubernetes provides to keep the database application running. That said, it is important to remember that pods are transient, so the likelihood of database application restarts or failovers is higher. Also, some of the more database-specific administrative tasks—backups, scaling, tuning, etc.—are different due to the added abstractions that come with containerization. 

 
Here is an example criteria for setting up a database environment: 

- save data safety for 10 years or even more (important data) 
 

- handle 100TB of data or more 
 

- high availability 
 

- scalability, add more storage without downtime and easy on adding new storage 
 

- write operation are more frequent than read operations 
 

## DB storage comparison: Ceph or Cassandra
Here is a comparison of the two with pros and cons. 

 
**Cassandra**

- \+ Very fast at writing operation which using memtable for improving writing operations 

- \+ Easy setup on new nodes (without change any configurations) 

- \+ Just like other databases, not much effort to connect to cluster from application  

- \+ Monitor via JConsole 

- \+ High availability 
 

**Ceph** 

- \- Hard to setup in the first place(That’s debatable, depends on who you’re asking) 

- \- Each node has different configurations. Admin has to register new nodes to cluster manually (ceph-deploy or automation tools) 

- \+ Connect to storage via RGW API or natively with librados 

- \+ Multi osds(object storage daemon)/host 

- \+ Very good monitoring metrics about cluster 

- \+ High availability 

Both can save data for 10 years or more and can handle more than 100TB or more. Both can be configure for high availability. Ceph is built for storage and Cassandra is built to be a key/value database. Ceph is a storage and is highly scalable. OSD’s can be added on the fly and without much work. Cassandra is build specifically for Databases. After researching Cassandra, it appears to be faster in the Database realm. 

## Wrap-up
In this article I used a Rook Operator to deploy all the processes needed to run a Ceph cluster within Kubernetes. I also gave a comparison on running a Database on Ceph and Cassandra. You can use the storage solutions provided by Ceph (object, block, filesystem) to persist the data of your workload in a safe way.



All that Rook requires to run is a Kubernetes cluster where the storage is to be configured. Rook’s goal is to make your life easier by simplifying storage configuration. Kubernetes has enabled applications to be cloud native, but application storage has lacked cloud native features from the start. Rook, in conjunction with Ceph and other storage systems, bridges that divide. What Kubernetes has done for streamlining deployment of containerized applications, Rook is doing for storage, bringing dynamic data storage orchestration features to modern data centers. Rook reduces the effort required of a data center’s storage team. The main benefits are health checks for MONs with automatic failover, simple management of Ceph clusters, pools, filesystem and RGW through Kubernetes objects as well as offering storage selection in one central place. Rook and Ceph can help teams build cloud native solutions for storage. Now you can use the storage solutions provided by Ceph (object, block, filesystem) to persist the data of your workload in a safe way.
