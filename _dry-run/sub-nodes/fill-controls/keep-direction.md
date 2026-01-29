---
icon: arrow-trend-up
description: 'In editor :: PCGEx | Fill Control : Keep Direction'
---

# Keep Direction

Maintains consistent traversal direction during flood fill.

## Overview

The Keep Direction control enforces directional consistency in the diffusion. It compares the direction of the current edge against a windowed average of recent directions, rejecting candidates that deviate too much. This creates fills that prefer continuing in the same direction rather than doubling back.

## How It Works

1. **Track Direction**: Maintains a window of recent traversal directions
2. **Compare Direction**: Uses vector hash comparison to test consistency
3. **Reject Deviations**: Candidates with directions too different from average are rejected

## Settings

<details>
<summary><strong>Window Size</strong> <code>int32</code></summary>

Number of recent edges to include in the direction average.

Supports constant value or attribute input.

Default: `1`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Hash Comparison Details</strong> <code>FPCGExVectorHashComparisonDetails</code></summary>

Settings for comparing direction vectors.

Default tolerance: `0.1`

⚡ PCG Overridable

</details>

## Applies At

- **Candidate**: Yes

## Examples

**Strong directional preference**:
- **Window Size**: `3`
- **Hash Comparison**: Tight tolerance (0.05)

**Loose directional guidance**:
- **Window Size**: `1`
- **Hash Comparison**: Wide tolerance (0.3)

## Tips

{% hint style="info" %}
Smaller window sizes respond to direction changes faster, while larger windows enforce more consistent overall direction.
{% endhint %}

{% hint style="warning" %}
Very strict direction enforcement may cause the fill to terminate early if no candidates match the expected direction.
{% endhint %}

## Related

- [Running Average](./running-average.md) - Consistency for attribute values
- [Heuristics Scoring](./heuristics-scoring.md) - Direction-aware scoring via heuristics

---

📦 **Module**: `PCGExElementsFloodFill` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsFloodFill/Public/FillControls/PCGExFillControlKeepDirection.h)
