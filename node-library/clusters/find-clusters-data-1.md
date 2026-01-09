---
description: 'In editor :: PCGEx | Cluster : Filter Vtx'
icon: scrubber
---

# Filter Vtx

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Filter out vtx from clusters based on specified criteria.

### Overview

This node filters vertex points within clusters, removing those that don't meet certain conditions. It's useful for cleaning up cluster data by eliminating unwanted vertices or creating subsets of vertices that satisfy specific requirements. The filtered results can be output as clusters, regular points, or written to a boolean attribute for further processing.

{% hint style="info" %}
This node operates on vertex data within clusters and supports various filtering methods including attribute-based conditions and custom filter factories.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Cluster Input** (Required): Points representing cluster vertices
* **Edge Input** (Optional): Edges connecting the vertices in clusters

</details>

<details>

<summary>Outputs</summary>

* **Cluster Output**: Filtered clusters based on vertex filtering criteria
* **Points Output**: Regular points from filtered vertices
* **Attribute Output**: Boolean attribute indicating which vertices passed the filter

</details>

### Properties Overview

Controls how the filtering is applied and what output is generated.

***

#### General Settings

Controls the primary behavior of the node.

**Mode**

_Controls how the filtered results are output._

* When set to **Clusters**, outputs modified clusters with filtered vertices.
* When set to **Points**, outputs regular points from filtered vertices.
* When set to **Attribute**, writes a boolean attribute indicating which vertices passed the filter.

**Values**:

* **Clusters**: Outputs clusters.
* **Points**: Outputs regular points.
* **Attribute**: Writes the result of the filters to a boolean attribute.

**Result Output Vtx**

_Controls how the filter results are written when Mode is set to Attribute._

* This setting defines the attribute name and behavior for storing the filtering results.
* Only visible when Mode is set to Attribute.

**Node Invalidate Edges**

_When enabled, invalidating a vertex will also invalidate connected edges._

* Useful when you want to ensure that edge connections reflect the current state of vertex filtering.
* Applies only when Mode is set to Clusters.

**Invert**

_When enabled, the filter results are inverted._

* Points that would normally pass the filter will be excluded, and vice versa.
* Affects all output modes.

**Invert Edge Filters**

_When enabled, the edge filter results are inverted._

* Only affects output when Mode is set to Clusters.
* Applies to any edge filters used in the operation.

***

#### Output Settings

Controls how the filtered data is structured in the outputs.

**Split Outputs By Connectivity**

_When enabled, inside/outside groups are partitioned by initial edge connectivity._

* Only visible when Mode is set to Points.
* Groups points based on their original edge connections for better organization.

**Swap**

_When enabled, swaps the inside and outside content._

* Only visible when Mode is set to Points.
* Reverses which vertices are considered "inside" versus "outside" of the filter criteria.

***

#### Graph Builder Settings

Controls how cluster data is built when Mode is set to Clusters.

**Cluster Output Settings**

_Configures how clusters are constructed from filtered data._

* Only visible when Mode is set to Clusters.
* Defines properties like edge creation, vertex handling, and graph structure for output clusters.

### Notes

* This node works with vertex data within clusters, not individual points.
* When using the Attribute mode, you can chain multiple filters by creating a filter factory and connecting it to this node.
* The Invert settings allow for more flexible filtering logic without needing separate nodes.
* For best performance, avoid using complex filters if only a simple pass/fail is needed.
* When working with large clusters, consider the performance impact of edge filtering operations.
