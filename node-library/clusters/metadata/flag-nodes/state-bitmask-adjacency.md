---
description: 'In editor :: PCGEx | State : Bitmask Adjacency'
icon: circle-dashed
---

# State : Bitmask Adjacency

A bulk-check for directional adjacency, using bitmask collections

📌 **Subnode** — Connects to **Cluster States** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node evaluates directional adjacency by comparing bitmasks against a shared angle threshold to determine if directions are within an acceptable range of each other.
* It optionally applies transformations to the directions based on vertex point transforms if the "Transform Direction" setting is enabled.
* If all filters pass or no filter is set, the node executes predefined composition operations on the flag; otherwise, it may apply alternative bitwise operations when filters fail, depending on the "Use Alternative Bitmasks On Filter Fail" setting.

#### Configuration

<details>

<summary><strong>Angle</strong> <code>double</code></summary>

Shared angle threshold

⚡ PCG Overridable

</details>

<details>

<summary><strong>Transform Direction</strong> <code>bool</code></summary>

Whether to transform directions using the vtx' point transform

⚡ PCG Overridable

</details>

<details>

<summary><strong>Compositions</strong> <code>Array of FPCGExBitmaskRef</code></summary>

Operations executed on the flag if all filters pass (or if no filter is set)

</details>

<details>

<summary><strong>Use Alternative Bitmasks On Filter Fail</strong> <code>bool</code></summary>

If enabled, and if filters exist, will apply alternative bitwise operations when filters fail.

</details>

<details>

<summary><strong>├─ Compositions</strong> <code>Array of FPCGExBitmaskRef</code></summary>

Operations executed on the flag if any filters fails

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Whether to invert the dot product check. Bitmasks will be applied with direction does NOT match.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExAdjacencyStateConfigBase</code></summary>

Controls config.

📦 See: AdjacencyStateConfigBase configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\States\PCGExAdjacencyStates.h`
