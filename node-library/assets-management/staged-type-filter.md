---
icon: circle-m
---

# Staging : Type Filter

Filters staged points by their collection entry type.

**How It Works**

> AI-Generated, needs proofreading

* The Staged Type Filter node evaluates staged points based on their associated collection entry type against predefined configurations from the type registry.
* Depending on the selected filter mode, the node determines whether to include or exclude each point in the output based on its type configuration match.
* If "Output Filtered Out" is enabled, the node directs points that do not meet the inclusion criteria to a separate output pin for further processing.

#### Configuration

<details>

<summary><strong>Filter Mode</strong> <code>PCGExStagedTypeFilterMode</code></summary>

Filter mode

**Values:**

* **Include**: Keep points that match selected types
* **Exclude**: Remove points that match selected types

⚡ PCG Overridable

</details>

<details>

<summary><strong>Type Config</strong> <code>PCGExStagedTypeFilterDetails</code></summary>

Type configuration - populated from collection type registry

📦 See: StagedTypeFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Filtered Out</strong> <code>bool</code></summary>

If enabled, output filtered-out points to a separate pin

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExCollections\Public\Elements\PCGExStagedTypeFilter.h`
