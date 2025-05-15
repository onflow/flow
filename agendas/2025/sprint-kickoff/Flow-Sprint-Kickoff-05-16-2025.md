# Overview

 ### Team Wins 🎉

*
*

---

### Mainnet Uptime - Last 14 days (05/02/25 to 05/16/25) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |      0%         |
| Block Finalization      | 99.9%   |    100%       |      0%         |
| Transaction Execution   | 99.9%   |    100%       |      0%      |
| Block Sealing           | 99.9%   |    100%       |      0%       |
| Access API Liveness     | 99.9%   |    100%       |      0%         |


#### YTD SLA

| Incident/upgrade       | Date      | Collection | Consensus | Execution | Verification | Total  | Comments      |
| ---------------------- |-----------|------------|-----------|-----------|--------------|--------| ------------- |
| HCU                    | 1/27/2025 |            |           | 5         |              | 5      |               |
| P0 Incident            | 2/18/2025 | 180        | 180       | 180       | 180          | 180    | Grafana issue |
| P0 Incident            | 2/19/2025 | 30         | 30        | 30        | 30           | 30     | Grafana issue |
| HCU                    | 2/18/2025 |            |           | 5         |              | 5      |               |
| HCU                    | 2/18/2025 |            |           | 5         |              | 5      |               |
| HCU                    | 4/10/2025 |            |           | 5         |              | 5      |               |
| HCU                    | 5/15/2025 |            |           | 5         |              | 5      |               |
| Total downtime in mins |           | 210        | 210       | 235       | 210          | 230    |               |
| YTD (5/2/25) SLA       |           | 99.89%     | 99.89%    | 99.88%    | 99.89%       | 99.88% |               |
| SLA for 2025           |           | 99.96%     | 99.96%    | 99.96%    | 99.96%       | 99.96% |               |

### Incidents

### Integrations

### Mainnet
- P0 and P1: None

### Testnet
#### P0
- 14th May 12:50 AM Pacific: EVM GW nodes stopped on testnet.
  - Root cause: EVM GWs were mistakenly updated to incorrect node software version.

#### P1
- 13th May 9:08 AM Pacific: Block explorer (flowscan) couldn't index new contracts.
  - Root cause: AN1 on testnet was behind in terms of block height. Removing AN1 from load balancer rotation solved the problem.


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

### Key Release Dates & Breaking Changes
n/A

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

    * Done:
    * In Review:
    * In Progress:


