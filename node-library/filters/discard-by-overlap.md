---
description: 'In editor :: PCGEx | Discard by Overlap'
icon: circle
---

# Discard by Overlap

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Discard entire datasets based on how they overlap with each other.

### Overview

This node evaluates how different point datasets overlap with each other and discards (removes) entire datasets based on overlap scores. It's useful for removing redundant or conflicting data in procedural generation workflows, such as eliminating overlapping terrain features, duplicate objects, or conflicting placements.

The node calculates overlap between datasets using various methods and assigns each dataset a score. Datasets with the lowest scores (or highest, depending on settings) are discarded to reduce redundancy or conflict in your final output.

{% hint style="info" %}
This node works best when you have multiple point datasets that may contain overlapping elements. It's particularly useful for cleaning up procedural content where overlap introduces visual artifacts or logical conflicts.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Default): Point data to process
* **Point Filters**: Optional input to filter which points are considered for overlap detection

</details>

<details>

<summary>Outputs</summary>

* **Default Output**: Point data that passed overlap filtering, with discarded datasets removed

</details>

### Properties Overview

Controls how overlap is calculated and which datasets are discarded.

***

#### Overlap Settings

How the node determines overlap between datasets.

**Test Mode**

_Controls how overlap is tested between datasets._

* Uses different methods to detect overlaps:
  * **Fast**: Only tests using datasets' overall bounds (fastest)
  * **Box**: Tests every point's bounds as transformed box (more accurate than Fast, but may miss some overlaps)
  * **Sphere**: Tests every point's bounds as spheres (fastest, but may produce false positives)

**Bounds Source**

_Controls which bounds are used to compute overlap._

* Determines how the size and shape of each point is considered:
  * **Scaled Bounds**: Uses scaled bounds (default)
  * **Density Bounds**: Scaled bounds with steepness factor
  * **Bounds**: Unscaled bounds
  * **Center**: Tiny size 1 box

**Expansion**

_Adds a margin of error to bounds._

* Expands the bounds by this amount in world units to account for transformation errors or multi-layered transformations.
* Default value: 10

**Threshold Measure**

_How to interpret the minimum overlap threshold._

* **Discrete**: Distance in world space
* **Relative**: Percentage (0-1) of the averaged radius

**Min Threshold**

_The minimum amount two points must overlap to be counted._

* Higher values require more overlap before points are considered overlapping.
* Default value: 0.1

**Include Filtered In Metrics**

_Whether filtered points still contribute to static metrics._

* When enabled, points that are filtered out from overlap detection still participate in overall bounds shape and other static calculations.
* When disabled, these points are completely ignored for metric computation.

***

#### Weighting Settings

Controls how scores are calculated for each dataset.

**Dynamic Balance**

_How much of the dynamic weights to account for vs. static ones._

* Controls the influence of dynamic overlap metrics (like actual overlap count) versus static metrics.
* Default value: 1

**Overlap Count**

_Weight for how many sets overlap._

* Higher values make datasets with more overlaps less likely to be kept.
* Default value: 2

**Overlap Sub-Count**

_Weight for how many points overlap._

* Higher values penalize datasets with more overlapping points.
* Default value: 1

**Overlap Volume**

_Weight for cumulative volume overlap._

* Higher values penalize datasets with larger overlapping volumes.
* Default value: 0

**Overlap Volume Density**

_Weight for volume overlap divided by number of overlapping points._

* Higher values penalize datasets where overlaps are concentrated.
* Default value: 0

**Static Balance**

_How much of the static weights to account for vs. dynamic ones._

* Controls the influence of static metrics (like point count) versus dynamic overlap metrics.
* Default value: 0.5

**Num Points**

_Weight for number of points in a dataset._

* Higher values make larger datasets more likely to be kept.
* Default value: 1

**Volume**

_Weight for total volume of a dataset._

* Higher values make datasets with larger volumes more likely to be kept.
* Default value: 0

**Volume Density**

_Weight for volume density._

* Higher values penalize datasets where points are clustered tightly.
* Default value: 0

**Custom Tag Weight**

_Weight for custom tag scores._

* If tags are defined, this controls how much they influence the score.
* Default value: 0

**Tag Scores**

_Lets you add custom 'score' by tags._

* Assigns specific scores to tags found on collections.
* Example: "Forest" = 10, "Water" = -5

**Data Score Weight**

_Weight for custom data attribute scores._

* If attributes are defined, this controls how much they influence the score.
* Default value: 0

**Data Scores**

_Lets you add extra custom 'score' using @Data attributes._

* Specifies which point attributes to use for scoring.
* Example: "@Density", "@Size"

***

#### Pruning Settings

Controls which datasets are discarded based on their scores.

**Logic**

_How to prioritize which datasets to discard._

* **Low to High**: Lower weights are pruned first (keeps the most overlapping datasets)
* **High to Low**: Higher weights are pruned first (keeps the least overlapping datasets)

### Notes

* This node is computationally expensive for large datasets due to overlap calculations.
* Use the "Fast" test mode for performance-critical workflows where exact overlap detection isn't required.
* The "Include Filtered In Metrics" option can be useful when you want to maintain accurate bounds even if some points are filtered out.
* Consider using point filters to limit which points participate in overlap detection, improving performance and reducing false positives.
* Scores are calculated per dataset and used to determine pruning order; higher scores generally mean a dataset is more valuable or less redundant.
