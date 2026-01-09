---
description: 'In editor :: PCGEx | Heuristics : Attribute'
icon: circle-dashed
---

# HX : Attribute

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Read a vertex or edge attribute as an heuristic value.

### Overview

This node reads a numeric attribute from either points or edges in your cluster and uses it as a heuristic score for pathfinding operations. It's useful when you want to influence pathfinding behavior based on pre-computed data like terrain difficulty, cost, or other measurable properties.

The node supports three modes of operation: automatically normalizing the attribute values using existing min/max, manually specifying min/max for normalization, or using the raw attribute value directly (with caution). You can also define a fallback value when normalization fails.

{% hint style="info" %}
This node is designed to work with pathfinding nodes. It defines how to interpret a numeric attribute as a cost or preference score during path evaluation.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Heuristics** (optional): Input heuristics data, if used in a chain.

</details>

<details>

<summary>Outputs</summary>

* **Heuristics**: Output heuristic data that can be consumed by pathfinding nodes.

</details>

### Properties Overview

Controls how the attribute value is interpreted and processed for pathfinding.

***

#### General

Specifies how to read and interpret the attribute data.

**Input Mode**

_Controls how the attribute value is converted into a score._

* Determines whether to automatically normalize using existing min/max, manually set min/max, or use raw values.
* When using **Auto Curve**, the node will sample the curve using normalized values from the attribute's actual min and max.
* When using **Manual Curve**, you define the min and max range for normalization.
* When using **Raw**, the attribute value is used directly as a score.

**Values**:

* **Auto Curve**: Automatically sample the curve using normalized value from existing min/max input.
* **Manual Curve**: Sample the curve using normalized value from manual min/max values.
* **Raw**: Use raw attribute as score. Use at your own risks!

**Source**

_Specifies whether to read the attribute from points or edges._

* When set to **Vtx**, the node reads the attribute from the point being evaluated.
* When set to **Edge**, it reads the attribute from the edge connecting to the point.

**Values**:

* **Point**: Value is fetched from the point being evaluated.
* **Edge**: Value is fetched from the edge connecting to the point being evaluated.

**Attribute**

_Name of the attribute to read._

* This is the numeric attribute that will be used as the heuristic score.
* The attribute must exist on either points or edges, depending on the **Source** setting.

**Manual Min**

_Manual minimum value for normalization._

* Only active when **Input Mode** is set to **Manual Curve**.
* Defines the lower bound of the range used to normalize the attribute values.
* For example, if your attribute ranges from 0 to 100 and you set this to 50, then a value of 75 will be normalized to 0.5.

**Manual Max**

_Manual maximum value for normalization._

* Only active when **Input Mode** is set to **Manual Curve**.
* Defines the upper bound of the range used to normalize the attribute values.
* For example, if your attribute ranges from 0 to 100 and you set this to 50, then a value of 25 will be normalized to 0.5.

**Use Custom Fallback**

_When enabled, defines a custom fallback score._

* If normalization fails (e.g., all points have the same value), this value is used instead.
* Useful for avoiding undefined behavior when attribute values are constant or invalid.

**Fallback Value**

_Custom fallback score when normalization fails._

* Only active when **Use Custom Fallback** is enabled.
* Defines the score to use when normalization cannot be performed.
* Must be between 0 and 1, inclusive.
