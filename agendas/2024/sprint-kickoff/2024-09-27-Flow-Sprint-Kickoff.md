# Overview

### Team Wins 🎉

- [Joe](https://github.com/jsproz) joined the Cadence team this week!
- Mainnet 26 upgrade went smoothly for the protocol team - the security fix discovered shortly after Crescendo release is now fixed and validated.
- [Cadence 1.0 release](https://flow-foundation.slack.com/archives/C05RYHG0KEY/p1727390039557029)!
- Update of the execution storage layer from release-candidate to [Atree v0.8.0](https://github.com/onflow/cadence/pull/3583) - this verison passed through 1034 hours of smoke tests and numerous storage health-checks on execution state snapshots before and after network upgrade to Crescendo release.

### General updates

### OOO
- [Full List](https://www.notion.so/flowfoundation/de89aa4e79364216a665888335a1cdee?v=4de18b26f60d4bae8f62724dddcce260)

---

### Mainnet Uptime - Last 14 days (09/14/24 to 09/26/24) \[Vishal]

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


## Incidents



(Sev [definition](https://www.notion.so/flowfoundation/Incident-Priorities-Severity-Levels-1-e811b352feff4928b69a7e99df724c6a))

### Key Release Dates & Breaking Changes
- Next Mainnet/Testnet network upgrade (spork):
  - TBD

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

**Cadence Language**
- Bugfixes:
    - [Improve contract update error printing positions](https://github.com/onflow/cadence/issues/3574)
    - [Refactor user errors in lexer from panics to error return values](https://github.com/onflow/cadence/issues/3428)
- Public ports of security fixes:
    - [Fix runtime type of Account_Inbox_claim() function](https://github.com/onflow/cadence/pull/3592)
    - [Fix interpreting default functions](https://github.com/onflow/cadence/pull/3591)
    - [Allow validation of `Account.capabilities.get/borrow/publish`](https://github.com/onflow/cadence/pull/3590)
- 1.0 Release chores: [1](https://github.com/onflow/flow-go-sdk/pull/776), [2](https://github.com/onflow/cadence/pull/3593)
- Testing:
    - [Add test for circular resources](https://github.com/onflow/cadence/pull/3586)
- Docs updates:
    - [Add examples for publishing and claiming capability](https://github.com/onflow/cadence-lang.org/pull/156)
    - [Add section for revocation of capability](https://github.com/onflow/cadence-lang.org/pull/155)
    - [Fix links to locked tokens contract](https://github.com/onflow/cadence-lang.org/pull/154)
    - [Fix mentions of PublicAccount and AuthAccount](https://github.com/onflow/cadence-lang.org/pull/153)
    - [Update account capabilities type definitions](https://github.com/onflow/cadence-lang.org/pull/152)
    - [Bring back subset of migration guide](https://github.com/onflow/cadence-lang.org/pull/150)

**Cadence Execution**
- Network upgrade preparation chores & improvements: [1](https://github.com/dapperlabs/dapper-flow-hosting/pull/1614), [2](https://github.com/dapperlabs/dapper-flow-hosting/pull/1610), [3](https://github.com/dapperlabs/flow-go/pull/6980), [4](https://github.com/dapperlabs/flow-go/pull/6979), [5](https://github.com/dapperlabs/flow-go/pull/6973), [6](https://github.com/dapperlabs/dapper-flow-hosting/pull/1608), [7](https://github.com/onflow/flow-go/pull/6472), [8](https://github.com/dapperlabs/flow-go/pull/6971), [9](https://github.com/dapperlabs/flow-go/pull/6967), [10](https://github.com/dapperlabs/dapper-flow-hosting/pull/1592), [11](https://github.com/dapperlabs/dapper-flow-hosting/pull/1560)
- Update of the execution storage layer from release-candidate to [Atree v0.8.0](https://github.com/onflow/cadence/pull/3583)
- Switching Badger -> Pebble DB
    - [Making indexing approval concurrent-safe](https://github.com/onflow/flow-go/pull/6374)
    - [Making finalization concurrent safe](https://github.com/onflow/flow-go/pull/6373)
    - [Refactor indexing new blocks](https://github.com/onflow/flow-go/pull/6360)
    - [Make indexing own receipts concurrent safe](https://github.com/onflow/flow-go/pull/6354)
    - [Refactor key iteration]
- Docs update:
    - [update sha256sum for boot-tools](https://github.com/onflow/docs/pull/911)

**EVM Core**
- Bugfixes:
    - [patch evm debug tracer]
- Local state index:
    - [adding state update checksum to transaction execution events](https://github.com/onflow/flow-go/pull/6456)
    - [adding commitment over state updates](https://github.com/onflow/flow-go/pull/6451)

**EVM Gateway**
- Alchemy blocker (ongoing): [Add support for debug_traceCall to EVM GW API](https://github.com/onflow/flow-evm-gateway/issues/530)
    - [Run tracing hooks OnTxStart, OnTxEnd for DryRunTransaction](https://github.com/onflow/flow-go/pull/6491)
Improvements:
    - [Handling of UInt,Int Cadence types for EVM ABI encoding/decoding](https://github.com/onflow/flow-go/pull/6480)
        - follow-up: [Add boundary checks](https://github.com/onflow/flow-go/pull/6486)
    - Equivalence with geth behaviour: [eth_getFilterLogs returns null result instead of empty array](https://github.com/onflow/flow-evm-gateway/issues/545)
    - [Check data integrity for EVM events](https://github.com/onflow/flow-evm-gateway/pull/529)
- Bugfix:
    - [Update constant for block gas limit](https://github.com/onflow/flow-evm-gateway/pull/564)
    - [Fix error handling for transaction traces](https://github.com/onflow/flow-evm-gateway/pull/560)
    - [Fix format for block traces on debug API](https://github.com/onflow/flow-evm-gateway/pull/557)
    - [Block endpoints with many transactions fail with rate limit error](https://github.com/onflow/flow-evm-gateway/issues/547)
- Local state index
    - [Improve client result compare](https://github.com/onflow/flow-evm-gateway/pull/561)
    - [Improve error handling on the local state](https://github.com/onflow/flow-evm-gateway/pull/559)
    - [Make state index more robust and able to sync](https://github.com/onflow/flow-evm-gateway/pull/556)
    - [Event recovery from a missing block](https://github.com/onflow/flow-evm-gateway/pull/554)
    - [Local index register validator](https://github.com/onflow/flow-evm-gateway/pull/550)
    - [Reuse client for storage query](https://github.com/onflow/flow-evm-gateway/pull/542)
    - [Add history support to state index](https://github.com/onflow/flow-evm-gateway/pull/540)
    - [Local state index engine](https://github.com/onflow/flow-evm-gateway/pull/537)
- Tech debt / improvements
    - [Remove obsolete config flags & keys files](https://github.com/onflow/flow-evm-gateway/pull/593)
- Testing:
    - [Add test cases utilizing Cadence arch calls](https://github.com/onflow/flow-evm-gateway/pull/538)

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

* <ins>Crescendo upgrade</ins>
  - Continue benchnet testing libp2p peer gater and add peer gater to flow-go

* <ins>EFM Recovery</ins>
  - [Continue DKG smart contract data model update](https://github.com/onflow/flow-go/issues/6213)
  - Protocol updates for DKG changes [https://github.com/onflow/flow-go/issues/6214]
  - Finish up and merge [EFM Recovery transaction](https://github.com/onflow/flow-core-contracts/pull/440), EFM integration test part 2](https://github.com/onflow/flow-go/issues/6164), [EFM Integration Test Part 2](https://github.com/onflow/flow-go/pull/6424)
    
* <ins>Data Availability</ins>
  - KROK Team
    - Expand on payer balance checks ([Issue #6129](https://github.com/onflow/flow-go/issues/6129) - In review, [Issue #6139](https://github.com/onflow/flow-go/issues/6139) - In review)
    - Registers db pruning ([Issue #6066](https://github.com/onflow/flow-go/issues/6066) - In review, [Issue #6068](https://github.com/onflow/flow-go/issues/6068) - In review)
    - Store Tx Result in database ([Issue #6302](https://github.com/onflow/flow-go/issues/6302) - In progress)
    - Test pebble execution data db on testnet ([Issue #6357](https://github.com/onflow/flow-go/issues/6357) - In progress)
    - Documentation improvements ([Issue #815](https://github.com/onflow/docs/issues/815) - In review, [Issue #727](https://github.com/onflow/docs/issues/727) - In review)
    - Access API / Go SDK alignment ([Issue #735](https://github.com/onflow/flow-go-sdk/issues/735))

* <ins>Cryptography</ins>
  - Get back to SPoCK aggregation related reads

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
  * Contnue supporting Ankr, Axelar and other node operators
  * Launch Axelar cross-chain bridge and axlUSDC once all vaidators are onboarded and critical mass is reached
  
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
**Sprint Goal: Launch Rewards Redemption and Points Integration / Launch bridge.flow.com / Lost and Found (Integration - Flow Port, Flow Wallet)**

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
- Prepare flow.com, onflow.org & nodes.onflow.org domains for CloudFlare account migration
- Prepare to spork FF & DL nodes 
- Clean up infra following spork

**Done last sprint**



**This Sprint**
- Finish merging & cleaning up old CF resources
- Create infrastructure for DL & FF nodes
- Spork Mainnet
- Cleanup all infra used for spork prep
- Assist with EVM GW observability


**Active Epics**

- N/A
