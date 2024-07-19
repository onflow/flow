# Overview

### Team Wins 🎉
- Finished deploying script execution to public QN nodes (live on 100% of public and studio nodes). Seeing a [70% reduction](https://flowfoundation.grafana.net/d/ddnerazd84um8d/script-execution?orgId=1&editPanel=3&from=now-60d&to=now) in script execution on the execution nodes since May.
- Polished Flow Port to release ready state
- Submitted Ledger Flow app (0.13.0) for approval after successfull Ledger Live testing


### General updates

### OOO
- [Full List](https://www.notion.so/flowfoundation/de89aa4e79364216a665888335a1cdee?v=4de18b26f60d4bae8f62724dddcce260)

---

### Mainnet Uptime - Last 14 days (07/04/24 to 07/18/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    100%       |       0%         |
| Block Sealing           | 99.9%   |    100%       |       0%         |
| Access API Liveness     | 99.9%   |    100%       |       0%         |

[SLO dashboards](https://flowfoundation.grafana.net/d/hgW3l-m4k/slo-dashboard?orgId=1&from=now-2w&to=now)

[YTD SLA: 99.922%](https://app.metrika.co/flow/dashboard/slas?tr=YTD)

## Incidents

### Mainnet


(Sev [definition](https://www.notion.so/dapperlabs/Incident-Priorities-Severity-Levels-b65d7682336c46baa025ee512fd3efa3))

### Key Release Dates & Breaking Changes
- Next Mainnet/Testnet network upgrade (spork):
  - Testnet: Aug 14th
  - Mainnet: Aug 28th (to be confirmed - subject to change)

---

### FLIPs Tracker \[Kshitij]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 7  |    9  |       0         |       7          |        **23**       |
| Proposed    | 1  |    2 (-1)    |       2          |       0           |        **5** (-1)        |
| Accepted    | 2  |    1     |       2       |       1          |        **6**          |
| Rejected    | 0  |    0     |       1       |       0          |        **1**          |
| Implemented | 3 |    22 (+1)    |       2       |       1           |        **28** (+1)          |
| Released    | 4  |    0     |       3       |       6          |        **13**          |
| Total       | **17**  |    **34**  |       **10**      |       **15**          |        **76**          |

**Updates**
* [Cadence] - FLIP for changing import statement semantics (FLIP-277) moved to implementation
* FLIPs started by folks who have now left FF, need to reassign
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

 - Objective 1, KR4: Testnet Upgrade to Crescendo Release
   - Continue work on migration optimizations.
   - Investigate / Fix any security report incoming from bug bounty.

 - Objective 2, KR 1: Update transaction fees weights for the execution operations on TN and MN
   -  Continue work on [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)

 - Atree
   -  Analyze `diff-states` (21GB report) for atree inlined vs non-inlined execution states that executed same mainnet blocks
   - For inlined and non-inlined states, re-execute again using:
      - same blocks
      - same starting point
      - same vm configuration (prior run used Ice Lake vs Sky Lake)
      - and save execution results (prior run's execution results were overwritten by storehouse tests).
 
 - Cadence optimization
   - Continue: [Cadence composites with attachment having different field types vs field values are rejected by CCF encoder](https://github.com/dapperlabs/cadence-internal/issues/241)
   - [Provide ccf.EventsEncModeV0 and ccf.EventsEncModeV1 for encoding events in CCF format](https://github.com/onflow/cadence/issues/3448)
   
 - State migration for Crescendo release 
   - [Test Crescendo state migration with Mainnet state, and deploy to a new mainnet migration net](https://github.com/onflow/flow-go/issues/5851)
   - [Comparison of execution states before and after the atree inlining](https://github.com/onflow/atree/issues/292)

- EVM Gateway
   - [Add a method to return the value from a storage slot on a given addres](https://github.com/onflow/flow-go/issues/6178)
   - KROK
     - EVM Gateway benchmarking
  
 - Other
   - [Reducing spork time by improving checkpointing copying during bootstrapping](https://github.com/onflow/flow-go/issues/6167)

**Completed OKRs**
  * Objective 1, KR1: Enable Developers and the Flow Foundation to simulate Cadence 1.0 Contract upgrades
    * All breaking  released in a new CLI: v1.18.0-cadence-v1.0.0-preview.26
  * Objective 4, KR1: Execution node handles restart from spork root block reguardless of how many blocks it is behind
    * Completed refactoring of Ingestion engine to [prevent EN entering crash loop](https://github.com/onflow/flow-go/issues/5298)

**On Hold**

 - Objective 3: Analyze execution runtime trends and risks to plan next set of scalability OKRs
    * Continue work on making [Make TPS loader input more flexible](https://github.com/onflow/flow-go/issues/5490) for better analysis and tracking of performance data.

- Other
    * Start Atree optimization: [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)
    * Evaluate fixing [Random beacon history taking more space on chain than expected](https://github.com/onflow/flow-go/issues/5550)

---

### **Core Protocol** \[Jerome]
Cycle Objective(s): 

* Provide developers secure and non-rate limited way to access all of chain data (transactions, blocks, account balance, events, account balance etc) by locally running an access or an observer node [IN PROGRESS]
* Reduce CPU usage on Execution node by 30% [IN PROGRESS]
* Translate crypto performance improvements to consensus block rate increase [DONE]
* Continue design and implementation of Sporkless Epoch Fallback Recovery solution [DONE]

**Done last Sprint:**

* <ins>Data Availability:</ins>
  - Finished rollout of script execution on QN nodes
  - KROK Team
    - Add support for pruning execution data db on ANs ([PR #6109](https://github.com/onflow/flow-go/pull/6109))
    - Proof of concept of transaction payer balance checks ([PR #6004](https://github.com/onflow/flow-go/pull/6004))


**This sprint**

* <ins>EFM Recovery</ins>
  - [Update Ansible automation for Mainnet25 Dynamic Protocol state changes](https://github.com/onflow/flow-go/issues/5156)
  - [Update consensus committee EFM processing](https://github.com/onflow/flow-go/issues/5730)
  - [Update epoch lookup component](https://github.com/onflow/flow-go/issues/5763)
  - [EFM Recovery benchnet testing](https://github.com/onflow/flow-go/issues/5945)
  - [Support Epoch Extensions in HotStuff Committee](https://github.com/onflow/flow-go/pull/6154)
  - [Invalid Service Events shortly after Epoch Commit](https://github.com/onflow/flow-go/issues/5631)
  - Address comments and merge PR: [Epoch State Machines should not use parentState in their business logic](https://github.com/onflow/flow-go/issues/6019)
  - Merge EFM integration test and blocktime controller PRs 
  - Finish [EFM transaction Cadence PR](https://github.com/onflow/flow-core-contracts/pull/420)
  
* <ins>Data Availability:</ins>
  - Complete ProtocolDB pruning design
  - Testing ChunkDataPack DB pruning PoC
  - KROK Team
    - Add support for version beacon events to control script execution ([Issue #5788](https://github.com/onflow/flow-go/issues/5788) - In review, [Issue #5789](https://github.com/onflow/flow-go/issues/5789) - In review, [Issue #5790](https://github.com/onflow/flow-go/issues/5790))
    - Improve execution data db pruning ([Issue #6138](https://github.com/onflow/flow-go/issues/6138) - in review)
    - Add support for storing exec data using pebble db ([Issue #6017](https://github.com/onflow/flow-go/issues/6017) - in review)
    - Add REST endpoints for getting account keys and balance ([Issue #6000](https://github.com/onflow/flow-go/issues/6000), [Issue #6001](https://github.com/onflow/flow-go/issues/6001))
    - Expand on payer balance checks ([Issue #6128](https://github.com/onflow/flow-go/issues/6128), [Issue #6129](https://github.com/onflow/flow-go/issues/6129), [Issue #6139](https://github.com/onflow/flow-go/issues/6139), [Issue #6141](https://github.com/onflow/flow-go/issues/6141))

* <ins>Cryptography:</ins>
   - SPoCK aggregation: from BLS security proof to BLS aggregation security proof (multiple sprints)

* <ins>Rosetta:</ins>
  - KROK: 
    - Rosetta Cadence updates for Crescendo ([Issue #52](https://github.com/onflow/rosetta/issues/52), [Issue #54](https://github.com/onflow/rosetta/issues/54) - PRs in review)

* <ins>Other:</ins>
  - Prepare for libp2p shipyard deep dive


**On Hold**
* Implement BFT mitigations to enable 20 permissionless ANs

---

### **DeFi** \[Jerome]

Cycle Objective(s): 
- Resolving Circle's existing engineering improvements for USDC on Flow
- Cadence 1.0 DEX Prep - IncrementFi
- EVM partner onboarding: Moralis, Covalent, Ankr, Credora
- Deliver Axelar bridge [PAUSED]

**Done last sprint**
  
**This sprint**
  * [Continue adding missing Access API endpoints to JVM SDK](https://github.com/onflow/flow-jvm-sdk/pull/61)
  * [Continue adding missing Access API subscription endpoints to JVM SDK](https://github.com/onflow/flow-jvm-sdk/pull/58)
  * Continue Celer C1.0 upgrades
  * Review signature and hash updates PRs for JVM-SDK, [1](https://github.com/onflow/flow-jvm-sdk/pull/53) & [2](https://github.com/onflow/flow-jvm-sdk/pull/52)

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
- Fix CLI init feature issue on pre-release with c1: https://github.com/onflow/flow-cli/issues/1669 
- Hook up mock scripts to job runner: https://github.com/onflow/crescendo-rewards-be/issues/14
- Hook up mock tvl script results to db: https://github.com/onflow/crescendo-rewards-be/issues/17
- Hook up mock summaries script to db: https://github.com/onflow/crescendo-rewards-be/issues/19
- Fix alignment on metric card: https://github.com/onflow/crescendo-rewards/pull/36
- Add activity card skeleton loader: https://github.com/onflow/crescendo-rewards/pull/35
- Change “Partners” to “Explore” in navigation: https://github.com/onflow/crescendo-rewards/pull/33
- Got all the Flow controlled contracts staged on mainnet: https://github.com/onflow/docs/issues/716
- Updated marketplace tutorials for Cadence 1.0: https://github.com/onflow/docs/issues/800
- Improve generic token transactions with assertions: https://github.com/onflow/flow-nft/issues/222 , https://github.com/onflow/flow-ft/issues/162
- [Rewards-sc] Compose & align on system design: https://github.com/onflow/crescendo-rewards-sc/issues/8
- [Rewards-sc] Create mocks to unblock app development: https://github.com/onflow/crescendo-rewards-sc/issues/12
- [Rewards-sc] CI testing & Codecov: https://github.com/onflow/crescendo-rewards-sc/issues/6
- [Rewards-sc] Enable lock/unlock functionality: https://github.com/onflow/crescendo-rewards-sc/issues/1
- [Rewards-sc] Add participant summary query functionality: https://github.com/onflow/crescendo-rewards-sc/issues/5
- [Rewards-sc] Create reward accrual model & calculations: https://github.com/onflow/crescendo-rewards-sc/issues/2
- [Rewards-sc] Define & wire up distribution models #4: https://github.com/onflow/crescendo-rewards-sc/issues/4
- [FCL Discovery] Update to NextJS 14 https://github.com/onflow/fcl-discovery/issues/188
- [FCL Discovery] Add Get Wallet Page https://github.com/onflow/fcl-discovery/issues/195
- [FCL Discovery] Wallet names truncated too short https://github.com/onflow/fcl-discovery/issues/166
- [FCL Discovery] Move Configuration into a Context https://github.com/onflow/fcl-discovery/issues/191
- [FCL JS] Misc Typescript Errors https://github.com/onflow/fcl-js/issues/1917 

**This sprint**
**Sprint goal focusing on: Flow Cross VM Bridge, FCL x Discovery Revamp, Crescendo Rewards**

- [EPIC] Crescendo Rewards Portal
  - [FE](https://github.com/onflow/crescendo-rewards/issues/1 )
  - [BE](https://github.com/onflow/crescendo-rewards-be/issues/1)
  - [SC](https://github.com/onflow/crescendo-rewards-sc/issues/7)
- [EPIC FCL WalletConnect + Discovery Improvements](https://github.com/onflow/fcl-js/issues/1872)
- [EPIC Solving Initialization/Storage Issues - Lost and Found FLIP and Port integration](https://github.com/onflow/flow-port/issues/292)
- [EPIC - EVM Bridge - bridge.flow.com](https://github.com/onflow/flow-bridge-app/issues/1)

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

- Ship MigrationNet support for Flow Wallet Extension
- Ship "Homepage 2.0" UI/UX
- Polishing Account Linking UI/UX and functionality
- Continue to best support Secure Enclave
  - User migration from Extension (seed phrase) to mobile (secure enclave) wallet security
  - Explaining differences between seed phrase / SE wallets
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
- Begin prep work to migration to new CloudFlare account

---

### **Governance and Tokenomics** \[Kshitij]
Cycle Objective(s): Transaction fees on EVM, increasing transaction fees and inflation reduction plan.

**Done last sprint**

**This sprint**
- Take all Node branding changes live
- R&D on dynamic fee structure and agreement on v0 algorithm for crescendo launch
- Continue to upgrade Tokenomics pages

**On Hold**


**Active Epics**

- N/A
