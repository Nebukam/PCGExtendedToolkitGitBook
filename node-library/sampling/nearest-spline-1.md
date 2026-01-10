---
description: 'In editor :: PCGEx | Sample : Nearest Path'
icon: circle
---

# Nearest Path

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Sample the nearest paths and extract various metrics like distance, transform, angle, and more.

#### How It Works

The **Sample : Nearest Path** node finds the closest paths to each input point and samples them based on configurable settings. It's useful for aligning points with nearby curves or splines, such as placing objects along roads, rivers, or other linear features in a procedural world.

For each input point, the node first projects it onto a 2D plane using specified projection settings. Then it filters target paths based on whether they are open lines or closed loops. It checks if the projected point is within the defined minimum and maximum range from each path's edge. If inclusion testing is enabled, it also verifies whether the point lies inside the path.

Depending on the sampling method selected, the node either samples all paths within range or picks just the closest one. It then samples the selected path(s) at a specific alpha value, handling closed loops with optional wrapping of alpha values. The results are blended together using weighting methods, and the final data is written to attributes or applied directly to the points.

#### Configuration

<details>

<summary><strong>Data Matching</strong><br><em>If enabled, allows you to filter out which targets get sampled by which data.</em></summary>

When enabled, you can define how input points map to target paths for sampling. This is useful when you have multiple sets of paths and want to control which point set samples from which path set.

</details>

<details>

<summary><strong>Projection Details</strong><br><em>Projection settings.</em></summary>

Settings to project the 3D points onto a 2D plane for distance calculations. This is important for accurate nearest-path finding in planar space.

**Values**:

* **XY Plane**: Project onto the XY plane.
* **XZ Plane**: Project onto the XZ plane.
* **YZ Plane**: Project onto the YZ plane.
* **Custom Normal**: Use a custom normal vector for projection.

</details>

<details>

<summary><strong>Sample Inputs</strong><br><em>Sample inputs.</em></summary>

Controls which types of paths are considered for sampling.

**Values**:

* **All**: Sample all input paths.
* **Closed loops only**: Only sample closed-loop paths (e.g., circles).
* **Open lines only**: Only sample open-line paths (e.g., straight lines).

</details>

<details>

<summary><strong>Sample Method</strong><br><em>Sampling method.</em></summary>

Determines how many paths to sample per point and how to select them.

**Values**:

* **Within Range**: Sample all paths within the specified range.
* **Best Candidate**: Sample only the closest path within range, sorted by distance.

</details>

<details>

<summary><strong>Sort Direction</strong><br><em>Sort direction</em></summary>

When `SampleMethod` is set to `Best Candidate`, this controls whether the closest or farthest path (within range) is selected.

**Values**:

* **Ascending**: Selects the closest path.
* **Descending**: Selects the farthest path.

</details>

<details>

<summary><strong>Always Sample When Inside</strong><br><em>If enabled, will always sample paths if the point lies inside, even if further away from the edges than the specified max range.</em></summary>

When enabled, points that are inside a path (based on inclusion testing) will be sampled even if they exceed the `RangeMax` distance to the path's edge.

</details>

<details>

<summary><strong>Only Sample When Inside</strong><br><em>If enabled, will only sample paths if the point lies inside</em></summary>

When enabled, only points that pass the inclusion test (inside a path) are sampled. This overrides the range settings.

</details>

<details>

<summary><strong>Inclusion Offset</strong><br><em>If non-zero, will apply an offset (inset) to the data used for inclusion testing.</em></summary>

A value added or subtracted from the path boundaries during inclusion testing. Positive values inset the path, negative values outset it.

</details>

<details>

<summary><strong>Range Min Input</strong><br><em>Type of Range Min</em></summary>

Controls how the minimum sampling range is defined.

**Values**:

* **Constant**: Use a fixed value.
* **Attribute**: Read from an attribute on the input points.

</details>

<details>

<summary><strong>Range Min</strong><br><em>Minimum target range to sample targets.</em></summary>

The minimum distance from a path's edge for a point to be considered for sampling. Only used when `RangeMinInput` is set to `Constant`.

</details>

<details>

<summary><strong>Range Max Input</strong><br><em>Type of Range Min</em></summary>

Controls how the maximum sampling range is defined.

**Values**:

* **Constant**: Use a fixed value.
* **Attribute**: Read from an attribute on the input points.

</details>

<details>

