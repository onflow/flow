# Soul-Bound Token
                                                                                                             
## Objective

This proposal is to introduce a standard for Soul-Bound Token to the flow ecosystem.
Soul-Bound Token means tokens that are Non-Fungible yet not transferrable to the others.
Soul-Bound Token (SBT) should be differentiated from NFTs for long-run to faciliate easy
integration of SBTs. 

## Motivation

Currently the NFT standard on flow requires a "withdraw" function to enable NFT transfers.
However, some of the certificates / proofs should not be transferrable as it certifies only
that address achieved something.
Of course we can do the below to disable the withdraw function.
```
pub fun withdraw(withdrawID : UInt64) @NonFungibleToken.NFT {
	pre{
	false : "This NFT cannot be withdrawn"
	}
}
```
Yet this method is not desirable as it always abort the entire transaction when the withdraw
function is called. And no obvious boundaires are set to distinguish which are transferrable 
NFTs and which are not unless the user tries to withdraw it.

A new standard is needed to set up for the flow ecosystem to introduce the community to a new 
type of token : Soul-Bound Token which will be popular in uses like POAPs, onchain certifications.

## Design Proposal

The design for SBT would be similar to NFT standards on flow and is demonstrated in the attached cadence file.
