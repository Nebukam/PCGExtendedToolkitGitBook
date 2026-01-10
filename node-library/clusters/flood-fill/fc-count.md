---
description: 'In editor :: PCGEx | Fill Control : Count'
icon: circle-dashed
---

# FC : Count

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Stop fill after a certain number of vtx have been captured.

#### How It Works

This subnode monitors the number of vertices captured during a flood fill operation and stops the fill when a specified limit is reached. It acts as a gate that prevents further vertex addition once the maximum count has been achieved, even if more valid candidates exist in the dataset.

The system evaluates each new candidate vertex against the current capture count. If accepting the candidate would exceed the defined maximum, it is rejected and not added to the fill set. This ensures consistent control over how many vertices are processed during diffusion, helping manage performance and visual output.

#### Configuration

<details>

<summary><strong>Max Count Input</strong><br><em>Whether to use a constant or attribute value for the max count.</em></summary>

Controls whether the maximum vertex count is fixed or dynamically read from an input attribute.

**Values**:

* **Constant**: Use the fixed value defined in Max Count.
* **Attribute**: Read the value from the input data using the Max Count Attribute name.

</details>

<details>

<summary><strong>Max Count (Attr)</strong><br><em>Max Count Attribute</em></summary>

The name of the attribute to read the maximum count from when Max Count Input is set to "Attribute".

</details>

<details>

<summary><strong>Max Count</strong><br><em>Max Count Constant</em></summary>

The fixed number of vertices to allow before stopping the fill. Must be at least 1.

</details>

#### Usage Example

Use this subnode in a flood fill setup where you want to limit how many points are captured, for example, to prevent overfilling or to control visual density. For instance, set Max Count to 50 to ensure that no more than 50 vertices are added to the fill set, regardless of how many valid candidates exist.

#### Notes

This subnode only affects capture behavior and does not influence probe or candidate validation logic. It is designed specifically for limiting vertex accumulation during diffusion.
