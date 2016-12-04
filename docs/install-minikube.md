# Install and Prepare
This guide help you to prepare kubernetes in local.

## Windows instalation

### Install kubernetes

#### Download

`https://storage.googleapis.com/minikube-builds/847/minikube-windows-amd64.exe`

After download the `.exe` file from the google repository, you must add it to the path.

`mkdir C:\kubernetes`

Add here the `.exe` and rename it to `minikube.exe`. Now add to `PATH`.

#### Run

`minikube start --extra-config=apiserver.ServerRunOptions.ServiceNodePortRange=1-30000`

`minikube dashboard`


### Install kubectl

#### Download

`http://storage.googleapis.com/kubernetes-release/release/v1.3.0/bin/windows/amd64/kubectl.exe`

Add to `C:\kubernetes`.

#### Run

`kubectl get pods`
