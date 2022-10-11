# Replacement for paths

| Status        | (**Draft** / Proposed / Rejected / Accepted / Implemented)       |
:-------------- |:---------------------------------------------------- |
| **FLIP #**    | [#1130](https://github.com/onflow/flow/pull/1130)     |
| **Author(s)** | Janez Podhostnik (janez.podhostnik@dapperlabs.com)       |
| **Sponsor**   | Janez Podhostnik (janez.podhostnik@dapperlabs.com)       |
| **Updated**   | 2022-09-27                                           |

## Objective

This FLIP proposes an alternative to `Paths` in Cadence that use the type of the object stored as a way to address it in order to reduce the possibility of path collision and make the common scenario of storing one thing of one type simpler.

## Motivation

Note: This FLIP assumes that the private domain no longer exists due to it being removed as suggested in the [Capability Controllers FLIP](https://github.com/onflow/flow/pull/798). But it could also extend to the private domain if needed.

The current way of specifying paths is not the best fit for the current use cases:

1. By saving things by specifying storage paths collisions can happen if there is already something stored in that storage path. This will be increasingly more likely as more different dapps exist. This problem is also more prominent in the accounts public domain as each account is free to move things around in their storage without any/much impact to its interaction with the outside world. However in the public domain dapps expect certain capabilities to be at certain paths so that they can interact with them.

2. It is uncommon that the user has multiple things stored with the same type. The current path system does not have any shortcuts for this common case.


## Design Proposal

Replace the path addressing `(domain,path)` with `(domain,type,name)` addressing, where the domain is always implicitly know from the method you are using (i.e.: `save` always interacts with storage, `link` always links storage with the public domain). The name is a limited size free text `String` that can be empty and must be unique per type. The Functions getting things from storage would also be split into a **Default** and normal variety (e.i.: `load` -> `loadDefault` and `load`). The empty string name would be a special name, which signifies that if there are multiple objects of the same type take that one when addressing without a name.

```cadence
// current save function on AuthAccount
fun save<T>(_ value: T, to: StoragePath)

// current load function on AuthAccount
fun load<T>(from: StoragePath): T?
```

```cadence
// proposed save function on AuthAccount
fun save<T>(_ value: T, name: String)
// current load function on AuthAccount
fun load<T>(name: String): T? {
    // ... some pseudo-code how loadNamed would work ...
    // if there are no things of type T stored
    //     return null
    // if there is one or multiple things of type T stored
    //     and if one of them matches name
    //         return it
    // otherwise
    //     return null
}
fun loadDefault<T>(): T? {
    // ... some pseudo-code how load would work ...
    // if there are no things of type T stored
    //     return null
    // if there is only one thing of type T stored
    //     return it
    // if there are multiple things of type T stored
    //     and one of them matches an empty string (the default)
    //         return it
    // otherwise
    //     return null
}
```

With this change there is less fear of collision between different daaps (because the types would be different) and the case of having only one thing of a certain type stored is the primary supported case. 

!!TODO!! describe all API changes


## User Benefit

Default case (of one type of object per account) is simpler.

Dapp developers do not need to worry about name collision with other dapps when addressing objects with types they defined.

### Best Practices

This will simplify the best practices on storing things to storage and public domain.

### Compatibility

Current storage would be migrated so that all objects would just have the path (without the domain) as their name, With the possible exception of the default flow vault which would be migrated to an empty name.

Any non-duplicate object would be addressable by simply using `load<T>()` (or similar).

### User Impact

The example code for storing things on the users account would become much simpler by default, without any paths needed, but there would have to be examples of how to store/address multiple things of the same type if needed.

