# Overview

 ### Team Wins 🎉
 
* Published Guides for deploying Solidity to Flow Previewnet (Hardhat, Remix)
* Previewnet support (CLI, Faucet, FCL Discovery)
* FT/NFT Migration Guides (Cadence 1.0)
* PreviewNet Launch of the Crescendo Release! Cadence 1.0 + EVM
* [Performance benchmark](https://dapperlabs.grafana.net/d/BLSHi8ZVz/flow-performance-benchmarks?orgId=1&var-branch=All&var-env=All&var-type=All&from=now-90d&to=now&viewPanel=4) now includes account creation, EVM token swap and ledger-heavy loads
* CCF supports all Cadence 1.0 values
* Found and fixed an issue with data pruner in EN, which reduced startup time by ~50 seconds
* Completed Execution node test environment (pulling data from data sync and executing latest blocks without affecting network)

---

### Mainnet Uptime - Last 14 days (2/16/24 to 3/1/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    100%       |       0%         |
| Block Sealing           | 99.9%   |    100%       |       0%         |
| Access API Liveness     | 99.9%   |    99.895%    |       105%       |

#### YTD SLA: [99.99%](https://app.metrika.co/flow/dashboard/slas?tr=YTD)

#### Incidents
* No incidents

---

### FLIPs Tracker \[Kshitij]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 7  |    6    |       0          |       5          |        **18**          |
| Proposed    | 3  |    1     |       2          |       1          |        **7**          |
| Accepted    | 2  |    1     |       1       |       2          |        **6**          |
| Rejected    | 0  |    0     |       1       |       0          |        **1**          |
| Implemented | 1  |    19    |       2       |       0          |        **22**          |
| Released    | 4  |    0     |       2       |       4          |        **10**          |
| Total       | **17**  |    **27**    |       **7**       |       **12**          |        **64**          |

- Overall, 1 new governance FLIP was published and implementated.
- Some FLIPs are still not reflected in the project tracker. **Remember**: FLIP process starts with an issue creation.
(https://github.com/onflow/flips?tab=readme-ov-file#submitting-the-flip)
  
### Key Release Dates & Breaking Changes

- Next Mainnet/Testnet network upgrade (spork): Testnet and mainnet sporks TBD.
- Next Mainnet/Testnet HCU: TBD
- End of Cycle: TBD

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

* Launched Cadence 1.0 & EVM into PreviewNet!
  
Objective 1: Upgrade Mainnet to Crescendo Release with minimal impact on developers, to lower the barrier for cross chain liquidity on Flow
- KR2: Launch Cadence 1.0 on Crescendo Testnet

Objective 4: Expand testing capability of storehouse so that we can validate execution correctness and benchmark performance on Mainnet data
- KR2: [Execution node can execute live data without impacting the network (i.e. execution fork)](https://github.com/onflow/flow-go/issues/5118)

Cadence 1.0
- [Testnet state migration](https://github.com/onflow/cadence/issues/3096)
    - [Add logs to merge](https://github.com/onflow/flow-go/pull/5484)
    - [Add test for nested container value migration](https://github.com/onflow/cadence/pull/3142)
    - [Migrate static types of arrays and dictionaries](https://github.com/onflow/cadence/pull/3141)
    - flow-go utility [Add sub-command to generate addresses for a chain](https://github.com/onflow/flow-go/pull/5453)
    - Prevent accidental use of partial state for network upgrade [Add version, checksum, and partial state indicator to intermediate migration payload file](https://github.com/onflow/flow-go/issues/5437)
    - [Add value migration test for untyped capabilities](https://github.com/onflow/flow-go/pull/5434)
    - [Migration needs to convert untyped path capability values](https://github.com/onflow/cadence/issues/3119)
    - [handle references to optionals](https://github.com/onflow/cadence/issues/3122)
    - [Improve migration of intersection types](https://github.com/onflow/cadence/issues/3112)
    - [Improve account-based migration error handling](https://github.com/onflow/flow-go/issues/5364)
    - [Improve migration](https://github.com/onflow/cadence/pull/3110)
    - [Improve Cadence 1.0 migration](https://github.com/onflow/flow-go/pull/5388)
    - Migration optimization [Add flag to state extraction program to output intermediate format instead of migrated checkpoint](https://github.com/onflow/flow-go/issues/5231)
- Emulator contract migration testing
    - [Export migrator runtime constructor](https://github.com/onflow/flow-go/pull/5475)
    - [Restrict the entitlements allowed by the contract update validator](https://github.com/onflow/cadence/issues/3128)
    - [Integrate staged contract migration with the on-chain logic](https://github.com/onflow/cadence/issues/3050)
    - [Add FT/NFT type change rules for contract update validator](https://github.com/onflow/flow-go/pull/5415)
    - [More permissive contract upgrade checker for 1.0 network upgrade](https://github.com/onflow/cadence/issues/2865)
- Features
    - Language breaking change: [Reject container mutation while iterating](https://github.com/onflow/cadence/issues/2961)
    - CCF now supports all Cadence 1.0 values [Update CCF codec to support recently added types/values](https://github.com/onflow/cadence/issues/2379)
    - [Support function-purity annotations in CCF](https://github.com/onflow/cadence/issues/2457)
- Bugfix
    - [EntitlementSetAuthorization.Equal() should ignore the order of elements](https://github.com/onflow/cadence/issues/3136)
- Tooling 
    - Cadence update tool [Improve update tool: Allow releasing a particular branch](https://github.com/onflow/cadence/pull/3124)

EVM Core
- [expose code/codeHash and nonce for the EVM account](https://github.com/onflow/flow-go/issues/5458)
- [return empty string when deployed address is empty](https://github.com/onflow/flow-go/pull/5456)
- [fix tx hash bug for direct calls: deposit, withdraw](https://github.com/onflow/flow-go/pull/5454)
- [implement tryRun endpoint](https://github.com/onflow/flow-go/issues/5268)
- [add blockHash and txHash to tx executed events](https://github.com/onflow/flow-go/pull/5387)
- [rename all reference of bridged account to COA](https://github.com/onflow/flow-go/issues/5380)
- [improvements to COA proof verification](https://github.com/onflow/flow-go/pull/5379)
- [investigate ways to allow the cadence env handle evm errors](https://github.com/onflow/flow-go/issues/5225)
- [Fix return type](https://github.com/onflow/flow-go/pull/5450)
- [Fix block hash calculation](https://github.com/onflow/flow-go/issues/5407)
- [Change direct call hash calculation](https://github.com/onflow/flow-go/issues/5370)
- [add an intergration test for selfdestruct contract call](https://github.com/onflow/flow-go/issues/5224)

EVM GW
- [Implement a key-rotation mechanism to allow parallel calls of eth_sendRawTransaction](https://github.com/onflow/flow-evm-gateway/issues/61)
- [Improve bootstrap](https://github.com/onflow/flow-evm-gateway/issues/107)
- [Use nonce from the network](https://github.com/onflow/flow-evm-gateway/pull/105)
- [Reboot config](https://github.com/onflow/flow-evm-gateway/pull/103)
- [Bootstrap previewnet](https://github.com/onflow/flow-evm-gateway/pull/100)
- [Fix gas estimation with configured account](https://github.com/onflow/flow-evm-gateway/pull/99)
- [Revert "Populate COAKey config value"](https://github.com/onflow/flow-evm-gateway/pull/98)
- [Configure key-rotation deployment](https://github.com/onflow/flow-evm-gateway/pull/92)
- [General improvements and fixes found during testing](https://github.com/onflow/flow-evm-gateway/issues/72)
- [Indexer - Track and map Cadence and EVM heights](https://github.com/onflow/flow-evm-gateway/issues/69)
- CLI: [Add a command that starts up the Flow EVM Gateway](https://github.com/onflow/flow-cli/issues/1419)
- [Indexer - General improvements and fixes](https://github.com/onflow/flow-evm-gateway/issues/66)
- [Indexer - E2E API testing](https://github.com/onflow/flow-evm-gateway/issues/55)
- [Indexer - nonce tracking](https://github.com/onflow/flow-evm-gateway/issues/54)
- [Indexer - Refactor Flow interactions](https://github.com/onflow/flow-evm-gateway/issues/59)
- [Indexer - Pebble storage implementation](https://github.com/onflow/flow-evm-gateway/issues/17)
- [Decode the events into relevant types](https://github.com/onflow/flow-evm-gateway/issues/16)
- [Implement event consumer](https://github.com/onflow/flow-evm-gateway/issues/15)
- [Implement querying events by topic](https://github.com/onflow/flow-evm-gateway/issues/28)

Cadence Execution

- [Creating test environment for execution node that can follow and execute latest blocks](https://github.com/onflow/flow-go/issues/5118)
- Data Pruner fix - reduces EN boot time by ~50 secs
  - [Execution Data storage tracker blocks startup](https://github.com/onflow/flow-go/issues/5457)
- [Add checkpoint size metrics](https://github.com/onflow/flow-go/issues/5395)
- [Add logs for EN startup monitoring](https://github.com/onflow/flow-go/issues/5435)
- Performance benchmark now includes account creation and EVM token swap [Add additional loads to the load generator](https://github.com/onflow/flow-go/issues/5394)
- Improve our ability to analyze anomalies / outliers in execution operation metering [Add normalised time per computation logs to transaction execution](https://github.com/onflow/flow-go/pull/5385)
- Bugix: [remove duplicate definitions of default FVM context options per chain](https://github.com/onflow/flow-go/issues/5249)
- Testing 
  - [improvement - Adding "failfast" flag to fail the integration tests on the first failure](https://github.com/onflow/flow-go/pull/5474)
  - Prevent infinite loop in tests: [Remove db close in execution state sync tests](https://github.com/onflow/flow-go/pull/5465)
  - [Add system TX hash to test](https://github.com/onflow/flow-go/pull/5466)

**This sprint**

Objective 1, KR 1: Enable Developers and the Flow Foundation to simulate Cadence 1.0 Contract upgrades
* Complete emulator release with contract upgrade testing enabled (blocker: [Loading values from a migrated emulator state fails](https://github.com/onflow/cadence/issues/3143))
* Continue debugging [ full Cadence 1.0 migration run on TN state](https://github.com/onflow/cadence/issues/3096)

Objective 1, KR4: Testnet Upgrade to Crescendo Release
* Continue with EVM Gateway development for testnet readiness

Objective 4, KR1: Execution node handles restart from spork root block reguardless of how many blocks it is behind
* Continue refactoring of Ingestion engine to [prevent EN entering crash loop](https://github.com/onflow/flow-go/issues/5298)

* Complete Atree optimization: [Reduce RAM and persistent storage by deduplicating inlined dict type info](https://github.com/onflow/atree/pull/369)
  
**On Hold**

Objective 2: Calibrate Transaction fees so that they accurately reflect resource usage during execution and deploy as part of Crescendo to avoid future disruption
- KR1: Update weights for the execution operations on TN and MN
  - [Execution effort recalibration - data collection](https://github.com/onflow/flow-go/issues/5026)


**Active Epics**

Objective 1: Upgrade Mainnet to Crescendo Release with minimal impact on developers, to lower the barrier for cross chain liquidity on Flow
- KR1: Enable Developers and the Flow Foundation to simulate Cadence 1.0 Contract upgrades
- KR4: Testnet Upgrade to Crescendo Release

Objective 3: Analyze execution runtime trends and risks to plan next set of scalability OKRs
- KR1: Measure execution state growth trends, identify future bottlenecks and prioritize by urgency

Objective 4: Expand testing capability of storehouse so that we can validate execution correctness and benchmark performance on Mainnet data
- KR1: Execution node handles restart from spork root block reguardless of how many blocks it is behind
- KR2: Execution node can execute live data without impacting the network (i.e. execution fork)

---

### **Core Protocol** \[Jerome]
Cycle Objective(s): 

* Translate crypto performance improvements to consensus block rate increase
* Provide developers secure and non-rate limited way to access all of chain data (transactions, blocks, account balance, events, account balance etc) by locally running an access or an observer node
* Reduce CPU usage on Execution node by 30%
* Continue design of Dynamic Protocol 

**Done last sprint**

* Networking project handover w/ Yahya
* Dynamic Protocol
  * [Implemented storage layer types and capabilities for Key-Value Store](https://github.com/onflow/flow-go/issues/5292)
  * [Partially implemented of state machine for Key-Value Store](https://github.com/onflow/flow-go/issues/5312)
  * Create protocol version upgrade service event
    * Wrapping up [KV Store - ProtocolStateVersionUpgrade Service Event](https://github.com/onflow/flow-go/pull/5428)
    * Started [Add ProtocolStateVersionUpgrade service event](https://github.com/onflow/flow-core-contracts/pull/411)
* New crypto lib
  * Transition of repos emulator/sdk/core-contract to use the new crypto lib (CLI is partially transitioned)
  * Fix emulator build with cross-compilation - fix CLI build with cross compilation (with help of 4d-ux)
  * Investigate issues with partner nodes
* Randomness-on chain contract: investigate issue caused by epoch contract update - issues and solution discussed 
* Data Availability
  * Fixed sorting bug in streamed events ([PR 5404](https://github.com/onflow/flow-go/pull/5404))
  * Rolled out local event queries to 35% of QN ANs
  * Deployed register caching on devnet, 1 FF mainnet AN ([Issue 5277](https://github.com/onflow/flow-go/issues/5277))
  * Fixed race condition in AN connection cache ([PR 5334](https://github.com/onflow/flow-go/pull/5334))
  * Implemented local transaction result queries on ANs (KROK) ([PR 5306](https://github.com/onflow/flow-go/pull/5306))
  * Defined proto changes for streaming blocks and tx statuses (KROK) ([PR 1422](https://github.com/onflow/flow/pull/1422))

**This sprint**

* Networking
  * Merge open PRs from previous sprint
    * [Reject Gossipsub RPC from unstaked peers](https://github.com/onflow/flow-go/pull/5449)
    * [Herostore message entity nonce](https://github.com/onflow/flow-go/pull/5452)
  * [Update github actions improve networking test runners](https://github.com/dapperlabs/flow-go/issues/6949) 
* Dynamic Protocol
  * Continue to ramp up EFM recovery and dynamic protocol state
  * Finish implementation of state machine and continue with development of next issues
  * Continue [Add ProtocolStateVersionUpgrade service event](https://github.com/onflow/flow-core-contracts/pull/411)
  * Continue [integration test for protocol version upgrade](https://github.com/onflow/flow-go/pull/5477)
  * Once state machine is done, continue with version upgrade integration
Some time helping with Previewnet setup
* New crypto lib
  * Continue testing ArtBlocks node image (requires BN2)
  * Work with IT for node access to troubleshoot problematic CPU type and investigate the issue
* Randomness-on chain contract: implement the contract fix (with @bluesign)
* Data Availability
  * Rollout local event queries to remaining QN ANs
  * Deploy register caching to QN AN ([Issue 5277](https://github.com/onflow/flow-go/issues/5277))
  * Add programs cache ([Issue 5278](https://github.com/onflow/flow-go/issues/5278))
  * Continue work on in-progress PRs from KROK:
    * Indexing execution data on Observers ([PR 5256](https://github.com/onflow/flow-go/pull/5256))
    * Add state streaming APIs on Observers ([PR 5368](https://github.com/onflow/flow-go/pull/5368))
    * Add support for serving queries from local data on Observers ([PR 5358](https://github.com/onflow/flow-go/pull/5358))
    * Streaming Blocks ([PR 5307](https://github.com/onflow/flow-go/pull/5307))
    * Streaming TX statuses ([PR 5310](https://github.com/onflow/flow-go/pull/5310))
    * Streaming Account statuses ([PR 5406](https://github.com/onflow/flow-go/pull/5406))
 
**On Hold**
* BFT mitigations to enable 20 permissionless ANs
* Deliver public roadmap & vision for technical protocol decentralization focusing on current challenges and upcoming updates for permissionless consensus on Flow

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

* Flow JVM SDK updates (@lealobanov)
  * Completed milestone #3
    * Missing unit tests and previously reported issues now resolved.
    * Updated GH workflows to trigger integration tests and publish test results (pull request, snapshot, release workflows)
  * Started milestone #4
    * Implement CI + test automation, add integration testing 
* Completed initial draft revision of USDC Cadence 1.0 update. Waiting for further confirmation from Circle for next steps

**This sprint**

* Continue milestone 4 & and start milestone 5 (documentation updates) of Flow JVM SDK update (@lealobanov)
* Start Axelar Cadence 1.0 upgrades (AnChain team)

**On Hold**
- Remaining work on USDC on hold pending confirmation from Circle on migration plan

**Active Epics**

- Establish Defi/Liquidity infrastructure for Cadence 1.0 update
- Ensure Flow has best-in-class on- and off-ramps for USDC liquidity across DeFi ecosystem
- Expand Flow DeFi ecosystem primitives and protocols

---

### **User Experience** \[Greg]

**Cycle Objective(s):**

* Bring Cadence 1.0 to market as part of the Crescendo release to minimize customer impact and developer effort
* Bring EVM on Flow to Market as part of the Crescendo release to increase liquidity and bring top-tier developer platforms to our network
* Use the Crescendo Release to grow Flow's developer base and network activity

**Done last sprint**

* CLI Preview Release using Emulator v1.0.0-M3 with latest Cadence 1.0 and EVM updates [CLI v1.12.0-cadence-v1.0.0-M8-2 Pre-release](https://github.com/onflow/flow-cli/releases/tag/v1.12.0-cadence-v1.0.0-M8-2)
* Add Guides and Reference documentation for deploying Solidity to Flow Previewnet (Connecting to FlowEVM, Guides: Hardhat HelloWorld, Remix (+video tutorial)) Launch
* Stable Cadence Installation Workflow to allow multiple binaries [#1374](https://github.com/onflow/flow-cli/issues/1374)
* [Add FT/NFT Migration Guides and Best Practices Docs](https://cadence-lang.org/docs/cadence_migration_guide/nft-guide)
* Updated Cadence tutorials for Cadence 1.0
* Faucet setup to support funding Previewnet
* Build improved to support cross compilation with new crypto library on Stable Cadence CLI
* Discovery setup for Previewnet support
* CLI Previewnet support
* CLI cheatsheet docs and help menu

**This sprint**
**Sprint goal focusing on unblocking and documenting Dev Path for Cadence 1.0 staging and migration**

**Education and Adoption Working Group**
* Add Guides and Reference documentation for FlowEVM (Clients: web3.js, ethers.js, viem)
* Hardhat video tutorials
* Urgent SEO issues - Fix developer docs broken links, markup and errors from Flow.com
* Audit and Update Docs for Cadence 1.0 [#531](https://github.com/onflow/docs/issues/531)
* [USDC Fiat Token Contract](https://github.com/flow-usdc/flow-usdc) Update for Cadence 1.0

**Dev Tools Working Group**
* Release Contract Migration Manager and support documentation for local contract staging and migration (Cadence 1.0)
* Add Cadence Linter to  [#1395](https://github.com/onflow/flow-cli/issues/1395)
* Audit and Update Docs for Cadence 1.0 [#531](https://github.com/onflow/docs/issues/531)
* CLI bugfixes and top issues

**Active Epics**

* [Contract Migration Manager](https://github.com/onflow/flow-cli/issues/1375)
* [FlowEVM Docs for Launch](https://github.com/onflow/docs/issues/568)

**On Hold**

* [Update Flowport for Cadence Crescendo instance](https://github.com/orgs/onflow/projects/13/views/85?pane=issue&itemId=51960824)
* Update Playground for Cadence 1.0

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
- EVM Gateway
    - [Create EVM Gateway Infrastructure](https://github.com/dapperlabs/terraform/pull/4163)
    - [Create EVM Gateway Configuration](https://github.com/dapperlabs/dapper-flow-hosting/pull/1461)
    - [Create faucet record for previewnet](https://github.com/dapperlabs/terraform/pull/4162)
    - [Create EVM Gateway workflow for builds](https://github.com/onflow/flow-evm-gateway/pull/106)
    - [Delete EVM Gateway workflow for deploys](https://github.com/onflow/flow-evm-gateway/pull/120)
    - [Create public repository for EVM Gateway](https://github.com/dapperlabs/flow-devex-infrastructure/pull/129)
- Node Hosting Support
  - [Delete Crescendo Network](https://github.com/dapperlabs/terraform/pull/4157)
  - [Delete Crescendo Configuration](https://github.com/dapperlabs/dapper-flow-hosting/pull/1459)
- Observability Cost Reduction
  - Turn off Canary VMs
  - [Configure Prometheus to Drop unnecessary metrics](https://github.com/dapperlabs/dapper-flow-hosting/pull/1457)
  - [Migrate DL nodes to error logging](https://github.com/dapperlabs/dapper-flow-hosting/pull/1458)
- FF GCP Migration
  - Migrated single project & validate migration process
  - Identify all resources/projects to be moved
**Goal of Sprint is to prepare for GCP migration to FF account** 
**This Sprint**
- Assist with Previewnet & EVM Gateway
- Monitor Observability
- Begin preparing for GCP migration of project
---
### **Governance and Tokenomics** \[Kshitij]
Cycle Objective(s): Transaction fees on EVM, increasing transaction fees and inflation reduction plan.

**Done last sprint**

* Gas to computation ratio set at 1000:1 for the PreviewNet launch, with a consideration for evaluating a higher ratio of 3000:1 based on Flow's capacity to handle higher gas transactions. See [internal doc](https://www.notion.so/dapperlabs/Gas-fees-on-Flow-EVM-b7419203c5054562a0be7fd91fc9fc66#c43bbd475a6b44b7a8bc25f9e357e720) for more explanation.
* Developer documentation (including internal documentation) for FlowEVM gas fees created.
* Flow fees for five key transaction types have been evaluated. See [worksheet 3](https://docs.google.com/spreadsheets/d/1PPxxAotsIYLzydAnuBAgQe1BmEcamiuSQUmsDtrpaKs/edit#gid=0)
* Drove research on inflation and levers to reduce it via a combination of reward rate and transaction fee increase, with the goal of keeping APY comeptitive. The ideas will be presented to the GWG in the coming sprint. See [draft note](https://www.notion.so/dapperlabs/FLOW-Inflation-forum-post-for-community-ideation-3f256d4e1b5b48b6adaabb22d6b22567)
* WIP - A high-level governance strategy is under development 
* WIP - The impact of increasing the computation limit is being assessed

**This sprint**

* Estimation of execution effort for FlowEVM transactions and determining the ratios and differences between Flow Cadence and FlowEVM transaction fees (for better comms)
* Finalize the decision regarding increasing the computation limit
* Drive GWG meeting and provide community updates on recent changes
* Publish forum post detailing the computation limit and transaction fee increases and invite feedback
* Outreach to partners regarding the upcoming transaction fee increase
* Conduct research on storage fees related to EVM


**On Hold**

- N/A


**Active Epics**

- N/A
