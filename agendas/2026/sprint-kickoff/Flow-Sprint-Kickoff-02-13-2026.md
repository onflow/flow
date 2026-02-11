# Overview

### Team Wins 🎉

-

---

#### YTD SLA \[Vishal]

| Incident/upgrade       | Date      | Collection | Consensus | Execution | Verification | Access (QN) | EVM GW | Overall | Comments                                |
|------------------------|-----------|------------|-----------|-----------|--------------|-------------|--------|---------|-----------------------------------------|
| HCU                    | 1/1/2026  |            |           | 9         |              |             |        | 9       | Part of recovery from Security Incident |
| HCU                    | 1/2/2026  |            |           | 9         |              |             |        | 9       | Part of recovery from Security Incident |
| HCU                    | 1/3/2026  |            |           | 9         |              |             |        | 9       | Security Fix                            |
| HCU                    | 1/3/2026  |            |           | 9         |              |             |        | 9       | Repeated the HCU                        |
| EVM GW Issue           | 1/7/2026  |            |           | 9         |              |             | 32     | 32      | Public EVM endpoint unavailable         |
| HCU                    | 1/29/2026 |            |           | 8         |              |             |        | 8       | Security Fix                            |
| HCU                    | 2/6/2026  |            |           | 8         |              |             |        | 8       | Security Fix                            |
| Total downtime in mins |           | 0          | 0         | 52        | 0            | 0           | 32     | 84      |                                         |
| YTD (01/06/26) SLA     |           | 100.00%    | 100.00%   | 99.91%    | 100.00%      | 100.00%     | 99.95% | 99.86%  |                                         |
| SLA for 2026           |           | 100.00%    | 100.00%   | 99.99%    | 100.00%      | 100.00%     | 99.99% | 99.99%  |                                         |

### Incidents \[Vishal]


- Height Coordinated Upgrade - Feb 6th on Mainnet
   - [v0.46.0](https://github.com/onflow/flow-go/releases/tag/v0.46.0)

---

### FLIPs Tracker \[Vishal]

|             | Application | Cadence | Governance | Protocol |  Total  |
|:------------|:-----------:|:-------:|:----------:|:--------:|:-------:|
| Drafted     |      9      |    8    |     0      |    9     | **26**  |
| Proposed    |      1      |    2    |     4      |    0     |  **7**  |
| Accepted    |      3      |    2    |     3      |    1     |  **9**  |
| Rejected    |      0      |    1    |     1      |    0     |  **2**  |
| Implemented |      3      |    6    |     1      |    0     | **10**  |
| Released    |      4      |   35    |     11     |    10    | **60**  |
| Total       |   **20**    | **54**  |   **19**   |  **21**  | **114** |

- 2 new Cadence FLIPs added
  - [FLIP 355: Cadence Guard Statement](https://github.com/onflow/flips/pull/356)
  - [FLIP 357: Add minOf and maxOf Functions to Cadence](https://github.com/onflow/flips/pull/358)

---


# Working Group Updates

### **Cadence Language and Execution** \[Jan]

Q3 2025 Cycle Objective(s):

- [Cadence Language goals](https://github.com/onflow/cadence/issues/4057)
- [Cadence Execution goals](https://github.com/onflow/flow-go/issues/7569)

**Done last sprint**

**Cadence Language**

- Compiler testing:

- Tooling improvements:

- Chores:


**Cadence Execution**

- Storehouse

- Improvements:


- ops

- chores



**Flow EVM**
- Core

    - Improvements

    - Bugfixes:

- Gateway




**This sprint**

- Cadence Language


- Cadence Execution


- EVM



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
    * Done:


* <ins>Attack recovery</ins>


* <ins>Cryptography</ins>


* <ins>FVM improvement</ins>

---

### DeFi - FCM and FYV \[Vishal]

**Done last sprint**

- Addressing contract review comments
  - [FCM: 4/5](https://github.com/orgs/onflow/projects/99/views/15)
  - [FlowActions: 13/20](https://github.com/onflow/FlowActions/issues/95)
  - [FYV: 3/11](https://github.com/onflow/FlowYieldVaults/issues/131)
  - [FYV EVM: 5/19](https://github.com/onflow/FlowYieldVaultsEVM/issues/15)

- FCM

  - KROK Team:
      * Done:

          
      * In Review:

      * In Progress



- FYV


- FYV Testing


- FCM Whitepaper


**This sprint**

- FCM


- FYV


- FYV Testing


- FCM Whitepaper


---

### Security [Jan]

**Done Last Sprint**

- In-house financial analytics & fraud detection tooling
    - transaction & account trail  

    - Malicious contract detection

  
- Cadence security improvements
    - Completed mainnet upgrade of ~14 defensive checks and bugfixes:

    - Completed tech-debt review
    - Started external audit of the exploited functionality.

- Completed & reviewed draft of bug bounty program.

- Started Execution node fraud detection (storage layer).

**This Sprint**

- Cadence security:

- Complete update of bug bounty program with HackenProof.
- Continue execution node fraud detection (storage layer)
- In-house financial analytics & fraud detection tooling
    - transaction & account trail  

    - Continue: Malicious contract detection

    - Start: anomalous event monitoring

- On Hold (capacity)
    - Revive total token supply tracker
    - Evaluate existing anomaly detection tools (contract / Tx anomalies)

### Performance [Jan]

**Done Last Sprint**



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



**This Sprint**




---

### Applications / Wallet [Jeff]

**Done last sprint**



**This sprint**

-
---

### **Infra** \[Manny]

**Done last sprint**



**Observability**


**Historical Nodes**


**Support**


**Security**


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
