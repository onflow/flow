# Storage Fees

| Status        | Proposed                                             |
:-------------- |:---------------------------------------------------- |
| **Author(s)** | Janez Podhostnik (janez.podhostnik@dapperlabs.com)   |
| **Sponsor**   | Janez Podhostnik (janez.podhostnik@dapperlabs.com)   |
| **Updated**   | 2020-10-13                                           |

## Objective

Limit the maximum amount of storage each account has to prevent storing huge amount of data on chain.

A minimum amount of storage will be provided to each account when it is created. More storage can then be purchased by using the **StorageFeesContract**. Storage can also be refunded using the same contract.

## Motivation

If execution state grows to large execution node will no longer be able to hold it in memory to calculate the next state. When this will happen the execution node requirements (and the nodes them selves) will need to be updated (and will cost more to run).

Limiting the amount of storage an account can have will prevent the execution state growing because of two reasons:

- attacks storing large amounts of data to the blockchain with the explicit intent to slow it down or crash it
- developers not considering storage costs in their smart contracts (because they don't need to)

## User Benefit

This will have the long term benefit of reducing growth of the execution state size, and thus reducing growth of the execution node requirements. 

Prescribing a reasonable minimum amount of storage will still allow almost everyone to deploy and use smart contracts normally. 

## Design Proposal

### Overview

#### Account Storage Tracking (Execution Environment)

- Every account should have a `storage_capacity` and `storage_used` 
- Minimum amount of `storage_capacity` for each account is 100KB (as defined by the **StorageFeesContract**)
- `storage_used` is the sum of data stored on ledger (sum of register value byte size owned by this account) (register keys are not part of storage used)
- on every transaction `storage_used` should be updated
- both storage_capacity and storage_used is only controlled by the **StorageFeesContract** smart contracts and no user has access to it.
- If a transaction tries to store more data than the limit, the tx should fail.

#### StorageFeesContract (part of service account)

- is a smart contract that holds the deposits and provides functionality for accounts to acquire or release `storage_capacity`.
- the smallest unit of storage purchase is initially set to 10KB but can change as a parameter inside the smart contract.
- price of storage is 1KB for 1mF.
- accounts can purchase more storage by calling a method on the StorageFeesContract.
- one account can purchase storage for another account.
- accounts can release storage (note that each account can't have less than 100KB, at a cost of 0.1F) and get back the money. This feature should be disabled using a boolean initially to prevent attacks and spam transactions to make money by storage deposits.
- `FlowServiceAccount.deductAccountCreationFee(account)` (fees contract) calls **StorageFeesContract** and purchases 100KB storage capacity for the account.

### Execution environment changes

The execution environment has three responsibilities:

- keeping the storage used up to date (after every transaction)
- preventing accounts of going over storage capacity

- giving fvm access to `storage_capacity` and `storage_used`
    - read access for all accounts to both values
    - `storage_used` set access to no one (only the execution env changes this)
    - `storage_capacity` set access only to **StorageFeesContract**

#### Get storage used

`storage_capacity` and `storage_used` Will be stored in the registers:

```json
[
    {
        "owner": "$address",
        "controller": "",
        "key": "storage_capacity"
    },{
        "owner": "$address",
        "controller": "",
        "key": "storage_used"
    }
]
```

Only register values are considered when size is being calculated. Register keys are not part of storage used.

To prevent changing size of the `storage_used` register after `storage_used` is calculated and updated, both `storage_capacity` and `storage_used` registers will be of type uint64. This way both their sizes will be a constant value of 8.

Two possible approaches of calculating the storage used by an address were considered:

- absolute: get all registers from one account an sum their size to get `storage_capacity`
- differential: on the current delta, sum the size of all the changes in size for each register changed and add it to the previous `storage_capacity`

The decision was made to go with the differential approach, because iterating through all key value pairs in storage for each account touched would be to expensive and would not scale well.

##### Approach 1 - differential

- Add a dictionary field to `Delta`: `StorageUsedDeltas map[string]int64`. The map key is the `owner`.
- During `Delta.Set` and `Delta.Delete` keep track on the byte size change of the registers changed and write them to `StorageUsedDeltas`.    
- Add receiver `CommitStorageUsed()` to `Delta` which does the following:  TODO: consider better function name

    ```py
        for owner in StorageUsedDeltas.keys:
            old_used = delta.Get(owner, "", "storage_used")
            delta.Set(owner, "", "storage_used", old_used + StorageUsedDeltas[owner])
            delete StorageUsedDeltas[owner]
    ```
- Before Delta is merged back into the ledger `StorageUsedDeltas` must be empty
- `MergeWith` Receiver needs to change to also merge `StorageUsedDeltas` which can be done by summing the values under the same keys

Using `RegisterUpdates` method on the `Delta` after the transaction, we can calculate the `storage_used` change per addresses touched in this `Delta`. Then we update `storage_used` for each account by adding the change.

- cons:
    1. any error (due to code bugs) done in this calculation will be permanent. (e.g. If storage used change is of by 10kB because of a bug in calculation fixing the bug wont correct the storage used)
        - Mitigate by adding a lot of test coverage for this functionality
        - In the event a bad calculation is found it can be fixed during a spork (while we are still doing sporks)
    2. migration required for existing accounts 
    3. If we decide to change what factors into `storage_used` there will need to be a migration to fix current `storage_used` on all addresses
        - Fixable with a spork

##### Approach 2 - absolute

Add new method to ledger interface that gets all `RegisterEntry`s for an address

```go
// GetByOwner returns all register entries for this owner
GetByOwner(owner string) ([]flow.RegisterEntry, error)
```

with this storage can be calculated as:

```py
register_entries, _ =  ledger.GetByOwner(owner)
storage_used = 0
for r in register_entries:
    storage_used+= len(r.Value)
```

- cons:
    - this change to the ledger would require a lot of changes all the way down to `LedgerGetRegister` function (which already supports queries by key parts)
    - slower as all the registers need to be read


#### Update storage used on transaction

`StorageLimiter` transaction processor will be used to handle updating `storage_used` and preventing storage used going over `storage_capacity`. This is how the `StorageLimiter` will fit into the transaction execution proccess:

1. create new view
2. run transaction
    1. run transaction processors
        1. NewTransactionSignatureVerifier
        2. NewTransactionSequenceNumberChecker
        3. NewTransactionFeeDeductor
        4. NewTransactionInvocator <- actual transaction
        5. *There are no further register (view) writes (or deletes) after this point. All fungible token  moves already happened. All storage size changes already happened*
        6. **NewStorageLimiter** <- for all participating account that have touched registers, compute account size (if over limit raise error)
3. error handling <- catch the storage over limit and revert transaction
4. "merge" view

`StorageLimiter` behaviour 

```py
accounts_changed = get_accounts_with_writes_or_deletes(in_current_view)
for account in accounts_changed:
    new_size = get_storage_used(account, in_current_view)
    if new_size > get_account_storage_capacity(account)
        raise Exception()  # make sure its correctly caught and descriptive
    update_storage_used(account, new_size)
```

#### Cadence interface changes

To expose `storage_capacity` and `storage_used` to cadence runtime, the following methods need to be added to the interface:

```go
// GetStorageUsed gets storage used in bytes by the address at the moment of the function call.
GetStorageUsed(address Address) (value uint64, err error)
// GetStorageCapacity gets storage capacity in bytes on the address.
GetStorageCapacity(address Address) (value uint64, err error)
// SetStorageCapacity sets storage capacity to value bytes on the address.
SetStorageCapacity(address Address, value uint64) err error
```

In cadence runtime we need to add `storage_capacity` and `storage_used` read only fields to auth account. **CAUTION** what does `storage_used` return? `storage_used` before the transaction or at this moment during the transaction.

`SetStorageCapacity(address, value)` Will be exposed to cadence runtime only to the **StorageFeesContract**. TODO: details on how!

### StorageFeesContract

TODO: StorageFeesContract details


### Performance Implications

This affects all transactions by adding a small overhead (calculation of `storage_used`). This can be measured by comparing the execution time of integration tests (that already exist).

TODO: which tests?

Create account transactions should be affected more, because of the extra call to **StorageFeesContract**.

There shouldn't be any major memory usage change, since only two fields (16 bytes + 2 key sizes) are being added to each account.

TODO: whats the current size of an empty account? It is possible that current execution state size might grow a lot

### Dependencies

* Dependent projects: 
    * flow-core-contracts (adding **StorageFeesContract**, changing **FeesContract**)
    * cadence (access to new fields)
    * flow-go (execution change)
    * emulator (emulate storage size limiting)
    * sdks (example transactions to check/increase storage) 

### Engineering Impact

* binary size / build time / test times should not noticeably increase 
* Most of the changes are spread out over cadence, flow-core-contracts and flow-go they can be covered by unit test separately

### Tutorials and Examples

There are no protobuf API changes.

There are Cadence api changes that can be covered with the following transactions examples (TODO: make the examples):

1. tx: get storage used and capacity of an account
2. tx: purchase more storage for an account
3. tx: transaction failing because it is storing to much


### Documentation changes

The documentation should cover the following topics:

- why storage fees?
- how much are storage fees and where is this written?
- minimum storage on address?
- smallest purchasable storage chunk?
- how to check storage used and capacity?
- how to purchase more storage?
- how to refund storage?
- what error will I get if im out of storage?

### Compatibility

Since the execution state needs to be updated to include storage used/capacity fields on all accounts, execution nodes are not backwards compatible.

### User Impact

Current accounts need to be updated to include storage used/capacity fields, with the capacity being set to the minimum capacity. For the accounts that are over the limit we need to buy sufficient storage for them.

TODO: what is sufficient?

## Questions and Discussion Topics

- cadence:
    - how to prevent changing the `storage_capacity` and `storage_used` fields using `SetValue` method?
    - how to allow changing these values using the **StorageFeesContract**
- execution:
    - which approach to take to get all the registers from one account

