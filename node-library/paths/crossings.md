---
description: 'In editor :: PCGEx | Path : Crossings'
icon: circle
---

# Crossings

Find crossing points between & inside paths.

**How It Works**

> AI-Generated, needs proofreading

* The node identifies crossing points between and inside paths based on specified conditions.
* It filters paths using "Can Be Cut Tag" and "Can Cut Tag", where paths with these tags are considered cuttable or cutting paths respectively; the "Invert" option reverses this logic for each tag.
* When "Self Intersection Only" is enabled, the node focuses solely on self-intersections within individual paths rather than intersections between different paths.

#### Configuration

<details>

<summary><strong>Self Intersection Only</strong> <code>bool</code></summary>

Controls self intersection only.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Can Be Cut Tag</strong> <code>Name</code></summary>

Filter entire dataset. If any tag is found on these paths, they are considered cut-able. Empty or None will ignore filtering.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Invert</strong> <code>bool</code></summary>

If enabled, the absence of the specified tag considers paths as cut-able.

</details>

<details>

<summary><strong>Can Cut Tag</strong> <code>Name</code></summary>

Filter entire dataset. If any tag is found on these paths, they are considered cutters. Empty or None will ignore filtering.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Invert</strong> <code>bool</code></summary>

If enabled, the absence of the specified tag considers paths as cutters.

</details>

<details>

<summary><strong>Create Point At Crossings</strong> <code>bool</code></summary>

If enabled, a point will be created at the crossing' location.

</details>

<details>

<summary><strong>Intersection Details</strong> <code>PCGExPathEdgeIntersectionDetails</code></summary>

Controls intersection details.

📦 See: PathEdgeIntersection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Blending</strong> <code>PCGExSubPointsBlendInstancedFactory</code> ⚙️</summary>

Blending applied on intersecting points along the path prev and next point. This is different from inheriting from external properties.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Omit Uncuttable From Output</strong> <code>bool</code></summary>

If enabled, paths that are only "cutters" (paths that will cut but won't be cut).

</details>

**Cross Blending**

<details>

<summary><strong>Do Cross Blending</strong> <code>bool</code></summary>

Controls do cross blending.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Crossing Carry Over</strong> <code>PCGExCarryOverDetails</code></summary>

If enabled, blend in properties & attributes from external sources.

📦 See: CarryOver configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Crossing Blending</strong> <code>PCGExBlendingDetails</code></summary>

If enabled, blend in properties & attributes from external sources.

📦 See: Blending configuration

⚡ PCG Overridable

</details>

**Outputs**

<details>

<summary><strong>Write Alpha</strong> <code>bool</code></summary>

Controls write alpha.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Crossing Alpha</strong> <code>Name</code></summary>

Controls crossing alpha.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Default Value</strong> <code>double</code></summary>

Controls └─ default value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Orient Crossing</strong> <code>bool</code></summary>

Controls orient crossing.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Crossing Orient Axis</strong> <code>PCGExAxis</code></summary>

Controls crossing orient axis.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Cross Direction</strong> <code>bool</code></summary>

Controls write cross direction.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Cross Direction</strong> <code>Name</code></summary>

Controls cross direction.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Default Value</strong> <code>Vector</code></summary>

Controls └─ default value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Is Point Crossing</strong> <code>bool</code></summary>

Controls write is point crossing.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Is Point Crossing</strong> <code>Name</code></summary>

Controls is point crossing.

⚡ PCG Overridable

</details>

**Tagging**

<details>

<summary><strong>Tag If Has Crossing</strong> <code>bool</code></summary>

Controls tag if has crossing.

</details>

<details>

<summary><strong>Has Crossings Tag</strong> <code>String</code></summary>

Controls has crossings tag.

</details>

<details>

<summary><strong>Tag If Has No Crossings</strong> <code>bool</code></summary>

Controls tag if has no crossings.

</details>

<details>

<summary><strong>Has No Crossings Tag</strong> <code>String</code></summary>

Controls has no crossings tag.

</details>

***

Source: `Source\PCGExElementsPaths\Public\Elements\PCGExPathCrossings.h`
