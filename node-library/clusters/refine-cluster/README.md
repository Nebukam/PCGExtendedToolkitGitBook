---
description: 'In editor :: PCGEx | Cluster : Refine'
icon: scrubber
---

# Refine Cluster

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Refine edges according to special rules.

### Overview

This node allows you to apply filtering and refinement operations to the edges of clusters, enabling you to clean up or modify edge connectivity in your procedural graphs. You can choose to output refined clusters, individual points representing the filtered edges, or write results directly to attributes for further processing.

It's particularly useful when working with graph-based procedural generation where you need to remove certain edges based on criteria (like distance, angle, or custom filters) while preserving the overall structure of your clusters. The node supports various output modes and sanitization options to ensure that your final graph remains valid and usable.

{% hint style="info" %}
This node requires cluster data as input. Make sure your graph includes a cluster generation step before this node.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input (Default)**: Cluster data containing points and edges to be refined.
* **Filter Input**: Optional point filter used to determine which edges should be kept or removed.

</details>

<details>

<summary>Outputs</summary>

* **Main Output (Default)**: Refined cluster data, depending on the selected output mode.
* **Edge Output**: Additional edge data when using "Points" or "Attribute" modes.

</details>

### Properties Overview

Controls how the refinement is applied and what kind of output is generated.

***

#### Refinement Settings

Configure the specific operation to apply to your edges.

**Refinement**

_The type of refinement operation to perform on the edges._

* This determines how edges are filtered or modified.
* Choose from various predefined operations like MST (Minimum Spanning Tree), Gabriel Graph, or custom filters.
* The selected refinement will be applied to each cluster independently.

**Mode**

_Controls what kind of data is outputted._

* **Clusters**: Outputs refined clusters with updated edge connectivity.
* **Points**: Outputs individual points representing the filtered edges.
* **Attribute**: Writes the result of the filter operation directly to attributes on the input points.

**Values**:

* **Clusters**: Outputs clusters.
* **Points**: Outputs regular points (edges only).
* **Attribute**: Writes the result of the filters to an attribute.

***

#### Output Settings

Configure how results are written and what data is included in the output.

**Result Output Vtx**

_Controls how vertex filter results are written._

* Only relevant when Mode is set to "Attribute".
* Determines whether to write a boolean, counter, or bitmask result for vertex filtering.
* Can be used to tag or count filtered points.

**Result Output Edges**

_Controls how edge filter results are written._

* Only relevant when Mode is set to "Attribute".
* Determines whether to write a boolean, counter, or bitmask result for edge filtering.
* Can be used to tag or count filtered edges.

**Allow Zero Point Outputs**

_When enabled, allows outputting empty point collections._

* Only applicable when Mode is set to "Points".
* Useful if you want to preserve empty outputs in your graph even when no edges are retained.

***

#### Sanitization Settings

Controls how to handle cases where nodes end up with no edges after refinement.

**Sanitization**

_What to do when a node ends up with no edges after filtering._

* **None**: No additional action is taken. Nodes may be left without any connections.
* **Shortest**: If a node has no remaining edges, restore the shortest edge that connects to it.
* **Longest**: If a node has no remaining edges, restore the longest edge that connects to it.
* **Filters**: Use filters to determine which edges must be preserved even if they would normally be filtered out.

**Values**:

* **None**: No sanitization.
* **Shortest**: Shortest.
* **Longest**: Longest.
* **Filters**: Filters.

**Restore Edges That Connect To Valid Nodes**

_When enabled, restores edges that connect to nodes that are still valid._

* Only applicable when Mode is set to "Clusters".
* Ensures that even if an edge would normally be removed, it's kept if one of its endpoints remains connected to a valid node.
* Helps maintain graph connectivity in complex scenarios.

***

#### Graph Builder Settings

Controls how cluster data is built and output when using the "Clusters" mode.

**Cluster Output Settings**

_Settings for building and outputting clusters._

* These settings control how the refined cluster data is structured and what metadata is included.
* Relevant only when Mode is set to "Clusters".
* Includes options for edge radius, solidification, and other graph properties.
