---
description: 'In editor :: PCGEx | Cluster : Delaunay 2D'
icon: circle
---

# Delaunay 2D

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Create a 2D Delaunay triangulation for each input dataset.

#### Overview

This node generates a Delaunay triangulation from a set of 2D points, forming a mesh where no point lies inside the circumcircle of any triangle. It's commonly used for creating natural-looking meshes, Voronoi diagrams, or spatial partitioning in procedural content generation.

It can optionally output the Urquhart graph, which removes the longest edge from each Delaunay triangle to produce a sparser, more organic structure. You can also mark hull points and edges to identify boundary elements in your point set.

{% hint style="info" %}
Connects to **Cluster** processing pins.
{% endhint %}

#### How It Works

This node takes input points and performs the following steps:

1. **Projection**: Projects the 3D points onto a 2D plane using specified projection settings (e.g., XY, XZ, or YZ).
2. **Triangulation**: Constructs a Delaunay triangulation from these projected points. This ensures that no point in the set lies inside the circumcircle of any triangle in the mesh.
3. **Optional Urquhart Graph**: If enabled, it removes the longest edge from each Delaunay triangle, creating a sparser graph that emphasizes local connectivity and avoids long-range edges.
4. **Hull Marking**: Optionally marks points and edges that lie on the outer boundary (hull) of the point set.
5. **Output Generation**:
   * Generates a new cluster with triangulated edges.
   * Optionally outputs the original input points as sites in the resulting graph.
   * If Urquhart is enabled and site output is active, it can merge adjacent sites into single points based on the merge mode.

<details>

<summary>Inputs</summary>

* **Points**: A collection of 3D points to triangulate. These are projected onto a 2D plane for triangulation.
* **Optional Filters**: Can be used to restrict which points are considered in the triangulation.

</details>

<details>

<summary>Outputs</summary>

* **Cluster**: A new cluster containing the Delaunay triangulation edges and optionally the original input points as vertices.
* **Attributes**: Hull markers on points and edges if enabled.

</details>

#### Configuration

***

**bUrquhart**

_When enabled, outputs the Urquhart graph of the Delaunay triangulation by removing the longest edge from each triangle._

This simplifies the graph by eliminating long edges, which often appear unnatural in procedural generation. It's useful for creating more organic-looking networks or reducing visual complexity.

**bMarkHull**

_When enabled, marks points and edges that lie on the hull of the point set._

This allows downstream nodes to identify boundary elements, such as for terrain edge detection or mesh boundary handling.

**HullAttributeName**

_Name of the attribute to output the Hull boolean to. True if point is on the hull, otherwise false._

Controls where the hull marker data is stored on the output points.

**bMarkEdgeOnTouch**

_When enabled, edges that have at least one point on the hull are marked as being on the hull._

This extends the hull marking to include edges that connect to boundary points, which can be useful for visualizing or filtering boundaries.

**ProjectionDetails**

_Projection settings used to map 3D points to a 2D plane for triangulation._

Choose how to project your 3D data onto a 2D space. For example, projecting along the XZ axis will ignore Y coordinates and treat the points as if viewed from above.

**GraphBuilderDetails**

_Settings for building the output graph, including edge properties like radius and solidification._

Controls how the resulting edges are structured in the output cluster.

***

**bOutputSites**

_When enabled, outputs the original input points as sites in the resulting graph._

This allows you to retain the input point data in the output cluster, useful if you want to maintain both the triangulation and the original point positions.

**bMarkSiteHull**

_When enabled, marks points and edges that lie on the hull of the point set for the output sites._

Similar to `bMarkHull`, but applied specifically to the output site data.

**SiteHullAttributeName**

_Name of the attribute to output the Hull boolean to. True if point is on the hull, otherwise false._

Controls where the hull marker data is stored on the output points when `bOutputSites` is enabled.

**UrquhartSitesMerge**

_Merge adjacent sites into a single point when using the Urquhart graph._

This setting only applies when `bUrquhart` and `bOutputSites` are both enabled. It determines how to merge points that were removed during the Urquhart process:

* **None**: Do not merge sites.
* **Merge Sites**: The merged site is the average of the two original points.
* **Merge Edges**: The merged site is the average of the endpoints of the removed edge.

#### Usage Example

1. Place a **Cluster : Delaunay 2D** node in your graph.
2. Connect it to a point source (e.g., a **Points : Scatter** node).
3. Enable `bUrquhart` to get a more organic, sparser triangulation.
4. Enable `bMarkHull` and set `bMarkEdgeOnTouch` to highlight the outer boundary of your points.
5. Connect the output cluster to a **Cluster : Mesh** node to generate a mesh from the triangulation.

#### Notes

* Delaunay triangulations are sensitive to input point distribution. Dense or clustered points may lead to thin, elongated triangles.
* The Urquhart graph is useful for creating natural-looking networks where long-range connections are undesirable.
* Hull marking is particularly helpful when generating terrain features or boundary-based effects.
* Projection settings can significantly affect the output shape; experiment with different axes to achieve desired results.
