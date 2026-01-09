---
description: 'In editor :: PCGEx | Filter : Random (Ratio)'
icon: circle-dashed
---

# Random (Ratio)

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Creates a filter that randomly passes or fails points based on a configured ratio.

### Overview

This filter randomly determines whether each point should pass or fail a condition, using a configurable probability ratio. It's useful for creating randomized selection effects, such as randomly keeping or removing a percentage of points in a dataset.

{% hint style="info" %}
Connects to Filter pins on processing nodes like **Filter Points** or **Select Points**
{% endhint %}

### How It Works

This filter generates a random value for each point and compares it against a configured ratio. If the random value is less than the ratio, the point passes; otherwise, it fails. The ratio can be set as a fixed value or derived from an attribute.

### Configuration

***

#### General

**Random**

_Controls how the random ratio is generated._

This setting defines the probability threshold used to determine if a point passes or fails. A ratio of 0.5 means there's a 50% chance for any given point to pass.

**Values**:

* **Relative**: The ratio value is normalized between 0 and 1, where 0 = 0% chance to pass, 1 = 100% chance to pass
* **Discrete**: The ratio value is used directly as a fixed threshold

**Invert Result**

_When enabled, points that would pass now fail, and vice versa._

This inverts the filter's logic. For example, if you set the ratio to 0.3 (30% chance to pass), enabling this will make it so only 30% of points fail instead.

### Usage Example

Use this filter to randomly remove 25% of points from a point cloud. Set the **Amount (Relative)** to 0.25, and connect this filter to a **Filter Points** node. After processing, approximately 25% of your original points will be kept, with the rest discarded.

### Notes

* The random seed is based on the point's index and the factory's base seed, ensuring consistent results for the same input
* For large datasets, consider using **Collection Evaluation** to improve performance when applying the same filter to multiple collections
* This filter works well in combination with other filters to create complex selection logic

### Inputs

* **Filter**: Main input pin that receives the point data to be filtered
* **Ratio Attribute**: Optional input that provides a custom ratio value for each point from an attribute

### Outputs

* **Pass**: Output pin that sends points that passed the filter condition
* **Fail**: Output pin that sends points that failed the filter condition
