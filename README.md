# Raft Website

![Website](https://img.shields.io/website?down_color=red&down_message=down&up_color=darkgreen&up_message=online&url=https%3A%2F%2Fgoraft.tech) ![Website](https://img.shields.io/website?down_color=red&down_message=down&label=staging&up_color=darkgreen&up_message=online&url=https%3A%2F%2Fraft-website.herokuapp.com%2F)

This repo contains the source code for [Raft's website](https://goraft.tech), using Jekyll (based on [Centrarium](https://github.com/bencentra/centrarium) theme).

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
