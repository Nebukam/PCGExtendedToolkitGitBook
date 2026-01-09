---
description: 'In editor :: PCGEx | Sample : Nearest Spline'
icon: circle
---

# Nearest Spline

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Find the closest transform on nearest polylines.

### Overview

This node finds the closest point along any polyline or spline within a specified distance range for each input point. It's useful for snapping points to curves, sampling curve data, or generating procedural placements along paths. The node supports multiple output attributes that describe the sampled location, distance, angle, and other properties.

{% hint style="info" %}
This node is designed to work with polylines and splines from input data. It will sample from all valid inputs within range, using weighting based on distance.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Points**: Input points to be sampled
* **Spline Data**: Polylines or splines to sample from

</details>

<details>

<summary>Outputs</summary>

* **Points**: Output points with additional attributes based on sampling results

</details>

### Properties Overview

Settings are organized into categories for sampling, weighting, outputs, and tagging.

***

#### Sampling Settings

Controls how the node samples polylines and what range to consider.

**Sample Inputs**

_Which types of input splines to sample from._

* **All**: Sample all input splines
* **Closed loops only**: Only sample closed loop splines
* **Open lines only**: Only sample open line splines

**Sampling Method**

_How to determine which points to sample._

* **Within Range**: Samples points within the defined range
* **Closest**: Only samples the closest spline, regardless of distance

**Spline Scales Ranges**

_When enabled, spline scale affects the sampling range._

* When enabled, the scale of input splines will be factored into the range calculations.

***

#### Sampling Range

Defines the minimum and maximum distance to consider when looking for splines.

**Range Min Input Type**

_How to define the minimum sampling distance._

* **Constant**: Use a fixed value
* **Attribute**: Read the value from an attribute on input points

**Range Min Attribute**

_The attribute to read the minimum range from, if using Attribute mode._

**Range Min Constant**

_The fixed minimum range value, if using Constant mode._

**Range Max Input Type**

_How to define the maximum sampling distance._

* **Constant**: Use a fixed value
* **Attribute**: Read the value from an attribute on input points

**Range Max Attribute**

_The attribute to read the maximum range from, if using Attribute mode._

**Range Max Constant**

_The fixed maximum range value, if using Constant mode._

***

#### Specific Alpha Sampling

When enabled, samples a specific point along each spline based on alpha values.

**Sample Specific Alpha**

_When enabled, samples a specific point along each spline._

* When enabled, the node will sample at a specific alpha value along each spline instead of just finding the closest point.

**Sample Alpha Input Type**

_How to define the alpha value for sampling._

* **Constant**: Use a fixed value
* **Attribute**: Read the value from an attribute on input points

**Sample Alpha Mode**

_How to interpret the alpha value._

* **Alpha**: Value between 0 and 1
* **Time**: Value between 0 and number of segments
* **Distance**: Distance along the spline

**Wrap Closed Loop Alpha**

_When enabled, wraps alpha values for closed loops._

* When enabled, alpha values that exceed the spline length will wrap around for closed loops.

**Sample Alpha Attribute**

_The attribute to read the alpha value from, if using Attribute mode._

**Sample Alpha Constant**

_The fixed alpha value, if using Constant mode._

***

#### Apply Sampling

Controls how the sampling results are applied directly to the input points.

**Apply Sampling**

_Whether and how to apply sampled result directly to input points._

* When enabled, the node will modify the input point's transform based on the sampling results.

***

#### Weighting Settings

Controls how distances are weighted when multiple splines are found within range.

**Distance Method**

_How to measure distance from points to splines._

* **Center**: Use center point of the point
* **Sphere Bounds**: Use sphere bounds of the point
* **Box Bounds**: Use box bounds of the point

**Weight Method**

_How to weight samples based on distance._

* **Full Range**: All samples are weighted equally
* **Linear**: Weight decreases linearly with distance
* **Exponential**: Weight decreases exponentially with distance

**Use Local Curve**

_Whether to use an in-editor curve or external asset for weighting._

