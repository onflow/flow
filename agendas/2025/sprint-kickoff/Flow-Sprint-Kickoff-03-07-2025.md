# Overview

 ### Team Wins 🎉
 - First rolling upgrade with zero-downtime protocol state upgrade completed successfully on testnet
 - Completed implementation of chunk data packs & execution data to Pebble DB migration & automated pruning (testing in progress)
 - Completed passkey technical design FLIP

--- 

### Mainnet Uptime - Last 14 days (02/20/25 to 03/06/25) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |      0%         |
| Block Finalization      | 99.9%   |    100%       |      0%         |
| Transaction Execution   | 99.9%   |    100%       |      0%         |
| Block Sealing           | 99.9%   |    100%       |      0%         |
| Access API Liveness     | 99.9%   |    100%       |      0%         |

YTD SLA 99.76%

#### P0 or P1 Incidents
None

---

### FLIPs Tracker \[Vishal]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 9 |    7      |       0       |       8        |        **24**        |
| Proposed    | 1  |    2     |       3       |       0          |        **6**          |
| Accepted    | 2  |    1     |       2       |       2          |        **7**          |
| Rejected    | 0  |    1     |       1       |       0          |        **2**         |
| Implemented | 3  |    5     |       1       |       0          |        **9**        |
| Released    | 4  |    34     |       7        |       6          |        **51**          |
| Total       | **19** |    **50**   |       **14**       |       **16**         |        **99**         |

- No changes since last sprint.
  
### Key Release Dates & Breaking Changes
* Rolling upgrade
  - Testnet: ✔️
  - Mainnet: ~Week of 17th March

* EFM Recovery testing
  - Testnet: Ongoing. Will be complete by 4 PM Pacific, 7th March.
---


# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]
Q1 2025 Cycle Objective(s):

