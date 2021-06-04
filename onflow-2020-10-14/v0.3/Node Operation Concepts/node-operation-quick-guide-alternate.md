---
title: "Node Operation Quick Guide (alternate)"
slug: "node-operation-quick-guide-alternate"
hidden: true
createdAt: "2020-05-27T21:02:56.165Z"
updatedAt: "2020-08-03T17:05:04.721Z"
---
# Step 0 - Cleaning Up your Previous State 
[block:callout]
{
  "type": "warning",
  "body": "You can skip this step if it is your first time running a node on Flow"
}
[/block]
1. Stop your Flow node 
1. Clear the contents of your  `data` directory that you have previously created. The default location is  `/var/flow/data`. The `data` directory contains the Flow chain state.

# Step 1 - Run Genesis Bootstrap
[block:callout]
{
  "type": "info",
  "body": "You will need to run this process **for each** node that you are operating"
}
[/block]

## Generate Your Node Keys
[block:callout]
{
  "type": "danger",
  "title": "Addresses",
  "body": "1) You will need to have a real address, for example, a CNAME pointed at the node or just the IP address e.g. example.com:3869 or 189.23.42.12:3869.\n2) Do not include in `http://` format\n3) If you are running multiple nodes, please ensure you have different addresses for each node"
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Take a backup",
  "body": "All your current keys and Flow genesis files should be in the `bootstrap` folder created earlier. Please take a back up of the entire folder."
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "## Skip if this is section if this is your first time ##\n# If you joined our network previously, make sure to take a backup of your previously generated keys! \ncp -r /path/to/bootstrap /path/to/bootstrap.bak\n#########################################################\n# Generate Keys\n$ mkdir ./bootstrap\n# YOUR_NODE_ADDRESS: FQDN or IP address associated to your instance\n# YOUR_NODE_ROLE: The Flow nodes that you wish to run, it should be ONE of the following - [ access, collection, consensus, execution, verification ]\n$ docker run --user $(id -u):$(id -g) --mount type=bind,source=\"$(pwd)\"/bootstrap,target=/app  gcr.io/dl-flow/bootstrap:latest key -o ./app --address \"${YOUR_NODE_ADDRESS}:3569\" --role ${YOUR_NODE_ROLE}",
      "language": "shell"
    }
  ]
}
[/block]
## Upload your Public Keys
[block:callout]
{
  "type": "warning",
  "title": "Tokens",
  "body": "If you're running multiple nodes, you only need one token - it can be used to generate multiple keys \n\nPlease use the following pattern when generating your token `candidate-<version>-<yourname>` (you can pick any version number, it just helps us keep track of the most recent keys you've sent and would like us to include in the bootstrapping process)"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "$ docker run --user $(id -u):$(id -g) --mount type=bind,source=\"$(pwd)\"/bootstrap,target=/app  gcr.io/dl-flow/bootstrap-transit:latest -push -d ./app -t ${TOKEN} -role ${YOUR_NODE_ROLE}\n\nRunning push\nGenerating keypair\nUploading ...\nUploaded 400 bytes",
      "language": "shell"
    }
  ]
}
[/block]
# Step 2 - Getting Ready to Start your Flow Node
[block:callout]
{
  "type": "danger",
  "title": "Before proceeding to Step 2, ensure that Step 1 was completed successfully with the bootstrap directory handy (default: `/var/flow/bootstrap`)"
}
[/block]
1. Expose TCP/3569 on your firewall. If you are running Flow **access node** you will also need to **expose** TCP/9000.
2. Create the `data` directory if you have not previously created it and/or removed a previous version of it (default: `/var/flow/data`)
[block:callout]
{
  "type": "info",
  "body": "You can choose to run your Flow Node via `docker` or have `systemd` to manage your Flow node. Make sure to choose **one of these options only**",
  "title": "Decide if you are Using Systemd"
}
[/block]
## Systemd
**If you are running your Flow Node via Docker you can skip this step and go to the Docker section below.**