* When enabled, uses the local weight over distance curve.
* When disabled, uses an external curve asset.

**Weight Over Distance Curve**

_The curve that balances weight over distance._

* If using local curve, this is the in-editor curve.
* If using external asset, this is a reference to a curve asset.

**Weight Curve Lookup**

_How to sample the weight curve._

* **Direct**: Direct sampling
* **Lookup**: Lookup table sampling

***

#### Output Settings

Controls which attributes are written to output points.

**Write Success**

_When enabled, writes whether sampling was successful._

* When enabled, adds a boolean attribute indicating if sampling succeeded.

**Success Attribute Name**

_Name of the boolean attribute to write success to._

**Write Transform**

_When enabled, writes the sampled transform._

* When enabled, adds a transform attribute with the sampled position and orientation.

**Transform Attribute Name**

_Name of the transform attribute to write to._

**Write LookAt Transform**

_When enabled, writes a look-at transform._

* When enabled, adds a transform attribute that points from the input point toward the sampled location.

**LookAt Axis Align**

_The axis to align the look-at vector to._

* **Forward**: Forward (X+)
* **Backward**: Backward (X-)
* **Right**: Right (Y+)
* **Left**: Left (Y-)
* **Up**: Up (Z+)
* **Down**: Down (Z-)

**LookAt Up Selection**

_How to determine the up vector for look-at._

* **Source**: Use an attribute from input points
* **Target**: Use a specific axis on the target spline
* **Constant**: Use a constant vector

**LookAt Up Source Attribute**

_The attribute to use as up vector, if using Source mode._

**LookAt Up Axis**

_The axis to use as up vector, if using Target mode._

**LookAt Up Constant Vector**

_The constant vector to use as up vector, if using Constant mode._

**Write Distance**

_When enabled, writes the sampled distance._

* When enabled, adds a double attribute with the distance from point to spline.

**Distance Attribute Name**

_Name of the distance attribute to write to._

**Output Normalized Distance**

_When enabled, outputs normalized distance._

* When enabled, the distance is normalized between 0 and 1 based on range.

**Output OneMinus Distance**

_When enabled, outputs one minus the normalized distance._

* When enabled, subtracts the normalized distance from 1.

**Distance Scale**

_Scale factor applied to the distance output._

* Allows inverting the distance using -1.

**Write Signed Distance**

_When enabled, writes the signed distance._

* When enabled, adds a double attribute with the signed distance (positive or negative).

**Signed Distance Attribute Name**

_Name of the signed distance attribute to write to._

**Sign Axis**

_The axis to use for calculating the sign._

* **Forward**: Forward (X+)
* **Backward**: Backward (X-)
* **Right**: Right (Y+)
* **Left**: Left (Y-)
* **Up**: Up (Z+)
* **Down**: Down (Z-)

**Only Sign If Closed**

_When enabled, only signs the distance if sampled spline is closed._

* When enabled, the signed distance is only calculated for closed splines.

**Signed Distance Scale**

_Scale factor applied to the signed distance output._

* Allows inverting the signed distance using -1.

**Write Component Wise Distance**

_When enabled, writes component-wise distances._

* When enabled, adds a vector attribute with distances along each axis.

**Component Wise Distance Attribute Name**

_Name of the component-wise distance attribute to write to._

**Absolute Component Wise Distance**

_When enabled, outputs absolute values for component-wise distances._

* When enabled, all component-wise distances are positive.

**Write Angle**

_When enabled, writes the angle between point and spline._

* When enabled, adds a double attribute with the angle.

**Angle Attribute Name**

_Name of the angle attribute to write to._

**Angle Axis**

_The axis to use for calculating the angle._

* **Forward**: Forward (X+)
* **Backward**: Backward (X-)
* **Right**: Right (Y+)
* **Left**: Left (Y-)
* **Up**: Up (Z+)
* **Down**: Down (Z-)

**Angle Range**

_The unit/range to output the angle in._

