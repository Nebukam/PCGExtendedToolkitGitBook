---
description: All
icon: sliders
---

# Goal Picker : All

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Selects all goals for each seed point.

### Overview

This node assigns every goal point to every seed point, making it useful when you want all possible connections or when you're working with a small set of goals and want to explore all combinations. It's particularly helpful in scenarios where you need to evaluate every potential destination from each starting point, such as in pathfinding for AI decision-making or generating complete connectivity graphs.

{% hint style="info" %}
This node is ideal for small datasets where performance isn't a concern, as it creates a full Cartesian product of seeds and goals.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Seeds**: Point data representing starting positions
* **Goals**: Point data representing destination positions

</details>

<details>

<summary>Outputs</summary>

* **Output**: Modified point data with all goal indices assigned to each seed

</details>

### Properties Overview

Controls how the node assigns goals to seeds.

***

#### General Settings

Configures the behavior of goal assignment.

**Index Safety**

_Controls how out-of-bounds indices are handled when assigning goals._

* When an index would go out of bounds, this setting determines what happens
* For example, if you have 3 goals and try to access index 5, it will be treated according to this mode

**Values**:

* **Ignore**: Out of bounds indices are ignored (0,1,2,-1,-1,-1,...)
* **Tile**: Out of bounds indices are tiled (0,1,2,0,1,2...)
* **Clamp**: Out of bounds indices are clamped (0,1,2,2,2,2...)
* **Yoyo**: Out of bounds indices are mirrored and back (0,1,2,1,0,1...)

### Notes

This node is most effective when the number of goals is small. For large datasets, consider using other goal picker nodes to reduce computational overhead. It's commonly used in scenarios where you want to generate all possible paths or connections between a set of start and end points.
