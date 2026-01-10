---
description: 'In editor :: PCGEx | Sample : Nearest Bounds'
icon: circle
---

# Nearest Bounds

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Sample data from the nearest target bounds.

#### Overview

The **Sample : Nearest Bounds** node finds and samples data from the closest or most relevant target bounds relative to input points. It's useful for tasks like aligning objects to nearby geometry, gathering properties from surrounding volumes, or determining spatial relationships between point sets.

This node operates by comparing the bounds of input points with those of target data. It supports multiple sampling methods such as picking the closest, farthest, largest, or smallest bounds, and can optionally sort candidates before selecting one or more samples. The sampled results can be blended together using various blending modes and written to attributes on the input points.

{% hint style="info" %}
Connects to **Point Filters** subnode for filtering input points, and **Target Data** subnode for defining target bounds.
{% endhint %}

#### How It Works

The node first builds a spatial representation of all target bounds. For each input point, it then identifies which target bounds are relevant based on the selected sampling method.

* If **WithinRange** is selected, all overlapping or nearby bounds are considered.
* If **ClosestBounds**, **FarthestBounds**, **LargestBounds**, **SmallestBounds**, or **BestCandidate** is chosen, it selects one or more specific bounds based on criteria like distance or size.
* When using **BestCandidate**, the results are sorted according to a specified direction (ascending or descending) before selection.

The node then samples data from these selected targets. It can blend multiple samples using different blending modes and write various outputs such as:

* Transform
* Distance
* Signed distance
* Angle
* Component-wise distance
* Number of samples
* Sampled index

The sampling process also supports weighting based on distance, allowing for more nuanced blending where closer samples have higher influence.

<details>

<summary>Inputs</summary>

* **Main Input**: Points to sample from.
* **Target Data**: Bounds data used as sources for sampling.
* **Point Filters** (Optional): Subnode to filter input points before processing.

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Modified points with sampled data written to attributes.
* **Filtered Output** (Optional): Points that failed sampling, if pruning is disabled.

</details>

#### Configuration

<details>

<summary><strong>DataMatching</strong><br><em>If enabled, allows you to filter out which targets get sampled by which data.</em></summary>

When enabled, this setting lets you define how input points are matched with target data. This is useful when you want different groups of input points to sample from different subsets of targets.

</details>

<details>

<summary><strong>SampleMethod</strong><br><em>Sampling method.</em></summary>

Determines which target bounds are selected for sampling:

* **All**: Process all overlapping bounds.
* **Closest Bounds**: Pick the closest bound only.
* **Farthest Bounds**: Pick the farthest bound only.
* **Largest Bounds**: Pick the largest bound (by extent length) only.
* **Smallest Bounds**: Pick the smallest bound (by extent length) only.
* **Best Candidate**: Select based on sorting rules.

</details>

<details>

<summary><strong>SortDirection</strong><br><em>Sort direction</em></summary>

Controls the order in which candidates are sorted when using **BestCandidate** sampling.

* **Ascending**: Sorts from smallest to largest.
* **Descending**: Sorts from largest to smallest.

</details>

<details>

<summary><strong>BoundsSource</strong><br><em>Source bounds.</em></summary>

Specifies the type of bounds used for comparison:

* **Bounds**: Use the point's bounding box.
* **Scaled Bounds**: Use a scaled version of the point's bounding box.

</details>

<details>

<summary><strong>DistanceType</strong><br><em>Distance type.</em></summary>

Defines how distances are calculated:

* **Euclidian**: Standard straight-line distance.
* Other options may be available depending on implementation.

</details>

<details>

<summary><strong>ApplySampling</strong><br><em>Whether and how to apply sampled result directly (not mutually exclusive with output)</em></summary>

Controls whether the sampled data is applied directly to the input points:

* **None**: No direct application.
* **Transform**: Apply transform from sample.
* Other options may be available.

</details>

<details>

<summary><strong>bUseLocalCurve</strong><br><em>Whether to use in-editor curve or an external asset.</em></summary>

When enabled, uses the local curve defined in this node. When disabled, it references an external curve asset.

</details>

<details>

<summary><strong>LocalWeightRemap</strong><br><em>Curve that balances weight over distance</em></summary>

A curve used to remap weights based on distance when sampling multiple points. The curve's X-axis represents normalized distance, and Y-axis represents the corresponding weight.

</details>

<details>

<summary><strong>WeightRemap</strong><br><em>Curve that balances weight over distance</em></summary>

Reference to an external curve asset used for weighting samples based on distance.

</details>

<details>

