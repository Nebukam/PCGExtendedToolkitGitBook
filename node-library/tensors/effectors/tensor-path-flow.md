---
description: 'In editor :: PCGEx | Tensor : Path Flow'
icon: circle-dashed
---

# Tensor : Path Flow

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> A tensor that represents a vector/flow field along a path.

### Overview

This node creates a tensor that defines a flow or direction along a path, useful for guiding procedural generation behaviors like particle movement, object placement, or deformation. It operates by sampling from a set of paths and computing a vector field that follows the shape and orientation of those paths.

The resulting tensor can be used to influence other nodes in your graph, such as point placement or mesh deformation, based on how points relate to the underlying path structure.

{% hint style="info" %}
This node requires input paths to define the flow direction. Make sure your input data contains valid paths for best results.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Points or paths that define the flow field
* **Secondary Input (Optional)**: Additional data used for tensor configuration

</details>

<details>

<summary>Outputs</summary>

* **Output**: A tensor that can be consumed by other nodes in your graph to apply path-based flow effects

</details>

### Properties Overview

Controls how the tensor is generated from input paths.

***

#### Path Settings

Configures how the tensor interprets and samples from input paths.

**Point Type**

_Controls the type of interpolation used between points along the path._

* Determines how the shape of the path is represented
* **Linear (0)**: Straight lines between points
* **Curve (1)**: Smooth curves between points
* **Constant (2)**: Constant value at each point
* **CurveClamped (3)**: Smooth curves with clamped tangents

**Smooth Linear**

_When enabled, applies smoothing to linear interpolation._

* Makes the path appear less angular when using linear point types
* Improves visual continuity in flow fields

**Sample Inputs**

_Determines which input paths are included in the tensor generation._

* **All**: Includes all input paths
* **Closed loops only**: Only includes closed-loop paths
* **Open lines only**: Only includes open line paths

**Radius**

_Scales the base radius of the spline used to define the flow field._

* Controls how far the tensor influences points around the path
* Larger values result in wider influence zones
* Value is in world units (e.g., 100 = 100 units)

**Spline Direction**

_Selects which axis of the spline defines the primary direction of the flow._

* **Forward (X+)**: Uses the X-axis as the forward direction
* **Backward (X-)**: Uses the negative X-axis as the forward direction
* **Right (Y+)**: Uses the Y-axis as the forward direction
* **Left (Y-)**: Uses the negative Y-axis as the forward direction
* **Up (Z+)**: Uses the Z-axis as the forward direction
* **Down (Z-)**: Uses the negative Z-axis as the forward direction

### Notes

* This tensor is particularly useful for creating natural-looking flows, such as rivers, roads, or wind patterns
* The radius setting effectively controls how "wide" the influence of each path is
* Consider using a smaller radius with many paths to create detailed flow fields
* Combine with other tensor nodes to blend multiple flow patterns together
* For best results, ensure your input paths are well-defined and don't intersect in unexpected ways
