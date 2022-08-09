---
title: Introduction to Flow Nodes
---

Flow nodes are vital components of the Flow blockchain. These nodes are responsible for a variety of network operations to maintain the distributed ledger.

The Flow blockchain network is a collection of interconnected nodes working together to validate transactions and blocks using consensus a algorithm.

## Functions of Flow nodes

Flow has [4 types of nodes](/node-operation/node-roles/), each fulfilling a specific role in the operation of the network:

- **Collection:** manages the transaction pool and collects well-formed transactions to propose to Consensus nodes.
- **Consensus:** form and propose blocks like traditionally-structured proof-of-stake blockchains, using the HotStuff consensus algorithm to create a globally consistent chain of blocks.
- **Execution:** are Flow network's most resource-intensive nodes, responsible for executing transactions, maintaining the Execution State, and responding to related queries.
- **Verification:** are responsible for confirming the correctness of the work done by Execution nodes.
- **Access:** routes transactions to the correct Collection node and routes state queries to available nodes.

## Node operation

A node operator runs software that broadcasts transactions across the network and maintains a complete copy of the blockchain. The operation of blockchains requires nodes.
An operator ensures that nodes have enough resources to run smoothly and efficiently. Therefore, nodes require sufficient RAM, disk space, and bandwidth to function and support the network.

> **Note**: Any individual or organization should be able to run one or more [nodes](/node-operation/faq/). Currently, however as the Flow protocol matures, anyone interested in running a node must present a case for how they will add unique value to the network.

Read more about [node operations](/nodes/node-operation/).

## Flow Port

[Flow Port](/nodes/flow-port) gives you access to your Flow account, interacts with the blockchain, and manages your assets. It can be used to stake your FLOW tokens.

> **Note**: Flow Port only supports staking or delegating using tokens held in Blocto or Ledger wallets.

## Staking

[Staking](/nodes/staking) is an important part of the security protocol of a proof-of-stake (PoS) blockchain. Running nodes and staking tokens contributes to the blockchain's security and is rewarded accordingly.
