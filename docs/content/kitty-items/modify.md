---
title: Modify
description: Add an exclusive NFT collection
sidebar_title: Modify
---

The following steps will guide you through a simple modification of the Kitty Items project. You will add a new NFT kind, representing an exlusive collection of rare NFTs.

## Start in emulator

In the last step, you started the project on the testnet. For local development, however, it is recommended to emulate the blockchain network locally using the [Flow Emulator](/emulator/). Once changes are implemented and tested locally, you would deploy the updates to the testnet.

Let's start the project in the emulator by running the command below in the root project folder.

> **Note**: If you still have the previous process running, you should terminate it before running the command.

```sh
npm run dev:emulator
```

You should see similar logs as in the last step. You may notice that you were not prompted for an account. This is because the local setup includes a [developer wallet](https://github.com/onflow/fcl-dev-wallet) that simulated user accounts.

## Add NFT kind

Need to update 4 files.

### Web Application

You need to list the new kind in the map that defines the kinds in a map:

`/web/src/global/constants.js`: Add 6th item - the star

```js
export const ITEM_KIND_MAP = {
  0: "Fishbowl",
  1: "Fish Hat",
  2: "Milkshake",
  3: "TukTuk",
  4: "Skateboard",
  5: "Shades",
  6: "Star",
};
```

### Backend API

You need to add the new kind to the map of available kinds:

`/api/src/services/kitty-items.ts`: Add new kind for star

```js
enum Kind {
  Fishbowl = 0,
  Fishhat,
  Milkshake,
  TukTuk,
  Skateboard,
  Shades,
  Star
}
```

### Cadence

> **TODO**: Add images for the star (4 colors, 4 sizes) + upload to IPFS?

You need to add the new kind in several places:

`/cadence/contracts/KittyItems.cdc`: Add new kind for star

```cadence
pub enum Kind: UInt8 {
        pub case fishbowl
        pub case fishhat
        pub case milkshake
        pub case tuktuk
        pub case skateboard
        pub case shades
        pub case star
    }

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
            case Kind.star:
                return "Star:
        }

        return ""
    }

[...]

        self.images = {
            Kind.fishbowl: {
                Rarity.blue: "bafybeibuqzhuoj6ychlckjn6cgfb5zfurggs2x7pvvzjtdcmvizu2fg6ga",
                Rarity.green: "bafybeihbminj62owneu3fjhtqm7ghs7q2rastna6srqtysqmjcsicmn7oa",
                Rarity.purple: "bafybeiaoja3gyoot4f5yxs4b7tucgaoj3kutu7sxupacddxeibod5hkw7m",
                Rarity.gold: "bafybeid73gt3qduwn2hhyy4wzhsvt6ahzmutiwosfd3f6t5el6yjqqxd3u"
            },
            Kind.fishhat: {
                Rarity.blue: "bafybeigu4ihzm7ujgpjfn24zut6ldrn7buzwqem27ncqupdovm3uv4h4oy",
                Rarity.green: "bafybeih6eaczohx3ibv22bh2fsdalc46qaqty6qapums6zhelxet2gfc24",
                Rarity.purple: "bafybeifbhcez3v5dj5qgndrx73twqleajz7r2mog4exd7abs3aof7w3hhe",
                Rarity.gold: "bafybeid2r5q3vfrsluv7iaelqobkihfopw5t4sv4z2llxsoe3xqfynl73u"
            },
            Kind.milkshake: {
                Rarity.blue: "bafybeialhf5ga6owaygebp6xt4vdybc7aowatrscwlwmxd444fvwyhcskq",
                Rarity.green: "bafybeihjy4rcbvnw6bcz3zbirq5u454aagnyzjhlrffgkc25wgdcw4csoe",
                Rarity.purple: "bafybeidbua4rigbcpwutpkqvd7spppvxemwn6o2ifhq6xam4sqlngzrfiq",
                Rarity.gold: "bafybeigdrwjq4kge3bym2rbnek2olibdt5uvdbtnuwto36jb36cr3c4p5y"
            },
            Kind.tuktuk: {
                Rarity.blue: "bafybeidjalsqnhj2jnisxucv6chlrfwtcrqyu2n6lpx3zpuuv2o3d3nwce",
                Rarity.green: "bafybeiaeixpd4htnngycs7ebktdt6crztvhyiu2js4nwvuot35gzvszchi",
                Rarity.purple: "bafybeihfcumxiobjullha23ov77wgd5cv5uqrebkik6y33ctr5tkt4eh2e",
                Rarity.gold: "bafybeigdi6ableh5mvvrqdil233ucxip7cm3z4kpnpxhutfdncwhyl22my"
            },
            Kind.skateboard: {
                Rarity.blue: "bafybeic55lpwfvucmgibbvaury3rpeoxmcgyqra3vdhjwp74wqzj6oqvpq",
                Rarity.green: "bafybeic55lpwfvucmgibbvaury3rpeoxmcgyqra3vdhjwp74wqzj6oqvpq",
                Rarity.purple: "bafybeiepqu75oknv2vertl5nbq7gqyac5tbpekqcfy73lyk2rcjgz7irpu",
                Rarity.gold: "bafybeic5ehqovuhix4lyspxfawlegkrkp6aaloszyscmjvmjzsbxqm6s2i"
            },
            Kind.shades: {
                Rarity.blue: "bafybeibtxvitlnvksnzwrwmsqdgnoznosknr3fx5jxjazjcerpa2qo4jy4",
                Rarity.green: "bafybeicp5bagsziwkyarey76m5jkr6i3a5yrgr7r435qyuutbtlqxcdbwu",
                Rarity.purple: "bafybeidjigkvt67dtuwrgrpdt2z4dojq2efpbw66ndnffkb6eyr4baml2i",
                Rarity.gold: "bafybeibtxvitlnvksnzwrwmsqdgnoznosknr3fx5jxjazjcerpa2qo4jy4"
            },
            Kind.star: {
                Rarity.blue: "tbd",
                Rarity.green: "tbd",
                Rarity.purple: "tbd",
                Rarity.gold: "tbd"
            }
        }
```

### JS Tests

You need to include the new kind in the Cadence tests, written in JavaScript:

`/cadence/tests/src/kitty-items.js`: Add new kind for star

```js
export const types = {
  fishbowl: 1,
  fishhat: 2,
  milkshake: 3,
  tuktuk: 4,
  skateboard: 5,
  shades: 6,
  star: 7,
};
```

## Test new code

Go into the following folder: `/cadence/tests` and install dependencies:

```sh
cd /cadence/tests

npm install
```

Run tests:

```sh
npm run test
```

Should pass all tests

## Mint a new star

Go to Kitty Items admin dashboard. Mint a new item a few times, until the star shows up!