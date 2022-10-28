# Dev Wallet

## Introduction

Dev Wallet is an implementation of a wallet provider for development purposes. It provides the following: 

- An example of how to implement the `IWallet` interface, should you wish to implement your own wallet provider. 
- An easy way to sign transactions during development, without the burden of connecting to real wallets. 

***IMPORTANT:*** Never use Dev Wallet in a production build, as it is not secure. 

The initial v1.0.0 release of the Flow SDK for Unity does not provide a production ready wallet provider. We are working hard to release one in the very near future. In the meantime, you can attempt to create your own wallet provider implementing the `IWallet` interface, or stick with Dev Wallet while you develop your game. 

## What are Wallets? 

A wallet is a piece of software or hardware that stores the private key associated with a Flow account. The term *custodian* is used to refer to the party that stores the private key. Hardware Wallets (eg Ledger), typically USB devices, allow users to be their own custodian, whereas hosted software wallets (eg Dapper Wallet) act as the custodian on behalf of the user. 

For more information about Wallets and Flow accounts, see [https://developers.flow.com/flow/dapp-development/user-accounts-and-wallets](https://developers.flow.com/flow/dapp-development/user-accounts-and-wallets). 

## What is a Wallet Provider? 

In terms of the Flow SDK for Unity, a Wallet Provider is a class which implements the `IWallet` interface and allows users to interact with specific hardware or software wallets. This includes authenticating with a wallet, retrieving the user's Flow account address from the wallet, and requesting the wallet to sign transactions on behalf of the user. 

As of v1.0.0, the Flow SDK for Unity only contains a single wallet provider - Dev Wallet. This is not a real wallet provider, but a mock wallet provider for development purposes. It simulates the same functionality as a real wallet provider, but doesn't require users to create and integrate with real wallets. This is a great feature for developers, because it allows them to focus on making the game and designing their on-chain architecture in a purely sandbox environment. A production ready wallet provider will be released in a future version of the SDK as a priority feature. 

## How to use Dev Wallet

Dev Wallet uses the accounts listed in the Accounts tab of the Flow Control Window. You can "authenticate" as one of these accounts, then sign transactions with that account. For more information on setting up these accounts, see [https://developers.flow.com/tools/unity-sdk/guides/flow-control#flowcontrol-accounts](https://developers.flow.com/tools/unity-sdk/guides/flow-control#flowcontrol-accounts). 

### Registering

To use Dev Wallet, you must register it as follows: 

```csharp
FlowSDK.RegisterWalletProvider(ScriptableObject.CreateInstance<DevWalletProvider>());
```

This should be done at the same time as initializing the Flow SDK. Here is a complete example of initializing the Flow SDK to use the emulator and registering Dev Wallet: 

```csharp
using DapperLabs.Flow.Sdk;
using DapperLabs.Flow.Sdk.DevWallet;

FlowConfig flowConfig = new FlowConfig();
flowConfig.NetworkUrl = FlowControl.Data.EmulatorSettings.emulatorEndpoint // local emulator
flowConfig.Protocol = FlowConfig.NetworkProtocol.HTTP;

FlowSDK.Init(flowConfig);
FlowSDK.RegisterWalletProvider(ScriptableObject.CreateInstance<DevWalletProvider>());
```

### Authenticating

The `IWallet.Authenticate` method is as follows: 

```csharp
public void Authenticate(string username, System.Action<string> OnAuthSuccess, System.Action OnAuthFailed);
```

`username` is a string that can be used to identify a user's wallet. For Dev Wallet, this corresponds to the `Name` field of an account in the Accounts tab of the Flow Control Window. If you know which account you want to authenticate with, supply the account name as this argument. If you pass in a blank string, the user will get a dialog where they can choose which account to authenticate as. As this is a development tool, there are no passwords - it is simply simulating authentication. 
`OnAuthSuccess` is a function that will be called when you have successfully authenticated. The callback function must take a `string` argument, which will contain the authenticated account's Flow address. 
`OnAuthFailed` is a function that will be called if authentication failed. In Dev Wallet, this would only fail if you passed in a `username` that doesn't exist. 

Here is an example of authenticating as the `user1` account from game code: 

```csharp
FlowSDK.GetWalletProvider().Authenticate("user1", (string flowAddress) => 
{
    Debug.Log($"Authenticated - Flow account address is {flowAddress}");
}, () => 
{
    Debug.Log("Authentication failed.");
});
```

Here is an example of calling `Authenticate` to display a list of Dev Wallet accounts to choose from: 

```csharp
FlowSDK.GetWalletProvider().Authenticate("", (string flowAddress) => 
{
    Debug.Log($"Authenticated - Flow account address is {flowAddress}");
}, () => 
{
    Debug.Log("Authentication failed.");
});
```

### Signing Transactions

If you are using the Flow SDK to sign transactions then you do not need to worry about this, as it is handled automatically. When you submit a transaction, the SDK will request Dev Wallet to sign the transaction as the authenticated user. A dialog will be displayed requesting the user to approve the transaction. 

For full disclosure, here are the methods on the `IWallet` interface to sign a transaction: 

```csharp
public Task<byte[]> SignTransactionPayload(FlowTransaction txn);

public Task<byte[]> SignTransactionEnvelope(FlowTransaction txn);
```

In Flow, there are two parts of a transaction that can be signed - the Payload and the Authorization Envelope. The envelope must always be signed, and is the last thing to be signed by the Payer of the transaction fees. The Payload is only signed by the Proposer and\or the Authorizers IF they are not also the Payer (i.e. nobody signs the transaction twice). For more information on transaction signing, see [https://developers.flow.com/learn/concepts/transaction-signing](https://developers.flow.com/learn/concepts/transaction-signing). 

The following is an example of how to call `SignTransactionPayload`, but as mentioned, this is automatically done by the SDK's `Transactions.Submit` function. It's an asynchronous so is therefore `await`ed, and returns the signature as a byte array. 

```csharp
byte[] signature = await FlowSDK.GetWalletProvider().SignTransactionPayload(txRequest);
```

### Unauthenticating

You can unauthenticate from Dev Wallet by calling the following: 

```csharp
FlowSDK.GetWalletProvider().Unauthenticate();
```

This will clear Dev Wallet's internal cache of who is authenticated. Note that trying to submit transactions without anyone authenticated will result in an error. 
