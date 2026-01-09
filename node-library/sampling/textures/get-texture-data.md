---
description: 'In editor :: PCGEx | Get Texture Data'
icon: scrubber
---

# Get Texture Data

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Create texture data object from paths.

### Overview

This node reads texture or material paths from point attributes and resolves them into texture data that can be used for sampling in subsequent nodes. It's particularly useful when you want to sample textures based on point data, such as using different textures per instance or generating texture-based variations in your procedural content.

The node supports both direct texture paths and material paths. When using materials, it can extract texture references from the material's parameters and build texture data objects for each unique texture found. It also handles advanced tiling options when sampling textures, allowing you to control how textures are mapped onto surfaces.

{% hint style="info" %}
This node requires point data with either texture or material paths in attributes. The resolved texture data can then be used by other sampling nodes in your graph.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Default Input** (Required): Point data containing texture or material paths
* **Filters** (Optional): Point filters to control which points are processed

</details>

<details>

<summary>Outputs</summary>

* **Default Output**: Modified point data with texture sampling attributes
* **Texture Data** (Optional): Texture data objects created from the resolved paths

</details>

### Properties Overview

Settings for controlling how texture paths are read and processed.

***

#### Data Source

Controls how the node reads texture or material paths from input points.

**Source Type**

_Whether to read texture paths directly or extract them from material paths._

* When set to **Texture Path**, the node reads direct texture asset paths from the attribute
* When set to **Material Path**, the node reads material asset paths and extracts texture references from them

**Values**:

* **Texture Path**: Read texture paths directly from the attribute
* **Material Path**: Read material paths and extract texture references from materials

**Source Attribute Name**

_Name of the point attribute containing paths._

* This attribute should contain either texture paths or material paths depending on the Source Type setting
* The attribute must be of type String or Soft Object Path

**Output Texture IDs**

_When enabled, writes resolved texture paths to output points._

* Creates a new attribute with the resolved texture paths for each point
* Useful for debugging or when you need access to the actual texture paths in downstream nodes

**Build Texture Data**

_When enabled, creates PCG Texture data objects from material references._

* Builds texture data for each unique texture found in materials
* Required if you want to sample textures directly from this node's output

***

#### Sampling Settings

Controls how texture samples are computed and transformed.

**Filter Method**

_Method used to determine sample values based on nearby texels._

* **Point**: Takes the value of whatever texel the sample lands in (nearest neighbor sampling)
* **Bilinear**: Bilinearly interpolates values from the four nearest texels (smooth sampling)

**Transform**

_Transform applied to texture coordinates before sampling._

* Allows you to scale, rotate, or translate texture sampling coordinates
* Useful for aligning textures with surfaces or creating UV variations

**Use Absolute Transform**

_When enabled, applies the transform without considering point location._

* The transform is applied directly to texture coordinates rather than being relative to point positions
* Useful when you want consistent texture mapping regardless of point placement

**Color Channel**

_Color channel to sample from textures._

* Controls which channel (R, G, B, A) or combination of channels to read
* For materials, this determines which parameter to sample from
* Can be used to extract specific color components or alpha values

**Texel Size**

_Size of one texel in centimeters._

* Used when converting texture data to point data
* Determines the resolution and scale of texture sampling
* Default value is 50.0 cm (500 mm)

***

#### Advanced Tiling

Controls how textures are tiled or stretched when sampled.

**Use Advanced Tiling**

_When enabled, allows advanced tiling controls._

* Enables rotation, tiling factors, and offset controls for texture mapping
* Required to use any of the advanced tiling settings

**Rotation**

_Rotation applied to texture coordinates in degrees._

* Rotates the texture before sampling
* Can be used to align textures with surface orientation or create pattern variations
* Value range: -360 to 360 degrees

**Tiling**

_Tiling factors for U and V coordinates._

* Controls how many times the texture repeats across the surface
* Values of (1,1) = no tiling, (2,2) = texture repeats twice in both directions
* Default value is (1.0, 1.0)

**Center Offset**

_Offset from center point for texture sampling._

* Shifts the texture sampling location relative to the point
* Can be used to create offset patterns or align textures with specific features
* Values are normalized between -0.5 and 0.5

**Use Tile Bounds**

_When enabled, restricts sampling to a specific tile area._

* Limits texture sampling to a defined rectangular region
* Useful for creating texture variations within bounds or avoiding edge artifacts

**Tile Bounds**

_Rectangular area defining the sampling bounds._

* Specifies the UV coordinates of the tile area to sample from
* Default is centered on (0,0) with size (1,1)
* Values are normalized between -0.5 and 0.5
