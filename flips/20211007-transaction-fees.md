# Variable Transaction fees

| Status        | Implemented (0.25.x)                                 |
:-------------- |:---------------------------------------------------- |
| **FLIP 660**  | [660](https://github.com/onflow/flow/pull/660)       |
| **Author(s)** | Janez Podhostnik (janez.podhostnik@dapperlabs.com)   |
| **Updated**   | 2022-03-23                                           |

## Objective

Change the calculation of transaction fees on the FLOW network to better secure and stabilise the network.

## Motivation

Transaction fees should allow the Flow blockchain to self-regulate transaction throughput in a way where it would always tend to the optimum throughput. Fees should also discourage malicious actors from trying to destabilize the network by sending computationally or network heavy transactions, as the transaction fees on such transactions would be appropriately higher.

## Note

In this document I used the term **effort**, **effort cost**, and **effort limit** instead of **gas**, **gas cost**, **gas limit**. As I feel these better describe the sentiment of what is going on.

## Current design

Currently, transaction fees are the same for all transactions and don't change over time [^2]. The transaction fee amount is defined in the `FlowServiceAccount` smart contract as the `transactionFee` field (this can be seen [here](https://github.com/onflow/flow-core-contracts/blob/master/contracts/FlowServiceAccount.cdc) or [here](https://flow-view-source.com/mainnet/account/0xe467b9dd11fa00df/contract/FlowServiceAccount)).

[^2]: Except when an explicit decision is made to change them.

Transaction fees are deducted from the transaction payer's default Flow wallet automatically. This happens as the final step of transaction execution. If the transaction fails the fees are still deducted and no other state change (except the fee deduction) is committed.

The transaction fees are collected in a FLOW Vault stored in the [FlowFees](https://github.com/onflow/flow-core-contracts/blob/master/contracts/FlowFees.cdc) smart contract and are used as part of the staking rewards. If there were more fees collected during an epoch than the specified staking reward amount for that epoch, the leftover FLOW is kept in a pool for the next payout. This part would not be changed with this proposal, but it is important to note, as this means collecting more fees leads to less inflation or even deflation.

There is an existing concept of a execution limit (a.k.a.: gas limit or computation limit), but it is currently not tied to transaction fees. The execution limit is used only to prevent transactions from running for a very long time (or indefinitely). The current measurement of execution is also very rudimentary and often doesn't reflect how much time the transaction will take to execute.

## Design requirements

The requirements for transaction fees can be separated into two groups depending on perspective.

From the protocol's perspective the following requirements can be set:

- Fees should be proportional to effort: Transactions that require more resources (cpu, memory, bandwidth, storage, ...) from the network, to be processed, should cost more.
- Surge pricing: If the protocol is experiencing a lot of traffic, all transactions should become more expensive, until the high traffic subsides.

These requirements reflect both the need for fairness in pricing the transactions according to their impact on the machines processing them and the added security against resource exhaustion attacks (since they would cost more to perform).

The ultimate pricing goal from the protocols perspective is that transactions cost exactly the amount of FLOW needed to pay for the cost of the resources needed by the nodes to process the transaction. However measuring the exact resource consumption would be difficult and costly in itself. It also would not account for the fact that each node (of the same type) will use a different amount of time to process the transaction. Instead, the goal is to make a reasonably good approximation, that is independent of the machine its running on, and improve that approximation over time.

From the users' perspective the implementation of transaction fees should satisfy the following criteria:

- Fees should be easy to understand:
    - It should be made clear why the transaction fees exist in the form they do.
    - It should be easy to explain how the fees are calculated.
- It should be possible to calculate the minimum and maximum boundaries of the transaction fees for a transaction (within a reasonable margin), before actually sending a transaction.
- The price of sending a specific transaction should not fluctuate over time so quickly that the user cannot respond to the fluctuation.
- It should be possible to see the details of the transaction fee calculation after the transaction is executed.

## Proposed design

The idea behind this design is to break down the transaction fees into smaller parts that are easier to define, control, and implement.

The motivation behind the first separation is to partition the fees into a part that can be known before executing the transaction script, inclusion fees, and a part that can only be know by executing the transaction script, execution fees. 

The inclusion part of fees accounts for the resources needed by a transaction because of the transaction's properties (that can be known without executing the transaction's script). Transaction properties are things like the byte size of the transaction and the number of signatures. Some examples of resources that will be needed are the bandwidth to transfer the transaction from node to node, the verification of signatures and the verification of the sequence number.


The execution part of fees accounts for the approximate operational cost of executing the transaction script, passing the results to the verification node and verifying the results. Execution fees cannot be known without actually executing the transaction script. In order to avoid having unexpectedly high execution fees, each transaction should specify a stopping limit for the execution fees.

The inclusion fees and the execution fees can be further split into effort and an the cost of that effort in units of FLOW. The effort required for a specific transaction should be independent of when the transaction is sent[^1] and should only depend on the properties of the transaction. 

The cost of the effort required to execute a transaction can be a factor with the unit of FLOW per effort multiplied by the effort, however in general terms the price of effort should be a function of effort itself. This would allow increasing the price of effort if a lot of effort was used in a transaction. 

The way to specify the stopping limit for the execution fees is to define a maximum execution effort.

[^1]: Assuming there weren't any changes to the state that would make the transactions script execute differently.

Finally we need to multiply the transaction fees by a (unit-less) surge factor that would be more than 1 in the case the network is experiencing heavy load.

### Terminology

- <img src="https://render.githubusercontent.com/render/math?math=F"> : Total transaction fees.
- <img src="https://render.githubusercontent.com/render/math?math=s"> : Surge factor; unit-less factor that is higher if the network is experiencing heavy load.
- <img src="https://render.githubusercontent.com/render/math?math=F_I"> : Inclusion part of the transaction fees.
- <img src="https://render.githubusercontent.com/render/math?math=F_E"> : Execution part of the transaction fees.
- <img src="https://render.githubusercontent.com/render/math?math=I">: Inclusion effort; The time invariant effort required to handle this transaction (include it into a collection, check signatures are valid, check that the payer can pay, transfer the transaction over the wire,...). The inclusion effort is known before the transaction is executed.
- <img src="https://render.githubusercontent.com/render/math?math=E">: Execution effort; The time invariant effort required to execute this transaction (run the script, process the results, send results to verification node, verify the results, ...). The Execution effort cannot be know without executing the transaction.
- <img src="https://render.githubusercontent.com/render/math?math=E%5E%7B%5Ctext%7Bmax%7D%7D">: Maximum execution effort (gas/computation limit).
- <img src="https://render.githubusercontent.com/render/math?math=p_E(E)"> or <img src="https://render.githubusercontent.com/render/math?math=p_I(I)">: Flow cost of effort. In general execution and inclusion effort can be priced differently.

The transaction fees equation can then be written in the following form.

<img src="https://render.githubusercontent.com/render/math?math=F%20%3D%20s%20%5Cleft%5B%20F_I%20%2B%20F_E%20%5Cright%5D%20%3D%20s%20%5Cleft%5B%20p_I(I)%20%2B%20p_E(E)%20%5Cright%5D">

The maximum fees a transaction can incur can be written with the equation below. 

<img src="https://render.githubusercontent.com/render/math?math=F%5E%7B%5Ctext%7Bmax%7D%7D%20%3D%20s%20%5Cleft%5B%20p_I(I)%20%2B%20p_E(E%5E%7B%5Ctext%7Bmax%7D%7D)%20%5Cright%5D">

### Surge factor

The surge factor serves only one purpose, which is to give all transactions on the network a surcharge or potentially a discount when the network load is high or low respectively. It should be defined on a smart contract and adjustable via the service account admin resource and should be accessible for anyone to read. 

The surge factor could be adjusted manually from the start, by manually monitoring the network and sending a transaction to update the surge factor. This would mean responding to network load would be very slow. 

A first automated solution might be for the execution nodes to look at how full the blocks are and use the system chunk transaction to change the surge factor according to that.

When automation will be in place for adjusting the surge factor, the surge factor could be adjusted frequently (in the span it takes to run a few blocks and detect a surge), but it should not change too drastically otherwise users cannot respond to the change.
### Effort cost

In general there would be two different effort cost functions, one for inclusion fees <img src="https://render.githubusercontent.com/render/math?math=F_I%20%3D%20p_I(I)"> and one for execution fees <img src="https://render.githubusercontent.com/render/math?math=F_E%20%3D%20p_E(E)">. This would allow for fine tuning what kind of transactions are the most cost optimal transactions. For example if the execution effort cost function is just a linear function, it makes sense to pack as much execution effort into one transaction as possible, but if the execution effort cost becomes quadratic at a certain effort threshold, it would make sense for users to break transactions into smaller transactions (if possible) that use effort up to that threshold.

<!-- TODO: graph for the paragraph above! -->

In the first iteration of variable transaction fees the effort cost functions can simply be constant coefficients: <img src="https://render.githubusercontent.com/render/math?math=F_E%20%3D%20p_E%20*%20E"> and <img src="https://render.githubusercontent.com/render/math?math=F_I%20%3D%20p_I%20*%20I">. The coefficients are referred to as the inclusion effort cost parameter and the execution effort cost parameter, or together as effort cost parameters.

The effort cost parameters should be defined on a smart contract and adjustable via the service account admin resource and should be accessible for everyone to read. 

The effort cost parameters would need be adjusted infrequently. The reasons for adjusting them would be:

1. After the calculation of variable transaction fees was changed.

2. Over time, due to technological factors, the same amount of effort will be easier to handle by the nodes.

### Inclusion effort

Inclusion effort can represent many different parts of the system. Listed below are some potential factors that may play into the inclusion effort part of the fees listed by node type. Adding factors to this list (and actually implementing them) can happen gradually. Not all of these factors play equally into the total inclusion effort and it is possible that some factors are completely negligible.

1. Access node:
    1. Sending a transaction causes load on the access node (might depend on the byte size of the transaction).
    2. The access node needs to potentially do a check, that the payer can pay (at a constant effort).
    3. The access node should check the transaction code for syntactical correctness (most likely correlated to the transactions size)
    4. ...
2. Collection node:
    1. Load because of tx size (might depend on the byte size of the transaction).
    2. Include tx in a collection (at a constant effort).
    3. ...
3. Execution node:
    1. check signatures are valid (constant x number of signatures)
    2. ...
4. Verification node:
    1. ...

A way to notice additional factors that might play into the inclusion effort is to compare transactions that have similar inclusion effort but cause a different load on the system.

For the first iteration the inclusion effort could be defined to be a linear function of the byte length of the (rlp encoded) transaction (scaled to match average execution effort).

### Execution effort

The execution effort represents the effort needed to execute the transaction script (the CPU time) and the effort to handle the execution results (transferring the necessary data to the verification node for the transaction to be verified). Because execution of the transactions script depends on the current execution state, it is impossible to definitively predict the execution effort before the actual on-chain execution of the transaction.

Currently the execution effort is calculated by adding 1 for every loop or function call. This could be sufficient for the first implementation. In the future the calculation of the execution effort would be changed so that function calls would have a different execution effort cost assigned to them according to the time complexity of the method.

This model should be replaced so that the execution effort better correlates with the time needed to execute the transaction. A possible replacement is to make some functions (that take longer to run) use more effort than others.

The way execution effort is defined, means that the lower bound for execution effort is 0. Any constant part would just get counted under the inclusion effort.

The upper bound of the execution fees (and thus also for transaction fees; assuming the inclusion fees are known) is indirectly set in the transaction by setting the maximum execution effort limit (<img src="https://render.githubusercontent.com/render/math?math=E_c%5E%5Ctext%7Bmax%7D">) (in the current implementation this is known as the gas limit or computation limit). 

If the transaction execution effort limit is reached during the execution of the transaction the execution stops and the state changes made up to that point are dropped. The transaction fees for this transaction are still collected at the maximum execution effort limit.

### Keeping the cost of transaction fees stable to a FIAT currency

If desired the price of transaction fees could be kept relatively stable according to a FIAT currency. To achieved this the FIAT to FLOW ratio (<img src="https://render.githubusercontent.com/render/math?math=r">) would be added to the fee equation:

<img src="https://render.githubusercontent.com/render/math?math=F%20%3D%20s%20r%20%5Cleft%5B%20F_I%20%2B%20F_e%5Cright%5D">

This would require a periodic job to run and check the FIAT value of FLOW then update ratio (<img src="https://render.githubusercontent.com/render/math?math=r">) that would be stored in a smart contract on chain.

### Preventing malicious actors

The purpose of fees is to prevent malicious actors sending transactions with the intention of overloading the network. To achieve this, it is necessary to check that the payer of a transaction has the funds to pay for that transaction as soon as possible.

To achieve this the following checks should happen on the access node, before the transaction is even included in a collection: 
- Is the payers signature valid.
- Can the payer pay for the transaction. The payers default FLOW vault should have at least <img src="https://render.githubusercontent.com/render/math?math=F%5E%5Ctext%7Bmax%7D"> FLOW.

It might still happen that this transaction will get included in a collection, either due to a bug or malicious behaviour from the access node, or due to the access node not having up to date information of the balance of the payer. In case it does still get included in a collection, even though it does not meet the condition, this check should be repeated in the execution node, and if the check fails on the execution node, the transaction fees should be deducted from the access nodes account instead of the payers account.

#### Economic implications

The access node will be charged, for any transactions where the payer cannot pay. These are by definition failing transactions, so no state change (besides fee deduction) will be made.

In a scenario where a payer that is close to their minimum balance repeatedly sends transactions the payer would eventually hit the minimum account balance. At this point the transactions would start failing, but fees can still be deducted from the payer. If the payer continues to send transactions, they will eventually hit a balance that is lower then the current transaction fees. At this point if the payer sends more transactions, and the access node includes them, the access node will start paying for the transaction fees.

Assuming an honest and aware payer, the payer would realize their transaction failed when their balance first dropped below minimum account balance. They would then top off their account before continuing to send more transactions.

With an unaware payer (for example due to bad automation) or a malicious payer, that wants to drain the access node account or wants to cause excess traffic without paying transaction fees, it is in the access nodes best interest to not include these transactions.

The access node can check the balance of the payer prior to including their transaction and if the balance is below the minimum account balance, it would not include the transaction. However this prevents the payer from topping up his own balance, after an honest mistake. Some thought is needed here to address this edge case.

The problem of providing economic incentive to include transactions is not part of this FLIP. This FLIP only provides a way to discourage access nodes to include transactions that cannot be paid for by the payer. 

### Failing transactions

There are a few reasons why a transaction fails, which can be split into four categories, according to who finally gets charged for the transaction fees and how much they get charged.

1. Transaction failed because the payers signature was incorrect, or the payer does not have enough funds to cover maximum transaction costs (transaction costs with the execution effort set to the execution effort limit).

    This transaction should have been rejected at the access node level. However since it was not and there is no way to charge the payer, the access node account is charged with the transaction fees. The transaction fees are computed with the execution effort set to 0.
    
2. Transaction failed before the transaction script execution started (some non-payer signature was incorrect, or the sequence number was incorrect)

    In this scenario the payer is charged for the transaction fees with the execution effort set to 0.

3. Transaction failed during transaction script parsing or during script execution, during fee deduction or during the storage used check. 

    In this case, the fees are charged normally with the execution effort set to the actual usage before the error was produced.

4. Transaction failed because the execution effort limit was reached.

    For these transactions the payer is charged with the transaction fees where the execution effort is set to the execution effort limit.

### Parameter calibration

When turning on variable transaction fees, a smooth transition to the new system is desired. To help facilitate this, the cost of transaction fees should be set so that ~95% of transactions should actually pay less transaction fees with variable transaction fees turned on. The two different parts of variable transaction fees need to be calibrated accordingly.

#### Inclusion fees

Inclusion fees would be defined as a linear function of the byte size (<img src="https://render.githubusercontent.com/render/math?math=b">) of a transaction (with coefficient <img src="https://render.githubusercontent.com/render/math?math=k"> and constant term <img src="https://render.githubusercontent.com/render/math?math=n"> ). 

<img src="https://render.githubusercontent.com/render/math?math=F_I%20%3D%20p_I%20(%20k*b%20%2B%20n%20)">

To get the terms of this linear function we need a way to quantify the impact of the transaction byte size on the network. This can be done by taking a reference transaction that is at the 95th percentile of transaction byte sizes currently seen on mainnet, and does very little computation. This transaction should have inclusion fees of half of the current static fees. We then see how many transactions like this the network can handle per second before it runs into problems. We can define this as the saturation point. The transaction's saturation point is inversely proportionate to the fees that should be charged for the transaction. If the network can handle half as many transactions <img src="https://render.githubusercontent.com/render/math?math=T_1"> as transactions <img src="https://render.githubusercontent.com/render/math?math=T_2"> than <img src="https://render.githubusercontent.com/render/math?math=T_1"> should be twice as expensive as <img src="https://render.githubusercontent.com/render/math?math=T_2">. Using this relation and getting the saturation points for a few transactions of different sizes, we can calibrate the linear dependency.

The inclusion effort cost parameter is a free variable in the inclusion fees equation, so we can define the inclusion effort cost parameter such that the coefficient <img src="https://render.githubusercontent.com/render/math?math=k"> is 1/1000. This means the Inclusion fees can be interpreted as some base fee, plus 1 <img src="https://render.githubusercontent.com/render/math?math=p_I"> for each kilobyte.

#### Execution fees

Execution effort can be kept as the execution effort measuring that is currently in place. This can be later upgraded so the execution effort, more closely matches the resource usage of the transaction.

Effort cost parameter should be picked so that for 95% of transactions that have been seen so far the inclusion fees would cost less then half of the current static transaction fees.

### Viewing the deducted fees

The breakdown of the transaction fee calculation for a transaction should be visible after the transaction is executed.

The proposed solution would allow anyone to reconstruct the transaction fees breakdown from two sources of information.

Some data can be retrieved from querying the blockchain at the height at which the transaction was executed:
- effort cost parameters
- surge factor

Some data will be on the emitted fee deduction event, when the fees are deducted:
- inclusion effort
- execution effort

From this data the entire breakdown and the final price can be deducted. However, the fee deduction event should also contain what the final fee price was, for extra redundancy and accessibility.

### Transaction Fee estimation

In order to estimate the minimum transaction fees needed for a transaction, some data needs to be retrieved from the state (via the access node):

- The effort cost parameters.
- The surge factor.

The calculation of inclusion effort can be done locally. 

If we assume execution effort is 0 we get the minimum possible transaction fees. The maximum possible transaction fees can be computed with the execution effort set to the chosen execution effort limit.

This estimation could be done by the SDK or a possibly over a dedicated endpoint on the access nodes. 

Due to the surge factor changing over time, this calculation will inherently be an estimation.

If the user is unsure of what execution effort limit is good enough for their transaction an option is that they just go with the maximum execution effort limit as the transaction fees will only be deducted per execution effort usage.

## User impact

Users are already aware of the execution effort limit (a.k.a.: gas limit or computation limit), the change is only that they will now need to pay more attention to it as setting the execution effort limit has a few implications:

- setting a high execution effort limit will mean that the payer needs to have more funds in their account before sending the transaction. 
- using more execution effort will result in more expensive transactions.

The second thing for the user to keep in mind is that the surge factor will slowly change over time. If the price is currently high the user might want to to wait for a less busy (and cheaper) time to send a transaction if possible.

## Implementation

The proposed implementation path is to get all the parts of variable transaction fees in place (step 1-4). This would mean that everyone can get accustomed to the variable transaction fees:

- How to read the emitted fee event.
- How to present the transaction fee receipt.
- Where to check if the surge factor has changed.

After all the parts are in place, we could then focus on fine tuning each part independently.

### Step 1.

The first step would be to decouple the concept of effort and the effort cost.

The fee calculation would still not have any variable parts, and the execution effort would be reported as 0 in the transaction fee event. The parts that would change are:

- The inclusion effort would be set to a constant value.
- The inclusion effort cost parameter would be set so that there is no change to the final fees as they are now.
- The surge factor and the effort cost parameters would be defined on the `FlowFees` smart contract.
- The fee calculation would be done inside the `FlowFees` smart contract where the FVM would send the inclusion and execution effort as parameters.

Implementing this step would have no impact on users, but they could start reading the fee breakdown from the emitted fee event.

This would also set up the stage nicely for the upcoming steps.

### Step 2.

Introduction of variable inclusion effort.

- The inclusion effort would be defined as a linear function of transaction byte length and calibrated roughly.

All of the code pieces would already be in place, so the main part of this task would be choosing good parameter values.

### Step 3.

Introduction of variable execution effort.

- The current implementation of execution effort usage metering would be used and the execution cost parameter would be set so that 95% of transactions would be below the current transaction prices.
- Checks listed in the [Failing transactions](#failing_transactions) chapter (excluding those needed on access nodes) would be added.

### Step 4.

Make access nodes ignore transactions that cannot be paid for.

- Add payer eligibility checks to the access nodes.
- Add mechanism where the access node pays for transactions it includes where the payer could not have paid.

### Future steps

- Improve execution effort calculation so that transactions are priced more fairly according to the load they cause.
- Add mechanism for changing the surge factor to make fees higher when the traffic is high.
- Fine tuning of parameters.
- Adding more factors to both inclusion effort and execution effort to better match the actual resource consumption.

## Questions and Discussion Topics

Q: While there is an incentive for access nodes not to include transactions from payers that potentially might not be able to pay for those transactions, what is the incentive in the opposite direction? If a payer was a bad payer and access nodes stop including his transactions, what motivates the access nodes to then start including transactions from that payer, if the payer has added funding to their account?

A: This is an open question, but is also out of scope for this FLIP

Q: Adjusting the surge factor via a transaction might be to slow. If the network is already struggling to process transactions adding one more to the queue in order to make all that come after it more expensive, does not seem like the best solution. A different mechanic might be needed to control the surge factor.
