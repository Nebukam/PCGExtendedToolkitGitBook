---
description: 'In editor :: PCGEx | Path : Write Tangents'
icon: circle
---

# Write Tangents

Computes & writes points tangents.

**How It Works**

> AI-Generated, needs proofreading

* Computes tangents at each point along a path using the `PCGExTangentsInstancedFactory`.
* Optionally applies specific overrides for start and end points through the Start Override and End Override modules if they are defined.
* Writes the computed tangents to the path, associating them with the specified names provided in Arrive Name and Leave Name settings.

#### Configuration

<details>

<summary><strong>Arrive Name</strong> <code>Name</code></summary>

Controls arrive name.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Leave Name</strong> <code>Name</code></summary>

Controls leave name.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tangents</strong> <code>PCGExTangentsInstancedFactory</code> ⚙️</summary>

Instanced pcgextangentsinstancedfactory behavior.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Start Override</strong> <code>PCGExTangentsInstancedFactory</code> ⚙️</summary>

Optional module for the start point specifically

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ End Override</strong> <code>PCGExTangentsInstancedFactory</code> ⚙️</summary>

Optional module for the end point specifically

⚡ PCG Overridable

</details>

**Scaling**

<details>

<summary><strong>Arrive Scale Input</strong> <code>PCGExInputValueType</code></summary>

Controls arrive scale input.

</details>

<details>

<summary><strong>Arrive Scale (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Controls arrive scale (attr).

⚡ PCG Overridable

</details>

<details>

<summary><strong>Arrive Scale</strong> <code>double</code></summary>

Controls arrive scale.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Leave Scale Input</strong> <code>PCGExInputValueType</code></summary>

Controls leave scale input.

</details>

<details>

<summary><strong>Leave Scale (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Controls leave scale (attr).

⚡ PCG Overridable

</details>

<details>

<summary><strong>Leave Scale</strong> <code>double</code></summary>

Controls leave scale.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsPaths\Public\Elements\PCGExWriteTangents.h`
