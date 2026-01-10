---
description: 'In editor :: PCGEx | Edge Filter : Endpoints Check'
icon: circle-dashed
---

# Endpoints Check

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Filters edges based on whether their start and end points pass or fail specified criteria.

#### How It Works

This filter evaluates each endpoint of an edge independently using point-based subnodes. It then combines the results according to the selected mode logic to determine if the edge should be included in the output. The process works as follows:

1. Each endpoint (start and end) is tested against its assigned point filters
2. The results for both endpoints are combined based on the selected mode
3. If the final result matches the expected comparison (pass or fail), the edge is kept

The mode controls how the two endpoint results are combined:

* **None**: Neither endpoint needs to match the expected result
* **Both**: Both endpoints must match the expected result
* **Any Pass**: At least one endpoint must match the expected result
* **Start**: Only the start endpoint must match the expected result
* **End**: Only the end endpoint must match the expected result
* **SeeSaw**: One endpoint must pass while the other must fail

When the invert option is enabled, the final result is flipped - edges that would normally pass are excluded, and those that fail are included.

#### Configuration

<details>

<summary><strong>Mode</strong><br><em>How to combine results from both endpoints.</em></summary>

Controls how the filter evaluates the two endpoints.

**Values**:

* **None**: Neither endpoint must have the expected result.
* **Both**: Both endpoints must have the expected result.
* **Any Pass**: At least one endpoint must have the expected result.
* **Start**: Only the start endpoint must have the expected result.
* **End**: Only the end endpoint must have the expected result.
* **SeeSaw**: One endpoint must pass and the other must fail.

</details>

<details>

<summary><strong>Comparison</strong><br><em>The expected result of the filter, in regard to the selected mode.</em></summary>

Specifies whether both endpoints should pass or fail the filters.

**Values**:

* **Pass**: The endpoints must pass the filters.
* **Fail**: The endpoints must fail the filters.

This setting is only available when Mode is not "SeeSaw".

</details>

<details>

<summary><strong>Invert</strong><br><em>When enabled, flips the result of the filter.</em></summary>

When enabled, edges that would normally pass the filter will be excluded, and those that fail will be included.

</details>

#### Usage Example

You're building a terrain mesh where you want to only connect points that are both above a certain elevation. You use this subnode with "Both" mode and "Pass" comparison, connecting it to point filters that check if a point's Z value is greater than 100. Only edges whose start and end points both exceed this elevation will be included in the final mesh.

#### Notes

* The filter evaluates each endpoint independently before combining results according to the selected mode.
* Using "SeeSaw" mode allows for creating alternating patterns or constraints where one endpoint must pass while the other fails.
* When using multiple filters, ensure they are compatible with the expected comparison type (e.g., all should be checking similar attributes).
