---
title: "Hello World"
slug: "hello-world"
hidden: false
createdAt: "2020-02-24T19:19:55.593Z"
updatedAt: "2020-04-02T20:56:00.700Z"
---
In this tutorial, we're going to write and deploy our first smart contract!
---
[block:callout]
{
  "type": "success",
  "body": "Open the starter code for this tutorial in the Flow Playground: <a href=\"https://play.onflow.org/6028708a-1992-4864-b63b-3c43cf93b4eb\" target=\"_blank\">https://play.onflow.org/6028708a-1992-4864-b63b-3c43cf93b4eb</a>\nThe tutorial will be asking you to take various actions to interact with this code."
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "Instructions that require you to take action are always included in a callout box like this one. These highlighted actions are all that you need to do to get your code running, but reading the rest is necessary to understand the language's design."
}
[/block]
A smart contract is a program that verifies and executes the performance of a contract without the need for a trusted third party. Programs that run on blockchains are commonly referred to as smart contracts because they mediate important functionality (such as currency) without having to rely on a central authority (like a bank).

Before you get started with Flow, you need to understand how accounts and transactions are modeled.

# Accounts and Transactions in Flow

---

Like most other blockchains, the programming model in Flow is centered around accounts and transactions. All persistent state and its interfaces (the ways to interact with it) are stored in [account storage](glossary#section-account) and all code execution takes place within transactions.

Each user has an account controlled by one or more private keys. This means that support for multi-sig wallets is built into the protocol by default.

An account's storage is divided into three areas:

1. The first area is for [contract storage](glossary#section-account). When you deploy smart contracts to your account, they are stored in this area. This can also hold contract interfaces that other contracts can import and implement.
2. The second area is `account.storage`. This is a key-value store where you store your assets. Nobody can access this area except for you.
3. The third area is `account.published`. This is kind of like your account's public API. You can optionally store [interfaces](https://onflow.readme.io/docs/glossary#section-storage-reference) to any of your stored assets here that anyone else in the network can access.  They can use these interfaces to call functions that are defined in your private assets.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/85e21b3-diagram-hello-world.png",
        "diagram-hello-world.png",
        534,
        652,
        "#efefef"
      ]
    }
  ]
}
[/block]
A [Transaction](https://docs.onflow.org/docs/glossary#section-transaction) in Flow is defined as an arbitrary-sized block of Cadence code that is signed by one or more accounts. Transactions have access to the private `account.storage` objects of the user that signed the transaction and can read and write to their `account.storage` and `account.published` objects, as well as read and call functions in public contracts and public objects in other users` accounts.

# Creating a Smart Contract

---

We will start by writing a smart contract that contains a public function that returns `"Hello World!"`.
[block:callout]
{
  "type": "info",
  "body": "First, you'll need to follow this link to open a playground session with the Hello World contracts, transactions, and scripts pre-loaded: <a href=\"https://play.onflow.org/6028708a-1992-4864-b63b-3c43cf93b4eb\" target=\"_blank\">https://play.onflow.org/6028708a-1992-4864-b63b-3c43cf93b4eb</a>"
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "Open the Account `0x01` tab with the file called `HelloWorld.cdc`. \n`HelloWorld.cdc` should contain this code:"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "// HelloWorld.cdc\n    \naccess(all) contract HelloWorld {\n    \n    access(all) let greeting: String\n    \n    init() {\n        self.greeting = \"Hello, World!\"\n    }\n    \n    access(all) fun hello(): String {\n        return self.greeting\n    }\n}",
      "language": "swift",
      "name": "HelloWorld.cdc"
    }
  ]
}
[/block]

A contract is a collection of code (its functions) and data (its state) that lives in the contract storage area of an account in Flow. Currently, accounts can only have one contract and/or one contract interface. The line `access(all) let greeting: String` declares a public state constant, using the `access(all)` `let` keywords, called `greeting` of type `String`. We would have used `var` if we wanted to declare a variable. 

