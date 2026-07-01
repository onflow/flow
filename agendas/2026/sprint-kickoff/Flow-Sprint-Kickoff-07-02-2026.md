# Overview

### Team Wins 🎉

- HCU on mainnet done. HCU include important Cadence and Atree related updates.

---

#### YTD SLA \[Vishal]

| Incident/upgrade   | Date      | Collection | Consensus | Execution | Verification | Access (QN) | EVM GW | Overall | Comments                                         |
|--------------------|-----------|------------|-----------|-----------|--------------|-------------|--------|---------|--------------------------------------------------|
| HCU                | 1/1/2026  |            |           | 9         |              |             |        | 9       | Part of recovery from Security Incident          |
| HCU                | 1/2/2026  |            |           | 9         |              |             |        | 9       | Part of recovery from Security Incident          |
| HCU                | 1/3/2026  |            |           | 9         |              |             |        | 9       | Security Fix                                     |
| HCU                | 1/3/2026  |            |           | 9         |              |             |        | 9       | Repeated the HCU                                 |
| HCU                | 1/6/2026  |            |           | 9         |              |             |        | 9       | Security Fix                                     |
| EVM GW Issue       | 1/7/2026  |            |           | 9         |              |             | 32     | 32      | Public EVM endpoint unavailable                  |
| HCU                | 1/29/2026 |            |           | 8         |              |             |        | 8       | Security Fix                                     |
| HCU                | 2/6/2026  |            |           | 8         |              |             |        | 8       | Security Fix                                     |
| Sealing halt       | 2/11/2026 |            |           | 7         |              |             |        | 7       | FF and DL execution nodes went OOM and restarted |
| HCU                | 2/13/2026 |            |           | 9         |              |             |        | 9       | Security Fix                                     |
| Sealing Halt       | 2/23/2026 |            | 240       | 240       |              |             |        | 240     | Consensus halted                                 |
| HCU                | 2/24/2026 |            |           | 0.13      |              |             |        | 0.13    | Zero downtime HCU                                |
| HCU                | 4/07/2026 |            |           | 0.13      |              |             |        | 0.13    | Zero downtime HCU                                |
| HCU                | 5/18/2026 |            |           | 0.13      |              |             |        | 0.13    | Zero downtime HCU                                |
| Total downtime     |           | 0          | 240       | 317.39    | 0            | 0           | 32     | 349.39  |                                                  |
| YTD (06/01/26) SLA |           | 100.00%    | 99.91%    | 99.88%    | 100.00%      | 100.00%     | 99.99% | 99.87%  |                                                  |
| SLA for 2026       |           | 100.00%    | 99.95%    | 99.94%    | 100.00%      | 100.00%     | 99.99% | 99.93%  |                                                  |

### Incidents \[Vishal]

- Testnet incident - Sev-3 Devnet54 EN System Chunk Critical Error
  - June 29th, 12:04 PM Pacific to 1:48 PM
  - Detail doc [here](https://app.notion.com/p/flowfoundation/Testnet-system-chunk-transaction-failing-depleted-FlowToken-Minter-06-29-2026-8971aee12324839fab9f0101a6b4bc20)
  - Root cause: The system chunk transaction on every testnet block was failing with `Error Code 1101` during the staking-auction phase of epoch 3023 because the `FlowToken.Minter` resource borrowed by `FlowIDTableStaking` to pay epoch-3022 rewards had a remaining `allowedAmount` of **104.11028590 FLOW**, while the contract was trying to mint **200.98379286 FLOW**. The Minter's allowance is a running budget that decrements on each mint, and it had been gradually drained over years of testnet operation.
  - Fix: The fix was a transaction that creates a fresh Minter via `FlowToken.Administrator.createNewMinter` and replaces the depleted one at `/storage/flowTokenMinter` on `0x9eca2b38b18b5dfe`. After the fix sealed, the next block's system chunk minted ~180 FLOW for staking rewards, the bug was cleared, and downstream services (EVM Gateway) began recovering through the affected block window.
  - No impact on mainnet and mainnet has enough allowance to for the minter to not experience this issue.

#### Planned downtime

- No HCU for this sprint

---

### FLIPs Tracker \[Vishal]

|             | Application | Cadence | Governance | Protocol |  Total  |
|:------------|:-----------:|:-------:|:----------:|:--------:|:-------:|
| Drafted     |      9      |    9    |     0      |    9     | **27**  |
| Proposed    |      1      |    2    |     4      |    1     |  **7**  |
| Accepted    |      3      |    2    |     3      |    1     |  **9**  |
| Rejected    |      0      |    1    |     1      |    0     |  **2**  |
| Implemented |      3      |    6    |     1      |    0     | **10**  |
| Released    |      4      |   35    |     12     |    10    | **63**  |
| Total       |   **20**    | **55**  |   **21**   |  **22**  | **118** |

- Last new FLIP added:
  - Execution weight recalibration: https://github.com/onflow/flips/pull/369

- FLIPs coming up:
  - Storage Fees - Data collection complete

---


# Working Group Updates


---

### **Core Protocol** \[Vishal]

**Last sprint completed, ongoing and starting**

Project board: [Flow Core 2026](https://github.com/orgs/onflow/projects/109)
[OKRs](https://docs.google.com/document/d/1GILdIH6jO6xgUklR-5CyhaQs2GvB_tUGF5XElOjrGTA)

Last sprint:

- HCU to roll out updates for Cadence, Atree, fix for stale cluster topic metrics ([#8555](https://github.com/onflow/flow-go/issues/8555), token tracking fix.
- Execution weight recalibration FLIP
  - Working with dApps and clients to ensure readiness w.r.t the transaction fee increase
  - Replied to comments received on the FLIP
- Storehouse ([#231](https://github.com/onflow/flow-okrs/issues/231))
  - Testing on shadow node (28 days without any issues)
  - Create tools to generate and verfiy checkpoints for payloadless Trie.
- Adding a nonce aware transaction pool to the EVM Gateway [#971](https://github.com/onflow/flow-evm-gateway/pull/971)
  - Mature fix to resolve the original issue reported by DFNS.
  - Working on the implementation.
- Started the FindLabs infra migration([#215](https://github.com/onflow/flow-okrs/issues/215))
  - Testnet and mainnet indexer running in-house and catching up.
  - Working on setting up monitoring.

Next sprint:

- Storehouse
  - continue testing
  - implement optimizations
  - Outstanding PR reviews
- Expand the e2e test coverage ([#72](https://github.com/onflow/flow-e2e-tests/issues/72))
  - Add tests for Rosetta
- Continue implementation of the nonce aware transaction pool #971.
- Continue the FindLabs infra migration
  - Switch over data sources for Dune and BigQuery
  - Decided on the date for the switch over to our infra.



---

## Riptide [Jan]

**Done Last Sprint**

- Completed Senate demo - multi-party spec-driven agentic loop

**This Sprint**

- expanding on the Senate demo - moving to standalone service




