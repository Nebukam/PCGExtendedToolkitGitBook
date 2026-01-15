---
description: 'In editor :: PCGEx | Path : Solidify'
icon: circle
---

# Solidify

Solidify a path.

**How It Works**

> AI-Generated, needs proofreading

* The Solidify node processes a path by adding depth to it, effectively turning it into a three-dimensional object.
* It uses the Radius setting to determine the thickness of the solidified object; if Radius Input is specified, it adjusts the radius based on that input value type.
* The Flip settings (Flip and Flip (Attr)) allow for inverting the direction along an axis, with Flip Input defining how this inversion is applied based on its input value type.

#### Configuration

<details>

<summary><strong>Flip Input</strong> <code>PCGExInputValueToggle</code></summary>

Input value type for flip

</details>

<details>

<summary><strong>Flip</strong> <code>bool</code></summary>

Whether to flip this axis or not

⚡ PCG Overridable

</details>

<details>

<summary><strong>Flip (Attr)</strong> <code>Name</code></summary>

Whether to flip this axis or not

⚡ PCG Overridable

</details>

<details>

<summary><strong>Radius Input</strong> <code>PCGExInputValueToggle</code></summary>

Input value type for Radius

</details>

<details>

<summary><strong>Radius</strong> <code>double</code></summary>

Constant Radius for this axis

⚡ PCG Overridable

</details>

<details>

<summary><strong>Radius (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute-driven radius for this axis

⚡ PCG Overridable

</details>

<details>

<summary><strong>Remove Last Point</strong> <code>bool</code></summary>

If the path is not closed, the last point cannot be solidified, thus it's usually preferable to remove it.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Solidification Order</strong> <code>PCGExAxisOrder</code></summary>

Axis order. First axis will use the segment direction, second is the path normal. These are Primary > Secondary > Tertiary.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Read Order From Attribute</strong> <code>bool</code></summary>

.

</details>

<details>

<summary><strong>Order Attribute</strong> <code>Name</code></summary>

Solidification Order attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Order Safety</strong> <code>PCGExIndexSafety</code></summary>

Controls └─ order safety.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Construction Mapping</strong> <code>bool</code></summary>

.

</details>

<details>

<summary><strong>Rotation Mapping</strong> <code>Map of EPCGExAxisOrder, EPCGExMakeRotAxis</code></summary>

Map of rotation construction orders based on selected mapping.

</details>

<details>

<summary><strong>Rotation Construction</strong> <code>PCGExMakeRotAxis</code></summary>

Defines how the selected axis will be used to construct the point' rotation. This will be using remapped axis from the selected order. X = Primary, Y = Secondary, Z = Tertiary

⚡ PCG Overridable

</details>

<details>

<summary><strong>Read Construction From Attribute</strong> <code>bool</code></summary>

.

</details>

<details>

<summary><strong>Construction Attribute</strong> <code>Name</code></summary>

Rotation Construction attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Construction Safety</strong> <code>PCGExIndexSafety</code></summary>

Controls └─ construction safety.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Primary</strong> <code>PCGExPathSolidificationAxisDetails</code></summary>

Primary axis settings (direction aligned to the segment)

📦 See: PathSolidificationAxis configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Secondary</strong> <code>PCGExPathSolidificationRadiusDetails</code></summary>

Secondary axis settings, relative to the selected order

📦 See: PathSolidificationRadius configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tertiary</strong> <code>PCGExPathSolidificationRadiusDetails</code></summary>

Tertiary axis settings, relative to the selected order

📦 See: PathSolidificationRadius configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Normal Type</strong> <code>PCGExInputValueType</code></summary>

How should the cross direction (Cross) be computed.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Normal (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Fetch the cross direction vector from a local point attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Normal</strong> <code>PCGExPathNormalDirection</code></summary>

Type of arithmetic path point cross direction.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Invert Direction</strong> <code>bool</code></summary>

Inverts normal direction.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Solidification Lerp Input</strong> <code>PCGExInputValueType</code></summary>

Controls solidification lerp input.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Solidification Lerp (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Solidification Lerp attribute .

⚡ PCG Overridable

</details>

<details>

<summary><strong>Solidification Lerp</strong> <code>double</code></summary>

Solidification Lerp constant.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsPaths\Public\Elements\PCGExPathSolidify.h`
