---
description: 'In editor :: PCGEx | Sample : Nearest Bounds'
icon: circle
---

# Nearest Bounds

Sample nearest target bounds.

**How It Works**

> AI-Generated, needs proofreading

* The node samples the nearest bounds of target objects based on specified settings.
* If "Data Matching" is enabled, the node filters which targets are sampled according to predefined data criteria.
* The "Sample Method" and its sub-setting "Sort direction" determine how potential targets are sorted before sampling the nearest one.
* The "Bounds Source" setting defines from where the bounds for comparison originate.
* The "Distance Type" specifies the metric used to compute distances between the source and target bounds.

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

The attribute to use for Up vector.

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

<summary><strong>├─ Normalize</strong> <code>bool</code></summary>

If enabled, output normalized distance instead of actual distance.

⚡ PCG Overridable

</details>

<details>

<summary><strong>│ └─ OneMinus</strong> <code>bool</code></summary>

Whether to output 1 - normalized distance instead of just normalized distance.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Scale</strong> <code>double</code></summary>

Scale factor applied to the distance output

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

Controls write angle.

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

Controls write num samples.

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

<summary><strong>Sample Method</strong> <code>PCGExBoundsSampleMethod</code></summary>

Sampling method.

**Values:**

* **All**: Process all overlapping bounds
* **Closest Bounds**: Picks & process the closest bounds only
* **Farthest Bounds**: Picks & process the farthest bounds only
* **Largest Bounds**
* **Smallest Bounds**
* **Best Candidate**: Picks the best candidate based on sorting rules.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Sort direction</strong> <code>PCGExSortDirection</code></summary>

Sort direction

⚡ PCG Overridable

</details>

<details>

<summary><strong>Bounds Source</strong> <code>PCGExPointBoundsSource</code></summary>

Source bounds.

</details>

<details>

<summary><strong>Distance Type</strong> <code>PCGExDistanceType</code></summary>

Distance type.

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

Controls has successes tag.

</details>

<details>

<summary><strong>Tag If Has No Successes</strong> <code>bool</code></summary>

Controls tag if has no successes.

</details>

<details>

<summary><strong>Has No Successes Tag</strong> <code>String</code></summary>

Controls has no successes tag.

</details>

**Weighting**

<details>

<summary><strong>Use Local Curve</strong> <code>bool</code></summary>

Whether to use in-editor curve or an external asset.

</details>

<details>

<summary><strong>Weight Remap</strong> <code>RuntimeFloatCurve</code></summary>

Curve that balances weight over distance

</details>

<details>

<summary><strong>Weight Remap</strong> <code>CurveFloat</code></summary>

Curve that balances weight over distance

⚡ PCG Overridable

</details>

<details>

<summary><strong>Weight Curve Lookup</strong> <code>PCGExCurveLookupDetails</code></summary>

Controls weight curve lookup.

📦 See: CurveLookup configuration

</details>

***

Source: `Source\PCGExElementsSampling\Public\Elements\PCGExSampleNearestBounds.h`
