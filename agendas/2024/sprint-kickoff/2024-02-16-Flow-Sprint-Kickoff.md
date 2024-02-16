# Overview

 ### Team Wins 🎉
 
 * Released [CLI preview with Cadence 1.0 M7](https://forum.flow.com/t/update-on-cadence-1-0/5197/9?u=jan)
 * Cadence 1.0 migrations completed successfuly on Emulator state
 * Migration of core contracts upgraded to 1.0 now passed through the updated contract upgrade checker.
 * EVM Gateway end-end tests are passing now !
 * Delivered transaction manifest file updated to Cadence 1.0 to VacuumLabs, so they can finish the ledger app update.
 * HCU rolled out new cryptography module to mainnet. ([HCU release notes](https://github.com/onflow/flow-go/releases/tag/v0.33.8))
 * Working group calls started with two UX WG calls and a Wallet WG call. Defi WG call later today.

--- 

### Mainnet Uptime - Last 14 days (02/02/24 to 02/16/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    99.94%     |       59.5%       |
| Block Sealing           | 99.9%   |    99.94%     |       59.5%      |
| Access API Liveness (02/02/24 to 02/16/24)    | 99.9%   |    99.97%      |       29.8%      |

[YTD SLA](https://app.metrika.co/flow/dashboard/slas?tr=YTD): 99.99%

#### Incidents
* HCU on 7th Feb that took ~12 mins.
* Resource identifier changes ([retrospective](https://www.notion.so/dapperlabs/Resource-Identifier-changes-02-07-2024-f1ee35bf9575485a914d508aaa260c36))

---

### FLIPs Tracker \[Kshitij]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 7  |    6    |       0          |       5          |        **18**          |
| Proposed    | 3  |    1     |       2          |       1          |        **7**          |
| Accepted    | 2  |    1     |       1       |       2          |        **6**          |
| Rejected    | 0  |    0     |       1       |       0          |        **1**          |
| Implemented | 1  |    19    |       1       |       0          |        **21**          |
| Released    | 4  |    0     |       2       |       4          |        **10**          |
| Total       | **17**  |    **27**    |       **7**       |       **12**          |        **63**          |

- No FLIPs on the project tracker since first week Feb
- Some FLIPs are still not reflected in the project tracker. Examples -
    * FLIP 245: Cadence Date and Time - no issue
    * FLIP 198: Authorized Call - no issue
    * [Networking] FLIP: Message Forensic (MF) System #195 - no issue
- **Remember**: FLIP process starts with an issue creation.
(https://github.com/onflow/flips?tab=readme-ov-file#submitting-the-flip)

### Key Release Dates & Breaking Changes

- End of Feb - Previewnet (separate network for FlowEVM and Cadence 1.0).
- Testnet and mainnet sporks TBD.


---


# Working Group Updates

### **Cadence Language and Execution** \[Jan]
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

Cadence Language 

- 1.0 release
  - Updating dependencies:
    - [Update configuration of downstream dependencies](https://github.com/onflow/cadence/pull/3095)
    - flowkit: [1](https://github.com/onflow/cadence/pull/3109), [2](https://github.com/onflow/flixkit-go/pull/42), [3](https://github.com/onflow/flowkit/pull/12), [4](https://github.com/onflow/flowkit/pull/10)
    - cadence-tools: [1](https://github.com/onflow/cadence-tools/pull/291), [2](https://github.com/onflow/cadence-tools/pull/290), [3](https://github.com/onflow/cadence-tools/pull/289), [4](https://github.com/onflow/cadence-tools/pull/288)
    - [CLI](https://github.com/onflow/flow-cli/pull/1412), [flixkit](https://github.com/onflow/flixkit-go/pull/40), [flow-go](https://github.com/onflow/flow-go/pull/5393)
    - go sdk[1](https://github.com/onflow/flow-go-sdk/pull/579), [2](https://github.com/onflow/flow-go-sdk/pull/573)
    - emulator: [1]](https://github.com/onflow/flow-emulator/pull/573), [2](https://github.com/onflow/flow-emulator/pull/570)
    - flow-go feature branch updates / syncs with master: [1](https://github.com/onflow/flow-go/pull/5377), [2](https://github.com/onflow/flow-go/pull/5376), [3](https://github.com/onflow/flow-go/pull/5361), [4](https://github.com/onflow/flow-go/pull/5360), [5](https://github.com/onflow/flow-go/pull/5356)

  - Bugfixes:
    - [FunctionType.Equal() needs to check Purity equality ](https://github.com/onflow/cadence/issues/3104)
    - [Cadence 1.0 migration does not support decoding published values with path capability values](https://github.com/onflow/cadence/issues/3102)
    - [NPE when swapping a resource to itself](https://github.com/dapperlabs/cadence-internal/issues/207)
    - [CheckIntersectionType: also include interface conformances' members](https://github.com/onflow/cadence/issues/3091)
    - [Restricted types / intersection types do not allow contract interfaces](https://github.com/onflow/cadence/issues/3088)
    - [Make capability ID mapping thread-safe](https://github.com/onflow/cadence/pull/3085)
    - [Fix intersection type migration: also migrate interface types](https://github.com/onflow/cadence/pull/3084)
    - porting internal fixes: [1](https://github.com/onflow/cadence/pull/3078)

  - Improvements:
    - [Improve member resolvers](https://github.com/onflow/cadence/pull/3092)
    - [Unify the requirement for all interface types to have to occur in intersection types](https://github.com/onflow/cadence/pull/3090)

  - Migrations
    - fixes and improvements: [1](https://github.com/onflow/cadence/pull/3073), [2](https://github.com/onflow/cadence/pull/3072), [3](https://github.com/onflow/flow-go/pull/5353)
    - [Enable state migration on emulator](https://github.com/onflow/cadence/issues/3063)

  - To help with Cadence 1.0 migrations, we created a utility program that extracts payloads by account address for creating a subset of execution state, useful for debuggin / testing migrations with much shorter iterations: [Add utility to extract payloads by addresses](https://github.com/onflow/flow-go/pull/5389)

- Tooling: [Replace existing tool to fetch network contracts with Flowdiver-based one](https://github.com/onflow/cadence/pull/3058)

- v0.42
  - bringing back a fix that was reverted in the public branch for MN24 HCU2 (did not make it to the prvate build): [v0.42 Handle optional storage references](https://github.com/onflow/cadence/pull/3094)
  - security fixes:
    - (deployed in MN 24 HCU 2): [1](https://github.com/dapperlabs/cadence-internal/pull/201), [2](https://github.com/dapperlabs/cadence-internal/pull/199)
    - [3](https://github.com/dapperlabs/cadence-internal/pull/206), [4](https://github.com/dapperlabs/cadence-internal/pull/204)
  - [porting ofinternal fixes](https://github.com/onflow/cadence/pull/3076)
  - MN HCU build prep: [1](https://github.com/dapperlabs/flow-go/pull/6946)

EVM
- [Add COA ownership proofs](https://github.com/onflow/flow-go/issues/5197)
- [Set nonce for direct calls](https://github.com/onflow/flow-go/pull/5373)
- [Smart contract deployment for COAs](https://github.com/onflow/flow-go/pull/5269)
- [Benchmark transactions running EVM operations on benchnet](https://github.com/onflow/flow-go/issues/5099)
- JSON-RPC
    - [Implement the eth_getBlockReceipts JSON-RPC endpoint](https://github.com/onflow/flow-evm-gateway/pull/44)
    - [Add more block & tx related endpoints](https://github.com/onflow/flow-evm-gateway/pull/43)
    - [Implement the eth_getBalance JSON-RPC endpoint](https://github.com/onflow/flow-evm-gateway/pull/42)
    - [Make value returned by eth_gasPrice configurable](https://github.com/onflow/flow-evm-gateway/pull/39)
    - [Update to latest additions in flow-go and cadence](https://github.com/onflow/flow-evm-gateway/pull/48)
    - [Implement API endpoints which store and index transactions plus other tx-related endpoints](https://github.com/onflow/flow-evm-gateway/issues/4)
    - Indexer
       - [Decode the events into relevant types](https://github.com/onflow/flow-evm-gateway/issues/16) 
  
Cadence Execution

- Reviving Batchscan to use for new performance & scalability metrics (for analyzing in-depth state data): [Upgrade dependencies](https://github.com/onflow/flow-batch-scan/pull/36)
- Improved EN startup sequence tracking: [Log progress of loading wal segment file](https://github.com/onflow/flow-go/pull/5367), [Log read segment](https://github.com/onflow/wal/pull/3)

E2E tests
- bugfixes: [BUG Random-related tests fail](https://github.com/onflow/flow-e2e-tests/issues/54), [Fix port of localnet host](https://github.com/onflow/flow-e2e-tests/pull/55)

**This sprint**

EVM
* O1_KR3: Release EVM early access including EVM Core, CLI and JSON-RPC to emulator and Crescendo PReview Net

Cadence Language
* O1_KR2: Release Cadence 1.0 RC1 on Crescendo Preview network
* O1_KR1: Complete C1.0 migrations testing on Testnet State
* O1_KR1: Release Flow CLI with contract migration testing enabled, including first version of updated upgrade checker
* O1_KR6: Review draft of disaster recovery plan

Cadence Execution
* O3_KR1: Collect data on state growth
* O4_KR2: Continue "unstaked execution node test environment" POC.

**On Hold**

Objective 2: Calibrate Transaction fees so that they accurately reflect resource usage during execution and deploy as part of Crescendo to avoid future disruption
- KR1: Update weights for the execution operations on TN and MN
  - [Execution effort recalibration - data collection](https://github.com/onflow/flow-go/issues/5026)


**Active Epics**

Objective 1: Upgrade Mainnet to Crescendo Release with minimal impact on developers, to lower the barrier for cross chain liquidity on Flow
- KR1: Enable Developers and the Flow Foundation to simulate Cadence 1.0 Contract upgrades
- KR2: Launch Cadence 1.0 on Crescendo Testnet
- KR3: Launch EVM on Crescendo Testnet
Objective 3: Analyze execution runtime trends and risks to plan next set of scalability OKRs
- KR1: Measure execution state growth trends, identify future bottlenecks and prioritize by urgency

---

### **Core Protocol** \[Jerome]
Cycle Objective(s): 

* Translate crypto performance improvements to consensus block rate increase
* Provide developers secure and non-rate limited way to access all of chain data (transactions, blocks, account balance, events, account balance etc) by locally running an access or an observer node
* Reduce CPU usage on Execution node by 30%
* Continue BFT mitigations to enable 10 permissionless ANs
* Continue design of Dynamic Protocol 

**Done last sprint**

- Dynamic Protocol State
   -  [Design - Dynamic Protocol State Key-Value Store](https://www.notion.so/dapperlabs/Protocol-state-key-value-storage-497326ff9cf44ff4a70610a0dad329b3?pvs=4) - generalizing Dynamic Protocol State beyond identity table changes 
      - Finalized the design, created and estimated epic issues
      - Took final pass over the document
      - Started implemention of KV store, issues completed:
          - [Implemented core types for KV store models](https://github.com/onflow/flow-go/issues/5305)
          - [Implemented storage layer for KV store snapshots](https://github.com/onflow/flow-go/issues/5292)
- BFT Mitigations
  - [Simplifying RPC inspection misbehavior notification handling](https://github.com/onflow/flow-go/pull/5398)
  - [GossipSub RPC inspection documentation](https://github.com/onflow/flow-go/pull/5362)
  - [Invalid topic ID threshold](https://github.com/onflow/flow-go/pull/5391)
  - Flakey test debug and fix
      - https://github.com/onflow/flow-go/pull/5374
      - https://github.com/onflow/flow-go/pull/5355
      - https://github.com/onflow/flow-go/pull/5323
- Access Nodes
  - [State Sync] Enable execution state sync to public network - KROK Team (https://github.com/onflow/flow-go/pull/5253)

    
**This sprint**

- Dynamic Protocol State
   - [Design - Sporkless Epoch Fallback Recovery](https://www.notion.so/dapperlabs/Spork-less-Epoch-Fallback-Recovery-Design-II-Epoch-Extensions-a7673e45e9064d12b6b48aa517bd1763?pvs=4) - enabling recovery from EFM via governance multisig and without spork
      - Review and iteration on latest design
   - Continue implementation of KV store
- Execution state sync
   - [upgrading libp2p version to v0.32.0](https://github.com/onflow/flow-go/issues/4934)
- BFT Mitigations
   - Continue to stabilize networking tests (debug, fix, upgrade) and add further improvements to the RPC inspector
      - [Reject entire RPC from unstaked peer](https://github.com/dapperlabs/flow-internal/issues/1909)
      - [Add deduplication to RPC inspector queue and update tests](https://github.com/dapperlabs/flow-internal/issues/1910)
- Access Nodes
   - Working on register caching for script exec
   - Fixing an issue with event order in streaming API and rolling local events in Access API to QN
  
**On Hold**
- N/A

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

* Completed doc revisions for Band Oracle
* Met with Pyth team who will report back on feasibility and timeline for EVM oracle integration
* Completed LayerZero intake process
* Continue Flow JVM-SDK update 

**This sprint**

* 

**On Hold**
- Waiting on Axelar changes to unblock launch at end of Q1

**Active Epics**

- Establish Defi/Liquidity infrastructure for Cadence 1.0 update
- Ensure Flow has best-in-class on- and off-ramps for USDC liquidity across DeFi ecosystem
- Expand Flow DeFi ecosystem primitives and protocols

---

### **User Experience [G]**

**Cycle Objective(s):**

- Bring Cadence 1.0 to market as part of the Crescendo release to minimize customer impact and developer effort
- Bring EVM on Flow to Market as part of the Crescendo release to increase liquidity and bring top-tier developer platforms to our network
- Use the Crescendo Release grow Flow's developer base and network activity

**Done last sprint**

**Team Wins**
- Launched initial EVM docs
- Cadence Extension Linter

**Docs**

- Updated CLI Quickstart to use new commands like “generate”
- Add/Update Cadence 1.0 Messaging across sites (Cadence 1.0 banner on Playground, Docs, Cadence-lang, and NFT catalog)
- MVP Doc Changes v3.0
- [Add FT/NFT Migration Guides and Best Practices Docs](https://github.com/onflow/docs/issues/529)

**Development**

- Setup FCL Discovery for Crescendo
- Completing work on Staged Contract Manager for Crescendo and Testnet
- Implemented feature to switch between current CLI and C1 CLI
- [Auto-fixes and warnings in VSCode for code incompatible with C1.0](https://github.com/onflow/vscode-cadence/issues/501)
- [Add C1.0 Rules to Cadence Linter](https://github.com/orgs/onflow/projects/13/views/85?pane=issue&itemId=51952640)

**This sprint**

**Sprint Goal**
- Support Crescendo and EVM launch at ETH Denver with tools, documentation, demos.

**List of Issues to be worked on**
- Updating the Crescendo Faucet to enable Testnet Flow deposits to both Cadence and EVM accounts [#69](https://github.com/orgs/onflow/projects/13/views/85?pane=issue&itemId=52049956)
- Update Crescendo network details (name, chain-id) across docs/tools [#1350](https://github.com/orgs/onflow/projects/13/views/85?pane=issue&itemId=50297186)
- Add C1.0 linter command to CLI [#1395](https://github.com/onflow/flow-cli/issues/1395)
- Flow contract migration manager
  - Staging - [#1375](https://github.com/onflow/flow-cli/issues/1375)
  - Migration - Emulator command for migrating contracts/state to Cadence 1.0 [#571](https://github.com/onflow/flow-emulator/issues/571)
- Add Cadence Logo to VSCode Extension [#537](https://github.com/orgs/onflow/projects/13/views/85?pane=issue&itemId=53419793)
- Active Contract Cluster Discovery and Report

**On Hold**
- 

**Active Epics**
- 

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
Cycle Objective(s): 
- Migrate Flow metrics & logs to Flow Foundation grafana account to reduce cost on DapperLabs
- Support launch of PreviewNet (Crescendo) and EVM 
- Reduce observability costs

**Done last sprint**
- Crescendo Previewnet
    - [Create infrastructure for Crescendo Previewnet](https://github.com/dapperlabs/terraform/pull/4148) 
    - [Create configuration for Crescendo Previewnet](https://github.com/dapperlabs/dapper-flow-hosting/pull/1455)
- DapperLabs Node Support
    - [Update nodes to reduce logging](https://github.com/dapperlabs/dapper-flow-hosting/pull/1447) 
- Protocol Support
    - [Create KMS Keys for staging contracts](https://github.com/dapperlabs/terraform/pull/4139) 
    - [Grant Flow Devex access to support hardware wallet migration](https://github.com/dapperlabs/terraform/pull/4146)
- Node Hosting Support
    - [Update instance sizes on Crescendo & Devnet](https://github.com/dapperlabs/terraform/pull/4137) 
    - [Update disk space for nodes on Crescendo](https://github.com/dapperlabs/terraform/pull/4136)
    - [Update Crescendo AN nodes sizes](https://github.com/dapperlabs/terraform/pull/4140)
    - [Increase Devnet LN & VN disk sizes](https://github.com/dapperlabs/terraform/pull/4141)
- Grafana Migration 
    - [Work with team to identify metrics to drop to realize series savings](https://www.notion.so/dapperlabs/Observability-Savings-ff0b5320cbd54f8b958aedecf1f8a011)
    - [Update cloud-init configurations to support new logging endpoint](https://github.com/dapperlabs/terraform/pull/4138) 
    - [Update historical Devnet logging configurations](httpr://github.com/dapperlabs/terraform/pull/4143)
    - [Update prometheus to use new credentials and endpoint](https://github.com/dapperlabs/dapper-flow-hosting/pull/1453)
    - [Update historical node configuration to use to use new credentials and reduce logging](https://github.com/dapperlabs/dapper-flow-hosting/pull/1450)

- Completed initial EVM JSON-RPC infra standup for Crescendo PreviewNet
   - [Setup improvements for running the Flow EVM Gateway](https://github.com/onflow/flow-evm-gateway/pull/46)
   - [Fix build errors](https://github.com/onflow/flow-evm-gateway/pull/50)
   - [Setup terraform automation for Crescendo JSON-RPC node](https://github.com/onflow/flow-evm-gateway/pull/45)


**Goal of Sprint is to prepare for GCP migration to FF account** 
**This Sprint**
- Support Crescendo Previewnet by enabling alerting, observability, and configuration
- Begin preparing for GCP migration of accounts
- Migrate a single account to evaluate process of migration and rollback
- Begin dropping high cardinality metrics to reduce observability costs

---

### **Governance and Tokenomics** \[Vishal]
Cycle Objective(s): Transaction fees on EVM, increasing transaction fees and inflation reduction plan.

**Done last sprint**

- Market research on Flow transaction fees vs other networks
- Assessed gas to computation ratio - fixed at 1000:1 for crescendo network launch
- Grant management and commitment projection tracker handoff to Michele from Kshtijij
- Impact of 10x vs 100x transaction fee on partners’ annual costs

**This sprint**

- Research on inflation strategy
- Investigate the impact of computation limit increase
- Present Tokenomics proposals to GWG (27 Feb) - computation limit, g2c ratio, txn fee
- Publish Tokenomics & Governance Roadmap


**On Hold**

- N/A


**Active Epics**

- N/A

