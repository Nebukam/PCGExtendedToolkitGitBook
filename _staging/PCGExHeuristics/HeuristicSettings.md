---
icon: sliders
description: 'Common settings inherited by all heuristic nodes'
---

# Heuristic Settings

All heuristic provider nodes inherit these common settings from `FPCGExHeuristicConfigBase`.

## Weight & Scoring

<details>
<summary><strong>Weight Factor</strong> <code>double</code></summary>

The weight factor for this heuristic. Higher values increase the influence of this heuristic relative to others when multiple heuristics are combined.

Default: `1`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Invert the final heuristics score. Swaps what is considered "good" vs "bad" for pathfinding.

Default: `false`

⚡ PCG Overridable

</details>

## Score Curve

The score curve remaps the raw heuristic value (0-1) to a final score contribution.

<details>
<summary><strong>Use Local Curve</strong> <code>bool</code></summary>

Whether to use an in-editor curve or an external curve asset.

Default: `false`

</details>

<details>
<summary><strong>Score Curve</strong> <code>UCurveFloat</code></summary>

Curve asset for score remapping. Input is the raw heuristic value (0-1), output is the weighted score.

Default: `PCGExCurves::WeightDistributionLinear`

📋 *Visible when Use Local Curve = false*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Score Curve (Local)</strong> <code>FRuntimeFloatCurve</code></summary>

In-editor curve for score remapping.

📋 *Visible when Use Local Curve = true*

</details>

## Local Weight Multiplier

Allows per-node weight adjustment using an attribute.

<details>
<summary><strong>Use Local Weight Multiplier</strong> <code>bool</code></summary>

Enable to multiply the heuristic weight by a per-node attribute value.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Local Weight Multiplier Source</strong> <code>EPCGExClusterElement</code></summary>

Where to read the multiplier attribute from.

| Option | Description |
|--------|-------------|
| **Vtx** | Read from vertex/node attributes |
| **Edge** | Read from edge attributes |

Default: `Vtx`

📋 *Visible when Use Local Weight Multiplier = true*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Weight Multiplier Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read the multiplier value from.

📋 *Visible when Use Local Weight Multiplier = true*

⚡ PCG Overridable

</details>

## Roaming Settings

Used when the heuristic operates in "roaming" mode without explicit seed/goal points.

<details>
<summary><strong>UVW Seed</strong> <code>FVector</code></summary>

Bound-relative seed position (0-1 range per axis).

Default: `(0, 0, 0)`

⚡ PCG Overridable

</details>

<details>
<summary><strong>UVW Goal</strong> <code>FVector</code></summary>

Bound-relative goal position (0-1 range per axis).

Default: `(0, 0, 0)`

⚡ PCG Overridable

</details>

---

📦 **Module**: `PCGExHeuristics` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExHeuristics/Public/Core/PCGExHeuristicsFactoryProvider.h)