<summary><strong>Range Max</strong><br><em>Maximum target range to sample targets.</em></summary>

The maximum distance from a path's edge for a point to be considered for sampling. Only used when `RangeMaxInput` is set to `Constant`.

</details>

<details>

<summary><strong>Height Inclusion</strong><br><em>If the value is greater than 0, will do a rough vertical check as part of the projected inclusion. 0 is infinite.</em></summary>

A vertical tolerance for inclusion testing. If set to a positive value, points must also be within this vertical distance from the path's plane to be considered inside.

</details>

<details>

<summary><strong>Sample Specific Alpha</strong><br><em>Whether spline should be sampled at a specific alpha</em></summary>

When enabled, allows you to specify a custom alpha value for sampling instead of using the default (e.g., closest point on path).

</details>

<details>

<summary><strong>Sample Alpha Input</strong><br><em>Where to read the sampling alpha from.</em></summary>

Controls how the alpha value is determined for sampling.

**Values**:

* **Constant**: Use a fixed constant value.
* **Attribute**: Read from an attribute on the input points.

</details>

<details>

<summary><strong>Sample Alpha Mode</strong><br><em>How to interpret the sample alpha value.</em></summary>

Defines how the alpha value is interpreted when sampling.

**Values**:

* **Alpha**: Value between 0 and 1.
* **Time**: Value representing time along the path (0 to number of segments).
* **Distance**: Distance along the path in world units.

</details>

<details>

<summary><strong>Wrap Closed Loops</strong><br><em>Whether to wrap out of bounds value on closed loops.</em></summary>

When sampling a closed loop with an alpha outside \[0,1], this setting determines if the value wraps around (e.g., 1.5 becomes 0.5).

</details>

<details>

<summary><strong>Sample Alpha Constant</strong><br><em>Constant sample alpha.</em></summary>

The fixed alpha value used for sampling when `SampleAlphaInput` is set to `Constant`.

</details>

<details>

<summary><strong>Apply Sampling</strong><br><em>Whether and how to apply sampled result directly (not mutually exclusive with output)</em></summary>

Controls whether the sampled transform is applied directly to the input point's location, rotation, or scale.

</details>

<details>

<summary><strong>Distance Settings</strong><br><em>Distance method to be used for source points.</em></summary>

How distance is calculated between points and paths for inclusion and weighting.

**Values**:

* **Center**: Distance from the point's center.
* **Closest Point**: Distance to the closest point on the path.
* **Edge**: Distance to the edge of the path (if applicable).

</details>

<details>

<summary><strong>Weight Method</strong><br><em>Weight method used for blending</em></summary>

How weights are calculated for blending multiple samples.

**Values**:

* **Full Range**: Uniform weight across all samples.
* **Inverse Distance**: Higher weight to closer samples.
* **Custom Curve**: Use a custom curve defined in `Weight Over Distance`.

</details>

<details>

<summary><strong>Weight From Original Transform</strong><br><em>If enabled, will preserve the original point transform as base for weighting. Otherwise, use transform identity.</em></summary>

When enabled, uses the original point's location/rotation for distance calculations in weighting. Otherwise, assumes an identity transform.

</details>

<details>

<summary><strong>Use Local Curve</strong><br><em>Whether to use in-editor curve or an external asset.</em></summary>

Controls whether to define the weight curve directly in the node (`Local`) or load it from a file (`External`).

</details>

<details>

<summary><strong>Weight Over Distance</strong><br><em>Curve that balances weight over distance</em></summary>

A curve defining how much weight each sample contributes based on its distance. Only used when `Use Local Curve` is enabled.

</details>

<details>

<summary><strong>Write Success</strong><br><em>Write whether the sampling was sucessful or not to a boolean attribute.</em></summary>

When enabled, writes a boolean attribute indicating if the point successfully sampled at least one path.

</details>

<details>

<summary><strong>Success Attribute Name</strong><br><em>Name of the 'boolean' attribute to write sampling success to.</em></summary>

The name of the boolean attribute that stores the success status.

</details>

<details>

<summary><strong>Write Transform</strong><br><em>Write the sampled transform.</em></summary>

When enabled, writes the blended or first sampled transform to an attribute.

</details>

<details>

<summary><strong>Transform Attribute Name</strong><br><em>Name of the 'transform' attribute to write sampled Transform to.</em></summary>

The name of the transform attribute that stores the sampled result.

</details>

<details>

<summary><strong>Write LookAt Transform</strong><br><em>Write the sampled transform.</em></summary>

