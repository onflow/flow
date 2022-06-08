---
title: Testnet Testing Guidelines
sidebar_title: 3. Testnet Testing
---

> **Important**: This section will not be required as soon as Flow rolled out [permissionless deployment (ETA summer 2022)](https://permissionless.onflow.org/). However, it is critical to test your applications and contracts thoroughly on the testnet as part of your road to the mainnet.

If you want to deploy applications to Flow Mainnet prior to the permissionless rollout, you are required to have your applications tested first on Testnet before submitting smart contracts for review.

This is done in the early stages of development of the Flow network for a number of reasons. Primarily, it's to help developers understand how to create stable and robust applications using the Flow development stack.

Make sure to read these guidelines and complete the requirements they describe before submitting your application for review.

## Testing Your Application

### Automated Testing of Contract Code

All contracts submitted for review should include test coverage for _all contract functions_. Your tests will be reviewed to make sure you've accounted for success and failure cases appropriately.

Submitted projects should have instructions describing how to run tests locally. Tests should also be runnable in automated environments (CI).

You can use the [JavaScript testing framework](https://github.com/onflow/flow-js-testing) to create tests for your smart contract code.

### Stress Testing Live Applications Before Mainnet

After your app has been approved and deployed, a period of observation will begin. During this time it will record how your application handles traffic, to ensure there aren't any problems that could affect the wider network or your application's user-experience.

During the observation period, your application should handle non-trivial amounts of traffic to ensure there are no issues. If there is not enough traffic, the Mainnet approval might be delayed.

Including your own automated load testing or load-testing metrics could help your application get approval for Mainnet faster.

> **Note**: Get familiar with the [Cadence anti-patterns](/cadence/anti-patterns/) to avoid avoid problematic or unintended behavior
