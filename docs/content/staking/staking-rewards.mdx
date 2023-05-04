---
title: Staking and Delegation rewards
sidebar_title: Staking rewards
description: How to check the staking and delegation rewards
---

## Current method to check staking rewards

Every week, the Flow governance committee executes the reward payout transaction.
When the transaction executes, it generates events for the rewards paid to each node and delegator.
To check the staking and delegation rewards, that transaction should be queried.

Example using [Flow cli](https://developers.flow.com/tools/flow-cli)
```
$ flow transactions get 84eca4ff612ef70047d60510710cca872c8a17c1bd9f63686e74852b6382cc84 -n mainnet

Status		✅ SEALED
ID		84eca4ff612ef70047d60510710cca872c8a17c1bd9f63686e74852b6382cc84
Payer		e467b9dd11fa00df
Authorizers	[e467b9dd11fa00df]

Proposal Key:
    Address	e467b9dd11fa00df
    Index	11
    Sequence	118

No Payload Signatures

Envelope Signature 0: e467b9dd11fa00df
Envelope Signature 1: e467b9dd11fa00df
Envelope Signature 2: e467b9dd11fa00df
Envelope Signature 3: e467b9dd11fa00df
Envelope Signature 4: e467b9dd11fa00df
Signatures (minimized, use --include signatures)

Events:
    Index	0
    Type	A.1654653399040a61.FlowToken.TokensWithdrawn
    Tx ID	84eca4ff612ef70047d60510710cca872c8a17c1bd9f63686e74852b6382cc84
    Values
		- amount (UFix64): 64.59694884
		- from (Address?): 0xf919ee77447b7497

    Index	1
    Type	A.f919ee77447b7497.FlowFees.TokensWithdrawn
    Tx ID	84eca4ff612ef70047d60510710cca872c8a17c1bd9f63686e74852b6382cc84
    Values
		- amount (UFix64): 64.59694884

    Index	2
    Type	A.1654653399040a61.FlowToken.TokensMinted
    Tx ID	84eca4ff612ef70047d60510710cca872c8a17c1bd9f63686e74852b6382cc84
    Values
		- amount (UFix64): 1326397.40305116

    Index	3
    Type	A.1654653399040a61.FlowToken.TokensDeposited
    Tx ID	84eca4ff612ef70047d60510710cca872c8a17c1bd9f63686e74852b6382cc84
    Values
		- amount (UFix64): 1326397.40305116
		- to (Never?): nil

    Index	4
    Type	A.1654653399040a61.FlowToken.TokensWithdrawn
    Tx ID	84eca4ff612ef70047d60510710cca872c8a17c1bd9f63686e74852b6382cc84
    Values
		- amount (UFix64): 1004.16460872
		- from (Never?): nil

    Index	5
    Type	A.1654653399040a61.FlowToken.TokensDeposited
    Tx ID	84eca4ff612ef70047d60510710cca872c8a17c1bd9f63686e74852b6382cc84
    Values
		- amount (UFix64): 1004.16460872
		- to (Address?): 0x8624b52f9ddcd04a
   ...
   ...
   <clipped for brevity>
```

Example using [Flow Go SDK](https://developers.flow.com/tools/flow-go-sdk)
```
package main

import (
	"context"
	"fmt"
	"github.com/onflow/flow-go-sdk"
	client "github.com/onflow/flow-go-sdk/access/grpc"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

func main() {

	// the Flow mainnet community Access node API endpoint
	accessNodeAddress := "access.mainnet.nodes.onflow.org:9000"

	maxGRPCMessageSize := 1024 * 1024 * 20 // to accommodate for the large transaction payload

	// create a gRPC client for the Access node
	accessNodeClient, err := client.NewClient(accessNodeAddress,
		grpc.WithTransportCredentials(insecure.NewCredentials()),
		grpc.WithDefaultCallOptions(grpc.MaxCallRecvMsgSize(maxGRPCMessageSize)))
	if err != nil {
		fmt.Println("err:", err.Error())
		panic(err)
	}

	ctx := context.Background()

	txID := flow.HexToID("84eca4ff612ef70047d60510710cca872c8a17c1bd9f63686e74852b6382cc84")

	rewardsTxResult, err := accessNodeClient.GetTransactionResult(ctx, txID)
	if err != nil {
		panic(err)
	}

	for _, event := range rewardsTxResult.Events {
		fmt.Println("Event type: " + event.Type)
		fmt.Println("Event: " + event.Value.String())
		fmt.Println("Event payload: " + string(event.Payload))
	}
}
```

## New method to check staking rewards

As part of the new method, rewards payout will happen automatically after the end of the epoch and without the need of an explicit transaction being submitted by the service account.
Instead of a separate reward payout transaction, the reward payout events will be recorded in the system chunk in the block that is produced at the time of the epoch transition without creating a regular transaction ID.

The rewards payout can be queried by querying the block which contains the system chunk that contains the reward payout events.
```
flow events get A.8624b52f9ddcd04a.FlowIDTableStaking.RewardsPaid A.8624b52f9ddcd04a.FlowIDTableStaking.DelegatorRewardsPaid --start <block Height> --end <block height> -n mainnet

where block height is the height of the block containing the rewards payout events
```

Example

```
$ flow events get A.8624b52f9ddcd04a.FlowIDTableStaking.RewardsPaid A.8624b52f9ddcd04a.FlowIDTableStaking.DelegatorRewardsPaid --start 51753836 --end 51753836 -n mainnet

Events Block #51753836:
    Index	6
    Type	A.8624b52f9ddcd04a.FlowIDTableStaking.RewardsPaid
    Tx ID	f31815934bff124e332b3c8be5e1c7a949532707251a9f2f81def8cc9f3d1458
    Values
		- nodeID (String): "a3075cf9280cab4fa0b7b1e639b675bdae3e8874557d98ee78963f0799338a5f"
		- amount (UFix64): 1660.21200000

    Index	9
    Type	A.8624b52f9ddcd04a.FlowIDTableStaking.RewardsPaid
    Tx ID	f31815934bff124e332b3c8be5e1c7a949532707251a9f2f81def8cc9f3d1458
    Values
		- nodeID (String): "cf0ff514b6aa659914b99ab1d17743edb2b69fbb338ab01945a08530a98c97d4"
		- amount (UFix64): 3762.20370347

    Index	12
    Type	A.8624b52f9ddcd04a.FlowIDTableStaking.RewardsPaid
    Tx ID	f31815934bff124e332b3c8be5e1c7a949532707251a9f2f81def8cc9f3d1458
    Values
		- nodeID (String): "de988efc8cb79d02876b7beffd404fc24b61c287ebeede567f90056f0eece90f"
		- amount (UFix64): 939.85630919

    Index	27
    Type	A.8624b52f9ddcd04a.FlowIDTableStaking.RewardsPaid
    Tx ID	f31815934bff124e332b3c8be5e1c7a949532707251a9f2f81def8cc9f3d1458
    Values
		- nodeID (String): "fa5f24a66c2f177ebc09b8b51429e9f157037880290e7858f4336479e57dc26b"
		- amount (UFix64): 1660.21200000

    Index	30
    Type	A.8624b52f9ddcd04a.FlowIDTableStaking.RewardsPaid
    Tx ID	f31815934bff124e332b3c8be5e1c7a949532707251a9f2f81def8cc9f3d1458
    Values
		- nodeID (String): "581525fa93d8fe4b334c179698c6e72baccb802593e55e40da61d24e589d85be"
		- amount (UFix64): 1937.24727662
    ...
    ...
   <clipped for brevity>
    ...
    ...
    Index	50115
    Type	A.8624b52f9ddcd04a.FlowIDTableStaking.DelegatorRewardsPaid
    Tx ID	f31815934bff124e332b3c8be5e1c7a949532707251a9f2f81def8cc9f3d1458
    Values
		- nodeID (String): "95ffacf0c05757cff71a4ee49e025d5a6d1103a3aa7d91253079e1bfb7c22458"
		- delegatorID (UInt32): 23
		- amount (UFix64): 0.10424555

    Index	50118
    Type	A.8624b52f9ddcd04a.FlowIDTableStaking.DelegatorRewardsPaid
    Tx ID	f31815934bff124e332b3c8be5e1c7a949532707251a9f2f81def8cc9f3d1458
    Values
		- nodeID (String): "95ffacf0c05757cff71a4ee49e025d5a6d1103a3aa7d91253079e1bfb7c22458"
		- delegatorID (UInt32): 18
		- amount (UFix64): 17.31047712
```

Example using [Flow Go SDK](https://developers.flow.com/tools/flow-go-sdk)
```
package main

import (
	"context"
	"fmt"
	client "github.com/onflow/flow-go-sdk/access/grpc"
)

func main() {

	// the Flow testnet community Access node API endpoint
	accessNodeAddress := "access.mainnet.nodes.onflow.org:9000"

	// create a gRPC client for the Access node
	accessNodeClient, err := client.NewClient(accessNodeAddress)
	if err != nil {
		fmt.Println("err:", err.Error())
		panic(err)
	}

	ctx := context.Background()

	blockEvents, err := accessNodeClient.GetEventsForHeightRange(ctx,
		"A.8624b52f9ddcd04a.FlowIDTableStaking.RewardsPaid",
		51753836,
		51753836)
	if err != nil {
		panic(err)
	}

	for _, blockEvent := range blockEvents {
		fmt.Println("Block: " + blockEvent.BlockID.String())
		for _, event := range blockEvent.Events {
			fmt.Println("\tEvent type: " + event.Type)
			fmt.Println("\tEvent: " + event.Value.String())
			fmt.Println("\tEvent payload: " + string(event.Payload))
		}
	}
}
```