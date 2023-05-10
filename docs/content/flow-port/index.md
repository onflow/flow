---
title: Flow Port
description: How to use Flow Port
---

Welcome to Flow Port, your portal to the decentralized world of Flow. Access your Flow account, interact with the blockchain, manage your assets and more.
## Creating an Account
In order to access Flow Port, you must have a valid Flow address. If you do not have a Flow address, you can choose to create one via any of the available FCL wallet providers.

### Blocto
#### Before You Start

 1. If you already have an existing Blocto Account, [navigate to this link](https://blocto.app.link/flow-distribution) to finish setting up your account to ensure tokens can be delivered to it.

 2. If you do not have an existing Blocto Account, you have 2 different ways to create one: a) Through Flow Port and b) Through Blocto's mobile application. Below are instructions of how to do this in Flow Port.

#### Creating Account through Flow Port: Navigate to Flow Port

 1. Using Google Chrome, Navigate to [Flow Port](https://port.onflow.org/).

 2. Click on 'Sign Up'

 3. Click on Blocto. Please disable any ad blockers you have before logging in using Blocto

 4. Follow the user interface prompts to create a new Flow Account Address.

 5. After you create your account, you should be logged into Flow Port. You can now see your account address in Flow Port

### Ledger
#### Before You Start

 1. Ensure you have:

     - a.) [Ledger Live](https://www.ledger.com/ledger-live) installed on your computer

     - b.) [Initialized](https://support.ledger.com/hc/en-us/articles/360017362160-Flow-FLOW-?support=true) your Ledger Device.

#### Install the Flow App

 1. Connect your Ledger Device to your computer and open Ledger Live.

 2. Make sure your Ledger device firmware is up to date. You can check this by clicking on **‘Manager’** from the side navigation bar. Choose to install the update if one is available

     - a.) NOTE: Sometimes the install option doesn't show up, or it is not clickable. If this is the case, wait for a little bit of time to see if it appears, or restart the ledger live app if necessary.

 3. On the Manager screen in Ledger Live and search for ‘Flow’.

 4. You should see the Flow App. Install it and follow the instructions on the device.

     - a.) NOTE: If the Flow App does not appear, it may be because you are on an outdated version. Please ensure you are on the most updated version.

