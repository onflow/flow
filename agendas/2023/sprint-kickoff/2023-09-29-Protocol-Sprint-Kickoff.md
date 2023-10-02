# Team Wins 🎉
- Since August, through network scaledowns/deprecation, snapshot cleanup, and node cleanup, we have reduced our infra bill by $25k a month.

- Metrika has built a [new dashboard](https://app.metrika.co/flow/dashboard/slas?tr=YTD) specifically for network SLAs.

### Mainnet Uptime SLO - Last 14 days (9/14 to 9/29)

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%  |    100%       |       0%          |
| Block Finalization      | 99.9%  |    100%       |       0%          |
| Transaction Execution   | 99.9%  |    99.95%     |       49.7%       |
| Block Sealing           | 99.9%  |    99.945%    |       54.6%       |
| Access API Liveness     | 99.9%  |    99.965%    |       35.4%       |

#### Incidents
- Scheduled downtime: Height coordinated upgrade on 9/19 that took ~13 mins

*99.9% translates to a maximum allowed downtime of ~20m8s for a 14-day window.*

*99% translates to a maximum allowed downtime of ~3hr20min for a 14-day window.*



### **Performance Pod Sprint Objective - Jan B**

**Done last sprint**


**This sprint**

- [Continue Atree register inlining](https://github.com/onflow/atree/issues/292)
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


**This sprint**

- Continue work on Stable Cadence preview release - update to latest Stable Cadence branch
- Continuing with Stable Cadence scope / discussions
    - Ongoing FLIPs:
        - [Relaxing interface conformance restrictions](https://github.com/onflow/flips/pull/134) - addressing remaiing questions async as agree in LAngiage Design MEeting (LDM) on 12th Sep.
    - [Flip for removal of custom destructors](https://github.com/onflow/flips/pull/131) - Breakout session on 19th Sep!
- Reference Implementation of custom destructor removal
- Continue Stable Cadence Docs update and knocking tasks off the [tech debt list](https://github.com/onflow/cadence/issues/2642)
 
**On Hold**
- Discussion of the re-entrancy edge cases

**Active Epics**
- [Stable Cadence (aka Cadence 1.0)](https://github.com/onflow/cadence/issues/2642)


### Access & Data Availability **- Peter A**
Objective: Make execution data and script execution available on Edge nodes.

**Done last sprint**

**This sprint**
- [OKR] Script Execution on ANs
    - [Script Execution] State Data Indexer Module - [Issue 4638](https://github.com/onflow/flow-go/issues/4638)
    - [Script Execution] Ingest initial state snapshot - [Issue 4673](https://github.com/onflow/flow-go/issues/4673)
- [OKR] Execution Data Improvements
    - [State Sync] Add Transaction Results into BlockExecutionData - [Issue 4455](https://github.com/onflow/flow-go/issues/4455)
    - [State Sync] Test decoding BlockExecutionData with new format - [Issue 4708](https://github.com/onflow/flow-go/issues/4708)
    - [State Sync] Regression test ExecutionData changes - [Issue 4408](https://github.com/onflow/flow-go/issues/4408)

**Active Epics**

- [[State Sync] Add TxResults and Verification for Execution Data](https://github.com/onflow/flow-go/issues/4410)
- [Script Execution on Access Node](https://github.com/onflow/flow-go/issues/4637)

**On Hold**

- [OKR] Enable Execution Sync on Public Network
    - On hold until execution data improvements are complete

### **Permissionless Network - Kan Z**

**Done last sprint**

Focused on implementing new features.
- Addressed security vulnerabilities in dialing and stream creation process [6556](https://github.com/dapperlabs/flow-go/issues/6556) [PR4743](https://github.com/onflow/flow-go/pull/4743).
- Sync Engine has been _Application Layer **Spam-Proofed**_ with all permissionless message request types [6812](https://github.com/dapperlabs/flow-go/issues/6812) [Last PR for `BatchRequest`](https://github.com/onflow/flow-go/pull/4704).
- Addressed GossipSub Sybil Attack Mitigation Vulnerability [6460](https://github.com/dapperlabs/flow-go/issues/6460) [PR4773](https://github.com/onflow/flow-go/pull/4773).
- Addressed GossipSub Spam Vulnerability on Unknown Topics [6798](https://github.com/dapperlabs/flow-go/issues/6798) [PR4720](https://github.com/onflow/flow-go/pull/4720).

**Next sprint**

Our focus for the next sprint is on fixing some reported issues and debugging flakey tests.
- Optimizing GossipSub RPC inspection CPU and Memory intensive operations (incident response) [6870](https://github.com/dapperlabs/flow-go/issues/6870).
- Investigating and fixing LibP2P DHT goroutine leakage (incident response) [6871](https://github.com/dapperlabs/flow-go/issues/6871).
- Debugging GossipSub Scoring Flakey Tests [1903](https://github.com/dapperlabs/flow-internal/issues/1903).
- ALSP integration for cluster-prefix topics [1889](https://github.com/dapperlabs/flow-internal/issues/1889).
- Addressing remaining technical debts with SyncEngine ALSP integration (unchecked parts) [6812](https://github.com/dapperlabs/flow-go/issues/6812).

**Active Epics**

- https://github.com/dapperlabs/flow-go/issues/6287
- https://github.com/dapperlabs/flow-go/issues/6468
- BFT https://github.com/dapperlabs/flow-go/issues/6142
- BFT https://github.com/dapperlabs/flow-go/issues/6398
- BN2 https://github.com/dapperlabs/flow-go/issues/6341
- TPS  https://github.com/dapperlabs/flow-go/issues/6296

### Consensus (Dynamic Protocol State) - **Jerome P**

**Done last sprint**
- Consolidated safety and consistency proofs: [Identity-Changing Operations](https://www.notion.so/dapperlabs/Identity-Changing-Operations-610bb2d3b63f4d3dae12e405d3c5a097?pvs=4) (mostly done)
- refactoring and refining the interfaces and data structures for clarity (described in [epic #4649](https://github.com/onflow/flow-go/issues/4649))
   - data structure for snapshotting protocol state: [PR #4721](https://github.com/onflow/flow-go/pull/4721)

**Next sprint**
- Wrapping up safety and consistency proofs
- consolidating exploratory research documents to reflect final design
- refactoring and refining the interfaces and data structures for clarity (👉 [epic #4649](https://github.com/onflow/flow-go/issues/4649))
   - completing new structure of Epoch Service Events: [PR 4719](https://github.com/onflow/flow-go/issues/4719)


### **Infra - JP**

**Done last sprint**

************Infrastructure Savings************

- Create new final snapshots for Mainnet historical nodes
- Delete unnecessary Mainnet historical snapshots
- Removed tracing nodes from historical networks & Canary
- Snapshot & cleanup old unused disks 
- Snapshot and validate recovery of  Devnet historical nodes before cleanup
- Snapshot & delet unnecessary Mainnet historical nodes
- Scale down Ansible nodes

************Node Hosting************
- Update Ansible configuration to configure EXT4 file systems with less reserved space to save money
- Update Devnet & Mainnet file systems to use less reserved space 
- Update Envoy Ansible configuration to reduce log sampling to reduce log storage

************Support************
- Assisted with deployments & HCU
- Increase Studio rate limits for Devnet
- Update BN2 to leverage bootstrap configuration from GCP bucket rather than K8s secrets

**This Sprint**

************Node Hosting************

- Onboard Dapper nodes to Devnet
- Assist with Canary Spork
- Assist with Devnet Spork
- Prepare Dapper infra/keys for Mainnet spork

### Key Release Dates & Breaking Changes

- Mainnet/Testnet Spork dates 
  - Next spork
     - Testnet: 18th October
     - Mainnet: 1st Nov
     - This time the spork will take longer (~2 to 3 hrs)
