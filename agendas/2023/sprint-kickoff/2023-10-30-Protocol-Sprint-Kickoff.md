# Team Wins 🎉


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


### **Access & Data Availability - Peter A**
Objective: Make execution data and script execution available on Edge nodes.

**Done last sprint**

**This sprint**

- [OKR] Script Execution on ANs
  - Integrate local script execution into Access API - [Issue 4781](https://github.com/onflow/flow-go/issues/4781)
  - Add GetRegisters API endpoint to ExecutionData API - [Issue 4756](https://github.com/onflow/flow-go/issues/4756)
  - Verify checkpoint matches root block - [Issue 4806](https://github.com/onflow/flow-go/issues/4806)
  - Testing an analysis after Testnet spork

**Active Epics**

- Script Execution on Access Node - [Issue 4637](https://github.com/onflow/flow-go/issues/4637)
- Integrate local execution state indexes into Access API - [Issue 4750](https://github.com/onflow/flow-go/issues/4750)


### **Permissionless Network - Yahya H**

**Done last sprint**

**Active Epics**

- https://github.com/dapperlabs/flow-go/issues/6287
- https://github.com/dapperlabs/flow-go/issues/6468
- BFT https://github.com/dapperlabs/flow-go/issues/6142
- BFT https://github.com/dapperlabs/flow-go/issues/6398
- BN2 https://github.com/dapperlabs/flow-go/issues/6341
- TPS  https://github.com/dapperlabs/flow-go/issues/6296
- [Zero Quarantined Networking Layer Tests Epic](https://github.com/onflow/flow-go/issues/4816)

### **Consensus (Dynamic Protocol State) - Alex H**

**Done last sprint**

**Ongoing** (last & next sprint)

- Wrapping up safety and consistency proofs
- Consolidating exploratory research documents to reflect final design
- Refactoring and refining the interfaces and data structures for clarity (👉 [epic #4649](https://github.com/onflow/flow-go/issues/4649))
- Creating a FLIP for Smart-contract-specified Epoch switchover timing
- Finish BFT guarantees for protocol state updates. Implementation is ready, currently working on tests, docs and some cleanup.


### **Infra - JP**

**Done last sprint**

- Increase data disk sizes
- Onboard Dapper nodes to Devnet
- Assist with Canary Sporks
- Assist with Devnet Spork
- Assist with HCU
- Assist with forum migration

**This Sprint**
- Update Ansible automation for Dapper nodes
- Prepare monitoring & alerting for Dapper Nodes
- Prepare Dapper infra/keys for Mainnet spork
- Create Flow Foundation infrastructure & configuration for Mainnet spork
- Create Dapper infrastructure & configuration for Mainnet spork

************Node Hosting************
### Key Release Dates & Breaking Changes

- Mainnet/Testnet Spork dates 
  - Next spork
     - Testnet: 25th October
     - Mainnet: **8th Nov**
       - This time the spork will take longer (~2 to 3 hrs)
