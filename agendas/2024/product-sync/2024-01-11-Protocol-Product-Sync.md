Please add below topics you would like to discuss during the call

**Update on networking changes for the HCU** @vishal
* 1 PR merged, 1 about to be merged
* 2 other issues are being worked on - ETA: end of next week.


**Update on Epoch Fallback Mode** [EFM] **Recovery**:
* will likely have an estimate by Jan 19, 2024 (end of next week)
* will not complete OKR Objective 2 - Investigate a path to make Consensus nodes permissionless


**OKR planning at the end of the month**
* start async conversation now
Possible OKRs for next cycle -
  1. Zero downtime upgrade -
  -  Figure out the approach.
  -  Zero downtime Execution environment
  -  Zero downtime HCU for all other nodes - protocol state update
  -  Design, POC could be the next OKR deliverable.
  -  Circle requirement to have fewer upgrades
  2. CI/CD for CLI, SDKs, and emulator to build from the latest flow-go
  - To discuss with DevEx.
  3. Working versionConcurrent transaction execution.
  - Wrapping up current work
  4. Tolerating more than 5 malicious nodes
  - https://www.notion.so/dapperlabs/Long-Term-Plan-46d3b0dc417d449dac68cd7247a26069?pvs=4
  5. Storehouse M2
  6. New Trie
  7. Spamming attack - https://www.notion.so/dapperlabs/Sweet-Onion-Plan-84e206fa24c1453ca6fd9aea80c3c517.
    - Rate limiting on the collection node
  8. EFM recovery implementation
  9. Investigate a path to make Consensus nodes permissionless.
  10. Writing Informal Cadence specification. This delivers incremental benefits as it progresses in 2 core areas - efficiency of implementing new features and hardening the implementation. More specifically, it allows us to efficiently validate Cadence codebase against the spec and enforces a more structured audit of the implementation as the spec is written. It also makes it more efficient to write defensive checks (e.g. resource duplication) and alternative components like compiler.



