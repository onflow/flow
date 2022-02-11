---
title: Run on testnet
description: Run the project on the testnet
sidebar_title: Run on testnet
---

Continue reading the sections below for instructions on how to start the project for testnet development.

## Create a Flow Testnet account

You'll need a Testnet account to work on this project. Here's how to make one:

### Generate a key pair

Generate a new key pair with the Flow CLI:

```sh
flow keys generate
```

_⚠️ Make sure to save these keys in a safe place, you'll need them later._

### Create your account

Go to the [Flow Testnet Faucet](https://testnet-faucet.onflow.org/) to create a new account. Use the **public key** from the previous step.

### Save your keys

After your account has been created, export the following environment variables to your shell:

```sh
# Replace these values with the address returned from the faucet and the
# private key you generated in the first step!

export FLOW_ADDRESS=address
export FLOW_PRIVATE_KEY=xxxxxxxxxxxx
export FLOW_PUBLIC_KEY=xxxxxxxxxxxx
```

_⚠️ Note: It's important that these variables are exported in each shell where you're running any of the commands in this walkthrough._

1.  Run: `npm run start:testnet`

    - Testnet development will connect the application to Flow's testnet

2.  Run: `flow project deploy --network testnet -f flow.json -f flow.testnet.json`

    - All contracts are deployed to the Flow testnet.

3.  Select "Blocto" to log in.

Thats it! 🏁

Visit `http://localhost:3001` to interact with your new instance of Kitty Items!
