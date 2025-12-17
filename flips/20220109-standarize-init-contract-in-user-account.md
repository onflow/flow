# Title of FLIP

| Status        | (Proposed / Rejected / Accepted / Implemented)       |
:-------------- |:---------------------------------------------------- |
| **FLIP #**    | [NNN](https://github.com/onflow/flow/pull/NNN) (update when you have PR #) |
| **Author(s)** | Bjarte S. Karlen (bjartek@find.xyz)                                        |
| **Sponsor**   | ??                                                                         |
| *Updated**    | 2022-01-09                                                                 |

## Objective

What happends when a user in BloctoApp clicks "create new versus collection"? As the creator of the versus contract, I do not know. 

In the current state of cadence I see a trend where initializing the storage/link a solution/contracts requires is becomming more and more decentralized. The process of doing this is not standardized in any way and the owner of a contrat have no way of knowing if another product initializes the storages correctly. 

This FLIP aims to suggest a solution where it would be possible for the owner of a contract to specify how it wants itself to be initialized in a user accounts. And also enable script access to this information.

## Motivation

Make it easier for the owner of a contract to ensure that storage is initialized properly and linked according to best practise and standards. 
Enable an event to be emitted when this process is run that contains the user account. So that it is possible to ask the chain "who has initialized my solution" 

Make it very easy in a script to do the following:
 - check if a user has initialized a contract in their account
 - initliaze a contract in a users account or even upgrade the way things are linked if another interface is added.

## User Benefit

This is more of a benefit to writers of contracts and solutions that aim to integrate with multiple different contracts then to end user. 

The end user will get a benefit in that it will be way faster to integrate across solutions.

## Design Proposal

When deploying a contract it should be possible to store in the account along with the contract the following
 - the storage path you want to initialize and the value you want to put in it.
 - any links to this stoarge path be them public or private. 
 - if possible inspect the code and link with ALL interfaces in a resource except the ones marked as private. 
	 
Ideally the following data should be able to be stored in the account

Given we have an ExampleNFT contract with a single privately linked interface `Admin`

```
//not sure how to standardize initalization of this value for a resource. some resources might need arguments when you initalize them
let collection <- ExampleNFT.createEmptyCollection()

// the information to do this should be store in the account
//the value of the storagePath should be derrived from the name of the contract and the address deployed to unless explicitly overriden (for backwards compatilitiy)
signer.save(<-collection, to: ExampleNFT.CollectionStoragePath)

// create a public capability for the collection
//Always link with implementation first and then all interfaces the resource implements, except Admin since that is somehow marked as Private.//TODO: how to mark Admin as private linked?
signer.link<&ExampleNFT{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic, NonFungibleToken.Receiver, MetadataViews.ResolverCollection}>(
  ExampleNFT.CollectionPublicPath,
  target: ExampleNFT.CollectionStoragePath
)

//Paths are again generated from the truth unless override explicitly
signer.link<&ExampleNFT{ExampleNFT.Admin}>(
  ExampleNFT.CollectionPrivatePath,
  target: ExampleNFT.CollectionStoragePath
)

```

This data can then be used in the following way somehow

AuthAccount could then have a function like `ensureContractInitialized` that takes a lambda that returns `@AnyResource`. This could be used as follows

```

//a function value that returns a resource
[var](var) creator = fun() { return <- ExampleNFT.createEmptyCollection() }

//signer is authAccount
let exampleNFTreferece=signer.ensureContractInitialized(creator)
```

If the user does not have the contract initialized properly then it should be stored and linked as above and an event should be emitted that contains the name of the user and the contract.

On the read side of things, there might not be much changes if the storageAPI is implemented, allthough it could be worthwhile to have some accessor methods on PublicAccount to query the information. Like getting the PublicPath a resource is linked at and the interfaces it can be borrowed as. 

[###](###) Drawbacks

Existing initiliazed accounts will not automatically have the new events if we do not provide a way to migrate

### Alternatives Considered

* In some talks some users have suggested just removing paths all together. Presonally I (bjartek) see them as powerfull for more advanced work but the common use case should have an abstractions above them.
* This proposal could be expanded to allow the read site of solutions to access the same data, but I am not sure how easy that would be without generics. 

### Performance Implications

I do not see any major performance implications here

### Dependencies

No

### Engineering Impact

There needs to be new methods added to AuthAccount and PublicAccount. The storage model for contracts in accounts need to be updated to store this aditional data.

TODO: help needed on how much work this is

### Best Practices

Yes!

This FLIP aims to toally change the best practise on how you initialize a contract in a user account and how to access that contract in a users account. The old way will still work, but it should be left for advanced usecases?

TODO: help needed

### Tutorials and Examples


This has to be done

### Compatibility

* Does the design conform to the backwards & forwards compatibility [requirements](../docs/compatibility.md)?
* How will this proposal interact with other parts of the Flow Ecosystem?
    - How will it work with FCL?
    - How will it work with the Emulator?
    - How will it work with existing Flow SDKs?

### User Impact

* What are the user-facing changes? How will this feature be rolled out?

## Related Issues

What related issues do you consider out of scope for this proposal, 
but could be addressed independently in the future?

## Prior Art

Does the proposed idea/feature exist in other systems and 
what experience has their community had?

This section is intended to encourage you as an author to think about the 
lessons learned from other projects and provide readers of the proposal 
with a fuller picture.

It's fine if there is no prior art; your ideas are interesting regardless of 
whether or not they are based on existing work.

## Questions and Discussion Topics

Seed this with open questions you require feedback on from the FLIP process. 
What parts of the design still need to be defined?
