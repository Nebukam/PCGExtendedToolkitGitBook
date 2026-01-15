---
description: 'In editor :: PCGEx | Sample : Nearest Spline'
icon: circle
---

# Nearest Spline

Find the closest transform on nearest polylines.

**How It Works**

> AI-Generated, needs proofreading

* The node identifies the closest transform on nearby polylines based on input samples.
* It uses a specified sampling method to determine which transforms are considered for proximity calculations.
* If enabled, spline scale ranges adjust the influence of the spline's scale on determining the range within which the nearest transform is sought.
* The minimum target range for sampling targets can be set through either an input or attribute setting.

#### Configuration

<details>

<summary><strong>Process Filtered Out As Fails</strong> <code>bool</code></summary>

If enabled, mark filtered out points as "failed". Otherwise, just skip the processing altogether. Only uncheck this if you want to ensure existing attribute values are preserved.

</details>

<details>

<summary><strong>Prune Failed Samples</strong> <code>bool</code></summary>

If enabled, points that failed to sample anything will be pruned.

</details>

<details>

<summary><strong>Use Octree</strong> <code>bool</code></summary>

Optimize spatial partitioning, but limit the "reach" of splines to their bounding box.

⚡ PCG Overridable

</details>

**Additional Outputs**

<details>

<summary><strong>Write Num Inside</strong> <code>bool</code></summary>

Write the inside/outside status of the point toward any sampled spline.

⚡ PCG Overridable

</details>

<details>

<summary><strong>NumInside</strong> <code>Name</code></summary>

Name of the 'int32' attribute to write the number of spline this point lies inside

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Only if Closed Spline</strong> <code>bool</code></summary>

Only increment num inside count when comes from a bClosedLoop spline.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Num Samples</strong> <code>bool</code></summary>

Write the sampled distance.

⚡ PCG Overridable

</details>

<details>

<summary><strong>NumSamples</strong> <code>Name</code></summary>

Name of the 'int32' attribute to write the number of sampled neighbors to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Closed Loop</strong> <code>bool</code></summary>

Write the whether the sampled spline is closed or not.

⚡ PCG Overridable

</details>

<details>

<summary><strong>ClosedLoop</strong> <code>Name</code></summary>

Name of the 'bool' attribute to write whether a closed spline was sampled or not.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Total Weight</strong> <code>bool</code></summary>

Write the whether the sampled spline is closed or not.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Total Weight</strong> <code>Name</code></summary>

Name of the 'double' attribute to write the total weight computed for that point.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Depth</strong> <code>bool</code></summary>

Write the sampled depth.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Depth</strong> <code>Name</code></summary>

Name of the 'double' attribute to write sampled depth to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Range</strong> <code>double</code></summary>

Depth range

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Invert</strong> <code>bool</code></summary>

Inverts depth

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Mode</strong> <code>PCGExSplineDepthMode</code></summary>

Depth mode

**Values:**

* **Min**: ...
* **Max**: ...
* **Average**: ...

⚡ PCG Overridable

</details>

**Outputs**

<details>

<summary><strong>Write Success</strong> <code>bool</code></summary>

Write whether the sampling was sucessful or not to a boolean attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Success</strong> <code>Name</code></summary>

Name of the 'boolean' attribute to write sampling success to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Transform</strong> <code>bool</code></summary>

Write the sampled transform.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Transform</strong> <code>Name</code></summary>

Name of the 'transform' attribute to write sampled Transform to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Look At Transform</strong> <code>bool</code></summary>

Write the sampled transform.

⚡ PCG Overridable

</details>

<details>

<summary><strong>LookAt</strong> <code>Name</code></summary>

Name of the 'transform' attribute to write sampled Transform to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Align</strong> <code>PCGExAxisAlign</code></summary>

The axis to align transform the look at vector to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Use Up from...</strong> <code>PCGExSampleSource</code></summary>

