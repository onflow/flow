# Overview

 ### Team Wins 🎉
 
 * Slack Bot
 * Rewards auto combining boxes and keys
 * Rewards store is live
 * Deprecated nft-catalog, flow-js-testing
 * Updated starters
 * Created EVM Interoperability Challenges Draft Document
 * The new Getting Started documentation sections have been rewritten to connect all the tools, providing developers with a comprehensive understanding of how they work together. (PR In Review)


--- 

### Mainnet Uptime - Last 14 days (11/4/24 to 11/15/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    100%       |       0%         |
| Block Sealing           | 99.9%   |    100%       |       0%         |
| Access API Liveness     | 99.9%   |    ?          |       ?          |

YTD SLA: 99.54%

#### Incidents
* None

---

### FLIPs Tracker \[Vishal]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 8  |    6     |       0 (-1)       |       8 (+1)       |        **22**          |
| Proposed    | 1  |    2 (-2)     |       3       |       0          |        **6**  (-2)        |
| Accepted    | 2  |    2 (+1)    |       2       |       2          |        **8** (+1)         |
| Rejected    | 0  |    1 (+1)    |       1       |       0          |        **2** (+1)        |
| Implemented | 3  |    38 (+13)    |       1       |       0          |        **42**  (+13)      |
| Released    | 4  |    0     |       5 (+1)       |       6          |        **15** (+1)         |
| Total       | **18** |    **49** (+13)  |       **12**       |       **16**  (+1)        |        **95**  (+14)       |

