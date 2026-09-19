# FCL Transaction Payer Service

| Status        | Proposed                                             |
:-------------- |:---------------------------------------------------- |
| **FLIP #**    | [612](https://github.com/onflow/flow/pull/612)       |
| **Author(s)** | Jeffrey Doyle (jeffrey.doyle@dapperlabs.com),        |
| **Sponsor**   |                                                      |
| **Updated**   | 2020-09-17                                           |

## Objective

There is a need for the development of a suite of tools that will collectively
act as a Transaction Fee Payer Service for use by applications built on Flow.

Technically, this suite of tools will facilitate signing as the payer of
transactions initiated by application's users with an account controlled by the
application itself.

From a functional perspective, the service would enable users of applications
that employ these tools to be able to execute transactions, and thereby interact
with Flow, without incurring the burden of having to pay for their transaction
fees themselves. This user experience is valuable for many reasons, including
enabling users to engage with applications while not having _any_ FLOW in their
account, or having to worry about having _enough_ FLOW to execute the
transactions they wish to execute.

A Transaction Fee Payer Service would exist as a reusable codebase / set of
packages & tools that could be used by the applications that desire it.

## Motivation

<<<<<<< HEAD
One of the many features of Flow is that transaction fees can be paid by an
account separate from the authorizers of that transaction. With this feature,
applications that wish to provide "free" transactions for their users could opt
to pay for their users' transactions themselves. They would do this by producing
a signature for the transaction as the payer of that transaction. Upon receiving
this transaction, the Flow network would then deduct transaction fees from the
payer, not any of the authorizers.

For a user to pay their transaction fees themselves, that user would have to
have FLOW in their account. This can lead to a situation where a first-time Flow
user attempts to engage with an application that does not employ a Transaction
Payer Service, and they would first need to acquire FLOW before engaging with
that application. This is an undesirable user experience, as it significantly
raises the friction required of first time Flow users to engage with these
applications. Many users who are unfamiliar with blockchain applications will
not understand or sympathize with this requirement. Thus it is crucial that
applications who wish to provide a low friction experience for their users to
pay transaction fees on their behalf.

Some FCL compatible wallets choose to act as the payer of the transactions their
users sign. They do this by swapping out their users account with an account of
their own, if their users are specified as the payer of a transaction. This
allows wallets with this feature to provide "free" transactions for their users.
While this makes for a desirable user experience for those that use wallets with
this feature, applications do not get the guarantee that _all_ of their users
will get this user experience. This is because users are able to use whichever
FCL compatible wallet they desire with the FCL compatible applications they use,
and not all FCL compatible wallets will strictly choose to provide this feature.

Applications that wish to guarantee their users can submit transactions without
having to pay transaction fees for them will then have to pay those fees
themselves. To pay transaction fees, it's expected that applications would need
to build a Transaction Payer Service that is able to receive a transaction
signable and then produce a signature for it.

A re-usable Transaction Payer Service would exist as project / set of packages
and tools that applications could use instead of having to build an
implementation of them themselves. These re-usable components would lower the
overall complexity and effort required of a developer who wishes that their
application provide "free" transactions for their users.
=======
One of the many features of Flow is that transaction fees can be paid by an account
separate from the authorizers of that transaction. With this feature, applications that wish to 
provide "free" transactions for their users could opt to pay for their users' 
transactions themselves. They would do this by producing a signature for the 
transaction as the payer of that transaction. Upon receiving this transaction, 
the Flow network would then deduct transaction fees from the payer, not any of 
the authorizers.

For a user to pay their transaction fees themselves, that user would have to have FLOW
in their account. This can lead to a situation where a first-time Flow user attempts to engage with an application
that does not employ a Transaction Payer Service, and they would first need to acquire FLOW before engaging with
that application. This is an undesireable user experience, as it significantly raises
the friction required of first time Flow users to engage with these applications. Many users who are unfamiliar 
with blockchain applications will not understand or empathize with this requirement. Thus it is crucial
that applications who wish to provide a low friction experience for their users pay transaction fees on
their behalf.

