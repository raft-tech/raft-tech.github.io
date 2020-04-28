# Raft Website

Jekyll site, based on [Centrarium](https://github.com/bencentra/centrarium) theme.

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
