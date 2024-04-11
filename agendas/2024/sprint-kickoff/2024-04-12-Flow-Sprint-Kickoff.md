# Overview


### Team Wins 🎉
- Integrated QuickNode Access node profiler with our Grafana [dashboard](https://flowfoundation.grafana.net/explore?schemaVersion=1&panes=%7B%222hf%22%3A%7B%22datasource%22%3A%22ddhnnosc07gn4e%22%2C%22queries%22%3A%5B%7B%22groupBy%22%3A%5B%5D%2C%22labelSelector%22%3A%22%7B%7D%22%2C%22spanSelector%22%3A%5B%5D%2C%22queryType%22%3A%22both%22%2C%22refId%22%3A%22A%22%2C%22datasource%22%3A%7B%22type%22%3A%22grafana-pyroscope-datasource%22%2C%22uid%22%3A%22ddhnnosc07gn4e%22%7D%2C%22profileTypeId%22%3A%22process_cpu%3Acpu%3Ananoseconds%3Acpu%3Ananoseconds%22%7D%5D%2C%22range%22%3A%7B%22from%22%3A%22now-1h%22%2C%22to%22%3A%22now%22%7D%7D%7D&orgId=1) - Vishal

### General updates


### OOO
- [Full List](https://www.notion.so/flowfoundation/de89aa4e79364216a665888335a1cdee?v=4de18b26f60d4bae8f62724dddcce260)
- Starting Next Week:

---

### Mainnet Uptime - Last 7 days (3/xx/24 to 3/xx/24) \[Vishal]

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
- Sev-3: Go routine leak on AN3 and EN1. Fixed with the libp2p DHT update. (slack [thread](https://dapperlabs.slack.com/archives/C014WBGR1J9/p1712074091594089))

### Key Release Dates & Breaking Changes

- Next Mainnet/Testnet network upgrade (spork):
  - Testnet: 5/22/24
  - Mainnet: 6/26/24
- First Testnet Migration test run: 

---

### FLIPs Tracker \[Kshitij]

|                         | Application | Cadence | Governance | Protocol | Total |  
|:------------------------|:------:|:-------------:|:-----------------:|:-----------------:|:-----------------:|
| Drafted     | 7  |    8   |       0          |       5          |        **20**          |
| Proposed    | 3  |    2     |       2          |       1          |        **8**          |
| Accepted    | 2  |    1     |       1       |       2          |        **6**          |
| Rejected    | 0  |    0     |       1       |       0          |        **1**          |
| Implemented | 1  |    19    |       2       |       0          |        **22**          |
| Released    | 4  |    0     |       3       |       4          |        **11**          |
| Total       | **17**  |    **30**    |       **9**       |       **12**          |        **68**          |

- No new FLIPs or changes during the sprint
- Some FLIPs are still not reflected in the project tracker. **Remember**: FLIP process starts with an issue creation.
(https://github.com/onflow/flips?tab=readme-ov-file#submitting-the-flip)
### Untagged FLIPs -
- https://github.com/onflow/flips/pull/246 
- https://github.com/onflow/flips/pull/195
- https://github.com/onflow/flips/pull/250
- https://github.com/onflow/flips/pull/256
  
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

### **Core Protocol** \[Jerome]
Cycle Objective(s): 

* Translate crypto performance improvements to consensus block rate increase
* Provide developers secure and non-rate limited way to access all of chain data (transactions, blocks, account balance, events, account balance etc) by locally running an access or an observer node
* Reduce CPU usage on Execution node by 30%
* Continue design and implementation of Sporkless Epoch Fallback Recovery solution

**Done last Sprint:**

* <ins>Zero-downtime Upgrades of Node Software:</ins>
  - Smart contract to coordinate protocol upgrade ([PR #411](https://github.com/onflow/flow-core-contracts/pull/411) in progress)


* <ins>EFM Recovery</ins>
  * Tooling to generate data for EFM recovery ([PR #5576](https://github.com/onflow/flow-go/pull/5576) in progress)


* <ins>Cryptography</ins>
  - Randomness-on chain contract: aligning on solution + implemented proposal + implemented tests ([PR #416](https://github.com/onflow/flow-core-contracts/pull/416) in progress)
  - New cryptography stack: 
    - fix CPU-compatability issue: `Artblocks` are unblocked, root cause and long-term solutions are still ongoing (requires `Figment`'s help)


* <ins>Consensus speedup:</ins>


* <ins>Data Availability:</ins>
  - KROK Team

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


* <ins>Data Availability:</ins>
  - Rollout local tx results to QuickNode ANs
  - Work with QN to get profile collection deployed - support debugging script exec
  - Enable programs cache on AN (Continue [PR #5585](https://github.com/onflow/flow-go/pull/5585) and testing)
  - KROK Team
    - Complete streaming account statuses endpoint ([PR #5406](https://github.com/onflow/flow-go/pull/5406))
    - Add tx results to streaming SendAndSubscribe response ([PR #5566](https://github.com/onflow/flow-go/issues/5566))
    - Unify Events API with new interfaces ([Issue #5557](https://github.com/onflow/flow-go/issues/5557))
    - Add integration tests for streaming blocks and observer APIs ([PR #5572](https://github.com/onflow/flow-go/issues/5572), [PR #5573](https://github.com/onflow/flow-go/issues/5573))


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

* Completed milestone #6 of JVM SDK update to analyze scope of work for subsequent update phase 

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
- Updated in-depth Migration Guide live.
- Kapa AI updated with latest sources from Forum/EVM/Cadence lang docs
- End-to-end video on upgrade process, steps and timeline.
- FUSD, USDC changes for C1.0 completed (in review).
- Flow JS Testing updated to Cadence 1.0 & released.
- Staging being tracked hourly now on active contracts list.
- Fungible Token bridging
- Successful Local smart contract state migration with emulator
- EVM chains updated to ethereum chain list repository
- Flow evm previewnet added to viem repository
- Create new staking banner explaining epoch transition window [#168](https://github.com/onflow/flow-port/issues/168)

**This sprint**
**Sprint goal focusing on updating EVM docs, tooling support, CLI Interactive Setup**

- [EPIC] EVM Docs [#654](https://github.com/onflow/docs/issues/654)
- [EPIC] FlowEVM Docs - Cadence Dev [#575](https://github.com/onflow/docs/issues/575)
- [EPIC] Enhance CLI init Command with Interactive Setup, Config Automation, and Default Project Structure [#1390](https://github.com/onflow/flow-cli/issues/1390)
- [EPIC] Update Internal Tools and Repos for C1.0 Support [#530](https://github.com/onflow/docs/issues/530)
- Write new doc on Sponsored Transactions under Advanced Topics [#692](https://github.com/onflow/docs/issues/692)
- Testing Ledger Cadence v1.0 transactions [#20](https://github.com/onflow/fcl-six/issues/20)
- Testing complex contracts deployment to previewnet EVM [#713](https://github.com/onflow/docs/issues/713)
- Stage and test core contracts 
- Circle USDC contract changes and integrations
- Add newsletter signup to developer landing page [#717](https://github.com/onflow/docs/issues/717)


**On Hold**

- Update Flow port for Cadence Crescendo instance [#279](https://github.com/onflow/flow-port/issues/279)
- Blocked: Update Playground to support Cadence 1.0 [#760](https://github.com/onflow/flow-playground/issues/760)

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

- Complete Web3.js integration, authorization
- VM Bridge integration, moving FT and NFT in app.
- CTD: Outreach with Coinbase Wallet, MetaMask, Shadow Wallet and Blocto
- CTD: Working with Apple on app approval & release

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


---

### **Governance and Tokenomics** \[Kshitij]
Cycle Objective(s): Transaction fees on EVM, increasing transaction fees and inflation reduction plan.

**Done last sprint**
- Forum post regarding proposals on EVM gas and transaction fee reviewed, published, and shared on Discord. Working groups were briefed to disseminate details of the proposed changes to the community in upcoming meetings. See the post [here](https://forum.flow.com/t/proposing-transaction-fee-changes-and-flow-evm-gas-charges-for-flow-crescendo-launch/5817)
- Modeled inflation reduction options including the impact on validator incentives. Discussed pros and cons with Dete; additional research is needed on new potential options that surfaced aimed at minimizing impact on validators, token holders, and network security. See deck [here](https://docs.google.com/presentation/d/1EBYqB8FwxHtOwaQMHiId0ZZv4bRNThNYrgF5-CZeI8M/edit?pli=1#slide=id.g26c5efcb5cb_0_280)
- Impact of transaction fee increase on partner costs was assessed by pulling latest data for top 20 transaction payers on Flow. Discussions held with BD/partnership team, and the timeline for partner outreach is set for mid-May. See research [here](https://docs.google.com/spreadsheets/d/1PPxxAotsIYLzydAnuBAgQe1BmEcamiuSQUmsDtrpaKs/edit#gid=1414811201)
- Working Groups convened to address challenges related to hosting working groups, particularly the formalization of WGs that have transitioned them into more structured townhall-style meetings rather than informal participatory sessions where tangible work was accomplished. Going forward, WGs wouldn't overtly concern themselves with formalization and structures except keeping GitHub pages updated after meetings
- Monthly Governance Working Group meeting was convened - Governance OKR updates were shared along with current status of FLIPs; also invited new community operators to set up consensus nodes (to maintain decentralization)

**This sprint**

- For decentralization efforts, work with a16z to consolidate three nodes, and with Coinbase to reduce one node they operate on leased stake
- Automation of decentralization dashboard to send messages when critical thresholds are crossed
- Gather and respond to community feedback on the forum post
- Draft FLIP on EVM gas to compute ratio and compute limit hike
- Update FLIP on transaction fee to suggest a transaction fee multiplier closely tied to FLOW token's market price
- Continue research on Inflation (new strategies, other networks, validator impact, etc.) and sync with Dete again
  

**On Hold**


**Active Epics**

- N/A
