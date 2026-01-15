---
description: 'In editor :: PCGEx | Shape : Circle'
icon: circle-dashed
---

# Shape : Circle

Create points in a circular shape.

📌 **Subnode** — Connects to **Shape Builders** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node generates points arranged in a circular shape based on specified angular parameters.
* It uses either an input attribute or a constant value to determine the start angle of the circle in degrees.
* Similarly, for the end angle, the node accepts either an attribute input or specifies it directly as a constant value in degrees.

#### Configuration

<details>

<summary><strong>Start Angle Input</strong> <code>PCGExInputValueType</code></summary>

Start angle source.

</details>

<details>

<summary><strong>Start Angle (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Start angle attribute, in degrees.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Start Angle</strong> <code>double</code></summary>

Start angle constant, in degrees.

⚡ PCG Overridable

</details>

<details>

<summary><strong>End Angle Input</strong> <code>PCGExInputValueType</code></summary>

End angle source.

</details>

<details>

<summary><strong>End Angle (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

End angle attribute, in degrees.

⚡ PCG Overridable

</details>

<details>

<summary><strong>End Angle</strong> <code>double</code></summary>

End angle constant, in degrees.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Is Closed Loop</strong> <code>bool</code></summary>

If enabled, will flag circle as being closed if possible.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExShapeCircleConfig</code></summary>

Shape properties

📦 See: ShapeCircle configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Start Angle Input</strong> <code>PCGExInputValueType</code></summary>

Start angle source.

</details>

<details>

<summary><strong>Start Angle (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Start angle attribute, in degrees.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Start Angle</strong> <code>double</code></summary>

Start angle constant, in degrees.

⚡ PCG Overridable

</details>

<details>

<summary><strong>End Angle Input</strong> <code>PCGExInputValueType</code></summary>

End angle source.

</details>

<details>

<summary><strong>End Angle (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

End angle attribute, in degrees.

⚡ PCG Overridable

</details>

<details>

<summary><strong>End Angle</strong> <code>double</code></summary>

End angle constant, in degrees.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Is Closed Loop</strong> <code>bool</code></summary>

If enabled, will flag circle as being closed if possible.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsShapes\Public\Shapes\PCGExShapeCircle.h`
