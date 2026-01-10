---
icon: sliders
---

# Tangents : Catmull-Rom

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Defines Catmull-Rom tangents for path data.

#### How It Works

This subnode calculates smooth tangent directions for paths using the Catmull-Rom spline method. For each point in a sequence, it evaluates the positions of the neighboring points before and after it to determine how the path should enter and leave that point.

The process works as follows:

1. It identifies the previous point (P-1) and next point (P+1) in the sequence
2. It computes the vector between these two points
3. It splits this vector in half to establish a base tangent magnitude
4. It applies scaling factors from the input data to adjust the length of the tangents
5. It assigns the resulting vectors as arrive and leave tangents for the current point

This method ensures that paths flow smoothly through or near control points, creating natural-looking curves that avoid sharp transitions.

#### Configuration

<details>

<summary><strong>Closed Loop</strong><br><em>When enabled, treats the path as a closed loop where the last point connects back to the first.</em></summary>

When enabled, the subnode will use the first point as the "next" point for the last point in the sequence and the last point as the "previous" point for the first point. This creates a continuous loop where the path smoothly transitions from the end back to the start.

</details>

#### Usage Example

Use this subnode when creating smooth, natural-looking paths for:

* Navigation meshes
* Camera movement along routes
* Vehicle or character motion paths
* Organic terrain features like rivers or roads

For example, if you have a set of waypoints defining a mountain trail, connecting this subnode to **Write Tangents** will generate smooth tangent vectors that make the path appear as a continuous, flowing curve rather than sharp turns.

#### Notes

The Catmull-Rom algorithm produces tangents that are proportional to the distance between adjacent points. When point spacing is irregular, the resulting curves may appear uneven. Consider using uniform point spacing or applying smoothing operations before this subnode for more consistent results.