- 1 new FLIP was added last month and 13 untracked FLIPS are now being tracked.
- ~~Some FLIPs are still not reflected in the project tracker.~~
- **Reminder**: FLIP process starts with an issue creation.
(https://github.com/onflow/flips?tab=readme-ov-file#submitting-the-flip)
  
### Key Release Dates & Breaking Changes

- Next Mainnet/Testnet network upgrade (spork): TBD

---

# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]

**Cycle Objectives**

[Cadence Language](https://github.com/onflow/cadence/issues/3623)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6577)

**Done last sprint**

**Cadence Language**
- Feature:
    - [Add string formatting function](https://github.com/onflow/cadence/issues/3579)
- Tech debt removal:
    - [Remove unused Identifier() function from structs implementing atree.TypeInfo](https://github.com/onflow/cadence/issues/3674)
- Collaboration on Cadence learning app (GoldStar):
    - [Add challenge paths](https://github.com/onflow/gold-star/pull/6)
    - [Add challenge which must be manually evaluated](https://github.com/onflow/gold-star/pull/5)
    - [Refactor profile submissions and socials, add function and script to allow updating socials](https://github.com/onflow/gold-star/pull/4)
- Tools improvements:
    - Language server - [Update access modifiers to Cadence 1.0](https://github.com/onflow/cadence-tools/pull/445)

**Cadence Execution**
- Storage optimization: [Combine non-atree domain payloads into atree payloads](https://github.com/onflow/cadence/issues/3584)
    - [Replace domain string with enum for AccountStorageMap key](https://github.com/onflow/cadence/pull/3677)
    - [Refactor storage domains to prevent import cycles and simplify maintenance](https://github.com/onflow/cadence/pull/3673)
    - [Combine domain payloads and provide on-the-fly migration](https://github.com/onflow/cadence/pull/3664)
- Compiler POC - Move VM benchmarking:
    - [Update to aptos-core](https://github.com/RZhang05/cadence_movevm/pull/1)
- Minor improvement - [Print log when checks the executed block matches the sealed result](https://github.com/onflow/flow-go/pull/6559)

**EVM Core**
- Bugfix:
    - [Move tracing reset to `OnTxEnd` hook](https://github.com/onflow/flow-go/pull/6627)

**EVM Gateway**
- Dry-run feature:
    - [Ingestion Performance improvements](https://github.com/onflow/flow-evm-gateway/pull/653)
    - [Storage fixes](https://github.com/onflow/flow-evm-gateway/pull/652)
    - [Use batch to init blocks](https://github.com/onflow/flow-evm-gateway/pull/650)
    - [Changed evm height in requester to uint](https://github.com/onflow/flow-evm-gateway/pull/649)
    - [Special evm height handling](https://github.com/onflow/flow-evm-gateway/pull/645)
    - [Add register storage](https://github.com/onflow/flow-evm-gateway/pull/640)
    - [Integrate & incorporate flow-go's `onchain` package](https://github.com/onflow/flow-evm-gateway/pull/635)
    - [Simplify usage of FixedHash field on Block type](https://github.com/onflow/flow-evm-gateway/pull/520)
- ERC-4337 integration:
    - [Add support for ethapi.StateOverride in relevant JSON-RPC endpoints](https://github.com/onflow/flow-evm-gateway/issues/655)
- Bugfix:
    - [Hardhat ignition deployments fail on testnet & mainnet](https://github.com/onflow/flow-evm-gateway/issues/647)
- Testing:
    - [Split out cadence arch and traces tests](https://github.com/onflow/flow-evm-gateway/pull/646)

**This sprint**

- Complete [EVM Gateway Hardening](https://github.com/onflow/flow-go/issues/6539)

- Cadence Language
  - Security report
  - Complete remaining Tech-debt [Tech Debt](https://github.com/onflow/cadence/issues/3595)
  - Continue work on Content for [commuity outreach](https://github.com/onflow/cadence/issues/3596)
  - Continue work on the [Cadence compiler POC](https://github.com/onflow/cadence/issues/3612)
  - Continue work on [Cadence language Specification](https://github.com/onflow/cadence/issues/3599)

- Cadence Execution
  - Complete [optimization for Cadence domain storage](https://github.com/onflow/cadence/issues/3584)
  - Start new Trie research
  - Evaluate / Start [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)
  - Badger -> Pebble migration: continue work on [Chunk Data pack Pruner](https://github.com/onflow/flow-go/issues/6516)

**On Hold**

- [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)
- [Random beacon history taking more space on chain than expected](https://github.com/onflow/flow-go/issues/5550)
- [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

---

### **Core Protocol** \[Jerome]
Cycle Objective(s): 

* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* Faster transaction results to improve user experience [IN PROGRESS]
* Address vectors which risk network downtime
  1. Operationalize EFM Recovery [IN PROGRESS]
  2. Protocol level HCU [NOT STARTED]
* Add passkey support: Protocol design and scoping [NOT STARTED]
* Furthering permissionless participation
  1. Proof of Possession [IN PROGRESS]
  2. KR2: SPoCK Research [PAUSED]

**Done last sprint**

* <ins>EFM Recovery</ins>
  - Continue working on different integration tests and recovery scenarios for EFM
    - [EFM Integration Test Part 2 ](https://github.com/onflow/flow-go/pull/6424)
    - [Node ejected before epoch recovery](https://github.com/onflow/flow-go/pull/6632)
    - [Create integration test where DKG and consensus committees form a symmetric difference](https://github.com/onflow/flow-go/issues/6645)
    
* <ins>Data Availability</ins>
  - KROK Team
    - Websockets redesign ([Epic #6163](https://github.com/onflow/flow-go/issues/6163))
      - Implement router ([Issue #6593](https://github.com/onflow/flow-go/issues/6593) - In review, [Issue #6583](https://github.com/onflow/flow-go/issues/6583) - In review, [Issue #6584](https://github.com/onflow/flow-go/issues/6584) - In review)
      - Improvements to tx result streaming endpoint ([Issue #6573](https://github.com/onflow/flow-go/issues/6573), [Issue #6574](https://github.com/onflow/flow-go/issues/6574), [Issue #6604](https://github.com/onflow/flow-go/issues/6604))
    - Registers db pruning ([Issue #6068](https://github.com/onflow/flow-go/issues/6068) - In review)
    - Test pebble execution data db on testnet ([Issue #6357](https://github.com/onflow/flow-go/issues/6357) - In progress)

* <ins>Cryptography</ins>
  - PoP:
    - Finished Ledger app code updates + Ledger JS client
    - Fixed tests for Ledger app on simulator + js client tests
      - However, simulator STAX device tests are broken - likely because of a recent Ledger test framework breaking change (checking with Vacuumlabs)
    - Started tests on a real device (nanoS) + Tom has been working on a flow-port test version (debugging still ongoing)
  - Brainstorm at erasure codes to optimize the networking layer messaging
  - Eth global
    - Hackathon prep : play with wallets - EVM - CLI
    - Attending main and side events
      
* <ins>Misc other</ins>
  - Ongoing Pebble migration PR reviews

**This sprint**

* <ins>EFM Recovery</ins>
  - Wrap up outstanding PRs currently under review
  - [Implement last planned integration test](https://github.com/onflow/flow-go/issues/6645)
    
* <ins>Data Availability</ins>

* <ins>Cryptography</ins>
  - PoP:
    - Continue investigating the testing breaking change STAX issue with VacuumLabs
    - Continue working on a real device and flow-port test (with Tom's support)
* 

**On Hold**


---

### **DeFi** \[Jerome]

Cycle Objective(s): 
- Close gaps in Defi/Liquidity infrastructure post-Cadence 1.0
- Bring liquidity and and kick start ecosystem effects
  
**Done last sprint**
* Update Hyperlane validators to latest version and confirmed path to launch 
* Diagnosed rate limit issue that was blocking Snag when using Flow EVM 

**This sprint**
* Finalize multi-sign approach for Hyperlane and launch cbBTC bridge
* Validate KittyPunch update unblocked once EVM GW local state index is released
* Support Thirdweb w RPC Edge service standup using dedicated QuickNode ANs
* Start onboarding Paradex and Layerzero 
  
**On Hold**
- N/A

**Active Epics**

- Establish Defi/Liquidity infrastructure for Cadence 1.0 update
- Ensure Flow has best-in-class on- and off-ramps for USDC liquidity across DeFi ecosystem
- Expand Flow DeFi ecosystem primitives and protocols

---

### **User Experience** \[Kan]

Cycle Objective(s): 
 - Improve Quality of Life, Level Up Dev Documentation and Learning Path, Supercharge EVMxCadence, Inspire and Excite Wave of New Flow Devs
   
**Done last sprint**

* Wrapping up last remaining JVM SDK PRs to reach Go SDK parity
* Rewards
  - [Setup claim section for auto-merging of points](https://github.com/onflow/crescendo-rewards/issues/502 )
  - [Fix error handling in authentication challenge](https://github.com/onflow/crescendo-rewards-be/pull/236)
  - Tease out tentative ask from Snag about point history log
* CLI
  - [Simplify and fix the Counter transaction generated with init](https://github.com/onflow/flow-cli/pull/1818 , https://github.com/onflow/flow-cli/issues/1817)
  - [Improve init default project README with how to run the code](https://github.com/onflow/flow-cli/issues/1830 )
  - [Upgrade FCL Next Scaffold](https://github.com/onflow/flow-cli/issues/1829 )
* Docs
  - [Rewrite Getting Started guides feature all tools with linked flow](https://github.com/onflow/docs/issues/970)
  - [Published a guide on using Testnet Faucet for Cadence & EVM addresses](https://github.com/onflow/docs/issues/978)
  - [Update FCL Discovery Service List](https://github.com/onflow/docs/issues/985)
* Contracts
  - [Create Flow solidity utilities repository](https://github.com/onflow/flow-sol-utils/issues/1)
  - [Package solidity utilities for use in hardhat](https://github.com/onflow/flow-sol-utils/issues/2)
  - [Update random coin toss example to use new sol utils repo](https://github.com/onflow/random-coin-toss/issues/26)
  - [Code complete on Cadence X EVM batched execution example](https://github.com/onflow/batched-evm-exec-example/issues/1)
* FCL
  - [Default to Local Storage](https://github.com/onflow/fcl-js/issues/2002)
  - [[BUG] fcl.mutate does not use the correct currentUser configuration](https://github.com/onflow/fcl-js/issues/2005)


**This sprint**

* Merge final two JVM SDK PRs to reach Go SDK parity and publish release
* Docs
  - Complete Cadence x EVM batched transactions walkthrough & blog post
  - Continue on OKR: https://github.com/onflow/dx-internal/issues/33 
* Smart Contracts
  - Enhance HybridCustody transactions to better support NFT transfers from child accounts
  - Begin work on VM bridge refinements
* Miscellaneous Tools/Apps
  - [Ledger support Register Node with Proof of Possession](https://github.com/onflow/flow-port/issues/364)
  - [Lost and Found integration with Flow Port](https://github.com/onflow/flow-port/issues/366)


**On Hold**

- bridge.flow.com
  
---

### **Wallet** \[Jeff]

Cycle Objective(s): 

**Done last sprint**

* News
  - [News notifications extension frontend](https://github.com/Outblock/FRW-Extension/issues/141)
  - [Add News by remote config](https://github.com/Outblock/FRW-Extension/issues/83)
  - [Implement Conditional Display Logic for News Notifications](https://github.com/Outblock/FRW-Extension/issues/155)
* Storage
  - [Storage Alert (Storage Card)](https://github.com/Outblock/FRW-Extension/issues/145)
  - [Low on storage warning](https://github.com/Outblock/FRW-Extension/issues/170)
  - [Handle failed transactions due to storage](https://github.com/Outblock/FRW-Extension/issues/169)
* General
  - [Improve code formatting and linting](https://github.com/Outblock/FRW-Extension/issues/144)
  - [Handle generic transaction failures in listenTransaction](https://github.com/Outblock/FRW-Extension/issues/168)
  - [[BUG] Fix in app browser security issue](https://github.com/Outblock/FRW-iOS/issues/485)
  - [[BUG] The button doesn't respond after switching account/network](https://github.com/Outblock/FRW-iOS/issues/343)


**This sprint**

- Continue squishing P0 + P1 bugs
- Continue [Account storage improvements](https://github.com/Outblock/FRW/issues/61)
- Continue [News panel improvements](https://github.com/Outblock/FRW-Extension/issues/163)
- General
  - [Add mixpanel event tracking](https://github.com/Outblock/FRW-Extension/issues/94)
  - [Upgrade Node.js version from 16 to 20](https://github.com/Outblock/FRW-Extension/issues/111)
  - [Add Crowdin integration](https://github.com/Outblock/FRW-Extension/issues/60)
  - 

**On Hold**

- N/A

**Active Epics**

- [Account storage improvements](https://github.com/Outblock/FRW/issues/61)

---

### **Infra - JP**

**Done last sprint**

**Repo Migration**
* [Fix BN2 Workflows in new repo](https://github.com/onflow/flow-go-internal/pull/6996)
* Add support for new repo to reach BN2 cluster 

**IAM Migration**
* Add access for new FF groups in BN2
* Worked with engineers to validate initial FF group changes

**Automation**
* [Created documentation for standardizing EN snapshots to benchmark project](https://www.notion.so/flowfoundation/Create-Disks-from-EN-Snapshots-1311aee123248034a8d6e6c7bda17dde)
* [Created infrastructure for batch proccess execution](https://github.com/onflow/ff-sre-infrastructure/pull/55)
* [Create automation for standardizing batch process execution with snapshot data](https://github.com/onflow/ff-sre-automation/pull/1)
* [Add support for batch process timeouts](https://github.com/onflow/ff-sre-automation/pull/2)
* [Document Batch Process Execution and Extension](https://www.notion.so/flowfoundation/Batch-Job-Execution-13d1aee1232480d18f03e61f2d4b1f2b)
* Update integration & unit tests to support private cadence builds 

**Hyperlane Deployment**
* Deleted unnecessary validators 
* Updated hyperlane images & validated requirements 

**EVM GW**
* Created new TN & MN EVM GW endpoints for preview testing

**This sprint**
* Finish FF IAM Group migration
* Scope work to migrate domain registrars
* Continue evaluating SRE candidates
* Identify & document key SRE processes for the protocol team

---

