---
icon: circle-dashed
---

# Probe : Bitmasks

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Creates a probe that evaluates bitmask conditions against candidate points, using configurable operations and prioritization.

### Overview

This factory defines a probe operation that checks bitmask values of candidate points against configured filters. It's used in probing nodes to find nearby connections based on bitmask matching logic.

{% hint style="info" %}
Connects to **Probe** pins on processing nodes like "Find Nearest" or "Connect Points"
{% endhint %}

### How It Works

The probe evaluates candidate points by checking if their bitmask values satisfy configured conditions. It supports multiple bitmask collections and operations, allowing for complex matching logic. The results are prioritized either by best alignment with the probe direction or by closest distance.

### Inputs

* **Probe** (Pin): Input pin for connecting to probing nodes
* **Direction** (Pin): Optional input for defining probe orientation

### Outputs

* **Result** (Pin): Output pin that provides matching candidates based on bitmask conditions

### Configuration

***

#### General

**Transform Direction**

_When enabled, the probe direction is transformed using the point's orientation._

Enables directional transformation based on point rotation, which affects how alignment is calculated.

**Favor**

_Controls whether to prioritize candidates based on alignment or distance._

**Values**:

* **Best alignment**: Candidates that align best with the probe direction are favored
* **Closest position**: Candidates that are closest in space are favored, regardless of alignment

**Angle**

_Sets the angle threshold for directional alignment checks._

Defines how strict the alignment check is. A value of 22.5 degrees means candidates must be within 22.5° of the probe direction to be considered aligned.

**Compositions**

_List of bitmask operations to apply when filters pass._

Specifies a list of bitmask mutations that are applied to candidate flags when all conditions are met.

**Collections**

_Map of bitmask collections and their operations._

Defines which collections to check against, with each collection having an associated operation (AND, OR, etc.) for combining results.

### Usage Example

Use this factory in a "Find Nearest" node to locate points that match specific bitmask criteria. For example, you could find the closest point that has both bits 3 and 5 set, or the point with the best alignment that satisfies a specific bitmask pattern.

### Notes

* The probe works with multiple collections simultaneously
* Operations are applied in order from left to right
* When no filters are defined, all candidates pass by default
* Directional alignment is only used when "Best alignment" is selected as the favor setting
