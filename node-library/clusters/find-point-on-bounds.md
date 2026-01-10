---
description: 'In editor :: PCGEx | Cluster : Find point on Bounds'
icon: circle
---

# Find point on Bounds

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Find the closest point or edge on each cluster's bounds.

#### Overview

This node identifies the closest vertex or edge on the boundary of each cluster and outputs a new set of points at that location. It is useful for placing objects along cluster boundaries, generating constraints, or sampling spatial data from cluster edges.

It operates on clusters and can output either merged or individual datasets depending on configuration. The search mode allows choosing between vertex and edge proximity, and the UVW position defines where along the bounds to sample.

{% hint style="info" %}
Connects to **Cluster** processing pins.
{% endhint %}

#### How It Works

This node evaluates each cluster in the input data and calculates the closest point or edge on its boundary. The process involves:

1. For each cluster, it computes the bounding box or best-fit bounds (if enabled).
2. Based on the **SearchMode**, it determines whether to look for the closest vertex or edge.
3. Using the **UVW** value, it selects a position along the bounds:
   * If **UVWInput** is set to **Constant**, it uses the provided UVW vector directly.
   * If **UVWInput** is set to **Attribute**, it reads the UVW from an attribute on the input points.
4. The resulting point is offset by the **Offset** value away from the cluster's center.
5. The output mode determines whether all results are merged into one dataset or split per cluster.

The algorithm iterates through each cluster, performs proximity calculations, and outputs new points at the calculated locations.

<details>

<summary>Inputs</summary>

* **Cluster Input**: Expects a set of clusters defined in the graph.
* **Optional Edge Data**: If edge data is connected, it can be used for edge-based proximity searches.

</details>

<details>

<summary>Outputs</summary>

* **Output Points**: A collection of points placed at the closest vertex or edge on each cluster's bounds.
* **Edge Output (Optional)**: If enabled, outputs edges connecting the original points to their closest bounds locations.

</details>

#### Configuration

<details>

<summary><strong>SearchMode</strong><br><em>What type of proximity to look for.</em></summary>

Controls whether to search for the closest vertex or edge on the cluster's bounds.

**Values**:

* **Vtx**: Finds the closest point (vertex) on the cluster's bounds.
* **Edge**: Finds the closest edge on the cluster's bounds.

</details>

<details>

<summary><strong>OutputMode</strong><br><em>Data output mode.</em></summary>

Determines how the resulting points are structured in the output.

**Values**:

* **Merged**: All points are combined into a single dataset.
* **Individual**: Each cluster's points are placed in separate datasets.

</details>

<details>

<summary><strong>bBestFitBounds</strong><br><em>Whether to use best fit plane bounds.</em></summary>

When enabled, the node uses best-fit bounds instead of axis-aligned bounding boxes for more accurate proximity calculations.

</details>

<details>

<summary><strong>AxisOrder</strong><br><em>Which axis ordering should be used for best fit bounds.</em></summary>

Defines how the axes are ordered when computing best-fit bounds. This affects orientation and shape of the bounds used in proximity searches.

**Values**:

* **XYZ**: X > Y > Z
* **YZX**: Y > Z > X
* **ZXY**: Z > X > Y
* **YXZ**: Y > X > Z
* **ZYX**: Z > Y > X
* **XZY**: X > Z > Y

</details>

<details>

<summary><strong>UVWInput</strong><br><em>Type of UVW value source.</em></summary>

Controls whether to use a constant or attribute-based UVW value for sampling the bounds.

**Values**:

* **Constant**: Use the fixed UVW vector provided in the settings.
* **Attribute**: Read UVW from an attribute on the input points.

</details>

<details>

<summary><strong>ClusterElement</strong><br><em>Cluster element source.</em></summary>

When using attribute-based UVW, this specifies whether to read the value from a point or edge in the cluster.

**Values**:

* **Point**: Fetch the UVW value from the point being evaluated.
* **Edge**: Fetch the UVW value from the edge connecting to the point being evaluated.

</details>

<details>

<summary><strong>UVW</strong><br><em>Fetch the UVW value from a @Data attribute.</em></summary>

The fixed UVW vector used when **UVWInput** is set to **Constant**. This defines where along the bounds to sample (e.g., \[0.5, 0.5, 0] = center of the bounds).

</details>

<details>

<summary><strong>Offset</strong><br><em>Offset to apply to the closest point.</em></summary>

A distance value added to the resulting point to move it away from the cluster's center along the vector from the center to the point.

</details>

<details>

<summary><strong>CarryOverDetails</strong><br><em>Meta filter settings.</em></summary>

Controls how attributes and metadata are carried over from input points to output points.

</details>

<details>

<summary><strong>bQuietAttributeMismatchWarning</strong><br><em>Suppresses warnings about attribute mismatches.</em></summary>

When enabled, prevents warning messages when the UVW attribute is not found or mismatched in the input data.

</details>

#### Usage Example

A designer wants to place trees along the edges of clusters representing forests. They connect a cluster input to this node and set **SearchMode** to **Edge**, **UVWInput** to **Constant**, and **UVW** to (0.5, 0.5, 0). This places points at the center of each cluster's edge. They then use an offset to push these points outward from the cluster center for better tree placement.

#### Notes

* The node is optimized for performance when using merged output mode.
* Best-fit bounds are more accurate but computationally heavier.
* UVW values should be within \[0,1] range for meaningful sampling along bounds.
