# Overview

 ### Team Wins 🎉

* Fixed the `no signing keys available` error on EVM GW by improving key handling logic. Transaction error rate dropped from 200 per sec to almost 0. 
* Switched the Geth dependency in EVM GW from the forked version to the original version. EN, AN, VN updates coming sood.
* Switched Testnet traffic to QuickNode nodes.

---

### Mainnet Uptime - Last 14 days (07/26/25 to 08/08/25) \[Vishal]

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
| Total downtime in mins |           | 210        | 210       | 263       | 210          | 263    |               |
| YTD SLA                |           | 99.93%     | 99.93%    | 99.91%    | 99.93%       | 99.91% |               |
| SLA for 2025           |           | 99.96%     | 99.96%    | 99.95%    | 99.96%       | 99.95% |               |

### Incidents

No P0 or P1 incident on testnet or mainnet

### Key Release Dates & Breaking Changes


Network upgrade (Spork) Fall 2025.
- Testnet in **Sept, 17th (Wednesday)**
- Mainnet in **Oct, 1st (Wednesday)**

---

### FLIPs Tracker \[Vishal]

|                         | Application | Cadence | Governance | Protocol |  Total  |
|:------------------------|:------:|:-------:|:-----------------:|:--------:|:-------:|
| Drafted     | 8 |    7    |       0       |    9     | **24**  |
| Proposed    | 1  |    2    |       3       |    0     |  **6**  |
| Accepted    | 3  |    2    |       2       |    2     |  **9**  |
| Rejected    | 0  |    1    |       1       |    0     |  **2**  |
| Implemented | 3  |    5    |       1       |    0     |  **9**  |
| Released    | 4  |   34    |       9         |    7     | **54**  |
| Total       | **19** | **50**  |       **16**       |  **18**  | **104** |


---


# Working Group Updates

### **Cadence and Virtual Machine** \[Bastian]
Q2 2025 Cycle Objective(s):

[Cadence Language](https://github.com/onflow/cadence/issues/3726)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6881)

**Done last sprint**

**Cadence Language**

- [Compiler Milestone 11 - Execution of user transactions](https://github.com/onflow/cadence/issues/4059)

- [Compiler Milestone X - remaining known gaps](https://github.com/onflow/cadence/issues/3804)

- tech-debt removal


**Cadence Execution**

- Badger -> Pebble migration

- TPS loader improvements - network stress testing

- Tech-debt

- CBOR Improvement


**Flow EVM**

- Bugfix:

- Improvements:

- Chores:



**This sprint**

- Cadence Language


- Cadence Execution


- EVM


**On Hold**
- New Trie research
- [EOA control delegation](https://github.com/onflow/flow-go/issues/7441).
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
* Address data structure malleability risk [IN PROGRESS]
* Collectors submit votes for root block for spork bootstrapping [TODO]

**Done last sprint**

* <ins>Overload resilience</ins>


* <ins>Data Availability</ins>
  - Optimistic Sync PR reviews
  - KROK Team
    - Done:

    - In Review (Working on review remarks):


* <ins>Malleability</ins>
  * Malleability PR reviews
  * Rosetta
  * KROK Team
    * Done:

    * In Review:

    * In Progress:



* <ins>Cryptography</ins>
  * Multi-SPoCK:

  
**This sprint**

* <ins>Overload resilience</ins>
  - Continue network benchmarking
  - Improve and test the collection size throttling implementation.

* <ins>Data Availability:</ins>
  - PR Reviews
  - KROK Team



* <ins>Malleability</ins>
  - Continue PR review and support for current Immutability issues
  - Rosetta
    - Continue Rosetta testing
    - [Implementing Malleability changes in Rosetta](https://github.com/onflow/rosetta/issues/80)
  - KROK Team




* <ins>Cryptography</ins>
  - SPoCK: Continue on the tasks from last sprint (simple-SPoCK proof with PoP)

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


#### Tidal:


#### DeFi Actions:



**This sprint**

#### Tidal:


#### DeFi Actions:



---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Reduce the time and complexity required to prototype, test, and iterate on DeFi apps on Flow using modular agents, composable building blocks, and developer-centric tooling. [OKR](https://github.com/onflow/flow-okrs/issues/125)

**Done Last Sprint**

* React SDK

* DeFi Actions / AI


**This Sprint**

* DeFi Actions / AI


---

### Applications / Wallet [Jeff]

**Cycle Objective(s):**

KR 1: Reduce the number of critical (potential loss of assets / P0) and high priority (P1) bugs experienced to an average of 0.25 per week on a 4-week rolling average.
 - Current (July 25: 0.25/week -> 98% decrease in bugs since Jan/Feb!

**Done last sprint**



**This sprint**


---

### **Infra** \[JP / Manny]

**Done last sprint**

**Monitoring & Observability**


**Automation**


**Tidal**


**Security**


**Support**


**Active Epics**


---

### **Governance** \[Vishal]

[Q3 Cycle Objective(s)](https://github.com/orgs/onflow/projects/91/views/5):
1. Surge Pricing
2. Develop an internal document for Flow Tokenomics

**Done last sprint**

* Published Surge pricing FLIP
* Continue work on infused tokens

**This sprint**

* Drive Surge pricing FLIP to `Accepted` state.
* Continue work on infused tokens

---
