---
description: 'In editor :: PCGEx | Path : To Clusters'
icon: circle
---

# Path to Clusters

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Merge paths into edge clusters for pathfinding and graph-based operations.

#### How It Works

This node takes input paths and converts them into cluster structures that can be used for navigation or pathfinding. It can either combine all paths into one unified graph or process each path separately, depending on your settings.

When combining paths, the node looks for places where paths intersect — such as where a point lies on an edge, or where two edges cross. At these intersection points, it adds new vertices and updates connections between edges to reflect the actual layout of the merged paths.

The node also allows you to control how data from different paths is combined when intersections occur. You can define blending rules for both points and edges so that properties like position, height, or other attributes are merged in a way that suits your needs.

#### Configuration

<details>

<summary><strong>bFusePaths</strong><br><em>Whether to merge all input paths into one unified graph.</em></summary>

When enabled, all input paths are combined into a single cluster. When disabled, each path is processed independently.

</details>

<details>

<summary><strong>PointPointIntersectionDetails</strong><br><em>Fuse Settings for Point-to-Point Intersections</em></summary>

Settings that control how intersections between points and other points are handled when merging paths.

</details>

<details>

<summary><strong>bFindPointEdgeIntersections</strong><br><em>Detect Points on Edges</em></summary>

When enabled, the node identifies when a point lies directly on an edge and includes it in the graph as a vertex.

</details>

<details>

<summary><strong>PointEdgeIntersectionDetails</strong><br><em>Settings for Point-to-Edge Intersections</em></summary>

Controls how intersections between points and edges are processed during fusion.

</details>

<details>

<summary><strong>bFindEdgeEdgeIntersections</strong><br><em>Detect Edge Crossings</em></summary>

When enabled, the node finds where two edges cross each other and adds new vertices at those crossing points.

</details>

<details>

<summary><strong>EdgeEdgeIntersectionDetails</strong><br><em>Settings for Edge-to-Edge Intersections</em></summary>

Controls how edge crossings are handled during fusion.

</details>

<details>

<summary><strong>DefaultPointsBlendingDetails</strong><br><em>How to Blend Point Attributes During Fusion</em></summary>

Defines how point properties and attributes are merged when multiple points are combined into one.

</details>

<details>

<summary><strong>DefaultEdgesBlendingDetails</strong><br><em>How to Blend Edge Attributes During Fusion</em></summary>

Controls how edge properties and attributes are merged when edges are fused together.

</details>

<details>

<summary><strong>bUseCustomPointEdgeBlending</strong><br><em>Use Custom Blending for Point/Edge Intersections</em></summary>

When enabled, uses custom blending rules defined in `CustomPointEdgeBlendingDetails` to merge attributes at point-edge intersections.

</details>

<details>

<summary><strong>CustomPointEdgeBlendingDetails</strong><br><em>Custom Blending Rules for Point/Edge Intersections</em></summary>

Custom settings that define how point and edge properties are merged when a point intersects with an edge.

</details>

<details>

<summary><strong>bUseCustomEdgeEdgeBlending</strong><br><em>Use Custom Blending for Edge/Edge Intersections</em></summary>

When enabled, uses custom blending rules defined in `CustomEdgeEdgeBlendingDetails` to merge attributes at edge crossings.

</details>

<details>

<summary><strong>CustomEdgeEdgeBlendingDetails</strong><br><em>Custom Blending Rules for Edge/Edge Intersections</em></summary>

Custom settings that define how edge properties are merged when two edges cross each other.

</details>

<details>

<summary><strong>CarryOverDetails</strong><br><em>Metadata Filter Settings</em></summary>

Controls which metadata from input paths is passed through to the output clusters.

</details>

<details>

<summary><strong>GraphBuilderDetails</strong><br><em>Graph and Edge Output Properties</em></summary>

Settings that define how the final graph and its edges are structured in the output.

</details>

#### Usage Example

1. **Input**: Connect a set of paths (e.g., from a Path Generator node).
2. **Fusion**: Enable `bFusePaths` to merge all paths into one cluster.
3. **Intersections**:
   * Enable `bFindPointEdgeIntersections` if you want points on edges to be included as nodes.
   * Enable `bFindEdgeEdgeIntersections` to detect and add nodes at edge crossings.
4. **Blending**: Adjust blending settings to control how point/edge attributes are merged.
5. **Output**: The node outputs a cluster graph suitable for pathfinding or navigation mesh generation.

#### Notes

* Enabling fusion can significantly increase the number of nodes and edges in the output, especially with many intersections.
* Use `bFindEdgeEdgeIntersections` cautiously as it can create dense graphs that may impact performance.
* Attribute blending is critical when paths have overlapping or conflicting data; custom settings help maintain desired values.
