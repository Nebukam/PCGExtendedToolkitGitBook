---
description: 'In editor :: PCGEx | Heuristics : Heuristics : Feedback'
---

# Feedback

Scores edges based on **how often they've been visited** during pathfinding. Penalizes reusing nodes and edges to encourage path diversity.

```
First path:  ●═══●═══●═══●   (visited, now penalized)
Second path: ●───●───●───●   (unvisited, preferred)
                 │
                 ●───●───●   (alternative route taken)
```

**Category:** Feedback

{% hint style="warning" %}
Global Feedback breaks parallelism and may be slower.
{% endhint %}

---

## Settings

<details>
<summary><strong>Binary</strong> <code>bool</code></summary>

When enabled, score is simply 0 (unvisited) or 1 (visited), ignoring overlap count.

When disabled, score scales with the number of times visited.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Visited Points Weight Factor</strong> <code>double</code></summary>

Weight contribution for previously visited points. Higher = more penalty.

Range: 0–1

Default: `1`

*Visible when Binary = false*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Visited Edges Weight Factor</strong> <code>double</code></summary>

Weight contribution for previously visited edges. Higher = more penalty.

Range: 0–1

Default: `1`

*Visible when Binary = false*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Global Feedback</strong> <code>bool</code></summary>

When enabled, feedback persists between path queries within a single pathfinding operation.

**Important:** This breaks parallelism and may be slower.

When disabled, feedback is local to each path query.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Affect All Connected Edges</strong> <code>bool</code></summary>

When enabled, visiting a node adds feedback to all edges connected to it, not just the traversed edge.

Default: `true`

⚡ PCG Overridable

</details>

---

## Behavior Notes

- Feedback counts are tracked per-node and per-edge
- The score increases with each visit when Binary = false
- Global Feedback allows paths computed later to avoid paths computed earlier
- Useful for generating multiple diverse paths through the same cluster

---

📦 **Module**: `PCGExHeuristics` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExHeuristics/Public/Heuristics/PCGExHeuristicFeedback.h)
