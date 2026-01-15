---
description: 'In editor :: PCGEx | Create Shapes'
icon: scrubber
---

# Create Shapes

Use shape builders to create shapes from input seed points.

**How It Works**

> AI-Generated, needs proofreading

* The node uses shape builders to generate shapes based on provided seed points.
* It optionally assigns a ShapeID attribute to points if "Write Shape Id" is enabled, using the specified "Shape Id Attribute Name".
* Shapes with fewer points than the value set in "Min Point Count" under "Remove Below" are not outputted.

#### Configuration

<details>

<summary><strong>Write Shape Id</strong> <code>bool</code></summary>

Should point have a ShapeID attribute

⚡ PCG Overridable

</details>

<details>

<summary><strong>Shape Id Attribute Name</strong> <code>Name</code></summary>

Name of the 'int32' attribute to write the ShapeId to

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Write to points</strong> <code>bool</code></summary>

Force writing to points, otherwise defaults to @Data (even if unspecified)

</details>

**Pruning**

<details>

<summary><strong>Remove Below</strong> <code>bool</code></summary>

Don't output shape if they have less points than a specified amount.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Min Point Count</strong> <code>int32</code></summary>

Discarded if point count is less than

⚡ PCG Overridable

</details>

<details>

<summary><strong>Remove Above</strong> <code>bool</code></summary>

Don't output shape if they have more points than a specified amount.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Point Count</strong> <code>int32</code></summary>

Discarded if point count is more than

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsShapes\Public\Elements\PCGExCreateShapes.h`
