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
   - Root cause: Collection nodes keep going out-of-memory.
   - Short-term fix: Collection nodes were restarted.
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
* [Data Availability] Improve network reliability by reducing API load on execution node [PAUSED]
* Building towards few Permissionless Collection Nodes [PAUSED]
* SPoCK Research [IN PROGRESS]
* Downgrade historical node hardware [COMPLETE]

**Last sprint completed, ongoing and starting**

* <ins>Attack recovery</ins>
  * Burning the counterfeit tokens.


* <ins>Cryptography</ins>



---

### DeFi - FCM and FYV \[Vishal]

**Done last sprint**

- Reviewed existing FCM simulation testing work
- Investigating Precision Loss in Forked Scenario 1
- Converting FYV Forking Scenarios

**This sprint**

- Converting FYV Forking Simulation Scenarios


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

- Assist on security analytics tool and FCM testing
- Create documentation for flow cadence profile command
- Add (CI) Caching for Forked Emulator & Test Framework
- Completed FlowCron documentation

**This Sprint**

- Assist on security analytics tool and FCM testing
- Update CLI Forking Tests To Use Local Emulator Instead of AN


---

### Applications / Wallet [Jeff]

**Done last sprint**



**This sprint**

- Ship version 3.1, adding EOA support on all platforms. 

---

### **Infra** \[Kan]

**Done last sprint**

**MN28 Spork**


**Historical Nodes**


**Cost Optimization**


**Support**


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
