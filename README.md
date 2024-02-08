# Project structure

- `./example` - Liferay workspace
- `./example/modules/example-portlet/` - Spring MVC portlet
- `./react-union-boilerplate-liferay/` - FE project
- `./react-union-boilerplate-liferay/packages/app-*` - App shells
- `./react-union-boilerplate-liferay/packages/widget-*` - Widgets

# Liferay workspace

## Install blade-cli

See [blade docs](https://learn.liferay.com/dxp/latest/en/building-applications/tooling/blade-cli/installing-and-updating-blade-cli.html).

Installation:

```sh
curl -L https://raw.githubusercontent.com/liferay/liferay-blade-cli/master/cli/installers/local | sh
```

## Create liferay-workspace

```sh
blade init -v 7.4 example
```

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

---

# Generation of official Liferay JS portlet

```sh
yarn global add yo generator-liferay-js
yo liferay-js
```

---

# References

- [Slides](https://docs.google.com/presentation/d/1IT1DqcV1o2DDZL3cPvWXfE6bLlv9BTCwfF8ohAytass/edit?usp=sharing)
- [liferay-npm-bundler](https://github.com/izaera/liferay-frontend-projects/blob/master/projects/js-toolkit/docs/manuals/liferay-npm-bundler.md) - docs
- [The format of configuration in liferay-npm-bundler projects](https://github.com/izaera/liferay-frontend-projects/blob/master/projects/js-toolkit/docs/reference/configuration-json.md)
