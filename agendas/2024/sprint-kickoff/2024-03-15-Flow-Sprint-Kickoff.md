# Overview

 ### Team Wins 🎉
 
 * 

--- 

### Mainnet Uptime - Last 14 days (xx/xx/24 to xx/xx/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    100%       |       0%         |
| Block Sealing           | 99.9%   |    100%       |       0%         |
| Access API Liveness     | 99.9%   |    99.97%     |       32.2%      |

#### Incidents
* 

---

### FLIPs Tracker \[Kshitij]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 7  |    6    |       0          |       5          |        **18**          |
| Proposed    | 3  |    1     |       2          |       1          |        **7**          |
| Accepted    | 2  |    1     |       1       |       2          |        **6**          |
| Rejected    | 0  |    0     |       1       |       0          |        **1**          |
| Implemented | 1  |    19    |       1       |       0          |        **21**          |
| Released    | 4  |    0     |       2       |       4          |        **10**          |
| Total       | **17**  |    **27**    |       **7**       |       **12**          |        **63**          |

- Overall FLIPs went up by 4 vis-a-vis last month (2 new application FLIP was drafted, while 2 moved from proposed status)
- Some FLIPs are still not reflected in the project tracker. **Remember**: FLIP process starts with an issue creation.
(https://github.com/onflow/flips?tab=readme-ov-file#submitting-the-flip)
  
### Key Release Dates & Breaking Changes

- Next Mainnet/Testnet network upgrade (spork): End of Feb - Crescendo update, Testnet and mainnet sporks TBD.
- Next Mainnet/Testnet HCU: Testnet HCU - Monday, 5th Feb, Mainnet HCU - Wednesday, 7th Feb.
- End of Cycle:

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

* 

**This sprint**

* 

**On Hold**

Objective 2: Calibrate Transaction fees so that they accurately reflect resource usage during execution and deploy as part of Crescendo to avoid future disruption
- KR1: Update weights for the execution operations on TN and MN
  - [Execution effort recalibration - data collection](https://github.com/onflow/flow-go/issues/5026)


**Active Epics**

Objective 1: Upgrade Mainnet to Crescendo Release with minimal impact on developers, to lower the barrier for cross chain liquidity on Flow
- KR1: Enable Developers and the Flow Foundation to simulate Cadence 1.0 Contract upgrades
- KR2: Launch Cadence 1.0 on Crescendo Testnet
- KR3: Launch EVM on Crescendo Testnet
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
* Data Availability
  * KROK team
    * [Add implementation for usage of the local transaction result in Access API](https://github.com/onflow/flow-go/pull/5306)
    * [Add support for indexing execution data on Observers](https://github.com/onflow/flow-go/pull/5256)
    * [Add state streaming API to observers](https://github.com/onflow/flow-go/pull/5368)
    * [Implement gRPC streaming endpoint SubscribeBlocks](https://github.com/onflow/flow-go/pull/5307)
    * [Emulator - Subscribe endpoint is missing](https://github.com/onflow/flow-emulator/pull/593)

**This sprint**

* EFM Recovery
  * Merge KV store state machine PR
  * Integrate state machine with the higher level logic: https://github.com/onflow/flow-go/issues/5319
  * Integrating KV Store state machine into upgrade integration tests (extending https://github.com/onflow/flow-go/pull/5477)
  * Finalizing smart contract changes https://github.com/onflow/flow-core-contracts/pull/411
* Data Availability
  * KROK team - merge remaining Event streaming PRs which are nearly done
    * [SendAndSubscribeTransactionStatuses endpoint implementation for Access Streaming API](https://github.com/onflow/flow-go/pull/5310)
    * [Add standard Access API implementations on Observer](https://github.com/onflow/flow-go/pull/5358)
    * [Benchmark testing and analysis of execution data indexing on Observers](https://github.com/onflow/flow-go/issues/4849)

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
- Bring Cadence 1.0 to market as part of the Crescendo release to minimize customer impact and developer effort
- Bring EVM on Flow to Market as part of the Crescendo release to increase liquidity and bring top-tier developer platforms to our network
- Use the Crescendo Release grow Flow's developer base and network activity

**Done last sprint**

*

**This sprint**

**Sprint goal focusing on adding docs and tool support for Crescendo network and Cadence 1.0**

- [Add Crescendo network support to FCL Discovery](https://github.com/orgs/onflow/projects/13/views/85?pane=issue&itemId=50332654)
- [Add Crescendo Network to CLI (config, cmds, docs, etc)](https://github.com/orgs/onflow/projects/13/views/85?pane=issue&itemId=50297186)
- [Add/Publish Initial EVM Docs](https://github.com/orgs/onflow/projects/13/views/85?pane=issue&itemId=51952883)
- [Docs Revamp v3](https://github.com/orgs/onflow/projects/13/views/85?pane=issue&itemId=49327073)
- [Add C1.0 Rules to Cadence Linter](https://github.com/orgs/onflow/projects/13/views/85?pane=issue&itemId=51952640)
- [Update Playground to support Cadence 1.0](https://github.com/orgs/onflow/projects/13/views/85?pane=issue&itemId=49844013)
- [Stable Cadence Installation Workflow](https://github.com/orgs/onflow/projects/13/views/85?pane=issue&itemId=51951905)


**On Hold**

- [Update Flowport for Cadence Crescendo instance](https://github.com/orgs/onflow/projects/13/views/85?pane=issue&itemId=51960824)

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

**Done last sprint**

* 

**This sprint**

**Goal of Sprint is to migrate from DapperLabs account to FlowFoundation account** 

* 

**On Hold**
**Active Epics**

---

### **Governance and Tokenomics** \[Vishal]
Cycle Objective(s): Transaction fees on EVM, increasing transaction fees and inflation reduction plan.

**Done last sprint**

*

**This sprint**

- Research transaction fees on other L1s
- Research Transaction fees for Flow EVM.


**On Hold**

- N/A


**Active Epics**

- N/A
