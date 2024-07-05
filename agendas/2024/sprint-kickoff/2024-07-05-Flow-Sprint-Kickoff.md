# Overview

### Team Wins 🎉
- First milesone for migrating badger to pebble proof of concept is completed. Now the mainnet test execution node is running pebble based protocol database and executing and storing latest blocks.
- Content pieces [Path to Permissionless Participation in Flow](https://docs.google.com/document/d/1dfKevN2zbsMP6fVOuAM2FTcCDGBW2sPa5CcrO8Uccy8/edit) and [2-page executive summary](https://docs.google.com/document/d/1E2iiEFlPdhBW7EIUYFV3LICq575JyX8OHZNqiFb04Qk/edit#heading=h.2n9y1yguzk4q) (mature complete drafts), which describe challenges and roadmap for permissionless consensus on Flow.
- Refined [branching convention](https://github.com/onflow/flow-go/blob/alex/branching-conventions/DEVELOPMENT.md) for `flow-go` 
    - See Core-Protocol Working Group [meeting June 27](https://github.com/onflow/Flow-Working-Groups/blob/main/core_protocol_working_group/meetings/2024-06-27.md) and respective PRs [#6162](https://github.com/onflow/flow-go/pull/6162), [#6177](https://github.com/onflow/flow-go/pull/6177)
- First version of operator branding is now live on FlowDiver (see: https://www.flowdiver.io/node)
- MVP of Flow Port asset Bridge as demo'd at all-hands

### General updates

### OOO
- [Full List](https://www.notion.so/flowfoundation/de89aa4e79364216a665888335a1cdee?v=4de18b26f60d4bae8f62724dddcce260)

---

### Mainnet Uptime - Last 14 days (06/22/24 to 07/05/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    100%       |       0%         |
| Block Sealing           | 99.9%   |    100%       |       0%         |
| Access API Liveness     | 99.9%   |    ? dashboard broken 😔  |       ?          |

[SLO dashboards](https://flowfoundation.grafana.net/d/hgW3l-m4k/slo-dashboard?orgId=1&from=now-2w&to=now)

[YTD SLA: 99.922%](https://app.metrika.co/flow/dashboard/slas?tr=YTD)

## Incidents

### Mainnet


(Sev [definition](https://www.notion.so/dapperlabs/Incident-Priorities-Severity-Levels-b65d7682336c46baa025ee512fd3efa3))

### Key Release Dates & Breaking Changes
- Next Mainnet/Testnet network upgrade (spork):
  - Testnet: Q3
  - Mainnet: Q3 (see [announcement](https://flow.com/post/update-on-testnet-crescendo-network-upgrade))

---

### FLIPs Tracker \[Kshitij]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 7  |    9  |       0         |       7          |        **23**       |
| Proposed    | 1  |    2 (-1)    |       2          |       0           |        **5** (-1)        |
| Accepted    | 2  |    1     |       2       |       1          |        **6**          |
| Rejected    | 0  |    0     |       1       |       0          |        **1**          |
| Implemented | 3 |    22 (+1)    |       2       |       1           |        **28** (+1)          |
| Released    | 4  |    0     |       3       |       6          |        **13**          |
| Total       | **17**  |    **34**  |       **10**      |       **15**          |        **76**          |

**Updates**
* [Cadence] - FLIP for changing import statement semantics (FLIP-277) moved to implementation
* FLIPs started by folks who have now left FF, need to reassign
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
 - Cadence language
   - [Remove access to field slices from composite and interface types](https://github.com/onflow/cadence/pull/3432)
   - [Fix invalidCadenceTypeError creation](https://github.com/onflow/flow-go/pull/6151)
   - [Import contracts as references](https://github.com/onflow/cadence/pull/3417)
   - [Evaluate using JSONL instead of JSON array (reporters.ReportWriter) for diff-states command](https://github.com/onflow/flow-go/issues/6108)
   - In review:
     - [Allow borrowing of capability with subtype](https://github.com/onflow/cadence/pull/3449)
     - [Fix toConstantSized](https://github.com/onflow/cadence/pull/3446)
     - [Add support for JSONL report format as alternative to JSON array report](https://github.com/onflow/flow-go/pull/6176)

 - State migration for Crescendo release 
   - [Improve Cadence 1.0 migration - clean up contract names and code](https://github.com/onflow/flow-go/pull/6148)
   - [Fix Cadence 1.0 migration - ignore empty contracts when checking all contracts](https://github.com/onflow/flow-go/pull/6145)
   - Updated all downstream dependencies to latest Cadence 1.0 preview release

 - Cadence Execution
   - [Badger DB -> Pebble DB protocol state migration POC](https://github.com/onflow/flow-go/issues/6137)
 - Tooling
   - [Added a script to move checkpoint files](https://github.com/onflow/flow-go/pull/6143)

 - EVM Gateway
   - [Add a buffer gas of "all but one 64th" for gas used on EVM.dryRun](https://github.com/onflow/flow-go/pull/6136)
   - [Fix hash calculation of direct calls causing duplicate hashes](https://github.com/onflow/flow-go/pull/6118)
   - [Remove unneeded dependency](https://github.com/onflow/flow-evm-gateway/pull/331)
   - [Add missing uncle endpoints and max fee per gas](https://github.com/onflow/flow-evm-gateway/pull/316)
   - [Bugfix invalid block number or hash](https://github.com/onflow/flow-evm-gateway/pull/313)

**This sprint**

 - Objective 1, KR4: Testnet Upgrade to Crescendo Release
   - Continue work on migration optimizations.
   - Investigate / Fix any security report incoming from bug bounty.

 - Objective 2, KR 1: Update transaction fees weights for the execution operations on TN and MN
   -  Continue work on [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)

 - Atree
   -  Analyze `diff-states` (21GB report) for atree inlined vs non-inlined execution states that executed same mainnet blocks
   - For inlined and non-inlined states, re-execute again using:
      - same blocks
      - same starting point
      - same vm configuration (prior run used Ice Lake vs Sky Lake)
      - and save execution results (prior run's execution results were overwritten by storehouse tests).
 
 - Cadence optimization
   - Continue: [Cadence composites with attachment having different field types vs field values are rejected by CCF encoder](https://github.com/dapperlabs/cadence-internal/issues/241)
   - [Provide ccf.EventsEncModeV0 and ccf.EventsEncModeV1 for encoding events in CCF format](https://github.com/onflow/cadence/issues/3448)
   
 - State migration for Crescendo release 
   - [Test Crescendo state migration with Mainnet state, and deploy to a new mainnet migration net](https://github.com/onflow/flow-go/issues/5851)
   - [Comparison of execution states before and after the atree inlining](https://github.com/onflow/atree/issues/292)

- EVM Gateway
   - [Add a method to return the value from a storage slot on a given addres](https://github.com/onflow/flow-go/issues/6178)
   - KROK
     - EVM Gateway benchmarking
  
 - Other
   - [Reducing spork time by improving checkpointing copying during bootstrapping](https://github.com/onflow/flow-go/issues/6167)

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

* <ins>EFM Recovery</ins>
  - [Adding Epoch Fallback phase to data model](https://github.com/onflow/flow-go/pull/6116)
  - [Add epoch fallback phase](https://github.com/onflow/flow-go/issues/6092)
  - [`epochs.FallbackStateMachine` only tolerates narrow unexpected behaviour](https://github.com/onflow/flow-go/issues/6018)
  - Addressed comments and merged PR for https://github.com/onflow/flow-go/issues/6018, effectively completing it.
  - [Modify EFM logic do not enter EFM while in EpochCommitted phase](https://github.com/onflow/flow-go/issues/5731)
  - In review: [Supporting epoch extensions in consensus committee](https://github.com/onflow/flow-go/pull/6154)
  - In review: [Epoch State Machines should not use parentState in their business logic](https://github.com/onflow/flow-go/issues/6019)
  - Ready to merge: [EFM integration tests, part 1](https://github.com/onflow/flow-go/pull/6156)
  - Ready to merge: [EFM blocktime controller updates](https://github.com/onflow/flow-go/pull/6156)

* <ins>Data Availability:</ins>
  - Adjusted max script execution effort on public ANs to 10K (fails over to ENs)
  - KROK Team
     - In review 
        - Add support for version beacon events to control script execution
           - [Issue #5788](https://github.com/onflow/flow-go/issues/5788)
           - In review, [Issue #5789](https://github.com/onflow/flow-go/issues/5789)
           - In review, [Issue #5790](https://github.com/onflow/flow-go/issues/5790)
        - Expose separate endpoints for getting account balance and keys ([Issue #5999](https://github.com/onflow/flow-go/issues/5999))
        - Create proof of concept of transaction payer balance checks ([Issue #5823](https://github.com/onflow/flow-go/issues/5823))

* <ins>Other</ins>
  - Finalizing content pieces [Path to Permissionless Participation in Flow](https://docs.google.com/document/d/1dfKevN2zbsMP6fVOuAM2FTcCDGBW2sPa5CcrO8Uccy8/edit) and [2-page executive summary](https://docs.google.com/document/d/1E2iiEFlPdhBW7EIUYFV3LICq575JyX8OHZNqiFb04Qk/edit#heading=h.2n9y1yguzk4q)
  
**This sprint**

* <ins>EFM Recovery</ins>
  - [Update Ansible automation for Mainnet25 Dynamic Protocol state changes](https://github.com/onflow/flow-go/issues/5156)
  - [Update consensus committee EFM processing](https://github.com/onflow/flow-go/issues/5730)
  - Review by SC team: [EpochRecover cadence transaction](https://github.com/onflow/flow-core-contracts/pull/420)
  - [Blocktime controller EFM changes](https://github.com/onflow/flow-go/issues/5732)
  - [Update epoch lookup component](https://github.com/onflow/flow-go/issues/5763)
  - [EFM Recovery benchnet testing](https://github.com/onflow/flow-go/issues/5945)
  - [Support Epoch Extensions in HotStuff Committee](https://github.com/onflow/flow-go/pull/6154)
  - [Address comments and merge PR for: Epoch State Machines should not use parentState in their business logic](https://github.com/onflow/flow-go/issues/6019)
  - [Implement last issue for epoch state machines for handling transitions into EFM in edge case](https://github.com/onflow/flow-go/issues/5631)
  - Merge open PRs 
  - Finish [EFM transaction Cadence PR](https://github.com/onflow/flow-core-contracts/pull/420)
  - [Update Epoch Lookup Component](https://github.com/onflow/flow-go/issues/5763)
  
* <ins>Data Availability:</ins>
  - Complete ProtocolDB pruning design
  - Continue rollout of local script execution on QuickNode

  - KROK Team
    - Add support for version beacon events to control script execution ([Issue #5788](https://github.com/onflow/flow-go/issues/5788) - In review, [Issue #5789](https://github.com/onflow/flow-go/issues/5789) - In review, [Issue #5790](https://github.com/onflow/flow-go/issues/5790))
    - Complete proof of concept of transaction payer balance checks ([Issue #5823](https://github.com/onflow/flow-go/issues/5823) - In review)
    - Add support for pruning execution data db on ANs ([Issue #6002](https://github.com/onflow/flow-go/issues/6002) - in review)
    - Add support for storing exec data using pebble db ([Issue #6017](https://github.com/onflow/flow-go/issues/6017) - in review)
    - Start Registers DB pruning (delayed from last sprint) ([Issue #6066](https://github.com/onflow/flow-go/issues/6066), [Issue #6068](https://github.com/onflow/flow-go/issues/6068))

* <ins>Cryptography:</ins>
   - SPoCK aggregation: from BLS security proof to BLS aggregation security proof (multiple sprints)

* <ins>Rosetta:</ins>
  - KROK: 
    - Rosetta Cadence updates for Crescendo ([Issue #52](https://github.com/onflow/rosetta/issues/52), [Issue #54](https://github.com/onflow/rosetta/issues/54) - PRs in review)

* <ins>Other:</ins>
  - Prepare for libp2p shipyard deep dive


**On Hold**
* Implement BFT mitigations to enable 20 permissionless ANs

---

### **DeFi** \[Jerome]

Cycle Objective(s): 
- Resolving Circle's existing engineering improvements for USDC on Flow
- Cadence 1.0 DEX Prep - IncrementFi
- EVM partner onboarding: Moralis, Covalent, Ankr, Credora
- Deliver Axelar bridge [PAUSED]

**Done last sprint**
  * [JVM-SDK Access API refactoring + exception handling](https://github.com/onflow/flow-jvm-sdk/pull/55)
  * [JVM-SDK Exception handling improvements](https://github.com/onflow/flow-jvm-sdk/pull/57)

**This sprint**
  * [Continue adding missing Access API endpoints to JVM SDK](https://github.com/onflow/flow-jvm-sdk/pull/61)
  * [Continue adding missing Access API subscription endpoints to JVM SDK](https://github.com/onflow/flow-jvm-sdk/pull/58)
  * Continue Celer C1.0 upgrades
  * Review signature and hash updates PRs for JVM-SDK, [1](https://github.com/onflow/flow-jvm-sdk/pull/53) & [2](https://github.com/onflow/flow-jvm-sdk/pull/52)

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

**Rewards**
- Rewards contract design finalized
- Add skeleton loading for metric cards (https://github.com/onflow/crescendo-rewards/issues/20)
- Add skeleton loading for leaderboard (https://github.com/onflow/crescendo-rewards/issues/21)
- Add skeleton loading for rewards earned/locked (https://github.com/onflow/crescendo-rewards/issues/23)
- Hook up leaderboard to API (https://github.com/onflow/crescendo-rewards/issues/14)
- Hook up rewards component to the API (https://github.com/onflow/crescendo-rewards/issues/18) 


**This sprint**
**Sprint goal focusing on: Flow Port Asset Bridge and Token Transfer, FCL x WalletConnect Improvements, Crescendo Rewards**

- [EPIC] Flow Port Asset Bridge [#284](https://github.com/onflow/flow-port/issues/284)
- [EPIC] EVM Docs [#654](https://github.com/onflow/docs/issues/654)
- [EPIC] Flow EVM Docs - Cadence Dev [#575](https://github.com/onflow/docs/issues/575)
- [EPIC] FCL WalletConnect Improvements https://github.com/onflow/fcl-js/issues/1872
- [EPIC] Crescendo Rewards Portal
  - [FE](https://github.com/onflow/crescendo-rewards/issues/1 )
  - [BE](https://github.com/onflow/crescendo-rewards-be/issues/1)
  - [SC](https://github.com/onflow/crescendo-rewards-sc/issues/7)
- Discover and Design for bridge.flow.com
- [EPIC] EVM Bridge - [#1](https://github.com/onflow/flow-bridge-app/issues/1)

#### Smart Contract WG


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

- Ship MigrationNet support for Flow Wallet Extension
- Ship "Homepage 2.0" UI/UX
- Polishing Account Linking UI/UX and functionality
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

- [Move MN VN25 Infra to India](https://github.com/dapperlabs/terraform/pull/4270)
- [Update Ansible config to support India region](https://github.com/dapperlabs/dapper-flow-hosting/pull/1529)
- [Upgrade all network VMs to address SSH vuln](https://github.com/dapperlabs/terraform/pull/4287)
- [Increase Disk Size for MN LNs](https://github.com/dapperlabs/terraform/pull/4279) 

**DevEx Service Observability**

- [Enable ingestion of Cloud Run logs to Loki](https://github.com/dapperlabs/flow-devex-infrastructure/pull/182)
- [Enable GCP Metrics data source to query metrics from GCP](https://flowfoundation.grafana.net/explore?schemaVersion=1&panes=%7B%22dmn%22:%7B%22datasource%22:%22edqgkbo5bzapsa%22,%22queries%22:%5B%7B%22datasource%22:%7B%22type%22:%22stackdriver%22,%22uid%22:%22edqgkbo5bzapsa%22%7D,%22refId%22:%22A%22,%22queryType%22:%22timeSeriesList%22,%22timeSeriesList%22:%7B%22projectName%22:%22flow-devops%22,%22filters%22:%5B%5D,%22view%22:%22FULL%22%7D%7D%5D,%22range%22:%7B%22from%22:%22now-1h%22,%22to%22:%22now%22%7D%7D%7D&orgId=1)

**CloudFlare Migration**

- Proceeded with new account contract

**Automation**

- [Create New BigQuery Tables for Flaky Test & TPS Automation](https://github.com/dapperlabs/terraform/pull/4275)
- [Update TPS automation to leverage new BQ table](https://github.com/onflow/flow-go/pull/6149)
- [Update Flaky Test Automation to leverage new BQ table](https://github.com/onflow/flow-go/pull/6147)

**This Sprint**
- Assist with migration and spork prep efforts
- Continue removing dependencies on CloudFlare & assist with account creation
- Begin prep work to migration to new CloudFlare account

---

### **Governance and Tokenomics** \[Kshitij]
Cycle Objective(s): Transaction fees on EVM, increasing transaction fees and inflation reduction plan.

**Done last sprint**
- Edgevana: Lease agreement finalized; Edgevana now operating a verification node in Sydney, Australia—our first node on the continent
- Node Operator Branding & geographical spread: Implementation underway on Flowdiver; see link [here](https://www.flowdiver.io/node)
- Transaction fee strategy discussion with leaders; we will proceed with dynamic fee structure implementation, timed with crescedo launch
- Governance Working Group: Presentation on FLIP tooling during the latest meeting
- Planned Flow tokenomics re-visualization with graphics and better assortment of data on flow.com's tokenomics page

**This sprint**
- Take all Node branding changes live
- R&D on dynamic fee structure and agreement on v0 algorithm for crescendo launch
- Continue to upgrade Tokenomics pages

**On Hold**


**Active Epics**

- N/A
