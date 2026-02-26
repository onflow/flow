# Overview

### Team Wins 🎉

- Successfully executed the first zero-downtime HCU on mainnet

---

#### YTD SLA \[Vishal]

Total Downtime in minutes

| Incident/upgrade   | Date      | Collection | Consensus | Execution | Verification | Access (QN) | EVM GW | Overall | Comments                                         |
|--------------------|-----------|------------|-----------|-----------|--------------|-------------|--------|---------|--------------------------------------------------|
| HCU                | 1/1/2026  |            |           | 9         |              |             |        | 9       | Part of recovery from Security Incident          |
| HCU                | 1/2/2026  |            |           | 9         |              |             |        | 9       | Part of recovery from Security Incident          |
| HCU                | 1/3/2026  |            |           | 9         |              |             |        | 9       | Security Fix                                     |
| HCU                | 1/3/2026  |            |           | 9         |              |             |        | 9       | Repeated the HCU                                 |
| HCU                | 1/6/2026  |            |           | 9         |              |             |        | 9       | Security Fix                                     |
| EVM GW Issue       | 1/7/2026  |            |           | 9         |              |             | 32     | 32      | Public EVM endpoint unavailable                  |
| HCU                | 1/29/2026 |            |           | 8         |              |             |        | 8       | Security Fix                                     |
| HCU                | 2/6/2026  |            |           | 8         |              |             |        | 8       | Security Fix                                     |
| Sealing halt       | 2/11/2026 |            |           | 7         |              |             |        | 7       | FF and DL execution nodes went OOM and restarted |
| HCU                | 2/13/2026 |            |           | 9         |              |             |        | 9       | Security Fix                                     |
| Sealing Halt       | 2/23/2026 |            | 240       | 240       |              |             |        | 240     | Consensus halted                                 |
| HCU                | 2/24/2026 |            |           | 0.13      |              |             |        | 9       | EN update caused a sealing halt                  |
| Total downtime     |           | 0          | 0         | 68        | 0            | 0           | 32     | 100     |                                                  |
| YTD (01/06/26) SLA |           | 100.00%    | 99.71%    | 99.61%    | 100.00%      | 100.00%     | 99.96% | 99.57%  |                                                  |
| SLA for 2026       |           | 100.00%    | 99.95%    | 99.94%    | 100.00%      | 100.00%     | 99.99% | 99.93%  |                                                  |

### Incidents \[Vishal]


#### Planned downtime

- HCUs on 2/13 and 2/24

#### Unplanned downtime

- Sealing halt on 2/23/2026
  - [Retrospective](https://status.flow.com/incidents/d2rdc04vx65w)


---

### FLIPs Tracker \[Vishal]

|             | Application | Cadence | Governance | Protocol |  Total  |
|:------------|:-----------:|:-------:|:----------:|:--------:|:-------:|
| Drafted     |      9      |    8    |     0      |    9     | **27**  |
| Proposed    |      1      |    2    |     4      |    0     |  **7**  |
| Accepted    |      3      |    2    |     3      |    1     |  **9**  |
| Rejected    |      0      |    1    |     1      |    0     |  **2**  |
| Implemented |      3      |    6    |     1      |    0     | **10**  |
| Released    |      4      |   35    |     11     |    10    | **60**  |
| Total       |   **20**    | **55**  |   **19**   |  **21**  | **115** |

- 1 new FLIP Added
  - [FLIP 359: Allow for-in loop over dictionary keys](https://github.com/onflow/flips/issues/359)

---


# Working Group Updates

### **Cadence Language and Execution** \[Jan]

**Done last sprint**

**Cadence Language**

- Improvements:

- Bugfixes:
 
- Tooling:

- Testing:

- Chores:


**Cadence Execution**

- Zero-downtime network upgrade:

- Concurrent transactions execution testing:

- Improvements:

- Bugfixes:

- Cleanup / Tech-debt removal:

- Testing:

- chore:


**Flow EVM**

- Core
    - Feature:

    - post-inicident cleanup:


**This sprint**

- Cadence Language
    - On-hold: compiler correctness testing
    - On-hold: tacklig compiler+VM tech-debt
    - On-hold: deep-dive on compiler+VM performace

- Cadence Execution
    - Complete testing of EN zero-downtime HCU
    - Complete testing [Concurrent transaction execution](https://github.com/onflow/flow-go/issues/7571) - epoch switchover
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


* <ins>Cryptography</ins>



---

### DeFi - FCM and FYV \[Vishal]

**Done last sprint**

- Addressing contract review comments
  - [FCM: 5/5](https://github.com/orgs/onflow/projects/99/views/15) ✅
  - [FlowActions: 15/20](https://github.com/onflow/FlowActions/issues/95)
  - [FYV: 6/11](https://github.com/onflow/FlowYieldVaults/issues/131)
  - [FYV EVM: 5/19](https://github.com/onflow/FlowYieldVaultsEVM/issues/15)

- ALP

  - KROK Team:
      * Done:


      * In Review:   

      
      * In Progress


- FYV



- FYV Testing



- FCM Whitepaper/Documentation



**This sprint**

- ALP


- FYV


- FYV Testing



- FCM Whitepaper



---

### Security [Jan]

**Done Last Sprint**

- Cadence security improvements:

- In-house financial analytics & fraud detection tooling

- Update of bug bounty program with HackenProof.

- Fungible token supply monitoring


**This Sprint**

- Cadence security improvements:

- In-house financial analytics & fraud detection tooling

- Update of bug bounty program with HackenProof.

- Fungible token supply monitoring


- On Hold (capacity)


### Performance [Jan]

**Done Last Sprint**

- Cross-vm bridging performance improvements:
    - EVM Core:


- Started work on simplifying transaction scheduler contract to improve performance

**This Sprint**

- Continue: simplify transaction scheduler to improve performance 
- Continue: Cross-vm bridging performance improvements:


---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
https://github.com/onflow/flow-okrs/issues/176
https://github.com/onflow/flow-okrs/issues/175

**Done Last Sprint**

- Assist on security analytics tool, block explorer, and FCM testing (covered in other sections)
- Block Explorer


**This Sprint**


- Block Explorer



---

### Applications / Wallet [Jeff]

**Done last sprint**



**This sprint**


---

### **Infra** \[Manny]

**Done last sprint**


**Observability**


**FCM**

**Execution Ledger Service**


**TN54 Spork**


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
