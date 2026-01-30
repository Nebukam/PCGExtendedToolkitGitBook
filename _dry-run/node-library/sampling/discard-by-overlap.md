---
icon: crosshairs
description: 'In editor :: PCGEx | Discard By Overlap'
---

# Discard By Overlap

Discard **entire point data sets** based on how they overlap with each other.

## Overview

This node analyzes overlap between multiple point data sets and discards entire sets based on configurable scoring weights. Unlike Sample Overlap Stats (which writes per-point data) or Self Pruning (which removes individual points), this node makes decisions at the **data set level**.

## Key Behavior

```
    Data Set A              Data Set B              Data Set C
    ┌───────┐               ┌───────┐               ┌───────┐
    │ ● ● ● │               │ ● ● ● │               │ ●   ● │
    │ ● ● ●─┼───────────────┼─● ● ● │               │       │
    │ ● ● ● │   OVERLAP     │ ● ● ● │               │ ●   ● │
    └───────┘               └───────┘               └───────┘

    If A overlaps B, compare scores:
    - A: 50 points, high overlap count
    - B: 30 points, low overlap count

    Based on weights, B might be discarded entirely
```

## Use Cases

- **Asset collision resolution**: Choose between overlapping asset placements
- **Layer priority**: Decide which scatter layer wins in overlapping areas
- **Density-based selection**: Keep denser or sparser clusters
- **Tag-based priority**: Use custom tags to influence which sets survive

## Inputs

| Pin | Type | Required | Description |
|-----|------|----------|-------------|
| **In** | Points | Yes | Multiple point data sets to compare |
| **Point Filters** | Filters | No | Filter which points are considered for overlap |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Out** | Points | Data sets that survived the pruning process |

## Settings

### Overlap Testing

<details>
<summary><strong>Test Mode</strong> <code>EPCGExOverlapTestMode</code></summary>

How to test for overlaps.

| Option | Behavior |
|--------|----------|
| **Fast** | Only test using dataset overall bounds |
| **Box** | Test each point's bounds as transformed box |
| **Sphere** | Test each point's bounds as sphere |

Default: `Sphere`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Bounds Source</strong> <code>EPCGExPointBoundsSource</code></summary>

Which bounds to use from points.

| Option | Behavior |
|--------|----------|
| **Bounds** | Use raw point bounds |
| **Scaled Bounds** | Use bounds multiplied by scale |
| **Density Bounds** | Use bounds based on density |

Default: `Scaled Bounds`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Expansion</strong> <code>double</code></summary>

Expand bounds by this amount for overlap detection.

Default: `10`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Min Threshold</strong> <code>double</code></summary>

Minimum overlap amount required to count as overlapping.

Default: `0.1`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Threshold Measure</strong> <code>EPCGExMeanMeasure</code></summary>

How to interpret the threshold.

| Option | Behavior |
|--------|----------|
| **Discrete** | Distance in world units |
| **Relative** | Percentage of averaged radius (0-1) |

Default: `Relative`

⚡ PCG Overridable

</details>

### Pruning Logic

<details>
<summary><strong>Logic</strong> <code>EPCGExOverlapPruningLogic</code></summary>

Which data sets get pruned first.

| Option | Behavior |
|--------|----------|
| **Low to High** | Lower weighted sets are pruned first |
| **High to Low** | Higher weighted sets are pruned first |

Default: `High to Low`

⚡ PCG Overridable

</details>

### Weighting

<details>
<summary><strong>Weighting</strong> <code>FPCGExOverlapScoresWeighting</code></summary>

Configure how sets are scored for pruning decisions.

**Dynamic Weights** (change based on overlap state):

| Weight | Description |
|--------|-------------|
| **Dynamic Balance** | How much dynamic weights count (vs static) |
| **Overlap Count** | Weight for number of overlapping sets |
| **Overlap Sub Count** | Weight for number of overlapping points |
| **Overlap Volume** | Weight for total overlap volume |
| **Overlap Volume Density** | Weight for overlap volume per point |

**Static Weights** (fixed per data set):

| Weight | Description |
|--------|-------------|
| **Static Balance** | How much static weights count (vs dynamic) |
| **Num Points** | Weight for point count |
| **Volume** | Weight for total volume |
| **Volume Density** | Weight for volume density |
| **Custom Tag Weight** | Weight for tag-based scores |
| **Data Score Weight** | Weight for attribute-based scores |

**Tag Scores**: Map of tag names to score values
**Data Scores**: List of @Data attributes to use as scores

All weights are ⚡ PCG Overridable

</details>

### Advanced

<details>
<summary><strong>Include Filtered In Metrics</strong> <code>bool</code></summary>

If enabled, filtered-out points still contribute to static metrics (bounds, volume). If disabled, they're completely ignored.

Default: `true`

⚡ PCG Overridable

</details>

## Example: Priority-Based Asset Placement

**Goal**: When tree and bush scatters overlap, keep trees (higher priority).

1. Tag tree data set with `Priority:High`
2. Tag bush data set with `Priority:Low`
3. Use Discard By Overlap with:
   - Logic: `High to Low` (higher scores pruned first)
   - Tag Scores: `{ "Priority:Low": 10, "Priority:High": 1 }`
4. Bushes (higher score) are discarded where they overlap trees

## Comparison with Related Nodes

| Node | Scope | Action |
|------|-------|--------|
| **Discard By Overlap** | Entire data sets | Removes whole sets |
| **Sample Overlap Stats** | Per-point | Writes overlap data |
| **Self Pruning** | Within single set | Removes individual points |

---

📦 **Module**: `PCGExElementsSampling` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsSampling/Public/Elements/PCGExDiscardByOverlap.h)
