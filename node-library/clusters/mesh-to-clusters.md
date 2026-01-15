---
description: 'In editor :: PCGEx | Mesh to Clusters'
icon: circle
---

# Mesh to Clusters

Creates clusters from mesh topology.

**How It Works**

> AI-Generated, needs proofreading

* The Mesh to Clusters node processes input from a specified static mesh source and generates clusters based on the topology of that mesh.
* It uses the defined Static Mesh Input setting, which can be either a direct Static Mesh constant or an attribute (FString, FName, FSoftObjectPath) pointing to a static mesh path.
* The Graph Output Type is set to Triangulation type, indicating that the node outputs clusters in a format suitable for triangulated mesh representation.
* Attribute Handling specifies how the Static Mesh path attribute is interpreted and utilized during the clustering process.

#### Configuration

<details>

<summary><strong>Graph Output Type</strong> <code>PCGExTriangulationType</code></summary>

Triangulation type

⚡ PCG Overridable

</details>

<details>

<summary><strong>Static Mesh Input</strong> <code>PCGExInputValueType</code></summary>

Mesh source

⚡ PCG Overridable

</details>

<details>

<summary><strong>Static Mesh (Attr)</strong> <code>Name</code></summary>

Static mesh path attribute -- Either FString, FName or FSoftObjectPath

⚡ PCG Overridable

</details>

<details>

<summary><strong>Static Mesh</strong> <code>StaticMesh</code></summary>

Static mesh constant

⚡ PCG Overridable

</details>

<details>

<summary><strong>Attribute Handling</strong> <code>PCGExMeshAttributeHandling</code></summary>

Static mesh path attribute type

**Values:**

* **StaticMesh Soft Path**: Read the attribute as a StaticMesh soft path.
* **Actor Reference**: Read the attribute as an actor reference to extract primitive from.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Transform Details</strong> <code>PCGExTransformDetails</code></summary>

Target inherit behavior

📦 See: Transform configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Import Details</strong> <code>PCGExGeoMeshImportDetails</code></summary>

Which data should be imported from the static mesh onto the generated points

📦 See: GeoMeshImport configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Ignore Mesh Warnings</strong> <code>bool</code></summary>

Skip invalid meshes & do not throw warning about them.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Cluster Output Settings</strong> <code>PCGExGraphBuilderDetails</code></summary>

Graph & Edges output properties. Only available if bPruneOutsideBounds as it otherwise generates a complete graph.

📦 See: [Cluster Output Settings](https://pcgex.gitbook.io/pcgex/node-library/clusters/common-settings/output-settings)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Attributes Forwarding</strong> <code>PCGExForwardDetails</code></summary>

Which input points attributes to forward on clusters. NOTE : Not implemented

📦 See: Forward configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\PCGExMeshToClusters.h`
