---
description: 'In editor :: PCGEx | Heuristics : Heuristics : Inertia'
---

# Inertia

Scores edges based on **directional continuity** with previously traversed edges. Prefers paths that maintain their direction of travel.

```
Previous direction: →

    ↗ High score (sharp turn)
    → Low score (straight)
    ↘ High score (sharp turn)
```

**Category:** Travel Dependent

{% hint style="warning" %}
Can be expensive—requires path history lookup.
{% endhint %}

---

## Settings

<details>
<summary><strong>Samples</strong> <code>int32</code></summary>

Number of previous edges to average for computing the inertia direction.

Higher values = smoother direction averaging but more computation.

Range: ≥1

Default: `1`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Ignore If Not Enough Samples</strong> <code>bool</code></summary>

If enabled, uses fallback score when fewer samples exist than specified.

If disabled, uses whatever samples are available.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Global Inertia Score</strong> <code>double</code></summary>

Score used for initial A* sorting (global score).

Range: 0–1

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Fallback Inertia Score</strong> <code>double</code></summary>

Score when no previous direction exists (first edge from seed).

Range: 0–1

Default: `0`

⚡ PCG Overridable

</details>

---

## Behavior Notes

- Requires the pathfinding algorithm to track visited nodes (TravelStack)
- The inertia direction is computed by averaging the direction of previous edges
- Works well combined with Shortest Distance for natural-looking paths

---

📦 **Module**: `PCGExHeuristics` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExHeuristics/Public/Heuristics/PCGExHeuristicInertia.h)
