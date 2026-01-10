---
description: 'In editor :: PCGEx | Sample : Inside Path'
icon: circle
---

# Inside Path

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Sample points that lie inside paths.

#### Overview

This node identifies and samples points that are located within the boundaries of defined paths. It determines whether each point is inside or outside a path and can optionally sample nearby paths based on distance and inclusion criteria. This is useful for placing objects or applying effects only to areas enclosed by paths, such as inside buildings, gardens, or other enclosed regions.

It connects to points and paths data in the graph, processing point data against path geometry to determine inclusion status and sampling results.

{% hint style="info" %}
Connects to **Points** input pin and **Paths** input pin. Outputs to **Points** output pin.
{% endhint %}

#### How It Works

This node evaluates each point against a set of paths to determine if the point lies inside one or more paths. For each point, it performs the following steps:

1. **Projection**: Projects the point onto a 2D plane using specified projection settings.
2. **Inclusion Test**: Checks whether the projected point is inside any of the provided paths. This test can be adjusted with an inclusion offset to create an inset boundary for more precise control.
3. **Distance Filtering**: Filters paths based on distance from the point, using a minimum and maximum range. If a path is within this range and the point is inside it, it's considered for sampling.
4. **Sampling Logic**: Depending on the sampling method (within range or best candidate), it either samples all qualifying paths or selects the closest one.
5. **Weighting**: Applies a weight to the sampled result based on distance using a curve, which can be local or from an external asset.
6. **Output Writing**: Writes attributes such as success status, distance, number of paths inside, and number of samples to the point data.

The node supports various output modes that control whether all points are output or only those with successful samples.

<details>

<summary>Inputs</summary>

* **Points Input Pin** (default): Point data to be processed.
* **Paths Input Pin** (default): Path data used for inclusion and sampling tests.

</details>

<details>

<summary>Outputs</summary>

* **Points Output Pin** (default): Modified point data with optional attributes added based on the sampling results.

</details>

#### Configuration

<details>

<summary><strong>Data Matching</strong><br><em>If enabled, allows you to filter out which targets get sampled by which data.</em></summary>

When enabled, allows filtering of which path data is used for sampling each point. Useful when you have multiple sets of paths and want to control which ones are considered per point.

</details>

<details>

<summary><strong>Projection Details</strong><br><em>Projection settings.</em></summary>

Settings that define how the 3D point coordinates are projected onto a 2D plane for inclusion testing. This is important for accurate inside/outside detection.

</details>

<details>

<summary><strong>Process Inputs</strong><br><em>Process inputs.</em></summary>

Controls which types of paths are considered:

* **All**: All paths, whether open or closed.
* **Closed loops only**: Only closed-loop paths.
* **Open lines only**: Only open-line paths.

</details>

<details>

<summary><strong>Sample Method</strong><br><em>Sampling method.</em></summary>

Determines how points are sampled from paths:

* **Within Range**: Samples all paths within the specified range.
* **Best Candidate**: Samples only the closest path within range.

</details>

<details>

<summary><strong>Sort Direction</strong><br><em>Sort direction</em></summary>

When using "Best Candidate" sampling, this setting determines whether to sort by ascending (closest) or descending (farthest) distance.

</details>

<details>

<summary><strong>Always Sample When Inside</strong><br><em>If enabled, will always sample points if they lie inside, even if further away from the edges than the specified max range.</em></summary>

When enabled, a point that is inside a path will be sampled regardless of its distance from the path's edge. When disabled, only paths within the defined range are considered.

</details>

<details>

<summary><strong>Only Sample When Inside</strong><br><em>If enabled, will only sample paths if the point lies inside</em></summary>

When enabled, only paths that contain the point are sampled. If disabled, paths can be sampled even if the point is outside them.

</details>

<details>

<summary><strong>Inclusion Offset</strong><br><em>If non-zero, will apply an offset (inset) to the data used for inclusion testing.</em></summary>

Applies a distance-based inset to the path boundary for inclusion testing. A positive value creates an inner boundary, ensuring that only points inside this inset are considered inside the path.

</details>

<details>

<summary><strong>Distance Type</strong><br><em>Distance type.</em></summary>

Defines how distance is calculated:

* **Euclidian**: Straight-line distance.
* **Manhattan**: Sum of absolute differences in coordinates.

</details>

<details>

<summary><strong>Range Min Input</strong><br><em>Type of Range Min</em></summary>

Controls whether the minimum range is a constant value or an attribute from the point data.

</details>

<details>

<summary><strong>Range Min (Attr)</strong><br><em>Minimum target range to sample targets.</em></summary>

If `Range Min Input` is set to "Attribute", this selects the attribute used for minimum range values.

</details>

<details>

<summary><strong>Range Min</strong><br><em>Minimum target range to sample targets.</em></summary>

The constant value for the minimum sampling distance if `Range Min Input` is set to "Constant".

</details>

<details>

<summary><strong>Range Max Input</strong><br><em>Type of Range Min</em></summary>

Controls whether the maximum range is a constant value or an attribute from the point data.

</details>

<details>

<summary><strong>Range Max (Attr)</strong><br><em>Maximum target range to sample targets.</em></summary>

