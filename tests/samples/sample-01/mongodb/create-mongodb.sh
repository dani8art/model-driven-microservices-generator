#! /bin/bash
kubectl create -f ./mongodb/mongodb-rc.yaml
kubectl create -f ./mongodb/mongodb-service.yaml