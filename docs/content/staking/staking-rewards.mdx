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
flow events get A.9eca2b38b18b5dfe.FlowIDTableStaking.RewardsPaid --start <block Height> --end <block height> -n mainnet

where block height is the height of the block containing the rewards payout events
```

Example (using testnet instead of mainnet)

```
$ flow --host=access.devnet.nodes.onflow.org:9000 events get A.9eca2b38b18b5dfe.FlowIDTableStaking.RewardsPaid --start 96961750 --end 96961750

Events Block #96961750:
    Index	48
    Type	A.9eca2b38b18b5dfe.FlowIDTableStaking.RewardsPaid
    Tx ID	b302ae591011d2bca9679ee2d7271bc827f86f921f03c2696927d57480b315e3
    Values
		- nodeID (String): "4261737469616e204d756c6c65720055a00e2aa117a9a908f57867833819b3c9"
		- amount (UFix64): 7.43750000

    Index	51
    Type	A.9eca2b38b18b5dfe.FlowIDTableStaking.RewardsPaid
    Tx ID	b302ae591011d2bca9679ee2d7271bc827f86f921f03c2696927d57480b315e3
    Values
		- nodeID (String): "546172616b2042656e20596f7573736566006237a53e71d7caca97655e05690b"
		- amount (UFix64): 7.43751951

    Index	60
    Type	A.9eca2b38b18b5dfe.FlowIDTableStaking.RewardsPaid
    Tx ID	b302ae591011d2bca9679ee2d7271bc827f86f921f03c2696927d57480b315e3
    Values
		- nodeID (String): "cbefb4fa84e843a45abb351c4d1041fda5fdc9517a37c0bed4881ee073681a4d"
		- amount (UFix64): 0.80325094

    Index	69
    Type	A.9eca2b38b18b5dfe.FlowIDTableStaking.RewardsPaid
    Tx ID	b302ae591011d2bca9679ee2d7271bc827f86f921f03c2696927d57480b315e3
    Values
		- nodeID (String): "5f6c73a22445d7d958c6a37c1f3be99c72cacd39894a3e46d6647a9adb007b4d"
		- amount (UFix64): 7.43750000

    Index	72
    Type	A.9eca2b38b18b5dfe.FlowIDTableStaking.RewardsPaid
    Tx ID	b302ae591011d2bca9679ee2d7271bc827f86f921f03c2696927d57480b315e3
    Values
		- nodeID (String): "416e647265772042757269616e00a2c4cd7d1b78bb62d3f005bb968b52ff0d0e"
		- amount (UFix64): 7.43750052

    Index	78
    Type	A.9eca2b38b18b5dfe.FlowIDTableStaking.RewardsPaid
    Tx ID	b302ae591011d2bca9679ee2d7271bc827f86f921f03c2696927d57480b315e3
    Values
		- nodeID (String): "79f039c41539dd93e4ab82688ce7bd0ee37519a069a92e50d4a27f530ff213f6"
		- amount (UFix64): 2.97500000

    Index	81
    Type	A.9eca2b38b18b5dfe.FlowIDTableStaking.RewardsPaid
    Tx ID	b302ae591011d2bca9679ee2d7271bc827f86f921f03c2696927d57480b315e3
    Values
		- nodeID (String): "4a616d65732048756e746572000e00bbde823f31b3c9728bdacc767e469cd6cb"
		- amount (UFix64): 7.43750000

    Index	84
    Type	A.9eca2b38b18b5dfe.FlowIDTableStaking.RewardsPaid
    Tx ID	b302ae591011d2bca9679ee2d7271bc827f86f921f03c2696927d57480b315e3
    Values
		- nodeID (String): "f0d7e1f46f1a8bd04984bd4842133b44cb9b0c217f037d3ccc80a1596b3eadeb"
		- amount (UFix64): 0.80325000

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
	client "github.com/onflow/flow-go-sdk/access/grpc"
)

func main() {

	// the Flow testnet community Access node API endpoint
	accessNodeAddress := "access.testnet.nodes.onflow.org:9000"

	// create a gRPC client for the Access node
	accessNodeClient, err := client.NewClient(accessNodeAddress)
	if err != nil {
		fmt.Println("err:", err.Error())
		panic(err)
	}

	ctx := context.Background()

	blockEvents, err := accessNodeClient.GetEventsForHeightRange(ctx,
		"A.9eca2b38b18b5dfe.FlowIDTableStaking.RewardsPaid",
		96961750,
		96961750)
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