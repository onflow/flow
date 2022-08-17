# borrowContract function for PublicAccount

| Status        | Proposed    												  |
:-------------- |:------------------------------------------------------------|
| **FLIP #**    | [NNN](https://github.com/onflow/flow/pull/NNN)  	 		  |
| **Author(s)** | Deniz Mert Edincik (deniz@edincik.com)  					  |
|				| Austin Kline (austin@flowty.io)  							  | 
| **Sponsor**   | 														      |
| **Updated**   | 2022-07-25                                    			  |

## Objective

This proposed change will allow dynamic import of contracts from an address, by
using a well known `borrow` dynamic.

## Motivation

There is a popular request, especially from people coming from EVM space, to
have a way to import contracts from an address by name ( dynamic import
functionality )

Cadence lacks with dynamic imports, which leads to mass imports in some 
contracts ( e.g. alchemy, find ) which also causes a lot of contracts to fail, 
if one of the important contracts cease to exist. 

## User Benefit

- It makes it possible to use patterns that are common to Solidity developers 
in Flow. 
- It allows importing and using contracts with name collision. See https://github.com/onflow/cadence/issues/1171
- It will prevent single contract breaking the ecosystem

## Design Proposal

We suggest to add an new method to `PublicAccount` called `borrowContract`.

```cadence 
fun borrowContract<T: &Any>(name: String): T?
```

Exmaple usage will be:

```cadence 
if let contract = getAccount(0x1).borrowContract<&AnyResource{NonFungibleToken}>("ExampleNFT") {
	let emptyCollection <- contract.createEmptyCollection()
}
```

Another alternative is to add `borrow` method to `DeployedContract`:

```cadence 
fun borrow<T: &Any>(): T?
```

Exmaple usage will be:

```cadence 
if let contract = getAccount(0x1).contracts.get("ExampleNFT").borrow<&AnyResource{NonFungibleToken}>() {
	let emptyCollection <- contract.createEmptyCollection()
}
```

### Compatibility

This should be backwards compatible. 

### User Impact

This will change the way users write their smart contracts. This can cause some issues with reading contract code due to the nature of dynamic imports. But eventually we don't see any security impact. 


## Prior Art

Solidity has a way to import and call contracts from address. 
