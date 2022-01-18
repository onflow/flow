# Variable Transaction Fees - Execution Effort I.

| Status        | Proposed                                                                   |
| :------------ | :------------------------------------------------------------------------- |
| **FLIP #**    | [753](https://github.com/onflow/flow/pull/753) |
| **Author(s)** | Janez Podhostnik (janez.podhostnik@dapperlabs.com)                      |
| **Updated**   | 2022-01-13                                                                 |

## Abstract

This FLIP builds on the foundations of the [Variable Transaction fees FLIP](20211007-transaction-fees.md) and proposes a model for measuring the execution effort of transactions by choosing certain functions/operations, that are called during the execution of a transaction, to have a related execution effort cost. This FLIP explores a choice of functions/operations and uses data collected from sample transactions and a linear model fit to determine the cost of each chosen functions/operations, so that on average the execution effort of a transaction is proportional to the execution time of the transaction. This FLIP also explores the FLOW cost of a unit of execution effort.

## Objective

In the [Variable Transaction fees FLIP](20211007-transaction-fees.md) the transaction execution fees are defined as the part of the transaction fees that account for the resources (bandwidth, computing power) needed to execute the transactions' script, to verify the transaction execution and to handle the propagation of transaction execution results. The execution fees (<img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/A0hSAHHSW2.svg">) are defined as a execution effort cost function (<img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/sCA7cYTn4j.svg">) of the execution effort (<img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/WlYFrmB6Y8.svg">) of the transaction <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/Uzsd7p4YBJ.svg">.

The aim of this FLIP is to create a model for measuring the execution effort of transactions, that satisfies the following criteria:

- The model must be better then the current model of measuring the execution effort.
- The model must be straightforward to understand and implement.
- The implementation of the model must not significantly degrade the execution time of transactions.
- There must be a clear improvement path for the model.

This first iteration of the model will not account for any networking costs and will assume verification costs are the same as execution costs.

Having a model like that, the secondary goal of this FLIP is to look at how each unit on execution effort would be priced.

## Motivation

By improving the model for the execution effort of transactions, transactions will be priced more fairly.

As a consequence transactions that do little (e.g. transferring a (non)fungible token) will cost less, while transactions that do a lot and require a lot of resources to execute will cost more. Attacking the system with heavy transactions in order to overload it will become costlier and thus less viable.

## Current state

Currently execution effort is referenced to as computation cost. It is counted as 1 per every cadence function call or cadence loop made during the transaction. 

If the execution effort exceeds the execution effort limit (also currently referenced to as gas limit or computation limit) the transaction fails. The state changes of that transaction are reverted, however the fees are still deducted for that transaction.

There is currently no connection from execution effort to transaction fees. Transaction fees are always a flat fee of `0.00001 FLOW` for all transactions, no matter the execution effort.

## Proposed Design

To improve the calculation of execution effort of a transaction, this FLIP proposes to choose certain functions/operations where weights <!-- $w_i$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/4sadlnRWsG.svg"> will be placed. By counting the number of times each weight is hit during the execution of a transaction <!-- $m_i$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/J3058PgFuq.svg"> the execution effort of that transaction can be expressed as <!-- $E = \sum{m_i w_i}$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/uaww76uH7S.svg">.

The assumption here was that the processing cost of a running a single function <!-- $N$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/4FLaqCTwtI.svg"> times scales linearly with <!-- $N$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/4FLaqCTwtI.svg">. This assumption is made only for transactions where the execution effort of the transaction is not above the execution effort limit.

