# Team Wins 🎉
-

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
- 
  
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
-

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
-

**Active Epics**

- https://github.com/dapperlabs/flow-go/issues/6287
- https://github.com/dapperlabs/flow-go/issues/6468
- BFT https://github.com/dapperlabs/flow-go/issues/6142
- BFT https://github.com/dapperlabs/flow-go/issues/6398
- BN2 https://github.com/dapperlabs/flow-go/issues/6341
- TPS  https://github.com/dapperlabs/flow-go/issues/6296

### Consensus (Dynamic Protocol State) **- Jerome P**

**Done last sprint**
-

### **Infra - JP**

**Done last sprint**
- 

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
