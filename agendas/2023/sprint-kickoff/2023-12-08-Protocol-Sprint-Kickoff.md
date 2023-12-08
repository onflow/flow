# Team Wins 🎉

- Completed merging of all major Storehouse M1 PRs to flow-go master (behind a feature flag) & starting to benchmark storehouse on Testnet.
- Merged last Cadence 1.0 feature
- Deployed [multiple security fixes](https://github.com/onflow/cadence/pull/2955) on Mainnet
- Staking contract changes to ensure there are always three open Permissionless Access node slots available.


### Mainnet Uptime SLO - Last 14 days (11/24 to 12/08)

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%  |    100%       |       0%          |
| Block Finalization      | 99.9%  |    100%       |       0%          |
| Transaction Execution   | 99.9%  |    99.96%     |       39.7%       |
| Block Sealing           | 99.9%  |    99.96%     |       39.7%       |
| Access API Liveness     | 99.9%  |    99.973%    |       27.3%       |

#### Incidents
- HCU on 11/29

### **Performance Pod Sprint Objective - Jan B**

**Done last sprint**

Storehouse M1
- [Fix getting highest executed block ID when storehouse is enabled](https://github.com/onflow/flow-go/pull/5109)
- [Fix storage snapshot](https://github.com/onflow/flow-go/pull/5107)
- [Optimize finalized reader to cache last finalized height](https://github.com/onflow/flow-go/pull/5056)
- [Adding flag to enable storehouse](https://github.com/onflow/flow-go/issues/5054)
- [Optimization: Reduce finalized block call](https://github.com/onflow/flow-go/pull/5053)

EVM
- [Events emitted from EVM are not encoded as other FVM events](https://github.com/onflow/flow-go/issues/5079)
  - [Emit events as Cadence events](https://github.com/onflow/flow-go/pull/5090)
- [Add a transaction test](https://github.com/onflow/flow-emulator/issues/515)
- [Transaction execution fails](https://github.com/onflow/flow-go/issues/5068)
  - [Fix the setup process](https://github.com/onflow/flow-go/pull/5069)
- [Add EVM transactions to FVM benchmark tests](https://github.com/onflow/flow-go/pull/5061)

Atree register inlining
- Run migration program modified to use atree inlining. Inlined checkpoint file is 215GB (was 348GB).  Also, tests indicate that using inlined checkpoint file as input can reduce future migration durations and peak RAM use. Need to test on larger vm with more RAM to confirm durations, etc.
- [Add feature to support mutation of primitive values returned by iterators](https://github.com/onflow/atree/issues/356)
- [Handle edge cases needed to support mutation of inlined maps and arrays during iteration](https://github.com/onflow/atree/issues/356)
  - Ready for review: [Add feature to support mutation for array and map iterators](https://github.com/onflow/atree/pull/359)


Other Improvements
- E-E tests
  - [Fix storage fees test](https://github.com/onflow/flow-e2e-tests/issues/50)
  - [Update e2e tests with new flow-go](https://github.com/onflow/flow-e2e-tests/issues/49)
- Emulator
  - [Unify core contracts address definitions](https://github.com/onflow/flow-go/pull/5033)
  - [Use core contract list from flow-go](https://github.com/onflow/flow-emulator/issues/513)


**This sprint**

- Atree register inlining
  - Merge the [Atree inlining integration with Cadence](https://github.com/onflow/cadence/pull/2882)
  - Continue work on validating [migration](https://github.com/onflow/flow-go/pull/4633) of [integrated solution for Atree register inlining](https://github.com/onflow/cadence/issues/2809)
  - Refactor the migration using [mutable iterator](https://github.com/onflow/atree/pull/359)
- Continue testing / benchmarking of [Storehouse first milestone](https://github.com/onflow/flow-go/issues/4682) (execution state on disk) on Testnet.
- EVM support & development

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

Feature
- [New Behavior for Attachments and Entitlements](https://github.com/onflow/cadence/issues/2921)

FLIP
- [FLIP for new behavior for attachments with entitlements](https://github.com/onflow/flips/issues/213)

Improvements
- 1.0: [References to references are not properly checked](https://github.com/onflow/cadence/issues/2873)
  - [throw error on the creation of a nested reference](https://github.com/onflow/cadence/pull/2965)
- 1.0: [Generalize the migrations and make common codes re-usable](https://github.com/onflow/cadence/issues/2942)
- master: [Improve resource-reference tracking](https://github.com/onflow/cadence/pull/2958)

1.0 Migrations
- [Add String normalizing migration](https://github.com/onflow/cadence/issues/2937)
- [Add account type migration](https://github.com/onflow/cadence/issues/2923)

Bugfixes
- [Port bug fixes from v0.42.5-patch.1](https://github.com/onflow/cadence/issues/2956)

Tech-debt
- [Remove unsafeRandom](https://github.com/onflow/cadence/issues/2909)

Tests
- [Add test for container mutation while iterating](https://github.com/onflow/cadence/issues/2960)

Docs
- [Remove references to destructors and add docs for default destroy events](https://github.com/onflow/cadence-lang.org/issues/31)
- [Rewrite entitlements and attachments docs for new changes](https://github.com/onflow/cadence-lang.org/issues/30)
- [Document Account.Capabilities.exists](https://github.com/onflow/cadence-lang.org/issues/29)
- [Remove incorrect statements about reentrancy](https://github.com/onflow/cadence-lang.org/issues/28)

Updating Downstream dependencies
- SDK [Update cadence to v0.42.6](https://github.com/onflow/flow-go-sdk/issues/529)
- flow-go [Update to Cadence v0.42.5-patch.1](https://github.com/dapperlabs/flow-go/issues/6914)

**This sprint**
- Merge Cadence 1.0 feature branch to Cadence master
- Release Cadence 1.0 RC1
- Release Emulator based on Cadence 1.0 RC1 release
- Continue support EVM on FLow initiative.
- Continue work on Cadence 1.0 migrations.
- Continue Stable Cadence Docs update and knocking tasks off the [tech debt list](https://github.com/onflow/cadence/issues/2642)
- Publish Cadence 1.0 release plan on forum
 
**On Hold**
- Discussion of the re-entrancy edge cases

**Active Epics**
- [Stable Cadence (aka Cadence 1.0)](https://github.com/onflow/cadence/issues/2642)


### **Access & Data Availability - Peter A**
Objective: Make execution data and script execution available on Edge nodes.

**Done last sprint**


**This sprint**

- Script Execution on ANs
  - Use version beacon to ensure correct version for script exec - [Issue 5040](https://github.com/onflow/flow-go/issues/5040)
  - Add GetRegisters API endpoint to ExecutionData API - [Issue 4756](https://github.com/onflow/flow-go/issues/4756)
  - Work with QuickNode to setup script exec in compare mode on public ANs
- Misc
  - Work with 4d on getting event streaming and CCF into libraries.

**Active Epics**

- Script Execution on Access Node - [Issue 4637](https://github.com/onflow/flow-go/issues/4637)
- Integrate local execution state indexes into Access API - [Issue 4750](https://github.com/onflow/flow-go/issues/4750)


### **Permissionless Network - Yahya H**

**Done last sprint**
  - Implemented the last part (part-3) of the [Optimizing memory-intensive RPC inspection operations](https://github.com/dapperlabs/flow-go/issues/6870), it is about [caching the application-specific score](https://github.com/onflow/flow-go/pull/5045) (under review).
  - Developed the last part of the solution to `mainnet23` [nodes blocking issue](https://github.com/dapperlabs/flow-go/issues/6895), the [last PR](https://github.com/onflow/flow-go/pull/5115) (under-review).
  - Fixed Flakey **`TestGossipSubSpamMitigationIntegration`** [test](https://github.com/dapperlabs/flow-go/issues/6915) [PR 5095](https://github.com/onflow/flow-go/pull/5095).
  - Addressed the issue where nodes will penalize each other during startup due to the network not being completely ready causing scoring penalty false positives by implementing a silence period for GossipSuB [PR 5084](https://github.com/onflow/flow-go/pull/5084) (under review).
  - Concluded the [multi-error invalid control message](https://github.com/dapperlabs/flow-go/issues/6664) notification [PR 4978](https://github.com/onflow/flow-go/pull/4978) (under review).


**Still in Progress**
  - Debugging the `mainnet24` [peer scoring incident](https://github.com/dapperlabs/flow-go/issues/6913). Our first investigator PR is under review, [which extends GossipSub router telemetry](https://github.com/onflow/flow-go/pull/5083).
  - GossipSub Replay attack, implementing testing and updating base branch to contain new config file refactoring. [PR 5058](https://github.com/onflow/flow-go/pull/5058)


**Starting Next Sprint**:
  - [Concluding GossipSub Message Forensics FLIP and planning the development](https://github.com/onflow/flips/pull/195)
  - [Fixing flakey `TestGossipSubIHaveBrokenPromises_Below_Threshold` (and Above Threshold) ([Zero Quarantined Networking Layer Tests Epic](https://github.com/onflow/flow-go/issues/4816))
  - Fixing flakey tests fixture control message validation inspector test failures ([Zero Quarantined Networking Layer Tests Epic](https://github.com/onflow/flow-go/issues/4816))

**Active Epics**

- https://github.com/dapperlabs/flow-go/issues/6287
- https://github.com/dapperlabs/flow-go/issues/6468
- BFT https://github.com/dapperlabs/flow-go/issues/6142
- BFT https://github.com/dapperlabs/flow-go/issues/6398
- BN2 https://github.com/dapperlabs/flow-go/issues/6341
- TPS  https://github.com/dapperlabs/flow-go/issues/6296
- [Zero Quarantined Networking Layer Tests Epic](https://github.com/onflow/flow-go/issues/4816)

### **Consensus (Dynamic Protocol State) - Alex H**

**Done last sprint for Dynamic Protocol State**
- completed most of remaining tech todos for Dynamic Protocol State ([epic #4649](https://github.com/onflow/flow-go/issues/4649))

**Done last sprint (other topics)**
- largely completed automation of Cruise Control system [PR #5071](https://github.com/onflow/flow-go/pull/5071) / [FLIP 204](https://github.com/onflow/flips/blob/main/protocol/20231003-service-account-specified-epoch-switchover.md.md)

**Next Sprint**
- last few clean ups for Dynamic Protocol State
- Integration testing for Dynamic Protocol State
- potentially: exploring system-event-driven recovery from Epoch Fallback Mode [EFM] 

### **Infra - JP**

**Done last sprint**

************Node Hosting************
- Assist with Canary Sporks
- Assist with HCU
- Create automation for managing Dapper nodes
- Increase Devnet Data disks
- Create new Canary EN for storehouse testing in shadow mode
- Create infrastructure & configuration for Crescendo network

************FF Migration************
- Create new KMS key for mgmt of Dapper nodes
- Create strategy for observability migration
- Create automation for dashboard migration
- Create automation for enabling multi-destination loggging
- Create promtehus configuration for enabling multi-destination metrics
- Work with Grafana team in prepration for migration

************Benchnet************
- Grant additional access to K8s cluster and executing cleanup

**This Sprint**

************Node Hosting************
- Execute spork for Crescendo network
- Configure load balancer for Crescendo network
- Remove unnecessary Dapper nodes that have been migrated

************FF Migration************
- Create automation for migrating alerts 
- Create strategy and autoamtion for moving to IRM
- Configure all nodes to deliver logs to both destinations
- Configure all prometheus instances to deliver metrics to both destinations

************Benchnet************
- Create documentation for leveraging additional access to benchnet

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
