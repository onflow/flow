---
title: Run locally
description: Run the backend, frontend, and Flow emulator locally
sidebar_title: Run locally
---

Continue reading the sections below for instructions on how to start the project for local development.

## Local development

1.  Run `npm run start:dev`

    - Local development uses the [Flow Emulator](https://docs.onflow.org/emulator/) and the [FCL Development Wallet](https://github.com/onflow/fcl-dev-wallet) to simulate the blockchain and an FCL-compatible wallet.

2.  Run `flow project deploy --network emulator`

    - All contracts are deployed to the emulator.

3.  Visit `http://localhost:3001` and follow the instructions "Initialize the Service Account to mint Kitty Items" at the top of the webpage.

Thats it! 🏁
