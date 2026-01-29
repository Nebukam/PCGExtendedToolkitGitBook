---
description: 'In editor :: PCGEx | Heuristics : Heuristics : Steepness'
---

# Steepness

Scores edges based on their **vertical angle** relative to an up vector. Penalizes steep inclines or declines.

```
Up Vector: ↑

    ↗ Medium score (uphill slope)
    → Zero score (flat)
    ↘ Medium score (downhill slope)
    ↓ High score (vertical drop)
```

**Category:** Goal Dependent (or Travel Dependent with accumulation)

---

## Settings

<details>
<summary><strong>Accumulate Score</strong> <code>bool</code></summary>

When enabled, accumulates steepness over multiple previous edges for smoother terrain evaluation.

Useful for exacerbating steepness effects on smooth terrain.

Default: `false`

</details>

<details>
<summary><strong>Accumulation Samples</strong> <code>int32</code></summary>

Number of previous edges to add to the current score.

Range: ≥1

Default: `1`

*Visible when Accumulate Score = true*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Up Vector</strong> <code>FVector</code></summary>

The direction considered "up" for steepness calculation. The vector is mirrored (both up and down contribute equally).

Default: `(0, 0, 1)` (Z-up)

⚡ PCG Overridable

</details>

<details>
<summary><strong>Absolute Steepness</strong> <code>bool</code></summary>

When enabled, overall steepness determines score (both uphill and downhill penalized equally).

When disabled, the full dot product range (-1 to 1) is remapped to (0 to 1), allowing differentiation between uphill and downhill.

Default: `true`

⚡ PCG Overridable

</details>

---

## Behavior Notes

- Category changes to Travel Dependent when Accumulate Score is enabled
- The score is based on the dot product between edge direction and the up vector
- With Absolute Steepness enabled, `|dot|` is used, penalizing both up and down equally
- Global score uses the node-to-goal direction's steepness

---

📦 **Module**: `PCGExHeuristics` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExHeuristics/Public/Heuristics/PCGExHeuristicSteepness.h)
