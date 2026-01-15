// Cadence script to check WBTC balance for an account
// 
// IMPORTANT: You need to know the WBTC contract address and public path
// 
// Steps to find the correct values:
// 1. Find WBTC contract address on Flowscan (https://flowscan.org/)
// 2. Check the contract's public paths (usually /public/<tokenName>Balance)
// 3. Update the imports and paths below

import FungibleToken from 0xf233dcee88fe0abe  // Mainnet FungibleToken
// import FungibleToken from 0x9a0766d93b6608b7  // Testnet FungibleToken

// Option 1: Generic approach - works if the account has a Balance capability
// Update the path based on what the WBTC contract uses
access(all) fun main(address: Address): UFix64 {
    let account = getAccount(address)
    
    // Common paths to try (update based on actual WBTC contract):
    let paths = [
        /public/wbtcBalance,
        /public/tokenBalance,
        /public/balance
    ]
    
    for path in paths {
        let balanceRef = account.capabilities.borrow<&{FungibleToken.Balance}>(path)
        
        if balanceRef != nil {
            return balanceRef!.balance
        }
    }
    
    panic("Could not find WBTC balance capability. Account may not have WBTC vault set up.")
}

// Option 2: If you know the exact WBTC contract and vault type
// Uncomment and update with the actual contract details:
//
// import WBTC from 0x<WBTC_CONTRACT_ADDRESS>  // Replace with actual address
//
// access(all) fun main(address: Address): UFix64 {
//     let account = getAccount(address)
//     
//     let vaultRef = account
//         .capabilities.borrow<&WBTC.Vault{FungibleToken.Balance}>(/public/wbtcBalance)  // Update path as needed
//         ?? panic("Could not borrow WBTC Balance capability")
//     
//     return vaultRef.balance
// }

