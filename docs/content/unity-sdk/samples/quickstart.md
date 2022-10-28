# FlowControl scripting example
This example shows how to use FlowControl to perform common tasks purely from C#, without using
the FlowControl editor interface.  This will ignore any of the GUI related code and focus on
using the FlowControl and Flow SDK.

## Prerequisites
Ensure you have flow-cli installed.  This will allow us to use an emulated flow environment.
You can install it by following the instructions at https://developers.flow.com/tools/flow-cli/install

## Sample walk through
You can follow along in FlowControlExample.cs

The first thing to notice is that we declare Start() to be an IEnumerator.  This makes Start a coroutine.
You will always want to run FlowSDK functions inside a coroutine because they can take a while to complete
and you don't want to lock up your game while they are processed.

```csharp
private IEnumerator Start()
{
...
}
```

## Checking emulator state
The next thing we do is ensure the emulator is running.  We give it a few seconds to start:

```csharp
//Wait up to 2.5 seconds for the emulator to start.
int waited = 0;

while (!FlowControl.IsEmulatorRunning && waited < 5)
{
waited++;
yield return new WaitForSeconds(.5f);
}

if (!FlowControl.IsEmulatorRunning)
{
//Stop execution if the emulator is not running by now.
yield break;
}
```

## Creating a FlowControl Account
Next we'll create a FlowControl account to use ***ONLY*** for running scripts.  The Flow network
doesn't require an account to run scripts, but FlowControl uses Accounts to determine which network
to connect to.

```csharp
FlowControl.Account scriptOnlyAccount = new FlowControl.Account
{
    GatewayName = "Emulator"
};
```

Because this account doesn't have any keys associated with it, it can't be used to run transactions.
It does define which Gateway to use, in this case the "Emulator" gateway, so it can be used
to run scripts.

## Running scripts

Next, we'll use this account to run a script on the emulator.  Scripts on Flow are written in Cadence.
More information is available at https://developers.flow.com/cadence/language/index

First we'll define the script that we want to run:

```csharp
const string code = @"pub fun main(message: String): Int{
    log(message)
    return 42
}";
```

This script requires a Cadence String as input, returns a Cadence Int, and will log the input
string to the emulator log.

Now we execute this script:

```csharp
Task<FlowScriptResponse> task = scriptOnlyAccount.ExecuteScript(code, new CadenceString("Test"));
```

FlowControl uses an Account oriented approach.  Everything is done using an Account object.  In this
case we'll use the scriptOnlyAccount account that we created earlier to call ExecuteScript.

A script is code that can not permanently mutate the state of the blockchain.  It is read-only.
It ***CAN*** call functions that would change the state of the blockchain, but any changes that are
made will be discarded once the script finishes running.

We pass in the Cadence code we want to run and any arguments that are required by the script.
We need to use Cadence specific data types, so  we construct a new CadenceString using the string
"Test".

This returns a `Task<FlowScriptResponse>`.  This is an asynchronous Task that will result
in a FlowScriptResponse when it is complete.

Next, we need to wait for the Task to complete.  Inside a Unity coroutine we can use the `WaitUntil`
function as follows:

```csharp
yield return new WaitUntil(() => task.IsCompleted);
```

`WaitUntil` takes a function that returns a bool (`Func<bool>`), so we construct an anonymous one that
returns the IsCompleted field of the task.  This cause Unity to pause execution of the current coroutine
until the task is completed.

We then check to see if an error occured, and if so, log it to the console.

```csharp
if (task.Result.Error != null)
{
    Debug.LogError($"Error:  {task.Result.Error.Message}");
    yield break;
}
```

If there is no error, the script should have returned a Cadence Int value.  We can access it as follows:

```csharp
Debug.Log($"Script result: {task.Result.Value.As<CadenceNumber>().Value}");
```

This might be a bit confusing.  The Task will have a Result.  The result could contain an error,
but we checked for that earlier.  If it doesn't contain an error, then it will contain a Value.

That Value will be of type CadenceBase, which is the base type for all Cadence data types.  We
know that the script returns a number, so we can cast it as a CadenceNumber using
`As<CadenceNumber>()`.  All Cadence types contain `Value` and `Type` members that are strings.
In this case, we're interested in the `Value`.  If we wanted to use it as a number, we'd need to
parse it, but in this case we just want to output it, so leaving it as a string is fine.

## Creating an SdkAccount

Next, let's create an account that can be used to execute transactions that mutate the state of
the blockchain.  This will also demonstrate how you can use both FlowControl and the base SDK
together.

