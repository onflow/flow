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

Once the script is completed, you will see the following logs:

```sh
✔ API server started
✔ Storefront web app started
✔ Contracts deployed
✔ Admin account initialized
```

You will notice that the script automatically deployed contracts from your local project folder to the testnet. No additional action is required. Your smart contracts are now upgraded on the testnet!

## Mint a new sunglasses NFT on testnet

To verify that everything works as expected, you can mint one of the new NFTs on the testnet.

Open the Kitty Items web application: [`http://localhost:3001/`](http://localhost:3001/). This time, the **web application is wired up to interact with testnet smart contracts** you just upgraded.

Click on the top banner to "Mint some Kitty Items". You will be prompted to enter a password. Enter `KittyItems` and hit "Log In". You should see the [admin dashboard](http://localhost:3001/admin/mint/):

![admin-ui](admin-ui.png)

Now, hit the "Mint Item" button and see a new NFT being generated. The generation of new NFTs is randomized, so you will have to **mint a few new NFTs** until you will see an NFT from your new sunglasses collection.

**Once you see your new sunglasses NFT minted, you have verified that your changes work on the testnet. Congratulations!**
