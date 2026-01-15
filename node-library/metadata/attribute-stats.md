---
description: 'In editor :: PCGEx | Attribute Stats'
icon: circle
---

# Attribute Stats

Output attribute statistics.

**How It Works**

> AI-Generated, needs proofreading

* The Attribute Stats node computes statistics for specified attributes based on provided filters.
* It outputs statistics per unique values if "Output Per Unique Values Stats" is set to true.
* Statistics can be directed to points using the "PCGExStatsOutputToPoints" setting.
* The node can also output statistics as tags, depending on the configuration of the "Output To Tags" option.
* If "Output Identifier" is enabled, it includes an identifier in the output for each statistic.

#### Configuration

<details>

<summary><strong>Filters</strong> <code>PCGExNameFiltersDetails</code></summary>

Attributes to get.

📦 See: NameFilters configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Per Unique Values Stats</strong> <code>bool</code></summary>

Controls output per unique values stats.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output To Points</strong> <code>PCGExStatsOutputToPoints</code></summary>

Controls output to points.

**Values:**

* **No output**: None
* **Prefix**: Uses specified name as a prefix to the attribute' name
* **Suffix**: Uss specified name as a suffix to the attribute' name

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output To Tags</strong> <code>PCGExStatsOutputToPoints</code></summary>

Output to tags

**Values:**

* **No output**: None
* **Prefix**: Uses specified name as a prefix to the attribute' name
* **Suffix**: Uss specified name as a suffix to the attribute' name

⚡ PCG Overridable

</details>

<details>

<summary><strong>Quiet Type Mismatch Warning</strong> <code>bool</code></summary>

Controls quiet type mismatch warning.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Feedback Loop Failsafe</strong> <code>bool</code></summary>

Controls feedback loop failsafe.

</details>

**Outputs**

<details>

<summary><strong>Output Identifier</strong> <code>bool</code></summary>

Controls output identifier.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Identifier</strong> <code>Name</code></summary>

Controls identifier.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Default Value</strong> <code>bool</code></summary>

Controls output default value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Default</strong> <code>Name</code></summary>

Controls default.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Min Value</strong> <code>bool</code></summary>

Controls output min value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Min</strong> <code>Name</code></summary>

Controls min.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Max Value</strong> <code>bool</code></summary>

Controls output max value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max</strong> <code>Name</code></summary>

Controls max.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Set Min Value</strong> <code>bool</code></summary>

Controls output set min value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Non-Default Min</strong> <code>Name</code></summary>

Controls non-default min.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Set Max Value</strong> <code>bool</code></summary>

Controls output set max value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Non-Default Max</strong> <code>Name</code></summary>

Controls non-default max.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Average Value</strong> <code>bool</code></summary>

Controls output average value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Average</strong> <code>Name</code></summary>

Controls average.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Unique Values Num</strong> <code>bool</code></summary>

Controls output unique values num.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Unique Values Num</strong> <code>Name</code></summary>

Controls unique values num.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Unique Set Values Num</strong> <code>bool</code></summary>

Controls output unique set values num.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Unique Set Values Num</strong> <code>Name</code></summary>

Controls unique set values num.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Different Values Num</strong> <code>bool</code></summary>

Controls output different values num.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Different Values Num</strong> <code>Name</code></summary>

Controls different values num.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Different Set Values Num</strong> <code>bool</code></summary>

Controls output different set values num.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Different Set Values Num</strong> <code>Name</code></summary>

Controls different set values num.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Default Values Num</strong> <code>bool</code></summary>

Controls output default values num.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Default Values Num</strong> <code>Name</code></summary>

Controls default values num.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Has Only Default Values</strong> <code>bool</code></summary>

Controls output has only default values.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Has only Default Values</strong> <code>Name</code></summary>

Controls has only default values.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Has Only Set Values</strong> <code>bool</code></summary>

Controls output has only set values.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Has only Set Values</strong> <code>Name</code></summary>

Controls has only set values.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Has Only Unique Values</strong> <code>bool</code></summary>

Controls output has only unique values.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Has only Unique Values</strong> <code>Name</code></summary>

Controls has only unique values.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Samples</strong> <code>bool</code></summary>

Controls output samples.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Samples</strong> <code>Name</code></summary>

Controls samples.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Is Valid</strong> <code>bool</code></summary>

Controls output is valid.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Is Valid</strong> <code>Name</code></summary>

Controls is valid.

⚡ PCG Overridable

</details>

**Outputs (Unique Values)**

<details>

<summary><strong>Value Column</strong> <code>Name</code></summary>

Controls value column.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Omit Default Value</strong> <code>bool</code></summary>

Controls omit default value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Value Count</strong> <code>Name</code></summary>

Controls value count.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsMeta\Public\Elements\PCGExAttributeStats.h`