When enabled, calculates and writes a look-at transform based on the sampled path direction.

</details>

<details>

<summary><strong>LookAt Attribute Name</strong><br><em>Name of the 'transform' attribute to write sampled Transform to.</em></summary>

The name of the transform attribute that stores the look-at result.

</details>

<details>

<summary><strong>Align Axis</strong><br><em>The axis to align transform the look at vector to.</em></summary>

Which axis of the look-at transform should point along the sampled path direction.

**Values**:

* **Forward**: Align the forward axis.
* **Backward**: Align the backward axis.
* **Right**: Align the right axis.
* **Left**: Align the left axis.
* **Up**: Align the up axis.
* **Down**: Align the down axis.

</details>

<details>

<summary><strong>Use Up From</strong><br><em>Up vector source.</em></summary>

Controls how the up vector is determined for the look-at transform.

**Values**:

* **Constant**: Use a fixed constant vector.
* **Source**: Use an attribute from the input points.
* **Target**: Use a specific axis of the sampled path.

</details>

<details>

<summary><strong>Up Vector Constant</strong><br><em>The constant to use as Up vector for the look at transform.</em></summary>

The fixed vector used as the up direction when `Use Up From` is set to `Constant`.

</details>

<details>

<summary><strong>Write Distance</strong><br><em>Write the sampled distance.</em></summary>

When enabled, writes the sampled distance to an attribute.

</details>

<details>

<summary><strong>Distance Attribute Name</strong><br><em>Name of the 'double' attribute to write sampled distance to.</em></summary>

The name of the double attribute that stores the distance.

</details>

<details>

<summary><strong>Normalized Distance</strong><br><em>Whether to output normalized distance or not</em></summary>

When enabled, normalizes the distance between 0 and 1 based on the range settings.

</details>

<details>

<summary><strong>OneMinus Distance</strong><br><em>Whether to do a OneMinus on the normalized distance value</em></summary>

When enabled, subtracts the normalized distance from 1 (inverts it).

</details>

<details>

<summary><strong>Distance Scale</strong><br><em>Scale factor applied to the distance output; allows to invert it using -1</em></summary>

A multiplier applied to the final distance value. Use -1 to invert the direction.

</details>

<details>

<summary><strong>Write Signed Distance</strong><br><em>Write the sampled Signed distance.</em></summary>

When enabled, writes a signed distance indicating whether the point is inside or outside the path.

</details>

<details>

<summary><strong>Signed Distance Attribute Name</strong><br><em>Name of the 'double' attribute to write sampled Signed distance to.</em></summary>

The name of the double attribute that stores the signed distance.

</details>

<details>

<summary><strong>Sign Axis</strong><br><em>Axis to use to calculate the distance' sign</em></summary>

Which axis is used to determine the sign of the distance (positive if pointing in the same direction as the axis).

**Values**:

* **Forward**: Use X-axis.
* **Backward**: Use -X-axis.
* **Right**: Use Y-axis.
* **Left**: Use -Y-axis.
* **Up**: Use Z-axis.
* **Down**: Use -Z-axis.

</details>

<details>

<summary><strong>Only If Closed Path</strong><br><em>Only sign the distance if at least one sampled spline is a bClosedLoop spline.</em></summary>

When enabled, only calculates a signed distance if at least one of the sampled paths is closed.

</details>

<details>

<summary><strong>Signed Distance Scale</strong><br><em>Scale factor applied to the signed distance output; allows to invert it using -1</em></summary>

A multiplier applied to the final signed distance value. Use -1 to invert the direction.

</details>

<details>

<summary><strong>Write Component Wise Distance</strong><br><em>Write the sampled component-wise distance.</em></summary>

When enabled, writes the distance broken down into X, Y, Z components.

</details>

<details>

<summary><strong>Component Wise Distance Attribute Name</strong><br><em>Name of the 'FVector' attribute to write component-wise distance to.</em></summary>

The name of the FVector attribute that stores the component-wise distance.

</details>

<details>

<summary><strong>Absolute Component Wise Distance</strong><br><em>Whether to output absolute or signed component wise distances</em></summary>

When enabled, outputs only the magnitude of each component. Otherwise, includes sign information.

</details>

<details>

<summary><strong>Write Angle</strong><br><em>Write the sampled angle.</em></summary>

When enabled, writes the angle between the point and the path's direction at the sample point.

</details>

