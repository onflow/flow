# Overview

### Team Wins 🎉
- Successfully tested new Flow bridge UI, testing bridging axlUSDC from base to polygon
- Stopped ours and partner Consensus nodes from going OOM by adding a new config flag (`GOMEMLIMIT=12GiB`)


### General updates

### OOO
- [Full List](https://www.notion.so/flowfoundation/de89aa4e79364216a665888335a1cdee?v=4de18b26f60d4bae8f62724dddcce260)

---

### Mainnet Uptime - Last 14 days (07/19/24 to 08/01/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    100%       |       0%         |
| Block Sealing           | 99.9%   |    100%       |       0%         |
| Access API Liveness     | 99.9%   |    99.833%    |       167%       |

[SLO dashboards](https://flowfoundation.grafana.net/d/hgW3l-m4k/slo-dashboard?orgId=1&from=now-2w&to=now)

[YTD SLA: 99.922%](https://app.metrika.co/flow/dashboard/slas?tr=YTD)

## Incidents

### Mainnet
- Sev 4 - 07/18: Consensus nodes crashed intermittently due to OOM. [Slack thread](https://flow-foundation.slack.com/archives/CUU2KQL4A/p1721310960751829)

(Sev [definition](https://www.notion.so/flowfoundation/Incident-Priorities-Severity-Levels-1-e811b352feff4928b69a7e99df724c6a))

### Key Release Dates & Breaking Changes
- Next Mainnet/Testnet network upgrade (spork):
  - Testnet: Aug 14th 8:00 AM PT (3:00 PM UTC). Duration: 6 hours
  - Mainnet: Sept 4th **5:00 AM PT** (12:00 PM UTC). Duration: 6 hours

---

### FLIPs Tracker \[Kshitij]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 8  |    9  |       0         |       7          |        **24** (+1)       |
| Proposed    | 1  |    2    |       2          |       0           |        **5**        |
| Accepted    | 2  |    1     |       2       |       1          |        **6**          |
| Rejected    | 0  |    0     |       1       |       0          |        **1**          |
| Implemented | 3 |    22    |       2       |       1           |        **28**          |
| Released    | 4  |    0     |       3       |       6          |        **13**          |
| Total       | **17** (+1)  |    **34**  |       **10**      |       **15**          |        **76** (+1)      |

**Updates**
* [Application] - Integrating with the Lost and Found contract (drafted)
* FLIPs that haven't moved in a while or need new owners or have old statuses
  - Application -
    - Interaction Templates
    - Pool-Based DEX Swap Standard
    - FCL Authz/Pre-Authz v2.0.0 Specification
    - Contracts Import Syntax
   - Cadence
     - New behavior for attachments with entitlements
     - Type Removal In Contract Updates
     - Optional References to Indexed Accesses
     - Next version changes to FLIX
     - Attachments
     - Mutability Restrictions
     - Cadence Storage API Improvements
     - Reference Creation Semantics
     - View Functions
     - Entitlements
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
   - Investigate how we could [keep the values of contracts not upgraded to Cadence 1.0 working](https://www.notion.so/flowfoundation/Keep-values-with-types-of-broken-contracts-working-7a57ddf83a50456da6851ed1f65e26a9)
   - Continue [comparison of execution states before and after the atree inlining](https://github.com/onflow/atree/issues/292)
   - Continue: [Add support for composites with attachment to CCF encoder](https://github.com/dapperlabs/cadence-internal/issues/241)
   - [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)
   - Investigate / Fix any security report incoming from bug bounty.

 - Objective 2, KR 1: Update transaction fees weights for the execution operations on TN and MN
   -  Continue work on [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)

- EVM 
   - KROK
     - EVM Gateway benchmarking

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
* Reduce CPU usage on Execution node by 30% [DONE]
* Translate crypto performance improvements to consensus block rate increase [DONE]
* Continue design and implementation of Sporkless Epoch Fallback Recovery solution [DONE]

**Done last Sprint:**

* <ins>Data Availability:</ins>
  - KROK Team
    - Implement VersionControl module ([PR #5984](https://github.com/onflow/flow-go/pull/5984))
    - Improve execution data db pruning ([PR #6217](https://github.com/onflow/flow-go/pull/6217))
    - Add support for storing exec data using pebble db ([PR #6180](https://github.com/onflow/flow-go/pull/6180))
    - Add REST endpoints for getting account keys and balance ([PR #6218](https://github.com/onflow/flow-go/pull/6218), [PR #6253](https://github.com/onflow/flow-go/pull/6253))

* <ins>EFM Recovery</ins>
  - [Epoch Extensions Benchnet Testing](https://www.notion.so/flowfoundation/EFM-Recovery-Benchnet-Testing-Crescendo-Release-1bbd4eabe1ee41688b51ee7487c84822?pvs=4)
  - Merged EFM Recovery feature branch for Crescendo release
    - This includes epoch extension and protocol state machine recovery logic
    - Excludes smart contract changes
  - EFM Recovery Process
    - [Integration Testing](https://github.com/onflow/flow-go/issues/6164) - test full recovery happy path
    - [Smart contract changes](https://github.com/onflow/flow-core-contracts/pull/440)
    - Adding EFM Recovery parameters to KVStore ([1](https://github.com/onflow/flow-go/pull/6272), [2](https://github.com/onflow/flow-go/pull/6209), [3](https://github.com/onflow/flow-go/pull/6229))

**This sprint**

* <ins>EFM Recovery</ins>
  - EFM Recovery Process (cont.)
    - [Integration Test](https://github.com/onflow/flow-go/issues/6164) - test failure cases
    - [Smart contract changes](https://github.com/onflow/flow-core-contracts/pull/440) 
  - [DKG Data Model](https://github.com/onflow/flow-go/issues/6214)
    - Modifying data model for DKG outputs to support DKG committee != consenssu committee
  
* <ins>Data Availability:</ins>
  - ProtocolDB pruning design
  - Testing ChunkDataPack DB pruning PoC
  - KROK Team
    - Add support for version beacon events to control script execution ([Issue #5789](https://github.com/onflow/flow-go/issues/5789) - In review, [Issue #5790](https://github.com/onflow/flow-go/issues/5790))
    - Add support pruning pebble exec data db ([Issue #6260](https://github.com/onflow/flow-go/issues/6260))
    - Add REST endpoints for getting account keys and balance ([Issue #6228](https://github.com/onflow/flow-go/issues/6228) - in review)
    - Expand on payer balance checks ([Issue #6128](https://github.com/onflow/flow-go/issues/6128), [Issue #6129](https://github.com/onflow/flow-go/issues/6129), [Issue #6139](https://github.com/onflow/flow-go/issues/6139))
    - Start registers db pruning ([Issue #6066](https://github.com/onflow/flow-go/issues/6066), [Issue #6068](https://github.com/onflow/flow-go/issues/6068))

* <ins>Cryptography:</ins>
   - Continue state proof brainstorm and research
   - java-SDK: merge the hashing PR + create signing issues
   - SPoCK aggregation research/analysis: will continue over more sprints

* <ins>Rosetta:</ins>
  - KROK: 
    - Rosetta Cadence updates for Crescendo ([Issue #52](https://github.com/onflow/rosetta/issues/52), [Issue #54](https://github.com/onflow/rosetta/issues/54) - PRs in review)

* <ins>Protocol misc</ins>
  - Preparing for Testnet Spork
    - [Consensus Timing Changes]([url](https://flowfoundation.notion.site/Cruise-Control-headroom-for-speedups-46dc17e07ae14462b03341e4432a907d?pvs=4))


**On Hold**
* Implement BFT mitigations to enable 20 permissionless ANs

---

### **DeFi** \[Jerome]

Cycle Objective(s): 
- Resolving Circle's existing engineering improvements for USDC on Flow
- Cadence 1.0 DEX Prep - IncrementFi
- EVM partner onboarding
- Deliver Axelar bridge [PAUSED]

**Done last sprint**
  
  
  
**This sprint**
  * JVM-SDK 
    * Review [Add missing Access API subscription endpoints to JVM SDK](https://github.com/onflow/flow-jvm-sdk/pull/58)
    * Complete [Add missing Access API endpoints](https://github.com/onflow/flow-jvm-sdk/pull/63)
    * Review signature and hash update PRs, [1](https://github.com/onflow/flow-jvm-sdk/pull/53) & [2](https://github.com/onflow/flow-jvm-sdk/pull/52)
    * Merge: [Migrate SDK examples repo to improved project structure](https://github.com/onflow/flow-jvm-sdk/pull/62)
    * [Update Cadence to 1.0](https://github.com/onflow/flow-jvm-sdk/issues/60)
  * Partner support
    * Install Ethereum Attestion Service (EAS) on Previewnet (Credora requirement)

**On Hold**

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

**[Crescendo Rewards Contracts](https://github.com/orgs/onflow/projects/13/views/85?pane=issue&itemId=66448908)**
- Update Accrual & DistributionModel setters + fix _claimDistribution
- Add minimum lockup field + setter
- Reach +80% test coverage
- Add tests and docs
- Add relevant traits to NFT
- Rename nonce to sequence
- Update getPaginatedRegistry interface for finer control over return size
- Add paginated Overview functionality

**[Crescendo Rewards Backend](https://github.com/onflow/crescendo-rewards-be/issues/1)**
- Trigger activity creation from job results
- Hook up mock summaries script/job to db
- Use mock script to get account reward summaries
- Mock account API with multiple rewards summaries
- Change leaderboard to resource model
- Switch total locked from accounts to stats in db
- Update schema to match new data structure
- Run tests in CI
- Add logger

**[Crescendo Rewards Frontend](https://github.com/onflow/crescendo-rewards/issues/1)**
- Create step boxes and container components
- Create progress bar component
- Create new partner card
- Make page header
- Add Flow logo and trophy icon to leaderboard
- Update “days until” distribution card with progress, button, and time countdown
- Update header layout and add disconnect dropdown
- Add logo vis icon option to TVL card
- Create NFT carousel section on rewards page
- Hook up to account API
- Change leaderboard to resource model
- Move activities section to below metric cards
- Hook up recent activity component to API
- Switch activity API example data to new data format
- Improve UI around account proof slowness
- Add Dapper Wallet as a login option

**Hybrid Custody Contracts**
- [DEPLOYMENT] Deploy to Previewnet and update deployment details
- Migration Contract Staging Contract
- [BUG] Running into event limits on staging for long contracts


**This sprint**
**Sprint goal focusing on: Flow Cross VM Bridge, FCL x Discovery Revamp, Crescendo Rewards**

- wUSDC Swap UI (Flow Port)
- [wUSDC Contract](https://github.com/onflow/bridged-usdc) 
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

- Continue & Ship Account Linking UI/UX and functionality
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
- Send out T-systems contract for continued lease and additional delegation; work with team to get the node live
- Continue supporting rewards platform team on Tokenomics related analysis
- Agreement with Dete and team on MVP of dynamic fee to be launched with Crescendo launch
- Draft FLIP for dynamic fee
- Identify next steps for Coinbase node operation

**On Hold**


**Active Epics**

- N/A
