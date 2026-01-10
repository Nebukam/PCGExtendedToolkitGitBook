---
description: 'In editor :: PCGEx | Heuristics : Shortest Distance'
icon: circle-dashed
---

# HX : Shortest Distance

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Heuristics based on distance.

#### How It Works

This subnode evaluates path cost using the shortest distance between nodes. It helps guide pathfinding algorithms by estimating how close each node is to the goal. For global scoring, it calculates the straight-line distance from the current node to the target, normalized by the cluster's size. For edge scoring, it uses the actual movement cost between connected nodes.

The normalization ensures consistent results across different scales and clusters. Because this subnode never overestimates the true cost to reach the goal, it works well with algorithms like A\* that require admissible heuristics for optimal pathfinding.

#### Configuration

<details>

<summary><strong>Heuristic Config</strong><br><em>Heuristic Config.</em></summary>

Controls how the heuristic behaves, such as whether to reverse scores or apply multipliers.

**Values**:

* **Invert**: When enabled, higher distances result in lower scores (reverses the heuristic).
* **Reference Weight**: A scalar multiplier applied to all scores.
* **Weight Factor**: Additional scaling factor for score computation.
* **Use Local Weight Multiplier**: When enabled, allows per-node or edge-specific weight adjustments.
* **UVW Seed / UVW Goal**: Optional seed and goal coordinates used in advanced scoring logic.
* **Local Weight Multiplier Source**: Specifies whether to use vertex or edge data for local weighting.
* **Weight Multiplier Attribute**: The attribute name to read weight multipliers from if using a custom source.

</details>

#### Usage Example

Use this subnode when setting up an A\* pathfinding system where you want the algorithm to prefer paths that minimize spatial distance. For example, in a game with a navigation mesh, connect this to a Filter pin on a Pathfinding node to guide agents toward the goal using shortest-path heuristics.

#### Notes

* This heuristic is admissible and suitable for optimal pathfinding algorithms.
* Normalization by cluster bounds ensures consistent behavior across different scales.
* Performance is generally good as it only requires distance calculations.
