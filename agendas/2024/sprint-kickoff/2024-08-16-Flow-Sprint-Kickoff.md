# Overview

### Team Wins 🎉

- Crescendo live on Testnet!
- Testnet Faucet is working with Cadence 1.0
- USDCflow - Contract Deployment, [Docs](https://cadence-lang.org/docs/1.0/cadence-migration-guide/usdc-migration), and Flow Port Swap
- Released completed Cadence 1.0 upgraded JVM-SDK to Maven


### General updates

### OOO
- [Full List](https://www.notion.so/flowfoundation/de89aa4e79364216a665888335a1cdee?v=4de18b26f60d4bae8f62724dddcce260)

---

### Mainnet Uptime - Last 14 days (08/02/24 to 08/15/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    100%       |       0%         |
| Block Sealing           | 99.9%   |    100%       |       0%         |
| Access API Liveness     | 99.9%   |    99.877%    |       123%       |

[SLO dashboards](https://flowfoundation.grafana.net/d/hgW3l-m4k/slo-dashboard?orgId=1&from=now-2w&to=now)

[YTD SLA: 99.922%](https://app.metrika.co/flow/dashboard/slas?tr=YTD)

## Incidents

None

(Sev [definition](https://www.notion.so/flowfoundation/Incident-Priorities-Severity-Levels-1-e811b352feff4928b69a7e99df724c6a))

### Key Release Dates & Breaking Changes
- Next Mainnet/Testnet network upgrade (spork):
  - Mainnet: Sept 4th **5:00 AM PT** (12:00 PM UTC). Duration: 6 hours

---

### FLIPs Tracker \[Kshitij]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 8  |    8 (-1)  |       0         |       7          |        **23** (-1)       |
| Proposed    | 1  |    2    |       3 (+1)          |       0           |        **6** (+1)        |
| Accepted    | 2  |    1     |       2       |       2 (+1)          |        **7** (+1)          |
| Rejected    | 0  |    0     |       1       |       0          |        **1**          |
| Implemented | 3 |    24 (+2)    |       1       |       0           |        **28**          |
| Released    | 4  |    0     |       4 (+1)       |       6          |        **14** (+1)          |
| Total       | **18** (+1)  |    **35** (+1)  |       **11** (+1)      |       **15**          |        **79** (+3)      |

**Updates**
* Crescendo Network Upgrade - proposed
* Changing import statement semantics - accepted
* Import of pre-Cadence 1.0 Programs - proposed and accepted

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
- Approved [FLIP 282: Import of pre-Cadence 1.0 Programs](https://github.com/onflow/flips/pull/283)
- Contract update checker improvement: [Check updated contract name](https://github.com/onflow/cadence/pull/3530)

**Cadence Execution**
- Utility
    - [Add a command to print all system addresses](https://github.com/onflow/flow-go/pull/6339)
    - [Add support for detecting differing accounts](https://github.com/onflow/flow-go/pull/6225)
- Atree improvement, enables simplifying of flow-go and Cadence codebase:
    - [Add utility function SlabID.Address()](https://github.com/onflow/atree/issues/431)
- CBOR improvement:
    - [Add functions to check availablility of CBOR tag numbers](https://github.com/onflow/atree/pull/434)

**EVM Core**
- Bugfixes (Axelar blockers):
    - [Patch storage root value issue](https://github.com/onflow/flow-go/pull/6295)
    - [Deprecate legacy self destruct in the storage](https://github.com/onflow/flow-go/pull/6289)
- Improvements:
    - [skip debug trace uploading step if bucket name is empty](https://github.com/onflow/flow-go/pull/6335)
    - [patch evm debug tracer to collect results and reset internal state after each tx execution](https://github.com/onflow/flow-go/pull/6327)
    - [Populate all fields for the genesis block](https://github.com/onflow/flow-go/pull/6325)
    - [port missing tracing updates to previewnet](https://github.com/onflow/flow-go/pull/6324)
    - [improve debug tracing](https://github.com/onflow/flow-go/pull/6299)
    - [patch backoff block loading](https://github.com/onflow/flow-go/pull/6286)
    - [code and doc clean up](https://github.com/onflow/flow-go/pull/6252)

**EVM Gateway**
- Features:
    - [Index only mode](https://github.com/onflow/flow-evm-gateway/pull/416)
    - [Ensure indexing is idempotent](https://github.com/onflow/flow-evm-gateway/issues/400)
- Bugfixes:
    - [eth_getLogs does not validate the topics length](https://github.com/onflow/flow-evm-gateway/issues/422)
    - [Block tags are not supported for eth_getTransactionByBlockNumberAndIndex](https://github.com/onflow/flow-evm-gateway/issues/419)
    - [Block tags are not supported in eth_getBlockTransactionCountByNumber](https://github.com/onflow/flow-evm-gateway/issues/418)
    - [eth_getBlockByNumber() not responsive to 'earliest' flag](https://github.com/onflow/flow-evm-gateway/issues/371)
- Improvements:
    - [Derive storage address from chain id](https://github.com/onflow/flow-evm-gateway/pull/435)
    - [Report API crashers](https://github.com/onflow/flow-evm-gateway/issues/384)
    - [General improvements to the metrics](https://github.com/onflow/flow-evm-gateway/pull/424)
    - [Add lock during transaction build](https://github.com/onflow/flow-evm-gateway/pull/421)
    - [Fix error logging](https://github.com/onflow/flow-evm-gateway/pull/438)
    - [Remove Genesis block patch introduced for PreviewNet ](https://github.com/onflow/flow-evm-gateway/pull/434)
    - [Minor fixes](https://github.com/onflow/flow-evm-gateway/pull/431)
- Testing:
    - [E2E network test improvements](https://github.com/onflow/flow-evm-gateway/pull/436)
    - [Add live network tests](https://github.com/onflow/flow-evm-gateway/pull/432)

**Crescendo TN upgrade**
- State migration fixes & improvements:
    - Fixing capability migration (discovered during setting network addresses on migrationmainnet):
        - [Report the stored path of the untyped-capability](https://github.com/onflow/flow-go/pull/6328)
        - [Add capability stored path info to the report](https://github.com/onflow/cadence/pull/3524)
        - [Improve storage path capability migration reporting](https://github.com/onflow/cadence/pull/3522)
        - [Improve borrow type inferrence for storage path capabilities](https://github.com/onflow/cadence/pull/3520)
        - [Infer missing borrow type for storage capabilities](https://github.com/onflow/cadence/pull/3519)
        - [Improve storage capability migration](https://github.com/onflow/flow-go/pull/6322)
        - [Avoid conversion from sema-type to StaticType in storage cap migration](https://github.com/onflow/cadence/pull/3517)
        - [Improve storage capability migration](https://github.com/onflow/cadence/pull/3516)
        - [Merge and commit changes after issuing cap cons](https://github.com/onflow/flow-go/pull/6315)
        - [Report and skip storage caps with no borrow type](https://github.com/onflow/flow-go/pull/6312)
        - [Fix migration of storage path capabilities](https://github.com/onflow/flow-go/pull/6306)
        - [Set capability issue handler in capability value migration](https://github.com/onflow/flow-go/pull/6303)
- Dependency updates: [1](https://github.com/onflow/flow-cli/pull/1696), [2](https://github.com/onflow/flow-evm-gateway/pull/430), [3](https://github.com/onflow/flixkit-go/pull/74), [4](https://github.com/onflow/cadence-tools/pull/413), [5](https://github.com/onflow/flowkit/pull/69), [6](https://github.com/onflow/cadence-tools/pull/412), [7](https://github.com/onflow/flow-emulator/pull/728), [8](https://github.com/onflow/cadence-tools/pull/411), [9](https://github.com/onflow/flow-go-sdk/pull/726), [10](https://github.com/onflow/flow-go-sdk/pull/725), [11](https://github.com/onflow/flow-go/pull/6326), [12](https://github.com/onflow/flow-go/pull/6326), [13](https://github.com/onflow/flow-go-sdk/pull/724), [14](https://github.com/onflow/flow-go/pull/6317), [15](https://github.com/onflow/flow-go-sdk/pull/723), [16](https://github.com/onflow/flow-go-sdk/pull/720), [17](https://github.com/onflow/flow-emulator/pull/725), [18](https://github.com/onflow/cadence-tools/pull/410), [19](https://github.com/janezpodhostnik/flow-py-sdk/pull/62)
- infra/config: [1](https://github.com/dapperlabs/dapper-flow-hosting/pull/1562), [2](https://github.com/dapperlabs/dapper-flow-hosting/pull/1556), [3](https://github.com/dapperlabs/dapper-flow-hosting/pull/1554), [4](https://github.com/dapperlabs/dapper-flow-hosting/pull/1552), [5](https://github.com/onflow/flow-evm-gateway/pull/414), [6](https://github.com/dapperlabs/dapper-flow-hosting/pull/1551)
- publishing staged contracts report: [1](https://github.com/onflow/cadence/pull/3525), [2](https://github.com/onflow/cadence/pull/3510)


**This sprint**

- Objective 1, KR5: Mainnet Upgrade to Crescendo Release
  - Investigate and fix any high/critical severity issues reported on Crescendo on TN ([Crescendo launch on Mainnet tasklist](https://github.com/onflow/cadence/issues/2642))
  - [Create util command to check storage health of execution state](https://github.com/onflow/flow-go/issues/6350)
  - Continue: [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)
  - Investigate / Fix any security report incoming from bug bounty.

- Objective 2, KR 1: Update transaction fees weights for the execution operations on TN and MN
  -  Continue work on [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)

- EVM 
  - Continue monitoring EVM GW stability
  - Start work on [local state index](https://github.com/onflow/flow-evm-gateway/issues/322)
  - KROK
     - EVM Gateway benchmarking

- EVM Gateway
  - continue work on [Metrics](https://github.com/onflow/flow-evm-gateway/issues/125) and [Benchmarking](https://github.com/onflow/flow-evm-gateway/issues/19)

- Badger -> Pebble Investigation/POC
  - Continue evaluation of [Protocol State Migration POC](https://github.com/onflow/flow-go/issues/6137) & schedule design discussion

**Completed OKRs**
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
* <ins>EFM Recovery</ins>
  - [DKG smart contract updates](https://github.com/onflow/flow-core-contracts/pull/441) (on hold, awaiting input from S.C. team)
  - [Update EpochLookup component: Process EpochExtended protocol events](https://github.com/onflow/flow-go/pull/6247)
  - Started [EFM integration test part 2](https://github.com/onflow/flow-go/issues/6164)
  - Started [EFM Recovery transaction PR](https://github.com/onflow/flow-core-contracts/pull/440)
  - Refactoring and TODOs for EFM[1](https://github.com/onflow/flow-go/pull/6323), [2](https://github.com/onflow/flow-go/pull/6318)
  - [Added telemetry for KV store and EFM](https://github.com/onflow/flow-go/pull/6291)
  - [Extended KV storage to store EpochExtensionViewCount](https://github.com/onflow/flow-go/pull/6272)
  - [Implemented EjectIdentity service event and integrated in the protocol state](https://github.com/onflow/flow-go/pull/6296)
  - [Implemented protocol side changes on how EpochCommit and IndexMap is being used](https://github.com/onflow/flow-go/pull/6338)
  - Reviewing Pebble PR
  - Testnet spork prep

* <ins>Data Availability:</ins>
  - Fixes for testnet after upgrade ([PR #6340](https://github.com/onflow/flow-go/pull/6340), [PR #6342](https://github.com/onflow/flow-go/pull/6342))
  - KROK Team
    - Check version control during script execution ([PR #6134](https://github.com/onflow/flow-go/pull/6134))
    - Fix bug with `select` option in REST API ([PR #6300](https://github.com/onflow/flow-go/pull/6300))
    - Use indexed height as base when pruning execution data ([PR #6217](https://github.com/onflow/flow-go/pull/6217))
* <ins>Cryptography:</ins>
  - JVM-SDK
    - [Finished refactoring ECDSA signatures + added tests](https://github.com/onflow/flow-jvm-sdk/pull/71)
    - [Extended transaction signature tests and examples PR](https://github.com/onflow/flow-jvm-sdk/pull/77)
  - State proofs: discussions and VC constructions research
  - Update the crypto module with a new BLST release
  - Secure enclave blog review

* <ins>Rosetta:</ins>
  - Released completed Cadence 1.0 upgraded SDK to Maven
  
**This sprint**

* <ins>EFM Recovery</ins>
  - Finish Pebble PR review
  - DKG smart contract updates (cont.)
  - Address feedback and merge [EFM Recovery transaction](https://github.com/onflow/flow-core-contracts/pull/440) PR
  - Finish [EFM integration test part 2](https://github.com/onflow/flow-go/issues/6164)
  
* <ins>Data Availability:</ins>
  - ProtocolDB pruning design
  - KROK Team
    - Add StopControl for access nodes ([Issue #5790](https://github.com/onflow/flow-go/issues/5790) - In review)
    - Add support pruning pebble exec data db ([Issue #6260](https://github.com/onflow/flow-go/issues/6260) - In review)
    - Expand on payer balance checks ([Issue #6128](https://github.com/onflow/flow-go/issues/6128) - Waiting to merge, [Issue #6129](https://github.com/onflow/flow-go/issues/6129) - In review, [Issue #6139](https://github.com/onflow/flow-go/issues/6139) - In review)
    - Start registers db pruning ([Issue #6066](https://github.com/onflow/flow-go/issues/6066) - In review, [Issue #6068](https://github.com/onflow/flow-go/issues/6068))
    - Test pebble execution data db on testnet ([Issue #6357](https://github.com/onflow/flow-go/issues/6357))
    - Test execution data pruning on testnet ([Issue #6358](https://github.com/onflow/flow-go/issues/6358))

* <ins>Cryptography:</ins>
  - State proofs: performance estimations of some VC/set accumulator constructions
  - Pick up SPoCK aggregation related reads if time permits

* <ins>Protocol misc</ins>
  - Preparing for Testnet Spork
    - [Consensus Timing Changes]([url](https://flowfoundation.notion.site/Cruise-Control-headroom-for-speedups-46dc17e07ae14462b03341e4432a907d?pvs=4))


**On Hold**
* Implement BFT mitigations to enable 20 permissionless ANs

---

### **DeFi** \[Jerome]

Cycle Objective(s): 
- EVM partner onboarding
- Deliver Axelar bridge

**Done last sprint**
  * JVM-SDK 
    * Addressed last loose ends required to release SDK
  * Updated deBridge integration for testnet
  * Axelar
    * Unblocked compatibility test failures needing resolution by Axelar
    * Provide guidance and support to build binaries for Access Node and EVM GW for permissionless validator node operators
  * ANKR
    * Addressed several EVM GW issues blocking them
  
**This sprint**
  * Continue supporting Axelar, Ankr, Coinmetrics 
  
**On Hold**

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
- Update developer docs to remove previewn net and added new documentation for EVM data indexers

**Done last sprint**

**Crescendo Rewards**

**Smart Contracts**
- Deployed Rewards Contract to Testnet
- Successfully staged and migrated

**Backend**

- [Update Cadence code for minted fields]https://github.com/onflow/crescendo-rewards-be/issues/62)
- [Remove accounts table](https://github.com/onflow/crescendo-rewards-be/issues/32)
- [Script/Tx config based on environment](https://github.com/onflow/crescendo-rewards-be/issues/67)
- [Setup last synced](https://github.com/onflow/crescendo-rewards-be/pull/69)
- [Setup environment configurations](https://github.com/onflow/crescendo-rewards-be/issues/74)
- [Setup testing](https://github.com/onflow/crescendo-rewards-be/issues/76) 

**Frontend**

- [Create new partner card](https://github.com/onflow/crescendo-rewards/issues/78)
- [Refactor countdown card to use on various pages](https://github.com/onflow/crescendo-rewards/issues/80)
- [Add locking form](https://github.com/onflow/crescendo-rewards/pull/83)
- [Setup flow configuration](https://github.com/onflow/crescendo-rewards/issues/84)
- [Change nft selection on carousel change](https://github.com/onflow/crescendo-rewards/pull/86)
- [Add logic for locking to new or existing NFTs](https://github.com/onflow/crescendo-rewards/pull/87)
- [Use lock end date from chain for countdown card](https://github.com/onflow/crescendo-rewards/issues/88)
- [Add last synced to leaderboard](https://github.com/onflow/crescendo-rewards/issues/51)
- [Resolve and display NFT](https://github.com/onflow/crescendo-rewards/issues/92)
- [Handle NFT selection and deselection for locking form](https://github.com/onflow/crescendo-rewards/pull/94)
- [Add metrics to rewards page](https://github.com/onflow/crescendo-rewards/pull/96)
- [Refresh rewards page after lock](https://github.com/onflow/crescendo-rewards/issues/98)
- [Add not connected wallet state on lock page](https://github.com/onflow/crescendo-rewards/issues/100)
- [Add subheader](https://github.com/onflow/crescendo-rewards/issues/102) 
- [Change partner grid layout to match new mock](https://github.com/onflow/crescendo-rewards/pull/104) 

**X-Chain Axelar Bridge**
- [Flow Bridge App Epic](https://github.com/onflow/flow-bridge-app/issues/1)

**FCL Discovery**

- [Custom-rendered QR codes](https://github.com/onflow/fcl-discovery/issues/212)
- [Use Chakra theming properly](https://github.com/onflow/fcl-discovery/issues/214)
- [Adjust Wallet Selection page to match designs](https://github.com/onflow/fcl-discovery/issues/215)
- [GetWallet page does not respond to screen size changes properly](https://github.com/onflow/fcl-discovery/issues/217)
- [walletUid appearing in /api/wallets result](https://github.com/onflow/fcl-discovery/issues/222)
- [Implement authn bypass for extension services](https://github.com/onflow/fcl-discovery/issues/226)
- [QR doesn't work in dark mode](https://github.com/onflow/fcl-discovery/issues/227)
- [Add loading spinner to handle QR delay](https://github.com/onflow/fcl-discovery/issues/228)
- [Mobile deeplinking](https://github.com/onflow/fcl-discovery/issues/232)
- [Responsive modal for mobile](https://github.com/onflow/fcl-discovery/issues/233)
- [Fix popup blocker issue with deeplinks on mobile](https://github.com/onflow/fcl-discovery/issues/235)
- [Cleanup install links](https://github.com/onflow/fcl-discovery/issues/240)

**VS Code Extension**

- [InternalEVM is not recognized & results in problems within EVM contract](https://github.com/onflow/vscode-cadence/issues/574) 

**Lost and Found FLIP**

- FLIP Created (BD enagaing Flowty)
- Implementation work beginning for Flow Port

**Faucet**

- Updated for Testnet
 
**Flow Port**

- wUSDC Flow Port Swap and Documentation

**Docs**

- [Add Internal Link Icons](https://github.com/onflow/docs/issues/805)

**Flow CLI**

- [Fix EVM contract in C1.0 Update Validator](https://github.com/onflow/flow-cli/issues/1693)

**Smart Contracts**

- [wUSDC Contract](https://github.com/onflow/bridged-usdc) 

**This sprint**
**Sprint goal Flow Axelar Cross-chain Bridge / Documentation Updates, Crescendo Rewards, FCL Discovery and WC Integration, Lost and Found (Integration - Flow Port, Flow Wallet)**

- [EPIC] Crescendo Rewards Portal
  - [FE](https://github.com/onflow/crescendo-rewards/issues/1 )
  - [BE](https://github.com/onflow/crescendo-rewards-be/issues/1)
  - [SC](https://github.com/onflow/crescendo-rewards-sc/issues/7)
- [EPIC FCL WalletConnect + Discovery Improvements](https://github.com/onflow/fcl-js/issues/1872)
- [EPIC Solving Initialization/Storage Issues - Lost and Found FLIP and Port integration](https://github.com/onflow/flow-port/issues/292)
- [EPIC - EVM Bridge - bridge.flow.com](https://github.com/onflow/flow-bridge-app/issues/1)

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

- Continue & Ship Account Linking UI/UX and functionality
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
- Prepare flow.com, onflow.org & nodes.onflow.org domains for CloudFlare account migration
- Prepare to spork FF & DL nodes 

**Done last sprint**

**CloudFlare**
- [Migrate benchmark.onflow.org & benchnet.onflow.org to FF CloudFlare account](https://github.com/dapperlabs/terraform/pull/4319/files)

**EVM Gateway**
- [Create infra for Devnet EVM GW](https://github.com/dapperlabs/terraform/pull/4321) 
- [Create KMS keys for Devnet EVM GW](https://github.com/dapperlabs/terraform/pull/4320) 
- [Fix DNS records for Devnet EVM GW](https://github.com/dapperlabs/terraform/pull/4324)
- [Create EVM GW Ansible config for Devnet](https://github.com/dapperlabs/dapper-flow-hosting/pull/1559)
- [Create Dashboard for EVM GW Monitoring](https://flowfoundation.grafana.net/d/fdtxeq977nif4d/evm-gateway?var-network=devnet0&var-lb=testnet&from=now-5m&to=now&timezone=browser)
- [Create Documentation for Monitoring & Access](https://www.notion.so/flowfoundation/EVM-Gateway-b5e363611abf4dfa963a471877cb5b92)
- Create Alerts for Monitoring EVM GW System usage

**Spork**
- [Create Ansible Configuration for TN51 spork](https://github.com/dapperlabs/dapper-flow-hosting/pull/1558)
- [Create Infra for TN51 Spork](https://github.com/dapperlabs/dapper-flow-hosting/pull/1558)
- [Create Buckets for traces](https://github.com/dapperlabs/terraform/pull/4334)

**Support**
- [Create DNS record for bridge.flow.com](https://github.com/dapperlabs/terraform/pull/4335/files)
- [Create KMS Key for USDC Contract](https://github.com/dapperlabs/terraform/pull/4326)

**This Sprint**
- Prepare CloudFlare zones for flow.com, onflow.org, and nodes.onflow.org migration 
- Deploy MN EVM GW in preparation for MN spork 
- Prepare Infra & configuration for MN Network upgrade

---

### **Governance and Tokenomics** \[Kshitij]
Cycle Objective(s): Transaction fees on EVM, increasing transaction fees and inflation reduction plan.

**Done last sprint**
- EN operator contract for lease
- Work with Dete on future fee on Flow (not be launched with Crescendo launch)

**This sprint**
- Get the execution node live
- Continue supporting rewards platform team on Tokenomics related analysis
- Model stable state economics, throughput, fees and inflation
- Draft research doc that explains the vision
- Organize monthly GWG

**On Hold**


**Active Epics**

- N/A
