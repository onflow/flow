---
title: "Debugging"
slug: "debugging"
hidden: false
createdAt: "2020-02-25T14:44:04.694Z"
updatedAt: "2020-03-06T23:49:23.799Z"
---
# Playground Errors

## ‘GraphQL error: access denied’:
This error sometimes happens when trying to deploy smart contracts. This usually happens if the user has disabled cookies. The flow playground requires cookies to be enabled in your browser to be able to deploy contracts correctly. If you enable cookies for the playground website, it should solve this error.

The Flow playground is still a work in progress, and unfortunately will sometimes get stuck in a bad state. If you are have been following the instructions exactly and have exhausted your options trying to debug a problem, it might be worth doing a hard refresh of the browser: 
On Mac: `Command+Shift+R`
On Windows: Hold down `Ctrl` and click the refresh button in the browser.


If you are having problems with the playground or think that you have found a bug, please reach out to the Flow team on the public Flow discord channel. We will try to address your problem as quickly as possible.


# Common Cadence Errors

## `Error: loss of resource`
This error indicates that somewhere in your code, there is a resource that has gone out of scope and was not properly stored in account storage or explicitly destroyed. Make sure that the resources you are interacting with in your contracts or transactions are properly dealt with. This is how Cadence ensures that resources aren't lost!

## `cannot create reference: expected reference type, got {Type}`
This error is telling you that while trying to create a reference, you tried to cast the reference as a concrete type instead of a reference type. Make sure that when you are casting a reference, you include an ampersand (`&`) before the type you are casting it as:
`let receiverRef = &account.storage[FlowToken.Vault] as &FungibleToken.Receiver`

## `Execution failed: Checking failed: cannot move nested resource`
This happens when you are trying to move a resource out of an array or mapping. If you are moving it directly, you need to replace it with something, which can be `nil` or a different resource.
For example, this line:
`let oldHello <- self.account.storage[HelloAsset] `
should be changed to this:
`let oldHello <- self.account.storage[HelloAsset]  <- nil`

## `value of type {Type}? has no member {Member}. unknown member`
This means that you are trying to access a member or index of an optional. 
If you have removed something from storage or from a dictionary or array, it will be an [optional](https://onflow.readme.io/docs/glossary#section-optionals-in-cadence) by default. You need to make sure that you unwrap the optional by either using optional chaining, the nil-coalescing operator, or optional binding. See the [Optionals](https://onflow.readme.io/docs/glossary#section-optionals-in-cadence) section in the Glossary to understand how they work.

## `Error > Execution failed: parameter count mismatch for transaction: expected 2, got 1`
This means that a transaction has been signed by two accounts, but only has one account object as a parameter for the prepare block. The number of `Account` parameters needs to be exactly the same as the number of signers of the transaction.