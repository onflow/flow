---
title: Upgrade
description: Upgrade modified contracts on the testnet
sidebar_title: Upgrade
---

In the [first step](/kitty-items/start/) of this tutorial, you started the project on the testnet. The script uploaded the initial contracts on the network for you.

Now that you implemented and tested your changes locally on the emulator, it is time to deploy your modified smart contracts to the testnet.

## Start on testnet

Run the project on the testnet again. The script will use the account you initially created:

```sh
npm run dev:testnet
```

You will be asked if you want to use the existing account credentuals. Enter `Y` to continue:

```sh
? Use existing tesnet credentials in env.testnet ? (Y/n) Y
```

Once the script is completed, you will see the same logs you saw before:

```sh
✔ API server started
ℹ Kitty Items API is running at: http://localhost:3000
ℹ View log output: npx pm2 logs api

✔ Storefront web app started
ℹ Kitty Items Web App is running at: http://localhost:3001
ℹ View log output: npx pm2 logs web

KITTY ITEMS HAS STARTED


Visit: http://localhost:3001


View your account and transactions here:
https://testnet.flowscan.org/account/0xa4c19ed9d691743c

Explore your account here:
https://flow-view-source.com/testnet/account/0xa4c19ed9d691743c
```

> **Note**: Open the Flowscan link and locate the KittyItems contract.

### Redeploy contracts on testnet

To redeploy the contracts on the testnet, run the following command in your terminal in the root folder:

```sh
flow project deploy --network=testnet -f flow.json -f flow.testnet.json --update
```

Response:

```sh
Deploying 1 contracts for accounts: testnet-account

KittyItems -> 0xa4c19ed9d691743c (71c1af8633de9f82a816bf4ba3ec8f8781e7e11e387de7dc480af396f90fd5d4)


✨ All contracts deployed successfully
```

Your smart contracts are now upgraded on the testnet! Go back to your Flowscan page and refresh the KittyItems contract view. You should see your changes now!

## Mint a new sunglasses NFT on testnet

To verify that everything works as expected, you can mint one of the new NFTs on the testnet.

Open the Kitty Items web application: [`http://localhost:3001/`](http://localhost:3001/). This time, the **web application is wired up to interact with testnet smart contracts** you upgraded.

Click on the top banner to "Mint some Kitty Items". You will be prompted to enter a password. Enter `KittyItems` and hit "Log In". You should see the [admin dashboard](http://localhost:3001/admin/mint/):

![admin-ui](admin-ui.png)

Now, hit the "Mint Item" button and see a new NFT being generated. The generation of new NFTs is randomized, so you will have to **mint a few new NFTs** until you will see an NFT from your new sunglasses collection.

**Once you see your new sunglasses NFT minted, you have verified that your changes work on the testnet. Congratulations!**
