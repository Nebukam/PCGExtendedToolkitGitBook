---
icon: sliders
---

# Tangents : Neighbors

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Defines tangents based on the direction of neighboring points in a path.

#### How It Works

This subnode calculates tangent vectors for each point in a path by analyzing the direction of adjacent points. For each point, it identifies the previous and next points in the sequence, computes vectors from the current point to these neighbors, reverses the vector pointing to the previous neighbor to get an incoming direction, and averages these two directions to determine the tangent vector. It then applies scaling factors to control the magnitude of the tangent.

The algorithm effectively creates smooth, natural-looking tangents that follow the path's curvature by blending the directions from adjacent points. This approach ensures that the tangents reflect the local geometry of the path and can be used in downstream operations like curve smoothing, mesh generation, or particle placement.

#### Configuration

<details>

<summary><strong>Closed Loop</strong><br><em>Whether to treat the path as a closed loop.</em></summary>

When enabled, the first point is considered to follow the last point in the sequence. This allows for smoother tangents at the start/end of the path when it forms a continuous shape.

**Values**:

* **False**: Treats the path as open (default)
* **True**: Treats the path as closed

</details>

{% hint style="info" %}
Connects to \*\*Tangents\*\* input pins on path processing nodes.
{% endhint %}

#### Usage Example

Use this subnode to generate smooth, natural-looking tangents for a path that represents a winding road or river. Connect it to a "Write Tangents" node to define how points in the path should be oriented when used in downstream operations like mesh generation or particle placement.

#### Notes

* This method works best with paths that have sufficient spacing between points to avoid degenerate cases
* The resulting tangents are always normalized and then scaled by the provided factors
* For closed loops, ensure your path data forms a proper loop structure for consistent results
