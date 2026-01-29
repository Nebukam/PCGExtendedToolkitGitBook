---
icon: sigma
description: 'In editor :: PCGEx | Fill Control : Attribute Accumulation'
---

# Attribute Accumulation

Tracks accumulated attribute values along paths and stops when a threshold is exceeded.

## Overview

The Attribute Accumulation control maintains a running aggregate (sum, max, min, or average) of an attribute as the diffusion progresses. When the accumulated value exceeds a threshold, further propagation stops. This enables cost-based fills where the total "budget" limits expansion.

## How It Works

1. **Read Attribute**: Gets attribute value from each candidate
2. **Accumulate**: Updates running aggregate based on mode
3. **Check Threshold**: Validates accumulated value against maximum
4. **Store Value**: Optionally writes to candidate's AccumulatedValue for other controls

## Settings

<details>
<summary><strong>Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

The attribute to accumulate along the path.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Attribute Source</strong> <code>EPCGExClusterElement</code></summary>

Where to read the attribute from.

| Option | Behavior |
|--------|----------|
| **Vtx** | Read from vertex point data |
| **Edge** | Read from edge point data |

Default: `Vtx`

</details>

<details>
<summary><strong>Mode</strong> <code>EPCGExAccumulationMode</code></summary>

How to combine attribute values along the path.

| Option | Behavior |
|--------|----------|
| **Sum** | Add values together |
| **Maximum** | Track highest value encountered |
| **Minimum** | Track lowest value encountered |
| **Average** | Running average along path |

Default: `Sum`

</details>

<details>
<summary><strong>Max Accumulation</strong> <code>double</code></summary>

Maximum accumulated value allowed before stopping.

Supports constant value or attribute input.

Default: `100.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write to Accumulated Value</strong> <code>bool</code></summary>

If enabled, stores the accumulated value in the candidate's AccumulatedValue field for use by other controls.

Default: `true`

</details>

## Applies At

- **Candidate**: Yes (scoring and validation)

## Examples

**Cost-limited fill** (total cost < 500):
- **Attribute**: `Cost`
- **Mode**: `Sum`
- **Max Accumulation**: `500`

**Slope-limited expansion** (steepest slope encountered < 45):
- **Attribute**: `Slope`
- **Mode**: `Maximum`
- **Max Accumulation**: `45`

## Related

- [Attribute Threshold](./attribute-threshold.md) - Single value threshold (no accumulation)
- [Heuristics Budget](./heuristics-budget.md) - Budget using heuristic scoring

---

📦 **Module**: `PCGExElementsFloodFill` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsFloodFill/Public/FillControls/PCGExFillControlAttributeAccumulation.h)
