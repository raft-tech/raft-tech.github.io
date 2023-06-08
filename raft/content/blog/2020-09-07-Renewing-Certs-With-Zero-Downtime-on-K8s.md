---
layout: post
title:  "Renewing certs with zero downtime on K8s"
short_title: "Renew Certs"
date: 2020-09-07
categories:
featimg: /images/featimage/Certificate_Updates1.00B-01.png
bgimg: /images/bgimg/Certificate_Updates_Header_-01.png
author: Bhargav Joshi
tags: blogs
---

Government and large enterprises require periodic SSL certificate renewals, at least once a year to comply with NIST's [Risk Management Framework (RMF)](https://csrc.nist.gov/publications/detail/sp/800-37/rev-2/final). Typically, there is a slight downtime associated with renewing the certificates and to be on the safe side the process is usually run outside of business hours. In this post we show how the certificates can be renewed with zero downtime in a Kubernetes microservice environment with Ambassador as the gateway.

[Ambassador](https://www.getambassador.io/) is a Kubernetes API Gateway that provides Ingress Controller for Routing traffic to Kubernetes clusters. Ambassador supports a broad range of protocols and TLS termination; it also provides traffic management controls for resource availability. TLS installation is covered in [Ambassador Installation](https://www.getambassador.io/docs/latest/howtos/tls-termination/).

## Challenge

How do you renew certificates during normal business hours with zero downtime on any of the pods running in your Kubernetes cluster?

## Solution

We run Ambassador (version 1.0.0) as [*Deployment*](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) with [*NodePort*](https://kubernetes.io/docs/concepts/services-networking/service/#nodeport) configured on port `30043`. [*Kubectl*](https://kubernetes.io/docs/tasks/tools/install-kubectl/) client is connected to the cluster with admin permissions.
(**Note**: In this configuration Ambassador is an internal API gateway, updating certificates on the external edge device is not included)

```bash
$ kubectl get deployments | grep ambassador
ambassador   2/2     2            2           336d

$ kubectl get svc | grep NodePort
ambassador        NodePort   10.100.4.46  <none>  443:30043/TCP  397d
ambassador-admin  NodePort  10.100.13.98  <none>  8877:30001/TCP 397d
```

TLS certificate is installed on the `default` namespace, same as Ambassador.

```bash
$ kubectl get secret tls-cert
NAME       TYPE                DATA   AGE
tls-cert   kubernetes.io/tls   2      336d

```

Check the expiry date of new certificate

```bash
$ openssl x509 -enddate -noout -in newcert-domain.crt 
notAfter=Jul 29 19:13:48 2021 GMT
```

Save copy of existing certificate

```bash
 $ kubectl get secret tls-cert -oyaml > existing.crt

cat existing.crt
apiVersion: v1
data:
  tls.crt:XXX  #PEM data
  tls.key: XXXX
kind: Secret
metadata:
  creationTimestamp: "2020-08-14T13:17:24Z"
  name: tls-cert
  namespace: default
  resourceVersion: "100743823"
  selfLink: /api/v1/namespaces/default/secrets/tls-cert
  uid: 06b1113b-ebda-4ef3-9628-174d873758c6
type: kubernetes.io/tls
```

Delete the currently installed certificate. **Note** that deleting certificate does not remove the certificate from running Ambassador pod

```bash
$ kubectl delete secret tls-cert 
secret "tls-cert" deleted
```

Install the new certificate. Kubernetes will not verify certificate data, so instead use openssl to verify if the certificate is in a valid PEM format.

```bash
$ kubectl create secret tls tls-cert --cert=newcert-domain.crt --key=newcert-domain.key 
```

In our example we have two ambassador pods running

```bash
$ kubectl get pods | grep ambassador
ambassador-79d4dcd47f-8n4ts    1/1     Running   0  69d     
ambassador-79d4dcd47f-ftdnd    1/1     Running   0  70d
```

Delete each pod sequentially, wait for new ambassador pod to be healthy before deleting next one.

```bash
$ kubectl delete pod ambassador-79d4dcd47f-8n4ts
```

We are running Ambassador *Deployment* with scale factor of two, this ensures that two pods are running at all times. As an additional step verify that the *default application* pod configured at port *80/443* is running. Also check `ambassador-admin` (typically running on port `30001`) interface for all endpoints before moving to next ambassador pod. This will ensure that applications have a zero downtime.

## Conclusion

In this post we show how an Ambassador gateway running with scale factor for two can be used to renew certificates with zero downtime. Since the old certificates aren't deleted from the running pods, we can replace the certificate and sequentially start new pods.

If you’re interested in learning more about our best practices for zero downtime, reach out to us at [info@goraft.tech](mailto:info@goraft.tech).
