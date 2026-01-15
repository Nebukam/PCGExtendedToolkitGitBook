---
description: 'In editor :: PCGEx | Cluster : Connect'
icon: circle
---

# Connect Clusters

Connects isolated edge clusters by their closest vertices, if they share the same vtx group.

**How It Works**

> AI-Generated, needs proofreading

* The Cluster : Connect node identifies isolated edge clusters within a graph and connects them by their closest vertices if they belong to the same vertex group.
* It uses the specified connect method to determine how to find and insert bridges between these clusters.
* Projection details settings influence how projections are handled during the connection process, though specific projection mechanics aren't detailed here.
* The node applies meta filter settings through carry over settings to manage metadata transfer or filtering across connected vertices.
* If flagged, the node marks vertex connectors according to the Flag Vtx Connector boolean setting.

#### Configuration

<details>

<summary><strong>Connect Method</strong> <code>PCGExBridgeClusterMethod</code></summary>

Method used to find & insert bridges

**Values:**

* **Delaunay 3D**: Uses Delaunay 3D graph to find connections.
* **Delaunay 2D**: Uses Delaunay 2D graph to find connections.
* **Least Edges**: Ensure all clusters are connected using the least possible number of bridges.
* **Most Edges**: Each cluster will have a bridge to every other cluster
* **Node Filters**: Isolate nodes in each cluster as generators & connectable and connect by proximity.

</details>

<details>

<summary><strong>Projection Details</strong> <code>PCGExGeo2DProjectionDetails</code></summary>

Projection settings.

📦 See: Geo2DProjection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Carry Over Settings</strong> <code>PCGExCarryOverDetails</code></summary>

Meta filter settings.

📦 See: CarryOver configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Cluster Output Settings</strong> <code>PCGExGraphBuilderDetails</code></summary>

Graph & Edges output properties

📦 See: GraphBuilder configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Quiet No Bridge Warning</strong> <code>bool</code></summary>

If enabled, won't throw a warning if no bridge could be created.

</details>

**Additional Outputs**

<details>

<summary><strong>Flag Vtx Connector</strong> <code>bool</code></summary>

Controls flag vtx connector.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Vtx Connector Flag Name</strong> <code>Name</code></summary>

Controls vtx connector flag name.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Flag Edge Connector</strong> <code>bool</code></summary>

Controls flag edge connector.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Edge Connector Flag Name</strong> <code>Name</code></summary>

Controls edge connector flag name.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\PCGExConnectClusters.h`
