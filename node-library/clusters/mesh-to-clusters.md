---
description: 'In editor :: PCGEx | Mesh to Clusters'
icon: circle
---

# Mesh to Clusters

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Creates clusters from mesh topology by generating points and edges based on the mesh structure.

#### How It Works

This node takes an existing static mesh and converts its geometry into a cluster-based graph. It reads the mesh data and generates points at each vertex, then creates connections (edges) between these points based on how the mesh is structured. The way these connections are made depends on the selected triangulation method.

The node can either use a single static mesh asset or read mesh data from an attribute on input points. For each vertex in the mesh, it creates a cluster point. Then, depending on the chosen method, it builds edges between these points to represent the mesh's topology. This allows you to turn existing geometry into procedural graphs for further processing.

#### Configuration

<details>

<summary><strong>Graph Output Type</strong><br><em>Triangulation type used to define how mesh topology is converted into clusters.</em></summary>

Controls how the mesh's topology is interpreted when generating clusters.

**Values**:

* **Raw**: Creates edges from raw triangle faces.
* **Dual Graph**: Builds a dual graph using triangle centroids and adjacency.
* **Hollow Graph**: Connects centroids to vertices but removes triangle edges.
* **Boundaries**: Outputs only boundary edges of the mesh.

</details>

<details>

<summary><strong>Static Mesh Input</strong><br><em>Defines whether the mesh is provided as a constant or read from an attribute.</em></summary>

Controls how the mesh source is determined.

**Values**:

* **Constant**: Uses the value set in the Static Mesh Constant property.
* **Attribute**: Reads the mesh from the input points using the Static Mesh Attribute name.

</details>

<details>

<summary><strong>Static Mesh Attribute</strong><br><em>Name of the attribute to read the mesh from when using attribute input.</em></summary>

The name of the attribute in the input points that contains the mesh data.

</details>

<details>

<summary><strong>Static Mesh Constant</strong><br><em>The static mesh to use when using constant input.</em></summary>

The actual static mesh asset used when Static Mesh Input is set to Constant.

</details>

<details>

<summary><strong>Attribute Handling</strong><br><em>How to interpret the mesh attribute data.</em></summary>

Defines how to process the mesh path or reference from the attribute.

**Values**:

* **StaticMesh Soft Path**: Interprets the attribute as a soft path to a static mesh.
* **Actor Reference**: Interprets the attribute as an actor reference to extract primitive data from.

</details>

<details>

<summary><strong>Transform Details</strong><br><em>How transforms are applied or inherited for the generated clusters.</em></summary>

Controls how the transform of each cluster point is determined based on the input points and mesh data.

</details>

<details>

<summary><strong>Import Details</strong><br><em>Which data from the static mesh should be imported onto the generated points.</em></summary>

Defines which properties like normals, UVs, or custom attributes are copied from the mesh to the output points.

</details>

<details>

<summary><strong>Ignore Mesh Warnings</strong><br><em>Skip invalid meshes and do not throw warnings about them.</em></summary>

When enabled, invalid or missing meshes will be skipped without logging a warning.

</details>

<details>

<summary><strong>Cluster Output Settings</strong><br><em>Graph &#x26; Edges output properties. Only available if bPruneOutsideBounds as it otherwise generates a complete graph.</em></summary>

Controls how the graph and edges are built for the output clusters.

</details>

<details>

<summary><strong>Attributes Forwarding</strong><br><em>Which input points attributes to forward on clusters. NOTE : Not implemented</em></summary>

Currently not implemented. This setting has no effect.

</details>

{% hint style="info" %}
This node connects to \*\*Points\*\* processing pins. Subnodes: - \*\*GraphBuilderDetails\*\*: Configures how the graph is built and edges are generated. - \*\*ImportDetails\*\*: Controls which data from the mesh is imported onto the output points. - \*\*TransformDetails\*\*: Defines how transforms are inherited or applied to the generated clusters.
{% endhint %}

#### Usage Example

1. Create a set of points that define where you want to generate clusters.
2. Connect a static mesh asset to the node using the "Static Mesh Constant" input.
3. Set the "Graph Output Type" to "Raw Triangles" to generate edges between all triangle vertices.
4. Optionally, enable "Import Details" to copy mesh data like normals or UVs onto the output points.
5. Connect the output points and graph edges to downstream processing nodes for further manipulation.

#### Notes

* The node supports multiple triangulation methods to define how the mesh topology is interpreted.
* If using attribute input, ensure that the specified attribute contains valid mesh references.
* The node can be used to generate procedural graphs from existing geometry.
* Performance may vary depending on the complexity of the source mesh and the selected triangulation type.
