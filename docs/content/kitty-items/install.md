---
title: Install
description: Set up the project locally
sidebar_title: Install
---

Follow the steps below to start your own version of Kitty Items. 

## Video Walkthrough

<iframe width="100%" height="450" src="https://www.youtube.com/embed/hsDHUgH8E7o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Check prerequisites

Before moving to the next step, ensure you have the following tools installed:

### NodeJS

Ensure you have NodeJS [installed](https://nodejs.org/en/). Version **16+** is required.

```
> node -v

v16.x.x
```

> **📣 Tip**: Need to manage different versions of NodeJS? Try using [NVM](https://github.com/nvm-sh/nvm).

### Flow CLI

Ensure you have the [Flow CLI](https://docs.onflow.org/flow-cli/install/). Version **0.32.3+** is required.

```
> flow version

Version: v0.32.3
```

## Clone the project

To get started, clone the project to your machine:

```sh
git clone https://github.com/onflow/kitty-items.git
```

A new folder, `kitty-items`, will be created. You will work in this folder, so navigate into it:

```sh
cd kitty-items
```

## Install dependencies

In the project directory, run the following command to install all dependencies:

```sh
npm install
```

> **Note**: This process may take a few seconds and you will see some logs. This is expected.

Once the installation is completed, you are ready to start the project.

### Apple M1 compatibility

In case you are on an [Apple M1 machine](https://en.wikipedia.org/wiki/Apple_M1), you have to install another package to run the web application on your system.

If you are not aware of the system you are running, run the following command in your terminal:

```sh
> npx envinfo --system

npx: installed 1 in 1.161s

  System:
    OS: macOS 12.2.1
    CPU: (8) x64 Apple M1 Pro
    Memory: 29.95 MB / 16.00 GB
    Shell: 5.8 - /bin/zsh
```

If the CPU mentions `M1`, you need to run this step.

```sh
# move to the web folder
cd web/

# install package
npm i @next/swc-darwin-arm64

# move back to the project root
cd ..
```

> **Note**: This installation will fail if you are not on an Apple M1 machine. If you are on an Apple M1 machine and skip this step, your web application will not start successfully.

🚀
