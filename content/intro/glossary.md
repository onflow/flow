---
title: Glossary
---

# Vocabulary

## Account

An account is a user's identity on the blockchain. A user can use one or more private keys to control access to their account. Flow accounts can hold deployed code and resources.

An account is divided into two areas:

1. **Contract Area:** When you deploy Cadence code to your account, it is stored in this area.
2. **Storage** This is where you store your assets and the links to them. This area is indexed by paths, which consist of a domain and identifier. `/domain/identifier`. Only three domains are allowed:
   - `/storage/`: This is where assets and objects are stored. It is only accessible with functions defined on an `AuthAccount` object.
   - `/private/`: This is where you store private links to objects in your storage or in the storage of other accounts. It is only accessible with functions defined on an `AuthAccount` object.
   - `/public/`: This where you store public links to objects in your storage. It is writable and readable with an `AuthAccount` object, but only readable with functions defined in the `PublicAccount` object, which anyone in the network is able to access.

See the Account Storage section of the language specification for an in-depth breakdown of how storage works how to interact with it.

## Capability

A capability is a link to an object in storage. Capabilities are identified by a path and link to a target path, not directly to an object. Capabilities are either public (any user can get access), or private (access to/from the authorized user is necessary). Capabilities can be stored in structs or resources.
Once a capability is created and obtained, it can be borrowed to get a reference to the stored object. When a capability is created, a type is specified that determines what type of capability can be borrowed. This allows exposing and hiding certain functionality of a stored object.

## Collection

A construct that is often used in Cadence to store and manage groups of various objects. A collection usually provides methods to withdraw, deposit, or modify the objects stored inside.

## Emulator

The Flow Emulator is a lightweight development server that simulates the behavior of the Flow Blockchain.

## Interface

An interface defines how a type that implements it should behave. Interfaces enforce function requirement in terms of parameter and return value names, and can also include optional pre and post-conditions to ensure that code that implements the interface behaves correctly. In Cadence, interfaces are also used to restrict access to stored objects. When creating a reference or capability to an object, it can be cast as an interface of that object to expose a subset of the functionality that is defined by the interface.

## Resource

A resource is a special type within Cadence that is governed by strict move semantics. Resources can only exist in one location at a time, cannot be copied, and cannot be accidentally lost or deleted.

## Script

A script is a read-only Cadence snippet that is used to query the computational state of the blockchain. Unlike transactions, scripts do not run with special permissions from an account and can only read from the public account storage of any account.

## Signing Account

A signing account is an account that has authorized a transaction to write to its storage. It has access to the `AuthAccount` object, which has full access to the `/storage/` domain of an account.

## Storage Reference

A storage reference is a Cadence type that points to an object in an account's storage. Storage references can be used to read fields or call functions on the object, but cannot be used to modify or move the object directly.

## Transaction

A transaction is a Cadence snippet that is executed to update the computational state of the blockchain. A transaction can update the storage of one or more **signing accounts**.

Transactions are divided into several blocks:

- The **prepare** block has full access to each of the **signing accounts** and can be used to fetch the storage values needed by the **execute** phase.
- The **execute** block contains the main logic of a transaction and operates on the values initialized in the **prepare** phase.
- A transaction can also contain **post-conditions** that are evaluated after the **execute** phase completes. These conditions allow a user to make assertions about the state of their account at the end of a transaction.

## Access Control

Access control is the way Cadence code restricts access within code.

All contract and resource types and fields in Cadence need to have an access control modifier specified for them. Access control is specified with `access({level})`.

First is `access(self)`. This is like private. It means that this field can only be accessed within the same scope that it was defined in.

Next is `access(contract)`. Fields with this modifier are only able to be accessed by code that was defined in the same contract it was defined in.

Third is `access(account)`. This means that only code in the same account or code signed by the account owner can access this field, including other contracts in the account.

The last is `access(all)`, or `pub`. If a field or function is `access(all)` or `pub`, anyone in the network can access it as long as they have a valid reference.

```cadence:title=NFT.cdc
pub contract NFT {
      // completely public, anyone can access this
      access(all) var id: Int

      // everything is private by default, only methods within the NFT contract
      // can access this field
      access(contract) var price: Int

      // only other contracts in the same account can access this field
      access(account) changePrice(amount: Int) {
    self.price = amount
      }

        // only other methods in this resource can access this function
      access(self) changeID(newID: Int) {
    self.id = newID
      }
    }
  }
```

See the [Access Control Section of the Language Reference](https://docs.onflow.org/docs/cadence#access-control) for more information and examples of access control.

## Optionals in Cadence

One of the hardest concepts for a programming language to handle is that of the non-existence of an object. Cadence uses the term `nil` to denote the absence of an object. It seems simple at first, but there are potential pitfalls when dealing with `nil`. What happens if you attempt to access that object in a dangerous way? How do you know an object could be nil? How do you ensure it’s not nil when working with it?

In Cadence, optionals are the solution. You can denote an object as an optional by adding a `?` to the type when you define it.

```cadence
// token could have a value of type `Vault` or it could be `nil`
let token: Vault?
```

An optional is simply an enum with two cases: the presence of a value, or the absence of a value, as denoted by `nil`.

Optionals protect the programmer from potentially incorrect assumptions about whether a value exists or not. If code wants to do something with an object that is an optional, the language requires that the programmer must first handle the possibility that the optional is `nil`.

One of the main ways to do this is with optional binding:

Optional binding allows getting the value inside an optional. It is a variant of the if-statement.

If the optional contains a value, the first branch is executed and a temporary constant or variable is declared and set to the value contained in the optional; otherwise, the else branch (if any) is executed.

Optional bindings are declared using the `if` keyword like an if-statement, but instead of the boolean test value, it is followed by the `let` or `var` keywords, to either introduce a constant or variable, followed by a name, the equal sign (`=`), and the optional value.

```cadence
let maybeNumber: Int? = 1

if let number = maybeNumber {
    // This branch is executed as `maybeNumber` is not `nil`.
    // The constant `number` is `1` and has type `Int`.
} else {
    // This branch is *not* executed as `maybeNumber` is not `nil`
}
```

Another way of doing this is with the nil-coalescing operator (`??`). It returns the value within the optional if it contains the value, or another value if the optional is `nil`.

```cadence
// Declare a constant which has an optional integer type
//
let a: Int? = nil

// Invalid: Cannot assign an optional type to a non-optional type
// The nil case must be accounted for
let b: Int = a    // INVALID

// Declare a constant with a non-optional integer type,
// which is initialized to `a` if it is non-nil, or 42 otherwise.
//
let b: Int = a ?? 42
// `b` is 42, as `a` is nil

A third way to do this is by using the force-unwrap operator (`!`). This operator allows you to get the value of the optional immediately, but if the value is `nil` it aborts. This is only recommended if you definitely want to abort the transaction if a value is `nil`
let x: Int? = 1
let x2 = x! // `x2` has type `Int` and non-optional value `1`

      let x2: Int? = nil
      x2!  // Aborts the program, because `y` is nil
```

### Dictionaries use Optionals

Dictionaries are mutable, unordered collections of key-value associations. Because a value might not exist for a given key, accessing dictionary keys must always return an optional. If the key is found in the dictionary, the value for the given key is returned, and if the key is not found, `nil` is returned. Code that accesses these must always account for the `nil` case.

See the [Optionals Section](https://docs.onflow.org/docs/cadence#optionals) in the Cadence Language Reference for more in-depth explanations and examples.

Check out the [FAQ](doc:faq) next.