[Cadence Language](https://github.com/onflow/cadence/issues/3726)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6881)

**Done last sprint**

**Cadence Language**

- [Cadence compiler milestone 2](https://github.com/onflow/cadence/issues/3742)
    - [Compile force expression](https://github.com/onflow/cadence/pull/3803)
    - [Update fungible token tests](https://github.com/onflow/cadence/pull/3802)
    - [Compile transaction pre/post conditions](https://github.com/onflow/cadence/pull/3801)
    - [Compile remaining unary operators](https://github.com/onflow/cadence/pull/3800)
    - [Produce an un-encoded program by the compiler](https://github.com/onflow/cadence/pull/3798)
    - [Compile bitwise operators, add bitwise instructions](https://github.com/onflow/cadence/pull/3797)
    - [Compile boolean operators](https://github.com/onflow/cadence/pull/3796)
    - [Compile conditional expression](https://github.com/onflow/cadence/pull/3795)
    - [Compile for-loops](https://github.com/onflow/cadence/pull/3793)
    - [Compile fixed-point literals and add UFix64 to VM](https://github.com/onflow/cadence/pull/3791)
    - [Implement scoping](https://github.com/onflow/cadence/pull/3789)
    - [Fix break in switch](https://github.com/onflow/cadence/pull/3787)
    - [Make existing interpreter values reusable in VM](https://github.com/onflow/cadence/issues/3693)
        - [Decouple interpreter values from interpreter Part 5](https://github.com/onflow/cadence/pull/3792)
        - [Make the number interfaces in the value-package generic](https://github.com/onflow/cadence/pull/3790)
        - [Decouple interpreter values from interpreter Part 4](https://github.com/onflow/cadence/pull/3766)
    - Testing
        - [Add compiler tests for default functions and function conditions](https://github.com/onflow/cadence/pull/3788)
        - [Re-enable skipped tests](https://github.com/onflow/cadence/pull/3794)
        - [Test compilation of currently supported features](https://github.com/onflow/cadence/issues/3773)
- machine readable language specification
    - [fix syntax specification for import declaration](https://github.com/onflow/cadence/pull/3810)
    - [address latest comments](https://github.com/onflow/cadence/pull/3760)
- bugfix
    - [Fix TestHashable](https://github.com/onflow/cadence/pull/3807)
- tech-debt removal
    - [Re-enable skipped entitlement mapping tests](https://github.com/onflow/cadence/pull/3806)
- automation
    - [Fix get-contracts workflow](https://github.com/onflow/cadence/pull/3809)

**Cadence Execution**
- [Migration of Badger to Pebble DB](https://github.com/onflow/flow-go/issues/6515)
    - [Add logs to pebble db ops](https://github.com/onflow/flow-go/pull/7113)
    - [Chunk data pack pruning config fix](https://github.com/onflow/flow-go/pull/7112)
    - [Prevent overwriting own receipts index for the same block.](https://github.com/onflow/flow-go/pull/7107)
    - [Improve chunk data pack pruner logging and metrics](https://github.com/onflow/flow-go/pull/7086)
    - [Refactor storage version beacon](https://github.com/onflow/flow-go/pull/7085)
    - [Refactor computation result status storage](https://github.com/onflow/flow-go/pull/7084)
    - [Using flags to roll out database operation changes for Verification nodes](https://github.com/onflow/flow-go/pull/6948)
    - [Refactor Chunk Locators to badger updates](https://github.com/onflow/flow-go/pull/6947)
    - [Add Engine for pruning chunk data pack](https://github.com/onflow/flow-go/pull/6946)
    - [Refactor saving execution results](https://github.com/onflow/flow-go/pull/6906)
    - Util fixes
        - [Refactor read chunk data pack in read-badger command](https://github.com/onflow/flow-go/pull/7090)
- Tech-debt removal:
    - Atree [Refactor and reduce technical debt](https://github.com/onflow/atree/issues/464)
        - [Simplify slab operations and reduce risks](https://github.com/onflow/atree/pull/534)
        - [Use go1.21 clear() instead of loops to clear elements](https://github.com/onflow/atree/pull/533)
        - [Use go1.21 slices package in map](https://github.com/onflow/atree/pull/532)
        - [Use go1.21 slices package in array](https://github.com/onflow/atree/pull/531)
        - [Refactor ArrayMetaDataSlab.SplitChildSlab() to improve readability](https://github.com/onflow/atree/pull/530)
        - [Refactor to simplify rebalancing child slabs in map](https://github.com/onflow/atree/pull/528)
        - [Refactor to simplify merging child slabs in map](https://github.com/onflow/atree/pull/527)
        - [Refactor to simplify rebalancing child slabs in array](https://github.com/onflow/atree/pull/526)
        - [Refactor to simplify merging child slabs in array](https://github.com/onflow/atree/pull/525)
        - [Use go1.21 slices package functions in tests](https://github.com/onflow/atree/pull/524)
        - [Simplify and lint test code to improve maintainability and fix flakey test](https://github.com/onflow/atree/pull/522)
        - [Refactor non-test code to use range loops](https://github.com/onflow/atree/pull/521)
        - [Improve consistency of variable names in map tests](https://github.com/onflow/atree/pull/520)
        - [Refactor map tests & validation to use range loops](https://github.com/onflow/atree/pull/519)
        - [Improve consistency of variable names in array tests](https://github.com/onflow/atree/pull/516)
        - [Refactor array test & validation code to use range loops](https://github.com/onflow/atree/pull/515) 
- Improvements
    - [Collection node: remove unused db dependencies](https://github.com/onflow/flow-go/pull/7055)
    - Util [Refactor util program diff-states cmd](https://github.com/onflow/flow-go/pull/7016)

**This sprint**

- Cadence Language
  - Bugfix
  - Continue work on the [Cadence compiler POC - Phase 2](https://github.com/onflow/cadence/issues/3692)

- Cadence Execution
  - Continue new Trie research
  - Complete [Atree - Refactor and reduce technical debt](https://github.com/onflow/atree/issues/464)
  - Badger -> Pebble migration: complete work on [Chunk Data pack Pruner](https://github.com/onflow/flow-go/issues/6516) and [execution state migration](https://github.com/onflow/flow-go/issues/6527)
  - Complete [Execution performance loader](https://github.com/onflow/flow-go/issues/6896)
  - Complete performance deep-dive (needs on TPS loader)
  - Start upgrade of EVM core to "Pectra" release
  - Start work on migration of non-execution components from Badger -> Pebble DB
  

**On Hold**
- [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)
- [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)
- [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

---

### **Core Protocol** \[Jerome]
Cycle Objective(s): 

* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* Improve network reliability by reducing API load on execution node [IN PROGRESS]
* Address vectors which risk network downtime
  1. Operationalize EFM Recovery [DONE]
  2. Protocol level HCU [IN PROGRESS] 
* EVM Gateway hardening - phase 2 [IN PROGRESS]
* Support full spork history across HCU version boundaries (PoC) [BLOCKED]
* Faster transaction results to improve user experience [WRAPPING UP]
* Add passkey support: Protocol design and scoping [DONE]
* Furthering permissionless participation
  1. Proof of Possession [WRAPPING UP]
  2. KR2: SPoCK Research [PAUSED]

**Done last sprint**
* <ins>Data Availability</ins>
  - KROK Team

    Done:
    - [[Access] Test new WebSocket functionality on mainnet](https://github.com/onflow/flow-go/issues/7013)
    - [[Access] Gorilla WebSocket connection type may panic. We should catch it](https://github.com/onflow/flow-go/issues/7036)
    - [[Access] heartbeat_interval argument is missing in events/account statuses WebSocket data providers](https://github.com/onflow/flow-go/issues/7080)
    - [[Access] DataProviders does not catch invalid arguments](https://github.com/onflow/flow-go/issues/7066)
    - [[Access] Pending response from send and subscribe should return immediately](https://github.com/onflow/flow-go/issues/6573)
    - [[Access] Improve SendAndSubscribe status handling](https://github.com/onflow/flow-go/issues/6574)
    - [[Access] Subscribe to tx results over ws without sending tx](https://github.com/onflow/flow-go/issues/6767)
  
    Started:
    - [[Access] Add examples for ws conn usages](https://github.com/onflow/flow-go/issues/6643)
    - [[Access] The "tx_id" argument must be required when subscribing for "transaction_statuses" topic via WebSockets](https://github.com/onflow/flow-go/issues/7083)


* <ins>Malleability</ins>
  - KROK Team
  
    Done:
    - [[Malleability A] Attestation](https://github.com/onflow/flow-go/issues/6696)
    - [[Malleability A] LightCollection](https://github.com/onflow/flow-go/issues/6676)
    - [[Malleability A] QuorumCertificate](https://github.com/onflow/flow-go/issues/6684)
    - [[Malleability A] TimeoutCertificate](https://github.com/onflow/flow-go/issues/6689)
    - [[Malleability A] Modelv0](https://github.com/onflow/flow-go/issues/6681)
    - [[Malleability A] Modelv1](https://github.com/onflow/flow-go/issues/6682)
    - [[Malleability A] EventIDs](https://github.com/onflow/flow-go/issues/6698)
    - [[Malleability A] EpochStateContainer](https://github.com/onflow/flow-go/issues/6695)
    - [[Malleability A] MinEpochStateEntry](https://github.com/onflow/flow-go/issues/6678)
    - [[Malleability A] Locator](https://github.com/onflow/flow-go/issues/6677)
    - [[Malleability A] IdentifierList](https://github.com/onflow/flow-go/issues/6677)
    - [[Malleability A] GenericIdentityList](https://github.com/onflow/flow-go/issues/6699)
    - [[Malleability A] EpochRecover](https://github.com/onflow/flow-go/issues/6697)
    - [[Malleability B] ExecutionResult](https://github.com/onflow/flow-go/issues/6655)
    - [[Malleability A] EpochCommit](https://github.com/onflow/flow-go/issues/6671)
    - [[Malleability B] pendingBlock](https://github.com/onflow/flow-go/issues/6661)
    - [[Malleability B] Identity](https://github.com/onflow/flow-go/issues/6650)
    - [[Malleability B] Event](https://github.com/onflow/flow-go/issues/6651)
    - [[Malleability] Split the BackData interface, by separating Adjust and AdjustWithInit](https://github.com/onflow/flow-go/issues/7078)
    
    In Review:
    - [[Malleability] Update BackData to use generic arguments instead of flow.Identifier and flow.Entity](https://github.com/onflow/flow-go/issues/7070)
    - [[Malleability] Update Backend to work with BackData](https://github.com/onflow/flow-go/issues/7072)
    - [[Malleability] Update mapBackData to use generics and implement BackData](https://github.com/onflow/flow-go/issues/7073)
    - [[Malleability] Fix root interfaces implementations under stdmap package](https://github.com/onflow/flow-go/issues/7075)
   
   Started:
    - [[Malleability] Update herocache to use generics and implement BackData](https://github.com/onflow/flow-go/issues/7074)
    - [[Malleability] Fix remaining usages of the mempool/herocache structures that now rely on generics](https://github.com/onflow/flow-go/issues/7076)
 - [Automatic malleability checker](https://github.com/onflow/flow-go/pull/7069)
 - Started [Malleability checker follow up](https://github.com/onflow/flow-go/pull/7124)
   
* <ins>EFM and Protocol HCU</ins>
  - Completed Protocol HCU upgrade for EFM recovery on testnet  

* <ins>EVM Gateway</ins>
  - Misc bug fixes
  - Completed and released soft-finality PoC for Eth Denver       

* <ins>Cryptography</ins>
  - Completed passkey [technical design FLIP](https://github.com/onflow/flips/pull/320)

* <ins>Protocol misc</ins>
  - Completed Epoch Interface refactor
   
**This sprint**

* <ins>Data Availability</ins>
  - KROK Team
    - [[Access] The TODO Context should be changed in WebSocket Handler](https://github.com/onflow/flow-go/issues/7109)
    - [[Access] Add new gRPC subscription documentation and deprecate old implementation](https://github.com/onflow/docs/issues/1150)
    - Work on Optimistic Syncing tasks will begin. The proposal document is ready, and development will proceed based on the suggested architectural changes.
  - Support KROK data availability PR reviews

* <ins>Malleability</ins>
 - KROK Team:
    - [[Malleability] Update herocache to use generics and implement BackData](https://github.com/onflow/flow-go/issues/7074)
    - [[Malleability] Fix remaining usages of the mempool/herocache structures that now rely on generics](https://github.com/onflow/flow-go/issues/7076)
    - Continue to work on refactoring of the mempool package
  - Support KROK malleability PR reviews

* <ins>EVM Gateway</ins>
  - Continue soft finality        

* <ins>Cryptography</ins>
  -       

**On Hold**

**Active Epics**
* [[EPIC] Malleability A](https://github.com/onflow/flow-go/issues/6649)
* [[EPIC] Malleability B](https://github.com/onflow/flow-go/issues/6648)

---

### **DeFi** \[Jerome]

Cycle Objective(s): 
- Close gaps in Defi/Liquidity infrastructure post-Cadence 1.0
- Bring liquidity and and kick start ecosystem effects

**Done last sprint**
 - Completed oversight of contract audit for Kittypunch new product launches (Flow Strategy)
 - Mopped up issues with Metamask not having token icons and other misc
 - Started DeFi vision proposal doc

**This sprint**
 - Continue DeFi vision proposal doc
 - Support/track contract audit for More Markets product launch
 - Support/track second contract audit for Kittypunch with Zenith

**On Hold**
- N/A


---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Lower the barrier to Cadence adoption and streamline EVM interoperability. [OKR](https://github.com/onflow/flow-okrs/issues/86)

**Done last sprint**

**This sprint**

* [FCL Ethereum Provider for Cross-VM Apps](https://github.com/onflow/fcl-js/issues/2053)
  * Wrap up the remaining p2 provider/adapter issues
  * Write documentation for the provider and adapters
  * Create a demo video
* [FCL React Hooks](https://github.com/onflow/flow-okrs/issues/86)
  * Start work on the FCL React Hooks library
  * Solve FCL blockers around config

**On Hold**

- N/A

---

### Applications / Wallet [Jeff] 

**Cycle Objective(s):** 

KR 1: Reduce the number of critical (potential loss of assets / P0) and high priority (P1) bugs experienced to an average of 1 per week on a 4-week rolling average.
 - Current (Mar 7): 3.5/week - Down from 5.5/week just two weeks ago.
 - Positive signal: 2 bugs/week last week!

**Done last sprint**

**This sprint**

- Continued focus on solving immediate customer problems within the product
 
- Flow Wallet Extension:
  - Working on: Password / security management - Single password applied to all profiles
 
- Flow Wallet iOS/Android:
  - Continued focus on quick-win polish items: Copy fixes, UI tweaks.
  - Working on: NFT Page UI Updates, Token Management and Display items.

- Other:
  - New token indexer to faster support new token launches on Flow
  - Support "verified" and "unverified" tokens in Flow Wallet, similar as Phantom on Solana

**On Hold**

- N/A

**Active Epics**

- TBD

---

### **Infra** \[JP / Manny]

**Done last sprint**


**Node Hosting**

**Observability**

**Deployment Prep**

**Key Management**

**This sprint**
  * Network module codebase merge between Testnet and Mainnet
  * Automation of new tagging strategy for terraform modules
  * New logic to permit egress firewall rule exceptions with allow action

**On Hold**

**Active Epics**
  * [Terraform Module Consolidation](https://github.com/onflow/ff-sre-infrastructure/issues/94)

---

### **Governance - Vishal**

Cycle Objective(s):
1. Ensure the multisign process for Flow is efficient with effective community participation
2. Maintain long-term decentralization of Flow consensus nodes by ensuring no operator controls 1/3rd or more of the network's consensus nodes
3. Continue building a well-structured Flow Tokenomics framework to enhance community understanding, improve perception, and articulate a clear long-term vision
4. Build and ship a new dashboard to provide node operators with real-time access to staking, epoch-related and other relevant data.

**Done last sprint**
* Onboarded 4 consensus nodes for Dorahacks.
* Worked with Flipside, QuickNode, Edgevana, BlockDaemon to onboard new consensus nodes.

**This sprint**

* Contract signing with Alchemy.
* Contract review with Tibles, Hoodlums, Quicknode.

---
