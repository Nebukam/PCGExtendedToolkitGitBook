---
icon: sliders
---

# Orient : Weighted

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the subnode does, but still needs to be proofread by a human.
{% endhint %}

> Defines a weighted orientation behavior for path points based on neighboring segment lengths.

#### How It Works

This subnode calculates how each point along a path should be oriented by looking at the lengths of the segments before and after that point. For every point, it:

1. Identifies the previous point (A), current point (B), and next point (C)
2. Measures the squared distances from A to B and from B to C
3. Computes a weight using the formula: `(AB + BC) / Min(AB, BC)`
4. Uses this weight to blend the directions from the previous and next segments
5. Applies the resulting direction to orient the point

When the **Inverse Weight** option is enabled, it flips the blending so that shorter segments have more influence on orientation.

#### Configuration

<details>

<summary><strong>bInverseWeight</strong><br><em>When enabled, inverts the weight used for orientation interpolation.</em></summary>

When enabled, the orientation calculation uses `1 - Weight` instead of `Weight`, causing the point to orient more toward the direction of shorter segments.

</details>

#### Usage Example

Use this subnode when you want a path to have smooth, natural-looking orientations. For example, when generating a winding road or a flowing river, weighted orientation makes the path appear to follow the curve more naturally by aligning points toward longer segments.

#### Notes

* This behavior is particularly useful for visual effects like foliage placement along paths where consistent orientation improves realism.
* The weight calculation ensures that sharp turns are less abrupt than they would be with simple direction vectors.
* Performance impact is minimal as it only computes local distances and interpolations.
