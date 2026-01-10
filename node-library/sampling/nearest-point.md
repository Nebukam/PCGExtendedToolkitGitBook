---
description: 'In editor :: PCGEx | Sample : Nearest Points'
icon: circle
---

# Nearest Point

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Sample data from the nearest target points within a specified range.

#### Overview

This node finds and samples data from the closest target points within a defined distance range for each input point. It's useful for creating effects that depend on nearby geometry, such as terrain influence, object placement based on proximity, or procedural behaviors that react to local density.

It supports multiple sampling methods, including sampling within a range or selecting the best candidate based on distance or other criteria. You can blend data from multiple targets using various blending modes like average, weighted by distance, or copy from the closest point.

The node also allows you to write sampled results directly into attributes on the input points, such as transform, distance, angle, or custom data, making it easy to pass this information downstream in your graph.

{% hint style="info" %}
Connects to **Point Filters** subnode (for filtering input points), and **Target Data** subnode (to define the target points to sample from).
{% endhint %}

#### How It Works

This node performs a nearest neighbor search for each input point against a set of target points. It first determines which targets are within the specified distance range, then applies optional filtering or matching rules if enabled.

For each valid target, it calculates weights based on distance or an attribute value and blends data from multiple targets using a selected blending method. The results can be written directly to attributes on the input points, such as transform, distance, angle, or custom data.

If multiple samples are taken, the node can apply a blending operation across them, or use the closest point's data. It also supports writing metadata like whether sampling succeeded, how many targets were sampled, and which index was selected.

#### Inputs

* **Input Points**: The points that will be sampled.
* **Target Points**: The set of points to sample from.
* **Point Filters** (optional): Subnode used to filter input points.
* **Target Data** (optional): Subnode used to define or filter target points.

#### Outputs

* **Output Points**: The input points with added attributes based on the sampling results.

#### Configuration

<details>

<summary><strong>Data Matching</strong><br><em>If enabled, allows you to filter out which targets get sampled by which data.</em></summary>

When enabled, this lets you define rules for matching source points to target points. For example, you might want to sample only from targets that are in the same cluster or have a specific tag.

</details>

<details>

<summary><strong>Sample Method</strong><br><em>Sampling method.</em></summary>

* **WithinRange**: Sample all targets within the specified range.
* **BestCandidate**: Select the single closest target within the range.

</details>

<details>

<summary><strong>Sort Direction</strong><br><em>Sort direction</em></summary>

Only used when "Sample Method" is set to "BestCandidate". Controls whether the closest or furthest point is selected.

**Values**:

* **Ascending**: Selects the nearest point.
* **Descending**: Selects the furthest point.

</details>

<details>

<summary><strong>Range Min Input</strong><br><em>Type of Range Min</em></summary>

Controls whether the minimum range is a constant value or taken from an attribute on the input points.

**Values**:

* **Constant**: Use the fixed value in "Range Min".
* **Attribute**: Use a double attribute from the input points.

</details>

<details>

<summary><strong>Range Min</strong><br><em>Minimum target range to sample targets.</em></summary>

The minimum distance from each input point to consider for sampling. Only used when "Range Min Input" is set to "Constant".

</details>

<details>

<summary><strong>Range Max Input</strong><br><em>Type of Range Min</em></summary>

Controls whether the maximum range is a constant value or taken from an attribute on the input points.

**Values**:

* **Constant**: Use the fixed value in "Range Max".
* **Attribute**: Use a double attribute from the input points.

</details>

<details>

<summary><strong>Range Max</strong><br><em>Maximum target range to sample targets.</em></summary>

The maximum distance from each input point to consider for sampling. Only used when "Range Max Input" is set to "Constant".

</details>

<details>

<summary><strong>Distance Details</strong><br><em>Distance method to be used for source &#x26; target points.</em></summary>

Defines how distances are calculated between points.

**Values**:

* **Euclidean**: Standard straight-line distance.
* **Manhattan**: Distance along axes only.
* **Chebyshev**: Maximum of axis differences.