The `access(all)` keyword is an example of an access control specification that is similar to public, meaning that it can be accessed in all scopes, but not written in all scopes. You can also use `pub` interchangeably with `access(all)` if you prefer something more concise. Please refer to the [Access Control section in the FAQ](https://onflow.readme.io/docs/faq#section-what-are-the-different-levels-of-access-control) to learn more about the different levels of access control permitted in Cadence.

The `init()` section is called the initializer. It is a function that is only run when the contract is created and never again. In this example, the initializer sets the `greeting` field to `"Hello, World!"`.

Next is a public function declaration that returns a value of type `String`. Anyone who imports this contract can call the public contract functions; i.e. the ones that have `access(all)` specified.

Now we can deploy this contract to your account and run a transaction that calls its function.

# Deploying Code

---

Now that you have some Cadence code to work with, you can deploy it to your account.
[block:callout]
{
  "type": "info",
  "body": "Make sure that the account `0x01` tab is selected and that the `HelloWorld.cdc` file is in the editor.\nClick the deploy button to deploy the contents of the editor to account `0x01`."
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/81a13b8-Screen_Shot_2020-03-04_at_2.36.23_PM.png",
        "Screen Shot 2020-03-04 at 2.36.23 PM.png",
        1518,
        790,
        "#fbfcfb"
      ]
    }
  ]
}
[/block]
You should see a log in the output area indicating that the deployment succeeded. (Don't worry if the transaction number or block is different.)

    Deployed Contract To: 0x01

You'll also see the name of the contract show up in the selected account tab underneath the number for the account. This indicates that the `HelloWorld` contract has been deployed to the account. You can always look at this tab to verify which contracts are in which accounts, but there can only be one contract per account.

# Creating a Transaction

---
[block:callout]
{
  "type": "info",
  "body": "Open the transaction named `Transaction1.cdc`.\n`Transaction1.cdc` should contain this code:"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "// Transaction1.cdc\n    \nimport HelloWorld from 0x01\n    \ntransaction {\n    \n    prepare(acct: AuthAccount) {}\n    \t\n    execute {\n    \t  log(HelloWorld.hello())\n    }\n}",
      "language": "swift",
      "name": "Transaction1.cdc"
    }
  ]
}
[/block]
This is a Cadence **transaction**. A transaction can contain arbitrary code that imports from other accounts, interact with account storage, interact with other accounts, and more.

To interact with a smart contract, the transaction first needs to import that smart contract by retrieving its definition from the address where it is stored. This imports the interface definitions, resource definitions, and public functions from that contract so that the transaction can use them to interact with the contract itself or with other accounts that utilize that contract.

To import a smart contract from another account, you type the line:
```
import {Contract Name} from {Address}
```

Transactions are divided into two phases, `prepare` and `execute`. 

1. The `prepare` phase has access to the signing accounts' private storage objects. This phase is meant for removing objects from storage and assigning them to transaction-scoped variables. This enables statically verifying which assets a transaction can modify.
2. The `execute` phase does not have access to account storage and thus can only modify the objects that were removed in the `prepare` phase and call functions on external contracts and objects.

By not allowing the execute phase to access account storage, we can statically verify which assets and areas of the signers storage a given transaction can modify. Browser wallets and applications that submit transactions for users can use this to show what a transaction could alter, and users can have more confidence that they aren't getting fed a malicious or dangerous transaction via an application-generated transaction. You can see examples of why this is important in the [FAQ](https://onflow.readme.io/docs/faq#section-why-is-a-transaction-split-up-into-prepare-execute-post)

You can have multiple signers of a transaction by clicking multiple account avatars in the playground, but the number of parameters of the prepare block of the transaction NEEDS to be the same as the number of signers. If not, this will cause an error.

In this transaction, we are importing the contract from the address that it was deployed to and calling its `hello` function.
[block:callout]
{
  "type": "info",
  "body": "In the box at the bottom right of the editor, select Account `0x01` as the transaction signer.\nClick the `Send` button to submit the transaction"
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6797636-Screen_Shot_2020-03-04_at_2.48.02_PM.png",
        "Screen Shot 2020-03-04 at 2.48.02 PM.png",
        1518,
        786,
        "#fbfcfa"
      ]
    }
  ]
}
[/block]
You should see something like this:

    "Hello, World!"

Congratulations, you just executed your first Cadence transaction! :100: 

# Creating a Resource

---

