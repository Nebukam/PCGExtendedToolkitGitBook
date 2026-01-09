---
description: 'In editor :: PCGEx | Fuse Points'
icon: circle
---

# Fuse Points

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Fuses points that are within a specified distance of each other, creating a single point from multiple close points.

### Overview

This node combines points that are located near each other into a single representative point. It's useful for cleaning up dense point clouds or merging overlapping elements in procedural generation workflows. You can choose to blend the properties of fused points or keep only the most central one.

{% hint style="info" %}
The fusing operation is performed in a single-threaded context, which means it may impact performance on very large datasets.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Points to be processed
* **Filter Input (Optional)**: A point filter to apply before fusing

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Fused points based on the selected mode

</details>

### Properties Overview

Controls how points are fused and what happens to their properties.

***

#### General

Controls the core behavior of the fusing operation.

**Mode**

_Controls how fused points are handled._

* When set to **Blend**, all points within the distance threshold are merged using blending operations.
* When set to **Keep Most Central**, only the point that is most central to the group is kept, discarding others.

**Values**:

* **Blend**: Blend all points within a radius
* **Keep Most Central**: Keep the existing point that's most central to the sample group

**Point/Point Settings**

_Configures the distance-based criteria for fusing._

* Defines the minimum distance between points to consider them as candidates for fusion.
* Points closer than this threshold will be merged together.

**Preserve the order of input points**

_When enabled, maintains the original order of points in the output._

* This can affect performance slightly but ensures that the output sequence matches the input sequence.

**Blend Settings**

_Configures how point properties and attributes are combined when using the Blend mode._

* Controls how different properties (like position, rotation, scale) are blended together.
* Uses standard blending operations like average or weighted sum.

**Carry Over Settings**

_Configures which attributes from original points are carried over to the fused result._

* Determines which attributes from the input points are preserved in the output.
* Useful for maintaining important metadata during fusion.

### Notes

* The fusing operation is single-threaded, so performance may degrade with large point sets.
* Use the **Keep Most Central** mode when you want to preserve specific point identities rather than blending them.
* In **Blend** mode, consider using **Average** or **Weight** blending for smooth transitions between point properties.
* The **Point/Point Settings** section controls the distance threshold; adjust this based on your desired density of output points.
