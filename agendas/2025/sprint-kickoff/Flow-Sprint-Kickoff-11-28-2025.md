# Overview

### Team Wins 🎉


---

### Mainnet Uptime - Last 14 days (11/14/25 to 11/28/25) \[Vishal]


|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |     100%      |        0%         |
| Block Finalization      | 99.9%   |     100%      |        0%         |
| Transaction Execution   | 99.9%   |     100%      |        0%         |
| Block Sealing           | 99.9%   |     100%      |        0%         |
| Access API Liveness     | 99.9%   |     100%      |        0%         |


#### YTD SLA \[Vishal]

| Incident/upgrade       | Date       | Collection | Consensus | Execution | Verification | Total      | Comments      |
|------------------------|------------|------------|-----------|-----------|--------------|------------|---------------|
| HCU                    | 1/27/2025  |            |           | 5         |              | 5          |               |
| P0 Incident            | 2/18/2025  | 180        | 180       | 180       | 180          | 180        | Grafana issue |
| P0 Incident            | 2/19/2025  | 30         | 30        | 30        | 30           | 30         | Grafana issue |
| HCU                    | 2/18/2025  |            |           | 5         |              | 5          |               |
| HCU                    | 2/18/2025  |            |           | 5         |              | 5          |               |
| HCU                    | 4/10/2025  |            |           | 5         |              | 5          |               |
| HCU                    | 5/15/2025  |            |           | 7         |              | 7          |               |
| HCU                    | 6/3/2025   |            |           | 9         |              | 9          |               |
| HCU                    | 6/16/2025  |            |           | 12        |              | 12         |               |
| HCU                    | 8/7/2025   |            |           | 9         |              | 9          |               |
| Forte network upgrade  | 10/22/2025 | 284        | 240       | 240       | 240          | 470        | 470           |
| Total downtime in mins |            | 210        | 210       | 272       | 210          | 272        |               |
| YTD SLA                |            | 99.89%     | 99.90%    | 99.89%    | 99.90%       | 99.84%     |               |
| SLA for 2025           |            | 99.91%     | 99.91%    | 99.90%    | 99.91%       | **99.86%** |               |

### Incidents \[Vishal]

- Planned downtime:
    - Mainnet HCU on Monday, 9/20

- Unplanned downtime:
    - EVM GW downtime: ~40 mins 

### Key Release Dates & Breaking Changes \[Vishal]



---

### FLIPs Tracker \[Vishal]

|             | Application | Cadence | Governance | Protocol |  Total  |
|:------------|:-----------:|:-------:|:----------:|:--------:|:-------:|
| Drafted     |      9      |    6    |     0      |    9     | **24**  |
| Proposed    |      1      |    2    |     3      |    1     |  **7**  |
| Accepted    |      3      |    2    |     3      |    1     |  **9**  |
| Rejected    |      0      |    1    |     1      |    0     |  **2**  |
| Implemented |      3      |    6    |     1      |    0     | **10**  |
| Released    |      4      |   35    |     9      |    10    | **58**  |
| Total       |   **20**    | **52**  |   **17**   |  **21**  | **110** |

- No change

---


# Working Group Updates

### **Cadence Language and Execution** \[Jan]

Q3 2025 Cycle Objective(s):

