---
description: 'In editor :: PCGEx | Cluster : Connect'
icon: circle
---

# Connect Clusters

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Connects isolated edge clusters by their closest vertices, if they share the same vertex group.

#### How It Works

This node identifies disconnected groups of edges (clusters) that have matching vertex groups. It then finds the nearest points between these clusters and creates new connections, called "bridges", to merge them into a single graph. This helps form continuous paths or networks from fragmented data while preserving cluster integrity.

The process works by first grouping edges into clusters using vertex information, then evaluating which clusters are eligible for connection based on shared vertex groups. For each pair of eligible clusters, the node determines where to place a bridge using one of several methods:

* **Delaunay 3D**: Uses 3D Delaunay triangulation to find optimal connection points.
* **Delaunay 2D**: Projects points into 2D space and uses 2D Delaunay triangulation.
* **Least Edges**: Ensures all clusters are connected using the minimum number of bridges.
* **Most Edges**: Connects every cluster to every other cluster.
* **Node Filters**: Uses filters to define which nodes act as generators and connectables, then connects them by proximity.

Once a bridge is identified, it creates a new edge between the closest points in each cluster. If multiple clusters are eligible for connection, the method determines how many bridges to create based on its logic.

The node also supports carrying over metadata from input points to the newly created bridge edges and can flag these bridge points or edges for further processing.

#### Configuration

<details>

<summary><strong>Connect Method</strong><br><em>Method used to find &#x26; insert bridges.</em></summary>

Determines how the node identifies and places connections between clusters.

**Values**:

* **Delaunay 3D**: Uses Delaunay 3D graph to find connections.
* **Delaunay 2D**: Uses Delaunay 2D graph to find connections.
* **Least Edges**: Ensure all clusters are connected using the least possible number of bridges.
* **Most Edges**: Each cluster will have a bridge to every other cluster.
* **Node Filters**: Isolate nodes in each cluster as generators & connectable and connect by proximity.

</details>

<details>

<summary><strong>Projection Settings</strong><br><em>Projection settings.</em></summary>

Settings for projecting points into 2D space when using the Delaunay 2D method.

</details>

<details>

<summary><strong>Carry Over Settings</strong><br><em>Meta filter settings.</em></summary>

Controls which metadata attributes are carried over from input points to the bridge edges.

</details>

<details>

<summary><strong>Cluster Output Settings</strong><br><em>Graph &#x26; Edges output properties.</em></summary>

Defines how the final graph and edge data are structured in the outputs.

</details>

<details>

<summary><strong>Flag Vtx Connector</strong><br><em>If enabled, flags points that were used as bridge endpoints.</em></summary>

When enabled, adds a flag to vertex points that served as connection points between clusters.

</details>

<details>

<summary><strong>Vtx Connector Flag Name</strong><br><em>Name of the flag attribute for vertex connectors.</em></summary>

The name of the metadata attribute used to mark vertex points that were bridge endpoints.

</details>

<details>

<summary><strong>Flag Edge Connector</strong><br><em>If enabled, flags edges that are bridges between clusters.</em></summary>

When enabled, adds a flag to edge points that represent connections between clusters.

</details>

<details>

<summary><strong>Edge Connector Flag Name</strong><br><em>Name of the flag attribute for edge connectors.</em></summary>

The name of the metadata attribute used to mark bridge edges.

</details>

<details>

<summary><strong>Quiet No Bridge Warning</strong><br><em>If enabled, won't throw a warning if no bridge could be created.</em></summary>

When enabled, suppresses warnings when no bridges are generated between clusters.

</details>

#### Usage Example

You have a set of disconnected paths that represent roads or trails. You want to connect these paths at their closest points to form a continuous network. Use this node with the **Least Edges** method to ensure all paths are connected using as few new connections as possible, maintaining a clean and efficient topology.

#### Notes

* The node only connects clusters that share the same vertex group.
* Delaunay methods require sufficient data density for accurate triangulation.
* Using **Most Edges** can create dense connectivity but may increase complexity.
* Flags are useful for identifying bridge points or edges in downstream processing steps.
