# Overview

 ### Team Wins 🎉


---

### Mainnet Uptime - Last 14 days (06/14/25 to 06/27/25) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |     100%      |        0%         |
| Block Finalization      | 99.9%   |     100%      |        0%         |
| Transaction Execution   | 99.9%   |    99.975%    |       24.8%       |
| Block Sealing           | 99.9%   |  99.975%      |    24.8%          |
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
| HCU                    | 5/15/2025 |           |          | 7         |              | 7      |               |
| HCU                    | 6/3/2025  |           |          | 9         |              | 9      |               |
| Total downtime in mins |           | 210       | 210      | 251       | 210          | 251    |               |
| YTD (5/29/25) SLA      |           | 99.9%     | 99.9%    | 99.89%    | 99.9%        | 99.89% |               |
| SLA for 2025           |           | 99.96%    | 99.96%   | 99.95%    | 99.96%       | 99.95% |               |

### Incidents

### Testnet

N/A

### Mainnet
N/A

### Key Release Dates & Breaking Changes

Full network upgrade (Spork) Fall 2025. 

---

### FLIPs Tracker \[Vishal]

|                         | Application | Cadence | Governance | Protocol |  Total  |
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-------:|
| Drafted     | 8 |    7      |       0       |       9          | **25**  |
| Proposed    | 1  |    2     |       3       |       0          |  **7**  |
| Accepted    | 3  |    1     |       2       |       2          |  **8**  |
| Rejected    | 0  |    1     |       1       |       0          |  **2**  |
| Implemented | 3  |    5     |       1       |       0          |  **9**  |
| Released    | 4  |    34     |       9         |       6          | **53**  |
| Total       | **19** |    **50**   |       **16**       |       **17**         | **104** |

One new FLIP -

[FLIP 332: Enforcing Domain-Based Networking Addresses for Nodes](https://github.com/onflow/flips/blob/main/protocol/20250619-network-address-validation.md)

---


# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]
Q2 2025 Cycle Objective(s):

[Cadence Language](https://github.com/onflow/cadence/issues/3726)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6881)

**Done last sprint**

**Cadence Language**

- Automatic fuzzing of parser & typechecker

- Tool Bugfix:


- Regression prevention: [Add CI automation to verify storage iteration](https://github.com/onflow/cadence/issues/2688)

- Testing:

- chores:

- Docs: 


**Cadence Execution**

- [Badger -> Pebble DB M3: unblock pruning of Execution, Access and Verification data](https://github.com/onflow/flow-go/issues/7242)

- [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)

- Performance optimizations

- Investigation: [Pebble panic](https://github.com/onflow/flow-go/pull/7489)

- Fix downstream build issues



**Flow EVM**
- Core: [Fix high CPU usage related to EVM `DeltaView.AddressInAccessList`](https://github.com/onflow/flow-go/pull/7405)
- GW: [Move RPC calls to constants to reduce string object allocations](https://github.com/onflow/flow-evm-gateway/pull/824)

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
Cycle Objective(s):

* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* Improve network reliability by reducing API load on execution node [IN PROGRESS]
* EVM Gateway integrate Pectra upgrade [DONE]
* Address data structure malleability risk [IN PROGRESS]
* Furthering permissionless participation
  * KR1: Proof of Possession [DONE]
  * KR2: SPoCK Research [IN PROGRESS]

**Done last sprint**

* <ins>Data Availability</ins>
  * PR reviews
  * KROK Team
    * Done:
       
    * In Review (Working on review remarks):
 
    * In Progress:


* <ins>Malleability</ins>
  * Immutability PR reviews
  * KROK Team
    * Done:
    * In Review (Working on review remarks):
    * In Progress:

* <ins>Cryptography</ins>
  - Proof of Possession:

* <ins>Research</ins>
  - Analyzing Solana's new [Alpenglow Consensus Paper](https://drive.google.com/file/d/1y_7ddr8oNOknTQYHzXeeMD2ProQ0WjMs/view)
    and adjacent body of new consensus research \[[1](https://eprint.iacr.org/2023/463),[2](https://arxiv.org/abs/2505.08771),[3](https://arxiv.org/abs/2408.04728),[4](https://arxiv.org/abs/2102.07240)\] (ongoing)


**This sprint**

* <ins>Data Availability:</ins>

* <ins>Malleability</ins>
  - KROK Team

* <ins>Cryptography</ins>
  - Passkeys: 


* <ins>Research</ins>
  - Finish analyzing [Alpenglow Consensus](https://drive.google.com/file/d/1y_7ddr8oNOknTQYHzXeeMD2ProQ0WjMs/view)
    & prep for protocol study group presentation


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

Liquidity:


Tidal:



**This sprint**

Wrap up tracer bullet


**On Hold**



---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
- Improve the quality of developer engagement by optimizing Flow’s core surfaces and making it easier for developers to evaluate and explore the ecosystem. [OKR](https://github.com/onflow/flow-okrs/issues/109)

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

**This sprint**

**Active Epics**
* [Integrate Grafana Alloy Agent](https://github.com/onflow/ff-sre-infrastructure/issues/100)
* [Incident Management & Response](https://github.com/orgs/onflow/projects/79/views/1?pane=issue&itemId=93739820&issue=onflow%7Cff-sre-infrastructure%7C131)
* [Tidal Infra & Observability Optimization](https://github.com/onflow/ff-sre-infrastructure/issues/450)

---

### **Governance** \[Vishal]

Cycle Objective(s):
1. Ensure the multi-sign process for Flow is efficient with effective community participation [DONE]
2. Maintain long-term decentralization of Flow consensus nodes by ensuring no operator controls 1/3rd or more of the network's consensus nodes [DONE]
3. Continue building a well-structured Flow Tokenomics framework to enhance community understanding, improve perception, and articulate a clear long-term vision
4. Build and ship a new dashboard to provide node operators with real-time access to staking, epoch-related and other relevant data.

**Done last sprint**

* Tokenomics discussion with Dieter [Notion doc](https://www.notion.so/flowfoundation/Flow-Tokenomics-Framework-2001aee1232480aeab1ec87407d76b9e)
  * Topic: Transaciton Fees

**This sprint**

* Continue Tokenomics discussion.
  * Topic: Surge factor

---
