# Invalidate References to Transferred Resources

| Status        | Proposed                                     |
:-------------- |:---------------------------------------------|
| **FLIP #**    | N/A                                          |
| **Author(s)** | Supun Setunga (supun.setunga@dapperlabs.com) |
| **Sponsor**   | Supun Setunga (supun.setunga@dapperlabs.com) |
| **Updated**   | 2022-07-08                                   |

## Objective

This proposal is to introduce an invalidation for ephemeral reference values, if the referring resource is transferred
after the reference was created. The objective is to avoid a potential foot-gun of accidentally gaining/retaining
access to a resource that a user does not own.

## Motivation

When a reference is taken to a resource, that reference remains valid even if the resource was transferred.
In other words, references stay alive forever.

For example, consider the following resource.

```cadence
resource R {
    pub(set) var id: Int

    init() {
        self.id = 1
    }
}
```

Now, create an instance from the above resource, then take a reference to it, and finally transfer it to an account.
The transferred resource can still be accessed via the reference taken prior to the transfer.

```cadence
// Create a resource.
let r <-create R()

// And take a reference.
let ref = &r as &R

// Then transfer the resource into an account.
account.save(<-r, to: /storage/r)

// Update the reference.
// This will also update the referring resource in the account.
ref.id = 2
```

In the above example, resource `r` was initially created on the stack and was not owned by anyone.
But similarly, it is also possible for someone to take a reference to a resource in their account, and transfer the
resource to someone, and keep accessing the transferred resource through the reference.
```cadence
// Create a resource collection in 'foo' account
fooAccount.save(<-[<-create R()], to: /storage/a)

// Take a ephemeral reference to the resource at index '0' in the collection.
// Resource is in the 'foo' account at the time of taking the reference.
let collectionRef = fooAccount.borrow<&[R]>(from: /storage/a)!
let ref = &collectionRef[0] as &R

// Transfer the entire collection to the 'bar' account.
let collection <- fooAccount.load<@[R]>(from: /storage/a)!
barAccount.save(<- collection, to: /storage/b)

// Can still access the transferred resource through the reference.
ref.id = 2
```

## User Benefit
This proposal would avoid a potential foot-gun of gaining/giving/retaining unintended access to resources through
references.

## Design Proposal
The proposed solution in this FLIP is to invalidate a reference, if the underlying resource is transferred from its
original location where the reference was taken.
There can be different types of transfers, depending on the origin (where the reference was obtained), and the
destination.

| Origin  | Destination       | Reference validity |
|:--------|:------------------|:-------------------|   
| Stack   | Stack             | Valid              |
| Stack   | Account           | Invalid            |
| Account | Stack             | Invalid            |
| Account | Same Account      | Valid              |
| Account | Different Account | Invalid            |

With this change, trying to use variable `ref` in the above two examples will produce a run-time error,
causing the program to terminate.
```cadence
ref.id = 2    // Will produce a run-time error
```

### Drawbacks
- This is a breaking change, and developers will have to update their codes. Many existing contracts maybe affected.

### User Impact

Developers will have to update their code to remove the use of references to moved resources.
If they still want a reference to the resource after move, they will have to obtain a new reference.