#### Navigate to Flow Port to Create an Address

 1. Navigate to [Flow Port](https://port.onflow.org/).

 2. Click on 'Sign Up' if you need to create a new Flow Account.

 3. Click on Ledger.

 4. Follow the prompts on the screen. Plug in your Ledger device and open the Flow App.

 5. Click on Create an account. Follow the prompts on your Ledger device.

 6. Once your account address is created, you will be automatically logged into Flow Port.

## Staking & Delegating

For a detailed walkthrough on how to use Flow Port for staking and delegating, please read the [Flow Port staking walkthrough](/flow-port/staking-guide)
### How Do I Stake or Delegate?

So you have decided you want to be a part of the Flow Network. Welcome! You are joining a group of people from all around the world that are a part of a movement centered around bringing decentralization, user empowerment, and transparency into the world. Below is a step-by-step guide that will assist you in the staking & delegation process.

### Staking via a Custody Provider

If you are using a custody provider who controls your account and private keys for you, such as Kraken, Finoa, or Coinlist, they all have different policies and processes for what you need to do to stake your tokens, the rewards you receive, and the fees that they take from your staking rewards. Please see [our guides](/staking/custody-providers/) for more information about staking using supported custody providers.

### Starting a Manual Staking Transaction
 1. You need to have FLOW in order to stake. Please see the [FLOW Token](/flow-token) reference for information on how to become a FLOW holder.

 2. Once you have FLOW tokens in your account, you can start staking through [Flow Port](https://port.onflow.org/) or, if applicable, with your [custody provider](#staking-via-a-custody-provider).

 3. If you are using Flow Port, log-in with your Flow account address and navigate to the Stake/Delegate page. See the Manual Staking/Delegating section below for more information about what to do next.

### Manual Staking/Delegating
If you are not using a custody provider, there is more responsibility that you have to accept, because you have complete control of your tokens. You need to ensure that you are well informed about the staking process and potentially node operation process because you will have to manage those on your own. Please read the [staking documentation](/staking/) before continuing with this guide.

Below are the various options you can choose. Please be aware, that at this time you can only have 1 stake or 1 delegate per account. This means that if you want to do multiple stakes, multiple delegates, or a mixture of stakes and delegates, you will need to create multiple accounts to do so. Please read them carefully as it will help you understand which route is best for your situation:
- Staking your own Node: You are responsible for running and maintaining a Flow Node. You are also solely responsible for providing the minimum stake for your   selected node (minimum 135,000 FLOW) and you have the technical know-how and bandwidth to run and operate a node in the Flow protocol.
- Delegating: You have FLOW tokens and you want to stake, without having to run your own node and/or have the full minimum stake required to run your own node. You can ‘delegate’ any amount of your FLOW tokens to an existing node operator and you will earn rewards.

Please see a list [here](https://github.com/onflow/flow/blob/master/nodeoperators/NodeOperatorList.md) for all node operators that you can delegate to. This list will be updated as new node operators are onboarded onto the network.'

### Staking your own Node
  1. Once you have navigated to the staking/delegating page in Flow Port, click on the 'Stake a Node' option.

  2. Next, select the type of node you will be running.

  3. Input the amount of Flow you wish to stake with that node. You must stake at least the minimum in order for your stake request to be successfully processed. You are able to provide the minimum stake across multiple transactions. Meaning, you could execute your stake transaction with half of the minumum required. Then, before the next epoch, you can choose to 'Add Flow' to that pending stake to get it to the minimum stake required.

  4. Run the [bootstrapping instructions](https://docs.onflow.org/nodes/node-operation/node-bootstrap/) and provide the remaining technical details needed to stake a node.

### Delegating
  1. Once you have navigated to the staking/delegating page in Flow Port, click on the Delegate option.

  2. Next, you will specify which node operator you would like to delegate to and how many tokens you want to delegate to them.

  3. Execute the transaction. You will now see your pending delegation that will be processed during the next epoch.

  4. At this point, you can also cancel the pending delegation. On the pending delegation, you will see an `X` that you can click to initiate the cancelation transaction.

## I have successfully executed a Stake Transaction, now what?
  - Now that you have executed a stake transaction in either Flow Port or your custody provider’s portal, that transaction will sit in a pending status until it is processed, which will be at the next [Epoch](/staking/#epochs) Date (which is currently weekly).
  - During the next [Epoch](/staking/#epochs), the transaction will be processed. If successful, the provided FLOW will be staked and the associated Node would be either **a)** included in the network protocol if it is a new node or **b)** continue to operate as is in the network protocol.
  - You are now a part of Flow, and will begin to earn rewards for being a valued member of the network!

## What else can I do?
  - Add additional stake to your existing stake. Any added FLOW will again sit in a pending status and be processed at the next epoch.
  - Withdraw/re-stake your earned rewards. If you decide to withdraw your rewards, this action will happen instantly. If you decide to re-stake your rewards, the request will again sit in a pending status and will be processed at the next [Epoch](/staking/#epochs).
  - Withdraw Rewards and send your earnings to other accounts. If you decide that you want to withdraw your rewards and send those earnings to other accounts via the 'Send FLOW' function, you will need to follow a multi-step process. First, you should withdraw your rewards. Once you successfully execute this transaction, you will now see the amount you withdrew in your wallet. That amount now needs to be transferred to your 'Unlocked Account'. You can do this by navigating to your Dashboard, clicking on 'Show Breakdown' next to your balance, and then clicking on the 'Move to Unlocked Account' link. Here you can input the amount that you want to transfer to your unlocked account. Once you execute this, you are free to send these funds to any other account via the 'Send FLOW' option.
  - Request to be unstaked from the network. The unstake request will sit in a pending status for two epochs. Once it is processed, the amount that has been unstaked will sit in your unstaked FLOW amount and can now be withdrawn or re-staked.
  - Change the node you are staked/delegated to. If your staked/delegated node has no FLOW actively staked and you have completely withdrawn all unstaked amounts and rewards associated with the node, then you can move your stake to a different node. Click on the `Change Node` button to initiate this process. Please note that this feature is only visible once you get your active stake/delegate into the appropriate status.

## FAQs
  1. Why do I have multiple 'Keys' on my account?

     If you created your account with Blocto, you will see that you have multiple keys that exist on your account in the 'Dashboard':

     1 with weight 1 (device key): This is generated on Blocto and sent to users' device when they login  with email.
     1 with weight 999 (Blocto service key): This is kept in Blocto's secure key management service and is used to sign transaction.
     1 with weight 1000 (recovery key): This is kept in Blocto's secure key management service and is only used when user wants to switch to non-custodial mode.

     Normally if a user wants to send a Flow transaction, it requires signature from both the key on users' device and a key from Blocto service. Making it harder for hackers to steal your assets.

  2. Locked vs. Unlocked FLOW: What is the difference and what can I do with each?

     - a.) Locked FLOW: If you have locked FLOW, you can choose to either stake or delegate it and earn rewards based off of these actions. You cannot send locked FLOW to other accounts.
     - b.) Unlocked FLOW: If you have unlocked FLOW, you can stake, delegate, and send this FLOW to other accounts. Rewards are considered 'unlocked FLOW'.

  3. Where can I find a list of node operators to delegate to?

     - a.) Please see a list [here](https://github.com/onflow/flow/blob/master/nodeoperators/NodeOperatorList.md) for all node operators that you can delegate to. This list will be updated as new node operators are onboarded onto the network.

  4. I am currently running a node on the network already and have already gone through the staking process once. Do I need to execute a new stake every time there is a new epoch?

       - a.) Once you successfully stake your node and become part of the network, you do not need to submit a new staking request each and every epoch. Your node will be automatically staked from epoch to epoch. This also means that your Node ID will remain the same from epoch to epoch. If you want to unstake your node from the network, then you will follow the process of unstaking your node.

  5. I have a Blocto account and I see that I can stake both in Flow Port and in Blocto's mobile app. What is the difference?

       - a.) If you go through Flow Port, you can choose any node operator within the Flow network to delegate any amount of your Flow Tokens to. If you go through Blocto's mobile site, you will only be able to stake to Blocto run nodes. You can read more about Blocto's staking process by referencing [here](https://guide.blocto.app/article/stake-flow-tokens-step-by-step-with-blocto).

  6. Do I need to use my Ledger device to view information about my account (e.g. my balance and current staked or delegated FLOW)?

       - a.) No you do not! You only need your Ledger device to sign transactions. If you want to view your account, you can do so without your Ledger. You can do this by navigating directly to the appropriate desired page URL, while inputting your address into the URL itself. For quick reference, below is a list of these URLs and where you would input your address:
       - Dashboard: https://port.onflow.org/account/[AccountAddress]
       - Stake & Delegate: https://port.onflow.org/stake-delegate/[AccountAddress]

  7. I am clicking 'submit' to execute a transaction, but nothing is happening. How can I unblock myself?

       - a.) Please disable any pop-up blockers and ad blockers you have and refresh the page. If you are still experiencing issues, please reach out via [Discord](https://discord.gg/4yGnMzkZxr) in the appropriate channel.