</details>

<details>

<summary><strong>Weight Mode</strong><br><em>Which mode to use to compute weights.</em></summary>

Controls how the weight for each target point is calculated when blending results.

**Values**:

* **Distance**: Use inverse distance as weight.
* **Attribute**: Read weight from a point attribute on targets.
* **Constant**: Use a fixed constant value.

</details>

<details>

<summary><strong>Weight Attribute</strong><br><em>Weight attribute to read on targets.</em></summary>

The name of the attribute on target points to use as weight when "Weight Mode" is set to "Attribute".

</details>

<details>

<summary><strong>Weight Method</strong><br><em>Weight method used for blending</em></summary>

Controls how weights are applied during blending.

**Values**:

* **FullRange**: Use the full range of weights.
* **Normalized**: Normalize weights so they sum to 1.
* **Clamped**: Clamp weights between 0 and 1.

</details>

<details>

<summary><strong>Use Local Curve</strong><br><em>Whether to use in-editor curve or an external asset.</em></summary>

When enabled, uses the in-editor curve defined in "Weight Over Distance". Otherwise, it uses an external asset.

</details>

<details>

<summary><strong>Weight Over Distance</strong><br><em>Curve that balances weight over distance</em></summary>

A curve used to define how weight changes with distance. Only used when "Use Local Curve" is enabled and "Weight Mode" is not "Attribute".

</details>

<details>

<summary><strong>Blending Interface</strong><br><em>How to blend data from sampled points</em></summary>

Controls how the node blends attributes from multiple targets.

**Values**:

* **Individual**: Blend each attribute separately.
* **Monolithic**: Blend all attributes together as one operation.

</details>

<details>

<summary><strong>Target Attributes</strong><br><em>Attributes to sample from the targets</em></summary>

List of attributes to sample when "Blending Interface" is set to "Monolithic". Each attribute will be blended using the selected blending type.

</details>

<details>

<summary><strong>Blend Point Properties</strong><br><em>Write the sampled distance.</em></summary>

When enabled, blends point properties like transform or rotation from the targets.

</details>

<details>

<summary><strong>Point Properties Blending Settings</strong><br><em>The constant to use as Up vector for the look at transform.</em></summary>

Settings for blending point properties when "Blend Point Properties" is enabled. Used to define how transforms are blended.

</details>

<details>

<summary><strong>Write Success</strong><br><em>Write whether the sampling was successful or not to a boolean attribute.</em></summary>

When enabled, writes a boolean attribute indicating if sampling succeeded for each input point.

</details>

<details>

<summary><strong>Success Attribute Name</strong><br><em>Name of the 'boolean' attribute to write sampling success to.</em></summary>

The name of the boolean attribute that will store whether sampling was successful.

</details>

<details>

<summary><strong>Write Transform</strong><br><em>Write the sampled transform.</em></summary>

When enabled, writes a transform attribute with the blended transform from the targets.

</details>

<details>

<summary><strong>Transform Attribute Name</strong><br><em>Name of the 'transform' attribute to write sampled Transform to.</em></summary>

The name of the transform attribute that will store the blended transform.

</details>

<details>

<summary><strong>Write LookAt Transform</strong><br><em>Write the sampled transform.</em></summary>

When enabled, writes a transform attribute with a look-at transform from the targets.

</details>

<details>

<summary><strong>LookAt Transform Attribute Name</strong><br><em>Name of the 'transform' attribute to write sampled Transform to.</em></summary>

The name of the transform attribute that will store the look-at transform.

</details>

<details>

<summary><strong>LookAt Axis Align</strong><br><em>The axis to align transform the look at vector to.</em></summary>

Controls which axis of the look-at transform is aligned with the direction from the source point to the target.

**Values**:

* **Forward**: Align forward axis.
* **Backward**: Align backward axis.
* **Right**: Align right axis.
* **Left**: Align left axis.
* **Up**: Align up axis.
* **Down**: Align down axis.

