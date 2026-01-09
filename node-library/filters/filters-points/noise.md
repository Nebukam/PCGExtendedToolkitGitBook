---
icon: circle-dashed
---

# Noise

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Compare a point's value against spatial noise.

#### Overview

This subnode filters points based on their comparison to a generated noise value at their location. It evaluates whether a point passes or fails a condition using a noise function, making it useful for creating natural-looking variations in procedural content. You can use this to selectively include or exclude points that meet certain noise-based criteria.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### How It Works

This subnode generates a 3D noise value at each point's location and compares it against a threshold using the configured comparison operator. The noise function is evaluated using the point's world position as input, creating spatially varying values that can be used to determine if a point should pass or fail the filter.

The process works as follows:

1. For each point in the input data, its world position is used as input to a 3D noise generator
2. A noise value is computed at that position
3. The resulting noise value is compared against a fixed operand using the selected comparison operator
4. If the comparison evaluates to true, the point passes the filter; otherwise, it fails

The noise function provides smooth, natural-looking variations across space, making this useful for creating organic patterns or selective filtering based on spatial properties.

<details>

<summary>Inputs</summary>

Expects a collection of points with valid world positions. The filter uses these positions to evaluate noise values.

</details>

<details>

<summary>Outputs</summary>

Points that pass the comparison against the noise value are included in the output; those that fail are excluded.

</details>

#### Configuration

***

**Comparison**

_The comparison operator used to evaluate the noise value against the operand._

Controls how the generated noise value is compared to the fixed operand.

**Values**:

* **==**: The noise value must exactly equal the operand
* **!=**: The noise value must not equal the operand
* **>=**: The noise value must be greater than or equal to the operand
* **<=**: The noise value must be less than or equal to the operand
* **>**: The noise value must be strictly greater than the operand
* **<**: The noise value must be strictly less than the operand
* **\~=**: The noise value must be nearly equal to the operand (within a small tolerance)

**Config**

_Filter Config._

Defines how the comparison between the noise value and the operand is performed.

#### Usage Example

Use this subnode to create a terrain where only points with noise values above 0.5 are selected for further processing, such as placing vegetation. This ensures that vegetation appears in areas of higher noise values, creating a natural-looking distribution across the landscape.

#### Notes

The noise function used is deterministic and will produce consistent results for the same input position. Adjusting the noise parameters (frequency, amplitude) in the underlying noise generator affects how the filtering behaves spatially.
