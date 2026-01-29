---
icon: wave-square
description: 'In editor :: PCGEx | Fill Control : Running Average'
---

# Running Average

Filters candidates whose attribute values deviate too far from a running average.

## Overview

The Running Average control maintains a windowed average of an attribute over recent path vertices. Candidates are rejected if their value is outside the tolerance of this average. This creates fills that maintain consistency in attribute values, avoiding sudden changes.

## How It Works

1. **Window Tracking**: Maintains a sliding window of recent attribute values
2. **Compute Average**: Calculates average over the window
3. **Tolerance Check**: Candidate is valid if within tolerance of the average

## Settings

<details>
<summary><strong>Window Size</strong> <code>int32</code></summary>

Number of recent values to include in the running average calculation.

Supports constant value or attribute input.

Default: `10`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Maximum allowed deviation from the running average. Candidates with values outside `average ± tolerance` are rejected.

Supports constant value or attribute input.

Default: `10`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Operand</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

The attribute to average and check. Will be broadcast to double.

Default: `$Position.Z`

⚡ PCG Overridable

</details>

## Applies At

- **Candidate**: Yes

## Examples

**Maintain consistent height** (Z within ±50 of recent average):
- **Operand**: `$Position.Z`
- **Window Size**: `5`
- **Tolerance**: `50`

**Smooth density transitions**:
- **Operand**: `Density`
- **Window Size**: `10`
- **Tolerance**: `0.2`

## Tips

{% hint style="info" %}
Smaller window sizes respond faster to changes but are more sensitive to outliers. Larger windows are more stable but slower to adapt.
{% endhint %}

## Related

- [Attribute Threshold](./attribute-threshold.md) - Fixed threshold (no averaging)
- [Keep Direction](./keep-direction.md) - Directional consistency

---

📦 **Module**: `PCGExElementsFloodFill` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsFloodFill/Public/FillControls/PCGExFillControlRunningAverage.h)
