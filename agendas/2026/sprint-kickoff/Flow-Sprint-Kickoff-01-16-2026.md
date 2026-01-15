# Overview

### Team Wins 🎉

- Attack recovery is now complete - all accounts have been unrestricted.


---

#### YTD SLA \[Vishal]

##### 2026

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

- Jan 7th, 11:23 AM Pacific to 11:55 AM Pacific EVM Public endpoint became unusable.
  - Root cause: Node operator misconfigured the endpoint (human error).

- Rolling upgrade to `v0.44.19` to remove additional privileges granted to Service Account (no downtime)

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
- Bugfixes:

- Improvement

- Tools

- chores


**Cadence Execution**

- Security incident mitigation

- Storehouse

- Concurrent execution

- Improvements

- Network upgrade

- TPS loader

- Tests


**Flow EVM**

- Core
    - Improvement

- Gateway
    - bugfix:

    - Improvement

    - chore:


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
* Support DeFi strategy [IN PROGRESS]
* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* [Data Availability] Improve network reliability by reducing API load on execution node [PAUSED]
* SPoCK Research [IN PROGRESS]
* Building towards few Permissionless Collection Nodes [PAUSED]
* Downgrade historical node hardware [COMPLETE]

**Last sprint completed, ongoing and starting**

* <ins>Attack recovery</ins>

    
* <ins>Building Towards Permissionless Collection Nodes</ins>


* <ins>Data Availability</ins>
  * PR reviews
  * optimistic sync caching layer design anf fork-aware execution result processing (temporarily deprioritized)
  * KROK Team
      * Done:


      * In Review:


      * In Progress:



* <ins>Cryptography</ins>


---

### **DeFi** \[Vishal]

Cycle Objective(s):
- Close gaps in Defi/Liquidity infrastructure post-Cadence 1.0
- Bring liquidity and kickstart ecosystem effects

**Done last sprint**

#### Flow ALP & Flow Vaults:



**This sprint**



---


### New OKRs

Core protocol, Cadence and Execution team will be working on FCM, Security and Performance related OKRs starting this sprint.


### Security

**Done Last Sprint**

- Created product spec (wireframes, technical docs, API spec) for financial analytics tooling

**This Sprint**

- Address feedback on API proposal for financial analytics tool
- Begin building the UI for the financial analytics tool
- FYV Forking Simulation

### Performance



---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Equip the Flow ecosystem with the capabilities required for developers to launch and iterate on Minimum Viable Consumer DeFi Apps with minimal friction [OKR](https://github.com/onflow/flow-okrs/issues/162)

**Done Last Sprint**

- React SDK
  - Finished React Native SDK Fund component UI 
  - Updated React SDK starter project to latest nextjs version (From 15 to 16)
  - Completed React Native SDK Fund component UI to be like React SDK one
  - Added React Native SDK Fund component example to Starter project
  - Tested Fund component in Starter project live on mobile device to verify data flow
  - Added developer notice in Discovery on testnet if WalletConnect is not setup

- Misc
  - Created command for converting keys in flow.json to file pattern
  - Added warning if keys are detected to use command to convert to file pattern
  - Created technical content to support post mortem marketing efforts
  - Update ai-data-retriever with 3 more problems
  - Test web search usage in ai-data-retriever
  - Create FlowCron usage docs and add to docs "Cadence/Advanced Concepts" section
  - Restore DefiLlama TVL Helper affected by network halt
  - Investigate flow-go issue affecting forking + CLI release
  - Update VSCode JSON Schema Resolution to support latest flow.json changes
  - Add support for block height pins to dependency manager
  - Add support for GetAccountAtBlockHeight RPC to flowkit
  - Add advanced network resolutions to test framework fork mode to align with emulator
  - Fix Flow CLI flow blocks get block seals output
  - Update Cadence Test Framework Docs to Latest Syntax
  - Support Flow Yield Vaults Fork Testing Efforts
  - Investigate strategies for EVM state manipulation in Cadence Test Framework
  - Create Cadence Profiling Command
  - Created article on on-chain SVG NFTs for marketing
  - Created article on on-chain Cadence vs Solidity forking


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



---

### **Infra** \[Manny]

**Done last sprint**

**MN28 Spork**


**Historical Nodes**


**FCM**


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
