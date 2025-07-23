# Overview

 ### Team Wins 🎉

---

### Mainnet Uptime - Last 14 days (07/14/25 to 07/25/25) \[Vishal]

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

### Testnet

N/A

### Mainnet
N/A

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
| Accepted    | 3  |    2    |       2       |    3     | **10**  |
| Rejected    | 0  |    1    |       1       |    0     |  **2**  |
| Implemented | 3  |    5    |       1       |    0     |  **9**  |
| Released    | 4  |   34    |       9         |    6     | **53**  |
| Total       | **19** | **50**  |       **16**       |  **18**  | **104** |


- [FLIP 332: Enforcing Domain-Based Networking Addresses for Nodes](https://github.com/onflow/flips/blob/main/protocol/20250619-network-address-validation.md) moved to `Released`


---


# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]
Q2 2025 Cycle Objective(s):

[Cadence Language](https://github.com/onflow/cadence/issues/3726)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6881)

**Done last sprint**

**Cadence Language**

- Compiler / VM Testing:

- Improving AI understanding of Cadence: 

- Bugfix


**Cadence Execution**
- [Callback scheduler](https://github.com/onflow/flow-core-contracts/pull/485)
- Enabling Cadence VM: [Implement EVM functionality for Cadence VM](https://github.com/onflow/flow-go/pull/7559)
- Atree improvement: [Refactor to modernize and reduce code](https://github.com/onflow/atree/pull/557)

**Flow EVM**
- 


**This sprint**

- Cadence Language


- Cadence Execution


- EVM



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
* Address data structure malleability risk [IN PROGRESS]
* Collectors submit votes for root block for spork bootstrapping [TODO]

**Done last sprint**

* <ins>Overload resilience</ins>
  - 

* <ins>Data Availability</ins>
  - Optimistic Sync PR reviews
  - KROK Team
    - Done:


    - In Review (Working on review remarks):

     
    - In Progress



* <ins>Malleability</ins>
  * Malleability PR reviews
  * Updating malleability merge branches
  * KROK Team

    **_Done:_**



    **_In Review_**:



    **_In Progress_**:




* <ins>Cryptography</ins>
  * Passkeys: PR review
  * Proof of Possession: Completed the blog and it is now ready to be published.
  * multi-SPoCK: Starting reading another PoP-based proof of BLS multi signature.
  * Threshold signature: addressed security report through minor improvement of the repo comments
  * Crypto library: Tried Devin AI in a long refactor task.

* <ins>Other</ins>


**This sprint**

* <ins>Overload resilience</ins>


* <ins>Data Availability:</ins>
  - PR Reviews
  - Milestone 2 Optimistic Sync: Continue work on result forest.
  - KROK Team



* <ins>Malleability</ins>
  - Continue PR review and support for current Immutability issues
  - Continuing Benchnet testing for malleability rollout
  - KROK Team



* <ins>Cryptography</ins>
  * Passkeys: ?
  * SPoCK: ?

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




**This sprint**




---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Reduce the time and complexity required to prototype, test, and iterate on DeFi apps on Flow using modular agents, composable building blocks, and developer-centric tooling. [OKR](https://github.com/onflow/flow-okrs/issues/125)

**Done Last Sprint**


**This Sprint**


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


**Tidal Support**


**Support**



**Active Epics**
- [Tidal Infra & Observability](https://github.com/onflow/ff-sre-infrastructure/issues/450)
- [Monitoring & Observability](https://github.com/onflow/ff-sre-infrastructure/issues/118)

---

### **Governance** \[Vishal]

[Q3 Cycle Objective(s)](https://github.com/orgs/onflow/projects/91/views/5):
1. Surge Pricing
2. Develop an internal document for Flow Tokenomics

**Done last sprint**

* Published Surge Pricing FLIP
* Deep-dive into infused Tokens

**This sprint**

* Drive Surge Pricing FLIP disucssion.
* Continue work on infused tokens

---
