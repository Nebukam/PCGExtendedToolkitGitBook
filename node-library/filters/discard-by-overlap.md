---
description: 'In editor :: PCGEx | Discard by Overlap'
icon: circle
---

# Discard by Overlap

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Discard entire datasets based on how they overlap with each other.

#### Overview

This node evaluates multiple point datasets for spatial overlap and removes datasets that exceed certain overlap thresholds. It's useful when you want to eliminate redundant or overlapping content in procedural generation, such as avoiding duplicate terrain features or preventing object clustering in game levels.

It processes all input datasets simultaneously, calculating how much each dataset overlaps with others using configurable weights and metrics. Based on these scores, it determines which datasets should be discarded from the output.

{% hint style="info" %}
Connects to **Point Filters** subnodes for filtering points before overlap evaluation.
{% endhint %}

#### How It Works

This node compares all input datasets against each other to determine how much they spatially overlap. For each pair of datasets, it calculates an intersection volume and various overlap statistics.

First, it builds a spatial index (octree) for fast overlap detection between points in different datasets. Then, it performs pairwise overlap checks using the selected test mode (Fast, Box, or Sphere). The actual overlap volume is computed based on the bounds of each point.

Each dataset gets assigned a score based on:

* How many other datasets it overlaps with
* How many points are involved in overlaps
* The total volume of overlaps
* Static properties like number of points and volume

These scores are combined using configurable weights for both static (fixed) and dynamic (based on overlap) factors. Datasets are then pruned according to a prioritization logic, either removing those with the lowest scores first or highest scores first.

The pruning process continues iteratively until no more datasets meet the discard criteria, based on the minimum threshold defined by the user.

<details>

<summary>Inputs</summary>

Expects multiple point datasets as input. Each dataset represents a collection of points that will be compared against all others for overlap.

</details>

<details>

<summary>Outputs</summary>

Outputs the remaining point datasets after overlap pruning. Datasets that were discarded are not included in the output.

</details>

#### Configuration

***

**Test Mode**

_Overlap test mode_

Controls how overlap is computed between points from different datasets.

* **Fast**: Only compares overall bounding boxes of datasets.
* **Box**: Tests each point's bounds as transformed boxes, may miss some overlaps.
* **Sphere**: Tests each point's bounds as spheres, can produce false positives.

**Bounds Source**

_Point bounds to be used to compute overlaps_

Determines how the spatial bounds of individual points are calculated.

* **Scaled Bounds**: Uses scaled bounds based on point transform and scale.
* **Density Bounds**: Scales bounds using density and steepness parameters.
* **Bounds**: Uses unscaled bounds.
* **Center**: Treats each point as a tiny box centered at its location.

**Expansion**

_Expand bounds by that amount to account for a margin of error due to multiple layers of transformation and lack of OBB_

Adds padding around point bounds to account for transformations or inaccuracies in bounding calculations. A value of 10 means the bounds are expanded by 10 units in all directions.

**Weighting**

_Scores weighting_

Controls how different overlap metrics contribute to the final score used for pruning.

* **Dynamic Balance**: How much dynamic scores (based on overlaps) influence the final score vs. static ones.
* **Overlap Count**: Weight of how many datasets overlap with this one.
* **Overlap Sub-Count**: Weight of how many points are involved in overlaps.
* **Overlap Volume**: Weight of total volume of overlaps.
* **Overlap Volume Density**: Weight of average overlap volume per overlapping point.
* **Static Balance**: How much static scores (based on dataset properties) influence the final score vs. dynamic ones.
* **Num Points**: Weight of number of points in a dataset.
* **Volume**: Weight of total volume of the dataset.
* **Volume Density**: Weight of average volume per point.
* **Custom Tag Weight**: Weight of custom tag scores.
* **Tag Scores**: Custom scores assigned to specific tags found on datasets.
* **Data Score Weight**: Weight of data attribute scores.
* **Data Scores**: Custom scores based on @Data attributes.

**Logic**

_Pruning order & prioritization_

Determines which datasets are removed first during pruning.

* **Low to High**: Removes datasets with the lowest scores first.
* **High to Low**: Removes datasets with the highest scores first.

**Min Threshold**

_The minimum amount two sub-points must overlap to be added to the comparison. The higher, the more "overlap" there must be._

Sets a minimum required overlap level for a dataset to be considered for pruning. Higher values require more substantial overlaps before discarding.

**Threshold Measure**

_How to interpret the min overlap value. Discrete means distance in world space Relative means uses percentage (0-1) of the averaged radius._

Controls how the minimum threshold is interpreted.

* **Relative**: The threshold is a fraction of the average point radius.
* **Discrete**: The threshold is an absolute distance in world units.

**Include Filtered In Metrics**

_If enabled, points that are filtered out from overlap detection are still accounted for in static metrics/maths. i.e they still participate to the overall bounds shape etc instead of being thoroughly ignored._

When enabled, filtered-out points still contribute to static calculations like bounds and volume measurements, ensuring more accurate overlap computations.

#### Usage Example

You have multiple terrain generation layers that might produce overlapping features like trees or rocks. Set the node to use "Sphere" test mode with a relative threshold of 0.2. Configure weights so that datasets with high overlap volume are more likely to be discarded. Use "High to Low" pruning logic to remove the most overlapping datasets first, keeping only the least redundant layers.

#### Notes

* The node works best when datasets are relatively small and well-separated.
* Using higher expansion values can help catch edge cases but may increase processing time.
* Custom tag and data scores provide fine-grained control over which datasets get pruned.
* Performance scales with the number of input datasets and points per dataset.
* Consider using point filters to remove irrelevant points before overlap evaluation for better performance.
