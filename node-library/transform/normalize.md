---
description: 'In editor :: PCGEx | Normalize'
icon: circle
---

# Normalize

Output normalized position against data bounds to a new vector attribute.

**How It Works**

> AI-Generated, needs proofreading

* The Normalize node computes normalized positions of input data based on bounds derived from `PCGExPointBoundsSource`.
* It applies an offset and tile vector to adjust the position within the specified bounds before normalization.
* Depending on the settings for "One Minus," the node modifies specific components of the output vector by subtracting their values from one.
* The process ensures index safety through the `PCGExIndexSafety` wrapping method, preventing out-of-bound errors during computation.

#### Configuration

<details>

<summary><strong>Bounds Source</strong> <code>PCGExPointBoundsSource</code></summary>

Controls bounds source.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Offset</strong> <code>Vector</code></summary>

Controls offset.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tile</strong> <code>Vector</code></summary>

Controls tile.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Wrapping</strong> <code>PCGExIndexSafety</code></summary>

Controls wrapping.

⚡ PCG Overridable

</details>

<details>

<summary><strong>One Minus</strong> <code>uint8</code></summary>

Which components should be one minus'd

</details>

<details>

<summary><strong>Transform Input</strong> <code>PCGExInputValueType</code></summary>

Whether to read the transform from an attribute on the edge or a constant.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Transform (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Transform applied to the position before processing

⚡ PCG Overridable

</details>

<details>

<summary><strong>Transform</strong> <code>Transform</code></summary>

Transform applied to the position before processing

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Controls output.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsSpatial\Public\Elements\PCGExNormalize.h`
