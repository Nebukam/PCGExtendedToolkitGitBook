---
icon: arrows-maximize
---

# Apply Sampling

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Controls how sampled transform and look-at data is applied to points in procedural generation.

#### Overview

This configuration block defines how transform data (position, rotation, scale) and look-at information from a sampled source should be applied to points. It's commonly used when you want to align or orient points based on sampled geometry or other data. You can choose whether to apply the full transform or just specific components, and also control how look-at data is applied.

{% hint style="info" %}
This configuration appears in nodes like: Sample Nearest Bounds, Sample Nearest Point, Sample Nearest Surface, Sample Nearest Spline, Sample Nearest Path, Sample Surface Guided, Sample Vtx By ID
{% endhint %}

#### Settings

<details>

<summary><strong>Apply Transform</strong><br><em>When enabled, applies sampled transform data (position, rotation, scale) to the point.</em></summary>

When enabled, the sampled transform data is applied to the point. This includes position, rotation, and scale components which can be individually controlled.

</details>

<details>

<summary><strong>Transform Position</strong><br><em>Which position components from the sampled transform should be applied to the point.</em></summary>

Controls which components of the sampled position (X, Y, Z) are applied to the point. This is a bitmask where each bit represents a component.

</details>

<details>

<summary><strong>Transform Rotation</strong><br><em>Which rotation components from the sampled transform should be applied to the point.</em></summary>

Controls which components of the sampled rotation (Pitch, Yaw, Roll) are applied to the point. This is a bitmask where each bit represents a component.

</details>

<details>

<summary><strong>Transform Scale</strong><br><em>Which scale components from the sampled transform should be applied to the point.</em></summary>

Controls which components of the sampled scale (X, Y, Z) are applied to the point. This is a bitmask where each bit represents a component.

</details>

<details>

<summary><strong>Apply Look At</strong><br><em>When enabled, applies sampled look-at data to the point.</em></summary>

When enabled, the sampled look-at data is applied to the point. This typically adjusts the rotation so that the point faces a specific direction.

</details>

<details>

<summary><strong>Look At Position</strong><br><em>Which position components from the sampled look at should be applied to the point.</em></summary>

Controls which components of the sampled look-at position (X, Y, Z) are applied to the point. This is a bitmask where each bit represents a component.

</details>

<details>

<summary><strong>Look At Rotation</strong><br><em>Which rotation components from the sampled look at should be applied to the point.</em></summary>

Controls which components of the sampled look-at rotation (Pitch, Yaw, Roll) are applied to the point. This is a bitmask where each bit represents a component.

</details>

<details>

<summary><strong>Look At Scale</strong><br><em>Which scale components from the sampled look at should be applied to the point.</em></summary>

Controls which components of the sampled look-at scale (X, Y, Z) are applied to the point. This is a bitmask where each bit represents a component.

</details>

#### Common Use Cases

* **Aligning objects to terrain**: Apply only position and rotation from sampled surface data to place objects correctly on terrain.
* **Orienting characters toward targets**: Use look-at functionality to make characters face specific points or other objects.
* **Applying transform variations**: Apply only scale components to create random size variations while keeping position and rotation intact.

#### Notes

The transform and look-at settings work independently, so you can apply one without the other. The bitmask controls allow for fine-grained control over which components are applied. When both transform and look-at are enabled, they're applied in sequence, with look-at typically overriding rotation settings.
