---
icon: mountain
description: 'Steepness - Scores edges based on vertical angle relative to an up vector'
---

# Steepness

Heuristics based on steepness.

## Overview

Scores edges based on the angle between the edge direction and a configurable up vector. The dot product is calculated, optionally using absolute value, then remapped through a score curve.

## How It Works

1. **Edge Evaluation**: For each edge, calculates the dot product between the edge direction and the up vector
2. **Score Calculation**: Converts the dot product to a score using the configured curve
3. **Accumulation** (optional): Can accumulate scores over multiple previous edges for smoother evaluation

**Category**: Goal Dependent (or Travel Dependent when accumulation is enabled)

## Behavior

```
Up Vector: ↑ (0, 0, 1)
Absolute Steepness: true

    ↗ Medium score (45° slope)
    → Zero score (flat)
    ↘ Medium score (45° slope)
    ↓ High score (vertical)
```

```
Up Vector: ↑ (0, 0, 1)
Absolute Steepness: false

    ↗ High score (uphill)      → dot = +1
    → Medium score (flat)      → dot = 0
    ↘ Low score (downhill)     → dot = -1
```

## Settings

### Steepness Settings

<details>
<summary><strong>Up Vector</strong> <code>FVector</code></summary>

Vector pointing in the "up" direction. The steepness is calculated relative to this vector. Mirrored when Absolute Steepness is enabled.

Default: `(0, 0, 1)`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Absolute Steepness</strong> <code>bool</code></summary>

When enabled, uses the absolute value of the dot product - both uphill and downhill contribute equally to the score.

When disabled, the full dot product range (-1 to 1) is remapped to (0 to 1), allowing differentiation between directions.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Accumulate Score</strong> <code>bool</code></summary>

Accumulates steepness over multiple previous edges for smoother evaluation. Changes the heuristic category from Goal Dependent to Travel Dependent.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Accumulation Samples</strong> <code>int32</code></summary>

How many previous edges to add to the current score.

Default: `1`

📋 *Visible when Accumulate Score = true*

⚡ PCG Overridable

</details>

### Inherited Settings

This node inherits common heuristic settings.

→ See [Heuristic Settings](../HeuristicSettings.md) for: Weight Factor, Invert, Score Curve, Local Weight Multiplier, Roaming Settings

---

📦 **Module**: `PCGExHeuristics` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExHeuristics/Public/Heuristics/PCGExHeuristicSteepness.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 4 documented (bAccumulateScore, AccumulationSamples, UpVector, bAbsoluteSteepness)
Inherited Properties: Referenced to FPCGExHeuristicConfigBase
Inputs: None (provider node)
Outputs: Heuristics factory
Nested Types: FPCGExHeuristicConfigSteepness
-->
