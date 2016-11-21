# PETS sample
Build docker image:

`docker build -t darteaga/pets:sma-example01 .`

Run in docker:

`docker run -d --name pets-container01 -e NODE_ENV=production -p 80:80 --link mongo02:mongodb darteaga/pets:sma-example01`