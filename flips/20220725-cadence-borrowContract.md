# borrowContract function for PublicAccount

| Status        | Proposed    												  |
:-------------- |:------------------------------------------------------------|
| **FLIP #**    | [1071](https://github.com/onflow/flow/pull/1071)  	 	  |
| **Author(s)** | Deniz Mert Edincik (deniz@edincik.com)  					  |
|				| Austin Kline (austin@flowty.io)  							  | 
| **Sponsor**   | 														      |
| **Updated**   | 2022-10-11                                    			  |

## Objective

This proposal will allow Cadence programs to import contracts dynamically from an address.

## Motivation

There is a popular request, especially from people coming from EVM space, to have a way to import contracts from an address by name ( dynamic import functionality )

Cadence lacks dynamic imports, which leads to mass imports in some contracts ( e.g., alchemy, find ) which also causes many contracts to fail if one of the crucial contracts ceases to exist. 

## User Benefit

- It makes it possible to use patterns common to Solidity developers in Flow. ( Such as creating an empty `Vault` or empty `Collection` for the FT/NFT type without prior knowledge of the contract except if it implements the relevant standard.
- It allows importing and using contracts with a name collision. See https://github.com/onflow/cadence/issues/1171
- It will prevent a single contract from breaking the ecosystem

## Design Proposal


We suggest adding a new method `borrow` to  both `AuthAccount.Contracts` and `PublicAccount.Contracts`.

Borrowing a Contract will return a reference to the contract, avoiding move/copy problems. 

Implemented a proof of concept in https://github.com/onflow/cadence/pull/1934

```cadence 
fun borrow<T: &Any>(name: String): &T?
```

```cadence 
if let contract = getAccount(0x1).contracts.borrow<&FungibleToken>("ExampleFT") {
	let emptyVault <- contract.createEmptyVault()
}
```


## Alternative 

Adding a method named `borrowContract` to both `PublicAccount` and `AuthAccount`.

```cadence 
fun borrowContract<T: &Any>(name: String): &T?
```

Example usage will be:

```cadence 
if let contract = getAccount(0x1).borrowContract<&FungibleToken>("ExampleFT") {
	let emptyVault <- contract.createEmptyVault()
}
```


## Compatibility

This change should be backward compatible. 

## User Impact

The proposed change can affect how users write their smart contracts, which can cause some minor issues with reading contract code due to the nature of dynamic imports. But eventually, we don't see any negative security impact. 

## Prior Art & Related Features 

- Dynamically resolving import addresses [https://github.com/onflow/cadence/issues/550] 
- Solidity has a way to import and call contracts from an address. 


