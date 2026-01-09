---
description: 'In editor :: PCGEx | Heuristics : Steepness'
icon: circle-dashed
---

# HX : Steepness

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Creates a heuristic that evaluates the steepness of terrain or surfaces based on the angle between edges and an upward vector.

### Overview

This factory generates a heuristic operation that calculates how steep a path segment is, relative to a defined "up" direction. It's commonly used in pathfinding systems to avoid overly steep terrain or to prefer flatter paths.

{% hint style="info" %}
Connects to **Heuristics** pins on pathfinding nodes such as `Pathfinder` or `A*`.
{% endhint %}

### How It Works

This heuristic evaluates the steepness of edges in a graph by calculating the dot product between the edge's direction and an "up" vector. The result is then processed to determine a score that influences pathfinding decisions.

When **bAbsoluteSteepness** is enabled, only the magnitude of steepness matters (steep uphill or downhill are treated equally). When disabled, the full range of the dot product (-1 to 1) is used, with negative values indicating downhill and positive values indicating uphill.

### Configuration

***

#### General

**Accumulate Score**

_When enabled, the heuristic accumulates steepness over multiple edges to better capture overall terrain characteristics._

This setting allows you to consider not just the immediate edge, but also previous edges when calculating steepness. Useful for smoothing out sharp transitions in terrain.

**Values**:

* **Disabled**: Only evaluates the current edge's steepness
* **Enabled**: Accumulates steepness from up to `AccumulationSamples` previous edges

**Accumulation Samples**

_Number of previous edges to include in the accumulated score._

Only available when **Accumulate Score** is enabled. Controls how many prior edges contribute to the current steepness calculation.

**Up Vector**

_Vector defining the "up" direction for steepness calculations._

This vector determines what direction is considered "steep." For example, setting this to `FVector::UpVector` makes the heuristic evaluate how much an edge deviates from vertical. Setting it to a different value (like `FVector(0, 0, 1)`) can define custom up directions.

**Absolute Steepness**

_When enabled, only the magnitude of steepness is considered; when disabled, uphill and downhill are treated separately._

When enabled, all steepness values are converted to their absolute value before scoring. This means that both steep uphill and downhill paths are treated equally in terms of "steepness cost".

### Usage Example

Create a pathfinding graph over a terrain mesh where you want to avoid very steep slopes. Connect this factory to a `Pathfinder` node, set the **Up Vector** to match your terrain's normal direction (e.g., `FVector::UpVector`), and enable **Absolute Steepness** to penalize all steep paths equally regardless of direction.

### Notes

* This heuristic works best when used with graph edges that represent movement paths between points.
* Adjust the **Accumulation Samples** value based on how smooth or jagged your terrain is.
* For complex terrains, consider combining this with other heuristics like distance or cost to create more nuanced pathfinding behavior.
