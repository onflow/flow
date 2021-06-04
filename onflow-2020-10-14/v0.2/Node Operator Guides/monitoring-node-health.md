---
title: "Monitoring Node Health"
slug: "monitoring-node-health"
excerpt: "Using a Node's heath metrics and logs"
hidden: true
createdAt: "2020-04-03T21:22:49.266Z"
updatedAt: "2020-04-05T18:45:58.534Z"
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
  "title": "Health Metrics"
}
[/block]
Flow node produce health metrics in the from of [Prometheus](https://prometheus.io) metrics, exposed from the node software on `/metrics`.

If you wish to make use of these metrics, you'll need to set up a Prometheus server to scrape your Nodes.
[block:api-header]
{
  "title": "Logs"
}
[/block]
Logs are emitted to `stdout` as JSON formed strings. Where these logs are available on your system depends on how you launch your containers. On `systemd` systems for example, the logs will be sent to the system journal daemon `journald`.