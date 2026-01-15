---
description: 'In editor :: PCGEx | Action : Write Attributes'
icon: circle-dashed
---

# Write Attributes

Forward attributes based on the match result.

📌 **Subnode** — Connects to **Actions** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node evaluates conditions to determine if an action is successful or not.
* If the action succeeds, it applies filters from the Success Attributes Filter setting (PCGExAttributeGatherDetails) to forward relevant attributes.
* If the action fails, it uses filters from the Fail Attributes Filter setting (also PCGExAttributeGatherDetails) to process and forward attributes accordingly.

#### Configuration

<details>

<summary><strong>Success Attributes Filter</strong> <code>PCGExAttributeGatherDetails</code></summary>

Controls success attributes filter.

📦 See: AttributeGather configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Fail Attributes Filter</strong> <code>PCGExAttributeGatherDetails</code></summary>

Controls fail attributes filter.

📦 See: AttributeGather configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsActions\Public\Actions\PCGExActionWriteValues.h`
