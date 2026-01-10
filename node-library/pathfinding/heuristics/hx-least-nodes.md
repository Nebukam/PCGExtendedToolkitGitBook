---
description: 'In editor :: PCGEx | Heuristics : Least Nodes'
icon: circle-dashed
---

# HX : Least Nodes

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Heuristics based on node count.

#### How It Works

This subnode evaluates paths by counting how many nodes they contain. Paths with fewer nodes receive better scores, making them more likely to be selected during pathfinding. The scoring is inversely related to node count, meaning shorter paths are prioritized.

The process works in three steps:

1. Count the total number of nodes in a given path
2. Calculate a score that decreases as the node count increases
3. Use this score to rank and compare different paths during the search

This approach helps simplify routes and can improve performance by avoiding unnecessarily complex paths. The scoring uses a fixed weight factor of 0.5, which means it applies the same relative importance to all evaluations without adjusting based on other factors like distance or cost.

#### Configuration

<details>

<summary><strong>Config</strong><br><em>Filter Config.</em></summary>

This setting defines how the heuristic behaves. It includes options for weighting and other modifiers that influence how node counts are translated into scores.

</details>

#### Usage Example

Use this subnode when you want to prioritize shorter paths in your graph traversal. For example, if you're building a navigation system where you want to avoid overly complex routes, you can apply this heuristic to encourage the selection of paths that go through fewer nodes.

#### Notes

This heuristic is most effective when combined with other heuristics or cost functions. It's designed to be simple and fast, making it suitable for real-time applications where performance is important.
