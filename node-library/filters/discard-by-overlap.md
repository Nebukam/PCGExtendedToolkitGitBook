---
description: 'In editor :: PCGEx | Discard by Overlap'
icon: circle
---

# Discard by Overlap

Discard entire datasets based on how they overlap with each other.

**How It Works**

> AI-Generated, needs proofreading

* Computes the degree of overlap between datasets based on specified weights for dynamic and static balances.
* Evaluates overlap count, sub-count, volume, and volume density according to configured settings, where each sub point's intersection volume is accounted individually regardless of spatial occupation.
* Discards entire datasets if their computed overlap metrics exceed predefined thresholds set by the user through the node’s configuration parameters.

#### Configuration

<details>

<summary><strong>Test Mode</strong> <code>PCGExOverlapTestMode</code></summary>

Overlap test mode

**Values:**

* **Fast**: Only test using datasets' overall bounds
* **Box**: Test every points' bounds as transformed box. May not detect some overlaps.
* **Sphere**: Test every points' bounds as spheres. Will have some false positve.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Bounds Source</strong> <code>PCGExPointBoundsSource</code></summary>

Point bounds to be used to compute overlaps

⚡ PCG Overridable

</details>

<details>

<summary><strong>Expansion</strong> <code>double</code></summary>

Expand bounds by that amount to account for a margin of error due to multiple layers of transformation and lack of OBB

⚡ PCG Overridable

</details>

<details>

<summary><strong>Weighting</strong> <code>PCGExOverlapScoresWeighting</code></summary>

Scores weighting

⚡ PCG Overridable

</details>

<details>

<summary><strong>Logic</strong> <code>PCGExOverlapPruningLogic</code></summary>

Pruning order & prioritization

**Values:**

* **Low to High**: Lower weights are pruned first.
* **High to Low**: Higher weights are pruned first.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Min Threshold</strong> <code>double</code></summary>

The minimum amount two sub-points must overlap to be added to the comparison. The higher, the more "overlap" there must be.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Threshold Measure</strong> <code>PCGExMeanMeasure</code></summary>

How to interpret the min overlap value. Discrete means distance in world space Relative means uses percentage (0-1) of the averaged radius.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Include Filtered In Metrics</strong> <code>bool</code></summary>

If enabled, points that are filtered out from overlap detection are still accounted for in static metrics/maths. i.e they still participate to the overall bounds shape etc instead of being thoroughly ignored.

⚡ PCG Overridable

</details>

**Dynamic Weights**

<details>

<summary><strong>Dynamic Balance</strong> <code>double</code></summary>

How much of the dynamic weights to account for vs. static ones

⚡ PCG Overridable

</details>

<details>

<summary><strong>Overlap Count</strong> <code>double</code></summary>

Overlap count weight (how many sets overlap)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Overlap Sub Count</strong> <code>double</code></summary>

Overlap Sub-Count weight (how many points overlap)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Overlap Volume</strong> <code>double</code></summary>

Overlap volume weight (cumulative volume overlap) Note that each sub point adds its own intersection volume whether or not it occupies an already computed volume in space.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Overlap Volume Density</strong> <code>double</code></summary>

Overlap volume density weight (cumulative volume overlap / number of overlapping points)

⚡ PCG Overridable

</details>

**Static Weights**

<details>

<summary><strong>Static Balance</strong> <code>double</code></summary>

How much of the static weights to account for vs. dynamic ones

⚡ PCG Overridable

</details>

<details>

<summary><strong>Num Points</strong> <code>double</code></summary>

Number of points weight (points in a given set)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Volume</strong> <code>double</code></summary>

Volume weight Note that each sub point adds its own intersection volume whether or not it occupies an already computed volume in space.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Volume Density</strong> <code>double</code></summary>

Volume density.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Custom Tag Weight</strong> <code>double</code></summary>

Weight of custom tags scores, if any.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tag Scores</strong> <code>Map of FString, double</code></summary>

Lets you add custom 'score' by tags. If the tag is found on the collection, its score will be added to the computation, letting you have more granular control.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Data Score Weight</strong> <code>double</code></summary>

Weight of custom tags scores, if any.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Data Scores</strong> <code>Array of FName</code></summary>

Lets you add extra custom 'score' using @Data attributes.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsSampling\Public\Elements\PCGExDiscardByOverlap.h`
