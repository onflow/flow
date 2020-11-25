---
title: Flow Port FAQ
description: How to use the Flow Port to manage your Flow account
---
## Creating an Account
In order to access Flow Port, you must have a valid Flow address. If you do not have a Flow address, you can choose to create one via any of our FCL Wallet Providers. 

### Blocto
#### Before You Start

 1. If you already have an existing Blocto Account, [navigate to this link](https://blocto.app.link/flow-distribution) to finish setting up your account to ensure tokens can be delivered to it.
 2. If you do not have an existing Blocto Account, you have 2 different ways to create one: 1) Through Flow Port and 2) Through Blocto's mobile application. Below are instructions of how to do this in Flow Port.

#### Creating Account through Flow Port: Navigate to Flow Port
 
 1. Using Google Chrome, Navigate to [Flow Port](https://port.onflow.org/).
 2. Click on 'Sign Up'
 3. Click on Blocto. Please disable any ad blockers you have before logging in using Blocto:
 4. Follow the user interface prompts to create a new Flow Account Address.
 5. After you create your account, you should be logged into Flow Port. You can now see your account address in Flow Port

### Ledger
#### Before You Start

 1. Ensure you have:
 
   - a.) [Ledger Live](https://support.ledger.com/hc/en-us/articles/360006395553) installed on your computer.
   - b.) [Initialized](https://support.ledger.com/hc/en-us/articles/360000613793) your Ledger Device.

#### Install the Flow App

 1. Connect your Ledger Device to your computer and open Ledger Live.
 2. Make sure your Ledger device firmware is completely up to date. You can check this by clicking on **‘Manager’** from the side navigation bar.  Choose to install the update if there is one.
 
   - a.) NOTE: Sometimes the install option doesn't show up, or it is not clickable. If this is the case, wait for a little bit of time to see if it appears, or restart the Ledger Live app if necessary.
   
 4. Go to the Manager screen in Ledger Live and search for ‘Flow’.
 5. You should see the Flow app. Install it and follow the instructions on the device.
 
   - a.) NOTE: If the Flow app does not appear, it may be because your device is using an outdated firmware version. 

### Navigate to Flow Port to Create an Address

 1. Navigate to [Flow Port](https://port.onflow.org/).
 2. Click on 'Sign Up' if you need to create a new Flow Account.
 3. Click on Ledger.
 4. Follow the prompts on the screen. Plug in your Ledger device and open the Flow App.
 5. Click on Create an account. Follow the prompts on your Ledger device.
 6. Once your account address is created, you will be automatically logged into Flow Port.

## Staking & Delegating
### How Do I Stake or Delegate?

So you have decided you want to be a part of the Flow Protocol. Welcome! You are joining a group of people from all around the world that are a part of a movement centered around bringing decentralization and transparency into the world. Below is a step-by-step guide that will assist you in the staking & delegation process.

### Starting a Stake Transaction
 1. You need to have FLOW in order to stake. Please see the [FLOW Token](/token) reference for information on how to become a FLOW holder.
 2. Once you have FLOW tokens in your account, you can start staking through [Flow Port](https://port.onflow.org/) or, if applicable, with your [custody provider](#staking-via-a-custody-provider).
 3. If you are using Flow Port, log-in with your Flow account address and navigate to the Stake/Delegate page. See the Manual Staking/Delegating section below for more information about what to do next.

### Staking via a Custody Provider

Each custody provider (Kraken, Finoa, CoinList) has a different set of policies and processes in place for staking, rewards and any associated fees. Please reach out to your custodian with any questions related to staking or delegation.

### Manual Staking/Delegating
If you are not using a custody provider, there is more responsibility that you have to accept, because you have complete control of your tokens. You need to ensure that you are well informed about the staking process and potentially node operation process because you will have to manage those on your own. Please read the [staking documentation](https://docs.onflow.org/staking/) before continuing with this guide.

Below are the various options you can choose. Please read them carefully as it will help you understand which route is best for your situation:
- Staking your own Node: You are responsible for running and maintaining a Flow Node. You are also solely responsible for providing the minimum stake for your   selected node (minimum 135,000 FLOW) and you have the technical know-how and bandwidth to run and operate a node in the Flow protocol. 
- Delegating: You have FLOW tokens and you want to stake, without having to run your own node and/or have the full minimum stake required to run your own node. You can ‘delegate’ any amount of your FLOW tokens to an existing node operator and you will earn rewards.

### Staking your own Node
  1. Once you have navigated to the staking/delegating page in Flow Port, click on the 'Stake a Node' option.
  2. Next, select the type of node you will be running.
  3. Input the amount of Flow you wish to stake with that node. You must stake at least the minimum in order for your stake request to be successfully processed. You are able to provide the minimum stake across multiple transactions. Meaning, you could execute your stake transaction with half of the minumum required. Then, before the next epoch, you can choose to 'Add Flow' to that pending stake to get it to the minimum stake required.  
  4. Run the bootstrapping instructions and provide the remaining technical details needed to stake a node.

### Delegating (Coming soon!)
  1. Once you have navigated to the staking/delegating page in Flow Port, click on the Delegate option.
  2. Next, you will specify which node operator you would like to delegate to and how many tokens you want to delegate to them. 

## I have successfully executed a Stake Transaction, now what?
  - Now that you have executed a stake transaction in either Flow Port or your custody provider’s portal, that transaction will now sit in a pending status until it is processed, which will be at the next Epoch Date (which is currently weekly). 
  - During the next Epoch, the transaction will be processed. If successful, the provided FLOW will be staked and the associated Node would be either a) included in the network protocol or b) continue to operate as is in the network protocol. 
  - You are now a part of Flow, and will begin to earn rewards for being a valued member of the blockchain! 
  
### You have variable options at this point to:
  - Add additional stake to your existing stake. Any added FLOW will again sit in a pending status and be processed at the next epoch.
  - Withdraw/re-stake your earned rewards. If you decide to withdraw your rewards, this actions will happen instantly. If you decide to re-stake your rewards, the request will again sit in a pending status and will be processed at the next Epoch.
  - Request to be unstaked from the network. The unstake request will sit in a pening status for two epochs. Once it is processed, the amount that has been unstaked will sit in your unstaked FLOW amount and can now be withdrawn or re-staked.
  
