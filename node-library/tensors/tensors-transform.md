---
description: 'In editor :: PCGEx | Tensors Transform'
icon: scrubber
---

# Tensors Transform

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Transform input points using tensors.

### Overview

This node applies tensor-based transformations to point data, allowing you to simulate physics-like behaviors or procedural movements. It's particularly useful for creating organic motion, particle systems with complex interactions, or any scenario where you want points to be influenced by multiple "effectors" that apply forces or transformations over time.

The node operates iteratively, applying transformations based on tensor effectors and optionally stopping when certain conditions are met. You can control how the transform affects position and rotation, and choose between absolute, relative, or alignment-based rotation modes.

{% hint style="info" %}
This node requires valid tensor factories to be connected to the input. Without them, no transformation will occur.
{% endhint %}

<details>

<summary>Inputs</summary>

* **In** (Point): Input points to transform
* **Tensors** (Tensor): Tensor factories that define how points are transformed
* **Stop Filters** (Filter Point): Optional filters to determine when a point should stop being affected

</details>

<details>

<summary>Outputs</summary>

* **Out** (Point): Transformed points with optional metadata attributes

</details>

### Properties Overview

Controls how the tensor transformations are applied and what data is written back to the points.

***

#### Transform Settings

Controls whether position and rotation are transformed, and how rotation is handled.

**Transform Position**

_When enabled, the node will apply positional transformations based on tensors._

* Affects the actual location of the points in space
* Default: Enabled

**Transform Rotation**

_When enabled, the node will apply rotational transformations based on tensors._

* Affects the orientation of the points
* Default: Enabled

**Rotation Mode**

_Determines how rotation is calculated when transforming._

* **Absolute**: Rotation is applied independently of any source transform.
* **Relative**: Rotation is relative to the current point's existing rotation.
* **Align**: Rotation is aligned with the movement direction, useful for orienting objects along their path.

**Align Axis**

_Controls which axis is aligned with the movement direction when using "Align" mode._

* **Forward**: Aligns the forward axis (X+) with movement
* **Backward**: Aligns the backward axis (X-) with movement
* **Right**: Aligns the right axis (Y+) with movement
* **Left**: Aligns the left axis (Y-) with movement
* **Up**: Aligns the up axis (Z+) with movement
* **Down**: Aligns the down axis (Z-) with movement

**Iterations**

_Number of times to apply the tensor transformations._

* Higher values allow for more complex, cumulative effects
* Example: Setting this to 5 means each point will be transformed 5 times in sequence
* Default: 1

***

#### Stop Condition Handling

Controls how points that meet a stop condition are treated.

**Stop Condition Handling**

_Determines whether points that reach a stop condition are included or excluded from the output._

* **Exclude**: Points that stop early are removed from the output
* **Include**: Points that stop early are kept in the output with their final state

***

#### Output Attributes

Controls which metadata attributes are written back to the points.

**Write Effectors Pings**

_When enabled, writes an attribute tracking how many effectors influenced each point._

* Useful for debugging or creating visual effects based on interaction count
* Attribute name: "EffectorsPings"

**Write Update Count**

_When enabled, writes an attribute tracking how many iterations a point was affected._

* Useful for understanding how long points were active in the simulation
* Attribute name: "UpdateCount"

**Write Traveled Distance**

_When enabled, writes an attribute tracking the approximate distance traveled by each point._

* Useful for creating effects that depend on path length or motion history
* Attribute name: "TraveledDistance"

**Write Gracefully Stopped**

_When enabled, writes a boolean attribute indicating if a point stopped before max iterations._

* Useful for identifying points that were influenced but eventually came to rest
* Attribute name: "GracefullyStopped"

**Write Max Iterations Reached**

_When enabled, writes a boolean attribute indicating if a point reached the maximum iteration count._

* Faster alternative to checking multiple attributes
* Attribute name: "MaxIterationsReached"

***

### Notes

* This node is designed for iterative tensor-based transformations and works best with multiple iterations
* The "Align" rotation mode is particularly useful for orienting objects along their movement path, such as particles or projectiles
* Consider using stop filters to create more natural stopping behaviors in simulations
* Performance can be improved by reducing the number of iterations or limiting the number of effectors
* The output points will maintain their original attributes unless overwritten by tensor transformations
