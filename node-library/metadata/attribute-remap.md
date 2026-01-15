---
description: 'In editor :: PCGEx | Attribute Remap'
icon: circle
---

# Attribute Remap

Remap a single property or attribute.

**How It Works**

> AI-Generated, needs proofreading

* The Attribute Remap node processes a single property or attribute by remapping its values according to specified details.
* It uses the Clamp Input setting of type PCGExClampDetails to restrict input values within defined limits before remapping.
* The Remap Details, also of type PCGExRemapDetails, define how the input values are transformed into new values during the remapping process.
* After remapping, the Clamp Output setting of type PCGExClampDetails is applied to ensure output values fall within specified ranges.
* If Auto Cast Integer To Double is set to true, integer inputs are automatically cast to double precision floating-point numbers before processing.

#### Configuration

<details>

<summary><strong>Clamp Input</strong> <code>PCGExClampDetails</code></summary>

Controls clamp input.

📦 See: Clamp configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Remap Details</strong> <code>PCGExRemapDetails</code></summary>

Controls remap details.

📦 See: Remap configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Clamp Output</strong> <code>PCGExClampDetails</code></summary>

Controls clamp output.

📦 See: Clamp configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Attributes</strong> <code>PCGExAttributeSourceToTargetDetails</code></summary>

Controls attributes.

📦 See: AttributeSourceToTarget configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Auto Cast Integer To Double</strong> <code>bool</code></summary>

Controls auto cast integer to double.

</details>

<details>

<summary><strong>Remap (Default)</strong> <code>PCGExComponentRemapRule</code></summary>

The default remap rule, used for single component values, or first component (X), or all components if no individual override is specified.

⚡ PCG Overridable

</details>

**Individual Components**

<details>

<summary><strong>Override Component2</strong> <code>bool</code></summary>

Controls override component2.

</details>

<details>

<summary><strong>Remap (2nd Component)</strong> <code>PCGExComponentRemapRule</code></summary>

Remap rule used for second (Y) value component.

</details>

<details>

<summary><strong>Override Component3</strong> <code>bool</code></summary>

Controls override component3.

</details>

<details>

<summary><strong>Remap (3rd Component)</strong> <code>PCGExComponentRemapRule</code></summary>

Remap rule used for third (Z) value component.

</details>

<details>

<summary><strong>Override Component4</strong> <code>bool</code></summary>

Controls override component4.

</details>

<details>

<summary><strong>Remap (4th Component)</strong> <code>PCGExComponentRemapRule</code></summary>

Remap rule used for fourth (W) value component.

</details>

***

Source: `Source\PCGExElementsMeta\Public\Elements\PCGExAttributeRemap.h`
