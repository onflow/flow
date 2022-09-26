# Capability controllers

| Status        | Proposed                                           |
| :------------ | :------------------------------------------------- |
| **FLIP #**    | [798](https://github.com/onflow/flow/pull/798)     |
| **Author(s)** | Janez Podhostnik (janez.podhostnik@dapperlabs.com) |
| **Updated**   | 2022-08-22                                         |

## Preface

Cadence encourages a [capability-based security](d be clearer to Charlie that he received a capability t) model as described on the Flow [doc site](https://docs.onflow.org/cadence/language/capability-based-access-control). Capabilities are themselves a new concept that most Cadence programmers need to understand, but the API for syntax around Capabilities (especially the notion of “links” and “linking”), and the associated concepts of the public and private storage domains, lead to Capabilities being even more confusing and awkward to use. This proposal suggests that we could get rid of links entirely, and replace them with Capability Controllers (henceforth referred to as CapCons) which could make Capabilities easier to understand, and easier to work with.

The following is a quick refresher of the current state of the Capabilities API (from the [flow doc site](https://docs.onflow.org/cadence/language/capability-based-access-control)).

### Example Resource definition

In the following examples let's assume that the following interface and resource type that implements the interface are defined.

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

To allow anyone (read) access to the `count` field on the counter, the _issuer_ needs to create a public typed link at a chosen path that points to their stored counter resource.

```cadence
issuer.link<&{HasCount}>(/public/hasCount, target: /storage/counter)
```

Anyone can now read the `count` of the counter resource via the `HasCount` interface. This can be done by

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

To allow only certain accounts/resources (read) access to the `count` field on the counter, the _issuer_ (of type `AuthAccount`) needs to create a private typed link at a chosen path that points to their stored counter resource.

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
receivingParty.link<&{HasCountReceiverPublic}>(/public/hasCountReceiver,
   target: /storage/hasCountReceive)
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

Revocation can be currently done by using the `unlink` function.

In the public example this would mean calling `issuer.unlink<&{HasCount}>(/public/hasCount)` which would invalidate (break) all capabilities created from this public path (both those created before unlink was called and those created after unlink was called).

In the private example the call would change to `issuer.unlink<&{HasCount}>(/private/hasCount)`. It is important to note that if the issuer wants to have the ability to revoke/redirect capabilities in a more granular way (instead of doing them all at once), the solution is to create multiple private linked paths (e.g. `/private/hasCountAlice`, `/private/hasCountBob`).

If a path that was unlinked is linked again all the capabilities created from that path resume working. This can be used to redirect a capability to a different object, but can also be dangerous if done unintentionally, reviving a previously revoked capability.

### Capabilities are values

Capabilities are a value type. This means that any capability that an account has access to can be copied, and potentially given to someone else. The copied capability will use the link on the same path as the original capability

## Problem statement

There are two potential pain points in the current capability API.

The first one is that capabilities/linking/revoking/redirecting are hard to understand for new developers that are coming to Flow, as that is a lot of new concepts to grasp before one can get started.

The second is that issuing and managing private capabilities that can be revoked at a granular level, by creating a custom private linked path for each capability, is difficult.

- Unless the path name includes some hints, there is no way to know when a path was created, thus making it more difficult to remember why a certain capability was issued.
- If an old path (that has been unlinked) is accidentally reused and re-linked, this will revive a capability that is supposed to be revoked.
- Copying a capability is easy (since it is a value type) but doing so might give unintended access to third parties.

## Suggested change

The suggested change addresses these pain points by:

- Removing (or abstracting away) the concept of links.
- Making it easier to create new capabilities (with individual links).
- Offering a way to iterate through capabilities on a storage path.
- Removing the need to have a `/private/`domain.
- Changing the `/public/` domain to be able to store capabilities (and only capabilities).
- Introducing Capability Controllers (CapCons) that handle management of capabilities.

### Accounts public domain as a capability storage

This part of the change proposes that accounts can store capabilities in their public domain. Capabilities would be borrowed by anyone that needs to use them. The `borrowCapability `method would be added to the PublicAccount which would be equivalent to how we currently get the capability then call `borrow` on it.

```cadence
let publicAccount = getAccount(issuerAddress)
let countCap = publicAccount.borrowCapability<&{HasCount}>(/public/hasCount)!
countRef.count
```

### Capability Controllers (CapCons)

Each Capability would have an associated CapCon that would be created together with the Capability (Capabilities and Capability Controllers are in a 1 to 1 relation). The data associated with CapCons would be stored in arrays, so that each storage path on an account has an array of CapCons of Capabilities issued from that storage path.

CapCons are a non-storable object.

Capabilities also have an address field and a target field. The target field is the storage path of the targeted object. Creating a capability from a capability should be illegal.

The definition of the `CapabilityController` .

```cadence
// CapabilityController can be retrieved via:
// - AuthAccount::getControllers(path: StoragePath): [CapabilityController]
// - AuthAccount::getController(capabilityID: UInt64): CapabilityController?
struct CapabilityController {
   // The block height when the capability was created.
   let issueHeight: UInt64
   // The Type of the capability.
   let CapabilityType: Type
   // The id of the related capability.
   // This is the UUID of the created capability.
   let capabilityID: UInt64

   // Is the capability revoked.
   fun isRevoked(): Bool
   // The target storage path.
   fun target(): StoragePath
   // Revoke the capability.
   fun revoke()
   // Retarget the capability.
   // This would move the CapCon from one CapCon array to another.
   // If the new target is not a valid target this will panic.
   fun retarget(target: StoragePath)
}
```

The auth account would get new methods to get CapCons in order to manage capabilities:

```cadence
// Get all capability controllers for capabilities that target this storage path
fun getControllers(path: StoragePath): [CapabilityController]
// Get capability controller for capability with the specified id
// If the id does not reference an existing capability
// or the capability does not target a storage path on this address, return nil
fun getController(capabilityID: UInt64): CapabilityController?
```

Some methods would be removed from the `AuthAccount` object as they are no longer needed:

```cadence
fun link<T: &Any>(_ newCapabilityPath: CapabilityPath, target: Path): Capability<T>?
fun getLinkTarget(_ path: CapabilityPath): Path?
fun unlink(_ path: CapabilityPath)
```

The method `getCapability` would be renamed to `issueCapability `to reflect the fact that a new capability is created every time.

And also from the PublicAccount:

```cadence
fun getCapability<T>(_ path: PublicPath): Capability<T>
fun getLinkTarget(_ path: CapabilityPath): Path?
```

This would remove all references to `Link`s.

### Impact of the solution

#### Changes for capability consumers

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
let countCap = publicAccount.borrow<Capability<&{HasCount}>>(/public/hasCount)!
let countRef = countCap.borrow()!
countRef.count
```

Or using the `borrowCapability `shorthand:

```cadence
let publicAccount = getAccount(issuerAddress)
let countRef = publicAccount.borrowCapability<&{HasCount}>(/public/hasCount)!
countRef.count
```

Consuming private capabilities would change in the way that capabilities are resources and must be stored as such. The borrowing part would be the same.

#### Changes for capability issuers

There would be more change on the issuer's side. Most notably creating a public capability would look like this.

```cadence
let countCap = issuer.issueCapability<&{HasCount}>(/storage/counter)
issuer.save(countCap, to: /public/hasCount)
```

Unlinking and retargeting issued capabilities would change to getting a CapCon and calling the appropriate methods.

```cadence
let capCon = issuer.getController(capabilityID: capabilityID)

capCon.revoke()
// or
capCon.retarget(target: /storage/counter2)
```

This example assumes that the capability id is known. This is always the case for capabilities in the accounts public domain, since the account has access to those directly. For private capabilities that were given to someone else this can be achieved by keeping an on-chain or an off-chain list of capability ids and some extra identifying information (for example the address of the receiver of the capability). If no such list was kept, the issuer can use the information on the CapCons retrieved through `issuer.getControllers(path: StoragePath)`to find the right id.

#### Pet names for issued capabilities

If needed the `account.getCapability<T>(path)` can be wrapped into a smart contract function, so that the issuer can more easily keep track of what was issued.

```cadence
// inside the Counter contract
access(account) petNames: {String; UInt64}

access(account) issueHasCount(petName: String): Capability<&{HasCount}> {
   // for brevity this function is not handling pet name collision
   let cap = self.account.issueCapability<&{HasCount}>(/storage/counter)
   self.petNames[petName] = cap.capabilityID
   return cap
}
```

This allows the account to later access `petNames` when it needs to revoke/retarget a specific capability. This can also be used not just for pet names, but to add other metadata to issued capabilities.

#### Capability Minters

In certain situations it is required that an issuer delegates issuing and revoking capabilities to someone else. In this case the following approach can be used.

Let's assume that the issuer defined an `AdminInterface` resource interface and a `Main` resource (besides the `Counter` and `HasCount` from previous examples).

```cadence
public resource interface AdminInterface {
   fun createCountCap(): Capability<&{HasCount}>
   fun revokeCountCap(capabilityID: UInt64): Bool
}
public resource Main : AdminInterface {
   fun createCountCap(): Capability<&{HasCount}> {
       return self.account.getCapability<&{HasCount}>(/storage/counter)
   }

   fun revokeCountCap(capabilityID: UInt64) {
      if let capCon = self.account.getController(capabilityID: capabilityID) {
         if capCon.Type != Type<&{HasCount}>() {
            return false // we have only delegated the issuance/revocation of &{HasCount} capabilities
         }
         capCon.revoke()
      }
   }
}
```

The issuer can then store a `Main` resource in their storage and give the capability to call it to a trusted party. The trusted party can then create and revoke `&{HasCount}` capabilities at will.

```cadence
issuer.save(<-create Main(), to: /storage/counterMinter)
let countMinterCap <- issuer.getCapability(/storage/counterMinter)
countMinterCap //give this to a trusted party
```

It is worth noting that every time the `AdminInterface` is used a CapCon is created in the issuers storage taking up some resources. Revoking capabilities does not free any storage.

In this example the delegatee with the `Capability<&{AdminInterface}>` can revoke any capability of type `&{HasCount}` even those that someone else created. This is sometimes desired (IT admins with the capability to issue purchase_hardware capabilities should have the ability to revoke what other IT admins issued), but sometimes we would like the delegatee to only revoke what it issued. If that is the case, another resource can be created `ScopedMain` that serves to limit which capabilities can be revoked.

```cadence
public resource ScopedMain : AdminInterface {
   public delegatorTag: String
   public inner: Capability<&{AdminInterface}>
   public issued: {UInt64:Bool}

   public init(inner: Capability<&{AdminInterface}>, delegatorTag: String) {
      self.delegatorTag = delegatorTag
      self.inner = inner
      self.issued = {}
   }


   fun createCountCap(): Capability<&{HasCount}> {
      let capability = self.inner.createCountCap()
      self.issued[capability.capabilityID] = true
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


## Issues not addressed in this FLIP

### Unexpected revocation

If the issuer creates a capability **A** and gives it to Alice and creates a capability **B** and gives it to Bob. Alice then copies her capability creating **A'** and gives it to Charlie, creating the following situation:

- Alice: has **A**
- Bob: has **B**
- Charlie: has **A'**

If the issuer decides to revoke **B**, Bob will no longer be able to use his capability. If the issuer revokes **A** Alice will not be able to use her capability, but perhaps unexpected to Charlie, he will also not be able to use **A'**.

Addressing this issue so that it would be clearer to Charlie that he received a capability that is a copy of Alice's, and not his own instance is not in the scope of this FLIP. 

This could perhaps be addressed by:
- adding extra descriptors to capabilities (names)
- off chain tracking of capabilities

Or can be addressed if the issuer creates a wrapper for the capability that the receiver unwraps.

```cadence
pub resource WrappedCapability {
    priv let unwraper: Address
    priv let cap: Capability<&AnyResource>

    pub fun unwrap(unwraper: AuthAccount): Capability<&AnyResource>? {
        if unwraper.address == self.unwraper {
            return self.cap
        }
        return nil
    }

    pub fun capabilityAddress(): Address {
        return self.cap.address
    }

    pub fun unwraperAddress(): Address {
        return self.unwraper
    }

    init(unwraper: Address, cap: Capability<&AnyResource>){
        self.unwraper = unwraper
        self.cap =cap
    }
}
```

## Sources

1. Miller, Mark & Yee, Ka-ping & Shapiro, Jonathan. (2003). Capability Myths Demolished.
2. [Capability-Based Security](https://en.wikipedia.org/wiki/Capability-based_security)
3. [Flow Doc Site](https://docs.onflow.org/cadence/language/capability-based-access-control)
4. [Flow Doc Site: capability receiver](https://docs.onflow.org/cadence/design-patterns/#capability-receiver)
5. [Flow Forum Post](https://forum.onflow.org/t/private-capability-revoke/1997)
