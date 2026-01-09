---
description: 'In editor :: PCGEx | Cluster : Delaunay 3D'
icon: circle
---

# Delaunay 3D

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Create a 3D Delaunay tetrahedralization for each input dataset.

### Overview

This node generates a 3D Delaunay triangulation from a set of input points, creating a mesh-like structure where each tetrahedron (3D triangle) connects four points such that no point lies inside the circumsphere of any tetrahedron. This is useful for generating spatial relationships between points in 3D space, often used in terrain generation, mesh creation, and spatial analysis.

The output consists of vertices representing the Delaunay points and edges forming the tetrahedral structure. You can optionally mark hull points (points on the outer surface) and generate an Urquhart graph, which removes the longest edge from each tetrahedron to produce a sparser but still valid triangulation.

{% hint style="info" %}
This node works best with a sufficient number of input points to form meaningful tetrahedra. Very few or clustered points may result in degenerate or empty outputs.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Default Input**: Points to be processed into a Delaunay triangulation.

</details>

<details>

<summary>Outputs</summary>

* **Default Output**: Vertices of the Delaunay tetrahedralization.
* **Sites Output** (when enabled): Original input points used as sites for the triangulation.
* **Urquhart Output** (when enabled): Edges of the Urquhart graph derived from the Delaunay structure.

</details>

### Properties Overview

Settings to control how the Delaunay triangulation is built and what output is generated.

***

#### Settings

Controls core behavior of the Delaunay generation.

**Output the Urquhart graph**

_When enabled, the node outputs an Urquhart graph derived from the Delaunay structure. This removes the longest edge of each tetrahedron to produce a sparser, more efficient graph._

* Reduces output complexity by removing long edges
* Useful for generating cleaner spatial relationships

**Output delaunay sites**

_When enabled, the node outputs the original input points as vertices in addition to the Delaunay structure._

* Allows you to see both the original data and the triangulation
* Useful for debugging or visualizing point relationships

**Mark points & edges that lie on the hull**

_When enabled, the node marks points and edges that are part of the outer surface (hull) of the Delaunay structure._

* Hull points are those not enclosed by any tetrahedron
* Hull edges connect points on the outer surface
* Useful for identifying boundary features in spatial data

**Name of the attribute to output the Hull boolean to**

_The name of the boolean attribute that will be written to mark hull points and edges._

* Default is `bIsOnHull`
* Used when **Mark points & edges that lie on the hull** is enabled

**When true, edges that have at least a point on the Hull as marked as being on the hull**

_When enabled, edges connecting to any hull point are also marked as being on the hull._

* Ensures boundary edges are clearly identified
* Useful for generating clear mesh boundaries or surface outlines

***

#### Sites

Controls how input points are handled in output.

**Mark points & edges that lie on the hull**

_When enabled, the node marks points and edges that are part of the outer surface (hull) of the Delaunay structure._

* Hull points are those not enclosed by any tetrahedron
* Hull edges connect points on the outer surface
* Useful for identifying boundary features in spatial data

**Name of the attribute to output the Hull boolean to**

_The name of the boolean attribute that will be written to mark hull points and edges._

* Default is `bIsOnHull`
* Used when **Mark points & edges that lie on the hull** is enabled

### Notes

* Delaunay triangulations are optimal for spatial interpolation and mesh generation.
* The Urquhart graph can reduce complexity while preserving key topological relationships.
* Hull marking helps identify boundary features in your point cloud.
* This node works best with a minimum number of points to form valid tetrahedra; sparse or clustered data may produce degenerate results.
