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
| HCU                | 7/03/2026 |            |           | 0.13      |              |             |        | 0.13    | Zero downtime HCU                                |
| Total downtime     |           | 0          | 240       | 317.52    | 0            | 0           | 32     | 349.52  |                                                  |
| YTD (07/16/26) SLA |           | 100.00%    | 99.92%    | 99.89%    | 100.00%      | 100.00%     | 99.99% | 99.88%  |                                                  |
| SLA for 2026       |           | 100.00%    | 99.94%    | 99.94%    | 100.00%      | 100.00%     | 99.99% | 99.93%  |                                                  |

### Incidents \[Vishal]

- Mainnet EVM GW incident:
  - 07/15/2026 10PM Pacific to 07/16/2026 11:15AM
  - FF EVM GW stopped indexing data
  - Root cause - A recent change for the Glamsterdam upgrade pinned EVM GW to a flow-go branch that persisted a different codeHash for codeless accounts than the value that gets checksummed.
  - Fix -
    - Revert the flow-go change and pin EVM to the latest flow-go tag
    - Repair diverged stores by re-indexing EVM GW from a block height before the change was deployed (both testnet and mainnet)
  - More [here](https://app.notion.com/p/flowfoundation/Mainnet-EVM-GW-stopped-indexing-07-15-2026-e361aee12324821183c001f21e548a63)

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

- FLIPs coming up:
  - Storage Fees

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
  - FLIP marked as `approved`
- Storehouse ([#231](https://github.com/onflow/flow-okrs/issues/231))
  - PR reviews
  - Testing additional optimizations
  - Deployed to TN Execution node
    - Memory usage dropped from 177GB to 57GB
- Adding a nonce aware transaction pool to the EVM Gateway [#971](https://github.com/onflow/flow-evm-gateway/pull/971)
  - Tested the fix on testnet and mainnet.
- FindLabs infra migration([#215](https://github.com/onflow/flow-okrs/issues/215))
  - Validating that our infra is at parity with FindLabs
  - Setting up Dune and BigQuery pipelines
- Fixing a metering bug
    - Cleaning up metering code to make it more understandable and thus secure
- Improving the token inspector
- Cadence:
  - Addressing Hackenproof security reports
  - Additional fixes to tighten gaps related to past fixes
  - Resumed the work on testing the compiler/vm
    - Updated the compiler feature branch in flow-go to the latest on master
    - Re-executing blocks to compare results

Next sprint:

- Execution weight recalibration FLIP
  - Working with dApps and clients to ensure readiness w.r.t the transaction fee increase
- Storehouse
  - Continue testing
  - Continue PR reviews
  - Deploy to additional testnet Execution nodes (EN) and possibly also deploy to a mainnet EN.
- Roll out the implementation of the nonce aware transaction pool #971 to node operator EVM GW
- Complete the FindLabs infra migration
  - Switch over data sources for Dune and BigQuery
  - Final cut over
- Expand the e2e test coverage ([#72](https://github.com/onflow/flow-e2e-tests/issues/72))
  - Add tests for Rosetta
- Cadence:
  - Run backward compatibility suite for latest Cadence fixes
  - Compiler/VM - Continue re-executing blocks and compare results.


---

## Riptide [Jan]

**Done Last Sprint**

- Completed testing of spec-driven development process and it's feasibility for further product development.

**This Sprint**

- expanding on the Senate demo - developing product wireframes and prototype.




