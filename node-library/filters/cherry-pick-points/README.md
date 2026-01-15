---
description: 'In editor :: PCGEx | Cherry Pick Points'
icon: scrubber
---

# Cherry Pick Points

Filter points by indices, either read from local attributes or using external sources.

**How It Works**

> AI-Generated, needs proofreading

* The Cherry Pick Points node filters input point data based on specified indices, which can be sourced from local attributes or external inputs.
* When "Invert" is enabled, the node discards points with the selected indices instead of keeping them.
* If "Output Discarded Points" is activated, the node generates a separate dataset for points that do not match the specified criteria (or those matching if "Invert" is on).
* With "Allow Empty Outputs" set to true, the node can produce empty outputs when no points meet the filtering conditions.

#### Configuration

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Whether to invert the picking (picked indices will be discarded instead or kept)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Discarded Points</strong> <code>bool</code></summary>

Whether to output discard points to their own dataset

⚡ PCG Overridable

</details>

<details>

<summary><strong>Allow Empty Outputs</strong> <code>bool</code></summary>

Whether to output discard points collections to be empty

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFoundations\Public\Elements\Filtering\PCGExCherryPickPoints.h`
