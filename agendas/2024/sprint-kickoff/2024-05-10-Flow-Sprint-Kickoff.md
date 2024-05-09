# Overview

### Team Wins 🎉

- Unblocked JVM SDK artifact publishing GH automation which took several fiddly days of back and forth to figure out

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
| Access API Liveness     | 99.9%   |    99.99%     |       12.1%      |

[SLO dashboards](https://flowfoundation.grafana.net/d/hgW3l-m4k/slo-dashboard?orgId=1&from=now-2w&to=now)

[YTD SLA: 100%](https://app.metrika.co/flow/dashboard/slas?tr=YTD)

## Incidents

## Access Node incidents
1. Sev 3: 26th April: Public access nodes run by QuickNode in EU falling behind. [slack thread](https://dapperlabs.slack.com/archives/C03HP6MAFGE/p1714139880086399)
2. Sev 3: 3rd May: High response time on Public ANs in North America. [slack thread](https://dapperlabs.slack.com/archives/C03HP6MAFGE/p1714757713793539)
3. Sev 3: 4th May: NBA stuck on continuously retrying a script on a block height. [slack thread](https://dapperlabs.slack.com/archives/CTGAW0TM2/p1714866679734789)
4. Sev 3: 8th May: NBA getting timeout when fetching transactions on mainnet. [slack thread](https://dapperlabs.slack.com/archives/CTGAW0TM2/p1715199157704169)

(Sev [definition](https://www.notion.so/dapperlabs/Incident-Priorities-Severity-Levels-b65d7682336c46baa025ee512fd3efa3))

### Key Release Dates & Breaking Changes

- Next Mainnet/Testnet network upgrade (spork):
  - Testnet: 5/22/24
  - Mainnet: June/July 2024 (exact date TBD)
- Testnet migration test runs conducted every week.

---

### FLIPs Tracker \[Kshitij]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 6 (-1)  |    8   |       0          |       7 (+2)          |        **21** (+1)          |
| Proposed    | 1 (-2)  |    2     |       2          |       0 (-1)          |        **5** (-3)          |
| Accepted    | 2  |    1     |       1       |       1          |        **5** (-1)          |
| Rejected    | 0  |    0     |       1       |       0          |        **1**          |
| Implemented | 3 (+2) |    21 (+2)    |       2       |       1 (+1)          |        **7** (+5)          |
| Released    | 4  |    0     |       3       |       6 (+2)          |        **13** (+2)          |
| Total       | **16** (-1)  |    **32** (+2)    |       **9**       |       **15** (+3)          |        **72** (+4)          |

**New FLIPs tracked now**
* [Protocol] Message Forensic (MF) System
* [Protocol] Passkey Support

**Marked as Released**
* [Protocol] On-Chain randomness history for commit-reveal schemes
* [Protocol] Expand Access Streaming API with new endpoints

**Implemented**
* [Cadence] Random function
* [Cadence] Require matching access modifiers for interface implementation members
* [Protocol] FVM supporting EVM
* [Application] Flow EVM Gateway
* [Application] FlowEVM VM Bridge

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
* [Emulator release is ready](https://github.com/onflow/flow-emulator/releases/tag/v1.0.0-preview.19), support devs that are teting migration, monitor Discord questions.

Objective 1, KR4: Testnet Upgrade to Crescendo Release
* Completed Testnet migration with both Atree inlining and Cadence 1.0.
* Continue work on migration optimizations.
* Complete [EVM Gateway development](https://github.com/onflow/flow-evm-gateway/issues/126) and [EVM Core development](https://github.com/onflow/flow-go/issues/5536) production readiness EPICs.

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
* <ins>Zero-downtime Upgrades of Node Software:</ins>
  - Merged [kvstore branch](https://github.com/onflow/flow-go/pull/5840) with master and Cadence 1.0 and successfully tested on Benchnet
  - Extended tests for edge case in Dynamic Protocol State: https://github.com/onflow/flow-go/pull/5681
  - Follow-up on KVStore
    - [Fixing a KVStore encoding edge case](https://github.com/onflow/flow-go/pull/5854)
    - [Simplifying snapshot model](https://github.com/onflow/flow-go/pull/5682)
    
* <ins>EFM Recovery</ins>
  - [Applied suggestions and finalized first Dynamic Protocol State issue for EFM recovery](https://github.com/onflow/flow-go/pull/5773)
  - PR reviews to finalize M2
  - [Epoch Recover integration test](https://github.com/onflow/flow-go/issues/5886)
  - [Investigate network/p2p flakey tests](https://github.com/onflow/flow-go/issues/5886) 


**This sprint**

* <ins>Zero-downtime Upgrades of Node Software:</ins>
  - [Dynamic Protocol State - todos, suggested revisions and tech debt](https://github.com/onflow/flow-go/issues/5666#top)
  - Reviews for open M2 PRs, priority to close the milestone
  - Apply comments and finalize https://github.com/onflow/flow-go/pull/5773
    
* <ins>EFM Recovery</ins>
  - [Fix & re-enable flakey tests](https://github.com/onflow/flow-go/issues/5886)
  - [Address Recover Epoch cadence PR feedback](https://github.com/onflow/flow-core-contracts/pull/420)
  - [Wrap up integration test](https://github.com/onflow/flow-go/issues/5886)
  - [Cancel in progress root QC voting](https://github.com/onflow/flow-go/issues/5733)

* <ins>Cryptography:</ins>
   - N/A this sprint as Tarak was out-of-office

* <ins>Data Availability:</ins>
  - Test local script exec with remaining studio nodes
  - Continue to debug slow response time on mainnet QN ANs
  - Continue to debug high memory usage on previewnet ANs
  - KROK Team
    - Continue work to support enabling indexing on Dynamic bootstrapped AN ([Issue #5423](https://github.com/onflow/flow-go/issues/5423))
    - Complete work to fix race condition in Access ingestion engine ([Issue #5420](https://github.com/onflow/flow-go/issues/5420))
    - Update rosetta for Crescendo ([Issue #52](https://github.com/onflow/rosetta/issues/52))
    - Address tech debt in APIs ([Issue #5558](https://github.com/onflow/flow-go/issues/5558), [Issue #5757](https://github.com/onflow/flow-go/issues/5757))
    - Add support for version beacon events to control script execution ([Issue #5757](https://github.com/onflow/flow-go/issues/5757))


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
- Onboarded DeBridge to PreviewNet
- Unblocked JVM SDK artifact publishing GH automation which took several fiddly days of back and forth to figure out
- Approved and funded proposal for second phase of JVM SDK upgrade to start bringing it to parity with the Go SDK

**This sprint**
* Update JVM SDK examples repo now that latest version artifact successfully published
* Implement multi-sig solution for Circle to help with USDC migration to EVM
* Upgrade Band protocol contract to C1.0
* Continue review of IncrementFi Cadence 1.0 contract upgrades (couldn't get to it in past sprint)

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
-

**This sprint**
**Sprint goal focusing on: Flow Port Asset Bridge and Token Transfer, Splitting Dev Docs (Cadence 1.0/Legacy), and adding EVM docs for Cadence Devs**

- [EPIC] Flow Port Asset Bridge [#284](https://github.com/onflow/flow-port/issues/284)
- [EPIC] EVM Docs [#654](https://github.com/onflow/docs/issues/654)
- [EPIC] Flow EVM Docs - Cadence Dev [#575](https://github.com/onflow/docs/issues/575)
- [EPIC] Spilt Dev Docs into Cadence 1.0 and Legacy [#738](https://github.com/onflow/docs/issues/738)

#### Smart Contract WG

- Reviews for Increment.fi
- NFTStorefront v1 & v2 Cadence 1.0 Refactor [#89](https://github.com/onflow/nft-storefront/pull/89)
- EVM Bridge prep for deployment and Audit

**On Hold**

- Update Flow port for Cadence Crescendo instance [#279](https://github.com/onflow/flow-port/issues/279)

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

- Complete Web3.js integration, authorization
- VM Bridge integration, moving FT and NFT in app.
- Product scoping for next cycle:
  - Identifying needed polish + bug fixes
  - Next product opportunities
- CTD: Outreach with Coinbase Wallet, MetaMask, Shadow Wallet and Blocto
- CTD: Working with Apple on app approval & release

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
**Incident Management**
- Updated alert routing to solely go to Grafana OnCall

**Benchnet Automation**
- [Updated contour to fix broken controller](https://github.com/dapperlabs/flow-benchnet-automation-infrastructure/pull/47)
- [Updated LB to allow FF IPs](https://github.com/dapperlabs/flow-benchnet-automation-infrastructure/pull/48)

**Node Hosting**
- [Update Rate Limits for QuickNode IPs](https://github.com/dapperlabs/dapper-flow-hosting/pull/1485)
- [Update Devnet LN & VN Memory to avoid churn](https://github.com/dapperlabs/terraform/pull/4234)
- [Increase DL Studio Node sizes](https://github.com/dapperlabs/terraform/pull/4235/files)

**Migration Support**
- [Add support for REST, gRPC-web, and EVM Gateway Routing on Migrationnet](https://github.com/dapperlabs/terraform/pull/4223)
- [Create the infrastructure for EVM Gateway on Migrationnet](https://github.com/dapperlabs/terraform/pull/4222)
- [Create the ansible configuration for the EVM Gateway on Migrationnet](https://github.com/dapperlabs/dapper-flow-hosting/pull/1483)

**Support**
- Worked with GCP to request quota increases for migration nodes
- Created and configured Execution Node for isolated testing
- Assist with Mainnet HCU for DL nodes
- Assist with Previewnet Spork & Recovery
- Clean up old Vercel domains

**Goal of this Sprint is to continue migration efforts** 
**This Sprint**
- Solidify CloudFlare Migration plan and continue preparing for migration
- Continue assisting with DevEx migration to Cloud Run
- Improve synthetic alerting 

---

### **Governance and Tokenomics** \[Kshitij]
Cycle Objective(s): Transaction fees on EVM, increasing transaction fees and inflation reduction plan.

**Done last sprint**

**This sprint**

- Test governance changes (gas to evm ratio, 5x compute limit, 100x fee) on PreviewNet 
- Review inflation strategies with the team, get feedback, remodel, conclude on the way forward
- Draft FLIP on EVM gas to compute ratio and compute limit hike
- Update transaction fee 100x FLIP to suggest a new transaction fee multipler, also update the market comps per the latest exchange rates to get it ready for reintroduction
- Consolidate node operator data; assess which operator use lease tokens versus self-stake
- Continue working on node operator branding and logos with .find team
- Continue decentralization efforts - work with a16z to consolidate three nodes; with Coinbase to reduce one node they operate on leased stake; Continue work on automation of the decentralization dashboard to send messages when critical thresholds are crossed

**On Hold**


**Active Epics**

- N/A
