---
icon: flask-vial
description: 'In editor :: PCGEx | Sampler : Test Neighbors'
---

# Sampler : Test Neighbors

Count how many neighbors pass or fail filter tests.

## Overview

This sampler tests each neighbor against filters and writes statistics about how many passed or failed. It outputs counts and weighted sums, optionally normalized, for both passing ("inside") and failing ("outside") neighbors.

```
Neighbors tested:           Results:
    B ✓                     InsideNum = 2
     │                      OutsideNum = 2
     │                      TotalNum = 4
 A ✗─●─C ✓
     │
    D ✗
```

## How It Works

1. **Traverse neighbors**: Walk graph edges up to Max Depth
2. **Test each neighbor**: Apply Value Filters to each neighbor
3. **Track results**: Count passes/fails and accumulate weights
4. **Write outputs**: Store counts and weights as vertex attributes

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx Filters** | Filter | (Optional) Filter which neighbors can be tested |
| **Edge Filters** | Filter | (Optional) Filter which edges can be traversed |
| **Value Filters** | Filter | Filters to test against each neighbor (required) |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Sampler** | Neighbor Sampler | Sampler factory for Sample Neighbors node |

## Settings

### Sampling Config

<details>
<summary><strong>Priority</strong> <code>int32</code></summary>

Processing order when multiple samplers are connected. Higher values are processed last.

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Range Type</strong> <code>EPCGExRangeType</code></summary>

How to normalize blend weights.

| Option | Behavior |
|--------|----------|
| **Full Range** | Normalize using [0..Max Value] range |
| **Effective Range** | Remap actual [Min..Max] range to [0..1] |

Default: `Full Range`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Max Depth</strong> <code>int32</code></summary>

Maximum traversal depth for sampling. 1 = immediate neighbors only.

Default: `1`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Blend Over</strong> <code>EPCGExBlendOver</code></summary>

How to compute the weight for each neighbor.

| Option | Behavior |
|--------|----------|
| **Distance** | Weight based on distance / max distance |
| **Count** | Weight based on index / total count |
| **Fixed** | Use fixed weight for all neighbors |

Default: `Count`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Max Distance</strong> <code>double</code></summary>

Maximum distance for distance-based weight calculation.

Default: `300`

⚡ PCG Overridable
📋 Visible when: `Blend Over = Distance`

</details>

<details>
<summary><strong>Fixed Blend</strong> <code>double</code></summary>

Fixed weight value when using Fixed mode.

Default: `1`

⚡ PCG Overridable
📋 Visible when: `Blend Over = Fixed`

</details>

<details>
<summary><strong>Neighbor Source</strong> <code>EPCGExClusterElement</code></summary>

Whether to test neighbor vertices or connecting edges.

| Option | Behavior |
|--------|----------|
| **Point** | Test neighbor vertices |
| **Edge** | Test connecting edges |

Default: `Point`

⚡ PCG Overridable

</details>

### Inside (Passed) Outputs

<details>
<summary><strong>Write Inside Num</strong> <code>bool</code></summary>

Write the count of neighbors that passed filters.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Inside Num</strong> <code>FName</code></summary>

Attribute name for the inside count.

Default: `InsideNum`

⚡ PCG Overridable
📋 Visible when: `Write Inside Num = true`

</details>

<details>
<summary><strong>Normalize</strong> <code>bool</code></summary>

Divide by total number of samples (outputs 0-1 ratio).

Default: `false`

⚡ PCG Overridable
📋 Visible when: `Write Inside Num = true`

</details>

<details>
<summary><strong>Write Inside Weight</strong> <code>bool</code></summary>

Write the weighted sum of neighbors that passed filters.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Inside Weight</strong> <code>FName</code></summary>

Attribute name for the inside weight sum.

Default: `InsideWeight`

⚡ PCG Overridable
📋 Visible when: `Write Inside Weight = true`

</details>

<details>
<summary><strong>Normalize</strong> <code>bool</code></summary>

Divide by total weight of samples (outputs 0-1 ratio).

Default: `false`

⚡ PCG Overridable
📋 Visible when: `Write Inside Weight = true`

</details>

### Outside (Failed) Outputs

<details>
<summary><strong>Write Outside Num</strong> <code>bool</code></summary>

Write the count of neighbors that failed filters.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Outside Num</strong> <code>FName</code></summary>

Attribute name for the outside count.

Default: `OutsideNum`

⚡ PCG Overridable
📋 Visible when: `Write Outside Num = true`

</details>

<details>
<summary><strong>Normalize</strong> <code>bool</code></summary>

Divide by total number of samples.

Default: `false`

⚡ PCG Overridable
📋 Visible when: `Write Outside Num = true`

</details>

<details>
<summary><strong>Write Outside Weight</strong> <code>bool</code></summary>

Write the weighted sum of neighbors that failed filters.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Outside Weight</strong> <code>FName</code></summary>

Attribute name for the outside weight sum.

Default: `OutsideWeight`

⚡ PCG Overridable
📋 Visible when: `Write Outside Weight = true`

</details>

<details>
<summary><strong>Normalize</strong> <code>bool</code></summary>

Divide by total weight of samples.

Default: `false`

⚡ PCG Overridable
📋 Visible when: `Write Outside Weight = true`

</details>

### Total Outputs

<details>
<summary><strong>Write Total Num</strong> <code>bool</code></summary>

Write the total number of neighbors tested.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Total Num</strong> <code>FName</code></summary>

Attribute name for the total count.

Default: `TotalNum`

⚡ PCG Overridable
📋 Visible when: `Write Total Num = true`

</details>

<details>
<summary><strong>Write Total Weight</strong> <code>bool</code></summary>

Write the total weight of all neighbors tested.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Total Weight</strong> <code>FName</code></summary>

Attribute name for the total weight.

Default: `TotalWeight`

⚡ PCG Overridable
📋 Visible when: `Write Total Weight = true`

</details>

## Output Attributes

| Attribute | Type | Description |
|-----------|------|-------------|
| `InsideNum` | int32/double | Count of passed neighbors (normalized = double) |
| `InsideWeight` | double | Weighted sum of passed neighbors |
| `OutsideNum` | int32/double | Count of failed neighbors |
| `OutsideWeight` | double | Weighted sum of failed neighbors |
| `TotalNum` | int32 | Total neighbors tested |
| `TotalWeight` | int32 | Total weight of all neighbors |

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Meta/NeighborSamplers/PCGExNeighborSampleFilters.h)
