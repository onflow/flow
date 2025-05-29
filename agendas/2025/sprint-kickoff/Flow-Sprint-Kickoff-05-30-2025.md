# Overview

 ### Team Wins 🎉

---

### Mainnet Uptime - Last 14 days (05/16/25 to 05/30/25) \[Vishal]

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

1. HCU to rollout the change to re-introduce the ability to read account storage format v1.
- Testnet May 30th, Friday (today).
- Mainnet June 3rd, Tuesday 8AM Pacific.

2. Proof of Possession rollout
- Testnet June 2nd, Monday.
- Mainnet June 3rd, Tuesday.

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


**EVM**



**This sprint**

- Cadence Language

- Cadence Execution


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

  * KROK Team

 

* <ins>Malleability</ins>
  * PR reviews
  * KROK Team
    * Done:
      -   [\[Malleability C\] flow.Block](https://github.com/onflow/flow-go/issues/6660)
    * In Review (fixing comments):
      -   [\[Malleability Immutable\] Enforce immutability for EpochRecover](https://github.com/onflow/flow-go/issues/7285)
      -   [\[Malleability Immutable\] Enforce immutability for EpochSetup](https://github.com/onflow/flow-go/issues/7284)
      -   [\[Malleability Immutable\] Enforce immutability for EpochCommit](https://github.com/onflow/flow-go/issues/7286)
      -   [\[Malleability Immutable\] Enforce immutability for MinEpochStateEntry](https://github.com/onflow/flow-go/issues/7293)
      -   [\[Malleability Immutable\] Enforce immutability for EpochStateEntry](https://github.com/onflow/flow-go/issues/7295)
      -   [\[Malleability Immutable\] Enforce immutability for RichEpochStateEntry](https://github.com/onflow/flow-go/issues/7296)
      -   [\[Malleability Immutable\] Enforce immutability for Locator](https://github.com/onflow/flow-go/issues/7276)
      -   [\[Malleability Immutable\] Enforce immutability for EpochProtocolStateAdapter](https://github.com/onflow/flow-go/issues/7307)
      -   [\[Malleability Immutable\] Enforce immutability for EpochStateContainer](https://github.com/onflow/flow-go/issues/7294)
      -   [\[Malleability Immutable\] Enforce immutability for ComputationResult](https://github.com/onflow/flow-go/issues/7274)
      -   [\[Malleability Immutable\] Enforce immutability for TimeoutCertificate](https://github.com/onflow/flow-go/issues/7302)
      -   [\[Malleability Immutable\] Enforce immutability for TimeoutObject](https://github.com/onflow/flow-go/issues/7272)
      -   [\[Malleability Immutable\] Enforce immutability for ChunkDataPackRequest](https://github.com/onflow/flow-go/issues/7305)
      -   [\[Malleability Immutable\] Enforce immutability for ChunkDataPackResponse](https://github.com/onflow/flow-go/issues/7306)
    * In Progress:
      -   [\[Malleability Immutable\] Enforce immutability for Event](https://github.com/onflow/flow-go/issues/7287)


* <ins>Cryptography</ins>
  - Proof of Possession: prepare for updating the staking process:
    - update and review of the bootstrapping utility (review still ongoing)
    - update and merge the core-contracts changes
    - docs and announcements
  - SPoCK aggregation: finished analysing the PoP-based security proof in Boneh-Drijvers-Neven 2018 and Ristenpart 2006 (BLS multi-signatures)
  - Passkeys: continue the implementation review and adding suggestions

**This sprint**

* <ins>Data Availability</ins>
 

* <ins>Malleability</ins>
  * PR reviews
  * KROK Team
    - Continue working on Malleability Immutable tasks and on review remarks from previous sprint.


* <ins>Cryptography</ins>
  - Proof of Possession: merge all PRs and core-contract updates on TN/MN
  - SPoCK next steps: sketch a PoP-based proof of (simple) SPoCK unforgeabilty - sketch a KOSK-based proof of multi-SPoCK
  - Passkeys: continue review and implementation
  

* <ins>Protocol misc</ins>

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

**Done last sprint**



**This sprint**



---

### Applications / Wallet [Jeff]

**Cycle Objective(s):**

KR 1: Reduce the number of critical (potential loss of assets / P0) and high priority (P1) bugs experienced to an average of 0.5 per week on a 4-week rolling average.
 - Current (Apr 21): 1.25/week

**Done last sprint**

**This sprint**



**On Hold**

- N/A

**Active Epics**

- TBD

---

### **Infra** \[JP / Manny]

**Done last sprint**

**Support**
- [Fix BN2 operational components](https://github.com/onflow/ff-sre-infrastructure/issues/414)
- [Grant Raymond access to MN testing EN](https://github.com/onflow/ff-sre-infrastructure/issues/412)
- [Update KMS Keys to remove users and ensure availability](https://github.com/onflow/ff-sre-infrastructure/issues/408)
- [Clean up MN AN Boot disk logs](https://github.com/onflow/ff-sre-infrastructure/issues/390)
- [Increase DL LN data disks](https://github.com/onflow/ff-sre-infrastructure/issues/391)
- [Increase MN AN & LN Data disks](https://github.com/onflow/ff-sre-infrastructure/issues/388)

**Incidet Response**
- [Fix escalation policy to template for incident commanders](https://github.com/onflow/ff-sre-infrastructure/issues/410)
- [Integrate slack into schedule rotations](https://github.com/onflow/ff-sre-infrastructure/issues/397)
- [Configure slack group for each protocol on-call schedule](https://github.com/onflow/ff-sre-infrastructure/issues/396)

**Coudflare**
- [Create script to validate zone records](https://github.com/onflow/ff-sre-infrastructure/issues/303)
- [Delete nodes.onflow.org zone](https://github.com/onflow/ff-sre-infrastructure/issues/375)
- [Remove all records in the nodes.onflow.org zone in Terraform](https://github.com/onflow/ff-sre-infrastructure/issues/374)
- [Remove NS records for nodes.onflow.org & validate cutover to onflow.org](https://github.com/onflow/ff-sre-infrastructure/issues/304)

**Grafana Alloy**
- [Create Documentation for Testing Cloud-init Changes Locally](https://github.com/onflow/ff-sre-infrastructure/issues/392)
- [Create Grafana Alloy Configuration](https://github.com/onflow/ff-sre-infrastructure/issues/257)

**Active Epics**
* [Integrate Grafana Alloy Agent](https://github.com/onflow/ff-sre-infrastructure/issues/100)
* [Incident Management & Response](https://github.com/orgs/onflow/projects/79/views/1?pane=issue&itemId=93739820&issue=onflow%7Cff-sre-infrastructure%7C131)

---

### **Governance** \[Vishal]

Cycle Objective(s):
1. Ensure the multisign process for Flow is efficient with effective community participation [DONE]
2. Maintain long-term decentralization of Flow consensus nodes by ensuring no operator controls 1/3rd or more of the network's consensus nodes [DONE]
3. Continue building a well-structured Flow Tokenomics framework to enhance community understanding, improve perception, and articulate a clear long-term vision
4. Build and ship a new dashboard to provide node operators with real-time access to staking, epoch-related and other relevant data.

**Done last sprint**
1. 5 new consensus nodes were added to the network.
2. Tokenomics discussion with Dete.

**This sprint**
1. Triage incoming Flow validator applications and coordinate token leases and onboarding if approved
2. Continue Tokenomics discussion with Dete

---
