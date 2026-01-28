# Overview

### Team Wins 🎉




---

#### YTD SLA \[Vishal]

| Incident/upgrade       | Date     | Collection | Consensus | Execution | Verification | Access (QN) | EVM GW | Total  | Comments                                |
|------------------------|----------|------------|-----------|-----------|--------------|-------------|--------|--------|-----------------------------------------|
| HCU                    | 1/1/2026 |            |           | 9         |              |             |        | 9      | Part of recovery from Security Incident |
| HCU                    | 1/2/2026 |            |           | 9         |              |             |        | 9      | Part of recovery from Security Incident |
| HCU                    | 1/3/2026 |            |           | 9         |              |             |        | 9      | Security Fix                            |
| HCU                    | 1/3/2026 |            |           | 9         |              |             |        | 9      | Repeated the HCU                        |
| EVM GW Issue           | 1/7/2026 |            |           | 9         |              |             | 32     | 32     | Public EVM endpoint unavailable         |
| Total downtime in mins |          | 0          | 0         | 36        | 0            | 0           | 32     | 68     |                                         |
| YTD (01/06/26) SLA     |          | 100.00%    | 100.00%   | 99.53%    | 100.00%      | 100.00%     |        | 99.68% |                                         |
| SLA for 2026           |          | 100.00%    | 100.00%   | 99.99%    | 100.00%      | 100.00%     |        | 99.99% |                                         |

### Incidents \[Vishal]


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

- Compiler / VM

    - Improvements:
    - 
        - Performance:

    - bugfix

- Improvements
    - Tools

    - Performance:

- bugfixes

- chores


**Cadence Execution**

- Related to security incident remediation:

- Concurrent execution

- Storehouse

- Improvement:
    - TPS loader

    - performance: 

- Bugix:

- Tech debt



**Flow EVM**

- Core
    - Related to security incident remediation:

    - bugfix

- Gateway
    - Improvement

        - Performance


**This sprint**

- Cadence Language
    - On-hold: compiler correctness testing
    - On-hold: tacklig compiler+VM tech-debt
    - On-hold: deep-dive on compiler+VM performace

- Cadence Execution
    - Complete enabling EN zero-downtime HCU
    - Continue testing [Concurrent transaction execution](https://github.com/onflow/flow-go/issues/7571)
    - Park [Versioning of Execution Stack via Dynamic Protocol State](https://github.com/onflow/flow-go/issues/6999)
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
  * 


* <ins>Cryptography</ins>



---

### DeFi - FCM and FYV \[Vishal]

**Done last sprint**



**This sprint**




---

### Security [Jan]

**Done Last Sprint**

- In-house financial analytics & fraud detection tooling


**This Sprint**

- [Cadence security improvements](https://github.com/onflow/cadence-internal/issues/367)
  - Continue work on defensive code
  - Start tech-debt review
  - Start external audit of the exploited functionality
- Complete update of bug bounty program
- Start Execution node fraud detection (storage layer)
- In-house financial analytics & fraud detection tooling

- Evaluate existing anomaly detection tools (contract / Tx anomalies)

### Performance [Jan]

- Continue: Concurrent Tx execution
- Continue: Scheduled transactions performance deep-dive
- Start: Cross-vm bridging performance deep-dive

---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Equip the Flow ecosystem with the capabilities required for developers to launch and iterate on Minimum Viable Consumer DeFi Apps with minimal friction [OKR](https://github.com/onflow/flow-okrs/issues/162)

**Done Last Sprint**

- React SDK


- Misc



**This Sprint**

- React SDK
  - Add react-sdk and react-native-sdk starters creation options during flow cli init
  - Update react-native-sdk documentation

- Misc
  - Document Cadence Profiling Command & Share with Find Team
  - Support Flow Yield Vaults Fork Testing Efforts
  - Support financial analytics tool building
  - Fix fcl-js playground workflow problem after latest release workflow upgrade
  - Create more marketing materials from a technical angle


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
