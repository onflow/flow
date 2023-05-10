---
title: How to Stake Locked FLOW with a Third-Party Node Operator
sidebar_title: Stake with a Third-Party Operator
---

## Introduction

Whether it is through a friend or a hosted node provider,
some Flow token holders may wish to stake a node that is being operated by another party.
This document outlines two methods for staking locked FLOW with a third-party operator,
the main difference being the level of control given to the operator.

## Direct Staking

The direct staking method is the simplest to implement and allows the token holder
to retain full control of their tokens. In this method, the node operator is responsible
for creating and managing the node infrastructure, but does not control any tokens
or initiate any staking actions.

This form of staking relationship can be implemented in several ways. The steps below
provide an outline for one possible approach, but it is not the only approach.

1. The node operator [bootstraps a new node record](/nodes/node-operation/node-bootstrap/)
   and sends the node information to the token holder.
1. The token holder uses this node information to register the node with the central staking contract.
   This can be done in one of two ways:

a) The token holder manually [submits a transaction to register a new node](../locked-staking-guide/#setup).

b) The token holder registers the node using the Flow Port.

1. The node operator should then ensure that the node is live and running before the epoch starts.
1. Once the epoch starts, the token holder is free to manage their stake through the Flow Port or
   manually by following the [staking guide](../locked-staking-guide/#staking-actions).

## Indirect Staking

This section covers the technical integration required for a **node operator (NO)** to operate
a staked Flow node using locked FLOW provided by a **token holder (TH)**. This relationship
is facilitated by the `StakingProxy` contract.

Both parties have separate roles in this relationship:

- **Node Operator:** Manages the node infrastructure but _does not hold_ any FLOW tokens.
- **Token Holder:** Provides restricted, indirect access to their FLOW tokens for the sole purpose of staking.

This guide assumes that the node operator and token holder have already
established a trusted off-chain relationship.

### Operator Setup

These are the steps that a **node operator** must take in order to accept
staking access granted by a token holder.

### 1. Configure a node operator account

_Note: this step can be skipped if the node operator has already configured their account._

Before the node operator can begin running nodes on behalf of token holders,
they must configure their account. This account is referred to as the operator account.

The operator account will hold the staking capabilities for all token holders.

The node operator can configure their account with the **Set Up Operator Account**
([NO.01](/core-contracts/locked-tokens/#node-operator)) transaction.
This transaction must be authorized by an existing account that the token holder wishes
to use as its operator account.

### 2. Create a new `NodeInfo` entry

When a token holder asks a node operator to run a node for them,
the first step is for the node operator to provision a new node
and create the staking and networking key-pairs.

After this is done, the node operator creates a `NodeInfo` entry and adds it to the
operator account with the **Add Node Info**
([NO.02](/core-contracts/locked-tokens/#node-operator)) transaction.

This transaction takes the following arguments:

| Argument              | Type     | Description                                                                                                                                                                                                         |
| --------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **id**                | `String` | The ID of the new node. It must be a 32 byte `String`. The operator is free to choose this value, but it must be unique across all nodes. A recommended process to generate this is to hash the staking public key. |
| **role**              | `UInt8`  | The role of the new node. (1: collection, 2: consensus, 3: execution, 4: verification, 5: access)                                                                                                                   |
| **networkingAddress** | `String` | The IP address of the new node.                                                                                                                                                                                     |
| **networkingKey**     | `String` | The networking public key as a hex-encoded string.                                                                                                                                                                  |
| **stakingKey**        | `String` | The staking public key as a hex-encoded string.                                                                                                                                                                     |

### 3. Send the new node ID to the token holder

After the `NodeInfo` object has been created,
the token holder must provide the following information to the token holder:

- `nodeID` - The ID of the new node.
- `operatorAddress` - The Flow address of the operator account.

The token holder will use this information to grant staking access to the node operator.

### 4. Confirm staking access with token holder

After the `NodeInfo` object has been created and published,
the token holder uses it to initiate a staking registration.
After this, the token holder passes a `StakingProxy.NodeStakerProxy`
capability to the node operator that allows them to perform staking operations.

The node operator should confirm that they have access to this capability.

## Token Holder Setup

These are the steps that a token holder must take in order to grant staking access
to a node operator via the `StakingProxy` contract.

### 1. Fetch node operator information

After a node operator has agreed to run a node for you,
they will create a `NodeInfo` object holding the IP address and public keys for your new node.
This `NodeInfo` object will be stored in an account owned by the node operator (operator account).

The node operator should provide you with their operator account `address` and the `nodeID` for your new node.
These values can be passed into the **Get Operator Node Info** ([TH.15](/core-contracts/locked-tokens/#token-holder))
script to confirm your node information:

| Argument    | Type      | Description                                 |
| ----------- | --------- | ------------------------------------------- |
| **account** | `Address` | The address of the node operator's account. |
| **nodeID**  | `String`  | The unique ID of the node.                  |

This script returns a `StakingProxy.NodeInfo` struct containing the details for the node.
If no `NodeInfo` is available, the script will fail.

If this node information is correct, continue to step 2.

### 2. Register node & grant staking access to the node operator

After confirming that the node information is correct, the token holder can register the
node with the central staking contract by using the using the **Register Node** ([TH.16](/core-contracts/locked-tokens/#token-holder)) transaction
with the following arguments:

| Argument    | Type      | Description                                  |
| ----------- | --------- | -------------------------------------------- |
| **address** | `Address` | The node operator address.                   |
| **nodeID**  | `String`  | The unique ID of the node (from `NodeInfo`). |
| **amount**  | `UFix64`  | The number of FLOW tokens to stake.          |

This transaction fetches the node info from the operator account, registers the node
in the central staking contract, and creates a `StakingProxy.NodeStakerProxy`
capability to pass to the node operator, who will be able to use it to perform
staking actions on behalf of the token holder. The token holder retains control
of the main staking capability and still has full control to manage their own staking
actions as well.

## Staking Actions

### Stake New Tokens

The node operator can stake additional tokens on behalf of the token holder at any time.

_Note: This transaction stakes additional tokens to the same node that was registered in the setup phase.
It is currently not possible to stake to multiple nodes from the same account._

To stake new tokens via the `NodeStakerProxy`,
the node operator can use the **Stake New Locked FLOW** ([NO.05](/core-contracts/locked-tokens/#node-operator))
transaction with the following arguments:

| Argument   | Type     | Description                         |
| ---------- | -------- | ----------------------------------- |
| **nodeID** | `String` | The unique identifier for the node. |
| **amount** | `UFix64` | The number of FLOW tokens to stake. |

### Re-Stake Unstaked Tokens

After tokens become unstaked, the node operator can choose to re-stake the unstaked tokens to the same node.

To staked unstaked tokens via the `NodeStakerProxy`,
the node operator can use the **Re-stake Unstaked FLOW** ([NO.06](/core-contracts/locked-tokens/#node-operator))
transaction with the following arguments:

| Argument   | Type     | Description                         |
| ---------- | -------- | ----------------------------------- |
| **nodeID** | `String` | The unique identifier for the node. |
| **amount** | `UFix64` | The number of FLOW tokens to stake. |

### Unstake Tokens

The node operator can submit a request to unstake the token holder's staked tokens at any time.

To unstake staked tokens via the `NodeStakerProxy`,
the node operator can use the **Unstake FLOW** ([NO.07](/core-contracts/locked-tokens/#node-operator))
transaction with the following arguments:

| Argument   | Type     | Description                         |
| ---------- | -------- | ----------------------------------- |
| **nodeID** | `String` | The unique identifier for the node. |

_Note: Unstaked tokens will be held by the central staking contract for a period of time before they are
released to the token holder. Once the tokens are released (unstaked),
they can be claimed via the [Withdraw Unstaked Tokens](#withdraw-unstaked-tokens) action below._

### Withdraw Unstaked Tokens

After tokens become unstaked, the node operator can withdraw them from the central staking contract
on behalf of the token holder.

To withdraw unstaked tokens via the `NodeStakerProxy`,
the node operator can use the **Withdraw Unstaked FLOW** ([NO.08](/core-contracts/locked-tokens/#node-operator))
transaction with the following arguments:

| Argument   | Type     | Description                                     |
| ---------- | -------- | ----------------------------------------------- |
| **nodeID** | `String` | The unique identifier for the node.             |
| **amount** | `UFix64` | The number of unstaked FLOW tokens to withdraw. |

This transaction moves the unstaked tokens back into the `LockedTokens.Lockbox` owned by the **token holder**.

### Withdraw Rewarded Tokens

After earning rewards from staking, the node operator can withdraw them from the central staking contract
on behalf of the token holder.

To withdraw rewarded tokens via the `NodeStakerProxy`,
the node operator can use the **Withdraw Rewarded FLOW** ([NO.09](/core-contracts/locked-tokens/#node-operator))
transaction with the following arguments:

| Argument   | Type     | Description                                     |
| ---------- | -------- | ----------------------------------------------- |
| **nodeID** | `String` | The unique identifier for the node.             |
| **amount** | `UFix64` | The number of rewarded FLOW tokens to withdraw. |

This transaction moves the rewarded tokens back into the `LockedTokens.Lockbox` owned by the token holder.
However, unlike unstaked tokens, rewards are unlocked FLOW and can be immediately withdrawn from the lockbox.

## Teardown

### Remove `NodeInfo` Entry

The node operator can destroy the `NodeInfo` entry after
the staking relationship has concluded.

This is done using the **Remove Node Info** ([NO.03](/core-contracts/locked-tokens/#node-operator))
transaction with the following arguments:

| Argument   | Type     | Description                         |
| ---------- | -------- | ----------------------------------- |
| **nodeID** | `String` | The unique identifier for the node. |