Some FCL compatible wallets choose to act as the payer of the transactions their users
sign. They do this by swapping out their users account with an account of their own,
if their users are specified as the payer of a transaction. This allows wallets with
this feature to provide "free" transactions for their users. While this makes for a 
desirable user experience for those that use wallets with this feature, applications do not 
get the guarantee that _all_ of their users will get this user experience. 
This is because users are able to use whichever FCL compatible wallet they desire with the FCL 
compatible applications they use, and not all FCL compatible wallets will strictly choose to provide this feature.

Applications that wish to guarantee their users can submit transactions
without having to pay transaction fees for them will then have to pay those fees themselves. 
To pay transaction fees, it's expected that applications would need to build a Transaction Payer Service that is able
to receive a transaction signable and then produce a signature for it.

A re-usable Transaction Payer Service would exist as project / set of packages and tools that applications could use
instead of having to build an implementation of them themselves. These re-usable components
would lower the overall complexity and effort required of a developer who wishes that 
their application provide "free" transactions for their users.
>>>>>>> e7d67effea7ddbcbb22924f1f6b2c1ac9d6eef5b

## User Benefit

Most consumer applications that we interact with on a daily basis charge us
nothing. As internet users, we're freely able to interact for our favorite
social media apps, interact with our favorite websites and simply do as we
please without paying for anything. However, with blockchain applications, each
one of those interactions would likely be transaction, and with that,
transaction fees would have to be paid.

Users have been conditioned to expect things for free. As such, applications
that wish to provide the best user experiences will likely choose to allow their
users to execute transactions without them having to pay. 

This Transaction Fee Payer Service will enable more applications to offer a top
of the line user experience, where users can easily and seamlessly engage in any
action without the friction of having to pay for any transaction fees.

## Design Proposal

> Disclaimer: The following is an example implementation for what _might_ work.
> All possible solutions are not limited to just the following. You're
> completely free and encouraged to approach the problem however you choose,
> even if it differs extensively from the thoughts below.

When creating a transaction to be sent to the blockchain, FCL expects
authorization functions for each of the roles for that transaction to be
specified.

For example, when specifying to FCL that the "Current User" of the application
should be an Authorizer, the Proposer and the Payer of a transaction, it might
look something like:

```javascript
// IN CLIENT APPLICATIONS FRONTEND

import * as fcl from "@onflow/fcl"

const tx = await fcl.send([
    fcl.transaction`... Cadence Code ...`,
    fcl.authorizers([fcl.currentUser().authorization]),
    fcl.proposer(fcl.currentUser().authorization),
    fcl.payer(fcl.currentUser().authorization)
]).then(fcl.decode)
```

The line `fcl.currentUser().authorization` is an "Authorization Function". 

