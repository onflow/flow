---
title: Off-chain Dapp Infrastructure
sidebar_title: Off-chain Infrastructure
---

In addition to on-chain smart contracts, dapps also rely on off-chain infrastructure. For example, users often interact with a dapp through a web interface. In addition to this, some dapps rely on backend servers to query and index data from the blockchain. This section covers best practices for off-chain infrastructure on Flow.

## Writing Data to Flow

All data written to the blockchain happens in a transaction. For user-facing dapps, transactions either originate from a user account or an admin account. For most dapps, the large majority of transactions will be user transactions. 

### User Transactions

User transactions are transactions that are authorized by the users of your dapp. These transactions originate from the user’s wallet, as mentioned in the 
[User Accounts & Wallets](/dapp-development/user-accounts-and-wallets) section. For example, a user may sign a transaction to purchase an NFT from your dapp.

A user transaction is initialized by your dapp (e.g. by a button click) through FCL, which then passes the transaction to the user’s wallet, which in turn signs the transaction and submits it to Flow. This all happens from the dapp client, typically a browser app. By using FCL, your dapp does not need to be involved in the transaction signing -- it constructs the transaction, passes it to the wallet, and then waits for the final result.

### Admin Transactions

Admin transactions are transactions that originate from the backend of your dapp, or from a separate administration interface that you control. These transactions perform the administrative duties required to operate your dapp, and are signed by an administrator account controlled by you, the dapp developer.

For example, you may send an admin transaction that mints a batch of NFTs for purchase, or a transaction that adds an additional gameplay level to your game.

For one-off administrative actions that do not require automation, such as contract deployment, you can use the [Flow CLI](/flow-cli/).

## Reading Data From Flow

Your dapp will also need to read data from Flow, and in particular, the state of your smart contracts. There are several ways to query state on Flow.

### Events

Events are data objects emitted at the end of a transaction that describe the state changes that occurred in the transaction. For example, a transaction that transfers FLOW tokens between accounts [will emit events](https://flowscan.org/transaction/2f50695c3c506b8214d18f49220c986d24d19d8762a2805b3609aee3d529de88) that describe the sender, recipient and amount of FLOW transferred. Event types are [defined inside your Cadence contracts](https://github.com/onflow/flow-core-contracts/blob/master/contracts/FlowToken.cdc#L8-L27). 

Events can be used to notify your off-chain infrastructure of important state changes in your smart contracts. For example, if a user purchases an NFT from your storefront smart contract, an event will be emitted that describes this purchase. Your web application, which displays the NFTs for sale, can then capture that event and remove the NFT from the sale list.

You can query events through the Flow Access API using the available [Flow SDKs](/sdks/). Event data is returned in [JSON-Cadence format](/cadence/json-cadence-spec/).

#### Event Reflection Database

Some applications, especially those with existing backend servers, opt to store application state in an off-chain database that merely reflects the state of on-chain contracts. A reflection database has the following benefits:

* **Unified on and off-chain state**. For dapps that rely on both on and off-chain state, it’s useful to store all data in a central database to allow for atomic queries (i.e. ACID) and high scalability.
* **Fast and flexible queries.** Database systems can be tuned and optimized (e.g. using indices) to best serve the data needs of your dapp, whereas the blockchain itself does not provide this level of customization.

#### Event Providers

Third-party event providers, such as [Graffle](https://graffle.io/), can simplify event filtering and stream events directly to your frontend or backend infrastructure.

### Cadence Script Queries

At any point, your dapp can execute a query to read the state of your contracts. This is done using Cadence scripts, which are written similarly to transactions, but are read-only and cannot mutate the blockchain state. 

Events follow a push model, whereas script queries follow a pull model. Your dapp may need to check the state of your contracts without waiting for an event to be emitted. 

You can execute scripts through the Flow Access API using the available [Flow SDKs](/sdks/). Like events, script results are returned in [JSON-Cadence format](/cadence/json-cadence-spec/).
