# Overview

 ### Team Wins 🎉
 
* [CLI release](https://github.com/onflow/flow-cli/releases/tag/v1.12.0-cadence-v1.0.0-preview.9) that enables local contract migration testing to Cadence 1.0 with emulator is going through [last round of testing](https://github.com/onflow/cadence/issues/3098).
* Great progress on the C1.0 migrations, now passes on full TN state, taking ~7.5 hours on m1-ultramem-160.
* C1.0 TN migration environment - successfully started the network from migrated TN state and executed system transaction.
* Bluesign helping with migration, found 2 optimizations - community power!
* Completed another Atree optimization that reduces RAM and persistent storage usage on ENs: [Deduplicating Cadence dictionary type info](https://github.com/onflow/atree/issues/358)
* Cross-VM bridge design changes now locked in and moving ahead with delivery
* Cadence contracts test boilerplate now included in CLI `generate` command
* CLI updates - Cadence lint command added, New CLI build addressing crypto library changes now supported on master and stable cadence branches, `flow dev` command now starts emulator automatically
* Documentation - Cadence 1.0 Staging and state migration docs added

---

### Mainnet Uptime - Last 7 days (3/9/24 to 3/15/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    100%       |       0%         |
| Block Sealing           | 99.9%   |    100%       |       0%         |
| Access API Liveness     | 99.9%   |    99.92%     |       79.0       |

[SLO dashboards](https://flowfoundation.grafana.net/d/hgW3l-m4k/slo-dashboard?orgId=1&from=now-2w&to=now) are now live again on FF Grafana

[YTD SLA: 100%](https://app.metrika.co/flow/dashboard/slas?tr=YTD)

## Incidents
N/A

### Key Release Dates & Breaking Changes

- Next Mainnet/Testnet network upgrade (spork): TBD

---

### FLIPs Tracker \[Kshitij]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 7  |    8 (+2)   |       0          |       5          |        **20** (+2)          |
| Proposed    | 3  |    2 (+1)     |       2          |       1          |        **8** (+1)          |
| Accepted    | 2  |    1     |       1       |       2          |        **6**          |
| Rejected    | 0  |    0     |       1       |       0          |        **1**          |
| Implemented | 1  |    19    |       2       |       0          |        **22**          |
| Released    | 4  |    0     |       3 (+1)       |       4          |        **11** (+1)          |
| Total       | **17**  |    **30** (+3)    |       **9** (+1)       |       **12**          |        **68** (+4)          |

- Overall FLIPs went up by 4 in the last sprint. 3 new Cadence FLIPs were drafted and proposed; 1 new Governance FLIP was drafted, implemented and released during the sprint.
- Some FLIPs are still not reflected in the project tracker. **Remember**: FLIP process starts with an issue creation.
(https://github.com/onflow/flips?tab=readme-ov-file#submitting-the-flip)
  
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

Cadence 1.0 migration testing with emulator
- [Assert payloads before migration](https://github.com/onflow/flow-emulator/pull/615)
- [Loading values from a migrated emulator state fails](https://github.com/onflow/cadence/issues/3143)

Cadence 1.0 TN migration environment
- improved tooling
    - [Add feature to migration program to show diff of Cadence values before and after migration](https://github.com/onflow/flow-go/issues/5483)
    - [Add Atree storage health checks to migrations](https://github.com/onflow/cadence/issues/3149)
- [Run full Cadence 1.0 migration on TN state](https://github.com/onflow/cadence/issues/3096)
    - [Optimize string migration: only return new value if needed](https://github.com/onflow/cadence/pull/3173)
    - [Improve migration](https://github.com/onflow/cadence/pull/3169)
    - [Improve static type and entitlements migrations: Update array/dictionary type directly](https://github.com/onflow/cadence/pull/3158)
    - [Optimize storage migration: Allow skipping of values](https://github.com/onflow/cadence/issues/3157)
    - [Improve errors in state migration](https://github.com/onflow/cadence/issues/3154)
    - bugfix: [Payload grouping has data races](https://github.com/onflow/flow-go/issues/5485)
    - [Add util command to generate payloads for bootsrapped execution state](https://github.com/onflow/flow-go/pull/5487)
    - [Improve Migration](https://github.com/onflow/flow-go/pull/5479)
    - [Optimize deployment migration](https://github.com/onflow/flow-go/pull/5470)
    - [Fix migrating values with empty intersection type](https://github.com/onflow/cadence/pull/3138)
- [Cadence 1.0 state migration fixes and improvements](https://github.com/onflow/cadence/issues/3162)
    - [Fix intersection type's legacy type getting converted to intersection type](https://github.com/onflow/cadence/pull/3166)
    - [Cadence 1.0 Improve migrations](https://github.com/onflow/flow-go/pull/5533)
    - [Cadence 1.0 ledger - Add missing rule for NonFungibleToken.Collection type](https://github.com/onflow/flow-go/issues/5541)
    - [Handle legacy type getting converted to intersection type](https://github.com/onflow/cadence/pull/3164)
- Atree features needed for migration
    - [Add support for changing type info of atree maps](https://github.com/onflow/atree/pull/377)
    - [Allow updating static types of Array](https://github.com/onflow/atree/issues/372)
    - [Allow updating static types of OrderedMap](https://github.com/onflow/atree/issues/373)

Cadence 1.0 features & improvements
- breaking change: [Cannot take a reference to a nested-optional](https://github.com/onflow/cadence/issues/2541)
- [Meter computation in new stdlib functions](https://github.com/onflow/cadence/issues/2879)
- [Improve type inference for authorized references](https://github.com/onflow/cadence/issues/2826)
- bugfix: [Implicitly track composite reference in attachment iteration](https://github.com/onflow/cadence/pull/3168)
- bugfix: [Check invalidation of the looped reference](https://github.com/onflow/cadence/pull/3160)
- bugfix: [SupportedEntitlements implementations are non thread-safe](https://github.com/onflow/cadence/issues/3121)
- bugfix: [Fix location ranges](https://github.com/onflow/cadence/pull/3151)
- bugfix: [Creating reference to type-erased reference errors at run-time](https://github.com/onflow/cadence/issues/3011)
- [Improve update tool](https://github.com/onflow/cadence/pull/3163)
- check-tidy fix: [Update version](https://github.com/onflow/cadence/pull/3161)

Docs
- [Add CLI installation instructions to the emulator migration guide](https://github.com/onflow/cadence-lang.org/pull/68)
- [Add emulator state migration guide](https://github.com/onflow/cadence-lang.org/issues/66)
- [Document extended update checker rules for Cadence 1.0 migration](https://github.com/onflow/cadence/issues/3155)
- [Improve emulator installation instructions](https://github.com/onflow/cadence-lang.org/pull/61)
- FLip update: [Add note about migration changes to entitlements migration](https://github.com/onflow/flips/issues/252)
- [Add example for reference with disjoint entitlement set](https://github.com/onflow/cadence-lang.org/issues/57)
- [Upgrade guide for types](https://github.com/onflow/cadence-lang.org/issues/53)

Cadence 1.0 dependency updates
- flow-go: [1](https://github.com/onflow/flow-go/pull/5546), [2](https://github.com/onflow/flow-go/issues/5543), [3](https://github.com/onflow/flow-go/issues/5540), [4](https://github.com/onflow/flow-go/issues/5539), [5](https://github.com/onflow/flow-go/issues/5529), [6](https://github.com/onflow/flow-go/issues/5498), [7](https://github.com/onflow/flow-go/issues/5493)
- flow-go-sdk: [1](https://github.com/onflow/flow-go-sdk/issues/606), [2](https://github.com/onflow/flow-go-sdk/issues/605), [3](https://github.com/onflow/flow-go-sdk/issues/604), [4](https://github.com/onflow/flow-go-sdk/issues/600), [5](https://github.com/onflow/flow-go-sdk/issues/594)
- flow-cli: [1](https://github.com/onflow/flow-cli/issues/1452), [2](https://github.com/onflow/flow-cli/issues/1450)
- flixkit-go: [1](https://github.com/onflow/flixkit-go/issues/49), [2](https://github.com/onflow/flixkit-go/issues/48)
- cadence-tools: [1](https://github.com/onflow/cadence-tools/issues/312), [2](https://github.com/onflow/cadence-tools/issues/311), [3](https://github.com/onflow/cadence-tools/issues/310), [4](https://github.com/onflow/cadence-tools/issues/308), [5](https://github.com/onflow/cadence-tools/issues/305), [6](https://github.com/onflow/cadence-tools/issues/304), [7](https://github.com/onflow/cadence-tools/issues/303)
- flowkit: [1](https://github.com/onflow/flowkit/issues/28), [2](https://github.com/onflow/flowkit/issues/27)
- flow-emulator: [1](https://github.com/onflow/flow-emulator/issues/610), [2](https://github.com/onflow/flow-emulator/issues/608), [3](https://github.com/onflow/flow-emulator/issues/596)

Cadence Execution
- Atree: [Additional memory and storage savings are possible by deduplicating Cadence dictionary type info](https://github.com/onflow/atree/issues/358)
- [test environment for execution node that can follow and execute latest blocks](https://github.com/onflow/flow-go/issues/5118)
- [Meter (and charge for) the transaction storage check](https://github.com/onflow/flow-go/issues/3834)
- minor fixes
    - [public execution state sync port to v0.33](https://github.com/onflow/flow-go/pull/5530)
    - [Fix integration test](https://github.com/onflow/flow-go/pull/5510)

EVM Gateway productization
- [Engine restart logic](https://github.com/onflow/flow-evm-gateway/issues/85)
- avoid persisting data on error conditions - [Batch database operations](https://github.com/onflow/flow-evm-gateway/issues/116)
- [General improvements and tech-debt](https://github.com/onflow/flow-evm-gateway/pull/121)
minor fixes:
  - [Fix logging IDs when numbers](https://github.com/onflow/flow-evm-gateway/pull/151)
  - [Log bugfix values](https://github.com/onflow/flow-evm-gateway/pull/150)
  - [Request response value logging](https://github.com/onflow/flow-evm-gateway/pull/149)
  - [Configuration for logs](https://github.com/onflow/flow-evm-gateway/pull/147)
  - [Log improvements](https://github.com/onflow/flow-evm-gateway/pull/128)

EVM Core
- [Provide toHexString and fromHexString for evm address](https://github.com/onflow/flow-go/issues/5459)
- [Add extra safeguards to EVM handler](https://github.com/onflow/flow-go/pull/5516)
- [Make deposit available for any EVM address](https://github.com/onflow/flow-go/issues/5468)
- [Adding integration test cases](https://github.com/onflow/flow-go/issues/5228)
- bugfix: [Use EVM chain ID for mainnet when deployed on mainnet](https://github.com/onflow/flow-go/issues/5441)
- bugfix: [missing uuid on vault returned by the withdraw method](https://github.com/onflow/flow-go/issues/5514)

TPS Loader
- [EVM load test fix](https://github.com/onflow/flow-go/issues/5491)
    - [Bootstrap with EVM by default](https://github.com/onflow/flow-go/pull/5482)

**This sprint**

Objective 1, KR 1: Enable Developers and the Flow Foundation to simulate Cadence 1.0 Contract upgrades
* [Emulator release is ready](https://github.com/onflow/flow-cli/releases/tag/v1.12.0-cadence-v1.0.0-preview.9), going through last [testing](https://github.com/onflow/cadence/issues/3098) before we announce it.
* Testnet migration completed, moving on to adding [Atree register inlining](https://github.com/onflow/cadence/pull/3048) migration and validating migrated state on the TN migration environment.

Objective 1, KR4: Testnet Upgrade to Crescendo Release
* Continue with [EVM Gateway development](https://github.com/onflow/flow-evm-gateway/issues/126) and [EVM Core development](https://github.com/onflow/flow-go/issues/5536) for production readiness.

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
* Continue design and implementation of Sporkless Epoch Fallback Recovery solution

**Done last sprint**

* EFM Recovery
  * Finished implementation of the KV store state machine. Aligned with team about design questions and possible improvements. Currently incorporating previously discussed changes: https://github.com/onflow/flow-go/pull/5513
  * Finished and merged adding KV Store service event https://github.com/onflow/flow-go/pull/5428
  * Writeup on protocol version upgrade status, base for discussion in a future working group https://forum.flow.com/t/protocol-version-upgrade-mechanisms-discussion/5717
  * Reading docs ramping up
  * [Started EFM data recovery](https://github.com/dapperlabs/flow-go/issues/6957)
* Data Availability
  * [Add register cache to AN](https://github.com/onflow/flow-go/pull/5347) (deployed to mainnet & QuickNode)
  * [Handle system transaction in local result mode](https://github.com/onflow/flow-go/pull/5532)
  * [Enable forked mainnet in emulator using AN](https://github.com/onflow/flow-emulator/pull/594)
  * KROK team
    * [Add implementation for usage of the local transaction result in Access API](https://github.com/onflow/flow-go/pull/5306)
    * [Add support for indexing execution data on Observers](https://github.com/onflow/flow-go/pull/5256)
    * [Add state streaming API to observers](https://github.com/onflow/flow-go/pull/5368)
    * [Implement gRPC streaming endpoint SubscribeBlocks](https://github.com/onflow/flow-go/pull/5307)
    * [Emulator - Subscribe endpoint is missing](https://github.com/onflow/flow-emulator/pull/593)
* Crypto
  * New crypto lib
    * Artblock CPU issue: tested, validated and simulated
    * Investigate CPU issue
      * [fix potential issue in the image build](https://github.com/onflow/flow-go/pull/5525)
      * Worked with Figment to borrow a machine
  * BN2
    * [Minor fixes](https://github.com/onflow/flow-go/pull/5528) and documentation of the process 
  * [Emulator pre Cadence 1.0 branch required for flow-go](https://github.com/onflow/flow-emulator/pull/592)
  * Randomness-on chain contract: investigate issue caused by epoch contract update - minor progress

**This sprint**

* EFM Recovery
  * Merge KV store state machine PR
  * [Integrate state machine with the higher level logic](https://github.com/onflow/flow-go/issues/5319)
  * [Integrating KV Store state machine into upgrade integration tests](extending https://github.com/onflow/flow-go/pull/5477)
  * [Finalizing smart contract changes](https://github.com/onflow/flow-core-contracts/pull/411)
  * [Complete EFM data recovery](https://github.com/dapperlabs/flow-go/issues/6957)
  * Wrap up reading and knowledge ramp up for Khalil
  * [Start EFM recovery transaction](https://github.com/dapperlabs/flow-go/issues/6956)
* Data Availability
  * [Enable programs cache on AN](https://github.com/onflow/flow-go/issues/5278) - finish and deploy to devnet
  * [Debug unusual disk usage on ANs](https://github.com/onflow/flow-go/issues/5549)
  * KROK team - merge remaining Event streaming PRs which are nearly done
    * [SendAndSubscribeTransactionStatuses endpoint implementation for Access Streaming API](https://github.com/onflow/flow-go/pull/5310)
    * [Add standard Access API implementations on Observer](https://github.com/onflow/flow-go/pull/5358)
    * [Benchmark testing and analysis of execution data indexing on Observers](https://github.com/onflow/flow-go/issues/4849)
* Crypto
  * New crypto lib
    * Continue following up with ArtBlocks and make sure their node work
    * [Reproducing CPU issue on similar CPUs from gcloud](https://github.com/onflow/flow-go/pull/5471)
  * Randomness-on chain contract: get back to the contract fix  

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

* Completed milestone #4 of JVM SDK update concluding all needs for testing
* Completed most of USDC Cadence 1.0 contract update, but currently in holding pattern waiting for confirmation from Circle on next steps
* IncrementFi Cadence 1.0 contract updates are completed and ready for testing

**This sprint**

* Start milestones #5 & #6 of JVM SDK update to update example repo, then analyze scope of work for subsequent grant 

**On Hold**
- Axelar release waiting confirmation of new timeline, no engineering ongoing

**Active Epics**

- Establish Defi/Liquidity infrastructure for Cadence 1.0 update
- Ensure Flow has best-in-class on- and off-ramps for USDC liquidity across DeFi ecosystem
- Expand Flow DeFi ecosystem primitives and protocols

---

### **User Experience** \[Greg]

Cycle Objective(s):

* Bring Cadence 1.0 to market as part of the Crescendo release to minimize customer impact and developer effort
* Bring EVM on Flow to Market as part of the Crescendo release to increase liquidity and bring top-tier developer platforms to our network
* Use the Crescendo Release grow Flow's developer base and network activity

**Done last sprint**

* flow dev command now starts emulator automatically
* Flow evm networks configurations added to viem
* Shipped CI onto flixkit-go to ensure proper testing done on each merge
* Add latest EVM Contracts to CLI
* Update Discovery docs with Previenet network
* [Fix dependency issues for Cadence 1.0](https://github.com/onflow/flow-cli/issues/1371)
* [Urgent SEO issues fixed flow.com](https://github.com/onflow/docs/issues/593)
* [EPIC - Flow Contract Migration Manager](https://github.com/onflow/flow-cli/issues/1375)
* [Add VSCode Test Runner information to Cadence testing docs](https://github.com/onflow/docs/issues/497)
* [Previewnet Faucet improvements](https://github.com/onflow/faucet/issues/94)
* [FlowEVM Video Demo](https://github.com/onflow/docs/issues/581)
* [Generate tests from flow generate contract](https://github.com/onflow/flow-cli/issues/1394)
* [Add core contract deployment addresses for Previewnet](https://github.com/onflow/docs/issues/569)
* [Implement WaitServer in flowkit](https://github.com/onflow/flowkit/issues/22)
* [Expose Cadence 1.0 CLI Install/Usage docs](https://github.com/onflow/docs/issues/660)
* [Update standards, simplify COA bridging interface](https://github.com/onflow/flow-evm-bridge/pull/14)
* [Add Migration Guide to all versions of the Cadence Lang docs](https://github.com/onflow/docs/issues/634)

**This sprint**
**Sprint goal focusing on updating EVM docs, tooling support, and examples for Cadence 1.0**

* EVM Docs v2
* Add viem guide (EVM)
* Update Access Node Docs
* Create video to demonstrate local upgrade, staging, and state migration
* [Add dependencies from Dependency Manager to a deployment account](https://github.com/onflow/flow-cli/issues/1362)
* [Allow adding alias when adding a contract with Dependency Manager](https://github.com/onflow/flow-cli/issues/1363)
* [QA full Cadence 1.0 state migration in Emulator](https://github.com/onflow/cadence/issues/3098)
* [Add Linter and Cadence checker to CLI stage command](https://github.com/onflow/flow-cli/issues/1454)
* [Review Code Changes for New Token Standards #648](https://github.com/onflow/docs/issues/648)
* Create Cadence 1.0 Project Upgrade demo repo
* [New Dev Docs Landing Page](https://github.com/onflow/docs/issues/509)

**On Hold**

* [Update Flowport for Cadence Crescendo instance](https://github.com/orgs/onflow/projects/13/views/85?pane=issue&itemId=51960824)
* [Update Playground to support Cadence 1.0](https://github.com/onflow/flow-playground/issues/760)

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

- Completed UI components for EVM support in Flow Wallet 
- Completed Web3.js integration with Flow Wallet (Not with COA, with EOA to start)

**This sprint**

- CTD cadence transactions / scripts for Cadence 1.0
- COA integration (including Web3.js integration with COA)
- VM Bridge integration, meeting scheduled for Monday.
- CTD: Outreach with Coinbase Wallet, MetaMask, Shadow Wallet and Blocto

**On Hold**

- N/A

**Active Epics**

- TBD

---

### **Infra - JP**
Cycle Objective(s): 
- Finish GCP project migration to the Flow Foundation org

**Done last sprint**
- QuickNode
  - Worked with QuickNode team to configure profiling agent for ANs
- Previewnet Setup
  - Enabled alerts for previewnet
- Migration Network
  - [Create Ansible configuration for migration network](https://github.com/dapperlabs/dapper-flow-hosting/pull/1467)
  - [Create infra for migration network](https://github.com/dapperlabs/terraform/pull/4179)
  - Support the configuration & bootstrapping of the migration network
- Node Hosting Support
  - [Increase MN & TN disk sizes](https://github.com/dapperlabs/terraform/pull/4180/files)
  - [Increase MN24 Access Node disk sizes](https://github.com/dapperlabs/terraform/pull/4166)
  - [Upgrade Devnet49 AN3 to increase memory](https://github.com/dapperlabs/terraform/pull/4171)
  - [Increase LN disk size for DL nodes](https://github.com/dapperlabs/dapper-flow-nodes-infrastructure/pull/15)
  - Prune CDP on Mainnet Execution Nodes to reduce costs
  - Prune boot disks for access nodes on Devnet
- FF GCP Migration
  - Migrated all projects except for those hosting mainnet nodes and account keys
  - [Updated Ansible config to avoid issues with project migration](https://github.com/dapperlabs/dapper-flow-hosting/pull/1471)
- DevEx Migration
  - Supported the DevEx migration to Cloud Run effort
  - [Assisted in enabling a load balancer in front of the services](https://github.com/dapperlabs/flow-devex-infrastructure/pull/136)

**Goal of Sprint is to prepare for GCP migration to FF account** 
**This Sprint**
- Finish migrating all GCP projects and shift billing accounts for these projects
- Enable FF groups in the GCP projects for IAM shift
- Evaluate best path forward for Terraform management
- Create plan for CloudFlare account migration
- Continue suppporting migration network initiative
- Continue supporting Cloud Run migration initiative

---

### **Governance and Tokenomics** \[Kshitij]
Cycle Objective(s): Transaction fees on EVM, increasing transaction fees and inflation reduction plan.

**Done last sprint**
- Estimation of execution effort for EVM transactions on Flow and determining the ratios and differences between Flow Cadence and Flow EVM transaction fees
- Evaluation of the impact of EIP 4844 on L2 transaction fees and Flow's planned 100x increase [see document](https://docs.google.com/spreadsheets/d/1PPxxAotsIYLzydAnuBAgQe1BmEcamiuSQUmsDtrpaKs/edit#gid=1064090175)
- Assessed how much computation can fit into a block and thus decided to raise the computation limit by 5x
- Finalized computation conversion ratio of 5000:1, and a 100x transaction fee increase - forum post and FLIP to follow
- Drove GWG meeting and provided community updates on recent changes

**This sprint**

- Publish forum post detailing the computation limit, gas to compute conversion, and the transaction fee increase
- EIP 4844 vs Flow analysis - create self explanatory publicly available spreadsheets, write a blog post
- Partner outreach regarding the upcoming transaction fee increase
- Model inflation reduction via two methods - (1) a planned reduction in reward rate over time like sol, and (2) a capped reward number that reduces inflation over time when the cap hits in future
- Finalize cresendo related governance and tokenomics plan
- Consensus node rebalancing exercise to maintain decentralization

**On Hold**

- N/A


**Active Epics**

- N/A
