---
description: 'In editor :: PCGEx | Path : Fuse Collinear'
icon: circle
---

# Fuse Collinear

FuseCollinear paths points.

**How It Works**

> AI-Generated, needs proofreading

* The FuseCollinear node processes paths by evaluating points based on an angular threshold to determine collinearity.
* If the Invert Threshold setting is enabled, the node fuses points that do not meet the collinearity criteria, effectively smoothing the path.
* When Fuse Collocated is enabled, the node treats points that are within a specified Fuse Distance as collinear, allowing for merging of overlapping points.
* The Do Blend parameter, when set to true, likely influences how the fused points are blended or averaged in the final output.

#### Configuration

<details>

<summary><strong>Threshold</strong> <code>double</code></summary>

Angular threshold for collinearity.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert Threshold</strong> <code>bool</code></summary>

Fuse points that are not collinear (Smooth-like).

⚡ PCG Overridable

</details>

<details>

<summary><strong>Fuse Collocated</strong> <code>bool</code></summary>

If enabled, will consider collocated points as collinear

⚡ PCG Overridable

</details>

<details>

<summary><strong>Fuse Distance</strong> <code>double</code></summary>

Distance used to consider point to be overlapping.

</details>

<details>

<summary><strong>Do Blend</strong> <code>bool</code></summary>

Controls do blend.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Blending Details</strong> <code>PCGExBlendingDetails</code></summary>

Defines how fused point properties and attributes are merged together into the first point of a collinear chain.

📦 See: Blending configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Union Details</strong> <code>PCGExUnionMetadataDetails</code></summary>

Controls union details.

📦 See: UnionMetadata configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Omit Invalid Paths From Output</strong> <code>bool</code></summary>

Distance used to consider point to be overlapping.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsPaths\Public\Elements\PCGExFuseCollinear.h`
