# Overview

### Team Wins 🎉
- Script execution on the access node turned on for NBA nodes successfully.
- Script execution turned on 50% of the public access node.

### General updates

### OOO
- [Full List](https://www.notion.so/flowfoundation/de89aa4e79364216a665888335a1cdee?v=4de18b26f60d4bae8f62724dddcce260)

---

### Mainnet Uptime - Last 14 days (06/7/24 to 06/20/24) \[JP]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    99.95%     |       49.6%      |
| Block Sealing           | 99.9%   |    99.90%     |       99.3%      |
| Access API Liveness     | 99.9%   |    ? dashboard broken 😔  |       ?          |

[SLO dashboards](https://flowfoundation.grafana.net/d/hgW3l-m4k/slo-dashboard?orgId=1&from=now-2w&to=now)

[YTD SLA: 99.919%](https://app.metrika.co/flow/dashboard/slas?tr=YTD)

## Incidents

### Mainnet
- June 13th: Sev-1 - Execution fork during the mainnet HCU - [Postmortem](https://www.notion.so/flowfoundation/Retro-on-execution-fork-01504b970441477ebfc0174d14dcb269)


(Sev [definition](https://www.notion.so/dapperlabs/Incident-Priorities-Severity-Levels-b65d7682336c46baa025ee512fd3efa3))

### Key Release Dates & Breaking Changes
- Next Mainnet/Testnet network upgrade (spork):
  - Testnet: Q3
  - Mainnet: Q3 (see [announcement](https://flow.com/post/update-on-testnet-crescendo-network-upgrade))

---

### FLIPs Tracker \[Kshitij]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 7  |    9 (+1)  |       0         |       7          |        **23** (+1)       |
| Proposed    | 1  |    2     |       2 (-1)          |       0           |        **5** (-1)        |
| Accepted    | 2  |    1     |       2 (+1       |       1          |        **6** (+1)          |
| Rejected    | 0  |    0     |       1       |       0          |        **1**          |
| Implemented | 3 |    21    |       2       |       1           |        **7**          |
| Released    | 4  |    0     |       3       |       6          |        **13**          |
| Total       | **17**  |    **33** (+1)  |       **10**      |       **15**          |        **75** (+1)          |

**Updates**
* [Cadence] - Type Removal In Contract Updates (FLIP 275) was drafted
* [Governance] - Computation Limit hike (FLIP 267) was accepted
---


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

DONE: Objective 1, KR 1: Enable Developers and the Flow Foundation to simulate Cadence 1.0 Contract upgrades
* All breaking changed released in a new CLI: v1.18.0-cadence-v1.0.0-preview.26

IN PROGRESS: Objective 1, KR4: Testnet Upgrade to Crescendo Release
* Completed Testnet migration with both Atree inlining and Cadence 1.0.
* Completed [EVM Gateway development](https://github.com/onflow/flow-evm-gateway/issues/126) and [EVM Core development](https://github.com/onflow/flow-go/issues/5536) production readiness EPICs.
* Continue work on migration optimizations.
* Investigate / Fix any security report incoming from bug bounty.
* Finish implementation of remaining EVM Gateway blockers: [1](https://github.com/onflow/flow-evm-gateway/issues/250), [2](https://github.com/onflow/flow-go/issues/5983)

IN PROGRESS: Objective 2, KR 1: Update transaction fees weights for the execution operations on TN and MN
* Continue work on [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)

DONE: Objective 4, KR1: Execution node handles restart from spork root block reguardless of how many blocks it is behind
* Completed refactoring of Ingestion engine to [prevent EN entering crash loop](https://github.com/onflow/flow-go/issues/5298)

ON HOLD: Objective 3: Analyze execution runtime trends and risks to plan next set of scalability OKRs
* Continue work on making [Make TPS loader input more flexible](https://github.com/onflow/flow-go/issues/5490) for better analysis and tracking of performance data.

ON HOLD: * Start Atree optimization: [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)

Cadence 1.0 Contract updates
- [Continue working through contract standards needing upgrade to C1.0](https://github.com/onflow/docs/issues/716)
- More reviews of bridge PRs and Cadence 1.0 changes 
- Writing additional tests for recent Cadence FLIP changes
- [Audit and update docs and tutorials for Cadence 1.0](https://github.com/onflow/docs/issues/531)

**On Hold**

Objective 2: Calibrate Transaction fees so that they accurately reflect resource usage during execution and deploy as part of Crescendo to avoid future disruption
- KR1: Update weights for the execution operations on TN and MN
  - [Execution effort recalibration - data collection](https://github.com/onflow/flow-go/issues/5026)


**Active Epics**

Objective 1: Upgrade Mainnet to Crescendo Release with minimal impact on developers, to lower the barrier for cross chain liquidity on Flow
- KR1: Enable Developers and the Flow Foundation to simulate Cadence 1.0 Contract upgrades
- KR4: Testnet Upgrade to Crescendo Release
- KR6: Develop & share with community a disaster recovery plan to address potential issues after migration to Crescendo Release.
- KR7: Decision on how to deal with contracts that have not been upgraded to Cadence 1.0 by developers.
Objective 3: Analyze execution runtime trends and risks to plan next set of scalability OKRs
- KR1: Measure execution state growth trends, identify future bottlenecks and prioritize by urgency

---

### **Core Protocol** \[Jerome]
Cycle Objective(s): 

* Provide developers secure and non-rate limited way to access all of chain data (transactions, blocks, account balance, events, account balance etc) by locally running an access or an observer node
* Reduce CPU usage on Execution node by 30% [GOAL MODIFIED]
* Translate crypto performance improvements to consensus block rate increase [DONE]
* Continue design and implementation of Sporkless Epoch Fallback Recovery solution [DONE]

**Done last Sprint:**


**This sprint**

* <ins>EFM Recovery</ins>
  - Finish https://github.com/onflow/flow-go/issues/5727
  - [Finish Epoch manager QC voting changes](https://github.com/onflow/flow-go/issues/5733) (implementing tests)
  - Ongoing review by SC team: [EpochRecover cadence transaction](https://github.com/onflow/flow-core-contracts/pull/420)
  - [Blocktime controller EFM changes])(https://github.com/onflow/flow-go/issues/5732)
  - [`epochs.FallbackStateMachine` only tolerates narrow unexpected behaviour](https://github.com/onflow/flow-go/issues/6018)
  - [Epoch State Machines should not use parentState in their business logic](https://github.com/onflow/flow-go/issues/6019)

* <ins>Data Availability:</ins>
  - [Complete RegistersDB pruning design, start on protocol db design](https://github.com/onflow/flow-go/issues/5761)
  - Continue redeploy of local index and script exec on QN bare metal instances
  - KROK Team
    - Fix retries when using preferred-execution-nodes list ([Issue #5810](https://github.com/onflow/flow-go/issues/5810) - PR in review)
    - Add support for version beacon events to control script execution ([Issue #5788](https://github.com/onflow/flow-go/issues/5788), [Issue #5789](https://github.com/onflow/flow-go/issues/5789), [Issue #5790](https://github.com/onflow/flow-go/issues/5790))
    - Expose separate endpoints for getting account balance and keys ([Issue #5894](https://github.com/onflow/flow-go/issues/5894), [Issue #5999](https://github.com/onflow/flow-go/issues/5999))
    - Create proof of concept of transaction payer balance checks ([Issue #5823](https://github.com/onflow/flow-go/issues/5823))
    - Add support for pruning execution data db on ANs ([Issue #6002](https://github.com/onflow/flow-go/issues/6002))
    - Add support for storing exec data using pebble db ([Issue #6017](https://github.com/onflow/flow-go/issues/6017))

* <ins>Cryptography:</ins>
   - SPoCK aggregation: from BLS security proof to BLS aggregation security proof (more than a sprint)

* <ins>Rosetta:</ins>
  - KROK: 
    - Last items Rosetta Cadence updates for Crescendo ([Issue #52](https://github.com/onflow/rosetta/issues/52), [Issue #54](https://github.com/onflow/rosetta/issues/54) - PRs in review)
  - DistributedLab: 
    - Continue with remaining updates for Rosetta for EVM on Flow 
    
* <ins>Other:</ins>   
  - Complete high level 2-pager of public roadmap & vision for protocol decentralization & permissionless consensus on Flow
  - Continue content piece for public roadmap & vision for protocol decentralization; current challenges and upcoming updates for permissionless consensus on Flow.

**On Hold**
* Implement BFT mitigations to enable 20 permissionless ANs

**Active Epics**

- Reinforcing Flow’s commitment to full protocol autonomy and scalability
- Improve network performance
- Improve network availability 
- Simplify community contributions to core protocol and maintainability
- Improve network reliability and data availability for dApp developers
- Data-driven Prioritization and Scaling Engineering

---

### **DeFi** \[Jerome]

Cycle Objective(s): 
- Resolving Circle's existing engineering improvements for USDC on Flow
- Cadence 1.0 DEX Prep - IncrementFi
- EVM partner onboarding: Moralis, Covalent, Ankr
- Deliver Axelar bridge [PAUSED]

**Done last sprint**


**This sprint**
* Backfill missing API methods to JVM SDK
* Review of new hash additions PR for JVM-SDK

**On Hold**
- Axelar Cadence bridge release waiting confirmation of build partners, costs and timelines for EVM release, no engineering ongoing

**Active Epics**

- Establish Defi/Liquidity infrastructure for Cadence 1.0 update
- Ensure Flow has best-in-class on- and off-ramps for USDC liquidity across DeFi ecosystem
- Expand Flow DeFi ecosystem primitives and protocols

---

### **User Experience** \[Greg]

Cycle Objective(s):

- Bring Cadence 1.0 to market as part of the Crescendo release to minimize customer impact and developer effort
- Bring EVM on Flow to Market as part of the Crescendo release to increase liquidity and bring top-tier developer platforms to our network
- Use the Crescendo Release grow Flow's developer base and network activity

**Done last sprint**

**This sprint**
**Sprint goal focusing on: Flow Port Asset Bridge and Token Transfer, FCL x WalletConnect Improvements, Crescendo Rewards**

- [EPIC] Flow Port Asset Bridge [#284](https://github.com/onflow/flow-port/issues/284)
- [EPIC] EVM Docs [#654](https://github.com/onflow/docs/issues/654)
- [EPIC] Flow EVM Docs - Cadence Dev [#575](https://github.com/onflow/docs/issues/575)
- [EPIC] Update Flow port for Cadence v1.0 instance [#279](https://github.com/onflow/flow-port/issues/279)
- [EPIC] FCL WalletConnect Improvements https://github.com/onflow/fcl-js/issues/1872
- [EPIC] Crescendo Rewards Portal
  - [FE](https://github.com/onflow/crescendo-rewards/issues/1 )
  - [BE](https://github.com/onflow/crescendo-rewards-be/issues/1)
  - [SC](https://github.com/onflow/crescendo-rewards-sc/issues/7)

#### Smart Contract WG

- Reviews for Increment.fi
- Circle Support
- Add Solidity implementation using EVM randomness
- Discovery Design Inbox Standard

**On Hold**

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

- Continue to better support Secure Enclave
  - User migration from Extension (seed phrase) to mobile (secure enclave) wallet security
  - New account creation UI explaining the benefits of SE
  - Explain any UI differences between seed phrase / SE wallets
  - Profile account recovery - one backup to a users multiple primary accounts
 
**On Hold**

- N/A

**Active Epics**

- TBD

---

### **Infra - JP**
Cycle Objective(s): 
- Solidify CloudFlare Migration plan and continue preparing for migration
- Continue assisting with DevEx migration to Cloud Run

**Done last sprint**

**This Sprint**
- Assist with migration and spork prep efforts
- Continue removing dependencies on CloudFlare & assist with account creation
- Continue assisting with DevEx migration to Cloud Run

---

### **Governance and Tokenomics** \[Kshitij]
Cycle Objective(s): Transaction fees on EVM, increasing transaction fees and inflation reduction plan.

**Done last sprint**


**This sprint**
- Work with Doodles, Cryptotoys and Edgevana for new nodes; Blockdaemon for continued operations via lease formalization
- Work on node operator branding and logos with .find team
- Finalize and publish Flow EVM documentation on docsite
- Discussion and decision on txn fee hike timeline
- R&D and planning with Dete on post Crescendo surge pricing
- Plan next cycle OKRs for governance
  
**On Hold**


**Active Epics**

- N/A