If `Range Max Input` is set to "Attribute", this selects the attribute used for maximum range values.

</details>

<details>

<summary><strong>Range Max</strong><br><em>Maximum target range to sample targets.</em></summary>

The constant value for the maximum sampling distance if `Range Max Input` is set to "Constant".

</details>

<details>

<summary><strong>Height Inclusion</strong><br><em>If the value is greater than 0, will do a rough vertical check as part of the projected inclusion. 0 is infinite.</em></summary>

If non-zero, adds a vertical tolerance for inclusion testing. A value of 0 means no vertical check is performed.

</details>

<details>

<summary><strong>Weight Method</strong><br><em>Weight method used for blending</em></summary>

Defines how weights are normalized:

* **Full Range**: Normalize using \[0..Max Value] range.
* **Effective Range**: Remap the input \[Min..Max] range to \[0..1].

</details>

<details>

<summary><strong>Use Local Curve</strong><br><em>Whether to use in-editor curve or an external asset.</em></summary>

When enabled, uses the local curve defined in "Weight Over Distance". When disabled, uses an external curve asset.

</details>

<details>

<summary><strong>Weight Over Distance</strong><br><em>Curve that balances weight over distance</em></summary>

The curve used to weight samples based on their distance from the point. This affects how strongly nearby paths influence the result.

</details>

<details>

<summary><strong>Output Mode</strong><br><em>If enabled, will only output paths that have at least sampled one target point</em></summary>

Controls which points are output:

* **All**: All input points are output.
* **Success Only**: Only points with at least one successful sample are output.
* **Split**: Outputs to two pins: one for success and one for failure.

</details>

<details>

<summary><strong>Write Success</strong><br><em>Write whether the sampling was sucessful or not to a boolean attribute.</em></summary>

When enabled, writes a boolean attribute indicating if the point had at least one successful sample.

</details>

<details>

<summary><strong>Success Attribute Name</strong><br><em>Name of the 'boolean' attribute to write sampling success to.</em></summary>

The name of the boolean attribute that stores whether the point was successfully sampled.

</details>

<details>

<summary><strong>Write Distance</strong><br><em>Write the sampled distance.</em></summary>

When enabled, writes a numeric attribute with the weighted distance from the point to the sampled path.

</details>

<details>

<summary><strong>Distance Attribute Name</strong><br><em>Name of the 'double' attribute to write sampled distance to.</em></summary>

The name of the numeric attribute that stores the weighted distance.

</details>

<details>

<summary><strong>Write Num Inside</strong><br><em>Write the inside/outside status of the point toward any sampled spline.</em></summary>

When enabled, writes an integer attribute indicating how many paths the point lies inside.

</details>

<details>

<summary><strong>NumInside Attribute Name</strong><br><em>Name of the 'int32' attribute to write the number of spline this point lies inside</em></summary>

The name of the integer attribute that stores the count of paths the point is inside.

</details>

<details>

<summary><strong>Only If Closed Path</strong><br><em>Only increment num inside count when comes from a bClosedLoop spline.</em></summary>

When enabled, only counts paths that are closed loops toward the NumInside value.

</details>

<details>

<summary><strong>Write Num Samples</strong><br><em>Write the sampled distance.</em></summary>

When enabled, writes an integer attribute indicating how many paths were sampled for this point.

</details>

<details>

<summary><strong>NumSamples Attribute Name</strong><br><em>Name of the 'int32' attribute to write the number of sampled neighbors to.</em></summary>

The name of the integer attribute that stores the count of sampled paths.

</details>

<details>

<summary><strong>Tag If Has Successes</strong><br><em>If enabled, add the specified tag to the output data if at least a single spline has been sampled.</em></summary>

When enabled, adds a tag to the output data if any path was successfully sampled for the point.

</details>

<details>

<summary><strong>Has Successes Tag</strong><br><em>If enabled, add the specified tag to the output data if at least a single spline has been sampled.</em></summary>

The name of the tag added when at least one path is successfully sampled.

</details>

<details>

<summary><strong>Tag If Has No Successes</strong><br><em>If enabled, add the specified tag to the output data if no spline was found within range.</em></summary>

When enabled, adds a tag to the output data if no paths were found within range for the point.

</details>

<details>

<summary><strong>Has No Successes Tag</strong><br><em>If enabled, add the specified tag to the output data if no spline was found within range.</em></summary>

The name of the tag added when no paths are found within range.

</details>

<details>

<summary><strong>Ignore Self</strong><br><em>/</em></summary>

When enabled, ignores self-referencing paths during sampling.

</details>

#### Usage Example

To place trees only inside a garden path:

1. Create a closed-loop path representing the garden boundary.
2. Add points to represent potential tree locations.
3. Connect both point and path data to this node.
4. Set `Only Sample When Inside` to true.
5. Configure `Range Max` to define how far from the path edge trees can be placed.
6. Enable `Write Num Inside` to track which points are inside the garden.

#### Notes

* This node is computationally intensive for large datasets. Consider using filtering or limiting the number of paths if performance is a concern.
* The inclusion test is based on 2D projection, so ensure your projection settings match your data's orientation.
* Using `Inclusion Offset` can help avoid sampling points that are very close to path edges.
