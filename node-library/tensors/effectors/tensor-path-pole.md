---
description: 'In editor :: PCGEx | Tensor : Path Pole'
icon: circle-dashed
---

# Tensor : Path Pole

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> A tensor that represents a vector/flow field along a path.

### Overview

This node creates a flow field that follows the shape of a path, applying influence along its length. It's useful for guiding particles, objects, or effects along curved or straight paths in your procedural content. The resulting tensor can be used to direct movement, rotation, or other behaviors based on position relative to the path.

{% hint style="info" %}
This node works with paths created from point data. Make sure your input points form a valid path (either open or closed) for best results.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Points** (Primary): Point data that defines the path to follow
* **Secondary Points** (Optional): Additional point data used for sampling or reference

</details>

<details>

<summary>Outputs</summary>

* **Tensor**: A flow field tensor that applies influence along the path

</details>

### Properties Overview

Settings for defining how the path is interpreted and how the tensor behaves.

***

#### Path Settings

Controls how the input points are interpreted as a path.

**Point Type**

_The type of interpolation used between points._

* Defines whether the path is linear, curved, or constant between control points
* **Linear (0)**: Straight lines between points
* **Curve (1)**: Smooth curves using Catmull-Rom splines
* **Constant (2)**: Constant value at each point
* **CurveClamped (3)**: Smooth curves with clamped tangents

**Smooth Linear**

_When enabled, applies smoothing to linear interpolation._

* Only affects the path when Point Type is set to Linear
* Makes transitions between points less sharp and more gradual

**Sample Inputs**

_Determines which inputs are used for sampling._

* **All**: Uses all input paths regardless of whether they are open or closed
* **Closed loops only**: Only samples closed loop paths
* **Open lines only**: Only samples open line paths

**Radius**

_Base radius of the tensor influence._

* Controls how far the tensor's effect extends from the path
* Value is scaled by control points' scale length
* Example: With a base radius of 100 and a point with scale 2, the effective radius becomes 200

#### Tensor Settings

Controls how the tensor applies its influence.

**Tensor Weight**

_The overall strength of the tensor._

* Affects how strongly the tensor influences the sampled points
* Higher values make the effect more pronounced

**Potency Falloff**

_Configures how potency decreases with distance._

* Controls the rate at which influence weakens as you move away from the path
* Uses a lookup table to define falloff curve

**Weight Falloff**

_Configures how weight decreases with distance._

* Controls how much each point contributes to the final tensor result
* Also uses a lookup table for falloff curve

### Notes

* This node works best when input points form a continuous path (open or closed loop)
* The tensor's influence is strongest along the path and weakens as you move away from it
* Combine with other tensors to create complex flow fields
* Use the Radius setting to control how far the effect extends from the path
* For smooth paths, consider using Curve interpolation for Point Type
* When using Smooth Linear, the effect will be less sharp at corners, creating a more natural transition
