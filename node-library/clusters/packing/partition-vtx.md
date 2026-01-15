---
description: 'In editor :: PCGEx | Cluster : Partition Vtx'
icon: circle
---

# Partition Vtx

Split Vtx into per-cluster groups.

**How It Works**

> AI-Generated, needs proofreading

* The Cluster : Partition Vtx node processes vertex data by dividing them into distinct groups based on cluster identifiers.
* It takes as input a set of vertices and their associated cluster labels.
* For each unique cluster label present in the input, the node segregates all vertices that belong to that specific cluster into separate groups.
* Outputs consist of multiple sets of vertices, with each set corresponding to one cluster.

_No configurable settings._

***

Source: `Source\PCGExElementsClusters\Public\Elements\PCGExPartitionVertices.h`
