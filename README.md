# Raft Website

![Website](https://img.shields.io/website?down_color=red&down_message=down&up_color=darkgreen&up_message=online&url=https%3A%2F%2Fgoraft.tech) ![Website](https://img.shields.io/website?down_color=red&down_message=down&label=staging&up_color=darkgreen&up_message=online&url=https%3A%2F%2Fraft-website.herokuapp.com%2F)

This repo contains the source code for:
- [Production Raft website](https://goraft.tech) --> [`master` branch](https://github.com/raft-tech/raft-tech.github.io)
- [Staging Raft website](https://raft-website.herokuapp.com/) --> [`staging` branch](https://github.com/raft-tech/raft-tech.github.io/tree/staging)

The site uses Jekyll (based on [Centrarium](https://github.com/bencentra/centrarium) theme). We ♥️ Open Source Software, so Pull Requests are always welcome (check out this section on how to contribute and checkout the [open issues](https://github.com/raft-tech/raft-tech.github.io/issues))

Table of Contents:

- [Add yourself to the About page (Non Devs)](#add-yourself-to-the-about-page-non-devs)
- [Adding yourself to the About page (For Devs)](#adding-yourself-to-the-about-page-for-Devs)
- [Creating a blog post (Non Devs)](#creating-a-blog-post-non-devs)
- [Creating a blog post (For Devs)](#creating-a-blog-post-for-devs)
- [Running locally (For Devs)](#running-locally-for-devs)
- [Dockerizing (For Devs)](#dockerizing-for-devs)
- [Kubeconfig files (For Devs)](#kubeconfig-files-for-devs)

## Add yourself to the About page (Non Devs)

Welcome to Raft! We work together to solve hard problems and we're glad you've decided to join our journey. In order for you to be added to [Our Team](https://goraft.tech/about/#team) page, please follow these four steps:
0. [Open a new issue](https://github.com/raft-tech/raft-tech.github.io/issues/new) with title `Adding <your name>`
1. Create a new branch from `master`
2. Update the `_data/members.yml` to add your details and add a new file to the `_about/` folder
3. Send a Pull Request from your newly created branch in (1) to `master` and tag `barakstout`, `meissadia`, or `turbomarc` as reviewers

Below is a detailed explanation of each step:

### 0 - Opening a new issue
- If you aren't already part of the Raft GitHub Org, ping Barak Stout on Mattermost (MM) your GitHub username.
- Create an issue by going to this URL - https://github.com/raft-tech/raft-tech.github.io/issues/new
- ![](https://i.imgur.com/SQ6nnzw.png)

### 1 - Creating a new branch
- Go to this URL - https://github.com/raft-tech/raft-tech.github.io
- Click master, type a unique branch name, and click `Create Branch`
- ![](https://i.imgur.com/eS4Qaup.png)
- You will notice `Branch Created` in top left
- ![](https://i.imgur.com/oe5ukdo.png)

### 2 - File changes
- Press the letter `t` on your keyboard and notice you'll see a cursor prompting you to type
- ![](https://i.imgur.com/erDvhh5.png)
- Type `members.yml`
- ![](https://i.imgur.com/2lqRCPb.png)
- Click on the file name
- Click the edit icon on the right
- ![](https://i.imgur.com/K0rbfFC.png)
- Ensure it says in `your branch name`
- ![](https://i.imgur.com/N2lDpbZ.png)
- Scroll all the way to the bottom of the file and copy/paste the following:
```
- id: firstname_lastname
  permalink: /about/firstname_lastname
  full_name: Firstname Lastname
  role: Your Title
  image: <firstname_lastname.jpg> or null (if you don't want your image up)
```
- Once pasted, change the contents
- Add details at the bottom of the page (Ensure the changes are going to correct branch and click `Commit Changes`)
- ![](https://i.imgur.com/0o5aH3N.png)
- Now similarly go to `_about` folder and create a new file
- ![](https://i.imgur.com/80zsiXu.png)
- Name the file `firstname_lastname.md` (change it based on your details)
- ![](https://i.imgur.com/5ZyIOOF.png)
- Copy/Paste below into the editor
```
---
id: firstname_lastname
permalink: "/about/firstname_lastname"
full_name: Firstname Lastname
title: About - Firstname Lastname
role: Your Title
about: Short bio about yourself
github: your github handle
linkedin: yourlinkedin url
homepage: your homepage url - if applicable
featimg: "/assets/aboutBanner1.jpg" <-- do not change
layout: about/profile <-- do not change
---
```
- Change the contents relative to your details
- Fill in details and click `Commit New File`
- ![](https://i.imgur.com/GlPwv6Y.png)
- If you're adding your image, then follow the same process to add an image file to `assets/profiles/` named `firstname_lastname.jpg`
- ![](https://i.imgur.com/VCUqS1q.png)


### 3 - Open a pull request (PR)
- Go to https://github.com/raft-tech/raft-tech.github.io/branches
- Locate your branch and click `New Pull Reques`
- ![](https://i.imgur.com/fAtS5Mf.png)
- Change `master` to `staging`, copy/paste the URL for the issue you created in (0) and type in the body of the PR `Addresses <copy paste URL of the ticket>`, and click `Create pull request`
- ![](https://i.imgur.com/3PbIWIL.png)
- Ensure the commits are going into `staging` from `your branch` and the number of files changed is still 2
- Tag `barakstout`, `meissadia`, or `turbomarc` as reviewers
- The reviewers will review and merge your Pull Request. Once that is done, the changes will show up on the staging site https://raft-website.herokuapp.com/ . Once the changes look good to the reviewer, the reviewer will open a Pull Request for the `staging` branch to be merged into the `master`. Once that Pull Reuqest is merged in by the reviewer, the changes will show up on the main website - http://goraft.tech/

## Adding yourself to the About page (For Devs)

- Make your feature branch
- Append changes to `_data/members/yml`
```
- id: firstname_lastname
  permalink: /about/firstname_lastname
  full_name: Firstname Lastname
  role: Title
  image: firstname_lastname.jpg or null if you don't want your image up
```
- Add new file to `/_about` titled `/_about/firstname_lastname.md`
```
---
id: firstname_lastame
permalink: "/about/firstname_lastname"
full_name: Firstname Lastname
title: About - Firstname Lastname
role: Your title
about: Your Bio
github: "Your GitHub URL"
linkedin: "Your Linkedin URL"
featimg: "/assets/aboutBanner1.jpg" <-- do not change
layout: about/profile <--  do not change
---
```
- If you wanted to add your image, title it `firstname_lastname.jpg` and put it in `assets/profiles/`
- Open a PR for your feature branch to be merged to `staging`. Review your PR. Tag `barakstout`, `meissadia`, or `turbomarc` as reviewers.


## Creating a blog post (Non Devs)
A blog post comprises for three things:

1. Have your blog post in Markdown format - We recommend https://hackmd.io. Copy/Paste the below into the editor.
```
---
layout: post
title: "Really long blog title"
short_title: "Shorter title"
date: 2021-07-14
categories:
featimg: /assets/images/featimage/...
bgimg: /assets/images/bgimg/...
author: Angela Milash
---
```
2. Open [a new issue](https://github.com/raft-tech/raft-tech.github.io/issues/new)
    - (a) The title of the issue should be `Name of the blog title - by John Doe`
    - (b) The body of the ticket drag and drop the two images -- one for the [index page](https://goraft.tech/blog/) and another for the actual blog page (exampel: [here](https://goraft.tech/2021/02/24/diversity-is-our-superpower.html)). Also include the URL of the blog post from HackMD from ()
3. Click `Submit New Issue`
4. Tag either `barakstout`, `meissadia`, or `turbomarc` for review

## Creating a blog post (For Devs)

1. Have your blog post in Markdown format - We recommend https://hackmd.io. Copy/Paste the below into the editor.
```
---
layout: post
title: "Really long blog title"
short_title: "Shorter title"
date: 2021-07-14
categories:
featimg: /assets/images/featimage/...
bgimg: /assets/images/bgimg/...
author: Angela Milash
---
```
2. Open a PR that:
   - add the new markdown file to `_/posts` in the format `YYYY-DD-MM-title-of-the-post.md`
   - add the background image to `assets/images/bgimage`
   - add the index image to `assets/images/featimage`
3. Open a PR for `barakstout`, `meissadia`, or `turbomarc` for review

## Running locally (For Devs)

To run the site locally from source, you will need to [Install Jekyll](https://jekyllrb.com/docs/) and then:
```bash
cd ~/
mkdir raft
cd raft
git clone git@github.com:raft-tech/raft-tech.github.io.git
cd raft-tech.github.io.git
gem install bundler
bundle install
bundle exec jekyll pagemaster --no-permalink about
bundle exec jekyll serve

# raft website avilable at http://localhost:4000
```

## Dockerizing (For Devs)

Build and deploy locally using [Docker](https://www.docker.com/)
```bash
docker build . -t=raft-website

docker run -p 80:80 raft-website
```

## Kubeconfig files (For Devs)
Update the `Image` value in `raft-website-deploy` and deploy `raft-website` on Kubernetes:
```bash
kubectl apply -f kubernetes/raft-website-deploy.yaml
kubectl apply -f kubernetes/raft-website-svc.yaml
```

To get the external IP:
```bash
kubectl get svc raft-website-svc
```
