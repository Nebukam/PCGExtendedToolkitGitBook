---
description: 'In editor :: PCGEx | Cluster : Voronoi 3D'
icon: circle
---

# Voronoi 3D

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Create a 3D Voronoi graph for each input dataset.

### Overview

This node generates a 3D Voronoi diagram from a set of input points, creating a partitioning of space into regions based on proximity. Each region contains all points closer to its generating point than to any other point in the dataset. The output consists of Voronoi vertices (cell centers) and edges connecting them.

The node supports multiple methods for determining cell centers, including centroid, circumcenter, or balanced selection. It can also prune points outside a defined bounding volume and mark hull points for further processing or visualization.

{% hint style="info" %}
Voronoi diagrams are commonly used in procedural generation to create organic-looking structures such as terrain features, city layouts, or natural formations.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Default Input**: Points to generate the Voronoi diagram from. Supports multiple input datasets.

</details>

<details>

<summary>Outputs</summary>

* **Default Output**: Points representing Voronoi cell centers (vertices).
* **Graph Output**: Edges connecting Voronoi vertices, forming the graph structure.
* **Hull Marking**: Optional boolean attributes marking hull points and edges if enabled.

</details>

### Properties Overview

Controls how the Voronoi diagram is generated and what data is produced.

***

#### Cell Center Method

Determines how cell centers are calculated for each Voronoi region.

**Method**

_Controls which method is used to compute the center of each Voronoi cell._

* Uses either centroid, circumcenter, or a balanced approach.
* **Balanced**: Chooses between centroid and circumcenter based on validity.
* **Canon (Circumcenter)**: Uses Delaunay triangulation's circumcenter.
* **Centroid**: Averages the positions of all vertices in the cell.

**Expand Bounds**

_Controls how much to expand the bounding volume used for point pruning._

* Expands the input point bounds by this amount before computing Voronoi cells.
* Useful when points are near boundaries or when you want to include some padding.
* Example: Setting this to 100 means the diagram will be computed within a volume that is 100 units larger than the input point bounds.

**Prune Out Of Bounds**

_When enabled, removes Voronoi cells whose centers lie outside the expanded bounds._

* Only available when using the **Canon (Circumcenter)** method.
* Helps reduce computational overhead and avoid artifacts from out-of-bounds cells.
* Useful for creating clean, bounded diagrams within a specific area.

**Mark Hull**

_When enabled, marks points and edges that form the outer boundary of the Voronoi diagram._

* Adds boolean attributes to identify hull elements.
* Can be useful for generating terrain contours or defining structural boundaries.
* Example: Points on the outer edge of the diagram are marked as true in the Hull attribute.

**Hull Attribute Name**

_Name of the boolean attribute used to mark hull points._

* Only relevant when **Mark Hull** is enabled.
* Default name is `bIsOnHull`.
* You can change this to match your project's naming conventions.

**Mark Edge On Touch**

_When enabled, marks edges that connect to at least one hull point as being on the hull._

* Helps identify the full hull structure including edges.
* Useful for creating outlines or defining outer boundaries in procedural generation.

***

#### Graph Output Settings

Controls how the resulting graph is built and output.

**Solidification Axis**

_Selects which axis to align edge points along during solidification._

* Aligns edge points along the selected axis (X, Y, Z) to ensure consistent orientation.
* Useful for ensuring edges are aligned with world axes for better visual or performance results.

**Radius Type**

_Determines how the radius of each edge is calculated._

* **Average**: Uses the average of both endpoints' radii.
* **Lerp**: Linearly interpolates between endpoint radii based on edge position.
* **Min**: Uses the smaller of the two endpoint radii.
* **Max**: Uses the larger of the two endpoint radii.
* **Fixed**: Uses a constant fixed radius value.

**Radius Constant**

_Sets the fixed radius used when Radius Type is set to Fixed._

* Only visible when **Radius Type** is set to **Fixed**.
* Controls the uniform size of all edges in the graph.

**Radius Scale**

_Scales the computed edge radius by this factor._

* Multiplies the calculated radius by this value.
* Allows fine-tuning of edge thickness or spacing in the output graph.

### Notes

* Voronoi diagrams are computationally intensive for large datasets. Consider using point filtering or pruning to reduce input size.
* The **Canon (Circumcenter)** method produces mathematically precise results but may generate cells outside your bounds if not pruned.
* Use the Hull marking features to identify and visualize the outer boundary of your diagram, which is helpful for terrain generation or layout design.
* Combine this node with other graph processing nodes to create complex procedural structures like city grids or natural formations.
