---
description: 'In editor :: PCGEx | Uber Branch'
icon: scrubber
---

# Uber Branch

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Branch collections based on multiple rules & conditions.

#### How It Works

The Uber Branch node evaluates a set of filters against each input collection. Each filter defines a condition that points must meet to be routed to a specific output branch.

1. The node receives one or more collections of points as inputs.
2. For each collection, it applies the defined filters in sequence.
3. Based on the **Mode** setting (All, Any, Partial), it determines whether a point should be included in an output branch:
   * **All**: All filters must pass for a point to be routed.
   * **Any**: At least one filter must pass.
   * **Partial**: A specified number of filters must pass.
4. Points are then distributed across the configured output branches based on which conditions they meet.
5. If the **NumBranches** setting is set to 1, the result is written directly to the point data instead of being split into multiple outputs.

The node supports parallel processing via the **AsyncChunkSize** parameter, allowing faster execution when filters are lightweight.

#### Configuration

<details>

<summary><strong>NumBranches</strong><br><em>Write result to point instead of split outputs.</em></summary>

Controls how many output branches are created. If set to 1, the node will write results directly to the point data rather than splitting into multiple outputs.

</details>

<details>

<summary><strong>AsyncChunkSize</strong><br><em>Number of collections to check for in parallel. Use 0 to force execution in a single go. Can be beneficial if filters are simple enough.</em></summary>

Defines how many collections are processed simultaneously. A value of 0 disables parallel processing and processes everything sequentially. Higher values can improve performance when filters are lightweight.

</details>

#### Usage Example

Suppose you want to split points into three categories:

* Points with a height greater than 10
* Points with a color intensity above 0.5
* Points within a certain distance from the origin

You would create three filter subnodes and connect them to this Uber Branch node. Set **NumBranches** to 3, and configure the **Mode** as "All" so that only points meeting all three conditions are routed to the third output.

#### Notes

* The node supports multiple input collections, each of which can be filtered independently.
* Parallel processing is beneficial when filters are simple or lightweight.
* When using a single branch (NumBranches = 1), results are written directly into the point data instead of being split into outputs.
