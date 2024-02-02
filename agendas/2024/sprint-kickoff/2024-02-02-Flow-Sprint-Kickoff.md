# Overview

 ### Team Wins 🎉
 
 * ABI.encode/decode() functional subset of EVM work was deployed to testnet to unblock Axelar integration

- 

### Mainnet Uptime - Last 14 days (DD/MM/YY to DD/MM/YY) - Vishal

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    100%       |       0%         |
| Block Sealing           | 99.9%   |    100%       |       0%         |
| Access API Liveness     | 99.9%   |    100%       |       0%         |

#### Incidents
- 


# Working Group Updates

### **Cadence and Virtual Machine** Jan
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

- Mainnet HCU preparation
  - Chore: [update to cadence v0.42.8-patch.2](https://github.com/dapperlabs/flow-go/issues/6942)
  - Bugfix: [Internal issue #193](https://github.com/dapperlabs/cadence-internal/issues/193)
  - Bugfix: [Internal PR #197](https://github.com/dapperlabs/cadence-internal/pull/197)
  - Bugfix: [Internal PR #195](https://github.com/dapperlabs/cadence-internal/pull/195)
  - Bugfix: [Internal issue #189](https://github.com/dapperlabs/cadence-internal/issues/189)
  - Work towards: [Internal issue #192](https://github.com/dapperlabs/cadence-internal/issues/192)
    - [Internal PR #196](https://github.com/dapperlabs/cadence-internal/pull/196)
  - Bugfix: [UUID partition change - port](https://github.com/onflow/flow-go/pull/5287)

- Atree register inlining migration
  - [Remove cricket moments references from atree migration](https://github.com/onflow/flow-go/pull/5242)
  - [v0.42-based atree inlining - Update to latest atree](https://github.com/onflow/cadence/pull/3044)
  - addressing review comments: [Atree Migration cleanup](https://github.com/onflow/flow-go/issues/5284)
  - preparing image based on Cadence v0.42: [Merge v0.42 into atree inlining feature branch](https://github.com/onflow/cadence/issues/3040)
  - [Add feature to support mutation of primitive values returned by iterators](https://github.com/onflow/atree/issues/356)
  - [Handle edge cases needed to support mutation of inlined maps and arrays during iteration](https://github.com/onflow/atree/issues/357)
  - [Atree storage migration](https://github.com/onflow/flow-go/pull/4633)

- Cadence 1.0 migrations
  - Work towards: [Enable state migration on emulator](https://github.com/onflow/cadence/issues/3063)
    - [Gracefully handle runtime panics in migration](https://github.com/onflow/cadence/pull/3066)
  - Bugfix: [Fix entitlements migration](https://github.com/onflow/cadence/issues/3065)
  - [Run type checker for staged contracts](https://github.com/onflow/cadence/issues/3062)
  - [Add migration for staged contract upgrades](https://github.com/onflow/cadence/issues/3038)
  - Work towards: [Migrations for core contract changes](https://github.com/onflow/cadence/issues/3007)
    - [Cadence 1.0 state migrations: Update to new static types migration](https://github.com/onflow/flow-go/pull/5286)
    = [Generalize static type migrations](https://github.com/onflow/cadence/pull/3033)
  - [Migration for core contracts](https://github.com/onflow/cadence/issues/2989)
  - Updating migrations after v2 token standards breakout: [Fix gaps in migrations](https://github.com/onflow/cadence/pull/3036)
  - [Integrate Cadence 1.0 Migrations into FVM](https://github.com/onflow/cadence/issues/2990)
  - [Integrate new version of Atree with register inlining and data deduplication](https://github.com/onflow/cadence/issues/2809)

- Cadence 1.0 Features & Improvements
  - [Analyze usage of restricted keywords in composite fields on Mainnet](https://github.com/onflow/cadence/issues/2998)
  - [Error messages with authorizations are syntactically invalid](https://github.com/onflow/cadence/issues/3047)
  - [Allow dereferencing references to containers of non-resources](https://github.com/onflow/cadence/pull/3034)
  - Bugfix: [Remove Insert-entitled access for toVariableSized](https://github.com/onflow/cadence/pull/3031)
  - Testing: [Test usage of potentially broken types(https://github.com/onflow/cadence/pull/3030)]
  - Implementtion of [FLIP #941](https://github.com/onflow/flips/blob/main/cadence/20220516-reference-creation-semantics.md): [Require explicit type annotation for arguments passed to authorized reference parameters](https://github.com/onflow/cadence/pull/3023)

- Cadence 1.0 migrations testing in emulator
  - Work towards: [Enable testing of contract update to Cadence 1.0 in Emulator](https://github.com/onflow/cadence/issues/2947)
    - [Add config option to allow upgrading legacy contracts](https://github.com/onflow/flow-emulator/issues/553)
    - [Use old parser for contract upgrades when legacy upgrade config option is set](https://github.com/onflow/cadence/issues/3043)
    - [Add v0.42 parser package under old_parser](https://github.com/onflow/cadence/pull/3039)

- Work towards Cadence 1.0 new CLI release
  Fixing dependencies:
  - CLI:
    - [use proper version of core contracts](https://github.com/onflow/flow-cli/issues/1369)
    - [Update Stable Cadence feature branch to Cadence v1.0.0-M4](https://github.com/onflow/flow-cli/issues/1366)
  - Flowser: [Update Stable Cadence feature branch to Cadence v1.0.0-M4](https://github.com/onflowser/flowser/issues/223)
  - Flixkit-go:
    - [Update Stable Cadence feature branch to Cadence v1.0.0-M4](https://github.com/onflow/flixkit-go/issues/36)
    - [Update Stable Cadence feature branch with main](https://github.com/onflow/flixkit-go/issues/35)
  - Cadence-tools:
    - [LS - Update to Cadence v1.0.0-M4](https://github.com/onflow/cadence-tools/issues/278)
    - [test - Update to Cadence v1.0.0-M4](https://github.com/onflow/cadence-tools/issues/277)
    - [lint - Update to Cadence v1.0.0-M4](https://github.com/onflow/cadence-tools/issues/276)
  - flow-go:
    - [Update stable cadence feature branch](https://github.com/onflow/flow-go/issues/5290)
    - [Sync stable-cadence branch with master](https://github.com/onflow/flow-go/issues/5260)
    - [update cadence version](https://github.com/dapperlabs/flow-go/issues/6937)
  - flow-go-sdk:
    - [Merge Cadence 1.0 (aka "Stable Cadence") feature branch](https://github.com/onflow/flow-go-sdk/issues/563)
    - [Update to Cadence v1.0.0-M3](https://github.com/onflow/flow-go-sdk/issues/562)
  - flow emulator: [Update cadence version](https://github.com/onflow/flow-emulator/issues/552)
  - flow-core-contracts: [Update Cadence version](https://github.com/onflow/flow-core-contracts/issues/406)
  - flow-nft: [Update Cadence version](https://github.com/onflow/flow-nft/issues/201)

- Partial EVM launch on MN HCU
  - Also ported to flow-go v0.33 branch: [Set the correct testnet/mainnet evm state storage account](https://github.com/onflow/flow-go/pull/5294)
  - port of: [Use correct EVM address in tests and transient networks](https://github.com/onflow/flow-go/pull/5255) and [Add feature flag for deploying EVM contract only with ABI functionality](https://github.com/onflow/flow-go/pull/5230): [Add feature flag for deploying EVM contract only with ABI functionality](https://github.com/onflow/flow-go/pull/5264)

- EVM
  - [Flow EVM Core Implementation](https://github.com/onflow/flow-go/issues/5241)
    - [adding toAttoFlow method to EVM.Balance](https://github.com/onflow/flow-go/issues/4961)
    - [Investigate possibility of use Flow block random seed for the EVM PREVRANDAO](https://github.com/onflow/flow-go/issues/5207)
    - [deposit calls to regular smart contracts expects different behaviour](https://github.com/onflow/flow-go/issues/5227)
    - [new address allocation for the bridged accounts](https://github.com/onflow/flow-go/issues/5179)
    - [mix use of uint64 and *big.Int for tracking balances](https://github.com/onflow/flow-go/issues/5222)
    - [Update stateDB code storage to store by hash](https://github.com/onflow/flow-go/issues/5198)
    - [Expose core FVM functions as a precompile contract](https://github.com/onflow/flow-go/issues/5199)
    - Work towards:[Add support for other chains to RootAccountAddress](https://github.com/onflow/flow-go/issues/4964) and [Improvements to EVM bootstrap setup](https://github.com/onflow/flow-go/issues/4959)
      - [Use correct EVM address in tests and transient networks](https://github.com/onflow/flow-go/pull/5255)
    - [Empty ParentBlockHash for new blocks](https://github.com/onflow/flow-go/issues/5219)
    - [Add EVM event type](https://github.com/onflow/flow-go/issues/5232)

- Ingestion engine refactoring
  - [Remove module.Local from ingestion engine](https://github.com/onflow/flow-go/pull/5243)
  - [Move maxCollectionHeight to metrics](https://github.com/onflow/flow-go/issues/5244)
  
- Execution node HCU edge-case bugfix: [Execution - Fix stop control](https://github.com/onflow/flow-go/issues/5327)

- New Execution node utility: [Find block ID by state commitment](https://github.com/onflow/flow-go/pull/5240)

- Adding tooling for spamming attack defence to collection node: [Rate limiting transaction by payer](https://github.com/onflow/flow-go/issues/5218)

- Exposing computation usage for scripts:
  - [expose computation usage for scripts](https://github.com/onflow/flow-go/pull/5299)

- chores
  - [Canary test fix](https://github.com/onflow/flow-e2e-tests/issues/51)
  - CBOR: [Refactor map encoding to prep for Go version bump](https://github.com/fxamacker/cbor/issues/473)

**This sprint**

Objective 1: Upgrade Mainnet to Crescendo Release with minimal impact on developers, to lower the barrier for cross chain liquidity on Flow
- KR1: Enable Developers and the Flow Foundation to simulate Cadence 1.0 Contract upgrades
  - [More permissive contract upgrade checker for 1.0 network upgrade](https://github.com/onflow/cadence/issues/2865)
  - [Enable testing of contract update to Cadence 1.0 in Emulator](https://github.com/onflow/cadence/issues/2947)
  - [Migrations for core contract changes](https://github.com/onflow/cadence/issues/3007)
  - [Enable state migration on emulator](https://github.com/onflow/cadence/issues/3063)
- KR2: Launch Cadence 1.0 on Crescendo Testnet
  - [Integrate Atree inlining and Cadence v0.42.x with flow-go](https://github.com/onflow/flow-go/issues/5296)
  - [Add contract supporting contract staging under contract migration plan](https://github.com/onflow/contract-updater/issues/13)
- KR3: Launch EVM on Crescendo Testnet
  - [Flow EVM Core Implementation](https://github.com/onflow/flow-go/issues/5241)
    - [Benchmark transactions running EVM operations on benchnet](https://github.com/onflow/flow-go/issues/5099)
    - [add an intergration test for selfdestruct contract call](https://github.com/onflow/flow-go/issues/5224)
    - [Calibrate a conversion factor between EVM gas and FVM computation effort](https://github.com/onflow/flow-go/issues/5094)
    - [add an intergration test for selfdestruct contract call](https://github.com/onflow/flow-go/issues/5224)
  - [JSON-RPC Gateway launch implementation](https://github.com/onflow/flow-evm-gateway/issues/12)
  - [Indexer Implementation](https://github.com/onflow/flow-evm-gateway/issues/14)
    - [Setup persistent storage](https://github.com/onflow/flow-evm-gateway/issues/17)
    - [Implement querying events by topic](https://github.com/onflow/flow-evm-gateway/issues/28)
    - [Implement event consumer](https://github.com/onflow/flow-evm-gateway/issues/15)


Objective 3: Analyze execution runtime trends and risks to plan next set of scalability OKRs
- KR1: Measure execution state growth trends, identify future bottlenecks and prioritize by urgency
  - Kick off the analysis

Other
Closing from previous cycle:
  - [Storehouse - Benchmark RegisterStore](https://github.com/onflow/flow-go/issues/5101)
  - [Refactor ingestion engine mempool](https://github.com/onflow/flow-go/issues/5297)

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

### **Core Protocol** Jerome
Cycle Objective(s): 

* Continue with adding BFT mitigations to enable 10 permissionless ANs
* Continue design of Dynamic Protocol 

**Done last sprint**

-  [Design - Dynamic Protocol State Key-Value Store](https://www.notion.so/dapperlabs/Protocol-state-key-value-storage-497326ff9cf44ff4a70610a0dad329b3?pvs=4) - generalizing Dynamic Protocol State beyond identity table changes 
  - Finalized the design, created and estimated epic issues
  - Added details for how to use KVStore for height-coordinated upgrade of Protocol State Machine
- Draft blog post for Dynamic Protocol State release
- Resolved mainnet24 [peer scoring incident](https://github.com/dapperlabs/flow-go/issues/6913)
- Added [comprehensive documentation](https://github.com/onflow/flow-go/pull/5308) for libp2p resource management operators guidance
- Data Availability
  - Added support for error trees in FVM
  - Fixed race condition in local event streaming

**This sprint**

- [Design - Sporkless Epoch Fallback Recovery](https://www.notion.so/dapperlabs/Spork-less-Epoch-Fallback-Recovery-Design-II-Epoch-Extensions-a7673e45e9064d12b6b48aa517bd1763?pvs=4) - enabling recovery from EFM via governance multisig and without spork
  - Review and iteration on latest design
- Begin implementing KV Store
- Create [GossipSub forensics dashboard](https://github.com/dapperlabs/flow-go/issues/6933)
- Identify remaining technical gaps in the GH issues for the upcoming OKR
- Implement incident management runbook for networking layer
- [upgrade libp2p version to v0.32.0](https://github.com/onflow/flow-go/issues/4934)
- Fix Access connection cache race condition
- Add register cache for script executions

**On Hold**

- List of issues on hold


**Active Epics**

- Reinforcing Flow’s commitment to full protocol autonomy and scalability
- Improve network performance
- Improve network availability 
- Simplify community contributions to core protocol and maintainability
- Improve network reliability and data availability for dApp developers
- Data-driven Prioritization and Scaling Engineering

---

### **DeFi** Jerome
Cycle Objective(s): 

**Done last sprint**

- Band Protocol contracts and integration released on testnet
- Axelar unblocked to wrap up their bridge contracts after ABI.encode/decode() support also released on testnet
- Started upgrade of Flow JVM SDK to support Flow DeFi partners (@lealobanov)
- IncrementFi confirmed their Cadence 1.0 upgrade plan is on track


**This sprint**

- Complete Band Protocol docs and examples and publish to community. This enables broader testing on testnet
- USDC contracts update to Cadence 1.0 starting (@joshuahannan)

**On Hold**

- N/A


**Active Epics**

- Establish Defi/Liquidity infrastructure for Cadence 1.0 update
- Ensure Flow has best-in-class on- and off-ramps for USDC liquidity across DeFi ecosystem
- Expand Flow DeFi ecosystem primitives and protocols
---

### **User Experience** Greg
Cycle Objective(s): 

**Done last sprint**

- General description of completed items
- List of Closed issues


**This sprint**

- General description of sprint goal
- List of issues to be worked on


**On Hold**

- List of issues on hold


**Active Epics**

- Main epics that are being tackled, and currently active for this working group

---

### **Wallet** Jeff
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

**Done last sprint**

- General description of completed items
- List of Closed issues


**This sprint**

- General description of sprint goal
- List of issues to be worked on


**On Hold**

- List of issues on hold


**Active Epics**

- Main epics that are being tackled, and currently active for this working group

---

### **Governance and Tokenomics** Vishal
Cycle Objective(s): 

**Done last sprint**

- General description of completed items
- List of Closed issues


**This sprint**

- General description of sprint goal
- List of issues to be worked on


**On Hold**

- List of issues on hold


**Active Epics**

- Main epics that are being tackled, and currently active for this working group

---

### FLIPs Tracker - Kshitij

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

- Next Mainnet/Testnet network upgrade (spork):
- Next Mainnet/Testnet HCU:
- End of Cycle:
