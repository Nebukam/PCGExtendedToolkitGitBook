---
description: 'In editor :: PCGEx | Sample : Nearest Spline'
icon: circle
---

# Nearest Spline

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Find the closest transform on nearest polylines.

#### Overview

This node samples transforms from nearby spline data, using the closest point along each spline to determine where to sample. It's useful for placing objects along splines or aligning them with spline geometry in a procedural way.

It evaluates the distance from each input point to all available spline data and finds the nearest valid sample within a specified range. The sampled result can be used to position, orient, or scale objects based on spline properties.

This node is ideal for scenarios like placing trees along paths, aligning buildings to roads, or generating procedural layouts that follow spline-based structures.

{% hint style="info" %}
Connects to **Points** processing pins. Subnodes:

* Point Filters (SourcePointFilters)
* Weight Over Distance Curve
* Apply Sampling
{% endhint %}

#### How It Works

This node performs the following steps:

1. **Spatial Query**: For each input point, it identifies nearby spline data using spatial partitioning (octree) to optimize performance.
2. **Distance Calculation**: It calculates the distance from each point to all candidate splines.
3. **Range Filtering**: Only considers splines that are within the specified minimum and maximum range.
4. **Sampling Selection**: For each valid spline, it determines a sample point along the spline using either:
   * A fixed alpha value (0-1), or
   * An alpha derived from time or distance along the spline
5. **Weighted Blending**: If multiple splines are found within range, their samples are blended based on distance weights.
6. **Output Generation**: The final sampled transform and associated values (distance, angle, etc.) are written to attributes as specified.

The node supports various output types including position, rotation, tangent vectors, and additional metrics like signed distances or depth values.

<details>

<summary>Inputs</summary>

* Points: Input points to sample from.
* Splines: Spline data to sample transforms from.

</details>

<details>

<summary>Outputs</summary>

* Points: Output points with sampled attributes added based on configuration.

</details>

#### Configuration

<details>

<summary><strong>SampleInputs</strong><br><em>Sample inputs.</em></summary>

Controls which spline data to sample from.

**Values**:

* **All**: Sample all input splines.
* **ClosedLoopOnly**: Only sample closed-loop splines.
* **OpenSplineOnly**: Only sample open-line splines.

</details>

<details>

<summary><strong>SampleMethod</strong><br><em>Sampling method.</em></summary>

Controls how the sampling is performed.

**Values**:

* **WithinRange**: Sample within the specified range.
* **ClosestOnly**: Sample only the closest spline.

</details>

<details>

<summary><strong>bSplineScalesRanges</strong><br><em>If enabled, spline scale affect range.</em></summary>

When enabled, the scale of each spline affects how far it can be sampled from. A larger scale increases the effective sampling range.

</details>

<details>

<summary><strong>RangeMinInput</strong><br><em>Type of Range Min</em></summary>

Controls whether the minimum range is a constant or taken from an attribute.

**Values**:

* **Constant**: Use the constant value.
* **Attribute**: Read the value from an attribute.

</details>

<details>

<summary><strong>RangeMin</strong><br><em>Minimum target range to sample targets.</em></summary>

The minimum distance from each point to consider splines for sampling. Only used when RangeMinInput is set to Constant.

</details>

<details>

<summary><strong>RangeMaxInput</strong><br><em>Type of Range Min</em></summary>

Controls whether the maximum range is a constant or taken from an attribute.

**Values**:

* **Constant**: Use the constant value.
* **Attribute**: Read the value from an attribute.

</details>

<details>

<summary><strong>RangeMax</strong><br><em>Maximum target range to sample targets.</em></summary>

The maximum distance from each point to consider splines for sampling. Only used when RangeMaxInput is set to Constant.

</details>

<details>

<summary><strong>bSampleSpecificAlpha</strong><br><em>Whether spline should be sampled at a specific alpha</em></summary>