<details>

<summary><strong>Angle Attribute Name</strong><br><em>Name of the 'double' attribute to write sampled Signed distance to.</em></summary>

The name of the double attribute that stores the angle.

</details>

<details>

<summary><strong>Angle Axis</strong><br><em>Axis to use to calculate the angle</em></summary>

Which axis is used as a reference for calculating the angle.

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

The unit used for the angle output.

**Values**:

* **Radians (0..+PI)**: 0 to PI radians.
* **Radians (-PI..+PI)**: -PI to +PI radians.
* **Radians (0..+TAU)**: 0 to 2\*PI radians.
* **Degrees (0..+180)**: 0 to 180 degrees.
* **Degrees (-180..+180)**: -180 to +180 degrees.
* **Degrees (0..+360)**: 0 to 360 degrees.
* **Normalized Half (0..180 -> 0..1)**: Normalized from 0 to 180 degrees to 0 to 1.
* **Normalized (0..+360 -> 0..1)**: Normalized from 0 to 360 degrees to 0 to 1.
* **Inv. Normalized Half (0..180 -> 1..0)**: Inverted normalized from 0 to 180 degrees to 1 to 0.
* **Inv. Normalized (0..+360 -> 1..0)**: Inverted normalized from 0 to 360 degrees to 1 to 0.

</details>

<details>

<summary><strong>Write Time</strong><br><em>Write the sampled time (spline space).</em></summary>

When enabled, writes the time along the path where the sample occurred.

</details>

<details>

<summary><strong>Time Attribute Name</strong><br><em>Name of the 'double' attribute to write sampled spline Time to.</em></summary>

The name of the double attribute that stores the time value.

</details>

<details>

<summary><strong>Write Segment Time</strong><br><em>Write the sampled time (spline space).</em></summary>

When enabled, writes the time within the specific segment of the path where the sample occurred.

</details>

<details>

<summary><strong>Segment Time Attribute Name</strong><br><em>Name of the 'double' attribute to write sampled spline Time to.</em></summary>

The name of the double attribute that stores the segment time value.

</details>

<details>

<summary><strong>Write Num Inside</strong><br><em>Write the inside/outside status of the point toward any sampled spline.</em></summary>

When enabled, writes a count of how many paths the point lies inside.

</details>

<details>

<summary><strong>Num Inside Attribute Name</strong><br><em>Name of the 'int32' attribute to write the number of spline this point lies inside</em></summary>

The name of the int32 attribute that stores the count of inside paths.

</details>

<details>

<summary><strong>Only If Closed Spline</strong><br><em>Only increment num inside count when comes from a bClosedLoop spline.</em></summary>

When enabled, only counts paths that are closed loops (e.g., circles) toward the inside count.

</details>

<details>

<summary><strong>Write Num Samples</strong><br><em>Write the sampled distance.</em></summary>

When enabled, writes how many paths were successfully sampled for each point.

</details>

<details>

<summary><strong>Num Samples Attribute Name</strong><br><em>Name of the 'int32' attribute to write the number of sampled neighbors to.</em></summary>

The name of the int32 attribute that stores the count of samples.

</details>

<details>

<summary><strong>Write Closed Loop</strong><br><em>Write the whether the sampled spline is closed or not.</em></summary>

When enabled, writes a boolean indicating if the sampled path was closed (looped).

</details>

<details>

<summary><strong>Closed Loop Attribute Name</strong><br><em>Name of the 'bool' attribute to write whether a closed spline was sampled or not.</em></summary>

The name of the bool attribute that stores the closed loop status.

</details>

<details>

<summary><strong>Tag If Has Successes</strong><br><em>If enabled, add the specified tag to the output data if at least a single spline has been sampled.</em></summary>

When enabled, adds a tag to the output points if they successfully sampled any paths.

</details>

<details>

<summary><strong>Has Successes Tag</strong><br><em>If enabled, add the specified tag to the output data if at least a single spline has been sampled.</em></summary>

The name of the tag added when successful samples are found.

</details>

<details>

<summary><strong>Tag If Has No Successes</strong><br><em>If enabled, add the specified tag to the output data if no spline was found within range.</em></summary>

When enabled, adds a tag to the output points if they failed to sample any paths.

</details>

<details>

<summary><strong>Has No Successes Tag</strong><br><em>If enabled, add the specified tag to the output data if no spline was found within range.</em></summary>

The name of the tag added when no samples are found.

</details>