1. Ensure that you pulled the latest changes from [flow-go repository](https://github.com/dapperlabs/flow-go) via `git`

[block:code]
{
  "codes": [
    {
      "code": " ## Clone the repo if you haven't already done so\n git clone https://github.com/dapperlabs/flow-go\n \n ## Get latest changes\n cd flow-go\n git pull origin master",
      "language": "text"
    }
  ]
}
[/block]
2. Copy your respective [systemd unit file](https://github.com/dapperlabs/flow-go/tree/master/deploy/systemd-docker) to: `/etc/systemd/system`

3. Create directory `sudo mkdir /etc/flow`

4. Copy the [runtime-conf.env](https://github.com/dapperlabs/flow-go/blob/master/deploy/systemd-docker/runtime-conf.env) you updated in step 3 to: `/etc/flow/`

5. Enable your service `sudo systemd enable YOUR-FLOW-NODE.service`
[block:callout]
{
  "type": "danger",
  "title": "Wait for the Flow team announcement before you proceed to Step 3"
}
[/block]
## Step 3 - Start your Flow Node
Once you receive an announcement from the Flow team that the network had been booted (via Discord you will need to fetch the genesis info, update your runtime configuration and then boot your Flow node up!
[block:callout]
{
  "type": "warning",
  "title": "Transit Pull",
  "body": "The Flow team will provide you a **new** token** `PULL_TOKEN` **to pull the genesis info from (Please do NOT use the original Token that you used in Step 1)\n\nThe `YOUR_NODE_TYPE` **must be**  the same ones that you used on [step 1 - generating your node keys](https://docs.onflow.org/docs/node-operation-consolidated-guide#generate-your-node-keys)"
}
[/block]
1. Run the transit script to fetch the new genesis info:
`docker run --user $(id -u):$(id -g) --mount type=bind,source="$(pwd)"/bootstrap,target=/app  gcr.io/dl-flow/bootstrap-transit:latest -pull -d ./app -t ${TOKEN} -role ${YOUR_NODE_ROLE}`
2. Pull the latest changes from [flow-go repository](https://github.com/dapperlabs/flow-go) 
3. Get your `node-id`, you can find it at `/path/to/bootstrap/public-genesis-information/node-id`
4. Update the `FLOW_GO_NODE_ID` inside [runtime-conf.env](https://github.com/dapperlabs/flow-go/blob/master/deploy/systemd-docker/runtime-conf.env) to the `node-id` that you got from the previous step
5. Start your Flow node via `docker` or `systemd` 

## Docker
**You can skip this section if you are running via systemd**

1. Update your environment variables: `source /path/to/runtime-conf.env` 
2. Run the following `docker` command based on the Flow node that you are running:
[block:callout]
{
  "type": "warning",
  "body": "The following commands needs to have their path for `data` and `bootstrap` volume mount to be updated! The paths that you would want are from step 2.2 and 2.3a.",
  "title": "Remember: update your docker volume mounting path"
}
[/block]
### Access
```
docker run --rm \
	-v /path/to/bootstrap:/bootstrap:ro \
	-v /path/to/data:/data:rw \
	--name flow-go \
	--network host \
	gcr.io/flow-container-registry/access:v0.0.6-alpha \
	--nodeid=${FLOW_GO_NODE_ID} \
	--bootstrapdir=/bootstrap \
	--datadir=/data/protocol \
	--rpc-addr=0.0.0.0:9000 \
	--ingress-addr=${FLOW_NETWORK_COLLECTION_NODE} \
	--script-addr=${FLOW_NETWORK_EXECUTION_NODE} \
	--bind 0.0.0.0:3569 \
	--loglevel=error
```

### Collection
```
docker run --rm \
	-v /path/to/bootstrap:/bootstrap:ro \
	-v /path/to/data:/data:rw \
	--name flow-go \
	--network host \
	gcr.io/flow-container-registry/collection:v0.0.6-alpha \
	--nodeid=${FLOW_GO_NODE_ID} \
	--bootstrapdir=/bootstrap \
	--datadir=/data/protocol \
	--rpc-addr=0.0.0.0:9000 \
	--nclusters=${FLOW_NETWORK_COLLECTION_CLUSTER_COUNT} \
	--bind 0.0.0.0:3569 \
	--loglevel=error
```

### Consensus
```
docker run --rm \
	-v /path/to/bootstrap:/bootstrap:ro \
	-v /path/to/data:/data:rw \
	--name flow-go \
	--network host \
	gcr.io/flow-container-registry/consensus:v0.0.6-alpha \
	--nodeid=${FLOW_GO_NODE_ID} \
	--bootstrapdir=/bootstrap \
	--datadir=/data/protocol \
	--nclusters=${FLOW_NETWORK_COLLECTION_CLUSTER_COUNT} \
	--bind 0.0.0.0:3569 \
	--loglevel=error
```

### Execution
```
docker run --rm \
	-v /path/to/bootstrap:/bootstrap:ro \
	-v /path/to/data:/data:rw \
	--name flow-go \
	--network host \
	gcr.io/flow-container-registry/execution:v0.0.6-alpha \
	--nodeid=${FLOW_GO_NODE_ID} \
	--bootstrapdir=/bootstrap \
	--datadir=/data/protocol \
	--ingress-addr=0.0.0.0:9000 \
	--nclusters=${FLOW_NETWORK_COLLECTION_CLUSTER_COUNT} \
	--bind 0.0.0.0:3569 \
	--loglevel=error
```


### Verification
```
docker run --rm \
	-v /path/to/bootstrap:/bootstrap:ro \
	-v /path/to/data:/data:rw \
	--name flow-go \
	--network host \
	gcr.io/flow-container-registry/verification:v0.0.6-alpha \
	--nodeid=${FLOW_GO_NODE_ID} \
	--bootstrapdir=/bootstrap \
	--datadir=/data/protocol \
	--nclusters=${FLOW_NETWORK_COLLECTION_CLUSTER_COUNT} \
	--bind 0.0.0.0:3569 \
	--loglevel=error
```

## Systemd
**You can skip this section if you are running via docker**

1. Check that your `runtime-conf.env` is at `/etc/flow/runtime-conf.env`
2. Check that you have updated the variables inside the `runtime-conf.env` 
3. Start your service: `sudo systemctl start flow`

# Step 4 - Verify if your Node is Running

Here are a few handy commands that you can use to check if your Flow node is up and running

## Docker

- To get Flow logs: `sudo journalctl -u flow-YOUR_ROLE`
- To get the status: `sudo docker ps`
[block:code]
{
  "codes": [
    {
      "code": "$ sudo docker ps\nCONTAINER ID        IMAGE                                 COMMAND                  CREATED             STATUS              PORTS               NAMES\n1dc5d43385b6        gcr.io/dl-flow/verification:candidate1 \"/bin/app --nodeid=4…\"   30 hours ago        Up 30 hours                             flow-go",
      "language": "shell",
      "name": "example output"
    }
  ]
}
[/block]
## Systemd

- To get Flow logs: `sudo journalctl -u flow-YOUR_ROLE`
- To get your Flow node status: `sudo systemctl status flow`
[block:code]
{
  "codes": [
    {
      "code": "● flow-verification.service - Flow Access Node running with Docker\n   Loaded: loaded (/etc/systemd/system/flow-verification.service; enabled; vendor preset: enabled)\n   Active: active (running) since Wed 2020-05-20 18:18:13 UTC; 1 day 6h ago\n  Process: 3207 ExecStartPre=/usr/bin/docker pull gcr.io/dl-flow/verification:${FLOW_GO_NODE_VERSION} (code=exited, status=0/SUCCESS)\n Main PID: 3228 (docker)\n    Tasks: 10 (limit: 4915)\n   Memory: 33.0M\n   CGroup: /system.slice/flow-verification.service\n           └─3228 /usr/bin/docker run --rm -v /var/flow/bootstrap:/bootstrap:ro -v /var/flow/data:/data:rw --rm --name flow-go --network host gcr.io/dl-flow/verification:candidate1 --nodeid=489f8a4513d5bd8b8b093108fec00327b683db545b37b4ea9153f61b2c0c49dc --bootstrapdir=/bootstrap --datadir=/data/protocol --alpha=1 --bind 0.0.0.0:3569 --loglevel=error",
      "language": "shell",
      "name": "example output"
    }
  ]
}
[/block]
# Step 5 (optional) - Monitoring and Metrics
This is intended for operators who would like to see what their Flow nodes are currently doing. Head over to [Monitoring Node Health](doc:monitoring-node-health) to get setup. 

# Common Issues

## Error: cannot create connection 
[block:code]
{
  "codes": [
    {
      "code": "20T18:34:21Z\",\"message\":\"could not create connection\"}\n{\"level\":\"error\",\"node_role\":\"consensus\",\"node_id\":\"6d3fac8675a1df96f4bb7a27305ae531b6f4d0d2bc13a233e37bb07ab6b852dc\",\"target\":\"QmVcSQaCdhmk1CMeMN7HTgGiUY1i2KqgVE2vvEmQXK4gAA\",\"error\":\"failed to dial : all dials failed\\n  * [/ip4/155.138.151.101/tcp/3569] dial tcp4 155.138.151.101:3569: connect: connection refused\",\"retry_attempt\":2,\"time\":\"2020-05-20T18:34:21Z\",\"message\":\"could not create connection\"}",
      "language": "shell"
    }
  ]
}
[/block]
This is error is OK. Your fellow node operators has not turned on/joined the network yet. So no need to worry about it!

## Flow Node Not Booting Up

If your Flow node is not able to boot up, or it exits right after it boots up. You will need to do a [clean up of your state](https://docs.onflow.org/docs/node-operation-consolidated-guide#step-0---cleaning-up-your-previous-state). 

After cleaning up the state try booting it up again. If the problem persists, message a member from the Flow team on Discord.