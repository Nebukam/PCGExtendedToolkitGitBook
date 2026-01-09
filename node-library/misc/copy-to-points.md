---
description: 'In editor :: PCGEx | Copy to Points'
icon: circle
---

# Copy to Points

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Copy source points to target points, with size-to-fit and justification goodies.

### Overview

This node allows you to duplicate or copy points from one set (source) to another (target), with advanced control over how the copied points are positioned, scaled, and oriented. It's particularly useful for creating instances of geometry, duplicating procedural layouts, or mapping data between different point clouds.

The node supports matching source points to target points based on various criteria, and offers options to scale and justify the copied points relative to their target bounds. You can also forward attributes from source points to the copied ones, making it easy to preserve metadata during duplication.

{% hint style="info" %}
This node is commonly used in conjunction with point filters or other data manipulation nodes to control which points get duplicated and how they're positioned.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Source Points**: The points that will be copied.
* **Target Points**: The points where the source points will be copied to.
* **Optional Filters**: Point filters can be applied to control which source points are processed.

</details>

<details>

<summary>Outputs</summary>

* **Output Points**: The resulting points after copying, with optional transformations applied.
* **Unmatched Points (if enabled)**: Points from the source that did not match any target point, if splitting unmatched is enabled.

</details>

### Properties Overview

Controls how the duplication and transformation of points are handled.

***

#### General

Controls core behavior for matching and copying data between source and target points.

**Data Matching**

_Controls how source points are matched to target points._

* When enabled, allows you to define rules to determine which source points map to which target points.
* If disabled, each source point is copied once to each target point (Cartesian product).
* Useful for mapping specific data or geometry from one set to another.

**Transform Details**

_Configures how the copied points are transformed._

* **Scale**: Controls the size of the copied points relative to their target bounds.
* **Justification**: Determines how the copied points are aligned within their target bounds (e.g., top-left, center).
* **Rotation**: Allows you to rotate the copied points around their local origin.
* **Translation**: Adjusts the position of copied points after scaling and justification.

**Targets Attributes To Copy Tags**

_Controls which attributes from source points are copied to the target points._

* When enabled, specifies a list of attributes to copy from the source point data to the output points.
* This is useful for preserving metadata like color, ID, or other properties during duplication.

**Targets Forwarding**

_Configures which attributes are forwarded to the output points._

* When enabled, allows you to specify a set of attributes from the source data that should be copied to the target points.
* Supports filtering by name and can preserve default values if needed.

### Notes

* This node is performance-sensitive when copying large datasets. Consider using point filters or limiting the number of inputs to improve execution speed.
* When using matching, ensure that your matching criteria are well-defined to avoid unexpected duplication behavior.
* The scale-to-fit and justification features work best when target points have meaningful bounds (e.g., from meshes or volumes).
* For complex transformations, combine this node with other transformation nodes like "Transform Points" for more control.
