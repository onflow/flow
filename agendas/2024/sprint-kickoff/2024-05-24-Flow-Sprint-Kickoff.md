# Overview

### Team Wins 🎉

- [EVM FLIP](https://github.com/onflow/flips/pull/272) is approved and accepted.
- Crescendo state migration on MN state reduced from ~37 to ~5 hours total migration time
- Successfully deployed Crescendo readiness audit on Testnet - execution mode where transactions importing unstaged contracts fail with error message linking to upcoming Crescendo release.
- Released all Cadence language breaking changes in both flow-go release used for migration and CLI.
- Deployed new execution node ingestion engine to Mainnet (enabled on one EN) and so far running successfully for the last ~2 weeks. This enables us to boot EN anywhere in the spork and it will catch up, while previously it would crash if it was too far behind.
- Successfully upgraded previewnet to latest flow-go master and got EVM working End-End.
- Successfully got the EVM Gateway working on Migration environment.
- Released Foundry guide for EVM
- Deployed multicall smartcontract to EVM previewnet and integrated it with viem
- Proved out onboarding and bridging EVM FT to Cadence and bridging Cadence FT to EVM in Flow Port.
- Updated  FT, NFT, and metadata views guides to Cadence 1.0
- Finished Cadence 1.0 changes for NFTStorefront and included it in testnet migrations
- CLI Staging Imjprovements: Added ability to stage & validate entire project in one command to CLI, Warn users if staged contracts are no longer valid in the CLI when running commands



### General updates

### OOO
- [Full List](https://www.notion.so/flowfoundation/de89aa4e79364216a665888335a1cdee?v=4de18b26f60d4bae8f62724dddcce260)

---

### Mainnet Uptime - Last 14 days (05/10/24 to 05/23/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    99.95%     |       49.6%      |
| Block Sealing           | 99.9%   |    100%       |       0%         |
| Access API Liveness     | 99.9%   |    99.919%    |       81.0%      |

[SLO dashboards](https://flowfoundation.grafana.net/d/hgW3l-m4k/slo-dashboard?orgId=1&from=now-2w&to=now)

[YTD SLA: 100%](https://app.metrika.co/flow/dashboard/slas?tr=YTD)

## Incidents

## Core protocol incidents

### Mainnet
- May 10th: Sev-2 - Execution stopped on FlowFoundation execution nodes for ~5 mins. Root cause: All FF nodes in `us-central` seem to have gone down for a few minutes. Postmortem available [here](https://www.notion.so/flowfoundation/Mainnet-GCP-Network-Outage-5-10-f2c2380ab5454481b8170836bf64db6c?pvs=4#f7981c0fc3b54ccc9c64ae8470b9788f)
- May 10th: Sev-3 - EN1 failed to restart (part of the same issue ☝️)
- May 19th: Sev-3 - EN1 crashed. Currently being investigated: https://github.com/onflow/flow-go/issues/5956.

### Testnet
- May 20th: Sev-1 - ENs on testnet forked and sealing halted. Testnet underwent a network upgrade (spork) [Slack thread](https://dapperlabs.slack.com/archives/CUU2KQL4A/p1716230568407649)

(Sev [definition](https://www.notion.so/dapperlabs/Incident-Priorities-Severity-Levels-b65d7682336c46baa025ee512fd3efa3))

### Key Release Dates & Breaking Changes
- Next Mainnet/Testnet network upgrade (spork):
  - Testnet: 20th June 2024
  - Mainnet: 29th July 2024
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

State migration for Crescendo release

- Optimizatins
  - [Add Payload.Address() to allow migrations, etc. to reduce overhead](https://github.com/onflow/flow-go/pull/5948)
  - [Disable spock proof generation for migrations](https://github.com/onflow/flow-go/pull/5920)
  - [Use faster atree funcs to speedup Cadence 1.0 migration](https://github.com/onflow/flow-go/pull/5916)
  - [Add Storage.NondeterministicCommit for faster migrations](https://github.com/onflow/cadence/pull/3348)
  - [Optimize creation of new payloads](https://github.com/onflow/flow-go/pull/5914)
  - [Optimize Cadence v0.42 + atree inlining migration](https://github.com/onflow/flow-go/pull/5913)
  - [Optimize the Cadence 1.0 migration](https://github.com/onflow/flow-go/pull/5897)
  - [Improve scheduling in account-based migration](https://github.com/onflow/flow-go/pull/5901)
  - Atree - [Add NonderterministicFastCommit to speed up migrations when ordering isn't required](https://github.com/onflow/atree/pull/403)
  - Atree - [Add BatchPreload to decode slabs in parallel and cache](https://github.com/onflow/atree/pull/404)
- Updates
  - [Update or deploy EVM contract, depending on chain](https://github.com/onflow/flow-go/pull/5915)
  - [Include NFTStorefrontV2 in the testnet migrations](https://github.com/onflow/flow-go/issues/5963)
      - [Stage contract update for NFTStorefrontV2 on Testnet](https://github.com/onflow/flow-go/pull/5964)
-Bugfixes
  - [Fix string formatting for values](https://github.com/onflow/cadence/pull/3370)
  - [Handle missing interfaces in Cadence 1.0 contract update validator](https://github.com/onflow/cadence/pull/3337)
  - [Fix Cadence 1.0 migration error when address is used as register owner](https://github.com/onflow/flow-go/pull/5929)
  - [Gracefully recover from panics encountered during contract update validation](https://github.com/onflow/flow-go/pull/5935)
  - [Allow export of global registers (owner is empty string)](https://github.com/onflow/flow-go/pull/5939)
- Testing
-   [Test registers data structure](https://github.com/onflow/flow-go/pull/5949)

Cadence Language

- Improvement
  - Language breaking change: [Return a copy for enum-typed members, during member-access via references](https://github.com/onflow/cadence/pull/3357)
  - [Allow construction of paths with syntactically invalid identifiers](https://github.com/onflow/cadence/pull/3338)
  - [Add invalidation for storage references](https://github.com/onflow/cadence/pull/3343)
- Security Improvements
  - Language breaking change: [Resource methods can be separated/moved-around as a function pointer](https://github.com/dapperlabs/cadence-internal/issues/213)
  - Language breaking change: [Moving of contract and transaction variable is not statically rejected](https://github.com/dapperlabs/cadence-internal/issues/217)
- Bugfix
  - [Fix restricted type checking in contract-update-validator](https://github.com/onflow/cadence/pull/3352)
  - [Check dictionary keys when checking the ability for dereferencing](https://github.com/onflow/cadence/pull/3339)
  - [Wrap host-function typed member-values with a bound-function](https://github.com/onflow/cadence/pull/3342)
- Docs
  - [Update section about validator entitlement computation](https://github.com/onflow/cadence-lang.org/pull/104)
- Testing
  - [Add back transaction execute tests](https://github.com/onflow/cadence/pull/3345)

Cadence Execution

- [Transaction audit / failure mode for missing staged contract](https://github.com/onflow/flow-go/issues/5858)
    - [Add a dependency check for cadence imports](https://github.com/onflow/flow-go/pull/5908)
    - bugfixes
        - [Fix comparison of payload addresses, handle empty address](https://github.com/onflow/flow-go/pull/5942)
        - [Fix FVM call to checkDependencies](https://github.com/onflow/flow-go/pull/5957)
- Unstaked Execution node (EN testing)
    - [Add get full collection by id api](https://github.com/onflow/flow/pull/1463)
- New Ingestion engine
    - [Add ingestion core tests](https://github.com/onflow/flow-go/pull/5871)
- Improvements
  - Atree: [Allow detection and logging on mutation of elements returned by readonly iterators](https://github.com/onflow/atree/issues/409)
  - [Fix missing mock generation](https://github.com/onflow/flow-go/pull/5928)
  - [move FlowClient to grpcclient package](https://github.com/onflow/flow-go/pull/5962)
- Bugfixes
  - Long running bug causing execution to stall [Fix requester engine's optimization](https://github.com/onflow/flow-go/pull/5941)
  - [Fix get highest executed and finalized height](https://github.com/onflow/flow-go/pull/5903)
  - [Fix Util to find execution result mismatch](https://github.com/onflow/flow-go/pull/5890)
- chores
  - Spork/HCU prep: [1](https://github.com/onflow/flow-go/pull/5895), [2](https://github.com/onflow/flow-go/pull/5896), [3](https://github.com/onflow/flow-go/pull/5889), [4](https://github.com/onflow/flow-go/pull/5940)
  - Dependency updates
      - Cadence: [1](https://github.com/onflow/cadence/pull/3344), [2](https://github.com/onflow/cadence/pull/3346), [3](https://github.com/onflow/cadence/pull/3347), [4](https://github.com/onflow/cadence/pull/3351), [5](https://github.com/onflow/cadence/pull/3359), [6](https://github.com/onflow/cadence/pull/3364), [7](https://github.com/onflow/cadence/pull/3365)
      - flow-go: [1](https://github.com/onflow/flow-go/pull/5921), [2](https://github.com/onflow/flow-go/pull/5925), [3](https://github.com/onflow/flow-go/pull/5926), [4](https://github.com/onflow/flow-go/pull/5930), [5](https://github.com/onflow/flow-go/pull/5931), [6](https://github.com/onflow/flow-go/pull/5946), [7](https://github.com/onflow/flow-go/pull/5950), [8](https://github.com/onflow/flow-go/pull/5965), [9](https://github.com/onflow/flow-go/pull/5966)
      - flow-go-sdk: [1](https://github.com/onflow/flow-go-sdk/pull/653), [2](https://github.com/onflow/flow-go-sdk/pull/654), [3](https://github.com/onflow/flow-go-sdk/pull/655)
      - cadence tools: [1](https://github.com/onflow/cadence-tools/pull/369), [2](https://github.com/onflow/cadence-tools/pull/370), [3](https://github.com/onflow/cadence-tools/pull/371)
      - emulator: [1](https://github.com/onflow/flow-emulator/pull/678)
      - flowkit: [1](https://github.com/onflow/flowkit/pull/51)
      - flixkit-go: [1](https://github.com/onflow/flixkit-go/pull/66)
      - evm-gw: [1](https://github.com/onflow/flow-evm-gateway/pull/252)
      - CLI: [1](https://github.com/onflow/flow-cli/pull/1608)

EVM Gateway

- Features
  - [Handle cross-spork access](https://github.com/onflow/flow-evm-gateway/issues/229)
      - [Multi-spork client access support](https://github.com/onflow/flow-evm-gateway/pull/230)
- Hardening / Improvements
  - [Multi-key account creation process improvements](https://github.com/onflow/flow-evm-gateway/pull/249)
  - [Improve event testing](https://github.com/onflow/flow-evm-gateway/pull/240)
  - [Improve crash reporting](https://github.com/onflow/flow-evm-gateway/issues/236)
- bugfix
  - [Fix decoding blocks with no total gas used](https://github.com/onflow/flow-go/pull/5872)
- Ops chores
  - [1](https://github.com/dapperlabs/dapper-flow-hosting/pull/1500), [2](https://github.com/onflow/flow-evm-gateway/pull/255), [3](https://github.com/onflow/flow-evm-gateway/pull/257), [4](https://github.com/onflow/flow-evm-gateway/pull/258)

EVM Core

- [Add support for revertible random](https://github.com/onflow/flow-go/issues/5862)
- Hardening / Improvements
  - [Use hex-encoded address as event values for better readability](https://github.com/onflow/flow-go/issues/5911)
  - [Support decoding of all previous block types](https://github.com/onflow/flow-go/pull/5875)
- Bugfix
  - [EVM.dryRun method inconsistent behavior for certain errors](https://github.com/onflow/flow-go/issues/5902)

**This sprint**

DONE: Objective 1, KR 1: Enable Developers and the Flow Foundation to simulate Cadence 1.0 Contract upgrades
* All breaking changed released in a new CLI: v1.18.0-cadence-v1.0.0-preview.24 

IN PROGRESS: Objective 1, KR4: Testnet Upgrade to Crescendo Release
* Completed Testnet migration with both Atree inlining and Cadence 1.0.
* Completed [EVM Gateway development](https://github.com/onflow/flow-evm-gateway/issues/126) and [EVM Core development](https://github.com/onflow/flow-go/issues/5536) production readiness EPICs.
* Continue work on migration optimizations.

IN PROGRESS: Objective 2, KR 1: Update transaction fees weights for the execution operations on TN and MN
* Continue work on [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)

DONE: Objective 4, KR1: Execution node handles restart from spork root block reguardless of how many blocks it is behind
* Completed refactoring of Ingestion engine to [prevent EN entering crash loop](https://github.com/onflow/flow-go/issues/5298)

ON HOLD: Objective 3: Analyze execution runtime trends and risks to plan next set of scalability OKRs
* Continue work on making [Make TPS loader input more flexible](https://github.com/onflow/flow-go/issues/5490) for better analysis and tracking of performance data.

ON HOLD: * Start Atree optimization: [Adding support for lazy decoding of registers](https://github.com/onflow/atree/issues/341)

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

* <ins>Data Availability:</ins>
  - KROK Team
    - Add increment method for monotonic counter ([PR #5814](https://github.com/onflow/flow-go/pull/5814))
    - Support serving system tx result from local index ([PR #5802](https://github.com/onflow/flow-go/pull/5802))
    - Allow dynamic bootstrapped ANs to index execution data ([PR #5888](https://github.com/onflow/flow-go/pull/5888))

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
  - Redeploy local index and script exec on QN bare metal instances
  - Start design work for DB pruning
  - KROK Team
    - Fix retries when using preferred-execution-nodes list ([Issue #5810](https://github.com/onflow/flow-go/issues/5810))
    - Update rosetta for Crescendo ([Issue #52](https://github.com/onflow/rosetta/issues/52))
    - Fix rosetta event hash check ([Issue #41]( https://github.com/onflow/rosetta/issues/41))
    - Add support for version beacon events to control script execution ([Issue #5757](https://github.com/onflow/flow-go/issues/5757))
    - Fix Access integration test ([Issue #5825](https://github.com/onflow/flow-go/issues/5825) - PR in review)
    - Add indexed height indicator in grpc metadata response ([Issue #4757](https://github.com/onflow/flow-go/issues/4757) - PR in review)

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

**CloudFlare Migration**
- [ Migrated Hardware wallet API to Cloud Run](https://github.com/dapperlabs/flow-devex-infrastructure/pull/153)
- Backed up & removed unnecessary resources from Gen2 cluster
- Identified CloudFlare resources 
- Started process with CloudFlare to create new account & get quotes

**Sporks**
- [Created infrastructure for Devnet50 spork](https://github.com/dapperlabs/terraform/pull/4242)
- [Create Ansible Configuration](https://github.com/dapperlabs/dapper-flow-hosting/pull/1501)
- [Scale down Devnet49 network](https://github.com/dapperlabs/terraform/pull/4245)
- Assisted with Devnet50 spork execution
- Assisted with Previewnet spork(s) execution

**Node Hosting**
- [Scale up Mainnet Studio ANs to alleviate memory issues](https://github.com/dapperlabs/terraform/pull/4235)
- [Scale up Mainnet ANs to alleviate memory issues](https://github.com/dapperlabs/terraform/pull/4246)

**EVM Gateway**
- [Update Prometheus to scrape EVM Gateway]((https://github.com/dapperlabs/dapper-flow-hosting/pull/1507)
- [Updated EVM Gateway firewall to allow envoy scraping](https://github.com/dapperlabs/terraform/pull/4247)

**Support**
- [Create new KMS key for node operations](https://github.com/dapperlabs/terraform/pull/4240)
- [Migrate port.onflow.org to port.flow.com](https://github.com/dapperlabs/terraform/pull/4248)
- [Redirect port.onflow.org to port.flow.com](https://github.com/dapperlabs/terraform/pull/4249)

**Goal of this Sprint is to continue migration efforts** 
**This Sprint**
- Continue removing dependencies on CloudFlare & assist with account creation
- Continue assisting with DevEx migration to Cloud Run
- Improve synthetic alerting 
- Assist with migration and spork prep efforts

---

### **Governance and Tokenomics** \[Kshitij]
Cycle Objective(s): Transaction fees on EVM, increasing transaction fees and inflation reduction plan.


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
