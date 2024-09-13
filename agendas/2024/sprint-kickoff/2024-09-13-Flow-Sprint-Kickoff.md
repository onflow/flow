# Overview

### Team Wins 🎉

- Crescendo is LAUNCHED! 🎉💥
- 


### General updates

### OOO
- [Full List](https://www.notion.so/flowfoundation/de89aa4e79364216a665888335a1cdee?v=4de18b26f60d4bae8f62724dddcce260)

---

### Mainnet Uptime - Last 14 days (08/30/24 to 09/13/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    98.04%    |       1964%      |
| Block Finalization      | 99.9%   |    98.04%     |       1964%      |
| Transaction Execution   | 99.9%   |    98.04%     |       1964%      |
| Block Sealing           | 99.9%   |    98.04%     |       1964%      |
| Access API Liveness     | 99.9%   |    98.04%     |       1964%      |

[SLO dashboards](https://flowfoundation.grafana.net/d/hgW3l-m4k/slo-dashboard?orgId=1&from=now-2w&to=now)

YTD SLA: 99.89%
	- Metrika dashboard is deprecated. An alternate dashboard will be set up.

#### SLA situation

- Goal: EOY 99.9% SLA
- [Permissible downtime annually](https://uptime.is/99.9): 8h 41m
- Downtime due to Crescendo upgrade: 6h 36m
- Downtime due to previous HCUs in this year: ~20m (5m per HCU, 4 HCUs so far)
- Remaining budget to hit EOY goal of 99.9%: 1hr 45m

## Incidents

### Mainnet
Post network upgrade incidents -
1. EVM Gateway issue ✔️resolved.
2. Network in Epoch Fallback mode - will be resolved after the next network upgrade.

(Sev [definition](https://www.notion.so/flowfoundation/Incident-Priorities-Severity-Levels-1-e811b352feff4928b69a7e99df724c6a))

### Key Release Dates & Breaking Changes
- Next Mainnet/Testnet network upgrade (spork):
  - Testnet: Wed 18th Sept
  - Mainnet: Wed 25th Sept

---

### FLIPs Tracker \[Kshitij]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 8  |    7  |       0         |       7          |        **22**       |
| Proposed    | 1  |    2    |       3          |       0           |        **6**  |
| Accepted    | 2  |    1     |       2       |       2        |        **7**          |
| Rejected    | 0  |    0     |       1       |       0          |        **1**          |
| Implemented | 3 |    25    |       1       |       0           |        **29**          |
| Released    | 4  |    0     |       4       |       6          |        **14**         |
| Total       | **18**  |    **35**  |       **11**     |       **15**          |        **79**   |

**No New FLIPs**

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

- Objective 1, KR5: Mainnet Upgrade to Crescendo Release
  - Investigate and fix any high/critical severity issues reported on Crescendo on TN ([Crescendo launch on Mainnet tasklist](https://github.com/onflow/cadence/issues/2642))
  - Investigate / Fix any security report incoming from bug bounty.

- Objective 2, KR 1: Update transaction fees weights for the execution operations on TN and MN
  -  Continue work on [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)

- Cadence Execution
  - Continue: [Add support for storage health check of EVM registers](https://github.com/onflow/flow-go/issues/6393)
  - Continue: [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

- EVM 
  - Continue monitoring EVM GW stability
  - Continue work on [local state index](https://github.com/onflow/flow-evm-gateway/issues/322)
  - KROK
     - EVM Gateway benchmarking

- EVM Gateway
  - continue work on [Benchmarking](https://github.com/onflow/flow-evm-gateway/issues/19)

- Badger -> Pebble Investigation/POC
  - Continue work on [Protocol State Migration POC](https://github.com/onflow/flow-go/issues/6137) -> changing interface to batch write from transaction to make the future switch to Pebble easier.

**Completed OKRs**
  * Objective 1, KR1: Enable Developers and the Flow Foundation to simulate Cadence 1.0 Contract upgrades
    * All breaking  released in a new CLI: v1.18.0-cadence-v1.0.0-preview.26
  * Objective 1, KR4: Testnet Upgrade to Crescendo Release
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
    - Add StopControl for access nodes ([PR #6202](https://github.com/onflow/flow-go/pull/) - In review)


**This sprint**

* <ins>EFM Recovery</ins>
  - DKG smart contract updates (cont.)
  - Final feedback and merge [EFM Recovery transaction](https://github.com/onflow/flow-core-contracts/pull/440) PR
  - Address feedback [EFM integration test part 2](https://github.com/onflow/flow-go/issues/6164), [PR](https://github.com/onflow/flow-go/pull/6424)
  - EFM Ejected node integration test https://github.com/onflow/flow-go/issues/6331
  - Allowing DKG key-sets to be re-used to recover from Epoch Fallback Mode, even if nodes are dropping out ([PR #6338](https://github.com/onflow/flow-go/pull/6338) ongoing) 

* <ins>Data Availability:</ins>
  - KROK Team
    - Expand on payer balance checks ([Issue #6129](https://github.com/onflow/flow-go/issues/6129) - In review, [Issue #6139](https://github.com/onflow/flow-go/issues/6139) - In review)
    - Registers db pruning ([Issue #6066](https://github.com/onflow/flow-go/issues/6066) - In review, [Issue #6068](https://github.com/onflow/flow-go/issues/6068) - In review)
    - Store Tx Result in database ([Issue #6302](https://github.com/onflow/flow-go/issues/6302) - In progress)
    - Test pebble execution data db on testnet ([Issue #6357](https://github.com/onflow/flow-go/issues/6357) - In progress)
    - Documentation improvements ([Issue #815](https://github.com/onflow/docs/issues/815) - In review, [Issue #727](https://github.com/onflow/docs/issues/727) - In review)
    - Access API / Go SDK alignment ([Issue #735](https://github.com/onflow/flow-go-sdk/issues/735))

* <ins>Cryptography:</ins>
  - State proofs: performance estimations of some VC/set accumulator constructions
  - Pick up SPoCK aggregation related reads if time permits

* <ins>Misc other</ins>
  - Ongoing Pebble migration PR reviews

**On Hold**
* Implement BFT mitigations to enable 20 permissionless ANs

---

### **DeFi** \[Jerome]

Cycle Objective(s): 
- EVM partner onboarding
- Deliver Axelar bridge

**Done last sprint**
  
**This sprint**
  * Continue supporting Celer, Axelar and other key partners
  * Complete remaining JVM-SDK examples
  
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
- Update developer docs to remove previewn net and added new documentation for EVM data indexers

**Done last sprint**

**Crescendo Rewards** 

Contracts
- [Replace AccrualModel.getWeightedAPR() with .getBoost()](https://github.com/onflow/crescendo-rewards-sc/issues/66)
- [Respond to review findings](https://github.com/onflow/crescendo-rewards-sc/issues/67)
- [Add svg render](https://github.com/onflow/crescendo-rewards-sc/pull/69)
- [Finalize naming conventions & refactor](https://github.com/onflow/crescendo-rewards-sc/issues/70)
- [Mainnet deployment](https://github.com/onflow/crescendo-rewards-sc/issues/77)

Backend

- [Fix @onflow/types error in logs](https://github.com/onflow/crescendo-rewards-be/issues/157)
- [Fix Blocto Login](https://github.com/onflow/crescendo-rewards-be/issues/155)
- [Secure referrals api routes using address in referral code](https://github.com/onflow/crescendo-rewards-be/issues/141)
- [Move address validation into middleware](https://github.com/onflow/crescendo-rewards-be/issues/140)
- [Setup cors with correct urls](https://github.com/onflow/crescendo-rewards-be/issues/137)
- [Add referral verification route](https://github.com/onflow/crescendo-rewards-be/issues/122)
- [Rewards APIs](https://github.com/onflow/crescendo-rewards-be/issues/114)
- [Add user signature fallback for /verify](https://github.com/onflow/crescendo-rewards-be/issues/112)
- [Setup production environment](https://github.com/onflow/crescendo-rewards-be/issues/108)
- [add scripts for cadence 1.0](https://github.com/onflow/crescendo-rewards-be/issues/99)
- [Deploy contracts to migrationnet](https://github.com/onflow/crescendo-rewards-be/issues/86)
- [Hook up to testnet](https://github.com/onflow/crescendo-rewards-be/issues/85)
- [Get job running on staging](https://github.com/onflow/crescendo-rewards-be/issues/84)
- [Setup ratelimiting with redis](https://github.com/onflow/crescendo-rewards-be/issues/83)
- [Secure any routes that need to be protected](https://github.com/onflow/crescendo-rewards-be/issues/60)
- [Create referrals schema and helpers](https://github.com/onflow/crescendo-rewards-be/issues/45)
- [Switch job runner from mock scripts to real on chain data](https://github.com/onflow/crescendo-rewards-be/issues/34)

Frontend

- [Round leaderboard entries to nearest $FLOW](https://github.com/onflow/crescendo-rewards/issues/282)
- [Add formatter for referral codes](https://github.com/onflow/crescendo-rewards/issues/280)
- [Add more slides to carousel](https://github.com/onflow/crescendo-rewards/issues/238)
- [Increase boost precision](https://github.com/onflow/crescendo-rewards/issues/226)
- [Error displayed after logging in](https://github.com/onflow/crescendo-rewards/issues/196)
- [Use SWR for activity hook](https://github.com/onflow/crescendo-rewards/issues/194)
- [Verify referral code in form](https://github.com/onflow/crescendo-rewards/issues/182)
- [Add lock period countdown](https://github.com/onflow/crescendo-rewards/issues/140)
- [Setup WalletConnect](https://github.com/onflow/crescendo-rewards/issues/137)
- [Link to block explorer](https://github.com/onflow/crescendo-rewards/issues/275)
- [Add logic for minting a new nft even if you have an existing one](https://github.com/onflow/crescendo-rewards/issues/274)
- [Coming soon partner page](https://github.com/onflow/crescendo-rewards/issues/219)
- [Get account balance in hook](https://github.com/onflow/crescendo-rewards/issues/206)
- [[FEATURE] Add 25%, 50%, and MAX buttons for Lock Input](https://github.com/onflow/crescendo-rewards/issues/205)
- [[FEATURE] Improve Layout For Mobile](https://github.com/onflow/crescendo-rewards/issues/192)
- [Make total value locked use animated component when increment when changed](https://github.com/onflow/crescendo-rewards/issues/191)
- [Maintenence Mode from Env Var](https://github.com/onflow/crescendo-rewards/issues/189)
- [Add boost to subheader](https://github.com/onflow/crescendo-rewards/issues/185)
- [Animated value component](https://github.com/onflow/crescendo-rewards/issues/177)
- [Distribution lock period, pre lock countdown, and other countdown card logic](https://github.com/onflow/crescendo-rewards/issues/172)
- [Update partner card to match mock](https://github.com/onflow/crescendo-rewards/issues/129)
- [Add jwt to account route](https://github.com/onflow/crescendo-rewards/issues/112)
- [Remove dapper auth and show modal instead](https://github.com/onflow/crescendo-rewards/issues/107)
- [Add rules dialogs](https://github.com/onflow/crescendo-rewards/issues/106)
- [Non connected wallet state on lock page](https://github.com/onflow/crescendo-rewards/issues/100)

X-Chain Axelar Bridge
- [Flow Bridge App Epic](https://github.com/onflow/flow-bridge-app/issues/1)
Waiting for Axelar contract deployment to testnet

FCL Discovery
- Shipped FCL Discovery V2 Improvements
- [Don't show install links for unsupported browsers](https://github.com/onflow/fcl-discovery/issues/259)
- [[V2] Milestone 2 - UI Completeness](https://github.com/onflow/fcl-discovery/issues/210)

FCL
- [Allow FCL Discovery to Display WalletConnect QR Codes while open](https://github.com/onflow/fcl-js/issues/1923)
- [Allow FCL Discovery to Execute Extension While Open](https://github.com/onflow/fcl-js/issues/1924)
- [[BUG] Dapper Wallet problems with Newer Releases](https://github.com/onflow/fcl-js/issues/1818)

Flow CLI
- [Include EVM stdlib in staging update validator](https://github.com/onflow/flow-cli/pull/1697)

Public Key Indexer 
- [Update for Cadence v1](https://github.com/onflow/flow-public-key-indexer/issues/17)

**This sprint**
**Sprint goal Crescendo Readiness / Flow Axelar Cross-chain Bridge / Documentation Updates, Crescendo Rewards, Lost and Found (Integration - Flow Port, Flow Wallet)**

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


**On Hold**

- N/A

**Active Epics**

- TBD

---

### **Infra - JP**
Cycle Objective(s): 
- Prepare flow.com, onflow.org & nodes.onflow.org domains for CloudFlare account migration
- Prepare to spork FF & DL nodes 

**Done last sprint**

**This sprint**

Rewards platform tracker [link](https://github.com/orgs/onflow/projects/65/views/1)
- Drive updates for 09/04 - design, copy, legal changes, revise FAQs, migration downtime
- For Season 1 (10/01 launch)
  - Unblock eng on reward distribution part of the product
  - Drive final decisions on points system, referral bonus, raffles, etc
	- Drive partner discussions - defilama, auditor, anti-sybil, etc.
  - Drive design and copy per the rebranding plan (tbd)
- Continue working with Dete on stable state tokenomics
- Discuss with a16z their node consolidation strategy

**On Hold**


**Active Epics**

- N/A