- [Cadence Language goals](https://github.com/onflow/cadence/issues/4057)
- [Cadence Execution goals](https://github.com/onflow/flow-go/issues/7569)

**Done last sprint**

**Cadence Language**

- [Compiler Milestone X - remaining known gaps](https://github.com/onflow/cadence/issues/3804)
    - Performance optimization

- [Improve Cadence Errors to Support LLM Efficiency](https://github.com/onflow/cadence/issues/4062)

- Other minor optimizations:

- Tooling

- Chores


**Cadence Execution**

- Checduled transactions - changing authorizer account

- Network Operation:
    - optimize execution node disk usage:

- Improvements

- Bugfix:

- Automation

- Network upgrade to v0.44 - preparation:

- Chore:


**Flow EVM**
- Features
    - [Ethereum Fusaka Update](https://github.com/onflow/flow-evm-gateway/issues/912)

- Optimization

- Network operation:

- Chore


**This sprint**

- Cadence Language


- Cadence Execution


- EVM



**On Hold**
- [EOA control delegation](https://github.com/onflow/flow-go/issues/7441).
- [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

---

### **Core Protocol** \[Vishal]

Q4 Cycle Objective(s):
* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* Network Upgrade (Spork) [Done]
* [Data Availability] Improve network reliability by reducing API load on execution node [IN PROGRESS]
* SPoCK Research [IN PROGRESS]
* Investigate root cause of sealing lag [Done]
* Collectors submit votes for root block for spork bootstrapping [IN PROGRESS]
* Building blocks for Collection Nodes Decentralization [IN PROGRESS]
* Downgrade historical node hardware [IN PROGRESS]

**Done last sprint**

* Q3 Network Upgrade (Spork)



* <ins>Data Availability</ins>
  * KROK Team
      * Done:

      * In Review:


      * In Progress:


  * Milestones status:
    - milestone 1: completed
    - milestone 2:
      - [Epic 7180](https://github.com/onflow/flow-go/issues/7180): 5 done, 3 in progress out of 12
      - [Epic 7181](https://github.com/onflow/flow-go/issues/7181): 1 done, more issues to be created after 7180
    - milestone 3:
      - [Epic 7182](https://github.com/onflow/flow-go/issues/7182): 11/17 done
      - [Epic 7615](https://github.com/onflow/flow-go/issues/7615): 3 done, 7 in progress/review, out of 12
      - [Epic 7610](https://github.com/onflow/flow-go/issues/7610): 2/7 done, 2 in progress/review

* <ins>Immutable Models M2</ins>
  * Immutable Models PR reviews
  * KROK Team


* <ins>Cryptography</ins>
  * Multi-SPoCK:
    * SPoCK paper:



* <ins>Collectors submit votes for root block for spork bootstrapping</ins>
  * Testing and automation for network bootstrapping during a spork with decentralized collector nodes

* <ins>Building blocks for Collection Nodes Decentralization</ins>
  * [Proof of Collection Finality Design (pending feedback)](https://www.notion.so/flowfoundation/Proof-of-Collection-Finality-29c1aee1232480deb0c2e8d872e34ba9)
  * Auditing Collection Node engines for Permissionless changes



* <ins>Investigate root cause of sealing lag</ins>


* Other items not covered in OKRs:



**This sprint**

* <ins>Data Availability</ins>

  * KROK Team


* <ins>Immutable Models M2</ins>



* <ins>Cryptography</ins>



* <ins>Collectors submit votes for root block for spork bootstrapping</ins>


* <ins>Building blocks for Collection Nodes Decentralization</ins>



* Other items not covered in OKRs:


---

### **DeFi** \[Kan]

Cycle Objective(s):
- Close gaps in Defi/Liquidity infrastructure post-Cadence 1.0
- Bring liquidity and kickstart ecosystem effects

**Done last sprint**

#### Flow ALP & Flow Vaults:



**This sprint**

#### Flow ALP & Flow Vaults:


---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Equip the Flow ecosystem with the capabilities required for developers to launch and iterate on Minimum Viable Consumer DeFi Apps with minimal friction [OKR](https://github.com/onflow/flow-okrs/issues/162)

**Done Last Sprint**

- Fork Testing


- Mobile


- React SDK Liquidity


- Misc



**This Sprint**

- Fork Testing


- Mobile


- React SDK Liquidity


- Misc


---

### Applications / Wallet [Jeff]

**Done last sprint**



**This sprint**



---

### **Infra** \[Manny]

**Done last sprint**

**Cost Optimization**


**Support**


**Security**


---

### **Governance** \[Vishal]

[Q4 Cycle Objective(s)](https://github.com/orgs/onflow/projects/91/views/5):
1. Surge Pricing
2. Develop an internal document for Flow Tokenomics

**Done last sprint**

* Published the transaction fees FLIP.


**This sprint**

* Roll out the transaction fee increase on testnet on Mon, Dec 1st.
* Roll out the transaction fee increase on mainnet on Thursday, Dec 4th.

---
