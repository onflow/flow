Please add any discussion topics here.

1. Technical DRI for Rosetta API maintenance [not discussed]

2. Heads up: Epoch Fallback Mode [EFM] Recovery
   - will need time from Josh for system smart contracts
   - Governance Working group would need to define process for "who can trigger the manual override to trigger recovery?"
     - Network upgrade (aka spork) requires consent (resp. active participation) from all / most node operators 
     - Recovery from EFM would be a governance transaction
       with **similar power to control network participation as a network upgrade** (aka spork)
     - Currently, the governance multi-sig group is small compared to the group of all node operators.
   - Governance questions:
     - Is a broader consent amongst node operators required for EFM recovery, given the power this operation has?
     - Do we want guard rails in implementation that restrict this power? 

   Suggestion:
    - [Jordan, Yurii, Alex] write FLIP for EFM Recovery (possibly January)
    - Bring this topic up in the Node operator working group (Vishal, Kshitij)
    - Governance Working Group engages in response to the Flip
