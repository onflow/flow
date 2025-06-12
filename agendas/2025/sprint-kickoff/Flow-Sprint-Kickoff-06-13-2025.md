# Overview

 ### Team Wins 🎉

---

### Mainnet Uptime - Last 14 days (05/30/25 to 06/13/25) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |     100%      |        0%         |
| Block Finalization      | 99.9%   |     100%      |        0%         |
| Transaction Execution   | 99.9%   |    99.975%    |       24.8%       |
| Block Sealing           | 99.9%   |     100%      |        0%         |
| Access API Liveness     | 99.9%   |     100%      |        0%         |


#### YTD SLA

| Incident/upgrade       | Date      | Collection | Consensus | Execution | Verification | Total  | Comments      |
|------------------------|-----------|-----------|----------|-----------|--------------|--------| ------------- |
| HCU                    | 1/27/2025 |           |          | 5         |              | 5      |               |
| P0 Incident            | 2/18/2025 | 180       | 180      | 180       | 180          | 180    | Grafana issue |
| P0 Incident            | 2/19/2025 | 30        | 30       | 30        | 30           | 30     | Grafana issue |
| HCU                    | 2/18/2025 |           |          | 5         |              | 5      |               |
| HCU                    | 2/18/2025 |           |          | 5         |              | 5      |               |
| HCU                    | 4/10/2025 |           |          | 5         |              | 5      |               |
| HCU                    | 5/15/2025 |           |          | 5         |              | 5      |               |
| Total downtime in mins |           | 210       | 210      | 240       | 210          | 240    |               |
| YTD (5/29/25) SLA      |           | 99.9%     | 99.9%    | 99.89%    | 99.9%        | 99.89% |               |
| SLA for 2025           |           | 99.96%    | 99.96%   | 99.95%    | 99.96%       | 99.95% |               |

### Incidents

### Testnet

1. P0: 23rd May, Friday - 6AM Pacific to 10AM Pacific
  Transaction execution stopped. Execution nodes went OOM due to a Cadence edge case when parsing a transaction.

### Mainnet
N/A

### Key Release Dates & Breaking Changes

---

### FLIPs Tracker \[Vishal]

|                         | Application | Cadence | Governance | Protocol | Total |
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 8 |    7      |       0       |       9          |        **24**       |
| Proposed    | 1  |    2     |       3       |       0          |        **6**          |
| Accepted    | 3  |    1     |       2       |       2          |        **8**          |
| Rejected    | 0  |    1     |       1       |       0          |        **2**         |
| Implemented | 3  |    5     |       1       |       0          |        **9**        |
| Released    | 4  |    34     |       9         |       6          |        **53**          |
| Total       | **19** |    **50**   |       **16**       |       **17**         |        **102**         |

* No change

---


# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]
Q2 2025 Cycle Objective(s):

