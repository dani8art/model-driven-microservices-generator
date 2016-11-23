# Model driven microservices generator

> This is an academic project in hard develompent phase and may have bugs and don't work correctly.
> It is intended for qualified beta testers only and must not be used in production systems.


### Install minikube

#### Download

<!--`https://github.com/kubernetes/minikube/releases`

or-->

`https://storage.googleapis.com/minikube-builds/847/minikube-windows-amd64.exe`

#### Run

`minikube start --extra-config=apiserver.ServerRunOptions.ServiceNodePortRange=1-30000`

`minikube dashboard`


### Install kubectl

#### Download

`http://storage.googleapis.com/kubernetes-release/release/v1.3.0/bin/windows/amd64/kubectl.exe`
