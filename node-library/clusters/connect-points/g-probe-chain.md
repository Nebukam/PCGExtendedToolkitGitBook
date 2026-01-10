---
icon: circle-dashed
---

# G-Probe : Chain

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates sequential chain connections based on sorting criteria.

#### How It Works

This subnode organizes points into a logical sequence by sorting them according to a chosen method. Once sorted, each point connects to the next one in line, forming a chain. The sorting approach determines how the order is established:

* **By Attribute**: Points are arranged using a numeric value from an attribute (like density or height). You can choose whether to sort from low to high or high to low values.
* **By Axis Projection**: Points are aligned along a specific direction (X, Y, or Z axis) and sorted by their position on that axis. This is useful for creating linear arrangements.
* **By Spatial Curve (TSP)**: Uses an approximation of the Traveling Salesman Problem to sort points so they follow the shortest possible path. This results in a more efficient spatial route.
* **By Hilbert Curve**: Sorts points based on their location along a space-filling curve, which helps keep nearby points close together in the sequence.

After sorting, each point connects to the next one in order. If "Closed Loop" is enabled, the final point links back to the first, forming a continuous cycle.

#### Configuration

<details>

<summary><strong>Sort Mode</strong><br><em>How to sort the points when creating the chain.</em></summary>

Controls how the points are ordered before connecting them.

**Values**:

* **By Attribute**: Sort by a scalar attribute value.
* **By Axis Projection**: Sort by projection onto a specific axis.
* **By Spatial Curve (TSP)**: Use a greedy TSP approximation for spatially efficient ordering.
* **By Hilbert Curve**: Sort using a Hilbert curve index to maintain spatial locality.

</details>

<details>

<summary><strong>Sort Attribute</strong><br><em>Attribute to sort by (for ByAttribute mode).</em></summary>

The scalar attribute used when sorting points in "By Attribute" mode. For example, you could sort by a "Density" or "Height" attribute.

</details>

<details>

<summary><strong>Projection Axis</strong><br><em>Axis to project onto (for ByAxisProjection mode).</em></summary>

The axis along which points are projected and sorted when using "By Axis Projection" mode. For example, setting this to `ForwardVector` (X-axis) will sort points from left to right.

</details>

<details>

<summary><strong>Closed Loop</strong><br><em>If true, creates a closed loop connecting last to first.</em></summary>

When enabled, the last point in the sorted sequence connects back to the first point, forming a continuous cycle. Useful for creating rings or loops in your data.

</details>
