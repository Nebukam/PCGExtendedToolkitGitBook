---
description: 'In editor :: PCGEx | Path : Solidify'
icon: circle
---

# Solidify

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Solidify a path by expanding it into a 3D shape using axis-aligned offsets.

#### How It Works

The Path : Solidify node takes a path and transforms it into a solid 3D volume by applying offset distances along three perpendicular axes. For each point in the path, it calculates the local orientation using the segment direction and normal, then applies specified offsets to generate new points that define an expanded shape around the original path.

The process works as follows:

1. The node determines the local orientation at each point based on the path's direction and normal.
2. It applies offset distances along three axes (Primary, Secondary, Tertiary) which are defined by the selected axis order.
3. New points are generated using these offsets to create a solid shape around the original path.
4. If the path is not closed, the final point is optionally removed to prevent invalid solidification at the end.

The node supports both fixed values and attribute-driven settings for all offset parameters, allowing dynamic control over how the solidification is applied along the path.

#### Configuration

<details>

<summary><strong>Remove Last Point</strong><br><em>If the path is not closed, the last point cannot be solidified, thus it's usually preferable to remove it.</em></summary>

When enabled, removes the final point of open paths to avoid invalid solidification at the end of the path.

</details>

<details>

<summary><strong>Solidification Order</strong><br><em>Axis order. First axis will use the segment direction, second is the path normal. These are Primary > Secondary > Tertiary.</em></summary>

Defines the sequence in which axes are applied to calculate the offset shape.

* **XYZ**: Primary = Segment Direction, Secondary = Path Normal, Tertiary = Cross Product
* **XZY**: Primary = Segment Direction, Secondary = Cross Product, Tertiary = Path Normal
* **YXZ**: Primary = Path Normal, Secondary = Segment Direction, Tertiary = Cross Product
* **YZX**: Primary = Path Normal, Secondary = Cross Product, Tertiary = Segment Direction
* **ZXY**: Primary = Cross Product, Secondary = Segment Direction, Tertiary = Path Normal
* **ZYX**: Primary = Cross Product, Secondary = Path Normal, Tertiary = Segment Direction

</details>

<details>

<summary><strong>Read Order From Attribute</strong><br><em>.</em></summary>

When enabled, reads the axis order from a point attribute instead of using the constant value.

</details>

<details>

<summary><strong>Order Attribute</strong><br><em>Solidification Order attribute.</em></summary>

The name of the attribute to read the axis order from. Requires integer values that map to EPCGExAxisOrder.

</details>

<details>

<summary><strong>Order Safety</strong><br><em>How to "sanitize" the input value.</em></summary>

Controls how invalid or out-of-bounds values from the attribute are handled.

* **Ignore**: Uses default order if the attribute value is invalid
* **Tile**: Wraps around valid indices (0,1,2,0,1,2...)
* **Clamp**: Clamps to nearest valid index (0,1,2,2,2,2...)
* **Yoyo**: Mirrors and back (0,1,2,1,0,1...)

</details>

<details>

<summary><strong>Use Construction Mapping</strong><br><em>.</em></summary>

When enabled, allows mapping of rotation construction based on the selected axis order.

</details>

<details>

<summary><strong>Rotation Mapping</strong><br><em>Map of rotation construction orders based on selected mapping.</em></summary>

Defines how rotations are constructed for each axis order. Maps EPCGExAxisOrder to EPCGExMakeRotAxis.

</details>

<details>

<summary><strong>Rotation Construction</strong><br><em>Defines how the selected axis will be used to construct the point' rotation.</em></summary>

Controls how the rotation is calculated when not using mapping.

* **X**: Use Primary Axis
* **Y**: Use Secondary Axis
* **Z**: Use Tertiary Axis

</details>

<details>

<summary><strong>Read Construction From Attribute</strong><br><em>.</em></summary>

When enabled, reads the rotation construction from a point attribute instead of using the constant value.

</details>

<details>

