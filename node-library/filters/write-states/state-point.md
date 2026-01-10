---
description: 'In editor :: PCGEx | State : Point'
icon: circle-dashed
---

# State : Point

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Defines a point state that can be used to flag or categorize points based on filter conditions.

#### How It Works

This subnode sets up a logical condition that checks each point in a procedural graph. When the system processes a point, it runs all configured filters in sequence. If all filters pass, the "On Pass" flag operations are applied to the point's state flags. If any filter fails, the "On Fail" flag operations are applied instead.

The logic is evaluated per point, and the result determines how that point's internal state flags are modified. This allows you to build complex categorization systems or state machines by combining multiple filters and flag behaviors.

#### Configuration

<details>

<summary><strong>bOnTestPass</strong><br><em>Flags whether to execute operations when all filters pass.</em></summary>

When enabled, the "On Pass" flag operations are executed if all filters in this state pass.

</details>

<details>

<summary><strong>PassStateFlags</strong><br><em>Operations executed on the flag if all filters pass.</em></summary>

Defines what actions to perform on the point's flags when all filters in this state pass. This includes setting, clearing, or toggling specific bits.

</details>

<details>

<summary><strong>bOnTestFail</strong><br><em>Flags whether to execute operations when any filter fails.</em></summary>

When enabled, the "On Fail" flag operations are executed if any filter in this state fails.

</details>

<details>

<summary><strong>FailStateFlags</strong><br><em>Operations executed on the flag if any filters fail.</em></summary>

Defines what actions to perform on the point's flags when any filter in this state fails. This includes setting, clearing, or toggling specific bits.

</details>

<details>

<summary><strong>Name</strong><br><em>Name of the state definition.</em></summary>

A unique identifier for this state definition, used to reference it in other parts of the graph.

</details>

<details>

<summary><strong>Priority</strong><br><em>Execution priority of this state.</em></summary>

Determines the order in which states are evaluated. Higher values execute first.

</details>

<details>

<summary><strong>bOutputBitmasks</strong><br><em>Whether to output bitmask data for debugging or further processing.</em></summary>

When enabled, outputs additional bitmask data that can be used for visualization or advanced filtering downstream.

</details>

#### Usage Example

Create a point state definition that flags points as "High Altitude" if they are above 100 units in height. Configure the filter to check the Z coordinate of each point. When the condition passes, set a specific flag bit to indicate high altitude. When it fails, clear that same bit.

#### Notes

* This is an abstract subnode and must be extended with concrete implementations.
* States can be combined with other states to create complex logical systems.
* The priority setting allows you to control evaluation order when multiple states are applied.
* Bitmask outputs can help visualize or debug state assignments during graph execution.
