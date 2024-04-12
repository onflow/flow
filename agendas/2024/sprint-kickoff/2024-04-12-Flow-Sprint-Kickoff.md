# Overview


### Team Wins 🎉
- Integrated QuickNode Access node profiler with our Grafana [dashboard](https://flowfoundation.grafana.net/explore?schemaVersion=1&panes=%7B%222hf%22%3A%7B%22datasource%22%3A%22ddhnnosc07gn4e%22%2C%22queries%22%3A%5B%7B%22groupBy%22%3A%5B%5D%2C%22labelSelector%22%3A%22%7B%7D%22%2C%22spanSelector%22%3A%5B%5D%2C%22queryType%22%3A%22both%22%2C%22refId%22%3A%22A%22%2C%22datasource%22%3A%7B%22type%22%3A%22grafana-pyroscope-datasource%22%2C%22uid%22%3A%22ddhnnosc07gn4e%22%7D%2C%22profileTypeId%22%3A%22process_cpu%3Acpu%3Ananoseconds%3Acpu%3Ananoseconds%22%7D%5D%2C%22range%22%3A%7B%22from%22%3A%22now-1h%22%2C%22to%22%3A%22now%22%7D%7D%7D&orgId=1) - Vishal
- Local script execution successfully deployed to NFL ANs. Saw 35% reduction p90 request times. - Vishal
- Local script execution successfully tested for Fnacraze. Saw 50% reduction p90 request times. - Vishal
- Local transaction results deployed to all public ANs. Saw 50% reduction in requests to ENs - Vishal
- Released [CLI preview.19](https://github.com/onflow/flow-cli/releases/tag/v1.17.0-cadence-v1.0.0-preview.19), unblocking local contract migration testing KR. - Jan
- Cadence 1.0 migrations - all migrations completed for valid data, now working on handling of 2 broken state edge-cases. - Jan
- Ready to start testing the Atree register inliing + Cadence 1.0 migrations together. - Jan
- Kicked off first Mainnet state imgration to C1.0 to test the performance and identified number of optimizations we are working on. - Jan
- New utility that generates data for dynamic bootstrapping without  the need to create EN disk snapshot (enables [generating a protocol snapshot file for specified execution state checkpoint[(https://github.com/onflow/flow-go/issues/5580)]). - Jan
- Added emulator fuctionality now makes it possible to [run an emulator using existing checkpoint file](https://github.com/onflow/flow-emulator/pull/620). - Jan
- CodeRabbit AI PRs reviews / summaries are [cool](https://github.com/onflow/flow-evm-gateway/pull/186#issuecomment-2039857061)! - Jan
- Long running Go routine leak that had been a thorn in our side for some time now fixed thanks to libp2p update - Jerome
- Fixed CPU compatibility issue for ArtBlocks node resolving the last remaining crypto upgrade compatibility problem - Jerome

### General updates


### OOO
- [Full List](https://www.notion.so/flowfoundation/de89aa4e79364216a665888335a1cdee?v=4de18b26f60d4bae8f62724dddcce260)
- Starting Next Week:

---

### Mainnet Uptime - Last 7 days (3/29/24 to 4/12/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    100%       |       0%         |
| Block Sealing           | 99.9%   |    100%       |       0%         |
| Access API Liveness     | 99.9%   |    99.99%    |       9.82%       |

[SLO dashboards](https://flowfoundation.grafana.net/d/hgW3l-m4k/slo-dashboard?orgId=1&from=now-2w&to=now)

[YTD SLA: 100%](https://app.metrika.co/flow/dashboard/slas?tr=YTD)

## Incidents
- Sev-3: Go routine leak on AN3 and EN1. Fixed with the libp2p DHT update. (slack [thread](https://dapperlabs.slack.com/archives/C014WBGR1J9/p1712074091594089))

### Key Release Dates & Breaking Changes

- Next Mainnet/Testnet network upgrade (spork):
  - Testnet: 5/22/24
  - Mainnet: June/July 2024 (exact date TBD)
- Two testnet migration test runs completed

---

### FLIPs Tracker \[Kshitij]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 7  |    8   |       0          |       5          |        **20**          |
| Proposed    | 3  |    2     |       2          |       1          |        **8**          |
| Accepted    | 2  |    1     |       1       |       2          |        **6**          |
| Rejected    | 0  |    0     |       1       |       0          |        **1**          |
| Implemented | 1  |    19    |       2       |       0          |        **22**          |
| Released    | 4  |    0     |       3       |       4          |        **11**          |
| Total       | **17**  |    **30**    |       **9**       |       **12**          |        **68**          |

- No new FLIPs or changes during the sprint
- Some FLIPs are still not reflected in the project tracker. **Remember**: FLIP process starts with an issue creation.
(https://github.com/onflow/flips?tab=readme-ov-file#submitting-the-flip)
### Untagged FLIPs -
- https://github.com/onflow/flips/pull/246 
- https://github.com/onflow/flips/pull/250
- https://github.com/onflow/flips/pull/256
  
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

Cadence 1.0 migration environment
- Fixing last remaining migration issues for "healthy" state: [State migration fails in some cases](https://github.com/onflow/cadence/issues/3192)
- Added migration reporter for staged contracts migration:
    - [Report the status of staged contract updates](https://github.com/onflow/flow-go/issues/5630)
    - [Collect staged contracts from the storage](https://github.com/onflow/flow-go/pull/5659)
- Optimization:
    - [Simplify migration runtime, no need for interface and environment](https://github.com/onflow/flow-go/issues/5651)
    - [Improve atree register inlining v1.0](https://github.com/onflow/cadence/pull/3230)
    - [Improve validation of Cadence values in atree migration](https://github.com/onflow/flow-go/pull/5609)
    - [Use atree's new read-only iterators when mutation of returned values are not required](https://github.com/onflow/cadence/issues/2836)
- Handling broken state in migrations:
    - [Migration to clean up unreferenced slabs](https://github.com/onflow/flow-go/issues/5634)
        - [Introduce a dedicated error for unreferenced slabs and expose the IDs](https://github.com/onflow/cadence/pull/3231)
    - [Move conflicting dictionary key to new dictionary in unique storage path](https://github.com/onflow/cadence/issues/3227)
    - [Add storage health check flags for atree migration](https://github.com/onflow/flow-go/issues/5636)
- PReparing Cadence branch with integrated Atree register inlining:
    - Atree bugfix:
        - [Fix error type for external errors during serialization](https://github.com/onflow/atree/issues/382)
        - [Use encoded type info to deduplicate extra data](https://github.com/onflow/atree/pull/381)
    - [Merge master into v1.0 atree register inlining feature branch](https://github.com/onflow/cadence/issues/3229)
    - [Merge v0.42 into v0.42 atree register inlining feature branch](https://github.com/onflow/cadence/issues/3228)
    - [Bump onflow/atree to latest version in feature/atree-register-inlining-v1.0](https://github.com/onflow/cadence/pull/3223)
    - [Bump onflow/atree to latest version in feature/atree-register-inlining-v0.42](https://github.com/onflow/cadence/issues/3218)
    - [Port #3231 to v0.42](https://github.com/onflow/cadence/pull/3237)
    - [Sync atree inlining branch with master](https://github.com/onflow/cadence/issues/3179)
    - [Atree register inlining for v1.0](https://github.com/onflow/cadence/pull/3048)
    - [Updating stable cadence branch with latest changes of master](https://github.com/onflow/flow-go/pull/5575)
- migration bugfixes:
    - [Fix storage health check in Cadence 1.0 migration](https://github.com/onflow/flow-go/pull/5622)
    - [Fix storage map key conversion in atree migration](https://github.com/onflow/flow-go/pull/5605)
- Migration tooling: [Add util command to extract payload by address](https://github.com/onflow/flow-go/pull/5608)

Cadence 1.0 features & improvements
- [Check resource loss in all variable assignments](https://github.com/onflow/cadence/pull/3226)
- [Check resource loss in `CompositeValue.RemoveField`](https://github.com/onflow/cadence/issues/3224)
- bugfix:
    - [Clear inAssignment when recursing into subexpressions](https://github.com/onflow/cadence/pull/3236)
    - [Checker crash with dereference](https://github.com/onflow/cadence/issues/3214)
    - [Fix built-in type import](https://github.com/onflow/cadence/pull/3212)
- Fix the crasher reported for revertibleRandom: [Handle missing type arguments in type argument checks](https://github.com/onflow/cadence/pull/3234)
- [remove ability to dereference arrays or dicts of structs](https://github.com/onflow/cadence/pull/3221)
- porting of release security fixes from v0.42 to 1.0 & other security fixes:
    - [Fixes of v0.42.8-patch.4 do not work on master](https://github.com/onflow/cadence/issues/3081)
    - [Add TypeArgumentsChecks to certain builtin functions](https://github.com/onflow/cadence/pull/3208)
    - [Properly handle Never type argument to Capabilities.get](https://github.com/onflow/cadence/pull/3203)
    - [Resource Reference Invalidation Improvements](https://github.com/onflow/cadence/pull/3181)
    - [Proper type checking for resource use after validation on two-value transfers](https://github.com/onflow/cadence/pull/3176)

Cadence docs:
- [Docs for dereference](https://github.com/onflow/cadence-lang.org/issues/82)
- [Fix header level in contract updatability documentation](https://github.com/onflow/cadence-lang.org/issues/85)
- [Fix typo in install command, add missing end quote](https://github.com/onflow/cadence-lang.org/issues/84)

Cadence 1.0 dependency updates
- CLI: [1](https://github.com/onflow/flow-cli/issues/1494)
- EVM Gateway: [1](https://github.com/onflow/flow-evm-gateway/issues/184)
- Flixkit-go: [1](https://github.com/onflow/flixkit-go/issues/56), [2](https://github.com/onflow/flixkit-go/issues/54)
- Language server: [1](https://github.com/onflow/cadence-tools/issues/335)
- flowkit: [1](https://github.com/onflow/flowkit/issues/34)
- cadence-tools: [1](https://github.com/onflow/cadence-tools/issues/334), [2](https://github.com/onflow/cadence-tools/issues/333)
- emulator: [1](https://github.com/onflow/flow-emulator/issues/628)
- flow-go: [1](https://github.com/onflow/flow-go/issues/5621)
- flow-go-sdk: [1](https://github.com/onflow/flow-go-sdk/issues/614)

EVM Gateway
- Big effort completed - refactored tests using web3.js: [E2E tests refactor](https://github.com/onflow/flow-evm-gateway/pull/186)
- [Events ingested from Cadence can be out of order](https://github.com/onflow/flow-evm-gateway/pull/198)
- [Stream new logs](https://github.com/onflow/flow-evm-gateway/issues/164)
- [Streaming of new transactions](https://github.com/onflow/flow-evm-gateway/pull/173)
- Big effort completed: [Streaming of new blocks](https://github.com/onflow/flow-evm-gateway/issues/163)

Cadence Execution
- Issue with potential to cause execution form on dynamically-bootstrapped ENs: [Execution indeterminism when using cadence getBlock](https://github.com/dapperlabs/flow-go/issues/6939)
- Tech debt / improvement - unify defining FVM Options: [Add DefaultFVMOptions to verification builder](https://github.com/onflow/flow-go/pull/5440)
- O4-KR1: Execution node handles restart from spork root block reguardless of how many blocks it is behind:
    - [Refactor ingestion engine mempool](https://github.com/onflow/flow-go/issues/5297)
        - [Ingestion Block Queue](https://github.com/onflow/flow-go/pull/5248)

Utils
 - [Generate protocol snapshot file from latest checkpoint file](https://github.com/onflow/flow-go/issues/5580)

**This sprint**

Objective 1, KR 1: Enable Developers and the Flow Foundation to simulate Cadence 1.0 Contract upgrades
* [Emulator release is ready](https://github.com/onflow/flow-cli/releases/tag/v1.17.0-cadence-v1.0.0-preview.19), support devs that are teting migration, monitor Discord questions.

Objective 1, KR4: Testnet Upgrade to Crescendo Release
* Testnet migration completed, moving on to adding [Atree register inlining](https://github.com/onflow/cadence/pull/3048) migration and validating migrated state on the TN migration environment.
* Continue work on migration optimizations.
* Continue with [EVM Gateway development](https://github.com/onflow/flow-evm-gateway/issues/126) and [EVM Core development](https://github.com/onflow/flow-go/issues/5536) for production readiness.

Objective 2, KR 1: Update transaction fees weights for the execution operations on TN and MN
* Continue work on [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)

Objective 4, KR1: Execution node handles restart from spork root block reguardless of how many blocks it is behind
* Continue refactoring of Ingestion engine to [prevent EN entering crash loop](https://github.com/onflow/flow-go/issues/5298)

Objective 3: Analyze execution runtime trends and risks to plan next set of scalability OKRs
* Continue work on making [Make TPS loader input more flexible](https://github.com/onflow/flow-go/issues/5490) for better analysis and tracking of performance data.

* Start Atree optimization: [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)

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

* Translate crypto performance improvements to consensus block rate increase
* Provide developers secure and non-rate limited way to access all of chain data (transactions, blocks, account balance, events, account balance etc) by locally running an access or an observer node
* Reduce CPU usage on Execution node by 30%
* Continue design and implementation of Sporkless Epoch Fallback Recovery solution [DONE]

**Done last Sprint:**

* <ins>Zero-downtime Upgrades of Node Software:</ins>
  - Smart contract to coordinate protocol upgrade ([PR #411](https://github.com/onflow/flow-core-contracts/pull/411) in progress)
  - Completed large [refactoring of Dynamic Protocol State](https://github.com/onflow/flow-go/pull/5616) supporting decomposition of whole state to sub-states with orthogonal processing state machines
  - [Continued adding support changing protocol state ID in protocol snapshot](https://github.com/onflow/flow-go/pull/5656)
    
* <ins>EFM Recovery</ins>
  * Tooling to generate data for EFM recovery ([PR #5576](https://github.com/onflow/flow-go/pull/5576) merging)

* <ins>Cryptography</ins>
  - Randomness-on chain contract: aligning on solution + implemented proposal + implemented tests ([PR #416](https://github.com/onflow/flow-core-contracts/pull/416) in progress)
  - New cryptography stack: 
    - fix CPU-compatability issue: `Artblocks` are unblocked, root cause and long-term solutions are still ongoing (requires `Figment`'s help)
  
* <ins>Consensus speedup:</ins>
  - (Working group) Consensus Speedup - created [plan to increase block rate](https://www.notion.so/flowfoundation/Cruise-Control-headroom-for-speedups-46dc17e07ae14462b03341e4432a907d?pvs=4#2e10de62e6454402ba6b7ee350f98e10)

* <ins>Data Availability:</ins>
  - Deployed local script exec to 40% FF nodes, 22% QN nodes
  - Deployed local tx results to all public nodes
  - Tested programs cache on mainnet ANs
  - Profiling enabled on one QN AN
  - Fix string concatination bottleneck discovered with new profiles ([PR #5592](https://github.com/onflow/flow-go/pull/5592))
  - Upgrade libp2p on mainnet/testnet ([PR #5642](https://github.com/onflow/flow-go/pull/5642))
  - KROK Team
    - Streaming account statuses endpoint ([PR #5406](https://github.com/onflow/flow-go/pull/5406))
    - Unify Events API with new interfaces ([PR #5602](https://github.com/onflow/flow-go/pull/5602))
    - Add integration tests for streaming blocks and observer APIs ([PR #5624](https://github.com/onflow/flow-go/pull/5624), [PR #5612](https://github.com/onflow/flow-go/pull/5612))

**This sprint**

* <ins>Zero-downtime Upgrades of Node Software:</ins>
  - [Finalize and merge PR for querying of KV Store](https://github.com/onflow/flow-go/pull/5650)
  - Cleanup and fix tests (large!)
  - Finish smart contract to coordinate protocol upgrade ([PR #411](https://github.com/onflow/flow-core-contracts/pull/411))
  - Continue on integration tests ([draft PR #5477](https://github.com/onflow/flow-go/pull/5477))
  - Implementation and PR reviews of remaining loose ends for KV Store integration
  - Completing https://github.com/onflow/flow-go/pull/5656
  - Version upgrade protocol integration test will be unblocked, [preparing for review](https://github.com/onflow/flow-go/pull/5477)

* <ins>EFM Recovery</ins>
  - Generate data for EFM recovery (complete [PR #5576](https://github.com/onflow/flow-go/pull/5576) and potential follow-up)
  - Start on [Governance Transaction to initiate EFM recovery](https://github.com/dapperlabs/flow-go/issues/6956)
  - [Wrap up cadence changes](https://github.com/onflow/flow-go/issues/5638)
  - [EFM recovery e2e integration tests](https://github.com/onflow/flow-go/issues/5639)

* <ins>Cryptography</ins>
   - Randomness-on chain contract: finish the implementation and update the contracts onchain
   - new cryptography stack: 
      - continue on CPU-compatability issue
      - extra build docs in all repos


* <ins>Data Availability:</ins>
  - Continue to rollout local script exec to additional QN ANs
  - Test local script exec with remaining studio nodes
  - Enable programs cache on AN (complete [PR #5585](https://github.com/onflow/flow-go/pull/5585))
  - KROK Team
    - Complete adding tx results to streaming SendAndSubscribe response ([PR #5566](https://github.com/onflow/flow-go/issues/5566))
    - Fix race condition in Access ingestion engine ([Issue #5420](https://github.com/onflow/flow-go/issues/5420))
    - Support enabling indexing on Dynamic bootstrapped AN ([Issue #5423](https://github.com/onflow/flow-go/issues/5423))
    - Event streaming blog post


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
- DEX Prep - IncrementFi
- Bridge Prep - Axelar

**Done last sprint**

* Completed milestone #6 of JVM SDK update to analyze scope of work for subsequent update phase
* Continued discussions with Circle about migration to EVM based USDC from Cadence
* Increment shared their upgraded C1.0 contracts for Flow team review

**This sprint**

* Review plan/proposal for next phase of JVM SDK update to bring it back to feature parity after years of being overlooked
* Start ramping [DeBridge](https://docs.debridge.finance/) integration for EVM

**On Hold**
- Axelar Cadence bridge release waiting confirmation of new timeline, no engineering ongoing

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
- Updated in-depth Migration Guide live.
- Kapa AI updated with latest sources from Forum/EVM/Cadence lang docs
- End-to-end video on upgrade process, steps and timeline.
- FUSD, USDC changes for C1.0 completed (in review).
- Flow JS Testing updated to Cadence 1.0 & released.
- Staging being tracked hourly now on active contracts list.
- Fungible Token bridging
- Successful Local smart contract state migration with emulator
- EVM chains updated to ethereum chain list repository
- Flow evm previewnet added to viem repository
- Create new staking banner explaining epoch transition window [#168](https://github.com/onflow/flow-port/issues/168)

**This sprint**
**Sprint goal focusing on updating EVM docs, tooling support, CLI Interactive Setup**

- [EPIC] EVM Docs [#654](https://github.com/onflow/docs/issues/654)
- [EPIC] FlowEVM Docs - Cadence Dev [#575](https://github.com/onflow/docs/issues/575)
- [EPIC] Enhance CLI init Command with Interactive Setup, Config Automation, and Default Project Structure [#1390](https://github.com/onflow/flow-cli/issues/1390)
- [EPIC] Update Internal Tools and Repos for C1.0 Support [#530](https://github.com/onflow/docs/issues/530)
- Write new doc on Sponsored Transactions under Advanced Topics [#692](https://github.com/onflow/docs/issues/692)
- Testing Ledger Cadence v1.0 transactions [#20](https://github.com/onflow/fcl-six/issues/20)
- Testing complex contracts deployment to previewnet EVM [#713](https://github.com/onflow/docs/issues/713)
- Stage and test core contracts 
- Circle USDC contract changes and integrations
- Add newsletter signup to developer landing page [#717](https://github.com/onflow/docs/issues/717)


**On Hold**

- Update Flow port for Cadence Crescendo instance [#279](https://github.com/onflow/flow-port/issues/279)
- Blocked: Update Playground to support Cadence 1.0 [#760](https://github.com/onflow/flow-playground/issues/760)

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
- CTD: Outreach with Coinbase Wallet, MetaMask, Shadow Wallet and Blocto
- CTD: Working with Apple on app approval & release

**On Hold**

- N/A

**Active Epics**

- TBD

---

### **Infra - JP**
Cycle Objective(s): 
- Finish GCP project migration to the Flow Foundation org
- Remove dependency on Gen2 cluster resources for CloudFlare migration
- Continue assisting with DevEx migration to Cloud Run

**Done last sprint**

**CloudFlare Migration**
- Evaluate performance of TLS termination & processing with GCP load balancing
- Delete unnecessary resources from Gen2 cluster 
- Remove CloudFlare dependency for flow webflow endpoints
- [Create infra & automation for hardware wallet api migration](https://github.com/dapperlabs/flow-devex-infrastructure)

**DevEx Migration**
- Assist with troubleshooting key indexer on Cloud Run

**Observability & OnCall**
- Work with QuickNode to enable continous profiling on ANs
- Enable & validate delivery of alerts to both Grafana OnCall & Pagerduty

**Node Hosting**
- [Asissted DHT fix deployment to all FF & DL nodes](https://www.notion.so/flowfoundation/Mainne24-v0-33-14-upgrades-0dcd60bb4ea64d338caf907562e47440)
- [Pruned Devnet & Mainnet node logs to clean up boot disks](https://www.notion.so/flowfoundation/AN-Boot-Disk-Cleanup-on-TN-MN-535aaa3c2eb944edae02a196f0bd85f4)

**Support**
- [Create development instance for Krok team](https://github.com/dapperlabs/terraform/pull/4208)
- [Create additional KMS keys for token distribution](https://github.com/dapperlabs/terraform/pull/4207)
- Created initial PRs for migrating to Flow Foundation VPN services

**Goal of this Sprint is to continue migration efforts** 
**This Sprint**
- Finish Gen2 cluster clean up and migration to GCP load balancing
- Move GCP projects to Flow Foundation as needed

---

### **Governance and Tokenomics** \[Vishal]
Cycle Objective(s): Transaction fees on EVM, increasing transaction fees and inflation reduction plan.

**Done last sprint**
- Forum [post](https://forum.flow.com/t/proposing-transaction-fee-changes-and-flow-evm-gas-charges-for-flow-crescendo-launch/5817) regarding proposals on EVM gas and transaction fee published.
- Modeled inflation reduction options and had the first round of internal discussion; additional research is needed on new potential options. See deck [here](https://docs.google.com/presentation/d/1EBYqB8FwxHtOwaQMHiId0ZZv4bRNThNYrgF5-CZeI8M/edit?pli=1#slide=id.g26c5efcb5cb_0_280)
- Impact of transaction fee increase on partner costs was assessed by pulling latest data for top 20 transaction payers on Flow. Discussions held with BD/partnership team, and the timeline for partner outreach is set for mid-May. See research [here](https://docs.google.com/spreadsheets/d/1PPxxAotsIYLzydAnuBAgQe1BmEcamiuSQUmsDtrpaKs/edit#gid=1414811201)
- Working Groups convened to address challenges related to hosting working groups, particularly the formalization of WGs that have transitioned them into more structured townhall-style meetings rather than informal participatory sessions where tangible work was accomplished.
- Ran the monthly Governance Working Group meeting and gave Governance OKR updates, update on current status of FLIPs and announced availability of 5 new consensus node slots (to maintain decentralization)

**This sprint**

- Gather and respond to community feedback on the forum post
- For decentralization efforts, work with a16z to consolidate three nodes, and with Coinbase to reduce one node they operate on leased stake
- Continue work on automation of the decentralization dashboard to send messages when critical thresholds are crossed
- Draft FLIP on EVM gas to compute ratio and compute limit hike.
- Update FLIP on transaction fee to suggest a transaction fee multiplier closely tied to FLOW token's market price
- Continue research on Inflation (new strategies, other networks, validator impact, etc.) and have a second round of review.
  

**On Hold**


**Active Epics**

- N/A