```csharp
SdkAccount emulatorSdkAccount = FlowControl.GetSdkAccountByName("emulator_service_account");
if (emulatorSdkAccount == null)
{
    Debug.LogError("Error getting SdkAccount for emulator_service_account");
    yield break;
}
```

When the emulator is started, FlowControl automatically creates an emulator_service_account FlowControl.Account
for you to use to access the built in emulator service account.  We'll use that account to create a new account.

Because the `CreateAccount` function is an SDK function, and not a FlowControl function, we'll need to create a
temporary `SdkAccount` from the FlowControl Account.  The `GetSdkAccountByName` function will construct an
SdkAccount object from a FlowControl.Account object.

If the name you pass to `FlowControl.GetSdkAccountByName` does not exist, it will return null, so we check
for that and stop execution if it fails.

## Creating an account on the blockchain

Now we'll use this new SdkAccount object to create a new Flow account on the emulated blockchain.

```csharp
FlowSDK.RegisterWalletProvider(ScriptableObject.CreateInstance<DevWalletProvider>());

string authAddress = "";
FlowSDK.GetWalletProvider().Authenticate("", (string address) =>
{
    authAddress = address;
}, null);

yield return new WaitUntil(() => { return authAddress != ""; });

//Convert FlowAccount to SdkAccount
SdkAccount emulatorSdkAccount = FlowControl.GetSdkAccountByAddress(authAddress);
if (emulatorSdkAccount == null)
{
    Debug.LogError("Error getting SdkAccount for emulator_service_account");
    yield break;
}

//Create a new account with the name "User"
Task<SdkAccount> newAccountTask = CommonTransactions.CreateAccount("User");
yield return new WaitUntil(() => newAccountTask.IsCompleted);

if (newAccountTask.Result.Error != null)
{
    Debug.LogError($"Error creating new account: {newAccountTask.Result.Error.Message}");
    yield break;
}

outputText.text += "DONE\n\n";

//Here we have an SdkAccount
SdkAccount userSdkAccount = newAccountTask.Result;

```
First we create and register a new `DevWalletProvider`.  Any time a transaction is run, it calls the provided wallet provider.  The `DevWalletProvider`
is an implementation of IWallet that shows a simulated wallet interface.  It will allow you to view and authorize the submitted transaction.

After creating and registering the wallet provider, we call `Authenticate` to display a popup that will allow you to select any of the accounts in the FlowControl
Accounts tab.  You should choose emulator_service_account when prompted when running the demo.

We then wait until the user has selected an account.

`CommonTransactions` contains some utility functions to make performing frequent operations a little easier.
One of these is `CreateAccount`.  It expects a `Name`, which is not placed on the blockchain, and the SdkAccount
that should pay for the creation of the new account.  That returns a Task that is handled similarly to
before.

If there is no error, the Result field of the task will contain the newly create account info.

Now, in order to use this new account with FlowControl, we'll need to create a FlowControl.Account from
the SdkAccount we have.

```csharp
FlowControl.Account userAccount = new FlowControl.Account
{
    Name = userSdkAccount.Name,
    GatewayName = "Emulator",
    AccountConfig = new Dictionary<string, string>
    {
        ["Address"] = userSdkAccount.Address,
        ["Private Key"] = userSdkAccount.PrivateKey
    }
};
```

Then we store this account in the FlowControlData object so that we can look it up by name later.

```csharp
FlowControl.Data.Accounts.Add(userAccount);
```

## Deploying a contract

The next section shows how to deploy a contract to the Flow network.  Because this is another utility
function from `CommonTransactions`, it needs an SdkAccount.  We'll use userSdkAccount we created earlier.

First we need to define the contract we wish to deploy.

```csharp
const string contractCode = @"
    pub contract HelloWorld {
        pub let greeting: String

        pub event TestEvent(field: String)

        init() {
            self.greeting = ""Hello, World!""
        }

        pub fun hello(data: String): String {
            emit TestEvent(field:data)
            return self.greeting
        }
    }";
```

We won't discuss how to write Flow contracts in depth here, but simply put this contract defines a single
function that will emit an event and return the string "Hello World!" when run.

Then we use the same pattern we've used before to deploy this contract using the `CommonTransaction.DeployContract`
function.  Note that we should register a new wallet provider since we are changing the account we want to run the transaction
as.

