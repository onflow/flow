# Overview

 ### Team Wins 🎉

 * 

---

### Mainnet Uptime - Last 14 days (04/18/25 to 05/02/25) \[JP]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |      0%         |
| Block Finalization      | 99.9%   |    100%       |      0%         |
| Transaction Execution   | 99.9%   |    99.95%     |      49.6%      |
| Block Sealing           | 99.9%   |    99.98%     |      24.8       |
| Access API Liveness     | 99.9%   |    100%       |      0%         |


#### YTD SLA

| Incident/upgrade       | Date      | Collection | Consensus | Execution | Verification  | Total  | Comments      |
| ---------------------- | --------- | ---------- | --------- | --------- | ------------ | ------ | ------------- |
| HCU                    | 1/27/2025 |            |           | 5         |              | 5      |               |
| P0 Incident            | 2/18/2025 | 180        | 180       | 180       | 180          | 180    | Grafana issue |
| P0 Incident            | 2/19/2025 | 30         | 30        | 30        | 30           | 30     | Grafana issue |
| HCU                    | 2/18/2025 |            |           | 5         |              | 5      |               |
| HCU                    | 2/18/2025 |            |           | 5         |              | 5      |               |
| HCU                    | 4/10/2025 |            |           | 5         |              | 5      |               |
| Total downtime in mins |           | 210        | 210       | 230       | 210          | 230    |               |
| YTD (04/17/25) SLA     |           | 99.86%     | 99.86%    | 99.85%    | 99.86%       | 99.85% |               |
| SLA for 2025           |           | 99.96%     | 99.96%    | 99.96%    | 99.96%       | 99.96% |               |

### Incidents

### Mainnet
- P0 and P1: None

### Testnet
- P0
  

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

- Three new FLIPS
  1. FLIP 322: Optimistic Syncing of Execution Data (added last sprint)
  2. FLIP 321: Redundancy Improvement - update service account signers
  3. FLIP 326: Redundancy Improvement - update service account signers (part 2)

### Key Release Dates & Breaking Changes
n/A

---


# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]
Q2 2025 Cycle Objective(s):

[Cadence Language](https://github.com/onflow/cadence/issues/3726)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6881)

**Done last sprint**


**This sprint**

- Cadence Language
  - Investigate bug report
  - Continue work on the [Compiler Milestone 4](https://github.com/onflow/cadence/issues/3856)

- Cadence Execution
  - Complete Badger -> Pebble migration [Milestone 2](https://github.com/onflow/flow-go/issues/6515)
  - Complete performance deep-dive: analyze CPU profile produced on migration testnet * Mainnet with new TPS loader to identify new bottlenecks / opportunities for further optimizations.
  - Continue new Trie research
  - Continue work on [Badger -> Pebble DB M3: unblock pruning of Execution, Access and Verification data](https://github.com/onflow/flow-go/issues/7242)
  - Continue supporting upgrade of EVM core to "Pectra" release
  - Start [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)

**On Hold**
- [Migration of EN version beacon to Dyn. Prot. State](https://github.com/onflow/flow-go/issues/6788)
- [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)
- [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

---

### **Core Protocol** \[]
Cycle Objective(s):

* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* Improve network reliability by reducing API load on execution node [IN PROGRESS]
* EVM Gateway integrate Pectra upgrade [IN PROGRESS]
* Address data structure malleability risk [IN PROGRESS]
* Furthering permissionless participation
  2. KR2: SPoCK Research [IN PROGRESS]

**Done last sprint**

**This sprint**

* <ins>Data Availability</ins>
  - Continue to work on "In Progress" tasks and PR-s remarks
  - [[DataAvailability] Implement Index step logic](https://github.com/onflow/flow-go/issues/7203)
  - [[DataAvailability] Implement Persist step logic](https://github.com/onflow/flow-go/issues/7204)


* <ins>Malleability</ins>
  - Support KROK malleability PR reviews
  - Continuing [`structwrite` linter](https://github.com/onflow/flow-go/issues/7271) and integrate with CI
  - Complete Header Timestamp
  - KROK Team:
    - Continue to work on "In Progress" tasks and PRs remarks
    - Start tasks from ["[Epic] [Malleability] Hashable Data Structures are Immutable"](https://github.com/onflow/flow-go/issues/7269)

* <ins>EVM Gateway</ins>
  - Test EVM Pectra upgrade process on migrationnet

* <ins>Cryptography</ins>
  - SPoCK aggregation
  - Crypto package: re-audit GoLang 1.24 refactors before merging

* <ins>Protocol misc</ins>
  - Integrate lock context library into Follower as PoC for Pebble locking strategy (once Pebble version of Follower is complete)
  -
**On Hold**

**Active Epics**
* [[EPIC] Malleability B](https://github.com/onflow/flow-go/issues/6648)
* [[EPIC] Malleability C](https://github.com/onflow/flow-go/issues/6647)
* [[EPIC] EVM Gateway Pectra upgrade](https://github.com/onflow/flow-go/issues/7152)
* [[EPIC] Access Node supports soft-finality updates](https://github.com/onflow/flow-go/issues/6646)

---

### **DeFi** \[]

Cycle Objective(s):
- Close gaps in Defi/Liquidity infrastructure post-Cadence 1.0
- Bring liquidity and and kick start ecosystem effects

**Done last sprint**


**This sprint**
 - Continue developing StackFi PoCs
 - Complete off-chain trigger PoC
 - Start WFLOW migration
 - Finalize yield source partners for streamline

**On Hold**
- N/A


---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Improve the quality of developer engagement by optimizing Flow’s core surfaces and making it easier for developers to evaluate and explore the ecosystem. [OKR](https://github.com/onflow/flow-okrs/issues/109)

**Done last sprint**


**This sprint**

- Improve TypeScript support in the JS SDK
- Begin building components for the `@onflow/kit` library
- Expose randomness through a React hook in the `@onflow/kit` library
- Moved the cross-VM batch transaction hook from the scaffold to `@onflow/kit`
- Identify other cross-VM hook opportunities

---

### Applications / Wallet [Jeff]

**Cycle Objective(s):**

KR 1: Reduce the number of critical (potential loss of assets / P0) and high priority (P1) bugs experienced to an average of 0.5 per week on a 4-week rolling average.
 - Current (Apr 21): 1.75/week

**Done last sprint**

**This sprint**

- Automatically support new token launches faster within the wallet -> new verified/unverified token feature

**On Hold**

- N/A

**Active Epics**

- TBD

---

### **Infra** \[JP / Manny]

**Done last sprint**


**Active Epics**
* [Integrate Grafana Alloy Agent](https://github.com/onflow/ff-sre-infrastructure/issues/100)
* [Cost Optimization & Reduction](https://github.com/onflow/ff-sre-infrastructure/issues/235)
* [Support Private Image Builds](https://github.com/orgs/onflow/projects/79/views/1?pane=issue&itemId=104950609&issue=onflow%7Cff-sre-infrastructure%7C225)

---

### **Governance - Vishal**

Cycle Objective(s):
1. Ensure the multisign process for Flow is efficient with effective community participation
2. Maintain long-term decentralization of Flow consensus nodes by ensuring no operator controls 1/3rd or more of the network's consensus nodes
3. Continue building a well-structured Flow Tokenomics framework to enhance community understanding, improve perception, and articulate a clear long-term vision
4. Build and ship a new dashboard to provide node operators with real-time access to staking, epoch-related and other relevant data.

**Done last sprint**


**This sprint**

  * Vishal OOO

---
