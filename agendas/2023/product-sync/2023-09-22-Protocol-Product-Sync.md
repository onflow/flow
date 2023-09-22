Please add your topics of discussion here.

1. Spork downtime updates
   - Any update on the state migration duration?
     - One account takes a disproportionately long time to migrate
     - Currently, it takes 9 hrs.
     - Without the large account, it takes 3 hrs.
     - Exploring ways to make the migration for that account more concurrent.
     - 3 hrs may be feasible IF concurrency works for that account.
     - Could we migrate this account ahead of time as an alternate?
     - More updates on Monday.
   - Max downtime to reach the 99.9% EOY goal.
2. Logging
   - https://github.com/onflow/flow-go/pull/4736/files
   - Error vs Info
   - Prefer to refactor some logs line to debug instead of info.
   - Metrika dashboard uses consensus telemetry logs for the dashboards. They may or may not be affected.
3. Spork operator for the next round of sporks
  - Jan to scout for the operator. Possible Janez.
4. Keeping AN-EN up for the current network during the spork.
  - Concern: Isolation of nodes for the spork process.
  - Concern: Shutting down consensus first, then Collection (change the order of node shutdown)
  - Concern: EN may still end up executing transactions which is different from what has happened in the past.
  - Operational changes: Have someone keep an eye on the issues with the public node issues with QN.
  - This in principle can be supported for the next spork.
5. Engineering resourcing.


