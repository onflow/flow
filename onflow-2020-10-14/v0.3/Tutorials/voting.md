---
title: "Voting"
slug: "voting"
hidden: false
createdAt: "2020-03-27T15:56:02.910Z"
updatedAt: "2020-07-20T20:26:15.396Z"
---
In this tutorial, we're going to deploy a contract that allows users to vote on multiple proposals that a voting administrator controls.

---
[block:callout]
{
  "type": "success",
  "body": "Open the starter code for this tutorial in the Flow Playground: <a href=\"https://play.onflow.org/8a1987ad-f5b3-4548-a460-56faef700221\" target=\"_blank\">https://play.onflow.org/8a1987ad-f5b3-4548-a460-56faef700221</a>\nThe tutorial will be asking you to take various actions to interact with this code."
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "Instructions that require you to take action are always included in a callout box like this one. These highlighted actions are all that you need to do to get your code running, but reading the rest is necessary to understand the language's design."
}
[/block]
With the advent of blockchain technology and smart contracts, it has become popular to try to create decentralized voting mechanisms that allow large groups of users to vote completely on chain. This tutorial will provide a trivial example for how this might be achieved by using a resource-oriented programming model.

We'll take you through these steps to get comfortable with the Voting contract.

1. Deploy the contract to account 1
2. Create proposals for users to vote on
3. Use a transaction with multiple signers to directly transfer the `Ballot` resource to another account.
4. Record and cast your vote in the central Voting contract
5. Read the results of the vote

Before proceeding with this tutorial, we highly recommend following the instructions in [Getting Started](doc:getting-started) and [Hello World](doc:hello-world) to learn how to use the Playground tools and to learn the fundamentals of Cadence.

# A Voting Contract in Cadence

In this contract, a Ballot is represented as a resource. An administrator can give Ballots to other accounts, then those account mark which proposals they vote for and submit the Ballot to the central smart contract to have their votes recorded. Using a resource type is logical for this application, because if a user wants to delegate their vote, they can send that Ballot to another account.

# Deploy the Contract
[block:callout]
{
  "type": "info",
  "body": "Open Account `0x01` which has the `ApprovalVoting` contract\nClick the Deploy button to deploy it to account `0x01`"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "/*\n*   ApprovalVoting.cdc \n*\n*   In this example, we want to create a simple approval voting contract \n*   where a polling place issues ballots to addresses. \n*   \n*   The run a vote, the Admin deploys the smart contract,\n*   then initializes the proposals \n*   using the initialize_proposals.cdc transaction.\n*   The array of proposals cannot be modified after it has been initialized.\n*\n*   Then they will give ballots to users by \n*   using the issue_ballot.cdc transaction.\n*\n*   Every user with a ballot is allowed to approve any number of proposals. \n*   A user can choose their votes and cast them \n*   with the cast_vote.cdc transaction.\n* \n*/\n\npub contract ApprovalVoting {\n\n    //list of proposals to be approved\n    pub var proposals: [String]\n\n    // number of votes per proposal\n    pub let votes: {Int: Int}\n\n    // This is the resource that is issued to users.\n    // When a user gets a Ballot object, they call the `vote` function\n    // to include their votes, and then cast it in the smart contract \n    // using the `cast` function to have their vote included in the polling\n    pub resource Ballot {\n\n        // array of all the proposals \n        pub let proposals: [String]\n\n        // corresponds to an array index in proposals after a vote\n        pub var choices: {Int: Bool}\n\n        init() {\n            self.proposals = ApprovalVoting.proposals\n            self.choices = {}\n            \n            // Set each choice to false\n            var i = 0\n            while i < self.proposals.length {\n                self.choices[i] = false\n                i = i + 1\n            }\n        }\n\n        // modifies the ballot\n        // to indicate which proposals it is voting for\n        pub fun vote(proposal: Int) {\n            pre {\n                self.proposals[proposal] != nil: \"Cannot vote for a proposal that doesn't exist\"\n            }\n            self.choices[proposal] = true\n        }\n    }\n\n    // Resource that the Administrator of the vote controls to\n    // initialize the proposals and to pass out ballot resources to voters\n    pub resource Administrator {\n\n        // function to initialize all the proposals for the voting\n        pub fun initializeProposals(_ proposals: [String]) {\n            pre {\n                ApprovalVoting.proposals.length == 0: \"Proposals can only be initialized once\"\n                proposals.length > 0: \"Cannot initialize with no proposals\"\n            }\n            ApprovalVoting.proposals = proposals\n\n            // Set each tally of votes to zero\n            var i = 0\n            while i < proposals.length {\n                ApprovalVoting.votes[i] = 0\n                i = i + 1\n            }\n        }\n\n        // The admin calls this function to create a new Ballo\n        // that can be transferred to another user\n        pub fun issueBallot(): @Ballot {\n            return <-create Ballot()\n        }\n    }\n\n    // A user moves their ballot to this function in the contract where \n    // its votes are tallied and the ballot is destroyed\n    pub fun cast(ballot: @Ballot) {\n        var index = 0\n        // look through the ballot\n        while index < self.proposals.length {\n            if ballot.choices[index]! {\n                // tally the vote if it is approved\n                self.votes[index] = self.votes[index]! + 1\n            }\n            index = index + 1;\n        }\n        // Destroy the ballot because it has been tallied\n        destroy ballot\n    }\n\n    // initializes the contract by setting the proposals and votes to empty \n    // and creating a new Admin resource to put in storage\n    init() {\n        self.proposals = []\n        self.votes = {}\n\n        self.account.save<@Administrator>(<-create Administrator(), to: /storage/VotingAdmin)\n    }\n}\n",
      "language": "swift",
      "name": "ApprovalVoting.cdc"
    }
  ]
}
[/block]
This contract implements a simple voting mechanism where an administrator can initialize it with an array of proposals to vote on by using the `initializeProposals` function. 

