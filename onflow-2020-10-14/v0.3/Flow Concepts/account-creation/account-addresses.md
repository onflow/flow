---
title: "Account Addresses"
slug: "account-addresses"
hidden: true
createdAt: "2020-04-27T17:35:36.484Z"
updatedAt: "2020-08-25T17:19:07.659Z"
---
## Proposed Address generation Scheme

* Use compact addresses (64 bits)
* Avoid address collisions using assigned sequenced numbers  (up to 2^48).
* Reduce the likelihood of getting an address wrong using linear codes as an error-detection code.

##  Linear Code 

A linear code is an error-correcting code that allows an efficient encoding and decoding. The codewords of a linear code are words encoded using more bits than the original word. The extra bits are used to detect and correct some errors after the transmission of a codeword. It is called linear code because any linear combination of codewords is also a codeword. 
The notation [n, k, d] is used to denote a linear code that encodes an original k-bit word into a n-bit codeword. d is the distance of the code and it means that any two codewords have at least d different bits. 

For Flow addresses, a linear code [64, 45, 7] is used as an error-detection code. The address of the i-th account created on Flow is simply the codeword corresponding to the original value (i). This linear code allows generating 2^45 distinct addresses, each address is encoded over 64 bits. Two different addresses are guaranteed to have at least 7 different bits which reduces the risk of confusing two addresses. 

Moreover, the linear code used is non-systematic, which means it's not possible to separate the extra bits from the original value bits in the codeword. This makes the generated addresses look like random numbers and two consecutive account addresses look very different. A quick off-chain test can tell if a 64 bits word could be a valid Flow address. 

The generation of an account address is an on-chain mechanism that happens when a Flow network receives an account creation transaction. The network keeps track of the number of accounts already created and returns the newly created address.