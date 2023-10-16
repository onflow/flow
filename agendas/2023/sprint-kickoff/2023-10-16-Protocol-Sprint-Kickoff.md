# Team Wins 🎉

- Atree register inlining - all Atree work merged and tested, migration optimized form 9 to just under 5 hours. (Jan)
- Fixed 6 bugs in Cadence 1.0 branch, some of those coming from community and Security review. (Jan)
- Storehouse runing on localnet now! (Jan)


### Mainnet Uptime SLO - Last 14 days (10/3 to 10/16)

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%  |    100%       |       0%          |
| Block Finalization      | 99.9%  |    99.781%    |       219%        |
| Transaction Execution   | 99.9%  |    99.846%    |       154%        |
| Block Sealing           | 99.9%  |    99.691%    |       309%        |
| Access API Liveness     | 99.9%  |    99.817%    |       183%        |

#### Incidents
- 15 Consensus nodes run by an operator were reset to the start of the spork and fell behind.
  - Flow mainnet is now in the Epoch fallback mode.
- Public access nodes became inaccessible due to a DNS change by the operator.

*99.9% translates to a maximum allowed downtime of ~20m8s for a 14-day window.*

*99% translates to a maximum allowed downtime of ~3hr20min for a 14-day window.*



### **Performance Pod Sprint Objective - Jan B**

**Done last sprint**

