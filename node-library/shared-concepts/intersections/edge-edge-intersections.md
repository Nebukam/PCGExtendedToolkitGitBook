---
icon: xmark-large
---

# Edge/Edge Intersections

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Controls how edges are checked for intersections and how crossing points are flagged or recorded.

#### Overview

This configuration block defines the rules for detecting when two edges intersect in a procedural generation setup. You can control whether self-intersections are considered, how close edges need to be to count as intersecting, and angle constraints that must be met for an intersection to be valid. It also allows you to flag or store information about crossing points for further processing.

Adjust these settings when working with pathfinding, network structures, or any scenario where edge intersections matter in your procedural content. The tolerance setting determines the minimum distance between edges to consider them intersecting, while angle constraints help filter out intersections that don't meet directional criteria.

{% hint style="info" %}
This configuration appears in nodes like: Path to Clusters, Fuse Clusters
{% endhint %}

#### Settings

<details>

<summary><strong>Enable Self Intersection</strong><br><em>When enabled, edges from the same dataset can intersect with each other.</em></summary>

When enabled, edges within the same dataset will be checked for intersections against each other. When disabled, only edges from different datasets are considered for intersection checks.

</details>

<details>

<summary><strong>Tolerance</strong><br><em>Distance at which two edges are considered intersecting.</em></summary>

Controls how close two edges must be to be considered as intersecting. A smaller value means edges must be very close, while a larger value allows for more tolerance.

**Example:** Setting this to 10 units means that if two edges come within 10 units of each other, they are treated as intersecting.

</details>

<details>

<summary><strong>Use Min Angle</strong><br><em>When enabled, only intersections with angles greater than the minimum are considered.</em></summary>

When enabled, intersections are filtered based on the angle between the two edges. Only intersections where the angle is greater than the specified minimum will be processed.

</details>

<details>

<summary><strong>Min Angle</strong><br><em>Minimum angle required for an intersection to be considered valid.</em></summary>

Sets the minimum angle (in degrees) that must exist between two intersecting edges. This helps filter out near-parallel intersections.

**Example:** If set to 30 degrees, only intersections where the angle between edges is at least 30 degrees will be flagged.

</details>

<details>

<summary><strong>Use Max Angle</strong><br><em>When enabled, only intersections with angles less than the maximum are considered.</em></summary>

When enabled, intersections are filtered based on the maximum angle allowed between edges. Only intersections where the angle is less than the specified maximum will be processed.

</details>

<details>

<summary><strong>Max Angle</strong><br><em>Maximum angle allowed for an intersection to be considered valid.</em></summary>

Sets the maximum angle (in degrees) that can exist between two intersecting edges. This helps filter out very sharp intersections.

**Example:** If set to 150 degrees, only intersections where the angle between edges is at most 150 degrees will be flagged.

</details>

<details>

<summary><strong>Write Crossing</strong><br><em>When enabled, a flag attribute is written to indicate crossing points.</em></summary>

When enabled, a new boolean attribute is created on points that are identified as intersection points. This allows you to track and filter these crossings in downstream nodes.

</details>

<details>

<summary><strong>Crossing Attribute Name</strong><br><em>Name of the attribute used to flag crossing points.</em></summary>

Specifies the name of the boolean attribute that will be added to points to indicate if they are part of an edge intersection. This attribute can then be used for filtering or further processing.

**Example:** If set to "bIsCrossing", a new attribute named `bIsCrossing` will be added to each point that is identified as an intersection.

</details>

<details>

<summary><strong>Flag Crossing</strong><br><em>When enabled, the flag values from attributes on edges are copied to crossing points.</em></summary>

When enabled, attribute values from the intersecting edges are copied to the resulting crossing point. This allows you to preserve edge-specific data at intersection locations.

</details>

<details>

<summary><strong>Flag A</strong><br><em>Name of the attribute to copy from the first edge.</em></summary>

Specifies the name of an attribute on the first edge whose value will be copied to the crossing point when flagging is enabled.

</details>

<details>

<summary><strong>Flag B</strong><br><em>Name of the attribute to copy from the second edge.</em></summary>

Specifies the name of an attribute on the second edge whose value will be copied to the crossing point when flagging is enabled.

</details>

#### Common Use Cases

* **Pathfinding:** Identify where paths cross or intersect to create junctions or nodes in a graph
* **Network Structures:** Detect where roads, pipes, or cables intersect for connection points
* **Terrain Generation:** Find where contour lines or elevation changes meet for feature placement
* **Data Filtering:** Mark specific locations as crossing points for later filtering or visualization

#### Notes

* The tolerance value is squared internally for performance reasons, so setting it to 10 units means the actual squared distance threshold is 100.
* Angle constraints are applied after the basic intersection check but before any flagging or attribute copying.
* When both min and max angle constraints are enabled, an intersection must satisfy both conditions to be considered valid.
* The crossing attribute name can be customized to match your existing naming conventions.
