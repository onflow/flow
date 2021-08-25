# FCL Transaction Payer Service

| Status        | Proposed                                             |
:-------------- |:---------------------------------------------------- |
| **FLIP #**    | [NNN](https://github.com/onflow/flow/pull/NNN) (update when you have PR #)|
| **Author(s)** | Jeffrey Doyle (jeffrey.doyle@dapperlabs.com),        |
| **Sponsor**   |                                                      |
| **Updated**   | 2020-08-24                                           |

## Objective

FCL provides a mechanism for a transactions fees to be payed by an account
other than the proposer or any of the authorizers of a transaction.

A transaction payer service would be a service that facilitates signing as the 
payer for transactions that it receives.

## Motivation

One of the features of Flow is that transaction fees can be payed by an account
seperate from the authorizers of that transaction. Applications that wish to 
provide "free" transactions for their users could opt to pay for their users 
transactions themselves. They would do this by produdcing a signature for the 
transaction as the payer for that transaction. Upon receiving this transaction, 
the Flow network would then deduct transaction fees from the payer, not any of 
the authorizers.

Some FCL compatible Wallets choose to "swap out" the payer of a transaction they're
requested to sign with a Flow account that the wallet controls (in the case that the 
user's Flow account is specified as the transactions payer) to provide "free" transactions
for their users. While this makes for a desireable user experience for those that use
Wallets with this feature, applications do not get the guarantee that _all_ of their
users will get this user experience. This is because users are able to use whichever FCL
compatible wallet they desire to the FCL compatible applications they use, and not
all FCL compatible wallets will strictly choose to provide this feature.

Applications that wish to guarantee that their users are able to submit transactions
without having to pay for them will then have to always pay for them themselves. These
applications would then have to build a "Transaction Fee Payer Service" that is able
to receive a transaction signable and then produce a signature for it.

We imagine that there is a potential business model here. A transaction fee payer
service (or: "TPaaS", "Transaction Payer as a Service") could be a webservice that
works with applications to provide payer signatures for the users of those applications.
Applications, instead of having to each individually build their own transaction
fee payer service, could depend on a this businesses implementation. The business could charge
a fee to the applications that use it for their ability to use this service.

## User Benefit

Most consumer applications that we interact with on a daily basis charge us nothing.
As internet users, we're freely able to interact for our favourite social media apps,
interact with our favourite websites and simply do as we please without paying for anything.
However, with blockchain applications, each one of those interactions would likely be
transaction, and with that, transaction fees would have to be paid.

Users have been conditioned to expect things for free. As such, applications that wish
to provide the best user experiences will likely choose to allow their users to execute
transactions without them having to pay. 

This Transaction Fee Payer Service will enable more applications to be able to provide
this higher level of user experience. Creating value for the application, the users of
that application, and the potential for the tranaction fee payer service to capture some of that
value as revenue.

## Design Proposal

> Disclaimer: The Following is an example implementation for what _might_ work. All possible solutions are not limited to just the following. You're completely free to approach the problem however you choose, even if it differs from the thoughts below.

When creating a transasction to be sent to the blockchain, FCL expects authorization functions
for each of the roles for that transaction to be specified.

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

(Read More about Authorization Functions: https://github.com/onflow/fcl-js/blob/master/packages/fcl/src/wallet-provider-spec/authorization-function.md)

The implementation of this Authorization Function is what FCL uses to gather a
signature from the Current User of the applcation for each of the roles of the
transaction (Proposer, Payer and Authorizer).

A Transaction Fee Payer Service would need to make available an Authorization Function
that applications could use in place of `fcl.currentUser().authorization` (or whatever other
authorization function they use).

The applicationss transaction code might then look something like:

```javascript
// IN CLIENT APPLICATIONS FRONTEND

import * as fcl from "@onflow/fcl"
import { TPaaSAuthorizationFunction } from "@YourTPaaS/TPaaS-client"

const configuredTPasSAuthzFn = TPaaSAuthorizationFunction({ 
    ... TPaaS Configuration ... 
    appResolveAccountURL: "https://api.myawesomedapp.com/tpaas/resolveaccount" // Example
    appSigningURL: "https://api.myawesomedapp.com/tpaas/sign" // Example
})

const tx = await fcl.send([
    fcl.transaction`... Cadence Code ...`,
    fcl.authorizers([fcl.currentUser().authorization]),
    fcl.proposer(fcl.currentUser().authorization),
    fcl.payer(configuredTPasSAuthzFn)
]).then(fcl.decode)
```

The implementation of `TPaaSAuthorizationFunction` will need to conform to how FCL expects
Authorization Functions to work. (Read More about Authorization Functions: https://github.com/onflow/fcl-js/blob/master/packages/fcl/src/wallet-provider-spec/authorization-function.md) 

The implementation of the `TPaaSAuthorizationFunction` might look something like:

```javascript
// IN "@YourTPaaS/TPaaS-client"

export const TPaaSAuthorizationFunction = ({ appResolveAccountURL, appSigningURL }) => async (account) => {

  /** 
    Perform a network call to resolve the FCL "account" data structure. This network call will likely be to the client applcation's backend, which would likely attach some secret authentication information (API Key etc) to the request before sending it off to the TPaaS API.
    
    The call graph might look something like:

    Client App TPaaSAuthorizationFunction =POST=> Client Backend =POST=> TPaaS API =POST RESPONSE=> Client Backend  =POST RESPONSE=> TPaaSAuthorizationFunction

    The TPaaS API would need to return back an account data structure containing:
    (See: https://github.com/onflow/fcl-js/blob/master/packages/fcl/src/wallet-provider-spec/authorization-function.md#how-to-create-an-authorization-function for more information on the purpose of each field)
    {
        ...account,
        tempId: tpaasSessionID
        addr: tpaasSignerAddress
        keyId: tpaasSignerKeyID
    }
  **/
  const resolvedAccount = await fetch(appResolveAccountURL, { 
    method: "POST", 
    headers: { "Content-Type": "application/json" }
    body: JSON.stringify(account) 
  }).then(res => res.json())

  // The authorization function returns an FCL account data structure with more fields filled in.
  return {
    ...resolvedAccount,
    signingFunction: async signable => {
      /** 
        Perform a network call to resolve the transaction signature. This network call will likely be to the client applcation's backend, which would likely attach some secret authentication information (API Key etc) to the request before sending it off to the TPaaS API.
        
        The call graph might look something like:

        Client App TPaaSAuthorizationFunction =POST=> Client Backend =POST=> TPaaS API =POST RESPONSE=> Client Backend  =POST RESPONSE=> TPaaSAuthorizationFunction

        The TPaaS API would need to return back a composite signature data structure containing:
        (See: https://github.com/onflow/fcl-js/blob/master/packages/fcl/src/wallet-provider-spec/authorization-function.md#how-to-create-an-authorization-function for more information on the purpose of each field)
        {
            addr: tpaasSignerAddress
            keyId: tpaasSignerKeyID
            signature: tpaasSignature // 
        }
      **/
      return await fetch(appSigningURL, { 
        method: "POST", 
        headers: { "Content-Type": "application/json" }
        body: JSON.stringify(signable) 
      }).then(res => res.json())
    }
  }
}
```

The application would need to expose a API/webservice with POST routes for the 
`appResolveAccountURL` and `appSigningURL` URLs the `TPaaSAuthorizationFunction`
would use. The application would need to attach an API Key / Secret to the request
it would then forward to your `TPaaS` 

The Client Application's backend might look something like:

```javascript
// IN CLIENT APPLICATION BACKEND

var express = require('express')
var app = express()

app.post("/tpaas/resolveaccount", (req, res) => {
  const account = req.body
  const secretAPIKey = process.env.TPAAS_SECRET_API_KEY

  const resolvedAccount = await fetch("https://api.yourtpaas.com/resolveaccount", {
    method: "POST", 
    headers: { 
        "Content-Type": "application/json"
        "API_KEY": secretAPIKey
    }
    body: JSON.stringify(account) 
  })

  res.send(resolvedAccount)
})

app.post("/tpaas/sign", (req, res) => {
  const signable = req.body
  const secretAPIKey = process.env.TPAAS_SECRET_API_KEY
  
  const compositeSignature = await fetch("https://api.yourtpaas.com/sign", {
    method: "POST", 
    headers: { 
        "Content-Type": "application/json"
        "API_KEY": secretAPIKey
    }
    body: JSON.stringify(signable) 
  })

  res.send(compositeSignature)
})
```

Your webservice would be responsible for implementing both pieces of functionality,
the ability to resolve an account and produce a composite signature.

> To re-iterate, this is just an example implementation of what _might_ work. Your
implementation may vary extensively.

Your TPaaS might choose to charge the client application a fee per transaction it signs. Because
in this example implementation it attaches a secret api key to each request to your TPaaS,
the TPaaS could record how many times each time it has done work for each client and bill accordingly.

### Drawbacks

Since the TPaaS would be responsible for paying for transactions, it should have suffient
security mechanisms in place to safeguard itself. Rate limiting, requiring 
API keys to be sent with each request and other security mechanisms ought to be explored.

### Dependencies

The Transaction Fee Payer Service would depend on FCL. Should there be changes to any aspect
of FCL that may impact the TPaaS, the service would have to be updated accordingly.

### Engineering Impact

This is a large project. While a MVP could be built by an engineering team, a full solution
would likely require multiple participants and skillsets from product, engineering and design.

### Tutorials and Examples

* If design changes existing API or creates new ones, the design owner should create 
end-to-end examples (ideally, a tutorial) which reflects how new feature will be used. 
Some things to consider related to the tutorial:
    - It should show the usage of the new feature in an end to end example 
    (i.e. from the browser to the execution node). 
    Many new features have unexpected effects in parts far away from the place of 
    change that can be found by running through an end-to-end example.
    - This should be written as if it is documentation of the new feature, 
    i.e., consumable by a user, not a Flow contributor. 
    - The code does not need to work (since the feature is not implemented yet) 
    but the expectation is that the code does work before the feature can be merged. 

### Compatibility

This project would need to maintain compatible with latest versions of FCL.

## Questions and Discussion Topics

- Are the other approches to desiging a FPaaS that differ from the example provided in this FLIP?