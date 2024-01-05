# Team Wins 🎉

- Dynamic Protocol State v1 ready for mainnet deployment (next spork)
- Completed all Cadence 1.0 migrations.
- Merged Cadence 1.0 feature branch to Cadence master
- [Released CLI & Emulator](https://forum.flow.com/t/update-on-cadence-1-0/5197/7?u=jan) based on Cadence 1.0 RC1 release - this completes [Cadence 1.0 launch plan Milestone 1](https://github.com/orgs/onflow/projects/35/views/5).
- Published [Cadence 1.0 release plan](https://forum.flow.com/t/cadence-1-0-upgrade-plan/5477) on forum.
- Serving events endpoints from local data on devnet
- QuickNode running ANs with script execution in compare mode on mainnet & testnet

### Mainnet Uptime SLO - Last 14 days (12/23/23 to 1/5/24)

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%  |    100%       |       0%          |
| Block Finalization      | 99.9%  |    100%       |       0%          |
| Transaction Execution (Dashboard is off)   | 99.9%  |    100%       |       0%          |
| Block Sealing (Dasbhoard is off)           | 99.9%  |    100%       |       0%          |
| Access API Liveness     | 99.936%  |    100%       |       64.5%          |

#### Incidents
- N/A

### **Performance Pod Sprint Objective - Jan B**

**Done last sprint**

Storehouse
- [Optimize finalized reader to use block id index](https://github.com/onflow/flow-go/pull/5175)
- [Use unfinalized loader when storehouse is enabled](https://github.com/onflow/flow-go/pull/5151)
- [Improve InMemoryRegisterStore's IsBlockExecuted method](https://github.com/onflow/flow-go/pull/5125)
- [Improving logging](https://github.com/onflow/flow-go/issues/5124)
- [Add tests for storehouse-backed execution state](https://github.com/onflow/flow-go/pull/5086)
- [M1 - Add metrics for register store](https://github.com/onflow/flow-go/issues/5170)
- [M1 - Fix dynamic bootstrapping for storehouse](https://github.com/onflow/flow-go/pull/5165)

EVM
- [Add balance to the account stdlib](https://github.com/onflow/flow-go/issues/5096)
  - [Bridged account balance function](https://github.com/onflow/flow-go/pull/5098)
- [Benchmarking: analyze EVM state database](https://github.com/onflow/flow-go/issues/5018)
  - [Benchmark state transitions](https://github.com/onflow/flow-go/pull/5032)
- [Setup EVM account Flow vault during bootstrap](https://github.com/onflow/flow-go/pull/5070)

Atree register inlining
- Continued work on replacing hash-based migration validation using Equal() instead.
- Optimization of execution state migration, reducing memory usage: [Migrate payloads by reference](https://github.com/onflow/flow-go/pull/5123)
- Improved migration progress logging: [Change progress log to be more verbose](https://github.com/onflow/flow-go/pull/5122)


**This sprint**

- Atree register inlining
  - Merge the [Atree inlining integration with Cadence](https://github.com/onflow/cadence/pull/2882)
  - Opened [PR 5204](https://github.com/onflow/flow-go/pull/5204) to replace hash-based validation used by [migration](https://github.com/onflow/flow-go/pull/4633) in order to prepare for [integrating Atree register inlining](https://github.com/onflow/cadence/issues/2809)
  - Starting Refactoring of the migration using [mutable iterator](https://github.com/onflow/atree/pull/359)
- Continue testing / benchmarking of [Storehouse first milestone](https://github.com/onflow/flow-go/issues/4682) (execution state on disk) on Testnet.
- EVM support & development
- Help with Cadence 1.0 migratons and DevEx tooling

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

! Breaking Changes
- [Remove deprecated constant from the crypto contract](https://github.com/onflow/cadence/issues/1447)
  - [Remove deprecated domain separation tag from Crypto contract](https://github.com/onflow/cadence/pull/2984)

1.0 Network Upgrade tasks
- Enabling staged contract update mechanism on Cadence 0.42: [Port tryUpdate method to Cadence v0.42 version](https://github.com/onflow/cadence/issues/2963)
- Type value migration improvement: [Use old hash/ID generation to remove keys](https://github.com/onflow/cadence/pull/2987)
- flow-nft: [v2: Remove resource destructor from Example NFT contract](https://github.com/onflow/flow-nft/issues/197)
- [Add state migration for removing all values from private domain](https://github.com/onflow/cadence/pull/2974)
- [Migration - Capability Controllers](https://github.com/onflow/cadence/issues/2875)
  - [Capability controllers migration](https://github.com/onflow/cadence/pull/2912)

Improvements
- [Extend pragma expressions](https://github.com/onflow/cadence/pull/2993)
- [Report bespoke error for restricted types parsed as type arguments](https://github.com/onflow/cadence/pull/2985)
- [Various improvements in migrations, performance and error handling / reporting](https://github.com/onflow/cadence/pull/2979)
- [Improve Account type migration](https://github.com/onflow/cadence/issues/2973)
- [Make entitlement set access incomparable](https://github.com/onflow/cadence/pull/2972)
- emulator: [Various improvements](https://github.com/onflow/flow-emulator/issues/527)

Bugfixes
- [Dictionaries key'd by type are order-dependent](https://github.com/onflow/cadence/issues/2681)
  - [State migration for type values with two or more interfaces](https://github.com/onflow/cadence/pull/2981)
- emulator: [Fix system chunk transaction](https://github.com/onflow/flow-emulator/issues/533)
- [Fix GetNativeCompositeValueComputedFields](https://github.com/onflow/cadence/issues/2977)
- [References to references are not properly checked](https://github.com/onflow/cadence/issues/2873)
  - [Static check to prevent nested references](https://github.com/onflow/cadence/pull/2970)

Tech-debt
- [Define what a "Primitive Type" is in Cadence](https://github.com/onflow/cadence/issues/2929)
  - [Use IsPrimitiveType to check default destructor params](https://github.com/onflow/cadence/pull/2980)
- [Cleanup reference tracking](https://github.com/onflow/cadence/issues/2969)

Tests
- [Test type order insignificance](https://github.com/onflow/cadence/issues/2967)

Docs
- [add documentation for new string functions](https://github.com/onflow/cadence-lang.org/issues/36)
- [Improve formatting of access modifiers in documentation](https://github.com/onflow/cadence-lang.org/issues/35)
- [Misc documentation improvements](https://github.com/onflow/cadence-lang.org/issues/34)
- [Add view annotations to view library functions](https://github.com/onflow/cadence-lang.org/issues/33)

Chores
- Dependency updates, flow-go
  - [Update Cadence 1.0 feature branch](https://github.com/onflow/flow-go/issues/5171)
  - [Update Cadence 1.0 branch](https://github.com/onflow/flow-go/issues/5102)
  - [Update cadence to v0.42.6](https://github.com/onflow/flow-go/issues/5093)
  - [v0.32 - Update cadence to v0.42.6](https://github.com/onflow/flow-go/issues/5092)
- Dependency upgrade, CLI:
  - [Fix installation of gocov-html and mockery](https://github.com/onflow/flow-cli/issues/1314)
  - [Update to Cadence 1.0 RC1](https://github.com/onflow/flow-cli/issues/1313)
- Dependency update, emulator:
  - [pre Cadence 1.0 - Update to latest flow-go master](https://github.com/onflow/flow-emulator/pull/541)
  - [Update to latest flow-go feature/stable-cadence](https://github.com/onflow/flow-emulator/issues/540)
  - [Update to Cadence 1.0](https://github.com/onflow/flow-emulator/issues/536)
  - [Update Cadence 1.0 feature branch to latest Cadence version](https://github.com/onflow/flow-emulator/issues/532)
- Dependency upgrade, Language Server: [LS Update to Cadence 1.0 RC1](https://github.com/onflow/cadence-tools/issues/260)
- Dependency upgrade, cadence tools, tests: [Update to Cadence 0ff20e15e7e1](https://github.com/onflow/cadence-tools/issues/259)
- Dependency upgrade, cadence tools, lint: [Update to Cadence 1.0 RC1](https://github.com/onflow/cadence-tools/issues/258)
- [FLIP 89: Fix header levels](https://github.com/onflow/flips/issues/231)
- [Update status of Cadence FLIPs](https://github.com/onflow/flips/issues/230)
- [Merge Stable Cadence branch into master](https://github.com/onflow/cadence/issues/2971)
- [Sync stable-cadence branch with master](https://github.com/onflow/cadence/issues/2968)


**This sprint**

- Continue support EVM on FLow initiative.
- Complete enabling of [contract upgrade testing in emulator](https://github.com/onflow/cadence/issues/2947)
- Start [More permissive contract upgrade checker for 1.0 network upgrade](https://github.com/onflow/cadence/issues/2865)
- Complete [integrating Cadence 1.0 migrations with FVM](https://github.com/onflow/cadence/issues/2990) and Atree regster inlining migration and start testing the integrated migration.
- Continue Stable Cadence Docs update and knocking tasks off the [tech debt list](https://github.com/onflow/cadence/issues/2642)


**On Hold**
- Discussion of the re-entrancy edge cases

**Active Epics**
- [Stable Cadence (aka Cadence 1.0)](https://github.com/onflow/cadence/issues/2642)


### **Access & Data Availability - Peter A**
Objective: Make execution data and script execution available on Edge nodes.

**Done last sprint**

* Use local events for AccessAPI get events endpoints - [PR 4851](https://github.com/onflow/flow-go/pull/4851)
* Use local events for event streaming API - [PR 5160](https://github.com/onflow/flow-go/pull/5160)
* Index collections from execution data - [PR 5163](https://github.com/onflow/flow-go/pull/5163)
* Refactor NewRegisterID to accept address - [PR 5144](https://github.com/onflow/flow-go/pull/5144)
* Fix GetRegisterValues input types - [PR 5138](https://github.com/onflow/flow-go/pull/5138)
* Update RegisterID protobuf to use bytes - [PR 1417](https://github.com/onflow/flow/pull/1417)
* Add support for event streaming API - [SDK PR 417](https://github.com/onflow/flow-go-sdk/pull/417)

**This sprint**

- Script Execution on ANs
  - Use version beacon to ensure correct version for script exec - [Issue 5040](https://github.com/onflow/flow-go/issues/5040)
  - Analyze results from QuickNode running script exec in compare mode on public nodes
  - Debug high CPU scripts/accounts on devnet
- Support KROK team with
  - Use local index for Transaction Results in Access API - [Issue 4753](https://github.com/onflow/flow-go/issues/4753)
  - Enable execution state sync on observers - [Issue 5186](https://github.com/onflow/flow-go/issues/5186)
  - Add execution state sync to public network - [Issue 2795](https://github.com/onflow/flow-go/issues/2795)

**Active Epics**

- Script Execution on Access Node - [Issue 4637](https://github.com/onflow/flow-go/issues/4637)
- Integrate local execution state indexes into Access API - [Issue 4750](https://github.com/onflow/flow-go/issues/4750)


### **Permissionless Network - Yahya H**

- **Done last sprint:**
    - Fixed flakey `TestGossipSubIHaveBrokenPromises_Below_Threshold` and `TestGossipSubIHaveBrokenPromises_Above_Threshold` [PR5145](https://github.com/onflow/flow-go/pull/5145)
    - Debugged the `mainnet24` [peer scoring incident](https://github.com/dapperlabs/flow-go/issues/6913).
        - The short term plan deployed on a single node [5180](https://github.com/onflow/flow-go/pull/5180), [5176](https://github.com/onflow/flow-go/pull/5176), [5172](https://github.com/onflow/flow-go/pull/5172)
        - The long term plan is in progress [6924](https://github.com/dapperlabs/flow-go/issues/6924), [6923](https://github.com/dapperlabs/flow-go/issues/6923)
    - Update open PR’s with new file structure and config structure
        - [Apply GossipSub Spam Penalty to Misbehaving Peers Based on Count and Err in InvCtrlMsgNotif](https://github.com/onflow/flow-go/pull/4978)
        - Implements a silence period for GossipSub peer scoring [PR5084](https://github.com/onflow/flow-go/pull/5084)
        - GossipSub Replay Message Mitigation [PR5058](https://github.com/onflow/flow-go/pull/5058)

- **Next sprint:**
    - Concluding the `mainnet24` [peer scoring incident](https://github.com/dapperlabs/flow-go/issues/6913)
      - Scoring Parameters Config and Relaxed Behavioral Penalty [Issue6923](https://github.com/dapperlabs/flow-go/issues/6923)
    - Duplicate Topic in IHAVE Control Message in GossipSub (potential internal bug of GossipSub) [Issue6927](https://github.com/dapperlabs/flow-go/issues/6927)
    - Atomic `AdjustWithInit` and `GetWithInit` for Backend mempools [Issue6929](https://github.com/dapperlabs/flow-go/issues/6929)
    - Improve RPC control message inspector error metrics [Issue1905](https://github.com/dapperlabs/flow-internal/issues/1905)


**Active Epics**

- https://github.com/dapperlabs/flow-go/issues/6287
- https://github.com/dapperlabs/flow-go/issues/6468
- BFT https://github.com/dapperlabs/flow-go/issues/6142
- BFT https://github.com/dapperlabs/flow-go/issues/6398
- BN2 https://github.com/dapperlabs/flow-go/issues/6341
- TPS  https://github.com/dapperlabs/flow-go/issues/6296
- [Zero Quarantined Networking Layer Tests Epic](https://github.com/onflow/flow-go/issues/4816)

### **Consensus (Dynamic Protocol State) - Yurii**

**Dynamic Protocol State v1 ready for mainnet** :tada:
- last remaining cleanups done
- passed integration and benchnet testing


**Ongoing**
- exploring system-event-driven recovery from Epoch Fallback Mode [EFM] (see [notion doc `Spork-less Epoch Fallback Recovery (Design)`](https://www.notion.so/dapperlabs/Spork-less-Epoch-Fallback-Recovery-Design-712b5a3afb5b47239d3610a356a8cd29?pvs=4) for details)

**Starting Next Sprint**
* blog post about dynamic protocol state
* potentially start exploring path to permissionless Consensus nodes


### **Infra - JP**

**Done last sprint**

************Node Hosting************
- Create Crescendo network configuration 
- Create Crescendo network infrastructure
- Execute Crescendo spork from Devnet
- Configure load balancer for Crescendo network
- Upgrade data disks on Mainnet & Devnet Nodes

************FF Migration************
- Terraform Grafana Dashboards for migration 
- Terraform Grafana protocol & resource alerts for migration 
- Terraform Grafana contact points & notification policies for migration 
- Terraform Grafana teams for migration from PagerDuty to Grafana OnCall 
- Terraform Synthetic monitors for migration from PagerDuty to Grafana OnCall 

************Support************
- Assist with the creation of isolated Devnet EN for storehouse testing 
- Assist with the creation of isolated Mainnet EN for storehouse testing 
- Provided support for Flow DevEx migration efforts 
- Update Prometheus Node to include additional QuickNode IPs to be scraped

************Benchnet************
- Create documentation for leveraging additional access to benchnet
- Update Benchnet creation workflow to execute bootstrapping in parallel to docker builds

************Automation************
- Update Docker build workflows to leverage deploy keys rather than PATs to pull private dependencies
- Update Docker sync workflows to leverage deploy keys rather than PATs to fix broken sync 

**This Sprint**

************Node Hosting************
- Remove unnecessary Dapper nodes that have been migrated
- Assist with HCU

************FF Migration************
- Terraform synthetic monitor alerts
- Onboard users into new Grafana stack
- Configure all nodes to deliver logs to both Grafana stacks
- Configure all prometheus instances to deliver metrics to both Grafana stacks 

### FLIPs Tracker (🆕 section) - Kshitij

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted | 5  |    6       |       0          |       6          |        **17**          |
| Proposed      | 1  |    2       |       2          |       0          |        **5**          |
| Accepted   | 2  |    1     |       1       |       1          |        **5**          |
| Rejected           | 0  |    0     |       1       |       0          |        **1**          |
| Implemented     | 1  |    19    |       1       |       0          |        **21**          |
| Released     | 4  |    0    |       2       |       4          |        **10**          |
| Total     | **13**  |    **28**    |       **7**       |       **11**          |        **59**          |

### Key Release Dates & Breaking Changes

- Next Mainnet/Testnet network upgrade (spork) dates: ~Q1 2024
- Crescendo network going live on Wednesday, 12/13