```
        // function to initialize all the proposals for the voting
        pub fun initializeProposals(_ proposals: [String]) {
            pre {
                ApprovalVoting.proposals.length == 0: "Proposals can only be initialized once"
                proposals.length > 0: "Cannot initialize with no proposals"
            }
            ApprovalVoting.proposals = proposals
    
            // Set each tally of votes to zero
            var i = 0
            while i < proposals.length {
                ApprovalVoting.votes[i] = 0
                i = i + 1
            }
        }
```

Then they can give `Ballot` resources to other accounts. The other accounts can record their votes on their `Ballot` resource by calling the `vote` function.
```
        pub fun vote(proposal: Int) {
            pre {
                self.proposals[proposal] != nil: "Cannot vote for a proposal that doesn't exist"
            }
            self.choices[proposal] = true
        }
```

After a user has voted, they submit their vote to the central smart contract by calling the `cast` function, which records the votes in the `Ballot` and destroys the used `Ballot`.
```
    // A user moves their ballot to this function in the contract where 
    // its votes are tallied and the ballot is destroyed
    pub fun cast(ballot: @Ballot) {
        var index = 0
        // look through the ballot
        while index < self.proposals.length {
            if ballot.choices[index]! {
                // tally the vote if it is approved
                self.votes[index] = self.votes[index]! + 1
            }
            index = index + 1;
        }
        // Destroy the ballot because it has been tallied
        destroy ballot
    }
```

When the voting time ends, the administrator can read the tallies for each proposal to see if a proposal has received the right number of votes.


# Perform Voting

Performing the common actions in this voting contract only takes three types of transactions.
1. Initialize Proposals
2. Send `Ballot` to a voter
3. Cast Vote

We have a transaction for each step that we provide for you.

[block:callout]
{
  "type": "info",
  "body": "You should have the ApprovalVoting already deployed to account `0x01`.\nOpen Transaction 1 which should have `Transaction1.cdc`\nSubmit the transaction with account `0x01` selected as the only signer."
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "import ApprovalVoting from 0x01\n\n// Transaction1.cdc\n//\n// This transaction allows the administrator of the Voting contract\n// to create new proposals for voting and save them to the smart contract\n\ntransaction {\n    prepare(admin: AuthAccount) {\n        \n        // borrow a reference to the admin Resource\n        let adminRef = admin.borrow<&ApprovalVoting.Administrator>(from: /storage/VotingAdmin)!\n        \n        // Call the initializeProposals function\n        // to create the proposals array as an array of strings\n        adminRef.initializeProposals(\n            [\"Longer Shot Clock\", \"Trampolines instead of hardwood floors\"]\n        )\n\n        log(\"Proposals Initialized!\")\n    }\n\n    post {\n        ApprovalVoting.proposals.length == 2\n    }\n\n}",
      "language": "swift",
      "name": "Transaction1.cdc"
    }
  ]
}
[/block]
This transaction allows the administrator of the Voting contract to create new proposals for voting and save them to the smart contract. They do this by calling the `initializeProposals` function on their stored `Administrator` resource, giving it two new proposals to vote on.
We use the `post` block to ensure that there were two proposals created, like we wished for.

Next, the administrator needs to hand out Ballots to the voters. There isn't an easy `deposit` function this time for them to send a `Ballot` to another account, so how would they do it? This is where multiple-transaction signers can come in handy! 

## Selecting multiple Accounts as Signers

A transaction has access to the private account objects of every account that signed it, so if both the admin and the voter sign a transaction, the admin can directly move a `Ballot` resource object to the other account's storage.

In the Flow playground, you can select multiple accounts to sign a transaction to be able to access the private account objects of both accounts. 

