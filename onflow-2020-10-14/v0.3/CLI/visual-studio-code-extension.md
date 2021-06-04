---
title: "Visual Studio Code Extension"
slug: "visual-studio-code-extension"
hidden: false
createdAt: "2020-04-21T20:28:22.151Z"
updatedAt: "2020-07-20T15:27:51.695Z"
---
To install the Visual Studio Code extension for Cadence, you first need to [install Visual Studio Code](https://code.visualstudio.com/Download).

Once installed, open Visual Studio Code, open the command palette (press `Shift+Command+P` on macOS and `Shift+Ctrl+P` on Linux/Windows), then search for `Install code command` and press enter.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3092ad0-vscode-1-install.png",
        "vscode-1-install.png",
        1084,
        653,
        "#e1dfe3"
      ]
    }
  ]
}
[/block]
## Installing the extension using the Flow CLI

The Visual Studio Code extension is bundled with the [Flow CLI](doc:CLI), a command-line interface for working with Flow.

To install the extension, run the following command in a terminal on macOS/Linux, or in PowerShell on Windows:

```sh
flow cadence install-vscode-extension
```

Restart Visual Studio Code to complete the installation of the extension.

## Running the Emulator

The emulator can be run directly from Visual Studio Code.

To do so, open the command palette (press `Shift+Command+P` on macOS and `Shift+Ctrl+P` on Linux/Windows), and search for `Run emulator`.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/75dabe2-vscode-2-emulator.png",
        "vscode-2-emulator.png",
        1084,
        653,
        "#e0dee3"
      ]
    }
  ]
}
[/block]
This will open a new terminal and start an emulated version of the Flow blockchain.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b8d55c4-vscode-3-emulator-terminal.png",
        "vscode-3-emulator-terminal.png",
        1084,
        653,
        "#dad8db"
      ]
    }
  ]
}
[/block]
Alternatively the emulator can also be run on the command line.

In a terminal on macOS/Linux, or in PowerShell on Windows, run:

```sh
flow emulator start --init
```

Once the emulator is running, you can start deploying code and submitting transactions.

## Active Account

When the emulator is running in VSCode, the active account is shown in the bottom right corner of the editor. This indicate which account contracts will be deployed to and which account is the signer for submitted transactions.
[block:image]
{
  "images": [
    {
      "image": []
    }
  ]
}
[/block]
## Changing Accounts

To change accounts, click on the active account button on the bottom right of the screen. This will bring up a list of accounts to choose from. Click on one of the accounts, and that account will be selected as the active account. The first account shown is the service account, which is a special account for Flow. Do not deploy code to this account or it will mess up the emulator. Switch to account 1 to deploy your first contract.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/140dad8-vscode-5-changing-accounts.png",
        "vscode-5-changing-accounts.png",
        2168,
        1306,
        "#dddce0"
      ]
    }
  ]
}
[/block]
You can also add a new account by opening up the command palette (press `Shift+Command+P` on macOS and `Shift+Ctrl+P` on Linux/Windows), and selecting `Create Account`.

## Deploying Contracts

When the emulator is running, you can deploy contracts to the active account. You should see a button appear above the definition for a contract in the editor that says, `Deploy contract to account 0x949F92`. Click that button to deploy the contract. This will overwrite any previous contract that had been deployed to the account.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8f50e21-vscode-6-deploying-contracts.png",
        "vscode-6-deploying-contracts.png",
        1218,
        712,
        "#dde1e3"
      ]
    }
  ]
}
[/block]
## Submitting Transactions and Scripts

In the vscode extension, submitting transactions and scripts is similar to deploying contracts. When writing a transaction or script, you should see a button appear at the top of your definition prompting you to submit it. Click the button to send it, using the active account as the signer. The vscode extension currently does not allow more than one account to sign a transaction. You must use the flow playground or SDK for that.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cfe1226-vscode-7-submitting-transactions-and-scripts.png",
        "vscode-7-submitting-transactions-and-scripts.png",
        1218,
        712,
        "#dde1e3"
      ]
    }
  ]
}
[/block]