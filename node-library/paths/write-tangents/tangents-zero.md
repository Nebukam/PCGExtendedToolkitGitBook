---
icon: sliders
---

# Tangents : Zero

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Sets all tangents to zero for path points.

#### Overview

This subnode defines a behavior that resets all tangent vectors for points in a path to zero. It's useful when you want to ensure that path segments have no directional influence or curvature, effectively making them straight lines with no tangent bias. This can be helpful in scenarios where you're blending paths or need clean, neutral tangents before applying other operations.

{% hint style="info" %}
Connects to the **Tangents** input pin of path processing nodes like **Write Tangents**.
{% endhint %}

#### How It Works

This subnode enforces zero tangents for all points in a path by overriding the tangent calculation logic. For every point in the path — whether it's the first, last, or any intermediate point — it sets both the arrive and leave tangent vectors to zero. This effectively removes any directional influence from the tangent data, ensuring that each point has no tangent bias.

* It processes the first point of a path and sets both its arrive and leave tangents to zero.
* It processes the last point of a path and sets both its arrive and leave tangents to zero.
* It processes all intermediate points and sets both their arrive and leave tangents to zero.

This approach ensures that regardless of how the path is structured, all tangent data will be reset to neutral values.

<details>

<summary>Inputs</summary>

Expects a path with point data containing tangent information to be processed.

</details>

<details>

<summary>Outputs</summary>

Modifies the tangent data for each point in the input path, setting all arrive and leave tangents to zero.

</details>

#### Configuration

No configuration options are available for this subnode.

#### Usage Example

Use this subnode when you want to reset tangent directions on a path before applying a new tangent generation method. For example, after generating a curved path using a noise-based tangent generator, you might use this subnode to zero out the tangents and then apply a different tangent strategy for smoothing or blending.

#### Notes

This subnode is particularly useful in combination with other tangent operations where you want to ensure clean starting conditions. It's a simple but effective way to neutralize existing tangent data.
