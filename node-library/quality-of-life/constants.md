---
description: 'In editor :: PCGEx | Constants'
icon: circle
---

# Constants

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Outputs predefined constant values (numeric, vector, or boolean) as attributes.

#### How It Works

The Constant node generates and outputs predefined constant values such as numeric scalars, vectors, or booleans. These constants are grouped into named lists for easy access, allowing users to quickly insert well-known values like 0, 1, π, or axis vectors without manually entering them. The node selects a predefined list of constants based on the **Constant List** setting. For each constant in that list, it applies optional transformations such as negation, reciprocal calculation, or custom multiplication. It then creates an attribute with the specified name and type (numeric, vector, or boolean), which is added to the output data.

#### Configuration

<details>

<summary><strong>Constant List</strong><br><em>Used by the preconfigured settings to load the right constants.</em></summary>

Selects which predefined group of constants to output. Options include:

* **0 and 1**: Outputs 0 and 1
* **-1**: Outputs -1
* **0.5 and 2**: Outputs 0.5 and 2
* **Powers of 10**: Outputs 0.1, 1, 10, 100, etc.
* **Irrationals**: Outputs π, e, √2, etc.
* **Angles**: Outputs common angles in radians
* **0**: Outputs 0
* **1**: Outputs 1
* **Axes**: Outputs X, Y, Z axis vectors
* **True and False**: Outputs true and false
* **True**: Outputs true only
* **False**: Outputs false only
* **Unit Vector**: Outputs (1,1,1)
* **Zero Vector**: Outputs (0,0,0)
* **Half Vector**: Outputs (0.5,0.5,0.5)
* **Up Vector**: Outputs (0,0,1)
* **Right Vector**: Outputs (1,0,0)
* **Forward Vector**: Outputs (0,1,0)

</details>

<details>

<summary><strong>Negate Output</strong><br><em>Export the negative of the constant instead of the constant itself.</em></summary>

When enabled, multiplies the selected constant by -1. For example, if the list contains 2 and this setting is enabled, it outputs -2.

</details>

<details>

<summary><strong>Output Reciprocal</strong><br><em>Output 1/x instead of x (e.g. 2 becomes 1/2).</em></summary>

When enabled, calculates the reciprocal (1/x) of the selected constant. For example, if the list contains 4 and this setting is enabled, it outputs 0.25. If the value is zero, it outputs 0.

</details>

<details>

<summary><strong>Custom Multiplier</strong><br><em>Apply a custom (constant, numeric) multiplier to the output.</em></summary>

Multiplies the selected constant by this value before outputting. For example, if the list contains 5 and this setting is set to 2, it outputs 10.

</details>

<details>

<summary><strong>Numeric Output Type</strong><br><em>Cast to a specific type (double will be used by default, ignored for vectors).</em></summary>

Controls how numeric constants are cast when output. Options:

* **Double**: Outputs as double precision
* **Float**: Outputs as single precision

This setting is ignored for vector and boolean outputs.

</details>

#### Usage Example

1. Add a Constant node to your graph.
2. Set the **Constant List** to "0 and 1".
3. Enable **Negate Output**.
4. The node will output an attribute named "0" with value -1, and another named "1" with value -0.

#### Notes

* This node is ideal for setting up default values or reference points in procedural workflows.
* Boolean constants can be used to control conditional logic in downstream nodes.
* For vector constants, the node outputs attributes with names like "UpVector", "RightVector", etc.
