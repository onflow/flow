# Team Wins 🎉



### Mainnet Uptime SLO - Last 14 days (11/10 to 11/24)

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%  |    100%       |       0%          |
| Block Finalization      | 99.9%  |    100%       |       0%          |
| Transaction Execution   | 99.9%  |    100%       |       0%          |
| Block Sealing           | 99.9%  |    100%       |       0%          |
| Access API Liveness     | 99.9%  |    100%       |       0%          |

#### Incidents
- Degraded Performance - 11/23 9:30 AM Pacific to 3:30 PM Pacific
  - Collection finalization rate dropped and was choppy.


### **Performance Pod Sprint Objective - Jan B**

**Done last sprint**


**This sprint**

- Validate [migration](https://github.com/onflow/flow-go/pull/4633) of [integrated solution for Atree register inlining](https://github.com/onflow/cadence/issues/2809)
- Continue implementation of [Storehouse first milestone](https://github.com/onflow/flow-go/issues/4682) (execution state on disk)
- EVM support
  - Continue with PR reviews
  - Continue with benchmarking data collection

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
- Deploy security fixes to TN and MN, port to public repo, publish disclosure
- continue support EVM on FLow initiative.
- Continuing with Stable Cadence scope / discussions
    - Ongoing FLIPs:
        - [FLIP for new behavior for attachments with entitlements](https://github.com/onflow/flips/pull/213)
- Continue work on Cadence 1.0 migrations.
- Continue Stable Cadence Docs update and knocking tasks off the [tech debt list](https://github.com/onflow/cadence/issues/2642)
- Continue work on Cadence 1.0 release plan
 
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


**Still in Progress**
  - [mainnet24` peer scoring incident](https://github.com/dapperlabs/flow-go/issues/6913)
  - Part-3: [Caching GossipSub Application Specific Score](https://github.com/onflow/flow-go/pull/5045) of [Optimizing memory-intensive RPC inspection operations](https://github.com/dapperlabs/flow-go/issues/6870)
  - [Part-2 and -3 of the long term fix for AN-LN peer blocking issue on mainnet23](https://github.com/dapperlabs/flow-go/issues/6895)
  - [GossipSub Message Replay Attack](https://github.com/dapperlabs/flow-go/issues/6809) [PR5058](https://github.com/onflow/flow-go/pull/5058)

**Starting Next Sprint**:
  - [Concluding GossipSub Message Forensics FLIP and planning the development](https://github.com/onflow/flips/pull/195)
  - [[BFT Testing] Refactor Orchestrator lock contension to use worker pools](https://github.com/dapperlabs/flow-go/issues/6884)
  - [Determining an appropriate retention rate for historical scoring data](https://github.com/dapperlabs/flow-go/issues/6466)
  - [Decision Making for Persisting or Non-Persisting Spamming Records of Peers in GossipSub](https://github.com/dapperlabs/flow-go/issues/6663)


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



**Done last sprint (other topics)**



**Next Sprint**
- Long list remaining tech todos for Dynamic Protocol State ([epic #4649](https://github.com/onflow/flow-go/issues/4649))
- continue automation of Cruise Control system


### **Infra - JP**

**Done last sprint**


**This Sprint**

************Node Hosting************
- Assist with Canary Sporks
- As needed, assist with HCU
- Create documentation for managing Dapper nodes
- Create automation for managing Dapper nodes

************FF Migration************
- Create strategy for observability migration
- Discover and configure tool for multi-destination logging
- Create strategy for GCP project migration to new GCP account

### Key Release Dates & Breaking Changes

- Mainnet/Testnet Spork dates 
  - Next spork - TBD (~Q1 2024)
- Second [Governance Working Group](https://github.com/onflow/gwg) meeting 9/28 (Tuesday)
