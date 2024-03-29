# Overview


### Team Wins 🎉

- Emulator state migration of NFT example to Cadence 1.0 finally successful!
- Successfully bootstrapped and run TN Migration environment from TN stated migrated to Cadence 1.0 (Fixed [issue with epoch contract](https://github.com/onflow/flow-core-contracts/pull/413) that caused ENs on migration network to hog CPU)

### General updates

- Starting to move towards Grafana Incident Management, as well as a split EU/NA schedule during the work week. Feel free to take a look at the current setup [here](https://flowfoundation.grafana.net/a/grafana-oncall-app/schedules/S8X18TEALX93Z?p=1)
- Open to discussion, how the weekends should be handled (EU/NA split, or standard rotation)
- Reminder for US folks to submit their 83(b) forms before tomorrow

### OOO
- [Full List](https://www.notion.so/flowfoundation/de89aa4e79364216a665888335a1cdee?v=4de18b26f60d4bae8f62724dddcce260)
- Starting Next Week:
  - G - April 1st to April 15th
 

---

### Mainnet Uptime - Last 7 days (3/15/24 to 3/29/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    100%       |       0%         |
| Block Sealing           | 99.9%   |    100%       |       0%         |
| Access API Liveness     | 99.9%   |    99.992%    |       8.27%      |

[SLO dashboards](https://flowfoundation.grafana.net/d/hgW3l-m4k/slo-dashboard?orgId=1&from=now-2w&to=now)

[YTD SLA: 100%](https://app.metrika.co/flow/dashboard/slas?tr=YTD)

## Incidents

### Mainnet
1. March 24th 4:45 PM Pacific: EN1 memory leak observed by JP and mitigated by a restart ([slack thread](https://dapperlabs.slack.com/archives/C014WBGR1J9/p1711323881744749)) - Root cause: https://github.com/onflow/flow-go/issues/5150
2. March 25th 10:15 AM Pacific: AN9 went OOM ([slack thread](https://dapperlabs.slack.com/archives/CUU2KQL4A/p1711386932706579)) - Same root cause as 1.
3. March 25th 7:50 AM Pacific: QN Public EU-based ANs went offline for 10 minutes. ([RCA](https://discord.com/channels/613813861610684416/1162086721471647874/1223025960769818799]))
4. March 27th 0:00 AM Pacific: TTF spiked on QN public Access nodes. Root cause is yet to be determined.

### Testnet
1. March 20th 11:12 AM: Sealing halt ([slack thread](https://dapperlabs.slack.com/archives/C015ABLUV41/p1710914042806219)) - Root cause: EN3 had failed to start after a move/restart.
2. March 28th 11:28 AM: EN1 deleted ([slack thread](https://dapperlabs.slack.com/archives/C015ABLUV41/p1711650523244509) - Root cause: human error.

### Key Release Dates & Breaking Changes

- Next Mainnet/Testnet network upgrade (spork): ~End of April/ early May.
- First Testnet Migration test run: April 3rd

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

Cadence 1.0 migration testing with emulator & TN migration environment
- [Contract update fails if there were enums as type-requirements](https://github.com/onflow/cadence/issues/3186)
- [Run existing tests for C1.0 contract update validator](https://github.com/onflow/cadence/issues/3188)
- [State migration fails in some cases](https://github.com/onflow/cadence/issues/3192)
    - [Only encode reference static type in legacy format if it was decoded as such](https://github.com/onflow/cadence/pull/3199)
    - [Name storage migration, include in error](https://github.com/onflow/cadence/pull/3198)
    - [Optionally check atree storage health before migration](https://github.com/onflow/flow-go/pull/5591)
- [Improve error printing in contract validator](https://github.com/onflow/flow-go/pull/5596)
    - dependency for ^: [Simplify AuthorizationMismatchError](https://github.com/onflow/cadence/pull/3201)
- [State migration fails in some cases](https://github.com/onflow/cadence/issues/3192)
    - [Handle unparameterized Capability static types](https://github.com/onflow/cadence/pull/3196)
- [Make custom contract update rules mandatory](https://github.com/onflow/cadence/issues/3187)
- Fix for the Migration environment using tons of compute after migration to C1.0
    - [Don't copy dictionary in getEpochMetadata](https://github.com/onflow/flow-core-contracts/pull/413)
    - [Update Core Contracts](https://github.com/onflow/flow-go/pull/5579)
- [Make ExampleNFT compatible for contract update](https://github.com/onflow/flow-nft/pull/205)
- [Optimise merge registers for migrations](https://github.com/onflow/flow-go/pull/5522)
- new tool: [Storage Explorer](https://github.com/onflow/cadence/pull/3147)
- [Make contract update validation thread safe](https://github.com/onflow/flow-go/issues/5565)
- [Improve cadence migrations](https://github.com/onflow/flow-go/issues/5564)
- [Relax interface conformance changes in contract update validator](https://github.com/onflow/cadence/pull/3184)
- [Fix import resolving during staged contract updates](https://github.com/onflow/flow-go/issues/5551)

Cadence 1.0 features & improvements
- bugfix: [Enums in Contract Interfaces cannot be updated to Cadence 1.0](https://github.com/onflow/cadence/issues/3182)
- bugfix: [Crasher when converting integer to opional address](https://github.com/onflow/cadence/issues/3194)
- Docs: [Improve development documentation](https://github.com/onflow/cadence/pull/3189)
- Docs: [Improve Cadence 1.0 migration guide](https://github.com/onflow/cadence-lang.org/pull/74)

Cadence 1.0 dependency updates
- CLI: [1](https://github.com/onflow/flow-cli/issues/1470), [2](https://github.com/onflow/flow-cli/issues/1462), [3](https://github.com/onflow/flow-cli/pull/1480)
- EVM Gateway: [1](https://github.com/onflow/flow-evm-gateway/issues/175), [2](https://github.com/onflow/flow-evm-gateway/issues/165)
- flixkit-go: [1](https://github.com/onflow/flixkit-go/issues/52), [2](https://github.com/onflow/flixkit-go/issues/51), [3](https://github.com/onflow/flixkit-go/pull/53)
- cadence-tools: [1](https://github.com/onflow/cadence-tools/issues/323), [2](https://github.com/onflow/cadence-tools/issues/322), [3](https://github.com/onflow/cadence-tools/issues/320), [4](https://github.com/onflow/cadence-tools/issues/318), [5](https://github.com/onflow/cadence-tools/issues/316), [6](https://github.com/onflow/cadence-tools/pull/328), [7](https://github.com/onflow/cadence-tools/pull/327), [8](https://github.com/onflow/cadence-tools/pull/326)
- flowkit: [1](https://github.com/onflow/flowkit/issues/32), [2](https://github.com/onflow/flowkit/issues/31), [3](https://github.com/onflow/flowkit/issues/30), [4](https://github.com/onflow/flowkit/pull/33)
- emulator: [1](https://github.com/onflow/flow-emulator/issues/622), [2](https://github.com/onflow/flow-emulator/issues/621), [3](https://github.com/onflow/flow-emulator/issues/618), [4](https://github.com/onflow/flow-emulator/pull/626)
- flow-go-sdk: [1](https://github.com/onflow/flow-go-sdk/issues/610), [2](https://github.com/onflow/flow-go-sdk/issues/609), [3](https://github.com/onflow/flow-go-sdk/pull/612), [4](https://github.com/onflow/flow-go-sdk/pull/611)
- flow-go: [1](https://github.com/onflow/flow-go/issues/5555), [2](https://github.com/onflow/flow-go/pull/5600)

Cadence Execution
- [Bump atree version in Cadence v1.0 for new features (e.g. deduplication of Cadence dictionary type info)](https://github.com/onflow/cadence/pull/3178)
- Test bugfix: [Fix data races in tests](https://github.com/onflow/flow-go/pull/5599)
- Reverting migration optimization causing unstable test behaviour: [Revert "Optimise merge registers for migrations"](https://github.com/onflow/flow-go/pull/5594)

EVM Core
- [[Flow EVM] supporting evm.batchRun](https://github.com/onflow/flow-go/issues/5501)
    - work towards ^: [prepare the StateDB and the Emulator to support batch run operations](https://github.com/onflow/flow-go/pull/5577)
- [Populate receiptRoot in the block](https://github.com/onflow/flow-go/issues/5509)
- [Add flow token bridge events](https://github.com/onflow/flow-go/issues/5537)
- [Fix the possibility of concurrent Precompile setup calls](https://github.com/onflow/flow-go/issues/5512)
- Go-ethereum: [Update internal package references](https://github.com/onflow/go-ethereum/pull/5)

EVM Gateway
- [Implement filter management](https://github.com/onflow/flow-evm-gateway/issues/7)
- [Support polling new data since filter changes](https://github.com/onflow/flow-evm-gateway/issues/141)


**This sprint**

Objective 1, KR 1: Enable Developers and the Flow Foundation to simulate Cadence 1.0 Contract upgrades
* [Emulator release is ready](https://github.com/onflow/flow-cli/releases/tag/v1.15.0-cadence-v1.0.0-preview.14), support devs that are teting migration, monitor Discord questions.
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

### **Core Protocol** \[Yurii & Peter]
Cycle Objective(s): 

* Translate crypto performance improvements to consensus block rate increase
* Provide developers secure and non-rate limited way to access all of chain data (transactions, blocks, account balance, events, account balance etc) by locally running an access or an observer node
* Reduce CPU usage on Execution node by 30%
* Continue design and implementation of Sporkless Epoch Fallback Recovery solution

**Significant Progress Last Sprint:**

* <ins>Zero-downtime Upgrades of Node Software:</ins>
  - Integrated Key-Value Store into Dynamic Protocol State and added framework for independent state machines to update values in Key-Value Store ([PR #5513](https://github.com/onflow/flow-go/pull/5513) merged)
  - [proof of concept] used Key-Value in Dynamic Protocol State for upgrading protocol; 
  
    confirmed with tests on prototype code ([draft PR #5477](https://github.com/onflow/flow-go/pull/5477)): 
    - upgrading Protocol at a coordinated view without downtime works 
    - Nodes that don't support new version yet will halt at specified view (tested on prototype code)

  - large refactoring for cleanup (ongoing) 
  - Smart contract to coordinate protocol upgrade ([PR #411](https://github.com/onflow/flow-core-contracts/pull/411) in progress)


* <ins>EFM Recovery</ins>
  * Khalil onboarded
  * Tooling to generate data for EFM recovery ([PR #5576](https://github.com/onflow/flow-go/pull/5576) in progress)


* <ins>Cryptography</ins>
  - Randomness-on chain contract: aligning on solution + implemented proposal + implemented tests ([PR #416](https://github.com/onflow/flow-core-contracts/pull/416) in progress)
  - New cryptography stack: 
    - fix CPU-compatability issue: `Artblocks` are unblocked, root cause and long-term solutions are still ongoing (requires `Figment`'s help)
    - further optimization and docs clarifications ([PR #5](https://github.com/onflow/crypto/pull/5) merged)


* <ins>Consensus speedup:</ins>
  - completed analysis ([notion](https://www.notion.so/flowfoundation/Cruise-Control-headroom-for-speedups-46dc17e07ae14462b03341e4432a907d?pvs=4))

**This sprint**

* <ins>Zero-downtime Upgrades of Node Software:</ins>
  - Cleanup and fix tests (large!)
  - Finish smart contract to coordinate protocol upgrade ([PR #411](https://github.com/onflow/flow-core-contracts/pull/411))
  - Continue on integration tests ([draft PR #5477](https://github.com/onflow/flow-go/pull/5477))


* <ins>EFM Recovery</ins>
  - Generate data for EFM recovery (complete [PR #5576](https://github.com/onflow/flow-go/pull/5576) and potential follow-up)
  - Start on [Governance Transaction to initiate EFM recovery](https://github.com/dapperlabs/flow-go/issues/6956)


* <ins>Cryptography</ins>
   - Randomness-on chain contract: finish the implementation and update the contracts onchain
   - new cryptography stack: 
      - continue on CPU-compatability issue
      - extra build docs in all repos

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

* Blocto, Metapier, Celer have not started upgrading to C1.0, encouraging them to start asap. IncrementFi started but blocked on merging FT Standard
* Axelar is set to deploy on EVM
* Circle update contract and USDC
* IncrementFi lending, borrowing and staking multisig

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

* 

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

* 

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
- Start planning CloudFlare migration
- Finish DevEx migration to Cloud Run

**Done last sprint**

**CloudFlare Migration**
- [Develop load balancer solution for migrating existing ingresses](https://github.com/dapperlabs/terraform/pull/4187)

**DevEx Migration
- [Update module to support load balancer services and apply to staging service](https://github.com/dapperlabs/flow-devex-infrastructure/pull/138)

**GCP Project Migration**
- Migrate project containing Mainnet nodes to FF org
- Validate IAM access to nodes following migration 

**Grafana OnCall migration**
- Created Grafana teams for Grafana OnCall
- Created Esalatiton policies for Grafana OnCall
- Created on-call schedules for Grafana OnCall
- Designed split schedules for protocol team to enable flexible coverage

**Node Hosting**
- Pruned chunk data packs on Devnet ENs to reclaim disk space
- Executed dynamic bootstrap on Devnet EN3 to get node caught up 
- Pruned Devnet node logs to clean up boot disks 
- [Increase Devnet LN disk sizes](https://github.com/dapperlabs/terraform/pull/4189)
- [Update SN disk sizes for Mainnet](https://github.com/dapperlabs/terraform/pull/4189)

**Support**
- Generate credentials for QN
- Generate new KMS keys for new accounts
- Support migration network setup

**Goal of Sprint is to prepare for GCP migration to FF account** 
**This Sprint**
- Finish migrating all GCP projects and shift billing accounts for these projects
- Enable FF groups in the GCP projects for IAM shift
- Start eveluating & planning CloudFlare migration
- Finish migration to Cloud Run & deprecate clusters

---

### **Governance and Tokenomics** \[Kshitij]
Cycle Objective(s): Transaction fees on EVM, increasing transaction fees and inflation reduction plan.

**Done last sprint**

*

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