</details>

<details>

<summary><strong>LookAt Up Selection</strong><br><em>Up vector source.</em></summary>

Controls whether to use a constant vector or an attribute from the input points as the up vector for the look-at transform.

**Values**:

* **Constant**: Use the "LookAt Up Constant" value.
* **Attribute**: Use an attribute from the input points.

</details>

<details>

<summary><strong>LookAt Up Constant</strong><br><em>The constant to use as Up vector for the look at transform.</em></summary>

The up vector used when "LookAt Up Selection" is set to "Constant".

</details>

<details>

<summary><strong>Write Distance</strong><br><em>Write the sampled distance.</em></summary>

When enabled, writes a double attribute with the blended distance from the targets.

</details>

<details>

<summary><strong>Distance Attribute Name</strong><br><em>Name of the 'double' attribute to write sampled distance to.</em></summary>

The name of the double attribute that will store the sampled distance.

</details>

<details>

<summary><strong>Output Normalized Distance</strong><br><em>Whether to output normalized distance or not</em></summary>

When enabled, outputs a normalized distance between 0 and 1 based on the range.

</details>

<details>

<summary><strong>Output OneMinus Distance</strong><br><em>Whether to do a OneMinus on the normalized distance value</em></summary>

When enabled, inverts the normalized distance (1 - normalized).

</details>

<details>

<summary><strong>Distance Scale</strong><br><em>Scale factor applied to the distance output; allows to invert it using -1</em></summary>

A scale factor applied to the distance output. Can be used to invert the value by setting to -1.

</details>

<details>

<summary><strong>Write Signed Distance</strong><br><em>Write the sampled Signed distance.</em></summary>

When enabled, writes a double attribute with the signed distance from the targets.

</details>

<details>

<summary><strong>Signed Distance Attribute Name</strong><br><em>Name of the 'double' attribute to write sampled Signed distance to.</em></summary>

The name of the double attribute that will store the signed distance.

</details>

<details>

<summary><strong>Sign Axis</strong><br><em>Axis to use to calculate the distance' sign</em></summary>

Controls which axis is used to determine the sign of the distance.

**Values**:

* **Forward**: Use X-axis.
* **Backward**: Use -X-axis.
* **Right**: Use Y-axis.
* **Left**: Use -Y-axis.
* **Up**: Use Z-axis.
* **Down**: Use -Z-axis.

</details>

<details>

<summary><strong>Signed Distance Scale</strong><br><em>Scale factor applied to the signed distance output; allows to invert it using -1</em></summary>

A scale factor applied to the signed distance output. Can be used to invert the value by setting to -1.

</details>

<details>

<summary><strong>Write Component Wise Distance</strong><br><em>Write the sampled component-wise distance.</em></summary>

When enabled, writes a FVector attribute with the component-wise distance from the targets.

</details>

<details>

<summary><strong>Component Wise Distance Attribute Name</strong><br><em>Name of the 'FVector' attribute to write component-wise distance to.</em></summary>

The name of the FVector attribute that will store the component-wise distance.

</details>

<details>

<summary><strong>Absolute Component Wise Distance</strong><br><em>Whether to output absolute or signed component wise distances</em></summary>

When enabled, outputs absolute values for the component-wise distance. Otherwise, outputs signed values.

</details>

<details>

<summary><strong>Write Angle</strong><br><em>Write the sampled angle.</em></summary>

When enabled, writes a double attribute with the angle between points.

</details>

<details>

<summary><strong>Angle Attribute Name</strong><br><em>Name of the 'double' attribute to write sampled Signed distance to.</em></summary>

The name of the double attribute that will store the angle.

</details>

<details>

<summary><strong>Angle Axis</strong><br><em>Axis to use to calculate the angle</em></summary>

Controls which axis is used to calculate the angle.

**Values**:

* **Forward**: Use X-axis.
* **Backward**: Use -X-axis.
* **Right**: Use Y-axis.
* **Left**: Use -Y-axis.
* **Up**: Use Z-axis.
* **Down**: Use -Z-axis.

