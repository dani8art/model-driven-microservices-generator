# PETS sample

## Install

`npm install`

## Build docker image:

`docker build -t darteaga/pets:sma-example01 .`

## Run docker container:

`docker run -d --name pets-container01 -e NODE_ENV=production -p 80:80 --link <your_mongo_container>:mongodb darteaga/pets:sma-example01`

or

`docker-compose up -d`
