---
icon: xmark-large
---

# Path Intersection

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

\> Controls how edge intersections are detected and evaluated in path-based procedural operations.

#### Overview

This configuration defines the rules for determining when two edges (line segments) in a path are considered to intersect. It balances distance tolerance with angular constraints to decide whether paths cross or meet. You might adjust these settings when you want to fine-tune how strict or lenient your intersection detection is, especially when working with complex path networks or filtering overlapping segments.

{% hint style="info" %}
This configuration appears in nodes like: Extrude Tensors (External Path Intersections), Extrude Tensors (Self Path Intersections), Merge Details, Segment Cross Filter
{% endhint %}

#### Settings

<details>

<summary><strong>Tolerance</strong><br><em>Distance at which two edges are considered intersecting.</em></summary>

When two edges come within this distance of each other, they are treated as intersecting. A smaller value makes the detection more strict, while a larger value allows for more leniency.

**Values**: Any positive number (e.g., 0.1, 1.0, 5.0)

</details>

<details>

<summary><strong>bUseMinAngle</strong><br><em>Enable minimum angle constraint.</em></summary>

When enabled, this setting enforces a minimum angle threshold for intersections. Edges must meet at an angle greater than or equal to the specified value to be considered intersecting.

**Values**:

* **True**: Minimum angle is used in intersection checks
* **False**: No minimum angle constraint

</details>

<details>

<summary><strong>MinAngle</strong><br><em>Minimum angle for intersection detection.</em></summary>

The smallest allowed angle between two edges for them to be considered intersecting. Only active when "bUseMinAngle" is enabled.

**Values**: Any number between 0 and 90 degrees (e.g., 10, 45, 80)

</details>

<details>

<summary><strong>bUseMaxAngle</strong><br><em>Enable maximum angle constraint.</em></summary>

When enabled, this setting enforces a maximum angle threshold for intersections. Edges must meet at an angle less than or equal to the specified value to be considered intersecting.

**Values**:

* **True**: Maximum angle is used in intersection checks
* **False**: No maximum angle constraint

</details>

<details>

<summary><strong>MaxAngle</strong><br><em>Maximum angle for intersection detection.</em></summary>

The largest allowed angle between two edges for them to be considered intersecting. Only active when "bUseMaxAngle" is enabled.

**Values**: Any number between 0 and 90 degrees (e.g., 10, 45, 80)

</details>

<details>

<summary><strong>Strictness</strong><br><em>How strictly intersections are evaluated.</em></summary>

Controls how edge cases are handled during intersection detection. Different modes allow for varying levels of leniency or strictness in evaluating whether edges truly intersect.

**Values**:

* **Strict**: Only exact intersections are counted
* **Loose**: More lenient handling, allows for near-intersections

</details>

#### Common Use Cases

* **Filtering Paths**: Use a small tolerance and angle constraints to only allow sharp, clear intersections in path filtering.
* **Path Smoothing**: Increase tolerance and use broader angle ranges to allow for smoother, more flexible path intersections.
* **Complex Network Detection**: Adjust strictness to control how overlapping or near-overlapping paths are treated in network generation.

#### Notes

* The tolerance value is squared internally for performance reasons.
* Angle constraints (MinAngle and MaxAngle) are only active when their respective toggle flags are enabled.
* The Strictness setting affects edge cases like parallel lines or very close-to-parallel edges, which may not be considered intersections under strict mode but could be under loose mode.
