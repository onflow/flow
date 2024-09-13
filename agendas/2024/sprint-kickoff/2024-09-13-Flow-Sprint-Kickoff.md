# Overview

### Team Wins 🎉

- Crescendo is LAUNCHED! 🎉💥
- CloudFlare account migration executed with all zones migrated (JP)
- Flow Community Rewards successfully upgraded and running strong with 19,450,958 Total Locked FLOW
- Cadence Playground running Cadence 1.0
- Celer deployed mainnet contracts this week and liquidity was opened today
- Kittypunch launched EVM DEX on mainnet https://swap.kittypunch.xyz/#/swap
- GNOSIS Safe.Global Ethereum Vault for tresury multi-sig launched on mainnet https://safe.flow.com

### General updates

### OOO
- [Full List](https://www.notion.so/flowfoundation/de89aa4e79364216a665888335a1cdee?v=4de18b26f60d4bae8f62724dddcce260)

---

### Mainnet Uptime - Last 14 days (08/30/24 to 09/13/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    98.04%    |       1964%      |
| Block Finalization      | 99.9%   |    98.04%     |       1964%      |
| Transaction Execution   | 99.9%   |    98.04%     |       1964%      |
| Block Sealing           | 99.9%   |    98.04%     |       1964%      |
| Access API Liveness     | 99.9%   |    98.04%     |       1964%      |

[SLO dashboards](https://flowfoundation.grafana.net/d/hgW3l-m4k/slo-dashboard?orgId=1&from=now-2w&to=now)

YTD SLA: 99.89%
	- Metrika dashboard is deprecated. An alternate dashboard will be set up.

#### SLA situation

- Goal: EOY 99.9% SLA
- [Permissible downtime annually](https://uptime.is/99.9): 8h 41m
- Downtime due to Crescendo upgrade: 6h 36m
- Downtime due to previous HCUs in this year: ~20m (5m per HCU, 4 HCUs so far)
- Remaining budget to hit EOY goal of 99.9%: 1hr 45m

## Incidents

### Mainnet
Post network upgrade incidents -
1. EVM Gateway issue ✔️resolved.
2. Network in Epoch Fallback mode - will be resolved after the next network upgrade.

(Sev [definition](https://www.notion.so/flowfoundation/Incident-Priorities-Severity-Levels-1-e811b352feff4928b69a7e99df724c6a))

### Key Release Dates & Breaking Changes
- Next Mainnet/Testnet network upgrade (spork):
  - Testnet: Wed 18th Sept
  - Mainnet: Wed 25th Sept

---

### FLIPs Tracker \[Kshitij]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 8  |    7  |       0         |       7          |        **22**       |
| Proposed    | 1  |    2    |       3          |       0           |        **6**  |
| Accepted    | 2  |    1     |       2       |       2        |        **7**          |
| Rejected    | 0  |    0     |       1       |       0          |        **1**          |
| Implemented | 3 |    25    |       1       |       0           |        **29**          |
| Released    | 4  |    0     |       4       |       6          |        **14**         |
| Total       | **18**  |    **35**  |       **11**     |       **15**          |        **79**   |

**No New FLIPs**

**REMINDER - FLIPs that need to be reassigned immediately:**

**- Application**
  - Interaction Templates (Paul Gebheim)
  - Application - Pool-Based DEX Swap Standard (Satyam A.)

**- Cadence**
  - Type Removal In Contract Updates  (Daniel Sainati)
  - Optional References to Indexed Accesses (Daniel Sainati)
  - Mutability Restrictions  (Daniel Sainati)
  - Cadence Storage API Improvements (Daniel Sainati)
  - Reference Creation Semantics (Daniel Sainati)
  - View Functions (Daniel Sainati)
  - Entitlements (Daniel Sainati)
  - New behavior for attachments with entitlements (Daniel Sainati)

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

**Cadence Language**
- Security fix: [1](https://github.com/dapperlabs/cadence-internal/pull/244), [2](https://github.com/dapperlabs/cadence-internal/pull/243)
- Bugfix
    - [Handle unmigrated path capabilities and path links in Account.capabilities functions](https://github.com/onflow/cadence/pull/3562)
    - [Fix cadence-parser npm package](https://github.com/onflow/cadence/pull/3555)
- Improvement
    - [Improve address decoding error](https://github.com/onflow/cadence/pull/3560)
- Tooling
    - [Fix CI: Flow CLI is 1.0 now](https://github.com/onflow/cadence/pull/3573)
    - version bump - [Fix the version update check](https://github.com/onflow/cadence/pull/3572)
    - [Fix storage explorer: Update dependencies, update API usage](https://github.com/onflow/cadence/pull/3566)
- Tests
    - [Add tests for exporting interface type](https://github.com/onflow/cadence/pull/3576)
    - [Add test for modifying events during contract updates](https://github.com/onflow/cadence/pull/3561)
    - [Add contract-update test for removing a field from nested resource](https://github.com/onflow/cadence/pull/3559)
- Docs
    - [Update example on front page to 1.0](https://github.com/onflow/cadence-lang.org/pull/143)
    - [Fix description](https://github.com/onflow/cadence-lang.org/pull/144)
    - [Default to current, i.e. 1.0](https://github.com/onflow/cadence-lang.org/pull/142)
    - [Document valid changes for events during contract-updates](https://github.com/onflow/cadence-lang.org/pull/139)

**Cadence Execution**
- Bugfix
    - [Fix metering invalidation](https://github.com/onflow/flow-go/pull/6377)
        - [v0.37 - Fix metering invalidation](https://github.com/onflow/flow-go/pull/6461)
- Spork-related
    - migration bugfixes
        - [v0.37 - Recover validation error pretty printing panic](https://github.com/onflow/flow-go/pull/6434)
        - [Cadence 1.0 migration - Add EVM storage account creation migration](https://github.com/onflow/flow-go/pull/6422)
    - [Service account Fee changes](https://github.com/onflow/service-account/pull/320)
    - Flow hosting 
        - [fix path in download checkpoint](https://github.com/dapperlabs/dapper-flow-hosting/pull/1599)
        - Network recovery - [disable peer score](https://github.com/dapperlabs/dapper-flow-hosting/pull/1597)
    - Improvements
        - [Verification - Adding block id and height in verified approvals](https://github.com/onflow/flow-go/pull/6402)
- Execution effort estimation
    - [Save initial parameters](https://github.com/onflow/flow-execution-effort-estimation/pull/4)
    - [Add grpc endpoint to EN for transaction execution metrics](https://github.com/onflow/flow-go/pull/6172)
- Util improvements
    - [Check checkpoint file exists when running state extraction](https://github.com/onflow/flow-go/pull/6459)
    - [Add support for storage health check of EVM registers](https://github.com/onflow/flow-go/issues/6393)
    - [Add command to debug a script](https://github.com/onflow/flow-go/pull/6425)
- Tooling
    - [Flow batch-scan](https://github.com/onflow/flow-batch-scan) - tool to scan all addresses on chain, [updated to Cadence 1.0](https://github.com/onflow/flow-batch-scan/pull/39)
    - TPS Benchmark - [Change TPS dataset](https://github.com/onflow/flow-go/pull/6429)
- Docs
    - [update sha256sum for boot-tools of v0.37](https://github.com/onflow/docs/pull/876)

**EVM Core**
- Docs - [add a sample code for cadence arch call](https://github.com/onflow/docs/pull/885)

**EVM Gateway**
- Bugfix
    - [Block 910 has a hash different then the one reported from evm-testnet.flowscan](https://github.com/onflow/flow-evm-gateway/issues/509)
    - [Bugfix locking on logs filters](https://github.com/onflow/flow-evm-gateway/pull/506)
    - [Receipts for deployments with COAs have both `contractAddress` and `to` fields present](https://github.com/onflow/flow-evm-gateway/pull/535)
    - [Response returned from `eth_getBlockReceipts` endpoint is not properly marshalled](https://github.com/onflow/flow-evm-gateway/pull/533)
    - [Crasher on validation of args](https://github.com/onflow/flow-evm-gateway/issues/525)
    - [Incorrect hash value for empty `sha3Uncles` block field](https://github.com/onflow/flow-evm-gateway/pull/504)
    - [The `height` in some log lines is displayed as a byte-array instead of numeric value](https://github.com/onflow/flow-evm-gateway/pull/497)
- Improvements
    - [Debug log all errors](https://github.com/onflow/flow-evm-gateway/pull/528)   
    - [Increase trace download retry limit](https://github.com/onflow/flow-evm-gateway/pull/523)
    - [EVM script execution caching](https://github.com/onflow/flow-evm-gateway/pull/521)
    - [Improve Cadence scripts](https://github.com/onflow/flow-evm-gateway/pull/522)
    - [Fix display of duplicate logs](https://github.com/onflow/flow-evm-gateway/pull/516)
    - [Filter out errors for missing endpoints as they are not really relevant](https://github.com/onflow/flow-evm-gateway/pull/507)
    - [Increase `batchRequestLimit` and `batchResponseMaxSize` constants](https://github.com/onflow/flow-evm-gateway/pull/505)
    - [Support more signing algorithms for COA key](https://github.com/onflow/flow-evm-gateway/pull/501)
    - [Improve COA creation transaction to gracefully handle existing COA in storage](https://github.com/onflow/flow-evm-gateway/pull/500)
    - [Handle `ErrHeightOutOfRange` errors in `EstimateGas`](https://github.com/onflow/flow-evm-gateway/pull/498)
- Testing
    - [Improve network test with blockchain traverse](https://github.com/onflow/flow-evm-gateway/pull/517)
    - [Update the `storage` solidity contract](https://github.com/onflow/flow-evm-gateway/pull/536)
    - [Fix flaky E2E test for EVM state building](https://github.com/onflow/flow-evm-gateway/pull/532)
    - [Add an E2E test for filling the EVM state with blocks & transactions](https://github.com/onflow/flow-evm-gateway/pull/526)
    - [Add test cases for endpoint of the `PullAPI`](https://github.com/onflow/flow-evm-gateway/pull/510)

**This sprint**

- Complete Cadence deployment cleanup (requires one more spork)

- Objective 2, KR 1: Update transaction fees weights for the execution operations on TN and MN
  -  Continue work on [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)

- Cadence Execution
  - Badger -> Pebble Investigation/POC
    - Continue work on [Protocol State Migration POC](https://github.com/onflow/flow-go/issues/6137) -> changing interface to batch write from transaction to make the future switch to Pebble easier.
  - Complete [util to export stats about execution state](https://github.com/onflow/flow-go/issues/6361)
  - Continue: [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

- EVM Gateway
  - Continue monitoring / improving EVM GW stability
  - Add tracing endpoint to unblock Alchemy
  - Complete [local state index](https://github.com/onflow/flow-evm-gateway/issues/322)
  - continue work on [Benchmarking](https://github.com/onflow/flow-evm-gateway/issues/19)

**Completed OKRs**
  * Objective 1, KR5: Mainnet Upgrade to Crescendo Release
  * Objective 1, KR1: Enable Developers and the Flow Foundation to simulate Cadence 1.0 Contract upgrades
    * All breaking  released in a new CLI: v1.18.0-cadence-v1.0.0-preview.26
  * Objective 1, KR4: Testnet Upgrade to Crescendo Release
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
* Reduce CPU usage on Execution node by 30% [DONE]
* Translate crypto performance improvements to consensus block rate increase [DONE]
* Continue design and implementation of Sporkless Epoch Fallback Recovery solution [DONE]

**Done last Sprint:**

* <ins>Crescendo upgrade</ins>
  - Peter, Khalil and Jordan supported Crescendo upgrade and follow on operational issues
  - Tarak: fix build on private repo

* <ins>Data Availability:</ins>
  - KROK Team
    - Add StopControl for access nodes ([PR #6202](https://github.com/onflow/flow-go/pull/6202))

* <ins>EFM Recovery</ins>
  - Addressing PR reviews
  - [DKG smart contract data model update](https://github.com/onflow/flow-go/issues/6213)
  - [Protocol updates for DKG IndexMap](https://github.com/onflow/flow-go/pull/6338)
  - [Consensus updates to block signing](https://github.com/onflow/flow-go/issues/6389)

* <ins>Cryptography</ins>
  - Last part of state proofs: performance estimations of VC and set accumulator-based state trees:
    - SAGE scripts for operation bench
    - New designs covered (Catalono - Pedersen IPA - Nguyen)
    - IPA bench from cloning Ethereum go implementation - document IPA high level design
    - Bench summary presented.
 - Randomness: update docs and review implementation
     
**This sprint**

* <ins>Crescendo upgrade</ins>
  - Continue benchnet testing libp2p peer gater and add peer gater to flow-go

* <ins>EFM Recovery</ins>
  - [Continue DKG smart contract data model update](https://github.com/onflow/flow-go/issues/6213)
  - Protocol updates for DKG changes [https://github.com/onflow/flow-go/issues/6214]
  - Finish up and merge [EFM Recovery transaction](https://github.com/onflow/flow-core-contracts/pull/440), EFM integration test part 2](https://github.com/onflow/flow-go/issues/6164), [EFM Integration Test Part 2](https://github.com/onflow/flow-go/pull/6424)
    
* <ins>Data Availability</ins>
  - KROK Team
    - Expand on payer balance checks ([Issue #6129](https://github.com/onflow/flow-go/issues/6129) - In review, [Issue #6139](https://github.com/onflow/flow-go/issues/6139) - In review)
    - Registers db pruning ([Issue #6066](https://github.com/onflow/flow-go/issues/6066) - In review, [Issue #6068](https://github.com/onflow/flow-go/issues/6068) - In review)
    - Store Tx Result in database ([Issue #6302](https://github.com/onflow/flow-go/issues/6302) - In progress)
    - Test pebble execution data db on testnet ([Issue #6357](https://github.com/onflow/flow-go/issues/6357) - In progress)
    - Documentation improvements ([Issue #815](https://github.com/onflow/docs/issues/815) - In review, [Issue #727](https://github.com/onflow/docs/issues/727) - In review)
    - Access API / Go SDK alignment ([Issue #735](https://github.com/onflow/flow-go-sdk/issues/735))

* <ins>Cryptography</ins>
  - Get back to SPoCK aggregation related reads

* <ins>Misc other</ins>
  - Ongoing Pebble migration PR reviews

**On Hold**

---

### **DeFi** \[Jerome]

Cycle Objective(s): 
- EVM partner onboarding
- Deliver Axelar bridge

**Done last sprint**
  * Supporting Ankr, Moralis, Axelar on EVM issues and node operations
  * Celer deployed mainnet contracts this week and liquidity was opened today
  * Kittypunch launched EVM DEX on mainnet https://swap.kittypunch.xyz/#/swap
  * GNOSIS Safe.Global Ethereum Vault for tresury multi-sig launched on mainnet https://safe.flow.com

  
**This sprint**
  * Contnue supporting Ankr, Axelar and other node operators
  * Launch Axelar cross-chain bridge and axlUSDC once all vaidators are onboarded and critical mass is reached
  
**On Hold**

**Active Epics**

- Establish Defi/Liquidity infrastructure for Cadence 1.0 update
- Ensure Flow has best-in-class on- and off-ramps for USDC liquidity across DeFi ecosystem
- Expand Flow DeFi ecosystem primitives and protocols

---

### **User Experience** \[Greg]

Cycle Objective(s):

- Bring EVM on Flow to Market as part of the Crescendo release to increase liquidity and bring top-tier developer platforms to our network
- Add Documentation and smooth rough edges to improve DX for EVM on Flow
- Build Flow Community Rewards (RAIN) and Points Program

**Done last sprint**

<ins>**Crescendo Rewards**<ins>

Contracts
- [Add scripts for any NFT image resolution #354](https://github.com/onflow/crescendo-rewards/pull/354)
- [Add Flow image to FlowToken storage #12](https://github.com/onflow/dx-internal/issues/12)
- [Bridge - Prepare a Mainnet account & deploy 0.42 dependency contracts](https://github.com/onflow/flow-evm-bridge/issues/108)
- [Bridge - Enhance escrow interface for metadata resolution from escrowed NFTs & FT Vaults](https://github.com/onflow/flow-evm-bridge/issues/112)
- [Bridge - Fix displays on bridged NFT & Token templates](https://github.com/onflow/flow-evm-bridge/issues/114)
- [Bridge - Add the ability to update symbols in bridged ERC20/721 contracts](https://github.com/onflow/flow-evm-bridge/pull/118)
- [Rewards - Set distribution period](https://github.com/onflow/crescendo-rewards-sc/issues/83)
- [Rewards - Enable NFT Display retrieval by NFT ID](https://github.com/onflow/crescendo-rewards-sc/issues/87)

Backend
- [Add improved messaging to referral code validation](https://github.com/onflow/crescendo-rewards-be/pull/161)

Frontend
- [Add redemption page and period switch logic #350](https://github.com/onflow/crescendo-rewards/issues/350)
- [Add emojis to leaderboard #338](https://github.com/onflow/crescendo-rewards/issues/338)
- [Don’t render layout in app down mode](https://github.com/onflow/crescendo-rewards/pull/306 )
- [Remove referral from search params after successful lockup](https://github.com/onflow/crescendo-rewards/pull/308 )
- [Disable referral code validation when not authenticated](https://github.com/onflow/crescendo-rewards/pull/307 )
- [Add NFT FAQ](https://github.com/onflow/crescendo-rewards/pull/309 )
- [Fix pill not rendering](https://github.com/onflow/crescendo-rewards/pull/318 )
- [Trigger form when logged in](https://github.com/onflow/crescendo-rewards/pull/325 )
- [Remove characters from balance](https://github.com/onflow/crescendo-rewards/pull/327 )
- [Switch useAccount to use AN from FE](https://github.com/onflow/crescendo-rewards/pull/328 )
- [Add emojis to number patterns](https://github.com/onflow/crescendo-rewards/issues/338 )
- [Make leaderboard an activity titles same size](https://github.com/onflow/crescendo-rewards/pull/340 )
- [Add flow to partners coming soon page](https://github.com/onflow/crescendo-rewards/pull/341 )
- [Fix usePeriod hook logic](https://github.com/onflow/crescendo-rewards/issues/348 )
- [Add redemption page with period switch logic](https://github.com/onflow/crescendo-rewards/issues/350 )
- [Setup NFT Selector for redemption page](https://github.com/onflow/crescendo-rewards/issues/352 )

<ins>**Cadence Playground**<ins>
- [Update Playground to support Cadence 1.0 #760](https://github.com/onflow/flow-playground/issues/760)

Public Key Indexer 
- [Update for Cadence v1](https://github.com/onflow/flow-public-key-indexer/issues/17)

<ins>**FCL/DISCOVERY**<ins>
- [Remove Shadow From Discovery #254](https://github.com/onflow/fcl-discovery/issues/254)
- [Add clipboard check #262](https://github.com/onflow/fcl-discovery/pull/262)
- [Add clipboard-write Access to FCL IFRAME](https://github.com/onflow/fcl-js/issues/1946)
- [fcl.payer argument type is incorrect](https://github.com/onflow/fcl-js/issues/1936)
- [fcl.authenticate should be a promise](https://github.com/onflow/fcl-js/issues/1934)
- [AppUtils verifyUserSignatures should return a Promise](https://github.com/onflow/fcl-js/issues/1933)

<ins>**Flow CLI**<ins>
[CLI Hangs with certain commands](https://github.com/onflow/flow-cli/issues/1731)
[Remove Cadence 1.0 Migration Features](https://github.com/onflow/flow-cli/issues/1726)

<ins>**Flow Go SDK**<ins>
[Remove Previewnet](https://github.com/onflow/flow-go-sdk/issues/739)

<ins>**Flowkit**<ins>
[Remove Previewnet](https://github.com/onflow/flowkit/issues/73)

**This sprint**
**Sprint Goal: Launch Rewards Redemption and Points Integration / Launch bridge.flow.com / Lost and Found (Integration - Flow Port, Flow Wallet)**

- [EPIC] Flow Rewards (RAIN)
  - [FE](https://github.com/onflow/crescendo-rewards/issues/1 )
  - [BE](https://github.com/onflow/crescendo-rewards-be/issues/1)
  - [SC](https://github.com/onflow/crescendo-rewards-sc/issues/7)
- [EPIC Solving Initialization/Storage Issues - Lost and Found FLIP and Port integration](https://github.com/onflow/flow-port/issues/292)
- [Flow Bridge App Epic](https://github.com/onflow/flow-bridge-app/issues/1)

**On Hold**

- bridge.flow.com

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


**On Hold**

- N/A

**Active Epics**

- TBD

---

### **Infra - JP**
Cycle Objective(s): 
- Prepare flow.com, onflow.org & nodes.onflow.org domains for CloudFlare account migration
- Prepare to spork FF & DL nodes 
- Clean up infra following spork

**Done last sprint**

**Spork**
- Assisted in spork execution and triage

**CloudFlare**
- Migrate onflow.org from DL account to FF account
- Migrate nodes.onflow.org from DL account to FF account
- [Clean Up orphaned records](https://github.com/dapperlabs/terraform/pull/4387)

**EVM Gateway**
- [Update ANs used for EVM GW](https://github.com/dapperlabs/dapper-flow-hosting/pull/1591)
- [Create inventory for MN EVM GW](https://github.com/dapperlabs/dapper-flow-hosting/pull/1568)

**Spork Cleanup**
- Delete Previewnet infra
- Delete Migration Testnet infra
- [Delete Mainnet24 infra](https://github.com/dapperlabs/terraform/pull/4378)

**Node Hosting**
- [Update node.env for GO memlimits](https://github.com/dapperlabs/dapper-flow-hosting/pull/1584)
- [Update playbooks for configuring DL nodes](https://github.com/dapperlabs/dapper-flow-hosting/pull/1587)
- [Execute HCU on DL nodes](https://github.com/dapperlabs/dapper-flow-hosting/pull/1596)

**This Sprint**
- Finish merging & cleaning up old CF resources
- Create infrastructure for DL & FF nodes
- Spork Mainnet
- Cleanup all infra used for spork prep
- Assist with EVM GW observability


**Active Epics**

- N/A
