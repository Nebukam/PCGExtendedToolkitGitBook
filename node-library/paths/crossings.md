---
description: 'In editor :: PCGEx | Path : Crossings'
icon: circle
---

# Crossings

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Find crossing points between and inside paths.

#### How It Works

This node analyzes paths to detect where they intersect or cross each other. It can identify both self-intersections (where a single path crosses itself) and intersections between different paths. The node evaluates each path against others based on filtering settings, calculates the exact location of crossings, and optionally creates new points at those locations.

When enabled, it applies blending to attributes from nearby points along the path and writes optional output attributes such as alpha values, cross direction vectors, and flags indicating if a point is a crossing. It also supports tagging paths based on whether they have intersections or not.

#### Configuration

<details>

<summary><strong>Self Intersection Only</strong><br><em>If enabled, crossings are only computed per path, against themselves only.</em></summary>

When enabled, the node will only look for self-intersections within a single path. This ignores the "bEnableSelfIntersection" from details below.

</details>

<details>

<summary><strong>Can Be Cut Tag</strong><br><em>Filter entire dataset. If any tag is found on these paths, they are considered cut-able.</em></summary>

Paths with this tag are considered cut-able (i.e., they can be intersected by other paths). Empty or None will ignore filtering.

</details>

<details>

<summary><strong>Invert Can Be Cut Tag</strong><br><em>If enabled, the absence of the specified tag considers paths as cut-able.</em></summary>

When enabled, paths without the specified tag are considered cut-able instead of those with it.

</details>

<details>

<summary><strong>Can Cut Tag</strong><br><em>Filter entire dataset. If any tag is found on these paths, they are considered cutters.</em></summary>

Paths with this tag are considered cutters (i.e., they can intersect other paths). Empty or None will ignore filtering.

</details>

<details>

<summary><strong>Invert Can Cut Tag</strong><br><em>If enabled, the absence of the specified tag considers paths as cutters.</em></summary>

When enabled, paths without the specified tag are considered cutters instead of those with it.

</details>

<details>

<summary><strong>Create Point At Crossings</strong><br><em>If enabled, a point will be created at the crossing' location.</em></summary>

When enabled, new points are generated at each intersection location. When disabled, only attribute data is written without creating new points.

</details>

<details>

<summary><strong>Intersection Details</strong><br><em>Settings for how intersections are detected and handled.</em></summary>

Controls the precision and behavior of intersection detection, such as tolerance thresholds or edge handling.

</details>

<details>

<summary><strong>Blending</strong><br><em>Blending applied on intersecting points along the path prev and next point.</em></summary>

Defines how to blend properties from adjacent points when computing crossing attributes. This is distinct from external property inheritance.

</details>

<details>

<summary><strong>Do Cross Blending</strong><br><em>If enabled, blend in properties &#x26; attributes from external sources.</em></summary>

When enabled, blending operations are performed using data from other sources (e.g., point attributes) during crossing processing.

</details>

<details>

<summary><strong>Crossing Carry Over</strong><br><em>If enabled, blend in properties &#x26; attributes from external sources.</em></summary>

Controls how external attributes are carried over into the crossing points when blending is active.

</details>

<details>

<summary><strong>Crossing Blending</strong><br><em>If enabled, blend in properties &#x26; attributes from external sources.</em></summary>

Defines how to blend attributes at crossing points using a specified blending method (e.g., average, lerp).

</details>

<details>

<summary><strong>Write Alpha</strong><br><em>If enabled, an alpha value is written to the output points.</em></summary>

When enabled, an alpha attribute is added to each point indicating its crossing status or blending weight.

</details>

<details>

<summary><strong>Crossing Alpha Attribute Name</strong><br><em>Name of the alpha attribute to write.</em></summary>

The name of the attribute that stores the alpha value for crossing points.

</details>

<details>

<summary><strong>Default Alpha Value</strong><br><em>Default alpha value if none is computed.</em></summary>

