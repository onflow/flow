# Overview

### Team Wins 🎉

* Forte is live on testnet
* New CLI release brings a facelift and features that make life easier for AI agents and developers

---

### Mainnet Uptime - Last 14 days (09/4/25 to 09/18/25) \[Vishal]

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
- Mainnet in **Oct, 22nd (Wednesday)**

---

### FLIPs Tracker \[Vishal]

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



---


# Working Group Updates

### **Cadence Language and Execution** \[Bastian]

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

### **Core Protocol** \[Vishal]
Q3 Cycle Objective(s):
* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* Overload resilience  [IN PROGRESS]
* Q3 Network Upgrade (Spork) [TODO]
* [Data Availability] Improve network reliability by reducing API load on execution node [IN PROGRESS]
* SPoCK Research [IN PROGRESS]
* Address data structure malleability risk [IN PROGRESS]
* Collectors submit votes for root block for spork bootstrapping [IN PROGRESS]

**Done last sprint**

* <ins>Overload resilience</ins>



* <ins>Data Availability</ins>

  * KROK Team
    * Done:


    * In Review:


    * In Progress:


    * Milestones status:
      - milestone 1: completed
      - milestone 2:
        - [Epic 7180](https://github.com/onflow/flow-go/issues/7180): in progress: 4 done, 5 in progress out of 11
        - [Epic 7181](https://github.com/onflow/flow-go/issues/7181): 1 done, more issues to be created after 7180
      - milestone 3:
        - [Epic 7182](https://github.com/onflow/flow-go/issues/7182): 6/14 done, 2 in progress
        - [Epic 7615](https://github.com/onflow/flow-go/issues/7615): 1 in progress, 6 in review, out of 12
        - [Epic 7610](https://github.com/onflow/flow-go/issues/7610): 2/7 done, 0 in progress

* <ins>Immutable Models M2</ins>
  * Immutable Models PR reviews
  * KROK Team
    * Done:


    * In Review:


    * In Progress:


* <ins>Cryptography</ins>
  * Passkeys:

  * Multi-SPoCK:


* <ins>[Protocol Autonomy: Collection decentralization OKR](https://github.com/onflow/flow-okrs/issues/115)</ins>


**This sprint**

* <ins>Overload resilience</ins>
  - Document how to use or adjust the collection throttling mechanism during times of overload.


* <ins>Data Availability:</ins>
  - PR Reviews
  - KROK Team:



* <ins>Immutable Models M2</ins>
  - PR reviews
  - KROK Team:
    - Address review remarks from previous sprint


* <ins>[Protocol Autonomy: Collection decentralization OKR](https://github.com/onflow/flow-okrs/issues/115)</ins>


* <ins>Cryptography</ins>
  * SPoCK:



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

* FCL/React SDK
  * Planned with third parties for bridging wrapped BTC to Cadence
  * Started on supporting Scheduled Transactions hooks and component
  * Added basic support for passkeys to FCL

* CLI Improvements
  * Integrated DeFi Actions into `flow init`
  * Integrated DeFi Actions into Dependency Manager
  * Started work on Scheduled Transactions Manager feature
  * Allow account funding by account name
  * Interactive account funding when no account provided
  * New look and feel with branded CLI
  * Improved lists in CLI with scroll component
  * Added support for Cadence project creation from existing directories
  * Resolve relative directories with project creation
  * Added dependencies list command
  * Improved messaging in developer pain points
  * Fixed Windows Bug
  * Fixed termination signal bug

* Scheduled Transactions
  * Soldified Scheduled Transactions Manager with smart contract team
  * Updated Scheduled Transactions scaffold with Manager changes
  * Added support to Go SDK for system transactions API changes
  * Working with smart contract team to expose Scheduled Transactions in EVM

* VSCode Extension
  * Fixed tab reloading issue
  * Fixed non-root config support

**This Sprint**

* FCL/React SDK
  * Continue on supporting Scheduled Transactions hooks and component
  * Send FT hook/component
  * Additional passkeys support in FCL Discovery
  * Additional passkeys support in the React SDK
  * React SDK marketing site

* CLI Improvements
  * Continue work on Scheduled Transactions Manager feature
  * Add easy deployment setup for DeFi Actions

* Scheduled Transactions
  * Generate a default project from `flow init` if selected
  * Continue working with smart contract team to expose Scheduled Transactions in EVM
  * Support System Transaction API changes in FCL
  * Support System Transaction API changes in CLI

* Testnet <-> Mainnet
  * Integrate testnet mocking into tooling

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

### **Governance** \[Vishal]

[Q3 Cycle Objective(s)](https://github.com/orgs/onflow/projects/91/views/5):
1. Surge Pricing
2. Develop an internal document for Flow Tokenomics

**Done last sprint**

* Surge price testing on Mainnet.

**This sprint**

* Continue work on the tokenomics framework.

---
