# Overview

### Team Wins 🎉
- Finished deploying script execution to public QN nodes (live on 100% of public and studio nodes). Seeing a [70% reduction](https://flowfoundation.grafana.net/d/ddnerazd84um8d/script-execution?orgId=1&editPanel=3&from=now-60d&to=now) in script execution on the execution nodes since May.
- Mainnet Crescendo migration environment now successfuly bootstrapped and passing end-to-end tests.
- Atree register inlining migration [performance improved by ~10%](https://github.com/onflow/flow-go/pull/6193).
- Polished Flow Port to release ready state
- Submitted Ledger Flow app (0.13.0) for approval after successfull Ledger Live testing
- Completed Rosetta C1.0 updates and integration testing. Now handed off to Coinbase for acceptance testing

### General updates

### OOO
- [Full List](https://www.notion.so/flowfoundation/de89aa4e79364216a665888335a1cdee?v=4de18b26f60d4bae8f62724dddcce260)

---

### Mainnet Uptime - Last 14 days (07/04/24 to 07/18/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    100%       |       0%         |
| Block Sealing           | 99.9%   |    100%       |       0%         |
| Access API Liveness     | 99.9%   |    100%       |       0%         |

[SLO dashboards](https://flowfoundation.grafana.net/d/hgW3l-m4k/slo-dashboard?orgId=1&from=now-2w&to=now)

[YTD SLA: 99.922%](https://app.metrika.co/flow/dashboard/slas?tr=YTD)

## Incidents

### Mainnet


(Sev [definition](https://www.notion.so/dapperlabs/Incident-Priorities-Severity-Levels-b65d7682336c46baa025ee512fd3efa3))

### Key Release Dates & Breaking Changes
- Next Mainnet/Testnet network upgrade (spork):
  - Testnet: Aug 14th
  - Mainnet: Aug 28th (to be confirmed - subject to change)

---

### FLIPs Tracker \[Kshitij]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 8  |    9  |       0         |       7          |        **24** (+1)       |
| Proposed    | 1  |    2    |       2          |       0           |        **5**        |
| Accepted    | 2  |    1     |       2       |       1          |        **6**          |
| Rejected    | 0  |    0     |       1       |       0          |        **1**          |
| Implemented | 3 |    22    |       2       |       1           |        **28**          |
| Released    | 4  |    0     |       3       |       6          |        **13**          |
| Total       | **17** (+1)  |    **34**  |       **10**      |       **15**          |        **76** (+1)      |

**Updates**
* [Application] - Integrating with the Lost and Found contract (drafted)
* FLIPs that haven't moved in a while or need new owners or have old statuses
  - Application -
    - Interaction Templates
    - Pool-Based DEX Swap Standard
    - FCL Authz/Pre-Authz v2.0.0 Specification
    - Contracts Import Syntax
   - Cadence
     - New behavior for attachments with entitlements
     - Type Removal In Contract Updates
     - Optional References to Indexed Accesses
     - Next version changes to FLIX
     - Attachments
     - Mutability Restrictions
     - Cadence Storage API Improvements
     - Reference Creation Semantics
     - View Functions
     - Entitlements
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
- [Fix account link migration](https://github.com/onflow/cadence/pull/3461)
- [Read epoch counter from protocol state snapshot](https://github.com/dapperlabs/dapper-flow-hosting/pull/1538)
- stop jq crashing on large report files: [Add support for JSONL report as alternative to JSON array report](https://github.com/onflow/flow-go/issues/6175)
    - [Add support for JSONL report format as alternative to JSON array report](https://github.com/onflow/flow-go/pull/6176)
- optimization increasing performance of Atree register inlining by ~10%:
    - [Optimize migrations by creating output payloads file in parallel to new trie creation](https://github.com/onflow/flow-go/pull/6193)
    - [Port PR 6193 to master](https://github.com/onflow/flow-go/pull/6200)


Cadence Language
- Features:
    - [Emit events for capability controller operations](https://github.com/onflow/cadence/issues/3459)
        - [Emit events for more Capability Controller and capability operations](https://github.com/onflow/cadence/pull/3464)
        - [Emit events when capability controllers are issued](https://github.com/onflow/cadence/pull/3460)
    - [Allow borrowing a concrete reference type to a capability linked as an interface type](https://github.com/onflow/cadence/issues/3080)
        - [Allow borrowing of capability with subtype](https://github.com/onflow/cadence/pull/3449)
    - [Add String.index and String.count, fix grapheme boundary functions](https://github.com/onflow/cadence/pull/3456)
    - [Add a String.contains function](https://github.com/onflow/cadence/pull/3455)
- Improvements:
    - [Improve Cadence composite to Go struct decoding](https://github.com/onflow/cadence/pull/3469)
    - [Simplify subtyping](https://github.com/onflow/cadence/pull/3447)
- Bugfixes:
    - Go's string ops are not grapheme cluster aware:
        - [Fix String.replaceAll](https://github.com/onflow/cadence/pull/3458), [Fix String.split](https://github.com/onflow/cadence/pull/3457)
    - [toConstantSized does not work as expected](https://github.com/onflow/cadence/issues/3445)
        - [Fix toConstantSized](https://github.com/onflow/cadence/pull/3446)
- Tests
    - [Add some more tests for string functions](https://github.com/onflow/cadence/pull/3453)
- Minor fixes / Improvements
    - [Update Fungible token transfer benchmark](https://github.com/onflow/cadence/pull/3473)
    - [Speed up update tool](https://github.com/onflow/cadence/pull/3468)

Cadence Execution
- Improvements:
    - pre-requisite for serving transaction metrics via grpc endpoint: [Added transaction information to transaction execution metrics](https://github.com/onflow/flow-go/pull/6171)
    - [Enable new ingestion engine as default](https://github.com/onflow/flow-go/pull/6078)
- Bugfixes:
    - [Change account key index to uint32 from uint64](https://github.com/onflow/flow-go/issues/6204)
        - emulator: [Changed key index type to uint32](https://github.com/onflow/flow-emulator/pull/712)
        - Cadence: [Changed data type of account key index to uin32](https://github.com/onflow/cadence/pull/3465)
        - flow-go-sdk: [Changed flow account key id to uint32](https://github.com/onflow/flow-go-sdk/pull/705)
        - flow-go: [Changed key index type to uint32](https://github.com/onflow/flow-go/pull/6201)
- Tests:
    - [Fix TestWriteAndReadCheckpointV6LeafMultipleTriesOK test](https://github.com/onflow/flow-go/issues/6166)
        - [When reading leaf nodes from a checkpoint, also read from the top trie](https://github.com/onflow/flow-go/pull/6188)
- Tooling:
    - Bugfix: [Add the missing checkpoint subfile to be moved](https://github.com/onflow/flow-go/pull/6184)
- Ops:
    - Bootstrapping performance improvement: [Use link instead of copying the checkpoint files when bootstrapping Execution node.](https://github.com/onflow/flow-go/issues/6167)
        - [Link checkpoint on bootstrapping](https://github.com/onflow/flow-go/pull/6173)
- chores / dependency updates
    - flowkit: [1](https://github.com/onflow/flowkit/pull/65)
    - cadence-tools: [1](https://github.com/onflow/cadence-tools/pull/401), [2](https://github.com/onflow/cadence-tools/pull/400)
    - emulator: [1](https://github.com/onflow/flow-emulator/pull/715), [2](https://github.com/onflow/flow-emulator/pull/714), [3](https://github.com/onflow/flow-emulator/pull/708)
    - cadence: [1](https://github.com/onflow/cadence/pull/3475), [2](https://github.com/onflow/cadence/pull/3474), [3](https://github.com/onflow/cadence/pull/3472), [4](https://github.com/onflow/cadence/pull/3467), [5](https://github.com/onflow/cadence/pull/3454)
    - flow-go: [1](https://github.com/onflow/flow-go/pull/6220), [2](https://github.com/onflow/flow-go/pull/6219), [3](https://github.com/onflow/flow-go/pull/6216), [4](https://github.com/onflow/flow-go/pull/6212), [5](https://github.com/onflow/flow-go/pull/6187), [6](https://github.com/onflow/flow-go/pull/6186)
    - flow-go-sdk: [1](https://github.com/onflow/flow-go-sdk/pull/711), [2](https://github.com/onflow/flow-go-sdk/pull/706), [3](https://github.com/onflow/flow-go-sdk/pull/701)
    - cadence-tols: [1](https://github.com/onflow/cadence-tools/pull/399)
    - EVM Gateway: [1](https://github.com/onflow/flow-evm-gateway/pull/341)

- EVM Core
    - Improvements:
        - [Simplify Go types in event types](https://github.com/onflow/flow-go/pull/6223)
        - [Random source with 32 bytes](https://github.com/onflow/flow-go/issues/6165)
            - [Extend random source size](https://github.com/onflow/flow-go/pull/6169)
        - [replace block.TransactionHashes with TransactionHashRoot](https://github.com/onflow/flow-go/pull/6222)
        - [delay EVM block proposal commitment till system chunk execution](https://github.com/onflow/flow-go/pull/6199)
            - [Pre-work for delaying the EVM block formation](https://github.com/onflow/flow-go/pull/6195)
        - [update geth version to v1.14.6](https://github.com/onflow/flow-go/issues/6189)
    - Performance improvement:
        - [Avoid hex encoding/decoding for event fields of type bytes](https://github.com/onflow/flow-go/pull/6190)
            - [Avoid hex encoding/decoding for event fields of type bytes](https://github.com/onflow/flow-go/pull/6221)
    - Docs
        - [Differences between Flow EVM and Ethereum](https://github.com/onflow/docs/issues/821)

- EVM Gateway
    - Features:
        - Dependecy for OpenZeppelin: [Get storage at API implementation](https://github.com/onflow/flow-evm-gateway/issues/351)
            - [Get storage at API](https://github.com/onflow/flow-evm-gateway/pull/363)
            - [Remote ledger](https://github.com/onflow/flow-evm-gateway/pull/362)
        - [Wallet APIs](https://github.com/onflow/flow-evm-gateway/issues/129)
            - [Add Wallet APIs for local development](https://github.com/onflow/flow-evm-gateway/pull/335)
    - Improvements:
        - [Batch database operations](https://github.com/onflow/flow-evm-gateway/issues/116)
            - [Batch index updates](https://github.com/onflow/flow-evm-gateway/pull/332)
        - [Consolidate decoding of transaction and receipt from EVM.TransactionExecuted event](https://github.com/onflow/flow-evm-gateway/issues/349)
            - [Consolidate decoding of EVM.TransactionExecuted event for the contained transaction & receipt](https://github.com/onflow/flow-evm-gateway/pull/354)
        - [Handle the hash calculation `DirectCall` change to maintain backwards compatibility](https://github.com/onflow/flow-evm-gateway/pull/339)
    Bugfix:
        - [Relax validation checks for transaction arguments/payload](https://github.com/onflow/flow-evm-gateway/pull/364)
        - [Patch `DirectCall` hash calculation change](https://github.com/onflow/flow-evm-gateway/pull/344)
        - [Patch `models.StorageReceipt` to accommodate the old format](https://github.com/onflow/flow-evm-gateway/pull/343)
        - [Patch `models.StorageReceipt` decoding](https://github.com/onflow/flow-evm-gateway/pull/342)

**This sprint**

 - Objective 1, KR4: Testnet Upgrade to Crescendo Release
   - Investigate how we could [keep the values of contracts not upgraded to Cadence 1.0 working](https://www.notion.so/flowfoundation/Keep-values-with-types-of-broken-contracts-working-7a57ddf83a50456da6851ed1f65e26a9)
   - Continue [comparison of execution states before and after the atree inlining](https://github.com/onflow/atree/issues/292)
   - Continue: [Add support for composites with attachment to CCF encoder](https://github.com/dapperlabs/cadence-internal/issues/241)
   - [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)
   - Investigate / Fix any security report incoming from bug bounty.

 - Objective 2, KR 1: Update transaction fees weights for the execution operations on TN and MN
   -  Continue work on [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)

- EVM 
   - Continue implementation of [getStorageAt() endpoint](https://github.com/onflow/flow-evm-gateway/issues/336) - dependency for OpenZepplin.
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
* Reduce CPU usage on Execution node by 30% [IN PROGRESS]
* Translate crypto performance improvements to consensus block rate increase [DONE]
* Continue design and implementation of Sporkless Epoch Fallback Recovery solution [DONE]

**Done last Sprint:**

* <ins>Data Availability:</ins>
  - Finished rollout of script execution on QN nodes
  - KROK Team
    - Add support for pruning execution data db on ANs ([PR #6109](https://github.com/onflow/flow-go/pull/6109))
    - Proof of concept of transaction payer balance checks ([PR #6004](https://github.com/onflow/flow-go/pull/6004))

* <ins>EFM Recovery</ins>
  - Merged: Add epoch extensions support to HotStuff Committee
  - Ccoping DKG data model changes
    - https://github.com/onflow/flow-go/issues/6213
    - https://github.com/onflow/flow-go/issues/6214
  - [Epoch State machine operates on current state](https://github.com/onflow/flow-go/pull/6168)
  - [Fixed EFM entering logic on epoch boundary](https://github.com/onflow/flow-go/pull/6183)
  - [Added valid `TargetEndTime` calculation for extended epoch](https://github.com/onflow/flow-go/pull/6203)
  - [Added support for dynamic bootstrap in EFM](https://github.com/onflow/flow-go/pull/6192)
  - [Added `EpochExtensionViewCount` to the KV store](https://github.com/onflow/flow-go/pull/6209)
  - [Adjust blocktime controller](https://github.com/onflow/flow-go/pull/6102)
  - [EFM Recovery Integration Tests: Part 1](https://github.com/onflow/flow-go/pull/6156)
  - [Epoch State Machines should not use parentState in their business logic](https://github.com/onflow/flow-go/issues/6019)
  - [Invalid Service Events shortly after Epoch Commit](https://github.com/onflow/flow-go/issues/5631)

* <ins>Cryptography:</ins>
   - SPoCK aggregation: understanding BLS aggregation security proofs:
     - Boldyreva in the KOSK model
     - Boneh in the the PoP model
   - Random beacon protocol public identity updates - clarify threshold-based protocols models in the crypto package
   - JVM-SDK crypto
     - Continued reviews of crypto PRs
     - Playing with the SDK to add missing tests (hash + ECDSA)
   - state proofs: research papers for ideas to optimize state proofs using set accumulators or VCs

* <ins>Protocol misc</ins>
  - Reviewing Pebble database changes (in-progress)

**This sprint**

* <ins>EFM Recovery</ins>
  - Minimal DKG data model changes required for Crescendo (part of https://github.com/onflow/flow-go/issues/6214)
  - Testing and merging EFM recovery code to include in Crescendo
  - Continue reviewing Pebble DB changes (time permitting)
  - [Add a mutator for EpochExtensionViewCount](https://github.com/onflow/flow-go/issues/6227)
  - Finish [EFM transaction Cadence PR](https://github.com/onflow/flow-core-contracts/pull/420)
  - [Epoch lookup component](https://github.com/onflow/flow-go/issues/5763)
  - [EFM integration tests part 2](https://github.com/onflow/flow-go/issues/6164)
  
* <ins>Data Availability:</ins>
  - Complete ProtocolDB pruning design
  - Testing ChunkDataPack DB pruning PoC
  - KROK Team
    - Add support for version beacon events to control script execution ([Issue #5788](https://github.com/onflow/flow-go/issues/5788) - In review, [Issue #5789](https://github.com/onflow/flow-go/issues/5789) - In review, [Issue #5790](https://github.com/onflow/flow-go/issues/5790))
    - Improve execution data db pruning ([Issue #6138](https://github.com/onflow/flow-go/issues/6138) - in review)
    - Add support for storing exec data using pebble db ([Issue #6017](https://github.com/onflow/flow-go/issues/6017) - in review)
    - Add REST endpoints for getting account keys and balance ([Issue #6000](https://github.com/onflow/flow-go/issues/6000), [Issue #6001](https://github.com/onflow/flow-go/issues/6001))
    - Expand on payer balance checks ([Issue #6128](https://github.com/onflow/flow-go/issues/6128), [Issue #6129](https://github.com/onflow/flow-go/issues/6129), [Issue #6139](https://github.com/onflow/flow-go/issues/6139), [Issue #6141](https://github.com/onflow/flow-go/issues/6141))

* <ins>Cryptography:</ins>
   - Continue state proof brainstorm and research
   - java-SDK: merge the hashing PR + create signing issues
   - SPoCK aggregation research/analysis: will continue over more sprints

* <ins>Rosetta:</ins>
  - KROK: 
    - Rosetta Cadence updates for Crescendo ([Issue #52](https://github.com/onflow/rosetta/issues/52), [Issue #54](https://github.com/onflow/rosetta/issues/54) - PRs in review)

* <ins>Protocol misc</ins>
  - Continue review of Pebble database changes


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
  * Supported partner EVM onboarding: Axelar, Ankr, Credora
  * JVM-SDK (Lea)
    * [Added missing Access API methods - initial setup](https://github.com/onflow/flow-jvm-sdk/pull/61)
    * [Refactor Cadence inlined into Kotlin code into standalone .cdc files in project](https://github.com/onflow/flow-jvm-sdk/pull/64)
    * Started: [Migrate SDK examples repo to improved project structure](https://github.com/onflow/flow-jvm-sdk/pull/62)
  * Finalized EVM integration apporach for Credora on-chain credit scoring
  
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
- Fix CLI init feature issue on pre-release with c1: https://github.com/onflow/flow-cli/issues/1669 
- Hook up mock scripts to job runner: https://github.com/onflow/crescendo-rewards-be/issues/14
- Hook up mock tvl script results to db: https://github.com/onflow/crescendo-rewards-be/issues/17
- Hook up mock summaries script to db: https://github.com/onflow/crescendo-rewards-be/issues/19
- Fix alignment on metric card: https://github.com/onflow/crescendo-rewards/pull/36
- Add activity card skeleton loader: https://github.com/onflow/crescendo-rewards/pull/35
- Change “Partners” to “Explore” in navigation: https://github.com/onflow/crescendo-rewards/pull/33
- Got all the Flow controlled contracts staged on mainnet: https://github.com/onflow/docs/issues/716
- Updated marketplace tutorials for Cadence 1.0: https://github.com/onflow/docs/issues/800
- Improve generic token transactions with assertions: https://github.com/onflow/flow-nft/issues/222 , https://github.com/onflow/flow-ft/issues/162
- [Rewards-sc] Compose & align on system design: https://github.com/onflow/crescendo-rewards-sc/issues/8
- [Rewards-sc] Create mocks to unblock app development: https://github.com/onflow/crescendo-rewards-sc/issues/12
- [Rewards-sc] CI testing & Codecov: https://github.com/onflow/crescendo-rewards-sc/issues/6
- [Rewards-sc] Enable lock/unlock functionality: https://github.com/onflow/crescendo-rewards-sc/issues/1
- [Rewards-sc] Add participant summary query functionality: https://github.com/onflow/crescendo-rewards-sc/issues/5
- [Rewards-sc] Create reward accrual model & calculations: https://github.com/onflow/crescendo-rewards-sc/issues/2
- [Rewards-sc] Define & wire up distribution models #4: https://github.com/onflow/crescendo-rewards-sc/issues/4
- [FCL Discovery] Update to NextJS 14 https://github.com/onflow/fcl-discovery/issues/188
- [FCL Discovery] Add Get Wallet Page https://github.com/onflow/fcl-discovery/issues/195
- [FCL Discovery] Wallet names truncated too short https://github.com/onflow/fcl-discovery/issues/166
- [FCL Discovery] Move Configuration into a Context https://github.com/onflow/fcl-discovery/issues/191
- [FCL JS] Misc Typescript Errors https://github.com/onflow/fcl-js/issues/1917 

**This sprint**
**Sprint goal focusing on: Flow Cross VM Bridge, FCL x Discovery Revamp, Crescendo Rewards**

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
- Solidify CloudFlare Migration plan and continue preparing for migration
- Continue assisting with DevEx migration to Cloud Run

**Done last sprint**

**Node Hosting**
- [Increase Memory for Mainnet SNs](https://github.com/dapperlabs/terraform/pull/4307)
- [Increase Disk size for Devnet Nodes](https://github.com/dapperlabs/terraform/pull/4294)
- [Add AN To Mainnet Migration network](https://github.com/dapperlabs/terraform/pull/4292)
- [Create Infra for VNs in South Africa & Brazil](https://github.com/dapperlabs/terraform/pull/4288)
- [Update Ansible configuration to support VNs in South Africa & Brazil](https://github.com/dapperlabs/dapper-flow-hosting/pull/1539)

**CloudFlare Migration**
- [Create Duplicate DNS records for Previewnet](https://github.com/dapperlabs/terraform/pull/4303)
- [Create duplicate records for Flow Migration Devnet US](https://github.com/dapperlabs/terraform/pull/4302)
- [Create duplicate records for Flow LB ](https://github.com/dapperlabs/terraform/pull/4301)
- [Create duplicate records for Devnet50 in FF CloudFlare account](https://github.com/dapperlabs/terraform/pull/4300)
- [Create duplicate records for Mainnet24 in FF CloudFlare account](https://github.com/dapperlabs/terraform/pull/4299)
- [Create duplicate records for Historical Mainnet networks in FF CloudFlare account](https://github.com/dapperlabs/terraform/pull/4298)
- [Create new zones & records in FF CloudFlare account](https://github.com/dapperlabs/terraform/pull/4297)
- [Create Page rules in new CloudFlare account](https://github.com/dapperlabs/terraform/pull/4297)

**DevEx Observability**
- [Create pattern & configuration for scraping metrics from CloudRun services](https://github.com/dapperlabs/flow-devex-infrastructure/pull/184)

**This Sprint**
- Assist with migration and spork prep efforts
- Continue removing dependencies on CloudFlare & assist with account creation
- Begin prep work to migration to new CloudFlare account

---

### **Governance and Tokenomics** \[Kshitij]
Cycle Objective(s): Transaction fees on EVM, increasing transaction fees and inflation reduction plan.

**Done last sprint**
- Node branding updates and geographical mapping are now live on flowdiver.io
- Discussion on T-systems execution node economics; discussion to extend lease and add delegation - https://docs.google.com/spreadsheets/d/1-InDoobJW8iEkpANiVIWbFoQ2ipzZ087MGk0L1Fw9t8/edit?gid=1005520196#gid=1005520196 
- Stable state economics to establish relationship bw fees and inflation - see https://docs.google.com/spreadsheets/d/1sy6gMHgU6jRNVAR92oX10S62brkuTs6JAhMqIc37jJY/edit?pli=1&gid=1655921460#gid=1655921460 
- R&D on dynamic fee structure and designing v0 algorithm for crescendo launch - https://www.notion.so/flowfoundation/Dynamic-Transaction-Fees-on-Flow-fa7e7115e43a41a99ac9ca942dabcaf2
- Tokenomics of Rewards platform - sell pressure analysis - https://docs.google.com/spreadsheets/d/1tvimCOh8NvGusSC8lGpvzgFMY8Y0mBSLuKaqRIMxPDI/edit?gid=1060583401#gid=1060583401 

**This sprint**
- Send out T-systems contract for continued lease and additional delegation; work with team to get the node live
- Continue supporting rewards platform team on Tokenomics related analysis
- Agreement with Dete and team on MVP of dynamic fee to be launched with Crescendo launch
- Draft FLIP for dynamic fee
- With Coinbase 48M delegation coming to an end, identify next steps

**On Hold**


**Active Epics**

- N/A
