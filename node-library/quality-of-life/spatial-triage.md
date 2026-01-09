---
description: 'In editor :: PCGEx | Spatial Triage'
icon: circle
---

# Spatial Triage

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Test relevance of spatial data against singular bounds. Primarily expected to be used with partition bounds to find data that can be uniquely processed by this partition. This is fast box-box check.

### Overview

This node evaluates how spatial data relates to a single bounding volume, determining whether points are inside, touching, or outside the bounds. It's designed for efficient filtering of data based on spatial relationships, particularly useful when working with partitioned datasets where you want to isolate data that belongs exclusively to a specific region.

The node performs fast axis-aligned bounding box (AABB) checks, making it ideal for quickly identifying which points fall within, partially overlap with, or are completely outside a given volume. It's commonly used in conjunction with spatial partitioning systems to optimize processing by only operating on relevant data.

{% hint style="info" %}
This node is optimized for performance and works best when used with bounding volumes that are axis-aligned. It's not designed for complex shape intersections.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Optional): Points to be tested against the bounds
* **Bounds Input** (Required): Single bounding volume to test against

</details>

<details>

<summary>Outputs</summary>

* **Inside**: Points that are fully contained within the bounds
* **Touching**: Points that intersect or touch the bounds
* **Outside**: Points that are completely outside the bounds

</details>

### Properties Overview

This node has no user-facing properties. It automatically configures its inputs and outputs based on the data it receives.

***

#### Output Configuration

Controls how the filtered points are distributed across output pins.

**Enable Inside Output**

_When enabled, points fully contained within the bounds will be sent to the "Inside" output._

* Points that are completely enclosed by the bounding volume are routed here
* Useful for processing data that belongs exclusively to a partition

**Enable Touching Output**

_When enabled, points that intersect or touch the bounds will be sent to the "Touching" output._

* Points that partially overlap with the bounding volume are routed here
* Can include points on the edge of the bounds

**Enable Outside Output**

_When enabled, points completely outside the bounds will be sent to the "Outside" output._

* Points that do not intersect with the bounding volume at all are routed here
* Useful for excluding irrelevant data from further processing

### Notes

* The node performs fast AABB checks, so it's most efficient when working with axis-aligned bounding volumes
* It's designed to work with single bounds as input, typically from partitioning operations
* Output pins that aren't enabled will be automatically deactivated during execution
* This node is particularly useful in spatial partitioning workflows where you want to process only the data relevant to a specific region
* The "Touching" output includes points exactly on the boundary of the bounds, which may be important depending on your use case
