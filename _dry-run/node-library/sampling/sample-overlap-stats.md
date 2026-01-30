---
icon: crosshairs
description: 'In editor :: PCGEx | Sample : Overlap Stats'
---

# Sample : Overlap Stats

Calculate **per-point overlap statistics** between multiple point data sets.

## Overview

This node analyzes how points from different data sets overlap each other based on their bounds. It writes per-point overlap counts and relative overlap values, useful for detecting collisions, density analysis, and overlap-based filtering.

## Key Behavior

```
    Data Set A               Data Set B
    ┌───────┐                ┌───────┐
    │ ●  ●  │                │  ●    │
    │    ●──┼────────────────┼──●    │  ← These points overlap
    │  ●    │   OVERLAP ZONE │       │
    └───────┘                └───────┘

    Point in A overlapping B:
    - OverlapCount: 1 (one other data set)
    - OverlapSubCount: 2 (two specific points)
```

**Key concept**: The node distinguishes between:
- **Overlap Count**: How many *different data sets* overlap this point
- **Overlap Sub Count**: How many *individual points* from other sets overlap this point

## Use Cases

- **Collision detection**: Find points that overlap between sets
- **Density analysis**: Identify high-overlap regions
- **Filtering**: Remove or keep points based on overlap counts
- **Clustering**: Group overlapping point sets together

## Inputs

| Pin | Type | Required | Description |
|-----|------|----------|-------------|
| **In** | Points | Yes | Multiple point data sets to analyze for overlaps |
| **Point Filters** | Filters | No | Filter which points are considered for overlap testing |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Out** | Points | All input points with overlap statistics written |

## Settings

### Overlap Testing

<details>
<summary><strong>Test Mode</strong> <code>EPCGExOverlapTestMode</code></summary>

How to test for overlaps between point bounds.

| Option | Behavior |
|--------|----------|
| **Sphere** | Use spherical overlap testing |
| **Box** | Use axis-aligned box overlap testing |

Default: `Sphere`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Bounds Source</strong> <code>EPCGExPointBoundsSource</code></summary>

Which bounds to use from points for overlap testing.

| Option | Behavior |
|--------|----------|
| **Bounds** | Use raw point bounds |
| **Scaled Bounds** | Use bounds multiplied by point scale |
| **Density Bounds** | Use bounds based on point density |

Default: `Scaled Bounds`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Expansion</strong> <code>double</code></summary>

Expand bounds by this amount to account for margin of error in overlap detection.

Default: `10`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Min Threshold</strong> <code>double</code></summary>

Minimum overlap amount required for two points to be considered overlapping. Higher values require more overlap.

Default: `0.1`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Threshold Measure</strong> <code>EPCGExMeanMeasure</code></summary>

How to interpret the minimum threshold value.

| Option | Behavior |
|--------|----------|
| **Discrete** | Distance in world units |
| **Relative** | Percentage (0-1) of averaged radius |

Default: `Relative`

⚡ PCG Overridable

</details>

### Outputs

All output attributes are optional (toggle + attribute name):

| Output | Type | Description |
|--------|------|-------------|
| **Overlap Count** | `int32` | Number of different data sets overlapping this point |
| **Overlap Sub Count** | `int32` | Total number of individual points overlapping this point |
| **Relative Overlap Count** | `double` | Overlap count divided by maximum across all collections |
| **Relative Overlap Sub Count** | `double` | Overlap sub count divided by maximum across all collections |

### Tagging

- **Tag If Has Any Overlap**: Add tag if data set has at least one overlapping point
- **Tag If Has No Overlap**: Add tag if data set has no overlapping points

## Example: Find Overlapping Regions

**Goal**: Identify which points from scatter set A overlap with foliage set B.

1. Connect both point sets to the In pin
2. Use Sample Overlap Stats with:
   - Test Mode: `Sphere`
   - Bounds Source: `Scaled Bounds`
   - Write Overlap Count: enabled
3. Filter points where `OverlapCount > 0` to find overlapping regions

## Comparison with Related Nodes

| Node | Purpose |
|------|---------|
| **Sample Overlap Stats** | Analyze and write overlap statistics |
| **Discard By Overlap** | Remove points based on overlap |
| **Self Pruning** | Remove self-overlapping points within same set |

---

📦 **Module**: `PCGExElementsSampling` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsSampling/Public/Elements/PCGExSampleOverlapStats.h)
