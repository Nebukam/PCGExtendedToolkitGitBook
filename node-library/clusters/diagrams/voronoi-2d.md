---
description: 'In editor :: PCGEx | Cluster : Voronoi 2D'
icon: circle
---

# Voronoi 2D

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Create a 2D Voronoi graph for each input dataset.

### Overview

This node generates a Voronoi diagram from input points, creating a partitioning of space into regions based on proximity. Each region contains all points closer to its generating point than to any other. The output consists of Voronoi vertices and edges that define the boundaries between regions.

The node supports multiple methods for determining cell centers and can optionally prune points outside a specified bounding volume. It also provides options for marking hull points and edges, which is useful for creating boundary-aware procedural content.

{% hint style="info" %}
Voronoi diagrams are commonly used in procedural generation for creating organic-looking territories, terrain features, or distribution patterns that naturally avoid clustering.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Default Input**: Points to use as Voronoi generators

</details>

<details>

<summary>Outputs</summary>

* **Default Output**: Points representing Voronoi vertices and edges of the generated graph
* **Additional Outputs**:
  * Optional point attributes for influence counts, min/max radii
  * Optional boolean flags for hull points and open sites

</details>

### Properties Overview

Controls how the Voronoi diagram is computed and what additional data is generated.

***

#### Settings

Configures the core Voronoi generation behavior.

**Method**

_Controls how cell centers are calculated._

* Uses either centroid, circumcenter, or balanced method for Voronoi cell positioning
* **Balanced**: Uses centroid if circumcenter is out of bounds, otherwise uses circumcenter
* **Canon (Circumcenter)**: Uses Delaunay cells' circumcenter
* **Centroid**: Uses Delaunay cells' averaged vertex positions

**Expand Bounds**

_Scales the bounding box used for point pruning._

* Controls how much extra space is added around the input points when computing Voronoi regions
* Value of 100 means the bounds are expanded by 100 units in all directions
* Larger values can help avoid edge effects but may increase computation time

**Prune Out Of Bounds**

_When enabled, removes points that fall outside the computed bounds._

* Only available when Method is set to Canon (Circumcenter)
* Helps prevent invalid Voronoi cells from being generated
* Useful for creating clean, bounded diagrams

**Mark Hull**

_When enabled, marks points and edges that lie on the hull of the Voronoi diagram._

* Adds a boolean attribute to identify boundary elements
* Helpful for generating terrain features or defining outer boundaries in procedural content

**Hull Attribute Name**

_Name of the attribute used to mark hull points._

* Only active when Mark Hull is enabled
* Default name is "bIsOnHull"
* Set this to a custom name if you want to use a specific attribute for hull detection

**Mark Edge On Touch**

_When enabled, edges touching hull points are also marked as hull edges._

* Only active when Mark Hull is enabled
* Helps identify boundary edges in the Voronoi graph
* Useful for creating connected boundary features

**Projection Details**

_Configures how 3D points are projected onto a 2D plane._

* Controls whether to use a fixed normal or compute best-fit plane
* Supports both global and local normal attributes
* Ensures consistent 2D projection regardless of input point orientation

**Cluster Output Settings**

_Configures the output graph structure._

* Sets how edges are built between Voronoi cells
* Allows configuration of edge alignment along specific axes
* Only available when Prune Out Of Bounds is enabled

***

#### Additional Outputs

Controls what extra data gets written to the output points.

**Output Sites**

_When enabled, outputs the original input points as Voronoi sites._

* Includes all input points in the output with additional attributes
* Useful for maintaining reference to source points during generation

**Prune Open Sites**

_When enabled, removes sites that belong to cells outside the bounds._

* Only active when Output Sites and Prune Out Of Bounds are both enabled
* Helps clean up incomplete Voronoi regions

**Open Site Flag**

_Name of the attribute used to flag open sites._

* Only active when Output Sites is enabled but Prune Open Sites is disabled
* Default name is "OpenSite"
* Indicates which input points belong to invalid or incomplete Voronoi cells

**Write Influences Count**

_When enabled, writes the number of points influencing each Voronoi cell._

* Adds a numeric attribute containing influence counts
* Useful for creating varied-sized regions based on point density

**Influences Count Attribute Name**

_Name of the attribute storing influence counts._

* Only active when Write Influences Count is enabled
* Default name is "InfluencesCount"

**Write Min Radius**

_When enabled, writes the minimum radius of each Voronoi cell._

* Adds a numeric attribute with cell size information
* Useful for creating variable-sized regions or avoiding too-small cells

**Min Radius Attribute Name**

_Name of the attribute storing minimum radii._

* Only active when Write Min Radius is enabled
* Default name is "MinRadius"

**Write Max Radius**

_When enabled, writes the maximum radius of each Voronoi cell._

* Adds a numeric attribute with cell size information
* Useful for creating variable-sized regions or avoiding too-large cells

**Max Radius Attribute Name**

_Name of the attribute storing maximum radii._

* Only active when Write Max Radius is enabled
* Default name is "MaxRadius"

### Notes

* Voronoi diagrams are computationally intensive for large datasets; consider using point filtering or bounds expansion to reduce complexity
* The Balanced method often provides the most visually pleasing results by avoiding extreme cell shapes
* Hull marking is particularly useful when creating terrain features that need to respect boundaries
* When using the Canon (Circumcenter) method, ensure your input points are well-distributed to avoid degenerate Voronoi cells
* For best performance with large point sets, consider enabling Bulk Init Data and Caching options in the node's general settings
