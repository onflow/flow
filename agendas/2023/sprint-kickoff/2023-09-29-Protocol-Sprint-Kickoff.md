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

Storehouse
- [add pebble db init](https://github.com/onflow/flow-go/issues/4771)
- [Refactor ingestion engine test cases](https://github.com/onflow/flow-go/pull/4758)
- [Refactor provider broadcast](https://github.com/onflow/flow-go/pull/4744)
- [Extract BlockLoader from execution Ingestion engine](https://github.com/onflow/flow-go/pull/4718)
- [Extract Ingestion Engine CollectionFetcher into a separate module](https://github.com/onflow/flow-go/issues/4713)

Concurrent execution
- [Fix Interpreter Issue on Concurrent TX Execution](https://github.com/onflow/flow-go/pull/4669)

Other improvements
- [Creating conversion functions for Path, Key and RegisterID](https://github.com/onflow/flow-go/issues/4658)
    - [Move ledger key to register id conversions](https://github.com/onflow/flow-go/pull/4766)
- [Backport Moving of libP2P logs to debug level to v0.31 branch] (https://github.com/onflow/flow-go/pull/4746)
- [Move libP2P logs to debug level](https://github.com/onflow/flow-go/pull/4736)
- [CI - v0.31 PORT - Rename without_netgo tag to without-netgo](https://github.com/onflow/flow-go/pull/4725)
- [log num txns and collections](https://github.com/onflow/flow-go/pull/4716/commits)

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

Features
- [Check native function declarations](https://github.com/onflow/cadence/pull/2821)
- Flex dep. [Add support for injecting types into the environment](https://github.com/onflow/cadence/pull/2811)

Iprovements
- [1.0 - Extend type code generator](https://github.com/onflow/cadence/pull/2806)
- [1.0 - Add helpers to get constructor and initializer function type for composite type](https://github.com/onflow/cadence/pull/2805)
- tech debt - [1.0 - Remove unused composite type to interface type conversion function](https://github.com/onflow/cadence/pull/2804)
- [1.0 - Refactor runtime test helpers into separate, reusable package](https://github.com/onflow/cadence/pull/2800)

Bugfixes
- [1.0 - properly access-check optional chaining with entitlements](https://github.com/onflow/cadence/pull/2825)
- [1.0 - meter and deduplicate included entitlement relations](https://github.com/onflow/cadence/pull/2810)
- [1.0 - Fix Test framework's TestAccount's type name](https://github.com/onflow/cadence/pull/2802)
- [Properly check removed expression for resource loss](https://github.com/onflow/cadence/pull/2798)
- [Port internal #143](https://github.com/onflow/cadence/pull/2793)
- [Fix capability controller deletion](https://github.com/onflow/cadence/pull/2788)

Chores
- [Sync Stable Cadence](https://github.com/onflow/cadence/issues/2820)
- [CLI - Update to Cadence v1.0.0-preview.1](https://github.com/onflow/flow-cli/pull/1207)
- [EMULATOR - Update to Cadence v1.0.0-preview.1](https://github.com/onflow/flow-emulator/issues/477)
- [CLI - Update to latest stable cadence](https://github.com/onflow/flow-cli/issues/1204)
- [Sync Stable Cadence](https://github.com/onflow/cadence/issues/2796)
- [EMULATOR - Update to latest stable Cadence](https://github.com/onflow/flow-emulator/issues/471)
- [SDK - Update to latest stable Cadence](https://github.com/onflow/flow-go-sdk/issues/468)

**This sprint**

- Security issue fix / rollout
- Flex
- Continuing with Stable Cadence scope / discussions
    - Ongoing FLIPs:
        - [Relaxing interface conformance restrictions](https://github.com/onflow/flips/pull/134)
    - [Flip for removal of custom destructors](https://github.com/onflow/flips/pull/131)
- Continue Stable Cadence Docs update and knocking tasks off the [tech debt list](https://github.com/onflow/cadence/issues/2642)
 
**On Hold**
- Discussion of the re-entrancy edge cases

**Active Epics**
- [Stable Cadence (aka Cadence 1.0)](https://github.com/onflow/cadence/issues/2642)


### Access & Data Availability **- Peter A**
Objective: Make execution data and script execution available on Edge nodes.

**Done last sprint**

Script execution
- Create bootstrap checkpoint - [PR 4759](https://github.com/onflow/flow-go/pull/4759)
- Pebble checkpoint ingestion - [PR 4727](https://github.com/onflow/flow-go/pull/4727)
- Pebble height tracking implementation - [PR 4714](https://github.com/onflow/flow-go/issues/4714)
- Index Execution Data - [PR 4653](https://github.com/onflow/flow-go/issues/4653)

Index execution state
- Index tx results and events - [PR 4772](https://github.com/onflow/flow-go/pull/4772)
- Create light tx result storage - [PR 4735](https://github.com/onflow/flow-go/pull/4735)
- Update chunk execution data serializer header version - [PR 4722](https://github.com/onflow/flow-go/pull/4722)

Other Access
- Fix panic condition in client connection cache - [PR 4731](https://github.com/onflow/flow-go/pull/4731)
- Cleanup access connection management - [PR 4730](https://github.com/onflow/flow-go/pull/4730)


**This sprint**
- [OKR] Script Execution on ANs
    - Benchnet testing of indexers
    - Load indexer and register db in node bootstrap - [Issue 4778](https://github.com/onflow/flow-go/issues/4778)
    - Configure script execution engine - [Issue 4640](https://github.com/onflow/flow-go/issues/4640)
    - Integrate local script execution into Access API - [Issue 4781](https://github.com/onflow/flow-go/issues/4781)
    - Add GetRegisters API endpoint to ExecutionData API - [Issue 4756](https://github.com/onflow/flow-go/issues/4756)

**Active Epics**

- Script Execution on Access Node - [Issue 4637](https://github.com/onflow/flow-go/issues/4637)
- Integrate local execution state indexes into Access API - [Issue 4750](https://github.com/onflow/flow-go/issues/4750)

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
- Completed identity-changing operations safety proof document and updated old documentation: [Identity-Changing Operations](https://www.notion.so/dapperlabs/Identity-Changing-Operations-610bb2d3b63f4d3dae12e405d3c5a097?pvs=4) (mostly done)
- Refactoring and refining the interfaces and data structures for clarity (described in [epic #4649](https://github.com/onflow/flow-go/issues/4649))
   - data structure for snapshotting protocol state: [PR #4721](https://github.com/onflow/flow-go/pull/4721)
- Blog post for the "Why Cadence" series
- BLST Benchnet testing
- BLST code review

**Next sprint**
- Wrapping up safety and consistency proofs
- Consolidating exploratory research documents to reflect final design
- Refactoring and refining the interfaces and data structures for clarity (👉 [epic #4649](https://github.com/onflow/flow-go/issues/4649))
   - Completing new structure of Epoch Service Events: [PR 4719](https://github.com/onflow/flow-go/issues/4719)
- Creating a FLIP for Smart-contract-specified Epoch switchover timing
- Investigating Aptos/Sui claims of permissionless node operation

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
