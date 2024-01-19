# Team Wins 🎉

- Very quick turnaround on migration gaps needed for v2 token standards - in ~1week we came up with a clear plan on what needs to be added in Cadence migrations to support the updated v2 token standards (targetting next week to close the discussion and approve the standards).

### Mainnet Uptime SLO - Last 14 days (1/5/24 to 1/18/24) - Vishal

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    100%       |       0%         |
| Block Sealing           | 99.9%   |    100%       |       0%         |
| Access API Liveness     | 99.9%  |     99.96%     |       39.7%      |

#### Incidents
- 4 incidents on the public access nodes occurred on 1/12 (Friday)
  - Root cause for two of them were the APAC region public AN nodes/edge being slow
  - Still investigating the other two.
  - Retro available [here](https://www.notion.so/dapperlabs/Mainnet-24-QN-AN-Fancraze-Finoa-issue-01-12-2024-c7a8c6bedd4345e5a72e9571ec01891e#4685bc247c624bf09b00478d3bf239eb)

### **Performance Pod Sprint Objective - Jan B**

**Done last sprint**

- Storehouse
  - Ingestion engine refactoring (Tech debt)
    - [Remove module.Local from ingestion engine](https://github.com/onflow/flow-go/pull/5243)

Atree Register Inlining migration
- [Replace hash-based validation of migrated Cadence values to use Equal()](https://github.com/onflow/flow-go/pull/5204)
- [Remove cricket moments references from atree migration](https://github.com/onflow/flow-go/pull/5242)
- [Deduplicate contract names migration](https://github.com/onflow/flow-go/pull/5143)
- [Migrate-by-account changes](https://github.com/onflow/flow-go/pull/5128)

EVM Core
- [evm non-fatal runtime errors are not handled properly by FVM](https://github.com/onflow/flow-go/issues/5149)
  - [Handle EVM errors](https://github.com/onflow/flow-go/pull/5216)
- [Update EVM test](https://github.com/onflow/flow-go/pull/5215)
- [Storage account Flow reserve](https://github.com/onflow/flow-go/issues/5105)
  - [Add storage limit check exception for EVM address](https://github.com/onflow/flow-go/pull/5106)

Other Improvements
- [Checker engine can't do the proper check when execution is behind finalization](https://github.com/onflow/flow-go/issues/5173)
  - [Refactor Checker Engine](https://github.com/onflow/flow-go/pull/5184)


**This sprint**

- Atree register inlining
  - Merge the [Atree inlining integration with Cadence](https://github.com/onflow/cadence/pull/2882)
  - Merge [integrating Atree register inlining](https://github.com/onflow/cadence/issues/2809)
  - Continue Refactoring of the migration using [mutable iterator](https://github.com/onflow/atree/pull/359)
- Continue testing / benchmarking of [Storehouse first milestone](https://github.com/onflow/flow-go/issues/4682) (execution state on disk) on Testnet.
- EVM support & development
- Support Cadence 1.0 migratons and DevEx tooling

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

Cadence 1.0 migrations
- [Migration for core contracts](https://github.com/onflow/cadence/issues/2989)
  - [Add Change Contract Code Migration](https://github.com/onflow/flow-go/pull/5191)
- [Fix the entitlements migration](https://github.com/onflow/cadence/issues/3026)
- [Improve error handling in migrations](https://github.com/onflow/cadence/issues/3001)
- [Entitlements Migration](https://github.com/onflow/cadence/pull/2951)

Cadence 1.0 new Features
- Standard Library: [Add a Range<T: Integer> type and allow in for-loop](https://github.com/onflow/cadence/issues/2482)
- [Lift * to optional references](https://github.com/onflow/cadence/issues/3005)
  - [Add support for dereferencing optional references](https://github.com/onflow/cadence/pull/3008)
- Pre-requisite for Atree Register Inlining migration validation: [Add getter for field count to composite value](https://github.com/onflow/cadence/pull/3002)

Cadence 1.0 Improvements
- [Improve parsing for backward compatibility rules](https://github.com/onflow/cadence/pull/3021)
- [Reserve more keywords for future proofing](https://github.com/onflow/cadence/issues/3019)
- [Allow use of run-time types for capability functions](https://github.com/onflow/cadence/issues/1617)
  - [Allow issuing capability controllers using type values](https://github.com/onflow/cadence/pull/3018)
- [Improve code related to new InclusiveRange type](https://github.com/onflow/cadence/issues/3017)
- [Use legacy hashing function for key removal](https://github.com/onflow/cadence/pull/3013)
- [Defensively check the dereferenced value is not a resource](https://github.com/onflow/cadence/issues/3010)

Cadence 1.0 Bugfixes
- [Fix revertibleRandom with module test](https://github.com/onflow/cadence/pull/3025)
- [prevent creation of nested storage references](https://github.com/onflow/cadence/pull/3020)
- [Fix incorrect type inference for InclusiveRange](https://github.com/onflow/cadence/pull/3009)
- [Fix incorrect type inference for InclusiveRange](https://github.com/onflow/cadence/issues/2886)
  - [Improve type inference](https://github.com/onflow/cadence/pull/3004)
- [Prevent use of non-attachment type names in default arguments](https://github.com/onflow/cadence/issues/3000)
- [Prevent use of `base` variable in default destroy event arguments outside attachments](https://github.com/onflow/cadence/issues/2999)\
- [Statically prevent referenced-typed subexpressions in default arguments to destroy events](https://github.com/onflow/cadence/issues/2996)

Docs
- [Fix styling](https://github.com/onflow/cadence-lang.org/issues/40)
- [Create documentation for InclusiveRange](https://github.com/onflow/cadence-lang.org/issues/39)

Chores
- [Update emulator to Cadence 1.0 preview 2](https://github.com/onflow/flow-emulator/issues/550)
- [Update flow-go to Cadence 1.0 preview 2](https://github.com/onflow/flow-go/issues/5246)
- [Update flow-go-sdk to Cadence 1.0 preview 2](https://github.com/onflow/flow-go-sdk/issues/557)
- [v0.42: Port #3002](https://github.com/onflow/cadence/issues/3003)
- [Sync `feature/range-type` branch with `master`](https://github.com/onflow/cadence/issues/2995)
- [Flow-go: Update to cadence 0.42.7-patch.1](https://github.com/dapperlabs/flow-go/issues/6931)
- [Flow-go-sdk: update to cadence v0.42.7](https://github.com/onflow/flow-go-sdk/issues/550)
- [Flow-go: Update Cadence to v0.42.7](https://github.com/onflow/flow-go/issues/5205)

**This sprint**

- Complete implementation of [migrations needed for v2 token standards](https://github.com/onflow/cadence/issues/3007)
- Complete enabling of [contract upgrade testing in emulator](https://github.com/onflow/cadence/issues/2947)
- Start [More permissive contract upgrade checker for 1.0 network upgrade](https://github.com/onflow/cadence/issues/2865)
- Complete [integrating Cadence 1.0 migrations with FVM](https://github.com/onflow/cadence/issues/2990) and Atree regster inlining migration and start testing the integrated migration.
- Continue support EVM on FLow initiative.
- Continue Stable Cadence Docs update and knocking tasks off the [tech debt list](https://github.com/onflow/cadence/issues/2642)


**On Hold**
- Discussion of the re-entrancy edge cases

**Active Epics**
- [Stable Cadence (aka Cadence 1.0)](https://github.com/onflow/cadence/issues/2642)


### **Access & Data Availability - Peter A**
Objective: Make execution data and script execution available on Edge nodes.

**Done last sprint**
* Optimize header ID calculation in get events - [PR 5214](https://github.com/onflow/flow-go/pull/5214)
* Log script exec mismatches as error - [PR 5194](https://github.com/onflow/flow-go/pull/5194)
* Deployed local events and collection indexing to devnet/mainnet
* Analyzed errors from QuickNode script execution.

**This sprint**

- Script Execution on ANs
  - Debug performance issues seen on devnet and mainnet
  - Address outstanding issues [Issue 5250](https://github.com/onflow/flow-go/issues/5250), [Issue 5251](https://github.com/onflow/flow-go/issues/5251)
- Support KROK team with
  - Use local index for Transaction Results in Access API - [Issue 4753](https://github.com/onflow/flow-go/issues/4753)
  - Enable execution state sync on observers - [Issue 5186](https://github.com/onflow/flow-go/issues/5186)
  - Add execution state sync to public network - [Issue 2795](https://github.com/onflow/flow-go/issues/2795)

**Active Epics**

- Script Execution on Access Node - [Issue 4637](https://github.com/onflow/flow-go/issues/4637)
- Integrate local execution state indexes into Access API - [Issue 4750](https://github.com/onflow/flow-go/issues/4750)


### **Permissionless Network - Yahya H**

- **Done last sprint:**
  - Duplicate Topic in IHAVE Control Message in GossipSub (edge-case of GossipSub) [Issue6927](https://github.com/dapperlabs/flow-go/issues/6927)
  - [Enhance RPC Inspection with Configurable Thresholds and Granular Metrics Collection](https://github.com/onflow/flow-go/pull/5234)
  - [Atomic AdjustWithInit and GetWithInit for Backend mempools](https://github.com/onflow/flow-go/pull/5206)
  - [Configurable GossipSub Peer Scoring Parameters](https://github.com/onflow/flow-go/pull/5210)
  - [Implementing a silence period for GossipSub peer scoring](https://github.com/onflow/flow-go/pull/5084)
  - [Apply GossipSub Spam Penalty to Misbehaving Peers Based on Count and Err in InvCtrlMsgNotif](https://github.com/onflow/flow-go/pull/4978)

- **Next sprint:**
    - Wrapping up the `mainnet24` [peer scoring incident](https://github.com/dapperlabs/flow-go/issues/6913)
    - [Enhancing Gossipsub Scoring Mechanism for Configurable RPC Inspection enable/disable via configs](https://github.com/dapperlabs/flow-go/issues/6930)
    - [Creating comprehensive GossipSub forensics dashboard](https://github.com/dapperlabs/flow-go/issues/6933)
    - [Configurable invalid topic id threshold for GossipSub RPC inspection](https://github.com/dapperlabs/flow-go/issues/6934)
    - [Fixing flakey `TestSubscriptionValidator_Integration`](https://github.com/dapperlabs/flow-go/issues/6932)


**Active Epics**

- https://github.com/dapperlabs/flow-go/issues/6287
- https://github.com/dapperlabs/flow-go/issues/6468
- BFT https://github.com/dapperlabs/flow-go/issues/6142
- BFT https://github.com/dapperlabs/flow-go/issues/6398
- BN2 https://github.com/dapperlabs/flow-go/issues/6341
- TPS  https://github.com/dapperlabs/flow-go/issues/6296
- [Zero Quarantined Networking Layer Tests Epic](https://github.com/onflow/flow-go/issues/4816)

### **Consensus (Dynamic Protocol State) - Yurii**

**Ongoing**

* [Design - Dynamic Protocol State Key-Value Store](https://www.notion.so/dapperlabs/Protocol-state-key-value-storage-497326ff9cf44ff4a70610a0dad329b3?pvs=4) - generalizing Dynamic Protocol State beyond identity table changes
* [Design - Sporkless Epoch Fallback Recovery](https://www.notion.so/dapperlabs/Spork-less-Epoch-Fallback-Recovery-Design-II-Epoch-Extensions-a7673e45e9064d12b6b48aa517bd1763?pvs=4) - enabling recovery from EFM via governance multisig and without spork

**Starting Next Sprint**
* blog post for Dynamic Protocol State release
* potentially start exploring path to permissionless Consensus nodes


### **Infra - JP**

**Done last sprint**

**This Sprint**

************Node Hosting************
- Remove unnecessary Dapper nodes that have been migrated
- Assist with HCU

************FF Migration************
- Terraform synthetic monitor alerts
- Onboard users into new Grafana stack
- Configure all nodes to deliver logs to both Grafana stacks
- Configure all prometheus instances to deliver metrics to both Grafana stacks 

### FLIPs Tracker - Vishal

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 8  |    10    |       0          |       6          |        **24**          |
| Proposed    | 2  |    2     |       2          |       1          |        **7**          |
| Accepted    | 2  |    1     |       1       |       1          |        **5**          |
| Rejected    | 0  |    0     |       1       |       0          |        **1**          |
| Implemented | 1  |    19    |       1       |       0          |        **21**          |
| Released    | 4  |    0     |       2       |       4          |        **10**          |
| Total       | **17**  |    **32**    |       **7**       |       **12**          |        **68**          |

- 9 new Flips were added across Application, Cadence and Protocol in Drafter or Proposed state.
- Number of Accepted, Implemented and Released FLIPs stayed the same.
  
### Key Release Dates & Breaking Changes

- Next Mainnet/Testnet network upgrade (spork) dates: ~Q1 2024
- HCU
  Canary  - 1/19 (today) and on 1/22 (Monday)
  Testnet - 1/24 (Wednesday)
  Mainnet - 2/7 (Wednesday)
