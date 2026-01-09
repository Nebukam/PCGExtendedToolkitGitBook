---
description: 'In editor :: PCGEx | Cluster : Connect'
icon: circle
---

# Connect Clusters

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Connects isolated edge clusters by their closest vertices, if they share the same vtx group.

### Overview

This node links separate groups of connected edges (clusters) into a single continuous graph. It's useful when you want to ensure all your edge-based geometry is connected, such as creating roads, pipelines, or network structures that span across multiple disconnected segments.

The node finds the closest points between clusters and creates new connections (bridges) between them. You can choose different methods for determining how these bridges are created, from simple proximity to more complex graph-based algorithms.

{% hint style="info" %}
This node works on edge data only and requires that your input data has been properly clustered using a clustering operation before this step.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input (Default)**: Point data containing edge clusters to connect
* **Edge Input (Optional)**: Additional edge data to be included in the output

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Connected edge data with new bridge connections added
* **Edge Output (Optional)**: Additional edge data if specified in settings
* **Cluster Output (Optional)**: Graph representation of the connected clusters

</details>

### Properties Overview

Controls how clusters are connected and what additional data is generated.

***

#### Connection Settings

Determines the method used to find and create connections between clusters.

**Connect Method**

_The algorithm used to determine how to connect clusters._

* Uses proximity or graph theory to find the best way to bridge clusters
* **Delaunay 3D**: Creates bridges using a 3D Delaunay triangulation of cluster points
* **Delaunay 2D**: Creates bridges using a 2D Delaunay triangulation (projected onto a plane)
* **Least Edges**: Connects clusters with the minimum number of new edges needed to fully connect them
* **Most Edges**: Ensures every cluster connects directly to every other cluster
* **Node Filters**: Uses filters to define generator and connectable nodes, then connects them by proximity

**Projection Settings**

_Controls how 3D points are projected onto a 2D plane for Delaunay 2D calculations._

* Only affects the **Delaunay 2D** method
* Defines the coordinate system used for 2D projection
* Default is to use the world space XZ plane

**Carry Over Settings**

_Configures which attributes are copied from input points to bridge points._

* Controls how data flows through the connection process
* Allows you to preserve important metadata like material, elevation, or other point properties

**Cluster Output Settings**

_Specifies how the output graph is built and what data it contains._

* Defines the structure of the final graph representation
* Controls whether to include edge metadata in the cluster output

***

#### Additional Outputs

Controls extra flags that can be added to points and edges to track connection information.

**Flag Vtx Connector**

_When enabled, adds a flag attribute to vertices that indicates how many bridges connect to them._

* Useful for identifying key junctions or nodes with high connectivity
* Attribute name is configurable via **Vtx Connector Flag Name**

**Vtx Connector Flag Name**

_Name of the flag attribute added to vertices when **Flag Vtx Connector** is enabled._

* Default is "NumBridges"
* Can be any valid attribute name

**Flag Edge Connector**

_When enabled, adds a flag attribute to edges that indicates whether they are bridge connections._

* Useful for identifying which edges were newly created during the connection process
* Attribute name is configurable via **Edge Connector Flag Name**

**Edge Connector Flag Name**

_Name of the flag attribute added to edges when **Flag Edge Connector** is enabled._

* Default is "IsBridge"
* Can be any valid attribute name

***

#### Warnings and Errors

Controls how warnings are handled during processing.

**Quiet No Bridge Warning**

_When enabled, suppresses warnings if no bridges could be created._

* Useful when you expect some clusters to remain disconnected
* Prevents noisy output in cases where disconnection is intentional
