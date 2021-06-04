---
title: "Genesis Bootstrapping"
slug: "genesis-bootstrapping"
excerpt: "Starting the Flow Network from scratch"
hidden: true
createdAt: "2020-03-31T20:56:39.427Z"
updatedAt: "2020-04-09T18:12:13.758Z"
---
[block:callout]
{
  "type": "warning",
  "title": "Genesis Only",
  "body": "All nodes joining the network in May are required to go through this process as part of the Genesis Bootstraping."
}
[/block]

[block:api-header]
{
  "title": "Overview"
}
[/block]
To kickstart the Flow network and build the first block, all the nodes that will participate in the first round of consensus need to be known and have exchanged some metadata in advance.

This guide will take you through setting up your nodes, running the initial metadata and key generation, exchanging data back and forth with the Flow team, and then finally starting your nodes to join the network.
[block:api-header]
{
  "title": "Before You Begin"
}
[/block]
The Flow consensus algorithm depends on there always being a previous block, which means your nodes cannot start until _after_ the Genesis block has been signed. The process of signing that block will be done by the Flow team, and can only be done after every node has completed the first half of the bootstrapping process, which assures that all the identities are included. Since the Flow team needs to wait for metadata from all participants, it will take a hours to even days until the Flow network can start.

The bootstrapping process will be in 2 phases, with the Flow team signing the Genesis block between the two.
[block:callout]
{
  "type": "info",
  "title": "Understanding Keys",
  "body": "The bootstrapping process deals with a number of different keys. Make sure you understand their usage and terminology by reviewing the [Node Keys Guide](doc:node-keys)."
}
[/block]

