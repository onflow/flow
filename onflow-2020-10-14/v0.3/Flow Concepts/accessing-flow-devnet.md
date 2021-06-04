---
title: "Accessing Flow Devnet"
slug: "accessing-flow-devnet"
hidden: true
createdAt: "2020-08-11T15:23:38.135Z"
updatedAt: "2020-09-16T16:17:30.964Z"
---
### Devnet

Currently, there is an internal Devnet, available for access:

- [access-001.devnet13.nodes.onflow.org:9000](http://access-001.devnet13.nodes.onflow.org:9000/)

```go
import "github.com/onflow/flow-go-sdk/client"

func main() {
  flowAccessAddress := "access-001.devnet13.nodes.onflow.org:9000"
  flowClient, _ := client.New(flowAccessAddress, grpc.WithInsecure())

  // ...
}
```

Access is currently restricted, and accounts are available by request.

- For account requests please generate a public key and send it to: **dev@onflow.org**
- For smart contract deployment requests please generate a public key and attach the smart contract .cdc file in an email attachment to send to: **dev@onflow.org**

- Key Generation, using our `flow-go-sdk` (crypto package):

    ```go
    import (
      "crypto/rand"
    	"fmt"	

      "github.com/onflow/flow-go-sdk/crypto"
    )

    func main() {

    	// This seed must be kept safe if you want to use it to regenerate your private key
    	seed := make([]byte, crypto.MinSeedLength)

    	_, err := rand.Read(seed)
    	if err != nil {
    		panic(err)
    	}

    	// Remember to save your private key somewhere safe
    	privateKey, err := crypto.GeneratePrivateKey(crypto.ECDSA_P256, seed)
    	if err != nil {
    		panic(err)
    	}
    	// This will be your public key, and what you need to send to us
    	fmt.Printf("%x", privateKey.PublicKey().Encode())
    }
    ```

Once you receive your account, you'll be able make use of that account using our SDK. Some examples are available here in the SDK repo:

- [https://github.com/onflow/flow-go-sdk/tree/master/examples](https://github.com/onflow/flow-go-sdk/tree/master/examples)

Some of these examples

- `create_account`
- `deploy_contract`

Require authorization from the Flow Service Account at this time, if you'd like to do either of these, please shoot a member of the Flow team a msg.

## Important Devnet Smart Contract Addresses
In order to access some of the contracts deployed to Flow Devnet, you can import them by using the following import addresses:
```
import FungibleToken from 0x9a0766d93b6608b7
import FlowToken from 0x7e60df042a9c0868
import NonFungibleToken from 0x631e88ae7f1d7c20
```