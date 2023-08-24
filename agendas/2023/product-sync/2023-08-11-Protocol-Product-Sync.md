# Protocol product discussion topics

1. Historical nodes (Kan)
    1. Service Level?
    2. Historical Data access importance?
    3. GCP buckets enough?
        1. Cost considerations?
    
2. Do we need a final spork this year (2023)? Vishal 
    1. Dynamic protocol state
        1. might not be ready
    2. Atree inlining
        1. Memory improvements on EN ~30%
        2. Fewer migrations to worry about later.
        3. Needs migration spork will need more time > 30mins.
    3. Execution Data Verification
        1. will be ready for Nov
        2. TxResultIndex will come later.
        3. Trustless verification for whoever wants to validate.
        4. Archive node will not have to maintain a Trie to verify that the register data it recvd is correct.
        5. 
    4. Script Execution on AN
        1. Remove the dependency for spork and the remaining can be rolled out via HCU.
    5. Getting out all the changes that have been accumulated over time on master.
