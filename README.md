# Hooli Proof of Concept repository
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

- cd hooli-poc
- Install the Nest CLI.

```bash
$ yarn global add @nestjs/cli
```

## Setup
- Make sure your kubernetes cluster is up and running

- Install Nginx Ingress [here](https://kubernetes.github.io/ingress-nginx/deploy/)

- Install Skaffold [here](https://skaffold.dev/docs/install/)

#### Create namespace and volume

- Create hooli-poc namespace

```sh
$ kubectl apply -f ./infra/k8s/namespace.yaml
```

- Create hooli-poc-volume

```sh
$ kubectl apply -f ./infra/k8s/volumes.yaml
```

- map the urls defined in the `./infra/k8s/watch/ingress-service.yaml` file to your localhost in your hosts file

```
127.0.0.1 auth.hooli.devl
127.0.0.1 api.hooli.devl
```

#### Run on local kubernetes
NOTE: Each microservice should have it's own kubernetes deployment file. `./infra/k8s/watch/apps`
```sh
$ skaffold dev
```

#### Access the apps

- api-gateway - http://api.hooli.devl
- fusionauth - http://auth.hooli.devl

#### With port forwarding

- api-gateway - 3000
- fusionauth - 9011
- mailslurper - 2500,8080,8085
- mysql - 3306
- rabbitmq - 15672,5672
- redis - 6379

## Create a new microservice
```bash
$ nest generate app {new-microservice}
```
Add a new kubernetes deployment to `./infra/k8s/watch/apps` and setup the ingress service `./infra/k8s/watch/ingress-service.yaml`

#### DB Setup (If Required)
- Add a DB_NAME, DB_USER and DB_PASSWORD for the service to the `./infra/k8s/watch/db-config.yaml` file
- Update the `init-dbs.sh` script in the `./infra/k8s/watch/mysql.yaml` file so the new DB is created automatically on startup of the MySQL server

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```