---
description: 'In editor :: PCGEx | Fill Control : Keep Direction'
icon: circle-dashed
---

# FC : Keep Direction

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Stop fill after a certain number of vtx have been captured.

#### How It Works

This subnode controls flood fill operations by setting a limit on how many points can be added in each direction before stopping. It tracks the number of captured points within a defined window size for each directional axis. When that limit is reached, the fill stops exploring in that direction.

The system uses a hash-based method to group points into directional windows. This ensures that only a specific number of points are accepted per direction, creating a controlled spread that prevents overfilling in any one area.

#### Configuration

<details>

<summary><strong>Window Size Input</strong><br><em>How to define the window size.</em></summary>

Controls whether the window size is defined as a constant or read from an attribute.

**Values**:

* **Constant**: Use a fixed, user-defined value.
* **Attribute**: Read the window size from an input point attribute.

</details>

<details>

<summary><strong>Window Size (Attr)</strong><br><em>Window Size Attribute.</em></summary>

The attribute to read the window size from when using attribute-based input.

</details>

<details>

<summary><strong>Window Size</strong><br><em>Window Size Constant.</em></summary>

The fixed value for the window size when using constant input. Must be at least 1.

</details>

<details>

<summary><strong>Hash Comparison Details</strong><br><em>Hash comparison settings.</em></summary>

Settings that define how point positions are hashed and compared to determine if they fall within the same directional window.

</details>

#### Usage Example

Use this subnode in a flood fill setup where you want to control how far the fill spreads in any given direction. For example, when creating a terrain fill that should not extend too far from a central point in one direction, you can set a window size of 5 to limit how many points are captured in each direction before stopping.

#### Notes

* The window size acts as a directional limit, not a total point count.
* This subnode is particularly useful for creating structured or constrained fills that maintain shape.
* Performance is affected by the hash comparison settings; finer precision may slow down processing.
