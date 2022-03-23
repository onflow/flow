---
title: Modify
description: Add an exclusive NFT collection
sidebar_title: Modify
---

The following steps will guide you through a simple modification of the Kitty Items project. You will add a new NFT kind, representing an exclusive collection of rare NFTs of sunglasses:

![sunglasses](shades-nft.png)

## Start in emulator

In the last step, you started the project on the testnet. For local development, however, it is recommended to emulate the blockchain network locally using the [Flow Emulator](/emulator/). Once changes are implemented and tested locally, you will deploy the updates to the testnet.

Let's start the project in the emulator by running the command below in the root project folder.

> **Note**: If you still have the previous script running, you should terminate it before running the next command (with `Ctrl + C`).

```sh
npm run dev:emulator
```

You should see similar logs as in the last step. You may notice that you were not prompted for an account. This is because the local setup includes a [developer wallet](https://github.com/onflow/fcl-dev-wallet) that simulated user accounts.

## Add new NFT collection

To add the new NFT collection, we will have to make changes to several components of the project:

- Backend API: Add the new collection to the list of available collections
- Web application: Define the new collection name and add it to the map of available collections
- Cadence: Define the new collection name, add it to the map of available collections, set the content hash for the images ([stored on IPFS](/dapp-development/smart-contracts/#external-storage-networks))
- Flow JS Tests: Add the new collection to the test suite

To start making your changes, it is recommended to open the project in a code editor like [Visual Studio Code](https://code.visualstudio.com/).

> **Recommended**: Install the [VSCode extension for Cadence](https://marketplace.visualstudio.com/items?itemName=onflow.cadence) to get syntax highlighting, type checking, and code completion support. If you have VSCode in your `$PATH`, you can use the CLI to install the extension: `flow cadence install-vscode-extension`.

### Update the backend API

Open the file `/api/src/services/kitty-items.ts` and add new element (`Shades`) at the bottom of the `Kind` enum:

```js:title=/api/src/services/kitty-items.ts
enum Kind {
  Fishbowl = 0,
  Fishhat,
  Milkshake,
  TukTuk,
  Skateboard,
  Shades
}
```

### Update the web application

Open the file `/web/src/global/constants.js` and add a new item (`Shades`) to the `ITEM_KIND_MAP` constant:

```js:title=/web/src/global/constants.js
export const ITEM_KIND_MAP = {
  0: "Fishbowl",
  1: "Fish Hat",
  2: "Milkshake",
  3: "TukTuk",
  4: "Skateboard",
  5: "Shades",
};
```

To simplify this tutorial, we already added the images for the NFT collection to the project folder. If you were to add new NFTs on your own, you would also need to add images to the `web/public/images/kitty-items` folder.

### Update the Cadence smart contract

Open the `/cadence/contracts/KittyItems.cdc` file and make the following changes.

#### Add a new kind

Locate the `enum Kind` object and add a new case (`shades`) to the bottom of the list:

```cadence:title=/cadence/contracts/KittyItems.cdc
pub enum Kind: UInt8 {
    pub case fishbowl
    pub case fishhat
    pub case milkshake
    pub case tuktuk
    pub case skateboard
    pub case shades
}
```

#### Update the kindToString method

This method is used to set the name and description of a specified NFT. Locate the the `kindToString` method and add a new case (`Kind.shades`) to the bottom of the switch statement:

```cadence:title=/cadence/contracts/KittyItems.cdc
pub fun kindToString(_ kind: Kind): String {
    switch kind {
        case Kind.fishbowl:
            return "Fishbowl"
        case Kind.fishhat:
            return "Fish Hat"
        case Kind.milkshake:
            return "Milkshake"
        case Kind.tuktuk:
            return "Tuk-Tuk"
        case Kind.skateboard:
            return "Skateboard"
        case Kind.shades:
            return "Shades"
    }

    return ""
}
```

#### Update the images map

This change will create the link between image hashes and the new NFT collection. Locate the `self.images` map and add a new `Kind.shades` object to the bottom:

```cadence:title=/cadence/contracts/KittyItems.cdc
self.images = {
    [...]
    Kind.shades: {
        Rarity.blue: "bafybeibtxvitlnvksnzwrwmsqdgnoznosknr3fx5jxjazjcerpa2qo4jy4",
        Rarity.green: "bafybeicp5bagsziwkyarey76m5jkr6i3a5yrgr7r435qyuutbtlqxcdbwu",
        Rarity.purple: "bafybeidjigkvt67dtuwrgrpdt2z4dojq2efpbw66ndnffkb6eyr4baml2i",
        Rarity.gold: "bafybeibtxvitlnvksnzwrwmsqdgnoznosknr3fx5jxjazjcerpa2qo4jy4"
    }
}
```

You will notice that the new NFT collection will be available in four rarities, represented by the background color (blue, green, purple, and gold). Each of the hashes represent an IPFS resource that will be pulled up when the NFT will be displayed.

If you were to add your own NFT, you would have to upload images to IPFS and store the new hashes instead.

### Update Flow JS Tests

It is generally recommended to write tests for Cadence contracts to avoid unintended behavior. Flow provides a [JS testing library](/flow-js-testing/) to make testing easier. The Kitty Items project comes pre-configured with this library and a set of tests.

You need to ensure the existing tests account for the new NFT collection. To do that, open the `/cadence/tests/src/kitty-items.js` file and locate the `types` constant. Once located, add a new kind (`shades`) to the bottom of the list:

```js:title=/cadence/tests/src/kitty-items.js
export const types = {
  fishbowl: 1,
  fishhat: 2,
  milkshake: 3,
  tuktuk: 4,
  skateboard: 5,
  shades: 6,
};
```

## Test Cadence changes

Now that you completed all smart contract changes required to add a new NFT collection, you will run the tests to verify that everything works as intended.

In your terminal, navigate to the following folder: `cadence/tests`. You need to install the testing tooling to run the tests:

```sh
cd cadence/tests

npm install
```

Once the installation is completed, you can run the tests in your terminal:

```sh
npm run test
```

The test results should return the following:

```sh
Kitty Items
    ✔ should deploy KittyItems contract (1212 ms)
    ✔ supply should be 0 after contract is deployed (1113 ms)
    ✔ should be able to mint a kitty item (1126 ms)
    ✔ should be able to create a new empty NFT Collection (1127 ms)
    ✔ should not be able to withdraw an NFT that doesnt exist in a collection (1123 ms)
    ✔ should be able to withdraw an NFT and deposit to another accounts collection (1104 ms)
```

**Congratulations! You have completed all changes and your project now includes a new NFT collection for sunglasses.**

## Mint a new sunglasses NFT

To mint one of the new NFTs in your local environment, you will go to the Kitty Items admin dashboard.

First, open the Kitty Items web application: [`http://localhost:3001/`](http://localhost:3001/)

Next, click on the top banner to "Mint some Kitty Items". You will be prompted to enter a password. Enter `KittyItems` and hit "Log In". You should see the [admin dashboard](http://localhost:3001/admin/mint/):

![admin-ui](admin-ui.png)

Now, hit the "Mint Item" button and see a new NFT being generated. The generation of new NFTs is randomized, so you will have to **mint a few new NFTs** until you will see an NFT from your new sunglasses collection.