[block:api-header]
{
  "title": "Download the Bootstrapping Toolkit"
}
[/block]
Both phases of the bootstrapping are automated with scripts. Pull a copy onto each of your nodes and extract it.
[block:code]
{
  "codes": [
    {
      "code": "~ $ curl -sL -O storage.googleapis.com/flow-genesis-bootstrap/boot-tools.tgz\n~ $ tar -xaf boot-tools.tgz",
      "language": "shell",
      "name": "Pull boot-tools"
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Generate Your Node Keys"
}
[/block]
Start the boostrapping process by generating your Staking Key and Networking Key. Use your Node Address in the `--address` flag, and the node role.
[block:code]
{
  "codes": [
    {
      "code": "~ $ mkdir ~/bootstrap\n~ $ ./boot-tools/bootstrap key --address \"example.com\" --role \"consensus\" -o ~/bootstrap",
      "language": "shell",
      "name": "Generate bootstrap keys"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "BYO Entropy",
  "body": "By default, the bootstrap script uses the kernel entropy source, either via a `getrandom` syscall or `/dev/urandom`. If you have a more secure source of entropy, like a hardware device, you can specify `--staking-seed` and `--networking-seed`, to provide your own seeds.\n\nRun the `bootstrap` command with no flags to print usage information."
}
[/block]

[block:callout]
{
  "type": "danger",
  "title": "Protect your keys!",
  "body": "The key pairs generated in the bootstrapping process are extremely sensitive and must be managed securely. This guide does not deal with storing the keys in a secure backup or controlling access, as the right approach to this will vary user to user, but it is something you must consider.\nPrivate keys are suffixed with `.priv.json`, their public counterparts are not sensitive and can be shared freely."
}
[/block]
This command generates two keys, a Staking Key and a Network Key, and stores them both in a `.node-info` file. Both these keys are needed during runtime and must be present as a file to start your flow node.

For more details around all the keys that are needed to run nodes and their usage, see the [Node Keys](doc:node-keys) overview.

The bootstrapping process will create a file structure similar to the following
[block:code]
{
  "codes": [
    {
      "code": "~\n└──bootstrap\n    ├──{id}.node-info.priv.json\n    └──{id}.node-info.pub.json",
      "language": "text",
      "name": "bootstrap directory"
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Upload Public Keys"
}
[/block]
To mint the Genesis Block, the Flow team will need the public Staking and Network keys from all your nodes.

To facilitate this, the boot-tools directory comes with a script `push-keys` that will bundle your `*.pub.json` files and send it to the flow team. You can inspect this script to make sure no private key material is being bundled or uploaded. The data not encrypted before being sent as the public keys involved are not sensitive.

In phase 2 of the bootstrapping process, the Flow team will need to securely issue each node a Random Beacon key. This key is again sensitive and unique to your node. To enable this, the `push-keys` script also generates another key pair called the Transit Key. The public key of this pair will be uploaded along with the Staking and Network keys, and your Random Beacon key will be encrypted with it before being sent to you. You must keep your Transit Key until you have received and decrypted your Random Beacon key from the Flow team.
[block:callout]
{
  "type": "warning",
  "title": "Token Needed",
  "body": "The transit script here need a `-t` token parameter flag. This token will have been provided to you by the Flow team out of band. Reach out to your contact if you don't have your token."
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "~ $ ./boot-tools/transit -push -d ~/bootstrap -t ${TOKEN}\nCreating Transit Keypair\nBundling Keys\nUploading to Server",
      "language": "shell",
      "name": "Upload public keys"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "danger",
  "title": "One and Done!",
  "body": "Once you've run the bootstrap and are confident in your setup, run the transit push command only once. If you bootstrap again and transit push again with a new node ID, it will count against your quota of Nodes. Exceeding your quota will result in a long back and forth with the Flow team to see which node is the extra one."
}
[/block]

[block:api-header]
{
  "title": "Wait"
}
[/block]
Now the ball is in the Flow team's court. As soon as all nodes have completed the above steps, the Genesis block will be minted and distributed to you.

Join the [Flow discord server](https://chat.onflow.org) if you haven't already and stay tuned for updates. Your nodes need not be online during this waiting period if you want to suspend them to reduce cost, but you must not lose your key material.
[block:callout]
{
  "type": "info",
  "title": "A Note on Staking",
  "body": "For the Genesis Block, your nodes will start pre-staked, which means no action on your part is needed to get your nodes staked.\n\nFor more details on staking check the guide on [Staking and Rewards](doc:staking-and-rewards)."
}
[/block]

[block:api-header]
{
  "title": "Receive Your Random Beacon Keys"
}
[/block]
When the Flow team gives the go-ahead, your Random Beacon keys will be available for retrieval. Each Node will need to pull their own keys down individually.
[block:code]
{
  "codes": [
    {
      "code": "~ $ ./boot-tools/transit -pull -d ~/bootstrap -t ${TOKEN}\nFetching keys for node ID FEF5CCFD-DC66-4EF6-8ADB-C93D9B6AE5A4\nDecrypting Keys\nKeys available",
      "language": "shell",
      "name": "Pull beacon keys"
    }
  ]
}
[/block]
Pulling your keys will also pull a bunch of additional metadata needed for the bootstrapping process.
In the end, your bootstrap directory should look like this:
[block:code]
{
  "codes": [
    {
      "code": "~\n└──bootstrap\n    ├──{id}.node-info.priv.json\n    ├──{id}.node-info.pub.json\n    ├──{id}.random-beacon.priv.json\n    ├──dkg-data.pub.json\n    ├──node-infos.pub.json\n    ├──genesis-block.json\n    ├──{cid}.genesis-cluster-block.json # Only on collector nodes\n    ├──{cid}.genesis-cluster-qc.json    # Only on collector nodes\n    └──execution-state\n        └── <additional files...>",
      "language": "text",
      "name": "bootstrap directory"
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "New Images"
}
[/block]
Once the Genesis block has been minted, it will be included into the official container images so that it's available to all nodes. Pull the new images, which should now be version `v1.0.0`.
[block:api-header]
{
  "title": "Start Your Nodes"
}
[/block]
Once every node has puled its keys and fetched the new images, the network is ready to start. 

Make sure you're part of the [Discord Chat](https://chat.onflow.org). The Flow team will let everyone know once all nodes are ready.

Start your systems, lets make some blocks!