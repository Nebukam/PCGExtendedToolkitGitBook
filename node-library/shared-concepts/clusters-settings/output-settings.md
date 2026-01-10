---
icon: share-nodes
---

# Output Settings

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Controls how graph edges are built and filtered, including edge position interpolation, cluster size thresholds, and optional edge data output.

#### Overview

This configuration block defines how graph edges are constructed from point clusters and how those clusters are filtered based on size. It allows you to control whether edge positions are interpolated between start and end points, apply basic solidification to edges, and filter out clusters that are too small or too large. You can also choose to output additional edge length data as an attribute.

This is a shared configuration used across many PCG nodes that build graphs from point clusters, such as Delaunay, Voronoi, and convex hull builders.

{% hint style="info" %}
This configuration appears in nodes like: Build Convex Hull, Build Delaunay Graph, Build Voronoi Graph, Cut Clusters, Path to Clusters, Build Custom Graph, Connect Clusters
{% endhint %}

#### Settings

<details>

<summary><strong>bWriteEdgePosition</strong><br><em>When enabled, the position of each edge is interpolated between its start and end points.</em></summary>

When enabled, the system calculates a position along the edge based on the Edge Position value. This is useful for creating smooth transitions or placing edges at specific ratios along the connection.

**Values**:

* **True**: Interpolate edge positions
* **False**: Use default edge positioning

</details>

<details>

<summary><strong>EdgePosition</strong><br><em>The interpolation ratio used to determine where on the edge the position is calculated.</em></summary>

Controls how the edge position is interpolated between start and end points. A value of 0 means the position is at the start point, 1 means at the end point, and 0.5 means halfway along the edge.

**Values**: Any double between 0 and 1

</details>

<details>

<summary><strong>BasicEdgeSolidification</strong><br><em>Applies basic solidification to edges along a specific axis.</em></summary>

When enabled, this applies a simple solidification effect to edges along the X axis. This can be useful for creating more defined or structured graph layouts.

**Values**:

* **None**: No solidification
* **X Axis**: Solidify edges along the X axis
* **Y Axis**: Solidify edges along the Y axis
* **Z Axis**: Solidify edges along the Z axis

</details>

<details>

<summary><strong>bRemoveSmallClusters</strong><br><em>When enabled, clusters with fewer points than specified are excluded from the graph.</em></summary>

Filters out clusters that have too few points. This is useful for removing noise or insignificant groupings in your data.

**Values**:

* **True**: Filter small clusters
* **False**: Keep all clusters

</details>

<details>

<summary><strong>MinVtxCount</strong><br><em>The minimum number of points a cluster must have to be included in the graph.</em></summary>

Sets the lower threshold for cluster size. Clusters with fewer points than this value are excluded.

**Values**: Any integer greater than or equal to 2

</details>

<details>

<summary><strong>MinEdgeCount</strong><br><em>The minimum number of edges a cluster must have to be included in the graph.</em></summary>

Sets the lower threshold for cluster edge count. Clusters with fewer edges than this value are excluded.

**Values**: Any integer greater than or equal to 1

</details>

<details>

<summary><strong>bRemoveBigClusters</strong><br><em>When enabled, clusters with more points than specified are excluded from the graph.</em></summary>

Filters out clusters that have too many points. This is useful for limiting computational load or avoiding overly complex structures.

**Values**:

* **True**: Filter large clusters
* **False**: Keep all clusters

</details>

<details>

<summary><strong>MaxVtxCount</strong><br><em>The maximum number of points a cluster can have to be included in the graph.</em></summary>

Sets the upper threshold for cluster size. Clusters with more points than this value are excluded.

**Values**: Any integer greater than or equal to 2

</details>

<details>

<summary><strong>MaxEdgeCount</strong><br><em>The maximum number of edges a cluster can have to be included in the graph.</em></summary>

Sets the upper threshold for cluster edge count. Clusters with more edges than this value are excluded.

**Values**: Any integer greater than or equal to 1

</details>

<details>

<summary><strong>bRefreshEdgeSeed</strong><br><em>When enabled, the random seed used for edge generation is refreshed.</em></summary>

If enabled, this forces a new random seed to be used when generating edges. This can be useful for creating different graph layouts in repeated runs.

**Values**:

* **True**: Refresh edge seed
* **False**: Use existing seed

</details>

<details>

<summary><strong>BuildAndCacheClusters</strong><br><em>Determines whether to build and cache clusters along with the graph data.</em></summary>

Controls whether cluster data is included in the output when using cached clusters. This can be useful for debugging or for nodes that need access to both graph and cluster information.

**Values**:

* **Default**: Use default behavior
* **Enabled**: Build and cache clusters
* **Disabled**: Do not build or cache clusters

</details>

<details>

<summary><strong>bOutputEdgeLength</strong><br><em>When enabled, the length of each edge is calculated and output as an attribute.</em></summary>

If enabled, this outputs the actual length of each edge as a double-precision floating-point value in a new attribute.

**Values**:

* **True**: Output edge lengths
* **False**: Do not output edge lengths

</details>

<details>

<summary><strong>EdgeLengthName</strong><br><em>The name of the attribute where edge lengths are stored.</em></summary>

Sets the name of the attribute that will contain the calculated edge lengths. This is only used when "Output Edge Length" is enabled.

**Values**: Any valid attribute name

</details>

#### Common Use Cases

* **Filtering noise**: Use `bRemoveSmallClusters` with `MinVtxCount` to remove small, insignificant clusters from your graph.
* **Limiting complexity**: Use `bRemoveBigClusters` with `MaxVtxCount` to prevent overly large clusters from dominating the graph.
* **Smoothing edges**: Enable `BasicEdgeSolidification` to create more structured or aligned edges in your graph layout.
* **Adding edge data**: Enable `bOutputEdgeLength` and set a custom `EdgeLengthName` to store edge lengths for later use in other nodes.

#### Notes

* The settings related to cluster filtering (`MinVtxCount`, `MaxVtxCount`, etc.) are only active when their respective enable flags (`bRemoveSmallClusters`, `bRemoveBigClusters`) are turned on.
* Edge solidification is applied before filtering, so it can influence how clusters are treated.
* When using cached clusters, enabling `BuildAndCacheClusters` will include cluster data in the output, which may be needed by downstream nodes.