</details>

<details>

<summary><strong>Angle Range</strong><br><em>Unit/range to output the angle to.</em></summary>

Controls how the angle is represented in the output.

**Values**:

* **Radians (0..+PI)**: Output in radians from 0 to π.
* **Radians (-PI..+PI)**: Output in radians from -π to π.
* **Radians (0..+TAU)**: Output in radians from 0 to 2π.
* **Degrees (0..+180)**: Output in degrees from 0 to 180.
* **Degrees (-180..+180)**: Output in degrees from -180 to 180.
* **Degrees (0..+360)**: Output in degrees from 0 to 360.
* **Normalized Half (0..180 -> 0..1)**: Normalize 0 to 180 into 0 to 1.
* **Normalized (0..+360 -> 0..1)**: Normalize 0 to 360 into 0 to 1.
* **Inv. Normalized Half (0..180 -> 1..0)**: Invert normalized 0 to 180 into 1 to 0.
* **Inv. Normalized (0..+360 -> 1..0)**: Invert normalized 0 to 360 into 1 to 0.

</details>

<details>

<summary><strong>Write Num Samples</strong><br><em>Write the sampled distance.</em></summary>

When enabled, writes an int32 attribute with the number of targets that were sampled.

</details>

<details>

<summary><strong>Num Samples Attribute Name</strong><br><em>Name of the 'int32' attribute to write the number of sampled neighbors to.</em></summary>

The name of the int32 attribute that will store the number of samples.

</details>

<details>

<summary><strong>Write Sampled Index</strong><br></summary>

When enabled, writes an int32 attribute with the index of the sampled target point.

</details>

<details>

<summary><strong>Sampled Index Attribute Name</strong><br><em>Name of the 'int32' attribute to write the sampled index to. Will use the closest index when sampling multiple points.</em></summary>

The name of the int32 attribute that will store the index of the sampled point.

</details>

<details>

<summary><strong>Tag If Has Successes</strong><br></summary>

When enabled, adds a tag to the output data if at least one point was successfully sampled.

</details>

<details>

<summary><strong>Has Successes Tag</strong><br><em>If enabled, add the specified tag to the output data if at least a single point has been sampled.</em></summary>

The tag name to apply when sampling succeeds for at least one point.

</details>

<details>

<summary><strong>Tag If Has No Successes</strong><br></summary>

When enabled, adds a tag to the output data if no points were successfully sampled.

</details>

<details>

<summary><strong>Has No Successes Tag</strong><br><em>If enabled, add the specified tag to the output data if no points were sampled.</em></summary>

The tag name to apply when sampling fails for all points.

</details>

<details>

<summary><strong>Process Filtered Out As Fails</strong><br><em>If enabled, mark filtered out points as "failed". Otherwise, skip the processing altogether. Only uncheck this if you want to ensure existing attribute values are preserved.</em></summary>

When enabled, points that are filtered out by point filters will be marked as failed samples. If disabled, they are skipped entirely.

</details>

<details>

<summary><strong>Prune Failed Samples</strong><br><em>If enabled, points that failed to sample anything will be pruned.</em></summary>

When enabled, input points that fail to sample any targets are removed from the output.

</details>

<details>

<summary><strong>Ignore Self</strong><br></summary>

When enabled, prevents sampling from the same point as the source point.

</details>

#### Usage Example

You have a set of trees and want to sample terrain height data for each tree. Connect your tree points to the input and terrain points to the target data. Set the range to 10 units, enable "Write Distance" and "Write Transform", and select "Average" blending mode. This will give each tree point a blended transform and distance based on nearby terrain.

#### Notes

* The node supports both constant and attribute-based range values.
* Blending modes can significantly affect performance; use "None" or "Copy" for faster processing.
* When using "BestCandidate", the node selects only one target, even if multiple are within range.
* For large datasets, consider using point filters to reduce unnecessary computations.
