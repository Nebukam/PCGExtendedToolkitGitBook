---
icon: share-nodes
---

# Output Settings

#### Settings

<details>

<summary><strong>Write Edge Position</strong> <code>bool</code></summary>

Don't output Clusters if they have less points than a specified amount.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Edge Position</strong> <code>double</code></summary>

Edge position interpolation between start and end point positions.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Solidification</strong> <code>FPCGExBasicEdgeSolidificationDetails</code></summary>

If enabled, does some basic solidification of the edges over the X axis as a default. If you need full control, use the Edge Properties node.

</details>

<details>

<summary><strong>Remove Small Clusters</strong> <code>bool</code></summary>

Don't output Clusters if they have less points than a specified amount.

⚡ PCG Overridable

</details>

<details>

<summary><strong>┌─ Min Vtx Count</strong> <code>int32</code></summary>

Minimum points threshold (per cluster)

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Min Edge Count</strong> <code>int32</code></summary>

Minimum edges threshold (per cluster)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Remove Big Clusters</strong> <code>bool</code></summary>

Don't output Clusters if they have more points than a specified amount.

⚡ PCG Overridable

</details>

<details>

<summary><strong>┌─ Max Vtx Count</strong> <code>int32</code></summary>

Maximum points threshold (per cluster)

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Max Edge Count</strong> <code>int32</code></summary>

Maximum edges threshold (per cluster)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Refresh Edge Seed</strong> <code>bool</code></summary>

Refresh Edge Seed.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Build And Cache Clusters</strong> <code>EPCGExOptionState</code></summary>

If the use of cached clusters is enabled, output clusters along with the graph data.

⚡ PCG Overridable

</details>

**Extra Data**

<details>

<summary><strong>Output Edge Length</strong> <code>bool</code></summary>

Controls output edge length.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Edge Length Name</strong> <code>FName</code></summary>

Whether to output edge length to a 'double' attribute.

⚡ PCG Overridable

</details>

#### Used In

* BuildConvexHull
* BuildConvexHull2D
* BuildDelaunayGraph
* BuildDelaunayGraph2D
* BuildVoronoiGraph
* BuildVoronoiGraph2D
* CutClusters
* PathToClusters
* _...and 12 more_

***

Defined in: `Source\PCGExGraphs\Public\Graphs\PCGExGraphDetails.h`
