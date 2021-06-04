---
title: "Staking & Rewards"
slug: "staking-rewards"
excerpt: "Staking a node and earning rewards during the beta period of the network"
hidden: true
createdAt: "2020-05-04T06:02:19.325Z"
updatedAt: "2020-05-28T17:42:06.016Z"
---
While the Flow network is in Beta, staking a node requires participation in the [Genesis Block](doc:genesis-bootstrapping). In order to stake on the protocol and participate as a node operator, in this period you'll need to manually transfer the associated fiat to Dapper Labs Inc. which will ensure your tokens are allocated during the genesis process. 

### Genesis Process

Flow's genesis process must be decoupled from the Flow protocol in order to bootstrap the network. The genesis information will be generated prior to network launch and will contain all data required for the Flow nodes to start-up the protocol in the normal happy path. This data includes the staking and account keys associated with each node, the stake associated with each account, etc. 

As part of generating the genesis information, we construct the initial starting state for the Execution Nodes: the _genesis execution state_. The genesis execution state contains 
* A single root account, for which Dapper Labs holds the private key, containing: 
   * The Flow Token Contract 
   * A Vault holding 1.25B Flow Tokens 

(additional fields omitted for brevity)

### On-Chain Token Distribution
At network launch, only the root account exists. As transactions must be authorized by a valid payer, the root account is required to sign the transactions for creating the first account(s). 
* Accounts will be created for all of the following and the appropriate token allocations will be immediately paid out to each: 
    * Dapper Labs Inc. 
    * Investors 
    * Flow Foundation
    * Ecosystem Reserve
    * Partner Node Operators 

All these operations are executed by means of submitting conventional transactions to Flow. 

### Reward Schedule 

All rewards are automatically distributed via smart contract to the accounts associated with each node.    Rewards will be paid out according to the following schedule: 
  * Initial startup phase: no rewards
  * Bootstrapping phase: rewards of 20% annualized
  * After bootstrapping: rewards of 3.75% annually

### Reward Payouts 

Rewards are paid out proportional to the stake each node operator contributes to its node group. Node groups are assigned rewards based on their revenue ratio which is a coefficient assigned to them based on the security they contribute to the network. Please connect with the Flow team directly if you'd like to understand how these coefficients are derived, a public paper will be shared in the future. 

The reward payout on a per node basis is equal to: 

    R(n_node) = ((annualised reward)*(Tn))/(number of staked nodes in n)

Tn for each node reflects their portion of total stake:
  * Execution Nodes comprise 7.8% of total stake (TE= 0.078)
  * Collection Nodes comprise 16.8% of total stake (TL= 0.168)
  * Consensus Nodes comprise 51.8% of total stake (TS=0.518)
  * Verification Nodes comprise 23.6% of total stake (TV=0.236)


At network launch, there will be no more than:
  * 3 Execution Nodes 
  * 43 Consensus Nodes
  * 29 Collection Nodes
  * 73* Verification Nodes (*100 when performance permits)
 
These numbers were chosen to ensure consistent returns for running a single node of any type. Over time, the number of nodes will increase to promote participation but we don't anticipate increasing the number of participating nodes by more than double in the first year of the network's operation.