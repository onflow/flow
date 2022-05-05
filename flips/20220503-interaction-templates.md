# Interaction Templates

| Status        | Draft      |
:------------ | :----------------------------------------------------  |
| **FLIP #**         | [934](https://github.com/onflow/flow/pull/934) |
| **Author(s)**  | Jeffrey Doyle (jeffrey.doyle@dapperlabs.com) |
| **Sponsor**     | Jeffrey Doyle (jeffrey.doyle@dapperlabs.com)            |
| **Updated**     | 2022-05-03                                         |

## Abstract

This FLIP proposes a new standard for how contract developers, wallets, users, auditors and applications, can create, audit and verify the intent, security and metadata of Flow scripts and transactions, with the goal to improve the understandability and security of authorizing transactions and promote patterns for change resilient composability of applications on Flow.

## Background

### Contract Interactions
A common practice in the development of Flow contracts is to, along with the contracts themselves, also provide a prescribed suite of ways to interact with the contract(s) to accomplish various functionality. Developers who build software that interacts with these contracts can use these interactions in their projects.

For example, alongside Flow's core staking contracts, [a suite of transactions and scripts are provided](https://github.com/onflow/flow-core-contracts/tree/master/transactions/stakingCollection) for developers who wish to interact with Flow's staking ecosystem. Apps like [Flow Port](https://port.onflow.org), block explorers, wallets, among others use these transactions and scripts to perform staking actions, and query state about Flow's staking ecosystem.

This FLIP proposes that a higher order term for transactions and scripts be called _interactions_. Interaction intends to be a catch-all-term for something that "interacts" with the Flow blockchain to accomplish a goal. This term will be used throughout the remainder of the FLIP.

### Cadence Interpretation
Cadence has made incredible progress in furthering safe, secure, clear and approachable smart contract development on Flow.

However, end users, developers and wallets alike can sometimes have difficulty interpreting what a cadence transaction or script might do when executed. For example, if an end user is presented with a malicious transaction to sign using their wallet, they likely will not have the technical ability to read the cadence transaction to determine that it is malicious.

Wallet developers who wish to safeguard their users from malicious transactions can attempt to inference what a transaction might do before prompting it to be signed by a user. The problem with this approach is that predicting all the outcomes of a transaction is difficult, and an implementation today of such a prediction mechanic for all transactions would likely not be robust enough to provide sufficient user protection.

A pattern that has emerged in the Flow community is for contract developers to have their transactions added to various repositories of known safe transactions. The maintainers of these repositories can audit these transactions for safety, and add them to repository if they are determined to be secure. An example of this in practice is the [Portto (Blocto) Flow-Transactions repository](https://github.com/portto/flow-transactions/blob/main/transactions) . When Blocto is asked to sign a transaction, it checks to see if the transaction exists in their Flow-Transactions repository. If it does, it then has greater confidence in that transactions safety, and makes that confidence known to their user though their UI.

### Interaction Metadata
A cadence script or transaction alone does not contain metadata about itself. Often, application and wallet developers may display a _human readable_ title or description about a transaction before requesting it to be signed by a user. They may wish to display a title and description about each argument it needs to collect from the user, or information about how the transaction will impact the user's account and assets. The metadata a developer might consume in their application could take many forms and be used for many purposes.

An application or wallet may also want to know what a transaction will _do_ to protect against performing actions that will produce an undesirable result. For example, an application / wallet may wish to prevent a user from executing a transaction that sends more FLOW tokens from their account than they have, because that transaction will fail. An application / wallet may also want to know what version of an interaction's dependency tree it was created against, since because contracts on Flow are mutable, interaction may change in functionality if their dependencies change.

Currently, applications and wallets are left to come up with their own metadata around the transactions they support. For example, on Flow Port, for each transaction it supports, it has included a title and description for it, along with titles and descriptions of each argument. Contract developers do not yet have a standardized way to provide metadata around their interactions that can be consumable by the applications and wallets that engage with them.

## Objective

At a high level, Interaction Templates attempt to standardize how contract developers, wallets, users, auditors and applications, can create, audit and verify the intent, security and metadata of Flow scripts and transactions.

### Metadata Standardization
By standardizing **Interaction Template Metadata**, the Flow community can start to build applications that can consume metadata, instead of having to come up with it themselves for each interaction they need to support. Since the format of the metadata would be consistent, this enables parties to support a much wider number of interactions, including any number of arbitrary interactions.

Standardizing metadata helps all parties involved involved in the execution of an interaction to better understand what an interaction require and does. For applications, metadata allows them to understand and present the interaction to a user in an intuitive way. For wallets, metadata also helps them understand what a transaction will do to an account, and gives them tools to prevent undesirable outcomes and reject malicious transactions. For users, metadata helps to promote human readable understanding of the impacts of a transaction.

### Interaction Audits
Interaction metadata must be correct in order to be valuable. Metadata that deceives about it's underlying interaction can have unfortunate effects for an end user. To prevent against this, standardizing **Interaction Template Audits** can help all parties that consume and produce Interaction Templates to verify and prove that the template is correct.

Creating a mechanic that allows trusted entities to act as auditors, to produce a proof that vouches for the correctness and safety of a Interaction Template; and a mechanic for verifiers (applications, wallets, etc) to prove an audit was created by an auditor they trust, will improve the overall safety and security of the use of Interaction Templates on Flow.

## Design Proposal

### Interaction Interfaces
Many interactions aim to achieve the same class of action according to how that action must be performed with a certain project. Classes of interactions may be things like: "Transfer", "Mint", "Bid", "List", "Destroy" etc.

For example, different marketplaces may have different mechanics behind how a user may "List" their asset on them, but across all implementations, the action "List" is what they all aim to do.

Interaction Interfaces aim to standardize these actions by defining classes of actions, an a set of arguments that Interactions that implement these actions must consume.

Here is an example of an `InteractionTemplateInterface` for "Fungible Token Transfer":
```javascript
{
    f_type: "InteractionTemplateInterface",
    f_vsn: "1.0.0",
    id: "asadf23234...fas234234", // Unique ID for the data structure.
    data: {
        version: "1.0.1",
        flip: "FLIP-XXXX",
        title: "Fungible Token Transfer",
        arguments: {
            amount: {
                index: 0,
                type: "UFix64"
            },
            to: {
                index: 1,
                type: "Address"
            }
        }
    }
}
```

#### `f_type & f_vsn`
These fields declare the data structure type and data structure version. The version instructs consumers of this data structure how to operate on it. It also allows the data structure to change in future versions.

#### `id`
This is a unique, content derived identifier for this interaction. Each ID is unique for each interaction.
This is created by hashing (SHA-256 hash represented as hex string) (TODO: Define serialization process of the data structure prior to hashing) over the `data` portion of the interaction template.

#### `data.version`
The semver version of the interface.

#### `data.flip`
The FLIP number that this interface was established.

#### `data.title`
The title of the interface as specified in the FLIP where it was established.

#### `data.arguments`
The arguments that an interaction that implements this interface must consume. It specifies the name, index and type of each argument.

In this example, the `InteractionTemplateInterface` defines an interface for Interactions that wish implement it. It defines the arguments the implementing Interaction must have. It also references the FLIP where the `InteractionTemplateInterface` is defined. Interfaces should be defined through the FLIP process, since community consensus should be achieved as the interaction will be used by many parties.

Applications can support executing Interactions that conform to such Interfaces. For example, an application or wallet that displays a users resources may want to display transfer buttons beside each resource a user owns. When the user presses the transfer button, the application can execute the specific Transfer Interaction corresponding to that resources project. Since each of the Transfer Interactions for each project could conform to the same Interface, the application can reuse logic between each, and know how to supply information to each due to the standardized arguments they consume.

### Interaction Templates

Interaction Templates are both metadata and the Cadence for a transaction or script. Interaction templates include:

- Human readable, internationalized messages about the interaction
- The Cadence code to carry out the interaction
- Information about arguments such as internationalized human readable messages and what the arguments act upon.
- The Interface the Interaction conforms to, if applicable.
- Contract dependencies the Interaction engages with, pinned to a version of their dependency tree.

Interaction Templates at their core are just data. The format of the data for this example is JSON, however it could be possible that in the future Interaction Templates could be represented in other formats.

Here is an example Interaction Template for a "Transfer FLOW" transaction:

```javascript
{
    f_type: "InteractionTemplate", // Data Type
    f_vsn: "1.0.0", // Data Type Version
    id: "a2b2d73def...aabc5472d2", // Unique ID for the data structure.
    data: {
        type: "transaction", // "transaction" || "script"
        interface: "asadf23234...fas234234", // ID of InteractionTemplateInterface this conforms to.
        version: "1.23.0", // Semver version of this Interaction
        messages: {
            title: {
                i18n: { // Internationalised (BCP-47) set of human readable messages about the interaction
                    en-US: "Transfer FLOW",
                    fr-FR: "FLOW de transfert",
                    zh-CN: "转移流程",
                }
            },
            description: {
                i18n: { // Internationalised (BCP-47) set of human readable messages about the interaction
                    en-US: "Transfer {amount} FLOW to {to}", // Messages might consume arguments.
                    fr-FR: "Transférez {amount} FLOW à {to}",
                    zh-CN: "将 {amount} FLOW 转移到 {to}"
                }
            }
        },
        cadence: // Cadence code this interaction executes.
        ` 
        import FungibleToken from 0xFUNGIBLETOKENADDRESS
        transaction(amount: UFix64, to: Address) {
            let vault: @FungibleToken.Vault
            prepare(signer: AuthAccount) {
                %%self.vault <- signer
                .borrow<&{FungibleToken.Provider}>(from: /storage/flowTokenVault)!
                .withdraw(amount: amount)%%ount)
            
                self.vault <- FungibleToken.getVault(signer)
            }
            execute {
                getAccount(to)
                .getCapability(/public/flowTokenReceiver)!
                .borrow<&{FungibleToken.Receiver}>()!
                .deposit(from: <-self.vault)
            }
        }
        `,
        dependencies: {
            "0xFUNGIBLETOKENADDRESS": { // Network (mainnet || testnet) dependent locations for 0xFUNGIBLETOKENADDRESS contract.
                mainnet: {
                    address: "0xf233dcee88fe0abe", // Address of the account the contract is located.
                    fq_address: "A.0xf233dcee88fe0abe.FungibleToken", // Fully qualified contract identifier.
                    pin: "asdfasdfasdfasdfasdfasdfsadf123123123123", // Unique identifier of the interactions dependency tree.
                    pin_block_height: 10123123123 // Block height the pin was generated against.
                },
                testnet: {
                    address: "0x9a0766d93b6608b7",
                    fq_address: "A.0x9a0766d93b6608b7.FungibleToken",
                    pin: "asdfasdfasdfasdfasdfasdfsadf123123123123",
                    pin_block_height: 10123123123
                }
            }
        },
        arguments: {
            amount: {
                index: 0,
                messages: { // Set of human readable messages about the argument
                    title: {
                        i18n: { // Internationalised (BCP-47) set of human readable messages about the argument
                            en-US: "Amount",
                            fr-FR: "Montant",
                            zh-CN: "数量",
                        }
                    },
                    description: {
                        i18n: { // Internationalised (BCP-47) set of human readable messages about the argument
                            en-US: "Amount of FLOW token to transfer",
                            fr-FR: "Quantité de token FLOW à transférer",
                            zh-CN: "要转移的 FLOW 代币数量"
                        }
                    }
                },
                balance: "0xFUNGIBLETOKENADDRESS" // The token this argument acts upon.
            },
            to: {
                index: 1,
                messages: { // Set of human readable messages about the argument
                    title: {
                        i18n: { // Internationalised (BCP-47) set of human readable messages about the argument
                            en-US: "To",
                            fr-FR: "Pour",
                            zh-CN: "到",
                        }
                    },
                    description: {
                        i18n: { // Internationalised (BCP-47) set of human readable messages about the argument
                            en-US: "Amount of FLOW token to transfer",
                            fr-FR: "Le compte vers lequel transférer les jetons FLOW",
                            zh-CN: "将 FLOW 代币转移到的帐户"
                        }
                    }
                } 
            }
        }
    }
}
```

#### `f_type & f_vsn`
These fields declare the data structure type and data structure version. The version instructs consumers of this data structure how to operate on it. It also allows the data structure to change in future versions.

#### `id`
This is a unique, content derived identifier for this interaction. Each ID is unique for each interaction.
This is created by hashing (SHA-256 hash represented as hex string) (TODO: Define serialization process of the data structure prior to hashing) over the `data` portion of the interaction template.

#### `data`
The content of the interaction template.

All sub-fields of `data` are to be considered optional. A consumer of an Interaction Template should only chose to use those which supply a sufficient amount of information.

#### `data.type`
Either `transaction` or `script` , defining what type of interaction this corresponds to.

#### `data.interface`
The identifier of the interface this interaction template implements. Not all interaction templates should implement an interface, so this is field optional.

#### `data.version`
The semver version of the interaction.

#### `data.messages`
Internationalized, human readable messages explaining the interaction. For each message, there can be any number of translations provided. Translations should use [BCP 47](https://www.techonthenet.com/js/language_tags.php) language tags. Messages may also consume arguments, which correspond to the arguments supplied to the transaction.

#### `data.cadence`
The cadence code the interaction executes.

#### `data.dependencies`
For each dependency of the interaction (each contract that is imported in the cadence of the interaction), there must be network keyed (mainnet || testnet) dependency information. The information for each network should contain the address of the account where the contract is deployed, the fully qualified identifier for the contract, dependency tree pin and block height the pin was preformed at. The dependency tree pin is performed by the following pseudocode:

```javascript
let contracts_imported_in_interaction_cadence = [...]
let horizen = contracts_imported_in_interaction_cadence
let import_hash = ""

for contract in horizen {
  let contract_code = getContract(contract)
  let contract_hash = hash(contract_code) // SHA-256 hash represented as hex string
  let contract_imports = getContractImports(contract_code)

  import_hash = import_hash + contract_hash
  
  for contract_import in contract_imports {
    horizen.push(contract_import)
  }
}

let pin = hash(import_hash) // SHA-256 hash represented as hex string
```

#### `data.arguments`
Internationalized, human readable messages explaining each of the cadence arguments. For each message, there can be any number of translations provided. Translations should use [BCP 47](https://www.techonthenet.com/js/language_tags.php) language tags.

Arguments may correspond to a balance of a fungible or identifier of a non-fungible token. In this case, the balance or identifier the argument corresponds to should point to it's dependency identifier.

#### Interaction Template Discovery
Contract developers should make available their Interaction Templates to others who wish to use them. They can do this through providing them using a webserver, and have consumers query them. They may also choose to store them on-chain. They may even choose to store them on IPFS. Since Interaction Templates are just data, they could be serialized and stored on any platform.

Contract developers may also choose to store their Interaction Templates behind static identifiers. This allows for the implementation of a Interaction Template to change, while the identifier stays the same. For example, a contract developer may choose to host a webserver and serve an Interaction Template behind a static url:

```
GET interactions.nft-project.com/purchase-nft -> InteractionTemplate
```

Consumers of this Interaction Template could query the static identifier, and always get the most up to date Interaction Template stored there.

### Interaction Audits
An Interaction Audit represents a trusted entity vouching for the correctness and safety of an Interaction Template.

Consumers such as wallets or applications can verify Interaction Template Audits produced by entities they trust. If verified, the consumer can then have greater confidence in the correctness and security of the Interaction Template it corresponds to.

Here is an example of some Interaction Template Audits:

```javascript
{
    f_type: "InteractionTemplateAudit",
    f_vsn: "1.0.0",
    data: {
        id: "a2b2d73def...aabc5472d2", // InteractionTemplate ID
        signer: {
            account: "0xABC123", // TRUSTED_AUDITOR
            key_id: 1,
            signature: "aa5s617dty7a8wer7wer781239"
        }
    }
}
 
{
    f_type: "InteractionTemplateAudit",
    f_vsn: "1.0.0",
    data: {
        id: "a2b2d73def...aabc5472d2", // InteractionTemplate ID
        signer: {
            account: "0xDEF456", // FLOW_TEAM
            key_id: 2,
            signature: "sdfasdf123123asdfasdfasdf234"
        }
    }
}    
```

#### `f_type & f_vsn`
These fields declare the data structure type and data structure version. The version instructs consumers of this data structure how to operate on it. It also allows the data structure to change in future versions.

#### `data.id`
The id of the Interaction Template the audit was produced for.

#### `data.signer`
Information about the entity that produced the audit. The data structure contains an on-chain `address` and `key_id` corresponding to the entity. The `signature` is produced by the private key maintained by the auditor, and can be verified by the public key corresponding to the `key_id` on the account corresponding to `address`.

The signature is produced by signing over the `data.id` identifier of the Interaction Template the audit corresponds to.

### Proposed Workflow

The following diagram illustrates how a Contract Developer, Auditor, Application and Wallet might work together, in conjunction with an Interaction Template and Interaction Template Audit to carry out a "Purchase NFT" transaction.

![ixtemplate-entity-diagram-2](https://user-images.githubusercontent.com/14852344/166585075-5894a27d-a344-4526-9370-0b93445873e7.png)


## Dependencies
Interaction Templates depend on contract developers producing and making available Interaction Templates for their contracts. Interaction Template Interfaces depend on the Flow developer community coming to consensus on interfaces for interactions they implement. Interaction Template Audits depend on trusted entities producing and making available audits of Interaction Templates.

### Template, Interface and Audit Tooling
To make the production of InteractionTemplate, InteractionTemplateInterface and InteractionTemplateAudit simpler for developers, support for generating these could be added to a CLI tool or webapp interface. Making these data structures easily constructible will be essential for promoting this new development pattern.

### Auditor Support
Audits will need to create a mechanic for contract developers to submit their Interaction Templates for review.

Once reviewed, auditors will then make available their Interaction Template Audits in some queryable way.

For example, an auditor may choose to host a web-server which can return audits produced for a given template id:

```
GET audits.trusted-auditor.com/id/{template_id} -> InteractionTemplateAudit
```

### FCL Integration
FCL `exec` and `query` could be modified to accept an Interaction Template, and use the Interaction Template to execute the underlying transaction or script:

EXAMPLE:
```javascript
import transferFLOWTemplate from "./transfer-flow-template.json"

await fcl.exec({
    template: transferFLOWTemplate,
    args: (arg, t) => [arg("1.0", t.UFix64), arg("0xABC123DEF456", t.Address)]
})

```

EXAMPLE:
```javascript
import { getFLOWBalanceTemplate } from "@onflow/flow-templates"

await fcl.query({
    template: getFLOWBalanceTemplate,
    args: (arg, t) => [arg("0xABC123DEF456", t.Address)]
})

```

Instead, if the templates are made available on an external location, developers may chose to request them when needed by querying for them from their location:

EXAMPLE:
```javascript
await fcl.exec({
    template: "DNS:transfer-flow.interactions.onflow.org",
    args: (arg, t) => [arg("1.0", t.UFix64), arg("0xABC123DEF456", t.Address)]
})
```

EXAMPLE:
```javascript
await fcl.query({
    template: "IPFS:64EC88CA00B268E5BA1A35678A1B5316D212F4F366B2477232534A8AECA37F3C",
    args: (arg, t) => [arg("0xABC123DEF456", t.Address)]
})
```

Since a URL can remain static, while the Interaction Template it corresponds to dynamic and able to change, this allows developers to always request the most up to date implementation of an interaction - enabling a mechanic for contract developers to modify their contracts and interactions while helping to prevent any downstream breaking changes.

FCL will also need to be modified to send the Interaction Template, if provided, to the wallet as part of a transaction voucher during signing.

### Wallet Integration
Wallets who chose to support Interaction Templates will need to modify their authorization service to consume an Interaction Template from the signable voucher sent to it. Wallets will then need to query from the auditors they trust for Interaction Template Audits for this template, and use those audits to gain confidence in the security and correctness of the Interaction Template.


## Prior Art
- [Portto (Blocto) Flow-Transactions repository](https://github.com/portto/flow-transactions/blob/main/transactions)
- [Flow Staking Ecosystem transactions and scripts](https://github.com/onflow/flow-core-contracts/tree/master/transactions/stakingCollection)

## Questions and Discussion Topics
- Do viable alternatives to this proposal exist?
- Could the emergence of use of common Cadence contract & resource interfaces across projects reduce the ecosystems dependency on this solution?

## FLIP TODOs:
- Create JSON Schema for `InteractionTemplate` , `InteractionTemplateInterface` and `InteractionTemplateAudit`
- Define serialization process prior to hashing when generating identifiers for `InteractionTemplate` and `InteractionTemplateInterface`.