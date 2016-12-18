# Model Driven Microservices Generator MDMG

The idea of this project borns from the problem of *"kubernetize"* (deploy apps
on kubernetes) microservice applications. The main problem of kubernetizing apps is
to define the files which are necessary to deploy apps on kubernetes
becouse it are normaly a lots as well as the concepts and the configuration,
that are reflected on these files, is sometimes out of our knowledge.

On this project we will use the Model-driven software engineering for abstracting the
problem to a easier model that will permits us to describe apps, and after, we will generate
all files and configurations necessary.  

In this documentation we describe concepts which have been used for developing the tool.

## Table of contents

1. **METAMODELS**
  - [Metamodel 01: Microservices](./meta01-microservices.md)
    - [Editor 01](./microservices-editor.md)
  - [Metamodel 02: Kubernetes](./meta02-kubernetes.md)
    - [Editor 02](./kubernetes-editor.md)
2. **TRANSFOMATIONS**
  - [Transformation 01: Model to Model]()
  - [Transformation 02: Model to Text]()
3. **APPENDIX**
  - [Install minikube](./install-minikube.md)
  - [Collaboration](./collaboration.md)
