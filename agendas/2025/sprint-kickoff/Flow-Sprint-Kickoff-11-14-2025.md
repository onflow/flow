# Overview

### Team Wins 🎉

- We have realized more than 50% savings for our infra related costs (thank you Manny)
- All CEX have re-enabled Flow withdrawal and deposit (thank you Peter)

---

### Mainnet Uptime - Last 14 days (11/1/25 to 11/14/25) \[Manny]


|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |     100%      |        0%         |
| Block Finalization      | 99.9%   |     100%      |        0%         |
| Transaction Execution   | 99.9%   |     100%      |        0%         |
| Block Sealing           | 99.9%   |     100%      |        0%         |
| Access API Liveness     | 99.9%   |     100%      |        0%         |


#### YTD SLA \[Manny]

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

### Incidents \[Manny]

- Testnet HCU 9/12
  - Update includes the change to the account used by ScheduledTransaction, Cadence update and Fusaka on EVM GW.

### Key Release Dates & Breaking Changes \[Manny]

- Mainnet HCU on Monday, 9/17.

---

### FLIPs Tracker \[Manny]

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

- Investigating security reports
- [Compiler Milestone X - remaining known gaps](https://github.com/onflow/cadence/issues/3804)
    - Performance optimization

- Bugfix:
- Chores


**Cadence Execution**

- Network upgrade prep & execution

- Performance improvement:
- Technical [content preparation (account key deduplication)](https://github.com/fxamacker/draft-notes-about-deduplicating-public-keys/pull/14)
- CBOR [Improvement for interoperability/transcoding between CBOR & JSON]((https://github.com/fxamacker/cbor/pull/715))
- Atree

- End-End tests:

- Tooling for performance testing & execution weights calibraton:

- Chores


**Flow EVM**

- Gateway
    - Network upgrade preparation:

- Chores



**This sprint**


- Cadence Language
    - Continue tackling compiler tech-debt & optimizations

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
* Investigate root cause of sealing lag [IN PROGRESS]
* Collectors submit votes for root block for spork bootstrapping [IN PROGRESS]
* Building blocks for Collection Nodes Decentralization [IN PROGRESS]
* Migrate EN version beacon to Dyn. Prot. State [Not Started]
* Concurrent Transaction execution [Not Started]
* Downgrade historical node hardware [Not Started]

**Done last sprint**

* Q3 Network Upgrade (Spork)
  * Debugging issues that some of the CEX has run into.
    * All issues have been resolved and all CEX have re-enabled Flow deposit and withdrawal.


* <ins>Data Availability</ins>
  * Merge Scheduled Tx APIs (needs to be deployed) ([PR 1638](https://github.com/onflow/flow/pull/1638), [PR 8037](https://github.com/onflow/flow-go/pull/8037), [PR 8052](https://github.com/onflow/flow-go/pull/8052))
  * KROK Team
      * Done:


      * In Review:


      * In Progress:



  * Milestones status:
    - milestone 1: completed
    - milestone 2:
      - [Epic 7180](https://github.com/onflow/flow-go/issues/7180): 4 done, 3 in progress out of 12
      - [Epic 7181](https://github.com/onflow/flow-go/issues/7181): 1 done, more issues to be created after 7180
    - milestone 3:
      - [Epic 7182](https://github.com/onflow/flow-go/issues/7182): 10/17 done
      - [Epic 7615](https://github.com/onflow/flow-go/issues/7615): 2 done, 5 in progress, 2 in review, out of 12
      - [Epic 7610](https://github.com/onflow/flow-go/issues/7610): 2/7 done, 0 in progress


* <ins>Immutable Models M2</ins>
  * Immutable Models PR reviews
  * KROK Team



* <ins>Cryptography</ins>
  * Multi-SPoCK:
    * SPoCK paper: more editing


* <ins>Collectors submit votes for root block for spork bootstrapping</ins>
  * Update to automation scripts used for the network upgrade.

* <ins>Building blocks for Collection Nodes Decentralization</ins>


* <ins>Investigate root cause of sealing lag</ins>
    * PR to increase concurrency on the Verification node.
      * change will be rolled out as part of the HCU.


* Other items not covered in OKRs:
  * Content pieces:


**This sprint**

* <ins>Data Availability</ins>
  * Deploy Scheduled Tx Endpoints
  * Continue on milestone 2 work.
  * KROK Team
    - Continue work on Access API execution state endpoints ( milestone 3 )

* <ins>Immutable Models M2</ins>
  * Immutable Models PR reviews
  * KROK Team



* <ins>Cryptography</ins>
  * Multi-SPoCK:
    * Continue editing SPoCK paper


* <ins>Collectors submit votes for root block for spork bootstrapping</ins>
  * Testing automation changes on migrationnet.

* <ins>Building blocks for Collection Nodes Decentralization</ins>
  * Continue working on the [design doc](https://www.notion.so/flowfoundation/Proof-of-Collection-Finality-29c1aee1232480deb0c2e8d872e34ba9) and internal review.


* Other items not covered in OKRs:
  * Content piece
    * Publish Transaction Fees ([ready to be published](https://www.notion.so/flowfoundation/To-be-published-once-weights-are-live-Blog-post-for-Execution-Effort-Calibration-2-28d1aee1232480d090f6c87933bc69a6?source=copy_link))

---

### **DeFi** \[Kan]

Cycle Objective(s):
- Close gaps in Defi/Liquidity infrastructure post-Cadence 1.0
- Bring liquidity and kickstart ecosystem effects

**Done last sprint**

#### FlowALP:



**This sprint**

#### Flow ALP & Flow Vaults:



---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Equip the Flow ecosystem with the capabilities required for developers to launch and iterate on Minimum Viable Consumer DeFi Apps with minimal friction [OKR](https://github.com/onflow/flow-okrs/issues/162)

**Done Last Sprint**

- React SDK/FCL


- CLI


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


**Support**


**Cost Optimization**



---

### **Governance** \[Vishal]

[Q3 Cycle Objective(s)](https://github.com/orgs/onflow/projects/91/views/5):
1. Surge Pricing
2. Develop an internal document for Flow Tokenomics

**Done last sprint**

* Drafted the internal version of Transaction Fee increase FLIP.
  * Impact analysis of increase in transaction fee.

**This sprint**

* Publish the transaction Fee FLIP.

---
