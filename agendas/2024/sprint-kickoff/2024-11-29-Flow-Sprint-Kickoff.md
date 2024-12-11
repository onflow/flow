# Overview

 ### Team Wins 🎉
 
 * Flow has been added to [chainspect.app](https://chainspect.app/dashboard) (Vishal)
 * Hyperlane cbBTC bridge tested and live for mainnet but not yet announced
 * Deployed EVM GW with dry-run feature on TN - enables more flexibility in configuring EVM traces and reduces load on ANs.
 * Deployed last remaining Cadence security report.
 * Great Cadence team mini-onsite, discussed Cadence compiler workstream and aligned on next steps.
 * Discussed and agreed on the trigger mechanism for first on-the-fly migration (to be used for non-atree domain register inlining).
 * Completed all Cadence language tech-debt removal tasks planned for this cycle.
 * Completed first Cadence compiler + VM OKR - benchmarking removed Move VM as potential candidate for runtime for performance reasons.

--- 

### Mainnet Uptime - Last 14 days (11/16/24 to 11/28/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    99.975%    |       0%         |
| Block Sealing           | 99.9%   |    100%       |       0%         |
| Access API Liveness     | 99.9%   |    99.96%     |       0%         |

YTD SLA: 99.53%

#### HCU
1. Nov 21st to roll out Cadence security fix and EVM core changes.
   
#### Incidents
* None

---

### FLIPs Tracker \[Vishal]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 7 (-1) |    6     |       0       |       8        |        **21** (-1)        |
| Proposed    | 1  |    2     |       3       |       0          |        **6**          |
| Accepted    | 2  |    1 (-1)    |       2       |       2          |        **7** (-1)         |
| Rejected    | 0  |    1     |       1       |       0          |        **2**         |
| Implemented | 3  |    5 (-33)    |       1       |       0          |        **9**  (-33)      |
| Released    | 4  |    34 (+34)    |       7 (+2)       |       6          |        **51** (+36)         |
| Total       | **17** (-1)|    **49**   |       **14** (+2)      |       **16**         |        **96**  (+1)       |

- 2 new FLIPs were added in the last two weeks (one test issue was removed from tracking)
  
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
- [Security fix port](https://github.com/onflow/cadence/pull/3690)
- Cadence compiler
    - Custom VM
        - [Improve and test instruction printer](https://github.com/onflow/cadence/pull/3706)
        - [Optimize function calls](https://github.com/onflow/cadence/pull/3704)
    - [Standardize internal error messages](https://github.com/onflow/cadence/issues/3688)
    - [Add some benchmark programs](https://github.com/onflow/cadence/pull/3702)
    - [Remove the old compiler and VM PoC](https://github.com/onflow/cadence/pull/3705)
    - [Composite benchmarking](https://github.com/RZhang05/cadence_movevm/pull/2)
- Tech-debt removal:
    - [Source Compatibility Suite: Switch to main Green Goo Dao repo](https://github.com/onflow/cadence/pull/3682)
- Docs
    - [Docusaurus Build fails](https://github.com/onflow/cadence-lang.org/issues/176)

**Cadence Execution**
- Storage optimization: [Combine non-atree domain payloads into atree payloads](https://github.com/onflow/cadence/issues/3584)
    - [[Account Storage Maps] Add more tests for register reads for GetDomainStorageMap()](https://github.com/onflow/cadence/pull/3694)
    - [Add Storage.AccountStorageFormat()](https://github.com/onflow/cadence/pull/3701)
    - [[Account Storage Maps] Bump atree version to v0.8.1](https://github.com/onflow/cadence/pull/3699)
    - [[Account Storage Maps] Add return value to account migration scheduling functions](https://github.com/onflow/cadence/pull/3695)
    - [[Account Storage Maps] Reduce storage register reads when using `StorageFormatV2Enabled`](https://github.com/onflow/cadence/pull/3683)
    - [[Account Storage Maps] Refactor migration](https://github.com/onflow/cadence/pull/3680)
    - [[Account Storage Maps] Refactor storage into V1 and V2](https://github.com/onflow/cadence/pull/3678)
- HCU-related chores & updates: [1](https://github.com/onflow/flow-go/pull/6753), [2](https://github.com/onflow/flow-go-internal/pull/7014)

**EVM Core**
- Bugfix blocking dry-run feature on GW:
    - [Copy slice when setting block hash list](https://github.com/onflow/flow-go/pull/6734)
    - v0.37 port: [Copy slice when setting block hash list](https://github.com/onflow/flow-go/pull/6740)
- Bugfix for incorrectly labeled trace files: [Move trace ID generation outside the concurrent path](https://github.com/onflow/flow-go/pull/6626)
- Minor improvement
    - [update height in comment](https://github.com/onflow/flow-go/pull/6743)]

**EVM Gateway**
- Dry-run feature (local state index)
    - [Use offchain package to create block context](https://github.com/onflow/flow-evm-gateway/pull/670)
    - [Add offchain block context creation method](https://github.com/onflow/flow-go/pull/6751)
    - [Add testcase for offchain evm backward compatibilities](https://github.com/onflow/flow-go/pull/6749)
    - [Fix testnet EVM replay](https://github.com/onflow/flow-go/pull/6759)
    - [Fix wrong block hash value for the 1st EVM block with `PrevRandao`](https://github.com/onflow/flow-evm-gateway/pull/666)
    - [Handle ingestion of missing `EVM.BlockExecuted` event in backfill process](https://github.com/onflow/flow-evm-gateway/pull/664)
    - [Handle missing EVM block event in backfill](https://github.com/onflow/flow-evm-gateway/pull/661)
    - [Refactor re-execution](https://github.com/onflow/flow-evm-gateway/pull/658)
- bugfix
    - [eth_syncing returns incorrect start height](https://github.com/onflow/flow-evm-gateway/issues/644)
- GW hardening / Improvements
    - [Improve gas estimation logic for `eth_estimateGas`](https://github.com/onflow/flow-evm-gateway/pull/671)
    - [Add debug_flowHeight API endpoint](https://github.com/onflow/flow-evm-gateway/pull/669)
    - performance - [Remove redundant transactions mutex](https://github.com/onflow/flow-evm-gateway/pull/668)
    - [Use instance of config instead of reference](https://github.com/onflow/flow-evm-gateway/pull/681)
    - Rafactoring of startup/shudown handling to switch to node builder:
        - temporary bugfix: [Fix closing channel twice](https://github.com/onflow/flow-evm-gateway/pull/680)
        - [Close the AN clients on shutdown](https://github.com/onflow/flow-evm-gateway/pull/678)
        - [Cleanup run cmd](https://github.com/onflow/flow-evm-gateway/pull/675)
    - [Seperate creating and closing pebbleDB from storage](https://github.com/onflow/flow-evm-gateway/pull/677)
    - coinbase for the EVM fees is now configurable
        - [Remove transaction for COA resource creation](https://github.com/onflow/flow-evm-gateway/pull/674)
        - [Run without coa account ](https://github.com/onflow/flow-evm-gateway/pull/667)
    - Performance [Make EVM transaction submission non-blocking](https://github.com/onflow/flow-evm-gateway/issues/654)
        - [Use a constant backoff retry strategy for retrieving the Flow transaction result](https://github.com/onflow/flow-evm-gateway/pull/672)

**This sprint**

- Complete [EVM Gateway Hardening](https://github.com/onflow/flow-go/issues/6539)
  - Deploy dry-run on MN, productive more robust state-mismatch detection.

- Cadence Language
  - Continue work on Content for [commuity outreach](https://github.com/onflow/cadence/issues/3596)
  - Continue work on the [Cadence compiler POC - Phase 2](https://github.com/onflow/cadence/issues/3692)
  - Continue work on [Cadence language Specification](https://github.com/onflow/cadence/issues/3599)

- Cadence Execution
  - Complete [optimization for Cadence domain storage](https://github.com/onflow/cadence/issues/3584)
  - Start new Trie research
  - Evaluate / Start [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)
  - Badger -> Pebble migration: continue work on [Chunk Data pack Pruner](https://github.com/onflow/flow-go/issues/6516)
  - Start work on [FVM Programs cache invalidation](https://github.com/onflow/flow-go/issues/6507)

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
* Add passkey support: Protocol design and scoping [IN PROGRESS]
* Furthering permissionless participation
  1. Proof of Possession [IN PROGRESS]
  2. KR2: SPoCK Research [PAUSED]

**Done last sprint**

* <ins>EFM Recovery</ins>
  - Addressed comments and finalized [large integration test PR](https://github.com/onflow/flow-go/pull/6424)
  - [Refactored usage of DKG in bootstrapping](https://github.com/onflow/flow-go/pull/6745)
  - Started [implementation of a state machine for handling beacon key](https://github.com/onflow/flow-go/issues/6725)
  - Continued Service Event Verification Bug
    - Exploring strategies for modifying data models in backward-compatible way, for upcoming and future Protocol HCUs
    - Integration test for the upgrade, validating [bug fix](https://github.com/onflow/flow-go/pull/6752)
    - A working fix is complete - revisions from feedback to simplify backward-compatibility are ongoing
  - Started [Upgrade Plan for EFM Recovery & Protocol HCU](https://flowfoundation.notion.site/EFM-Recovery-Release-Upgrade-Plan-14d1aee1232480228a87e43933815285?pvs=4)
    - wip: documenting steps for deploying first Protocol HCU

* <ins>Data Availability</ins>
  - KROK Team
      - Websockets redesign ([Epic #6163](https://github.com/onflow/flow-go/issues/6163))
          - Implement controller and data providers ([Issue #6593](https://github.com/onflow/flow-go/issues/6593), [Issue #6583](https://github.com/onflow/flow-go/issues/6583), [Issue #6584](https://github.com/onflow/flow-go/issues/6584), [Issue #6617](https://github.com/onflow/flow-go/issues/6617), [Issue #6588](https://github.com/onflow/flow-go/issues/6588), [Issue #6638](https://github.com/onflow/flow-go/issues/6638), [Issue #6585](https://github.com/onflow/flow-go/issues/6585), [Issue #6635](https://github.com/onflow/flow-go/issues/6635), [Issue #6639](https://github.com/onflow/flow-go/issues/6639))
          - Improvements to tx result streaming endpoint ([Issue #6604](https://github.com/onflow/flow-go/issues/6604), [Issue #6574](https://github.com/onflow/flow-go/issues/6574), [Issue #6573](https://github.com/onflow/flow-go/issues/6573))
     - Registers db pruning ([Issue #6068](https://github.com/onflow/flow-go/issues/6068))
     - Test pebble execution data db on mainnet ([Issue #6357](https://github.com/onflow/flow-go/issues/6357))
     - Log error when unable to connect to bootstrap node([Issue #6576](https://github.com/onflow/flow-go/issues/6576))
     - Malleability: Tasks descriptions, scope discussions

* <ins>Cryptography</ins>   
  - Short sprint because of time off
  - PR reviews (randomness - linear codes)
  - PoP: got back to debugging flow-port integration
  - Started looking at docs for Passkeys
 
* <ins>Misc other</ins>   
  - Progress on trie research: detailed requirements completed
  - Continued discussion on Dynamic Protocol State for Version Beacon (coordinating upgrades of the Execution Stack): https://github.com/onflow/flips/pull/296
  - Continued Passkeys reading/research

**This sprint**

* <ins>EFM Recovery</ins>
  - Continue Service Event Verification Bug
  - Continue upgrade planning for EFM Recovery & Protocol HCU
  - Finish [implementation of state machine for handling beacon key](https://github.com/onflow/flow-go/issues/6725)
  - Address comments and finalize additional [integration tests](https://github.com/onflow/flow-go/pull/6632)
    
* <ins>Data Availability</ins>
  - KROK Team
      - WebSockets redesign ([Epic #6163](https://github.com/onflow/flow-go/issues/6163))
          - Continue to implement WebSockets controller, data providers and WebSockets controller error handling([Issue #6642](https://github.com/onflow/flow-go/issues/6642), [Issue #6640](https://github.com/onflow/flow-go/issues/6640), [Issue #6587](https://github.com/onflow/flow-go/issues/6587), [Issue #6637](https://github.com/onflow/flow-go/issues/6637), [Issue #6586](https://github.com/onflow/flow-go/issues/6586), [Issue #6641](https://github.com/onflow/flow-go/issues/6641))
          - Improvements to tx result streaming endpoint ([Issue #6767](https://github.com/onflow/flow-go/issues/6767))

* <ins>Cryptography</ins>
  - Passkeys: research and docs: fido2 specs 
  - PoP: continue fixing tests in the background - follow up with VL

**On Hold**

---

### **DeFi** \[Jerome]

Cycle Objective(s): 
- Close gaps in Defi/Liquidity infrastructure post-Cadence 1.0
- Bring liquidity and and kick start ecosystem effects
  
**Done last sprint**
* Hyperlane cbBTC bridge tested and live for mainnet but not yet announced

**This sprint**
* Validate KittyPunch update unblocked once EVM GW local state index is released
* Start onboarding Paradex and Layerzero when they are ready
  
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

* Docs
  - Complete Cadence x EVM batched transactions walkthrough & blog post
  - [Add FlowEVM to Rainbow support docs](https://github.com/onflow/docs/issues/1005)
  - [Improve network configuration guide](https://github.com/onflow/docs/issues/1008)
  - [Update readme commands](https://github.com/onflow/flow-cli/issues/1847)
  - [Add snipit parsing](https://github.com/onflow/docs/issues/1016)
* Steaming API Integration
  - [Changes to fcl to support the new streaming API](https://github.com/onflow/flow-okrs/issues/80)
  - [Create transport-http SubscriptionManager](https://github.com/onflow/fcl-js/issues/2015)
* Miscellaneous Tools/Apps
  - [Fix Nu-Fi wallet not working with newlines in user message](https://github.com/onflow/crescendo-rewards/issues/507)
  - [Lost and Found integration with Flow Port](https://github.com/onflow/flow-port/issues/366)

**This sprint**

* Docs
  - Continue on OKR: https://github.com/onflow/dx-internal/issues/33
* Smart Contracts
* Discovery phase on VM bridge refinements
* Finalize and merge Streaming API integration
* Continue Partner support
  - Focus on Gelator



**On Hold**

- bridge.flow.com
  
---

### **Wallet** \[Jeff]

Cycle Objective(s): 

**Done last sprint**


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

**Automation**
- [Add support for private registry builds](https://github.com/onflow/flow-go/pull/6742)
- [Add cron schedule for checkpoint extraction](https://github.com/onflow/ff-sre-automation/pull/4)
- [Update write access to private registry](https://github.com/onflow/ff-sre-infrastructure/pull/64)
- [Create private container registry for builds](https://github.com/onflow/ff-sre-infrastructure/pull/63)

**Node Hosting**
- [Increase AN Disk Space](https://github.com/onflow/ff-sre-infrastructure/pull/66)

**Support**
- [Create DNS Record for BlueSky Validation](https://github.com/onflow/ff-sre-infrastructure/pull/65)

**This sprint**
* Finish FF IAM Group migration
* Continue evaluating SRE candidates 
* Scope work to migrate domain registrars
* Scope work to migrate to artifact registry

---

### **Governance - Vishal**

Cycle Objective(s):
1. Ensure the multisign process for Flow is efficient with effective community participation
2. Maintain long-term decentralization of Flow consensus nodes by ensuring no operator controls 1/3rd or more of the network's consensus nodes
3. Continue building a well-structured Flow Tokenomics framework to enhance community understanding, improve perception, and articulate a clear long-term vision
4. Build and ship a new dashboard to provide node operators with real-time access to staking, epoch-related and other relevant data.

**Done last sprint**
* Reached out to all inactive multi-signers
* Implemented FLIPS to remove two signers who no longer wished to continue as signers.
* Discussed potential node operator lease to Dorahacks and Alchemy.
* Synced with T-systems on various topics - node operations, self-custody instead of using a custodian etc.
* Requested FindLabs for additional REST API to enable grafana alerting on node counts.
* Time to finality discussion with Chainspect.app.

**This sprint**
* Lease account setup for Coinage/DAIC (new node operator)
* Send out the lease contract for Dorahacks.
* Setup alerting on node counts if FindLabs API is ready

---
