# Overview

### Team Wins 🎉

- 


### General updates

### OOO
- [Full List](https://www.notion.so/flowfoundation/de89aa4e79364216a665888335a1cdee?v=4de18b26f60d4bae8f62724dddcce260)

---

### Mainnet Uptime - Last 14 days (08/16/24 to 08/29/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    100%       |       0%         |
| Block Sealing           | 99.9%   |    100%       |       0%         |
| Access API Liveness     | 99.9%   |    99.877%    |       123%       |

[SLO dashboards](https://flowfoundation.grafana.net/d/hgW3l-m4k/slo-dashboard?orgId=1&from=now-2w&to=now)

[YTD SLA: 99.922%](https://app.metrika.co/flow/dashboard/slas?tr=YTD)

## Incidents

None

(Sev [definition](https://www.notion.so/flowfoundation/Incident-Priorities-Severity-Levels-1-e811b352feff4928b69a7e99df724c6a))

### Key Release Dates & Breaking Changes
- Next Mainnet/Testnet network upgrade (spork):
  - Mainnet: Sept 4th **5:00 AM PT** (12:00 PM UTC). Duration: 6 hours

---

### FLIPs Tracker \[Kshitij]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 8  |    7 (-1)  |       0         |       7          |        **22** (-1)       |
| Proposed    | 1  |    2    |       3          |       0           |        **6**  |
| Accepted    | 2  |    1     |       2       |       2        |        **7**          |
| Rejected    | 0  |    0     |       1       |       0          |        **1**          |
| Implemented | 3 |    25 (+1)    |       1       |       0           |        **28**          |
| Released    | 4  |    0     |       4       |       6          |        **14**         |
| Total       | **18**  |    **35**  |       **11**     |       **15**          |        **79**   |

**Updates**
Import of pre-Cadence 1.0 Programs (Bastian) was implemented

**FLIPs that need to be reassigned immediately:**

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
  - Finish Pebble PR review
  - DKG smart contract updates (cont.)
  - Address feedback and merge [EFM Recovery transaction](https://github.com/onflow/flow-core-contracts/pull/440) PR
  - Finish [EFM integration test part 2](https://github.com/onflow/flow-go/issues/6164)
  
* <ins>Data Availability:</ins>
  - ProtocolDB pruning design
  - KROK Team
    - Add StopControl for access nodes ([Issue #5790](https://github.com/onflow/flow-go/issues/5790) - In review)
    - Add support pruning pebble exec data db ([Issue #6260](https://github.com/onflow/flow-go/issues/6260) - In review)
    - Expand on payer balance checks ([Issue #6128](https://github.com/onflow/flow-go/issues/6128) - Waiting to merge, [Issue #6129](https://github.com/onflow/flow-go/issues/6129) - In review, [Issue #6139](https://github.com/onflow/flow-go/issues/6139) - In review)
    - Start registers db pruning ([Issue #6066](https://github.com/onflow/flow-go/issues/6066) - In review, [Issue #6068](https://github.com/onflow/flow-go/issues/6068))
    - Test pebble execution data db on testnet ([Issue #6357](https://github.com/onflow/flow-go/issues/6357))
    - Test execution data pruning on testnet ([Issue #6358](https://github.com/onflow/flow-go/issues/6358))

* <ins>Cryptography:</ins>
  - State proofs: performance estimations of some VC/set accumulator constructions
  - Pick up SPoCK aggregation related reads if time permits


**On Hold**
* Implement BFT mitigations to enable 20 permissionless ANs

---

### **DeFi** \[Jerome]

Cycle Objective(s): 
- EVM partner onboarding
- Deliver Axelar bridge

**Done last sprint**
  * Supported Axelar with node configuration and operational setup
  * Supported Celer with contract upgrade. Contracts now staged on Mainnet
  * Supported Safe.global with project spinup
    * Created repo clones for project & Github Connection link for automation
    * Created DNS names for testnet and mainnet endpoints
    * Created EVM GW node infra behind those endpoints
  * Updated JVM-SDK repo examples updates to parity with Go SDK 
  
**This sprint**
  * Continue supporting Axelar and other key partners
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

**This sprint**
**Sprint goal Flow Axelar Cross-chain Bridge / Documentation Updates, Crescendo Rewards, FCL Discovery and WC Integration, Lost and Found (Integration - Flow Port, Flow Wallet)**

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
- Finish contract audit and make recommended changes to the lock/unlock contract
- Deploy lock and distribution contract on mainnet; FE on rewards.flow.com
- Design and model yield (APY) and/or monthly "boost" - see draft [yield schedule](https://docs.google.com/spreadsheets/d/1aE-Q0fLx-tLdeB7xf1JduCE0nFXfuemJ2jWove4SCJE/edit?gid=0#gid=0)
- Design tokenomics of hotdogs (point system) and raffles
- Drive GTM - announcement and content
- Continue working with Dete on stable state tokenomics 

**On Hold**


**Active Epics**

- N/A
