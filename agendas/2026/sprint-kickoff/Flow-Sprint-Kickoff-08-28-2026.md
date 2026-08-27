# Overview

### Team Wins 🎉

- HCU to rollout Cadence and flow-go updates, Go 1.26 update and Glamsterdam support completed successfully

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
| HCU                | 7/02/2026 |            |           | 0.13      |              |             |        | 0.13    | Zero downtime HCU                                |
| HCU                | 8/18/2026 |            |           | 0.13      |              |             |        | 0.13    | Zero downtime HCU                                |
| Total downtime     |           | 0          | 240       | 317.65    | 0            | 0           | 32     | 349.65  |                                                  |
| YTD (08/14/26) SLA |           | 100.00%    | 99.93%    | 99.91%    | 100.00%      | 100.00%     | 99.99% | 99.90%  |                                                  |
| SLA for 2026       |           | 100.00%    | 99.95%    | 99.94%    | 100.00%      | 100.00%     | 99.99% | 99.93%  |                                                  |

### Incidents \[Vishal]

- no incidents


#### Planned downtime

- No planned downtime.

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

- No changes

---


# Working Group Updates


---

### **Core Protocol** \[Vishal]

**Last sprint completed, ongoing and starting**

Project board: [Flow Core 2026](https://github.com/orgs/onflow/projects/109)
[OKRs](https://docs.google.com/document/d/1GILdIH6jO6xgUklR-5CyhaQs2GvB_tUGF5XElOjrGTA)

Last sprint:

- Storehouse ([#231](https://github.com/onflow/flow-okrs/issues/231))
  - Resume testing on testnet (2 out of the 3 ENs are running storehouse)
  - Investigate process to swtich from an EN running storehouse back to a non-storehouse EN as a recovery mechanism.
  - Estimated cost savings
- HCU on testnet and mainnet
  - https://github.com/onflow/flow-go/releases/tag/v0.51.0
- EVM GW DFNS issue [Issue-983](https://github.com/onflow/flow-evm-gateway/issues/983)
  - PR reviews
  - Testing on testnet and mainnet
  - Rolling out to external EVM GW node operators
  - [Release notes](https://github.com/onflow/flow-evm-gateway/releases/tag/v1.5.7)
- Cadence:
  - Addressing security reports
  - Fixed the import confusion bug in the compiler/vm, and did some refactoring
- Infra-cost optimization
  - Stopped hyperlane validator
- Access node shutdown issue ([flow-go#8666](https://github.com/onflow/flow-go/issues/8666))
  - [Solution](https://github.com/onflow/flow-go/pull/8662) merged into master


Next sprint:

- Storehouse
  - Continue PR reviews
  - Deploy to additional testnet Execution nodes (EN3)
- Address additional Hackenproof security reports
- Rosetta: Review and merge additional improvement [rosetta#101](https://github.com/onflow/rosetta/pull/101)
- Triage the remaining Kimi K3 audit findings
- Cadence:
  - Continuing on fixing the gaps found on compiler/vm and doing some refactoring
  - Re-run the execution-results comparison tool for compiler/vm.
- Security
  - Investigate reports from hackenproof not related to Cadence.
- Implement additional infra-cost optimizations
- Storage Fee FLIP
  - Internal doc review
  - Publish the FLIP
- Dynamic inclusion fees
  - Automate data gathering for inclusion fees

---

## Riptide [Jan]

**Done Last Sprint**

- Working version of prototype deployed to staging and testing started with OctopusRodeo team.

**This Sprint**

- Improve the process of iterating on the spec build.
- Discuss the tokenomics of stake allocation for agents that successfully deliver spec build and start implementing the contracts once we agree on the approach.

