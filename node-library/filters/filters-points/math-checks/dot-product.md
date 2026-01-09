---
description: 'In editor :: PCGEx | Filter : Dot'
icon: circle-dashed
---

# Dot Product

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that compares dot value of two vectors.

#### Overview

This subnode filters points based on the dot product of two vector operands. It's useful for determining angular relationships between vectors, such as whether a point's forward direction is pointing toward or away from a target, or if it aligns with a specific orientation.

It connects to **Filter** pins on processing nodes that accept point-based filtering.

#### How It Works

This subnode evaluates the dot product of two vectors for each input point and compares the result against a threshold. The dot product is a mathematical operation that measures how aligned two vectors are, with values ranging from -1 (completely opposite) to 1 (identical direction).

The process works as follows:

1. It calculates vector **Operand A** at each point, optionally transforming it by the point's local transform.
2. It calculates vector **Operand B**, which can be a constant or read from an attribute, and optionally transforms it using the point's local transform.
3. It computes the dot product of these two vectors.
4. It compares the resulting scalar value against a threshold defined in the comparison settings.

The filter passes points where the dot product meets the specified comparison criteria (e.g., greater than or equal to a minimum angle).

<details>

<summary>Inputs</summary>

* Points with optional transform data
* Optional attribute for Operand B if using "Attribute" mode

</details>

<details>

<summary>Outputs</summary>

* A set of points that pass the dot product comparison

</details>

#### Configuration

***

**Vector Operand A**

_The first vector used in the dot product calculation._

This defines the first operand. It can be a constant vector or read from an attribute on the input points.

***

**Transform OperandA with Local Point Transform**

_When enabled, transforms Operand A using the point's local transform._

If enabled, the vector is transformed by the point's rotation and scale before computing the dot product.

***

**└─ Invert Operand A**

_When enabled, inverts the direction of Operand A._

This flips the direction of Operand A before computing the dot product.

***

**Type of Operand B**

_How to define the second vector used in the dot product._

* **Constant**: Use a fixed vector value.
* **Attribute**: Read the vector from an attribute on the input points.

***

**└─ Invert Operand B**

_When enabled, inverts the direction of Operand B._

This flips the direction of Operand B before computing the dot product.

***

**Operand B (Attr)**

_The attribute to read Operand B from, when using "Attribute" mode._

Only visible when **Type of Operand B** is set to **Attribute**.

***

**Operand B**

_The constant vector used as Operand B, when using "Constant" mode._

Only visible when **Type of Operand B** is set to **Constant**.

***

**Transform OperandB with Local Point Transform**

_When enabled, transforms Operand B using the point's local transform._

If enabled, the vector is transformed by the point's rotation and scale before computing the dot product.

***

**Dot Comparison Settings**

_Configuration for how the dot product result is compared to a threshold._

This includes:

* **Comparison Type**: How to compare the dot product (e.g., greater than, equal to, less than).
* **Threshold Value**: The value to compare against.
* **Tolerance**: For approximate comparisons like "nearly equal".

#### Usage Example

A common use case is filtering points based on their orientation relative to a target. For example:

1. Set Operand A to the point's forward vector (e.g., using an attribute like `ForwardVector`).
2. Set Operand B to a constant vector pointing toward a desired direction (e.g., `FVector::ForwardVector`).
3. Configure the comparison to pass points where the dot product is greater than 0.5, meaning the point is facing toward the target within about 60 degrees.

#### Notes

* The dot product of two unit vectors ranges from -1 to 1.
* A value of 1 means the vectors are perfectly aligned.
* A value of -1 means they are perfectly opposite.
* A value of 0 means they are perpendicular.
* This filter is commonly used for directional checks in procedural generation, such as orienting objects toward a light source or aligning structures with terrain normals.
