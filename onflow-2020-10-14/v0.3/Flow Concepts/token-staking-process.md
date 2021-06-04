---
title: "Token Staking Process"
slug: "token-staking-process"
hidden: true
createdAt: "2020-08-11T15:20:49.138Z"
updatedAt: "2020-08-11T15:20:49.138Z"
---
This documents suggests a process for submitting a staking request through coordination between a node operator and an independent custody provider.

## Contents

1. Create Staking Keys
2. Create a Rewards Account
3. Deploy a `StakingHelper` contract
4. Deposit Staking Funds
5. Send Staking Request

## Create Staking Keys

- The node operator generates the following private keys that the staked node will use to authenticate and identify itself within the Flow network:
    - Staking Key
    - Networking Key

## Create a Staking Account

- Custody provider creates a new Flow account that will hold the initial tokens to be staked and (optionally) receive future reward payments.
- The custody provider and their client(s) are the only parties authorized to transfer tokens out of this account.

## Deploy a `StakingHelper` Contract

- The node operator deploys a `StakingHelper` contract initialized with the following parameters:
    - Staking Public Key
    - Staking Key Signature
    - Networking Public Key
    - Networking Key Signature
    - Staking Account Address
    - Rewards Account Address (can be the same as Staking Account Address)
- The `StakingHelper` is an auditable contract that is *only* authorized to initiate a staking request to the system-level `FlowStaking` contract. This contract will temporarily hold the staking deposit (tokens to be staked held by custody provider) in escrow before submitting a staking request, and these funds *cannot* be moved out of the contract for any other purpose. The only exception to this restriction is the `abort` method, which returns the escrowed funds to the initial depositor.

## Deposit Staking Funds

- The custody provider transfers `X` tokens from the staking account to the address of the `StakingHelper` contract.

## Send Staking Request

- The node operator submits a transaction that calls the `StakingHelper.submit` method, which sends the staking public keys, signatures, rewards address and token deposit to the system-level `FlowStaking` contract.