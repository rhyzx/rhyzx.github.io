---
date: 2015-07-10 22:54
draft: true
title: automation
---

https://github.com/geekwolf/sa-scripts/blob/master/devops.md

## Ruby
- https://github.com/capistrano/capistrano
- https://github.com/chef/chef
- https://github.com/puppetlabs/puppet
- https://github.com/mina-deploy/mina

## Python
- https://github.com/ansible/ansible
- https://github.com/fabric/fabric

## Others
- https://github.com/visionmedia/deploy
- https://github.com/progrium/dokku

----

## CI
- https://github.com/drone/drone
- https://github.com/jenkinsci/jenkins
- https://circleci.com





- http://www.slideshare.net/slowbluecamera/test-presentation
- https://nylas.com/blog/packaging-deploying-python
- http://guides.beanstalkapp.com/deployments/best-practices.html


https://github.com/mikefrey/node-pac


Ansible vs Capistrano
- python(installed by default)
- yml?


## Delpoy
- precompiled assets
- bundled dependencies(production, not dev)
- omitting files like docs, dotfiles, tests
- rebuild?


## Node/Npm
# How to install offline

```
npm install
// add to bundledDependenties
npm pack
npm install --registry=false xxx.tgz
```
- will build(node-sass etc…)
- will rebuild, take long time TODO find solution
