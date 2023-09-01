# Protocol product discussion topics

_Please add you topic for the Protocol production discussion below_

1. Execution node dynamic bootstrap (Vishal)
   - Add to documentation as a way to reclaim disk space? No
   - Is regular dynamic bootstrapping an accepted strategy? Only for ENs that have not upgraded to v0.31.15.
     Notes:
     - EN needs to know blocks of the current epoch
     - Changes to AN in non-trivial to factor in bootstrap ENs.
     - Future spork can manually prune the chunk data pack folder.
     - This issue is mainly for the current spork.
     - Dynamic bootstrap can then be only used to onboarding new partners.
     - Dynamic bootstrap, for now can be done from a state which is around 1 week old so that the EN can answer some of the old queries.
     - Events and transactions for older blocks will not be available from a dynamically bootstrapped EN.
     - Preferred-Execution node setting can be used on the AN to not target a dynamically bootstrap EN
     - Get all EN operators to update to v0.31.15, which enables pruning of chunk data pack (in time for the next spork).

2. Next spork
   - Oct 25th
   - New branch will be v0.32
   - New branching method can be rolled out for this spork (using master as the branch for the next upgrade HCU or spork, and all changes on it need to be backward compatibility).
   - Readme that explains the new branching strategy. (Misha/Kan could translate the notion doc to readme).
   - Setup a meeting 1 or 2 weeks before the Canary spork ~Sept mid with the broad dev team (Kan)
   - Share the new process internally and externally (Kan)

3. Storage fees
   - Will be updating the FLIP with the FAQs.
   - Comment on the https://forum.onflow.org/t/storage-fees-improvements-and-few-random-ideas-on-the-way/5104 forum post (Vishal/Kshitij)

4. FLIP voting
   - Staked token weighted voting for FLIP
   - DL and FF volunteering to abstain from vote?
