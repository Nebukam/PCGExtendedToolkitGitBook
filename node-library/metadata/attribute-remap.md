---
description: 'In editor :: PCGEx | Attribute Remap'
icon: circle
---

# Attribute Remap

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Remap a single property or attribute by transforming its values using customizable input and output ranges, with optional clamping and curve-based remapping.

### Overview

This node transforms the values of a selected attribute using mathematical remapping operations. It's useful for scaling, normalizing, or applying non-linear transformations to numeric data such as weights, intensities, or any other scalar properties. You can define different remapping rules for each component of multi-component attributes (X, Y, Z, W).

{% hint style="info" %}
The node supports both single-component and multi-component attributes. If you don't specify individual rules for components 2-4, the default rule will be applied to all components.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Point Data): Accepts point data with the attribute to be remapped.

</details>

<details>

<summary>Outputs</summary>

* **Main Output** (Point Data): The input point data with the remapped attribute values written back to it.

</details>

### Properties Overview

Controls how the attribute values are read, transformed, and written back to your data.

***

#### General Settings

Controls the source and target attributes for the remapping operation.

**Attribute Source**

_The attribute whose values will be remapped._

* How it affects results: This defines which input attribute's values will be processed.
* Value ranges: Any valid attribute name in the input data.

**Attribute Target**

_The attribute where the remapped values will be written._

* How it affects results: This defines where the transformed values are stored.
* Value ranges: Any valid attribute name in the output data.

**Auto-Cast Integer to Double**

_When enabled, automatically converts integer attributes to double precision before remapping._

* How it affects results: Ensures that integer values are treated as floating-point numbers for more precise calculations.
* Value ranges: Boolean toggle.

***

#### Base Remap Settings

The default remapping rule applied to all components unless overridden.

**Use Absolute Range**

_When enabled, uses absolute values to compute the input range._

* How it affects results: If disabled, negative values are considered when determining min/max. When enabled, only positive values are used for range calculation.
* Value ranges: Boolean toggle.

**Preserve Sign**

_When enabled, preserves the original sign of values when using absolute range._

* How it affects results: Only applies when "Use Absolute Range" is enabled. If disabled, negative values become positive during range computation but retain their original signs in final results.
* Value ranges: Boolean toggle.

**Use Fixed In Min**

_When enabled, uses a fixed minimum value for the input range._

* How it affects results: Overrides automatic calculation of the minimum input value with a user-defined one.
* Value ranges: Boolean toggle.

**In Min**

_The fixed minimum value used for input range when "Use Fixed In Min" is enabled._

* How it affects results: Defines the lower bound of the input range for remapping.
* Value ranges: Double (any number)

**Use Fixed In Max**

_When enabled, uses a fixed maximum value for the input range._

* How it affects results: Overrides automatic calculation of the maximum input value with a user-defined one.
* Value ranges: Boolean toggle.

**In Max**

_The fixed maximum value used for input range when "Use Fixed In Max" is enabled._

* How it affects results: Defines the upper bound of the input range for remapping.
* Value ranges: Double (any number)

**Use Curve Remap**

_When enabled, applies a curve to the remapped values before final output._

* How it affects results: Allows non-linear transformations using a custom curve.
* Value ranges: Boolean toggle.

**Curve Mode**

_Controls how the curve is used for remapping._

* How it affects results: Determines whether the curve is applied directly or via lookup table.
* **Direct**: The curve is evaluated directly.
* **Lookup**: A precomputed lookup table is used for performance.

**Curve Samples**

_Number of samples in the lookup table when using "Lookup" mode._

* How it affects results: Higher values provide more accurate curves but use more memory and processing time.
* Value ranges: Integer (typically 64 to 1024)

***

#### Component Overrides

Allows defining specific remapping rules for individual components of multi-component attributes.

**Override Component 2**

_When enabled, applies a custom rule to the second component (Y)._

* How it affects results: If disabled, component 2 uses the base remap settings.
* Value ranges: Boolean toggle.

**Remap (2nd Component)**

_Custom remapping settings for the second component._

* How it affects results: Defines how Y values are remapped independently from other components.
* Value ranges: Same as Base Remap Settings

**Override Component 3**

_When enabled, applies a custom rule to the third component (Z)._

* How it affects results: If disabled, component 3 uses the base remap settings.
* Value ranges: Boolean toggle.

**Remap (3rd Component)**

_Custom remapping settings for the third component._

* How it affects results: Defines how Z values are remapped independently from other components.
* Value ranges: Same as Base Remap Settings

**Override Component 4**

_When enabled, applies a custom rule to the fourth component (W)._

* How it affects results: If disabled, component 4 uses the base remap settings.
* Value ranges: Boolean toggle.

**Remap (4th Component)**

_Custom remapping settings for the fourth component._

* How it affects results: Defines how W values are remapped independently from other components.
* Value ranges: Same as Base Remap Settings

### Notes

* This node is particularly useful for normalizing data to a \[0,1] range or scaling values to fit within specific bounds.
* For multi-component attributes like FVector or FColor, you can apply different transformations to each component.
* The curve remapping feature allows for creative effects like exponential growth, logarithmic decay, or custom easing functions.
* When using "Use Absolute Range", negative values are treated as positive for range calculation but their signs are preserved in the final result unless "Preserve Sign" is disabled.
