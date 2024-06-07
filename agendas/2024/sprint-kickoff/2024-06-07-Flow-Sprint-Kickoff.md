# Overview

### Team Wins 🎉

- Crescendo migration - is now deterministic + all remaining blockers are completed.
- EVM Gateway stability issue is fixed (intermittent request timeouts).
- Completed development of EVM trace debug endpoint, unblocking EVM integrators after deployed on previewnet.
- Published [Crescendo bug bounty](https://flow.com/bounty-program).
- Transaction audit mode ready to be deployed on Mainnet next week (Tue) via HCU.
- Resumed Storehouse testing using new Unstaked EN (executing latest MN blocks).
- Updated Ledger app audit approved by 3rd-party reviewer.
- Flow Port updates: Fungible transfers, onboarding and bridging, Dynamic FLOW token transfers
- Fixed public key indexer incremental and bulk loading
- First round of reports for incorrect public function exposure for Cadence 1.0 was sent. We’re set to run this tool every week hoping to plug security holes
- Got all the basic Cadence Tutorials updated to Cadence 1.0

### General updates

### OOO
- [Full List](https://www.notion.so/flowfoundation/de89aa4e79364216a665888335a1cdee?v=4de18b26f60d4bae8f62724dddcce260)

---

### Mainnet Uptime - Last 14 days (xx/yy/24 to xx/yy/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    100%       |       0%         |
| Block Sealing           | 99.9%   |    100%       |       0%         |
| Access API Liveness     | 99.9%   |    100%       |       0%         |

[SLO dashboards](https://flowfoundation.grafana.net/d/hgW3l-m4k/slo-dashboard?orgId=1&from=now-2w&to=now)

[YTD SLA: 100%](https://app.metrika.co/flow/dashboard/slas?tr=YTD)

## Incidents

None


### Mainnet

### Testnet

(Sev [definition](https://www.notion.so/dapperlabs/Incident-Priorities-Severity-Levels-b65d7682336c46baa025ee512fd3efa3))

### Key Release Dates & Breaking Changes
- Next Mainnet/Testnet network upgrade (spork):
  - Testnet and mainnet HCU next week.
  - Testnet: 20th June 2024
  - Mainnet: 31st July 2024

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
- Features
    - Transaction audit / failure mode for missing staged contract
        - [Add dependency audit contract](https://github.com/onflow/contract-updater/pull/33)
        - [Enable dependency check for all networks](https://github.com/onflow/flow-go/pull/6026)
    - Metering values migrated per contract
        - [Report migration metrics](https://github.com/onflow/flow-go/pull/5988)
        - [Report storage traversing errors during metrics collection](https://github.com/onflow/flow-go/pull/5997)
        - [Report additional logs in metrics migration](https://github.com/onflow/flow-go/pull/6024)
- Fixes
    - [Migration problems](https://github.com/onflow/cadence/issues/3366)
        - [Assert migration order](https://github.com/onflow/flow-go/pull/5977)
        - [Make more parts of the migration deterministic](https://github.com/onflow/flow-go/pull/5979)
        - [Remove incorrect caching from migrations](https://github.com/onflow/cadence/pull/3375)
        - [Improve dictionary key migration](https://github.com/onflow/cadence/pull/3386)
    - [Use Cadence func to decide which testnet data to fix during atree migration](https://github.com/onflow/flow-go/pull/6038)
- Improvements
    - Cadence 1.0 migration optimization:
        - [Cache results of static types migration and entitlements migration](https://github.com/onflow/cadence/pull/3396)
        - [Use errgroup for concurrent account migration](https://github.com/onflow/flow-go/pull/5986)
        - [Improve dictionary value migration](https://github.com/onflow/cadence/pull/3381)
    - Atree inlining migration optimization:
        - [Port predicate func from PR 3300 to feature/atree-register-inlining-v0.42](https://github.com/onflow/cadence/pull/3394)
- Tooling
    - [Update the storage explorer to the latest version of flow-go](https://github.com/onflow/cadence/pull/3374)
    - [Add command to diff states](https://github.com/onflow/flow-go/pull/5970)

Cadence Language
- Improvements
    - [Update to Go 1.22](https://github.com/onflow/cadence/pull/3393)
    - Circle unblocker: [Allow removing type declarations from contracts](https://github.com/onflow/cadence/issues/3210)
        - [Allow types to be removed in contract updates](https://github.com/onflow/cadence/pull/3376)
    - [Move operator (<-) has higher precedence than the casting operator (v as! T)](https://github.com/onflow/cadence/issues/3372)
    - [Forbid interface removals](https://github.com/onflow/cadence/pull/3380)
    - [Remove stacktrace from errors](https://github.com/onflow/cadence/pull/3392)
    - [Improve update tool](https://github.com/onflow/cadence/pull/3395)
- Bugfixes
    - [Fix error message](https://github.com/onflow/cadence/pull/3379)
    - [Don't short circuit references on member access when entitlements are involved](https://github.com/onflow/cadence/pull/3387)
- Docs
    - [Document new `#removedType` pragma](https://github.com/onflow/cadence-lang.org/pull/107)
    - [Explain why conformance removal is not allowed](https://github.com/onflow/cadence-lang.org/pull/108)
    - [Improve explanation on interface removal restriction](https://github.com/onflow/cadence-lang.org/pull/109)

Cadence Execution
- Unstaked EN (Execution testing)
    - improve execution speed of unstaked EN
        - [Add get full collection by id api](https://github.com/onflow/flow-go/pull/5910)
        - [Add GRPC requester to fetch collections](https://github.com/onflow/flow-go/pull/5961)
        - [Add get full collection support](https://github.com/onflow/flow-emulator/pull/681)
        - [Increase guarantee buffer](https://github.com/onflow/flow-go/pull/6011)
- Improvements
    - [Update to Go 1.22](https://github.com/onflow/flow-go/pull/6037)
    - DL EN Crash investigation: [Add more information to panic](https://github.com/onflow/flow-go/pull/6003)
    - [Check checkpoint has only 1 trie before importing](https://github.com/onflow/flow-go/pull/6032)
- chores
    - Spork/HCU prep: [1](https://github.com/onflow/flow-go/pull/5975), [2](https://github.com/onflow/flow-go/pull/6022), [3](https://github.com/onflow/flow-go/pull/6034)
    - Migration preperation - dependency updates
        - Cadence: [1](https://github.com/onflow/cadence/pull/3378), [2](https://github.com/onflow/cadence/pull/3383), [3](https://github.com/onflow/cadence/pull/3390)
        - Flow-go: [1](https://github.com/onflow/flow-go/pull/5987), [2](https://github.com/onflow/flow-go/pull/5993), [3](https://github.com/onflow/flow-go/pull/6029), [4](https://github.com/onflow/flow-go/pull/6031)
        - Flow-go-sdk: [1](https://github.com/onflow/flow-go-sdk/pull/670), [2](https://github.com/onflow/flow-go-sdk/pull/672), [3](https://github.com/onflow/flow-go-sdk/pull/677), [4](https://github.com/onflow/flow-go-sdk/pull/678), [5](https://github.com/onflow/flow-go-sdk/pull/679)
        - Cadence-tools: [1](https://github.com/onflow/cadence-tools/pull/373), [2](https://github.com/onflow/cadence-tools/pull/374), [3](https://github.com/onflow/cadence-tools/pull/375), [4](https://github.com/onflow/cadence-tools/pull/378), [5](https://github.com/onflow/cadence-tools/pull/379), [6](https://github.com/onflow/cadence-tools/pull/380)
        - Emulator: [1](https://github.com/onflow/flow-emulator/pull/684), [2](https://github.com/onflow/flow-emulator/pull/687)
        - Flowkit: [1](https://github.com/onflow/flowkit/pull/57), [2](https://github.com/onflow/flowkit/pull/60)
        - Flixkit-go: [1](https://github.com/onflow/flixkit-go/pull/67), [2](https://github.com/onflow/flixkit-go/pull/69)
        - EVM Gateway: [1](https://github.com/onflow/flow-evm-gateway/pull/276), [2](https://github.com/onflow/flow-evm-gateway/pull/280)
        - CLI: [1](https://github.com/onflow/flow-cli/pull/1631), [2](https://github.com/onflow/flow-cli/pull/1638)
- Atree
    - Docs: [Update comment for NondeterministicFastCommit](https://github.com/onflow/atree/pull/412)
- Testing
    - [Fixing test case](https://github.com/onflow/flow-go/pull/6039)
    - [Add EVM batch.run load test](https://github.com/onflow/flow-go/issues/5745)
        - [Add new TPS loader load type: EVM batch transfer](https://github.com/onflow/flow-go/pull/5879)

EVM Core
- Feature
    - [Support for transactions debug](https://github.com/onflow/flow-go/issues/5952)
        - [Transaction tracer support ](https://github.com/onflow/flow-go/pull/6016)
- Improvements
    - [TotalGasUsed is 0 for blocks with direct calls and batch txs](https://github.com/onflow/flow-go/issues/5951)
        - [Calculate EVM.BlockExecuted.TotalGasUsed for Tx batch runs and COA calls](https://github.com/onflow/flow-go/pull/6015)
    - [Add the `GetErrorForCode` helper method](https://github.com/onflow/flow-go/pull/5907)
    - [EVM setup cleanup](https://github.com/onflow/flow-go/pull/5978)

EVM Gateway
- Features
    - transaction pool (handling of pending transactions) 
        - [Empty transaction pool](https://github.com/onflow/flow-evm-gateway/pull/259)
        - [Report Cadence transaction status](https://github.com/onflow/flow-evm-gateway/pull/270)
    - [Websocket rate-limiting](https://github.com/onflow/flow-evm-gateway/issues/265)
    - [Allow configuring heartbeat interval](https://github.com/onflow/flow-evm-gateway/pull/261)
    - cross-spork support
        - [Cross-spork client checks for boundaries](https://github.com/onflow/flow-evm-gateway/pull/263)
- [Make websocket support configurable](https://github.com/onflow/flow-evm-gateway/pull/266)
- Improvements
    - [Improve logging](https://github.com/onflow/flow-evm-gateway/pull/262)
    - [Requester accept EVM height](https://github.com/onflow/flow-evm-gateway/pull/268)
    - [Overwrite source address with logging](https://github.com/onflow/flow-evm-gateway/pull/272)
    - [Add request limits for JSON-RPC batch calls](https://github.com/onflow/flow-evm-gateway/pull/277)
- Bugfix
    - [Bugfix deadlock in the code](https://github.com/onflow/flow-evm-gateway/pull/269)
- Testing
    - [Improve tests for batched transactions](https://github.com/onflow/flow-evm-gateway/pull/239)
    - [Remove logging of user errors](https://github.com/onflow/flow-evm-gateway/pull/271)
- Docs
    - [Added migration net to readme](https://github.com/onflow/flow-evm-gateway/pull/275)

**This sprint**

DONE: Objective 1, KR 1: Enable Developers and the Flow Foundation to simulate Cadence 1.0 Contract upgrades
* All breaking changed released in a new CLI: v1.18.0-cadence-v1.0.0-preview.26

IN PROGRESS: Objective 1, KR4: Testnet Upgrade to Crescendo Release
* Completed Testnet migration with both Atree inlining and Cadence 1.0.
* Completed [EVM Gateway development](https://github.com/onflow/flow-evm-gateway/issues/126) and [EVM Core development](https://github.com/onflow/flow-go/issues/5536) production readiness EPICs.
* Continue work on migration optimizations.
* Investigate / Fix any security report incoming from bug bounty.
* Finish implementation of remaining EVM Gateway blockers: [1](https://github.com/onflow/flow-evm-gateway/issues/250), [2](https://github.com/onflow/flow-go/issues/5983)

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

* Provide developers secure and non-rate limited way to access all of chain data (transactions, blocks, account balance, events, account balance etc) by locally running an access or an observer node
* Reduce CPU usage on Execution node by 30% [GOAL MODIFIED]
* Translate crypto performance improvements to consensus block rate increase [DONE]
* Continue design and implementation of Sporkless Epoch Fallback Recovery solution [DONE]

**Done last Sprint:**

* <ins>EFM Recovery</ins>
  - Continued https://github.com/onflow/flow-go/issues/5727
  - [Continued Epoch manager QC voting changes](https://github.com/onflow/flow-go/issues/5733) (implementing tests)
  - Ongoing review by SC team: [EpochRecover cadence transaction](https://github.com/onflow/flow-core-contracts/pull/420)
  - [EpochRecover service event processing](https://github.com/onflow/flow-go/issues/5727) 

* <ins>Data Availability:</ins>
  - [Started RegistersDB pruning design](https://github.com/onflow/flow-go/issues/5761)
  - KROK Team
    - Fix event hashing CCF ([PR #53](https://github.com/onflow/rosetta/pull/53), [PR #62](https://github.com/onflow/rosetta/pull/62))
    - Add indexed height to API response metadata ([PR #5832](https://github.com/onflow/flow-go/pull/5832))
    - Fix flaky access tests([PR #6014](https://github.com/onflow/flow-go/pull/6014), [PR #5953](https://github.com/onflow/flow-go/pull/5953))

* <ins>Rosetta:</ins>   
  - KROK Team
    - [Rosetta event hash check](https://github.com/onflow/rosetta/issues/41)
  - DistributedLab
    - Completed initial review of Rosetta for EVM on Flow

* <ins>Cryptography:</ins>
   - SPoCK aggregation: looked into zk KOSK and its role in the security proof
   - Reviewed crypto updates on go v1.22 and update the crypto repo
   - Reviewed last details on EVM randomness

* <ins>Other:</ins>   
  - Started high level 2-pager of public roadmap & vision for protocol decentralization & permissionless consensus on Flow
  - Resumed detailed technical content piece for public roadmap & vision for protocol decentralization; current challenges and upcoming updates for permissionless consensus on Flow.

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
* PR to backfill of missing crypto algos to JVM SDK ready for review
* Reviewed BLS PR for JVM-SDK
* Onboarding kickoff meeting for ANKR for Liquid Staking on EBM

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

**Crescendo Rewards**
- Deployed Crescendo Rewards BE to cloudrun
- Setup next application with component library: https://github.com/onflow/crescendo-rewards/issues/2
- Create header component: https://github.com/onflow/crescendo-rewards/issues/3
- Create total rewards component with mock data: https://github.com/onflow/crescendo-rewards/issues/4
- Create days until launch component: https://github.com/onflow/crescendo-rewards/issues/5
- Create leaderboard component with mock data: https://github.com/onflow/crescendo-rewards/issues/6
- Create navigation and hook up routes: https://github.com/onflow/crescendo-rewards/issues/7
- Create home page: https://github.com/onflow/crescendo-rewards/issues/8
- Create rewards page: https://github.com/onflow/crescendo-rewards/issues/9
- Create rewards earned component with mock data: https://github.com/onflow/crescendo-rewards/issues/10
- Create lock more component with mock data: https://github.com/onflow/crescendo-rewards/issues/11
- Create partner page with mock data: https://github.com/onflow/crescendo-rewards/issues/12
- Create partner card component with mock data: https://github.com/onflow/crescendo-rewards/issues/13 
- Setup fastify server: https://github.com/onflow/crescendo-rewards-be/issues/2
- Setup drizzle orm with postgres: https://github.com/onflow/crescendo-rewards-be/issues/3
**Flow Port**
Flow Port, FLOW transfers https://github.com/onflow/flow-port/issues/289
Flow Port, FLOW Token balances, https://github.com/onflow/flow-port/issues/285
**Docs**
- Updated basic Cadence tutorials to 1.0: https://github.com/onflow/docs/issues/769
**Misc Bugs and Issues**
- Bug: fix preview chain not known https://github.com/onflow/flow-cli/issues/1592 
- "Commit" broken in flow version https://github.com/onflow/flow-cli/issues/1639 
- Cadence plugin failed to be activated in the latest VSCode https://github.com/onflow/vscode-cadence/issues/626
- Cannot start EVM gateway https://github.com/onflow/flow-cli/issues/1620 
- Fix for CLI Version https://github.com/onflow/flow-cli/issues/1626

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

- Completed version 2.2 of Flow Wallet with EVM Support! 🎉
  - Releasing early next week

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

**CloudFlare Migration**
- [Created workflows for deploying CAST to Cloud Run](https://github.com/onflow/CAST/pull/28)
- [Created infrastructure for running CAST on Cloud Run](https://github.com/dapperlabs/flow-devex-infrastructure/pull/155)
- Backed up resources from CAST Cluster
- Continued working with reps to get quotes for new plan
 
**Node Hosting**
- [Update Mainnet AN instance sizes](https://github.com/dapperlabs/terraform/pull/4246)
- Reclaim disk space through CDP deletion on Mainnet DL nodes
- Reclaim disk space through CDP deletion on Previewnet nodes

**Sporks**
- [Scale down Devnet49 & Snapshot disks](https://github.com/dapperlabs/terraform/pull/4251)

**EVM Gateway**
- [Create bucket for execution traces](https://github.com/dapperlabs/terraform/pull/4258)
- [Add rate limiting support to EVM Gateway](https://github.com/dapperlabs/dapper-flow-hosting/pull/1509)

**Support**
- [Remove unnecessary scrape job from Prometheus](https://github.com/dapperlabs/dapper-flow-hosting/pull/1518)
- [Remove Krok instance](https://github.com/dapperlabs/terraform/pull/4255)
- Assist with creation and configuration isolated Devnet EN for testing
- Assist with creation and configuration isolated Mainnet EN for testing
- Assist with configuration of script execution on Studio nodes

**Goal of this Sprint is to continue migration efforts** 
**This Sprint**
- Assist with migration and spork prep efforts
- Continue removing dependencies on CloudFlare & assist with account creation
- Continue assisting with DevEx migration to Cloud Run

---

### **Governance and Tokenomics** \[Kshitij]
Cycle Objective(s): Transaction fees on EVM, increasing transaction fees and inflation reduction plan.

**Done last sprint**
- Kicked off Flowty's consensus node and 4 FF nodes - all operated via Figment
- Computation limit FLIP discussed and accepted
- Transaction fee partner impact discussion with working group leaders and partners. See [go/no-go doc](https://www.notion.so/flowfoundation/Go-No-go-on-transaction-fee-100x-15e70eebe0254aefb4bf78bf901edc75)
- Data crunching for post-Crescendo fee estimates for typical NFT transfer. See [sheet](https://docs.google.com/spreadsheets/d/1XRZD65Ni9CaSNbcWYERdLRwf85ALN5ArBOYFV1LV9LY/edit#gid=0)
- Governance monthly working group meeting

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
