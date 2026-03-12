# Overview

### Team Wins 🎉

- Approved 3 pending Cadence Flips ([1](https://github.com/onflow/flips/issues/359)[2](https://github.com/onflow/flips/issues/357), [3](https://github.com/onflow/flips/issues/355)) adding new features.
- Optimized transaction scheduler deployed on Mainnet.
- Completed testing of [Concurrent transaction execution](https://github.com/onflow/flow-go/issues/7571), updated fees contract deployed on Mainnet and fee collection is now sharded on 3 child accounts.

---

#### YTD SLA \[Vishal]

| Incident/upgrade       | Date      | Collection | Consensus | Execution | Verification | Access (QN) | EVM GW | Overall | Comments                                          |
|------------------------|-----------|------------|-----------|-----------|--------------|-------------|--------|---------|---------------------------------------------------|
| HCU                    | 1/1/2026  |            |           | 9         |              |             |        | 9       | Part of recovery from Security Incident           |
| HCU                    | 1/2/2026  |            |           | 9         |              |             |        | 9       | Part of recovery from Security Incident           |
| HCU                    | 1/3/2026  |            |           | 9         |              |             |        | 9       | Security Fix                                      |
| HCU                    | 1/3/2026  |            |           | 9         |              |             |        | 9       | Repeated the HCU                                  |
| EVM GW Issue           | 1/7/2026  |            |           | 9         |              |             | 32     | 32      | Public EVM endpoint unavailable                   |
| HCU                    | 1/29/2026 |            |           | 8         |              |             |        | 8       | Security Fix                                      |
| HCU                    | 2/6/2026  |            |           | 8         |              |             |        | 8       | Security Fix                                      |
| Sealing halt           | 2/11/2026 |            |           | 7         |              |             |        | 7       | FF and DL execution nodes went OOM and restarted  |
| HCU                    | 2/13/2026 |            |           | 9         |              |             |        | 9       | Security Fix                                      ||
| Total downtime in mins |           | 0          | 0         | 68        | 0            | 0           | 32     | 100     |                                                   |
| YTD (01/06/26) SLA     |           | 100.00%    | 100.00%   | 99.89%    | 100.00%      | 100.00%     | 99.95% | 99.84%  |                                                   |
| SLA for 2026           |           | 100.00%    | 100.00%   | 99.99%    | 100.00%      | 100.00%     | 99.99% | 99.98%  |                                                   |

### Incidents \[Vishal]


#### Planned downtime


#### Unplanned downtime


---

### FLIPs Tracker \[Vishal]

|             | Application | Cadence | Governance | Protocol |  Total  |
|:------------|:-----------:|:-------:|:----------:|:--------:|:-------:|
| Drafted     |      9      |    8    |     0      |    9     | **26**  |
| Proposed    |      1      |    2    |     4      |    0     |  **7**  |
| Accepted    |      3      |    2    |     3      |    1     |  **9**  |
| Rejected    |      0      |    1    |     1      |    0     |  **2**  |
| Implemented |      3      |    6    |     1      |    0     | **10**  |
| Released    |      4      |   35    |     11     |    10    | **60**  |
| Total       |   **20**    | **54**  |   **19**   |  **21**  | **114** |



---


# Working Group Updates

### **Cadence Language and Execution** \[Jan]

**Done last sprint**

**Cadence Language**

- Flips (new features):
    - adds for-in loop support for dictionaries: [FLIP 359: Allow for-in loop over dictionary keys](https://github.com/onflow/flips/issues/359)
    - standard lib addition for finding min/max of comparable values: [FLIP 357: Add Comparison Functions to Cadence](https://github.com/onflow/flips/issues/357)
    - improves input validation: [FLIP 355: Cadence Guard Statement](https://github.com/onflow/flips/issues/355)
- Testing
    - [Assert pretty instructions](https://github.com/onflow/cadence/pull/4451)
- Tools:
    - [[lint] Add support for applying suggested fixes](https://github.com/onflow/cadence-tools/pull/592)

**Cadence Execution**
- Logging improvement: [Improve debug logs for mismatching events](https://github.com/onflow/flow-go/pull/8479)
- Ops/Util improvement: [[Util] add subcommand to remove execution fork](https://github.com/onflow/flow-go/pull/8465)

**Flow EVM**

- Core
    - Cadence testing tramework improvement to facilitate testing of Solidity contracts: [Add `EVM` helper functions for testing environment](https://github.com/onflow/flow-go/pull/8391)
    - bugfix: [ Fix padding logic on `EncodeBytes` for data with multiple chunks](https://github.com/onflow/flow-go/pull/8425)        

**other**
- deployed on mainnet: [Simplify Scheduled Transaction priority limits](https://github.com/onflow/flow-core-contracts/pull/580)
- smart contracts bugfixes:
    - [Fix small bugs in TokenForwarding for bricked forwarder and wrong getSupportedVaultTypes](https://github.com/onflow/flow-ft/pull/185)
    - [Fix: three FungibleTokenSwitchboard bugs](https://github.com/onflow/flow-ft/pull/186)
    - [Fix getViews/resolveView mismatch and EVMBytesMetadata force-unwrap in ExampleNFT](https://github.com/onflow/flow-nft/pull/264)
    - [Fix five remaining bugs from security review](https://github.com/onflow/flow-nft/pull/265)

**This sprint**

- Cadence Language
    - Continue work on security improvements
    - On-hold: compiler correctness testing
    - On-hold: tacklig compiler+VM tech-debt
    - On-hold: deep-dive on compiler+VM performace

- Cadence Execution
    - Test conscurrent execution on one TN EN.
    - Test token supply tracking on one TN EN.
    - On-hold [Versioning of Execution Stack via Dynamic Protocol State](https://github.com/onflow/flow-go/issues/6999)
    - On-hold [Badger -> Pebble: remaining tasks and cleanup](https://github.com/onflow/flow-go/issues/7682)
    - On-Hold [Storehouse](https://github.com/onflow/flow-okrs/issues/166)
    - On-Hold: [Scheduled Transactions for EVM](https://github.com/onflow/flow-go/issues/8019)
    - On-Hold: New Trie research

- EVM
    - On-Hold, FCM support

**On Hold**
- [EOA control delegation](https://github.com/onflow/flow-go/issues/7441).
- [Provide immutable settings for each CCF format](https://github.com/onflow/cadence/issues/3448)

---

### **Core Protocol** \[Vishal]

Q1 Cycle Objective(s):
* Restore Flow protocol eng team to required critical mass [IN PROGRESS]
* [Data Availability] Improve network reliability by reducing API load on execution node [PAUSED]
* Building towards few Permissionless Collection Nodes [PAUSED]
* SPoCK Research [IN PROGRESS]
* Downgrade historical node hardware [COMPLETE]

**Last sprint completed, ongoing and starting**


* <ins>Cryptography</ins>



---

### DeFi - FCM and FYV \[Vishal]

**Done last sprint**

- Addressing contract review comments
    - [FCM: 5/5](https://github.com/orgs/onflow/projects/99/views/15) ✅
    - [FlowActions: 15/20](https://github.com/onflow/FlowActions/issues/95)
    - [FYV: 6/11](https://github.com/onflow/FlowYieldVaults/issues/131)
    - [FYV EVM: 5/19](https://github.com/onflow/FlowYieldVaultsEVM/issues/15)

- ALP

    - KROK Team:
        * Done:


      * In Review:   

      
      * In Progress


- FYV



- FYV Testing



- FCM Whitepaper/Documentation



**This sprint**

- ALP


- FYV


- FYV Testing



- FCM Whitepaper



---

### Security [Jan]

**Done Last Sprint**

- Cadence security improvements:
    - Security improvements: [1](https://github.com/onflow/cadence-internal/pull/438), [2](https://github.com/onflow/cadence-internal/pull/425), [3](https://github.com/onflow/cadence-internal/pull/437), [4](https://github.com/onflow/cadence-internal/pull/444), [5](https://github.com/onflow/cadence-internal/pull/433), [6](https://github.com/onflow/cadence-internal/pull/445), [7](https://github.com/onflow/cadence-internal/pull/447), [8](https://github.com/onflow/cadence-internal/pull/448), [9](https://github.com/onflow/cadence-internal/pull/446), [10](https://github.com/onflow/cadence-internal/pull/453)

- In-house financial analytics & fraud detection tooling
    - on hold

- Update of bug bounty program with HackenProof.
    - updated to [v1.2](https://drive.google.com/drive/folders/1BBl_M9uZIJk4MjZvm52tOMtomFNqUaY7)
        - Clarify reporting requirements.
        - Added Target-specific reporting requirement for Execution layer.

- Fungible token supply monitoring
    - [Implement Iterator interfaces for LoadedValueIterator](https://github.com/onflow/atree/pull/635)

- EVM Core - enable emergency pausing of all EVM-related APIs by governance comittee multisig:
    - [Add pause functionality on EVM system contract](https://github.com/onflow/flow-go/issues/8311)

**This Sprint**

- Cadence security improvements: [1](https://github.com/onflow/cadence-internal/issues/450), [2](https://github.com/onflow/cadence-internal/issues/406), [3](https://github.com/onflow/cadence-internal/issues/430)

- Update of bug bounty program with HackenProof.
    - Continue work on core contracts before adding to scope

- Fungible token supply monitoring
    - test on one TN EN and collect data

- On Hold (capacity)
    - In-house financial analytics & fraud detection tooling

### Performance [Jan]

**Done Last Sprint**

- Cross-vm bridging performance improvements:
    - [Cross-VM operations](https://github.com/onflow/flow-go/issues/8401) performance improvements:
        - Cadence:
            - [Optimize Cadence ArrayValue and Go []byte conversions (up to 13.7x faster and 8x less memory)](https://github.com/onflow/cadence/pull/4443)
            - [Optimize transferring array, dict, and composite (e.g., 2x faster for byte arrays)](https://github.com/onflow/cadence/pull/4448)
            - [Replace mapLoadedValueIterator wrapper by using Atree implementation](https://github.com/onflow/cadence/pull/4449)
        - Atree:
            - [Add two new functions to optimize atree array and Go []byte conversions](https://github.com/onflow/atree/pull/629)
            - [Add support for faster copying of array and map](https://github.com/onflow/atree/pull/633)


- Completed work on simplifying transaction scheduler contract to improve performance
    - deployed on mainnet: [Simplify Scheduled Transaction priority limits](https://github.com/onflow/flow-core-contracts/pull/580)

**This Sprint**

- Continue: Cross-vm bridging performance improvements
    - start updating contracts to use optimized functions.
    - start relaibration of execution effort weights to reflect optimized functions in operations pricing.


---

### **Developer Tooling** \[Chase]

Cycle Objective(s):
https://github.com/onflow/flow-okrs/issues/176
https://github.com/onflow/flow-okrs/issues/175

**Done Last Sprint**

- Assist on security analytics tool, block explorer, and FCM testing (covered in other sections)
- Block Explorer


**This Sprint**


- Block Explorer



---

### Applications / Wallet [Jeff]

**Done last sprint**



**This sprint**


---

### **Infra** \[Manny]

**Done last sprint**


**Observability**


**FCM**

**Execution Ledger Service**


**TN54 Spork**


**Support**


---

### **Governance** \[Vishal]

[Q4 Cycle Objective(s)](https://github.com/orgs/onflow/projects/91/views/5):
1. Transactions fees update [Done]
2. Surge Pricing [In Progress]
3. Develop an internal document for Flow Tokenomics [Paused]

**Done last sprint**
* No updates


**This sprint**
* No Updates

---
