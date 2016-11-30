# Model driven microservices generator

> This is an academic project in hard develompent phase and may have bugs and don't work correctly.
> It is intended for qualified beta testers only and must not be used in production systems.

## Collaboration

> Is recomended to download [SourceTree](https://www.sourcetreeapp.com/)

### Clone Repository
`git clone https://github.com/dani8art/model-driven-microservices-generator.git`

### Create SRC folder
`cd model-driven-microservices-generator & mkdir src`

### Import project on Eclipse Epsilon
`File >> Import >> General >> Existing Projects into Workspace`

`Browse...` the directory.

`Click 'Finish'`


## Install minikube

#### Download

<!--`https://github.com/kubernetes/minikube/releases`

or-->

`https://storage.googleapis.com/minikube-builds/847/minikube-windows-amd64.exe`

#### Run

`minikube start --extra-config=apiserver.ServerRunOptions.ServiceNodePortRange=1-30000`

`minikube dashboard`


## Install kubectl

#### Download

`http://storage.googleapis.com/kubernetes-release/release/v1.3.0/bin/windows/amd64/kubectl.exe`

## Contact

- Arteaga, Daniel			(dani8art.da@gmail.com)
- Fabregas, Jose Antonio 	(erfabs@gmail.com)
- Ruiz, Alejandro 		    (alejandroruizponce@gmail.com)
