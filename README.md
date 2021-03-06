# Raft Website

![Website](https://img.shields.io/website?down_color=red&down_message=down&up_color=darkgreen&up_message=online&url=https%3A%2F%2Fgoraft.tech) ![Website](https://img.shields.io/website?down_color=red&down_message=down&label=staging&up_color=darkgreen&up_message=online&url=https%3A%2F%2Fraft-website.herokuapp.com%2F)

This repo contains the source code for:
- [Production Raft website](https://goraft.tech) --> [`master` branch](https://github.com/raft-tech/raft-tech.github.io)
- [Staging Raft website](https://raft-website.herokuapp.com/) --> [`staging` branch](https://github.com/raft-tech/raft-tech.github.io/tree/staging)

The site uses Jekyll (based on [Centrarium](https://github.com/bencentra/centrarium) theme). We ♥️ Open Source Software, so Pull Requests are always welcome (check out this section on how to contribute and checkout the [open issues](https://github.com/raft-tech/raft-tech.github.io/issues))

Table of Contents:

- New to Raft? Add yourself to the About page [No terminal needed]
- Creating a blog post [No terminal needed]
- Running locally [For Devs]
- Dockerizing [For Devs]
- Kubeconfig files [For Devs]


## Localhost
To run the site locally from source, you will need to [Install Jekyll](https://jekyllrb.com/docs/) and then:
```bash
cd ~/
mkdir raft
cd raft
git clone git@github.com:raft-tech/raft-tech.github.io.git
cd raft-tech.github.io.git
gem install bundler
bundle exec jekyll pagemaster --no-permalink about
bundle exec jekyll serve

# raft website avilable at http://localhost:4000
```

## Docker
Build and deploy locally using [Docker](https://www.docker.com/)
```bash
docker build . -t=raft-website

docker run -p 80:80 raft-website
```

## Kubernetes Config Files
Update the `Image` value in `raft-website-deploy` and deploy `raft-website` on Kubernetes:
```bash
kubectl apply -f kubernetes/raft-website-deploy.yaml
kubectl apply -f kubernetes/raft-website-svc.yaml
```

To get the external IP:
```bash
kubectl get svc raft-website-svc
```