(Read More about Authorization Functions:
https://github.com/onflow/fcl-js/blob/master/packages/fcl/src/wallet-provider-spec/authorization-function.md)

The implementation of this Authorization Function is what FCL uses to gather a
signature from the Current User of the application for each of the roles of the
transaction (Proposer, Payer and Authorizer).

A Transaction Fee Payer Service would need to make available an Authorization
Function that applications could use in place of
`fcl.currentUser().authorization` (or whatever other authorization function they
use).

The applications transaction code might then look something like:

```javascript
// IN CLIENT APPLICATIONS FRONTEND

// Note: "TPS" <=> "Transaction Payer Service"

import * as fcl from "@onflow/fcl"
import { TPSAuthorizationFunction } from "@TPS/TPS-client"

const configuredTPSAuthzFn = TPSAuthorizationFunction({ 
    ... TPS Configuration ... 
    resolveAccountURL: "https://api.myawesomedapp.com/tps/resolveaccount" // Example
    signingURL: "https://api.myawesomedapp.com/tps/sign" // Example
})

const tx = await fcl.send([
    fcl.transaction`... Cadence Code ...`,
    fcl.authorizers([fcl.currentUser().authorization]),
    fcl.proposer(fcl.currentUser().authorization),
    fcl.payer(configuredTPSAuthzFn)
]).then(fcl.decode)
```

The implementation of `TPSAuthorizationFunction` will need to conform to how FCL
expects Authorization Functions to work. (Read More about Authorization
Functions:
https://github.com/onflow/fcl-js/blob/master/packages/fcl/src/wallet-provider-spec/authorization-function.md)


The implementation of the `TPSAuthorizationFunction` might look something like:

```javascript
// IN "@TPS/TPS-client"

export const TPSAuthorizationFunction = ({ resolveAccountURL, signingURL }) => async (account) => {

  /** 
    Perform a network call to resolve the FCL "account" data structure. This network call will likely be to the client application's backend.
    
    The call graph might look something like:

    Client App TPSAuthorizationFunction =POST=> Client Backend =POST Response=> Client App TPSAuthorizationFunction

    The TPS API would need to return back an account data structure containing:
    (See: https://github.com/onflow/fcl-js/blob/master/packages/fcl/src/wallet-provider-spec/authorization-function.md#how-to-create-an-authorization-function for more information on the purpose of each field)
    {
        ...account,
        tempId: tpsTempID
        addr: tpsPayerAddress
        keyId: tpsPayerKeyID
    }
  **/
  const resolvedAccount = await fetch(resolveAccountURL, { 
    method: "POST", 
    headers: { "Content-Type": "application/json" }
    body: JSON.stringify(account) 
  }).then(res => res.json())

  // The authorization function returns an FCL account data structure with more fields filled in.
  return {
    ...resolvedAccount,
    signingFunction: async signable => {
      /** 
        Perform a network call to resolve the transaction signature. This network call will likely be to the client application's backend.
        
        The call graph might look something like:

        Client App TPSAuthorizationFunction =POST=> Client Backend =POST Response=> Client App TPSAuthorizationFunction

        The TPS API would need to return back a composite signature data structure containing:
        (See: https://github.com/onflow/fcl-js/blob/master/packages/fcl/src/wallet-provider-spec/authorization-function.md#how-to-create-an-authorization-function for more information on the purpose of each field)
        {
            addr: tpsSignerAddress
            keyId: tpsSignerKeyID
            signature: tpsSignature 
        }
      **/
      return await fetch(signingURL, { 
        method: "POST", 
        headers: { "Content-Type": "application/json" }
        body: JSON.stringify(signable) 
      }).then(res => res.json())
    }
  }
}
```

The application would need to expose an API/webservice with POST routes for the
`resolveAccountURL` and `signingURL` URLs the `TPSAuthorizationFunction` would
use. The application would need to perform the actions of resolving the account,
or signing the signable for those routes respectively.

The Client Application's backend might look something like:

```javascript
// IN CLIENT APPLICATION BACKEND
import { TPSAccountResolver, TPSSigner } from "@TPS/TPS-server"

var express = require('express')
var app = express()

const TPSConfiguration = {
  accounts: [
    {
      address: "0xABC123",
      privateKey: process.env.ACCOUNT_ABC123_PRIVATE_KEY_HEX,
      keyIndex: 0
    }, 
    {
      address: "0x456DEF",
      privateKey: process.env.ACCOUNT_456DEF_PRIVATE_KEY_HEX,
      keyIndex: 0
    }
  ],
}

const configuredTPSAccountResolver = await TPSAccountResolver(TPSConfiguration)
const configuredTPSSigner = await TPSSigner(TPSConfiguration)

app.post("/tps/resolveaccount", (req, res) => {
  const account = req.body

  const resolvedAccount = await configuredTPSAccountResolver(account)

  res.send(resolvedAccount)
})

app.post("/tps/sign", (req, res) => {
  const signable = req.body
  
  const compositeSignature = await configuredTPSSigner(signable)

  res.send(compositeSignature)
})
```

The applications backend might consume a package, `"@TPS/TPS-server"`, which
would ideally expose some helpful utilities for handling the logic behind
resolving an account and producing a payer signature. The above code snippet
uses these potential utilities.

The implementation of these utilities, `TPSAccountResolver` and `TPSSigner`
might look like:

```javascript
// IN @TPS/TPS-server

import {WalletUtils} from "@onflow/fcl"

export const TPSAccountResolver = ({ accounts }) => (account) => {

  // Select an available account address from those provided in the configuration.
  const tpsPayerAddress = selectAvailableAddress(accounts)

  // Select the Key ID of thekey on the Payer account that will be used during signing.
  const tpsPayerKeyID = selectKeyID(tpsPayerAddress, accounts)

  // Produce a unique identifier for this payer address and key id combination.
  const tpsTempID = `${tpsPayerAddress}-${tpsPayerKeyID}`

  return ({
    ...account,
    tempId: tpsTempID
    addr: tpsPayerAddress
    keyId: tpsPayerKeyID
  })
}

export const TPSSigner = ({ accounts }) => (signable) => {
  // Get the address specified in the signable as the payer.
  const signablePayerAddress = signable.voucher.payer
  
  // Get the account specified in the TPSSigner configuration that corresponds
  // to the signablePayerAddress.
  const account = accounts.find(a => a.address === signablePayerAddress)

  // Throw an error if the signablePayerAddress is not found in the TPSSigner configuration
  if (!account) {
    throw new Error(`TPSSigner Error: Could not find account for signablePayerAddress=${signablePayerAddress}`)
  }

  // For security, ensure that `signablePayerAddress` is not specified as a transaction authorizer or proposer.
  if (signable.voucher.authorizers.includes(signablePayerAddress)) {
    throw new Error(
      `TPSSigner Error: signablePayerAddress=${signablePayerAddress} specified as a transaction authorizer in transaction signable.`
    )
  }

  if (signable.voucher.proposalKey.address === signablePayerAddress) {
    throw new Error(
      `TPSSigner Error: signablePayerAddress=${signablePayerAddress} specified as the transaction proposer in transaction signable.`
    )
  }

  // Encode the signable using WalletUtils
  const encodedMessage = WalletUtils.encodeMessageFromSignable(signable, signablePayerAddress)

  // Prodce a signature, as a hex string
  const signature = toHexString(YourFavouriteCryptoUtility.sign(encodedMessage, account.privateKey))

  return signature
}
```

The user of the TPS utility would be responsible for maintaining that the
accounts they specify into `TPSAccountResolver` and `TPSSigner` as configuration
have a sufficient FLOW balance at all times to pay for transactions they sign
for.

<<<<<<< HEAD
> To re-iterate, this is just an example implementation of what _might_ work.
Your implementation may vary extensively.

### Drawbacks

Since the TPS would be responsible for paying for transactions, it should have
sufficient security mechanisms in place to safeguard itself.
=======
> To re-iterate, this is just an example implementation of what _might_ work. Your
implementation may vary significantly.

### Drawbacks

Since the TPS (Transaction Payer Service) would be responsible for paying for transactions, it should have suffient
security mechanisms in place to safeguard itself.
>>>>>>> e7d67effea7ddbcbb22924f1f6b2c1ac9d6eef5b

Since transaction fees can be dynamic, increasing depending on the amount of work
the network would need to perform for each transaction, the payer service should
be smart enough to take this into consideration as needed.

### Dependencies

The Transaction Fee Payer Service would depend on FCL. Should there be changes
to any aspect of FCL that may impact the TPS, the service would have to be
updated accordingly.

The Flow team communicates out all breaking changes to the community
consistently and with sufficient time to make any updates.

### Engineering Impact

This is a rather large project. While an MVP could be built by an engineering
team, a full solution would likely require multiple participants and skillsets.

### Compatibility

This project would need to maintain compatibility with latest versions of FCL.

## Questions and Discussion Topics

- Are the other approaches to designing a TPS that differ from the example
  provided in this FLIP?
