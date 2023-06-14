---
layout: post
title: "A Multi Environment Terraform Setup"
short_title: "Multi Environment Terraform"
date: 2022-01-03
categories:
featimg: /images/featimage/Terraform_Blog_Index.png
bgimg: /images/bgimg/Terraform_Blog_Header.png
author: Jorge Gonzalez
---

## Terraform

We adopted [Terraform](https://www.terraform.io/) recently to help in the provisioning of our service infrastructure across multiple environments. We developed this workflow early in our application’s lifecycle, an advantage that will yield the ability to create and test new services in lower, non-production environments, and then easily replicate them to higher environments.

It is well described elsewhere how to manually manage such deployments across environments, but this deployment workflow is notably entirely automated, managed only by committing the declarative, high-level configuration [Terraform language](https://www.terraform.io/docs/language/index.html) syntax with which we describe our infrastructure; deployments are managed by certain git merges, and services can be updated and created with changes to our Terraform configuration files.

## Proceed with Caution

This text assumes a working understanding of Terraform and CI/CD concepts with CircleCI. It is also recommended that you have already used or included Terraform configurations in your project and have run the local CLI workflow, else the automation this guide describes may not be immediately obvious. Additionally, consider first whether introducing multi-environment automation is worth the added costs and complexity. 

## Initial Configuration

Below is a starter configuration with a remote backend to store our environment’s state in S3 that will provision an RDS instance. This guide uses the Cloudfoundry provider, but the workflow and setup should be quite similar if you’re hosting on AWS.

> One caveat is this presumes the existence of an S3 bucket as a backend to store the Terraform state, which must be created beforehand manually.

```
# main.tf

# Terraform settings and backend
terraform {
  required_providers {
    cloudfoundry = {
      source  = "cloudfoundry-community/cloudfoundry"
      version = "some_stable_version"
    }
  }

  backend "s3" {
    bucket  = "mybucket"
    key     = "tfstate/dev"
    encrypt = true
    region  = "us-east-1"
  }
}

provider "cloudfoundry" {
  api_url      = var.cf_api_url
  user         = var.cf_user
  password     = var.cf_password
}

provider "aws" {
  region = var.aws_region
}

################
# Define data sources #
################

# Target space/org in Cloudfoundry
data "cloudfoundry_space" "space" {
  org_name = var.cf_org_name
  name     = var.cf_space_name
}

# RDS instance
data "cloudfoundry_service" "rds" {
  name = "aws-rds"
}


################
# Provision resources #
################

# RDS on Cloudfoundry
resource "cloudfoundry_service_instance" "database" {
  name             = "rds-dev"
  space            = data.cloudfoundry_space.space.id
  service_plan     = data.cloudfoundry_service.rds.service_plans["micro-psql"]
  recursive_delete = true
}

```

Fantastic. Now we can run the usual `terraform init`, `terraform apply` and so on against that configuration. But what we really want to do is get this running in CI. We’ll use the CircleCI [Terraform Orb](https://circleci.com/developer/orbs/orb/circleci/terraform) to help configure this.

## Automated Deployments

After configuring the Orb to your CircleCi `config.yml` file, create a custom `deploy-infrastructure` job that will be called somewhere in your workflow:

```yaml
# .circle/config.yml

version: '2.1'
orbs:
  terraform: circleci/terraform@x.y.z

commands:
  deploy-infrastructure:
    parameters:
      tf-path:
        type: string
        default: ./terraform/dev
      cf-password:
        type: env_var_name
        default: CF_PASSWORD_DEV
      cf-username:
        type: env_var_name
        default: CF_USERNAME_DEV
      cf-space:
        type: string
        default: dev
      cf-org:
        type: env_var_name
        default: CF_ORG
    steps:
      - checkout
      - install-dependencies
      - login-cloud-provider
      - export-s3-creds
      - prepare-terraform-vars
      - terraform/init:
          path: <<parameters.tf-path>>
          backend_config_file: ./backend_config.tfvars
      - terraform/validate:
          path: <<parameters.tf-path>>
      - terraform/fmt:
          path: <<parameters.tf-path>>
      - terraform/plan:
          path: <<parameters.tf-path>>
          var_file: ./variables.tfvars
      - terraform/apply:
          path: <<parameters.tf-path>>
          var_file: ./variables.tfvars
```

With the `tf-path` parameter, we can reuse this job now as we create new environments and Terraform configurations (this will be more clear later). Most notably the `export-s3-creds` above creates a `backend_config.tfvars` file with the credentials to the S3 bucket used as the Terraform backend (`“mybucket"` above), and the `prepare-terraform-vars` job creates a `variables.tfvars`  with the Cloudfoundry provider credentials, but this can be customized for any cloud provider.

Now that we have a complete, parametrized `deploy-infrastructure` job, we need to run the job on some trigger. In this case it will be merges into a theoretical branch called `dev`.

```yaml
# .circle/config.yml

# ...

workflows:
  dev-deployment:
    jobs:
      - deploy-infrastructure:
      filters:
            branches:
              only:
                - dev
      - deploy-dev:
          requires:
            - deploy-infrastructure
```

Above, the `deploy-infrastructure`  job will trigger under the `dev-deployment` workflow on builds against the `dev` branch. You might be able to see how we can now extrapolate this for new environments.

## Higher Environments

Suppose that in addition to a `dev` environment, we now want a parallel `staging` environment. We have all the Terraform configuration necessary to manually run commands with env-specific params, but as mentioned earlier, we ideally want this running in an automated fashion within CircleCI. 

Recalling the `tfpath` param from above, we need a way for both Terraform and CircleCI to reference discrete sets of configuration files. We can duplicate our terraform’s file structure for separate `dev` and `staging` environments like below:

```
.
├── terraform
    ├── dev
    │   ├── main.tf
    │   ├── variables.tf
    └── staging
        ├── main.tf
        ├── variables.tf
```

> If you wish to use a separate S3 instance as state backend for each environment, it needs to be created manually before Terraform is run. If you are sharing the same S3 instance, you must have different `key` values (`tfstate/dev` above) for each additional env.

These files will remain mostly identical, with some variance in the referenced environment strings and variables. Now with this separation, we can make discrete jobs in CircleCI for each infrastructure deployment:

```yaml
# .circle/config.yml

# ...

jobs:
  deploy-infrastructure-dev:
    executor: terraform/default
    working_directory: ~/app
    steps:
      - deploy-infrastructure

  deploy-infrastructure-staging:
    executor: terraform/default
    working_directory: ~/app
    steps:
      - deploy-infrastructure:
          cf-password: CF_PASSWORD_STAGING
          cf-username: CF_USERNAME_STAGING
          cf-space: tanf-staging
          tf-path: ./terraform/staging
```

And finally, we can create a workflow to only deploy our staging app and infrastructure on merges to a theoretical branch called `staging`:

```yaml
# .circle/config.yml

# ...

workflows:
  dev-deployment:
    jobs:
      - deploy-infrastructure:
          filters:
            branches:
              only:
                - dev
      - deploy-dev:
          requires:
            - deploy-infrastructure

  staging-deployment:
    jobs:
      - deploy-infrastructure-staging:
          filters:
            branches:
              only:
                - staging
      - deploy-staging:
          requires:
            - deploy-infrastructure-staging
          filters:
            branches:
              only:
                - staging
```

The `dev-deployment` and `staging-deployment` workflows will trigger on merges to their respective branches. *Without manually running `terraform` a single time, we have created an automated deployment process that will create, destroy, and update our service infra whenever we commit Terraform configuration changes.*

For example, suppose we wanted to provision a new S3 service in the `dev` environment. Add the below settings to `terraform/dev/main.tf`:

```
# main.tf

##
# Provision S3 bucket
##

data "cloudfoundry_service" "s3" {
  name = "s3"
}

resource "cloudfoundry_service_instance" "data-storage" {
  name             = "data-storage-dev"
  space            = data.cloudfoundry_space.space.id
  service_plan     = data.cloudfoundry_service.s3.service_plans["basic-public-sandbox"]
  recursive_delete = true
}
```

When this is commited and merged into `dev`, Terraform sees this change when it creates a new `terraform/plan`, and creates the new S3 instance in the following `terraform/apply` step. Once this service is live and tested and perhaps iterated upon with your development application, you can replicate the final settings ( `terraform/staging/main.tf` ) and have your new services ready for testing in the staging environment.

## Reflections

There is tremendous value in being able to iteratively deploy, develop, and test your infrastructure with plain code backed by git commits, with reproducible and consistent environments. It’s important to note though that not every team or project needs Terraform. Not every team or project needs these layers of environments and complexity. For us it was so clearly worth being able to easily stand up new services and environments consistently. Still, always consider the various costs of adopting new tools and technologies that will become deeply embedded in your build and deployment processes.

## Further Reading

[Deploy Terraform infrastructure with CircleCI](https://learn.hashicorp.com/tutorials/terraform/circle-ci?in=terraform/automation)
[Running Terraform in Automation | Terraform - HashiCorp Learn](https://learn.hashicorp.com/tutorials/terraform/automate-terraform?in=terraform/automation)