Good locations and values need to be chosen for the weights so that on average the time taken to execute a transaction (<!-- $t$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/cbdkfkWybi.svg">) will be proportional to the execution effort of that transaction <!-- $\frac{t}{E} = \textbf{const.}$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/ujui9morSm.svg">.

This FLIP also makes the assumption that if one execution node on average runs one function <!-- $x$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/Cj3XAvtJtn.svg"> times slower it will run all functions <!-- $x$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/Cj3XAvtJtn.svg"> times slower. 

This means that while the relationship <!-- $\frac{t}{E} = \textbf{const.}$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/wAKzWYOybT.svg"> will still hold on all machines, the constant will be a different constant on each machine. This also means that we can chose the constant to be 1 when calibrating the weights, and if need be (if the machine where the calibration is done differs drastically from the execution node specs) multiply all weights by a single factor later.

With these assumptions the weights can be calibrated using data that was collected by running designed transactions while recording how many times each weight was hit, using the following linear model.

- <!-- $w$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/zqZMMjc1Hx.svg"> a column vector of all weights.
- <!-- $M$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/SmblEwKco6.svg"> a matrix with one row per transaction run. Each row is a count of how many times each weight was hit during that transaction (`m_i`).
- <!-- $t$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/sgGbIK6FhD.svg"> a column vector of the time taken of each transaction.
- <!-- $r$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/5tokpUE7hM.svg"> is a column vector of residuals (or error terms)

<div align="center"><img style="background: white;" src="./20220111-execution-effort/eq/sS1rRPixbA.svg"></div>

Fitting a linear model means choosing the weights <!-- $w$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/zqZMMjc1Hx.svg"> so that the residuals <!-- $r$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/5tokpUE7hM.svg"> are as small as possible.

The code used for data collection can be found [here](https://github.com/onflow/flow-go/pull/1631).

The Jupyter notebook using [Wolfram Language kernel for Jupyter notebooks](https://github.com/WolframResearch/WolframLanguageForJupyter) that was used for data analysis and the data collected can be found [here](./20220111-execution-effort)

### Generated transactions for data collection

Sample transactions were chosen with the following things in mind:

- Each transaction should be distinct (the code path they go through should be different).
- Transactions should not do a lot of different operations.
- The entire set of transaction should cover as many distinct operations as possible.

Some setup is done before any transactions are run so that more diverse transactions are possible:

- A list od 5 strings of 100 characters is put on the service account `acct.save(list, to: /storage/test)`
- A smart contract is deployed with some functions to be called by the transactions:

  ```cadence
  access(all) contract TestContract {
      pub var totalSupply: UInt64
      pub var nfts: @[NFT]

      access(all) event SomeEvent()
      access(all) fun empty() {
      }
      access(all) fun emit() {
          emit SomeEvent()
      }

      access(all) fun mintNFT() {
          var newNFT <- create NFT(
              id: TestContract.totalSupply,
              data: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
          )
          self.nfts.append( <- newNFT)

          TestContract.totalSupply = TestContract.totalSupply + UInt64(1)
      }

      pub resource NFT {
          pub let id: UInt64
          pub let data: String

          init(
              id: UInt64,
              data: String,
          ) {
              self.id = id
              self.data = data
          }
      }

      init() {
          self.totalSupply = 0
          self.nfts <- []
      }
  }
  ```

All of the ample transactions have the same boilerplate body:

```cadence
import FungibleToken from 0xFUNGIBLETOKEN
import FlowToken from 0xFLOWTOKEN
import TestContract from 0xTESTCONTRACT

transaction(){
    prepare(signer: AuthAccount){
        var i = 0
        while i < $ITERATIONS {
            i = i + 1
            $BODY
        }
    }
}
```

The number of iterations (`$ITERATIONS`) is randomly chosen from one to _max loop length_ which is varied during the run so that the transaction does not exceed 500 ms (generally) (See [Appendix 1: varying sample transactions max loop length](#appendix_1:_varying_sample_transactions_max_loop_length) for details). This is done so its easier to compare different types of transaction to each other. 

<details>
<summary>The names and bodies of the 25 different transaction types is collapsed for better readability.</summary>
<p>
    ```py
    [{
        body:     "",
        name:     "reference tx",
    },
    {
        
        body:     "i.toString()",
        name:     "convert int to string",
    },
    {
        
        body:     '"x".concat(i.toString())',
        name:     "convert int to string and concatenate it",
    },
    {
        
        body:     'signer.address',
        name:     "get signer address",
    },
    {
        
        body:     'getAccount(signer.address)',
        name:     "get public account",
    },
    {
        
        body:     'getAccount(signer.address).balance',
        name:     "get account and get balance",
    },
    {
        
        body:     'getAccount(signer.address).availableBalance',
        name:     "get account and get available balance",
    },
    {
        
        body:     'getAccount(signer.address).storageUsed',
        name:     "get account and get storage used",
    },
    {
        
        body:     'getAccount(signer.address).storageCapacity',
        name:     "get account and get storage capacity",
    },
    {
        
        body:     'let vaultRef = signer.borrow<&FlowToken.Vault>(from: /storage/flowTokenVault)!',
        name:     "get signer vault",
    },
    {
        
        body: '''let receiverRef = getAccount(signer.address)
            .getCapability(/public/flowTokenReceiver)
            .borrow<&{FungibleToken.Receiver}>()!''',
        name: "get signer receiver",
    },
    {
        
        body: '''let receiverRef =  getAccount(signer.address)
            .getCapability(/public/flowTokenReceiver)
            .borrow<&{FungibleToken.Receiver}>()!
            let vaultRef = signer.borrow<&FlowToken.Vault>(from: /storage/flowTokenVault)!
            receiverRef.deposit(from: <-vaultRef.withdraw(amount: 0.00001))''',
        name: "transfer tokens",
    },
    {
        
        body: '''signer.load<String>(from: /storage/testpath)
            signer.save("", to: /storage/testpath)''',
        name: "load and save empty string on signers address",
    },
    {
        
        body: '''signer.load<String>(from: /storage/testpath)
            signer.save("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", to: /storage/testpath)''',
        name: "load and save long string on signers address",
    },
    {
        
        body:     'let acct = AuthAccount(payer: signer)',
        name:     "create new account",
    },
    {
        
        body:     'TestContract.empty()',
        name:     "call empty contract function",
    },
    {
        
        body:     'TestContract.emit()',
        name:     "emit event",
    },
    {
        
        body: '''let strings = signer.borrow<&[String]>(from: /storage/test)!
            var j = 0
            var lenSum = 0
            while (j < strings.length) {
                    lenSum = lenSum + strings[j].length
                j = j + 1
            }''',
        name: "borrow array from storage",
    },
    {
        
        body: '''let strings = signer.copy<[String]>(from: /storage/test)!
            var j = 0
            var lenSum = 0
            while (j < strings.length) {
                    lenSum = lenSum + strings[j].length
                j = j + 1
            }''',
        name: "copy array from storage",
    },
    {
        
        body:     'signer.addPublicKey("f847b84000fb479cb398ab7e31d6f048c12ec5b5b679052589280cacde421af823f93fe927dfc3d1e371b172f97ceeac1bc235f60654184c83f4ea70dd3b7785ffb3c73802038203e8".decodeHex())',
        name:     "add key to account",
    },
    {
        
        body: '''
            signer.addPublicKey("f847b84000fb479cb398ab7e31d6f048c12ec5b5b679052589280cacde421af823f93fe927dfc3d1e371b172f97ceeac1bc235f60654184c83f4ea70dd3b7785ffb3c73802038203e8".decodeHex())
            signer.removePublicKey(1)
        ''',
        name: "add and remove key to/from account",
    },

	    body:     '''TestContract.mintNFT()''',
		name:     "mint NFT",
    },
    ]
    ```
</p>
</details>

In order to get more varied data, mixed transactions were also simulated. Mixed transactions are created by taking two different sample transactions and running both in one transaction. Each of the sample transaction bodies are run between 1 and _max loop length_/2 times.

### Data Collection procedure

The data was collected by simulating block execution. Each block had between 1 and 50 transactions (uniformly distributed).

Transactions were either:

- (2/3 of the time) picked from the set of sample transactions and the loop length was randomly picked from 1 to the `max loop length`.
- (1/3 ot the time) constructed by combining two different sample transactions each having a loop length from 1 to `max loop length/2` (`max loop length` is different for each transaction type).

After block was executed the weight data and the execution time was extracted from the logs for each transaction in that block.

The execution time of each sample transaction is then used to adapt that sample transactions _max loop length_ so that the execution time would stay below 500 ms

A new execution state was created for every 100 blocks, clearing all state changes done by the previous transactions.

The data was collected by running a total of 5000 blocks which contained a total of 144 901 transactions.

The collected data is a large matrix that has the following form:

<!-- generated with https://jsfiddle.net/kxLuj8c9/ -->

![TEF](./20220111-execution-effort/data-matrix-sketch.png)

Matrix <!-- $M$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/SmblEwKco6.svg"> represents the weight data, vector <!-- $v$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/LwC51eYP1G.svg"> represents the execution times.

### Weights placement

A total of 26 different weights were used.
Of those 25 weights were placed in functions in `transactionEnv.go` which implements the interface between Cadence and the flow virtual machine (FVM).

The `function_or_loop_call` weight is an exception as that counts any cadence function (function calls in the cadence script) and any cadence loop. This is also the weight that is already currently in place, as discussed above.

The weights `GetValue` and `SetValue` are also different, as instead of just counting the number of times a transaction calls those functions, they instead count how many bytes were read or written, when they are called.

| Weight name                | Weight trigger                           | intent of that part of the code                                                                             |
| -------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| AddEncodedAccountKey       | function calls                           | Add a public key to an account                                                                              |
| AllocateStorageIndex       | function calls                           | Allocates a new storage index (for slab storage)                                                            |
| ContractFunctionInvoke     | function calls                           | Called when a contract function is invoked by the FVM directly (fee deduction, getting account balance,...) |
| CreateAccount              | function calls                           | Called to create a new account                                                                              |
| EmitEvent                  | function calls                           | Called to emit an event                                                                                     |
| function_or_loop_call      | every cadence function call or loop call | Called every time a cadence function is called a a loop is made in cadence                                  |
| GetAccountAvailableBalance | function calls                           | Gets account available balance                                                                              |
| GetAccountBalance          | function calls                           | Gets account balance                                                                                        |
| GetAccountContractCode     | function calls                           | Gets accounts contract code (by name)                                                                       |
| GetAccountContractNames    | function calls                           | Gets the names of all contracts deployed on an account                                                      |
| GetCode                    | function calls                           | Gets accounts contract code (by name); called within GetAccountContractCode                                 |
| GetProgram                 | function calls                           | Gets an interpreted program (contract)                                                                      |
| GetStorageCapacity         | function calls                           | Gets the storage capacity of an account                                                                     |
| GetStorageUsed             | function calls                           | Gets the storage used of an account                                                                         |
| GetValue                   | the number of bytes read from a register | Get the value of a storage register                                                                         |
| ProgramChecked             | function calls                           | Cadence callback after a program (transaction/script/contract code) was checked                             |
| ProgramInterpreted         | function calls                           | Cadence callback after a program (transaction/script/contract code) was interpreted                         |
| ProgramParsed              | function calls                           | Cadence callback after a program (transaction/script/contract code) was parsed                              |
| ResolveLocation            | function calls                           | Called to resolve a location (most notably to resolve an import to a specific contract location)            |
| RevokeEncodedAccountKey    | function calls                           | Revokes an account's key                                                                                    |
| SetProgram                 | function calls                           | Caches an interpreted program (contract)                                                                    |
| SetValue                   | the number of bytes saved to a register  | Set a value to a storage register                                                                           |
| UpdateAccountContractCode  | function calls                           | Updates an account's contract                                                                               |
| ValueExists                | function calls                           | Checks if a certain register exists                                                                         |
| ValueDecoded               | function calls                           | Cadence callback after a value was decoded into a cadence type                                              |
| ValueEncoded               | function calls                           | Cadence callback after a cadence type was encoded into a cadence json                                       |

### Data analysis

The large amount of different weights chosen was intentional. This allows for better insight into which weights should actually be used.

The Following chapters describe how the linear model fitting was done due to a significant amount of outliers in the data and how certain weights were eliminated, because they were either to correlated with other weights, to small, or had a lot of noise.

A note on the `time to execute [ms]` vs `Execution effort` graphs. The closer the data is to the red dashed line which represents `time to execute = Execution effort` the better the fit of the model. Data that is to the right side of the graph, represents transactions that took longer than expected, and were thus charged less than they should be (but some variance and outliers are expected here). Data to the left side of the graph represents transactions where the execution did not take as long as the model predicted, and as a consequence those transactions will be charged more then they should be.

#### Weight correlation

Before using the data in a linear model, its important to note that the rank of the matrix of all weight data <!-- $M$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/SmblEwKco6.svg"> is smaller than the number of weights. This means that some wights are correlated to others. These are asy to spot by checking the correlation matrix where only the entries with 1 or -1 are highlighted.

![Correlation1](./20220111-execution-effort/correlation1.png)

The pairs that are correlated are:

- `ProgramChecked` / `ProgramParsed`
- `GetCode` / `GetAccountContractCode`
- `ValueExists` / `CreateAccount`

These pairs of weights were cross checked with the implementation to confirm that they are always called together.

The columns with weights `ProgramChecked`, `GetCode` and `ValueExists` were removed from the weight data matrix <!-- $M$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/SmblEwKco6.svg">.

#### Outliers and robust linear model fitting

The following is a linear model fit on the data and plotting the data on a graph of execution time taken (in milliseconds) vs execution effort.

![DemoFit](./20220111-execution-effort/demo-fit.png)

This data has a proportional relation, but also has a lot of noise especially to the right of the graph. Noise to the right of the graph means that sometimes transactions take longer than expected (which could be due to gc pauses, or the machine doing something else, or cache misses, ...).

The outliers cause the goodness of the linear model fit to degrade. A way how to remedy this is described in detail in the [Wolfram documentation](https://reference.wolfram.com/applications/eda/RobustFitting.html) and can be described in short as using the residual (error) of each data point to tweak the weight of that data point, and then re-fitting the data with regard to those weights. This is done until the model converges.

The function that converts the residual of a data point to its weight was chosen to be an asymmetrical function with a different cut-off to the left and to the right. This is because the outliers were mostly to the right of the graph, and the signal was to the left of the graph. The cut-off point was 16 times of the mean of the residuals while the cut-off point to the right was 10 times of the mean residual.

![Residual2Weight](./20220111-execution-effort/residual-to-weight.png)

This improves the final model fit. 

On the following chart the color of each data point represents the weight of that data point. The darker the color the lower the weight of the data point.

![BetterFit](./20220111-execution-effort/better-fit.png)

#### Eliminating weights

Even with the weights with 1:1 correlation gone, the remaining weights still contained a lot of error.

![ParametersFull](./20220111-execution-effort/parameters-full.png)

Some weights also contain negative values. This is not unexpected as the data is noisy, but leaving weights as negative in the final model could be problematic, as there might be a way to construct transactions in a way to exploit that.

Through a process of trial an error, weights with high error, a negative value or a small value were removed and the data re-fitted until a good fit was found.

#### Comparison with the current system

The collected data can be used to make a comparison with the current system. The weight `function_or_loop_call` is exactly what is currently used. Plotting a fit of `function_or_loop_call` to the execution times of transactions allows us to directly compare this graph to the final model.

![BadFit](./20220111-execution-effort/bad-fit.png)

The goodness-of-fit (<!-- $r^2$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/utSvouRK8p.svg">) for this is `0.532394`. Considerably lower than the final model.

### Final model proposal

This FLIP proposes using 8 weights:

![ParametersGood](./20220111-execution-effort/parameters-good.png)

The goodness-of-fit for this model is `0.862235`, considerably better than the current system `0.532394`.

The graph of the model:

![GoodFit](./20220111-execution-effort/good-fit.png)

### Execution effort limit

Since the execution effort is defined to be in a 1 to 1 correlation with the execution time, choosing the execution effort limit means choosing the maximum allowed execution time.

Choosing the execution effort limit to be 100 means that if all transactions are at maximum that would currently result in a maximum of 10 transactions per second.

### Execution Effort cost

Below is a table of different percentiles of transaction execution times from 5. Jan. 2022 to 13. Jan. 2022 (one week).

| Percentile | Execution time [ms] |
| ---------- | ------------------- |
| 99         | 29.7                |
| 95         | 15.6                |
| 90         | 14.4                |
| 50         | 7.07                |
| 25         | 5.39                |


The original goal described in the [Variable Transaction fees FLIP](20211007-transaction-fees.md) was that for 95% of transactions to be cheaper after the transition to variable transaction fees.

This means that the 95th percentile execution time times the price of one unit of execution effort should be half of the current fixed fees (the other half will be inclusion effort):

```
15.6 * price of one unit of execution effort = 0.000005
```

This means that price of one unit of execution effort is <!-- $32 *10^{-8} \left[\frac{\textbf{FLOW}}{\textbf{unit of effort}}\right]$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/do5GxhVTjV.svg">

### The future of the model

This model needs to be further improved in the future. The following chapters address possible upgrade paths.

#### Known missing weights

Appendix 2 illustrates how the linear model works for the different transaction types. While it works great for many of them it performs poorly for certain transaction types.

Adding different weighs to the model (from those that were in the data set) did not noticeably improve the fit for these transaction types. This means there there is one or multiple different functions/operations that need to have a weight added to them. More research is needed to find these functions, and improve the model.

#### Data collection

Transactions for data collections were designed and might not represent transaction seen "in the wild". To improve the data set the designed set of transactions could be combined with transactions seen on mainnet. To do this each transaction (or a sample of them) on mainnet would need to log how many times each weight is hit.

#### Outlier analysis

The model can be improved by looking at the execution path of outliers, and trying to discern if any weights are missing on those execution paths.

#### Failing transactions

The model did not cover costs of the FVM recovering after a failure. The avenue should be explored in order to price failing transactions fairly.

### Performance Implications

The impact to performance is low, as this would only add some addition and multiplication when certain functions were called.

### User Impact

The execution effort calculation could first be implemented without connecting it to fees. This would allow users to see how much execution effort their transactions are using and estimate how much their transactions would cost.

The execution effort could then be included in the calculation of the transaction fees slightly later.

## Questions and Discussion Topics

## Appendices

### Appendix 1: varying sample transactions max loop length

Sample transactions are run with a varying loop length that is randomly chosen between 1 and _max loop length_ for that transaction type. As an example a loop length of 100 means that the create account sample transaction will take about 2000 times longer than the reference sample transaction. This causes two problems:

1. The transaction types are difficult to compare and visualize in a graph because they are in completely different time scales.
2. The time resolution is 1 ms which means that if the whole span from 1 loop to _max loop length_ for a transaction type is under 10 ms there will be a lot of error in the measurement.

To address this problem the _max loop length_ (per sample transaction type) is adjusted during the data collection so that the transaction times generally span from 0 to 500 milliseconds.

This is achieved using the following method. Using the assumption that we are already making, that the time taken to execute a transaction (<!-- $t$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/IaaH0s0S1C.svg">) is proportional to transactions loop length (<!-- $l$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/flUdOiZru7.svg">), we can write the following relation.

<!-- $$
t \approx kl
$$ --> 

<div align="center"><img style="background: white;" src="./20220111-execution-effort/eq/4fBxFBaa1u.svg"></div>

Given the desired maximum time of 500 ms (t_max), the maximum loop length (<!-- $l_\textbf{max}$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/nTaimah637.svg">) can be written as

<!-- $$
\frac{t_\textbf{max}}{k} = l_\textbf{max}
$$ --> 

<div align="center"><img style="background: white;" src="./20220111-execution-effort/eq/81WicaV3gM.svg"></div>

The coefficient <!-- $k$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/fSFxSlgTsg.svg"> can be expressed with the date from all the previous runs. <!-- $N$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/Cd7RKP5BBD.svg"> is the last run of this transaction type, <!-- $t_i$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/TL162H0uyX.svg"> and <!-- $l_i$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/ksMl1VjIVd.svg"> are the time taken and loop length of the i-th run of this transaction type.

<div align="center"><img style="background: white;" src="./20220111-execution-effort/eq/t8txgKtOmc.svg"></div>

So we don't have to keep track of all previous <!-- $t_i$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/Y54OjO1DWR.svg"> and <!-- $l_i$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/P1NUv79K4S.svg">, we can express <!-- $k_{N+1}$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/k684IPYDW2.svg"> with <!-- $k_{N}$ --> <img style="transform: translateY(0.1em); background: white;" src="./20220111-execution-effort/eq/Mtl8xqt59u.svg"> in the following manner.

<div align="center"><img style="background: white;" src="./20220111-execution-effort/eq/XMTbAMXYFN.svg"></div>

This means that we can update the _max loop length_ after every transaction of this type with this pseudocode

```py
# can be set to 0 starting out
k = 0
N = 0
# some starting max loop length that is not too high
l_max = 100
# the desired maximum transaction execution time
t_max = 500 # ms

def update_max_loop_length(loop_length, time_taken_to_execute):
    k = (N * k + time_taken_to_execute/loop_length)/(N + 1)
    N = N + 1
    l_max = t_max/k
```

### Appendix 2: Jupyter + Mathematica

[WolframScript](https://www.wolfram.com/wolframscript/) was used for data analysis. [Jupyter](https://jupyter.org/) with [WolframLanguageForJupyter](https://github.com/WolframResearch/WolframLanguageForJupyter) offers a convenient way to do this. The result was a Jupyter notebook that can be found [here](./20220111-execution-effort).

The instructions on how to get these three things working together nicely are in the [WolframLanguageForJupyter](https://github.com/WolframResearch/WolframLanguageForJupyter) repository.

### Appendix 3: Breakdown of the model according to different transaction types

This chapter illustrates how the final model fits different transaction types.

<details>
<summary>Collapsed for readability.</summary>
<p>

![details1](./20220111-execution-effort/detail-1.png)

![details2](./20220111-execution-effort/detail-16.png)

</p>
</details>
