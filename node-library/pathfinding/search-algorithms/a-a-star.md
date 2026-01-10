---
icon: sliders
---

# A\* (A Star)

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Performs A\* pathfinding to compute optimal paths between points.

#### How It Works

A\* is a pathfinding method that finds the most efficient route between two locations in a network or grid. It works by evaluating potential paths and choosing the one with the lowest total cost. This cost is made up of two parts:

* The actual cost from the starting point to the current location
* An estimated cost from the current location to the destination

The algorithm explores the most promising paths first, using a guiding estimate to avoid unnecessary searches. It continues until it finds the best possible route or stops early if a path is already found and early exit is enabled.

This approach ensures that the result is always the shortest path, while still being faster than methods that check every possible route.

#### Configuration

<details>

<summary><strong>Early Exit</strong><br><em>When enabled, stops the search once a path is found.</em></summary>

When enabled, A\* will stop searching and return the first valid path it finds. This can speed up processing if you don't need the absolute best path, just any working route.

</details>
