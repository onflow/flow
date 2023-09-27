# Team Wins 🎉

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

**Next sprint**
- Continue ProtocolStateEntry refactoring: https://github.com/onflow/flow-go/pull/4721
- Refactor ProtocolStateEntry to increase code clarity https://github.com/onflow/flow-go/issues/4719
- Wrapping up first integration pass of Dynamic Protocol state

### **Infra - JP**

**Done last sprint**

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
     - Testnet: 18th October
     - Mainnet: 1st Nov
     - This time the spork will take longer (~2 to 3 hrs)
