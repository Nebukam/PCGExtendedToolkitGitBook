---
description: 'In editor :: PCGEx | Fill Control : Vtx Filters'
icon: circle-dashed
---

# FC : Vtx Filters

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Filter that checks vtx points.

### Overview

This factory creates a **fill control filter** that evaluates conditions based on the properties of **vtx points** during flood fill operations. It allows you to define rules that determine whether a point can be captured, probed, or considered as a candidate during diffusion.

This factory connects to **Fill Control pins** on flood fill nodes (like `Flood Fill` or `Flood Fill With Constraints`). It's used when you want to apply filtering logic based on the attributes or properties of the vtx points being processed.

{% hint style="info" %}
Connects to **Fill Control pins** on flood fill processing nodes.
{% endhint %}

### How It Works

This filter factory evaluates conditions using a set of point filters applied to the **vtx points**. Each filter defines a condition that must be met for a point to pass through. The filter checks:

* **Capture**: If a point is being captured by a diffusion
* **Probe**: If a point is being probed (visited neighbors)
* **Candidate**: If a point is considered as a candidate for flooding

If any of the configured filters fail, the point will not be allowed to proceed in that stage of the flood fill process.

### Inputs

* **Filter Factories** (Array): List of point filters to apply to vtx points. These are other filter nodes that define the conditions to check against each vtx point. You can add multiple filters here, and they will be evaluated in order. A point passes the filter if **all** specified filters accept it.

### Outputs

* **Fill Control** (Pin): The output pin that connects to the Fill Control input of flood fill nodes.

### Configuration

***

#### General

**Config**

_The configuration settings for how this filter behaves._

Controls general behavior such as whether it supports source points or not. For this factory, it's fixed to not support source points.

**Filter Factories**

_List of point filters to apply to vtx points._

These are other filter nodes that define the conditions to check against each vtx point. You can add multiple filters here, and they will be evaluated in order. A point passes the filter if **all** specified filters accept it.

### Usage Example

Use this factory when you want to control which points are allowed to participate in a flood fill operation based on their vtx properties. For example:

1. Create a `Fill Control : Vtx Filters` node
2. Connect point filters (like `Attribute Range`, `Boolean`, or `Distance`) to the `Filter Factories` input
3. Use it as a Fill Control in a `Flood Fill` node
4. Points that pass all the vtx filters will be considered for capture, probing, and candidate evaluation during the flood fill

This is useful when you want to restrict flooding based on attributes like height, color, or distance from a seed point.

### Notes

* This filter factory works only with **vtx points**.
* Multiple filters can be combined; all must pass for a point to be accepted.
* The order of filters matters if there are dependencies between them.
* You can use this to create complex rules like "only flood points that are above a certain height AND within a distance threshold".
