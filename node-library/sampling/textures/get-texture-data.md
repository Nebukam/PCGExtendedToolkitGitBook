---
description: 'In editor :: PCGEx | Get Texture Data'
icon: scrubber
---

# Get Texture Data

Create texture data object from paths.

**How It Works**

> AI-Generated, needs proofreading

* Reads asset paths from an attribute specified by "Source Attribute Name", which can be either material or texture based on "Source Type".
* Builds PCG Texture data for each unique texture reference if "Build Texture Data" is enabled.
* Writes resolved texture paths as per their definitions if "Output Texture Ids" is enabled.

#### Configuration

<details>

<summary><strong>Source Type</strong> <code>PCGExGetTexturePathType</code></summary>

Type of path

**Values:**

* **Texture Path**: Point attribute contains a texture path
* **Material Path**: Point attribute contains a material path

⚡ PCG Overridable

</details>

<details>

<summary><strong>Source Attribute Name</strong> <code>Name</code></summary>

Name of the attribute to read asset path from (material or texture).

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Texture Ids</strong> <code>bool</code></summary>

If enabled, will write resolved texture paths as per their definitions.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Build Texture Data</strong> <code>bool</code></summary>

If enabled, will build PCG Texture data for each unique texture reference found.

⚡ PCG Overridable

</details>

**Data**

<details>

<summary><strong>Filter</strong> <code>PCGExTextureFilter</code></summary>

Method used to determine the value for a sample based on the value of nearby texels.

**Values:**

* **Point**: Takes the value of whatever texel the sample lands in.
* **Bilinear**: Bilinearly interpolates the values of the four nearest texels to the sample location.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Transform</strong> <code>Transform</code></summary>

Surface transform

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Absolute Transform</strong> <code>bool</code></summary>

Controls use absolute transform.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Color Channel</strong> <code>PCGTextureColorChannel</code></summary>

Controls color channel.

</details>

<details>

<summary><strong>Texel Size</strong> <code>float</code></summary>

The size of one texel in cm, used when calling ToPointData.

_Range: min: 1.0_

</details>

<details>

<summary><strong>Rotation</strong> <code>float</code></summary>

Rotation to apply when sampling texture.

</details>

<details>

<summary><strong>Use Advanced Tiling</strong> <code>bool</code></summary>

Whether to tile the source or to stretch it to fit target area.

</details>

**Data > Tiling**

<details>

<summary><strong>Tiling</strong> <code>Vector2D</code></summary>

Controls tiling.

</details>

<details>

<summary><strong>Center Offset</strong> <code>Vector2D</code></summary>

Controls center offset.

</details>

<details>

<summary><strong>Use Tile Bounds</strong> <code>bool</code></summary>

Controls use tile bounds.

</details>

<details>

<summary><strong>Tile Bounds</strong> <code>Box2D</code></summary>

Controls tile bounds.

</details>

***

Source: `Source\PCGExElementsSampling\Public\Elements\PCGExGetTextureData.h`
