# Overview

### Team Wins 🎉

- Transaction fees update is live
- Additional infra savings realized with downsizing historical node disk size.
- Fusaka is live on mainnet

---

### Mainnet Uptime - Last 14 days (11/28/25 to 12/12/25) \[Vishal]


|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |     100%      |        0%         |
| Block Finalization      | 99.9%   |     100%      |        0%         |
| Transaction Execution   | 99.9%   |    99.975%    |       24.8%       |
| Block Sealing           | 99.9%   |    99.975%    |       24.8%       |
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
| Forte network upgrade  | 10/22/2025 | 284        | 240       | 240       | 240          | 470        |               |
| HCU                    | 11/20/2025 |            |           | 9         |              | 9          |               |
| HCU                    | 12/04/2025 |            |           | 9         |              | 9          |               |
| Total downtime in mins |            | 494        | 450       | 530       | 450          | 760        |               |
| YTD SLA                |            | 99.90%     | 99.91%    | 99.89%    | 99.91%       | 99.85%     |               |
| SLA for 2025           |            | 99.91%     | 99.91%    | 99.90%    | 99.91%       | **99.86%** |               |

### Incidents \[Vishal]

- Planned downtime
  - HCU on 12/4

- Unplanned downtime:
    - EVM GW downtime for 10 hours minutes: Friday, Dec 5th.
    - [Postmortem report](https://status.flow.com/incidents/69wv7m70pyxv)


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

- [FLIP 351: Transaction Fee Update to Enable Inflation-Neutral Tokenomics](https://github.com/onflow/flips/blob/main/governance/20251119-transaction-fee-update.md) released.
- One new FLIP proposed - [FLIP 353: Automatic Restaking](https://github.com/onflow/flips/issues/354)

---


# Working Group Updates

### **Cadence Language and Execution** \[Jan]

Q3 2025 Cycle Objective(s):

- [Cadence Language goals](https://github.com/onflow/cadence/issues/4057)
- [Cadence Execution goals](https://github.com/onflow/flow-go/issues/7569)

**Done last sprint**

**Cadence Language**

- Improvements

- [Compiler Milestone X - remaining known gaps](https://github.com/onflow/cadence/issues/3804)
    - Feature

    - Performance optimizations:

    - bugfix

- Internal biugfix: [1](https://github.com/onflow/cadence-internal/pull/355), [2](https://github.com/onflow/cadence-internal/pull/354)
- Testing

- Tools

- Chores


**Cadence Execution**

- [FLIP 346: Variable Transaction Fees - Execution Effort II.](https://github.com/onflow/flips/pull/347)

- [Badger -> Pebble: remaining tasks and cleanup](https://github.com/onflow/flow-go/issues/7682)

- Access node collection fetching improvements POC

- Cadence VM initiaization

- Improvement

- Bugfix

- Tools

- Testing

- Docs

- chores


**Flow EVM**
- Core
    - Bugfix

- Gateway
    - Improvement

    - Bugfix



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
* Collectors submit votes for root block for spork bootstrapping [Done]
* Building blocks for Collection Nodes Decentralization [IN PROGRESS]
* Downgrade historical node hardware [IN PROGRESS]

**Done last sprint**

* <ins>Data Availability</ins>
  * PR reviews
  * Allow reindexing last block's protocol data ([PR 8165](https://github.com/onflow/flow-go/pull/8165))
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
      - [Epic 7615](https://github.com/onflow/flow-go/issues/7615): 6 done, 5 in progress/review, out of 12
      - [Epic 7610](https://github.com/onflow/flow-go/issues/7610): 3/7 done, 2 in progress/review


* <ins>Immutable Models M2</ins>
  * Immutable Models PR reviews
  * KROK Team

* <ins>Cryptography</ins>
  * Multi-SPoCK:


* <ins>Building blocks for Collection Nodes Decentralization</ins>

  * Started on issue:


* Other items not covered in OKRs:


**This sprint**

* <ins>Data Availability</ins>
  * Continue work on Milestone 2 tasks
  * KROK Team
    - Continue work on reviews and milestone 3 tasks

* <ins>Cryptography</ins>
  - Continue working on the Spock paper


* <ins>Building blocks for Collection Nodes Decentralization</ins>
  * Continue implementation on current issues



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
  - Documented dependency mocking for forked network

- Mobile
  - Fixed latest WalletConnect redirect issue with wallet
  - Created new React Native SDK package for native UI requirements
  - Created share React hooks library for React SDK and React Native SDK
  - Added native UI for wallet connections

- React SDK Liquidity
  - Added new internal UI components for the React SDK
  - Built the Fund component UI
  - Added the Fund component to the demo playground
  - Created Fund Crypto API interfaces
  - Created Fund Relay.Link integration
  - Created Fund Fiat API interfaces
  - Build React SDK Relay crypto on-ramp integration
  - Started React SDK Moonpay fiat on-ramp integration

- Misc
  - Documented Emulator Account Creation Flag Usage
  - Began improving theming support across the React SDK
  - Finished and released CLI import aliasing support
  - Support narrative arc marketing efforts
  - Added system transactions to `flow blocks get`
  - Added ability to run `flow cadence lint` on all files at once
  - Documented instructions for DevRel to run recurring TVL helper


**This Sprint**

- Mobile
  - Add Connect and Profile components to react-native-sdk
  - Complete react-native-sdk package and publish it
  - Complete flow-expo-starter package fully integrated with react-native-sdk
  - Update playground with banner for react-native-sdk usage
  - Begin building Fund native UI
  - Begin integrating Fund component native integration

- React SDK Liquidity
 - Move fund hook to share hooks library
 - Integrate fiat Fund component with React SDK Hooks
 - Add cross VM bridging to React SDK Fund component
 - Document React SDK Fund usage
 - Document vanilla @onflow/payments usage

- Misc
  - Fix fcl-js npm publish problem
  - Address FlowCron review feedback
  - Finish theming support across React SDK
  - Create marketing materials for Q4 tooling work


---

### Applications / Wallet [Jeff]

**Done last sprint**


**This sprint**



---

### **Infra** \[Manny]

**Done last sprint**

**Cost Optimization**



**Support**



---

### **Governance** \[Vishal]

[Q4 Cycle Objective(s)](https://github.com/orgs/onflow/projects/91/views/5):
1. Transactions fees update [Done]
2. Surge Pricing [In Progress]
3. Develop an internal document for Flow Tokenomics [Paused]

**Done last sprint**

* Coordination and roll out the transaction fee increase on testnet on Mon, Dec 1st.
* Coordination and roll out the transaction fee increase on mainnet on Thursday, Dec 4th.


**This sprint**
* Add execution saturation panel to the public dashboard for surge pricing.

---
