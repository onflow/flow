# Overview

### Team Wins 🎉
- Successfully tested new Flow bridge UI, testing bridging axlUSDC from base to polygon
- Stopped ours and partner Consensus nodes from going OOM by adding a new config flag (`GOMEMLIMIT=12GiB`)
- Completed diffing of transaction re-execution on inlined vs non-inlined state and validated there are no unexpected changes.
- Cadence 1.0 feature branch with Atree register inlining support merged to flow-go master.
- Implementation for handling of broken contracts (FLIP 282) deployed on Migration testnet.



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
| Drafted     | 8  |    8 (-1)  |       0         |       7          |        **23** (-1)       |
| Proposed    | 1  |    2    |       3 (+1)          |       0           |        **6** (+1)        |
| Accepted    | 2  |    1     |       2       |       2 (+1)          |        **7** (+1)          |
| Rejected    | 0  |    0     |       1       |       0          |        **1**          |
| Implemented | 3 |    24 (+2)    |       1       |       0           |        **28**          |
| Released    | 4  |    0     |       4 (+1)       |       6          |        **14** (+1)          |
| Total       | **18** (+1)  |    **35** (+1)  |       **11** (+1)      |       **15**          |        **79** (+3)      |

**Updates**
* Crescendo Network Upgrade - proposed
* Changing import statement semantics - accepted
* Import of pre-Cadence 1.0 Programs - proposed and accepted

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