<summary><strong>BlendingInterface</strong><br><em>How to blend data from sampled points</em></summary>

Determines how multiple samples are combined:

* **Individual**: Each sample is treated separately.
* **Monolithic**: All samples are blended together into a single result.

</details>

<details>

<summary><strong>TargetAttributes</strong><br><em>Attributes to sample from the targets</em></summary>

List of attributes to sample from target data. Only used when blending interface is set to Monolithic.

</details>

<details>

<summary><strong>bBlendPointProperties</strong><br><em>Write the sampled distance.</em></summary>

When enabled, writes point properties such as transform or distance into the output.

</details>

<details>

<summary><strong>PointPropertiesBlendingSettings</strong><br><em>The constant to use as Up vector for the look at transform.</em></summary>

Settings for blending point properties when using a monolithic blend mode. Includes options like up vector source.

</details>

<details>

<summary><strong>bWriteSuccess</strong><br><em>Write whether the sampling was sucessful or not to a boolean attribute.</em></summary>

When enabled, writes a success flag indicating if sampling was successful for each point.

</details>

<details>

<summary><strong>SuccessAttributeName</strong><br><em>Name of the 'boolean' attribute to write sampling success to.</em></summary>

The name of the boolean attribute that stores whether sampling succeeded.

</details>

<details>

<summary><strong>bWriteTransform</strong><br><em>Write the sampled transform.</em></summary>

When enabled, writes the sampled transform to an attribute.

</details>

<details>

<summary><strong>TransformAttributeName</strong><br><em>Name of the 'transform' attribute to write sampled Transform to.</em></summary>

The name of the transform attribute that stores the sampled transform.

</details>

<details>

<summary><strong>bWriteLookAtTransform</strong><br><em>Write the sampled transform.</em></summary>

When enabled, writes a look-at transform derived from the sampled data.

</details>

<details>

<summary><strong>LookAtTransformAttributeName</strong><br><em>Name of the 'transform' attribute to write sampled Transform to.</em></summary>

The name of the transform attribute that stores the look-at transform.

</details>

<details>

<summary><strong>LookAtAxisAlign</strong><br><em>The axis to align transform the look at vector to.</em></summary>

Controls which axis of the look-at transform is aligned with the sampled direction:

* **Forward**
* **Backward**
* **Right**
* **Left**
* **Up**
* **Down**

</details>

<details>

<summary><strong>LookAtUpSelection</strong><br><em>Up vector source.</em></summary>

Determines how the up vector is selected for look-at transforms:

* **Constant**: Use a fixed vector.
* **Attribute**: Use an attribute from the sampled data.

</details>

<details>

<summary><strong>LookAtUpConstant</strong><br><em>The constant to use as Up vector for the look at transform.</em></summary>

The fixed up vector used when **LookAtUpSelection** is set to Constant.

</details>

<details>

<summary><strong>bWriteDistance</strong><br><em>Write the sampled distance.</em></summary>

When enabled, writes the sampled distance to an attribute.

</details>

<details>

<summary><strong>DistanceAttributeName</strong><br><em>Name of the 'double' attribute to write sampled distance to.</em></summary>

The name of the double attribute that stores the sampled distance.

</details>

<details>

<summary><strong>bOutputNormalizedDistance</strong><br><em>If enabled, output normalized distance instead of actual distance.</em></summary>

When enabled, outputs a normalized version of the distance (0 to 1), where 0 is the minimum and 1 is the maximum possible.

</details>

<details>

<summary><strong>bOutputOneMinusDistance</strong><br><em>Whether to output 1 - normalized distance instead of normalized distance.</em></summary>

When enabled, outputs `1 - normalized_distance` instead of the normalized value. Useful for inverse falloff effects.

</details>

<details>

<summary><strong>DistanceScale</strong><br><em>Scale factor applied to the distance output</em></summary>

A scalar multiplier applied to the final distance before writing it to the attribute.

</details>

<details>

<summary><strong>bWriteSignedDistance</strong><br><em>Write the sampled Signed distance.</em></summary>

When enabled, writes a signed version of the distance indicating direction (positive or negative).

</details>

<details>

<summary><strong>SignedDistanceAttributeName</strong><br><em>Name of the 'double' attribute to write sampled Signed distance to.</em></summary>

The name of the double attribute that stores the signed distance.

</details>

<details>

<summary><strong>SignAxis</strong><br><em>Axis to use to calculate the distance' sign</em></summary>

The axis used to determine the sign of the distance:

* **Forward**
* **Backward**
* **Right**
* **Left**
* **Up**
* **Down**

</details>

<details>

