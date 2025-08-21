# Overview

 ### Team Wins 🎉


---

### Mainnet Uptime - Last 14 days (08/09/25 to 08/22/25) \[Vishal]

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
| HCU                    | 8/7/2025  |            |           | 9         |              | 9      |               |
| Total downtime in mins |           | 210        | 210       | 272       | 210          | 272    |               |
| YTD SLA                |           | 99.94%     | 99.94%    | 99.92%    | 99.94%       | 99.92% |               |
| SLA for 2025           |           | 99.96%     | 99.96%    | 99.95%    | 99.96%       | 99.95% |               |

### Incidents

N/A

### Key Release Dates & Breaking Changes


Forte Network upgrade (Spork) Fall 2025.
- Testnet in **Sept, 17th (Wednesday)**
- Mainnet in **End of Oct**

---

### FLIPs Tracker \[Vishal]

|                         | Application | Cadence | Governance | Protocol |  Total  |
|:------------------------|:-----------:|:-------:|:----------:|:--------:|:-------:|
| Drafted     |      9      |    6    |     0      |    10    | **25**  |
| Proposed    |      1      |    3    |     4      |    0     |  **7**  |
| Accepted    |      3      |    2    |     3      |    2     | **10**  |
| Rejected    |      0      |    1    |     1      |    0     |  **2**  |
| Implemented |      3      |    5    |     1      |    0     |  **9**  |
| Released    |      4      |   34    |     9      |    7     | **54**  |
| Total       |   **19**    | **50**  |   **17**   |  **19**  | **107** |

#### New FLIPs
1. [Add 128-bit fixed-point types to Cadence](https://github.com/onflow/flips/issues/341)

---


# Working Group Updates

### **Cadence Language and Execution** \[Bastian]

Q3 2025 Cycle Objective(s):

- [Cadence Language goals](https://github.com/onflow/cadence/issues/4057)
- [Cadence Execution goals](https://github.com/onflow/flow-go/issues/7569)

**Done last sprint**

**Cadence Language** \[Bastian]

- Compiler:


- [Fixed-point type improvements](https://github.com/onflow/flow-okrs/issues/142)


- [Make Cadence development great with AIs](https://github.com/onflow/flow-okrs/issues/143)


- Security fixes


**Cadence Execution** \[Leo]

- Badger -> Pebble migration
  - PR reviews.
  - Continue testing on mainnet with one node of each type running Pebble.

- TPS loader improvements - network stress testing


- Sceduled Callbacks


- Storage Key Deduplication


**Flow EVM**

- Improvements:

- Chores:


**This sprint**

- Cadence Language


- Cadence Execution

  - Badger -> Pebble migration
    - Continue PR reviews.
    - Continue testing on mainnet with more nodes of each type running Pebble.
    - Merge the Malleability branch into Pebble branch.

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
* Q3 Network Upgrade (Spork) [IN PROGRESS]
* [Data Availability] Improve network reliability by reducing API load on execution node [IN PROGRESS]
* SPoCK Research [IN PROGRESS]
* Address data structure malleability risk [IN PROGRESS]
* Collectors submit votes for root block for spork bootstrapping [IN PROGRESS]

**Done last sprint**

* <ins>Overload resilience</ins>
  * Second round of internal review.

* <ins>Data Availability</ins>



* <ins>Malleability</ins>
  * Malleability PR reviews
  * KROK Team
    * Done:


    * In Review:



* <ins>Cryptography</ins>
  * Multi-SPoCK:


**This sprint**

* <ins>Overload resilience</ins>
  * Review and merge Collection Throttling [PR](https://github.com/onflow/flow-go/pull/7683)

* <ins>Data Availability:</ins>
  - PR Reviews
  - KROK Team:



* <ins>Malleability</ins>

  - KROK Team:


* <ins>[Protocol Autonomy: Collection decentralization OKR](https://github.com/onflow/flow-okrs/issues/115)</ins>


* <ins>Cryptography</ins>


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

* DeFi Actions / AI


**This Sprint**

* DeFi Actions / AI


* Misc


---

### Applications / Wallet [Jeff]

**Cycle Objective(s):**

KR 1: Reduce the number of critical (potential loss of assets / P0) and high priority (P1) bugs experienced to an average of 0.25 per week on a 4-week rolling average.
 - Current (Aug 8: 0.25/week -> 98% decrease in bugs since Jan/Feb!)

**Done last sprint**


**This sprint**




---

### **Infra** \[JP / Manny]

**Done last sprint**

**Tidal Observability**


**Node Hosting**


**Security**


**Support**


---

### **Governance** \[Vishal]

[Q3 Cycle Objective(s)](https://github.com/orgs/onflow/projects/91/views/5):
1. Surge Pricing
2. Develop an internal document for Flow Tokenomics

**Done last sprint**

* Surge pricing FLIP marked as `Accepted`
* Resumed working on the internal document for infused tokens

**This sprint**

* Testing Surge pricing on Testnet.
* Continue work on the internal document for infused tokens

---
