# Overview

 ### Team Wins 🎉
 
 * 

--- 

### Mainnet Uptime - Last 14 days (11/4/24 to 11/15/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    100%       |       0%         |
| Block Sealing           | 99.9%   |    100%       |       0%         |
| Access API Liveness     | 99.9%   |    99.97%     |       32.2%      |

#### Incidents
* 

---

### FLIPs Tracker \[Vishal]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 8  |    6     |       0 (-1)       |       8 (+1)       |        **22**          |
| Proposed    | 1  |    2 (-2)     |       3       |       0          |        **6**  (-2)        |
| Accepted    | 2  |    2 (+1)    |       2       |       2          |        **8** (+1)         |
| Rejected    | 0  |    1 (+1)    |       1       |       0          |        **2** (+1)        |
| Implemented | 3  |    38 (+13)    |       1       |       0          |        **42**  (+13)      |
| Released    | 4  |    0     |       5 (+1)       |       6          |        **15** (+1)         |
| Total       | **18** |    **49** (+13)  |       **12**       |       **16**  (+1)        |        **95**  (+14)       |

- 1 new FLIP was added last month and 13 untracked FLIPS are now being tracked.
~~- Some FLIPs are still not reflected in the project tracker.~~
- **Reminder**: FLIP process starts with an issue creation.
(https://github.com/onflow/flips?tab=readme-ov-file#submitting-the-flip)
  
### Key Release Dates & Breaking Changes

- Next Mainnet/Testnet network upgrade (spork): TBD

---

# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]

**Cycle Objectives**

[Cadence Language](https://github.com/onflow/cadence/issues/3623)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6577)

**Done last sprint**

**Cadence Language**
- Feature:
    - [Add string formatting function](https://github.com/onflow/cadence/issues/3579)
- Tech debt removal:
    - [Remove unused Identifier() function from structs implementing atree.TypeInfo](https://github.com/onflow/cadence/issues/3674)
- Collaboration on Cadence learning app (GoldStar):
    - [Add challenge paths](https://github.com/onflow/gold-star/pull/6)
    - [Add challenge which must be manually evaluated](https://github.com/onflow/gold-star/pull/5)
    - [Refactor profile submissions and socials, add function and script to allow updating socials](https://github.com/onflow/gold-star/pull/4)
- Tools improvements:
    - Language server - [Update access modifiers to Cadence 1.0](https://github.com/onflow/cadence-tools/pull/445)

**Cadence Execution**
- Storage optimization: [Combine non-atree domain payloads into atree payloads](https://github.com/onflow/cadence/issues/3584)
    - [Replace domain string with enum for AccountStorageMap key](https://github.com/onflow/cadence/pull/3677)
    - [Refactor storage domains to prevent import cycles and simplify maintenance](https://github.com/onflow/cadence/pull/3673)
    - [Combine domain payloads and provide on-the-fly migration](https://github.com/onflow/cadence/pull/3664)
- Compiler POC - Move VM benchmarking:
    - [Update to aptos-core](https://github.com/RZhang05/cadence_movevm/pull/1)
- Minor improvement - [Print log when checks the executed block matches the sealed result](https://github.com/onflow/flow-go/pull/6559)

**EVM Core**
- Bugfix:
    - [Move tracing reset to `OnTxEnd` hook](https://github.com/onflow/flow-go/pull/6627)

**EVM Gateway**
- Dry-run feature:
    - [Ingestion Performance improvements](https://github.com/onflow/flow-evm-gateway/pull/653)
    - [Storage fixes](https://github.com/onflow/flow-evm-gateway/pull/652)
    - [Use batch to init blocks](https://github.com/onflow/flow-evm-gateway/pull/650)
    - [Changed evm height in requester to uint](https://github.com/onflow/flow-evm-gateway/pull/649)
    - [Special evm height handling](https://github.com/onflow/flow-evm-gateway/pull/645)
    - [Add register storage](https://github.com/onflow/flow-evm-gateway/pull/640)
    - [Integrate & incorporate flow-go's `onchain` package](https://github.com/onflow/flow-evm-gateway/pull/635)
    - [Simplify usage of FixedHash field on Block type](https://github.com/onflow/flow-evm-gateway/pull/520)
- ERC-4337 integration:
    - [Add support for ethapi.StateOverride in relevant JSON-RPC endpoints](https://github.com/onflow/flow-evm-gateway/issues/655)
- Bugfix:
    - [Hardhat ignition deployments fail on testnet & mainnet](https://github.com/onflow/flow-evm-gateway/issues/647)
- Testing:
    - [Split out cadence arch and traces tests](https://github.com/onflow/flow-evm-gateway/pull/646)

**This sprint**

- Complete [EVM Gateway Hardening](https://github.com/onflow/flow-go/issues/6539)

- Cadence Language
  - Security report
  - Complete remaining Tech-debt [Tech Debt](https://github.com/onflow/cadence/issues/3595)
  - Continue work on Content for [commuity outreach](https://github.com/onflow/cadence/issues/3596)
  - Continue work on the [Cadence compiler POC](https://github.com/onflow/cadence/issues/3612)
  - Continue work on [Cadence language Specification](https://github.com/onflow/cadence/issues/3599)

- Cadence Execution
  - Complete [optimization for Cadence domain storage](https://github.com/onflow/cadence/issues/3584)
  - Start new Trie research
  - Evaluate / Start [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)
  - Badger -> Pebble migration: continue work on [Chunk Data pack Pruner](https://github.com/onflow/flow-go/issues/6516)

**On Hold**

- [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)
- [Random beacon history taking more space on chain than expected](https://github.com/onflow/flow-go/issues/5550)
- [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

---

### **Core Protocol** \[Jerome]
Cycle Objective(s): 

* Translate crypto performance improvements to consensus block rate increase
* Provide developers secure and non-rate limited way to access all of chain data (transactions, blocks, account balance, events, account balance etc) by locally running an access or an observer node
* Reduce CPU usage on Execution node by 30%
* Continue BFT mitigations to enable 10 permissionless ANs
* Continue design of Dynamic Protocol 

**Done last sprint**

* 

**This sprint**

* 

**On Hold**
* Deliver public roadmap & vision for technical protocol decentralization focusing on current challenges and upcoming updates for permissionless consensus on Flow.

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
- DEX Prep - IncrementFi
- Bridge Prep - Axelar

**Done last sprint**

* 

**This sprint**

*

**On Hold**
- N/A

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

*

**This sprint**

**Sprint goal focusing on adding docs and tool support for Crescendo network and Cadence 1.0**

- [Add Crescendo network support to FCL Discovery](https://github.com/orgs/onflow/projects/13/views/85?pane=issue&itemId=50332654)
- [Add Crescendo Network to CLI (config, cmds, docs, etc)](https://github.com/orgs/onflow/projects/13/views/85?pane=issue&itemId=50297186)
- [Add/Publish Initial EVM Docs](https://github.com/orgs/onflow/projects/13/views/85?pane=issue&itemId=51952883)
- [Docs Revamp v3](https://github.com/orgs/onflow/projects/13/views/85?pane=issue&itemId=49327073)
- [Add C1.0 Rules to Cadence Linter](https://github.com/orgs/onflow/projects/13/views/85?pane=issue&itemId=51952640)
- [Update Playground to support Cadence 1.0](https://github.com/orgs/onflow/projects/13/views/85?pane=issue&itemId=49844013)
- [Stable Cadence Installation Workflow](https://github.com/orgs/onflow/projects/13/views/85?pane=issue&itemId=51951905)


**On Hold**

- [Update Flowport for Cadence Crescendo instance](https://github.com/orgs/onflow/projects/13/views/85?pane=issue&itemId=51960824)

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

- N/A

**This sprint**

- Begin creating developer documentation highlighting FlowEVM
- Updating cadence transactions / scripts for Cadence 1.0
- Begin executing on FlowEVM updates to Flow Wallet
- Scheduled calls with MetaMask and Coinbase Wallet teams to intro FlowEVM and gather their requirements.

**On Hold**

- N/A

**Active Epics**

- TBD

---

### **Infra - JP**

**Done last sprint**

**Repo Migration**
* [Fix BN2 Workflows in new repo](https://github.com/onflow/flow-go-internal/pull/6996)
* Add support for new repo to reach BN2 cluster 

**IAM Migration**
* Add access for new FF groups in BN2
* Worked with engineers to validate initial FF group changes

**Automation**
* [Created documentation for standardizing EN snapshots to benchmark project](https://www.notion.so/flowfoundation/Create-Disks-from-EN-Snapshots-1311aee123248034a8d6e6c7bda17dde)
* [Created infrastructure for batch proccess execution](https://github.com/onflow/ff-sre-infrastructure/pull/55)
* [Create automation for standardizing batch process execution with snapshot data](https://github.com/onflow/ff-sre-automation/pull/1)
* [Add support for batch process timeouts](https://github.com/onflow/ff-sre-automation/pull/2)
* [Document Batch Process Execution and Extension](https://www.notion.so/flowfoundation/Batch-Job-Execution-13d1aee1232480d18f03e61f2d4b1f2b)
* Update integration & unit tests to support private cadence builds 

**Hyperlane Deployment**
* Deleted unnecessary validators 
* Updated hyperlane images & validated requirements 

**EVM GW**
* Created new TN & MN EVM GW endpoints for preview testing

**This sprint**
* Finish FF IAM Group migration
* Scope work to migrate domain registrars
* Continue evaluating SRE candidates
* Identify & document key SRE processes for the protocol team

---