- Atree Register Inlining (merged 20+ KLOC, ran 200+ hours of smoke tests)
  - [Atree Register Inlining and Data Deduplication](https://github.com/onflow/atree/pull/342)
  - [Add readonly iterators and support value mutations only from non-readonly iterators](https://github.com/onflow/atree/pull/345)
  - [Update smoke test for atree inlining](https://github.com/onflow/atree/pull/348) (ran 200+ hours)
  - [Make smoke tests check recently added data deduplication feature](https://github.com/onflow/atree/pull/348) (unmerged, but ran 100+ hours)

- Other improvements
  - [Tiny QoL makefile update for updating dependencies](https://github.com/onflow/flow-go/pull/4813)
  - [Log stop height] (https://github.com/onflow/flow-go/pull/4786)


**This sprint**

- [Continue Cadence integration to use Atree register inlining](https://github.com/onflow/cadence/issues/2809)
- Continue testing and optimizing [Atree register inlining migration](https://github.com/onflow/flow-go/pull/4633)
- Continue implementation of [Storehouse first milestone](https://github.com/onflow/flow-go/issues/4682) (execution state on disk)

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

Rolled-out critical security fix (v0.31.21-patch.1) on Testnet and Mainnet.

Features
- [Master - Allow native functions to have type parameters](https://github.com/onflow/cadence/pull/2850)

Bugfixes
- [Master - Port internal fix 145: Prevent re-deploy in same transaction](https://github.com/onflow/cadence/pull/2846)
- [Master - Port internal 144: Fix swap statement evaluation](https://github.com/onflow/cadence/pull/2845)
- [Master - Port internal 141: Fix swapping in resource array](https://github.com/onflow/cadence/pull/2844)
- [0.39 - Port internal fix 145: Prevent re-deploy in same transaction](https://github.com/onflow/cadence/pull/2843)
- [0.39 - Port internal 144: Fix swap statement evaluation](https://github.com/onflow/cadence/pull/2842)
- [0.39 - Port internal 141: Fix swapping in resource array](https://github.com/onflow/cadence/pull/2841)
- [1.0 - Fix field assignment via references](https://github.com/onflow/cadence/pull/2868)
- [1.0 - Properly set base on loaded attachments during attachment iteration](https://github.com/onflow/cadence/pull/2847)
- [1.0 - Require full codomain of map when assigning to mapped field](https://github.com/onflow/cadence/pull/2840)
- [1.0 - Skip adding malformed entitlement relations to maps](https://github.com/onflow/cadence/pull/2838)
- [1.0 - Check before statements in view contexts](https://github.com/onflow/cadence/pull/2835)
- [1.0 - Fix memory metering for loading stored values](https://github.com/onflow/cadence/pull/2509)

Chores
- [Sync Stable Cadence](https://github.com/onflow/cadence/issues/2854)
- [flow-go - Update to Cadence v0.39.16](https://github.com/onflow/flow-go/issues/4799)


**This sprint**

- continue support EVM on FLow initiative.
- Continuing with Stable Cadence scope / discussions
    - Ongoing FLIPs:
        - [Relaxing interface conformance restrictions](https://github.com/onflow/flips/pull/134)
    - [Flip for removal of custom destructors](https://github.com/onflow/flips/pull/131)
- Resume work on Cadence 1.0 migrations.
- Continue Stable Cadence Docs update and knocking tasks off the [tech debt list](https://github.com/onflow/cadence/issues/2642)
 
**On Hold**
- Discussion of the re-entrancy edge cases

**Active Epics**
- [Stable Cadence (aka Cadence 1.0)](https://github.com/onflow/cadence/issues/2642)


### Access & Data Availability **- Peter A**
Objective: Make execution data and script execution available on Edge nodes.

**Done last sprint**

Script Execution

- Script execution module - [PR 4747](https://github.com/onflow/flow-go/pull/4747)
- Bootstrap register db and start indexer - [PR 4780](https://github.com/onflow/flow-go/pull/4780)
- Adjust logging in checkpoint loading - [PR 4797](https://github.com/onflow/flow-go/pull/4797)
- Add metrics to execution state indexer - [PR 4801](https://github.com/onflow/flow-go/pull/4801)
- Create GetRegisterValues proto definition - [PR 1389](https://github.com/onflow/flow/pull/1389)

Misc

- Update state stream API to return json-cdc encoded events - backport - [PR 4803](https://github.com/onflow/flow-go/pull/4803)
- Upgrade to grpc - [PR 4810](https://github.com/onflow/flow-go/pull/4810)

**This sprint**

- [OKR] Script Execution on ANs
  - Integrate local script execution into Access API - [Issue 4781](https://github.com/onflow/flow-go/issues/4781)
  - Add GetRegisters API endpoint to ExecutionData API - [Issue 4756](https://github.com/onflow/flow-go/issues/4756)
  - Verify checkpoint matches root block - [Issue 4806](https://github.com/onflow/flow-go/issues/4806)
  - Testing an analysis after Testnet spork

**Active Epics**

- Script Execution on Access Node - [Issue 4637](https://github.com/onflow/flow-go/issues/4637)
- Integrate local execution state indexes into Access API - [Issue 4750](https://github.com/onflow/flow-go/issues/4750)


### **Permissionless Network - Kan Z**

**Done last sprint**
- Flow offsite participation.
- [Offsite Planning] [Zero Quarantined Networking Layer Tests Epic](https://github.com/onflow/flow-go/issues/4816)
- [Offsite Technical Discussions Summary] [Exploring Unicast-based Pubsub](https://www.notion.so/dapperlabs/Publish-through-Unicast-11-Oct-2023-OffSite-93d090d77ee7453d90fb29c45dc5ac20) 
- [In Progress] Optimizing GossipSub RPC inspection CPU and Memory intensive operations (incident response) [6870](https://github.com/dapperlabs/flow-go/issues/6870).
- [In Progress] Investigating and fixing LibP2P DHT goroutine leakage (incident response) [6871](https://github.com/dapperlabs/flow-go/issues/6871).
- [In Progress] Debugging GossipSub Scoring Flakey Tests [1903](https://github.com/dapperlabs/flow-internal/issues/1903).


**Next sprint**
- [In Progress] Optimizing GossipSub RPC inspection CPU and Memory intensive operations (incident response) [6870](https://github.com/dapperlabs/flow-go/issues/6870).
- [In Progress] Investigating and fixing LibP2P DHT goroutine leakage (incident response) [6871](https://github.com/dapperlabs/flow-go/issues/6871).
- [In Progress] Debugging GossipSub Scoring Flakey Tests [1903](https://github.com/dapperlabs/flow-internal/issues/1903).
- [Start] ALSP integration for cluster-prefix topics [1889](https://github.com/dapperlabs/flow-internal/issues/1889).
- [Start] Addressing remaining technical debts with SyncEngine ALSP integration (unchecked parts) [6812](https://github.com/dapperlabs/flow-go/issues/6812).

**Active Epics**

- https://github.com/dapperlabs/flow-go/issues/6287
- https://github.com/dapperlabs/flow-go/issues/6468
- BFT https://github.com/dapperlabs/flow-go/issues/6142
- BFT https://github.com/dapperlabs/flow-go/issues/6398
- BN2 https://github.com/dapperlabs/flow-go/issues/6341
- TPS  https://github.com/dapperlabs/flow-go/issues/6296
- [Zero Quarantined Networking Layer Tests Epic](https://github.com/onflow/flow-go/issues/4816)

### Consensus (Dynamic Protocol State) - **Jerome P**

**Done last sprint**
- Investigating Aptos/Sui claims of permissionless node operation
- Completing new structure of Epoch Service Events: [PR 4719](https://github.com/onflow/flow-go/issues/4719)

**Ongoing** (last & next sprint)

- Wrapping up safety and consistency proofs
- Consolidating exploratory research documents to reflect final design
- Refactoring and refining the interfaces and data structures for clarity (👉 [epic #4649](https://github.com/onflow/flow-go/issues/4649))
- Creating a FLIP for Smart-contract-specified Epoch switchover timing


### **Infra - JP**

**Done last sprint**

************Node Hosting Support************

- Increased Disk Space on 
- Rolled out & validated changes to `v0.31.21` release to address HTTP/2 protocol vuln

************Spork************

- Assisted with Canary Sporks
- Updated spork automation to support execution state on ANs

**This Sprint**

************Node Hosting************

- Onboard Dapper nodes to Devnet
- Assist with Canary Spork
- Assist with Devnet Spork
- Prepare Dapper infra/keys for Mainnet spork

### Key Release Dates & Breaking Changes

- Mainnet/Testnet Spork dates 
  - Next spork
     - Testnet: 25th October
     - Mainnet: **8th Nov**
       - This time the spork will take longer (~2 to 3 hrs)
