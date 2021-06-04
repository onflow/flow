---
title: "Fungible Tokens"
slug: "fungible-tokens"
hidden: false
createdAt: "2020-02-24T19:19:55.787Z"
updatedAt: "2020-04-02T16:34:15.362Z"
---
In this tutorial, we're going to deploy, store, and transfer fungible tokens.

---
[block:callout]
{
  "type": "success",
  "body": "Open the starter code for this tutorial in the Flow Playground: <a href=\"https://play.onflow.org/32584ba4-b9e3-4362-a49d-89cfc55c6667\" target=\"_blank\">https://play.onflow.org/32584ba4-b9e3-4362-a49d-89cfc55c6667</a>\nThe tutorial will be asking you to take various actions to interact with this code."
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "Instructions that require you to take action are always included in a callout box like this one. These highlighted actions are all that you need to do to get your code running, but reading the rest is necessary to understand the language's design."
}
[/block]
Some of the most popular contract classes on blockchains today are fungible tokens. These contracts create homogeneous tokens that can be transferred to other users and spent as currency (e.g., ERC-20 on Ethereum).

Usually, a central ledger keeps track of a user's token balances. With Cadence, we use a new resource paradigm to implement fungible tokens and avoid using a central ledger. 

### Flow Network Token
In Flow, the native network token will be implemented as a normal fungible token smart contract using a smart contract similar to the one in this tutorial. There will be special contracts and hooks that allow it be used for transaction execution payments and staking, but besides that, developers and users will be able to treat it and use it just like any other token in the network! 

We're going to take you through these steps to get comfortable with the fungible token:

1. Deploy the fungible token contract to account `0x01`
2. Create a fungible token object and store it in your account storage.
3. Create a reference to your tokens that others can use to send you tokens.
4. Set up another account the same way.
5. Transfer tokens from one account to another.
6. Use a script to read the accounts' balances.

**Before proceeding with this tutorial**, we recommend following the instructions in [Getting Started](doc:getting-started) and [Hello, World!](doc:hello-world) to learn the basics of the language and the playground.

For additional support, see the [Playground Manual](doc:playground-manual)

# Fungible Tokens on the Flow Emulator

---
[block:callout]
{
  "type": "info",
  "body": "First, you'll need to follow this link to open a playground session with the Fungible Token contracts, transactions, and scripts pre-loaded: <a href=\"https://play.onflow.org/32584ba4-b9e3-4362-a49d-89cfc55c6667\" target=\"_blank\">https://play.onflow.org/32584ba4-b9e3-4362-a49d-89cfc55c6667</a>"
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "Open the account `0x01` tab to see the file named `FungibleToken.cdc`.\n`FungibleToken.cdc` should contain the full code for the fungible token, which provides the core functionality to store fungible tokens in your account and transfer to and accept tokens from other users."
}
[/block]
The concepts involved in implementing a fungible token in Cadence can be hard to grasp at first. For an in-depth explanation of this functionality and code, continue reading the next section.

Or, if you'd like to go immediately into deploying it and using it in the playground, you can skip to the [Interacting with the Fungible Token](https://docs.onflow.org/docs/fungible-tokens#section-interacting-with-the-fungible-token-in-the-flow-playground) section of this tutorial.

# Fungible Tokens: An In-Depth Exploration

---

How Flow implements fungible tokens is different from other programming languages. As a result:

- Ownership is decentralized and does not rely on a central ledger
- Bugs and exploits present less risk for users and less opportunity for attackers
- There is no risk of integer underflow or overflow
- Assets cannot be duplicated, and it is very hard for them to be lost, stolen, or destroyed
- Code can be composable
- Rules can be immutable
- Code is not unintentionally made public

## Decentralizing Ownership

---

Instead of using a central ledger system, Flow ties ownership to each account via a new paradigm for asset ownership. The example below showcases how Solidity implements fungible tokens, with only the code for storage and transferring tokens shown for brevity.
[block:code]
{
  "codes": [
    {
      "code": "contract ERC20 {\n    mapping (address => uint256) private _balances;\n    \t\n    function _transfer(address sender, address recipient, uint256 amount) {\n        // ensure the sender has a valid balance\n        require(_balances[sender] >= amount);\n\n        // subtract the amount from the senders ledger balance\n        _balances[sender] = _balances[sender] - amount;\n\n        // add the amount to the recipient’s ledger balance\n        _balances[recipient] = _balances[recipient] + amount\n    }\n}",
      "language": "typescript",
      "name": "ERC20.sol"
    }
  ]
}
[/block]
As you can see, Solidity uses a central ledger system for its fungible tokens. There is one contract that manages the state of the tokens and every time that a user wants to do anything with their tokens, they have to interact with the central ERC20 contract, calling its functions to update their balance. This contract handles access control for all functionality, implements all of its own correctness checks, and enforces rules for all of its users.

