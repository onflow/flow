# Publish/Claim Capability

| Status        | (Proposed / Rejected / Accepted / Implemented)       |
:-------------- |:---------------------------------------------------- |
| **FLIP #**    | [NNN](https://github.com/onflow/flow/pull/NNN) (update when you have PR #)|
| **Author(s)** | Daniel Sainati (daniel.sainati@dapperlabs.com)       |
| **Sponsor**   | Daniel Sainati (daniel.sainati@dapperlabs.com)       |
| **Updated**   | 2022-09-13                                           |
| **Obsoletes** | https://github.com/onflow/flow/pull/945              |

## Objective

This adds two new functions that allow users to publish values for specific other
users to claim, while ensuring that other users cannot claim these values. In particular, 
this dramatically simplifies the use case for bootstraping capabilities. 

## Motivation

https://github.com/onflow/flow/pull/945 proposed to add an `identity` resource-typed field
on `AuthAccount` objects, to allow users to verify the identity of an account. In particular, 
this was intended to enable sharing values to specific users, and to simplify the capability bootstrapping
usecase. In this use case, the owner of a resource, which we can call the Provider,
wants to share a capability to that resource with another account, which we can call the Recipient.

Currently the best way to do this in Cadence is for the Provider and the Recipient to co-sign a transaction
in which the Provider creates the capability and then stores it in the Recipient's account. However, 
this is awkward because it requires the Provider and the Recipient to both sign the transaction within a specific
time window, which can be difficult in highly asynchronous environments, e.g. collaboration between distant time-zones. 

This FLIP is designed to enable an alternative solution, in which the Provider can create the capability and place it somewhere
where the Recipient can securely claim it at their leisure, without any pressure to do so within a specific time window and with 
no worry that someone else may come along and interfere. 

## User Benefit

This will dramatically simplify the capability bootstrapping use case, as well as generally making it easier for users
to share specific values directly with another account. 

## Design Proposal

This adds three new functions to `AuthAccount`s:

```cadence
fun publish(_ value: Any, name: String, recipient: Address)

fun unpublish<T : Any>(_ name: String): T?

fun claim<T: Any>(_ name: String, provider: Address): T?
```

The `publish` function takes a `value` argument, a `name` string that identifies it, 
and a `recipient` address that specifies which account should be allowed to `claim` the 
published `value` later. When `publish` is called, `value` and its intended `recipient` are stored
in a publishing dictionary on the calling account (not accessible to users), with the `name` as its key.
Note that this means any values that have been `publish`ed but have yet to be `claim`ed will count towards
the `publish`ing account's storage usage. 

The `claim` function takes the `name` of the value to be claimed and an `provider` address that
specifies which account is providing the value, as well as a type argument `T` that specifies
the type with which the value should be claimed. When called, `claim` will search the `provider`s 
publishing dictionary for the `name` key. If the key does not exist on the map, `claim` returns `nil`. 

If the key does exist, then `claim` compares the stored `recipient` (from the original call to `publish`) 
to see if it matches the address of the account calling `claim`. If it does not, then `claim` returns `nil`. 
If it does match, then the runtime type of the published `value` compared against the type argument `T`. If 
it does not match, then `claim` returns `nil`. If it does match, `value` is removed from the `provider`'s dictionary and 
returned to the `claim` calling account. In effect, this means that a `publish`ed value can only be `claim`ed once. 

An example of how this might look, when bootstrapping a capability to a resource owned by 0x1:

```cadence
// transaction 1 (from the original resource owner 0x1)
import MyIntf from 0x1

transaction() {
  prepare(acct: AuthAccount) {
    // create a capability to a resource stored at /storage/myResource.
    // With the changes proposed in https://github.com/onflow/flow/pull/798, this may
    // not involve linking to a concrete path, but at the moment the only way to create
    // a capability is via `link` 
    let cap = acct.link<&MyIntf>(/private/myCapability, target: /storage/myResource)
    acct.publish(cap, name: "yourCapability", recipient: 0x2)
  }
}
```

```cadence
// transaction 2 (from the reciever of the capability 0x2)
import MyIntf from 0x1

transaction() {
  prepare(acct: AuthAccount) {
    let cap = acct.claim<Capability<MyIntf>>("yourCapability", provider: 0x1)
    // if we successfully obtain the capability, store it on our account
    if cap != nil {
        acct.save(cap, to: /storage/myCapability)
    }
  }
}
```

The `unpublish` function exists so that a provider can remove a published value from their storage, so that it
stops taking up space if it goes un`claim`ed by its intended recipient. The calling account (the original provider
of the value) calls `unpublish` with the same `name` that the value was originally stored with. If a value with that 
`name` is present in the account's publishing dictionary, and the provided type argument to `unpublish` is a supertype
of that value's runtime type, then the function will return that value and remove it from the dictionary. Otherwise, 
the function returns `nil`. 

### Alternatives Considered

* The largest point of considering is whether or not `publish` and `claim` should be generalized
to work with all values (as in the current proposal), or whether they should be limited to only 
publishing/claiming capabilities. While the generalized versions are strictly more powerful, if we
want to encourage users to use capabilities to objects rather than directly sending them back and forth, 
we may not want to have such powerful alternatives available. 

### Best Practices

* This will change the best practices for bootstrapping capabilities, which was previously only
possible by cosigning a transaction. Instead, users should be encouraged to use the `publish`/`claim` pattern
in order to handle any cases where they would like to pass a value directly from their account to a specific
other. 

### Compatibility

This will be backwards-compatible from the Cadence perspective, but will add a new field to 
every account (the dictionary of published objects). To support this we would need a storage migration
to add empty dictionaries to all accounts during the spork that adds support for this feature. 

### User Impact

* This should have no direct impact on users; it will not break any existing contracts. 
## Questions and Discussion Topics

* The API currently provides a way for users to `claim` values that have been published for them, 
but once a value is `publish`ed, the only way to remove it from the account that published it is for
the intended recipient to `claim` it. Is it worth having an `unpublish` function that will remove the
entry for the value?