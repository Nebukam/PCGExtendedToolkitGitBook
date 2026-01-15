---
description: 'In editor :: PCGEx | Discard by Point Count'
icon: circle
---

# Discard by Point Count

Filter outputs by point count.

**How It Works**

> AI-Generated, needs proofreading

* The node evaluates each cluster based on its point count against specified thresholds.
* Clusters are discarded if their point count is below the "Min Point Count" threshold when "Remove Below" is enabled.
* Clusters are also discarded if their point count exceeds the "Max Point Count" threshold when "Remove Above" is enabled.
* The node allows configuration to permit or disallow empty outputs through the "Allow Empty Outputs" setting.

#### Configuration

<details>

<summary><strong>Remove Below</strong> <code>bool</code></summary>

Don't output Clusters if they have less points than a specified amount.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Min Point Count</strong> <code>int32</code></summary>

Discarded if point count is less than

⚡ PCG Overridable

</details>

<details>

<summary><strong>Remove Above</strong> <code>bool</code></summary>

Don't output Clusters if they have more points than a specified amount.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Point Count</strong> <code>int32</code></summary>

Discarded if point count is more than

⚡ PCG Overridable

</details>

<details>

<summary><strong>Allow Empty Outputs</strong> <code>bool</code></summary>

Whether or not to allow empty outputs (either discarded or not)

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFoundations\Public\Elements\Filtering\PCGExDiscardByPointCount.h`
