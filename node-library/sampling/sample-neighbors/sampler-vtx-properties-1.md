---
description: 'In editor :: PCGEx | Sampler : Vtx Properties'
hidden: true
icon: circle-dashed
---

# Sampler : Vtx Properties

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Create a neighbor attribute sampler that samples vertex properties from neighboring points.

### Overview

This node creates a neighbor sampler that can be used by the "Sample Neighbors" node to collect and blend vertex properties from nearby points. It's designed to work with point data that has vertex attributes, such as cluster or mesh data, where you want to sample information from connected points.

The sampled values are typically used for blending operations in downstream nodes like "Sample Neighbors", which can then apply these sampled values to the current point based on distance or other criteria.

{% hint style="info" %}
This node is meant to be used as part of a larger workflow with a "Sample Neighbors" node. It doesn't directly modify data but prepares sampling instructions for neighbor-based operations.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main** (Point Data): Input point data containing vertex attributes to sample from
* **Neighbors** (Point Data, optional): Optional neighbor data to define the neighborhood structure

</details>

<details>

<summary>Outputs</summary>

* **Sampler** (Neighbor Sampler): The configured neighbor sampler that can be consumed by a "Sample Neighbors" node

</details>

### Properties Overview

This node allows you to configure how vertex properties are sampled and blended from neighboring points.

***

#### Sampling Settings

Configure how the vertex properties are collected and processed.

**Blending**

_Controls how multiple sampled values are combined when more than one neighbor contributes._

* How it affects results: Determines the mathematical operation used to combine multiple sampled values
* Value ranges: None, Average, Weight, Min, Max, Copy, Sum, Weighted Sum, Lerp, Subtract, Unsigned Min, Unsigned Max, Absolute Min, Absolute Max

**Values**:

* **None**: Keep the original value without blending
* **Average**: Calculate the arithmetic mean of all sampled values
* **Weight**: Apply distance-based weighting for blending (useful for smooth transitions)
* **Min**: Take the component-wise minimum of all values
* **Max**: Take the component-wise maximum of all values
* **Copy**: Use the second value from the sampling operation
* **Sum**: Add all sampled values together
* **Weighted Sum**: Sum all values with distance-based weights applied
* **Lerp**: Linearly interpolate between values using weight as factor (useful for smooth transitions)
* **Subtract**: Subtract sampled values from each other
* **Unsigned Min**: Component-wise minimum on unsigned values, but preserves sign in output
* **Unsigned Max**: Component-wise maximum on unsigned values, but preserves sign in output
* **Absolute Min**: Component-wise minimum of absolute values
* **Absolute Max**: Component-wise maximum of absolute values

### Notes

* This sampler works with vertex properties from point data, such as cluster attributes or mesh vertex data
* The "Sample Neighbors" node consumes this sampler to perform actual sampling operations
* When using distance-based blending (Weight or Lerp), the sampled values will be smoothly interpolated based on neighbor distances
* For best results, ensure your input data has consistent vertex attribute structures that match what you're trying to sample
* You can chain multiple "Sampler : Vtx Properties" nodes to create complex sampling behaviors for different attributes
