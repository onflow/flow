# Overview

### Team Wins 🎉
- Crescendo live on Testnet!


### General updates

### OOO
- [Full List](https://www.notion.so/flowfoundation/de89aa4e79364216a665888335a1cdee?v=4de18b26f60d4bae8f62724dddcce260)

---

### Mainnet Uptime - Last 14 days (08/02/24 to 08/15/24) \[Vishal]

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


**Cadence Language**
- Approved [FLIP 282: Import of pre-Cadence 1.0 Programs](https://github.com/onflow/flips/pull/283)
- Contract update checker improvement: [Check updated contract name](https://github.com/onflow/cadence/pull/3530)

**Cadence Execution**
- Utility
    - [Add a command to print all system addresses](https://github.com/onflow/flow-go/pull/6339)
    - [Add support for detecting differing accounts](https://github.com/onflow/flow-go/pull/6225)
- Atree improvement, enables simplifying of flow-go and Cadence codebase:
    - [Add utility function SlabID.Address()](https://github.com/onflow/atree/issues/431)
- CBOR improvement:
    - [Add functions to check availablility of CBOR tag numbers](https://github.com/onflow/atree/pull/434)

**EVM Core**
- Bugfixes (Axelar blockers):
    - [Patch storage root value issue](https://github.com/onflow/flow-go/pull/6295)
    - [Deprecate legacy self destruct in the storage](https://github.com/onflow/flow-go/pull/6289)
- Improvements:
    - [skip debug trace uploading step if bucket name is empty](https://github.com/onflow/flow-go/pull/6335)
    - [patch evm debug tracer to collect results and reset internal state after each tx execution](https://github.com/onflow/flow-go/pull/6327)
    - [Populate all fields for the genesis block](https://github.com/onflow/flow-go/pull/6325)
    - [port missing tracing updates to previewnet](https://github.com/onflow/flow-go/pull/6324)
    - [improve debug tracing](https://github.com/onflow/flow-go/pull/6299)
    - [patch backoff block loading](https://github.com/onflow/flow-go/pull/6286)
    - [code and doc clean up](https://github.com/onflow/flow-go/pull/6252)

**EVM Gateway**
- Features:
    - [Index only mode](https://github.com/onflow/flow-evm-gateway/pull/416)
    - [Ensure indexing is idempotent](https://github.com/onflow/flow-evm-gateway/issues/400)
- Bugfixes:
    - [eth_getLogs does not validate the topics length](https://github.com/onflow/flow-evm-gateway/issues/422)
    - [Block tags are not supported for eth_getTransactionByBlockNumberAndIndex](https://github.com/onflow/flow-evm-gateway/issues/419)
    - [Block tags are not supported in eth_getBlockTransactionCountByNumber](https://github.com/onflow/flow-evm-gateway/issues/418)
    - [eth_getBlockByNumber() not responsive to 'earliest' flag](https://github.com/onflow/flow-evm-gateway/issues/371)
- Improvements:
    - [Derive storage address from chain id](https://github.com/onflow/flow-evm-gateway/pull/435)
    - [Report API crashers](https://github.com/onflow/flow-evm-gateway/issues/384)
    - [General improvements to the metrics](https://github.com/onflow/flow-evm-gateway/pull/424)
    - [Add lock during transaction build](https://github.com/onflow/flow-evm-gateway/pull/421)
    - [Fix error logging](https://github.com/onflow/flow-evm-gateway/pull/438)
    - [Remove Genesis block patch introduced for PreviewNet ](https://github.com/onflow/flow-evm-gateway/pull/434)
    - [Minor fixes](https://github.com/onflow/flow-evm-gateway/pull/431)
- Testing:
    - [E2E network test improvements](https://github.com/onflow/flow-evm-gateway/pull/436)
    - [Add live network tests](https://github.com/onflow/flow-evm-gateway/pull/432)

**Crescendo TN upgrade**
- State migration fixes & improvements:
    - Fixing capability migration (discovered during setting network addresses on migrationmainnet):
        - [Report the stored path of the untyped-capability](https://github.com/onflow/flow-go/pull/6328)
        - [Add capability stored path info to the report](https://github.com/onflow/cadence/pull/3524)
        - [Improve storage path capability migration reporting](https://github.com/onflow/cadence/pull/3522)
        - [Improve borrow type inferrence for storage path capabilities](https://github.com/onflow/cadence/pull/3520)
        - [Infer missing borrow type for storage capabilities](https://github.com/onflow/cadence/pull/3519)
        - [Improve storage capability migration](https://github.com/onflow/flow-go/pull/6322)
        - [Avoid conversion from sema-type to StaticType in storage cap migration](https://github.com/onflow/cadence/pull/3517)
        - [Improve storage capability migration](https://github.com/onflow/cadence/pull/3516)
        - [Merge and commit changes after issuing cap cons](https://github.com/onflow/flow-go/pull/6315)
        - [Report and skip storage caps with no borrow type](https://github.com/onflow/flow-go/pull/6312)
        - [Fix migration of storage path capabilities](https://github.com/onflow/flow-go/pull/6306)
        - [Set capability issue handler in capability value migration](https://github.com/onflow/flow-go/pull/6303)
- Dependency updates: [1](https://github.com/onflow/flow-cli/pull/1696), [2](https://github.com/onflow/flow-evm-gateway/pull/430), [3](https://github.com/onflow/flixkit-go/pull/74), [4](https://github.com/onflow/cadence-tools/pull/413), [5](https://github.com/onflow/flowkit/pull/69), [6](https://github.com/onflow/cadence-tools/pull/412), [7](https://github.com/onflow/flow-emulator/pull/728), [8](https://github.com/onflow/cadence-tools/pull/411), [9](https://github.com/onflow/flow-go-sdk/pull/726), [10](https://github.com/onflow/flow-go-sdk/pull/725), [11](https://github.com/onflow/flow-go/pull/6326), [12](https://github.com/onflow/flow-go/pull/6326), [13](https://github.com/onflow/flow-go-sdk/pull/724), [14](https://github.com/onflow/flow-go/pull/6317), [15](https://github.com/onflow/flow-go-sdk/pull/723), [16](https://github.com/onflow/flow-go-sdk/pull/720), [17](https://github.com/onflow/flow-emulator/pull/725), [18](https://github.com/onflow/cadence-tools/pull/410), [19](https://github.com/janezpodhostnik/flow-py-sdk/pull/62)
- infra/config: [1](https://github.com/dapperlabs/dapper-flow-hosting/pull/1562), [2](https://github.com/dapperlabs/dapper-flow-hosting/pull/1556), [3](https://github.com/dapperlabs/dapper-flow-hosting/pull/1554), [4](https://github.com/dapperlabs/dapper-flow-hosting/pull/1552), [5](https://github.com/onflow/flow-evm-gateway/pull/414), [6](https://github.com/dapperlabs/dapper-flow-hosting/pull/1551)
- publishing staged contracts report: [1](https://github.com/onflow/cadence/pull/3525), [2](https://github.com/onflow/cadence/pull/3510)


**This sprint**

- Objective 1, KR5: Mainnet Upgrade to Crescendo Release
  - Investigate and fix any high/critical severity issues reported on Crescendo on TN ([Crescendo launch on Mainnet tasklist](https://github.com/onflow/cadence/issues/2642))
  - [Create util command to check storage health of execution state](https://github.com/onflow/flow-go/issues/6350)
  - Continue: [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)
  - Investigate / Fix any security report incoming from bug bounty.

- Objective 2, KR 1: Update transaction fees weights for the execution operations on TN and MN
  -  Continue work on [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)

- EVM 
  - Continue monitoring EVM GW stability
  - Start work on [local state index](https://github.com/onflow/flow-evm-gateway/issues/322)
  - KROK
     - EVM Gateway benchmarking

- EVM Gateway
  - continue work on [Metrics](https://github.com/onflow/flow-evm-gateway/issues/125) and [Benchmarking](https://github.com/onflow/flow-evm-gateway/issues/19)

- Badger -> Pebble Investigation/POC
  - Continue evaluation of [Protocol State Migration POC](https://github.com/onflow/flow-go/issues/6137) & schedule design discussion

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
- Prepare flow.com, onflow.org & nodes.onflow.org domains for CloudFlare account migration
- Prepare to spork FF & DL nodes 

**Done last sprint**

**CloudFlare**
- [Migrate benchmark.onflow.org & benchnet.onflow.org to FF CloudFlare account](https://github.com/dapperlabs/terraform/pull/4319/files)

**EVM Gateway**
- [Create infra for Devnet EVM GW](https://github.com/dapperlabs/terraform/pull/4321) 
- [Create KMS keys for Devnet EVM GW](https://github.com/dapperlabs/terraform/pull/4320) 
- [Fix DNS records for Devnet EVM GW](https://github.com/dapperlabs/terraform/pull/4324)
- [Create EVM GW Ansible config for Devnet](https://github.com/dapperlabs/dapper-flow-hosting/pull/1559)
- [Create Dashboard for EVM GW Monitoring](https://flowfoundation.grafana.net/d/fdtxeq977nif4d/evm-gateway?var-network=devnet0&var-lb=testnet&from=now-5m&to=now&timezone=browser)
- [Create Documentation for Monitoring & Access](https://www.notion.so/flowfoundation/EVM-Gateway-b5e363611abf4dfa963a471877cb5b92)
- Create Alerts for Monitoring EVM GW System usage

**Spork**
- [Create Ansible Configuration for TN51 spork](https://github.com/dapperlabs/dapper-flow-hosting/pull/1558)
- [Create Infra for TN51 Spork](https://github.com/dapperlabs/dapper-flow-hosting/pull/1558)
- [Create Buckets for traces](https://github.com/dapperlabs/terraform/pull/4334)

**Support**
- [Create DNS record for bridge.flow.com](https://github.com/dapperlabs/terraform/pull/4335/files)
- [Create KMS Key for USDC Contract](https://github.com/dapperlabs/terraform/pull/4326)

**This Sprint**
- Prepare CloudFlare zones for flow.com, onflow.org, and nodes.onflow.org migration 
- Deploy MN EVM GW in preparation for MN spork 
- Prepare Infra & configuration for MN Network upgrade

---

### **Governance and Tokenomics** \[Kshitij]
Cycle Objective(s): Transaction fees on EVM, increasing transaction fees and inflation reduction plan.

**Done last sprint**
- EN operator contract for lease
- Work with Dete on future fee on Flow (not be launched with Crescendo launch)

**This sprint**
- Get the execution node live
- Continue supporting rewards platform team on Tokenomics related analysis
- Model stable state economics, throughput, fees and inflation
- Draft research doc that explains the vision
- Organize monthly GWG

**On Hold**


**Active Epics**

- N/A
