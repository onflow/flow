# Overview

### Team Wins 🎉
- Deprecated K8s clusters that will result in $6.5k per month in infra savings (JP)
- Script execution on the access node turned on for NBA nodes successfully.
- Script execution turned on 50% of the public access node.
- 2 remaining Testnet upgrade blockers in Cadence 1.0 resolved!
    - Performance of execution state diff tool was [improved 50x]((https://github.com/onflow/flow-go/pull/6107)) - this enabled us to validate and close the last remaining Cadence 1.0 migration blocker.
        - Successfuly validated last remaining Cadence 1.0 migration issue ([dictionary key migration](https://github.com/onflow/cadence/issues/3407))
    - [FLIP for changing import statement semantics](https://github.com/onflow/flips/pull/277) approved - this removed last Crescendo blocker in Cadence 1.0.
- Completed 2 EVM GW Features that were Testnet upgrade blockers: [Securing Flow account keys](https://github.com/onflow/flow-evm-gateway/issues/250) and [Fee history API](https://github.com/onflow/flow-evm-gateway/issues/143).
- EN Badger DB -> Pebble DB POC - devnet ENs are running with pebble-based chunk data pack storage, disk usage growth slowed down from 1.7% to 1% / day.
- Transaction Audit / inpection logic now [supports percentage-based transaction failure mode](https://github.com/onflow/contract-updater/pull/35), using on-chain randomness.

### General updates

### OOO
- [Full List](https://www.notion.so/flowfoundation/de89aa4e79364216a665888335a1cdee?v=4de18b26f60d4bae8f62724dddcce260)

---

### Mainnet Uptime - Last 14 days (05/25/24 to 06/07/24) \[JP]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    99.95%     |       49.6%      |
| Block Sealing           | 99.9%   |    99.90%     |       99.3%      |
| Access API Liveness     | 99.9%   |    ? dashboard broken 😔  |       ?          |

[SLO dashboards](https://flowfoundation.grafana.net/d/hgW3l-m4k/slo-dashboard?orgId=1&from=now-2w&to=now)

[YTD SLA: 99.919%](https://app.metrika.co/flow/dashboard/slas?tr=YTD)

## Incidents

### Mainnet
- June 13th: Sev-1 - Execution fork during the mainnet HCU - [Postmortem](https://www.notion.so/flowfoundation/Retro-on-execution-fork-01504b970441477ebfc0174d14dcb269)


(Sev [definition](https://www.notion.so/dapperlabs/Incident-Priorities-Severity-Levels-b65d7682336c46baa025ee512fd3efa3))

### Key Release Dates & Breaking Changes
- Next Mainnet/Testnet network upgrade (spork):
  - Testnet: Q3
  - Mainnet: Q3 (see [announcement](https://flow.com/post/update-on-testnet-crescendo-network-upgrade))

---

### FLIPs Tracker \[Kshitij]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 7  |    9 (+1)  |       0         |       7          |        **23** (+1)       |
| Proposed    | 1  |    2     |       2 (-1)          |       0           |        **5** (-1)        |
| Accepted    | 2  |    1     |       2 (+1       |       1          |        **6** (+1)          |
| Rejected    | 0  |    0     |       1       |       0          |        **1**          |
| Implemented | 3 |    21    |       2       |       1           |        **7**          |
| Released    | 4  |    0     |       3       |       6          |        **13**          |
| Total       | **17**  |    **33** (+1)  |       **10**      |       **15**          |        **75** (+1)          |

**Updates**
* [Cadence] - Type Removal In Contract Updates (FLIP 275) was drafted
* [Governance] - Computation Limit hike (FLIP 267) was accepted
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

State migration for Crescendo release
- utilities for debugging migration
    - [Add atree-inlined-status command to util program to check migration results](https://github.com/onflow/flow-go/pull/6063)
    - [Port atree-inlined-status cmd (PR 6063) to feature/atree-inlining-cadence-v0.42](https://github.com/onflow/flow-go/pull/6075)
    - [diff-states command takes too long comparing mainnet states](https://github.com/onflow/flow-go/issues/6091)
        - [Optimize diff-states cmd by comparing data in parallel](https://github.com/onflow/flow-go/pull/6097)
        - [Fix panic in `diff-states` command when comparing enum dict key](https://github.com/onflow/flow-go/pull/6098)
        - [Optimize diff-states to diff storage elems in parallel for large accounts](https://github.com/onflow/flow-go/pull/6105)
        - [Speedup diff-states by over 50x (6+ days -> under 3 hours) by removing old bottleneck](https://github.com/onflow/flow-go/pull/6107)
    - [Improve diff tool: Add a flag which forces value comparison](https://github.com/onflow/flow-go/pull/6120)
- Bugfixes
    - [Migrate empty storage map in atree migration](https://github.com/onflow/flow-go/pull/6064)
    - [Migrations should detect and log unrecognized domains](https://github.com/onflow/flow-go/issues/6076)
        - [Detect and log unrecognized domains during migration](https://github.com/onflow/flow-go/pull/6077)
    - [Migrations are not migrating payloads in PathCapabilityStorageDomain](https://github.com/onflow/flow-go/issues/6069)
        - [Also migrate path-capability and account-capability storage maps](https://github.com/onflow/cadence/pull/3411)
        - [Fix Cadence 1.0 migration missing PathCapabilityStorageDomain](https://github.com/onflow/flow-go/pull/6070)
        - [Fix migrations missing PathCapabilityStorageDomain in feature/atree-inlining-cadence-v0.42](https://github.com/onflow/flow-go/pull/6071)
    - [Migrations are not migrating payloads in account capability domain](https://github.com/onflow/flow-go/issues/6072)
        - [Fix atree migration not migrating payloads from AccountCapabilityStorageDomain (feature/atree-inlining-cadence-v0.42)](https://github.com/onflow/flow-go/pull/6073)
        - [Fix migrations missing AccountCapabilityStorageDomain](https://github.com/onflow/flow-go/pull/6074)
- optimizations
    - [Optionally cache migration results](https://github.com/onflow/flow-go/pull/6041)
    - [Use Profile-Guided Optimization (PGO) to speedup programs (e.g. migrations) by up to ~14%](https://github.com/onflow/cadence/issues/3303)
        - [Profile whole state extraction, not just migration](https://github.com/onflow/flow-go/pull/6121)
    - [Optimize contracts checking migration](https://github.com/onflow/flow-go/pull/6122)
    - Atree register inlining
        - porting and modify: [PR 5897](https://github.com/onflow/flow-go/pull/6043), [PR 5914](https://github.com/onflow/flow-go/pull/6046), [PR 5920](https://github.com/onflow/flow-go/pull/6047), [PR 5929](https://github.com/onflow/flow-go/pull/6048), [PR 5948](https://github.com/onflow/flow-go/pull/6049), [PR 5942](https://github.com/onflow/flow-go/pull/6050), [PR #5901](https://github.com/onflow/flow-go/issues/6130)
- Transaction Audit / inpection logic (failing Tx when importing unstaged dependency)
    - [Add random chance to panic mode for DependencyAudit](https://github.com/onflow/contract-updater/pull/35)
- Improvements
    - [Report checked code](https://github.com/onflow/flow-go/pull/6140)

Cadence Language
- Security improvements & bugfixes
    - [Prevent storage reference to another reference](https://github.com/onflow/cadence/pull/3404)
    - [Add access top type to model inaccessible access for identity maps](https://github.com/onflow/cadence/pull/3406)
    - [Simplify nil-coalescing checking](https://github.com/onflow/cadence/pull/3423)
- Add feature flag for contested feature
    - [Put feature that allows type removals in contract updates behind a feature flag, disabled by default](https://github.com/onflow/cadence/pull/3410)
- Improvements
    - [Ensure contracts cannot be borrowed with an authorization](https://github.com/onflow/cadence/pull/3421)
    - [Improve dump-builtin-types command: Handle parameterized types](https://github.com/onflow/cadence/pull/3425)
- Tech debt
    - [Add purity annotations to newly added functions](https://github.com/onflow/cadence/issues/2466)
        - [Improve InclusiveRange type](https://github.com/onflow/cadence/pull/3426)
- Bugfix
    - [Fix JSON output](https://github.com/onflow/cadence/pull/3413)
    - [v0.42 - Fix JSON output](https://github.com/onflow/cadence/pull/3412)
- Docs
    - [Document reserved identifiers, use 'identifiers' instead of 'names'](https://github.com/onflow/cadence-lang.org/pull/118)
    - [Update type hierarchy diagram](https://github.com/onflow/cadence-lang.org/pull/119)
    - [Update command for CLI installation](https://github.com/onflow/cadence-lang.org/pull/122)

Cadence tooling
- Lint feature: [Report unused results](https://github.com/onflow/cadence-tools/issues/9)
    - [Add analyzer which detects unused results](https://github.com/onflow/cadence-tools/pull/383)
- updater tool
    - [Improve parsing of commit from Go's pseudo-version in update tool](https://github.com/onflow/cadence/pull/3418)
    - [Update config](https://github.com/onflow/cadence/pull/3435)
- [Add command to dump all hard keywords](https://github.com/onflow/cadence/pull/3431)


Cadence Execution
- [Execution Effort Calibration 2](https://github.com/onflow/flow-go/issues/5598)
    - [Change metrics collection in computer](https://github.com/onflow/flow-go/pull/6044)
- badger DB -> pebble DB migration POC
    - [Move chunk data pack from badger to pebble](https://github.com/onflow/flow-go/issues/6040)
- CBOR Improvements
    - [Improve byte string format decoding options](https://github.com/fxamacker/cbor/pull/550)
    - [Replace *errors.errorString with more specific error type for "inadmissible type for tag content"](https://github.com/fxamacker/cbor/issues/551)
    - [Allow user to specify buffer by adding `cbor.MarshalToBuffer()`, `UserBufferEncMode` interface, etc.](https://github.com/fxamacker/cbor/pull/553)
    - [Rename ByteSliceMode to ByteSliceLaterFormatMode, etc](https://github.com/fxamacker/cbor/pull/554)
- Improvements
    - [Log epoch height view](https://github.com/onflow/flow-go/pull/6095)
- Tooling
    - [Add util for finding trie root hash](https://github.com/onflow/flow-go/pull/6094)
- chores / dependency updates
    - flixkit-go: [1](https://github.com/onflow/flixkit-go/pull/27), [2](https://github.com/onflow/flixkit-go/pull/70)
    - flow-go: [1](https://github.com/onflow/flow-go/pull/6052), [2](https://github.com/onflow/flow-go/pull/6080), [3](https://github.com/onflow/flow-go/pull/6081), [4](https://github.com/onflow/flow-go/pull/6087), [5](https://github.com/onflow/flow-go/pull/6093), [6](https://github.com/onflow/flow-go/pull/6111), [7](https://github.com/onflow/flow-go/pull/6124), [8](https://github.com/onflow/flow-go/pull/6126), [9](https://github.com/onflow/flow-go/pull/6127)
    - flow-evm-gateway: [1](https://github.com/onflow/flow-evm-gateway/pull/286), [2](https://github.com/onflow/flow-evm-gateway/pull/300), [3](https://github.com/onflow/flow-evm-gateway/pull/301)
    - Cadence: [1](https://github.com/onflow/cadence/pull/3414), [2](https://github.com/onflow/cadence/pull/3416), [3](https://github.com/onflow/cadence/pull/3427), [4](https://github.com/onflow/cadence/pull/3430)
    - flow-go-sdk: [1](https://github.com/onflow/flow-go-sdk/pull/684)
    - Cadence tools: [1](https://github.com/onflow/cadence-tools/pull/386), [2](https://github.com/onflow/cadence-tools/pull/387), [3](https://github.com/onflow/cadence-tools/pull/388), [4](https://github.com/onflow/cadence-tools/pull/389)
    - Emulator: [1](https://github.com/onflow/flow-emulator/pull/691), [2](https://github.com/onflow/flow-emulator/pull/692)
    - flowkit: [1](https://github.com/onflow/flowkit/pull/61)
    - CLI: [1](https://github.com/onflow/flow-cli/pull/1653)

EVM Gateway
- Features
    - [Securing Flow account keys](https://github.com/onflow/flow-evm-gateway/issues/250)
        - [Implement a KeyRotationSigner version of crypto.Signer for usage with Cloud KMS keys](https://github.com/onflow/flow-evm-gateway/pull/282)
    - [Fee history API](https://github.com/onflow/flow-evm-gateway/issues/143)
        - [Add a first implementation for eth_feeHistory JSON-RPC API endpoint](https://github.com/onflow/flow-evm-gateway/pull/253)
    - [Implement the missing debug_traceTransaction method](https://github.com/onflow/flow-evm-gateway/issues/251)
        - [Ingest and index transaction traces](https://github.com/onflow/flow-evm-gateway/pull/281)
        - [Add support for debug trace APIs](https://github.com/onflow/flow-evm-gateway/pull/291)
    - [Direct Calls should be treated as a LegacyTx](https://github.com/onflow/flow-evm-gateway/issues/307)
        - [Update returned type for direct calls to LegacyTx geth type](https://github.com/onflow/flow-evm-gateway/pull/308)
- Improvements
    - [Remove check of non-public data](https://github.com/onflow/flow-evm-gateway/pull/285)
    - trace API: [Use public bucket](https://github.com/onflow/flow-evm-gateway/pull/287)
    - [Change rate limit logs level](https://github.com/onflow/flow-evm-gateway/pull/298)
    - [General improvements tech-debt](https://github.com/onflow/flow-evm-gateway/pull/305)
    - [Update eth_call to correctly handle execution reverts](https://github.com/onflow/flow-evm-gateway/issues/296)
        - [Properly handle execution reverts in eth_call JSON-RPC endpoint](https://github.com/onflow/flow-evm-gateway/pull/297)
    - [Fix flaky E2E `eth_streaming_test` JS test](https://github.com/onflow/flow-evm-gateway/pull/289)
- Bugfixes
    - [eth_getTransactionByHash method doesn't return chainId](https://github.com/onflow/flow-evm-gateway/issues/306)
        - [Add missing fields to the response of eth_getTransactionByHash](https://github.com/onflow/flow-evm-gateway/pull/309)

EVM Core
- Improvements
    - [Take into account gas refunds in EVM.dryRun](https://github.com/onflow/flow-go/pull/6059)
    - [Update eth_estimateGas to correctly handle execution reverts](https://github.com/onflow/flow-evm-gateway/issues/302)
        - [Update eth_estimateGas to correctly handle execution reverts](https://github.com/onflow/flow-evm-gateway/pull/303)

**This sprint**

DONE: Objective 1, KR 1: Enable Developers and the Flow Foundation to simulate Cadence 1.0 Contract upgrades
* All breaking changed released in a new CLI: v1.18.0-cadence-v1.0.0-preview.26

IN PROGRESS: Objective 1, KR4: Testnet Upgrade to Crescendo Release
* Completed Testnet migration with both Atree inlining and Cadence 1.0.
* Completed [EVM Gateway development](https://github.com/onflow/flow-evm-gateway/issues/126) and [EVM Core development](https://github.com/onflow/flow-go/issues/5536) production readiness EPICs.
* Continue work on migration optimizations.
* Investigate / Fix any security report incoming from bug bounty.
* Finish implementation of remaining EVM blockers: [1](https://github.com/onflow/flow-go/pull/6136), [2](https://github.com/onflow/flow-go/pull/6118)
* Evaluate fixing [Random beacon history taking more space on chain than expected](https://github.com/onflow/flow-go/issues/5550)

IN PROGRESS: Objective 2, KR 1: Update transaction fees weights for the execution operations on TN and MN
* Continue work on [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)

DONE: Objective 4, KR1: Execution node handles restart from spork root block reguardless of how many blocks it is behind
* Completed refactoring of Ingestion engine to [prevent EN entering crash loop](https://github.com/onflow/flow-go/issues/5298)

Cadence 1.0 Contract updates
- [Continue working through contract standards needing upgrade to C1.0](https://github.com/onflow/docs/issues/716)
- More reviews of bridge PRs and Cadence 1.0 changes 
- Writing additional tests for recent Cadence FLIP changes
- [Audit and update docs and tutorials for Cadence 1.0](https://github.com/onflow/docs/issues/531)

**On Hold**

ON HOLD: Objective 3: Analyze execution runtime trends and risks to plan next set of scalability OKRs
* Continue work on making [Make TPS loader input more flexible](https://github.com/onflow/flow-go/issues/5490) for better analysis and tracking of performance data.

ON HOLD: * Start Atree optimization: [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)

**Active Epics**


---

### **Core Protocol** \[Jerome]
Cycle Objective(s): 

* Provide developers secure and non-rate limited way to access all of chain data (transactions, blocks, account balance, events, account balance etc) by locally running an access or an observer node
* Reduce CPU usage on Execution node by 30% [GOAL MODIFIED]
* Translate crypto performance improvements to consensus block rate increase [DONE]
* Continue design and implementation of Sporkless Epoch Fallback Recovery solution [DONE]

**Done last Sprint:**


**This sprint**

* <ins>EFM Recovery</ins>
  - Finish https://github.com/onflow/flow-go/issues/5727
  - [Finish Epoch manager QC voting changes](https://github.com/onflow/flow-go/issues/5733) (implementing tests)
  - Ongoing review by SC team: [EpochRecover cadence transaction](https://github.com/onflow/flow-core-contracts/pull/420)
  - [Blocktime controller EFM changes])(https://github.com/onflow/flow-go/issues/5732)
  - [`epochs.FallbackStateMachine` only tolerates narrow unexpected behaviour](https://github.com/onflow/flow-go/issues/6018)
  - [Epoch State Machines should not use parentState in their business logic](https://github.com/onflow/flow-go/issues/6019)

* <ins>Data Availability:</ins>
  - [Complete RegistersDB pruning design, start on protocol db design](https://github.com/onflow/flow-go/issues/5761)
  - Continue redeploy of local index and script exec on QN bare metal instances
  - KROK Team
    - Fix retries when using preferred-execution-nodes list ([Issue #5810](https://github.com/onflow/flow-go/issues/5810) - PR in review)
    - Add support for version beacon events to control script execution ([Issue #5788](https://github.com/onflow/flow-go/issues/5788), [Issue #5789](https://github.com/onflow/flow-go/issues/5789), [Issue #5790](https://github.com/onflow/flow-go/issues/5790))
    - Expose separate endpoints for getting account balance and keys ([Issue #5894](https://github.com/onflow/flow-go/issues/5894), [Issue #5999](https://github.com/onflow/flow-go/issues/5999))
    - Create proof of concept of transaction payer balance checks ([Issue #5823](https://github.com/onflow/flow-go/issues/5823))
    - Add support for pruning execution data db on ANs ([Issue #6002](https://github.com/onflow/flow-go/issues/6002))
    - Add support for storing exec data using pebble db ([Issue #6017](https://github.com/onflow/flow-go/issues/6017))

* <ins>Cryptography:</ins>
   - SPoCK aggregation: from BLS security proof to BLS aggregation security proof (more than a sprint)

* <ins>Rosetta:</ins>
  - KROK: 
    - Last items Rosetta Cadence updates for Crescendo ([Issue #52](https://github.com/onflow/rosetta/issues/52), [Issue #54](https://github.com/onflow/rosetta/issues/54) - PRs in review)
  - DistributedLab: 
    - Continue with remaining updates for Rosetta for EVM on Flow 
    
* <ins>Other:</ins>   
  - Complete high level 2-pager of public roadmap & vision for protocol decentralization & permissionless consensus on Flow
  - Continue content piece for public roadmap & vision for protocol decentralization; current challenges and upcoming updates for permissionless consensus on Flow.

**On Hold**
* Implement BFT mitigations to enable 20 permissionless ANs

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
- Cadence 1.0 DEX Prep - IncrementFi
- EVM partner onboarding: Moralis, Covalent, Ankr
- Deliver Axelar bridge [PAUSED]

**Done last sprint**


**This sprint**
* Backfill missing API methods to JVM SDK
* Review of new hash additions PR for JVM-SDK

**On Hold**
- Axelar Cadence bridge release waiting confirmation of build partners, costs and timelines for EVM release, no engineering ongoing

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
**Sprint goal focusing on: Flow Port Asset Bridge and Token Transfer, FCL x WalletConnect Improvements, Crescendo Rewards**

- [EPIC] Flow Port Asset Bridge [#284](https://github.com/onflow/flow-port/issues/284)
- [EPIC] EVM Docs [#654](https://github.com/onflow/docs/issues/654)
- [EPIC] Flow EVM Docs - Cadence Dev [#575](https://github.com/onflow/docs/issues/575)
- [EPIC] Update Flow port for Cadence v1.0 instance [#279](https://github.com/onflow/flow-port/issues/279)
- [EPIC] FCL WalletConnect Improvements https://github.com/onflow/fcl-js/issues/1872
- [EPIC] Crescendo Rewards Portal
  - [FE](https://github.com/onflow/crescendo-rewards/issues/1 )
  - [BE](https://github.com/onflow/crescendo-rewards-be/issues/1)
  - [SC](https://github.com/onflow/crescendo-rewards-sc/issues/7)

#### Smart Contract WG

- Reviews for Increment.fi
- Circle Support
- Add Solidity implementation using EVM randomness
- Discovery Design Inbox Standard

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

- Continue to better support Secure Enclave
  - User migration from Extension (seed phrase) to mobile (secure enclave) wallet security
  - New account creation UI explaining the benefits of SE
  - Explain any UI differences between seed phrase / SE wallets
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

CloudFlare Migration

- Worked with Sales rep to get new account quote
- Deprecated K8s dependencies on CloudFlare

DevEx Migration
- [Migrate CAST applications to Cloud Run](https://github.com/dapperlabs/flow-devex-infrastructure/pull/163)
- [Deleted old CAST K8s cluster(s)](https://github.com/dapperlabs/cast-infrastructure/pull/60)
- [Deleted old DevEx K8s cluster(s)](https://github.com/dapperlabs/flow-devex-infrastructure/pull/178)
- [Deleted K8s config](https://github.com/dapperlabs/flow-devex-infrastructure/pull/179)
- [Update Cloud Run services to limit scaling](https://github.com/dapperlabs/flow-devex-infrastructure/pull/173)
- [Update Cloud Run module to limit unnecessary deploys](https://github.com/dapperlabs/flow-devex-infrastructure/pull/180)

Node Hosting
- Assisted with Mainnet HCUs
- [Addressed bugs in historical node setup used for EN testing](https://github.com/dapperlabs/dapper-flow-hosting/pull/1435)
- [Increased Devnet Disk sizes](https://github.com/dapperlabs/terraform/pull/4272)

Migration Testing
- [Created mainnet migration network infra ](https://github.com/dapperlabs/terraform/pull/4256)
- [Created mainnet migration configuration](https://github.com/dapperlabs/dapper-flow-hosting/pull/1514)

EVM Gateway
- [Created bucket & granted access for trace uploads ](https://github.com/dapperlabs/terraform/pull/4258)
- [Created KMS keys & granted access for EVM Gateway](https://github.com/dapperlabs/terraform/pull/4268)

Support
- Prepared for movement of single Mainnet VN to India

**This Sprint**
- Assist with migration and spork prep efforts
- Continue removing dependencies on CloudFlare & assist with account creation
- Begin prep work to migration to new CloudFlare account

---

### **Governance and Tokenomics** \[Kshitij]
Cycle Objective(s): Transaction fees on EVM, increasing transaction fees and inflation reduction plan.

**Done last sprint**


**This sprint**
- Work with Doodles, Cryptotoys and Edgevana for new nodes; Blockdaemon for continued operations via lease formalization
- Work on node operator branding and logos with .find team
- Finalize and publish Flow EVM documentation on docsite
- Discussion and decision on txn fee hike timeline
- R&D and planning with Dete on post Crescendo surge pricing
- Plan next cycle OKRs for governance
  
**On Hold**


**Active Epics**

- N/A
