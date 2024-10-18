# Overview

### Team Wins 🎉

- Cadence security fix ([disclosure](https://forum.flow.com/t/fixed-vulnerable-accounts-2024-10-01/6604)) and EVM contract fixes deployed.
- Completed new util command 'checkpoint-collect-stats' that can be used to gain insights about current execution state as well as changes between any two checkpoints.
- Planing first zero-downtime Cadence fix deployment.


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
Monday, 2024-10-14 18:46:30 Pacific: Sev-3 - EVM Gateway 2 stopped processing EVM Blocks ([slack thread](https://flow-foundation.slack.com/archives/CUU2KQL4A/p1728959386019689?thread_ts=1728959285.639699&cid=CUU2KQL4A))

(Sev [definition](https://www.notion.so/flowfoundation/Incident-Priorities-Severity-Levels-1-e811b352feff4928b69a7e99df724c6a))

### Key Release Dates & Breaking Changes
- Next Mainnet/Testnet network upgrade (spork):
  - TBD

---

### FLIPs Tracker \[Kshitij]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 8  |    6 (-2)  |       1 (+1)         |       7          |        **22** (-1)       |
| Proposed    | 1  |    4 (+2)   |       3          |       0           |        **8** (+2)  |
| Accepted    | 2  |    1     |       2       |       2        |        **7**          |
| Rejected    | 0  |    0     |       1       |       0          |        **1**          |
| Implemented | 3 |    25    |       1       |       0           |        **29**          |
| Released    | 4  |    0     |       4       |       6          |        **14**         |
| Total       | **18**  |    **36**   |       **12** (+1)     |       **15**          |        **81** (+1)   |

**Summary**

* Overall 1 new FLIP - [Governance] - removal of decommissioned nodes from the approved list
* Movement of two cadence flips from draft to proposed (Simple String Interpolation by Raymond was one)

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

**Cycle Objectives**

[Cadence Language](https://github.com/onflow/cadence/issues/3623)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6577)

**Done last sprint**

Cadence Language
- Feture
    - Extending Type by 2 new fields, removin the need for manual extraction: [Add Type.address and Type.contractName](https://github.com/onflow/cadence/pull/3570)
- Security updates: [1](https://github.com/dapperlabs/cadence-internal/pull/271), [2](https://github.com/dapperlabs/cadence-internal/pull/269), [3](https://github.com/dapperlabs/cadence-internal/pull/268), [4](https://github.com/dapperlabs/cadence-internal/issues/265), [5](https://github.com/dapperlabs/cadence-internal/pull/266), [6](https://github.com/dapperlabs/cadence-internal/issues/262), [7](https://github.com/dapperlabs/cadence-internal/issues/260), [8](https://github.com/dapperlabs/cadence-internal/issues/248), [9](https://github.com/dapperlabs/flow-go/pull/6971), [10](https://github.com/onflow/flow-go/pull/6500), [11](https://github.com/dapperlabs/cadence-internal/issues/187)
- Tech-debt removal
    - [Explain the reason for support parsing legacy restricted types](https://github.com/onflow/cadence/pull/3614)
    - [Split runtime/interpreter/value.go into multiple files](https://github.com/onflow/cadence/issues/2566)
- Porting of intenral Bugfixes to public repo
    - [Prevent leaving unreferenced slabs in storage while updating dictionary with enum key (port internal fix)](https://github.com/onflow/cadence/issues/3508)
    - [Fix invocation boxing](https://github.com/onflow/cadence/pull/3601)
    - [Port bug fixes from internal repo](https://github.com/onflow/cadence/pull/3600)
- bugfix
    - [Prevent migration tests from using out-of-sync data](https://github.com/onflow/cadence/pull/3597)
- Dependency updates: [1](https://github.com/onflow/flow-go/pull/6556), [2](https://github.com/onflow/flow-emulator/pull/758), [3](https://github.com/onflow/cadence-tools/pull/432)
- Docs
    - [Example code for demonstrating nested resources incorrectly shows a value for a constant](https://github.com/onflow/cadence-lang.org/issues/159)
    - [Using result as a variable name causes a checker error](https://github.com/onflow/cadence/issues/774)

Cadence Execution
- New util: [report stats about execution state](https://github.com/onflow/flow-go/issues/6361)
    - [Update `checkpoint-collect-stats` command to support payloads file and state commitment](https://github.com/onflow/flow-go/pull/6478)
- Security updates: [COA ownership proof fix](https://github.com/dapperlabs/flow-go/pull/6985)
- Improvements
    - [Requester engine -  Remove duplicated debug logs](https://github.com/onflow/flow-go/pull/6514)
    - [Bootstrap - Fix duplication detection in root block finalization](https://github.com/onflow/flow-go/pull/6484)
- HCU prep
    - [make newPreRelease string required for HCU](https://github.com/onflow/flow-core-contracts/pull/453), [2](https://github.com/dapperlabs/dapper-flow-hosting/pull/1616), [3](https://github.com/dapperlabs/flow-go/pull/6983)

EVM Core
- Dry-run
    - [Offchain package - part 1](https://github.com/onflow/flow-go/pull/6544)
    - [adding a new encoding type for captured precompiled calls](https://github.com/onflow/flow-go/pull/6488)
    - [Adding commitment over state update](https://github.com/onflow/flow-go/pull/6476)
    - [add state update checksum to tx executed events](https://github.com/onflow/flow-go/pull/6477)

EVM Gateway
- Dependency updates: [1](https://github.com/onflow/flow-evm-gateway/pull/612)
- Bugfix
    - [Fix `Genesis` block hash calculation for `Testnet` network](https://github.com/onflow/flow-evm-gateway/pull/566)
- Improvements (EVM Hardening)
    - code de-duplication: [extract trace block common logic](https://github.com/onflow/flow-evm-gateway/pull/608)
    - [Add generics to subscriber and publisher and fix potential deadlock](https://github.com/onflow/flow-evm-gateway/pull/602)
    - [Refactor engine status](https://github.com/onflow/flow-evm-gateway/pull/600)
    - [Add goimports linter](https://github.com/onflow/flow-evm-gateway/pull/599)
    - [Add engine type to startup logs](https://github.com/onflow/flow-evm-gateway/pull/597)
    - [Update the list of valid JSON-RPC methods](https://github.com/onflow/flow-evm-gateway/pull/613)
    - [Avoid logging debug info for invalid JSON-RPC methods](https://github.com/onflow/flow-evm-gateway/pull/611)
    - [Add the EVM GW version to log lines](https://github.com/onflow/flow-evm-gateway/pull/596)
    - [Use the released tag version to identify newly-created docker images](https://github.com/onflow/flow-evm-gateway/pull/592)

**This sprint**

- Continue work on [EVM Gateway Hardening](https://github.com/onflow/flow-go/issues/6539)

- Cadence Language
  - Continue addressing [Tech Debt](https://github.com/onflow/cadence/issues/3595)
  - Start work on Content for [commuity outreach](https://github.com/onflow/cadence/issues/3596)
  - Maybe resume work on the [Cadence compiler POC](https://github.com/onflow/cadence/issues/3612)
  - Continue work on [Cadence language Specification](https://github.com/onflow/cadence/issues/3599)
  - [Updating Source compatibility suite for C1.0](https://github.com/onflow/cadence/issues/3608)

- Cadence Execution
  - Continue work on [optimization for Cadence domain storage](https://github.com/onflow/cadence/issues/3584)
  - Badger -> Pebble migration:continue work on [Chunk Data pack Pruner](https://github.com/onflow/flow-go/issues/6516)
  
**Completed OKRs**
  
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

* <ins>EFM Recovery</ins>
  * [Updated type conversion of EpochCommit](https://github.com/onflow/flow-go/pull/6494)
  * [Update DKG engine to submit a valid DKG index map](https://github.com/onflow/flow-go/pull/6490)

* <ins>Cryptography</ins>
  - SPoCK aggregation
  - Document the random beacon bias findings
  - Remaining PoP work planning

* <ins>Misc other</ins>
  - Updated networking docs https://www.notion.so/flowfoundation/Flow-Networking-Layer-Developer-Guide-67bae4ab28d84e36975b2ae918e2e48b

* <ins>Data Availability</ins>
  - Add support for compatible versions during HCU ([PR #6535](https://github.com/onflow/flow-go/pull/6535))
  - KROK Team
    - Expand on payer balance checks ([PR #6297](https://github.com/onflow/flow-go/pull/6297), [PR #6292](https://github.com/onflow/flow-go/pull/6292))
    - Enforce register pruning threshold ([PR #6345](https://github.com/onflow/flow-go/pull/6345))
    - SDK alignment
      - [SubscribeAccountStatuses](https://github.com/onflow/flow-go-sdk/pull/762)
      - [SubscribeBlockHeaders](https://github.com/onflow/flow-go-sdk/pull/760)
      - [SubscribeBlocks](https://github.com/onflow/flow-go-sdk/pull/758)
      - [SubscribeBlockDigests](https://github.com/onflow/flow-go-sdk/pull/764)
      - [SendAndSubscribeTransactionStatuses](https://github.com/onflow/flow-go-sdk/pull/772)
      - [Update GetNodeVersionInfo](https://github.com/onflow/flow-go-sdk/pull/773)

**This sprint**

* <ins>EFM Recovery</ins>
  - [Implement an integration test for EFM and DKG IndexMap](https://github.com/onflow/flow-go/issues/6331)
    
* <ins>Data Availability</ins>
  - KROK Team
    - Websockets redesign ([Epic #6163](https://github.com/onflow/flow-go/issues/6163))
      - Initial design ([Issue #6508](https://github.com/onflow/flow-go/issues/6508))
    - Registers db pruning ([Issue #6068](https://github.com/onflow/flow-go/issues/6068) - In review)
    - Store Tx Result in database ([Issue #6302](https://github.com/onflow/flow-go/issues/6302) - In review, [Issue #6413](https://github.com/onflow/flow-go/issues/6413) - In review)
    - Test pebble execution data db on testnet ([Issue #6357](https://github.com/onflow/flow-go/issues/6357) - In progress)
    - Add Time To Seal metric ([Issue #6448](https://github.com/onflow/flow-go/issues/6448) - In review)
    - Access API / Go SDK alignment ([Epic #735](https://github.com/onflow/flow-go-sdk/issues/735))
      - Unify streaming endpoints code duplication ([Issue #763](https://github.com/onflow/flow-go-sdk/issues/763) - In review)
      - Other endpoint improvements [1](https://github.com/onflow/flow-go-sdk/issues/765), [2](https://github.com/onflow/flow-go-sdk/issues/768), [3](https://github.com/onflow/flow-go-sdk/issues/766)

* <ins>Cryptography</ins>
  - SPoCK aggregation

* <ins>Misc other</ins>
  - Ongoing Pebble migration PR reviews

**On Hold**

---

### **DeFi** \[Jerome]

Cycle Objective(s): 
- EVM partner onboarding
- Deliver Axelar bridge

**Done last sprint**
  * Supported devdock, Ankr, Trado, and Moralis who were variously blocked or had quesitons
  * Completed Axelar pool funding test run on EVM testnet
  * 

**This sprint**
  * Fund Axelar pools and confirm critical mass of validators for bridge activation
  * Bug report for Trado on Flow Wallet  
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

**Spork Clean Up**
- [Add TN historical node configuration](https://github.com/dapperlabs/dapper-flow-hosting/pull/1618)
- [Create historical snapshots & delete unnecessary nodes](https://github.com/dapperlabs/terraform/pull/4413)
- [Delete MN25 VN lingering from spork](https://github.com/dapperlabs/terraform/pull/4409)
- [Remove unnecessary operational nodes and resize historical node](https://github.com/dapperlabs/terraform/pull/4410)
- Worked with engineers to clean up remaining infra from Crescendo spork

**Support**
- [Add new DNS records for Safe](https://github.com/dapperlabs/terraform/pull/4408)

**Observability**
- Fix broken routing of Grafana alerts
- [Create documentation for routing alerts from DL to FF engineers](https://www.notion.so/flowfoundation/Routing-DL-Flow-Node-Alerts-1191aee12324807fb53fee4664155de4)

**New Hire**
- [Develop interview prep for open SRE role](https://www.notion.so/flowfoundation/Flow-SRE-Interview-Questions-11a1aee1232480eab5e0f4188f8eec8b)
- Start initial SRE onboarding documentation 

**Atlantis Migration**
- Evaluate & document tasks for Atlantis Migration
- [Identify all repos, modules, and config to be migrated](https://www.notion.so/flowfoundation/Terraform-Configuration-Migration-1211aee1232480b9b414f727a27a1a0e)
- [Create new GCP project for dedicated Atlantis](https://github.com/orgs/onflow/projects/79/views/1?pane=issue&itemId=83525564&issue=onflow%7Cff-sre-infrastructure%7C5)
- [Create & configure infra repos in onflow GH org](https://github.com/onflow/ff-sre-infrastructure/issues/16)

**This Sprint**
- Begin interviewing for SRE role
- Continue work to migrate to dedicated FF Atlantis
- Execute GCP IAM migration to Flow Foundation groups

