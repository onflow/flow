---
title: Update
description: Update modified contracts on the testnet
sidebar_title: Update
---

In the [first step](/kitty-items/start/) of this tutorial, you started the project on the testnet. The script uploaded the initial contracts on the network for you.

Now that you implemented and tested your changes locally on the emulator, it is time to deploy your modified smart contracts to the testnet.

## Video Walkthrough

<iframe width="100%" height="450" src="https://www.youtube.com/embed/v-r1Ucg8hHk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Start on testnet

Run the project on the testnet again. The script will use the account you initially created:

> **Important**: You do not need to stop the previous process. By running the next command, existing services will be configured to communicate with the testnet instead of the emulator.

```sh
npm run dev:testnet
```

You will be asked if you want to use the existing account credentials. Enter `Y` to continue:

```sh
? Use existing testnet credentials in env.testnet ? (Y/n) Y
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

? Would you like to view the logs for all processes? (Y/n)
```

Open up the last link to explore your testnet account via flow-view-source. On the left side navigation, locate the Kitty Items contract.

Keep this page open - we will get back to it once we are done!

### Update contract on the testnet

Next, redeploy the contracts to the testnet by running the following command in your terminal, inside the root folder of your project:

> **Note**: You will notice that the previous script execution finished once all services successfully started. You do not need to stop the previous process. You can run the next command in the same terminal without impact on the services running in the background.

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

## Run the update transaction on the testnet

Finally, run the following command to send the transaction to update the contract with the new `shades` images on the testnet.

```shell
npx dotenv -e .env.testnet -- flow transactions send --signer testnet-account ./cadence/transactions/kittyItems/add_nft_images_for_new_kind.cdc -f flow.json -f flow.testnet.json -n testnet
```

You should see the following response. Take note of the Status - it should be `✅ SEALED`.

```shell
Transaction ID: 60f0271a0ab31173f577300a058d644f5752f1fea844bc1ec6c89eafc8708737

Status          ✅ SEALED
ID              60f0271a0ab31173f577300a058d644f5752f1fea844bc1ec6c89eafc8708737
Payer           36e0834a80d3a360
Authorizers     [36e0834a80d3a360]

Proposal Key:
    Address     36e0834a80d3a360
    Index       0
    Sequence    5

No Payload Signatures

Envelope Signature 0: 36e0834a80d3a360
Signatures (minimized, use --include signatures)

Events:
    Index       0
    Type        A.36e0834a80d3a360.KittyItems.ImagesAddedForNewKind
    Tx ID       60f0271a0ab31173f577300a058d644f5752f1fea844bc1ec6c89eafc8708737
    Values
                - kind (UInt8): 5

    Index       1
    Type        A.7e60df042a9c0868.FlowToken.TokensWithdrawn
    Tx ID       60f0271a0ab31173f577300a058d644f5752f1fea844bc1ec6c89eafc8708737
    Values
                - amount (UFix64): 0.00001000
                - from (Address?): 0x36e0834a80d3a360

    Index       2
    Type        A.7e60df042a9c0868.FlowToken.TokensDeposited
    Tx ID       60f0271a0ab31173f577300a058d644f5752f1fea844bc1ec6c89eafc8708737
    Values
                - amount (UFix64): 0.00001000
                - to (Address?): 0x912d5440f7e3769e

    Index       3
    Type        A.912d5440f7e3769e.FlowFees.FeesDeducted
    Tx ID       60f0271a0ab31173f577300a058d644f5752f1fea844bc1ec6c89eafc8708737
    Values
                - amount (UFix64): 0.00001000
                - inclusionEffort (UFix64): 1.00000000
                - executionEffort (UFix64): 0.00000012
```

As indicated, the transaction was sealed and you are ready to mint your new KittyItems NFT on the testnet!

**🎉 Congratulations on completing this tutorial! Because you made it to the very end, we're rewarding you with a unique [FLOAT NFT](https://floats.city/andrea.find/event/198577460)!**

> **Important**: To claim your NFT, open [this FLOAT event](https://floats.city/andrea.find/event/198577460). You will be asked to connect a wallet. Once done, you need to enter a **secret code**. Open the `add_nft_images_for_new_kind.cdc` file you created in [this previous step](/kitty-items/modify/#create-a-transaction-to-update-the-list-of-images-for-your-new-kind). Locate the comment before `execute{}`. Use this code to claim your NFT 🤫

To summarize, you should now understand how to ...

- deploy and update smart contracts
- mint and transfer NFTs
- add a new kind of NFT to the marketplace
- interact with the Flow blockchain from within a web application

## Optional: Mint new sunglasses NFT on testnet

To verify that everything works as expected, you can mint one of the new NFTs on the testnet.

Open the Kitty Items web application: [`http://localhost:3001/`](http://localhost:3001/). This time, the **web application is wired up to interact with testnet smart contracts** you updated. Repeat [the instructions from the last step](/kitty-items/modify/#mint-new-sunglasses-nft).
