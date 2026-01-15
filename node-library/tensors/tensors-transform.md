---
description: 'In editor :: PCGEx | Tensors Transform'
icon: scrubber
---

# Tensors Transform

Transform input points using tensors.

**How It Works**

> AI-Generated, needs proofreading

* The Tensors Transform node processes input points by applying transformations based on specified settings.
* If "Transform Position" is set to true, the node modifies the position of each point using tensors.
* If "Transform Rotation" is enabled, the node applies rotation to the points according to the selected mode in the "Rotation" setting and aligns them with the axis defined by "Align Axis".
* The process repeats for a number of times equal to the value set in the "Iterations" parameter.

#### Configuration

<details>

<summary><strong>Transform Position</strong> <code>bool</code></summary>

Controls transform position.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Transform Rotation</strong> <code>bool</code></summary>

Controls transform rotation.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Rotation</strong> <code>PCGExTensorTransformMode</code></summary>

Controls rotation.

**Values:**

* **Absolute**: Absolute, ignores source transform.
* **Relative**: Relative to source transform.
* **Align**: Align rotation with movement direction.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Align Axis</strong> <code>PCGExAxis</code></summary>

Controls align axis.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Iterations</strong> <code>int32</code></summary>

Controls iterations.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tensor Sampling Settings</strong> <code>PCGExTensorHandlerDetails</code></summary>

Tensor sampling settings. Note that these are applied on the flattened sample, e.g after & on top of individual tensors' mutations.

📦 See: TensorHandler configuration

⚡ PCG Overridable

</details>

**Limits**

<details>

<summary><strong>Stop Condition Handling</strong> <code>PCGExTensorStopConditionHandling</code></summary>

How to deal with points that are stopped

⚡ PCG Overridable

</details>

**Outputs**

<details>

<summary><strong>Write Effectors Pings</strong> <code>bool</code></summary>

Controls write effectors pings.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Effectors Pings</strong> <code>Name</code></summary>

Name of the 'int32' attribute to write the total number of effectors that affected the transform, all iterations combined. This is hardly a measure of anything, but it's an interesting value nonetheless

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Update Count</strong> <code>bool</code></summary>

Controls write update count.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Update Count</strong> <code>Name</code></summary>

Name of the 'int32' attribute to write the number of iterations that affected the point before it stopped.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Traveled Distance</strong> <code>bool</code></summary>

Controls write traveled distance.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Traveled Distance</strong> <code>Name</code></summary>

Name of the 'double' attribute to write the approximative distance travelled by this point.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Gracefully Stopped</strong> <code>bool</code></summary>

Controls write gracefully stopped.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Gracefully Stopped</strong> <code>Name</code></summary>

Name of the 'bool' attribute to tag the point with if transform stopped before the maximum number of iterations.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Max Iterations Reached</strong> <code>bool</code></summary>

Controls write max iterations reached.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Iterations Reached</strong> <code>Name</code></summary>

Name of the 'bool' attribute to tag the point with if it has reached the max number of iterations set. Faster alternative to comparing multiple attributes.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsTensors\Public\Elements\PCGExTensorsTransform.h`
