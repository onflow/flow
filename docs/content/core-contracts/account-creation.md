---
title: Account Creation
description: Techniques for creating accounts on Flow
---

This document covers the transaction logic required to create accounts 
on the Flow blockchain. 
Please read the [Accounts & Keys](/concepts/accounts-and-keys) 
documentation for an overview of the Flow account model.

## Batch Account Creation 

A single transaction can create multiple accounts by making 
multiple calls to the `AuthAccount` initializer.

### Batch Limits

Due to current transaction limits, 
accounts should be created in **batches no larger than 20 accounts**.

### Unique Key For Each Account

```cadence
transaction(publicKeys: [String]) {
  prepare(signer: AuthAccount) {
    for publicKey in publicKeys {
      let account = AuthAccount(payer: signer)
      account.addPublicKey(publicKey.decodeHex())
    }
  }
}
```

### Same Key For All Accounts

```cadence
transaction(publicKey: String, count: Int) {
  prepare(signer: AuthAccount) {
    var i = 0
    while i < count {
      let account = AuthAccount(payer: signer)
      account.addPublicKey(publicKey.decodeHex())

      i = i + 1
    }
  }
}
```
