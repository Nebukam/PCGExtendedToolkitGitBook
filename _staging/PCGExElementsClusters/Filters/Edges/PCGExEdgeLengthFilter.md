---
icon: filter
description: 'Edge Filter : Length - Filters edges based on their length'
---

# Edge Filter : Length

Filters edges based on their length compared to a threshold value.

## Overview

This edge filter compares each edge's length against a configurable threshold using the specified comparison operator. This allows you to filter edges by distance — for example, keeping only edges longer than a minimum distance, or removing edges that exceed a maximum length.

## How It Works

1. **Length Calculation**: Computes the Euclidean distance between the edge's start and end vertices.
2. **Threshold Comparison**: Compares the edge length against the threshold using the selected comparison operator.
3. **Result**: The edge passes or fails based on the comparison result and invert setting.

#### Usage Notes

- **Threshold Source**: Can be a constant value or read from an edge attribute for per-edge thresholds.
- **Tolerance**: For "Nearly Equal" comparisons, the tolerance controls how close lengths must be to the threshold.
- **Distance Units**: Uses the same units as your world coordinates.

## Behavior

```
Comparison Examples (Threshold = 100):

StrictlyGreater (Length > 100):
  Edge length 150 → PASS
  Edge length 80  → FAIL

EqualOrSmaller (Length <= 100):
  Edge length 100 → PASS
  Edge length 150 → FAIL
```

## Settings

<details>
<summary><strong>Threshold Input</strong> <code>EPCGExInputValueType</code></summary>

Whether to use a constant threshold or read from an edge attribute.

| Option | Description |
|--------|-------------|
| **Constant** | Use the same threshold for all edges |
| **Attribute** | Read threshold from an edge attribute |

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Threshold (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read the threshold value from.

📋 *Visible when Threshold Input = Attribute*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Threshold</strong> <code>double</code></summary>

The constant length threshold to compare edges against.

Default: `100`

📋 *Visible when Threshold Input = Constant*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Comparison</strong> <code>EPCGExComparison</code></summary>

The comparison operator to use when comparing edge length against the threshold.

| Option | Description |
|--------|-------------|
| **StrictlyGreater** | Length > Threshold |
| **StrictlySmaller** | Length < Threshold |
| **EqualOrGreater** | Length >= Threshold |
| **EqualOrSmaller** | Length <= Threshold |
| **StrictlyEqual** | Length == Threshold |
| **StrictlyNotEqual** | Length != Threshold |
| **NearlyEqual** | Length ≈ Threshold (within tolerance) |
| **NearlyNotEqual** | Length !≈ Threshold (outside tolerance) |

Default: `StrictlyGreater`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Tolerance value for approximate comparison modes (NearlyEqual, NearlyNotEqual).

Default: `0`

📋 *Visible when Comparison = NearlyEqual or NearlyNotEqual*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Invert the filter result (pass becomes fail and vice versa).

Default: `false`

⚡ PCG Overridable

</details>

---

[![Static Badge](https://img.shields.io/badge/Source-PCGExElementsClusters-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Filters/Edges/PCGExEdgeLengthFilter.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Filters/Edges/PCGExEdgeLengthFilter.h -->

<!-- VERIFICATION REPORT
Node-Specific Properties: 6 documented
Inherited Properties: From UPCGExEdgeFilterProviderSettings
Inputs: None
Outputs: Edge Filter (factory data)
Nested Types: FPCGExEdgeLengthFilterConfig
-->
