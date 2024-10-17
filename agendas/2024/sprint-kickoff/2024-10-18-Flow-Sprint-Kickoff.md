# Overview

### Team Wins 🎉

- 


### General updates

### OOO
- [Full List](https://www.notion.so/flowfoundation/de89aa4e79364216a665888335a1cdee?v=4de18b26f60d4bae8f62724dddcce260)

---

### Mainnet Uptime - Last 14 days (09/21/24 to 10/17/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%      |       0%          |
| Block Finalization      | 99.9%   |    100%      |       0%          |
| Transaction Execution   | 99.9%   |    99.95%    |       49.6%       |
| Block Sealing           | 99.9%   |    100%      |       0%          |
| Access API Liveness     | 99.9%   |    100%      |       0%          |

[SLO dashboards](https://flowfoundation.grafana.net/d/hgW3l-m4k/slo-dashboard?orgId=1&from=now-2w&to=now)

YTD SLA: 99.50%


#### SLA situation

- Updated downtime reported during the last sprint kickoff. see last sprint's [SLA section](https://github.com/onflow/flow/blob/master/agendas/2024/sprint-kickoff/2024-09-13-Flow-Sprint-Kickoff.md#sla-situation-updated-on-926)
- Total downtime YTD -
  1. 4 HCUs 20 mins
  2. Sept 4th - Mainnet25(Crescendo) upgrade: 19h23m
  3. Sept 5th - P0 incident after mainnet25: 7h30m
  4. Sept 25th - Mainnet26: 3h48m
  5. Oct 8th - HCU: 5m


## Incidents
- 

(Sev [definition](https://www.notion.so/flowfoundation/Incident-Priorities-Severity-Levels-1-e811b352feff4928b69a7e99df724c6a))

### Key Release Dates & Breaking Changes
- Next Mainnet/Testnet network upgrade (spork):
  - TBD

---

### FLIPs Tracker \[Kshitij]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 8  |    8 (+1)  |       0         |       7          |        **23** (+1)       |
| Proposed    | 1  |    2    |       3          |       0           |        **6**  |
| Accepted    | 2  |    1     |       2       |       2        |        **7**          |
| Rejected    | 0  |    0     |       1       |       0          |        **1**          |
| Implemented | 3 |    25    |       1       |       0           |        **29**          |
| Released    | 4  |    0     |       4       |       6          |        **14**         |
| Total       | **18**  |    **36** (+1)  |       **11**     |       **15**          |        **80** (+1)   |

**New FLIPs**
- Cadence FLIP 288 (Draft Stage): Simple String Interpolation (to provide support for the use of identifiers in string interpolation) - by Raymond Zhang

**REMINDER - FLIPs that need to be reassigned immediately:**

**- Application**
  - Interaction Templates (Paul Gebheim)
  - Application - Pool-Based DEX Swap Standard (Satyam A.)

**- Cadence**
  - Type Removal In Contract Updates  (Daniel Sainati)
  - Optional References to Indexed Accesses (Daniel Sainati)
  - Mutability Restrictions  (Daniel Sainati)
  - Cadence Storage API Improvements (Daniel Sainati)
  - Reference Creation Semantics (Daniel Sainati)
  - View Functions (Daniel Sainati)
  - Entitlements (Daniel Sainati)
  - New behavior for attachments with entitlements (Daniel Sainati)

# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]
Cycle Objective(s):

1) Upgrade Mainnet to Crescendo Release with minimal impact on developers, to lower the barrier for cross chain liquidity on Flow
2) Calibrate Transaction fees so that they accurately reflect resource usage during execution and deploy as part of Crescendo to avoid future disruption.
3) Analyze execution runtime trends and risks to plan next set of scalability OKRs.

* Stretch-goals:
4) Expand testing capability of storehouse so that we can validate execution correctness and benchmark performance on Mainnet data
5) Design a new Trie to improve performance of update operation, reduce memory usage and size of proofs and to support more flexible proof queries.
6) Enable Concurrent Execution on one EN on Mainnet to validate correctness of the implementation (Detect execution forks)
7) Improve execution performance to mitigate the impact of adding metadata to token standards

