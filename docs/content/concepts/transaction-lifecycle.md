# Transaction Lifecycle

This document walks through each stage of a transaction's lifecycle as it moves through the Flow network.

<!--- START doctoc generated TOC please keep comment here to allow auto update --->
<!--- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE --->
**Table of Contents**

- [Transaction Lifecycle](#transaction-lifecycle)
	- [Submission](#submission)
		- [Validation](#validation)
		- [Clustering](#clustering)
	- [Block Formation](#block-formation)
		- [Proposal](#proposal)
		- [Finalization](#finalization)
	- [Execution](#execution)
		- [Fee Payment](#fee-payment)
		- [Computation](#computation)
	- [Verification](#verification)
	- [Sealing](#sealing)

<!--- END doctoc generated TOC please keep comment here to allow auto update --->

## Submission

Transactions are submitted to the Flow network via Access Nodes. The Access Node provides a single point of contact to interact with the Flow network, accessible [here](/nodes/access-api#current-mainnet). It implements the [Access API](/nodes/access-api/).
Transactions are received by the Access Node via the [SendTransaction API call](/nodes/access-api#sendtransaction).

### Validation
<!-- add explanation of how txs are checked andd how assignment to Cluster is determined (explain "to which this transaction belongs" point below) -->

### Clustering

The Access Node forwards the transaction to one of the Collection nodes in the Collection node cluster to which this transaction belongs. 

## Block Formation 
### Proposal + Finalization 
Collection Nodes pass the transaction collections to the Consensus Nodes for them agree on the order of transactions. Flow's Consensus Nodes follow the HotStuff consensus protocol, [detailed here](https://github.com/onflow/flow-go/tree/master/consensus/hotstuff). 

## Execution

_FVM Documentation coming soon..._

### Fee Payment
In the execution process, the relevant fees are deducted from the account identified as the `payer` in the transacction. Flow's flexible transaction structure allows accounts other than the user to pay transaction fees. For more info on [transaction structure](https://github.com/onflow/flow/blob/master/docs/content/concepts/accounts-and-keys.md#anatomy-of-a-transaction) and [transaction signing](https://developers.flow.com/learn/concepts/accounts-and-keys). 

### Computation
<!-- what is intended for this section, beyond what would be covered in computation? -->

## Verification

_Documentation coming soon..._

## Sealing

_Documentation coming soon..._

## Transaction Results
From the [Access API](https://github.com/onflow/flow-go/blob/master/cmd/access/README.md)

[GetTransactionResult](/nodes/access-api#gettransaction): an execution node is requested for events for the transaction and the transaction status is derived as follows:
* If the collection containing the transaction and the block containing that collection is found locally, but the transaction has expired then its status is returned as `expired`.
* If either the collection or the block is not found locally, but the transaction has not expired, then its status is returned as `pending`
If the transaction has neither expired nor is it pending, but the execution node has not yet executed the transaction, then the status of the transaction is returned as `finalized`.
* If the execution node has executed the transaction, then if the height of the block containing the transaction is greater than the highest sealed block, then the status of the transaction is returned as `executed` else it is returned as `sealed`.
* If the collection, block, or chain state lookup failed then the status is returned as `unknown`
