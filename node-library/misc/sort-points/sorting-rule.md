---
description: 'In editor :: PCGEx | Sorting Rule'
icon: circle-dashed
---

# Sorting Rule

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a single sorting rule to be used with the Sort Points node.

#### How It Works

This subnode defines a single sorting rule that tells the Sort Points node how to arrange points. It works by:

1. Reading the specified attribute from each point
2. Comparing values between points using the configured sort direction (ascending or descending)
3. Determining the final order based on these comparisons
4. Providing this ordering information to the Sort Points node for execution

The sorting rule is applied as part of a larger sorting operation, where multiple rules can be combined to create complex sorting behaviors.

#### Configuration

<details>

<summary><strong>Priority</strong><br><em>Filter Priority.</em></summary>

Controls the order in which this sorting rule is applied when multiple rules are used. Lower values are processed first.

</details>

<details>

<summary><strong>Config</strong><br><em>Rule Config</em></summary>

Defines the specific behavior of this sorting rule, including:

* Which attribute to sort by
* Whether to sort ascending or descending
* How to handle missing data

</details>

#### Usage Example

To sort points by height (Z coordinate) in descending order:

1. Create a Sorting Rule subnode
2. Set the Config to use the "Height" attribute
3. Set Sort Direction to Descending
4. Connect this rule to a Sort Points node
5. The output will contain points ordered from highest to lowest

#### Notes

Multiple sorting rules can be connected to a single Sort Points node to create layered sorting behaviors. Rules with lower priority values are applied first, allowing for complex multi-criteria sorting operations.

{% hint style="info" %}
Connects to the **Sort Points** node via its "SortingRule" input pin.
{% endhint %}
