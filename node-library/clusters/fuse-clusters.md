---
description: 'In editor :: PCGEx | Cluster : Fuse'
icon: circle
---

# Fuse Clusters

Finds Point/Edge and Edge/Edge intersections between all input clusters.

**How It Works**

> AI-Generated, needs proofreading

* Computes intersections between all input clusters by identifying Point/Point, Point/Edge, and Edge/Edge interactions based on specified settings.
* Utilizes Fuse Settings to process Point/Point intersections when enabled through the Find Point Edge Intersections option.
* Evaluates Point/Edge intersections using Point-Edge intersection settings if the corresponding setting is activated.
* Identifies Edge/Edge intersections with Edge-Edge intersection settings, provided that the Find Edge Edge Intersections option is selected.

#### Configuration

<details>

<summary><strong>Point/Point Settings</strong> <code>PCGExPointPointIntersectionDetails</code></summary>

Fuse Settings

📦 See: PointPointIntersection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Find Point Edge Intersections</strong> <code>bool</code></summary>

Find Point-Edge intersection

⚡ PCG Overridable

</details>

<details>

<summary><strong>Point/Edge Settings</strong> <code>PCGExPointEdgeIntersectionDetails</code></summary>

Point-Edge intersection settings

📦 See: PointEdgeIntersection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Find Edge Edge Intersections</strong> <code>bool</code></summary>

Find Edge-Edge intersection

⚡ PCG Overridable

</details>

<details>

<summary><strong>Edge/Edge Settings</strong> <code>PCGExEdgeEdgeIntersectionDetails</code></summary>

Edge-Edge intersection

📦 See: EdgeEdgeIntersection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Cluster Output Settings</strong> <code>PCGExGraphBuilderDetails</code></summary>

Graph & Edges output properties

📦 See: [Cluster Output Settings](https://pcgex.gitbook.io/pcgex/node-library/clusters/common-settings/output-settings)

⚡ PCG Overridable

</details>

**Data Blending**

<details>

<summary><strong>Default Points Blending Details</strong> <code>PCGExBlendingDetails</code></summary>

Defines how fused point properties and attributes are merged together for fused points.

📦 See: Blending configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Default Edges Blending Details</strong> <code>PCGExBlendingDetails</code></summary>

Defines how fused point properties and attributes are merged together for fused edges.

📦 See: Blending configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Custom Point Edge Blending</strong> <code>bool</code></summary>

Controls use custom point edge blending.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Custom Point Edge Blending Details</strong> <code>PCGExBlendingDetails</code></summary>

Defines how fused point properties and attributes are merged together for Point/Edge intersections.

📦 See: Blending configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Custom Edge Edge Blending</strong> <code>bool</code></summary>

Controls use custom edge edge blending.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Custom Edge Edge Blending Details</strong> <code>PCGExBlendingDetails</code></summary>

Defines how fused point properties and attributes are merged together for Edge/Edge intersections (Crossings).

📦 See: Blending configuration

⚡ PCG Overridable

</details>

**Meta Filters**

<details>

<summary><strong>Carry Over Settings - Vtx</strong> <code>PCGExCarryOverDetails</code></summary>

Meta filter settings for Vtx.

📦 See: CarryOver configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Carry Over Settings - Edges</strong> <code>PCGExCarryOverDetails</code></summary>

Meta filter settings for Edges.

📦 See: CarryOver configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\PCGExFuseClusters.h`
