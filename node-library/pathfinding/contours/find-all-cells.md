---
description: 'In editor :: PCGEx | Pathfinding : Find All Cells'
icon: circle
---

# Find All Cells

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Attempts to find the contours of all cluster cells.

### Overview

This node analyzes clusters and attempts to trace the outer boundaries (contours) of each cell within them. It's particularly useful for generating polygonal outlines that represent the shape of individual cells in a clustered dataset, such as finding the perimeter of rooms in a building layout or defining the boundary of terrain regions.

The node works by starting from a seed point and following edges to trace the contour of each cell. It can produce multiple outputs including the traced paths for each cell, along with optional artifacts like density or steepness information.

{% hint style="info" %}
This node requires clusters to be defined in your input data. Make sure you've run a clustering operation before using this node.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Point): Points representing the cluster data, typically with associated edges.
* **Edge Input** (Edge): Edges connecting points within clusters.

</details>

<details>

<summary>Outputs</summary>

* **Main Output** (Point): Point IO containing the traced contours of each cell.
* **Edges Output** (Edge): Optional edge output for the paths.
* **Seeds Output** (Point): Optional point IO containing the seed points used to start contour tracing.

</details>

### Properties Overview

Controls how the contours are generated and what information is included in the output.

***

#### Cell Constraints

Defines rules that determine which cells are valid and should be processed.

**Max Path Length**

_Limits the maximum number of steps allowed when tracing a cell's contour._

* Controls performance by preventing infinite loops or very long paths
* Set to 0 for unlimited path length

**Max Angle**

_Sets the maximum angle (in degrees) that can be turned when tracing a cell's contour._

* Prevents sharp turns that may lead to invalid or unrealistic contours
* Use lower values for smoother, more organic shapes

**Min Area**

_Defines the minimum area a cell must have to be considered valid._

* Filters out very small cells that might be noise or artifacts
* Set to 0 to include all cells regardless of size

**Max Area**

_Defines the maximum area a cell can have to be considered valid._

* Prevents processing of extremely large cells that may not represent meaningful shapes
* Use 0 for unlimited area

**Max Perimeter**

_Limits how long the perimeter of a cell can be._

* Helps control performance and avoid overly complex contours
* Set to 0 for unlimited perimeter

**Min Perimeter**

_Requires a minimum perimeter for valid cells._

* Filters out very small or degenerate contours
* Set to 0 to include all contours regardless of size

**Max Concavity**

_Limits how much a cell's shape can deviate from convex._

* Controls how "bumpy" or irregular the output shapes can be
* Use lower values for smoother, more regular shapes

**Min Concavity**

_Requires a minimum level of concavity in cells._

* Ensures that only cells with some degree of irregularity are processed
* Set to 0 to include all shapes regardless of concavity

**Max Convexity**

_Limits how much a cell can be convex._

* Prevents overly flat or linear shapes from being generated
* Use lower values for more angular, polygonal shapes

**Min Convexity**

_Requires a minimum level of convexity in cells._

* Ensures that only cells with some degree of roundness are processed
* Set to 0 to include all shapes regardless of convexity

**Max Steepness**

_Limits how steep the edges of a cell can be._

* Controls the sharpness of corners and angles in the output
* Use lower values for smoother, rounded contours

**Min Steepness**

_Requires a minimum level of steepness in cells._

* Ensures that only cells with some degree of angularity are processed
* Set to 0 to include all shapes regardless of steepness

**Max Density**

_Limits how dense the points within a cell can be._

* Prevents overly crowded or noisy contours
* Use lower values for cleaner, more sparse outlines

**Min Density**

_Requires a minimum density level in cells._

* Ensures that only cells with sufficient point concentration are processed
* Set to 0 to include all shapes regardless of density

**Max Size**

_Limits the maximum size (in points) of a cell._

* Controls performance by limiting how many points can be in one cell
* Use lower values for faster processing, higher values for more detail

**Min Size**

_Requires a minimum number of points in cells._

* Filters out very small or empty cells
* Set to 0 to include all cells regardless of point count

***

#### Cell Artifacts

Controls what additional information is output along with the contour points.

**Output Orientation**

_Specifies whether the cell contours are output in clockwise or counter-clockwise order._

* **Clockwise**: Contours follow a clockwise winding
* **Counter Clockwise**: Contours follow a counter-clockwise winding

**Shape Type Output**

_Determines which types of cell shapes to include in the output._

* **Convex & Concave**: Include both convex and concave cells
* **Convex Only**: Only output convex cells
* **Concave Only**: Only output concave cells

**Seed Location**

_Specifies where the seed point for contour tracing is placed._

* **Original**: Use the original seed position
* **Centroid**: Place the seed at the centroid of the path
* **Path bounds center**: Place the seed at the center of the path's bounding box
* **First Node**: Place the seed on the first node in the path

**Output Properties**

_Selects which properties to output for each cell._

* **None**: No additional properties are added
* **Density**: Outputs density information as a scalar value
* **Steepness**: Outputs steepness information as a scalar value
* **R Channel**: Outputs red channel color value
* **G Channel**: Outputs green channel color value
* **B Channel**: Outputs blue channel color value
* **A Channel**: Outputs alpha channel color value

**Output Path Length**

_Controls whether to output the length of each path._

* When enabled, adds a scalar attribute containing the total length of the path

**Output Area**

_Controls whether to output the area of each cell._

* When enabled, adds a scalar attribute containing the area enclosed by the contour

***

#### Projection Settings

Controls how 3D points are projected onto a 2D plane for contour tracing.

**Use Projection**

_Enables or disables 2D projection of input points._

* When enabled, all points are projected to a 2D plane before processing
* When disabled, 3D coordinates are used directly

**Projection Plane**

_Specifies the plane onto which points are projected._

* **XY**: Project onto the XY plane (default)
* **XZ**: Project onto the XZ plane
* **YZ**: Project onto the YZ plane

**Normal Vector**

_Defines the normal vector of the projection plane._

* Only used when "Use Projection" is enabled
* Affects how points are projected onto the chosen plane

***

#### Performance Settings

Controls performance-related options for contour tracing.

**Use Octree Search**

_Enables or disables octree-based search for closest nodes._

* When enabled, uses an octree to speed up node lookup during pathfinding
* Can significantly improve performance on large datasets with many points
* May slow down processing on small datasets due to overhead

### Notes

* This node is computationally intensive and may take time on large datasets.
* For best results, ensure your input clusters are well-defined and have clear boundaries.
* The output contours can be used as the basis for further processing like mesh generation or collision detection.
* Consider using "Max Path Length" and "Max Area" to prevent performance issues with complex or large clusters.
* If you're getting unexpected results, try adjusting the "Min Size" constraint to filter out very small cells that might be causing artifacts.