When enabled, the node samples at a specific alpha value along each spline instead of using the closest point.

</details>

<details>

<summary><strong>SampleAlphaInput</strong><br><em>Where to read the sampling alpha from.</em></summary>

Controls whether the alpha value is constant or taken from an attribute.

**Values**:

* **Constant**: Use the constant value.
* **Attribute**: Read the value from an attribute.

</details>

<details>

<summary><strong>SampleAlphaMode</strong><br><em>How to interpret the sample alpha value.</em></summary>

Controls how the alpha value is interpreted when sampling.

**Values**:

* **Alpha**: Alpha value between 0 and 1.
* **Time**: Time value where N is the number of segments.
* **Distance**: Distance along the spline to sample at.

</details>

<details>

<summary><strong>bWrapClosedLoopAlpha</strong><br><em>Whether to wrap out of bounds value on closed loops.</em></summary>

When enabled, alpha values that go beyond a spline's length are wrapped around for closed loops.

</details>

<details>

<summary><strong>SampleAlphaConstant</strong><br><em>Constant sample alpha.</em></summary>

The constant alpha value to use when SampleAlphaInput is set to Constant.

</details>

<details>

<summary><strong>ApplySampling</strong><br><em>Whether and how to apply sampled result directly (not mutually exclusive with output)</em></summary>

Controls whether the sampled transform is applied directly to the point's location or rotation. This can be used to instantly align points with splines.

</details>

<details>

<summary><strong>DistanceSettings</strong><br><em>Distance method to be used for source points.</em></summary>

The method used to calculate distance from input points to splines.

**Values**:

* **Center**: Use the center point of each spline.
* **ClosestPoint**: Use the closest point on the spline to the input point.

</details>

<details>

<summary><strong>WeightMethod</strong><br><em>Weight method used for blending</em></summary>

Controls how weights are calculated when multiple splines are within range.

**Values**:

* **FullRange**: Full range weighting.
* **HalfRange**: Half range weighting.
* **CustomCurve**: Use a custom curve for weighting.

</details>

<details>

<summary><strong>bUseLocalCurve</strong><br><em>Whether to use in-editor curve or an external asset.</em></summary>

When enabled, uses the local curve defined in the node. When disabled, uses an external curve asset.

</details>

<details>

<summary><strong>LocalWeightOverDistance</strong><br><em>Weight Over Distance</em></summary>

The curve used to define how weight decreases with distance when bUseLocalCurve is enabled.

</details>

<details>

<summary><strong>WeightOverDistance</strong><br><em>Curve that balances weight over distance</em></summary>

The external curve asset used for weighting when bUseLocalCurve is disabled.

</details>

<details>

<summary><strong>bWriteSuccess</strong><br><em>Write whether the sampling was sucessful or not to a boolean attribute.</em></summary>

When enabled, writes a boolean value indicating if sampling was successful to an attribute.

</details>

<details>

<summary><strong>SuccessAttributeName</strong><br><em>Name of the 'boolean' attribute to write sampling success to.</em></summary>

The name of the boolean attribute to store the sampling success status.

</details>

<details>

<summary><strong>bWriteTransform</strong><br><em>Write the sampled transform.</em></summary>

When enabled, writes the sampled transform to an attribute.

</details>

<details>

<summary><strong>TransformAttributeName</strong><br><em>Name of the 'transform' attribute to write sampled Transform to.</em></summary>

The name of the transform attribute to store the sampled transform.

</details>

<details>

<summary><strong>bWriteLookAtTransform</strong><br><em>Write the sampled transform.</em></summary>

When enabled, writes a look-at transform based on the sampled spline direction.

</details>

<details>

<summary><strong>LookAtTransformAttributeName</strong><br><em>Name of the 'transform' attribute to write sampled Transform to.</em></summary>

The name of the transform attribute to store the look-at transform.

</details>

<details>

