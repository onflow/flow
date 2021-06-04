---
title: "Accessing Flow Mainnet"
slug: "accessing-flow-mainnet"
hidden: true
createdAt: "2020-08-12T16:51:26.420Z"
updatedAt: "2020-08-12T16:51:26.420Z"
---
The Access Node for the mainnet can be accessed via

## Hostname [access-00**4**.candidate5.nodes.onflow.org](http://access-005.candidate1.nodes.onflow.org/) and Port 9000

Sample Code using `[flow-go-sdk](https://github.com/onflow/flow-go-sdk/)`

```go
package main

import (
	"context"
	"fmt"

	"google.golang.org/grpc"

	"github.com/onflow/flow-go-sdk/client"
)

func main()  {

	flowClient, err := client.New("access-004.candidate5.nodes.onflow.org:9000", grpc.WithInsecure())
	if err != nil {
		panic(err)
	}
	ctx := context.Background()
	blk, err := flowClient.GetLatestBlock(ctx, true)
	if err != nil {
		panic(err)
	}
	fmt.Printf("Current height: %d\n", blk.Height)
	fmt.Printf("Last sealed block ID: %s\n",blk.ID.String())
}
```