[Cadence Language](https://github.com/onflow/cadence/issues/3726)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6881)

**Done last sprint**

**Cadence Language**


**Cadence Execution**


**This sprint**


**On Hold**
- [Migration of EN version beacon to Dyn. Prot. State](https://github.com/onflow/flow-go/issues/6788)
- [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)
- [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

---

### **Core Protocol** \[Vishal]
Cycle Objective(s):

* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* Improve network reliability by reducing API load on execution node [IN PROGRESS]
* EVM Gateway integrate Pectra upgrade [DONE]
* Address data structure malleability risk [IN PROGRESS]
* Furthering permissionless participation
  * KR1: Proof of Possession [IN PROGRESS]
  * KR2: SPoCK Research [IN PROGRESS]

**Done last sprint**

* <ins>Data Availability</ins>
  *
  * KROK Team
    * Redesigned ExecutionDataRequester ([PR-7329](https://github.com/onflow/flow-go/pull/7329))
    * Implement interface for persisting caches ([PR-7394](https://github.com/onflow/flow-go/pull/7394))

* <ins>Malleability</ins>
  * PR reviews
  * KROK Team
    * Done:

    * In Review (fixing comments):

    * In Progress:



* <ins>Cryptography</ins>
  - Proof of Possession: prepare for updating the staking process:
    - update and review of the bootstrapping utility (review still ongoing)
    - update and merge the core-contracts changes
    - docs and announcements
  - SPoCK aggregation: finished analysing the PoP-based security proof in Boneh-Drijvers-Neven 2018 and Ristenpart 2006 (BLS multi-signatures)
  - Passkeys: continue the implementation review and adding suggestions

**This sprint**

* <ins>Data Availability</ins>
  -
  - KROK Team


* <ins>Malleability</ins>
  * Continue PR Reviews
  * KROK Team



* <ins>Cryptography</ins>

  - SPoCK next steps: sketch a PoP-based proof of (simple) SPoCK unforgeabilty - sketch a KOSK-based proof of multi-SPoCK
  - Passkeys: continue review and implementation


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


**This sprint**


**On Hold**



---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Improve the quality of developer engagement by optimizing Flow’s core surfaces and making it easier for developers to evaluate and explore the ecosystem. [OKR](https://github.com/onflow/flow-okrs/issues/109)

**Done Last Sprint**

- Converted exposed APIs in FCL and FCL React Native to TypeScript
- Built a profile feature in the `Connect` component for `@onflow/kit`
- Added the following new compon
- Built the `TransactionDialog` component for `@onflow/kit`
- Released and wrote docs for for the following hooks:
    - `useCrossVmBatchTransaction`
    - `useCrossVmSpendToken`
    - `useCrossVmSpendNft`
    - `useFlowChainId`
- Upgraded tooling for Proof of Possession
- Improved automated docs generation

**This Sprint**

- Fix issues with global FCL config
- Improve automated docs with examples sourced from JSDoc
- Finish live demo components in documentation
- Improve `Connect` profile with balance from Cross-VM hook
- Create a general Cadence side balance hook
- Polish UI on components before release
- Address remaining bugs in epic before release

---

### Applications / Wallet [Jeff]

**Cycle Objective(s):**

KR 1: Reduce the number of critical (potential loss of assets / P0) and high priority (P1) bugs experienced to an average of 0.5 per week on a 4-week rolling average.
 - Current (May 30): 1/week

**Done last sprint**


**This sprint**



**On Hold**

- N/A

**Active Epics**

- TBD

---

### **Infra** \[JP / Manny]

**Done last sprint**

**Grafana Alloy**
- [Add Support to VM Cloud-init to Integrate Grafana Alloy Agent](https://github.com/onflow/ff-sre-infrastructure/issues/101)
- [Add Grafana Alloy Support to migration networks](https://github.com/onflow/ff-sre-infrastructure/issues/258)
- [Add support to Alloy to include the `version` log label from Docker/Flow services](https://github.com/onflow/ff-sre-infrastructure/issues/403)
- [Execute rolling deploy on TN to add Grafana Alloy agent support](https://github.com/onflow/ff-sre-infrastructure/issues/259)
- [Remove PROFILING_ENABLED requirement from manage-profiling.yml playbook](https://github.com/onflow/ff-sre-infrastructure/issues/418)
- [Sanitize Alloy's Logs](https://github.com/onflow/ff-sre-infrastructure/issues/440)
- [Improve Alloy service security and organization](https://github.com/onflow/ff-sre-infrastructure/issues/417)
- [Create a Strategy for Scraping Profiles in BN2 K8s](https://github.com/onflow/ff-sre-infrastructure/issues/104)
- [Deploy Grafana Alloy Agent to Handle Profile Collections from Within BN2 K8s Cluster](https://github.com/onflow/ff-sre-infrastructure/issues/105)
- [Update Flow Node Helm Charts & Workflow to support dynamic enablement of profiling](https://github.com/onflow/ff-sre-infrastructure/issues/106)
- [Execute rolling deploy on MN to add Grafana Alloy agent support](https://github.com/onflow/ff-sre-infrastructure/issues/261)

**Active Epics**
* [Integrate Grafana Alloy Agent](https://github.com/onflow/ff-sre-infrastructure/issues/100)
* [Incident Management & Response](https://github.com/orgs/onflow/projects/79/views/1?pane=issue&itemId=93739820&issue=onflow%7Cff-sre-infrastructure%7C131)
* [Tidal Infra & Observability Optimization](https://github.com/onflow/ff-sre-infrastructure/issues/450)

---

### **Governance** \[Vishal]

Cycle Objective(s):
1. Ensure the multisign process for Flow is efficient with effective community participation [DONE]
2. Maintain long-term decentralization of Flow consensus nodes by ensuring no operator controls 1/3rd or more of the network's consensus nodes [DONE]
3. Continue building a well-structured Flow Tokenomics framework to enhance community understanding, improve perception, and articulate a clear long-term vision
4. Build and ship a new dashboard to provide node operators with real-time access to staking, epoch-related and other relevant data.

**Done last sprint**


**This sprint**


---
