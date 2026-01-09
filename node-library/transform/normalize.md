---
description: 'In editor :: PCGEx | Normalize'
icon: circle
---

# Normalize

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Output normalized position against data bounds to a new vector attribute.

### Overview

This node maps the input point positions into a normalized space, typically between 0 and 1, based on the bounding box of your data. It's useful for creating consistent scaling, positioning, or blending effects across different datasets. The output is written to a new vector attribute that you define.

{% hint style="info" %}
The normalization is performed in local space relative to the bounds of your input data. If you need world-space normalization, consider using a "Transform" node before this one.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Default): Points to be normalized
* **Optional Transform Attribute** (when enabled): A transform attribute to apply before normalization

</details>

<details>

<summary>Outputs</summary>

* **Main Output** (Default): Points with normalized positions written to a new vector attribute

</details>

### Properties Overview

Controls how the normalization is calculated and applied.

***

#### Normalization Settings

Determines the space into which points are normalized.

**Bounds Source**

_Controls what bounds are used for normalization._

* Uses either scaled bounds, density bounds, raw bounds, or a tiny center box
* **Scaled Bounds**: Scaled version of the point cloud's bounding box
* **Density Bounds**: Scaled bounds adjusted by density parameters
* **Bounds**: Raw, unscaled bounding box
* **Center**: A tiny size 1 box centered at the origin

**Offset**

_Adds a constant offset to the normalized result._

* Applied after normalization, before tiling or wrapping
* Can be used to shift the output space (e.g., offset by -0.5 to center around zero)

**Tile**

_Tiles the normalized values across each axis._

* Values are repeated in a grid pattern when they exceed 1 or go below 0
* Useful for creating repeating patterns or tiling effects
* Example: Setting to (2, 1, 1) will repeat the normalized range twice along the X-axis

**Wrapping**

_How to handle values that fall outside the \[0,1] range._

* **Tile**: Repeats values in a grid pattern (0,1,2,0,1,2...)
* **Clamp**: Clamps values to 0 or 1 (0,1,1,1,1,1...)
* **Yoyo**: Mirrors and bounces values back (0,1,2,1,0,1...)
* **Ignore**: Leaves out-of-bounds values unchanged

**One Minus**

_Toggles whether to invert specific components of the normalized vector._

* When enabled for a component (X, Y, or Z), the result is subtracted from 1
* Useful for inverting axis directions or creating mirrored effects
* Example: Enabling only X will flip the X component of the output

**Transform Input**

_Controls whether to read transform data from an attribute or use a constant._

* **Constant**: Use the constant transform value below
* **Attribute**: Read the transform from an attribute on input points

**Transform (Attr)**

_The attribute containing the transform to apply before normalization._

* Only visible when "Transform Input" is set to "Attribute"
* Allows per-point transformation before normalization

**Transform**

_The constant transform to apply before normalization._

* Only visible when "Transform Input" is set to "Constant"
* Applies the same transform to all points

**Output**

_Name of the new vector attribute where normalized positions are stored._

* This attribute will be created if it doesn't exist
* The output values are in the range \[0,1] for each component unless modified by other settings

### Notes

* Normalization is particularly useful when you want to map data to a consistent space regardless of its original scale or position
* Combine with "One Minus" and "Tile" to create complex mapping effects
* Use "Offset" to shift the normalized space, which can be helpful for centering or aligning with other data
* The node works best when your input points form a coherent cluster; scattered points may produce unexpected results
* Performance is generally good, but large datasets benefit from enabling bulk initialization in node settings