```csharp
FlowSDK.GetWalletProvider().Authenticate(userAccount.Name, null, null);
Task<FlowTransactionResponse> deployContractTask = 
    CommonTransactions.DeployContract("HelloWorld", contractCode);

yield return new WaitUntil(() => deployContractTask.IsCompleted);

if (deployContractTask.Result.Error != null)
{
    Debug.LogError($"Error deploying contract: {deployContractTask.Result.Error.Message}");
    yield break;
}
```
We'll reauthenticate with the wallet provider to tell it to use the new newly created account.  Because we pass in a name this time, it
won't display the select account pop-up.

The first argument to `DeployContract` is the contract name.  This must match the name in the contract
data itself.  The second argument is the Cadence code that defines the contract, and the third argument
is the SdkAccount that the contract should be deployed to.

## Replacement text

Next we'll see how to add a `ReplacementText` entry to FlowControl.  This is typically done via the
FlowControl editor interface, but can be done programatically as shown.

```csharp
FlowControl.TextReplacement newTextReplacement = new FlowControl.TextReplacement
{
    description = "User Address",
    originalText = "%USERADDRESS%",
    replacementText = userSdkAccount.Address,
    active = true,
    ApplyToAccounts = new List<string> { "User" },
    ApplyToGateways = new List<string> { "Emulator" }
};

FlowControl.Data.TextReplacements.Add(newTextReplacement);
```

Note that we are setting `ApplyToAccounts` and `ApplyToGateways` so that this `TextReplacement` will be
performed any time the FlowControl.Account account with the name "User" executes a function against the emulator.

This new `TextReplacement` will be used when we execute a transaction using the contract we just deployed.

## Transactions

First we'll write the transaction we want to execute.

```csharp
string transaction = @"
    import HelloWorld from %USERADDRESS% 
    transaction {
        prepare(acct: AuthAccount) {
            log(""Transaction Test"")
            HelloWorld.hello(data:""Test Event"")
        }
    }";
```

Based on the `TextReplacement` we created earlier, `%USERADDRESS%` will be replaced with the Flow address
of the user account we created.  This will then call the `hello` function on the `HelloWorld` contract
we deployed to the user account.

Next we follow a similar pattern to before:

```csharp
Task<FlowTransactionResult> transactionTask = userAccount.SubmitAndWaitUntilSealed(transaction);
yield return new WaitUntil(() => transactionTask.IsCompleted);

if (transactionTask.Result.Error != null || !string.IsNullOrEmpty(transactionTask.Result.ErrorMessage))
{
    Debug.LogError($"Error executing transaction: {transactionTask.Result.Error?.Message??transactionTask.Result.ErrorMessage}");
    yield break;
}
```

Here, we're using the `SubmitAndWaitUntilSealed` FlowControl function.  This combines two SDK functions
together.  It first submits the transaction to the network.  Then it polls the network until the network
indicates that the transaction has been sealed and then returns the results.

Because this is combining two operations together, there are two potential failure points.  The first
is a network error or syntax error that causes the submission to be rejected.  This will be indicated
in the `Result.Error` field.  The second is something that goes wrong during the processing of the
transaction after submission was successful.  This will be indicated in the Result.ErrorMessage field.
When using SubmitAndWaitUntilSealed or SubmitAndWaitUntilExecuted, you will want to check both of the
error fields to ensure it has completed successfully.

Finally, we check the events emitted by the transaction.  Because submitting transactions returns before
the transaction is actually processed, you can't return data directly from a transaction like you can
with a script.  Instead, you emit events that can be retrieved.  We'll check the events of the completed
transaction as follows:

## Transaction Events

```csharp
FlowEvent txEvent = transactionTask.Result.Events.Find(x => x.Type.Contains("TestEvent"));

//Show that the transaction finished and display the value of the event that was emitted during execution.
//The Payload of the returned FlowEvent will be a CadenceComposite.  We want the value associated with the
//"field" field as a string
Debug.Log($"Executed transaction.  Event type: {txEvent.Type}.  Event payload: {txEvent.Payload.As<CadenceComposite>().CompositeFieldAs<CadenceString>("field").Value}");
```

We end up a with a list of Events that were emitted by a transaction in the `Result.Events` object.  We
use LINQ to find the event we're interested in.  It will contain "TestEvent" in it.

Then we have to get the payload from the event to display.  The payload will always be a `CadenceComposite`,
which can contain many fields.  We'll get the field named "field" from it, and cast that to a `CadenceString`
using `CompositeFieldAs<CadenceString>("field")`, and finally get the `Value` of that field to display.
