---
description: 'In editor :: PCGEx | Filter : Tensor Dot'
icon: circle-dashed
---

# Tensor Dot Product

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that compares dot value of a vector and tensors.

### Overview

This filter evaluates whether the dot product between a vector operand and a tensor field meets specific comparison criteria. It's useful for creating conditions based on directional relationships within tensor data, such as determining if a point's orientation aligns with a tensor's principal direction.

{% hint style="info" %}
Connects to Filter pins on processing nodes like **Filter Points** or **Filter Edges**
{% endhint %}

### How It Works

The filter calculates the dot product between:

1. A vector operand (from an attribute or constant)
2. A sampled tensor field value at each point

It then compares this dot product against a threshold using the specified comparison operator.

### Inputs & Outputs

#### Inputs

* **Point Data**: The point data to be filtered
* **Operand A**: Vector used in the dot product calculation
* **Tensor Field**: Tensor field to sample values from

#### Outputs

* **Filtered Points**: Points that meet the filter criteria
* **Unfiltered Points**: Points that do not meet the filter criteria

### Configuration

***

#### General

**Vector Operand A**

_The vector used in the dot product calculation._

This can be read from a point attribute or set as a constant vector. The vector is compared against the tensor field's sampled value.

**Transform Operand A**

_When enabled, transforms the operand using the point's local transform before comparison._

Use this when you want to align the operand with the point's orientation in space.

**Dot Comparison Settings**

_Configuration for how the dot product result is compared to a threshold._

See **Comparison** settings below for details on operators and thresholds.

**Tensor Sampling Settings**

_Configuration for how to sample the tensor field at each point._

Controls how the tensor data is sampled, including radius, step size, and error tolerance. These settings determine how the tensor value is evaluated at each point.

***

#### Comparison

**Comparison Operator**

_The operator used to compare the dot product result to the threshold._

**Values**:

* **==**: Dot product equals threshold
* **!=**: Dot product does not equal threshold
* **>=**: Dot product greater than or equal to threshold
* **<=**: Dot product less than or equal to threshold
* **>**: Dot product greater than threshold
* **<**: Dot product less than threshold
* **\~=**: Dot product nearly equals threshold (within tolerance)
* \*\*!\~=: Dot product does not nearly equal threshold

**Threshold**

_The value the dot product is compared against._

This is a scalar value. For example, if set to 0.5, points will pass the filter if their dot product result is greater than or equal to 0.5.

### Usage Example

Create a filter that only passes points where the dot product between a point's normal vector and a tensor field's principal direction is greater than 0.7.

1. Set **Operand A** to read from a "Normal" attribute
2. Enable **Transform Operand A** if you want to align with local orientation
3. Configure **Dot Comparison Settings**:
   * Operator: >=
   * Threshold: 0.7
4. Set up **Tensor Sampling Settings** to sample your tensor field appropriately

Connect this filter to a **Filter Points** node to selectively process only points that meet the directional criteria.

### Notes

* The filter works with any tensor field data, including those from noise or procedural generation nodes
* When using **Transform Operand A**, ensure the operand vector is defined in local space for correct results
* Adjust the **Tensor Sampling Settings** based on your tensor resolution and desired accuracy
* Combine multiple filters to create complex directional conditions
* The dot product result ranges from -1 (opposite directions) to 1 (same direction), so thresholds should typically be between -1 and 1