* **Radians (0..+PI)**: 0 to PI radians
* **Radians (-PI..+PI)**: -PI to PI radians
* **Radians (0..+TAU)**: 0 to 2\*PI radians
* **Degrees (0..+180)**: 0 to 180 degrees
* **Degrees (-180..+180)**: -180 to 180 degrees
* **Degrees (0..+360)**: 0 to 360 degrees
* **Normalized Half (0..180 -> 0..1)**: Normalized 0 to 180 degrees to 0 to 1
* **Normalized (0..+360 -> 0..1)**: Normalized 0 to 360 degrees to 0 to 1
* **Inv. Normalized Half (0..180 -> 1..0)**: Inverted normalized 0 to 180 degrees to 1 to 0
* **Inv. Normalized (0..+360 -> 1..0)**: Inverted normalized 0 to 360 degrees to 1 to 0

**Write Time**

_When enabled, writes the spline time._

* When enabled, adds a double attribute with the time along the spline.

**Time Attribute Name**

_Name of the time attribute to write to._

**Write Arrive Tangent**

_When enabled, writes the arrive tangent._

* When enabled, adds a vector attribute with the tangent at the sampling point.

**Arrive Tangent Attribute Name**

_Name of the arrive tangent attribute to write to._

**Write Leave Tangent**

_When enabled, writes the leave tangent._

* When enabled, adds a vector attribute with the tangent at the sampling point.

**Leave Tangent Attribute Name**

_Name of the leave tangent attribute to write to._

**Write Num Inside**

_When enabled, writes the number of splines this point lies inside._

* When enabled, adds an integer attribute with the count of closed splines this point is inside.

**Num Inside Attribute Name**

_Name of the num inside attribute to write to._

**Only Increment If Closed**

_When enabled, only counts closed splines for num inside._

* When enabled, only closed splines contribute to the num inside count.

**Write Num Samples**

_When enabled, writes the number of samples._

* When enabled, adds an integer attribute with the count of valid samples.

**Num Samples Attribute Name**

_Name of the num samples attribute to write to._

**Write Closed Loop**

_When enabled, writes whether sampled spline is closed._

* When enabled, adds a boolean attribute indicating if the sampled spline was closed.

**Closed Loop Attribute Name**

_Name of the closed loop attribute to write to._

**Write Total Weight**

_When enabled, writes the total weight computed for that point._

* When enabled, adds a double attribute with the total weight from all samples.

**Total Weight Attribute Name**

_Name of the total weight attribute to write to._

**Write Depth**

_When enabled, writes the sampled depth._

* When enabled, adds a double attribute with the depth value.

**Depth Attribute Name**

_Name of the depth attribute to write to._

**Depth Range**

_The range used for calculating depth._

* Defines how far to consider when computing depth values.

**Invert Depth**

_When enabled, inverts the depth output._

* When enabled, the depth values are inverted.

**Depth Mode**

_How to compute depth from multiple samples._

* **Min**: Use minimum depth value
* **Max**: Use maximum depth value
* **Average**: Use average of all depths

***

#### Tagging Settings

Controls how points are tagged based on sampling results.

**Tag If Has Successes**

_When enabled, adds a tag if at least one spline was sampled._

* When enabled, adds a tag to output points that successfully sampled at least one spline.

**Has Successes Tag**

_Name of the tag to add when sampling succeeds._

**Tag If Has No Successes**

_When enabled, adds a tag if no spline was found within range._

* When enabled, adds a tag to output points that failed to sample any splines.

**Has No Successes Tag**

_Name of the tag to add when sampling fails._

***

#### Additional Settings

Controls how filtered points are handled and performance optimizations.

**Process Filtered Out As Fails**

_When enabled, treats filtered out points as failures._

* When enabled, points that fail filters will be marked as failed samples.
* When disabled, filtered points are skipped entirely.

**Prune Failed Samples**

_When enabled, removes points that failed to sample._

* When enabled, points that failed to sample anything are removed from the output.

**Use Octree**

_When enabled, uses spatial partitioning for performance._

* When enabled, uses an octree to optimize spatial lookups.
* When disabled, performs brute-force search.
