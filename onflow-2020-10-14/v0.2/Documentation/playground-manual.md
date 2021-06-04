---
title: "Playground Manual"
slug: "playground-manual"
hidden: false
createdAt: "2020-02-24T19:19:56.827Z"
updatedAt: "2020-03-11T21:07:10.336Z"
---
This page contains how-to guides for common actions available in the extension. 

# Refreshing the playground

If you want to start from a fresh state, you can restart the playground. Doing this will delete all state, including accounts, transactions, and smart contracts and reload the default playground smart contracts.
To refresh the playground, simply refresh the browser session and it will return to its default state.

# Open Tutorial Templates

The Playground comes pre-loaded with contract and transaction templates that correspond to each of the six tutorials in this documentation site. (Hello World, Fungible Tokens, NFTs, Marketplace, and Composable Resources). To load the contracts from a specific tutorial, click the "Examples" link at the top of the Playground. This opens up a menu with each tutorial. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c97f717-Screen_Shot_2020-03-04_at_3.02.08_PM.png",
        "Screen Shot 2020-03-04 at 3.02.08 PM.png",
        1516,
        781,
        "#fafaf9"
      ]
    }
  ]
}
[/block]
When you click on one of these links, the tutorial will open in a new tab and the contracts, transactions, and scripts will be loaded into the templates in the Playground.

# Accounts and Contracts

The Accounts section on the left side of the screen is where the active accounts are listed and selected. You can click on an account tab to view the contract that is associated with that account in the main editor.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7733efd-Screen_Shot_2020-03-04_at_2.58.51_PM.png",
        "Screen Shot 2020-03-04 at 2.58.51 PM.png",
        1516,
        785,
        "#f9faf8"
      ]
    }
  ]
}
[/block]
To switch the active account, click on a different account tab that you would like to switch to.

## Deploying Code

When you have a `.cdc` file open in the account editor that contains a `contract`,  you can click the deploy button to deploy that contract to the currently selected account. After a few seconds, you should see a message in the console that confirms that the contract was deployed. You should also see the name of the contract show up in the tab for that account, indicating that the account now has that contract deployed to it.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c7fab6d-Screen_Shot_2020-03-04_at_2.36.23_PM.png",
        "Screen Shot 2020-03-04 at 2.36.23 PM.png",
        1518,
        790,
        "#fbfcfb"
      ]
    }
  ]
}
[/block]
If the deployment failed, you will see the error show up in the `Contract Results` section below the editor. You can read the error message here to find out what you need to fix in the Cadence code for the deployment to be successful.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c1dbd62-Screen_Shot_2020-03-04_at_9.08.45_PM.png",
        "Screen Shot 2020-03-04 at 9.08.45 PM.png",
        1381,
        720,
        "#f9f9f7"
      ]
    }
  ]
}
[/block]
## Seeing what Values are Stored in an Account's storage

When you have an account selected, you can see an enumeration of the resources and references that are stored in that account by looking at the `Resources` box below the editor. There you will see a list of what is stored in account storage. This should help with debugging and making sure that your playground and tutorial progress is in the correct state.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8e17dee-Screen_Shot_2020-03-04_at_6.35.40_PM.png",
        "Screen Shot 2020-03-04 at 6.35.40 PM.png",
        1383,
        725,
        "#f5f9f6"
      ]
    }
  ]
}
[/block]
# Transactions

Transactions are the pieces of code that account holders sign to interact with deployed contracts and code stored in their and other's accounts. One or more users can sign a transaction before sending it. If a user signs a transaction, the `prepare` phase of that transaction has access to that signer's account storage.

The transaction selection options are located below the account selection tabs. To select a transaction, click on one of the listed transactions, and the text of that transaction will open in the editor.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/508b190-Screen_Shot_2020-03-04_at_9.10.20_PM.png",
        "Screen Shot 2020-03-04 at 9.10.20 PM.png",
        1382,
        720,
        "#fbfcfa"
      ]
    }
  ]
}
[/block]
## Sending a transaction

If you would like to send a transaction, first you need to choose the accounts that will be the signers.
In the bottom-right section of the editor, you will see a box for selecting signers and sending the transaction.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2754a5a-Screen_Shot_2020-03-04_at_2.48.02_PM.png",
        "Screen Shot 2020-03-04 at 2.48.02 PM.png",
        1518,
        786,
        "#fbfcfa"
      ]
    }
  ]
}
[/block]
Select the signers that you would like for the transaction by clicking the icon of the account you want. Additionally, you need to make sure that the `prepare` signature has the same number of `Address` parameters as there are accounts signing the transaction. If you don't there will be an error.

The accounts selected in the UI map to the `prepare` parameters in the following way: 
The first account you select will be the first parameter of the `prepare` block in the transaction. The second account you select will be the second parameter, and so on. 

For example, imagine that you have a prepare block that looks like this:
```
prepare{acct1: Account, acct2: Account)
```
If you start from the state where all accounts are unselected, select account `0x02` first, then select account `0x01` as the next signer, in your prepare block, `acct1` will be account `0x02` and `acct2` will be account `0x01`.

After you have selected accounts and fixed the prepare parameters, click the `Send` button to submit the transaction. You should see the output of that transaction print in the `Transaction Results` section below the editor.

If the transaction failed, you will see the error show up in the `Transaction Results` section below the editor. You can read the error message here to find out what you need to fix in the Cadence code for the transaction to be successful.

## Creating, Renaming, or Sharing a Transaction

To create a new transaction, click the plus (`+`) button in the Transaction Templates section. This will create a new, empty transaction that you can define how you wish.

To delete an existing transaction, click the trash can icon next to the name of the transaction.

To rename an existing transaction, click the pencil icon next to the trash can icon.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f2d9c9d-Screen_Shot_2020-03-04_at_9.10.20_PM.png",
        "Screen Shot 2020-03-04 at 9.10.20 PM.png",
        1382,
        720,
        "#fbfcfb"
      ]
    }
  ]
}
[/block]
#  Scripts

Scripts are similar to transactions, but are not signed by an account owner and cannot modify state. They are what will be commonly used to simply read information from the blockchain.

## Selecting a Script

To select a script, click on a script name in the `Script Templates` section, which is below the `Transaction Templates` section in the playground. The script will open in the main editor where you can view and make edits to it.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/eeb89de-Screen_Shot_2020-03-04_at_9.59.20_PM.png",
        "Screen Shot 2020-03-04 at 9.59.20 PM.png",
        1382,
        723,
        "#fbfdfb"
      ]
    }
  ]
}
[/block]
## Executing a Script

If you would like to execute a script, click the `Execute` button that appears in the bottom-right section of the editor. You should see the output of the script print in the `Script Results` section below the editor.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/497fbf4-Screen_Shot_2020-03-04_at_2.51.33_PM.png",
        "Screen Shot 2020-03-04 at 2.51.33 PM.png",
        1515,
        784,
        "#fbfcfb"
      ]
    }
  ]
}
[/block]
## Creating, Deleting, or renaming a Script

To create a new script, click the plus (`+`) button in the `Script Templates` section. This will create a new, empty script that you can define how you wish.

To delete an existing script, click the trash can icon next to the name of the script.

To rename an existing script, click the pencil icon next to the trash can icon.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7aa6a1b-Screen_Shot_2020-03-04_at_9.59.20_PM.png",
        "Screen Shot 2020-03-04 at 9.59.20 PM.png",
        1382,
        723,
        "#fbfdfb"
      ]
    }
  ]
}
[/block]