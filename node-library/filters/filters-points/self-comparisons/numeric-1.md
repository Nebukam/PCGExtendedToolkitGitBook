---
description: 'In editor :: PCGEx | Filter : Angle'
icon: circle-dashed
---

# Angle

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Creates a filter definition that compares dot value of the direction of a point toward its previous and next points.

### Overview

This filter evaluates the angle between consecutive points in a point cloud by computing the dot product of vectors formed from adjacent points. It's useful for filtering points based on directional changes or curvature in a path.

{% hint style="info" %}
Connects to Filter pins on processing nodes such as **Filter Points**, **Transform Points**, or **Generate Points**.
{% endhint %}

### How It Works

The filter calculates the angle between two consecutive vectors:

* Vector 1: From previous point to current point
* Vector 2: From current point to next point

It then compares the dot product of these vectors against a threshold value. The result determines whether a point passes or fails the filter.

**Curvature Mode**: Compares (Prev → Current) and (Current → Next) vectors\
**Spread Mode**: Compares (Current → Prev) and (Current → Next) vectors

### Inputs

* **Points**: Input point cloud to filter
* **Threshold Attribute** (optional): Attribute containing threshold values for each point

### Outputs

* **Filtered Points**: Points that pass the angle filter criteria

### Configuration

***

#### General

**Mode**

_Controls how the angle is calculated._

* **Curvature**: Checks the dot product of (Prev to Current) → (Current to Next)
* **Spread**: Checks the dot product of (Current to Prev) → (Current to Next)

**First Point Fallback**

_How to handle the first point in an open loop._

When enabled, points that don't have a previous neighbor are evaluated using this fallback behavior.

**Last Point Fallback**

_How to handle the last point in an open loop._

When enabled, points that don't have a next neighbor are evaluated using this fallback behavior.

**Dot Comparison Details**

_Configures how the dot product is compared against a threshold._

This includes:

* The comparison operator (e.g., greater than, less than)
* The threshold value to compare against
* Whether to use a constant or attribute for the threshold

**Invert**

_When enabled, inverts the filter result._

If a point would normally pass the filter, it fails, and vice versa. This also affects fallback results.

### Usage Example

Use this filter to remove sharp turns from a path. For example:

1. Create a **Filter : Angle** node with **Mode** set to **Curvature**
2. Set **Dot Comparison Details** to use **Greater Than** with a threshold of `0.7`
3. Connect it to the **Filter Points** node
4. This will keep only points where the angle between consecutive segments is relatively straight (not sharp)

### Notes

* The filter requires at least 3 points to function properly
* For closed loops, the first and last points wrap around to connect with their neighbors
* When using attributes for threshold values, ensure the attribute exists on all input points
* Combine with other filters to create complex directional constraints
* Useful for creating smooth paths or removing sharp turns from procedural geometry
