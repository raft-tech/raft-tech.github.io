---
layout: post
title: "ML Ops with Kubeflow - by Joey Cheung"
short_title: "Kubeflow pipeline"
date: 2023-02-27
categories:
featimg: /assets/images/featimage/...
bgimg: /assets/images/bgimg/...
author: Joey Cheung
---

# Where we are now
Machine learning (ML) is a field of inquiry devoted to understanding and building methods that "learn" – that is, methods that leverage data to improve performance on some set of tasks. It is seen as a part of artificial intelligence. As you can see in this diagram here.

![](https://i.imgur.com/Gy2Lr5H.png)


Machine Learning has really kicked off and those of us in the field of Machine Learning have had many accomplishments thus far with research and creation of all of models such as BERT, GPT, ChatGPT, etc. So this leads to the question: "What's next and how do we productionize these ML models?" Some of the bigger tech companies have this pipeline using tools such as Spark, Apache Airflow, and so on. While others have created their own Machine Learning infrastructure and look relatively like the following below: 

![](https://i.imgur.com/aWqzHeO.jpg)

# Introducing Kubeflow

Today I'm going to walk you through using Kubeflow as such an infrastructure. So what exactly is Kubeflow? Well, Kubeflow is an open-source platform for machine learning and MLOps built on top of Kubernetes and introduced by Google. The different stages in a typical machine learning lifecycle are represented with different software components in Kubeflow, including model development, model training, model serving, and automated machine learning. 

So this is how I see kubeflow currently fitting into the ecosystem. This is specifically for Data Fabric since this is where this work has been mostly done at.

![](https://i.imgur.com/Hu10Vl6.png)


Here you can see the many different components of Kubeflow. The main components being the model training, and model serving. Which is what I'll run through here along with example codes and commands. The resources section below has the repository where you can get kubeflow from and start installing it. 

## Training pipeline 

Training pipeline can be done in a simple way. Here are some code examples of how to build a simple pipeline in Kubeflow. 

```
# You may need to restart your notebook kernel after updating the kfp sdk
!python3 -m pip install kfp --upgrade --user
```
```
EXPERIMENT_NAME = 'Simple notebook pipeline'        # Name of the experiment in the UI
BASE_IMAGE = 'tensorflow/tensorflow:2.0.0b0-py3'    # Base image used for components in the pipeline
```
```
import kfp
import kfp.dsl as dsl
from kfp import compiler
from kfp import components
```
```
@dsl.python_component(
    name='add_op',
    description='adds two numbers',
    base_image=BASE_IMAGE  # you can define the base image here, or when you build in the next step. 
)
def add(a: float, b: float) -> float:
    '''Calculates sum of two arguments'''
    print(a, '+', b, '=', a + b)
    return a + b
```
```
# Convert the function to a pipeline operation.
add_op = components.func_to_container_op(
    add,
    base_image=BASE_IMAGE, 
)
```
```
@dsl.pipeline(
   name='Calculation pipeline',
   description='A toy pipeline that performs arithmetic calculations.'
)
def calc_pipeline(
   a: float =0,
   b: float =7
):
    #Passing pipeline parameter and a constant value as operation arguments
    add_task = add_op(a, 4) #Returns a dsl.ContainerOp class instance. 
    
    #You can create explicit dependency between the tasks using xyz_task.after(abc_task)
    add_2_task = add_op(a, b)
    
    add_3_task = add_op(add_task.output, add_2_task.output)
```
```
import re
import requests
from urllib.parse import urlsplit

def get_istio_auth_session(url: str, username: str, password: str) -> dict:
    """
    Determine if the specified URL is secured by Dex and try to obtain a session cookie.
    WARNING: only Dex `staticPasswords` and `LDAP` authentication are currently supported
             (we default default to using `staticPasswords` if both are enabled)

    :param url: Kubeflow server URL, including protocol
    :param username: Dex `staticPasswords` or `LDAP` username
    :param password: Dex `staticPasswords` or `LDAP` password
    :return: auth session information
    """
    # define the default return object
    auth_session = {
        "endpoint_url": url,    # KF endpoint URL
        "redirect_url": None,   # KF redirect URL, if applicable
        "dex_login_url": None,  # Dex login URL (for POST of credentials)
        "is_secured": None,     # True if KF endpoint is secured
        "session_cookie": None  # Resulting session cookies in the form "key1=value1; key2=value2"
    }

    # use a persistent session (for cookies)
    with requests.Session() as s:

        ################
        # Determine if Endpoint is Secured
        ################
        resp = s.get(url, allow_redirects=True)
        if resp.status_code != 200:
            raise RuntimeError(
                f"HTTP status code '{resp.status_code}' for GET against: {url}"
            )

        auth_session["redirect_url"] = resp.url

        # if we were NOT redirected, then the endpoint is UNSECURED
        if len(resp.history) == 0:
            auth_session["is_secured"] = False
return auth_session
        else:
            auth_session["is_secured"] = True

        ################
        # Get Dex Login URL
        ################
        redirect_url_obj = urlsplit(auth_session["redirect_url"])

        # if we are at `/auth?=xxxx` path, we need to select an auth type
        if re.search(r"/auth$", redirect_url_obj.path): 
            
            #######
            # TIP: choose the default auth type by including ONE of the following
            #######
            
            # OPTION 1: set "staticPasswords" as default auth type
            redirect_url_obj = redirect_url_obj._replace(
                path=re.sub(r"/auth$", "/auth/local", redirect_url_obj.path)
            )
            # OPTION 2: set "ldap" as default auth type 
            # redirect_url_obj = redirect_url_obj._replace(
            #     path=re.sub(r"/auth$", "/auth/ldap", redirect_url_obj.path)
            # )
            
        # if we are at `/auth/xxxx/login` path, then no further action is needed (we can use it for login POST)
        if re.search(r"/auth/.*/login$", redirect_url_obj.path):
            auth_session["dex_login_url"] = redirect_url_obj.geturl()

        # else, we need to be redirected to the actual login page
        else:
            # this GET should redirect us to the `/auth/xxxx/login` path
            resp = s.get(redirect_url_obj.geturl(), allow_redirects=True)
            if resp.status_code != 200:
                raise RuntimeError(
                    f"HTTP status code '{resp.status_code}' for GET against: {redirect_url_obj.geturl()}"
                )

            # set the login url
            auth_session["dex_login_url"] = resp.url

        ################
        # Attempt Dex Login
        ################
        resp = s.post(
            auth_session["dex_login_url"],
            data={"login": username, "password": password},
            allow_redirects=True
        )
        if len(resp.history) == 0:
            raise RuntimeError(
                f"Login credentials were probably invalid - "
                f"No redirect after POST to: {auth_session['dex_login_url']}"
            )

        # store the session cookies in a "key1=value1; key2=value2" string
        auth_session["session_cookie"] = "; ".join([f"{c.name}={c.value}" for c in s.cookies])

    return auth_session

```

## Serving the model

Serving the model is mostly done using kubectl commands. This as well as creating a yaml file to point to where the model lives. Here are some snippets of creating a test service using the famous iris training dataset as well as the results:

```
kubectl create namespace kserve-test
kubectl apply -n kserve-test -f - <<EOF
apiVersion: "serving.kserve.io/v1beta1"
kind: "InferenceService"
metadata:
  name: "sklearn-iris"
spec:
  predictor:
    model:
      modelFormat:
        name: sklearn
      storageUri: "gs://kfserving-examples/models/sklearn/1.0/model"
EOF
# Can put this into a .yaml file (example is sklearn.yaml)
kubectl get inferenceservices sklearn-iris -n kserve-test
kubectl get svc istio-ingressgateway -n istio-system
# GKE
export INGRESS_HOST=worker-node-address
# Minikube
export INGRESS_HOST=$(minikube ip)
# Other environment(On Prem)
export INGRESS_HOST=$(kubectl get po -l istio=ingressgateway -n istio-system -o jsonpath='{.items[0].status.hostIP}')
export INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="http2")].nodePort}')
cat <<EOF > "./iris-input.json"
{
  "instances": [
    [6.8,  2.8,  4.8,  1.4],
    [6.0,  3.4,  4.5,  1.6]
  ]
}
EOF
#Example request
SERVICE_HOSTNAME=$(kubectl get inferenceservice sklearn-iris -n kserve-test -o jsonpath='{.status.url}' | cut -d "/" -f 3)
curl -v -L -H "Host: ${SERVICE_HOSTNAME}" -H "Cookie: authservice_session=add_authservice_session_cookie_value_from_browser" http://${INGRESS_HOST}:${INGRESS_PORT}/v1/models/sklearn-iris:predict -d @./iris-input.json
```

The output of the request below should look like such: 

```
*   Trying 10.152.183.241...
* TCP_NODELAY set
* Connected to 10.152.183.241 (10.152.183.241) port 80 (#0)
> POST /v1/models/sklearn-iris:predict HTTP/1.1
> Host: sklearn-iris.admin.example.com
> User-Agent: curl/7.58.0
> Accept: */*
> Cookie: authservice_session=MTU4OTI5NDAzMHxOd3dBTkVveldFUlRWa3hJUVVKV1NrZE1WVWhCVmxSS05GRTFSMGhaVmtWR1JrUlhSRXRRUmtnMVRrTkpUekpOTTBOSFNGcElXRkU9fLgsofp8amFkZv4N4gnFUGjCePgaZPAU20ylfr8J-63T
> Content-Length: 76
> Content-Type: application/x-www-form-urlencoded
> 
* upload completely sent off: 76 out of 76 bytes
< HTTP/1.1 200 OK
< content-length: 23
< content-type: text/html; charset=UTF-8
< date: Tue, 12 May 2020 14:38:50 GMT
< server: istio-envoy
< x-envoy-upstream-service-time: 7307
< 
* Connection #0 to host 10.152.183.241 left intact
{"predictions": [1, 1]}
```

# Conclusion 

Machine Learning has come a long way and the current state of ML is going towards how to better productionize these Machine Learning models and Kubeflow is one such possible way of doing just that.

# Specifications for Kubeflow set up

Minikube: 1.22.0
Kustomize: 3.2.0
Kubernetes: 1.21.0
Kubeflow manifests: 1.6.0 and 1.6.1

# Resources

https://github.com/kubeflow/manifests#installation
https://kserve.github.io/website/0.7/get_started/first_isvc/#run-your-first-inferenceservice
https://v1-5-branch.kubeflow.org/docs/components/pipelines/
https://github.com/raft-tech/data-fabric/tree/dev/examples/Kubeflow