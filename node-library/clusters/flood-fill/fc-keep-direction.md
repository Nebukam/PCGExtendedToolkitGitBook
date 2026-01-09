---
description: 'In editor :: PCGEx | Fill Control : Keep Direction'
icon: circle-dashed
---

# FC : Keep Direction

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Stops flood fill operations after a certain number of vertices have been captured in a specific direction.

#### Overview

This subnode controls how flood fill operations proceed by limiting the number of vertices captured along a given direction. It's particularly useful when you want to prevent fills from spreading too far or in a particular orientation, such as stopping a fill at a certain distance from a starting point in a specific direction.

It defines a behavior that is consumed by flood fill processing nodes to determine whether a candidate vertex should be included in the current diffusion step. It does not process data directly but provides rules for how to evaluate candidates during the fill process.

{% hint style="info" %}
Connects to **Probe** pins on flood fill graph-building nodes.
{% endhint %}

#### How It Works

This subnode evaluates candidates based on their spatial relationship and direction relative to the current diffusion path. It uses a window size to define how many vertices are allowed in a specific direction before stopping further capture.

The algorithm works by:

1. Tracking candidate vertices within a defined "window" around the current fill direction.
2. When the number of valid candidates within that window exceeds the specified **Window Size**, it stops accepting new candidates in that direction.
3. It uses hash-based comparisons to determine if two points are considered equivalent or close enough to be part of the same directional sequence.

This allows for controlled, directional filling that respects spatial constraints and avoids over-spreading in certain regions.

<details>

<summary>Inputs</summary>

Expects a set of candidate vertices from the flood fill operation. These candidates are evaluated based on their position and direction relative to the current diffusion path.

</details>

<details>

<summary>Outputs</summary>

Modifies which candidates are accepted during the flood fill process, effectively limiting how far or in what direction the fill can propagate.

</details>

#### Configuration

***

**Window Size Input**

_Controls whether the window size is a constant value or read from an attribute._

When set to **Constant**, the **Window Size** setting is used directly. When set to **Attribute**, the **Window Size (Attr)** selector defines which attribute to use.

**Window Size (Attr)**

_The attribute to read the window size from._

Only visible when **Window Size Input** is set to **Attribute**.

**Window Size**

_The maximum number of vertices allowed in a direction before stopping._

Must be at least 1. A value of 1 means only one vertex per direction will be accepted.

**Hash Comparison Details**

_Configuration for how spatial comparisons are made when evaluating candidates._

Controls the tolerance for considering two points as equivalent or close enough to be part of the same directional sequence.

#### Usage Example

Use this subnode in a flood fill setup where you want to limit how far the fill spreads in a given direction. For example, if you're creating a cave system and want to stop the fill at 5 vertices from the starting point in any direction, set **Window Size** to 5.

#### Notes

* The **Hash Comparison Details** affect how closely points must align to be considered part of the same directional chain.
* This subnode is best used with directional flood fill operations where the concept of "direction" makes sense (e.g., following a path or direction vector).
* A small window size may result in early termination of fills, while a large one allows more spread.
