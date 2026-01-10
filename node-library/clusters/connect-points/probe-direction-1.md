---
icon: circle-dashed
---

# Probe : Tensor

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Sample a tensor at point location and probe in that direction.

#### Overview

This subnode defines a directional probe that samples tensor data at each point's location to determine a preferred direction. It then evaluates nearby candidates based on how well their directions align with the sampled tensor direction, making it ideal for creating connections or paths that follow natural flow patterns defined by tensor fields.

It is used in scenarios where you want to guide procedural connections along directional data like velocity fields, magnetic fields, or other vector-based tensor data. This subnode connects specifically to Filter pins on processing nodes that support directional probing.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### How It Works

This probe samples a tensor field at each point's location and extracts a direction vector from the tensor. It then evaluates nearby candidates based on how closely their directions align with the sampled tensor direction.

The evaluation considers:

1. The tensor's sampled direction at the point
2. The angle between candidate directions and the tensor direction
3. Whether to favor alignment or proximity when selecting candidates

It can optionally invert the sampled direction, use component-wise angle thresholds, and perform chained processing for more complex candidate selection logic.

#### Configuration

<details>

<summary><strong>bInvertTensorDirection</strong><br><em>Mirror (*-1) the direction sampled from the tensors.</em></summary>

When enabled, the direction sampled from the tensor is inverted (multiplied by -1) before being used for candidate evaluation.

</details>

<details>

<summary><strong>Favor</strong><br><em>What matters more?</em></summary>

Determines whether to prioritize candidates that align best with the tensor direction (**Dot**) or those that are closest in position (**Dist**).

**Values**:

* **Best alignment**: Favor candidates that best align with the tensor direction.
* **Closest position**: Favor candidates that are closest, even if they don't align well.

</details>

<details>

<summary><strong>bUseComponentWiseAngle</strong><br><em>Enable component-wise angle thresholds.</em></summary>

When enabled, uses separate maximum angles for each axis (X, Y, Z) instead of a single scalar angle. This allows for more precise directional constraints.

</details>

<details>

<summary><strong>MaxAngle</strong><br><em>Max angle to search within.</em></summary>

Maximum angle in degrees to consider candidates within when `bUseComponentWiseAngle` is disabled. Candidates outside this angle are filtered out.

</details>

<details>

<summary><strong>MaxAngles</strong><br><em>Max angle to search within.</em></summary>

Separate maximum angles for each axis (X, Y, Z) when `bUseComponentWiseAngle` is enabled. Each component defines the angular threshold in that direction.

</details>

<details>

<summary><strong>bDoChainedProcessing</strong><br><em>This probe will sample candidates after the other. Can yield different results.</em></summary>

When enabled, this probe performs additional processing on candidate points after initial evaluation. This can lead to different results compared to standard processing.

</details>

<details>

<summary><strong>TensorHandlerDetails</strong><br><em>Tensor sampling settings.</em></summary>

Settings that control how the tensor field is sampled at each point. These settings are applied after any individual tensor mutations and affect the final direction extracted from the tensor.

</details>

#### Usage Example

Use this subnode in a "Connect Points" graph to create paths that follow magnetic or velocity field directions. For instance, connect it to a "Cluster Connections" node where you want edges to align with a magnetic field's orientation rather than being the closest points.

#### Notes

* The tensor sampling settings are applied on flattened samples, meaning they work after any individual tensor mutations.
* This subnode is particularly effective when used with tensor fields that define meaningful directional flow.
* Chained processing can be useful for refining results in complex scenarios where multiple passes improve alignment.
