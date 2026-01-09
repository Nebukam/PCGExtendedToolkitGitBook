---
icon: circle-dashed
---

# Noise

See [noises](../../misc/noises/ "mention")

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Creates a filter that compares a point's attribute value against spatial noise.

### Overview

This filter evaluates whether a point passes or fails based on a comparison between an input value and the result of a 3D noise function at that point's location. It's useful for creating organic, natural-looking variations in procedural content.

{% hint style="info" %}
Connects to Filter pins on processing nodes like **Filter Points** or **Branch**
{% endhint %}

### How It Works

The filter calculates a noise value at each point's position and compares it against a target value using the specified comparison operator. Points that meet the comparison condition will pass the filter.

### Inputs

* **Points**: Input points to be filtered
* **Operand B**: The value to compare against the noise result

### Outputs

* **Pass**: Points that meet the comparison condition
* **Fail**: Points that do not meet the comparison condition

### Configuration

***

#### General

**Comparison**

_Controls how to compare the input value against the noise result._

The filter evaluates whether `NoiseValue` compared to `OperandB` passes the test.

**Values**:

* **==**: Input equals noise value
* **!=**: Input does not equal noise value
* **>=**: Input is greater than or equal to noise value
* **<=**: Input is less than or equal to noise value
* **>**: Input is strictly greater than noise value
* **<**: Input is strictly less than noise value
* **\~=**: Input is nearly equal to noise value (within tolerance)
* \*\*!\~=: Input is not nearly equal to noise value (outside tolerance)

### Usage Example

Use this filter to randomly select a percentage of points for special treatment. For example, set OperandB to 0.5 and use the `>` comparison to pass only points where the noise value is greater than 0.5. This creates a random selection that varies spatially.

### Notes

* The noise function uses 3D coordinates to generate values
* Points with no valid attribute data will be handled based on the initialization failure policy
* Combine multiple filters to create more complex selection patterns
* Useful for creating natural-looking distributions, terrain variations, or organic point placement