* <ins>Malleability</ins>
  *  KROK Team
    * Done:

      [[Malleability C] cluster.Block](https://github.com/onflow/flow-go/issues/6660)
    * In Review:

      [[Malleability C] flow.Block](https://github.com/onflow/flow-go/issues/6716)
    * In Progress:

      [[Malleability Immutable] Enforce immutability for EpochRecover](https://github.com/onflow/flow-go/issues/7285)

      [[Malleability Immutable] Enforce immutability for EpochSetup](https://github.com/onflow/flow-go/issues/7284)

      [[Malleability Immutable] Enforce immutability for EpochCommit](https://github.com/onflow/flow-go/issues/7286)
    * Next Sprint:

      Continue working on Malleability Immutable tasks and on the [flow.Block](https://github.com/onflow/flow-go/issues/6716) malleability review remarks.


* <ins>Cryptography</ins>


* <ins>Supporting Badger to Pebble</ins>



**This sprint**

* <ins>Data Availability</ins>
 

* <ins>Malleability</ins>


* <ins>Cryptography</ins>
  - SPoCK aggregation

* <ins>Protocol misc</ins>

**On Hold**

**Active Epics**


---

### **DeFi** \[]

Cycle Objective(s):
- Close gaps in Defi/Liquidity infrastructure post-Cadence 1.0
- Bring liquidity and and kick start ecosystem effects

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

**DNS Migration**
- [Delete the benchmark.onflow.org CloudFlare zone](https://github.com/onflow/ff-sre-infrastructure/issues/300)
- [Deleted unused DNS load balancers](https://github.com/onflow/ff-sre-infrastructure/issues/293)
- [Duplicate historical node records that have not been moved to standard deployment](https://github.com/onflow/ff-sre-infrastructure/issues/368)
- [Duplicate non node records to onflow.org](https://github.com/onflow/ff-sre-infrastructure/issues/370)
- [Identify key telemetry for monitoring Grafana Alloy agent](https://github.com/onflow/ff-sre-infrastructure/issues/260)
- [Migrate Devnet EVM GW LB to CNAME](https://github.com/onflow/ff-sre-infrastructure/issues/291)
- [Migrate Mainnet DNS Load Balancers to CNAME records](https://github.com/onflow/ff-sre-infrastructure/issues/292)
- [Migrate Migration Testnet DNS Load Balancers](https://github.com/onflow/ff-sre-infrastructure/issues/302)
- [Migrate access.devnet.nodes.onflow.org to TCP LB](https://github.com/onflow/ff-sre-infrastructure/issues/379)
- [Migrate atlantis.ops.onflow.org to onflow.org zone](https://github.com/onflow/ff-sre-infrastructure/issues/340)
- [Migrate benchnet.onflow.org records to onflow.org](https://github.com/onflow/ff-sre-infrastructure/issues/301)
- [Recreate Mainnet historical DNS records in the onflow.org zone](https://github.com/onflow/ff-sre-infrastructure/issues/295)
- [Recreate Migration network records](https://github.com/onflow/ff-sre-infrastructure/issues/361)
- [Recreate the Devnet DNS records in the onflow.org zone](https://github.com/onflow/ff-sre-infrastructure/issues/297)
- [Recreate the Mainnet DNS records in the onflow.org zone](https://github.com/onflow/ff-sre-infrastructure/issues/296)
- [Update Mainnet to support pulling private images](https://github.com/onflow/ff-sre-infrastructure/issues/229)
- [Update network terraform module to include additional records on onflow.org zone](https://github.com/onflow/ff-sre-infrastructure/issues/299)

-**Support**
- [Enable networking.googleapis.com service in ff-sre-production](https://github.com/onflow/ff-sre-infrastructure/issues/376)
- [Fix Envoy config not being templated for LNs](https://github.com/onflow/ff-sre-infrastructure/issues/351)
- [Grant Migration Testnet Service Account access to TN EVM KMS keys](https://github.com/onflow/ff-sre-infrastructure/issues/344)
- [Increase AN8 instance size to have more memory](https://github.com/onflow/ff-sre-infrastructure/issues/341)
- [Update DL LNs & VNs to include GOMEMLIMIT](https://github.com/onflow/ff-sre-infrastructure/issues/352)
- [Update checkpoint extraction workflow to be more robust](https://github.com/onflow/ff-sre-infrastructure/issues/328)

**Grafana Alloy Implementation**
- [Create bucket to store Alloy binaries](https://github.com/onflow/ff-sre-infrastructure/issues/322)
- [Create secrets for configuration and load at VM startup](https://github.com/onflow/ff-sre-infrastructure/issues/102)


**Active Epics**
* [Integrate Grafana Alloy Agent](https://github.com/onflow/ff-sre-infrastructure/issues/100)
* [Support Private Image Builds](https://github.com/orgs/onflow/projects/79/views/1?pane=issue&itemId=104950609&issue=onflow%7Cff-sre-infrastructure%7C225)

---

### **Governance** \[Vishal]

Cycle Objective(s):
1. Ensure the multisign process for Flow is efficient with effective community participation [DONE]
2. Maintain long-term decentralization of Flow consensus nodes by ensuring no operator controls 1/3rd or more of the network's consensus nodes
3. Continue building a well-structured Flow Tokenomics framework to enhance community understanding, improve perception, and articulate a clear long-term vision
4. Build and ship a new dashboard to provide node operators with real-time access to staking, epoch-related and other relevant data.

**Done last sprint**
N/A

**This sprint**

1. Onboard 5 new consensus nodes that will be run by QuickNode.
2. Continue Flow tokenomics framework discussion with Dete

---