Up vector source.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Up Vector (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

The attribute or property on selected source to use as Up vector for the look at transform.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Up Vector (Axis)</strong> <code>PCGExAxis</code></summary>

The axis on the target to use as Up vector for the look at transform.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Up Vector</strong> <code>Vector</code></summary>

The constant to use as Up vector for the look at transform.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Distance</strong> <code>bool</code></summary>

Write the sampled distance.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Distance</strong> <code>Name</code></summary>

Name of the 'double' attribute to write sampled distance to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Normalized</strong> <code>bool</code></summary>

Whether to output normalized distance or not

⚡ PCG Overridable

</details>

<details>

<summary><strong>│ └─ OneMinus</strong> <code>bool</code></summary>

Whether to do a OneMinus on the normalized distance value

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Scale</strong> <code>double</code></summary>

Scale factor applied to the distance output; allows to easily invert it using -1

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Signed Distance</strong> <code>bool</code></summary>

Write the sampled Signed distance.

⚡ PCG Overridable

</details>

<details>

<summary><strong>SignedDistance</strong> <code>Name</code></summary>

Name of the 'double' attribute to write sampled Signed distance to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Axis</strong> <code>PCGExAxis</code></summary>

Axis to use to calculate the distance' sign

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Only if Closed Spline</strong> <code>bool</code></summary>

Only sign the distance if at least one sampled spline is a bClosedLoop spline.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Scale</strong> <code>double</code></summary>

Scale factor applied to the signed distance output; allows to easily invert it using -1

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Component Wise Distance</strong> <code>bool</code></summary>

Write the sampled component-wise distance.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Component Wise Distance</strong> <code>Name</code></summary>

Name of the 'FVector' attribute to write component-wise distance to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Absolute</strong> <code>bool</code></summary>

Whether to output absolute or signed component wise distances

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Angle</strong> <code>bool</code></summary>

Write the sampled angle.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Angle</strong> <code>Name</code></summary>

Name of the 'double' attribute to write sampled Signed distance to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Axis</strong> <code>PCGExAxis</code></summary>

Axis to use to calculate the angle

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Range</strong> <code>PCGExAngleRange</code></summary>

Unit/range to output the angle to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Time</strong> <code>bool</code></summary>

Write the sampled time (spline space).

⚡ PCG Overridable

</details>

<details>

<summary><strong>Time</strong> <code>Name</code></summary>

Name of the 'double' attribute to write sampled spline Time to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Arrive Tangent</strong> <code>bool</code></summary>

Controls write arrive tangent.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Arrive Tangent</strong> <code>Name</code></summary>

Arrive tangent

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Leave Tangent</strong> <code>bool</code></summary>

Controls write leave tangent.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Leave Tangent</strong> <code>Name</code></summary>

Leave tangent

⚡ PCG Overridable

</details>

**Sampling**

<details>

<summary><strong>Sample Inputs</strong> <code>PCGExSplineSamplingIncludeMode</code></summary>

Sample inputs.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Sample Method</strong> <code>PCGExSampleMethod</code></summary>

Sampling method.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Spline Scales Ranges</strong> <code>bool</code></summary>

If enabled, spline scale affect range.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Range Min Input</strong> <code>PCGExInputValueType</code></summary>

Type of Range Min

⚡ PCG Overridable

</details>

<details>

<summary><strong>Range Min (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Minimum target range to sample targets.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Range Min</strong> <code>double</code></summary>

Minimum target range to sample targets.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Range Max Input</strong> <code>PCGExInputValueType</code></summary>

Type of Range Min

⚡ PCG Overridable

</details>

<details>

<summary><strong>Range Max (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Maximum target range to sample targets.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Range Max</strong> <code>double</code></summary>

Maximum target range to sample targets.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Sample Specific Alpha</strong> <code>bool</code></summary>

Whether spline should be sampled at a specific alpha

⚡ PCG Overridable

</details>

<details>

<summary><strong>Sample Alpha Input</strong> <code>PCGExInputValueType</code></summary>

Where to read the sampling alpha from.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Mode</strong> <code>PCGExSplineSampleAlphaMode</code></summary>

How to interpret the sample alpha value.

**Values:**

* **Alpha**: 0 - 1 value
* **Time**: 0 - N value, where N is the number of segments
* **Distance**: Distance on the spline to sample value at

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Wrap Closed Loops</strong> <code>bool</code></summary>

Whether to wrap out of bounds value on closed loops.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Sample Alpha (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Per-point sample alpha -- Will be translated to `double` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Sample Alpha</strong> <code>double</code></summary>

Constant sample alpha.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Apply Sampling</strong> <code>PCGExApplySamplingDetails</code></summary>

Whether and how to apply sampled result directly (not mutually exclusive with output)

📦 See: ApplySampling configuration

</details>

**Tagging**

<details>

<summary><strong>Tag If Has Successes</strong> <code>bool</code></summary>

Controls tag if has successes.

</details>

<details>

<summary><strong>Has Successes Tag</strong> <code>String</code></summary>

If enabled, add the specified tag to the output data if at least a single spline has been sampled.

</details>

<details>

<summary><strong>Tag If Has No Successes</strong> <code>bool</code></summary>

Controls tag if has no successes.

</details>

<details>

<summary><strong>Has No Successes Tag</strong> <code>String</code></summary>

If enabled, add the specified tag to the output data if no spline was found within range.

</details>

**Weighting**

<details>

<summary><strong>Distance Settings</strong> <code>PCGExDistance</code></summary>

Distance method to be used for source points.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Weight Method</strong> <code>PCGExRangeType</code></summary>

Weight method used for blending

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Local Curve</strong> <code>bool</code></summary>

Whether to use in-editor curve or an external asset.

</details>

<details>

<summary><strong>Weight Over Distance</strong> <code>RuntimeFloatCurve</code></summary>

Curve that balances weight over distance

</details>

<details>

<summary><strong>Weight Over Distance</strong> <code>CurveFloat</code></summary>

Curve that balances weight over distance

⚡ PCG Overridable

</details>

<details>

<summary><strong>Weight Curve Lookup</strong> <code>PCGExCurveLookupDetails</code></summary>

Controls weight curve lookup.

📦 See: CurveLookup configuration

</details>

***

Source: `Source\PCGExElementsSampling\Public\Elements\PCGExSampleNearestSpline.h`
