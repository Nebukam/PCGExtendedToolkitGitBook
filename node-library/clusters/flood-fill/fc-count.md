---
description: 'In editor :: PCGEx | Fill Control : Count'
icon: circle-dashed
---

# FC : Count

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Stop fill after a certain number of vtx have been captured.

### Overview

This factory defines a stopping condition for flood fill operations based on the maximum number of points that can be captured. It acts as a control mechanism that limits how far a diffusion can spread by counting captured points.

{% hint style="info" %}
Connects to **Fill Control** pins on flood fill nodes
{% endhint %}

### How It Works

This factory sets a limit on how many points can be captured during a flood fill operation. Once that number is reached, the diffusion stops expanding. The count is tracked per diffusion, so multiple diffusions can each capture up to their specified limit independently.

### Inputs

* **Probe** (optional): Connects to flood fill nodes to control their behavior
* **Input Data**: Contains the point data to be processed

### Outputs

* **Output Data**: Processed point data with flood fill limitations applied

### Configuration

***

#### General

**Max Count Input**

_Controls whether the maximum count is a fixed value or read from an attribute._

When set to **Constant**, use the `Max Count` value. When set to **Attribute**, read the value from the input data using the `Max Count (Attr)` attribute.

**Values**:

* **Constant**: Use a fixed number for all diffusions
* **Attribute**: Read the limit from an attribute on the input data

**Max Count (Attr)**

_The name of the attribute to read the count limit from._

Only visible when **Max Count Input** is set to **Attribute**.

**Max Count**

_The maximum number of points that can be captured by a single diffusion._

Only visible when **Max Count Input** is set to **Constant**. Minimum value is 1.

### Usage Example

Use this factory with a `Flood Fill` node to limit how many points are processed in each fill operation. For example, if you have a cluster of points and want to flood-fill only the first 50 points from each seed, connect this factory to the Probe pin of the Flood Fill node.

### Notes

* The count is tracked per diffusion, so multiple diffusions can each capture up to their specified limit
* This control works in conjunction with other fill controls (like distance or angle limits)
* Can be used to prevent performance issues from very large floods by limiting point consumption
