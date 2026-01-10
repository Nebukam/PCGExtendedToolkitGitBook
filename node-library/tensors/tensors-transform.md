---
description: 'In editor :: PCGEx | Tensors Transform'
icon: scrubber
---

# Tensors Transform

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Transform input points using tensor-based operations.

#### How It Works

The Tensors Transform node applies tensor-based transformations to each point in a set. It evaluates a tensor field at the location of each point and uses that information to adjust the point's position and/or rotation. This process is repeated for a specified number of iterations, allowing for smooth, continuous changes over time.

Each iteration checks whether the point meets certain stopping conditions (such as reaching a threshold or entering a forbidden area). If so, the point may be excluded from further processing depending on your settings. The node supports three modes for applying rotation changes:

* **Absolute**: The tensor directly defines the new rotation.
* **Relative**: The tensor modifies the current rotation by adding or scaling it.
* **Align**: The rotation is updated to align with the movement direction, which is useful for orienting objects along a path.

The node also tracks how many transformations were applied and whether the point reached its maximum iterations or stopped early. This data can be written as attributes to help visualize and debug the behavior of transformed points.

#### Configuration

<details>

<summary><strong>Transform Position</strong><br><em>Whether to apply tensor-based transformations to the point's position.</em></summary>

When enabled, the node modifies the point’s location based on tensor fields during each iteration.

</details>

<details>

<summary><strong>Transform Rotation</strong><br><em>Whether to apply tensor-based transformations to the point's rotation.</em></summary>

When enabled, the node modifies the point’s orientation based on tensor fields during each iteration.

</details>

<details>

<summary><strong>Rotation Mode</strong><br><em>How to interpret and apply rotation changes from tensors.</em></summary>

Controls how rotation is updated:

* **Absolute**: Tensor defines the new rotation directly.
* **Relative**: Tensor modifies the current rotation.
* **Align**: Rotation is aligned with the movement direction.

**Values**:

* **Absolute**: The tensor's output directly defines the new rotation without considering the current state.
* **Relative**: The tensor's output modifies the current rotation by adding or scaling it.
* **Align**: Rotation is updated to align with the movement direction, useful for orienting objects along paths.

</details>

<details>

<summary><strong>Align Axis</strong><br><em>The axis used when aligning rotation.</em></summary>

Determines which axis of the point should be aligned with the movement direction when using "Align" mode. For example, setting this to "Forward" makes the forward direction of the point follow its movement path.

**Values**:

* **Forward**: Forward (X+).
* **Backward**: Backward (X-).
* **Right**: Right (Y+).
* **Left**: Left (Y-).
* **Up**: Up (Z+).
* **Down**: Down (Z-).

</details>

<details>

<summary><strong>Iterations</strong><br><em>Number of times to apply tensor transformations to each point.</em></summary>

Controls how many times the tensor field is sampled and applied to modify the point's position and rotation. A higher value allows for more complex, gradual changes over time.

</details>

<details>

<summary><strong>Stop Condition Handling</strong><br><em>How to deal with points that are stopped.</em></summary>

Defines whether to include or exclude points that meet a stop condition during processing:

* **Exclude**: Points that stop early are not included in the output.
* **Include**: Points that stop early are included in the output.

**Values**:

* **Exclude**: Ignore the stopping sample and don't add it to the path.
* **Include**: Include the stopping sample to the path.

</details>

<details>

<summary><strong>Write Effectors Pings</strong><br><em>Whether to write the total number of effectors that affected the transform.</em></summary>

When enabled, writes an attribute indicating how many tensor effectors influenced the point across all iterations.

</details>

<details>

<summary><strong>Effectors Pings Attribute Name</strong><br><em>Name of the 'int32' attribute to write the total number of effectors that affected the transform.</em></summary>

The name of the output attribute storing the count of tensor effectors that influenced the point.

</details>

<details>

<summary><strong>Write Update Count</strong><br><em>Whether to write the number of iterations that affected the point before it stopped.</em></summary>

When enabled, writes an attribute indicating how many iterations modified the point before it stopped.

</details>

<details>

<summary><strong>Update Count Attribute Name</strong><br><em>Name of the 'int32' attribute to write the number of iterations that affected the point before it stopped.</em></summary>

The name of the output attribute storing the number of iterations that modified the point.

</details>

<details>

<summary><strong>Write Traveled Distance</strong><br><em>Whether to write the approximative distance travelled by this point.</em></summary>

When enabled, writes an attribute storing the approximate total travel distance of the point.

</details>

<details>

<summary><strong>Traveled Distance Attribute Name</strong><br><em>Name of the 'double' attribute to write the approximative distance travelled by this point.</em></summary>

The name of the output attribute storing the traveled distance.

</details>

<details>

<summary><strong>Write Gracefully Stopped</strong><br><em>Whether to tag the point with a boolean if transform stopped before max iterations.</em></summary>

When enabled, writes an attribute tagging points that stopped early rather than reaching max iterations.

</details>

<details>

<summary><strong>Gracefully Stopped Attribute Name</strong><br><em>Name of the 'bool' attribute to tag the point with if transform stopped before max iterations.</em></summary>

The name of the output attribute storing whether the point was stopped early.

</details>

<details>

<summary><strong>Write Max Iterations Reached</strong><br><em>Whether to tag the point with a boolean if it has reached the max number of iterations set.</em></summary>

When enabled, writes an attribute tagging points that reached their maximum iteration limit.

</details>

<details>

<summary><strong>Max Iterations Reached Attribute Name</strong><br><em>Name of the 'bool' attribute to tag the point with if it has reached the max number of iterations set.</em></summary>

The name of the output attribute storing whether the point reached maximum iterations.

</details>

#### Usage Example

A common use case is simulating particle movement influenced by a vector field. For example, you can use this node to make points move toward or away from certain areas based on a tensor field representing wind or gravity. Set Iterations to 10 and enable both position and rotation transforms. Use an Align mode for rotation so that each point rotates to face its direction of motion. Optionally, write the traveled distance to visualize how far each particle moved.

#### Notes

* The node supports multiple iterations, allowing for smooth, continuous transformation over time.
* Tensor sampling settings are applied after individual tensor mutations, enabling layered effects.
* Stop filters can be used to define regions where points should cease movement.
* Writing attributes like "Update Count" or "Traveled Distance" helps in debugging and visualizing the behavior of transformed points.
