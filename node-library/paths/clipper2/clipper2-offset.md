---
description: 'In editor :: PCGEx | Clipper2 : Offset'
icon: circle
---

# Clipper2 : Offset

Does a Clipper2 offset operation with optional dual (inward+outward) offset.

**How It Works**

> AI-Generated, needs proofreading

* The Clipper2 : Offset node performs an offset operation using Clipper2 library settings specified under Projection Details.
* It applies the offset for a number of iterations defined by the user, with a minimum guaranteed by the Min Iterations setting.
* If multiple sources have different iteration attributes, the Consolidation setting determines how to finalize the iteration count.
* The Offset amount specifies the distance by which shapes are expanded outward or contracted inward, or both.

#### Configuration

<details>

<summary><strong>Projection Details</strong> <code>PCGExGeo2DProjectionDetails</code></summary>

Projection settings.

📦 See: Geo2DProjection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Offset</strong> <code>PCGExInputShorthandSelectorDouble</code></summary>

Offset amount

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Scale</strong> <code>double</code></summary>

Offset Scale (mostly useful when using attributes)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Join Type</strong> <code>PCGExClipper2JoinType</code></summary>

Join type for corners

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Miter limit</strong> <code>double</code></summary>

Miter limit (only used with Miter join type)

⚡ PCG Overridable

</details>

<details>

<summary><strong>End Type Closed</strong> <code>PCGExClipper2EndType</code></summary>

End type for closed paths

⚡ PCG Overridable

</details>

<details>

<summary><strong>End Type Open</strong> <code>PCGExClipper2EndType</code></summary>

End type for open paths

⚡ PCG Overridable

</details>

**Iterations**

<details>

<summary><strong>Iterations</strong> <code>PCGExInputShorthandNameInteger32Abs</code></summary>

Number of iterations to apply

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Consolidation</strong> <code>PCGExClipper2OffsetIterationCount</code></summary>

How to determine final iteration count when iteration attribute from multiple source differ

**Values:**

* **First**
* **Last**
* **Average**
* **Min**
* **Max**

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Min Iterations</strong> <code>int32</code></summary>

Minimum guaranteed iterations

⚡ PCG Overridable

</details>

**Output**

<details>

<summary><strong>Write Iteration</strong> <code>bool</code></summary>

Controls write iteration.

</details>

<details>

<summary><strong>Iteration Attribute Name</strong> <code>String</code></summary>

Write the iteration index to a data attribute

⚡ PCG Overridable

</details>

**Output > Tagging**

<details>

<summary><strong>Tag Iteration</strong> <code>bool</code></summary>

Controls tag iteration.

</details>

<details>

<summary><strong>Iteration Tag</strong> <code>String</code></summary>

Write the iteration index to a tag

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tag Dual</strong> <code>bool</code></summary>

Controls tag dual.

</details>

<details>

<summary><strong>Dual Tag</strong> <code>String</code></summary>

Write this tag on the dual (negative) offsets

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClipper2\Public\Elements\PCGExClipper2Offset.h`
