---
description: 'In editor :: PCGEx | Heuristics : Feedback'
icon: circle-dashed
---

# HX : Feedback

Heuristics based on visited score feedback.

📌 **Subnode** — Connects to **Heuristics** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node evaluates scores based on visited points and edges in a plotted path using heuristics influenced by feedback settings.
* If Binary is enabled, the weight for overlap remains either 0 or 1 without scaling; otherwise, weights scale according to overlap.
* Visited Points Weight Factor and Visited Edges Weight Factor adjust the score of already included elements in the path based on their contribution to the overall weight curve.
* When Global Feedback is set to true, the node applies feedback globally across all evaluated paths.
* If Affect All Connected Edges is enabled, the node modifies weights for all edges connected to visited points or edges.

#### Configuration

<details>

<summary><strong>Binary</strong> <code>bool</code></summary>

If enabled, weight doesn't scale with overlap; the base score is either 0 or 1.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Visited Points Weight Factor</strong> <code>double</code></summary>

Weight to add to points that are already part of the plotted path. This is used to sample the weight curve.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Visited Edges Weight Factor</strong> <code>double</code></summary>

Weight to add to edges that are already part of the plotted path. This is used to sample the weight curve.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Global Feedback</strong> <code>bool</code></summary>

Controls global feedback.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Affect All Connected Edges</strong> <code>bool</code></summary>

Controls affect all connected edges.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExHeuristicConfigFeedback</code></summary>

Filter Config.

📦 See: HeuristicConfigFeedback configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Binary</strong> <code>bool</code></summary>

If enabled, weight doesn't scale with overlap; the base score is either 0 or 1.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Visited Points Weight Factor</strong> <code>double</code></summary>

Weight to add to points that are already part of the plotted path. This is used to sample the weight curve.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Visited Edges Weight Factor</strong> <code>double</code></summary>

Weight to add to edges that are already part of the plotted path. This is used to sample the weight curve.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Global Feedback</strong> <code>bool</code></summary>

Controls global feedback.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Affect All Connected Edges</strong> <code>bool</code></summary>

Controls affect all connected edges.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExHeuristics\Public\Heuristics\PCGExHeuristicFeedback.h`