Next, we are going to get some practice with an example that uses **[resources](https://onflow.readme.io/docs/glossary#section-resource)**, one of the defining features in Cadence. A resource is a composite type like a struct or a class, but with some special rules. 
[block:callout]
{
  "type": "info",
  "body": "Open the Account `0x02` tab with file named `HelloWorldResource.cdc`. \n\n`HelloWorldResource.cdc` should contain the following code:"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "// HelloWorldResource.cdc\n    \naccess(all) contract HelloWorld {\n    \n   access(all) resource HelloAsset {\n       access(all) fun hello(): String {\n    \t     return \"Hello, World!\"\n    \t }\n   }\n    \n   init() {\n       let oldHello <- self.account.storage[HelloAsset] <- create HelloAsset()\n       destroy oldHello\n       log(\"HelloAsset created and stored\")\n   }\n}",
      "language": "swift",
      "name": "HelloWorldResource.cdc"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "Deploy this code to account `0x02` using the `Deploy` button."
}
[/block]
This is another example of what we can do with a contract. Cadence can declare type definitions within deployed contracts. Any account can import these definitions and use them to interact with objects of those types. This contract declares a definition for the `HelloAsset` resource. 

Let's walk through this contract:

    access(all) resource HelloAsset {
    	  access(all) fun hello(): String {
    			  return "Hello, World!"
    	  }
    }

Resources are a composite type similar to a struct or a class because they can have any number of fields or functions within them. The difference is how code is allowed to interact with them. They are useful when you want to model direct ownership. Each instance of a resource exists in exactly one location and cannot be copied. They must be explicitly moved when accessed, making it difficult to lose accidentally.

Structures are not an ideal way to represent this ownership because they can be copied. This means a coding error can easily result in creating multiple copies of the same asset, which breaks the scarcity requirements needed for these assets to have real value. We have to consider loss and theft at the scale of a house, a car, or a bank account with millions of dollars. Resources solve this problem by making creation, destruction, and movement of assets explicit.

    init() {
     // ...

This example also declares an `init()` function. All composite types like contracts, resources, and structs can have an optional `init()` function that only runs when the object is initially created. Cadence requires that all fields must be explicitly initialized, so if the object has fields, this function has to be used to initialize them.

Contracts also have read and write access to the storage of the account that they are deployed to by using the built-in [`self.account.storage`](https://onflow.readme.io/docs/glossary#section-account) object. 

In this contract's `init` function, the contract uses the `create` keyword to create an instance of the `HelloAsset` type and stores it in the account storage. 

    let oldHello <- self.account.storage[HelloAsset] <- create HelloAsset()

There is a lot to explain in this line, and the best place to start is at the rightmost end of it: `create HelloAsset()`. To create a new resource object, we use the `create` keyword followed by an invocation of the name of the resource with any `init()` arguments. A resource can only be created in the scope that it is defined in. This prevents anyone from being able to create arbitrary amounts of resource objects that others have defined.

Moving to the left, we see the `<-` symbol. This is the move operator. The move operator `<-` replaces the assignment operator `=` in assignments that involve resources. To make assignment of resources explicit, the move operator `<-` must be used when:

- the resource is the initial value of a constant or variable,
- the resource is moved to a different variable in an assignment,
- the resource is moved to a function as an argument
- the resource is returned from a function.

When a resource is moved, the old location is invalidated, and the object moves into the context of the new location. Regular assignments of resources are not allowed because assignments only copy the value. Resources can only exist in one location at a time, so movement must be explicitly shown in the code.

Next is `self.account.storage[HelloAsset]`. A contract can refer to its member functions and fields with the keyword `self`. Additionally, a contract's storage is a key-value mapping that is keyed by type, so this line is storing the newly created `HelloAsset` to its place in the account storage.

The final part of the line is:

    let oldHello <-

This block of code moves the old `HelloAsset` value out of storage at the same time that `newHello` moves into storage. These rules might seem confusing at first, but they are powerful tools to keep valuable assets safe. 

Remember, the Cadence type system ensures that a resource can never be accidentally lost. When moving a resource to a field, into an array, or into a dictionary, there is the possibility that the field, array, or dictionary already contains a resource at the given location. Cadence forces the developer to handle the case of an existing resource so that it is not accidentally lost through an overwrite. This is also why we can't let the execution reach the end of the block without doing anything with `oldHello`. We have to explicitly move or destroy the old resource with the `destroy` keyword after moving it out of storage:

    destroy oldHello

In this case, this is the first transaction we have run, so we know the removed value stored in `oldHello` is `nil`. It is safe to `destroy`. In real applications, we would likely perform necessary checks and actions with it to make sure it is handled correctly. This could involve sending it to another account or storing it somewhere else. It might seem unnecessary and cumbersome to have to do this every time you store a new resource, but it is important to explicitly maintain the safety guarantees of resources. 

Now that you have stored a resource in an account, you should see that resource show up in the `Resources` box below the editor. This box indicates which resources are stored in the selected account, and the values of the fields inside those resources. Right now, you should see that the `HelloAsset` resource is stored in account `0x02`'s storage and it has no fields.


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5efb650-Screen_Shot_2020-03-04_at_6.35.40_PM.png",
        "Screen Shot 2020-03-04 at 6.35.40 PM.png",
        1383,
        725,
        "#f5f9f6"
      ]
    }
  ]
}
[/block]
# Interacting with a Resource

