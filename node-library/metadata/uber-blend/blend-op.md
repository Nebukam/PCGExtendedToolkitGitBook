---
description: 'In editor :: PCGEx | BlendOp'
icon: circle-dashed
---

# Blend Op

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Combines two values using various blending modes and weightings to create a single output.

#### How It Works

The Blend Operation subnode takes two input values—called Operand A and Operand B—and combines them based on a selected blending mode. You can control how much influence each operand has using a weight value, which can be fixed or dynamically calculated from an attribute or curve.

Each blend operation happens per point or element in your data set. The result is stored either back into Operand A's original attribute, into a new attribute, or temporarily for internal use. If you're blending multiple times on the same attribute, you can choose to reset it first to prevent previous values from affecting the outcome.

The weight value determines how much of Operand B is mixed into the final result. For example, with a weight of 0.5 in a linear interpolation (Lerp), both operands contribute equally. With a weight of 0.2, Operand A has more influence than Operand B.

#### Configuration

<details>

<summary><strong>WeightInput</strong><br><em>Type of Weight</em></summary>

Controls whether the weight value comes from a constant, an attribute, or a curve-based lookup.

**Values**:

* **Constant**: Use a fixed numeric value.
* **Attribute**: Read the weight from an existing attribute.
* **Curve**: Use a curve to remap the weight over time or space.

</details>

<details>

<summary><strong>Weight</strong><br><em>Constant weight value.</em></summary>

The fixed value used when WeightInput is set to Constant. This determines how much influence Operand B has in the blend operation.

</details>

<details>

<summary><strong>bUseLocalCurve</strong><br><em>Whether to use in-editor curve or an external asset.</em></summary>

When enabled, uses the local in-editor curve for weight remapping instead of an external asset.

</details>

<details>

<summary><strong>LocalWeightCurve</strong><br><em>Curve the weight value will be remapped over.</em></summary>

The in-editor curve used to remap the weight value. Only visible when bUseLocalCurve is enabled.

</details>

<details>

<summary><strong>WeightCurve</strong><br><em>Curve the weight value will be remapped over.</em></summary>

External asset reference to a curve used for weight remapping. Only visible when bUseLocalCurve is disabled.

</details>

<details>

<summary><strong>BlendMode</strong><br><em>BlendMode</em></summary>

The mathematical operation used to combine Operand A and Operand B.

**Values**:

* **Average**: Simple arithmetic mean of the two values.
* **Add**: Adds both values together.
* **Multiply**: Multiplies both values.
* **Min**: Takes the smaller value.
* **Max**: Takes the larger value.
* **Subtract A from B**: Subtracts Operand A from Operand B.
* **Subtract B from A**: Subtracts Operand B from Operand A.
* **Modulo A by B**: Modulo of Operand A divided by Operand B.
* **Modulo B by A**: Modulo of Operand B divided by Operand A.
* **Power A to B**: Raises Operand A to the power of Operand B.
* **Power B to A**: Raises Operand B to the power of Operand A.
* **Lerp**: Linear interpolation between A and B using the weight as the blend factor.

</details>

<details>

<summary><strong>OperandA</strong><br><em>Operand A.</em></summary>

The first operand used in the blending operation. Can be an attribute or a constant value.

</details>

<details>

<summary><strong>bUseOperandB</strong><br><em>Whether to use Operand B.</em></summary>

When enabled, allows Operand B to be specified separately from Operand A.

</details>

<details>

<summary><strong>OperandB</strong><br><em>Operand B.</em></summary>

The second operand used in the blending operation. Only visible when bUseOperandB is enabled.

</details>

<details>

<summary><strong>OutputMode</strong><br><em>Choose where to output the result of the A/B blend</em></summary>

Determines where the blended result is written.

**Values**:

* **SameAsA**: Writes the result back to Operand A's attribute.
* **New**: Creates a new attribute for the result.
* **Transient**: Uses a temporary attribute that won't persist in final output.

</details>

<details>

<summary><strong>OutputTo</strong><br><em>Output to (AB blend).</em></summary>

The name of the attribute where the blended result is stored. Only visible when OutputMode is set to New or Transient.

</details>

<details>

<summary><strong>bResetValueBeforeMultiSourceBlend</strong><br><em>If enabled, when a node uses multiple sources for blending, the value will be reset to 0 for some specific BlendModes so as to not account for inherited values.</em></summary>

When enabled, resets the target attribute before blending with new values. This ensures clean results in multi-source blends.

</details>

<details>

<summary><strong>OutputType</strong><br><em>Which type should be used for the output value. Only used if the output is not a point property.</em></summary>

Specifies the data type of the blended result.

**Values**:

* **Auto**: Automatically determines the best type based on operands.
* **Operand A**: Uses the type of Operand A.
* **Operand B**: Uses the type of Operand B.
* **Custom**: Allows specifying a custom type.

</details>

<details>

<summary><strong>CustomType</strong><br><em>Which type should be used for the output value.</em></summary>

The specific data type to use when OutputType is set to Custom. Only visible when OutputType is set to Custom.

</details>

#### Usage Example

You have two point attributes, `Height_A` and `Height_B`, and you want to blend them using a weighted average. You set Operand A to `Height_A`, Operand B to `Height_B`, and use the Lerp blend mode with a weight of 0.7. The result is stored in a new attribute called `Blended_Height`.

#### Notes

* Blending operations can be computationally expensive if applied to large datasets.
* Using curves for weights allows for dynamic blending based on spatial or temporal factors.
* Be cautious when using multiple blend operations on the same attribute without resetting, as previous values may accumulate.