Instead of using a central ledger system, Flow utilizes a few different concepts to provide better safety, security, and clarity for smart contract developers and users. In this section, we'll show how Flow's resources, interfaces, and other features are employed via a fungible token example.

## Intuiting Ownership with Resources

---

An important concept in Cadence is **Resources**, which are linear types. A resource is a composite type that has its own defined fields and functions, similar to a struct. The difference is that resource objects have special rules that keep them from being copied or lost. Resources are a new paradigm for asset ownership. Instead of representing token ownership in a central ledger smart contract, each account owns a resource object in their account storage that records the number of tokens they own. This way, when users want to transact with each other, they can do so peer-to-peer without having to interact with a central token contract. To transfer tokens to each other, they call a `transfer` function on their own resource object and other users' resources, instead of a central `transfer` function.

This approach simplifies access control because instead of a central contract having to check the sender of a function call, most function calls happen on resource objects stored in users' account, and each user controls who is able to call the functions on resources in their account. This concept, called Capability-based security, will be explained more in a later section.

This approach also helps protect against potential bugs. In a Solidity contract with all the logic contained in a central contract, an exploit is likely to affect all users who are involved in the contract. In Cadence, if there is a bug in the resource logic, an attacker would have to exploit the bug in each token holders account individually, which is much more complicated and time-consuming than it is in a central ledger system. 

Below is an example of a resource for a fungible token vault. Every user who owns these tokens would have this resource stored in their account. It is important to remember that each account stores only a copy of the `Vault` resource, and not a copy of the entire `FungibleToken` contract. The `FungibleToken` contract only needs to be stored in the initial account that manages the token definitions.
[block:code]
{
  "codes": [
    {
      "code": "access(all) resource Vault: Provider, Receiver {\n       \n    // Balance of a user's Vault\n    // we use unsigned integers for balances because they do not require the \n    // concept of a negative number\n    access(all) var balance: UInt64\n    \n    init(balance: UInt64) {\n        self.balance = balance\n    }\n    \n    access(all) fun withdraw(amount: UInt64): @Vault {\n        self.balance = self.balance - amount\n        return <-create Vault(balance: amount)\n    }\n    \n    access(all) fun deposit(from: @Vault) {\n        self.balance = self.balance + from.balance\n        destroy from\n    }\n}",
      "language": "swift",
      "name": "token.cdc"
    }
  ]
}
[/block]
This piece of code is for educational purposes and is not comprehensive. However, it still showcases how a resource for a token works. Each token resource object has a balance and associated functions (e.g., `deposit`, `withdraw`, etc). When a user wants to use these tokens, they instantiate a zero-balance copy of this resource in their account storage. The language requires that the initialization function `init`, which is only run once, must initialize all member variables.

    // Balance of a user's Vault
    // we use unsigned integers for balances because they do not require the 
    // concept of a negative number
    access(all) var balance: UInt64
    
    init(balance: UInt64) {
        self.balance = balance
    }

Then, the deposit function can be publicly available for any account to transfer tokens to.

    access(all) fun deposit(from: @Vault) {
        self.balance = self.balance + from.balance
        destroy from
    }

When an account wants to send tokens to a different account, the sending account calls their own withdraw function first, which subtracts tokens from their resource’s balance and temporarily creates a new resource object that holds this balance. The sending account then calls the recipient account’s deposit function, which literally moves the resource instance to the other account, adds it to their balance, and then destroys the used resource. The resource needs to be destroyed because Cadence enforces strict rules around resource interactions. A resource can never be left hanging in a piece of code. It either needs to be explicitly destroyed or stored in an account's storage.

