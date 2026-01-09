---
icon: grid-round-2-plus
---

# Heuristics

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a single heuristic computational node, to be used with pathfinding nodes.

### Overview

This factory defines a heuristic that calculates a cost or weight for pathfinding operations. It determines how "good" or "bad" a particular path segment is, helping pathfinding algorithms choose the most efficient route.

{% hint style="info" %}
Connects to Heuristic pins on pathfinding nodes like A\* or Dijkstra
{% endhint %}

### How It Works

A heuristic function estimates the cost from any point to the goal. This factory defines how that estimation is calculated, including:

* The mathematical relationship between input values and cost
* Whether lower or higher values are better for the path
* Optional weighting factors to adjust influence
* Curve remapping for non-linear scoring

### Inputs

* **Source Geometry**: The geometry containing point and edge data used for heuristic calculations
* **Heuristic Pin**: Input pin that accepts heuristic definitions for pathfinding nodes

### Outputs

* **Heuristic Result**: The computed heuristic value for a given path segment

### Configuration

***

#### Settings

**Weight Factor**

_The weight factor for this heuristic._

Controls how much this heuristic influences the final path cost. A value of 2 doubles its impact, while 0.5 halves it.

**Invert the Final Heuristics Score**

_When enabled, inverts the final heuristics score._

Changes whether higher or lower values are considered better. When enabled, higher input values result in lower (better) scores.

***

#### Curve Settings

**Use Local Curve**

_When enabled, uses the local curve instead of an external asset._

Controls whether to use the built-in curve editor or reference an external curve asset.

**Score Curve**

_The curve used to remap heuristic values._

Defines how input values are transformed into final scores. For example, a steep curve makes small differences in input values result in large score changes.

***

#### Local Weight Settings

**Use Local Weight Multiplier**

_When enabled, uses a local attribute to multiply the heuristic weight._

Allows per-point or per-edge variation of this heuristic's influence based on data from the source geometry.

**Local Weight Multiplier Source**

_The source element type for the local weight multiplier._

* **Point**: Read the multiplier value from the point being evaluated.
* **Edge**: Read the multiplier value from the edge connecting to the point being evaluated.

**Weight Multiplier Attribute**

_The attribute to read the multiplier value from._

The name of the attribute containing the local weight values. Only used when "Use Local Weight Multiplier" is enabled.

***

#### Roaming Settings

**UVW Seed**

_Bound-relative seed position used when this heuristic is used in a "roaming" context._

Defines where the heuristic considers the starting point to be, for roaming scenarios.

**UVW Goal**

_Bound-relative goal position used when this heuristic is used in a "roaming" context._

Defines where the heuristic considers the destination to be, for roaming scenarios.

### Usage Example

Create a Heuristics Definition node to define how distance affects pathfinding cost. Connect it to an A\* node's Heuristic input pin. Set the Weight Factor to 2 to make distance twice as important as other factors. Use the Score Curve to create a non-linear penalty (e.g., double the cost for each unit of distance beyond 5 units).

### Notes

* Heuristics must be paired with pathfinding nodes like A\* or Dijkstra
* The curve mapping allows for complex scoring behaviors beyond simple linear relationships
* Local weight multipliers enable dynamic adjustments based on point attributes
* For roaming scenarios, UVW Seed and Goal define the reference space for calculations
