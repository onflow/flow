



# Variable Transaction fees

| Status        | Proposed                                             |
:-------------- |:---------------------------------------------------- |
| **FLIP #**    | [NNN](https://github.com/onflow/flow/pull/660)|
| **Author(s)** | Janez Podhostnik (janez.podhostnik@dapperlabs.com)   |
| **Updated**   | 2021-10-07                                           |

## Objective

Change the calculation of transaction fees on the FLOW network to better secure and stabilise the network.

## Motivation

Transaction fees should allow the Flow blockchain to self regulate transaction throughput in a way where it would always tend to the optimum throughput, they should also discourage malicious actors from trying to destabilize the network by sending computationally or network heavy transactions, as the transaction fees on such transactions would be appropriately higher.

## Note

In this document I used the term **effort**, **effort cost**, and **effort limit** instead of **gas**, **gas cost**, **gas limit**. As I feel these better describe the sentiment of what is going on.
## Current design

Currently transaction fees are the same for all transactions and don't change over time [^2]. The transaction fee amount is defined in the `FlowServiceAccount` smart contract as the `transactionFee` field (this can be seen [here](https://github.com/onflow/flow-core-contracts/blob/master/contracts/FlowServiceAccount.cdc) or [here](https://flow-view-source.com/mainnet/account/0xe467b9dd11fa00df/contract/FlowServiceAccount)).

[^2]: Except when an explicit decision is made to change them.

The fees are deducted from the transaction payers default flow wallet automatically. If the transaction fails the fees are still deducted and no other state change (except the fee deduction) is committed.

