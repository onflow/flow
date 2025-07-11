# Overview

 ### Team Wins 🎉
* Flow protocol onsite to set the Q3 OKRs (see Q3 OKRs [here](https://github.com/orgs/onflow/projects/91))
* Review of [FLIP-330: Schedule Callback](https://github.com/onflow/flips/pull/331) went through 2nd round of reviews with no major blockers raised.
* Shadow mainnet execution node running on PebbleDB passed the 2-week test with no issues detected.
* At the ETHGlobal Cannes Hackathon, Flow was the most used L1/L2 chain, two Flow projects won top hackathon prizes, and 54 new products were built.
* React SDK components library alpha release available & stable release scheduled this week.
* FCL and the JS SDK now fully support TypeScript after the next release.
---

### Mainnet Uptime - Last 14 days (06/28/25 to 07/11/25) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |     100%      |        0%         |
| Block Finalization      | 99.9%   |     100%      |        0%         |
| Transaction Execution   | 99.9%   |     100%      |        0%         |
| Block Sealing           | 99.9%   |     100%      |        0%         |
| Access API Liveness     | 99.9%   |     100%      |        0%         |


#### YTD SLA

| Incident/upgrade       | Date      | Collection | Consensus | Execution | Verification | Total  | Comments      |
|------------------------|-----------|------------|-----------|-----------|--------------|--------| ------------- |
| HCU                    | 1/27/2025 |            |           | 5         |              | 5      |               |
| P0 Incident            | 2/18/2025 | 180        | 180       | 180       | 180          | 180    | Grafana issue |
| P0 Incident            | 2/19/2025 | 30         | 30        | 30        | 30           | 30     | Grafana issue |
| HCU                    | 2/18/2025 |            |           | 5         |              | 5      |               |
| HCU                    | 2/18/2025 |            |           | 5         |              | 5      |               |
| HCU                    | 4/10/2025 |            |           | 5         |              | 5      |               |
| HCU                    | 5/15/2025 |            |           | 7         |              | 7      |               |
| HCU                    | 6/3/2025  |            |           | 9         |              | 9      |               |
| HCU                    | 6/16/2025 |            |           | 12        |              | 12     |               |
| Total downtime in mins |           | 210        | 210       | 251       | 210          | 251    |               |
| YTD SLA                |           | 99.92%     | 99.92%    | 99.9%     | 99.92%       | 99.9%  |               |
| SLA for 2025           |           | 99.96%     | 99.96%    | 99.95%    | 99.96%       | 99.95% |               |

### Incidents

### Testnet

July 10th: [P0 incident](https://status.flow.com/incidents/mvm0j940b0tf) from 11:00 AM to 11:20 AM - Sealing and Finalization halted

### Mainnet
N/A

### Key Release Dates & Breaking Changes

Network upgrade (Spork) Fall 2025.
- Testnet in Sept
- Mainnet in Oct

---

### FLIPs Tracker \[Vishal]

|                         | Application | Cadence | Governance | Protocol |  Total  |
|:------------------------|:------:|:-------:|:-----------------:|:--------:|:-------:|
| Drafted     | 8 |    7    |       0       |    9     | **24**  |
| Proposed    | 1  |    2    |       3       |    0     |  **6**  |
| Accepted    | 3  |    2    |       2       |    3     | **10**  |
| Rejected    | 0  |    1    |       1       |    0     |  **2**  |
| Implemented | 3  |    5    |       1       |    0     |  **9**  |
| Released    | 4  |   34    |       9         |    6     | **53**  |
| Total       | **19** | **50**  |       **16**       |  **18**  | **104** |


- [FLIP 332: Enforcing Domain-Based Networking Addresses for Nodes](https://github.com/onflow/flips/blob/main/protocol/20250619-network-address-validation.md) moved to `Accepted`


---


# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]
Q2 2025 Cycle Objective(s):

[Cadence Language](https://github.com/onflow/cadence/issues/3726)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6881)

**Done last sprint**

**Cadence Language**
- [Compiler Milestone 11 - Execution of user transactions](https://github.com/onflow/cadence/issues/4059)
    - [[Compiler] Enable TestInterpretInterfaceFieldUse to be run with the VM](https://github.com/onflow/cadence/pull/4080)
- [Compiler Milestone X - remaining known gaps](https://github.com/onflow/cadence/issues/3804)
    - [Re-use static-type to sema-type conversion results](https://github.com/onflow/cadence/pull/4054)
    - [[Compiler] Fix compilation of dynamic method invocation via optional chaining](https://github.com/onflow/cadence/pull/4056)
    - [[Compiler] Add support for injected values and types in VM environment](https://github.com/onflow/cadence/pull/4055)
    - [[Compiler] Implement contract deployment and update in VM environment](https://github.com/onflow/cadence/pull/4060)
    - [[Compiler] Implement contract removal and recoverable contract update for VM environment](https://github.com/onflow/cadence/pull/4061)
    - [[Compiler] Recover errors in VM like in interpreter](https://github.com/onflow/cadence/pull/4065)
    - [[Compiler] Improve VM config](https://github.com/onflow/cadence/pull/4066)
    - [[Compiler] Add call stack depth limit to VM ](https://github.com/onflow/cadence/pull/4067)
    - [[Compiler] Implement getting contract value in VM](https://github.com/onflow/cadence/pull/4069)
    - [[Compiler] Optimize VM context creation](https://github.com/onflow/cadence/pull/4071)
    - [[Compiler] Various improvements](https://github.com/onflow/cadence/pull/4070)
    - [[Compiler] Fix nested loops](https://github.com/onflow/cadence/pull/4074)
    - [[Compiler] Support meta-type `isRecovered` field in VM](https://github.com/onflow/cadence/pull/4073)
    - [[Compiler] Use the correct environment for runtime tests](https://github.com/onflow/cadence/pull/4075)
    - [[Compiler] Register common built-in type bound functions for values injected into VM environment](https://github.com/onflow/cadence/pull/4072)
    - [[Compiler] Produce ConditionError for pre/post condition failures in VM](https://github.com/onflow/cadence/pull/4077)
    - [[Compiler] Support iterating storage with broken types in VM](https://github.com/onflow/cadence/pull/4079)
    - [[Compiler] Implement InclusiveRange](https://github.com/onflow/cadence/pull/4081)
    - [[Compiler] Fix inherited default destroy event compilation](https://github.com/onflow/cadence/pull/4082)
- Compiler / VM Testing:
    - [[Compiler] Enable more tests to be run with with compiler/VM](https://github.com/onflow/cadence/pull/4076)
    - [[Compiler] Enable more tests for VM or add TODO](https://github.com/onflow/cadence/pull/4083)
- Improving AI understanding of Cadence: 
    -  [Add a tool to generate a CSV file of all parser and semantic errors](https://github.com/onflow/cadence/pull/4064)
- Bugfix
    - [Remove interpreter shared state feature](https://github.com/onflow/cadence/pull/4078)

**Cadence Execution**
- [Callback scheduler](https://github.com/onflow/flow-core-contracts/pull/485)
- Enabling Cadence VM: [Implement EVM functionality for Cadence VM](https://github.com/onflow/flow-go/pull/7559)
- Atree improvement: [Refactor to modernize and reduce code](https://github.com/onflow/atree/pull/557)

**Flow EVM**
- [Optimize logic on `BatchTxPool` for single tx EOAs](https://github.com/onflow/flow-evm-gateway/pull/835)


**This sprint**

- Cadence Language
  - Continue [Compiler Milestone 11 - Execution of user transactions](https://github.com/onflow/cadence/issues/4059).
  - Support any changes need to improve AI use of Cadence language server (reviewing / updating errors).

- Cadence Execution
  - Continue new Trie research
  - Continue work on Badger -> Pebble DB [M4: remove dependency on Badger DB completely from ENs and ANs](https://github.com/onflow/flow-go/issues/7265).
  - Continue [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598).
  - Continue [EOA control delegation](https://github.com/onflow/flow-go/issues/7441).
  - Continue [Scheduled callbacks](https://github.com/onflow/flow-go/issues/7482).

- EVM
  - merge to soft finality branch and deploy: [Optimize logic on BatchTxPool for single tx EOAs](https://github.com/onflow/flow-evm-gateway/pull/835)
  - complete work to [Integrate JSON-RPC API specification changes from Geth releases](https://github.com/onflow/flow-evm-gateway/issues/840)
  - Start EVM GW resilience improvements[1](https://github.com/onflow/flow-evm-gateway/issues/764), [2](https://github.com/onflow/flow-evm-gateway/issues/778)



**On Hold**
- [Migration of EN version beacon to Dyn. Prot. State](https://github.com/onflow/flow-go/issues/6788)
- [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)
- [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

---

### **Core Protocol** \[Vishal]
Q3 Cycle Objective(s):
* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* Overload resilience  [IN PROGRESS]
* Q3 Network Upgrade (Spork) [TODO]
* [Data Availability] Improve network reliability by reducing API load on execution node [IN PROGRESS]
* SPoCK Research [IN PROGRESS]
* Address data structure **malleability** risk [IN PROGRESS]
* Collectors submit votes for root block for spork bootstrapping [TODO]

**Done last sprint**

* <ins>Overload resilience</ins>
  - Setting up migrationtestnet for load testing

* <ins>Data Availability</ins>
  - Optimistic Sync PR reviews
  - KROK Team
    - Done:
      -   [\[DataAvailability\] Create simplified version of ingestion engine](https://github.com/onflow/flow-go/pull/7504)

    - In Review (Working on review remarks):
      -   [\[DataAvailability\] Add functional tests for processing pipeline](https://github.com/onflow/flow-go/pull/7526)
      -   [\[DataAvailability\] Improve ingestion engine error handling](https://github.com/onflow/flow-go/pull/7552)
      -   [\[DataAvailability\] Create module to get ExecutionResult for request criteria](https://github.com/onflow/flow-go/issues/7546)
     
    - In Progress
      -   [\[DataAvailability\] Refactor execution state APIs into local and EN query modules](https://github.com/onflow/flow-go/issues/7547)
      -   [\[DataAvailability\] Add update to LatestPersistedSealedResult to persister](https://github.com/onflow/flow-go/issues/7556)


* <ins>Malleability</ins>
  * Malleability PR reviews
  * KROK Team

    **_Done:_**

      -   [\[Malleability Immutable\] Add ExecutionResult validation to UnsignedExecutionReceipt constructor](https://github.com/onflow/flow-go/issues/7285)
      -   [\[Malleability Immutable\] Enforce immutability for Block (cluster)](https://github.com/onflow/flow-go/issues/7285)
      -   [\[Malleability\] Remaining TODOs and Cleanup #7311](https://github.com/onflow/flow-go/issues/7311) - (Medium Priority part)
      -   [\[Malleability Immutable\] Enforce immutability for QuorumCertificate #7297](https://github.com/onflow/flow-go/issues/7297)

    **_In Review_**:

      -   [\[Malleability Immutable\] Enforce immutability for Block (flow)](https://github.com/onflow/flow-go/issues/7543)
      -   [\[Malleability Immutable\] Enforce immutability for Header #7291](https://github.com/onflow/flow-go/issues/7291)

    **_In Progress_**:

      -   [\[Malleability\] Remaining TODOs and Cleanup #7311](https://github.com/onflow/flow-go/issues/7311) - (Low Priority part)
      -   [\[Malleability Immutable\] Enforce immutability for Transaction #7303](https://github.com/onflow/flow-go/issues/7303)
      -   [\[Malleability Immutable\] Enforce immutability for TransactionBody #7304](https://github.com/onflow/flow-go/issues/7304)


* <ins>Cryptography</ins>
  * Passkeys: PR review
  * Proof of Possession: Completed the blog and it is now ready to be published.
  * multi-SPoCK: Starting reading another PoP-based proof of BLS multi signature.
  * Threshold signature: addressed security report through minor improvement of the repo comments
  * Crypto library: Tried Devin AI in a long refactor task.

* <ins>Other</ins>
  - Fixing sealing segment bug [#5181](https://github.com/onflow/flow-go/pull/5181)


**This sprint**

* <ins>Overload resilience</ins>
  - Fixing the TPS loader to run long-running load tests.

* <ins>Data Availability:</ins>

  - KROK Team
    -   [\[DataAvailability\] Refactor execution state APIs into local and EN query modules](https://github.com/onflow/flow-go/issues/7547)
    -   [\[DataAvailability\] Add update to LatestPersistedSealedResult to persister](https://github.com/onflow/flow-go/issues/7556)
    -   Addressing review remarks from the previous sprint PRs


* <ins>Malleability</ins>
  - Continue PR review and support for current Immutability issues
  - KROK Team
    - Addressing review remarks from the previous sprint PRs
    - [\[Malleability\] Remaining TODOs and Cleanup #7311](https://github.com/onflow/flow-go/issues/7311) - (Low and High Priority part)
    - [\[Malleability Immutable\] Enforce immutability for Transaction #7303](https://github.com/onflow/flow-go/issues/7303)
    - [\[Malleability Immutable\] Enforce immutability for TransactionBody #7304](https://github.com/onflow/flow-go/issues/7304)


* <ins>Cryptography</ins>
  * Passkeys: Continue PR review.
  * SPoCK: Finish the current proof understanding.

**On Hold**

**Active Epics**

* [[EPIC] Malleability B](https://github.com/onflow/flow-go/issues/6648)
* [[EPIC] Malleability C](https://github.com/onflow/flow-go/issues/6647)
* [[EPIC] Access Node supports soft-finality updates](https://github.com/onflow/flow-go/issues/6646)

---

### **DeFi** \[Kan]

Cycle Objective(s):
- Close gaps in Defi/Liquidity infrastructure post-Cadence 1.0
- Bring liquidity and kickstart ecosystem effects

**Done last sprint**

Liquidity:


Tidal:



**This sprint**

Wrap up tracer bullet


**On Hold**



---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Reduce the time and complexity required to prototype, test, and iterate on DeFi apps on Flow using modular agents, composable building blocks, and developer-centric tooling. [OKR](https://github.com/onflow/flow-okrs/issues/125)

**Done Last Sprint**
- Supported developers at the Eth Hackathon
- Finished all components for release of the React SDK components
- Finished the live demo area in the documentation
- Wrote a blog post for the components release
- Finished the global config issue
- Added the `useFlowTransaction` hook

**This Sprint**
- Release new components in the React SDK
- Identify DeFi Blocks use cases
- Create DeFi Blocks outputs for demo
- Create DeFi blocks for swap component
- Create rules files for AI dev tools
- Support effort for Cadence errors with context for AI

---

### Applications / Wallet [Jeff]

**Cycle Objective(s):**

KR 1: Reduce the number of critical (potential loss of assets / P0) and high priority (P1) bugs experienced to an average of 0.5 per week on a 4-week rolling average.
 - Current (June 13: 0.5/week -> 95% decrease in bugs since Jen/Feb!

**Done last sprint**



**This sprint**



**On Hold**

- N/A

**Active Epics**

- TBD

---

### **Infra** \[JP / Manny]

**Done last sprint**

**Monitoring & Observability**
- [Create runbook for troubleshooting Alloy observability alerts](https://github.com/onflow/ff-sre-infrastructure/issues/519)
- [Create Runbook for Memory Usage alert Alert](https://github.com/onflow/ff-sre-infrastructure/issues/515)
- [Create Runbook for Outbound Traffic alert Alert](https://github.com/onflow/ff-sre-infrastructure/issues/514)
- [Create Runbook for Inbound Traffic alert Alert](https://github.com/onflow/ff-sre-infrastructure/issues/513)
- [Create Runbook for Has Stopped Finalizing Alert](https://github.com/onflow/ff-sre-infrastructure/issues/512)
- [Create Runbook for Accessibility for Envoy Alert](https://github.com/onflow/ff-sre-infrastructure/issues/511)
- [Create Runbook for CPU Usage > 90% Alert](https://github.com/onflow/ff-sre-infrastructure/issues/509)
- [Create Runbook for Message Rejection Alert](https://github.com/onflow/ff-sre-infrastructure/issues/507)
- [Create Runbook for Execution Transaction Throughput < 0.01 Alert](https://github.com/onflow/ff-sre-infrastructure/issues/506)
- [Create Runbook for Execution Rate < 0.0001 Alert](https://github.com/onflow/ff-sre-infrastructure/issues/505)
- [Create alert for go routines](https://github.com/onflow/ff-sre-infrastructure/issues/498)
- [Create new alert for monitoring unsealed blocks > 100](https://github.com/onflow/ff-sre-infrastructure/issues/493)
- [Fix issues within alerts module & usage](https://github.com/onflow/ff-sre-infrastructure/issues/521)
- [Update SRE alerts to go to the #alerts-sre-info channel](https://github.com/onflow/ff-sre-infrastructure/issues/528)
- [Update Alerts Ref to Latest Tag](https://github.com/onflow/ff-sre-infrastructure/issues/546)

**Tidal Support**
- [Help the 4D team to move playwright reports to an S3 bucket](https://github.com/onflow/ff-sre-infrastructure/issues/536)
- [Create Dedicated Cloud SQL Instance](https://github.com/onflow/ff-sre-infrastructure/issues/465)
- [Integrate Cloud SQL with Grafana Cloud Monitoring](https://github.com/onflow/ff-sre-infrastructure/issues/461)

**Security**
- [Triage Security Issue FLOWWEB-55](https://github.com/onflow/ff-sre-infrastructure/issues/534)
- [Triage Security Issue FLOWWEB-53](https://github.com/onflow/ff-sre-infrastructure/issues/531)

**QuickNode Migration**
- [Change the Authorized Google Account on Partner Registry](https://github.com/onflow/ff-sre-infrastructure/issues/548)
- [Create new registry for external partners](https://github.com/onflow/ff-sre-infrastructure/issues/538)

**Support**
- [Update TN52 GOMEMLIMIT on LNs](https://github.com/onflow/ff-sre-infrastructure/issues/535)
- [Execute EN CDP clean up to reclaim disk space](https://github.com/onflow/ff-sre-infrastructure/issues/527)
- [Create EN disk clean up documentation for the DL SRE team](https://github.com/onflow/ff-sre-infrastructure/issues/526)
- [TN52 Data Disk Cleaning - EN2](https://github.com/onflow/ff-sre-infrastructure/issues/542)
- [Add New Collection Cluster to Migration Testnet](https://github.com/onflow/ff-sre-infrastructure/issues/543)


**Active Epics**
- [Tidal Infra & Observability](https://github.com/onflow/ff-sre-infrastructure/issues/450)
- [Monitoring & Observability](https://github.com/onflow/ff-sre-infrastructure/issues/118)

---

### **Governance** \[Vishal]

[Q3 Cycle Objective(s)](https://github.com/orgs/onflow/projects/91/views/5):
1. Surge Pricing
2. Develop a internal document for Flow Tokenomics

**Done last sprint**

* Tokenomics discussion with Dieter [Notion doc](https://www.notion.so/flowfoundation/Flow-Tokenomics-Framework-2001aee1232480aeab1ec87407d76b9e)
  * Topic: Revised the draft of the FLIP for Surge factor

**This sprint**

* Continue Tokenomics discussion.
  * Topic: Finalize FLIP for Surge factor

---
