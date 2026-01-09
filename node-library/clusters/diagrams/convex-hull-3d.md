---
description: 'In editor :: PCGEx | Cluster : Convex Hull 3D'
icon: circle
---

# Convex Hull 3D

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Create a 3D Convex Hull triangulation for each input dataset.

### Overview

This node generates a convex hull mesh from a set of points, creating a triangulated surface that encloses all input points in 3D space. Each input dataset is processed independently to produce its own convex hull. The resulting geometry can be used for collision detection, visual representation, or as a basis for further procedural operations.

{% hint style="info" %}
The convex hull is the smallest convex shape that contains all input points. It's commonly used in physics simulations, mesh generation, and spatial analysis.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Default Input** (Multiple): Point data to process into convex hulls. Each point dataset will generate its own convex hull.

</details>

<details>

<summary>Outputs</summary>

* **Default Output**: The resulting convex hull geometry as a graph with triangulated faces.
* **Cluster Output Settings**: Additional output options for the generated cluster data.

</details>

### Properties Overview

Controls how the convex hull is constructed and what data is generated.

***

#### Cluster Output Settings

Settings that define how the resulting graph data is structured and processed.

**Graph Builder Details**

_Controls how the final graph is built from the computed convex hull._

* Defines the structure of the output graph including edge creation, point attributes, and mesh topology.
* Affects the connectivity and representation of the generated hull.

**Values**:

* **Default**: Uses default settings for graph construction.
* **Custom**: Allows manual configuration of graph building parameters.

### Notes

* This node works best with a minimum of 4 points to form a valid 3D convex hull. Fewer points will result in degenerate geometry.
* The output graph contains triangulated faces that represent the surface of the convex hull.
* For performance reasons, consider using this node on smaller point sets or with clustering to reduce input complexity before processing.
* Convex hulls are useful for creating bounding volumes, generating collision meshes, or visualizing point cloud extents.
