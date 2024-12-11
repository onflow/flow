# Overview

### Team Wins 🎉

- Ready for Crescendo mainnet launch - v0.37.9
- Added check-storage command to util program to check health of execution state using snapshot.
- EVM dashboard up & running in Grafana
- Shipped preseason (locking season) of [Flow community rewards](rewards.flow.com) platform
- 100% Ledger Flow App 0.13.0 test coverage on Flow Port, (testnet, Cadence 1.0)
- FLOW REWARDS LAUNCHED!!! 2.7m Locked in under 48hrs
- NFT TokenList launched as a replacement for NFT Catalog through UX WG


### General updates

### OOO
- [Full List](https://www.notion.so/flowfoundation/de89aa4e79364216a665888335a1cdee?v=4de18b26f60d4bae8f62724dddcce260)

---

### Mainnet Uptime - Last 14 days (08/16/24 to 08/29/24) \[Vishal]

|                         | Target | Current Score | Error budget used |
|:------------------------|:------:|:-------------:|:-----------------:|
| Collection Finalization | 99.9%   |    100%       |       0%         |
| Block Finalization      | 99.9%   |    100%       |       0%         |
| Transaction Execution   | 99.9%   |    100%       |       0%         |
| Block Sealing           | 99.9%   |    100%       |       0%         |
| Access API Liveness     | 99.9%   |    99.956%    |       43.7%       |

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


**Crescendo MN upgrade**
- Cadence migration
    - Needed for CLI fix: [Export type requirement extraction](https://github.com/onflow/flow-go/pull/6395)
- Network tooling / infra / bootstrap improvements
    - [wait for downloading checkpoint before starting up consensus](https://github.com/dapperlabs/dapper-flow-hosting/pull/1577)
    - [CI - print and include the sha256 checksum of the boot tools and util](https://github.com/onflow/flow-go/pull/6404)
    - [check checkpoint has been downloaded](https://github.com/dapperlabs/dapper-flow-hosting/pull/1574)
- Dependency updates (tooling updates & fixes)
    - [1](https://github.com/onflow/flow-cli/pull/1714), [2](https://github.com/onflow/flow-cli/pull/1714), [3](https://github.com/onflow/flow-evm-gateway/pull/478), [4](https://github.com/onflow/flixkit-go/pull/76), [5](https://github.com/onflow/cadence-tools/pull/421), [6](https://github.com/onflow/flowkit/pull/71), [7](https://github.com/onflow/cadence-tools/pull/420), [8](https://github.com/onflow/flow-emulator/pull/738), [9](https://github.com/onflow/cadence-tools/pull/419), [10](https://github.com/onflow/flow-go/pull/6403), [11](https://github.com/onflow/flow-cli/pull/1704), [12](https://github.com/onflow/flow-evm-gateway/pull/470), [13](https://github.com/onflow/flow-go/pull/6390), [14](https://github.com/onflow/flow-go-sdk/pull/732), [15](https://github.com/onflow/flixkit-go/pull/75), [16](https://github.com/onflow/cadence-tools/pull/417), [17](https://github.com/onflow/flowkit/pull/70), [18](https://github.com/onflow/cadence-tools/pull/416), [19](https://github.com/onflow/flow-emulator/pull/734), [20](https://github.com/onflow/cadence-tools/pull/415), [21](https://github.com/onflow/flow-go/pull/6386), [22](https://github.com/onflow/flow-go-sdk/pull/731), [23](https://github.com/onflow/flow-go/pull/6383)

**Cadence Language**
- Handling of contracts not upgraded to 1.0
    - [Fix program recovery](https://github.com/onflow/cadence/pull/3548)
    - [Add Type.isRecovered field](https://github.com/onflow/cadence/pull/3505)
- Bugfix
    - [Fix contract update error when old program has errors](https://github.com/onflow/cadence/pull/3554)
    - migration:
        - [Cadence migration is non-deterministic since crescendo RC3](https://github.com/onflow/cadence/issues/3536)
        - [View checking incorrectly assumes code type-checks](https://github.com/onflow/cadence/issues/3529)
- Improvement
    - [Check if CBOR tag number is reserved by atree before using it to encode Cadence values](https://github.com/onflow/cadence/pull/3532)
    - [Cannot use interface-converted type-requirements in fields](https://github.com/onflow/cadence/issues/3527)
- Docs
    - [Improve the example for type-requirement removal](https://github.com/onflow/cadence-lang.org/pull/134)
    - [Improve documentation for capabilities](https://github.com/onflow/cadence-lang.org/pull/133)
- Tests
    - [Smoke test update of enum key in dictionary](https://github.com/onflow/cadence/pull/3556)
    - [Add regression tests for nil-coalescing bug](https://github.com/onflow/cadence/pull/3553)

**Cadence Execution**
- Handling of contracts not upgraded to 1.0
    - [Enable program recovery on MN](https://github.com/onflow/flow-go/pull/6336)
    - [Recover NFT Collections](https://github.com/onflow/flow-go/pull/6394)
    - [Recover NFT contract](https://github.com/onflow/flow-go/pull/6388)
- Bugfix
    - [NormalizedExecutionTimePerComputationUnit reported incorrectly after spork](https://github.com/onflow/flow-go/issues/6346)
- Util
    - [Add command to debug transaction](https://github.com/onflow/flow-go/pull/6385)
    - [Move and export some migration funcs to util package for reuse](https://github.com/onflow/flow-go/pull/6363)
    - Diff-state:
        - [Add support for cap_tag domain](https://github.com/onflow/flow-go/pull/6407)
        - [Skip EVM storage account for value comparison](https://github.com/onflow/flow-go/pull/6401)
    - Check-storage:
        - [Add support for cap_tag domain](https://github.com/onflow/flow-go/issues/6405)
        - [Skip EVM storage account](https://github.com/onflow/flow-go/pull/6399)
        - [Add check-storage command to util program to check storage health of execution state](https://github.com/onflow/flow-go/pull/6364)
- Execution effort re-calibration
    - [Use multiple executions in local data collection](https://github.com/onflow/flow-execution-effort-estimation/pull/1)
    - emulator: [Update execution effort constants](https://github.com/onflow/flow-emulator/pull/729)
- Tests
    - [Add test for storage capability migration determinism](https://github.com/onflow/flow-go/pull/6375)
    - Atree: [Make smoke tests check if CBOR tag nums are reserved](https://github.com/onflow/atree/pull/436)

**EVM Core**
- Improvement
    - [Decode legacy block event](https://github.com/onflow/flow-go/pull/6398)
    - [Split contract implementation into separate package](https://github.com/onflow/flow-go/pull/6396)
    - [Remove legacy migrations needed for Previewnet](https://github.com/onflow/flow-go/issues/6368)
    - [Use a fixed coinbase address for Run and BatchRun and transfer gas fees afterward](https://github.com/onflow/flow-go/pull/6380)
    - [Set prevrandao value on block level](https://github.com/onflow/flow-go/pull/6378)
- Metrics & Logging
    - [Let the system transaction report metrics](https://github.com/onflow/flow-go/pull/6362)
    - [Expose logger to the EVM environment](https://github.com/onflow/flow-go/pull/6343)
- Tests
    - [Improve EVM addresses in tests](https://github.com/onflow/flow-go/pull/6400)

**EVM Gateway**
- Feature
    - State Index
        - [Ledger implementation](https://github.com/onflow/flow-evm-gateway/issues/449)
- Bugfix
    - [eth_getLogs returns incorrect records when filtering by block number](https://github.com/onflow/flow-evm-gateway/issues/439)
    - [EffectiveGasPrice is not properly set for all transaction types](https://github.com/onflow/flow-evm-gateway/pull/479)
    - [Index field on receipt logs does not return correct value for blocks with multiple transactions & logs](https://github.com/onflow/flow-evm-gateway/pull/462)
    - [EVM blockheight metric being emitted is Cadence block height rather than EVM block height](https://github.com/onflow/flow-evm-gateway/issues/455)
    - [Unsupported mainnet network ID for --flow-network-id config flag](https://github.com/onflow/flow-evm-gateway/issues/456)
    - [Logging of API responses lacks certain fields](https://github.com/onflow/flow-evm-gateway/issues/440)
    - [Fix calculation of `gasUsed` field returned on block endpoints](https://github.com/onflow/flow-evm-gateway/pull/444)
- Improvement
    - [Refactor bootstrap to make it modular](https://github.com/onflow/flow-evm-gateway/pull/481)
    - [Make engine restart logic more resilient](https://github.com/onflow/flow-evm-gateway/issues/85)
    - [Decode legacy block event](https://github.com/onflow/flow-evm-gateway/pull/475)
    - [Decode legacy receipts](https://github.com/onflow/flow-evm-gateway/pull/474)
    - [Refactor receipt model](https://github.com/onflow/flow-evm-gateway/pull/473)
    - [eth_coinbase should reflect the actual coinbase being used on EVM.run](https://github.com/onflow/flow-evm-gateway/issues/490)
    - [Patch block RLP decoding to handle addition of PrevRandao field](https://github.com/onflow/flow-evm-gateway/pull/472)
    - [Optimize traces engine to handle empty blocks](https://github.com/onflow/flow-evm-gateway/issues/464)
    - [Empty miner field on eth_getBlockByNumber](https://github.com/onflow/flow-evm-gateway/issues/454)
    - [Enrich the information contained in error messages](https://github.com/onflow/flow-evm-gateway/pull/453)
- Monitoring
    - [Monitor operator balance](https://github.com/onflow/flow-evm-gateway/pull/487)
- fixing index after TN HCU
    - [Revert "Decode legacy receipts"](https://github.com/onflow/flow-evm-gateway/pull/485)
- Minor fixes and improvements
    - [Validate gas price in config](https://github.com/onflow/flow-evm-gateway/pull/494)
    - [fix metric balance initialization](https://github.com/onflow/flow-evm-gateway/pull/493)
    - [Wait for sigint signal](https://github.com/onflow/flow-evm-gateway/pull/492)
- Docs
    - [Update running docs](https://github.com/onflow/flow-evm-gateway/pull/484)

**This sprint**

- Objective 1, KR5: Mainnet Upgrade to Crescendo Release
  - Investigate and fix any high/critical severity issues reported on Crescendo on TN ([Crescendo launch on Mainnet tasklist](https://github.com/onflow/cadence/issues/2642))
  - Investigate / Fix any security report incoming from bug bounty.

- Objective 2, KR 1: Update transaction fees weights for the execution operations on TN and MN
  -  Continue work on [Execution Effort Calibration](https://github.com/onflow/flow-go/issues/5598)

- Cadence Execution
  - Continue: [Add support for storage health check of EVM registers](https://github.com/onflow/flow-go/issues/6393)
  - Continue: [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

- EVM 
  - Continue monitoring EVM GW stability
  - Continue work on [local state index](https://github.com/onflow/flow-evm-gateway/issues/322)
  - KROK
     - EVM Gateway benchmarking

- EVM Gateway
  - continue work on [Benchmarking](https://github.com/onflow/flow-evm-gateway/issues/19)

- Badger -> Pebble Investigation/POC
  - Continue work on [Protocol State Migration POC](https://github.com/onflow/flow-go/issues/6137) -> changing interface to batch write from transaction to make the future switch to Pebble easier.

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
  - Formalized protocol expectation: consensus finalization never holds for more than 1000 views
     - code :point_right: [`FinalizationSafetyThreshold`](https://github.com/onflow/flow-go/pull/6323)
     - documentation in code base ([PR #6323](https://github.com/onflow/flow-go/pull/6323), [#6318](https://github.com/onflow/flow-go/pull/6318), [#6384](https://github.com/onflow/flow-go/pull/6384))
  - [Addressed all feedback on core contracts PR](https://github.com/onflow/flow-core-contracts/pull/440)
  - [Published PR for integration test part 2](https://github.com/onflow/flow-go/pull/6424)

* <ins>Cryptography:</ins>

  * State proofs: performance estimations of VC and set accumulator-based state trees:
    * Add new bench functions in the crypto lib
    * High level designs and operation estimations of EN and VN
    * Ddesigns covered (KZG-Pointproofs-RSA accumulator) - designs studied but not finalized (Catalono-Pedersen IPA-Nguyen)
  * JVM-SDK: minor review
  * Secure enclave blog review

* <ins>Consensus Timing:</ins>
  - fixed systematic bias in block rate controller (aka [Cruise Control](https://github.com/onflow/flow-go/blob/master/consensus/hotstuff/cruisectl/README.md)) for small consensus committees (e.g. affecting testnet) [PRs [#6379](https://github.com/onflow/flow-go/pull/6379), [#6392](https://github.com/onflow/flow-go/pull/6392)]

* <ins>Data Availability:</ins>
  - Tested and documented process for generating checkpoints for AN dynamic bootstrapping ([notion](https://www.notion.so/flowfoundation/Build-and-Upload-Checkpoint-for-AN-Indexing-d3e916bc3a364a2bb484b289933b6a46))
  - Tested and documented process for starting AN with local EVM Gateway ([notion](https://www.notion.so/flowfoundation/Setting-up-EVM-Gateway-with-a-local-Access-node-Setup-bab9978f5c9c4113a6b118fb27cc0296))
  - KROK Team
    - Add metrics for payer validation ([PR #6239](https://github.com/onflow/flow-go/pull/6239))
    - Improvement to `ipfs/go-ds-pebble` ([PR #6411](https://github.com/onflow/flow-go/pull/6411), [ipfs/go-ds-pebble#36](https://github.com/ipfs/go-ds-pebble/pull/36))
    - Add compatible range info to NodeVersionInfo endpoint ([PR #6294](https://github.com/onflow/flow-go/pull/6294))

**This sprint**

* <ins>EFM Recovery</ins>
  - DKG smart contract updates (cont.)
  - Final feedback and merge [EFM Recovery transaction](https://github.com/onflow/flow-core-contracts/pull/440) PR
  - Address feedback [EFM integration test part 2](https://github.com/onflow/flow-go/issues/6164), [PR](https://github.com/onflow/flow-go/pull/6424)
  - EFM Ejected node integration test https://github.com/onflow/flow-go/issues/6331
  - Allowing DKG key-sets to be re-used to recover from Epoch Fallback Mode, even if nodes are dropping out ([PR #6338](https://github.com/onflow/flow-go/pull/6338) ongoing) 

* <ins>Data Availability:</ins>
  - ProtocolDB pruning design
  - KROK Team
    - Add StopControl for access nodes ([Issue #5790](https://github.com/onflow/flow-go/issues/5790) - In review)
    - Add support pruning pebble exec data db ([Issue #6260](https://github.com/onflow/flow-go/issues/6260) - In review)
    - Expand on payer balance checks ([Issue #6129](https://github.com/onflow/flow-go/issues/6129) - In review, [Issue #6139](https://github.com/onflow/flow-go/issues/6139) - In review)
    - Start registers db pruning ([Issue #6066](https://github.com/onflow/flow-go/issues/6066) - In review, [Issue #6068](https://github.com/onflow/flow-go/issues/6068) - In review)
    - Store Tx Result in database ([Issue #6302](https://github.com/onflow/flow-go/issues/6302))
    - Test pebble execution data db on testnet ([Issue #6357](https://github.com/onflow/flow-go/issues/6357))
    - Test execution data pruning on testnet ([Issue #6358](https://github.com/onflow/flow-go/issues/6358))
    - Documentation improvements ([Issue #815](https://github.com/onflow/docs/issues/815), [Issue #727](https://github.com/onflow/docs/issues/727) - In review)
    - Wrap up rosetta integration test improvements ([Issue #57](https://github.com/onflow/rosetta/issues/57))

* <ins>Cryptography:</ins>
  - State proofs: performance estimations of some VC/set accumulator constructions
  - Pick up SPoCK aggregation related reads if time permits

* <ins>Misc other</ins>
  - Ongoing Pebble migration PR reviews

**On Hold**
* Implement BFT mitigations to enable 20 permissionless ANs

---

### **DeFi** \[Jerome]

Cycle Objective(s): 
- EVM partner onboarding
- Deliver Axelar bridge

**Done last sprint**
  * Supported Axelar with node configuration and operational setup
  * Supported Celer with contract upgrade. Contracts now staged on Mainnet
  * Supported Safe.global with project spinup
    * Created repo clones for project & Github Connection link for automation
    * Created DNS names for testnet and mainnet endpoints
    * Created EVM GW node infra behind those endpoints
  * Updated JVM-SDK repo examples updates to parity with Go SDK 
  
**This sprint**
  * Continue supporting Celer, Axelar and other key partners
  * Complete remaining JVM-SDK examples
  
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

Contracts
- [Replace AccrualModel.getWeightedAPR() with .getBoost()](https://github.com/onflow/crescendo-rewards-sc/issues/66)
- [Respond to review findings](https://github.com/onflow/crescendo-rewards-sc/issues/67)
- [Add svg render](https://github.com/onflow/crescendo-rewards-sc/pull/69)
- [Finalize naming conventions & refactor](https://github.com/onflow/crescendo-rewards-sc/issues/70)
- [Mainnet deployment](https://github.com/onflow/crescendo-rewards-sc/issues/77)

Backend

- [Fix @onflow/types error in logs](https://github.com/onflow/crescendo-rewards-be/issues/157)
- [Fix Blocto Login](https://github.com/onflow/crescendo-rewards-be/issues/155)
- [Secure referrals api routes using address in referral code](https://github.com/onflow/crescendo-rewards-be/issues/141)
- [Move address validation into middleware](https://github.com/onflow/crescendo-rewards-be/issues/140)
- [Setup cors with correct urls](https://github.com/onflow/crescendo-rewards-be/issues/137)
- [Add referral verification route](https://github.com/onflow/crescendo-rewards-be/issues/122)
- [Rewards APIs](https://github.com/onflow/crescendo-rewards-be/issues/114)
- [Add user signature fallback for /verify](https://github.com/onflow/crescendo-rewards-be/issues/112)
- [Setup production environment](https://github.com/onflow/crescendo-rewards-be/issues/108)
- [add scripts for cadence 1.0](https://github.com/onflow/crescendo-rewards-be/issues/99)
- [Deploy contracts to migrationnet](https://github.com/onflow/crescendo-rewards-be/issues/86)
- [Hook up to testnet](https://github.com/onflow/crescendo-rewards-be/issues/85)
- [Get job running on staging](https://github.com/onflow/crescendo-rewards-be/issues/84)
- [Setup ratelimiting with redis](https://github.com/onflow/crescendo-rewards-be/issues/83)
- [Secure any routes that need to be protected](https://github.com/onflow/crescendo-rewards-be/issues/60)
- [Create referrals schema and helpers](https://github.com/onflow/crescendo-rewards-be/issues/45)
- [Switch job runner from mock scripts to real on chain data](https://github.com/onflow/crescendo-rewards-be/issues/34)

Frontend

- [Round leaderboard entries to nearest $FLOW](https://github.com/onflow/crescendo-rewards/issues/282)
- [Add formatter for referral codes](https://github.com/onflow/crescendo-rewards/issues/280)
- [Add more slides to carousel](https://github.com/onflow/crescendo-rewards/issues/238)
- [Increase boost precision](https://github.com/onflow/crescendo-rewards/issues/226)
- [Error displayed after logging in](https://github.com/onflow/crescendo-rewards/issues/196)
- [Use SWR for activity hook](https://github.com/onflow/crescendo-rewards/issues/194)
- [Verify referral code in form](https://github.com/onflow/crescendo-rewards/issues/182)
- [Add lock period countdown](https://github.com/onflow/crescendo-rewards/issues/140)
- [Setup WalletConnect](https://github.com/onflow/crescendo-rewards/issues/137)
- [Link to block explorer](https://github.com/onflow/crescendo-rewards/issues/275)
- [Add logic for minting a new nft even if you have an existing one](https://github.com/onflow/crescendo-rewards/issues/274)
- [Coming soon partner page](https://github.com/onflow/crescendo-rewards/issues/219)
- [Get account balance in hook](https://github.com/onflow/crescendo-rewards/issues/206)
- [[FEATURE] Add 25%, 50%, and MAX buttons for Lock Input](https://github.com/onflow/crescendo-rewards/issues/205)
- [[FEATURE] Improve Layout For Mobile](https://github.com/onflow/crescendo-rewards/issues/192)
- [Make total value locked use animated component when increment when changed](https://github.com/onflow/crescendo-rewards/issues/191)
- [Maintenence Mode from Env Var](https://github.com/onflow/crescendo-rewards/issues/189)
- [Add boost to subheader](https://github.com/onflow/crescendo-rewards/issues/185)
- [Animated value component](https://github.com/onflow/crescendo-rewards/issues/177)
- [Distribution lock period, pre lock countdown, and other countdown card logic](https://github.com/onflow/crescendo-rewards/issues/172)
- [Update partner card to match mock](https://github.com/onflow/crescendo-rewards/issues/129)
- [Add jwt to account route](https://github.com/onflow/crescendo-rewards/issues/112)
- [Remove dapper auth and show modal instead](https://github.com/onflow/crescendo-rewards/issues/107)
- [Add rules dialogs](https://github.com/onflow/crescendo-rewards/issues/106)
- [Non connected wallet state on lock page](https://github.com/onflow/crescendo-rewards/issues/100)

X-Chain Axelar Bridge
- [Flow Bridge App Epic](https://github.com/onflow/flow-bridge-app/issues/1)
Waiting for Axelar contract deployment to testnet

FCL Discovery
- Shipped FCL Discovery V2 Improvements
- [Don't show install links for unsupported browsers](https://github.com/onflow/fcl-discovery/issues/259)
- [[V2] Milestone 2 - UI Completeness](https://github.com/onflow/fcl-discovery/issues/210)

FCL
- [Allow FCL Discovery to Display WalletConnect QR Codes while open](https://github.com/onflow/fcl-js/issues/1923)
- [Allow FCL Discovery to Execute Extension While Open](https://github.com/onflow/fcl-js/issues/1924)
- [[BUG] Dapper Wallet problems with Newer Releases](https://github.com/onflow/fcl-js/issues/1818)

Flow CLI
- [Include EVM stdlib in staging update validator](https://github.com/onflow/flow-cli/pull/1697)

Public Key Indexer 
- [Update for Cadence v1](https://github.com/onflow/flow-public-key-indexer/issues/17)

**This sprint**
**Sprint goal Crescendo Readiness / Flow Axelar Cross-chain Bridge / Documentation Updates, Crescendo Rewards, Lost and Found (Integration - Flow Port, Flow Wallet)**

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
- Migrate flow.com to FF CloudFlare account
- Prepare onflow.org & nodes.onflow.org for migration to FF CloudFlare account
- [Remove unnecessary records from onflow.org](https://github.com/dapperlabs/terraform/pull/4346)

**EVM Gateway**
- [Create Mainnet EVM GW infra](https://github.com/dapperlabs/terraform/pull/4341)
- [Update KMS access for MN EVM GW](https://github.com/dapperlabs/terraform/pull/4362)
- [Create KMS key for EVM account](https://github.com/dapperlabs/terraform/pull/4360)
- [Create Mainnet EVM GWs for Safe](https://github.com/dapperlabs/terraform/pull/4356)
- [Update Testnet records for Safe EVM GWs](https://github.com/dapperlabs/terraform/pull/4355)
- [Create Testnet EVM GWs for Safe](https://github.com/dapperlabs/terraform/pull/4350)
- [Create new EVM GW node for Blue/Green deployments](https://github.com/dapperlabs/terraform/pull/4349)
- [Create MN EVM GW Ansible inventory](https://github.com/dapperlabs/dapper-flow-hosting/pull/1568)

**Spork Cleanup**
- [Scale down Devnet50 network](https://github.com/dapperlabs/terraform/pull/4338)

**Spork Prep**
- [Increase Migration Mainnet EN Disk Sizes](https://github.com/dapperlabs/terraform/pull/4358)
- [Create MN25 Ansilbe Inventory & Vars](https://github.com/dapperlabs/dapper-flow-hosting/pull/1569)
- Create MN25 Grafana alerts
- Assist with access to Migration Mainnet

**Support**
- [Fix bug in rate limit formatting](https://github.com/dapperlabs/dapper-flow-hosting/pull/1576)
- [Add KMS Key for NFT Storefront](https://github.com/dapperlabs/terraform/pull/4340)
- [Create dev machine for testing](https://github.com/dapperlabs/terraform/pull/4344)
- [Create DNS records for new customer.io solution](https://github.com/dapperlabs/terraform/pull/4342)

**This Sprint**
- Prepare CloudFlare zones for flow.com, onflow.org, and nodes.onflow.org migration 
- Migrate onflow.org & nodes.onflow.org zones to FF CloudFlare account
- Create infrastructure for DL & FF nodes
- Spork Mainnet
- Cleanup all infra used for spork prep

### **Governance and Tokenomics** \[Kshitij]
Cycle Objective(s): Vision for long-term tokenomics and dynamic fees on Flow, launch Flow rewards platform (preseason and seaoson-1)

**Done last sprint**
- Shipped rewards.flow.com
- Worked with Dete on future fees on Flow (not be launched with Crescendo launch) - txn fee, storage fee, other governance topics - [see notes](https://www.notion.so/flowfoundation/Dynamic-Transaction-Fees-on-Flow-fa7e7115e43a41a99ac9ca942dabcaf2)

**This sprint**

Rewards platform tracker [link](https://github.com/orgs/onflow/projects/65/views/1)
- Drive updates for 09/04 - design, copy, legal changes, revise FAQs, migration downtime
- For Season 1 (10/01 launch)
  - Unblock eng on reward distribution part of the product
  - Drive final decisions on points system, referral bonus, raffles, etc
	- Drive partner discussions - defilama, auditor, anti-sybil, etc.
  - Drive design and copy per the rebranding plan (tbd)
- Continue working with Dete on stable state tokenomics
- Discuss with a16z their node consolidation strategy

**On Hold**


**Active Epics**

- N/A

