# Overview

### Team Wins 🎉


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

- Mainnet EVM GW incident

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

- Execution weight recalibration FLIP
  - Working with dApps and clients to ensure readiness w.r.t the transaction fee increase
  - Replied to comments received on the FLIP
- Storehouse ([#231](https://github.com/onflow/flow-okrs/issues/231))
  - Testing on shadow node (28 days without any issues)
  - Create tools to generate and verfiy checkpoints for payloadless Trie.
- Adding a nonce aware transaction pool to the EVM Gateway [#971](https://github.com/onflow/flow-evm-gateway/pull/971)
  - Tested the fix on testnet and mainnet.
- FindLabs infra migration([#215](https://github.com/onflow/flow-okrs/issues/215))
  - Validating that our infra is at parity with FindLabs
  - Setting up Dune and BigQuery pipelines

Next sprint:

- Storehouse
  - continue testing
  - implement optimizations
  - Outstanding PR reviews
- Expand the e2e test coverage ([#72](https://github.com/onflow/flow-e2e-tests/issues/72))
  - Add tests for Rosetta
- Roll out the implementation of the nonce aware transaction pool #971 to node operator EVM GW
- Complete the FindLabs infra migration
  - Switch over data sources for Dune and BigQuery
  - Cut over



---

## Riptide [Jan]

**Done Last Sprint**

- Completed testing of spec-driven development process and it's feasibility for further product development.

**This Sprint**

- expanding on the Senate demo - developing product wireframes and prototype.




