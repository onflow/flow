# Overview

### Team Wins 🎉

- First TN state migrated with both Atree inlining and C1.0 bootstrapped on Migration Testnet & passed Epoch transition. Atree inlining reduced the EN memory usage from ~280GB to 132GB - 54% reduction in memory usage! [Jan]
- [Cadence 1.0 preview release 22](https://github.com/onflow/cadence/releases/tag/v1.0.0-preview.22) addressed all remaining planned breaking changes. [Jan]
- EVM - 2 big features landed this week, EVM.batchRun & Revertible Randomness. [Jan]
- Cross-VM bridge is code complete (save for more testing) and also deployed to PreviewNet! Contract audit starts next Monday! [Greg]
- Simplified CLI Quickstarts with Dependency Manager
- Deployed hardware-wallet-api to cloudrun
- Kicked-off newsletter subscription for developers
- Cadence-lang.org Improvements & New Features Page

### General updates

### OOO
- [Full List](https://www.notion.so/flowfoundation/de89aa4e79364216a665888335a1cdee?v=4de18b26f60d4bae8f62724dddcce260)
- Starting this week:

---

### Mainnet Uptime - Last 14 days (04/12/24 to 04/26/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    100%       |       0%         |
| Block Sealing           | 99.9%   |    100%       |       0%         |
| Access API Liveness     | 99.9%   |    99.99%     |       12.1%      |

[SLO dashboards](https://flowfoundation.grafana.net/d/hgW3l-m4k/slo-dashboard?orgId=1&from=now-2w&to=now)

[YTD SLA: 100%](https://app.metrika.co/flow/dashboard/slas?tr=YTD)

## Incidents

1. April 18th - Sev 2: The average response time for all API requests served by the public access nodes increased significantly. Incident report available [here](https://www.notion.so/flowfoundation/High-response-time-on-Access-Nodes-04-18-2024-d70e8e08bd894c3a814a030eb7469d63).
   
2. April 19th - Sev 3: After the rolling deployment of v0.33.17 several verification nodes ran out of disk space due to spikes in disk usage caused by badger compaction. [slack thread](https://dapperlabs.slack.com/archives/CUU2KQL4A/p1713544909496029)

(Sev [definition](https://www.notion.so/dapperlabs/Incident-Priorities-Severity-Levels-b65d7682336c46baa025ee512fd3efa3))

### Key Release Dates & Breaking Changes

- Next Mainnet/Testnet network upgrade (spork):
  - Testnet: 5/22/24
  - Mainnet: June/July 2024 (exact date TBD)
- Testnet migration test runs conducted every week.

---

### FLIPs Tracker \[Kshitij]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 6 (-1)  |    8   |       0          |       7 (+2)          |        **21** (+1)          |
| Proposed    | 1 (-2)  |    2     |       2          |       0 (-1)          |        **5** (-3)          |
| Accepted    | 2  |    1     |       1       |       1          |        **5** (-1)          |
| Rejected    | 0  |    0     |       1       |       0          |        **1**          |
| Implemented | 3 (+2) |    21 (+2)    |       2       |       1 (+1)          |        **7** (+5)          |
| Released    | 4  |    0     |       3       |       6 (+2)          |        **13** (+2)          |
| Total       | **16** (-1)  |    **32** (+2)    |       **9**       |       **15** (+3)          |        **72** (+4)          |

**New FLIPs tracked now**
* [Protocol] Message Forensic (MF) System
* [Protocol] Passkey Support

**Marked as Released**
* [Protocol] On-Chain randomness history for commit-reveal schemes
* [Protocol] Expand Access Streaming API with new endpoints

**Implemented**
* [Cadence] Random function
* [Cadence] Require matching access modifiers for interface implementation members
* [Protocol] FVM supporting EVM
* [Application] Flow EVM Gateway
* [Application] FlowEVM VM Bridge

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

State migration to Crescendo release
- Handling broken state: [Add a migration which detects and filters out unreferenced slabs](https://github.com/onflow/flow-go/pull/5653)
    - Related Atree feature: [Enable migrations to fix references to non-existent registers](https://github.com/onflow/atree/pull/387)
        - [Add PersistentSlabStorage.GetAllChildReferences()](https://github.com/onflow/atree/pull/391)
- [Atree Inlining & Deduplication with Cadence v1.0](https://github.com/onflow/flow-go/pull/5554)
- [Contract update validator doesn't allow valid type updates for fields](https://github.com/onflow/cadence/issues/3282)
- [Use existing storage health check](https://github.com/onflow/flow-go/pull/5756)
- [Add migration to fix refs to non-existent registers](https://github.com/onflow/flow-go/pull/5755)
- [Remove unused parameter from contract validator](https://github.com/onflow/cadence/pull/3278)
- [Entitlement inference in entitlement migration grants too many entitlements](https://github.com/onflow/cadence/issues/3253)
- [Tool for converting staged contracts migration report from JSON to Markdown](https://github.com/onflow/cadence/pull/3249)
- [Run migration to fix up storage-used at the end](https://github.com/onflow/flow-go/pull/5676)
- [Improve JSON encoding of reporter entries](https://github.com/onflow/flow-go/pull/5675)
- [Improve program checking in Cadence 1.0 migration](https://github.com/onflow/cadence/issues/3233)
- [Only log failed staged updates if verbose logging is enabled](https://github.com/onflow/flow-go/pull/5665)
- [Collect staged contracts from the storage itself](https://github.com/onflow/flow-go/pull/5659)
- [Improve migrations](https://github.com/onflow/flow-go/pull/5657)
- [Improve naming for migrator runtime](https://github.com/onflow/flow-go/pull/5652)
- [Add flag for verbose error output to migrations](https://github.com/onflow/flow-go/pull/5645)
- Performance optimizations:
    - [create snapshot map with multiple goroutines](https://github.com/onflow/flow-go/pull/5646)
    - [Cache results of entitlement type conversion](https://github.com/onflow/cadence/pull/3232)
    - [Optimise merge registers for migrations](https://github.com/onflow/flow-go/pull/5613)

Cadence 1.0 Contract updates
- [Continued working through contract standards needing upgrade to C1.0](https://github.com/onflow/docs/issues/716)
- Spent time reviewing various Cadence 1.0 upgrade PRs for DL and in the community
- [Update V2 FT standard to move Withdrawn event to Vault and add balanceAfter params](https://github.com/onflow/flow-ft/pull/158)
  
Cadence 1.0 improvements & bugixes
- [FLIP 262 Implementation - Require matching access modifiers for interface implementation members](https://github.com/onflow/cadence/issues/3245)
- [FLIP 242 Implementation - Improve Public Capability Acquisition](https://github.com/onflow/cadence/pull/3252)
- [Improve dictionary key conflict handling](https://github.com/onflow/cadence/pull/3240)
- [Improve supported entitlements](https://github.com/onflow/cadence/pull/3251)
- [Conformance mismatch errors are not descriptive/helpful enough](https://github.com/onflow/cadence/issues/3275)
- [Improve conformance mismatch error](https://github.com/onflow/cadence/pull/3274)
- [Optional Reference Types and References to Optional Types are represented with the same TypeID](https://github.com/onflow/cadence/issues/3248)
- Security fixes: [1](https://github.com/onflow/cadence/pull/3267), [2](https://github.com/onflow/cadence/pull/3257), [3](https://github.com/onflow/cadence/pull/3235)

Crescendo release chores
- Depencdency updates
    - Cadence: [1](https://github.com/onflow/cadence/pull/3270), [2](https://github.com/onflow/cadence/pull/3259), [3](https://github.com/onflow/cadence/pull/3258), [4](https://github.com/onflow/cadence/pull/3256), [4](https://github.com/onflow/cadence/pull/3255), [5](https://github.com/onflow/cadence/pull/3254)
    - flow-go: [1](https://github.com/onflow/flow-go/pull/5775), [2](https://github.com/onflow/flow-go/pull/5766), [3](https://github.com/onflow/flow-go/pull/5765), [4](https://github.com/onflow/flow-go/pull/5758), [5](https://github.com/onflow/flow-go/pull/5743), [6](https://github.com/onflow/flow-go/pull/5741), [7](https://github.com/onflow/flow-go/pull/5738), [8](https://github.com/onflow/flow-go/pull/5736), [9](https://github.com/onflow/flow-go/pull/5734), [10](https://github.com/onflow/flow-go/pull/5669), [11](https://github.com/onflow/flow-go/pull/5667), [12](https://github.com/onflow/flow-go/pull/5654), [13](https://github.com/onflow/flow-go/pull/5783), [14](https://github.com/onflow/flow-go/pull/5775), [15](https://github.com/onflow/flow-go/pull/5767)
    - flow-go-sdk: [1](https://github.com/onflow/flow-go-sdk/pull/634), [2](https://github.com/onflow/flow-go-sdk/pull/625), [3](https://github.com/onflow/flow-go-sdk/pull/618)
    - flowkit: [1](https://github.com/onflow/flowkit/pull/38)
    - cadence-tools: [1](https://github.com/onflow/cadence-tools/pull/350), [2](https://github.com/onflow/cadence-tools/pull/349)
    - emulator: [1](https://github.com/onflow/flow-emulator/pull/643), [2](https://github.com/onflow/flow-emulator/pull/640)
    - Other chores related to releasing:
        - [Adjust branches of downstream dependency checks](https://github.com/onflow/cadence/pull/3280)
        - [Update atree register inlining for Cadence v1.0 feature branch](https://github.com/onflow/flow-go/pull/5768)

Cadence Execution
- [Execution indeterminism when using cadence getBlock](https://github.com/dapperlabs/flow-go/issues/6939)
    - [limit the height range when querying getBlock in FVM](https://github.com/onflow/flow-go/pull/5607)
    - [v0.33 adjust extra blocks in sealing segment](https://github.com/onflow/flow-go/pull/5673)
- Progress towards: [Ingestion engine does not handle EN falling far behind](https://github.com/onflow/flow-go/issues/5298)
    - [Add ingestion throttle](https://github.com/onflow/flow-go/pull/5337)
    - [Refactor ingestion engine mempool](https://github.com/onflow/flow-go/issues/5297)
        - [add ingestion core](https://github.com/onflow/flow-go/pull/5288)
- bugfixes:
    - [Fix block queue edge case](https://github.com/onflow/flow-go/pull/5753)
    - [Fix unsafeTraverse error handling](https://github.com/onflow/flow-go/pull/5661)
- [Log the checkpoint file when using generating protocol snapshot from](https://github.com/onflow/flow-go/pull/5680)
- Creating protocol snapshot from checkpoint file:
    - [Checkpoint - validate the header file and sub file when reading root hashes](https://github.com/onflow/flow-go/issues/5623)

EVM Core
- [Support for evm.batchRun](https://github.com/onflow/flow-go/issues/5501)
- [Provide revertible randomness in EVM](https://github.com/onflow/flow-go/issues/5507)
- [Update coa.deploy methods to also return a result](https://github.com/onflow/flow-go/pull/5606)
- [populate EVM block timestamp](https://github.com/onflow/flow-go/issues/5610)
- [Fix EVM load test](https://github.com/onflow/flow-go/pull/5737)
- [Clean up EVM environment setup](https://github.com/onflow/flow-go/pull/5668)

EVM Gateway
- Features:
    - [Use evm height mapping in APIs](https://github.com/onflow/flow-evm-gateway/issues/111)
    - [Implement sync status](https://github.com/onflow/flow-evm-gateway/issues/80)
- Improvements:
    - [Add lint job in CI](https://github.com/onflow/flow-evm-gateway/pull/206)
    - [Testing - Properly setup EVM environment to allow usage of EVM types in test scripts](https://github.com/onflow/cadence-tools/pull/338)
- chores & bugfixes: [1](https://github.com/onflow/flow-evm-gateway/pull/216), [2](https://github.com/onflow/flow-evm-gateway/pull/215), [3](https://github.com/onflow/flow-evm-gateway/pull/213), [4](https://github.com/onflow/flow-evm-gateway/pull/207), [5](https://github.com/onflow/flow-evm-gateway/pull/210), [6](https://github.com/onflow/flow-evm-gateway/pull/205), [7](https://github.com/onflow/flow-evm-gateway/pull/201), [8](https://github.com/onflow/flow-evm-gateway/pull/203)

Other
- [ Make TPS loader input more flexible](https://github.com/onflow/flow-go/issues/5490)

**This sprint**

Objective 1, KR 1: Enable Developers and the Flow Foundation to simulate Cadence 1.0 Contract upgrades
* [Emulator release is ready](https://github.com/onflow/flow-emulator/releases/tag/v1.0.0-preview.19), support devs that are teting migration, monitor Discord questions.

Objective 1, KR4: Testnet Upgrade to Crescendo Release
* Completed Testnet migration with both Atree inlining and Cadence 1.0.
* Continue work on migration optimizations.
* Complete [EVM Gateway development](https://github.com/onflow/flow-evm-gateway/issues/126) and [EVM Core development](https://github.com/onflow/flow-go/issues/5536) production readiness EPICs.

Objective 2, KR 1: Update transaction fees weights for the execution operations on TN and MN
* Continue work on [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)

Objective 4, KR1: Execution node handles restart from spork root block reguardless of how many blocks it is behind
* Continue refactoring of Ingestion engine to [prevent EN entering crash loop](https://github.com/onflow/flow-go/issues/5298)

Objective 3: Analyze execution runtime trends and risks to plan next set of scalability OKRs
* Continue work on making [Make TPS loader input more flexible](https://github.com/onflow/flow-go/issues/5490) for better analysis and tracking of performance data.

* Start Atree optimization: [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)

Cadence 1.0 Contract updates
- [Continue working through contract standards needing upgrade to C1.0](https://github.com/onflow/docs/issues/716)
- More reviews of bridge PRs and Cadence 1.0 changes 
- Writing additional tests for recent Cadence FLIP changes
- [Audit and update docs and tutorials for Cadence 1.0](https://github.com/onflow/docs/issues/531)

**On Hold**

Objective 2: Calibrate Transaction fees so that they accurately reflect resource usage during execution and deploy as part of Crescendo to avoid future disruption
- KR1: Update weights for the execution operations on TN and MN
  - [Execution effort recalibration - data collection](https://github.com/onflow/flow-go/issues/5026)


**Active Epics**

Objective 1: Upgrade Mainnet to Crescendo Release with minimal impact on developers, to lower the barrier for cross chain liquidity on Flow
- KR1: Enable Developers and the Flow Foundation to simulate Cadence 1.0 Contract upgrades
- KR4: Testnet Upgrade to Crescendo Release
- KR6: Develop & share with community a disaster recovery plan to address potential issues after migration to Crescendo Release.
- KR7: Decision on how to deal with contracts that have not been upgraded to Cadence 1.0 by developers.
Objective 3: Analyze execution runtime trends and risks to plan next set of scalability OKRs
- KR1: Measure execution state growth trends, identify future bottlenecks and prioritize by urgency

---

### **Core Protocol** \[Jerome]
Cycle Objective(s): 

* Translate crypto performance improvements to consensus block rate increase [DONE]
* Provide developers secure and non-rate limited way to access all of chain data (transactions, blocks, account balance, events, account balance etc) by locally running an access or an observer node
* Reduce CPU usage on Execution node by 30%
* Continue design and implementation of Sporkless Epoch Fallback Recovery solution [DONE]

**Done last Sprint:**

* <ins>Zero-downtime Upgrades of Node Software:</ins>
  - PRs necessary for KVStore [M2] Milestone 2: Minimal Upgrade Mechanism deployment are completed or in review
    - [Support changing protocol state ID in sealing segment - in review](https://github.com/onflow/flow-go/pull/5656#top)
    - [Integration test for version upgrade - in review](https://github.com/onflow/flow-go/pull/5477#top)
    - [Reducing duplicated data in the Snapshot data structure \(remove EncodableEpoch\) - in review](https://github.com/onflow/flow-go/pull/5682#top)
    - [API safety improvements and documentation - in review](https://github.com/onflow/flow-go/pull/5644#top)
    - [Merged PR necessary for M2](https://github.com/onflow/flow-go/pull/5650)
    - Discussions about finalizing M2 and future scope of work
    - Prepared [PR](https://github.com/onflow/flow-go/pull/5681) with test to catch an edge case
    - Started implementation of EFM recovery protocol part. Started PR for [injecting epoch extensions](https://github.com/onflow/flow-go/pull/5773)
      
* <ins>EFM Recovery</ins>
  - Wrapped up EFM Recovery cadence changes https://github.com/onflow/flow-core-contracts/pull/420
    
* <ins>Core Protocol contracts:</ins>
  - Source of Randomness
    - [SoR history updates](https://github.com/onflow/flow-core-contracts/pull/416), released to testnet and mainnet
    - [Update multisig to upgrade RandomBeacon history](https://github.com/onflow/service-account/pull/290)
  - [Prepped and executed service account transaction to fix id table](https://github.com/onflow/service-account/pull/289)
  - [Add entitlement for locked account creator](https://github.com/onflow/flow-core-contracts/pull/423)

* <ins>Data Availability:</ins>
  - Debugging slow response time on mainnet QN ANs
    - Local tx results rolled back on public nodes, on hold for now
  - Debugging high memory usage on previewnet ANs, upgraded `ipfs/boxo` libs ([PR #5774](https://github.com/onflow/flow-go/pull/5774))
  - KROK Team
    - Add tx result into `SendAndSubscribeTransactionStatuses` responses ([PR #5620](https://github.com/onflow/flow-go/pull/5620))
    - Cleanup tech debt ([PR #5619](https://github.com/onflow/flow-go/pull/5619), [PR #5632](https://github.com/onflow/flow-go/pull/5632))
    - Improve streaming API testing ([PR #5612](https://github.com/onflow/flow-go/pull/5612), [PR #5624](https://github.com/onflow/flow-go/pull/5624))
    - Published [blog post](https://medium.com/@thekrokcompany/how-to-use-flow-event-subscription-23992f445ed0) on using event streaming with fcl

* <ins>Other misc:</ins>
  - Completed initial planning review for Protocol priorities for next OKR cycle

**This sprint**

* <ins>Zero-downtime Upgrades of Node Software:</ins>
  - [Dynamic Protocol State - todos, suggested revisions and tech debt](https://github.com/onflow/flow-go/issues/5666#top)
  - Reviews for open M2 PRs, priority to close the milestone
  - Apply comments and finalize https://github.com/onflow/flow-go/pull/5773
    
* <ins>EFM Recovery</ins>
  - [EFM Recovery integration tests](https://github.com/onflow/flow-go/issues/5639)
  - [Cancel in progress root QC voting](https://github.com/onflow/flow-go/issues/5733)


* <ins>Cryptography:</ins>
   - N/A this sprint as Tarak was out-of-office

* <ins>Data Availability:</ins>
  - Test local script exec with remaining studio nodes
  - Continue to debug slow response time on mainnet QN ANs
  - Continue to debug high memory usage on previewnet ANs
  - KROK Team
    - Continue work to support enabling indexing on Dynamic bootstrapped AN ([Issue #5423](https://github.com/onflow/flow-go/issues/5423))
    - Complete work to fix race condition in Access ingestion engine ([Issue #5420](https://github.com/onflow/flow-go/issues/5420))
    - Update rosetta for Crescendo ([Issue #52](https://github.com/onflow/rosetta/issues/52))
    - Address tech debt in APIs ([Issue #5558](https://github.com/onflow/flow-go/issues/5558), [Issue #5757](https://github.com/onflow/flow-go/issues/5757))
    - Add support for version beacon events to control script execution ([Issue #5757](https://github.com/onflow/flow-go/issues/5757))


**On Hold**
* Deliver public roadmap & vision for technical protocol decentralization focusing on current challenges and upcoming updates for permissionless consensus on Flow.
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
- EVM partner onboarding: Pyth, DeBridge, Coinmetrics
- Deliver Axelar bridge

**Done last sprint**
* Supported Pyth with their initial efforts to onboard to EVM
* Confirmed with Anchain and Axelar that development for Axelar Cadence bridge will likely resume in early May
* Conducted initial review of IncrementFi Cadence 1.0 contract updates, provided feedback
* [Proposed USDC Cadence 1.0 changes](https://github.com/flow-usdc/flow-usdc/pull/82) - Josh

**This sprint**

* Review plan/proposal for next phase of JVM SDK update and get contract and timelines agreed
* Continue review of IncrementFi Cadence 1.0 contract upgrades

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

- [Update CLI Quickstart to Use Dependency Manager #731](https://github.com/onflow/docs/issues/731)
- [Update Flownaut on developer landing page with CryptoKitties: Arcade #743](https://github.com/onflow/docs/issues/743)
- [Wagmi Tutorial #729](https://github.com/onflow/docs/issues/729)
- [Add Newsletter sign up to developer docs landing page #717](https://github.com/onflow/docs/issues/717)
- [Documentaion for Cadence Owned Accounts (COAs) #682](https://github.com/onflow/docs/issues/682)
- [Use GitHub reports for is-validated command #1508](https://github.com/onflow/flow-cli/issues/1508)
- [access(account) bug in contract update validator #1524](https://github.com/onflow/flow-cli/issues/1524)
- [Embedded flags work in tests but not manually #1519](https://github.com/onflow/flow-cli/issues/1519)
- [Add Dependency Manager messaging for when no actions were completed #1535](https://github.com/onflow/flow-cli/issues/1535)
- [Add new text input and refactor for reusability #1526](https://github.com/onflow/flow-cli/issues/1526)
- [Make sure in setup deployments prompt happens for dependency manager #1522](https://github.com/onflow/flow-cli/issues/1522)
- [Create new select option and refactor to have separate prompt package and files #1520](https://github.com/onflow/flow-cli/issues/1520)
- [flow init should ask what core contracts you'd like installed with dependency manager #1482](https://github.com/onflow/flow-cli/issues/1482)
- [Deploy bridge contracts to Previewnet #9](https://github.com/onflow/flow-evm-bridge/issues/9)
- [Map serialized EVM address to associated types #33](https://github.com/onflow/flow-evm-bridge/issues/33)
- [Add support for batch onboarding txn & queries #34](https://github.com/onflow/flow-evm-bridge/issues/34)
- [Update EVM contract interface #38](https://github.com/onflow/flow-evm-bridge/issues/38)
- [Integrate existing Previewnet bridge deployment with updated EVM contract #40](https://github.com/onflow/flow-evm-bridge/issues/40)
- [Transaction crashing go sdk when calling ID() #631](https://github.com/onflow/flow-go-sdk/issues/631)

**This sprint**
**Sprint goal focusing on: Flow Port Asset Bridge and Token Transfer, Splitting Dev Docs (Cadence 1.0/Legacy), and adding EVM docs for Cadence Devs**

- [EPIC] Flow Port Asset Bridge [#284](https://github.com/onflow/flow-port/issues/284)
- [EPIC] EVM Docs [#654](https://github.com/onflow/docs/issues/654)
- [EPIC] Flow EVM Docs - Cadence Dev [#575](https://github.com/onflow/docs/issues/575)
- [EPIC] Spilt Dev Docs into Cadence 1.0 and Legacy [#738](https://github.com/onflow/docs/issues/738)

#### Smart Contract WG

- Reviews for Increment.fi
- NFTStorefront v1 & v2 Cadence 1.0 Refactor [#89](https://github.com/onflow/nft-storefront/pull/89)
- EVM Bridge prep for deployment and Audit

**On Hold**

- Update Flow port for Cadence Crescendo instance [#279](https://github.com/onflow/flow-port/issues/279)

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

- Complete Web3.js integration, authorization
- VM Bridge integration, moving FT and NFT in app.
- Product scoping for next cycle:
  - Identifying needed polish + bug fixes
  - Next product opportunities
- CTD: Outreach with Coinbase Wallet, MetaMask, Shadow Wallet and Blocto
- CTD: Working with Apple on app approval & release

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

**Observability**
- Worked with QN to receive system metrics
- Configured new data source for accessing QN metrics in Grafana

**Node Hosting**
- [Increased Devnet Disk sizes](https://github.com/dapperlabs/terraform/pull/4215)
- [Increased Mainnet Disk sizes](https://github.com/dapperlabs/terraform/pull/4215)
- [Updated dedicated DL ANs to increase memory](https://github.com/dapperlabs/terraform/pull/4215)
- [Added support for dynamic docker run flags on VMs](https://github.com/dapperlabs/dapper-flow-hosting/pull/)
- Reclaimed disk space on DL EN by deleting CDPs1482)

**FF Migration**
- [Migrate Gen2 ingresses to GCP load balancer](https://github.com/dapperlabs/terraform/pull/4216)
- Update & tested firewalls with new FF VPN IPs

**Support**
- [Assisted in troubleshooting CI jobs hanging](https://github.com/onflow/flow-go/pull/5770)
- [Assisted with Previewnet updates](https://github.com/dapperlabs/dapper-flow-hosting/pull/1481)
- [Update TPS Automation Instance Shape](https://github.com/dapperlabs/terraform/pull/4216)
- Assisted with QuickNode performance issues
- Executed rolling upgrade of `v0.33.17` to FF & DL Mainnet nodes
- Increased Buildjet limits to improve concurrent execution of CI jobs

**Goal of this Sprint is to continue migration efforts** 
**This Sprint**
- Solidify CloudFlare Migration plan and continue preparing for migration
- Continue assisting with DevEx migration to Cloud Run
- Improve synthetic alerting 

---

### **Governance and Tokenomics** \[Kshitij]
Cycle Objective(s): Transaction fees on EVM, increasing transaction fees and inflation reduction plan.

**Done last sprint**
- Inflation research -
   -    synced and brainstormed with Dete
   -    modeled new options - stake vs APY to consider lowering overall stake to reduce inflation; explored segregated delegation as an option; Researched target staking ratio methodology to control inflation [see [worksheet](https://docs.google.com/spreadsheets/d/1jr-P9ZQB3hDEZFh3pjktRnhIe0jFrMz4hn4_EFGHfK4/edit#gid=2070083906)]
- 3 key Governance updates for Crescendo
   -    Receiving and responding to Forum post feedback 
   -    Suggested Transaction fee multipler to implement 100x increase 
   -    Updated Transaction fee impact analysis on partners
   -    Shared changes during Protocol working group monthly meeting
   -    Planned PreviewNet testing of changes

**This sprint**

- Test governance changes (gas to evm ratio, 5x compute limit, 100x fee) on PreviewNet 
- Review inflation strategies with the team, get feedback, remodel, conclude on the way forward
- Draft FLIP on EVM gas to compute ratio and compute limit hike
- Update transaction fee 100x FLIP to suggest a new transaction fee multipler, also update the market comps per the latest exchange rates to get it ready for reintroduction
- Consolidate node operator data; assess which operator use lease tokens versus self-stake
- Continue working on node operator branding and logos with .find team
- Continue decentralization efforts - work with a16z to consolidate three nodes; with Coinbase to reduce one node they operate on leased stake; Continue work on automation of the decentralization dashboard to send messages when critical thresholds are crossed

**On Hold**


**Active Epics**

- N/A
