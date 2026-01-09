---
description: 'In editor :: PCGEx | Fill Control : Keep Direction'
icon: circle-dashed
---

# FC : Keep Direction

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Stops flood fill operations after a certain number of vertices have been captured, based on directional consistency.

### Overview

This factory defines a stopping condition for flood fill operations that prevents the fill from continuing indefinitely. It's designed to halt the fill process once a specified number of vertices have been captured in a consistent direction, helping to control the scope and behavior of procedural fills.

{% hint style="info" %}
Connects to **Probe** pins on flood fill nodes (like `Flood Fill` or `Flood Fill With Seed`)
{% endhint %}

### How It Works

This factory works by tracking how many vertices are captured in a consistent direction during the flood fill process. When the number of consecutive captures exceeds the defined window size, the fill stops.

The directional consistency is determined by comparing the direction from the previous vertex to the current one against a hash-based comparison system. This allows for tolerance in direction changes while still enforcing the capture limit.

### Configuration

***

#### General

**Window Size Input**

_Controls whether the window size is a constant value or read from an attribute._

When set to **Attribute**, the window size is read from the input data using the specified attribute. When set to **Constant**, the window size is fixed at the value defined below.

**Values**:

* **Constant**: Use a fixed number of captures
* **Attribute**: Read the capture count from an input attribute

**Window Size (Attr)**

_The attribute used to define the window size when "Window Size Input" is set to "Attribute"._

This attribute should contain integer values that determine how many consecutive captures are allowed before stopping.

**Window Size**

_The fixed number of captures to allow before stopping when "Window Size Input" is set to "Constant"._

Minimum value is 1. For example, setting this to 5 means the fill will stop after capturing 5 vertices in a consistent direction.

**Hash Comparison Settings**

_Configuration for how directional comparisons are made._

This affects how the system determines whether two directions are considered "the same" for the purpose of counting consecutive captures. Lower tolerance values mean stricter directional consistency is required.

### Usage Example

Use this factory to create a fill that stops after capturing a certain number of vertices in a consistent direction. For example, you could use it to create a procedural path that follows a general direction but doesn't extend indefinitely.

1. Create a `Flood Fill With Seed` node
2. Connect this factory to its Probe pin
3. Set the window size to 10
4. The fill will stop after capturing 10 vertices in a consistent direction

### Notes

* This factory only affects the **Candidate** step of flood fill operations
* The directional consistency check is based on vector hash comparisons, allowing for small variations in direction
* Use this with caution when working with complex topologies where direction changes are frequent
* Combine with other fill controls to create more sophisticated stopping conditions

***

### Inputs

* **Probe**: Connection point for flood fill nodes
* **Input Data**: Source data containing optional attribute for window size

### Outputs

* **Result**: Processed data with directional stopping condition applied