<summary><strong>Construction Attribute</strong><br><em>Rotation Construction attribute.</em></summary>

The name of the attribute to read the rotation construction from. Requires integer values that map to EPCGExMakeRotAxis.

</details>

<details>

<summary><strong>Construction Safety</strong><br><em>How to "sanitize" the input value.</em></summary>

Controls how invalid or out-of-bounds values from the attribute are handled.

* **Ignore**: Uses default construction if the attribute value is invalid
* **Tile**: Wraps around valid indices (0,1,2,0,1,2...)
* **Clamp**: Clamps to nearest valid index (0,1,2,2,2,2...)
* **Yoyo**: Mirrors and back (0,1,2,1,0,1...)

</details>

<details>

<summary><strong>Primary Axis</strong><br><em>Primary axis settings (direction aligned to the segment)</em></summary>

Settings for the primary offset axis, aligned with the path's segment direction.

* **Flip Input**: Toggle between constant or attribute-driven flip
* **Flip**: Whether to invert the offset direction along this axis
* **Flip (Attr)**: Attribute name for flip value

</details>

<details>

<summary><strong>Secondary Axis</strong><br><em>Secondary axis settings, relative to the selected order</em></summary>

Settings for the secondary offset axis, typically aligned with the path normal.

* **Radius Input**: Toggle between constant or attribute-driven radius
* **Radius**: Constant offset distance along this axis
* **Radius (Attr)**: Attribute name for radius value
* **Flip Input**: Toggle between constant or attribute-driven flip
* **Flip**: Whether to invert the offset direction along this axis
* **Flip (Attr)**: Attribute name for flip value

</details>

<details>

<summary><strong>Tertiary Axis</strong><br><em>Tertiary axis settings, relative to the selected order</em></summary>

Settings for the tertiary offset axis, typically perpendicular to the path.

* **Radius Input**: Toggle between constant or attribute-driven radius
* **Radius**: Constant offset distance along this axis
* **Radius (Attr)**: Attribute name for radius value
* **Flip Input**: Toggle between constant or attribute-driven flip
* **Flip**: Whether to invert the offset direction along this axis
* **Flip (Attr)**: Attribute name for flip value

</details>

<details>

<summary><strong>Normal Type</strong><br><em>How should the cross direction (Cross) be computed.</em></summary>

Controls how the path normal is determined.

* **Constant**: Use the constant Normal setting
* **Attribute**: Read normal from a point attribute

</details>

<details>

<summary><strong>Normal</strong><br><em>Type of arithmetic path point cross direction.</em></summary>

Defines how to compute the cross direction when using constant mode.

* **Normal**: Standard path normal
* **Binormal**: Alternate normal based on binormal vector
* **Average Normal**: Averaged normal from adjacent segments

</details>

<details>

<summary><strong>Invert Direction</strong><br><em>Inverts normal direction.</em></summary>

When enabled, flips the computed normal direction.

</details>

<details>

<summary><strong>Solidification Lerp Input</strong><br><em>Solidification Lerp attribute .</em></summary>

Controls how to interpolate between solidification settings.

* **Constant**: Use a fixed value
* **Attribute**: Read from a point attribute

</details>

<details>

<summary><strong>Solidification Lerp</strong><br><em>Solidification Lerp constant.</em></summary>

The fixed interpolation value when using constant mode. Ranges from 0 (no solidification) to 1 (full solidification).

</details>

#### Usage Example

Create a path representing a winding road, then use Path : Solidify to extrude it into a 3D road shape. Set the Secondary and Tertiary axes to have a radius of 5 units each, and enable "Remove Last Point" for open paths. This will generate a solid road volume that can be used as a base for textures or collision geometry.

#### Notes

* The node works best with closed paths but can handle open paths by removing the last point.
* Axis order affects how the offset shape is calculated; experiment with different orders to achieve desired results.
* Attribute-driven settings allow dynamic control over solidification based on point properties.
* Performance may be impacted when using attribute-driven values for large datasets.
