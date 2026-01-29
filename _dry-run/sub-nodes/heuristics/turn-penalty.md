---
description: 'In editor :: PCGEx | Heuristics : Heuristics : Turn Penalty'
---

# Turn Penalty

Scores edges based on the **angle between consecutive edges**. Penalizes sharp turns to produce smoother paths.

```
Incoming      Outgoing      Turn Angle    Score
────→         →────         0°            Low (straight)
────→           ↗           45°           Medium
────→         ↑             90°           High (right angle)
────→         ←────         180°          Maximum (U-turn)
```

**Category:** Travel Dependent

---

## Settings

<details>
<summary><strong>Min Angle Threshold</strong> <code>double</code></summary>

Angle in degrees below which no penalty is applied (straight-ish paths).

Range: 0–180°

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Max Angle Threshold</strong> <code>double</code></summary>

Angle in degrees at which maximum penalty is applied. Angles above this are clamped.

Range: 0–180°

Default: `180`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Absolute Angle</strong> <code>bool</code></summary>

When enabled, uses absolute angle (treats left and right turns equally).

When disabled, can distinguish turn direction (useful with signed score curves).

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Global Score</strong> <code>double</code></summary>

Score used for initial A* sorting (global score).

Range: 0–1

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Fallback Score</strong> <code>double</code></summary>

Score when no previous direction exists (first edge from seed).

Range: 0–1

Default: `0`

⚡ PCG Overridable

</details>

---

## Behavior Notes

- Requires path history (TravelStack) to determine incoming direction
- The angle is computed between the incoming edge direction and the candidate outgoing edge
- Score is normalized to 0–1 based on the angle thresholds, then remapped through the Score Curve

---

📦 **Module**: `PCGExHeuristics` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExHeuristics/Public/Heuristics/PCGExHeuristicTurnPenalty.h)