To select multiple signers, you first need to include two arguments in the `prepare` block of your transaction:

`prepare(acct1: AuthAccount, acct2: AuthAccount)`

The playground will give you an error if the number of selected signers is different than the number of arguments to the prepare block. The playground also maps the accounts you select as signers to the arguments in the order that you select them. The first account you select will be the first argument, and the second account you select is the second argument.
[block:callout]
{
  "type": "info",
  "body": "Open Transaction 2 which should have `Transaction2.cdc`.\nSelect account `0x01` as a signer first, then also select account `0x02`.\nSubmit the transaction by clicking the `Send` button"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "import ApprovalVoting from 0x01\n\n// Transaction2.cdc\n//\n// This transaction allows the administrator of the Voting contract\n// to create a new ballot and store it in a voter's account\n// The voter and the administrator have to both sign the transaction\n// so it can access their storage\n\ntransaction {\n    prepare(admin: AuthAccount, voter: AuthAccount) {\n\n        // borrow a reference to the admin Resource\n        let adminRef = admin.borrow<&ApprovalVoting.Administrator>(from: /storage/VotingAdmin)!\n        \n        // create a new Ballot by calling the issueBallot\n        // function of the admin Reference\n        let ballot <- adminRef.issueBallot()\n\n        // store that ballot in the voter's account storage\n        voter.save<@ApprovalVoting.Ballot>(<-ballot, to: /storage/Ballot)\n\n        log(\"Ballot transferred to voter\")\n    }\n}",
      "language": "swift",
      "name": "Transaction2.cdc"
    }
  ]
}
[/block]
This transaction has two signers as `prepare` parameters, so it is able to access both of their private `AuthAccount` objects, and therefore their private account storage. Because of this, we can perform a direct transfer of the `Ballot` by creating it with the admin's `issueBallot` function and then directly store it in the voter's storage by using the `save` function.

Account `0x02` should now have a `Ballot` resource object in its account storage. You can confirm this by opening the account 2 tab and seeing the `Ballot` resource shown in the Resources box.

### Casting a Vote

Now that account `0x02` has a `Ballot` in their storage, they can cast their vote. To do this, they will call the `vote` method on their stored resource, then cast that `Ballot` by passing it to the `cast` function in the main smart contract.
[block:callout]
{
  "type": "info",
  "body": "Open Transaction 3 which should contain `Transaction3.cdc`.\nSelect account `0x02` as the only transaction signer\nClick the `send` button to submit the transaction"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "import ApprovalVoting from 0x01\n\n// Transaction3.cdc\n//\n// This transaction allows a voter to select the votes they would like to make\n// and cast that vote by using the castVote function \n// of the ApprovalVoting smart contract\n\ntransaction {\n    prepare(voter: AuthAccount) {\n        \n        // take the voter's ballot our of storage\n        let ballot <- voter.load<@ApprovalVoting.Ballot>(from: /storage/Ballot)!\n\n        // Vote on the proposal \n        ballot.vote(proposal: 1)\n\n        // Cast the vote by submitting it to the smart contract\n        ApprovalVoting.cast(ballot: <-ballot)\n\n        log(\"Vote cast and tallied\")\n    }\n}\n",
      "language": "swift",
      "name": "Transaction3.cdc"
    }
  ]
}
[/block]
In this transaction, the user votes for one of the proposals, and then moves their Ballot back to the smart contract where the vote is tallied.

### Reading the result of the vote

At any time, anyone could read the current tally of votes by directly reading the fields of the contract. You can use a script to do that, since it does not need to modify storage.
[block:callout]
{
  "type": "info",
  "body": "Open a Script 1 which should contain the code below.\nClick the `execute` button to run the script."
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "import ApprovalVoting from 0x01\n\n// Script1.cdc\n//\n// This script allows anyone to read the tallied votes for each proposal\n//\n\npub fun main() {\n\n    // Access the public fields of the contract to log \n    // the proposal names and vote counts\n\n    log(\"Number of Votes for Proposal 1:\")\n    log(ApprovalVoting.proposals[0])\n    log(ApprovalVoting.votes[0])\n\n    log(\"Number of Votes for Proposal 2:\")\n    log(ApprovalVoting.proposals[1])\n    log(ApprovalVoting.votes[1])\n\n}",
      "language": "swift",
      "name": "Script1.cdc"
    }
  ]
}
[/block]
You should see something like this print:
```
"Number of Votes for Proposal 1:"
"Longer Shot Clock"
0
"Number of Votes for Proposal 2:"
"Trampolines instead of hardwood floors"
1
```

This shows that one vote was cast for proposal 1 and no votes were cast for proposal 2.

## Other Voting possibilities

This contract was a very simple example of voting in Cadence. It clearly couldn't be used for a real-world voting situation, but hopefully you can see what kind of features could be added to it to ensure practicality and security.