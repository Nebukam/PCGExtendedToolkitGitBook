---
description: 'In editor :: PCGEx | Discard by Overlap'
icon: circle
---

# Discard by Overlap

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Discard entire datasets based on how they overlap with each other.

#### How It Works

This node evaluates multiple input datasets to identify overlapping regions and removes entire datasets that exceed a defined overlap threshold. It helps eliminate redundant or conflicting content in procedural generation, such as preventing duplicate geometry or overlapping placements in terrain or asset distribution.

The process begins by calculating the spatial bounds of each dataset using a selected method (scaled, density, or raw bounds). These bounds may be expanded to account for transformations. Next, the node compares each dataset's bounds against all others using one of three overlap detection modes:

* **Fast**: Only checks overall bounding boxes.
* **Box**: Tests individual point bounds as transformed boxes.
* **Sphere**: Treats point bounds as spheres for overlap detection.

For each pair of overlapping datasets, it calculates metrics such as the number of overlapping points, total volume of overlap, and density. These values are then combined into a weighted score using configurable weights for different metrics. Finally, based on the chosen pruning logic (Low to High or High to Low), datasets are ranked by their scores and removed accordingly.

#### Configuration

<details>

<summary><strong>Test Mode</strong><br><em>Overlap test mode.</em></summary>

Controls how overlap is detected between datasets.

**Values**:

* **Fast**: Only test using datasets' overall bounds.
* **Box**: Test every points' bounds as transformed box. May not detect some overlaps.
* **Sphere**: Test every points' bounds as spheres. Will have some false positive.

</details>

<details>

<summary><strong>Bounds Source</strong><br><em>Point bounds to be used to compute overlaps.</em></summary>

Determines how point bounds are calculated for overlap testing.

**Values**:

* **Scaled Bounds**: Use scaled bounds.
* **Density Bounds**: Use density bounds (scaled + steepness).
* **Bounds**: Use unscaled bounds.
* **Center**: Use a tiny size 1 box centered on the point.

</details>

<details>

<summary><strong>Expansion</strong><br><em>Expand bounds by that amount to account for a margin of error due to multiple layers of transformation and lack of OBB.</em></summary>

Adds a margin around each dataset's bounds to account for transformations or inaccuracies in bounding box calculations.

</details>

<details>

<summary><strong>Weighting</strong><br><em>Scores weighting.</em></summary>

Controls how different metrics contribute to the overall score used for pruning.

</details>

<details>

<summary><strong>Logic</strong><br><em>Pruning order &#x26; prioritization.</em></summary>

Determines which datasets are pruned first based on their scores.

**Values**:

* **Low to High**: Lower weights are pruned first.
* **High to Low**: Higher weights are pruned first.

</details>

<details>

<summary><strong>Min Threshold</strong><br><em>The minimum amount two sub-points must overlap to be added to the comparison. The higher, the more "overlap" there must be.</em></summary>

Sets a minimum overlap threshold for datasets to be considered for pruning.

</details>

<details>

<summary><strong>Threshold Measure</strong><br><em>How to interpret the min overlap value. Discrete means distance in world space Relative means uses percentage (0-1) of the averaged radius.</em></summary>

Defines how the minimum overlap threshold is interpreted:

* **Discrete**: Raw distance in world units.
* **Relative**: Percentage (0-1) of the average point radius.

</details>

<details>

<summary><strong>Include Filtered In Metrics</strong><br><em>If enabled, points that are filtered out from overlap detection are still accounted for in static metrics/maths.</em></summary>

When enabled, points filtered out by the point filter subnode still contribute to overall bounds and volume calculations.

</details>

#### Inputs

* Point data inputs (multiple datasets)
* Optional point filter subnode for selecting which points to consider

#### Outputs

* Point data outputs with overlapping datasets removed

#### Usage Example

You have multiple procedural terrain datasets representing different biomes. You want to avoid overlapping biome regions that would cause visual artifacts or performance issues. By connecting these datasets to Discard By Overlap and setting a relative overlap threshold of 0.2, the node will remove datasets whose boundaries significantly overlap with others, keeping only those that are spatially distinct.

#### Notes

* The node uses an octree structure for efficient overlap detection.
* Scores can be fine-tuned using weights to prioritize certain overlap metrics.
* The Fast test mode is fastest but least accurate; Sphere mode is more accurate but may produce false positives.