<summary><strong>SignedDistanceScale</strong><br><em>Scale factor applied to the signed distance output; allows to invert it using -1</em></summary>

A scalar multiplier applied to the signed distance, useful for inverting its direction.

</details>

<details>

<summary><strong>bWriteComponentWiseDistance</strong><br><em>Write the sampled component-wise distance.</em></summary>

When enabled, writes a vector containing distances along each axis.

</details>

<details>

<summary><strong>ComponentWiseDistanceAttributeName</strong><br><em>Name of the 'FVector' attribute to write component-wise distance to.</em></summary>

The name of the FVector attribute that stores component-wise distances.

</details>

<details>

<summary><strong>bAbsoluteComponentWiseDistance</strong><br><em>Whether to output absolute or signed component wise distances</em></summary>

When enabled, outputs only absolute values for component-wise distances. Otherwise, signs are preserved.

</details>

<details>

<summary><strong>bWriteAngle</strong><br></summary>

When enabled, calculates and writes an angle based on sampled data.

</details>

<details>

<summary><strong>AngleAttributeName</strong><br><em>Name of the 'double' attribute to write sampled Signed distance to.</em></summary>

The name of the double attribute that stores the computed angle.

</details>

<details>

<summary><strong>AngleAxis</strong><br><em>Axis to use to calculate the angle</em></summary>

The axis used for computing the angle:

* **Forward**
* **Backward**
* **Right**
* **Left**
* **Up**
* **Down**

</details>

<details>

<summary><strong>AngleRange</strong><br><em>Unit/range to output the angle to.</em></summary>

The range of the angle output:

* **Radians (0..+PI)**
* **Radians (-PI..+PI)**
* **Radians (0..+TAU)**
* **Degrees (0..+180)**
* **Degrees (-180..+180)**
* **Degrees (0..+360)**
* **Normalized Half (0..180 -> 0..1)**
* **Normalized (0..+360 -> 0..1)**
* **Inv. Normalized Half (0..180 -> 1..0)**
* **Inv. Normalized (0..+360 -> 1..0)**

</details>

<details>

<summary><strong>bWriteNumSamples</strong><br></summary>

When enabled, writes the number of samples found for each point.

</details>

<details>

<summary><strong>NumSamplesAttributeName</strong><br><em>Name of the 'int32' attribute to write the number of sampled neighbors to.</em></summary>

The name of the int32 attribute that stores the number of samples.

</details>

<details>

<summary><strong>bWriteSampledIndex</strong><br></summary>

When enabled, writes the index of the sampled target.

</details>

<details>

<summary><strong>SampledIndexAttributeName</strong><br><em>Name of the 'int32' attribute to write the sampled index to. Will use the closest index when sampling multiple points.</em></summary>

The name of the int32 attribute that stores the sampled index.

</details>

<details>

<summary><strong>bTagIfHasSuccesses</strong><br></summary>

When enabled, tags input points with a tag if they successfully sampled at least one target.

</details>

<details>

<summary><strong>HasSuccessesTag</strong><br></summary>

The name of the tag applied to points that had successful sampling.

</details>

<details>

<summary><strong>bTagIfHasNoSuccesses</strong><br></summary>

When enabled, tags input points with a tag if they failed to sample any targets.

</details>

<details>

<summary><strong>HasNoSuccessesTag</strong><br></summary>

The name of the tag applied to points that did not successfully sample any targets.

</details>

<details>

<summary><strong>bProcessFilteredOutAsFails</strong><br><em>If enabled, mark filtered out points as "failed". Otherwise, skip the processing altogether. Only uncheck this if you want to ensure existing attribute values are preserved.</em></summary>

Controls how filtered-out points are treated:

* **Enabled**: Mark them as failed.
* **Disabled**: Skip processing entirely.

</details>

<details>

<summary><strong>bPruneFailedSamples</strong><br><em>If enabled, points that failed to sample anything will be pruned.</em></summary>

When enabled, removes points that couldn't sample any targets from the output.

</details>

<details>

<summary><strong>bIgnoreSelf</strong><br></summary>

When enabled, prevents a point from sampling its own bounds.

</details>

#### Usage Example

Imagine placing trees on terrain where each tree needs to be aligned with nearby terrain features. You could:

1. Use this node to sample the bounds of terrain patches.
2. Align each tree's transform to match the closest terrain patch.
3. Write the distance from the terrain to the tree as an attribute for further processing.

#### Notes

* This node is computationally intensive, especially with large datasets.
* Consider using point filters or limiting target data to improve performance.
* The **BestCandidate** sampling method requires a valid sort direction and can be used for advanced spatial logic.
