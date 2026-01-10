---
description: 'In editor :: PCGEx | Cluster : Filter Vtx'
icon: scrubber
---

# Filter Vtx

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Filter out vertices from clusters based on specified conditions.

#### How It Works

This node evaluates each vertex within a cluster using a set of configured filters. It determines whether each vertex should be kept or removed based on the results of those filters.

* For each vertex in a cluster, it applies the configured **vertex filter subnode**.
* If enabled, it also applies an optional **edge filter subnode** to evaluate edges connected to the vertex.
* The node then decides how to handle the filtered data based on the selected output mode:
  * In **Clusters** mode, it outputs modified clusters with filtered vertices removed.
  * In **Points** mode, it separates points into inside and outside groups based on filter results.
  * In **Attribute** mode, it writes a boolean attribute indicating whether each vertex passed the filters.

The node supports inverting the filter results using the "Invert" toggle, which flips the pass/fail logic. It also allows swapping the inside and outside content when outputting points, and can tag clusters based on whether any/all/no vertices passed the filter.

#### Configuration

<details>

<summary><strong>Mode</strong><br><em>Type of output.</em></summary>

Determines how the filtered data is structured in the output.

**Values**:

* **Clusters**: Outputs clusters with vertices filtered out.
* **Points**: Outputs points grouped into inside and outside based on filter results.
* **Attribute**: Writes a boolean attribute to each vertex indicating pass/fail.

</details>

<details>

<summary><strong>ResultOutputVtx</strong><br><em>└─ Result</em></summary>

When mode is set to "Attribute", this setting controls how the result of the filter is written as an attribute on the points.

</details>

<details>

<summary><strong>bNodeInvalidateEdges</strong><br><em>If enabled, invalidating a node invalidate connected edges.</em></summary>

When enabled, changes in this node will propagate to connected edge data, ensuring consistency in downstream processing.

</details>

<details>

<summary><strong>bInvert</strong><br><em>Invert the filter result</em></summary>

When enabled, vertices that would normally pass the filter are excluded, and those that fail are included.

</details>

<details>

<summary><strong>bInvertEdgeFilters</strong><br><em>Invert the edge filters result</em></summary>

When enabled, the results of the edge filters are inverted. Only applicable when mode is "Clusters".

</details>

<details>

<summary><strong>bSplitOutputsByConnectivity</strong><br><em>If enabled, inside/outside groups will be partitioned by initial edge connectivity.</em></summary>

When enabled, points that pass or fail the filter are grouped based on their original edge connectivity in the cluster.

</details>

<details>

<summary><strong>bSwap</strong><br><em>Swap Inside &#x26; Outside content</em></summary>

When enabled, the inside and outside point groups are swapped in the output when mode is "Points".

</details>

<details>

<summary><strong>GraphBuilderDetails</strong><br><em>Cluster Output Settings</em></summary>

Controls how clusters are built and output when mode is set to "Clusters". Includes settings for edge creation, radius calculation, and solidification.

</details>

#### Usage Example

1. Connect a cluster input to the node.
2. Add a vertex filter subnode to define which vertices should be removed from the cluster.
3. Set the mode to **Clusters** to output modified clusters with filtered vertices.
4. Optionally connect an edge filter subnode to refine filtering based on edge properties.

#### Notes

* This node is useful for cleaning up clusters by removing outliers or unwanted points.
* The "Attribute" mode can be used to tag points for further processing in downstream nodes.
* When using the "Points" output mode, consider enabling **bSplitOutputsByConnectivity** to maintain logical groupings of filtered points.