The transaction fees are collected on the [FlowFees](https://github.com/onflow/flow-core-contracts/blob/master/contracts/FlowFees.cdc) smart contract and are used as part of the staking rewards. If there were more fees collected during an epoch then there were staking rewards the leftover FLOW gets burnt. This part would not be changed with this proposal, but it is important to note, as this means collecting more fees leads to less inflation or even deflation.

There is an existing concept of a execution limit (a.k.a.: gas limit), but it is currently not tied to transaction fees. The execution limit is currently used only to prevent transactions from running for a very long time (or indefinitely). The current measurement of execution is very rudimentary and often doesn't reflect how long/how many the transaction will take to execute.

## Design requirements

We can separate the requirements into two groups depending on perspective.

From the protocols perspective the following requirements can be set:

- Transactions that require more resources from the network to be processed, should cost more.
- If the protocol is experiencing a lot of traffic, all transactions should become more expensive, until the high traffic subsides.

The ultimate goal from the protocols perspective would be that transactions cost exactly the amount of FLOW needed to pay for the cost of the time needed by the nodes to process the transaction. However this would include so many variables that it would not be feasible. Instead the goal is to make a reasonably good approximation, and improve that approximation over time.

From the users perspective the transaction fees implementation should satisfy the following criteria:

- Fees should be easy to understand:
    - It should be made clear why they exist in the form they do.
    - It should be easy to explain how the fees are calculated.
- It should be possible to calculate the transaction fees (within a reasonable margin), before actually sending a transaction.
- The price of sending a specific transaction should not fluctuate over time so quickly that the user cannot respond to the fluctuation.
- It should be possible to see the details of the transaction fee calculation after the transaction is executed.

## Proposed design

The idea for this design is to the transaction fees break down into smaller parts that are easier to define, control, and implement.


The first separation of the transaction fees (<img src="https://render.githubusercontent.com/render/math?math=F">) is into inclusion fees (<img src="https://render.githubusercontent.com/render/math?math=F_i">) and execution fees (<img src="https://render.githubusercontent.com/render/math?math=F_e">). The inclusion fees roughly represent the cost of including the transaction in a collection and passing it from node to node. Inclusion fees must be designed in a way so they can be calculated without executing the transaction. The execution fees account for the approximate operational cost of executing the transaction script passing the results to the verification node and verifying it. Execution fees cannot be know without actually executing the transaction, but each transaction should specify a stopping limit for the execution fees.

This separation into a part that can be know before the transaction is executed, and a part that cannot be know before the transaction is executed, allows for better oversight from the user into how much the transaction will actually cost.

Each part of the fees can be further split into *effort*(<img src="https://render.githubusercontent.com/render/math?math=E">) and an *effort cost factor*(<img src="https://render.githubusercontent.com/render/math?math=f">) of FLOW per unit of effort. The *effort* required for a specific transaction should be independent of when the transaction is sent[^1] and should only depend on the properties of the transaction. On the other hand the *effort cost factor* would change over time depending on network activity.

[^1]: Assuming there weren't any changes to the state that would make the transactions script execute differently.

The final result in equation form looks like this:

<img src="https://render.githubusercontent.com/render/math?math=F%5E%7Bmax%7D%20%3D%20f%20(%20E_i%20%2B%20E_e%20)">

<!-- TODO update diagram -->

![Alt text](20211007-transaction-fees/fees_diagram.svg)

- <img src="https://render.githubusercontent.com/render/math?math=F_i">: Inclusion fees; Represent the cost of including the transaction in a collection.
    - <img src="https://render.githubusercontent.com/render/math?math=f">: The current cost of one unit of effort.
    - <img src="https://render.githubusercontent.com/render/math?math=E_i">: Inclusion effort; The time invariant effort required to handle this transaction (include it into a collection, check signatures are valid, check that the payer can pay, transfer the transaction over the wire,...). The inclusion effort is known before the transaction is executed.
    - <img src="https://render.githubusercontent.com/render/math?math=E_c">: Execution effort; The time invariant effort required to execute this transaction (run the script, process the results, send results to verification node, verify the results, ...). The Execution effort cannot be know without executing the transactions script.


### Fee effort cost factor

The effort cost factor <img src="https://render.githubusercontent.com/render/math?math=f"> should be defined on a smart contract and adjustable via the service account admin resource and should be accessible for everyone to read. 

The effort cost factor can be used in three different ways:

1. The main usage of the effort cost factors is adjusting it when the network is under load. 

2. The second reason to tweak the effort cost factors is that over time as hardware improves, the same amount of effort will be easier to handle by the nodes.

3. A potential third use of the effort cost factor would be to keep the cost of transaction stable according to the USD value of flow. This would require a periodic job to run, check the USD value of FLOW and update the cost factor to account for any changes. This would allow for the average transaction fees to stay relatively close to a set USD value.

While the effort cost factor could be adjusted manually from the start, that would mean responding to network load would be very slow. A potential solution to adjusting the effort cost factor automatically would be a service that monitored the networks performance and sent a transaction to update the fee factors when there was a change in the network load.

### Inclusion effort

Inclusion effort can represent many different parts of the system. Listed below are some potential factors that may play into the inclusion effort part of the fees listed by node type. Adding factors to this list (and actually implementing them) can happen gradually. One way to notice additional factors that might play into the inclusion effort is to compare transactions that have similar inclusion effort but cause a different load on the system.

1. Access node:
    1. Sending a transaction causes load on the access node (might depend on the byte size of the transaction).
    2. The access node needs to potentially do a check (at a constant effort).
    3. ...
2. Collection node:
    1. Load because of tx size (might depend on the byte size of the transaction).
    2. Include tx in a collection (at a constant effort).
    3. ...
3. Execution node:
    1. check signatures are valid (constant x number of signatures)
    2. ...
4. Verification node:


For the first iteration the inclusion effort could be defined to be relative to the byte length of the (rlp encoded) transaction (scaled to match average execution effort) plus a well chosen constant part. The constant inclusion effort part could be chosen by observing the impact of transactions with a different byte size and a similar execution effort. This data could be used to predict how much impact a transaction that is 0 bytes long would make.

Having a positive constant inclusion effort as well as a dynamic one means that splitting a transaction into smaller pieces does not make sense (considering only the inclusion part of the transaction fees). If this would be desired (from the protocols perspective) that the transactions are as small as possible or of a certain size, the dynamic inclusion effort could be defined to grow faster then linear with the byte size of the transaction.


### Execution effort

The execution effort represents the effort needed to execute the transaction script and to handle the execution results. Because the execution path of the script depends on the current execution state, it is impossible to definitively predict the execution effort before the actual on chain execution of the transaction.

The way execution effort is defined, means that the lower bound for execution effort is 0. Any constant part would just get counted under the inclusion effort.

The upper bound of the execution fees (and thus also for transaction fees; assuming the inclusion fees are known) is indirectly set in the transaction by setting the maximum execution effort limit (<img src="https://render.githubusercontent.com/render/math?math=E_c%5E%5Ctext%7Bmax%7D">) (in the current implementation this is known as the gas limit). 

If the transaction execution effort limit is reached during the execution of the transaction the execution stops and the state changes made up to that point are dropped. The transaction fees for this transaction are still collected at the maximum execution effort limit.

Currently the execution effort is calculated by adding 1 for every loop or function call. This could be sufficient for the first implementation. In the future the calculation of the execution effort would be changed so that function calls would have a different execution effort cost assigned to them according to the time complexity of the method.

### Failing transactions

There are a few reasons why a transaction fails, which can be split into four categories, according to who finally gets charged for the transaction fees and how much do they get charged.

1. Transaction failed because the payers signature was incorrect, or the payer does not have enough funds to cover maximum transaction costs (transaction costs with the execution effort set to the execution effort limit).
2. Transaction failed before the transaction script execution started (some non-payer signature was incorrect, or the sequence number was incorrect)
3. Transaction failed during transaction script execution, during fee deduction or during the storage used check. 
4. Transaction failed because the execution effort limit was reached.

As discussed below, in scenario 1. the transaction shouldn't have passed the access node in the first place. However since it has and there is no way to charge the payer, the access node account is charged with the transaction fees. The transaction fees are computed with the execution effort set to 0.

In the second scenario the payer is charged for the transaction fees with the execution effort set to 0.

In the third case, the fees are charged normally with the execution effort set to the actual usage before the error was produced.

Finally in the last case the payer is charged with the transaction fees where the execution effort is set to the execution effort limit.

### Preventing malicious actors

The purpose of fees is to prevent malicious actors sending transactions with the purpose of overloading the network. To achieve that, we have to check that the payer of a transaction has the funds to pay for that transaction as soon as possible.

Tho achieve this the following checks should happen on the access node, before the transaction is even included in a collection: 
- Is the payers signature valid.
- Can the payer pay for the transaction. The payers default FLOW vault should have at least <img src="https://render.githubusercontent.com/render/math?math=F%5E%5Ctext%7Bmax%7D"> FLOW. <img src="https://render.githubusercontent.com/render/math?math=F%5E%7Bmax%7D%20%3D%20f%20(%20E_i%20%2B%20E_e%5E%7Bmax%7D%20)">

It might still happen that this transaction will get included in a collection, either due to a bug or malicious behaviour from the access node, or due to the access node not having up to date information of the balance of the payer. In case does still get included in a collection, even though it does not meet the condition, this check should be repeated in the execution node, and in case the check fails on the execution node, the transaction fees should be deducted from the access nodes account instead of the payers account.

### Calibrating the parameters

When turning on variable transaction fees the goal is to have a smooth transition to the new system. To help facilitate that the cost of transaction fees should be set so that ~95% of transactions should actually pay less transaction fees with variable transaction fees turned on.

To achieve this the 6 different parts of variable transaction fees need to be calibrated accordingly.

- <img src="https://render.githubusercontent.com/render/math?math=E_i"> Inclusion effort would be the byte size of a transaction plus a constant inclusion effort that would be picked by using linear regression on the impact of different size transactions (with the same execution effort) on the network, and extrapolating for a 0 size transaction.
- <img src="https://render.githubusercontent.com/render/math?math=f_i">: Effort cost factor would be picked so that for 95% of transactions that have been seen so far the inclusion fees would cost less then `TC/2`.

- <img src="https://render.githubusercontent.com/render/math?math=E_e">: Execution effort can be kept as the execution effort that is currently in place. This can be later upgraded so the more expensive methods also cost more execution effort. Execution effort would scaled so that the at the maximum execution effort limit the execution fees would be `TC/2`.

### Viewing the deducted fees

The breakdown of the transaction fee calculation for a transaction should be visible after the transaction is executed.

The proposed solution is to allow anyone reconstruct the transaction fees breakdown from two sources of information.

Some data can be retrieved from querying the blockchain at that height:
- fee effort cost factor

Some data will be on the fee deduction event emitted when the fees are deducted:
- inclusion effort
- execution effort

From this data the entire breakdown and the final price can be deducted.

The fee deduction event should also contain what the final fee price was. This is so the final fee value is more accessible and for extra redundancy.
### Transaction Fee estimation

To estimate the minimum transaction fees (<img src="https://render.githubusercontent.com/render/math?math=F^%5Ctext%7Bmin%7D">) needed for a transaction some data needs to be retrieved from the state (access node):
- The effort cost factor.
- The inclusion effort.

This could be done by the SDK with a script or a possibly over a dedicated endpoint on the access nodes. 

Due to the effort cost factor changing over time, this calculation will inherently be an estimation. 

To estimate the upper bound of the transaction fees the user has to choose a good value for the execution effort limit.

If the user is unsure of what execution effort limit is good enough for their transaction an option is that they just go with the maximum execution effort limit as the transaction fees will only be deducted per execution effort usage.


## User impact

Users are already aware of the execution effort limit (a.k.a.: gas limit), the change is only that they will now need to pay more attention to it as setting the execution effort limit has a few implications:
- setting a high execution effort limit will mean that the payer needs to have more funds in their account before sending the transaction. 
- using more execution effort will result in more expensive transactions.

The second thing for the user to keep in mind is that the transaction fees effort cost factors that will slowly change over time. If the price is currently high the user might want to to wait for a less busy (and cheaper) time to send a transaction.

## Implementation

The proposed implementation path is to get all the parts of variable transaction fees in place (step 1-4). This would mean that everyone can get accustomed to the variable transaction fees:

- How to read the emitted fee event.
- How to present the transaction fee receipt.
- Where to check if the effort factors have changed.

After all the parts are in place, we could then focus on fine tuning each part independently.

### Step 1.

Decoupling the concept of effort and the effort fee factor. The fee calculation would still not have any variable parts. The execution effort would be reported as 0 in the transaction fee event. The parts that would change are:

- The inclusion effort would be set to a constant value that would approximate the effort of a nil transaction (or a randomly picked value).
- The fee effort cost factor would be set so that there is no change to the final fees as they are now.
- The fee calculation (multiplying effort with the factor) would be done inside the `FlowFees` smart contract.

Implementing this step would have no impact on users, but they could start reading the fee breakdown from the emitted fee event.

This would also set up the stage nicely for the upcoming steps.

### Step 2.

Introduction of variable inclusion effort.

- the inclusion effort would be set to the byte size of the transaction plus a constant
- other inclusion parameters would be adjusted so that 95% of transactions would be below the current transaction prices.

All of the code pieces would already be in place, so the main part of this task would be choosing good parameter values.

### Step 3.

Introduction of the execution effort.

- use the current execution effort usage calculation but scale it with a constant factor, so that 95% of transactions would be below the current transaction prices.
- add checks listed in the [Failing transactions](#failing_transactions) chapter (excluding those needed on access nodes)

### Step 4.

Make access nodes ignore transactions that cannot be paid for.

- Add payer eligibility checks to the access nodes.
- Add mechanism that the access node pays for transactions it included in collections where the payer could not have paid.

### Future steps

- Improve execution effort calculation so that transactions are priced more fairly according to the load they cause.
- Add mechanism for changing the fee effort cost factor to make fees higher when the traffic is high. (a.k.a: surge pricing)
- Fee parameters fine tuning.
- adding more factors to both inclusion effort and execution effort

## Questions and Discussion Topics

Q: While there is an incentive for access nodes not to include transactions from payers that potentially might not be able to pay for those transactions, what is the incentive in the opposite direction? If a payer was a bad payer and access nodes stop including his transactions, what motivates the access nodes to then start including transactions from that payer, if the payer has added funding to their account?