When interacting with resources, you will use the `@` symbol and a special “move operator” `<-`.

    access(all) fun withdraw(amount: UInt64): @Vault {

This `@` symbol is required when specifying a resource type for a field, an argument, or a return value. The move operator `<-` makes it clear that when a resource is used in an assignment, parameter, or return value, it is moved to a new location and the old location is invalidated. This ensures that the resource only ever exists in one location at a time.

If a resource is moved out of an account's storage, it either needs to be moved to an account’s storage or explicitly destroyed.

    destroy from

This line ensures that resources, which often represent real value, do not get lost because of a coding error.

You’ll notice that the arithmetic operations aren't explicitly protected.

    self.balance = self.balance - amount

In Solidity, this could be a risk for integer overflow or underflow, but Cadence has built-in overflow and underflow protection, so it is not a risk. We are also using unsigned integers in this example, so the vault`s balance cannot go below 0.

Additionally, the requirement that an account contains a copy of the token’s resource type in its storage ensures that funds cannot be lost by being sent to the wrong address. If an address doesn’t have the correct resource type imported, the transaction will revert, ensuring that transactions sent to the wrong address are not lost.

The line in `withdraw` that creates a new `Vault` has the parameter name `balance` specified in the function call.

    return <-create Vault(balance: amount)

This is another feature that Cadence has to improve the clarity of code. All function calls are required to specify the names of the arguments they are sending unless the developer has specifically overridden it.

## Ensuring Security in Public: Capability Security

---

Another important feature in Cadence is its utilization of **Capability Security.** This feature ensures that, while the withdraw function is public, no one except the intended user and those they approve of can withdraw tokens from their vault.

Cadences security model ensures that objects stored in an account's storage can only be accessed by the account that owns them. If a user wants to give another user access to their stored objects, they can publish a reference, which is like an "API" that allows others to call specified functions on their objects.

An account only has access to the fields and methods of an object in a different account if they own a reference to that object that explicitly allows them to access those fields and methods. Only the owner of an object can create a reference for it. Therefore, when a user creates a Vault in their account, they only publish references to the deposit function and the balance. The withdraw function can remain hidden as a function that only the owner can call.

As you can hopefully see, this removes the need to check `msg.sender` for access control purposes, because this functionality is handled by the protocol and type checker. If you aren't the owner of an object or don't have a valid reference to it that was created by the owner, you cannot access the object at all!

## Using Interfaces to Secure Implementations

---

The next important concept in Cadence is design-by-contract, which uses preconditions and postconditions to document and programmatically assert the change in state caused by a piece of a program. These conditions are specified in interfaces that enforce rules about how types are defined and behave. They can be stored on-chain in an immutable fashion so that certain pieces of code can import and implement them to ensure that they meet certain standards.

Here is an example of how interfaces for the `Vault` resource we defined above would look.
[block:code]
{
  "codes": [
    {
      "code": "    // Interface that enforces the requirements for withdrawing\n    // tokens from the implementing type\n    //\n    access(all) resource interface Provider {\n        access(all) fun withdraw(amount: UInt64): @Vault {\n            post {\n                result.balance == amount:\n                    \"Withdrawal amount must be the same as the balance of the withdrawn Vault\"\n            }\n        }\n    }\n    // Interface that enforces the requirements for depositing\n    // tokens into the implementing type\n    //\n    access(all) resource interface Receiver {\n    \n        access(all) fun deposit(from: @Vault) {\n            pre {\n                from.balance > UInt64(0):\n                    \"Deposit balance must be positive\"\n            }\n        }\n    }",
      "language": "swift",
      "name": "interfaces.cdc"
    }
  ]
}
[/block]
In our example, the `Vault` resource would implement both of these interfaces. The interfaces ensure that specific fields and functions are present in the resource implementation and that those functions meet certain conditions before and/or after execution. These interfaces can be stored on-chain and imported into other contracts or resources so that these requirements are enforced by an immutable source of truth that is not susceptible to human error.

You can also see that functions and fields have the `access(all)` keyword next to them. We have explicitly defined these fields as public because all fields and functions in Cadence are private by default, meaning that the local scope can only access them. Users have to make parts of their owned types explicitly public. This helps prevent types from having unintentionally public code.

# Interacting with the Fungible Token in the Flow Playground

Now that you have read about how the Fungible Token works, we can deploy it to your account and send some transactions to interact with it. 
[block:callout]
{
  "type": "info",
  "body": "Make sure that you have opened the Fungible Token templates in the playground by following the link at the top of this page.\nYou should have Account `0x01` open and should see the code below."
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "// FungibleToken.cdc\n//\n// The FungibleToken contract is a sample implementation of a fungible token on Flow.\n//\n// Fungible tokens behave like everyday currencies -- they can be minted, transferred or\n// traded for digital goods.\n//\n// Follow the fungible tokens tutorial to learn more: https://docs.onflow.org/docs/fungible-tokens\n\naccess(all) contract FungibleToken {\n\n    // Total supply of all tokens in existence.\n    access(all) var totalSupply: UInt64\n\n    // Provider\n    // \n    // Interface that enforces the requirements for withdrawing\n    // tokens from the implementing type.\n    //\n    // We don't enforce requirements on self.balance here because\n    // it leaves open the possibility of creating custom providers\n    // that don't necessarily need their own balance.\n    //\n    access(all) resource interface Provider {\n\n        // withdraw\n        //\n        // Function that subtracts tokens from the owner's Vault\n        // and returns a Vault resource (@Vault) with the removed tokens.\n        //\n        // The function's access level is public, but this isn't a problem\n        // because even the public functions are not fully public at first.\n        // anyone in the network can call them, but only if the owner grants\n        // them access by publishing a resource that exposes the withdraw\n        // function.\n        //\n        access(all) fun withdraw(amount: UInt64): @Vault {\n            post {\n                // `result` refers to the return value of the function\n                result.balance == amount:\n                    \"Withdrawal amount must be the same as the balance of the withdrawn Vault\"\n            }\n        }\n    }\n\n    // Receiver \n    //\n    // Interface that enforces the requirements for depositing\n    // tokens into the implementing type.\n    //\n    // We don't include a condition that checks the balance because\n    // we want to give users the ability to make custom Receivers that\n    // can do custom things with the tokens, like split them up and\n    // send them to different places.\n    //\n\taccess(all) resource interface Receiver {\n\t\taccess(all) var balance: UInt64\n\n        // deposit\n        //\n        // Function that can be called to deposit tokens \n        // into the implementing resource type\n        //\n        access(all) fun deposit(from: @Vault) {\n            pre {\n                from.balance > UInt64(0):\n                    \"Deposit balance must be positive\"\n            }\n        }\n    }\n\n    // Vault\n    //\n    // Each user stores an instance of only the Vault in their storage\n    // The functions in the Vault and governed by the pre and post conditions\n    // in the interfaces when they are called. \n    // The checks happen at runtime whenever a function is called.\n    //\n    // Resources can only be created in the context of the contract that they\n    // are defined in, so there is no way for a malicious user to create Vaults\n    // out of thin air. A special Minter resource needs to be defined to mint\n    // new tokens.\n    // \n    access(all) resource Vault: Receiver {\n        \n\t\t// keeps track of the total balance of the account's tokens\n        access(all) var balance: UInt64\n\n        // initialize the balance at resource creation time\n        init(balance: UInt64) {\n            self.balance = balance\n        }\n\n        // withdraw\n        //\n        // Function that takes an integer amount as an argument\n        // and withdraws that amount from the Vault.\n        //\n        // It creates a new temporary Vault that is used to hold\n        // the money that is being transferred. It returns the newly\n        // created Vault to the context that called so it can be deposited\n        // elsewhere.\n        //\n        access(all) fun withdraw(amount: UInt64): @Vault {\n            self.balance = self.balance - amount\n            return <-create Vault(balance: amount)\n        }\n        \n        // deposit\n        //\n        // Function that takes a Vault object as an argument and adds\n        // its balance to the balance of the owners Vault.\n        //\n        // It is allowed to destroy the sent Vault because the Vault\n        // was a temporary holder of the tokens. The Vault's balance has\n        // been consumed and therefore can be destroyed.\n        access(all) fun deposit(from: @Vault) {\n            self.balance = self.balance + from.balance\n            destroy from\n        }\n    }\n\n    // createEmptyVault\n    //\n    // Function that creates a new Vault with a balance of zero\n    // and returns it to the calling context. A user must call this function\n    // and store the returned Vault in their storage in order to allow their\n    // account to be able to receive deposits of this token type.\n    //\n    access(all) fun createEmptyVault(): @Vault {\n        return <-create Vault(balance: 0)\n    }\n\n\t  // VaultMinter\n    //\n    // Resource object that an admin can control to mint new tokens\n    access(all) resource VaultMinter {\n\n\t\t    // Function that mints new tokens and deposits into an account's vault\n\t\t    // using their `Receiver` reference.\n        // We say `&AnyResource{Receiver}` to say that the recipient \n        // can be any resource as long as it implements\n        // and is cast as the Receiver interface\n        access(all) fun mintTokens(amount: UInt64, recipient: &AnyResource{Receiver}) {\n\t\t\t      FungibleToken.totalSupply = FungibleToken.totalSupply + UInt64(amount)\n            recipient.deposit(from: <-create Vault(balance: amount))\n        }\n    }\n\n    // The init function for the contract. All fields in the contract must\n    // be initialized at deployment. This is just an example of what\n    // an implementation could do in the init function. \n    // The numbers are arbitrary.\n    init() {\n        self.totalSupply = 30\n\n        // Create the Vault with the initial balance and put it into storage.\n        let oldVault <- self.account.storage[Vault] <- create Vault(balance: 30)\n        destroy oldVault\n\n        // Create a VaultMinter resource object and put it into storage.\n\t\tlet oldMinter <- self.account.storage[VaultMinter] <- create VaultMinter()\n        destroy oldMinter\n    }\n}\n ",
      "language": "swift",
      "name": "FungibleToken.cdc"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "Click the `Deploy` button at the bottom right of the editor to deploy the code."
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/668d415-Screen_Shot_2020-03-04_at_3.30.40_PM.png",
        "Screen Shot 2020-03-04 at 3.30.40 PM.png",
        1515,
        785,
        "#f8f9f7"
      ]
    }
  ]
}
[/block]
This deployment stores the contract for the fungible token in your active account (account `0x01`) so that it can be imported into transactions. 

A contract's `init` function runs at contract creation, and never again afterwards. In our example, this function stores an instance of the `Vault` object with an initial balance of 30, and stores the `VaultMinter` object that you can use to mint new tokens.

    let oldVault <- self.account.storage[Vault] <- create Vault(balance: 30)
    destroy oldVault

This line of code moves the old value out of storage at the same time that the new vault is moved into storage. This synchronized action helps ensure that an existing value isn't overwritten by accident. We also have to explicitly move or destroy resource objects before the end of a block of code so that they aren't lost.

You should also see that the `FungibleToken.Vault` and `FungibleToken.VaultMinter` resource objects are stored in the account storage. This will be shown in the Resources box at the bottom of the screen.

You are now ready to run transactions that use the fungible tokens!

# **Create, Store, and Publish References to a Vault**

---

References are like pointers in other languages. They are a link to an object in an account's storage and can be used to read fields or call functions on the object they reference. They cannot move or modify the object directly.

There are many different situations in which you would create a reference to your fungible token vault. You might want a simple way to call methods on your `Vault` from anywhere in a transaction. You could also send a resource that only includes a reference to the withdraw function in the `Vault` so that others can transfer tokens for you. There could also be a function that takes a reference to a `Vault` as an argument, makes a single function call on the reference, then finishes and destroys the reference. This scenario will probably be where references are most often used. We already use this pattern in the `Vault` resource in the `mintTokens` function, shown here:

    access(all) fun mintTokens(amount: UInt64, recipient: &Receiver) {
          FungibleToken.totalSupply = FungibleToken.totalSupply + amount
          recipient.deposit(from: <-create Vault(balance: amount))
    }

Let's create references to your `Vault` so that a separate account can send tokens to you.
[block:callout]
{
  "type": "info",
  "body": "Open the transaction named `Transaction1.cdc`\n`Transaction1.cdc` should contain the following code for creating a reference to the stored Vault:"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "// Transaction1.cdc\n\nimport FungibleToken from 0x01\n \ntransaction {\n    prepare(acct: AuthAccount) {\n        // store a reference to the vault cast as Receiver\n        // that is used by external accounts\n        // This reference only exposes the balance field and deposit function\n        acct.published[&AnyResource{FungibleToken.Receiver}] = &acct.storage[FungibleToken.Vault] as &AnyResource{FungibleToken.Receiver}\n\n        log(\"Public Receiver reference created!\")\n    }\n\n    post {\n        // make sure the reference was created correctly\n        getAccount(0x01).published[&AnyResource{FungibleToken.Receiver}] != nil:  \"Vault Receiver Reference was not created correctly\"\n    }\n}",
      "language": "swift",
      "name": "Transaction1.cdc"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "Select account `0x01` as the only signer. \nClick the `Send` button to submit the transaction.\nThis transaction creates a new public reference to your `Vault` and checks that it was created correctly."
}
[/block]
To create a reference, use the `&` symbol to get the pointer to a storage location, then use `as` followed by an interface or resource type to cast that reference as a specific type. The type you cast it as must be a subtype of the type that the reference is being created for, hence why we can create references for `&Vault` as `&Receiver` and/or `&Vault`.

We also use `&AnyResource{Receiver}` to say that the storage slot can be any resource as long as it implements and is cast as the Receiver interface. This is the common format for describing references. You first have a `&` followed by the concrete type, then the interface in curly braces to ensure that it is a reference that implements that interface.

When we want references to be available to the public, we store them in `acct.published`. The `published` account object is like your account's public API. It can only store references and is readable by anyone who fetches a public account object with `getAccount(Address)`. We cast the `&Vault` reference as a `&AnyResource{Receiver}` here because we only want to expose the `deposit` function to the public.

The `acct.storage` is only available in the private account object `AuthAccount`, which is only available to the owner of the account in the `prepare` phase of a transaction. We don't need to store a reference here, because if we need to interact with our `Vault`, we can just do it directly.

# Transfer Tokens to Another User

---
Now, we are going to run a transaction that sends 10 tokens to account `0x02`. We will do this by calling the `withdraw` function on account `0x01`'s Vault, which creates a temporary Vault object for moving the tokens, then deposit those tokens into account `0x02`'s account by calling their `deposit` function.

Here we encounter another safety feature that Cadence introduces. Owning tokens requires you to have a `Vault` object stored in your account, so if anyone tries to send tokens to an account who isn't prepared to receive them, the transaction will fail. This way, Cadence protects the user if they accidentally enter the account address incorrectly when sending tokens.

Account `0x02` has not been set up to receive tokens, so we will do that now:
[block:callout]
{
  "type": "info",
  "body": "Open the transaction `Transaction2.cdc`.\nSelect account `0x02` as the only signer\nClick the `Send` button to set up account `0x02` so that it can receive tokens."
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "// Transaction2.cdc\n\nimport FungibleToken from 0x01\n\n// This transaction configures an account to store and receive tokens defined by\n// the FungibleToken contract.\ntransaction {\n\tprepare(acct: AuthAccount) {\n\t\t// Create a new empty Vault object\n\t\tlet vaultA <- FungibleToken.createEmptyVault()\n\t\t\t\n\t\t// Store the vault in the account storage\n\t\t// and destroy whatever was there previously\n\t\tlet oldVault <- acct.storage[FungibleToken.Vault] <- vaultA\n\t\tdestroy oldVault\n\n    log(\"Empty Vault stored\")\n\n\t\t// Publish a new Receiver reference to the Vault\n\t\tacct.published[&AnyResource{FungibleToken.Receiver}] = &acct.storage[FungibleToken.Vault] as &AnyResource{FungibleToken.Receiver}\n\n    log(\"Reference created\")\n\t}\n\n  post {\n    // Check that the reference was created correctly\n    getAccount(0x02).published[&AnyResource{FungibleToken.Receiver}] != nil:  \"Vault Receiver Reference was not created correctly\"\n  }\n}\n",
      "language": "swift",
      "name": "Transaction2.cdc"
    }
  ]
}
[/block]
Account `0x02` is ready to start building its fortune! As you can see, when we created the Vault for account `0x02`, we had to create one with a balance of zero by calling the `createEmptyVault()` function. Resource creation is restricted to the contract where it is defined, so in this way, the Fungible Token smart contract can ensure that nobody is able to create new tokens out of thin air.

As part of the initial deployment process for the FungibleToken contract, account `0x01` created a `VaultMinter` object. By using this object, the account that owns it can mint new tokens. Right now, account `0x01` owns it, so it has sole power to mint new tokens. We could have had a `mintTokens` function defined in the contract, but then we would have to check the sender of the function call to make sure that they are authorized. 

As we explained before, the resource model plus capability security handles this access control for us as a built in language construct instead of having to be defined in the code. If account `0x01` wanted to authorize another account to mint tokens, they could either move the `VaultMinter` object to the other account, or give the other account a private reference to the single `VaultMinter`. Or, if they didn't want minting to be possible after deployment, they would simply mint all the tokens at contract initialization and not even include the `VaultMinter` in the contract.

In the next transaction, account `0x01` will mint 30 new tokens and deposit them into account `0x02`'s newly created Vault.
[block:callout]
{
  "type": "info",
  "body": "Select only account `0x01` as a signer and send `Transaction3.cdc` to mint 30 tokens for account `0x02`.\n`Transaction3.cdc` should contain the code below."
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "// Transaction3.cdc\n\nimport FungibleToken from 0x01\n\n// This transaction performs a token transfer from one account to another using the\n// FungibleToken contract.\ntransaction {\n\n    // Local variable for storing the reference to the minter resource\n    let mintingRef: &FungibleToken.VaultMinter\n\n    // Local variable for storing the reference to the Vault of\n    // the account that will receive the newly minted tokens\n    var receiverRef: &AnyResource{FungibleToken.Receiver}\n\n    // The balance of the account before the minting happens\n    // used for the post condition of the transaction.\n    var beforeBalance: UInt64\n\n\t  prepare(acct: AuthAccount) {\n        // Create a reference to the stored, private minter resource\n        self.mintingRef = &acct.storage[FungibleToken.VaultMinter] as &FungibleToken.VaultMinter\n\n        // Get the public account object for account 0x02\n        let recipient = getAccount(0x02)\n\n        // Find their published Receiver reference and record their balance\n        self.receiverRef = recipient.published[&AnyResource{FungibleToken.Receiver}] ?? panic(\"No receiver reference!\")\n        self.beforeBalance = self.receiverRef.balance\n\t  }\n\n    execute {\n        // Mint 30 tokens and deposit them into the recipient's Vault\n        self.mintingRef.mintTokens(amount: 30, recipient: self.receiverRef)\n\n        log(\"30 tokens minted and deposited to account 0x02\")\n    }\n\n    post {\n        // Make sure their account balance has been\n        // increased by 30 \n        self.receiverRef.balance == self.beforeBalance + UInt64(30): \"Minting failed\"\n    }\n}\n ",
      "language": "swift",
      "name": "Transaction3.cdc"
    }
  ]
}
[/block]
This is the first example of a transaction where we utilize local transaction variables that span different stages in the transaction. We declare the `mintingRef`, `receiverRef`, and `beforeBalance` variables outside of the prepare stage but must initialize them in prepare. We can then use them in later stages in the transaction.

You can use the `getAccount()` built-in function to get any account's public account object. The public account object lets you access the `published` field from an account, where references are stored.

### Check account balances

Now, both account `0x01` and account `0x02` should have a `Vault` object in their storage that has a balance of 30 tokens. They both should also have a `Receiver` reference stored in their `account.published` areas that links to their stored `Vault`.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a15650a-diagram-ft.png",
        "diagram-ft.png",
        1136,
        730,
        "#efefef"
      ]
    }
  ]
}
[/block]
An account cannot receive any token type unless it is specifically configured to accept those tokens. As a result, it is difficult to send tokens to the wrong address accidentally. But, if you make a mistake setting up the `Vault` in the new account, you won't be able to send tokens to it.

Let's run a script to make sure we have our vaults set up correctly.

You can use scripts to access an account's public state. Scripts aren't signed by any account and cannot modify state. 

In this example, we will query the balance of each account's vault. The following will print out the balance of each account in the emulator.
[block:callout]
{
  "type": "info",
  "body": "Open the script named `Script1.cdc` in the scripts pane.\n`Script1.cdc` should contain the following code:"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "// Script1.cdc\n\nimport FungibleToken from 0x01 \n\n// This script reads the Vault balances of two accounts.\naccess(all) fun main() {\n    // Get the accounts' public account objects\n    let acct1 = getAccount(0x01)\n    let acct2 = getAccount(0x02)\n\n    // Use optional chaining to read and log balance fields\n    log(\"Account 1 Balance\")\n\t  log(acct1.published[&AnyResource{FungibleToken.Receiver}]?.balance)\n    log(\"Account 2 Balance\")\n    log(acct2.published[&AnyResource{FungibleToken.Receiver}]?.balance)\n}",
      "language": "swift",
      "name": "Script1.cdc"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "Execute `Script1.cdc` by clicking the Execute button.\nThis should ensure the following:"
}
[/block]
- Account `0x01`'s balance is 30
- Account `0x02`'s balance is 30

If correct, you should see the following lines:
```
    "Account 1 Balance"
    30
    "Account 2 Balance"
    30
    Result > "void"
```

If there is an error, this probably means that you missed a step earlier and might need to rerun some of the previous transactions. 

For help restarting the emulator from the beginning of this tutorial, see the [Playground Manual](doc:playground-manual)

Now that we have two accounts, each with a  `Vault`, we can see how they transfer tokens to each other!
[block:callout]
{
  "type": "info",
  "body": "Open the transaction named `Transaction4.cdc` \nSelect account `0x02` as a signer.\nSend the transaction.\n`Transaction4.cdc` should contain the following code for sending tokens to another user:"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "import FungibleToken from 0x01\n\n// This transaction is a template for a transaction that\n// could be used by anyone to send tokens to another account\n// that owns a Vault\n\ntransaction {\n\n    // Temporary Vault object that holds the balance that is being transferred\n    var temporaryVault: @FungibleToken.Vault\n\n    prepare(acct: AuthAccount) {\n        // withdraw tokens from your vault\n        self.temporaryVault <- acct.storage[FungibleToken.Vault]?.withdraw(amount: 10) ?? panic(\"No Vault!\")\n    }\n\n    execute {\n        // get the recipient's public account object\n        let recipient = getAccount(0x01)\n\n        // get the recipient's Receiver reference to their Vault\n        let receiverRef = recipient.published[&AnyResource{FungibleToken.Receiver}] ?? panic(\"No receiver!\")\n\n        // deposit your tokens to their Vault\n        receiverRef.deposit(from: <-self.temporaryVault)\n      \n        log(\"Transfer succeeded!\")\n    }\n}\n",
      "language": "swift",
      "name": "Transaction4.cdc"
    }
  ]
}
[/block]
In this example, the signer withdraws tokens from their `Vault`, which creates and returns a temporary `Vault` resource object with `balance=10` that is used for transferring the tokens. In the execute phase. the transaction moves that resource to another user's `Vault` using their `deposit` method. The temporary `Vault` is destroyed after its balance is added to the recipient's `Vault`. 

You might be wondering why we have to use two function calls to complete a token transfer when it is possible to do it in one. This is because of the way resources work in Cadence. In a ledger-based model, you would just call transfer, which just updates the ledger, but in Cadence, the location of the tokens matters, and therefore most token transfer situations will not just be a direct account-to-account transfer. Most of the time, tokens will be used for a different purpose first, like purchasing something, and that requires the `Vault` to be separately sent and verified before being deposited to the storage of an account. Separating the two also allows us to take advantage of being able to statically verify which parts of accounts can be modified in the `prepare` section of a transaction, which will help users have peace of mind when getting fed transactions to sign from an app.

We also use the nil-coalescing operator `??` when reading values from storage. There is always the risk that storage (and `published`) locations may be empty, so they are stored as [optionals](doc:glossary#section-optionals-in-cadence). Optionals are types that can represent the absence of a value. Optionals have two cases: either there is a value of the specified type, or there is nothing. An optional type is declared using the `?` suffix. Therefore, the possibility that the values are `nil` must be handled. The nil-coalescing operator `??` allows us to do something different if the value is `nil`. In this case, we can revert the transaction, but other actions could be taken if desired. 
[block:callout]
{
  "type": "info",
  "body": "Execute `Script1.cdc` again."
}
[/block]
If correct, you should see the following lines indicating that  account `0x01`'s balance is 40 and account `0x02`'s balance is 20:

```
    "Account 1 Balance"
    40
    "Account 2 Balance"
    20
    Result > "void"
```

You now know how a basic fungible token is used in Cadence and Flow! 

From here, you could try to extend the functionality of fungible tokens by making:

- A faucet for these tokens
- An escrow that can be deposited to (but only withdrawn when the balance reaches a certain point)
- A function to the resource that mints new tokens!

## Non-Fungible Tokens on Flow

---

Now that you have an understanding of how fungible tokens work on Flow, you're ready to play with non-fungible tokens! Go to the [Non-Fungible Tokens](doc:non-fungible-tokens) tutorial to learn more about how unique and indivisible assets work in Cadence. .