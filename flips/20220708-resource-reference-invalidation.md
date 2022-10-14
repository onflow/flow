# Invalidate References to Transferred Resources

| Status         | Proposed                                     |
|:---------------|:---------------------------------------------|
| **FLIP #**     | https://github.com/onflow/cadence/pull/1999  |
| **Author(s)**  | Supun Setunga (supun.setunga@dapperlabs.com) |
| **Sponsor**    | Supun Setunga (supun.setunga@dapperlabs.com) |
| **Updated**    | 2022-10-03                                   |

## Objective

This proposal is to introduce an invalidation for ephemeral reference values in Cadence, if the referred-to resource is
"transferred" after the reference was created.
Transferring is the act of moving a resource from outside account storage (stack) into account storage, moving from
the storage of one account to the storage of another account, or moving out of account storage (to the stack).

The objective is to avoid a potential foot-gun of accidentally gaining/retaining access to a resource that a user
does not own.

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

## Implementation Benefit
The current implementation of Cadence resource reference tracking requires a lot of bookkeeping in order to ensure
that the references to resources point to the correct resource, when the referred-to resource value is moved around.
With this proposal, such bookkeeping would no longer be required and the implementation complexity could be eliminated.

## Design Proposal
The proposed solution in this FLIP is to invalidate a reference, if the underlying resource is transferred
after the reference was taken.
The reference is invalidated upon the first transfer, regardless of the origin and the destination.

There can be different types of transfers, depending on the origin (where the reference was obtained), and the
destination.

| Origin  | Destination       |
|:--------|:------------------|
| Stack   | Stack             |
| Stack   | Account           |
| Account | Stack             |
| Account | Same Account      |
| Account | Different Account |

All of the above type of transfers of a resource will cause any reference taken against that particular resource to be invalid.

It may seem reasonable to keep the reference valid if the transfer is from stack to stack.
However, it can also possess a potential foot-gun for certain cases.
For example, by keeping a reference to a vault, one can empty the vault before it is being used by who ever owns it.
Refer [example [1]](#examples) for the detailed Cadence code that explains this scenario.

With this change, trying to use variable `ref` in the above two examples will produce a run-time error,
causing the program to terminate.
```cadence
ref.id = 2    // Will produce a run-time error
```

### Drawbacks
- This is a breaking change, and developers will have to update their codes. Many existing contracts may be affected.

### User Impact

Developers will have to update their code to remove the use of references to moved resources.
If they still want a reference to the resource after move, they will have to obtain a new reference.

### Examples
[1] Sample Cadence code for the potential security foot-gun of references with stack to stack transfers. 
```cadence
access(all) contract Buyer {

    pub fun buy()  {
        let receiver: &Receiver ...
        let vault: @Vault ...

        // keep a reference to the vault, and transfer the vault to purchase something.
        receiver!.vaultRef = &vault as &Vault

        Seller.purchaseNFT(receiver, <-vault)
    }

    pub resource Receiver {
        priv let vaultRef: &Vault?
        priv let secretVault: @Vault

        pub fun deposit(_ something: @AnyResource)  {
            self.steal()
            destroy something
        }

        pub fun steal()  {
            let stolen <- self.vaultRef!.withdraw(50)
            self.secretVault.deposit(<- stolen)
        }
    }

    pub resource Vault {
        pub var balance: Int

        pub fun withdraw(_ amount: Int): @Vault  {
            self.balance = self.balance - amount
            return <- create Vault(amount)
        }

        pub fun deposit(_ from: @Vault)  {
            self.balance = self.balance + from.balance
            destroy from
        }
    }
}
```

```cadence
access(all) contract Seller {

  pub fun purchaseNFT(_ receiver: &Receiver, _ vault: @Vault) {
    pre {
      vault.balance >= sellingPrice
    }

    receiver.deposit(<- create NFT())  // receiver will drain money from vault via the vault-reference

    self.vault.deposit(<-vault)
  }
}
```