<summary><strong>LookAtAxisAlign</strong><br><em>The axis to align transform the look at vector to.</em></summary>

Controls which axis of the look-at transform is aligned with the spline direction.

**Values**:

* **Forward**: Align forward axis.
* **Backward**: Align backward axis.
* **Right**: Align right axis.
* **Left**: Align left axis.
* **Up**: Align up axis.
* **Down**: Align down axis.

</details>

<details>

<summary><strong>LookAtUpSelection</strong><br><em>Up vector source.</em></summary>

Controls where the up vector for the look-at transform comes from.

**Values**:

* **Constant**: Use a constant vector.
* **Source**: Use an attribute from the input point.
* **Target**: Use an axis from the target spline.

</details>

<details>

<summary><strong>LookAtUpConstant</strong><br><em>The constant to use as Up vector for the look at transform.</em></summary>

The constant vector used as the up vector when LookAtUpSelection is set to Constant.

</details>

<details>

<summary><strong>bWriteDistance</strong><br><em>Write the sampled distance.</em></summary>

When enabled, writes the distance from the point to the sampled spline to an attribute.

</details>

<details>

<summary><strong>DistanceAttributeName</strong><br><em>Name of the 'double' attribute to write sampled distance to.</em></summary>

The name of the double attribute to store the sampled distance.

</details>

<details>

<summary><strong>bOutputNormalizedDistance</strong><br><em>Whether to output normalized distance or not</em></summary>

When enabled, outputs a normalized distance between 0 and 1.

</details>

<details>

<summary><strong>bOutputOneMinusDistance</strong><br><em>Whether to do a OneMinus on the normalized distance value</em></summary>

When enabled, inverts the normalized distance (1 - distance).

</details>

<details>

<summary><strong>DistanceScale</strong><br><em>Scale factor applied to the distance output; allows to invert it using -1</em></summary>

A scale factor applied to the distance output. Use -1 to invert.

</details>

<details>

<summary><strong>bWriteSignedDistance</strong><br><em>Write the sampled Signed distance.</em></summary>

When enabled, writes a signed distance indicating whether the point is inside or outside the spline's area.

</details>

<details>

<summary><strong>SignedDistanceAttributeName</strong><br><em>Name of the 'double' attribute to write sampled Signed distance to.</em></summary>

The name of the double attribute to store the signed distance.

</details>

<details>

<summary><strong>SignAxis</strong><br><em>Axis to use to calculate the distance' sign</em></summary>

Controls which axis is used to determine the sign of the distance.

**Values**:

* **Forward**: Use forward axis.
* **Backward**: Use backward axis.
* **Right**: Use right axis.
* **Left**: Use left axis.
* **Up**: Use up axis.
* **Down**: Use down axis.

</details>

<details>

<summary><strong>bOnlySignIfClosed</strong><br><em>Only sign the distance if at least one sampled spline is a bClosedLoop spline.</em></summary>

When enabled, only signs the distance if at least one of the sampled splines is closed.

</details>

<details>

<summary><strong>SignedDistanceScale</strong><br><em>Scale factor applied to the signed distance output; allows to invert it using -1</em></summary>

A scale factor applied to the signed distance output. Use -1 to invert.

</details>

<details>

<summary><strong>bWriteComponentWiseDistance</strong><br><em>Write the sampled component-wise distance.</em></summary>

When enabled, writes a vector containing distances along each axis.

</details>

<details>

<summary><strong>ComponentWiseDistanceAttributeName</strong><br><em>Name of the 'FVector' attribute to write component-wise distance to.</em></summary>

The name of the FVector attribute to store the component-wise distance.

</details>

<details>

<summary><strong>bAbsoluteComponentWiseDistance</strong><br><em>Whether to output absolute or signed component wise distances</em></summary>

When enabled, outputs absolute values for component-wise distances.

</details>

<details>

<summary><strong>bWriteAngle</strong><br><em>Write the sampled angle.</em></summary>

