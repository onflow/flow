# Overview

### Team Wins 🎉

- Added one of the FF nodes to the QuickNode load balancer to enable easier testing and debugging of new Access node features with real user traffic.
- After over a year of development, flow-go stable-cadence (Cadence 1.0) branch [merged to master](https://github.com/onflow/flow-go/pull/5856)!
- All planned and requested breaking changes in C1.0 delivered in the latest preview release, unblocking devs to test they migration to C1.0.
- Fixed all known issues with C1.0 and Atree inlining state migrations. 
- EVM updated to latest release and functional on Previewnet - All EVM changes needed for Testnet upgrade to Crescendo completed.
- Positive community feedback on new proposal for Testnet upgrade process to Crescendo, using transaction failure mode for transactions importing unstaged contracts.
- Published [“Interacting with COAs with Cadence”](https://developers.flow.com/evm/cadence/interacting-with-coa) Guide
- CLI Interactive Init Demo in prep for release
- Merged feature branches in flow-ft and flow-nft

### General updates

### OOO
- [Full List](https://www.notion.so/flowfoundation/de89aa4e79364216a665888335a1cdee?v=4de18b26f60d4bae8f62724dddcce260)

---

### Mainnet Uptime - Last 14 days (4/26/24 to 5/10/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    100%       |       0%         |
| Block Sealing           | 99.9%   |    100%       |       0%         |
| Access API Liveness     | 99.9%   |    99.99%     |       4.91%      |

[SLO dashboards](https://flowfoundation.grafana.net/d/hgW3l-m4k/slo-dashboard?orgId=1&from=now-2w&to=now)

[YTD SLA: 100%](https://app.metrika.co/flow/dashboard/slas?tr=YTD)

## Incidents

## Access Node incidents
1. Sev 3: 26th April: Public access nodes run by QuickNode in EU falling behind. [slack thread](https://dapperlabs.slack.com/archives/C03HP6MAFGE/p1714139880086399)
2. Sev 3: 3rd May: High response time on Public ANs in North America. [slack thread](https://dapperlabs.slack.com/archives/C03HP6MAFGE/p1714757713793539)
3. Sev 3: 4th May: NBA stuck on continuously retrying a script on a block height. [slack thread](https://dapperlabs.slack.com/archives/CTGAW0TM2/p1714866679734789)
4. Sev 3: 8th May: NBA getting timeout when fetching transactions on mainnet. [slack thread](https://dapperlabs.slack.com/archives/CTGAW0TM2/p1715199157704169)

(Sev [definition](https://www.notion.so/dapperlabs/Incident-Priorities-Severity-Levels-b65d7682336c46baa025ee512fd3efa3))

### Key Release Dates & Breaking Changes
- Testnet HCU: 7th May ✔️
- Mainnet HCU: 9th May ✔️
- Next Mainnet/Testnet network upgrade (spork):
  - Testnet: ~~5/22/24~~ 6/19/24
  - Mainnet: July 2024 (exact date TBD)
- Testnet migration test runs conducted every week.

---

### FLIPs Tracker \[Kshitij]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 6  |    8   |       1         |       7          |        **22** (+1)          |
| Proposed    | 1  |    2     |       2          |       0           |        **5**          |
| Accepted    | 2  |    1     |       1       |       1          |        **5**          |
| Rejected    | 0  |    0     |       1       |       0          |        **1**          |
| Implemented | 3 |    21    |       2       |       1           |        **7**          |
| Released    | 4  |    0     |       3       |       6          |        **13**          |
| Total       | **16**  |    **32**  |       **10** (+1)      |       **15**          |        **73** (+1)          |

**New FLIPs**
* [Governance] - 5X Computation Limit Hike (Drafted)
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
- [Unskip migration of Testnet accounts with broken data](https://github.com/onflow/flow-go/pull/5759)
- [Mainnet state migration crashes on preview.22 build](https://github.com/onflow/cadence/issues/3287)
    - [Handle missing staged contracts](https://github.com/onflow/flow-go/pull/5796)
- [Testnet state migration preview.22 health check after migration error](https://github.com/onflow/cadence/issues/3288)
    - [Add reproducer as test for Cadence 1.0 migration issue](https://github.com/onflow/cadence/pull/3314)
    - [Fix Cadence 1.0 migration of dictionary values when using atree inlined data](https://github.com/onflow/cadence/pull/3316)
    - [Improve dictionary migration](https://github.com/onflow/cadence/pull/3318)
- [Improve migration logging, reports, and export broken slabs that were fixed to a new payloads file](https://github.com/onflow/flow-go/pull/5803)
    - [port](https://github.com/onflow/flow-go/pull/5805)
- [Test the migration of &NonFungibleToken.Provider](https://github.com/onflow/flow-go/pull/5807)
- [Add predicate function and test for atree's PersistentSlabStorage.FixLoadedBrokenReferences](https://github.com/onflow/cadence/pull/3300)
- [Update Cadence 1.0 Contract Upgrade Validator to reject unrepresentable entitlement sets](https://github.com/onflow/cadence/issues/3296)
    - [Produce a validator error when contracts would produce unrepresentable entitlements sets in the migration](https://github.com/onflow/cadence/pull/3304)
- [Use Cadence's predicate function to determine if given broken value should be fixed](https://github.com/onflow/flow-go/pull/5831)
- [Migration optimization](https://github.com/onflow/cadence/issues/3297)
    - [Reuse static type cache across migrations in different accounts](https://github.com/onflow/flow-go/pull/5847)
    - [Make static type cache an interface](https://github.com/onflow/cadence/pull/3315)
    - [Make migration error stacktrace configurable](https://github.com/onflow/cadence/pull/3322)
    - [Cache results of migrations, e.g. static types, entitlements, etc.](https://github.com/onflow/cadence/issues/3326)
        - [Add/improve caching in static type and entitlements migration](https://github.com/onflow/cadence/pull/3329)
- Atree
    - [Fix the migration feature that filters unreferenced slabs](https://github.com/onflow/atree/issues/395)
        - [Fix migration filter for old unreferenced slabs](https://github.com/onflow/atree/pull/396)
        - [Port](https://github.com/onflow/atree/pull/399)
    - [SlabIterator should include nested storage ID](https://github.com/onflow/atree/issues/397)
        - [Fix SlabIterator to include nested storage ID](https://github.com/onflow/atree/pull/398)

Cadence Features / Improvements
- Go API Breaking changes:
    - [Remove access to fields by index](https://github.com/onflow/cadence/issues/2952)
        - [Unexport fields to prevent access by index](https://github.com/onflow/cadence/pull/3290)
    - [Remove Value.ToGoValue and NewValue](https://github.com/onflow/cadence/pull/3291)
- [Enable attachments on mainnet](https://github.com/onflow/flow-go/pull/5866)
- [Fuzzer - update the C1.0](https://github.com/dapperlabs/cadence-fuzzer/pull/43)
- Security fixes: [1](https://github.com/dapperlabs/cadence-internal/pull/224), [2](https://github.com/dapperlabs/cadence-internal/pull/226), [3](https://github.com/dapperlabs/cadence-internal/pull/227)
- Security improvements
    - [Add runtime check for transaction value moves](https://github.com/onflow/cadence/pull/3298)
    - [Add test for untyped optional nested-reference creation](https://github.com/onflow/cadence/pull/3317)
- Bugfixes
    - [Capability created with invalid ID when unrelated contract field is accessed](https://github.com/onflow/cadence/issues/3323)
        - [Remove invalid ID capability error](https://github.com/onflow/cadence/pull/3325)
    - [panic occurs when borrowing a contract interface from account](https://github.com/onflow/cadence/issues/3241)
        - [Fix borrowing of contract interface](https://github.com/onflow/cadence/pull/3327)
- Docs
    - [Clean up entitlements docs](https://github.com/onflow/cadence-lang.org/pull/97)
- Util: [Add a command to generate a mermaid diagram](https://github.com/onflow/cadence/pull/3307)


Crescendo release chores
- flow-go: [1](https://github.com/onflow/flow-go/pull/5887), [2](https://github.com/onflow/flow-go/pull/5792), [3](https://github.com/onflow/flow-go/pull/5793), [4](https://github.com/onflow/flow-go/pull/5806), [5](https://github.com/onflow/flow-go/pull/5817), [6](https://github.com/onflow/flow-go/pull/5820), [7](https://github.com/onflow/flow-go/pull/5829), [8](https://github.com/onflow/flow-go/pull/5830), [9](https://github.com/onflow/flow-go/pull/5834), [10](https://github.com/onflow/flow-go/pull/5835), [11](https://github.com/dapperlabs/flow-go/pull/6962), [12](https://github.com/dapperlabs/flow-go/pull/6963)
- Cadence: [1](https://github.com/onflow/cadence/pull/3293), [2](https://github.com/onflow/cadence/pull/3294), [3](https://github.com/onflow/cadence/pull/3295), [4](https://github.com/onflow/cadence/pull/3301), [5](https://github.com/onflow/cadence/pull/3306)
- flowkit: [1](https://github.com/onflow/flowkit/pull/38), [2](https://github.com/onflow/flowkit/pull/40)
- Cadence Tools: [1](https://github.com/onflow/cadence-tools/pull/351), [2](https://github.com/onflow/cadence-tools/pull/356), [3](https://github.com/onflow/cadence-tools/pull/357), [4](https://github.com/onflow/cadence-tools/pull/358), [5](https://github.com/onflow/cadence-tools/pull/362)
- EVM GW: [1](https://github.com/onflow/flow-evm-gateway/pull/218), [2](https://github.com/onflow/flow-evm-gateway/pull/227)
- flixkit-go: [1](https://github.com/onflow/flixkit-go/pull/59), [2](https://github.com/onflow/flixkit-go/pull/61)
- flow-go-sdk: [1](https://github.com/onflow/flow-go-sdk/pull/635), [2](https://github.com/onflow/flow-go-sdk/pull/640), [3](https://github.com/onflow/flow-go-sdk/pull/642)
- tool config: [1](https://github.com/onflow/cadence/pull/3292)
- emulator: [1](https://github.com/onflow/flow-emulator/pull/650), [2](https://github.com/onflow/flow-emulator/pull/652), [3](https://github.com/onflow/flow-emulator/pull/654), [4](https://github.com/onflow/flow-emulator/pull/659)
- CLI: [1](https://github.com/onflow/flow-cli/pull/1564)

Cadence Execution
- [Completed new Ingestion engine implementation](https://github.com/onflow/flow-go/pull/5593)
    - [Use compnent manager](https://github.com/onflow/flow-go/pull/5611)
    - [Check local collection exists before fetching](https://github.com/onflow/flow-go/pull/5838)
    - [Fix throttle](https://github.com/onflow/flow-go/pull/5863)
    - [v0.33 backport](https://github.com/onflow/flow-go/pull/5787)
- [Util feature - find the first result that mismatch with the sealed result](https://github.com/onflow/flow-go/pull/5883)
- [EN1 Missing events for some blocks](https://github.com/dapperlabs/flow-go/issues/6959)
    - Helper to detect the problem in the future - [adding checks when a block has no events](https://github.com/onflow/flow-go/pull/5764)
    - [update error message when events hash mismatch](https://github.com/onflow/flow-go/pull/5804)
- Performance testing
    - [Add a TPS test that does multiple token transfers per transaction to the performance benchmark](https://github.com/onflow/flow-go/issues/5329)
        - [Add new TPS loader load type](https://github.com/onflow/flow-go/pull/5864)
- Bug: [Cadence 1.0 getBlock errors when querying outside of queriable range](https://github.com/onflow/flow-go/issues/5852)
    - [Do not return an error when block is unavailable due to expiry](https://github.com/onflow/flow-go/pull/5853)
- CBOR: [Refactor to reuse functions and improve code coverage](https://github.com/fxamacker/cbor/pull/531)
- [Minor TPS benchmark fixes](https://github.com/onflow/flow-go/pull/5780)

EVM
- Core
    - [Support evm.batchRun](https://github.com/onflow/flow-go/issues/5501)
        - [Batch run transactions](https://github.com/onflow/flow-go/pull/5614)
        - [Add batch run to EVM FLIP](https://github.com/onflow/flips/pull/257)
    - [Gas estimation](https://github.com/onflow/flow-go/issues/5603)
        - [Dry-run function](https://github.com/onflow/flow-go/pull/5749)
    - [block overhead optimization](https://github.com/onflow/flow-go/issues/5504)
    - [Change transaction event field name](https://github.com/onflow/flow-go/issues/5760)
    - [Add total gas used to block](https://github.com/onflow/flow-go/issues/5628)
        - [Optimize event data](https://github.com/onflow/flow-go/pull/5779)
    - [Bridged account creation event consolidation](https://github.com/onflow/flow-go/issues/5414)
        - [Remove special EVM type](https://github.com/onflow/flow-go/pull/5791)
    - [Skip nonce check on dry runs](https://github.com/onflow/flow-go/pull/5816)
    - [Add transaction index to result](https://github.com/onflow/flow-go/pull/5818)
    - [Result.deployedContract field is not assignable](https://github.com/onflow/flow-go/issues/5842)
        - [Fix EVM.Result.deployedContract](https://github.com/onflow/flow-go/pull/5844)
    - [Support decoding blocks without timestamp](https://github.com/onflow/flow-go/issues/5846)
        - [Add decoder for blocks without timestamp](https://github.com/onflow/flow-go/pull/5848)
- Bridge
    - [Add bridging interface to EVM contract - stable cadence port](https://github.com/onflow/flow-go/pull/5716)
- Gateway
    - [Add support for batched transactions](https://github.com/onflow/flow-evm-gateway/issues/224)
        - [Support batched transactions](https://github.com/onflow/flow-evm-gateway/pull/223)
    - [Allow specifying init Cadence height](https://github.com/onflow/flow-evm-gateway/pull/226)
    - [Add force set height flag](https://github.com/onflow/flow-evm-gateway/pull/232)
    - [Set fixed height flag](https://github.com/onflow/flow-evm-gateway/pull/233)
    - [Fix decoding issues with previous formats](https://github.com/onflow/flow-evm-gateway/pull/237)

**This sprint**

Objective 1, KR 1: Enable Developers and the Flow Foundation to simulate Cadence 1.0 Contract upgrades
* All breaking changed released in a new CLI: v1.18.0-cadence-v1.0.0-preview.23

Objective 1, KR4: Testnet Upgrade to Crescendo Release
* Completed Testnet migration with both Atree inlining and Cadence 1.0.
* Completed [EVM Gateway development](https://github.com/onflow/flow-evm-gateway/issues/126) and [EVM Core development](https://github.com/onflow/flow-go/issues/5536) production readiness EPICs.
* Continue work on migration optimizations.

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
  - Merged [kvstore branch](https://github.com/onflow/flow-go/pull/5840) with master and Cadence 1.0 and successfully tested on Benchnet
  - Extended tests for edge case in Dynamic Protocol State: https://github.com/onflow/flow-go/pull/5681
  - Follow-up on KVStore
    - [Fixing a KVStore encoding edge case](https://github.com/onflow/flow-go/pull/5854)
    - [Simplifying snapshot model](https://github.com/onflow/flow-go/pull/5682)
    
* <ins>EFM Recovery</ins>
  - [Applied suggestions and finalized first Dynamic Protocol State issue for EFM recovery](https://github.com/onflow/flow-go/pull/5773)
  - PR reviews to finalize M2
  - [Epoch Recover integration test](https://github.com/onflow/flow-go/issues/5886)
  - [Investigate network/p2p flakey tests](https://github.com/onflow/flow-go/issues/5886) 

* <ins>Data Availability:</ins>
  - Add support for programs cache on access nodes ([PR #5585](https://github.com/onflow/flow-go/pull/5585))
  - Failover script execution to EN when computation limit exceeded ([PR #5877](https://github.com/onflow/flow-go/pull/5877))
  - Add options to disable DHT and bitswap reproviding ([PR #5827](https://github.com/onflow/flow-go/pull/5827))
  - Log configuration at error level (help communicate configs on QN nodes) ([PR #5785](https://github.com/onflow/flow-go/pull/5785))
  - Convert Ping engine to component ([PR #5649](https://github.com/onflow/flow-go/pull/5649))
  - KROK Team
    - Refactor ingestion engine to prevent lost data ([PR #5714](https://github.com/onflow/flow-go/pull/5714))
    - Update ingestion engine to use consumer progress ([PR #5752](https://github.com/onflow/flow-go/pull/5752))
    - Align ExecutionData API with new endpoints ([PR #5672](https://github.com/onflow/flow-go/pull/5672))
    - Finished testing to support enabling indexing on Dynamic bootstrapped AN ([Issue #5423](https://github.com/onflow/flow-go/issues/5423))

* <ins>Cryptography:</ins>
   - Randomness core-contract fix: updated on TN and MN (Josh) - confirmed the update fixed the broken state - e2e tests updated
   - DKG: investigate papers for potential security reduction of Pedersen output keys
   - BFT: pick-up the proof of possession of staking private keys epic (check current state - update old open PRs)
   - core-contracts: use new Cadence’s modulo argument to fix uniformity in random distributions

**This sprint**

* <ins>Zero-downtime Upgrades of Node Software:</ins>
  - [Dynamic Protocol State - todos, suggested revisions and tech debt](https://github.com/onflow/flow-go/issues/5666#top)
  - Apply comments and finalize https://github.com/onflow/flow-go/pull/5773
  - Reviews for open M2 PRs, priority to close the milestone
  - Wrapping up the KVStore M2 items going into this spork
    
* <ins>EFM Recovery</ins>
  - [Address Recover Epoch cadence PR feedback](https://github.com/onflow/flow-core-contracts/pull/420)
  - [Wrap up integration test](https://github.com/onflow/flow-go/issues/5886)
  - [Cancel in progress root QC voting](https://github.com/onflow/flow-go/issues/5733)

* <ins>Data Availability:</ins>
  - Test local script exec with lower compute limit
  - Continue debugging resource issues observed on QuickNode
  - KROK Team
    - Fix retries when using preferred-execution-nodes list ([Issue #5810](https://github.com/onflow/flow-go/issues/5810))
    - Merge changes to support enabling indexing on Dynamic bootstrapped AN ([Issue #5423](https://github.com/onflow/flow-go/issues/5423) - PR in review)
    - Update rosetta for Crescendo ([Issue #52](https://github.com/onflow/rosetta/issues/52))
    - Address tech debt in APIs ([Issue #5757](https://github.com/onflow/flow-go/issues/5757) - PR in review)
    - Add support for version beacon events to control script execution ([Issue #5757](https://github.com/onflow/flow-go/issues/5757))

* <ins>Cryptography:</ins>
   - BFT - proof of possession epic : continue updating old PRs - scope the Ledger wallet work with VaccumLabs
   - SPoCK aggregation: revisit the SPoCK security proof


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
- EVM partner onboarding: Pyth, DeBridge, Covalent, Etherscan
- Deliver Axelar bridge

**Done last sprint**
- Onboarded DeBridge to PreviewNet
- Unblocked JVM SDK artifact publishing GH automation which took several fiddly days of back and forth to figure out
- Approved and funded proposal for second phase of JVM SDK upgrade to start bringing it to parity with the Go SDK

**This sprint**
* Update JVM SDK examples repo now that latest version artifact successfully published
* Implement multi-sig solution for Circle to help with USDC migration to EVM
* Upgrade Band protocol contract to C1.0

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

**Tools**
- Fixed issues with Cadence decoding with backwards compatibility. Confirmed working https://github.com/onflow/cadence/issues/3250
- FCL compatibility with Cadence 1.0 JSON-CDC changes
- [Windows CI not working as expected](https://github.com/onflow/flow-cli/issues/1556)
- [Disable logs in generate for setup](https://github.com/onflow/flow-cli/issues/1554)
- [Improve emojis across Windows versions in Dependency Manager output headers](https://github.com/onflow/flow-cli/issues/1557)
- [Add message if conflicting contract on dependency install](https://github.com/onflow/flow-cli/issues/1560)
- [Setup project for flow dev](https://github.com/onflow/flow-cli/issues/1575)
- [Start emulator flag on flow dev errors for gas limit ](https://github.com/onflow/flow-cli/issues/1577)
- [flow dev should run emulator without flag](https://github.com/onflow/flow-cli/issues/1579)
- [Change paths in flow.json to relative](https://github.com/onflow/flow-cli/issues/1532)
- [Keep any project creation from saving until completion in case of cancellation](https://github.com/onflow/flow-cli/issues/1531)
- [Change "Flow Ref" References to "Flow"](https://github.com/onflow/fcl-discovery/issues/181)
- [Update JSON-CDC encoding for Cadence 1.0](https://github.com/onflow/fcl-js/issues/1861)
- [Broken flow.json when deploying contract with [String] as init arg](https://github.com/onflow/flow-cli/issues/1352)
- [flow test configuration and default behaviour](https://github.com/onflow/flow-cli/issues/1378)

**Education and Adoption**
- Published [“Interacting with COAs with Cadence”](https://developers.flow.com/evm/cadence/interacting-with-coa) Guide
- Spilt Dev Docs into Cadence 1.0 and Legacy [#738](https://github.com/onflow/docs/issues/738)
- [Transferring Flow between Cadence and EVM](https://github.com/onflow/docs/issues/686)
- [Replace all references for Flow Reference Wallet in the docs to Flow Wallet](https://github.com/onflow/docs/issues/699)
- [Cadence Direct Calls to the EVM Ref Doc](https://github.com/onflow/docs/issues/684)

**Smart Contracts**
- [Deploying contracts with Address init args breaks config](https://github.com/onflow/flow-cli/issues/1427)
- [Update flow-nft contracts to comply with Stable Cadence changes](https://github.com/onflow/flow-nft/issues/133)
- [Add EVM Bridge README](https://github.com/onflow/flow-evm-bridge/issues/49)
- [Restructure repo for organization and enhanced implicit clarity ](https://github.com/onflow/flow-evm-bridge/issues/50)
- [Add EVMBridgedMetadata implementation into ExampleNFT](https://github.com/onflow/flow-nft/issues/213)
- [Update code template args json](https://github.com/onflow/flow-evm-bridge/issues/53)
- [Update flow-ft contracts to comply with Stable Cadence changes](https://github.com/onflow/flow-ft/issues/96)
- [Impossible to count number of NFTs in large collections and get the IDs](https://github.com/onflow/flow-nft/issues/184)
- [Adding support in MetadataViews to support viewing nested resources](https://github.com/onflow/flow-nft/issues/146)

**This sprint**
**Sprint goal focusing on: Flow Port Asset Bridge and Token Transfer, FCL x WalletConnect Improvements, shipping new CLI version, EVM randomness**

- [EPIC] Flow Port Asset Bridge [#284](https://github.com/onflow/flow-port/issues/284)
- [EPIC] EVM Docs [#654](https://github.com/onflow/docs/issues/654)
- [EPIC] Flow EVM Docs - Cadence Dev [#575](https://github.com/onflow/docs/issues/575)
- [Epic]: Update Flow port for Cadence v1.0 instance [#279](https://github.com/onflow/flow-port/issues/279)

#### Smart Contract WG

- Reviews for Increment.fi
- Circle Support
- Update Tutorials for Cadence 1.0 [#769](https://github.com/onflow/docs/issues/769)
- Add Solidity implementation using EVM randomness
- [FEATURE] Update Core Contracts [#756](https://github.com/onflow/docs/issues/756)
- VM Bridge audit startd May 13th

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

- Completing VM-Bridge integration, NFT transfer
- UI / UX / Bug updates. Working through a large list of tracked bugs / UI updates required:
  - Improving SE account creation workflow.
  - Profile account recovery / social recovery.
  - Account recovery from multiple sources.
  - Asset display issues (NFT and FT).
  - Supporting additional token types (eg: Those created by toucans)
  - Misc copy updates / fixes.
 
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
**Incident Management**
- Updated alert routing to solely go to Grafana OnCall

**Benchnet Automation**
- [Updated contour to fix broken controller](https://github.com/dapperlabs/flow-benchnet-automation-infrastructure/pull/47)
- [Updated LB to allow FF IPs](https://github.com/dapperlabs/flow-benchnet-automation-infrastructure/pull/48)

**Node Hosting**
- [Update Rate Limits for QuickNode IPs](https://github.com/dapperlabs/dapper-flow-hosting/pull/1485)
- [Update Devnet LN & VN Memory to avoid churn](https://github.com/dapperlabs/terraform/pull/4234)
- [Increase DL Studio Node sizes](https://github.com/dapperlabs/terraform/pull/4235/files)

**Migration Support**
- [Add support for REST, gRPC-web, and EVM Gateway Routing on Migrationnet](https://github.com/dapperlabs/terraform/pull/4223)
- [Create the infrastructure for EVM Gateway on Migrationnet](https://github.com/dapperlabs/terraform/pull/4222)
- [Create the ansible configuration for the EVM Gateway on Migrationnet](https://github.com/dapperlabs/dapper-flow-hosting/pull/1483)

**Support**
- Worked with GCP to request quota increases for migration nodes
- Created and configured Execution Node for isolated testing
- Assist with Mainnet HCU for DL nodes
- Assist with Previewnet Spork & Recovery
- Clean up old Vercel domains

**Goal of this Sprint is to continue migration efforts** 
**This Sprint**
- Solidify CloudFlare Migration plan and continue preparing for migration
- Continue assisting with DevEx migration to Cloud Run
- Improve synthetic alerting 

---

### **Governance and Tokenomics** \[Kshitij]
Cycle Objective(s): Transaction fees on EVM, increasing transaction fees and inflation reduction plan.

**Done last sprint**
- Tested governance changes (gas to evm ratio, 5x compute limit, 100x fee) on PreviewNet
- Review various inflation reduction strategies with the team - see slide 2 on [this deck](https://docs.google.com/presentation/d/1EBYqB8FwxHtOwaQMHiId0ZZv4bRNThNYrgF5-CZeI8M/edit?pli=1#slide=id.g26c5efcb5cb_0_280) for a summary
- Monthly Flow Governance Working Group meeting
- Computation Limit Hike [PR](https://github.com/onflow/flips/pull/268)
- Transaction fee multiplioer [PR](https://github.com/onflow/flips/pull/265) and Data update [PR](https://github.com/onflow/flips/pull/266)
- Consolidated node operator data; assessed which operator use lease tokens versus self-stake; revoked leases
- Research on shock-absorbers ("responsible liquidation smart contract") to FLOW volatility and as a burn-alternative
- Synced with new potential consensus node operators
- Updated market comps data; TPS, fees, multiple vis a vis Flow. summary [here](https://docs.google.com/spreadsheets/d/1XvGvIRegRg7HJDmCRpOnP97Ozbb6gKVNPBnolbfqbKY/edit#gid=0)

**This sprint**
- Continue chats with potential consensus node operators and finalize lease discussions
- Onboard 8 new SNs - contracts, lease transfers, stake and setup assistance 
- Review, finalize and merge Tokenomics PRs
- Transaction fee partner impact discussion and way forward with FF leadership
- Map and evaluate post crescendo Flow scenarios regarding tps, fees and inflation
- R&D and planning with Dete on post Crescendo surge pricing [already kicked off]
- Metrics planning for foundation’s financials and network Tokenomics
- Continue working on node operator branding and logos with .find team
  
**On Hold**


**Active Epics**

- N/A