**State migration for Crescendo release**
- [Merge atree inlining cadence v1.0](https://github.com/onflow/flow-go/pull/6275)
- [Handle broken contracts](https://github.com/onflow/cadence/issues/3480)
- [Add migration to setup EVM heartbeat resource](https://github.com/onflow/flow-go/pull/6251)
- Improvemnts:
    - [Migrate capability values targeting storage paths](https://github.com/onflow/cadence/pull/3503) - covers a new edge case discovered recently.
    - [Always report checking errors for system contracts](https://github.com/onflow/flow-go/pull/6280)
    - [Improve reporting of cyclic link migration errors](https://github.com/onflow/flow-go/pull/6279)
    - [Fix non-determinism in contract code and contract names cleanup migration](https://github.com/onflow/flow-go/pull/6276)
    - [Add stack traces back to unexpected errors](https://github.com/onflow/cadence/pull/3492)
    - [Bring back members of path capability value](https://github.com/onflow/cadence/pull/3486)
    - [Improve EVM contract migration](https://github.com/onflow/flow-go/pull/6249)
- Bugfix:
    - [Fix execution state extraction](https://github.com/onflow/flow-go/pull/6242)
- tooling:
    - [Add command to run a script](https://github.com/onflow/flow-go/pull/6231) - using payloads file or trie + state commitment

**Cadence Language**
- Improvements:
    - [Return user error when CCF encodes attachment field](https://github.com/onflow/cadence/pull/3494)
    - [Add an empty implementation of runtime.Interface](https://github.com/onflow/cadence/pull/3485)
    - [Improve intersected type error message](https://github.com/onflow/cadence/pull/3483)
- Bugfixes:
    - [Data race for empty strings](https://github.com/onflow/cadence/issues/3477)
    - [Problems loading values and @AnyResource](https://github.com/onflow/cadence/issues/3491)
- Testing:
    - [Add checker tests for nil-coalesce type inference](https://github.com/onflow/cadence/pull/3495)

**Cadence Execution**
- Improvement: 
    - [Use Cadence's empty and test runtime.Interface implementations](https://github.com/onflow/flow-go/pull/6258)

**EVM Core**
- Feature:
    - [Extending block hash lookup range to the last 256 with minimum storage overhead](https://github.com/onflow/flow-go/pull/6226)
- Improvements:
    - [Improve event emission](https://github.com/onflow/flow-go/pull/6224)
    - [Skip tx debug tracing operation if unsafe](https://github.com/onflow/flow-go/pull/6262)
    - [technical debt removal - part1](https://github.com/onflow/flow-go/pull/6243)
    - [Refactoring precompiled contract call tracker](https://github.com/onflow/flow-go/pull/6232)
    - [Adding metrics to the EVM](https://github.com/onflow/flow-go/pull/6233)
- Bugfixes:
    - [Trace supplied with invalid error](https://github.com/onflow/flow-go/pull/6268)
    - [fix the issue with the new Geth tracing](https://github.com/onflow/flow-go/pull/6261)

**EVM Gateway**
- Breaking change:
    - [Fixes required for flow-go breaking changes](https://github.com/onflow/flow-evm-gateway/pull/383)
- Bugfixes:
    - [Single bloom decoding ](https://github.com/onflow/flow-evm-gateway/pull/403)
    - [Bugfix to avoid decoding empty blooms](https://github.com/onflow/flow-evm-gateway/pull/399)
    - [Return storage copy of data](https://github.com/onflow/flow-evm-gateway/pull/397)
    - [Bugfix nil value in log](https://github.com/onflow/flow-evm-gateway/pull/379)
    - [Update check for empty `RemoteAddr` in `rateLimit` function](https://github.com/onflow/flow-evm-gateway/pull/392)
    - [Match behavior regarding JSON-RPC APIs with default block parameter](https://github.com/onflow/flow-evm-gateway/issues/398)
    - [eth_getBlockByNumber() not responsive to 'earliest' flag](https://github.com/onflow/flow-evm-gateway/issues/371)
    - [Include the transactionsRoot hash in block response](https://github.com/onflow/flow-evm-gateway/issues/389)
    - [Calculate size field on JSON-RPC calls that return block info](https://github.com/onflow/flow-evm-gateway/issues/375)
    - [Update eth_syncing call to match JSON-RPC API specification](https://github.com/onflow/flow-evm-gateway/issues/376)
    - [Calculate properly the CumulativeGasUsed field for transaction receipts](https://github.com/onflow/flow-evm-gateway/issues/357)
    - [Populate the LogsBloom field, even for blocks without any transactions](https://github.com/onflow/flow-evm-gateway/issues/372)
- Improvements:
    - [Update CadenceEvents.Empty() function to avoid decoding EVM blocks twice](https://github.com/onflow/flow-evm-gateway/pull/368)
    - [Add support for `EVM.heartbeat` resource on system chunk transaction](https://github.com/onflow/flow-emulator/pull/717)
    - [Handle custom block numbers in eth_estimateGas endpoint](https://github.com/onflow/flow-evm-gateway/issues/380)
    - Improved transaction error formatting
        - [Use different error wrapping](https://github.com/onflow/flow-evm-gateway/pull/413)
    - [Improve error reporting](https://github.com/onflow/flow-evm-gateway/issues/350)
    - [Improve API error handling](https://github.com/onflow/flow-evm-gateway/pull/370)
    - [Improve error wrapping](https://github.com/onflow/flow-evm-gateway/issues/70)
    - [Use past block decoder](https://github.com/onflow/flow-evm-gateway/pull/395)
    - [Pending transaction event from pool](https://github.com/onflow/flow-evm-gateway/pull/374)
    - [Event broadcasting improvements](https://github.com/onflow/flow-evm-gateway/pull/334)
- Testing:
    - [Add an example test case for utilizing the `Multicall3` contract](https://github.com/onflow/flow-evm-gateway/pull/369)

**This sprint**

 - Objective 1, KR4: Testnet Upgrade to Crescendo Release
   - Continue: [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)
   - Investigate / Fix any security report incoming from bug bounty.
   - Upgrade TN to Crescendo release

 - Objective 2, KR 1: Update transaction fees weights for the execution operations on TN and MN
   -  Continue work on [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)

- EVM 
  - Continue testing EVM GW stability
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

* <ins>Cryptography</ins>
  - java-SDK
    - hashing clean up and new algos support ([merged](https://github.com/onflow/flow-jvm-sdk/pull/52))
    - refactor ECDSA signing and support the SEC curve ([merged](https://github.com/onflow/flow-jvm-sdk/pull/71))
  - looking at vector commitments papers for state proof optimizations ([summary](https://www.notion.so/flowfoundation/State-proofs-with-vector-commitments-b02d962a88b349d0be52e57eee3f6695))

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
  - java-SDK: more tests on transaction signing and prepare for a release
  - crypto module: integrate the new BLST release
  - back to SPoCK aggregation if possible: contine with BLS aggregation security proofs

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

**FCL Discovery**
- [Revamp Milestone 1 - Collapsed View](https://github.com/onflow/fcl-discovery/issues/193)
  - Add "Get Wallet" Page
  - Combine mobile/extension wallets of same provider
  - Add "Connect Wallet" Page where users select desired platform
  - Fix Sentry issues
  - Convert frontend to use `/api/wallets` route

**VS Code Extension**
- `textDocument/documentSymbol` failed keeps showing

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
- Migrate CloudFlare zones to new account
- Prepare for Crescendo TN spork
- Assist with EVM GW monitoring & preparation

**Done last sprint**

**CloudFlare Migration**
- [Create DNS records & zones](https://github.com/dapperlabs/terraform/pull/4297)
- [Create duplicate BN2 records](https://github.com/dapperlabs/flow-benchnet-automation-infrastructure/pull/49)
- [Create duplicate DevEx records](https://github.com/dapperlabs/flow-devex-infrastructure/pull/186)
- Migration cadencelang.dev zone
- Migrate cadence-lang.org zone
- Migrate cast.fyi zone

**Node Hosting**
- [Create Secondary Bucket for EVM traces on Previewnet](https://github.com/dapperlabs/terraform/pull/4313)
- [Create Previewnet 2 network](https://github.com/dapperlabs/terraform/pull/4314)
- [Create Previewnet2 Ansible configuration](https://github.com/dapperlabs/dapper-flow-hosting/pull/1547)
- [Scale down Previewnet1](https://github.com/dapperlabs/terraform/pull/4315)
- [Update Memory on Mainnet SNs](https://github.com/dapperlabs/terraform/pull/4307)
- [Define systemd configuration for running AN binary](https://www.notion.so/flowfoundation/Access-Node-with-Binary-ca06681fb8334e9289451c93e71bc482)

**System Performance**
- Evaluate GOMEMLIMIT & kernel parameter impact on VM stability
- Enable GOMEMLIMIT on DL & FF Collection Nodes to limit churn

**Benchnet2**
- [Evaluate long-lived network with increased disk space](https://github.com/onflow/flow-go/pull/6256)

**This Sprint**
- Continue Migrating CloudFlare zones 
- Prepare EVM Gateway for TN Network Upgrade
- Prepare Infra & configuration for TN Network upgrade
- Assist with EVM Gateway Monitoring & Alerting

---

### **Governance and Tokenomics** \[Kshitij]
Cycle Objective(s): Transaction fees on EVM, increasing transaction fees and inflation reduction plan.

**Done last sprint**
- T-systems contract for continued lease & additional delegation
- Work with Dete on future fee on Flow (not be launched with Crescendo launch)

**This sprint**
- Work with T-systems team to get their execution node live
- Continue supporting rewards platform team on Tokenomics related analysis
- Model stable state economics, throughput, fees and inflation
- Draft research doc that explains the vision
- Organize monthly GWG

**On Hold**


**Active Epics**

- N/A
