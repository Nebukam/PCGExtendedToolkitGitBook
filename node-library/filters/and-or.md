---
description: 'In editor :: PCGEx | Filter : AND // PCGEx | Filter : OR'
icon: circle-dashed
---

# And / Or

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a logical combination of multiple filters that can be applied as a single unit.

### Overview

A Filter Group combines multiple individual filters into one logical unit, allowing you to create complex filtering conditions using "And" or "Or" logic. It connects to Filter pins on processing nodes and evaluates whether points pass or fail based on the group's logic.

{% hint style="info" %}
Connects to Filter pins on processing nodes like **Filter Points**, **Filter Nodes**, or **Filter Edges**
{% endhint %}

### How It Works

A Filter Group applies a logical operation (And/Or) across multiple connected filters. Each filter in the group is evaluated independently, then combined according to the selected mode:

* **AND**: All connected filters must return true for the point to pass
* **OR**: Only one connected filter needs to return true for the point to pass

The group can also be inverted using the invert toggle, which flips the final result.

### Configuration

***

#### General

**Invert**

_When enabled, the output of the group is flipped. True becomes false and vice versa._

Useful for creating "not" conditions or negating a filter group's logic.

**Mode**

_Controls how the filters in this group are combined._

**Values**:

* **And**: All connected filters must pass for the point to be included
* **Or**: Only one connected filter needs to pass for the point to be included

### Usage Example

Create a Filter Group that selects points based on multiple criteria:

1. Connect two or more individual filters (e.g., "Point Distance" and "Point Attribute Range")
2. Set the group mode to **And** to only include points that meet BOTH conditions
3. Connect the group to a processing node's Filter pin
4. The node will now process only points that satisfy all filters in the group

### Notes

* Filter Groups can be nested by connecting one group to another
* Higher priority values from connected filters take precedence over the group's own priority
* When using "Or" mode, the first passing filter determines the result, improving performance for complex conditions
* Invert toggles work at the group level, affecting all contained filters uniformly

### Inputs

* **Filter** (Multiple): Connect individual filters to this input to include them in the group logic

### Outputs

* **Filter**: This output connects to processing nodes that accept filter inputs, applying the combined filter logic to the data stream
