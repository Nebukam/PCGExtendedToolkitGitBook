---
description: 'In editor :: PCGEx | Get Texture Data'
icon: scrubber
---

# Get Texture Data

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Create texture data objects from asset paths for procedural generation workflows.

#### Overview

This node reads texture or material paths from point attributes and builds texture data objects that can be used for sampling in procedural generation. It allows you to associate textures with points and define how those textures should be sampled, including filtering methods, transformations, and tiling options.

It's useful when you want to apply texture-based data to points, such as using material paths from a mesh to sample heightmaps or normal maps, or when you need to generate point data based on texture values for further processing.

{% hint style="info" %}
Connects to **Point Filters** subnode and outputs processed points with texture data.
{% endhint %}

#### How It Works

This node processes input points by reading either texture paths or material paths from a specified attribute. For each unique reference found, it builds a texture data object that can be used for sampling. The processing involves:

1. Reading the path type (texture or material) and attribute name to extract asset references
2. Resolving material references to find associated textures
3. Building texture data objects with defined sampling parameters
4. Applying transformations and tiling settings to control how samples are taken
5. Writing resolved texture paths and/or building texture data for each unique reference

The node supports both point-based sampling (nearest texel) and bilinear interpolation between neighboring texels, allowing for smooth transitions in sampled values.

<details>

<summary>Inputs</summary>

Expects points with an attribute containing either texture or material paths. The input can be filtered using the Point Filters subnode.

</details>

<details>

<summary>Outputs</summary>

Produces points with associated texture data objects. If enabled, it writes resolved texture paths and builds PCG Texture data for each unique reference found.

</details>

#### Configuration

<details>

<summary><strong>SourceType</strong><br><em>Type of path.</em></summary>

Controls whether the node reads from a texture path or material path attribute.

**Values**:

* **TexturePath**: Point attribute contains a texture path
* **MaterialPath**: Point attribute contains a material path

</details>

<details>

<summary><strong>SourceAttributeName</strong><br><em>Name of the attribute to read asset path from (material or texture).</em></summary>

Name of the point attribute that contains either the texture or material path.

</details>

<details>

<summary><strong>bOutputTextureIds</strong><br><em>If enabled, will write resolved texture paths as per their definitions.</em></summary>

When enabled, writes resolved texture paths to output points. Only applicable when SourceType is set to MaterialPath.

</details>

<details>

<summary><strong>bBuildTextureData</strong><br><em>If enabled, will build PCG Texture data for each unique texture reference found.</em></summary>

When enabled, creates PCG Texture data objects for each unique texture reference. Only applicable when SourceType is set to MaterialPath.

</details>

<details>

<summary><strong>Filter</strong><br><em>Method used to determine the value for a sample based on the value of nearby texels.</em></summary>

Controls how samples are interpolated from texture data.

**Values**:

* **Point**: Takes the value of whatever texel the sample lands in
* **Bilinear**: Bilinearly interpolates the values of the four nearest texels to the sample location

</details>

<details>

<summary><strong>Transform</strong><br><em>Surface transform.</em></summary>

Applies a transformation to the surface before sampling.

</details>

<details>

<summary><strong>bUseAbsoluteTransform</strong><br><em>Whether to use absolute transform values.</em></summary>

When enabled, uses absolute transform values instead of relative ones.

</details>

<details>

<summary><strong>ColorChannel</strong><br><em>Which color channel to sample from the texture.</em></summary>

Selects which color channel (R, G, B, A) to use for sampling.

</details>

<details>

<summary><strong>TexelSize</strong><br><em>The size of one texel in cm, used when calling ToPointData.</em></summary>

Defines the physical size of a single texel in centimeters. This is used when converting texture data to point data.

</details>

<details>

<summary><strong>Rotation</strong><br><em>Rotation to apply when sampling texture.</em></summary>

Applies a rotation to the sampling area, in degrees.

</details>

<details>

<summary><strong>bUseAdvancedTiling</strong><br><em>Whether to tile the source or to stretch it to fit target area.</em></summary>

When enabled, allows advanced tiling controls for texture sampling.

</details>

<details>

<summary><strong>Tiling</strong><br><em>Whether to tile the source or to stretch it to fit target area.</em></summary>

Controls how the texture is tiled across the sampling area. Values are in UV space.

</details>

<details>

<summary><strong>CenterOffset</strong><br><em>Offset from center for tiling.</em></summary>

Shifts the tiling pattern by a specified offset in UV space.

</details>

<details>

<summary><strong>bUseTileBounds</strong><br><em>Whether to use tile bounds for sampling.</em></summary>

When enabled, restricts sampling to a specific tile bounds area.

</details>

<details>

<summary><strong>TileBounds</strong><br><em>Bounds of the tile to sample from.</em></summary>

Defines the UV bounds within which to sample when tiling is enabled.

</details>

#### Usage Example

Use this node in a workflow where you have points with material paths and want to sample texture data for each point. For example, you could:

1. Create points on a mesh
2. Assign material paths to those points using a separate node
3. Connect this node to read those paths and build texture data
4. Use the resulting texture data in downstream nodes for height or normal map sampling

#### Notes

* The node supports both direct texture paths and material paths that resolve to textures
* Texture data objects are built asynchronously to avoid blocking the main thread
* When using bilinear filtering, performance is slightly reduced compared to point sampling
* Tiling parameters allow for complex texture mapping scenarios
* The node can output multiple texture data objects if different materials reference different textures
