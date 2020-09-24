---
title: FAQ
---

## General FAQ

We recommend reading the Introduction and first few tutorials before you read this, it will help with understanding some of the concepts.

### Why create a new programming language?

We believe that a language doesn't exist that offers the best combination of safety, security, performance, and ease of use for decentralized applications.

### Why doesn't Cadence support floating point arithmetic?

Floating point is inherently approximate, and floating point implementations are frequently non-deterministic in common edge cases. All Cadence operations must be fully deterministic in order to ensure correctness. In most smart contracts, fractional values are more naturally represented as fixed-point values; fixed-point is mandated for most financial use cases, has well-defined accuracy limits, and has trivially deterministic behaviour under all standard mathematical operations.

### Cadence has changed since the last time I worked with it? What happened?

Cadence is a programming language that is still in development and therefore will be going through many syntax and behaviour changes in the coming months. Early adopters need to be aware that this means that breaking changes and new features will be introduced periodically that might make your development experience slightly more challenging. We apologize for any inconvenience this causes and making sure that the language can reach a more stable state as soon as possible. If you have any opinions about features or changes to the language, we are happy to take your feedback on our public discord channel or [forum](https://forum.onflow.org/).

### How does the network verify that the execution was performed correctly?

Flow utilizes a new blockchain architecture that allows for decentralized computation that is verified by other nodes in the network. Execution nodes run the transactions and update the state and verification nodes use complex cryptography to verify that these were performed correctly. See the Flow node types documentation for more details.

### Is there a native currency on Flow?

Yes, there will be a native currency, but it will be different from other blockchains in that it will be implemented as a smart contract the same as any other token in the network. A smart contract can import the `FlowToken` definition to use in contract or transaction code. See the [flow fungible token repo](https://github.com/onflow/flow-ft) for examples of how this would work.

### How are accounts created in Flow?

Account are created by generating private and public keys, then submitting a transaction that initializes the account storage and assigns the keys. The account that creates the new account must provide a payment which is called the storage deposit to create the new account. See the [Flow-SDK](https://github.com/onflow/flow-go-sdk#creating-an-account) documentation for more context on this process.

### Which wallets can I use with Flow?

Keep your eyes on the JS-SDK, something is coming very soon :wink:.

### How do we prevent Re-entrancy?

Currently, there is no explicit protection against re-entrancy, but we are finalizing a specification and implementation that restricts the use of references within transactions so that potential re-entrancy bugs cannot be exploited. These protections will be enabled very soon.

### As only the public endpoint is a reference to the contract storage, can anyone access/read the contract code and verify it once published ?

When a contract is deployed, all of its public types, fields, and methods are available for anyone to call. Of course, if the methods are declared as part of a Resource type, then you must have an instance of that Resource type in order to call those methods.

In Cadence, almost all access control is managed through Capability-Based Security. Instead of restricting access based on “who you are” (via access control lists, or msg.sender), Cadence typically restricts access based on “what you have” (via Resource types and capabilities).

As an example, if an Ethereum ERC-20 fungible token allows minting, it probably has a “minter address”, and only allows the mint() method to be called if (msg.sender == minter_address). In Cadence, you’d create a Minter resource object with a mint() method on it. Only someone with access to the Minter object could call mint(), and no further access controls are necessary. You control (or transfer) ownership of the Minter object instead of recording an authorized address.

### There is no modifier functionality as the security features are mostly covered by ownership mechanisms over resources, but are you planning to integrate modifier functionalities?

We haven’t seen a need for modifiers since they are mostly used either as make-shift preconditions or for managing access control. Using Capability-Based Security for access control works very well with Resource Types, and we’ve found that it largely removes the need for modifiers.

### There is no indication regarding a low level machine language, will we be able to access assembly like language from inside Cadence?

We are currently assessing possible VM architectures for Cadence, including the MoveVM from Libra. For now, Cadence is interpreted, which might seem like a potential performance problem, but isn’t likely to be in practice. Execution throughput of smart contract platforms is dominated by updating state proofs. For example, the current EVM has been benchmarked at over 10ktps, but validating the chain, including updating the state proofs, caps out under 100tps! We’ll be much faster at state proofs (by maintaining the entire state tree in memory on server-scale hardware), but we still don’t expect the code execution speed to be a bottleneck any time soon.

### How are transaction and contracts processed, and at what cost ? Are they compiled to bytecode? Is there a publicly available API endpoint (gRPC, JSON-RPC..) we can send the transactions to?

The specifics of how gas is metered are pending the choice of VM architecture, which will also dictate the internal representation of the contract code.
The Emulator that you have exposes a gRPC API.
Cadence currently is an interpreted language but may use a compiler in the future. It’s not enough for the special status of Resource objects to only be enforced by the compiler though. The rules must be enforced while the code is actually being executed on-chain; it would be too easy for an attacker to use a compromised copy of the compiler that bypasses the rules that keep resources secure.

### Network congestion: if multiple users must deploy the same (N)FT contract, how will Flow scale?

Users don’t need to deploy a contract to use it if a version has already been deployed. The contract that defines the type of a Resource object contains the code that manages that object. So, for example, even though the data structure that represents your CryptoKitty will be stored in your account, the only way for you to interact with that data is by calling the methods defined in the original smart contract. The Resource object includes a pointer to the original contract that defines it (as part of its type information).

### Why is a transaction split up into prepare, execute, post?

Transactions are divided into three phases, `prepare`, `execute`, and `post`.

1. The `prepare` phase is for removing objects from storage and assigning them to transaction-scoped variables. This enables statically verifying which assets a transaction can modify.
2. The `execute` phase does not have access to account storage and thus can only modify the objects that were removed in the `prepare` phase and call function on external contracts and objects.
3. The `post` phase is where the function can perform any condition checks to ensure that the actions were all performed correctly and the desired outcome was achieved.

Transactions are split up this way primarily because by not allowing the execute phase to access account storage, we can statically verify which assets and areas of the signers storage a given transaction can modify. This ability can be used by wallets or applications that are submitting transactions for users to be able to clearly show what a transaction could be potentially altering. When submitting application-generated transactions, users can have more confidence that they aren't getting fed a malicious or dangerous transaction.

As an example: This transaction could statically know that nothing besides functions that are exposed with the `Provider` interface will be called:

```cadence:title=FungibleToken.cdc
import FungibleToken from 0x01

transaction {
  let receiverRef: &{FungibleToken.Receiver}
  // can statically know that the &Provider is the only
  // thing that is being removed from storage, so it is
  // all that can be used in the transaction
  prepare(account: Address) {
    let providerRef = account.getCapability<&{Provider}>(from: /public/Provider)
  }
  execute {
    let otherAccount = getAccount(0x03)
    let subscriptionRef = otherAccount.getCapability<&{Subscription}>(from: /public/Subscription)
    subscriptionRef.takePayment(providerRef)
  }
  // can check that the balance has not been decreased by more
  // than what the user would expect
  post {
      receiverRef.balance >= before(receiverRef.balance) - 10
  }
}
```

### How can an application or developer create accounts and do other actions in Flow?

See the documentation for the [Flow Client Library](https://github.com/onflow/flow-js-sdk) and [SDK](https://github.com/onflow/flow-go-sdk) for tools that expose an API for account creation, contract deployment, transaction submission, and so on. These can be called from a command line or from within an application. We will also be providing tooling for applications to handle much of this functionality on behalf of users.

### What is the difference between `Void` and `nil` ?

- `Void`: is a type used to indicate that a function returns nothing. It is optional to include in a function definition.
- `nil` is a value that indicates the absence of a value. It is used primarily in optionals, types that can either represent a real value, or nothing. `nil` is the nothing case.

### What is the point of allowing multiple accounts to sign transactions?

The main purpose of allowing multiple signers of a transaction is to be able to access their private account storage. Each account has a private `[account.storage](http://account.storage)` object that is only accessible within the `prepare` block of a transaction that is signed by it. If multiple accounts sign a transaction, then the transaction is allowed to interact with both of their storage objects. There are many different things it can do with this, including transferring arbitrary resources, accessing both of their private capabilities, and implementing multi-sig wallets that are built into the protocol.

### How would I upgrade a contract?

Currently, the upgrading process for smart contracts is relatively basic. You can upgrade the functions in a contract by using the `unsafeNotInitializingSetCode`. This changes the code of the contract without running the `init()` function again. This is unsafe because you cannot change any of the storage fields in the contract, so if you try to change any of those fields or add new fields, it will break your contract.

```cadence
transaction {
	prepare(acct: AuthAccount, admin: AuthAccount) {
		acct.unsafeNotInitializingSetCode("%s".decodeHex())
	}
}
```

The general idea is that as long as you control the private keys to an account, you can upgrade the contract code by deploying new code. This will be possible at launch, but it is still a risky process because you need to make sure that the new code is still compatible with resources in user's accounts.

When you decide that you are ready for the contract to be immutable, you can simply revoke the keys to your account and the contract becomes immutable.

In the early versions of Flow, the strict decentralization rules will not all be implemented, so upgrading is something that can be handled manually by conferring with the node operators, but the network will transition to a completely decentralized model after a few months and a more formal way of upgrading will be designed by then.

### What happens if a user wants to deploy a contract with the same name and code as one they have already deployed?

Currently, it would just overwrite the existing contract in the account, but in the future we will support multiple contracts per account and are still designing the rules about contracts with the same name and code.

### How do I access block information like timestamp and block number in Cadence?

Get the current block:
`fun getCurrentBlock(): Block`
Get a block at a given height:
`fun getBlock(at height: UInt64): Block?`
The block info is:

```cadence
struct Block {
      let id: [UInt8; 32]
      let height: UInt64
      let timestamp: UFix64
}
```

### Can I generate random numbers in Cadence?

As you are probably aware, generating random numbers in a blockchain environment is difficult. The completely open nature of the blockchain and execution environment means that an algorithm for generating random numbers is viewable by anyone. There also isn't a good source of entropy that isn't able to be cheated in every situation.
Cadence includes an `unsafeRand` function that generates a random number that is pseudo-random, but not safe to use in every situation.
We are also working on designing safer schemes to use in smart contract.

### How will an Oracle work in Cadence?

Oracles can work in Cadence just like they do in other blockchain environments. You can make a smart contract that registers events and give an authorization resource to an account that an oracle can send transactions to to log off-chain events.

## Resources FAQs

### What is a central ledger and why it is a problem?

Most smart contract languages in use today represent ownership using a ledger, where a single smart contract keeps track of the balances of all the users. This is an issue because the users don't truly have ownership of their assets, they don't have as much flexibility to dictate how they are used, and a single ledger as a central point of failure could bring down the whole system.

### Every account stores their own assets

In Cadence we use resources to represent real assets. Resources are stored in a users account storage within the storage structure, which is a key-value store that is keyed by type. So we store an `NFT` resource type in the `NFT` slot.

```cadence
import NFT, createNewNFT from 0x42

transaction {
  main(signerAccount: Address) {
    // mint a new NFT
    let newToken <- createNewNFT()

    // save it to storage
    signerAccount.save(<-newToken, to: /storage/Token)

  }
}
```

### But what if I want to store multiple objects of the same type?

In your storage, you can specify any name for a storage slot. So a resource of type `Token` could be in `/storage/Token` or `/storage/Unicorn` or any other choice for that matter, as long as it isn't overwriting any other object in storage.

### Benefits to ease of use for resources

Users don't always have to play by all the rules exactly how they are defined in the central ledger smart contract. They can create custom logic for their tokens even if the token type was defined by someone else. They can also define custom access control if they want other accounts to have different levels of access to their tokens.

Because the ownership isn't mediated by a central contract, users can also transact with each other peer-to-peer without having to touch the central contract.

### Benefits to security

If there is a vulnerability in the smart contract code, it would need to be exploited in every user's account, which takes time, effort, and money. In ledger style, that vulnerability would only need to be exploited once.

Resources also are protected by Cadence's strong static type system to ensure that resources can never be duplicated or lost by accident or by malice.

### What is stopping someone from just creating a bunch of `Vault` resources out of thin air and having infinite money?

Resource creation is restricted to the context in which it was defined, meaning that only code defined within the same contract as the resource can create new resources. This ensures that users can know up front what code will be able to create new Vaults and the restrictions that are put on that code. This is why the fungible token contracts define a function for creating empty Vaults that users can call.

### Why do arrays and dictionaries behave differently when they have a resource stored in them?

If you want to store a resource within an array or dictionary, then that array or dictionary needs to have to same protections built into it that resources have, because it contains one! The array becomes a resource type and all the rules that apply to resource now apply to the array. We wouldn't want to accidentally lose or destroy a resource just because we put it in an array!

### On Ethereum, if I want to know what tokens someone owns, I call ownerOf() on all the tokens, and see which ones return the person in question. Can I call ownerOf() on Flow?

It might help to step out and look at why the Cadence programming model is different: We want to enable different use cases. Let me give an example from something that hopefully most people here are familiar with: CryptoKitties!

When you breed your CryptoKitties, you pay a birthing fee. That birthing fee is held in escrow by the CK smart contract until the Kitty is ready to be born, and then it's paid to whatever "midwife" comes along and calls the giveBirth() method (usually us!). This is a very "decentralized" solution, because it works when Dapper Labs' midwife service works, but it also has an incentive for someone else to come along and "pick up the slack" if we aren't there.

If you look at the CK smart contract in [Etherscan](https://etherscan.io/address/0x06012c8cf97bead5deae237070f9587f8e7a266d), you can see how much total is being held in escrow in this way (about 8.5 ETH at the moment).

Now, because of the Ethereum ledger model, all of the ETH is mingled together, even though every bit of that Ether is conceptually attached to one of the 1066 pending births.

The Cadence Resource model would allow us to attach each birthing fee _to the Kitty it belongs to_. Which isn't something the Ethereum ledger model allows.

But when you have this flexible ownership model, where Resources can own Resources (who can, in turn, own more Resources), what does it mean to say "Who owns this token?"

In the Ethereum ledger model, we can clearly say that the CK smart contract owns that 8.5 ETH, and then we leave it up to the CK smart contract to correctly divvy up that ETH per Kitty.

But (secret shame time!) it turns out that the way we manage that birthing fee has a small bug in it: If we change the birthing fee, the updated fee _retroactively_ applies to previously initiated births.

In practice, we've only had to change the birthing fee a few times (in response to the crazy gas prices we helped to create!), but that miscalculation error is there, and we have to be pretty careful not to change the fee too abruptly because of it.

If we used the Cadence Resource model, and that birthing fee was attached to the pregnant cat it is associated with, that bug would be impossible.

And it would be impossible because the CK smart contract wouldn't own that fee; the cat itself would own that fee.

So when you ask the question "Who owns these coins?", and those coins are attached to Sally's CryptoKitty, what should the answer be? The Kitty? Well, that's not an account. Surely the answer to "Who owns this?" should be an account. Should it be Sally? Well, Sally owns the cat, and the cat owns the coins, so that kind of seems correct, but Sally doesn't have any control over how those coins are spent. She can't get them out of her cat! So saying she owns them isn't really correct either.

So how _should_ we think about this then?

First, we assert that we don't actually need to have an answer to "Who owns this?" for _every_ asset in the system.

Second, we observe that the real world collectibles (and finance!) work _just fine_ without being ask "Who owns this?" for every single asset. Who owns the dollar bill with the serial number CDB3203795? Cash works just fine without being able to answer that question!

Finally, we note that the reason we have to ask "Who owns this NFT?" in Ethereum is due to the fact that Ethereum has such tight gas limits that we can't ask efficiently ask the more natural question: "What NFTs does this person own?"

(The original draft of ERC-721 included a method called `tokensOfOwnerByIndex(owner, index)`, but it was impossible to implement efficiently in Solidity, so it was scrapped in the final version.)

In Cadence, you ask what I consider to be the more natural question: What tokens do _you_ own?

We ensure that asking that question is efficient and _for the vast majority of use cases_, this is the question we actually want to ask! I assume that OpenSea works just like CryptoKitties does: We ask the blockchain "Who owns this NFT?" a million times and cache (or filter) for individual owners, because there is no way to directly get a list of tokens by owner.

So, we then might ask the question: Okay, I can get a list of all of my NFTs, or I can query a list of all of Sally's NFTs, but if I have an off chain cache of this ownership data for efficiency reasons, how do I know when that list has changed or not?

The _standard_ mechanism for holding your NFT collection is to have a Resource object which represents your collection, and it posts an event whenever an NFT is added or removed from that collection.

So, if you run a website that Sally uses to look at her NFT collection, you just watch for events announcing NFTs moving in and out of her Collection, and you'll always be up-to-date.

It's true that an NFT might leave her Collection and end up somewhere else (maybe not even in _anyones_ Collection!), but that doesn't change the fact that you have an accurate and up-to-date reflection of Sally's Collection without having to re-query it each time.

## Capability Security FAQs

### Why does Cadence not check msg.sender for access control purposes?

In Solidity a common form of access control is to have a allowlist of addresses stored in the contract that can access certain methods or fields. When these methods are called, the contract checks to see if the caller is in the allowlist of addresses that are allowed to access it before allowing the method to execute.

```solidity:title=Contract.sol
// Solidity
function transfer(kittyId: uint, newOwner: address)
{
    // checks to make sure the caller is authorized
    // before transferring ownership
    if (msg.sender == kitties[kittyId].owner)
    {
      kitties[kittyId].owner = newOwner
    }
}
```

In Cadence, this is possible, but not necessary because Cadence uses Capability security, which is a form of access control that states that nobody is allowed to access an object unless it has a specific reference to that object. So instead of adding an address to a list of authorized addresses in the contract, a reference to the contract can be given to the authorized addresses. To those who don't own the reference, it is as if the object doesn't even exist. It is not even required to checking who the caller is because a unauthorized caller could not even have the ability to see, let alone call the function.

### How are references created and distributed?

See the "Capability-based Access Control" section of the language spec or one of the tutorials for a run-through of how capabilities and references are created.

### Why capabilities cannot be forged:

Capabilities to an object can only be created by the account that owns that object. This is because objects in account storage are only allowed to be accessed by the account who owns it. Therefore, it is impossible for an external account to access another account's object or to create a capability to it. From their perspective, it doesn't exist.

### How this differs from Ethereum:

With these tools, we no longer have to use `msg.sender` and an allowlist to enforce access control on our objects and contracts. The language itself enforces the access control and users only have to give references to code that they trust.

### Why does private even exist if someone has to always create a reference to make something public?

Private is still necessary because the contract creator might want to define fields that are completely private. Completely private fields cannot even be accessed through interfaces, only code within the same context as the private field can access it.
