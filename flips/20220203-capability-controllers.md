| status: Proposed
| flip: [798](https://github.com/onflow/flow/pull/798)
| author: Janez Podhostnik (janez.podhostnik@dapperlabs.com), Bastian Müller (bastian@dapperlabs.com)
| updated: 2023-03-24

# Capability controllers

## Preface

Cadence encourages a [capability-based security](https://en.wikipedia.org/wiki/Capability-based_security) model
as described on the Flow [doc site](https://docs.onflow.org/cadence/language/capability-based-access-control).
Capabilities are themselves a new concept that most Cadence programmers need to understand,
but the API for syntax around Capabilities (especially the notion of “links” and “linking”),
and the associated concepts of the public and private storage domains,
lead to Capabilities being even more confusing and awkward to use.

This proposal suggests that we could get rid of links entirely,
and replace them with Capability Controllers (henceforth referred to as CapCons),
which could make Capabilities easier to understand, and easier to work with.

The following is a quick refresher of the current state of the Capabilities API
(from the [Cadence documentation](https://docs.onflow.org/cadence/language/capability-based-access-control)).

### Example Resource definition

In the following examples, let's assume that the following interface and resource type that implements the interface are defined.

```cadence
pub resource interface HasCount {
    pub count: Int
}

pub resource Counter: HasCount {
    pub var count: Int

    pub init(count: Int) {
        self.count = count
    }
}
```

The _issuer_ (`AuthAccount`) has also created an instance of this resource and saved it in its private storage.

```cadence
issuer.save(<-create Counter(count: 42), to: /storage/counter)
```

### Public Capabilities

To allow anyone (read) access to the `count` field on the counter (during a transaction),
the _issuer_ needs to create a public typed link at a chosen path that points to their stored counter resource.

```cadence
issuer.link<&{HasCount}>(/public/hasCount, target: /storage/counter)
```

Anyone can now read the `count` of the counter resource via the `HasCount` interface.

This can be done by
- getting the `PublicAccount` object of the issuer (using the issuers address),
- then getting a typed capability from the chosen path,
- then finally calling borrow on that capability to get a reference to the instance of the counter (constrained by the `HasCount` interface)

```cadence
let publicAccount = getAccount(issuerAddress)
let countCap = publicAccount.getCapability<&{HasCount}>(/public/hasCount)
let countRef = countCap.borrow()!
countRef.count
```

### Private Capabilities

To allow only certain accounts/resources (read) access to the `count` field on the counter,
the _issuer_ (of type `AuthAccount`) needs to create a private typed link at a chosen path that points to their stored counter resource.

```cadence
issuer.link<&{HasCount}>(/private/hasCount, target: /storage/counter)
```

The _receivingParty_ (`AuthAccount`) needs to offer a public way to receive `&{HasCount}` capabilities, and store them for later use.

```cadence
// this would probably be defined on the same contract as `HasCount`
pub resource interface HasCountReceiverPublic {
    pub fun addCapability(cap: Capability<&{HasCount}>)
}

pub resource HasCountReceiver: HasCountReceiverPublic {

    pub var hasCountCapability: Capability<&{HasCount}>?

    init() {
        self.hasCountCapability = nil
    }

    pub fun addCapability(cap: Capability<&{HasCount}>) {
        self.hasCountCapability = cap
    }
}

//...
// this is the receiver account setup
let hasCountReceiver <- HasCountReceiver()

receivingParty.save(<-hasCountReceiver, to: /storage/hasCountReceiver)
receivingParty.link<&{HasCountReceiverPublic}>(
    /public/hasCountReceiver,
    target: /storage/hasCountReceive
)
```

With this in place the _issuer_ can create a capability from its private link and send it to this receiver.

```cadence
let countCap = issuer.getCapability<&{HasCount}>(/private/hasCount)

let publicAccount = getAccount(receivingPartyAddress)
let countReceiverCap = publicAccount.getCapability<&{HasCountReceiverPublic}>(/public/hasCountReceiver)
let countReceiverRef = countCap.borrow()!
countRef.addCapability(cap: countCap)
```

The receiving party can then use this capability when they wish.

### Capability API requirements

There are two requirements of the capability system that must be satisfied.

- **Revocation**: Any capability must be revocable by the issuer.
- **Redirection**: The issuer should have the ability to redirect the capability to a different (compatible) object.

Capabilities can currently be revoked by using the `unlink` function.

In the public example this would mean calling `issuer.unlink<&{HasCount}>(/public/hasCount)`,
which would invalidate (break) all capabilities created from this public path
(both those created before unlink was called and those created after unlink was called).

In the private example the call would change to `issuer.unlink<&{HasCount}>(/private/hasCount)`.
It is important to note that if the issuer wants to have the ability to revoke/redirect capabilities in a more granular way
(instead of doing them all at once),
the solution is to create multiple private linked paths (e.g. `/private/hasCountAlice`, `/private/hasCountBob`).

If a path that was unlinked is linked again all the capabilities created from that path resume working.
This can be used to redirect a capability to a different object,
but can also be dangerous if done unintentionally,
reviving a previously revoked capability.

### Capabilities are values

Capabilities are a value type. This means that any capability that an account has access to can be copied,
and potentially given to someone else.
The copied capability will use the link on the same path as the original capability.

## Problem statement

The current capability API has a few pain points:

- The concepts capabilities/linking/revoking/redirecting are hard to understand for new developers that are coming to Flow,
as that is a lot of new concepts to grasp before one can get started.

- Issuing and managing private capabilities that can be revoked at a granular level,
  by creating a custom private linked path for each capability, is difficult.

- Unless the path name includes some hints, there is no way to know when a path was created,
  thus making it more difficult to remember why a certain capability was issued.

- If an old path (that has been unlinked) is accidentally reused and re-linked,
  this will revive a capability that is supposed to be revoked.

## Suggested change

The suggested change addresses these pain points by:

- Removing (or abstracting away) the concept of links.
- Making it easier to create new capabilities (with individual links).
- Offering a way to iterate through capabilities on a storage path.
- Removing the need to have a `/private` domain.
- Introducing Capability Controllers (CapCons) that handle management of capabilities.

### Capability Controllers (CapCons)

Each Capability has an associated CapCon that is responsible for managing the Capability.
The CapCon is created when the Capability is issued.
When the Capability is copied (since it is a value type),
it shares the CapCon with the original capability
(i.e., calling `delete` on the CapCon revokes all copies of the associated capability).

The Capability, and all copies of that Capability, have the same ID.
Capability IDs are unique per account.

CapCons are not storable (similar to e.g. AuthAccounts).

There are two kinds of capabilities:
- Storage capability: Targets a storage path in an account
- Account capabilities: Targets an account.
  This kind was introduced in [FLIP 53](https://github.com/onflow/flips/pull/53).

Therefore, there are two kinds of Capability Controllers:
`StorageCapabilityController` and `AccountCapabilityController`.

```cadence
pub struct StorageCapabilityController {

    /// The type of the controlled capability, i.e. the T in `Capability<T>`.
    pub let borrowType: Type

    /// The identifier of the controlled capability.
    /// All copies of a capability have the same ID.
    pub let capabilityID: UInt64

    /// Delete this capability controller,
    /// and disable the controlled capability and its copies.
    ///
    /// The controller will be deleted from storage,
    /// but the controlled capability and its copies remain.
    ///
    /// Once this function returns, the controller is no longer usable,
    /// all further operations on the controller will panic.
    ///
    /// Borrowing from the controlled capability or its copies will return nil.
    ///
    pub fun delete()

    /// Returns the targeted storage path of the controlled capability.
    pub fun target(): StoragePath

    /// Retarget the capability.
    /// This moves the CapCon from one CapCon array to another.
    pub fun retarget(target: StoragePath)
}
```

```cadence
pub struct AccountCapabilityController {

    /// The type of the controlled capability, i.e. the T in `Capability<T>`.
    pub let borrowType: Type

    /// The identifier of the controlled capability.
    /// All copies of a capability have the same ID.
    pub let capabilityID: UInt64

    /// Delete this capability controller,
    /// and disable the controlled capability and its copies.
    ///
    /// The controller will be deleted from storage,
    /// but the controlled capability and its copies remain.
    ///
    /// Once this function returns, the controller is no longer usable,
    /// all further operations on the controller will panic.
    ///
    /// Borrowing from the controlled capability or its copies will return nil.
    ///
    pub fun delete()
}
```

### Capabilities

The `Capability` type is extended with the new field `let id: UInt64`.

### AuthAccount Type

The capability management functions in `AuthAccount` will be grouped in nested objects,
similar to how the contract management functions are in a nested [`contracts` object](https://developers.flow.com/cadence/language/accounts).

Functions related to linking will be removed, as they are no longer needed.

```cadence
pub struct AuthAccount {
    // ...
    // removed: fun link<T: &Any>(_ newCapabilityPath: CapabilityPath, target: Path): Capability<T>?
    // removed: fun unlink(_ path: CapabilityPath)
    // removed: fun getLinkTarget(_ path: CapabilityPath): Path?
    // changed: fun getCapability<T: &Any>(_ path: CapabilityPath): Capability<T>

    /// Returns the capability at the given public path.
    /// Returns nil if the capability does not exist,
    /// or if the given type is not a supertype of the capability's borrow type.
    pub fun getCapability<T: &Any>(_ path: PublicPath): Capability<T>?

    /// Borrows the capability at the given public path.
    /// Returns nil if the capability does not exist, or cannot be borrowed using the given type.
    /// The function is equivalent to `getCapability(path)?.borrow()`.
    pub fun borrowCapability<T: &Any>(_ path: PublicPath): T?

    pub let storageCapabilities: &AuthAccount.StorageCapabilities
    pub let accountCapabilities: &AuthAccount.AccountCapabilities

    /// Publish the capability at the given public path.
    ///
    /// If there is already a capability published under the given path, the program aborts.
    ///
    /// The path must be a public path, i.e., only the domain `public` is allowed.
    pub fun publishCapability(_ capability: Capability, at: PublicPath)

    /// Unpublishes the capability published at the given path.
    ///
    /// Returns the capability if one was published at the path.
    /// Returns nil if no capability was published at the path.
    pub fun unpublishCapability(_ path: PublicPath): Capability?

    pub struct StorageCapabilities {

        /// Get the storage capability controller for the capability with the specified ID.
        /// Returns nil if the ID does not reference an existing storage capability.
        pub fun getController(byCapabilityID: UInt64): &StorageCapabilityController?

        /// Get all storage capability controllers for capabilities that target this storage path
        pub fun getControllers(forPath: StoragePath): [&StorageCapabilityController]

        /// Iterate through all storage capability controllers for capabilities that target this storage path.
        /// Returning false from the function stops the iteration.
        pub fun forEachController(forPath: StoragePath, function: ((&StorageCapabilityController): Bool))

        /// Issue/create a new storage capability.
        pub fun issue<T: &Any>(_ path: StoragePath): Capability<T>
    }

    pub struct AccountCapabilities {

        /// Get capability controller for capability with the specified ID.
        /// Returns nil if the ID does not reference an existing account capability.
        pub fun getController(byCapabilityID: UInt64): &AccountCapabilityController?

        /// Get all capability controllers for all account capabilities.
        pub fun getControllers(): [&AccountCapabilityController]

        /// Iterate through all account capability controllers for all account capabilities.
        /// Returning false from the function stops the iteration.
        pub fun forEachController(_ function: ((&AccountCapabilityController): Bool))

        /// Issue/create a new account capability.
        pub fun issue<T: &AuthAccount>(): Capability<T>
    }
}
```

### PublicAccount Type

```cadence
pub struct PublicAccount {
    // ...
    // removed: fun getLinkTarget(_ path: CapabilityPath): Path?
    // changed: fun getCapability<T: &Any>(_ path: PublicPath): Capability<T>

    /// Returns the capability at the given public path.
    /// Returns nil if the capability does not exist,
    /// or if the given type is not a supertype of the capability's borrow type.
    pub fun getCapability<T: &Any>(_ path: PublicPath): Capability<T>?

    /// Borrows the capability at the given public path.
    /// Returns nil if the capability does not exist, or cannot be borrowed using the given type.
    /// The function is equivalent to `getCapability(path)?.borrow()`.
    pub fun borrowCapability<T: &Any>(_ path: PublicPath): T?
}
```

## Impact of the solution

### Changes for capability consumers

The following pattern:

```cadence
let publicAccount = getAccount(issuerAddress)
let countCap = publicAccount.getCapability<&{HasCount}>(/public/hasCount)
let countRef = countCap.borrow()!
countRef.count
```

Would change to:

```cadence
let publicAccount = getAccount(issuerAddress)
let countCap = publicAccount.getCapability<&{HasCount}>(/public/hasCount)!
let countRef = countCap.borrow()!
countRef.count
```

(Note how the `getCapability` function returns an optional now.)

Or using the new `borrowCapability` convenience function:

```cadence
let publicAccount = getAccount(issuerAddress)
let countRef = publicAccount.borrowCapability<&{HasCount}>(/public/hasCount)!
countRef.count
```

### Changes for capability issuers

There would be more change on the issuer's side. Most notably creating a public capability would look like this.

```cadence
let countCap = issuer.storageCapabilities.issue<&{HasCount}>(/storage/counter)
issuer.save(countCap, to: /public/hasCount)
```

Unlinking and retargeting issued capabilities would change to getting a CapCon and calling the appropriate functions.

```cadence
let capCon = issuer.storageCapabilities.getController(byCapabilityID: capabilityID)

capCon.revoke()
// or
capCon.retarget(target: /storage/counter2)
```

This example assumes that the capability ID is known.
This is always the case for capabilities in the accounts public domain, since the account has access to those directly.
For private capabilities that were given to someone else this can be achieved
by keeping an on-chain or an off-chain list of capability ids and some extra identifying information
(for example the address of the receiver of the capability).
If no such list was kept, the issuer can use the information on the CapCons,
retrieved through e.g. `issuer.storageCapabilities.getControllers(path: StoragePath)`, to find the right ID.

### Pet names for issued capabilities

If needed the capability issuing functions can be wrapped into a contract function,
so that the issuer can more easily keep track of what was issued.

```cadence
// inside the Counter contract
access(account) petNames: {String: UInt64}

access(account) issueHasCount(petName: String): Capability<&{HasCount}> {
   // for brevity this function is not handling pet name collision
   let cap = self.account.storageCapabilities.issue<&{HasCount}>(/storage/counter)
   self.petNames[petName] = cap.id
   return cap
}
```

This allows the account to later access `petNames` when it needs to revoke/retarget a specific capability.
This can also be used not just for pet names, but to add other metadata to issued capabilities.

### Capability Minters

In certain situations it is required that an issuer delegates issuing and revoking capabilities to someone else.
In this case the following approach can be used.

Let's assume that the issuer defined an `AdminInterface` resource interface and a `Main` resource (besides the `Counter` and `HasCount` from previous examples).

```cadence
pub resource interface AdminInterface {
   fun createCountCap(): Capability<&{HasCount}>
   fun revokeCountCap(capabilityID: UInt64): Bool
}
pub resource Main : AdminInterface {
   fun createCountCap(): Capability<&{HasCount}> {
       return self.account.storageCapabilities.issue<&{HasCount}>(/storage/counter)
   }

   fun revokeCountCap(capabilityID: UInt64) {
      if let capCon = self.account.storageCapabilities.getController(byCapabilityID: capabilityID) {
         if capCon.borrowType != Type<&{HasCount}>() {
            return false // we have only delegated the issuance/revocation of &{HasCount} capabilities
         }
         capCon.delete()
      }
   }
}
```

The issuer can then store a `Main` resource in their storage and give the capability to call it to a trusted party.
The trusted party can then create and revoke `&{HasCount}` capabilities at will.

```cadence
issuer.save(<-create Main(), to: /storage/counterMinter)
let countMinterCap <- issuer.storageCapabilities.issue<&{AdminInterface}>(/storage/counterMinter)
countMinterCap // give this to a trusted party
```

It is worth noting that every time the `AdminInterface` is used, a CapCon is created in the issuer's storage, taking up some storage space.
Revoking a capability by deleting its controller frees up the storage for the controller, but not for the capability and its copies.

In this example the delegatee with the `Capability<&{AdminInterface}>` can revoke any capability of type `&{HasCount}`,
even those that someone else created.
This is sometimes desired – for example,
IT admins with the capability to issue purchase_hardware capabilities should have the ability to revoke what other IT admins issued.
However, sometimes we would like the delegatee to only revoke what it issued.
If that is the case, another resource can be created `ScopedMain` that serves to limit which capabilities can be revoked.

```cadence
pub resource ScopedMain : AdminInterface {
   pub delegatorTag: String
   pub inner: Capability<&{AdminInterface}>
   pub issued: {UInt64:Bool}

   pub init(inner: Capability<&{AdminInterface}>, delegatorTag: String) {
      self.delegatorTag = delegatorTag
      self.inner = inner
      self.issued = {}
   }


   fun createCountCap(): Capability<&{HasCount}> {
      let capability = self.inner.createCountCap()
      self.issued[capability.id] = true
      return capability
   }

   fun revokeCountCap(capabilityID: UInt64) {
      if self.issued.containsKey(capabilityID) {
         self.issued.remove(key: capabilityID)
         self.inner.revokeCountCap()
      }
   }
}
```

## Deployment options

Just making a breaking change by removing the linking API and adding the CapCons API might cause some headaches.
In order to make the transition to CapCons smoother, the CapCons API could temporarily work in parallel with the current linking API.

The rollout process would have 2 steps:

1. Add CapCons and still have linking.
2. After a transition period remove linking.

To make this FLIP compatible with this rollout, the requirement of removing the private domain needs to be addressed.
While both APIs are still active, the private domain still needs to exist in order to do private linking for private capabilities.
The private domain can be removed at step 2.

During step 1, all existing links should also become CapCons (most likely with a storage migration).
The linking API will still be available, but will actually operate with CapCons in the background.
Below is an implementation of the linking API with the CapCons API.

```cadence
// link
// issuer.link<T>(publicOrPrivatePath, target: storagePath)

let cap = issuer.storageCapabilities.issue<T>(storagePath)
issuer.save(cap, to: publicOrPrivatePath)
```

```cadence
// unlink
// issuer.unlink(publicOrPrivatePath)

let cap = issuer.getCapability<T>(publicOrPrivatePath)!
let capCon = issuer.storageCapabilities.getController(byCapabilityID: cap.id)
capCon.delete()
```

```cadence
// relink
// issuer.unlink(publicOrPrivatePath)
// issuer.link<&{CounterContract.HasCount}>(publicOrPrivatePath, target: storagePath2)

// 1. unlink

let cap = issuer.getCapability<T>(publicOrPrivatePath)!
let capCon = issuer.storageCapabilities.getController(byCapabilityID: cap.id)
capCon.delete()

// 2. link

let cap = issuer.storageCapabilities.issue<T>(storagePath2)
issuer.save(cap, to: publicOrPrivatePath)
```

## Migration of existing data

Existing links and capabilities need to be migrated.

All existing storage links and all storage capabilities will get grouped by path,
and a CapCon with a unique ID will be generated for each group.

This behaviour is similar to how unlinking revokes and relinking retargets all capabilities with the same path.

For all existing account links and account capabilities
a separate CapCon with a unique ID will be generated.

Capabilities do not currently have an ID.
Existing capabilities will get assigned the ID of the associated CapCon.

## Issues not addressed in this FLIP

### Unexpected revocation

Let's say the issuer creates a capability **A** and gives it to Alice then creates a capability **B** and gives it to Bob.
Alice then copies her capability creating **A'** and gives it to Charlie, creating the following situation:

- Alice: has **A**
- Bob: has **B**
- Charlie: has **A'**

If the issuer decides to revoke **B**, Bob will no longer be able to use his capability.
If the issuer revokes **A** Alice will not be able to use her capability, but perhaps unexpected to Charlie, he will also not be able to use **A'**.

Addressing this issue so that it would be clearer to Charlie that he received a capability that is a copy of Alice's,
and not his own instance, is not in the scope of this FLIP.

This could perhaps be addressed by:
- adding extra descriptors to capabilities (names)
- off chain tracking of capabilities

## Sources

1. Miller, Mark & Yee, Ka-ping & Shapiro, Jonathan. (2003). Capability Myths Demolished.
2. [Capability-Based Security](https://en.wikipedia.org/wiki/Capability-based_security)
3. [Flow Doc Site](https://docs.onflow.org/cadence/language/capability-based-access-control)
4. [Flow Doc Site: capability receiver](https://docs.onflow.org/cadence/design-patterns/#capability-receiver)
5. [Flow Forum Post](https://forum.onflow.org/t/private-capability-revoke/1997)
