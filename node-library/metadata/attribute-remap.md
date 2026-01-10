---
description: 'In editor :: PCGEx | Attribute Remap'
icon: circle
---

# Attribute Remap

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Remap a single property or attribute.

#### How It Works

The Attribute Remap node adjusts the values of a selected point attribute by applying mathematical transformations. It takes input values and maps them to a new range using configurable rules. The node can work with both single-value attributes (like scalars) and multi-component attributes (like vectors or colors).

For each component of an attribute, you define how it should be remapped:

* First, input values are clamped to a specified range
* Then, they are transformed using either a linear or curve-based function
* Finally, output values are clamped to another specified range

When working with multi-component attributes, you can set different rules for each component (X, Y, Z, W). The first rule applies to the first component, and additional rules can override it for other components.

#### Configuration

<details>

<summary><strong>Source Attribute</strong><br><em>The name of the input attribute to remap.</em></summary>

Selects which attribute from the input points will be used as the source for remapping. This can be a scalar, vector, or color-type attribute.

</details>

<details>

<summary><strong>Target Attribute</strong><br><em>The name of the output attribute to write the remapped values into.</em></summary>

Selects which attribute to write the remapped values into. If it doesn't exist, a new one will be created with the same type as the source.

</details>

<details>

<summary><strong>Remap (Default)</strong><br><em>Remapping rule for single-component values or first component.</em></summary>

Defines how to remap values for scalar attributes or the first component of multi-component attributes. Includes settings for input clamping, remapping function, and output clamping.

</details>

<details>

<summary><strong>Clamp Input</strong><br><em>Input range clamping for the default remap rule.</em></summary>

Sets a minimum and maximum value to which all input values are clamped before remapping. Any value below the minimum is set to the minimum, and any above the maximum is set to the maximum.

</details>

<details>

<summary><strong>Remap Function</strong><br><em>The mathematical function used for remapping.</em></summary>

Defines how input values are transformed into output values:

* **Linear**: Simple linear mapping between input and output ranges.
* **Curve**: Uses a custom curve to define the transformation.

</details>

<details>

<summary><strong>Output Clamp</strong><br><em>Output range clamping for the default remap rule.</em></summary>

Sets a minimum and maximum value to which all output values are clamped after remapping. Any value below the minimum is set to the minimum, and any above the maximum is set to the maximum.

</details>

<details>

<summary><strong>Remap (2nd Component)</strong><br><em>Remapping rule for second component (Y) of multi-component attributes.</em></summary>

Overrides the default remap rule for the Y component of vector or color attributes. When enabled, this rule is used instead of the default one for that specific component.

</details>

<details>

<summary><strong>Remap (3rd Component)</strong><br><em>Remapping rule for third component (Z) of multi-component attributes.</em></summary>

Overrides the default remap rule for the Z component of vector or color attributes. When enabled, this rule is used instead of the default one for that specific component.

</details>

<details>

<summary><strong>Remap (4th Component)</strong><br><em>Remapping rule for fourth component (W) of multi-component attributes.</em></summary>

Overrides the default remap rule for the W component of vector or color attributes. When enabled, this rule is used instead of the default one for that specific component.

</details>

<details>

<summary><strong>Auto-Cast Integer to Double</strong><br><em>When enabled, integer values are converted to double before processing.</em></summary>

When enabled, ensures that integer-valued attributes are treated as double-precision floating-point numbers during remapping for more accurate results.

</details>

#### Usage Example

You have a point cloud with a scalar attribute named "NoiseValue" ranging from 0.0 to 1.0 and want to map it to a color intensity range of 0.0 to 255.0:

1. Set the **Source Attribute** to `NoiseValue`.
2. Set the **Target Attribute** to `ColorIntensity`.
3. In the **Remap (Default)** settings:
   * Set **Input Clamp Min** to 0.0 and **Max** to 1.0.
   * Choose **Remap Function** as Linear.
   * Set **Output Clamp Min** to 0.0 and **Max** to 255.0.

This will scale the noise values linearly from 0–1 to 0–255, which can then be used for color mapping or other intensity-based effects.

#### Notes

* The node supports all standard PCG metadata types including scalars, vectors, and colors.
* Multi-component attributes are processed component-wise using either default rules or per-component overrides.
* Remapping is applied in parallel across points for performance.
* If you're working with color data, consider using the **Color** type attribute to preserve color space integrity.
