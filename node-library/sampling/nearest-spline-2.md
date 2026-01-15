---
description: 'In editor :: PCGEx | Sample : Inside Path'
icon: circle
---

# Inside Path

Sample the points inside the paths.

**How It Works**

> AI-Generated, needs proofreading

* The node samples points within defined paths based on specified settings.
* It allows for data matching to filter which targets are sampled by specific data inputs.
* Projection details and sample method settings influence how the sampling occurs inside the paths.
* Process Inputs setting determines how input data is handled before sampling takes place.

#### Configuration

<details>

<summary><strong>Data Matching</strong> <code>PCGExMatchingDetails</code></summary>

If enabled, allows you to filter out which targets get sampled by which data

📦 See: Matching configuration

</details>

<details>

<summary><strong>Projection Details</strong> <code>PCGExGeo2DProjectionDetails</code></summary>

Projection settings.

📦 See: Geo2DProjection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Ignore Self</strong> <code>bool</code></summary>

Controls ignore self.

</details>

**Outputs**

<details>

<summary><strong>Output Mode</strong> <code>PCGExSampleInsidePathOutput</code></summary>

If enabled, will only output paths that have at least sampled one target point

**Values:**

* **All**: Output all paths, whether they successfully sampled a target or not
* **Success only**: Output only paths that have sampled at least a single target point
* **Split**: Split between two pins

</details>

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

<summary><strong>└─ Only if Closed Path</strong> <code>bool</code></summary>

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

**Sampling**

<details>

<summary><strong>Process Inputs</strong> <code>PCGExPathSamplingIncludeMode</code></summary>

Process inputs.

⚡ PCG Overridable

</details>

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

<summary><strong>Always Sample When Inside</strong> <code>bool</code></summary>

If enabled, will always sample points if they lie inside, even if further away from the edges than the specified max range.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Only Sample When Inside</strong> <code>bool</code></summary>

If enabled, will only sample paths if the point lies inside

⚡ PCG Overridable

</details>

<details>

<summary><strong>Inclusion Offset</strong> <code>double</code></summary>

If non-zero, will apply an offset (inset) to the data used for inclusion testing.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Distance Type</strong> <code>PCGExDistanceType</code></summary>

Distance type.

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

<summary><strong>Height Inclusion</strong> <code>double</code></summary>

If the value is greater than 0, will do a rough vertical check as part of the projected inclusion. 0 is infinite.

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

Source: `Source\PCGExElementsSampling\Public\Elements\PCGExSampleInsidePath.h`
