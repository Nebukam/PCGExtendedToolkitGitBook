---
description: 'In editor :: PCGEx | Filter : AND // PCGEx | Filter : OR'
icon: circle-dashed
---

# And / Or

Creates an Filter Group.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The Filter Group node combines multiple filters based on their priority settings and outputs a value according to the highest priority among them.
* It applies the specified mode setting to determine how filter values are combined within the group.
* If the Invert option is enabled, the final output of the group is inverted.

#### Configuration

<details>

<summary><strong>Priority</strong> <code>int32</code></summary>

Filter Priority. Will use the highest value between the one set here and from the connected filters.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Mode</strong> <code>PCGExFilterGroupMode</code></summary>

Filter Mode.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Inverts the group output value.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFilters\Public\Filters\Points\PCGExFilterGroup.h`
