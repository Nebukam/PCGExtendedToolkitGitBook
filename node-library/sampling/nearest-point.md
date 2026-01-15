---
description: 'In editor :: PCGEx | Sample : Nearest Points'
icon: circle
---

# Nearest Point

Sample nearest target points.

**How It Works**

> AI-Generated, needs proofreading

* The node identifies and samples the nearest target points based on specified criteria.
* If Data Matching is enabled, the node filters which targets are sampled according to associated data.
* The Sample Method setting determines how sampling occurs, with an option to specify the sort direction for this method.
* Range Min Input and Range Min (Attr) define the minimum range or attribute value from which target points can be sampled.

#### Configuration

<details>

<summary><strong>Data Matching</strong> <code>PCGExMatchingDetails</code></summary>

If enabled, allows you to filter out which targets get sampled by which data

📦 See: Matching configuration

</details>

<details>

<summary><strong>Process Filtered Out As Fails</strong> <code>bool</code></summary>

If enabled, mark filtered out points as "failed". Otherwise, just skip the processing altogether. Only uncheck this if you want to ensure existing attribute values are preserved.

</details>

<details>

<summary><strong>Prune Failed Samples</strong> <code>bool</code></summary>

If enabled, points that failed to sample anything will be pruned.

</details>

<details>

<summary><strong>Ignore Self</strong> <code>bool</code></summary>

Controls ignore self.

</details>

**Blending**

<details>

<summary><strong>Blending Interface</strong> <code>PCGExBlendingInterface</code></summary>

How to blend data from sampled points

⚡ PCG Overridable

</details>

<details>

<summary><strong>Target Attributes</strong> <code>Map of FName, EPCGExBlendingType</code></summary>

Attributes to sample from the targets

⚡ PCG Overridable

</details>

<details>

<summary><strong>Blend Point Properties</strong> <code>bool</code></summary>

Write the sampled distance.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Point Properties Blending Settings</strong> <code>PCGExPropertiesBlendingDetails</code></summary>

The constant to use as Up vector for the look at transform.

📦 See: PropertiesBlending configuration

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

<summary><strong>Write Sampled Index</strong> <code>bool</code></summary>

Controls write sampled index.

⚡ PCG Overridable

</details>

<details>

<summary><strong>SampledIndex</strong> <code>Name</code></summary>

Name of the 'int32' attribute to write the sampled index to. Will use the closest index when sampling multiple points.

⚡ PCG Overridable

</details>

**Sampling**

<details>

<summary><strong>Sample Method</strong> <code>PCGExSampleMethod</code></summary>

Sampling method.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Sort direction</strong> <code>PCGExSortDirection</code></summary>

Sort direction

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

If enabled, add the specified tag to the output data if at least a single point has been sampled.

</details>

<details>

<summary><strong>Tag If Has No Successes</strong> <code>bool</code></summary>

Controls tag if has no successes.

</details>

<details>

<summary><strong>Has No Successes Tag</strong> <code>String</code></summary>

If enabled, add the specified tag to the output data if no points were sampled.

</details>

**Weighting**

<details>

<summary><strong>Distance Details</strong> <code>PCGExDistanceDetails</code></summary>

Distance method to be used for source & target points.

📦 See: Distance configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Weight Mode</strong> <code>PCGExSampleWeightMode</code></summary>

Which mode to use to compute weights.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Weight Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Weight attribute to read on targets.

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

Source: `Source\PCGExElementsSampling\Public\Elements\PCGExSampleNearestPoint.h`
