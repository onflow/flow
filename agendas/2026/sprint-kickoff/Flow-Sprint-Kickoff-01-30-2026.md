# Overview

### Team Wins 🎉


- Completed mainnet upgrade to latest flow-go, delivering:
    - [safer](https://github.com/onflow/cadence/pull/4424) and [faster](https://github.com/onflow/flow-go/issues/8301) Flow runtime.
    - foundation for [zero-downtime HCU](https://github.com/onflow/flow-go/issues/8308)
    - upgrade to [latest release of geth](https://github.com/onflow/flow-go/pull/8360)
- Completed testing of concurrent Tx execution performance, demonstrating:
    - no execution forks
    - over 50% transaction throughput on synthetic token transfer load with 50% chance of collisions.

---

#### YTD SLA \[Vishal]

| Incident/upgrade       | Date      | Collection | Consensus | Execution | Verification | Access (QN) | EVM GW | Total  | Comments                                |
|------------------------|-----------|------------|-----------|-----------|--------------|-------------|--------|--------|-----------------------------------------|
| HCU                    | 1/1/2026  |            |           | 9         |              |             |        | 9      | Part of recovery from Security Incident |
| HCU                    | 1/2/2026  |            |           | 9         |              |             |        | 9      | Part of recovery from Security Incident |
| HCU                    | 1/3/2026  |            |           | 9         |              |             |        | 9      | Security Fix                            |
| HCU                    | 1/3/2026  |            |           | 9         |              |             |        | 9      | Repeated the HCU                        |
| EVM GW Issue           | 1/7/2026  |            |           | 9         |              |             | 32     | 32     | Public EVM endpoint unavailable         |
| HCU                    | 1/29/2026 |            |           | 8         |              |             |        | 9      | Security Fix                            |
| Total downtime in mins |           | 0          | 0         | 44        | 0            | 0           | 32     | 76     |                                         |
| YTD (01/06/26) SLA     |           | 100.00%    | 100.00%   | 99.89%    | 100.00%      | 100.00%     |        | 99.82% |                                         |
| SLA for 2026           |           | 100.00%    | 100.00%   | 99.99%    | 100.00%      | 100.00%     |        | 99.99% |                                         |

### Incidents \[Vishal]

1. Testnet ingestion degraded - Jan 27th, 8:05 AM Pacific to Jan 28th, 10:25 AM  Pacific - P1
   - EFM triggered.
   - Root cause: Collection nodes kept going out-of-memory.
   - Immediate fix: Collection nodes were restarted.
   - Long-term fix: Will be fixed with the rolling upgrade of [v0.45.1](https://github.com/onflow/flow-go/releases/tag/v0.45.1
   - EFM was successfully exited using the Epoch recovery mechanism.

2. Height Coordinated Upgrade - Jan 28th Testnet, Jan 29th Mainnet
   - [v0.45.0](https://github.com/onflow/flow-go/releases/tag/v0.45.0)

---

### FLIPs Tracker \[Vishal]

|             | Application | Cadence | Governance | Protocol |  Total  |
|:------------|:-----------:|:-------:|:----------:|:--------:|:-------:|
| Drafted     |      9      |    6    |     0      |    9     | **24**  |
| Proposed    |      1      |    2    |     4      |    0     |  **7**  |
| Accepted    |      3      |    2    |     3      |    1     |  **9**  |
| Rejected    |      0      |    1    |     1      |    0     |  **2**  |
| Implemented |      3      |    6    |     1      |    0     | **10**  |
| Released    |      4      |   35    |     11     |    10    | **60**  |
| Total       |   **20**    | **52**  |   **19**   |  **21**  | **112** |

No change since last time.

---


# Working Group Updates

### **Cadence Language and Execution** \[Jan]

Q3 2025 Cycle Objective(s):

- [Cadence Language goals](https://github.com/onflow/cadence/issues/4057)
- [Cadence Execution goals](https://github.com/onflow/flow-go/issues/7569)

**Done last sprint**

**Cadence Language**

- Compiler testing:
    - [[Compiler] Enable compiler for remaining account tests](https://github.com/onflow/cadence/pull/4421)
- Tooling improvements:
    - [[lint] Add redundant type annotation analyzer](https://github.com/onflow/cadence-tools/pull/570)
    - [[lint] Add a cyclomatic complexity analysis](https://github.com/onflow/cadence-tools/pull/571)
    - [[lint] Add a nil-check/force-unwrap analysis](https://github.com/onflow/cadence-tools/pull/572)
    - [[LS] Add missing range to hover response](https://github.com/onflow/cadence-tools/pull/576)
- Chores:
    - [Update to atree v0.12.1](https://github.com/onflow/cadence/pull/4425)
    - [[test] Update to Cadence v1.9.6](https://github.com/onflow/cadence-tools/pull/578)
    - [[lint] Update to Cadence v1.9.7](https://github.com/onflow/cadence-tools/pull/580)
    - [[lint] Update to Cadence v1.9.5](https://github.com/onflow/cadence-tools/pull/569)
    - [[lint] Update to Cadence v1.9.6](https://github.com/onflow/cadence-tools/pull/577)
    - [Update to Cadence v1.9.6](https://github.com/onflow/flow-emulator/pull/955)
    - [Update to Cadence v1.9.6](https://github.com/onflow/flow-go/pull/8362)
    - [[v0.45] Update to Cadence v1.9.7 and atree v0.12.1](https://github.com/onflow/flow-go/pull/8372)
    - [Update to Cadence v1.9.7](https://github.com/onflow/flow-go/pull/8374)
    - [Update to Cadence v1.9.7-rc.1 and atree v0.12.1-rc.1](https://github.com/onflow/flow-go-internal/pull/7144)

**Cadence Execution**

- Storehouse
    - [[Storehouse] Background storehouse indexing](https://github.com/onflow/flow-go/pull/8255)- enables storing register updates even when storehouse is turned off, so that storehouse can be enabled with no downtime.
- Improvements:
    - Performance
        - completed [Refactoring of EVM injection and Cadence Runtime creation](https://github.com/onflow/flow-go/issues/8301)
    - [[FVM] Refactor cadence declarations in FVM](https://github.com/onflow/flow-go/pull/8356)
    - [Makefile and build fixes](https://github.com/onflow/flow-go/pull/8355)
- ops
    - [Upsize data disks on migration TN](https://github.com/onflow/ff-sre-infrastructure/pull/1070)
    - [increase devent53-access disk](https://github.com/onflow/ff-sre-infrastructure/pull/1086)
- chores
    - Atree: [Port v0.12.1 to main](https://github.com/onflow/atree/pull/624)
    - [Update flow-go](https://github.com/onflow/flow-emulator/pull/946)

**Flow EVM**
- Core
    - [Update to latest `ethereum/go-ethereum` version](https://github.com/onflow/flow-go/pull/8360)
    - Improvements
        - developer experience: [Improve error handling for Cadence Arch precompiles](https://github.com/onflow/flow-go/pull/8341)
    - Bugfixes:
        - [Check for integer overflow when reading ABI encoded bytes](https://github.com/onflow/flow-go/pull/8357)
        - [Handle empty RLP list in Cadence Arch `verifyCOAOwnershipProof()`](https://github.com/onflow/flow-go/pull/8361)
- Gateway
    - [Update to latest `ethereum/go-ethereum` version](https://github.com/onflow/flow-evm-gateway/pull/951)



**This sprint**

- Cadence Language
    - On-hold: compiler correctness testing
    - On-hold: tacklig compiler+VM tech-debt
    - On-hold: deep-dive on compiler+VM performace

- Cadence Execution
    - Complete enabling EN zero-downtime HCU
    - Complete testing [Concurrent transaction execution](https://github.com/onflow/flow-go/issues/7571)
    - On-hold [Versioning of Execution Stack via Dynamic Protocol State](https://github.com/onflow/flow-go/issues/6999)
    - On-hold [Badger -> Pebble: remaining tasks and cleanup](https://github.com/onflow/flow-go/issues/7682)
    - On-Hold [Storehouse](https://github.com/onflow/flow-okrs/issues/166)
    - On-Hold: [Scheduled Transactions for EVM](https://github.com/onflow/flow-go/issues/8019)
    - On-Hold: New Trie research

- EVM
    - On-Hold, FCM support


**On Hold**
- [EOA control delegation](https://github.com/onflow/flow-go/issues/7441).
- [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

---

### **Core Protocol** \[Vishal]

Q1 Cycle Objective(s):
* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* [Data Availability] Improve network reliability by reducing API load on execution node [PAUSED]* [Data Availability] Improve network reliability by reducing API load on execution node [PAUSED]
* Building towards few Permissionless Collection Nodes [PAUSED]
* SPoCK Research [IN PROGRESS]
* Downgrade historical node hardware [COMPLETE]

**Last sprint completed, ongoing and starting**

* <ins>Data Availability</ins>
  * KROK Team - Completing in-flight tasks before switching over to FCM.
    * Done:
        - [[Data Availability] Implement fork-aware Transaction Results Endpoints #7644](https://github.com/onflow/flow-go/issues/7644)
        - [[Data Availability] Implement fork-aware Streaming Account Events Endpoints #7658](https://github.com/onflow/flow-go/issues/7658)
        - [[Data Availability] Implement fork-aware Streaming Events Endpoints #7657](https://github.com/onflow/flow-go/issues/7657)
        - [[Data Availability] Design and develop new unit tests for streaming account statuses endpoints (backend) #8329](https://github.com/onflow/flow-go/issues/8329)
        - [[Data Availability] Design and develop new unit tests for streaming events endpoints (backend) #8328](https://github.com/onflow/flow-go/issues/8328)
        - [[Data Availability] Turn on integration & unit tests that were skipped due to active work on optimistic sync package #8331](https://github.com/onflow/flow-go/issues/8331)

* <ins>Attack recovery</ins>
  * Burning the counterfeit tokens.

* <ins>Cryptography</ins>
  * Paper editing: security proofs (3 out 4 are done) - finalizing the 4th conclusion and general review
  * Next sprint - onboarding Spearbit.

* <ins>FVM improvement</ins>
  * Stricter transaction verification (see [forum post](https://forum.flow.com/t/stricter-transaction-verification-in-the-flow-virtual-machine-fvm-and-access-api/8481)) in FVM and Access node.

---

### DeFi - FCM and FYV \[Vishal]

**Done last sprint**

- Addressing contract review comments
  - [FCM: 4/5](https://github.com/orgs/onflow/projects/99/views/15)
  - [FlowActions: 13/20](https://github.com/onflow/FlowActions/issues/95)
  - [FYV: 3/11](https://github.com/onflow/FlowYieldVaults/issues/131)
  - [FYV EVM: 5/19](https://github.com/onflow/FlowYieldVaultsEVM/issues/15)

- FCM
  - Addressing issues with deposits to FLOW and PyUSD0 vaults [#114](https://github.com/onflow/FlowCreditMarket/issues/114)
  - Redesign of the liquidation process [#87](https://github.com/onflow/FlowCreditMarket/issues/87) - PR review and discussion
  - Addressing feedback received on the EVM UniswapV3SwapConnectors [#93](https://github.com/onflow/FlowActions/issues/93)
  - Implementing the rebalancing logic in FCM (design and discussion) [#80](https://github.com/onflow/FlowCreditMarket/issues/90)
  - Starting bi-weekly Q&A sessions for knowledge sharing.
  - Team identified several important design flaws and have issued them up.
  - KROK Team:
      * Done:
          - [[FlowCreditMarket] Add stabilityFee parameter for Protocol Stability ](https://github.com/onflow/FlowCreditMarket/issues/85)
          - [[FlowCreditMarket] Insurance fund implementation ](https://github.com/onflow/FlowCreditMarket/issues/84)
          - [[FlowCreditMarket] Wrong calculation FlowCreditMarket->perSecondInterestRate #110 ](https://github.com/onflow/FlowCreditMarket/issues/110)
          - [[FlowActions] FLOW-14 Incomplete Components Info #109 ](https://github.com/onflow/FlowActions/issues/109)
          - [[FlowActions] FLOW-13 Low Gas Estimations #108 ](https://github.com/onflow/FlowActions/issues/108)
          
      * In Review:
          - [[FlowActions] S4 Improve UniswapV3 swap precision #114 ](https://github.com/onflow/FlowActions/issues/114)
          - [[FlowActions] FLOW-10 Missing Input Validation #105 ](https://github.com/onflow/FlowActions/issues/105)
      
      * In Progress
          - [[FlowActions] FLOW-15 Unfinished TODOs #110 ](https://github.com/onflow/FlowActions/issues/110)
          - [[FlowActions] S5 General Improvements #115 ](https://github.com/onflow/FlowActions/issues/115)
          - [[FlowCreditMarket] Offchain analytics and alerting for FCM health and positions #122 ](https://github.com/onflow/FlowCreditMarket/issues/122)


- FYV
  - Redesigning the supervisor and worker architecture
  - Addressing UI and backend [issues](https://github.com/orgs/onflow/projects/99/views/2)
  - FYV EVM contract improvement [#39](https://github.com/onflow/FlowYieldVaultsEVM/issues/39)

- FYV Testing
  - Reviewed existing FCM simulation testing work
  - Investigating Precision Loss in Forked Scenario 1
  - Converting FYV Forking Scenarios

- FCM Whitepaper
  - Aligned on goals and action items in a working session yesterday.
  - Expanding the technical depth of Section 1 of the primer
  - Revalidating and double-confirming key assumptions.
  - Reviewing suggestions and cleaning up the formatting and messaging.

**This sprint**

- FCM
  - Continue making progress towards addressing review comments.
  - Continue working towards all of the `in progress issues` for both FCM and FYV
    - Liquidation implementation PR reviews.
    - Re-balancing logic.
    - Address design flaws around entitlements.
  - Start working on an off-chain monitoring and alerting service for FCM.

- FYV
  - Supervisor worker re-architecture.
  - UI and BE issues.

- FYV Testing
  - Converting FYV Forking Simulation Scenarios

- FCM Whitepaper
  - Derive a public-facing doc from the current WIP technical content piece.
  - Continue to validate key assumptions.
  - Doc site PR will be merged next week. Please review if you haven't already: [#1626](https://github.com/onflow/docs/pull/1626)

---

### Security [Jan]

**Done Last Sprint**

- In-house financial analytics & fraud detection tooling
    - transaction & account trail  
        - Finished spec for the new analytics tool
        - Complete flow-analytics project initial setup and architecture
        - Add initial node graph implementation to flow analytics
        - Build node-graph navigator panel for flow-analytics
        - Built the Sankey chart visualization for token flows
        - Add vercel preview in PRs and preview with auth for flow-analytics
    - Malicious contract detection
        - [POC](https://github.com/onflow/ripple-slack-bot) complete
  
- Cadence security improvements
    - Completed mainnet upgrade of ~14 defensive checks and bugfixes:
        - [Remove special handling of empty identifier in member access](https://github.com/onflow/cadence/pull/4419)
        - [Fix string template expression parsing with quoted quotes](https://github.com/onflow/cadence/pull/4420)
        - [Fix ComputationProfile holding on to environment reference](https://github.com/onflow/cadence/pull/4418)
        - additional 10 internal PRs: [Port v1.9.7-rc.1](https://github.com/onflow/cadence/pull/4424)
    - Completed tech-debt review
    - Started external audit of the exploited functionality.

- Completed & reviewed draft of bug bounty program.

- Started Execution node fraud detection (storage layer).

**This Sprint**

- Cadence security:
  - Continue external audit of the exploited functionality
- Complete update of bug bounty program with HackenProof.
- Continue execution node fraud detection (storage layer)
- In-house financial analytics & fraud detection tooling
    - transaction & account trail  
        - Color Sankey chart to indicate token flow VM movements
        - Complete node-graph visualization with multiple interconnected nodes for flow-analytics
        - Add data loading through transactions endpoint to load node graph for flow-analytics
        - Add header with search bar in flow-analytics
        - Add filters panel with node graph update in flow analytics
    - Continue: Malicious contract detection
        - deploy on CloudRun, add CI/CD setup.
    - Start: anomalous event monitoring

- On Hold (capacity)
    - Revive total token supply tracker
    - Evaluate existing anomaly detection tools (contract / Tx anomalies)

### Performance [Jan]

**Done Last Sprint**

- Completed testing of Concurrent Tx execution: performance and correctness.

**This Sprint**

- Complete testing of Concurrent Tx execution - epoch switchover.
- Continue: Scheduled transactions performance deep-dive
- Continue: Cross-vm bridging performance deep-dive

---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
https://github.com/onflow/flow-okrs/issues/176
https://github.com/onflow/flow-okrs/issues/175

**Done Last Sprint**

- Assist on security analytics tool and FCM testing (covered in other sections)
- Create documentation for flow cadence profile command
- Add (CI) Caching for Forked Emulator & Test Framework
- Completed FlowCron documentation

**This Sprint**

- Assist on security analytics tool and FCM testing (covered in other sections)
- Update CLI Forking Tests To Use Local Emulator Instead of AN


---

### Applications / Wallet [Jeff]

**Done last sprint**

- Shipped version 3.1 on Extension:
    - Added full EOA support
    - Support for migrating from COA to EOA

**This sprint**

- Ship version 3.1 on mobile, with full support for EOAs and COA->EOA migration
---

### **Infra** \[Manny]

**Done last sprint**

**Execution Ledger Service**
- [Repurpose Port 9999 to be used by Execution Ledger Service Metrics](https://github.com/onflow/ff-sre-infrastructure/issues/1072)
- [Test Execution Ledger Metrics Scraping and Pushing to Grafana](https://github.com/onflow/ff-sre-infrastructure/issues/1073)
- [Create Ansible Role and Playbook to Deploy the Execution Ledger Service](https://github.com/onflow/ff-sre-infrastructure/issues/1075)
- [Adjust Migration TN to Set Flags for the Execution Ledger Service](https://github.com/onflow/ff-sre-infrastructure/issues/1076)
- [Update Prometheus on Live Networks to Allow Scraping the Execution Ledger Metrics](https://github.com/onflow/ff-sre-infrastructure/issues/1082)
- [Bootstrap Migration TN and Deploy the Execution Ledger Service](https://github.com/onflow/ff-sre-infrastructure/issues/1088)

**Observability**
- [Expand Profiling on Live Networks](https://github.com/onflow/ff-sre-infrastructure/issues/1079)

**Historical Nodes**
- [Update MN27 AN1 Flags for Serving Local Data](https://github.com/onflow/ff-sre-infrastructure/issues/1077)

**Support**
- [Investigate CI errors on flow-go-internal](https://github.com/onflow/ff-sre-infrastructure/issues/1050)
- [Extract and Upload a Copy of the MN EVM GW Database for BitGet's Recovery](https://github.com/onflow/ff-sre-infrastructure/issues/1087)
- [Downsize data disks on migration TN](https://github.com/onflow/ff-sre-infrastructure/issues/1089)

**Security**
- [Triage Security Issue FLOWWEB-128](https://github.com/onflow/ff-sre-infrastructure/issues/1091)

---

### **Governance** \[Vishal]

[Q4 Cycle Objective(s)](https://github.com/orgs/onflow/projects/91/views/5):
1. Transactions fees update [Done]
2. Surge Pricing [In Progress]
3. Develop an internal document for Flow Tokenomics [Paused]

**Done last sprint**
* No updates


**This sprint**
* No Updates

---
