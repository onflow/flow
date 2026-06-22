# Overview

### Team Wins 🎉

- [Execution weight recalibration FLIP](https://github.com/onflow/flips/pull/369) published
- Payload-less Trie (Storehouse) running on shadow node, initial data on memory usage and TPS look very promising!

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
| YTD (06/05/26) SLA |           | 100.00%    | 99.89%    | 99.86%    | 100.00%      | 100.00%     | 99.98% | 99.84%  |                                                  |
| SLA for 2026       |           | 100.00%    | 99.95%    | 99.94%    | 100.00%      | 100.00%     | 99.99% | 99.93%  |                                                  |

### Incidents \[Vishal]

- No incidents

#### Planned downtime

- HCU next sprint, exact dates are still tbd.


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

- new FLIP added:
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

- Execution weight recalibration FLIP published.
  - Working with dApps and clients to ensure readiness w.r.t the transaction fee increase
- Storehouse ([#231](https://github.com/onflow/flow-okrs/issues/231))
  - Implementation ongoing (mutiple [PRs](https://github.com/onflow/flow-go/pulls?q=is%3Apr+is%3Aopen+Storehouse))
  - Core functionality working on localnet
  - Testing on shadow node.
- Investigate the Flow bridge issue ([#235](https://github.com/onflow/flow-okrs/issues/235))
  - [PR](https://github.com/onflow/flow-evm-bridge/pull/214) has been merged
- Adding a nonce aware transaction pool to the EVM Gateway [#971](https://github.com/onflow/flow-evm-gateway/pull/971)
  - Mature fix to resolve the original issue reported by DFNS.
  - Working on the implementation.
- Started the FindLabs infra migration([#215](https://github.com/onflow/flow-okrs/issues/215))
  - Github repos, kubernetes configuration, secrets have been ported/recreated.
  - Testnet migration in progress
- Investigated token tracking alert and implemented fix.
- Update to Go 1.26
  - Update of flow-go: https://github.com/onflow/flow-go/pull/8582
  - Crypto: https://github.com/onflow/crypto/pull/42
- Fable run against flow-go and Cadence
- Published and [Atree tutorial](https://github.com/onflow/atree-internal/tree/leo/chapters/chapters/01-one-slab)

Next sprint:

- HCU to roll out updates for Cadence, Atree, fix for stale cluster topic metrics ([#8555](https://github.com/onflow/flow-go/issues/8555), token tracking.
- Roll out the execution weight recalibration FLIP
- Storehouse - continue implementation
- Expand the e2e test coverage ([#72](https://github.com/onflow/flow-e2e-tests/issues/72))
  - Add tests for Rosetta
- Continue implementation of the nonce aware transaction pool #971.
- Continue the FindLabs infra migration



---

## Riptide [Jan]

**Done Last Sprint**

- Completed Senate demo - multi-party spec-driven agentic loop

**This Sprint**

- expanding on the Senate demo - moving to standalone service




