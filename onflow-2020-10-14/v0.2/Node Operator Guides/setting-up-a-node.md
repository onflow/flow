---
title: "Setting Up a Node"
slug: "setting-up-a-node"
excerpt: "Get stared running a Flow node"
hidden: true
createdAt: "2020-04-03T21:27:27.379Z"
updatedAt: "2020-04-16T20:00:18.830Z"
---
[block:api-header]
{
  "title": "Setup your Node Hardware"
}
[/block]
First you'll need to provision a machine or virtual machine to run your node software. 

## Hardware Requirements
The hardware your Node will need varies depending on the role your Node will play in the Flow network. For an overview of the differences see the [Node Roles Overview](doc:node-roles).
[block:parameters]
{
  "data": {
    "h-0": "Node Type",
    "h-1": "CPU",
    "h-2": "Memory",
    "h-3": "Disk",
    "h-4": "Disk",
    "0-0": "Collector",
    "1-0": "Consensus",
    "2-0": "Execution",
    "3-0": "Verification",
    "4-0": "Access",
    "0-1": "4 cores",
    "0-3": "200 GiB",
    "1-1": "4 cores",
    "2-1": "8 cores",
    "3-1": "8 cores",
    "4-1": "2 cores",
    "2-3": "5 TiB",
    "3-3": "100 GiB",
    "4-3": "200 GiB",
    "1-3": "100 GiB",
    "1-2": "15 GiB",
    "0-2": "15 GiB",
    "3-2": "30 GiB",
    "4-2": "8 GiB",
    "2-2": "32 GiB"
  },
  "cols": 4,
  "rows": 5
}
[/block]
## Networking Requirements
Most of the load on your nodes will be messages sent back and forth between other nodes on the network. Make sure you have a sufficiently fast connection, we recommend at _least_ 1Gbps, and 5Gbps is better.

Each node will require either a static IPv4 address or a fixed DNS name. Either works, and we'll refer to this more generally as your Node Address from here out. Nodes communicate to other nodes directly using this address, so it must be internet available.

Your firewalls must expose TCP/3569 for Node communication. If you run an Access Node, you must also expose the configurable GRPC port.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5fb5473-Flow-architecture.png",
        "Flow-architecture.png",
        1460,
        721,
        "#e8edf5"
      ],
      "caption": "Example Topology for an exhaustive hosting setup"
    }
  ]
}
[/block]
## Operating System Requirements
The Flow node code is distributed as a Linux container image, so your node must be running an OS with a container runtime like [docker](https://docker.com) or [containerd](https://containerd.io). 

The bootstrapping scrips we'll use later are compiled binaries targeting an `amd64` architecture, so your system must be 64 bit.  Some of the scripts also bash based and a shell interpreter that is bash compatible will also be needed.

Flow also provides `systemd` service and unit files as a template for installation, though `systemd` is not required to run Flow.

The Flow team has tested running nodes on Ubuntu 18.04 and GCP's Container Optimized OS which is based on Chromium OS.
[block:callout]
{
  "type": "info",
  "title": "Choose Your Own Adventure",
  "body": "Flow is distributed in such a way that makes it very system agnostic. You are free to build your own orchestration around how you run your nodes and manage your keys.\n\nFor the remainder of this guide, we cover the most simple case, a single node being hand deployed. This should give you a good sense of what's needed, and you can modify to suit your needs from there."
}
[/block]

[block:api-header]
{
  "title": "Pull the Flow Images"
}
[/block]
The `flow-go` binaries are distributed as container images, and need to be pulled down to your host with your image management tool of choice.
[block:code]
{
  "codes": [
    {
      "code": "# Docker\ndocker pull gcr.io/flow-images/flow-go:stable\n\n# Containerd\nctr images pull gcr.io/flow-image/flow-go:stable",
      "language": "shell"
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Set Your Node to Start"
}
[/block]
Your nodes will need to boot at startup, and come back to life if they crash.

If you are running `systemd` and you can use the service files provided by flow-go. Both `flow-docker` or `flow-containerd` are available.
[block:code]
{
  "codes": [
    {
      "code": "curl https://raw.githubusercontent.com/onflow/flow-go/master/deploy/systemd/flow-containerd.service -o /etc/systemd/system/flow.service\n\nsystemctl enable containerd\nsystemctl enable flow",
      "language": "shell"
    }
  ]
}
[/block]
If you are using some other system, you need to ensure that the flow container is started, and the appropriate key directories are mounted into the container.