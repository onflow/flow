---
title: Getting started
description: Clone, install, and start the project
sidebar_title: Getting started
---

The following steps will guide you through the steps required to spin up your own version of Kitty Items.

## 🛠 Check pre-requisites

Before moving to the next step, ensure you have the following tools installed:

### Docker

Ensure you have Docker [installed](https://www.docker.com/get-started) and running. Version **1.13.0+** is required.

```
> docker version

[...]
Server: Docker Engine - Community
 Engine:
  Version:          20.10.12
[...]
```

### NodeJS

Ensure you have NodeJS [installed](https://nodejs.org/en/). Version **14+** is required.

```
> node -v

v14.18.3
```

### Flow CLI

Ensure you installed the [Flow CLI](https://docs.onflow.org/flow-cli). Version **0.28+** is required.

```
> flow version

Version: v0.30.2
```

## Clone the project

```sh
git clone https://github.com/onflow/kitty-items.git
```

## Install dependencies

- Run `npm install` in the root of the project.
- Run `npx lerna exec npm install` to install project dependencies.

**Congratulations, KittyItems is now all set up. Let's start the project locally next**
