---
icon: greater-than
description: 'In editor :: PCGEx | Fill Control : Attribute Threshold'
---

# Attribute Threshold

Stops diffusion when a vertex or edge attribute crosses a threshold.

## Overview

The Attribute Threshold control reads a numeric attribute from vertices or edges and compares it against a threshold value. Candidates are valid only if the comparison passes. This enables fills that respect terrain height, cost values, or any other numeric attribute.

## How It Works

1. **Read Attribute**: Fetches the specified attribute value from vertex or edge
2. **Compare**: Tests if `AttributeValue [Comparison] Threshold`
3. **Validate**: Candidate is valid only if comparison returns true

## Settings

<details>
<summary><strong>Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

The attribute to read and compare against the threshold.

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
<summary><strong>Threshold</strong> <code>double</code></summary>

The threshold value to compare against.

Supports constant value or attribute input.

Default: `0.5`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Comparison</strong> <code>EPCGExComparison</code></summary>

How to compare the attribute value against the threshold.

Candidate is valid if: `AttributeValue [Comparison] Threshold`

See [Comparison Operators](../../shared-concepts/comparison-operators.md) for all options.

Default: `Strictly Smaller`

</details>

## Applies At

- **Capture**: Yes
- **Probing**: Yes
- **Candidate**: Yes

## Examples

**Fill only low areas** (height < 100):
- **Attribute**: `$Position.Z`
- **Attribute Source**: `Vtx`
- **Comparison**: `Strictly Smaller`
- **Threshold**: `100`

**Avoid high-cost edges**:
- **Attribute**: `Cost`
- **Attribute Source**: `Edge`
- **Comparison**: `Strictly Smaller`
- **Threshold**: `10`

## Related

- [Attribute Accumulation](./attribute-accumulation.md) - Track accumulated values
- [Heuristics Threshold](./heuristics-threshold.md) - Threshold using heuristic scoring

---

📦 **Module**: `PCGExElementsFloodFill` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsFloodFill/Public/FillControls/PCGExFillControlAttributeThreshold.h)
