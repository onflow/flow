---
title: "Fees"
slug: "fees"
excerpt: "Application of fees to transactions and accounts in Flow Beta Mainnet"
hidden: true
createdAt: "2020-04-27T16:15:21.833Z"
updatedAt: "2020-06-30T00:19:55.657Z"
---
Fees on the Flow Beta Mainnet are small fixed amounts applied to each transaction to deter spam and help dApp providers reason about the transaction fees that will follow in the future. 

There are two types of fees in Flow:

1. Account Deposit Fee
FLOWs required to instantiate an account. This deposit is required to manage the growth of state maintained by the protocol. For Beta Mainnet, all accounts created by the protocol will be instantiated with an unredeemable account deposit. 

2. Transaction Fee
FLOWs required to execute a transaction on the network. This is a small (fractions of cents) fixed fee applied to every transaction. 


## Applying Transaction Fees 
All transactions are passed to Collection nodes with a signature in the "payer" field. That field dictates which account is responsible for paying the fee for that transaction. All transaction fees are sent to the `Flow Transaction Fees` contract which lives in the Service Account. If the balancer of the payer account is insufficient, the transaction will fail.