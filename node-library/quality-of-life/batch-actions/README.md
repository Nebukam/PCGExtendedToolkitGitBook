---
description: 'In editor :: PCGEx | Batch Actions'
icon: scrubber
---

# Batch Actions

Batch various actions together.

**How It Works**

> AI-Generated, needs proofreading

* The Batch Actions node gathers default attributes using the PCGExAttributeGatherDetails filter to determine which attributes are processed.
* Depending on the boolean setting of "Do Consume Processed Attributes," the node decides whether to consume the processed attributes after performing actions.
* If "Do Consume Processed Attributes" is enabled, the node consumes specific processed attributes based on the criteria defined in PCGExNameFiltersDetails.

#### Configuration

<details>

<summary><strong>Default Attributes Filter</strong> <code>PCGExAttributeGatherDetails</code></summary>

Controls default attributes filter.

📦 See: AttributeGather configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Do Consume Processed Attributes</strong> <code>bool</code></summary>

Controls do consume processed attributes.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Consume Processed Attributes</strong> <code>PCGExNameFiltersDetails</code></summary>

Controls consume processed attributes.

📦 See: NameFilters configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsActions\Public\Elements\PCGExBatchActions.h`
