---
title: "Monitoring Node Health"
slug: "monitoring-node-health"
excerpt: "Using a Node's heath metrics and logs"
hidden: true
createdAt: "2020-04-03T21:22:49.266Z"
updatedAt: "2020-05-13T23:35:43.063Z"
---
[block:callout]
{
  "type": "danger",
  "title": "Active Development",
  "body": "If you're reading this doc, you're early! The Flow team is in the process of producing the necessary health metrics that will be used to monitor your node. \n\nWe will greatly improve these docs once they're ready. Watch this space!"
}
[/block]

[block:api-header]
{
  "title": "Logs"
}
[/block]
Logs are emitted to `stdout` as JSON formed strings. Where these logs are available on your system depends on how you launch your containers. On `systemd` systems for example, the logs will be sent to the system journal daemon `journald`. Other systems may log to `/var/log`.
[block:api-header]
{
  "title": "Health Metrics"
}
[/block]
Flow node produce health metrics in the from of [Prometheus](https://prometheus.io) metrics, exposed from the node software on `/metrics`.

If you wish to make use of these metrics, you'll need to set up a Prometheus server to scrape your Nodes. Alternatively, you can deploy the Prometheus Server on top of your current Flow node to see the metrics without creating an additional server.
[block:callout]
{
  "type": "info",
  "title": "Host Metrics",
  "body": "The flow-go application doesn't expose any metrics from the underlying host such as CPU, network, or disk usages. It is recommended you collect these metrics in addition to the ones provided by flow using a tool like [node exporter](https://github.com/prometheus/node_exporter)"
}
[/block]
1. Copy the following Prometheus configuration into your current flow node
[block:code]
{
  "codes": [
    {
      "code": "  global:\n  scrape_interval:     15s # By default, scrape targets every 15 seconds.\n\nscrape_configs:\n  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.\n  - job_name: 'prometheus'\n\n    # Override the global default and scrape targets from this job every 5 seconds.\n    scrape_interval: 5s\n\n    static_configs:\n      - targets: ['localhost:8080']",
      "language": "yaml"
    }
  ]
}
[/block]
2. Start Prometheus server
[block:code]
{
  "codes": [
    {
      "code": "docker run \\\n  --network=host \\\n  -p 9090:9090 \\\n  -v /path/to/prometheus.yml:/etc/prometheus/prometheus.yml \\\n  prom/prometheus",
      "language": "shell"
    }
  ]
}
[/block]
3. (optional) Port forward to the node if you are not able to access port 9090 directly via the browser
 `ssh -L 9090:127.0.0.1:9090 YOUR_NODE`

4. Open your broswer and go the URL `http://localhost:9090/graph` to load the Prometheus Dashboard
[block:api-header]
{
  "title": "Key Metric Overview"
}
[/block]
The following are some important metrics produced by the node
[block:parameters]
{
  "data": {
    "h-0": "Metric Name",
    "h-1": "Description",
    "0-0": "go_*",
    "0-1": "Go runtime metrics",
    "1-0": "consensus_finalized_blocks",
    "1-1": "Number of blocks this node has finalized",
    "2-0": "consensus_hotstuff_busy_duration",
    "2-1": "How long hotstuff spends in a busy state before returning to idle",
    "3-0": "consensus_hostuff_busy_second_total",
    "3-1": "The total time hotstuff has spent in a busy state",
    "4-0": "consensus_hotstuff_view_of_newest_known_qc",
    "4-1": "The latest block known to hotstuff"
  },
  "cols": 2,
  "rows": 9
}
[/block]