**Done last sprint**

**This sprint**

- OKR planning

- EVM Gateway
  - Unblock [Alchemy tracing](https://github.com/onflow/flow-evm-gateway/issues/530)
  - improve [stability](https://github.com/onflow/flow-evm-gateway/issues/590)

- Cadence Language
  - Tech Debt
  - Content
  - Resume work on the compiler POC

- Cadence Execution
  - Continue work on [optimization for Cadence domain storage](https://github.com/onflow/cadence/issues/3584) (expected 30% execution state memory usage reduction when deployed)
  - Badger -> Pebble Investigation/POC
    - Continue work on [Protocol State Migration POC](https://github.com/onflow/flow-go/issues/6137) -> changing interface to batch write from transaction to make the future switch to Pebble easier.
  - Complete [util to export stats about execution state](https://github.com/onflow/flow-go/issues/6361)

**Completed OKRs**
  * Objective 1, KR5: Mainnet Upgrade to Crescendo Release
  * Objective 1, KR1: Enable Developers and the Flow Foundation to simulate Cadence 1.0 Contract upgrades
    * All breaking  released in a new CLI: v1.18.0-cadence-v1.0.0-preview.26
  * Objective 1, KR4: Testnet Upgrade to Crescendo Release
  * Objective 4, KR1: Execution node handles restart from spork root block reguardless of how many blocks it is behind
    * Completed refactoring of Ingestion engine to [prevent EN entering crash loop](https://github.com/onflow/flow-go/issues/5298)

**On Hold**

- Objective 2, KR 1: Update transaction fees weights for the execution operations on TN and MN
  -  Continue work on [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)
 
- Other
    * Start Atree optimization: [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)
    * Evaluate fixing [Random beacon history taking more space on chain than expected](https://github.com/onflow/flow-go/issues/5550)
    * Continue: [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

---

### **Core Protocol** \[Jerome]
Cycle Objective(s): 

* Provide developers secure and non-rate limited way to access all of chain data (transactions, blocks, account balance, events, account balance etc) by locally running an access or an observer node [IN PROGRESS]
* Reduce CPU usage on Execution node by 30% [DONE]
* Translate crypto performance improvements to consensus block rate increase [DONE]
* Continue design and implementation of Sporkless Epoch Fallback Recovery solution [DONE]

**Done last Sprint:**


**This sprint**

* <ins>EFM Recovery</ins>
  - Wrap up previously created PRs
  - [Implement an integration test for EFM and DKG IndexMap](https://github.com/onflow/flow-go/issues/6331)
  - Protocol updates for DKG changes [https://github.com/onflow/flow-go/issues/6214]
    
* <ins>Data Availability</ins>
  - KROK Team
    - Expand on payer balance checks ([Issue #6129](https://github.com/onflow/flow-go/issues/6129) - In review, [Issue #6139](https://github.com/onflow/flow-go/issues/6139) - In review)
    - Registers db pruning ([Issue #6066](https://github.com/onflow/flow-go/issues/6066) - In review, [Issue #6068](https://github.com/onflow/flow-go/issues/6068) - In review)
    - Store Tx Result in database ([Issue #6302](https://github.com/onflow/flow-go/issues/6302) - In review, [Issue #6413](https://github.com/onflow/flow-go/issues/6413) - In progress)
    - Test pebble execution data db on testnet ([Issue #6357](https://github.com/onflow/flow-go/issues/6357) - In progress)
    - Epic [Access API / Go SDK alignment](https://github.com/onflow/flow-go-sdk/issues/735)
      - [Add SubscribeBlocks*, SubscribeBlockHeaders*, and SubscribeBlockDigests* endpoints](https://github.com/onflow/flow-go-sdk/issues/746)
      - [Update GetNodeVersionInfo response object](https://github.com/onflow/flow-go-sdk/issues/761)
      - [Add SendAndSubscribeTransactionStatuses endpoint](https://github.com/onflow/flow-go-sdk/issues/745)
      - [Add SubscribeAccountStatuses* endpoints](https://github.com/onflow/flow-go-sdk/issues/747)
      - [Unify streaming endpoints code duplication](https://github.com/onflow/flow-go-sdk/issues/763)
    - Add Time To Seal metric ([Issue #6448](https://github.com/onflow/flow-go/issues/6448))

* <ins>Cryptography</ins>
  - SPoCK aggregation
  - Document the random beacon bias findings
  - Remaining PoP work planning

* <ins>Misc other</ins>
  - Ongoing Pebble migration PR reviews

**On Hold**

---

### **DeFi** \[Jerome]

Cycle Objective(s): 
- EVM partner onboarding
- Deliver Axelar bridge

**Done last sprint**

**This sprint**
  * Focus remains on launch for Axelar cross-chain bridge and axlUSDC, once all vaidators are onboarded and critical mass is reached
  * Update Flow node operations docs to include latest EVM Gateway details
  * Keep helping partners and node operators
  
**On Hold**

**Active Epics**

- Establish Defi/Liquidity infrastructure for Cadence 1.0 update
- Ensure Flow has best-in-class on- and off-ramps for USDC liquidity across DeFi ecosystem
- Expand Flow DeFi ecosystem primitives and protocols

---

### **User Experience** \[Greg]

Cycle Objective(s):

- Bring EVM on Flow to Market as part of the Crescendo release to increase liquidity and bring top-tier developer platforms to our network
- Add Documentation and smooth rough edges to improve DX for EVM on Flow
- Build Flow Community Rewards (RAIN) and Points Program

**Done last sprint**


**This sprint**
**Sprint Goal: Launch Rewards Redemption and Points Integration and Season 1 / Lost and Found (Integration - Flow Port, Flow Wallet)**

- [EPIC] Flow Rewards (RAIN)
  - [FE](https://github.com/onflow/crescendo-rewards/issues/1 )
  - [BE](https://github.com/onflow/crescendo-rewards-be/issues/1)
  - [SC](https://github.com/onflow/crescendo-rewards-sc/issues/7)
- [EPIC Solving Initialization/Storage Issues - Lost and Found FLIP and Port integration](https://github.com/onflow/flow-port/issues/292)
- [Flow Bridge App Epic](https://github.com/onflow/flow-bridge-app/issues/1)

**On Hold**

- bridge.flow.com

---

### **Wallet** \[Jeff]

Cycle Objective(s): 

- Ensure there exists a wallet ecosystem supports FlowEVM
  - Release version 2.2 of Flow Wallet which supports FlowEVM
    - Support Authn / Authz / User Sign with Web3.js and WalletConnect
    - Support FT and NFT management cross VMs
    - FlowEVM onboarding and COA creation
  - Ensure commitments from key EVM wallet providers to support FlowEVM
    - Secure FlowEVM as an option in the network selector list for MetaMask.
    - Reach out to Coinbase wallet for a commitment to support FlowEVM
  - Ensure commitments from key EVM wallet providers to support FlowEVM
    - Reach out to Privy for a commitment to support FlowEVM
    - Reach out to Bastion for a commitment to support FlowEVM
    - Ensure awareness for existing Cadence aware wallet (aside from Flow Wallet) to support FlowEVM
  - Provide a design document outlining the steps existing Cadence aware wallets can take to support FlowEVM.
    - Reach out to Blocto for a commitment to support FlowEVM
    - Reach out to Shadow wallet for a commitment to support FlowEVM
    - Reach out to Magic for a commitment to support FlowEVM

- Promote safe, human readable transaction authorization on Flow
  - Secure a partnership with Blockaid to integrate their transaction simulation and security platform with FlowEVM.
  - Ensure the existing MetaMask Blockaid integration is compatible with FlowEVM.

- Modernize and improve FCL Discovery
  - Create a PRD and associated community bounty/grant for UI/UX improvements and analytics additions to FCL Discovery.

**Done last sprint**

**This sprint**


**On Hold**

- N/A

**Active Epics**

- TBD

---

### **Infra - JP**
Cycle Objective(s): 

**Done last sprint**

**This Sprint**
- Begin interviewing for SRE role
- Start work to deploy dedicated FF Atlantis for Terraform
- Finish importing Grafana resources into Terraform and add documentation


**Active Epics**

- N/A
