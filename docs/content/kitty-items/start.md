---
title: Start
description: Start services and deploy to the testnet
sidebar_title: Start
---

The steps below will help you deploy Cadence smart contracts to the testnet - a hosted Flow blockchain environment for testing. Once deployed, you will spin up local services that interact with your deployed contracts to the testnet.

## Start on testnet

To start the project, with all of its services, run the following:

```sh
npm run dev:testnet
```

You will be asked if you have an existing testnet account, enter `n` to generate a new one:

```sh
? Use existing testnet account? (Y/n) n
```

You will see newly generated keys and instructions to create and fund your new account:

```
      Please store the following keys in a safe place:

      Public key: 096..a85
      Private key: d90...804

      What now?

      1. Create a new account using the testnet faucet by visiting:
      https://testnet-faucet.onflow.org/?key=096..a85&source=ki

      2. Copy the new account address from the faucet, and paste it below 👇
      (don't exit this terminal)
```

Open up the link from the terminal, verify you are a human, and hit `Create Account` on the website.

> **Note**: This process will take a few seconds. You should see a loading indicator.

Once completed, the website will show your new account address - similar to `0x2f915dafac3bd7bf`. Hit the `Copy Address` button and return to the terminal and paste your address:

```sh
? Enter your new testnet account address 0x2f915dafac3bd7bf
```

Next, the script will download and configure the project for you. You will see several logs - this is expected. Some noteworthy ones are:

```sh
Testnet envronment config was written to: .env.testnet.local

✔ API server started
✔ Storefront web app started
✔ Contracts deployed
✔ Admin account initialized
```

As indicated in the logs, your account details are stored in a new file: `.env.testnet.local`. This file will be used whenever you restart the service, so you don't have to handle account creation again.

> **Note**: Never commit this file to Git - it contains your private key!

Once all services are started up, you will see the following:

```sh
😸 Kitty Items has started! 😸
```

Congratulations, your own instance of Kitty Items is now running locally and conneccting to the testnet.

## Open Kitty Items

Open up the web application by visiting [`http://localhost:3001`](http://localhost:3001). As a first step, you can try minting new NFTs. Following the instructions on the page.