The default alpha value used when no specific blending is applied.

</details>

<details>

<summary><strong>Orient Crossing</strong><br><em>If enabled, crossing points are oriented based on the specified axis.</em></summary>

When enabled, crossing points are rotated to align with a chosen axis (forward, backward, etc.).

</details>

<details>

<summary><strong>Crossing Orient Axis</strong><br><em>Axis used for orienting crossing points.</em></summary>

The axis along which crossing points should be oriented.

**Values**:

* **Forward**: Forward (X+).
* **Backward**: Backward (X-).
* **Right**: Right (Y+).
* **Left**: Left (Y-).
* **Up**: Up (Z+).
* **Down**: Down (Z-).

</details>

<details>

<summary><strong>Write Cross Direction</strong><br><em>If enabled, a cross direction vector is written to the output points.</em></summary>

When enabled, a vector indicating the crossing direction is added to each point.

</details>

<details>

<summary><strong>Cross Direction Attribute Name</strong><br><em>Name of the cross direction attribute to write.</em></summary>

The name of the attribute that stores the cross direction vector.

</details>

<details>

<summary><strong>Default Cross Direction Value</strong><br><em>Default cross direction vector if none is computed.</em></summary>

The default cross direction vector used when no specific direction is determined.

</details>

<details>

<summary><strong>Write Is Point Crossing</strong><br><em>If enabled, a flag indicating whether the point is a crossing is written.</em></summary>

When enabled, a boolean attribute indicates if a point is located at an intersection.

</details>

<details>

<summary><strong>Is Point Crossing Attribute Name</strong><br><em>Name of the attribute to write.</em></summary>

The name of the attribute that stores whether a point is a crossing.

</details>

<details>

<summary><strong>Tag If Has Crossing</strong><br><em>If enabled, paths with crossings are tagged.</em></summary>

When enabled, paths that contain intersections are tagged with `HasCrossingsTag`.

</details>

<details>

<summary><strong>Has Crossings Tag</strong><br><em>Name of the tag applied to paths with crossings.</em></summary>

The name of the tag assigned to paths that have intersections.

</details>

<details>

<summary><strong>Tag If Has No Crossings</strong><br><em>If enabled, paths without crossings are tagged.</em></summary>

When enabled, paths that do not contain intersections are tagged with `HasNoCrossingsTag`.

</details>

<details>

<summary><strong>Has No Crossings Tag</strong><br><em>Name of the tag applied to paths without crossings.</em></summary>

The name of the tag assigned to paths that have no intersections.

</details>

<details>

<summary><strong>Omit Uncuttable From Output</strong><br><em>If enabled, paths that are only "cutters" (paths that will cut but won't be cut) are excluded.</em></summary>

When enabled, paths that act as cutters but are not cut themselves are removed from the output.

</details>

#### Inputs

* **Main Paths**: Input paths to process for crossings.
* **Filter Subnodes**:
  * Optional subnode for filtering paths that can be cut (`CanBeCutTag`).
  * Optional subnode for filtering paths that are cutters (`CanCutTag`).

#### Outputs

* **Main Points**: Modified or new points, including crossing points if enabled.
* **Tags** (if tagging is enabled):
  * Paths tagged with `HasCrossingsTag` if they have intersections.
  * Paths tagged with `HasNoCrossingsTag` if they do not.

#### Usage Example

1. Create a set of paths representing roads or tracks.
2. Connect them to this node's **Main Paths** input.
3. Optionally, use subnodes to tag some paths as "cutters" and others as "cut-able".
4. Enable **Create Point At Crossings** to generate junction points.
5. Enable **Write Alpha** and set a custom attribute name to track intersection weights.
6. Use the output points to place road junctions or traffic lights.

#### Notes

* This node is computationally expensive due to intersection detection across all paths.
* Consider using filtering tags to reduce the number of comparisons.
* The blending settings allow for smooth transitions in crossing attributes, useful for visual effects or path interpolation.
