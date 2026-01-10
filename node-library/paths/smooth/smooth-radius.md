---
icon: sliders
---

# Smooth : Radius

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Smooths points along a path using a radius-based influence.

#### How It Works

This smoothing subnode adjusts the position of each point in a path by considering nearby points within a defined distance. For every point, it looks for other points that fall inside a specified radius and blends their positions with the target point. The closer a neighboring point is to the target, the more influence it has on the final position.

The blending process uses inverse distance weighting, meaning that points nearer to the target have a stronger effect than those farther away. An influence factor controls how much this blending affects the final result, allowing for fine-tuned smoothing behavior.

#### Configuration

<details>

<summary><strong>Smoothing Radius</strong><br><em>The radius within which nearby points influence the smoothing.</em></summary>

Controls how far the smoothing effect extends from each point. Larger values result in more extensive smoothing, while smaller values preserve sharper details.

**Values**:

* **0.0**: No smoothing applied.
* **Positive value**: Radius in world units to search for nearby points.

</details>

<details>

<summary><strong>Influence</strong><br><em>How strongly nearby points affect the smoothing.</em></summary>

Controls the intensity of the blending effect. A value of 0 disables smoothing, while higher values increase the influence of nearby points on the target point's position.

**Values**:

* **0.0**: No influence from nearby points.
* **1.0**: Full influence from nearby points.
* **Higher than 1.0**: Over-blending, potentially creating overshoots.

</details>

#### Usage Example

Create a path with sharp angles and connect this subnode to the Smoothing pin of a path smoothing node. Set the Smoothing Radius to 100 units and Influence to 0.5 to softly smooth the path while preserving its overall shape.

#### Notes

* The radius is measured in world units.
* Points exactly at the center of the radius are fully influenced.
* Points at the edge of the radius have minimal influence.
* Higher influence values can cause points to move significantly, potentially creating artifacts.
