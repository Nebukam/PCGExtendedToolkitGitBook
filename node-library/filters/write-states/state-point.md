---
description: 'In editor :: PCGEx | State : Point'
icon: circle-dashed
---

# State : Point

Base class for state factory management.

📌 **Subnode** — Connects to **Write States** nodes.

**How It Works**

> AI-Generated, needs proofreading

* Abstract Point State Definition serves as a base class for managing state factory operations.
* Upon passing all filters, the node executes predefined operations on specified flags as defined in Pass State Flags settings.
* If any filter fails, the node performs designated operations on specified flags according to Fail State Flags settings.
* The Name setting allows assigning a name to this instance of the Abstract Point State Definition for identification purposes.

#### Configuration

<details>

<summary><strong>On Test Pass</strong> <code>bool</code></summary>

Flags

</details>

<details>

<summary><strong>Pass State Flags</strong> <code>PCGExBitmaskWithOperation</code></summary>

Operations executed on the flag if all filters pass

⚡ PCG Overridable

</details>

<details>

<summary><strong>On Test Fail</strong> <code>bool</code></summary>

Flags

</details>

<details>

<summary><strong>Fail State Flags</strong> <code>PCGExBitmaskWithOperation</code></summary>

Operations executed on the flag if any filters fail

⚡ PCG Overridable

</details>

<details>

<summary><strong>Name</strong> <code>Name</code></summary>

Controls name.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Priority</strong> <code>int32</code></summary>

Controls priority.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Bitmasks</strong> <code>bool</code></summary>

Controls output bitmasks.

</details>

***

Source: `Source\PCGExFilters\Public\Core\PCGExPointStates.h`
