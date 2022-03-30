---
title: Update
description: Update modified contracts on the testnet
sidebar_title: Update
---

In the [first step](/kitty-items/start/) of this tutorial, you started the project on the testnet. The script uploaded the initial contracts on the network for you.

Now that you implemented and tested your changes locally on the emulator, it is time to deploy your modified smart contracts to the testnet.

## Start on testnet

Run the project on the testnet again. The script will use the account you initially created:

```sh
npm run dev:testnet
```

You will be asked if you want to use the existing account credentials. Enter `Y` to continue:

```sh
? Use existing tesnet credentials in env.testnet ? (Y/n) Y
```

Once all services are up and running, you will see the same logs you saw in the [second step](/kitty-items/start/):

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

Open up the last link to explore your testnet account via flow-view-source. On the left side navigation, locate the Kitty Items contract.

Keep this page open - we will get back to it once we are done!

### Update contract on the testnet

Next, redeploy the contracts to the testnet by running the following command in your terminal, inside the root folder of your project:

```sh
npm run update:testnet
```

The script will update the changed contract:

```sh
Deploying 1 contracts for accounts: testnet-account

KittyItems -> 0x580b8132bc817403 (ba7f...bdc88)

✨ All contracts deployed successfully
```

> **Note**: You may notice that this time only one contract was updated. This is because the other 3 contracts were already deployed outside of this project.

Go back to the flow-view-source page and refresh the contract view. Scroll down verify the changes you made to your contract. For instance, you should see `shades` case in the `Kind` enum.

**If you see your changes your smart contract was updated successfully on the testnet!**

Congratulation on completing this tutorial. You should now understand how to ..

- deploy and update smart contracts
- mint and transfer NFTs
- add a new kind of NFTs to the marketplace
- interact with the Flow blockchain from within a web application

## Optional: Mint new sunglasses NFT on testnet

To verify that everything works as expected, you can mint one of the new NFTs on the testnet.

Open the Kitty Items web application: [`http://localhost:3001/`](http://localhost:3001/). This time, the **web application is wired up to interact with testnet smart contracts** you updated. Repeat [the instructions from the last step](/kitty-items/modify/#mint-new-sunglasses-nft).
