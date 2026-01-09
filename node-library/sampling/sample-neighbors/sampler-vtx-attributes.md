---
description: 'In editor :: PCGEx | Sampler : Vtx Attributes'
hidden: true
icon: circle-dashed
---

# Sampler : Vtx Attributes

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Create a single neighbor attribute sampler to be used by a Sample Neighbors node.

### Overview

This node creates a vertex attribute sampler that can be used by the "Sample Neighbors" node to collect and blend attribute values from neighboring points. It's designed for use in graph-based procedural generation workflows where you want to gather data from nearby elements and combine it using various blending methods.

The sampler defines which attributes to collect, how to blend them together, and what output attribute to write the results to. This is particularly useful for creating smooth transitions, averaging values across connected points, or applying neighbor-based modifications to your procedural content.

{% hint style="info" %}
This node must be used in conjunction with a "Sample Neighbors" node to have any effect. The sampler defines what data to collect, while the sample node applies the sampling logic.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Source** (Required): Input points that will be processed by this sampler
* **Neighbors** (Required): Neighbors data used for sampling

</details>

<details>

<summary>Outputs</summary>

* **Sampler** (Required): The configured neighbor sampler that can be consumed by a "Sample Neighbors" node

</details>

### Properties Overview

Settings for defining which attributes to sample and how to blend them.

***

#### Sampling Settings

Controls how the attribute sampling is performed.

**Blending**

_The blending method used to combine values from multiple neighbors._

* Determines how multiple sampled values are combined into a single output value
* Affects the final result when multiple neighbors contribute to the same point
* Higher values are processed last in the sampling order

**Values**:

* **None**: No blending is applied, keep the original value.
* **Average**: Average all sampled values.
* **Weight**: Weights based on distance to blend targets. If the results are unexpected, try 'Lerp' instead
* **Min**: Component-wise MIN operation
* **Max**: Component-wise MAX operation
* **Copy (Target)**: Copy target data (second value)
* **Sum**: Sum
* **Weighted Sum**: Sum of all the data, weighted
* **Lerp**: Uses weight as lerp. If the results are unexpected, try 'Weight' instead.
* **Subtract**: Subtract.
* **Unsigned Min**: Component-wise MIN on unsigned value, but keeps the sign on written data.
* **Unsigned Max**: Component-wise MAX on unsigned value, but keeps the sign on written data.
* **Absolute Min**: Component-wise MIN of absolute value.
* **Absolute Max**: Component-wise MAX of absolute value.

**Source Attributes**

_The list of attributes to sample from neighbors._

* Defines which input attributes will be collected and processed
* Each attribute can have its own blending rules applied
* Leave the target attribute as "None" to overwrite the source attribute directly

***

#### Attribute Selection

Controls which attributes are included in the sampling process.

**Source**

_The input attribute to sample from neighbors._

* Selects which point attribute will be read during neighbor sampling
* Can be any valid attribute on the input points
* The value is read from each neighbor and combined according to the blending method

**Target**

_The output attribute to write sampled values to._

* Determines where the blended result will be written
* If left as "None", the source attribute will be overwritten directly
* Allows for preserving original data while creating new sampled versions
* Can be used to create multiple variations of the same attribute by using different samplers

### Notes

* This node is designed to work with neighbor relationships defined in your graph
* Multiple sampler nodes can be created to handle different attributes or blending methods
* The Priority setting controls the order in which samplers are processed when multiple exist
* For best performance, limit the number of attributes being sampled to only what's necessary
* Consider using different blending modes for different types of data (average for continuous values, min/max for bounds)
