---
description: 'In editor :: PCGEx | Fuse Points'
icon: circle
---

# Fuse Points

Fuse points based on distance.

**How It Works**

> AI-Generated, needs proofreading

* The Fuse Points node computes distances between all pairs of input points and fuses those that are closer to each other than a specified threshold defined in the Fuse Settings.
* When fusing points, the node merges their properties and attributes according to the Blending Details settings provided.
* If Preserve Order is enabled, the node maintains the original order of the input points as much as possible after fusion.
* The Carry Over Settings allow for specific meta filters to be applied, determining which point's metadata is retained in case of a fuse operation.

#### Configuration

<details>

<summary><strong>Mode</strong> <code>PCGExFusedPointOutput</code></summary>

Mode

**Values:**

* **Blend**: Blend all points within a radius
* **Keep Most Central**: Keep the existing point that's most central to the sample group

</details>

<details>

<summary><strong>Point/Point Settings</strong> <code>PCGExPointPointIntersectionDetails</code></summary>

Fuse Settings

📦 See: PointPointIntersection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Preserve Order</strong> <code>bool</code></summary>

Preserve the order of input points

</details>

<details>

<summary><strong>Blending Details</strong> <code>PCGExBlendingDetails</code></summary>

Defines how fused point properties and attributes are merged together.

📦 See: Blending configuration

</details>

<details>

<summary><strong>Carry Over Settings</strong> <code>PCGExCarryOverDetails</code></summary>

Meta filter settings.

📦 See: CarryOver configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsSpatial\Public\Elements\PCGExFusePoints.h`
