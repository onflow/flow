# Team Wins 🎉

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

- **Next sprint:**
    - Concluding the `mainnet24` [peer scoring incident](https://github.com/dapperlabs/flow-go/issues/6913)
      - Scoring Parameters Config and Relaxed Behavioral Penalty [Issue6923](https://github.com/dapperlabs/flow-go/issues/6923)
      - Enhance Gossipsub Scoring Mechanism for Configurable RPC Inspection enable/disable via configs [Issue6390](https://github.com/dapperlabs/flow-go/issues/6930)
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

**Ongoing**

**Starting Next Sprint**
* blog post about dynamic protocol state
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
