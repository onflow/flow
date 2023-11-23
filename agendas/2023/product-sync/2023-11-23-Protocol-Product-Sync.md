### [@AlexHentschel] Need for zero-weight nodes?
In context of Dynamic Protocol State:
* Eeach node (any roles) have `Weight` parameter, set by Staking Smart Contract
* Simplified: `weight` represents the amount of trust we have into the honesty of the node


<details open> <summary>Summary of what the weight value influences and what not</summary>
  <ul> 
   <li> Aspects influenced by weight:
     <ul> 
      <li> for consensus and collector nodes, probability of being selected as consensus / cluster leader is proportional to their weight </li>
      <li> for consensus and collector "agreement" (technically QCs and TCs), we require a supermajority by weight of the respective committee </li>
     </ul>
   </li>     
   <li> Aspects not influenced by weight:
     <ul> 
      <li> share of the network's overall load that the node is expected to shoulder, e.g. 
          <ul> 
            <li> all VNs verify statisitically the same number of chunks irrespecrtive of their weight </li>
            <li> all collectors process and store same number of transactions irrespective of their weight </li>
            <li> all ENs process all blocks and store the entire state irrespective of their weight </li>
          </ul>
      </li>
      <li> Should the "trust level" into a node X change throughout the epoch, we currenlty only differentiate between </li>
          <ul> 
            <li> X can participate to the full extend (as specified by the EpochSetup event) </li>            
            <li> all of X's participation rights have been revoked, i.e. X is ejected</li>
          </ul>
      <li> Specifically, we want to keep leader selection and voting rights (for QCs and TCs) _fixed_ throughout an epoch. This unlocks game-changing runtime improvements for future light clients (reduces their baseline-required networking bandwith and computational effort by factor of roughly 100k!).</li>
     </ul>
   </li>
  <ul>
</details>
   
**Current situation**
* core algorithms in Flow protocol can handle zero-weight nodes; we have no conceptual challenge
* but have uncovered various edgae cases in implementation, where code handles zero-weigh nodes inconsistently

**question(s)**
* Categorically forbidding zero-weight nodes would probably be the easiest from an engineering perspective. 
* Do we have zero-weight nodes in the protocol
  * on Mainnet, e.g. some ANs?
  * benchnet or BFT testing framework?
  * "ghost nodes"?
* Do we have a use case for zero-weight nodes:
  * essentially means that node can listen and request information according to its role
  * cannot actively participate in _extending_ the chain / continuing the protocol
 
### Governance update @vishalchangrani

### Path forward for script execution on public ANs given HCUs @peterargue
