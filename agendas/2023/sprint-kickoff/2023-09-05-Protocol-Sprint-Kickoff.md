# Team Wins 🎉
- Migrated 100% mainnet gRPC traffic to QuickNode
- Published [Storehouse Design Doc](https://dapperlabs.notion.site/Storehouse-Design-Whiteboard-2f38e27891fc4e3e91415dbce240f175) so that it is accessible by the commnity.
- Successfully deployed fix to mitigate protocol state growth on execution nodes by periodically pruning chuck data packs for sealed blocks.
- Seucessful release of [Stable Cadence preview](https://github.com/onflow/flow-cli/releases/tag/v1.5.0-stable-cadence.1)

### Mainnet Uptime SLO - Last 14 days (8/18 to 9/1)

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalizatoin | 99.9%  |    99.985%    |       14.9%       |
| Block Finalization      | 99.9%  |    99.975%    |       24.8%       |
| Transaction Execution   | 99.9%  |    99.98%     |       19.8%       |
| Block Sealing           | 99.9%  |    99.94%     |       59.5%       |
| Access API Liveness     | 99.9%  |    99.97%     |       29.8%       |

*99.9% translates to a maximum allowed downtime of ~20m8s for a 14-day window.*

*99% translates to a maximum allowed downtime of ~3hr20min for a 14-day window.*

### **Performance Pod Sprint Objective - Jan B**

**Done last sprint**

Atree Register Inlining
- Continue updating atree design, implementing atree inlining, and adding tests

Execution Disk space growth mitigation
- Deployed v0.31.15 to mainnet ENs
- It slows the data disk growth by 85% by periodically pruning the chunk data pack folder.

Storehouse
- [Design doc published ](https://dapperlabs.notion.site/Storehouse-Design-Whiteboard-2f38e27891fc4e3e91415dbce240f175)
- Milestones created, started implementing storehouse [for the first milestone ](https://github.com/onflow/flow-go/issues/4682)

Other fixes
- [Fix verification cadende runtime settings](https://github.com/onflow/flow-go/pull/4676)
- [Pass zerolog by value](https://github.com/onflow/flow-go/issues/4644)

**This sprint**

- [Continue Atree register inlining](https://github.com/onflow/atree/issues/292)
- Continue testing [Atree register inlining migration](https://github.com/onflow/flow-go/pull/4633)
- Start implementation of [Storehouse first milestone](https://github.com/onflow/flow-go/issues/4682) (execution state on disk)

**On Hold**

- Plan removal of concurrent storage bottlenecks
    - Transaction fee deduction
    - [Cadence Type checker is not reentrant](https://dapperlabs.slack.com/archives/CG0B7CJAJ/p1684434997197079) (type comparison depends on consistent pointer used by programs cache, program cache needs to always return the same pointer to the same type)
- [Execution stack refactor - clear separation of ingestion engine and block computer](https://github.com/onflow/flow-go/issues/4077)
- [Automated Performance Tests](https://github.com/onflow/flow-go/issues/3548)

**Active Epics**

- [Atree register inlining](https://github.com/onflow/atree/issues/292)

### Cadence

### **Stable Cadence - Jan B**
Objective: long-term support release of Cadence with no expected breaking changes

**Done last sprint**

- Work on marketing materials (cadence-lang.org)

Features / Improvements:
- [Entitlement mapping composition](https://github.com/onflow/cadence/issues/2643)
    - [update account type mappings to include identity](https://github.com/onflow/cadence/pull/2761)
    - [Composition of entitlement mappings](https://github.com/onflow/cadence/pull/2743)
- [Order entitlements in entitlement sets in runtime types](https://github.com/onflow/cadence/issues/2749)
    - [sort entitlement sets alphabetically when generating strings](https://github.com/onflow/cadence/pull/2754)
- [Refactor Account Types](https://github.com/onflow/cadence/issues/2641)
    - [Implement Account type](https://github.com/onflow/cadence/issues/2641)
- [Allow use of type code generator in any package, refactor RLP and BLS contracts](https://github.com/onflow/cadence/pull/2753)
- [Improve composite and interface static types](https://github.com/onflow/cadence/pull/2751)
- [Avoid unnecessary static to sema type conversions for `Type`](https://github.com/onflow/cadence/pull/2750)
- [add suggestions for missing entitlements in access errors](https://github.com/onflow/cadence/pull/2736)

Testing:
- [Add tests for invalidation of references created with index/field-access](https://github.com/onflow/cadence/pull/2758)
- [Add test for inner container mutation while iterating outer](https://github.com/onflow/cadence/pull/2733)
- [Add test for attachment on built-in composite](https://github.com/onflow/cadence/pull/2732)

Tech debt:
- [Clean up intersection types](https://github.com/onflow/cadence/pull/2757)
- [Improve and fix static types and their ID and string functions](https://github.com/onflow/cadence/pull/2756)
- [Add `cadence-tools/test` as a dependency to the language server](https://github.com/onflow/cadence/pull/2742)

Chores:
- [Sync Stable Cadence feature branch](https://github.com/onflow/cadence/pull/2755)
- [Sync `feature/range-type` branch with `master`](https://github.com/onflow/cadence/pull/2747)

  
**This sprint**

- Continue work on Stable Cadence preview release - update to latest Stable Cadence branch
- Continuing with Stable Cadence scope / discussions
    - Ongoing FLIPs:
        - Blocking preview release: [Relaxing interface conformance restrictions](https://github.com/onflow/flips/pull/134)
    - [Flip for removal of custom destructors](https://github.com/onflow/flips/pull/131)
 
**On Hold**
- Discussion of the re-entrancy edge cases

**Active Epics**
- [Stable Cadence (aka Cadence 1.0)](https://github.com/onflow/cadence/issues/2642)


### Access & Data Availability **- Peter A**
Objective: Make execution data and script execution available on Edge nodes.

**Done last sprint**

**This sprint**
- [OKR] Script Exec on ANs
    - [[Script Execution] Define the index database interface](https://github.com/onflow/flow-go/issues/4667) (Gregor)
    - [[Script Execution] State Data Indexer Module](https://github.com/onflow/flow-go/issues/4638) (Gregor)
    - [Move register DB in Archive node to Access Node](https://github.com/onflow/flow-go/issues/4606) (Amlandeep)
    - [[Script Execution] Ingest initial state snapshot](https://github.com/onflow/flow-go/issues/4673) (Amlandeep)
- [OKR] Execution Data Improvements
    - [[State Sync] Verification of Execution Data ID](https://github.com/onflow/flow-go/issues/2120) (Peter)
    - [[State Sync] Add Transaction Results into BlockExecutionData](https://github.com/onflow/flow-go/issues/4455) (Peter)

**Active Epics**

- [[State Sync] Add TxResults and Verification for Execution Data](https://github.com/onflow/flow-go/issues/4410)
- [Script Execution on Access Node](https://github.com/onflow/flow-go/issues/4637)

**On Hold**

- [OKR] Enable Execution Sync on Public Network
    - On hold until execution data improvements are complete

### **Permissionless Network - Kan Z**

**Done last sprint**
- Fixed flakey tests and improved BFT testing CI job https://github.com/onflow/flow-go/pull/4652 https://github.com/onflow/flow-go/pull/4651 https://github.com/onflow/flow-go/pull/4647
- Substantially Refactored Networking Layer for Improved Structure and Maintainability https://github.com/dapperlabs/flow-go/issues/6851 https://github.com/onflow/flow-go/pull/4664 https://github.com/onflow/flow-go/pull/4635
- Finished `SyncRequest` spam protection (Application Layer Spam Prevention) for Sync Engine (1st version) https://github.com/onflow/flow-go/pull/4590
- Finished iWant Flooding mitigation https://github.com/onflow/flow-go/pull/4574/
- Completed Simplifying RPC inspector Validation Logic https://github.com/onflow/flow-go/pull/4642
- Started "GossipSub Spam Mitigation For Invalid Topics" https://github.com/dapperlabs/flow-go/issues/6798

**This sprint**
- Continue on GossipSub message forensic proposal (was postponed due to other emergency issues) https://github.com/dapperlabs/flow-go/issues/6462 (next week)
- Review Krok Team proposal on QUIC transport https://github.com/onflow/flow-go/issues/4280
- Review Krok Team proposal on Encoding https://github.com/onflow/flow-go/issues/4281
- Start "Addressing the security vulnerability in dialing procedure” https://github.com/dapperlabs/flow-go/issues/6556
- Start `RangeRequest` spam protection (Application Layer Spam Prevention) for Sync Engine https://github.com/onflow/flow-go/pull/4665
- Improve `network` unit test CI to split up the network testing package
- Publish RFP for academic researchers to create attack scenarios with BFTun
- Continue on "GossipSub Spam Mitigation For Invalid Topics" https://github.com/dapperlabs/flow-go/issues/6798
- Start "GossipSub Spam Mitigation Through Unknown Identities (Sybil Attack)" https://github.com/dapperlabs/flow-go/issues/6460

**Active Epics**

- https://github.com/dapperlabs/flow-go/issues/6287
- https://github.com/dapperlabs/flow-go/issues/6468
- BFT https://github.com/dapperlabs/flow-go/issues/6142
- BFT https://github.com/dapperlabs/flow-go/issues/6398
- BN2 https://github.com/dapperlabs/flow-go/issues/6341
- TPS  https://github.com/dapperlabs/flow-go/issues/6296

### Consensus (Dynamic Protocol State) **- Jerome P**

**Done last sprint**

**This sprint**
- Reviews of the following (Jordan S)
  - https://github.com/onflow/flow-go/pull/4579 (Yurii)
  - https://github.com/onflow/flow-go/pull/4597 (Yurii)
  - https://github.com/onflow/flow-go/pull/4613 (Yurii)
  - https://github.com/onflow/flow-go/pull/4625 (Yurii)
  - https://github.com/onflow/flow-go/pull/4545 (Yurii)
  - https://github.com/onflow/flow-go/pull/4559 (Yurii)

**On Hold (Yurii OOO)**
- https://github.com/dapperlabs/flow-go/issues/6801
- https://github.com/dapperlabs/flow-go/issues/6802
- https://github.com/dapperlabs/flow-go/issues/5514
- Creating static identity model, a huge refactoring of`flow.Identity`
    - https://github.com/dapperlabs/flow-go/issues/6232
- https://github.com/dapperlabs/flow-go/issues/5529

### **Infra - JP**


**Done last sprint**

************Node Hosting************

- Fully deprecate Sandboxnet by snapshotting and validating restoration
- Scale down Canary network to realize savings

************Node Hosting************

- Assist with DevEx support

**********************Quick Node**********************

- Assist with Quick Node mainnet Migration


**This Sprint**

**********************Quick Node**********************

- Assist with Quick Node mainnet Migration

************Node Hosting************

- Onboard Dapper nodes to Devnet
- Scale down Devnet to ideal size
- Scale down Canary to ideal size

### Key Release Dates & Breaking Changes

- Mainnet/Testnet Spork dates 
  - Next spork
     - Testnet: 11th October
     - Mainnet: 25th October 
