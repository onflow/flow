# Overview

### Team Wins 🎉

- 

### General updates

### OOO
- [Full List](https://www.notion.so/flowfoundation/de89aa4e79364216a665888335a1cdee?v=4de18b26f60d4bae8f62724dddcce260)

---

### Mainnet Uptime - Last 14 days (xx/yy/24 to xx/yy/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    100%       |       0%         |
| Block Sealing           | 99.9%   |    100%       |       0%         |
| Access API Liveness     | 99.9%   |    99.99%     |       4.91%      |

[SLO dashboards](https://flowfoundation.grafana.net/d/hgW3l-m4k/slo-dashboard?orgId=1&from=now-2w&to=now)

[YTD SLA: 100%](https://app.metrika.co/flow/dashboard/slas?tr=YTD)

## Incidents

## Core protocol incidents

### Mainnet
- May 10th: Sev-2 - Execution stopped on FlowFoundation execution nodes for ~5 mins. Root cause: All FF nodes in `us-central` seem to have gone down for a few minutes. Postmortem available [here](https://www.notion.so/flowfoundation/Mainnet-GCP-Network-Outage-5-10-f2c2380ab5454481b8170836bf64db6c?pvs=4#f7981c0fc3b54ccc9c64ae8470b9788f)
- May 10th: Sev-3 - EN1 failed to restart (part of the same issue ☝️)
- May 19th: Sev-3 - EN1 crashed. Currently being investigated: https://github.com/onflow/flow-go/issues/5956.

### Testnet
- May 20th: Sev-1 - ENs on testnet forked and sealing halted. Testnet underwent a network upgrade (spork) [Slack thread](https://dapperlabs.slack.com/archives/CUU2KQL4A/p1716230568407649)

(Sev [definition](https://www.notion.so/dapperlabs/Incident-Priorities-Severity-Levels-b65d7682336c46baa025ee512fd3efa3))

### Key Release Dates & Breaking Changes
- Next Mainnet/Testnet network upgrade (spork):
  - Testnet: 20th June 2024
  - Mainnet: 29th July 2024
---

### FLIPs Tracker \[Kshitij]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 6  |    8   |       1         |       7          |        **22** (+1)          |
| Proposed    | 1  |    2     |       2          |       0           |        **5**          |
| Accepted    | 2  |    1     |       1       |       1          |        **5**          |
| Rejected    | 0  |    0     |       1       |       0          |        **1**          |
| Implemented | 3 |    21    |       2       |       1           |        **7**          |
| Released    | 4  |    0     |       3       |       6          |        **13**          |
| Total       | **16**  |    **32**  |       **10** (+1)      |       **15**          |        **73** (+1)          |

**New FLIPs**
* [Governance] - 5X Computation Limit Hike (Drafted)
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

Objective 1, KR 1: Enable Developers and the Flow Foundation to simulate Cadence 1.0 Contract upgrades
* All breaking changed released in a new CLI: v1.18.0-cadence-v1.0.0-preview.23

Objective 1, KR4: Testnet Upgrade to Crescendo Release
* Completed Testnet migration with both Atree inlining and Cadence 1.0.
* Completed [EVM Gateway development](https://github.com/onflow/flow-evm-gateway/issues/126) and [EVM Core development](https://github.com/onflow/flow-go/issues/5536) production readiness EPICs.
* Continue work on migration optimizations.

Objective 2, KR 1: Update transaction fees weights for the execution operations on TN and MN
* Continue work on [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)

Objective 4, KR1: Execution node handles restart from spork root block reguardless of how many blocks it is behind
* Continue refactoring of Ingestion engine to [prevent EN entering crash loop](https://github.com/onflow/flow-go/issues/5298)

Objective 3: Analyze execution runtime trends and risks to plan next set of scalability OKRs
* Continue work on making [Make TPS loader input more flexible](https://github.com/onflow/flow-go/issues/5490) for better analysis and tracking of performance data.

* Start Atree optimization: [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)

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

* Translate crypto performance improvements to consensus block rate increase [DONE]
* Provide developers secure and non-rate limited way to access all of chain data (transactions, blocks, account balance, events, account balance etc) by locally running an access or an observer node
* Reduce CPU usage on Execution node by 30%
* Continue design and implementation of Sporkless Epoch Fallback Recovery solution [DONE]

**Done last Sprint:**


**This sprint**

* <ins>Zero-downtime Upgrades of Node Software:</ins>
  - [Dynamic Protocol State - todos, suggested revisions and tech debt](https://github.com/onflow/flow-go/issues/5666#top)
  - Apply comments and finalize https://github.com/onflow/flow-go/pull/5773
  - Reviews for open M2 PRs, priority to close the milestone
  - Wrapping up the KVStore M2 items going into this spork
    
* <ins>EFM Recovery</ins>
  - [Address Recover Epoch cadence PR feedback](https://github.com/onflow/flow-core-contracts/pull/420)
  - [Wrap up integration test](https://github.com/onflow/flow-go/issues/5886)
  - [Cancel in progress root QC voting](https://github.com/onflow/flow-go/issues/5733)

* <ins>Data Availability:</ins>
  - Test local script exec with lower compute limit
  - Continue debugging resource issues observed on QuickNode
  - KROK Team
    - Fix retries when using preferred-execution-nodes list ([Issue #5810](https://github.com/onflow/flow-go/issues/5810))
    - Merge changes to support enabling indexing on Dynamic bootstrapped AN ([Issue #5423](https://github.com/onflow/flow-go/issues/5423) - PR in review)
    - Update rosetta for Crescendo ([Issue #52](https://github.com/onflow/rosetta/issues/52))
    - Address tech debt in APIs ([Issue #5757](https://github.com/onflow/flow-go/issues/5757) - PR in review)
    - Add support for version beacon events to control script execution ([Issue #5757](https://github.com/onflow/flow-go/issues/5757))

* <ins>Cryptography:</ins>
   - BFT - proof of possession epic : continue updating old PRs - scope the Ledger wallet work with VaccumLabs
   - SPoCK aggregation: revisit the SPoCK security proof


**On Hold**
* Deliver public roadmap & vision for technical protocol decentralization focusing on current challenges and upcoming updates for permissionless consensus on Flow.
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
- EVM partner onboarding: Pyth, DeBridge, Covalent, Etherscan
- Deliver Axelar bridge

**Done last sprint**


**This sprint**
* Update JVM SDK examples repo now that latest version artifact successfully published
* Implement multi-sig solution for Circle to help with USDC migration to EVM
* Upgrade Band protocol contract to C1.0

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
**Sprint goal focusing on: Flow Port Asset Bridge and Token Transfer, FCL x WalletConnect Improvements, shipping new CLI version, EVM randomness**

- [EPIC] Flow Port Asset Bridge [#284](https://github.com/onflow/flow-port/issues/284)
- [EPIC] EVM Docs [#654](https://github.com/onflow/docs/issues/654)
- [EPIC] Flow EVM Docs - Cadence Dev [#575](https://github.com/onflow/docs/issues/575)
- [Epic]: Update Flow port for Cadence v1.0 instance [#279](https://github.com/onflow/flow-port/issues/279)

#### Smart Contract WG

- Reviews for Increment.fi
- Circle Support
- Update Tutorials for Cadence 1.0 [#769](https://github.com/onflow/docs/issues/769)
- Add Solidity implementation using EVM randomness
- [FEATURE] Update Core Contracts [#756](https://github.com/onflow/docs/issues/756)
- VM Bridge audit startd May 13th

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

- Completing VM-Bridge integration, NFT transfer
- UI / UX / Bug updates. Working through a large list of tracked bugs / UI updates required:
  - Improving SE account creation workflow.
  - Profile account recovery / social recovery.
  - Account recovery from multiple sources.
  - Asset display issues (NFT and FT).
  - Supporting additional token types (eg: Those created by toucans)
  - Misc copy updates / fixes.
 
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

**CloudFlare Migration**
- [ Migrated Hardware wallet API to Cloud Run](https://github.com/dapperlabs/flow-devex-infrastructure/pull/153)
- Backed up & removed unnecessary resources from Gen2 cluster
- Identified CloudFlare resources 
- Started process with CloudFlare to create new account & get quotes

**Sporks**
- [Created infrastructure for Devnet50 spork](https://github.com/dapperlabs/terraform/pull/4242)
- [Create Ansible Configuration](https://github.com/dapperlabs/dapper-flow-hosting/pull/1501)
- [Scale down Devnet49 network](https://github.com/dapperlabs/terraform/pull/4245)
- Assisted with Devnet50 spork execution
- Assisted with Previewnet spork(s) execution

**Node Hosting**
- [Scale up Mainnet Studio ANs to alleviate memory issues](https://github.com/dapperlabs/terraform/pull/4235)
- [Scale up Mainnet ANs to alleviate memory issues](https://github.com/dapperlabs/terraform/pull/4246)

**EVM Gateway**
- [Update Prometheus to scrape EVM Gateway]((https://github.com/dapperlabs/dapper-flow-hosting/pull/1507)
- [Updated EVM Gateway firewall to allow envoy scraping](https://github.com/dapperlabs/terraform/pull/4247)

**Support**
- [Create new KMS key for node operations](https://github.com/dapperlabs/terraform/pull/4240)
- [Migrate port.onflow.org to port.flow.com](https://github.com/dapperlabs/terraform/pull/4248)
- [Redirect port.onflow.org to port.flow.com](https://github.com/dapperlabs/terraform/pull/4249)

**Goal of this Sprint is to continue migration efforts** 
**This Sprint**
- Continue removing dependencies on CloudFlare & assist with account creation
- Continue assisting with DevEx migration to Cloud Run
- Improve synthetic alerting 
- Assist with migration and spork prep efforts

---

### **Governance and Tokenomics** \[Kshitij]
Cycle Objective(s): Transaction fees on EVM, increasing transaction fees and inflation reduction plan.


**This sprint**
- Continue chats with potential consensus node operators and finalize lease discussions
- Onboard 8 new SNs - contracts, lease transfers, stake and setup assistance 
- Review, finalize and merge Tokenomics PRs
- Transaction fee partner impact discussion and way forward with FF leadership
- Map and evaluate post crescendo Flow scenarios regarding tps, fees and inflation
- R&D and planning with Dete on post Crescendo surge pricing [already kicked off]
- Metrics planning for foundation’s financials and network Tokenomics
- Continue working on node operator branding and logos with .find team
  
**On Hold**


**Active Epics**

- N/A
