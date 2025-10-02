# Overview

### Team Wins 🎉



---

### Mainnet Uptime - Last 14 days (09/19/25 to 10/03/25) \[Manny]

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
| YTD SLA                |           | 99.95%     | 99.95%    | 99.93%    | 99.95%       | 99.93% |               |
| SLA for 2025           |           | 99.96%     | 99.96%    | 99.95%    | 99.96%       | 99.95% |               |

### Incidents

- [P0](https://status.flow.com/incidents/kdngmc7jgf8r) on **Testnet** on 9/23, 19:17 UTC to ~19:27 UTC
  - Block rate dropped to zero
  - Root cause: Manual error during a rolling upgrade of the testnet nodes.

### Key Release Dates & Breaking Changes

- Testnet HCU - ~next week, exact date is still TBD

- Forte Network upgrade (Spork) Fall 2025.
  - Mainnet in **Oct, 22nd (Wednesday)**

---

### FLIPs Tracker \[Manny]

|                         | Application | Cadence | Governance | Protocol |  Total  |
|:------------------------|:-----------:|:-------:|:----------:|:--------:|:-------:|
| Drafted     |      9      |    7    |     0      |    10    | **26**  |
| Proposed    |      1      |    2    |     4      |    0     |  **7**  |
| Accepted    |      3      |    2    |     3      |    2     | **10**  |
| Rejected    |      0      |    1    |     1      |    0     |  **2**  |
| Implemented |      3      |    5    |     1      |    0     |  **9**  |
| Released    |      4      |   34    |     9      |    7     | **54**  |
| Total       |   **20**    | **52**  |   **17**   |  **19**  | **108** |

#### New FLIPs

- No new FLIPS added.

---


# Working Group Updates

### **Cadence Language and Execution** \[Jan]

Q3 2025 Cycle Objective(s):

- [Cadence Language goals](https://github.com/onflow/cadence/issues/4057)
- [Cadence Execution goals](https://github.com/onflow/flow-go/issues/7569)

**Done last sprint**

**Cadence Language**



**Cadence Execution**
- [Scheduled Callbacks](https://github.com/onflow/flow-go/issues/7482)

- Badger -> Pebble

- [Public key de-duplication](https://github.com/onflow/flow-go/issues/7573)

- Metering improvement: [Refactor and cleanup FVM metering](https://github.com/onflow/flow-go/pull/7810)

- Bugfix:

Testing:

Chores:


**Flow EVM**


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

### **Core Protocol** \[Alex]
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
  - Create [runbook](https://www.notion.so/flowfoundation/Finalization-Execution-Sealing-Halt-80cf3938551e4dad808e166690f3892e) on how to use or adjust the collection throttling mechanism during times of overload.
  - Added additional pannels to mainnet dashboard for improved visibility 

* Q3 Network Upgrade (Spork)
  - Dry run of root block voting with consensus node partner - Figment.
  - Sync with QuickNode on steps for mainnet network upgrade.

* <ins>Data Availability</ins>
  * New APIs for Scheduled Transactions
  * Investigate the execution data sync issues observed on FF testnet access nodes.
  * PR reviews
  * KROK Team
    * Done:


    * In Review:


    * In Progress:


    * Milestones status:
      - milestone 1: completed

      - milestone 2:

      - milestone 3:


* <ins>Immutable Models M2</ins>
  * Immutable Models PR reviews
  * KROK Team
    * Done:


    * In Review:


    * In Progress:


* <ins>Cryptography</ins>
  * SPoCK:
    - continued on SPoCK aggregation for distinct secrets (different from multi-SPoCK):
      - more on the security proof
      - exploring a way to further aggregate proofs (special case when "matching" provers are known)
        - working on defining the aggregation and its security requirements
        - working on proof feasibility (ongoing)
      - paper: minor progress in editing
      - followed up with Riad (to check his availability for review)

* <ins>[Protocol Autonomy: Collection decentralization OKR](https://github.com/onflow/flow-okrs/issues/115)</ins>
  * Continuing development on Collector Bootstrapping

* Other items not covered in OKRs:
  - Mitigating double-counting attack for byzantine primary [6127](https://github.com/onflow/flow-go-internal/issues/6127)
  - Addressing tx deduplication edge case https://github.com/onflow/flow-go/issues/7758
  - Content pieces for Forte - Malleability, Key deduplication, execution effort calibration.

**This sprint**

* <ins>Overload resilience</ins>
  - Complete the runbook on collection throttling.
  - Add metrics for tx prioritization

* <ins>Data Availability:</ins>
  - New APIs for Scheduled Transactions
  - Roll out the fix for the execution sync issue.
  - PR Reviews
  - KROK Team:

* <ins>Immutable Models M2</ins>
  - PR reviews
  - KROK Team:
    - Address review remarks from previous sprint

* <ins>[Protocol Autonomy: Collection decentralization OKR](https://github.com/onflow/flow-okrs/issues/115)</ins>
  - Continuing development on Collector Bootstrapping

* <ins>Cryptography</ins>
  * SPoCK:
    - continue on SPoCK aggregation for distinct secrets (different from multi-SPoCK)
    - make progress on the paper

* Other items not covered in OKRs:
  - Finish implementation for mitigating double-counting attack for byzantine primary [6127](https://github.com/onflow/flow-go-internal/issues/6127)
  - Addressing tx deduplication edge case https://github.com/onflow/flow-go/issues/7758

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

#### Tidal:


---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Reduce the time and complexity required to prototype, test, and iterate on DeFi apps on Flow using modular agents, composable building blocks, and developer-centric tooling. [OKR](https://github.com/onflow/flow-okrs/issues/125)

**Done Last Sprint**

* React SDK


* CLI Improvements


* Scheduled Callbacks


* Testnet <-> Mainnet


**This Sprint**

* React SDK


* CLI Improvements


* Scheduled Callbacks


* Testnet <-> Mainnet



---

### Applications / Wallet [Jeff]

**Cycle Objective(s):**

KR 1: Reduce the number of critical (potential loss of assets / P0) and high priority (P1) bugs experienced to an average of 0.25 per week on a 4-week rolling average.
- Current (Sep 5: 0.25/week -> 98% decrease in bugs since Jan/Feb!)

**Done last sprint**


**This sprint**



---

### **Infra** \[Manny]

**Done last sprint**

**Tidal**


**Observability**


**Support**


---

### **Governance** \[Kan]

[Q3 Cycle Objective(s)](https://github.com/orgs/onflow/projects/91/views/5):
1. Surge Pricing
2. Develop an internal document for Flow Tokenomics

**Done last sprint**

* Infused token discussion.

**This sprint**

* Add panels to community dashboard explaining when and why surge pricing is active.
* Continue tokenomics discussion with Dete.

---
