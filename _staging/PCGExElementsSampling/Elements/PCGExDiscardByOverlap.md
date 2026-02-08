---
icon: layer-group
description: 'Discard By Overlap - Discards entire datasets based on overlap with other datasets'
---

# Discard By Overlap

Discard entire datasets based on how they overlap with each other.

> This is basically self-pruning for collections.

## Overview

This node analyzes how multiple point collections overlap with each other and discards entire datasets based on weighted scoring. It computes overlap metrics between all input collections and prunes them according to configurable weights, allowing fine-grained control over which overlapping datasets to keep or discard.

## How It Works

1. **Compute Bounds**: Calculates bounds for each point in all datasets.
2. **Detect Overlaps**: Tests for overlapping regions between all dataset pairs.
3. **Score Datasets**: Computes weighted scores based on overlap and static metrics.
4. **Prune by Score**: Removes datasets with highest (or lowest) overlap scores.
5. **Output Remaining**: Returns datasets that survived the pruning process.

#### Usage Notes

- **Dataset-Level**: Operates on entire collections, not individual points.
- **Weighted Scoring**: Combines dynamic overlap metrics with static dataset properties.
- **Pruning Order**: Can prioritize removing high-scoring or low-scoring datasets.
- **Custom Tags**: Supports tag-based scoring for additional control.

## Behavior

#### Overlap-Based Dataset Pruning:
```
Input Collections:
   A: 50 points, bounds overlap B and C
   B: 30 points, bounds overlap A
   C: 100 points, bounds overlap A

Scoring (example with point count weight):
   A: High overlap count, medium points → High score
   B: Low overlap count, few points → Low score
   C: Low overlap count, many points → Medium score

Logic = High First:
   Prune A first (highest score)
   Re-evaluate: B and C no longer overlap
   Output: B and C
```

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Multiple point collections to analyze |
| **Point Filters** | Params | Optional filters for which points participate in overlap detection |

## Settings

### Overlap Detection

<details>
<summary><strong>Test Mode</strong> <code>EPCGExOverlapTestMode</code></summary>

How to test for overlaps between points.

| Option | Description |
|--------|-------------|
| **Fast** | Only test using datasets' overall bounds |
| **Box** | Test every point's bounds as transformed box (may miss some overlaps) |
| **Sphere** | Test every point's bounds as spheres (may have false positives) |

Default: `Sphere`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Bounds Source</strong> <code>EPCGExPointBoundsSource</code></summary>

Which bounds to use for overlap testing.

| Option | Description |
|--------|-------------|
| **Scaled Bounds** | Uses point bounds multiplied by scale |
| **Density Bounds** | Uses density-based bounds |
| **Bounds** | Uses raw point bounds |
| **Center** | Uses point center only |

Default: `Scaled Bounds`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Expansion</strong> <code>double</code></summary>

Expands bounds by this amount to account for margin of error.

Default: `10`

⚡ PCG Overridable

</details>

### Scoring Weights

<details>
<summary><strong>Weighting</strong> <code>FPCGExOverlapScoresWeighting</code></summary>

Controls how overlap scores are calculated.

**Dynamic Weights** (computed from overlaps):
| Property | Description | Default |
|----------|-------------|---------|
| **Dynamic Balance** | How much dynamic weights count vs static | `1` |
| **Overlap Count** | Weight for number of overlapping sets | `2` |
| **Overlap Sub Count** | Weight for number of overlapping points | `1` |
| **Overlap Volume** | Weight for cumulative overlap volume | `0` |
| **Overlap Volume Density** | Volume per overlapping point | `0` |

**Static Weights** (dataset properties):
| Property | Description | Default |
|----------|-------------|---------|
| **Static Balance** | How much static weights count vs dynamic | `0.5` |
| **Num Points** | Weight for point count | `1` |
| **Volume** | Weight for total dataset volume | `0` |
| **Volume Density** | Weight for volume density | `0` |
| **Custom Tag Weight** | Weight for tag-based scores | `0` |
| **Tag Scores** | Map of tags to score values | |
| **Data Score Weight** | Weight for @Data attributes | `0` |
| **Data Scores** | List of @Data attributes to use | |

⚡ PCG Overridable

</details>

### Pruning Logic

<details>
<summary><strong>Logic</strong> <code>EPCGExOverlapPruningLogic</code></summary>

Order in which datasets are pruned.

| Option | Description |
|--------|-------------|
| **Low to High** | Lower scores are pruned first |
| **High to Low** | Higher scores are pruned first |

Default: `High to Low`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Min Threshold</strong> <code>double</code></summary>

Minimum overlap amount for two sub-points to be counted. Higher values require more overlap.

Default: `0.1`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Threshold Measure</strong> <code>EPCGExMeanMeasure</code></summary>

How to interpret the threshold value.

| Option | Description |
|--------|-------------|
| **Relative** | Percentage (0-1) of averaged radius |
| **Discrete** | Distance in world space |

Default: `Relative`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Include Filtered in Metrics</strong> <code>bool</code></summary>

When enabled, filtered-out points still contribute to bounds and metrics calculations.

Default: `true`

⚡ PCG Overridable

</details>

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Out** | Points | Datasets that survived the pruning process |

---

![Static Badge](https://img.shields.io/badge/Module-PCGExElementsSampling-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsSampling/Public/Elements/PCGExDiscardByOverlap.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 8 documented
  - TestMode, BoundsSource, Expansion
  - Weighting (FPCGExOverlapScoresWeighting with 13 sub-properties)
  - Logic, MinThreshold, ThresholdMeasure, bIncludeFilteredInMetrics
Inherited Properties: From UPCGExPointsProcessorSettings
Inputs: In (Points), Point Filters (Params)
Outputs: Out (Points)
Nested Types: EPCGExOverlapTestMode, EPCGExPointBoundsSource, FPCGExOverlapScoresWeighting, EPCGExOverlapPruningLogic, EPCGExMeanMeasure
-->
