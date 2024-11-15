# Overview

 ### Team Wins 🎉
 
 * 

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
  - EFM Recovery Benchnet testing
  - Address comments and merge [EFM Integration Test Part 2](https://github.com/onflow/flow-go/pull/6424)
  - Look into potential deployment of EFM recovery using protocol upgrade.
  - Tie loose ends in EFM

    
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
* Update Hyperlane valdiators to latest version and confirmed path to launch 
* Wrapping up last remaining JVM SDK PRs to reach Go SDK parity
* Diagnosed rate limit issue that was affecting ThirdWeb issue that had been blocking Snag

**This sprint**
* Finalize multi-sign approach for Hyperlane and launch cbBTC bridge
* Merge final two JVM SDK PRs to reach Go SDK parity and cur a release to Maven artifacts
* Validate KittyPunch are unblocked once EMV GW local state index is released
* Support Thirdweb in w RPC Edge service using their own dedicated ANs (QuickNode)
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

*

**This sprint**


**On Hold**

- bridge.flow.com
  
---

### **Wallet** \[Jeff]

Cycle Objective(s): 

**Done last sprint**

- N/A

**This sprint**

- Begin creating developer documentation highlighting FlowEVM
- Updating cadence transactions / scripts for Cadence 1.0
- Begin executing on FlowEVM updates to Flow Wallet
- Scheduled calls with MetaMask and Coinbase Wallet teams to intro FlowEVM and gather their requirements.

**On Hold**

- N/A

**Active Epics**

- TBD

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

