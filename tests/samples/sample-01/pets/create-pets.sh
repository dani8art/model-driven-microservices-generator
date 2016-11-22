#! /bin/bash
kubectl create -f ./pets/pets-rc.yaml
kubectl create -f ./pets/pets-service.yaml