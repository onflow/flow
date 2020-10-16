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

`storage_capacity` and `storage_used` will be stored in the following registers:

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

#### Get storage used

related PR: https://github.com/onflow/flow-go/pull/76

Only register values are considered when size is being calculated. Register keys are not part of storage used.

To prevent changing size of the `storage_used` register after `storage_used` is calculated and updated, both `storage_capacity` and `storage_used` registers will be of type uint64. This way both their sizes will be a constant value of 8.

Two possible approaches of calculating the storage used by an address were considered:

- absolute: get all registers for each address (touched in the current `View`) and sum their size to get `storage_used`
- differential: on the current `View`, keep track of register size changes per address and sum them with the previous `storage_used`.

The decision was made to go with the differential approach, because iterating through all key value pairs in storage for each account touched would be to expensive and would not scale well.

##### Approach 1 - differential

The basic principle of this approach is to update accounts `storage_used` every time a register size changes, by adding the size change to current `storage_used`.

- During `View.Set` and `View.Delete` if storage size changes update `storage_used`.
- If `storage_used` does not exist on the account add it.

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

### Register migration

First we need to consider that some accounts will be over the 100kB minimum limit. We need to give more storage capacity to these accounts, but the question is how much more.

1. 100kB more than their current storage: if they are using a lot, they might burn through the 100kB faster then they can reasonably react to this change
2. a relative amount. for example:
    - 2 times their current amount. Assuming a linear growth and that they started growing a month ago this will give them another month to react to the change. This will mean wi have a wide range of different storage_capacity values.
    - find the smallest k for which the account storage is less then 10kB ^ k give them 10kB ^ (k + 1) storage capacity. Assuming an exponential growth and that they started growing a month ago this will give them another month to react to the change. This will produce only a few different storage_capacity values.

Because the process of creating a register migration is not documented yet a few assumptions need to be made:
- migration will be a function with the signature of:  (key, value) -> [(key, value)] 
- the function must be stateless
- it has access to other registers

with this the migration pseudo-code can be written as:

```py
def migrate(key, value) -> (keyType, valueType)[]:
    owner = get_owner_from_key(key)
    if register_exists(owner=owner, controller="", key="storage_capacity"):
        # we already migrated this account
        return [(key, value)]
    storage_used = 0
    # get all register entries for this owner and iterate over them
    for register in registers_for_owner(owner)
        storage_used += register_size(register)

    storage_used += 16 # because we are adding two more uint64 registers

    storage_capacity = calculate_capacity_needed(storage_used)

    return [
        (key, value),
        ((owner, "", "storage_capacity"), storage_capacity),
        ((owner, "", "storage_used"), storage_used)
    ]
```

### Performance Implications

This affects all transactions by adding a small overhead (calculation of `storage_used`). This can be measured by comparing the execution time of integration tests (that already exist).

TODO: which tests?

Create account transactions should be affected more, because of the extra call to **StorageFeesContract**.

There shouldn't be any major memory usage change, since only two fields (16 bytes + 2 key sizes) are being added to each account. The current minimum size two orders of magnitudes larger (flow token receiver, flow token vault, private keys)


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

## Questions and Discussion Topics

- cadence:
    - how to prevent changing the `storage_capacity` and `storage_used` fields using `SetValue` method?
    - how to allow changing these values using the **StorageFeesContract**
- execution:
    - which approach to take to get all the registers from one account

