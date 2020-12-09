# Storage Fees

| Status        | Proposed                                             |
:-------------- |:---------------------------------------------------- |
| **Author(s)** | Janez Podhostnik (janez.podhostnik@dapperlabs.com)   |
| **Sponsor**   | Janez Podhostnik (janez.podhostnik@dapperlabs.com)   |
| **Updated**   | 2020-10-13                                           |

## Objective

Limit the maximum amount of storage each account can use to prevent storing huge amount of data on chain.

A minimum amount of storage capacity will be provided to each account when it is created. Additional storage can be purchased by using the **StorageFees** smart contract. Storage can also be refunded using the same contract.

## Motivation

If the execution state grows too large, execution nodes will no longer be able to hold the execution state in memory, which is necessary to calculate the next execution state. When this happens, the execution node requirements (and the nodes themselves) will need to be updated (and it will cost more to operate them).

Limiting the amount of storage that an account can have will prevent the execution state from growing due to cases such as:

- Attacks to the system that attempt to store large amounts of data on chain with the explicit intent to slow it down or crash the network.
- Developers not considering storage costs in their smart contracts (because they don't need to).

## User Benefit

Limiting the maximum amount of storage each account has will have the long term benefit of reducing the growth of the execution state size, and thus reducing the growth of the execution node requirements. 

Prescribing a reasonable minimum amount of storage will allow almost everyone to deploy and use smart contracts normally. The minimum amount of storage must be at least large enough to allow the account to be usable, i.e. it must be large enough to store keys to allow a transaction signed with the key to be successfully executed, and it must be large enough to store the FLOW smart contract objects (vault, receiver capability, etc.) to allow the holding of FLOW tokens.

In case additional storage will be required on an account it can be purchased by depositing FLOW tokens to the storage fees smart contract.

## Design Proposal

### Overview

Each account will have a `storage_used` and a `storage_capacity` (uint64) values with the unit of bytes. Any account will be able to see an accounts `storage_used` and `storage_capacity` values, by accessing `storageUsed` and `storageCapacity` fields on both `PublicAccount` and `AuthAccount` cadence types.

The value of `storage_used` will be an explicitly stored register on each account. `storage_used` is the amount of storage the account is currently using (in bytes); The sum of data stored in the execution state for the account, i.e the sum of the sizes of all register keys and values for the account. `storage_used` for an account will be updated during a transaction each time that account register changes. At the end of each transaction, every account with changed registers will have its `storage_used` compared to its `storage_capacity`, if the account is using more storage then its capacity the transaction will fail with a clear error. The `storage_used` register will be added to each account upon account creation. If the account existed before this change a migration will created that adds `storage_used`.


The value of `storage_capacity` is computed from the accounts `StorageReservation` resource. Each account has a `StorageReservation` resource that holds the accounts reserved (for storage capacity) Flow tokens. The value of `storage_capacity` equals the amount of reserved Flow tokens multiplied by `StorageReservation.storageBytesPerReservedFlow`. To add more storage to an account more Flow tokens need to be deposited to the accounts `StorageReservation` resource by using the `StorageReservationReceiver` public capability. Flow tokens can be withdrawn from the `StorageReservation` resource by the owner of the resource, but this has some limitations: 
- There must be at least the minimum storage reservation left on the account.
- Withdrawing so much that the value of `storage_capacity` at the end of the transaction is lower then the accounts `storage_used` will result in a failed transaction.
- When this is first released withdrawing will be disabled globally so no new liquid flow is introduced.

The `StorageReservation` resource and the the `StorageReservationReceiver` public capability are added to each account during account creation, and the initial (minimum) storage reservation is deposited by the account creator. If the account existed before this change a migration will created that adds `StorageReservation` and `StorageReservationReceiver` with enough reserved flow so the accounts will have enough time to adapt to this new limitation. The `StorageReservation` resource and the the `StorageReservationReceiver` resource interface will both be defined on the `StorageFees` contract, which will be deployed on the service account.

Initially, the price of storage will be set to 1kB for 1mF. This value will be assessed and updated as the chain evolves. The minimum reservation will be set to 0.1F, which will be equal to 100kB of `storage_capacity`.

### Execution Environment Changes

The execution environment has four responsibilities:

1. Keeping the `storage_used` value up to date at the end of every transaction.
1. Reading the amount of reserved Flow tokens from the accounts `StorageReservation` resource.
    1. checking that they are not below the minimum storage reservation
    1. converting that into `storage_capacity`.
1. Preventing accounts going over `storage_capacity`.
1. Enabling the Flow Virtual Machine (`fvm`) package read access to the `storage_capacity` and `storage_used` values:

#### Get and Update Storage Used

The amount of storage used by a single register on an address is the byte size of the register value plus the byte size of the register key. The value of `storage_used` by an address is also stored in the address' register:

```json
[
    {
        "owner": "$address",
        "controller": "",
        "key": "storage_used"
    }
]
```

To prevent a recursive problem of needing to update `storage_used` when `storage_used` is updated we always assume that the `storage_used` register will be of type uint64, an thus a constant size of 8 (+ constant key size).

Two possible approaches of calculating the `storage_used` by an address were considered:

- Differential: on the current `Accounts` object, keep track of register size changes per address and sum them with the previous `storage_used`.
- Absolute: get all registers for each address (touched in the current `Accounts` object) and sum their size to get `storage_used`.

The decision was made to go with the differential approach, because iterating through all key value pairs in storage for each account touched would be too expensive and would not scale well.

##### Approach 1 - Differential

The basic principle of this approach is to update an address `storage_used` register every time a register size changes, by adding the size change to current `storage_used`:

- During `Accounts.Set` if storage size changes, update `storage_used`.
- To increment the `storage_used` value, `GET` must be called to get the current value of `storage_used`. The value of `storage_used` will be cached in the delta after getting it for the first time.

- Cons:
    1. Any error (due to code bugs) done in this calculation will be permanent. (e.g. If  `storage_used` change is off by 10kB because of a bug in calculation, fixing the bug will not correct the storage used)
        - This can be mitigated by adding a lot of test coverage for this functionality.
        - In the event a bad calculation is made and discovered, it can be corrected during a spork
    2. Migration is required for existing addresses to set current `storage_used`.
    3. If we decide to change what factors into `storage_used` there will need to be a migration (spork) to fix `storage_used` on all addresses.

##### Approach 2 - Absolute (Rejected)

A new method will be added to the `View`'s interface that gets all `RegisterEntry`-s for an address

```go
// GetByOwner returns all register entries for this owner
GetByOwner(owner string) ([]flow.RegisterEntry, error)
```

With this method storage can be calculated as follows:

```py
register_entries, _ =  ledger.GetByOwner(owner)
storage_used = 0
for r in register_entries:
    storage_used+= len(r.Value)
```

- Cons:
    - The change to the `View` would require a lot of changes all the way down to `LedgerGetRegister` function (which already supports queries by key parts)
    - This approach is slower as all the registers need to be read

#### Create Account Changes

Account creation process currently goes through the following steps:

1. Deduct account creation fee by calling the `FlowServiceAccount` smart contract.
1. Set `exists` register which marks that the account exists.
1. Set key related registers.
1. Call `FlowServiceAccount` smart contract to initialize the FLOW token vault and receiver.

This process will be changed to account for setting `StorageReservation` resource and `storage_used` field:

1. Set `storage_used` register to the size of itself
1. Set `exists` register which marks that the account exists.
1. Set key related registers.
1. Calling the `FlowServiceAccount` smart contract to:
    - Deduct account creation fees (including storage fees)
    - Create a `StorageReservation` resource with the minimum storage reservation (a part of the fees) and put it in accounts' private storage.
    - Add a public capability `StorageReservationReceiver` resource to the account.
    - Initialize the FLOW token vault and receiver.

Joining the calls to `FlowServiceAccount` into one transaction will also improve the performance of account creation.


### Get Storage Capacity

The amount of `storage_capacity` is calculated from the amount of reserved Flow tokens. To get the amount of reserved flow tokens for an account the following procedure will be used:

- Retrieve the accounts' `StorageReservation` resource bytes from a predetermined path.
- Decode the `StorageReservation` resource into a cadence value.
- Verify that `StorageReservation` resource typeId (this confirms that this is the expected `StorageReservation` type defined on the service account).
- Verify that `StorageReservation.ownerAddress` is the expected address.
- Get the value of `StorageReservation.minimumStorageReservation` from a service account register.
- Verify that `StorageReservation.reservedTokens.balance` is at least `StorageReservation.minimumStorageReservation`.
- Get the value of `StorageReservation.storageBytesPerReservedFlow` from a service account register.
- accounts' `storage_capacity` is `StorageReservation.storageBytesPerReservedFlow` times `StorageReservation.reservedTokens.balance`

If any of the steps fail accounts' `storage_capacity` is considered to be zero.


#### Limit Storage Used

The amount of `storage_used` should be less then or equal to `storage_capacity`. There are two options on when to check that this constraint is not violated:

1. Deferred: Check after all register changes (and `storage_used` updates) from a transaction were made.
1. Immediate: Check on every `storage_used` update during the transaction.

The "immediate" approach has a slight added overhead as ech register set needs to also do a comparison. The "deferred" approach has the added benefit of allowing accounts to temporarily go over their storage capacity during the transaction then cleaning up before the end of the transaction. (e.g. assuming 100kB is the storage capacity an account could go to 120kB while doing a computation, as long as the account reduces its size to under 100kB before the transaction ends).

The "deferred" approach was chosen, due to it more accurately representing the amount of data that will actually get stored to the execution state.

The `StorageLimiter` transaction processor implementation will be used to prevent `storage_used` going over the `storage_capacity`. The `StorageLimiter` will use the transaction pipeline as follows:

1. Create new view.
2. Run transaction.
    1. Run transaction processors (a.k.a.: transaction pipeline):
        1. TransactionSignatureVerifier,
        2. TransactionSequenceNumberChecker,
        3. TransactionFeeDeductor,
        4. TransactionInvocator, <- actual transaction execution
        5. *There are no further register (view) writes (or deletes) in the transaction pipeline after this point. All storage size changes already happened.*
        6. **StorageLimiter** <- for all participating addresses that have touched registers, check if address' `storage_used` is over the address' `storage_capacity`. If it is, raise an error.
3. Error handling <- catch the storage over limit and revert transaction/
4. "Merge" view.

The internal behaviour of the `StorageLimiter` can be expressed with the following pseudo-code:

```py
accounts_changed = get_accounts_with_writes_or_deletes(in_current_view)
for account in accounts_changed:
    new_size = get_storage_used(account, in_current_view)
    if new_size > get_account_storage_capacity(account)
        raise Exception()  # descriptive error
```

#### Cadence Interface Changes

To expose the `storage_capacity` and `storage_used` values to Cadence programs, the following methods need to be added to Cadence's runtime interface:

```go
// GetStorageUsed gets storage used in bytes by the account at the moment of the function call.
GetStorageUsed(address Address) (value uint64, err error)
// GetStorageCapacity gets storage capacity in bytes on the account.
GetStorageCapacity(address Address) (value uint64, err error)
```

In the Cadence semantic analysis pass and in the interpreter, two new read-only fields are added to accounts (the types `AuthAccount` and `PublicAccount`):
  - `let storageCapacity: UInt64`: the maximum amount of storage that the account may store.
  - `let storageUsed: UInt64`: the currently used amount of storage. In this context "currently" refers to the state of the account as it is at that line of the programs execution.


### Storage Fees Smart Contract


The smart contract can be seen [here](https://github.com/onflow/flow-core-contracts/pull/76).

Each account will have a public `StorageReservationReceiver` capability and a private `StorageReservation` resource on predetermined paths.

The `StorageReservationReceiver` resource interface will be defined on the `StorageFees` smart contract and has the following parts:
- Has a `deposit` method which anyone can use to increase the accounts' reserved tokens.

The `StorageReservation` resource will be defined on the `StorageFees` smart contract and has the following parts:
- Has a `FlowVault` that holds the reserved Flow tokens. This vault cannot be accessed directly.
- Has a `deposit` method which anyone can use to increase the accounts' reserved tokens, by calling it through the `StorageReservationReceiver`.
- Has a `withdraw` method which the holder of the account can use to withdraw reserved tokens (but not below `minimumStorageReservation`). 

All functions of the `StorageReservation` resource should check that this `StorageReservation` is on the correct account on the correct path.

The `StorageFees` smart contract will also have the following responsibilities:

- Definitions:
    - `minimumStorageReservation`: defines the minimum amount of reserved flow tokens an account can have and also the amount every new account has. If an account has less than this many tokens reserved (this can only happen if `minimumStorageReservation` changes in the future) the account effectively has zero `storage_capacity` and any future transaction that touches that account will fail (if it doesn't also reserve more storage for the account).
    - `storageBytesPerReservedFlow`: defines the amount of bytes of storage capacity one reserved Flow token represents.
    - `refundingEnabled`: defines if accounts can refund storage.
- `minimumStorageReservation`, `storageBytesPerReservedFlow` and `refundingEnabled` should be able to change in the future.
- Functions:
    - `setupAccountStorage(account, storageReservation)`:
        - The `storageReservation` `FlowVault` should have the balance of at least `minimumStorageReservation`.
        - Check if `StorageReservation` is already present on the account (if so panic; account already has some storage).
        - Create the `StorageReservation` resource with `storageReservation` on it.
        - Put this `StorageReservation` resource onto the account with a corresponding `StorageReservationReceiver`.


The `StorageFees` smart contract needs to cover three cases:

1. When creating a new account, `StorageFees.setupAccountStorage` will be called with the `AuthAccount` of the account to setup:
    - A `StorageReservation` resource needs to be added into the accounts' storage.
    - A `StorageReservationReceiver` needs to be added to accounts public storage
2. When purchasing more storage for an account (by using its `StorageReservationReceiver.deposit`):
    - Accounts `StorageReservation.FlowVault.balance` needs to increase
3. When refunding storage.
    - Accounts `StorageReservation.FlowVault.balance` needs to decrease
    - A `FlowVault` needs to be be returned


### Register Migration

All existing accounts will be given 1 FLOW token worth of storage (1MB). Only very few accounts currently use more than 1MB of storage. Those that do user more than 1MB will be checked individually and will be given `(n + 1)`MB of storage where `n` is the smallest integer so that the account is using less then `n`MB of storage.

Because the process of creating a register migration is not documented yet a few assumptions need to be made:
- Migration will be a function with the signature of: `(key, value) -> [(key, value)]`.
- The function must be stateless.
- It has access to other registers.

With this in mind the migration pseudo-code can be written as:

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

    storage_capacity_resource_register = create_storage_capacity_resource_register(storage_capacity)
    storage_capacity_resource_public_capability_register = create_storage_capacity_resource_public_capability_register()

    return [
        (key, value),
        storage_capacity_resource_register,
        storage_capacity_resource_public_capability_register,
        ((owner, "", "storage_used"), storage_used)
    ]
```

The migration will keep track of how much Flow tokens in total were reserved, so that that amount can be removed from the supply

#### Future Migrations

During any future register migration if any account registers are touched storage used must be updated as well. To ensure that this is done, touching any account related registers should go through the logic in `accounts.go`.

### Performance Implications

The changes done will affect all transactions by adding a small overhead:
    - Calculation of `storage_used`.
    - Checking `storage_used` is not over `storage_capacity`.

This overhead can be measured by comparing the execution time of integration tests (that already exist).

Time complexity of transactions that are creating new accounts will actually be reduced because of batching two calls to into one (see [Create Account Changes](#create-account-changes)).

Memory usage should not significantly change since only one field one resource and one capability are being added to each account. The current minimum account size is about one order of magnitude larger (flow token receiver, flow token vault, private keys, ...), than the registers added.

### Dependencies

* Dependent projects: 
    * `flow-core-contracts` (adding **StorageFees** contract, changing **ServiceAccount** contract),
    * `cadence` (access to new fields),
    * `flow-go` (execution change),
    * `emulator` (emulate storage size limiting),
    * SDK-s (example transactions to check/increase storage).

### Engineering Impact

* Binary size / build time / test times should not noticeably increase.
* Most of the changes are spread out over cadence, flow-core-contracts and flow-go they can be covered by unit test separately.

### Tutorials and Examples

There are no protobuf API changes.

There are Cadence API changes that can be covered with the following transactions examples:

1. Get storage used and capacity of an account. 

    ```cadence
        let account: AuthAccount
        log(account.storageUsed)
        log(account.storageCapacity)

        let publicAccount: PublicAccount
        log(publicAccount.storageUsed)
        log(publicAccount.storageCapacity)
    ```

1. Tx: purchase more storage for an account.

    ```cadence
    import StorageFees from 0xSTORAGEFEES

    transaction(forAddress: Address, flowAmount: UFix64) {
        // The Vault resource that holds the tokens that will be used to pay for storage
        let paymentVault: @FungibleToken.Vault

        prepare(account: AuthAccount) {
            // Get a reference to the signer's stored vault
            let vaultRef = account.borrow<&FlowToken.Vault>(from: /storage/flowTokenVault)
                ?? panic("Could not borrow reference to the owner's Vault!")

            // Withdraw tokens from the signer's stored vault
            self.paymentVault <- vaultRef.withdraw(amount: flowAmount)
        }

        execute {
            let storageReservationReceiver = StorageFees.getStorageReservationReceiver(forAddress)
            storageReservationReceiver.deposit(from: <-paymentVault)
        }
    }

    ```

1. Tx: refund storage of an account.

    ```cadence
    import StorageFees from 0xSTORAGEFEES

    transaction(flowAmount: UFix64) {

        prepare(account: AuthAccount) {
            // Get a reference to the signer's stored storageReservation
            let storageCapacityRef = account.borrow<&StorageFees.StorageReservation>(from: StorageFees.storageReservationPath)
                ?? panic("Could not borrow reference to the owner's StorageReservation!")

            // Refund tokens from the signer's stored storageReservation
            let refunded <- storageCapacityRef.withdraw(amount: flowAmount)

            // Get a reference to the signer's Receiver
            self.receiverRef = account.getCapability(/public/flowTokenReceiver)!.borrow<&{FungibleToken.Receiver}>()
                ?? panic("Could not borrow receiver reference to the recipient's Vault")

            // Deposit the refunded tokens
            self.receiverRef.deposit(from: <- refunded)
        }

    }
    ```

### Documentation changes

The documentation changes should cover the following topics:

- Why storage fees?
- How much are storage fees and where is this written?
- Minimum storage on account?
- Smallest purchasable storage chunk?
- How to check storage used and capacity?
- How to purchase more storage?
- How to refund storage?
- What error will I get if im out of storage?
- Access to storage capacity and storage used values in Cadence programs.

### Compatibility

Execution nodes will not be backwards compatible, because the execution state will be updated to include storage used/capacity fields on all accounts.

### User Impact

Current accounts will be updated to include storage used/capacity fields, with the capacity being set to the minimum capacity. For the accounts that are over the limit we need to buy sufficient storage.

Current users will not be impacted until they they reach storage capacity.
