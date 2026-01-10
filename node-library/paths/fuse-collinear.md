---
description: 'In editor :: PCGEx | Path : Fuse Collinear'
icon: circle
---

# Fuse Collinear

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Fuse collinear points along paths to reduce complexity and smooth geometry.

#### How It Works

This node simplifies paths by identifying and merging points that are nearly aligned with their neighboring points. It evaluates the angle formed between three consecutive points in a path. If that angle is below a set threshold, the middle point is considered collinear and can be removed or merged with others.

When enabled, it also merges points that exist at exactly the same location. The node supports combining attributes from merged points into the first point of a group using different blending methods like averaging or weighted interpolation.

If a point is merged, it's removed from the path, and its properties are combined with those of the remaining point based on the selected blending settings. Paths that become invalid after merging (for example, having fewer than two points) can be excluded from the output.

#### Configuration

<details>

<summary><strong>Threshold</strong><br><em>Angular threshold for collinearity.</em></summary>

Controls how strict the collinearity check is. A lower value means more points will be considered collinear and removed. For example, a value of 5 degrees allows very tight angles to be fused, while 45 degrees lets much wider angles pass through.

</details>

<details>

<summary><strong>bInvertThreshold</strong><br><em>Fuse points that are not collinear (Smooth-like).</em></summary>

When enabled, the node fuses points that are **not** collinear instead of those that are. This creates a smoothing effect by removing sharp turns and keeping only the most significant directional changes.

</details>

<details>

<summary><strong>bFuseCollocated</strong><br><em>If enabled, will consider collocated points as collinear.</em></summary>

When enabled, points that are located at the exact same position (within a small tolerance) are treated as collinear and merged into one point.

</details>

<details>

<summary><strong>FuseDistance</strong><br><em>Distance used to consider point to be overlapping.</em></summary>

Defines how close two points must be to be considered overlapping when `bFuseCollocated` is enabled. Smaller values mean stricter matching, while larger values allow more tolerance.

</details>

<details>

<summary><strong>bDoBlend</strong><br><em>Enable blending of fused point properties.</em></summary>

When enabled, the node blends attributes from fused points into the first point of a chain using settings defined in **BlendingDetails** and **UnionDetails**.

</details>

<details>

<summary><strong>BlendingDetails</strong><br><em>Defines how fused point properties and attributes are merged together into the first point of a collinear chain.</em></summary>

Controls how values from multiple points are combined when they are fused. Options include averaging, summing, or using weighted interpolation.

</details>

<details>

<summary><strong>UnionDetails</strong><br><em>Metadata union settings for fused points.</em></summary>

Defines how metadata from fused points is merged into the first point of a chain. This includes which attributes are preserved and how they are combined.

</details>

<details>

<summary><strong>bOmitInvalidPathsFromOutput</strong><br><em>Omits paths that become invalid after fusion.</em></summary>

When enabled, paths that become invalid (for example, have fewer than two points after fusion) are excluded from the output entirely.

</details>
