# Team Wins 🎉
- Cadence Compact Format [updated to RC3](https://github.com/onflow/ccf/issues/4) (Jan)
- [Random Function Cadence FLIP](https://github.com/onflow/flips/pull/120) approved in Cadence Language Design Meeting on Sep 12th. (Jan)
- Enabling REST API for Observer nodes was completed and merged by KROK team

### Mainnet Uptime SLO - Last 14 days (9/1 to 9/14)

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%  |    99.921%    |       79.4%       |
| Block Finalization      | 99.9%  |    99.921%    |       79.4%       |
| Transaction Execution   | 99.9%  |    99.916%    |       84.3%       |
| Block Sealing           | 99.9%  |    99.921%    |       79.4%       |
| Access API Liveness     | 99.9%  |    99.545%    |       455%        |

*99.9% translates to a maximum allowed downtime of ~20m8s for a 14-day window.*

*99% translates to a maximum allowed downtime of ~3hr20min for a 14-day window.*

- Sev-2 Incident: Public Access nodes went down between 5:20 pm to 6:00 pm on Wednesday 9/13
     - Root cause: ANs were not started after a hardware upgrade by the AN operator
     - Fix: Auto-restart has since been added; More observability on the ANs will be added soon.

### **Performance Pod Sprint Objective - Jan B**

**Done last sprint**

Atree Register Inlining
- [Optimize atree to reduce Flow's mtrie size and reduce number of reads](https://github.com/onflow/atree/issues/292)
    - [Omit empty next slab ID in encoded map data slab](https://github.com/onflow/atree/pull/340)
    - [Omit empty next slab ID in encoded array data slab](https://github.com/onflow/atree/issues/339)
    - [Refactor encoding version and flag to add more flags](https://github.com/onflow/atree/pull/338)
    - [Fix slab size when resetting mutable storable in OrderedMap](https://github.com/onflow/atree/pull/337)
    - [Fix slab size when resetting mutable storable in Array](https://github.com/onflow/atree/pull/336)

Atree Register Inlining migration
- Continued with [migration](https://github.com/onflow/flow-go/pull/4633) troubleshooting, succesfuly completed the migration of Mainnet checkpoint on m1-ultramem-160 instance. Continuing with migration optimization.

Random Function update (including Cadence varsion update in flow-go)
- [Upgrade cadence and change to ReadRandom](https://github.com/onflow/flow-go/pull/4679)

Storehouse
- Continuing implementation

Other fixes
- [clean up ingestion engine by removing unused dependencies](https://github.com/onflow/flow-go/pull/4689)
- [log num txs and state changed in block executed log](https://github.com/onflow/flow-go/pull/4683)
- [Pass zerolog by value](https://github.com/onflow/flow-go/pull/4644)
- [Add cmd checkpoint trie stats](https://github.com/onflow/flow-go/issues/4636)
- [adjust block execution time buckets](https://github.com/onflow/flow-go/pull/4505)

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
- Capabilities improvement [Add an exists function, allows checking if capability exists/is published](https://github.com/onflow/cadence/pull/2778)
- Dependency for contract update mechanism [Add contract update method that doesn't panic](https://github.com/onflow/cadence/issues/2700)
    - [Add tryUpdate method to Account.Contracts](https://github.com/onflow/cadence/pull/2769)
- [Entitlement mapping composition](https://github.com/onflow/cadence/issues/2643)
    - [update account type mappings to include identity](https://github.com/onflow/cadence/pull/2761)

Bugfix
- [Fix doc (pretty printing) for function declaration without function block](https://github.com/onflow/cadence/pull/2774)

Tech Debt
- [Add purity annotations to newly added functions](https://github.com/onflow/cadence/issues/2466)
    - [Add view annotations to newly added array functions](https://github.com/onflow/cadence/pull/2771)

Other Improvements
- [Implement split and join for String ](https://github.com/onflow/cadence/issues/2752)
    - [Eagerly normalize String and Character values at construction time](https://github.com/onflow/cadence/pull/2781)
- [Use bimaps in the elaboration](https://github.com/onflow/cadence/pull/2779)
- [Replace simpleTypeIDByType with a bimap](https://github.com/onflow/cadence/pull/2775)
- cosmetic [Improve capability API](https://github.com/onflow/cadence/pull/2772)
- [Suggested fix for removed access modifiers, pub and priv](https://github.com/onflow/cadence/issues/2741)
    - [Suggested fixes for pub and priv parser errors](https://github.com/onflow/cadence/pull/2767)
- [Add entitlement CopyValue and require it for Account.Storage.copyValue](https://github.com/onflow/cadence/pull/2765)
- [Better error messages for use of old restricted types](https://github.com/onflow/cadence/pull/2764)
- [Improve and fix static types and their ID and string functions](https://github.com/onflow/cadence/pull/2756)
- [Allow use of type code generator in any package, refactor RLP and BLS contracts](https://github.com/onflow/cadence/pull/2753)

Tests
- [Add tests for invalidation of references created with index/field-access](https://github.com/onflow/cadence/pull/2758)

Docs
- [Improve the access control page](https://github.com/onflow/docs/pull/262)
- [Update capabilities documentation for Stable Cadence](https://github.com/onflow/docs/pull/251)
- [Continue update to Stable Cadence ](https://github.com/onflow/docs/pull/244)
- [Split the accounts page, continue update to Stable Cadence](https://github.com/onflow/docs/pull/243)
- [Update account documentation for Stable Cadence](https://github.com/onflow/docs/pull/239)

cadence-lang.org
- [Update intro](https://github.com/onflow/cadence-lang.org/pull/7)

Chores
- [Merge master into Stable Cadence](https://github.com/onflow/cadence/pull/2770)
  
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
- [Script Execution] Move register DB in Archive node to Access Node - [Issue 4606](https://github.com/onflow/flow-go/issues/4606), [PR 4671](https://github.com/onflow/flow-go/pull/4671)
- [Script Execution] Define the index database interface - [Issue 4667](https://github.com/onflow/flow-go/issues/4667), [PR 4656](https://github.com/onflow/flow-go/pull/4656)
- [Script Execution] Optimize the script execution engine required interfaces - [Issue 4666](https://github.com/onflow/flow-go/issues/4666), [PR 4668](https://github.com/onflow/flow-go/pull/4668), [PR 4685](https://github.com/onflow/flow-go/pull/4685)
- [State Sync] Verify of Execution Data ID - [Issue 2120](https://github.com/onflow/flow-go/issues/2120), [PR 4586](https://github.com/onflow/flow-go/pull/4586)
- [State Sync] Add Tx Results to execution data - [Issue 4706](https://github.com/onflow/flow-go/issues/4706), [PR 4699](https://github.com/onflow/flow-go/pull/4699)
- [State Sync] Update Access API protobuf and converters for updated BlockExecutionData - [Issue 4707](https://github.com/onflow/flow-go/issues/4707), [PR 4710](https://github.com/onflow/flow-go/pull/4710), [PR 1382](https://github.com/onflow/flow/pull/1382)
- [Testing] Refactor chunkVerifier unit tests - [PR 4698](https://github.com/onflow/flow-go/pull/4698)
- [Testing] Update metrics and logging images to latest versions - [PR 4672](https://github.com/onflow/flow-go/pull/4672)
- [Testing] Small improvements to the benchnet loader to support exec data testing - [PR 4675](https://github.com/onflow/flow-go/pull/4675)
- [Access] Add root heights to GetNodeVersionInfo - [Issue 4620](https://github.com/onflow/flow-go/issues/4620), [PR 4690](https://github.com/onflow/flow-go/pull/4690), [PR 1376](https://github.com/onflow/flow/pull/1376)
- [Access] Add missing block payloads and account keys endpoints - [PR 1378](https://github.com/onflow/flow/pull/1378)
- [Access] Refactor rpc backend to return an error instead of crashing - [PR 4688](https://github.com/onflow/flow-go/pull/4688)

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
- [Complete] Investigated and fix CPU-intensive libp2p (incident response) [6869](https://github.com/dapperlabs/flow-go/issues/6869) [PR4702](https://github.com/onflow/flow-go/pull/4702) [PR4703](https://github.com/onflow/flow-go/pull/4703).
- [Complete] Application Layer Spam Protection (ALSP) integration for `RangeRequest` for Sync Engine [PR4665](https://github.com/onflow/flow-go/pull/4665).
- [Complete] Comprehensive test coverage for GossipSub control message inspection [PR4695](https://github.com/onflow/flow-go/pull/4695).
- [Under Review] GossipSub Message Forensic FLIP [PR195](https://github.com/onflow/flips/pull/195)
- [Under Review] Mitigating Unknown Topic Spam Attack on GossipSub [6798](https://github.com/dapperlabs/flow-go/issues/6798) [PR4704](https://github.com/onflow/flow-go/pull/4704).
- [In Progress] Addressing Security Vulnerabilities In Dialing Procedure [6556](https://github.com/dapperlabs/flow-go/issues/6556).

**Next sprint**
- [Continue] Addressing Security Vulnerabilities In Dialing Procedure [6556](https://github.com/dapperlabs/flow-go/issues/6556).
- Optimizing GossipSub RPC inspection CPU and Memory intensive operations (incident response) [6870](https://github.com/dapperlabs/flow-go/issues/6870).
- Application Layer Spam Protection (ALSP) integration for `BatchRequest` for Sync Engine.
- GossipSub Sybil Attack Mitigation [6460](https://github.com/dapperlabs/flow-go/issues/6460).
- Application Layer Spam Protection (ALSP) support for cluster channels [1889](https://github.com/dapperlabs/flow-internal/issues/1889).

**Active Epics**

- https://github.com/dapperlabs/flow-go/issues/6287
- https://github.com/dapperlabs/flow-go/issues/6468
- BFT https://github.com/dapperlabs/flow-go/issues/6142
- BFT https://github.com/dapperlabs/flow-go/issues/6398
- BN2 https://github.com/dapperlabs/flow-go/issues/6341
- TPS  https://github.com/dapperlabs/flow-go/issues/6296

### Consensus (Dynamic Protocol State) - **Jerome P**

**Done last sprint**
- Sync master to feature branch: https://github.com/onflow/flow-go/pull/4694

**Next sprint**
- Continue ProtocolStateEntry refactoring: https://github.com/onflow/flow-go/pull/4721
- Refactor ProtocolStateEntry to increase code clarity https://github.com/onflow/flow-go/issues/4719
- Wrapping up first integration pass of Dynamic Protocol state

### **Infra - JP**

**Done last sprint**

**********************Quick Node**********************

- Assist with Quick Node mainnet Migration

************Node Hosting************

- Scale down Devnet to ideal size
- Scale down Canary to ideal size

************Infrastructure Savings************

- Delete unnecessary Canary Snapshots
- Review Mainnet historical node snapshots

**This Sprint**

**********************Quick Node**********************

- Monitor & evaluate latency on Quick Node nodes

************Node Hosting************

- Onboard Dapper nodes to Devnet

************Infrastructure Savings************

- Create new final snapshots for Mainnet historical nodes
- Delete unnecessary Mainnet historical snapshots
- Remove tracing nodes from networks to save on Compute
- Disable tracing on nodes to save on egress & Tempo storage
- Update Prometheus scrape interval to save money on Metrics egress & storage

### Key Release Dates & Breaking Changes

- Mainnet/Testnet Spork dates 
  - Next spork
     - Testnet: 18th October ~~11th October~~
     - Mainnet: 1st Nov ~~25th October~~
     - This time the spork will take longer (~2 to 3 hrs)