When enabled, writes an angle value based on the sampled spline direction.

</details>

<details>

<summary><strong>AngleAttributeName</strong><br><em>Name of the 'double' attribute to write sampled Signed distance to.</em></summary>

The name of the double attribute to store the sampled angle.

</details>

<details>

<summary><strong>AngleAxis</strong><br><em>Axis to use to calculate the angle</em></summary>

Controls which axis is used for angle calculation.

**Values**:

* **Forward**: Use forward axis.
* **Backward**: Use backward axis.
* **Right**: Use right axis.
* **Left**: Use left axis.
* **Up**: Use up axis.
* **Down**: Use down axis.

</details>

<details>

<summary><strong>AngleRange</strong><br><em>Unit/range to output the angle to.</em></summary>

Controls how the angle is represented in the output.

**Values**:

* **URadians**: 0 to +PI radians.
* **PIRadians**: -PI to +PI radians.
* **TAURadians**: 0 to TAU radians.
* **UDegrees**: 0 to +180 degrees.
* **PIDegrees**: -180 to +180 degrees.
* **TAUDegrees**: 0 to +360 degrees.
* **NormalizedHalf**: 0 to 180 degrees mapped to 0 to 1.
* **Normalized**: 0 to 360 degrees mapped to 0 to 1.
* **InvertedNormalizedHalf**: 0 to 180 degrees mapped to 1 to 0.
* **InvertedNormalized**: 0 to 360 degrees mapped to 1 to 0.

</details>

<details>

<summary><strong>bWriteTime</strong><br><em>Write the sampled time (spline space).</em></summary>

When enabled, writes the time along the spline where sampling occurred.

</details>

<details>

<summary><strong>TimeAttributeName</strong><br><em>Name of the 'double' attribute to write sampled spline Time to.</em></summary>

The name of the double attribute to store the spline time.

</details>

<details>

<summary><strong>bWriteArriveTangent</strong><br><em>Arrive tangent</em></summary>

When enabled, writes the arrive tangent vector from the sampled spline.

</details>

<details>

<summary><strong>ArriveTangentAttributeName</strong><br><em>Arrive tangent</em></summary>

The name of the FVector attribute to store the arrive tangent.

</details>

<details>

<summary><strong>bWriteLeaveTangent</strong><br><em>Leave tangent</em></summary>

When enabled, writes the leave tangent vector from the sampled spline.

</details>

<details>

<summary><strong>LeaveTangentAttributeName</strong><br><em>Leave tangent</em></summary>

The name of the FVector attribute to store the leave tangent.

</details>

<details>

<summary><strong>bWriteNumInside</strong><br><em>Write the inside/outside status of the point toward any sampled spline.</em></summary>

When enabled, writes a count of how many closed splines the point lies inside.

</details>

<details>

<summary><strong>NumInsideAttributeName</strong><br><em>Name of the 'int32' attribute to write the number of spline this point lies inside</em></summary>

The name of the int32 attribute to store the count of inside splines.

</details>

<details>

<summary><strong>bOnlyIncrementInsideNumIfClosed</strong><br><em>Only increment num inside count when comes from a bClosedLoop spline.</em></summary>

When enabled, only increments the inside count if the sampled spline is closed.

</details>

<details>

<summary><strong>bWriteNumSamples</strong><br><em>Write the sampled distance.</em></summary>

When enabled, writes the number of splines that were sampled for each point.

</details>

<details>

<summary><strong>NumSamplesAttributeName</strong><br><em>Name of the 'int32' attribute to write the number of sampled neighbors to.</em></summary>

The name of the int32 attribute to store the number of samples.

</details>

<details>

<summary><strong>bWriteClosedLoop</strong><br><em>Write the whether the sampled spline is closed or not.</em></summary>

When enabled, writes a boolean indicating if the sampled spline was closed.

</details>

<details>

