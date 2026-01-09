---
description: 'In editor :: PCGEx | Topology : Path Surface'
icon: circle
---

# Path Surface

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Create a path surface topology from input points.

### Overview

This node generates a 2D mesh surface from a set of input points that represent a path or network of paths. It's designed for creating terrain, roads, or any linear structure with a defined width and surface geometry. The output can be either individual geometries per path or a single merged mesh.

{% hint style="info" %}
This node works best with point data that represents a continuous path or multiple connected paths. It will create a surface that follows the path's direction and width.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Default): Points representing a path or network of paths
* **Point Filters**: Optional filters to select specific points from the input

</details>

<details>

<summary>Outputs</summary>

* **Output** (Default): Generated mesh geometry representing the path surface
* **Preview Output** (Optional): Visual preview of the generated topology

</details>

### Properties Overview

Controls how the path surface is generated and what type of output is produced.

***

#### Topology Settings

Configures the core properties of the generated surface.

**Output Type**

_Controls whether to generate individual geometries or merge them into one._

* **Per-item Geometry**: Each path generates its own separate mesh geometry
* **Merged Geometry**: All paths are combined into a single mesh geometry

**Surface Width**

_Sets the width of the generated surface along the path._

* Controls how wide the resulting surface will be
* Value is in world units (typically Unreal units)
* Default value is 10.0

**Surface Height**

_Sets the height of the generated surface above the path._

* Controls how high the surface extends from the path
* Value is in world units
* Default value is 0.0 (flat surface)

**Surface Resolution**

_Determines the level of detail for the surface mesh._

* Higher values create smoother, more detailed surfaces
* Lower values produce simpler, less detailed geometry
* Default value is 1.0

**Enable Surface Offset**

_When enabled, offsets the surface along the path direction._

* Creates a lateral offset from the original path points
* Useful for creating parallel paths or offset surfaces
* Default is disabled

**Surface Offset Amount**

_Sets how far to offset the surface from the original path._

* Value is in world units
* Positive values offset in the forward direction of the path
* Negative values offset in the reverse direction
* Default value is 0.0

**Enable Surface Rotation**

_When enabled, rotates the surface along the path direction._

* Applies rotational offset to the surface as it follows the path
* Useful for creating curved or angled surfaces
* Default is disabled

**Surface Rotation Amount**

_Sets how much to rotate the surface along the path._

* Value is in degrees
* Positive values rotate counterclockwise
* Negative values rotate clockwise
* Default value is 0.0

**Enable Surface Scaling**

_When enabled, scales the surface along the path direction._

* Applies scaling factor to the surface as it follows the path
* Useful for creating tapering or expanding surfaces
* Default is disabled

**Surface Scale Amount**

_Sets how much to scale the surface along the path._

* Value is a multiplier (1.0 = no change)
* Values greater than 1.0 expand the surface
* Values less than 1.0 contract the surface
* Default value is 1.0

***

#### UV Settings

Controls how texture coordinates are applied to the generated surface.

**Enable UVs**

_When enabled, generates UV coordinates for the surface._

* Enables UV mapping on the output geometry
* Default is disabled

**UV Channel Count**

_Sets the number of UV channels to generate._

* Each channel can be assigned different UV data
* Values range from 0 to 8
* Default value is 1

**UV Attribute Name**

_Name of the attribute containing custom UV coordinates._

* If set, uses this attribute for UV generation
* Must be a FVector2D attribute
* Default is None (uses default projection)

**UV Channel Index**

_Sets which UV channel index to write to._

* Controls which channel in the mesh receives the generated UVs
* Values range from 0 to 7
* Default value is 0

***

#### Mesh Settings

Controls how the output mesh is constructed and rendered.

**Mesh Component Descriptor**

_Configures rendering properties for the output mesh._

* Controls visibility, draw distances, lighting, and collision settings
* Allows fine-tuning of how the mesh appears in the game world
* Default settings provide reasonable defaults for most use cases

**Dynamic Mesh Settings**

_Configures dynamic mesh-specific properties._

* Controls physics cooking behavior and collision generation
* Allows optimization for performance vs. accuracy
* Default settings provide reasonable defaults for most use cases

**Enable Collision**

_When enabled, generates collision geometry for the surface._

* Creates physics-enabled collision for the mesh
* Useful for interactive elements or physics-based interactions
* Default is disabled

**Collision Type**

_Sets the type of collision to generate._

* **Complex**: Full collision geometry based on the mesh
* **Simplified**: Simplified collision representation (faster)
* **None**: No collision geometry generated
* Default is None

***

#### Advanced Settings

Additional options for fine-tuning the topology generation.

**Enable Preview**

_When enabled, generates a preview of the topology._

* Shows visual representation of the generated surface
* Useful for debugging and visualization
* Default is disabled

**Preview Color**

_Sets the color used for preview visualization._

* Controls how the preview appears in the editor
* Default color is white

**Execution Policy**

_Configures how the node executes within the graph._

* **Default**: Standard execution behavior
* **No Pause**: Execution does not pause context
* **No Pause (Loop)**: Execution does not pause except in loops
* **No Pause (Top Loop)**: Execution does not pause except in top-level loops
* Default is Default

**Point Bounds Source**

_Sets how point bounds are calculated for processing._

* **Scaled Bounds**: Uses scaled bounds of points
* **Density Bounds**: Uses density-based bounds calculation
* **Bounds**: Uses raw bounds without scaling
* **Center**: Uses a tiny size 1 box at the point center
* Default is Scaled Bounds

**Point Filter**

_Specifies which points to include in processing._

* Filters input points based on various criteria
* Allows selection of specific paths or segments
* Default is no filtering

**Point Filter Types**

_Sets the types of data that can be filtered._

* Controls what kinds of point data can be used for filtering
* Default includes all supported types

**Enable Point Filters**

_When enabled, applies point filters to input data._

* Activates the point filtering system
* Allows selective processing of points
* Default is disabled
