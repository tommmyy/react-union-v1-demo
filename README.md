# Project structure

- `./example` - Liferay workspace
- `./example/modules/example-portlet/` - Spring MVC portlet
- `./react-union-boilerplate-liferay/` - FE project
- `./react-union-boilerplate-liferay/packages/app-*` - App shells
- `./react-union-boilerplate-liferay/packages/widget-*` - Widgets

# Liferay workspace

## Install blade-cli

https://learn.liferay.com/dxp/latest/en/building-applications/tooling/blade-cli/installing-and-updating-blade-cli.html

```sh
curl -L https://raw.githubusercontent.com/liferay/liferay-blade-cli/master/cli/installers/local | sh
```

## Create liferay-workspace

```sh
blade init -v 7.4 example
```

## Running Liferay locally

1. Run docker container:

```sh
docker compose up
```

2. Go to http://localhost:8080/

3. Sign in

```
test@liferay.com
test
```

and change password.

## Create MVC porlet

Inside workspace folder

```sh
blade create -v 7.4 -t mvc-portlet -p eu.lundegaard.example -c ExamplePortlet example-portlet
```

```
Successfully created project example-portlet in [WORKSPACE_DIR]/modules
```

## Building a module

```sh
./gradlew modules:example-portlet:build
```

Or

```sh
blade gw modules:example-portlet:build
```

Or

```sh
blade gw modules:example-portlet:jar
```

Jar can be found at: `modules/build/example-portlet/libs`

---

# Generation of official Liferay JS portlet

```sh
yarn global add yo generator-liferay-js
yo liferay-js
```

---

[Slides](https://docs.google.com/presentation/d/1IT1DqcV1o2DDZL3cPvWXfE6bLlv9BTCwfF8ohAytass/edit?usp=sharing)