---
[block:callout]
{
  "type": "info",
  "body": "Open the transaction named `Transaction2.cdc`.\n`Transaction2.cdc` should contain the following code:"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "// Transaction2.cdc\n    \nimport HelloWorld from 0x02\n    \ntransaction {\n    \n    prepare(acct: AuthAccount) {\n        log(acct.storage[HelloWorld.HelloAsset]?.hello())\n    }\n}",
      "language": "swift",
      "name": "Transaction2.cdc"
    }
  ]
}
[/block]
This transaction imports the `HelloWorld` definitions from the account we just deployed them to and calls the `hello()` function of the stored `HelloAsset` resource.

We use `?` because the values in the `storage` and `published` mappings are [optionals](https://onflow.readme.io/docs/glossary#section-optionals-in-cadence). Optionals are values that can represent the absence of a value. Optionals have two cases: either there is a value of the specified type, or there is nothing (`nil`). An optional type is declared using the `?` suffix. 

    let newResource: HelloAsset?   // could either have a value of type `HelloAsset`
                                   // or it could have a value of `nil`

Optionals allow developers to account for `nil` cases more gracefully. Here, we explicitly have to account for the possibility that `acct.published[&HelloAsset]` is `nil`. Using `?` "unwraps" the optional before calling `hello`. Because `?` is used when calling the `hello` function, the function call only happens if the stored value is not `nil`. In this case, the result of the `hello` function will be returned as an optional. However, if the stored value was `nil`, the function call would not occur and the result is `nil`.

Refer to [Optionals In Cadence](https://onflow.readme.io/docs/glossary#section-optionals-in-cadence) to learn more about optionals and how they are used.
[block:callout]
{
  "type": "info",
  "body": "Select account `0x02` as the only signer\nClick the `Send` button to submit the transaction"
}
[/block]
You should see something like this:

    "Hello, World!"

# Creating References to Stored Resources

---

In this example, we create a reference to your `HelloAsset` resource object, then use that reference to call the `hello` function. A detailed explanation of what is happening in this transaction is below the transaction code so, if you feel lost, keep reading!
[block:callout]
{
  "type": "info",
  "body": "Open the transaction named `Transaction3.cdc`.\n`Transaction3.cdc` should contain the following code:"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "  // Transaction3.cdc\n    \n  import HelloWorld from 0x02\n    \n  transaction {\n    \n      prepare(acct: AuthAccount) {\n    \t    // Create a new reference to the HelloAsset resource in Storage\n    \t    // and store it in published\n    \t    // if an area in storage is prefixed by the & symbol\n    \t    // it means that it is a reference to an object, not the object itself\n    \t    acct.published[&HelloWorld.HelloAsset] = &acct.storage[HelloWorld.HelloAsset] as &HelloWorld.HelloAsset\n    \n        \n    \t    // Call the hello function using the reference to HelloResource\n    \t    // Use the ? symbol because the value we are accessing is an optional\n    \t    log(acct.published[&HelloWorld.HelloAsset]?.hello())\n    \t}\n  }",
      "language": "swift",
      "name": "Transaction3.cdc"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "Ensure account `0x02` is still selected as a transaction signer\nClick the `Send` button to send the transaction"
}
[/block]
You should see `"Hello, World"` show up in the console again. This is because we created a reference to the `HelloAsset` object, stored the reference in `published`, and used our reference to call the `hello` method of the object.

Let's break down what is happening in this transaction.

This line is where we create a reference to the `HelloAsset` object:

    acct.published[&HelloWorld.HelloAsset] = &acct.storage[HelloWorld.HelloAsset] as &HelloWorld.HelloAsset

The `HelloAsset` object is stored in `account.storage`, which only the account owner can access. The owner might still want to let other people call the `hello` method, but not necessarily get full access to the actual `HelloAsset` object. This is what references are for.

References are kind of like pointers in other languages. They represent a link to an object in an account's storage. They can be used to read fields or call methods on the object they reference, but not to copy, move, or modify the object directly.

To create a reference, you simply use the `&` symbol to get the address of an object in storage. Then you use `as` to cast that reference as a specific type. The type you cast it as must be a subtype of the type that the reference is being created for, hence why we are casting these references to `HelloAsset` as `&HelloAsset`. You have to explicitly include the type you are casting it as, even if you are casting it as itself. This is to make the developer's intentions and actions clear so mistakes are avoided.

We are storing the reference in `acct.published` instead of `acct.storage`. [`Account.storage`](http://account.storage) is private, so when we want references to be available to the public, we store them in `acct.published`. The `published` account object can only store references and is readable by anyone who fetches a public account object with the build in Cadence function `getAccount(Address)`.

Now, anyone can call the `hello()` method on your `HelloAsset` object through your published reference!

Lastly, we call the `hello()` method with our published reference:

    // Call the hello function using the reference to the HelloWorld resource
    log(acct.published[&HelloWorld.HelloAsset]?.hello())

Here, we are directly accessing the reference that we stored in `account.published` and using it to call the `hello()` method.

# Executing Scripts

---

A [script](https://onflow.readme.io/docs/glossary#section-script) is a very simple transaction type in Cadence that cannot perform any writes to the blockchain and can only read the state of an account. It runs without permissions from any account.

To execute a script, you write a function called `access(all) main()`. You can click the execute script button to run the script. The result of the script will be printed to the console output.
[block:callout]
{
  "type": "info",
  "body": "Open the file `Script1.cdc`."
}
[/block]
`Script1.cdc` should look like the following:
[block:code]
{
  "codes": [
    {
      "code": "// Script1.cdc\n    \nimport HelloWorld from 0x02\n    \naccess(all) fun main() {\n    let helloAccount = getAccount(0x02)\n    \n    log(helloAccount.published[&HelloWorld.HelloAsset]?.hello())\n}",
      "language": "swift",
      "name": "Script1.cdc"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "Click the `Execute` button in the playground."
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4648ae9-Screen_Shot_2020-03-04_at_2.51.33_PM.png",
        "Screen Shot 2020-03-04 at 2.51.33 PM.png",
        1515,
        784,
        "#fbfcfb"
      ]
    }
  ]
}
[/block]
This script fetches the public account object with `getAccount` and uses your published reference to print the hello function that is in the `HelloAsset` resource stored in your account. You should see something like this print:

```
> "Hello, World"
Result > "void"
```

# Accounts

---

The playground is initialized with a configurable number of default accounts when you open it.

In the playground, you can select accounts to edit the contracts that are deployed for them by selecting the tab for that account in the left section of the screen. The contract corresponding to that account will be displayed in the editor where you can edit and deploy it to the blockchain.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0032523-Screen_Shot_2020-03-04_at_2.58.51_PM.png",
        "Screen Shot 2020-03-04 at 2.58.51 PM.png",
        1516,
        785,
        "#f9faf8"
      ]
    }
  ]
}
[/block]
## Transactions

Once a contract has been deployed, you can submit transactions to interact with it. In the transactions selection section on the left side of the screen, you can select different transactions to edit and send. While a transaction is open, you can select one or more accounts to sign a transaction. This is because in Flow, multiple accounts can sign the same transaction, giving the access to their private storage. If multiple accounts are selected as signers, this needs to be reflected in the signature of the transaction to show multiple signers:

[block:code]
{
  "codes": [
    {
      "code": "// One signer\n\ntransaction {\n    prepare(acct1: Account) {}\n}\n\n// Two signers\n\ntransaction {\n    prepare(acct1: Account, acct2: Account) {}\n}",
      "language": "swift",
      "name": "signers.cdc"
    }
  ]
}
[/block]
If you want more practice, you can run some of the previous transactions on new accounts to explore some different interactions and potential error messages.

# Fungible Tokens on Flow

---

Now that you have written and launched your first smart contract on Flow, you're ready for something more complex! Go to the [Fungible Tokens](doc:fungible-tokens) page to learn more.