<summary><strong>ClosedLoopAttributeName</strong><br><em>Name of the 'bool' attribute to write whether a closed spline was sampled or not.</em></summary>

The name of the bool attribute to store the closed loop status.

</details>

<details>

<summary><strong>bWriteTotalWeight</strong><br><em>Write the whether the sampled spline is closed or not.</em></summary>

When enabled, writes the total weight computed for that point from all splines.

</details>

<details>

<summary><strong>TotalWeightAttributeName</strong><br><em>Name of the 'double' attribute to write the total weight computed for that point.</em></summary>

The name of the double attribute to store the total weight.

</details>

<details>

<summary><strong>bWriteDepth</strong><br><em>Write the sampled depth.</em></summary>

When enabled, writes a depth value based on the sampled spline.

</details>

<details>

<summary><strong>DepthAttributeName</strong><br><em>Name of the 'double' attribute to write sampled depth to.</em></summary>

The name of the double attribute to store the depth.

</details>

<details>

<summary><strong>DepthRange</strong><br><em>Depth range</em></summary>

Controls the maximum depth value used for calculations.

</details>

<details>

<summary><strong>bInvertDepth</strong><br><em>Inverts depth</em></summary>

When enabled, inverts the depth values.

</details>

<details>

<summary><strong>DepthMode</strong><br><em>Depth mode</em></summary>

Controls how depth is calculated from multiple splines.

**Values**:

* **Min**: Use minimum depth.
* **Max**: Use maximum depth.
* **Average**: Use average depth.

</details>

<details>

<summary><strong>bTagIfHasSuccesses</strong><br><em>If enabled, add the specified tag to the output data if at least a single spline has been sampled.</em></summary>

When enabled, adds a tag to the output data if any sampling was successful.

</details>

<details>

<summary><strong>HasSuccessesTag</strong><br><em>If enabled, add the specified tag to the output data if at least a single spline has been sampled.</em></summary>

The tag name to apply when sampling succeeds.

</details>

<details>

<summary><strong>bTagIfHasNoSuccesses</strong><br><em>If enabled, add the specified tag to the output data if no spline was found within range.</em></summary>

When enabled, adds a tag to the output data if no splines were found within range.

</details>

<details>

<summary><strong>HasNoSuccessesTag</strong><br><em>If enabled, add the specified tag to the output data if no spline was found within range.</em></summary>

The tag name to apply when sampling fails.

</details>

<details>

<summary><strong>bProcessFilteredOutAsFails</strong><br><em>If enabled, mark filtered out points as "failed". Otherwise, skip the processing altogether. Only uncheck this if you want to ensure existing attribute values are preserved.</em></summary>

When enabled, treats filtered-out points as failed samples instead of skipping them.

</details>

<details>

<summary><strong>bPruneFailedSamples</strong><br><em>If enabled, points that failed to sample anything will be pruned.</em></summary>

When enabled, removes points that failed to sample any spline from the output.

</details>

<details>

<summary><strong>bUseOctree</strong><br><em>Optimize spatial partitioning, but limit the "reach" of splines to their bounding box.</em></summary>

When enabled, uses an octree for faster spatial queries. When disabled, considers all splines regardless of proximity.

</details>

#### Usage Example

1. Create a set of splines representing paths or roads.
2. Add points that represent objects you want to place along those paths.
3. Connect the splines and points to this node.
4. Configure the range to control how far from each point the node will look for splines.
5. Enable outputs like Transform and Distance to position and orient your objects.
6. Use the LookAtTransform output to align objects with spline direction.

#### Notes

* The node can be computationally expensive if many splines are present or if sampling ranges are large.
* Using octree optimization (`bUseOctree`) improves performance when dealing with large numbers of splines.
* For best results, ensure that the input splines have appropriate scale and resolution for your use case.
* When using `bSampleSpecificAlpha`, consider how alpha values are interpreted based on the selected mode (Alpha, Time, or Distance).
