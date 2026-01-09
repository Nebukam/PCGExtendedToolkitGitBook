---
description: 'In editor :: PCGEx | Mesh to Clusters'
icon: circle
---

# Mesh to Clusters

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Creates clusters from mesh topology.

### Overview

This node takes input points and generates clusters based on the topology of a static mesh. It's useful for converting mesh geometry into a graph structure that can be used for further procedural operations like pathfinding, clustering, or spatial analysis. The resulting clusters are built from the mesh vertices and edges, allowing you to work with the mesh's structural data in your PCG workflow.

{% hint style="info" %}
The node requires a valid static mesh source to generate clusters. You can provide this via a constant value or an attribute on the input points.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Source Targets** (Optional): Points that define where clusters are generated from. If not provided, the node will use the default point input.
* **Mesh Data** (Optional): Input mesh data to extract topology from.

</details>

<details>

<summary>Outputs</summary>

* **Output Vertices**: Points representing the vertices of the mesh clusters.
* **Output Edges**: Lines connecting the vertices based on mesh topology.
* **Graph Output**: Optional graph representation of the mesh structure.

</details>

### Properties Overview

Controls how the mesh is processed and how clusters are generated.

***

#### Mesh Settings

Configures how the mesh topology is interpreted and converted into clusters.

**Graph Output Type**

_Controls how the mesh edges and vertices are connected to form the output graph._

* Determines whether to use raw triangle data, a dual graph, or other topological representations.
* **Raw Triangles**: Creates a graph from the raw triangle mesh.
* **Dual Graph**: Uses triangle centroids and adjacency relationships.
* **Hollow Graph**: Connects centroids to vertices but removes triangle edges.
* **Boundaries**: Outputs only boundary edges of the mesh.

**Static Mesh Input**

_Specifies how the static mesh is provided to the node._

* **Constant**: Use a fixed static mesh asset.
* **Attribute**: Read the mesh from an attribute on the input points.

**Values**:

* **Constant**: Use a single static mesh asset.
* **Attribute**: Read mesh data from a point attribute.

**Static Mesh Attribute**

_Name of the attribute that contains the static mesh reference._

* Only used when "Static Mesh Input" is set to "Attribute".
* Can be FString, FName, or FSoftObjectPath.

**Static Mesh Constant**

_The static mesh asset to use when "Static Mesh Input" is set to "Constant"._

* This is the actual mesh asset that will be processed.
* Example: A cube or sphere mesh from your content folder.

**Attribute Handling**

_Determines how to interpret the mesh attribute data._

* **StaticMesh Soft Path**: Treats the attribute as a soft path to a static mesh.
* **Actor Reference**: Interprets the attribute as an actor reference to extract primitive data from.

#### Transform Settings

Controls how the generated clusters are positioned and oriented in space.

**Transform Details**

_Configures how the output points inherit transform properties._

* Defines how position, rotation, and scale are applied to the cluster points.
* Can be used to align clusters with the original mesh or apply custom transformations.

#### Import Settings

Determines which data from the static mesh is imported onto the generated points.

**Import Details**

_Specifies which mesh data should be imported onto the output points._

* Controls whether vertex colors, UVs, and other mesh attributes are copied.
* **Vertex Color**: Import vertex color data.
* **UVs**: Import UV coordinate data.
* **UV Channels Mapping**: Define how UV channels map to output attributes.

**Ignore Mesh Warnings**

_When enabled, invalid meshes will be skipped without logging warnings._

* Useful for large datasets where some meshes might be missing or invalid.
* Prevents cluttering the log with warnings about missing assets.

#### Graph Output Settings

Configures the structure and properties of the generated graph data.

**Graph Builder Details**

_Specifies how to build the output graph from the mesh topology._

* Controls edge creation, node connections, and graph properties.
* Only active when pruning outside bounds is enabled.
* Allows for fine-tuning of graph structure and performance.

#### Forwarding Settings

Controls which input point attributes are passed through to the output clusters.

**Attributes Forwarding**

_Specifies which point attributes should be forwarded to the output._

* Currently not implemented in this version.
* Future versions may support attribute forwarding from input points to generated clusters.
