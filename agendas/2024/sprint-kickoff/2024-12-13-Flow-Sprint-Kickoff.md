# Overview

 ### Team Wins 🎉
 
 * EVM Dry-run deployed on Mainnet (enables more flexibility in configuring EVM traces and reduces load on ANs)
 * Completed [DB access abstraction](https://github.com/onflow/flow-go/pull/6465) - first step towards replacing Badger DB.

--- 

### Mainnet Uptime - Last 14 days (11/30/24 to 12/13/24) \[JP]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    100%       |       0%         |
| Block Sealing           | 99.9%   |    100%       |       0%         |
| Access API Liveness     | 99.9%   |    ?     |       ?      |

#### Incidents
* 


---


# Working Group Updates

### **Cadence and Virtual Machine** \[Jan]
Cycle Objective(s):

[Cadence Language](https://github.com/onflow/cadence/issues/3623)

[Cadence VM (execution environment)](https://github.com/onflow/flow-go/issues/6577)

**Done last sprint**

**Cadence Language**
- Cadence compiler
    - [Allow compiler to generate instructions, retarget VM to use instructions](https://github.com/onflow/cadence/pull/3715)
    - [Refactor instruction encoding/decoding](https://github.com/onflow/cadence/pull/3714)
    - [Refactor bytecode encoding](https://github.com/onflow/cadence/pull/3713)
    - Custom VM
        - [Improve and test instruction printer](https://github.com/onflow/cadence/pull/3706)
    - tech-debt removal: [Remove the old compiler and VM PoC](https://github.com/onflow/cadence/pull/3705)
- Performance improvement
    - [Lazily compute fields of account type values](https://github.com/onflow/cadence/pull/3710)

**Cadence Execution**
- [Add universal database operations](https://github.com/onflow/flow-go/pull/6465)
- Storage optimization: [Combine non-atree domain payloads into atree payloads](https://github.com/onflow/cadence/issues/3584)
- Execution validation - [Cadence backwards compatibility](https://github.com/onflow/flow-go/issues/6557)
    - [Backport v0.37 cmd add verify execution result](https://github.com/onflow/flow-go/pull/6791)
    - [[Util] Add verify execution result cmd](https://github.com/onflow/flow-go/pull/6746)

**EVM Core**
- Block re-execution fix: [Fix coinbase address change for old testnet](https://github.com/onflow/flow-go/pull/6763)

**EVM Gateway**
- Dry-run feature (local state index)
- Improving latency of eth_sendRawTransaction - [Enable validation of submitted transactions with local state index](https://github.com/onflow/flow-evm-gateway/pull/693)
    - [Make EVM transaction submission non-blocking](https://github.com/onflow/flow-evm-gateway/issues/654)
    - [Validate transactions using local state](https://github.com/onflow/flow-evm-gateway/issues/586)
    - [Improve key-rotation mechanism](https://github.com/onflow/flow-evm-gateway/issues/118)
- GW Hardening Improvements:
    - [Use instance of config instead of reference](https://github.com/onflow/flow-evm-gateway/pull/689)
    - EVM state checkpointing & tooling:
        - [Extract EVM state](https://github.com/onflow/flow-evm-gateway/pull/683)
        - [Refactor Export EVM State and Compare State Diff](https://github.com/onflow/flow-go/pull/6760)
        - [Add verification tool for evm offchain replay](https://github.com/onflow/flow-go/pull/6755)
- Bugfixes:
    - [eth_getLog() returns null instead of list if there are no transactions](https://github.com/onflow/flow-evm-gateway/issues/695)
    - [Fix logical error in `eth_estimateGas` endpoint](https://github.com/onflow/flow-evm-gateway/pull/690)
- Testing
    - [Use proper variable in E2E test file for logs filtering](https://github.com/onflow/flow-evm-gateway/pull/698)

**This sprint**

- Continue [EVM Gateway Hardening](https://github.com/onflow/flow-go/issues/6539) stretch goals & release 1.0.0.

- Cadence Language
  - Continue work on Content for [commuity outreach](https://github.com/onflow/cadence/issues/3596)
  - Continue work on the [Cadence compiler POC - Phase 2](https://github.com/onflow/cadence/issues/3692)
  - Continue work on [Cadence language Specification](https://github.com/onflow/cadence/issues/3599)
  - Start working on Blog post to communicate status & goals of the compiler POC.

- Cadence Execution
  - Complete [optimization for Cadence domain storage](https://github.com/onflow/cadence/issues/3584) - Testing
  - Continue new Trie research
  - Evaluate / Start [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)
  - Badger -> Pebble migration: continue work on [Chunk Data pack Pruner](https://github.com/onflow/flow-go/issues/6516)
  - Start work on [FVM Programs cache invalidation](https://github.com/onflow/flow-go/issues/6507)

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

**Automation**
- Create Grafana integration for routing messages to slack
- [Create infra for backwards compatibility automation](https://github.com/onflow/ff-sre-infrastructure/pull/70)
- [Create automation for verifying backwards compatibility](https://github.com/onflow/ff-sre-automation/pull/7)
- [Add polling and env var injection support to backwards compatibility automation](https://github.com/onflow/ff-sre-automation/pull/7)
- [Update backwards compatibility automation to use proper CDP dir](https://github.com/onflow/ff-sre-automation/pull/9)

**IAM Migration**
- Clean up old IAM access in GCP projects
- [Create Flow Foundation IAM groups](https://github.com/onflow/ff-sre-infrastructure/pull/54)
- Validate access with team members before cutover
- [Remove DL group access from FF GCP projects](https://github.com/onflow/ff-sre-infrastructure/pull/72)
- [Remove KMS key access](https://github.com/onflow/ff-sre-infrastructure/pull/75)

**GCR Migration**
- Validated and executed copy of all images to Artifact Registry

**Observability**
- Fix K6 synthetic monitor(s) to gracefully fail on request timeout

**Support**
- [Create IAC for DNS record](https://github.com/onflow/ff-sre-infrastructure/pull/74)
- [Create DNS record for docs.wallet.flow.com](https://github.com/onflow/ff-sre-infrastructure/pull/71) 
- [Remove unnecessary wildcard record](https://github.com/onflow/ff-sre-infrastructure/pull/73)

**This sprint**
* Fully migrate GCR to Artifact Registry
* Assist in setup of TN fork for testing
* Update CD workflow to leverage 
* Continue interviewing SRE Candidates

**On Hold**
**Active Epics**

---
