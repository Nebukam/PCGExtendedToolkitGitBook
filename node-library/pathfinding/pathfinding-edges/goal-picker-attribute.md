---
description: Index Attribute
icon: sliders
---

# Goal Picker : Attribute

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Selects target locations for pathfinding based on point attributes.

#### Overview

The Index Attribute node chooses which targets (goals) each starting point (seed) should consider in a pathfinding setup. It reads integer values from point properties and uses them as references to select specific goals. This allows you to create dynamic routing where different start points are directed toward different destinations depending on their unique characteristics.

This node works by looking at attribute data on seed points and interpreting those values as indexes into a list of possible targets. You can configure it to use either one attribute or multiple attributes to determine which goals to select.

{% hint style="info" %}
Connects to **Goal Picker** nodes in the pathfinding graph.
{% endhint %}

#### How It Works

The node reads integer values from point attributes and uses them as indexes to pick targets from a list of available goals. For each starting point:

1. If set to **Single Attribute**, it reads one attribute value from the point
2. If set to **Multiple Attributes**, it reads multiple attribute values from the point
3. These values are used as indexes to select goals from the goal list
4. The selected indexes can be handled in different ways based on the index safety setting:
   * **Ignore**: Skip invalid indexes
   * **Tile**: Wrap around using modulo arithmetic
   * **Clamp**: Limit invalid indexes to valid range
   * **Yoyo**: Bounce back and forth for invalid indexes
5. When using multiple attributes, it can return a list of target indexes

#### Inputs

This node requires:

* Seed data (points) with attributes containing integer values
* Goal data (points) that will be selected as targets

#### Outputs

This node modifies how pathfinding chooses which goals to consider for each seed point.

#### Configuration

<details>

<summary><strong>GoalCount</strong><br><em>Whether to pick a single or multiple attributes.</em></summary>

Controls whether the node uses one attribute or multiple attributes to determine goal indexes.

**Values**:

* **Single Attribute**: Use a single attribute to determine one goal index
* **Multiple Attributes**: Use multiple attributes to determine multiple goal indices

</details>

<details>

<summary><strong>SingleSelector</strong><br><em>Attribute to read for single goal selection.</em></summary>

The attribute from seed points that contains the integer index for selecting a single goal.

</details>

<details>

<summary><strong>CommaSeparatedNames</strong><br><em>A list of attribute names separated by a comma, for easy overrides. They will be added to the in-place array of selectors.</em></summary>

A comma-separated list of attribute names to use when selecting multiple goals. These attributes must contain integer values that represent goal indexes.

</details>

<details>

<summary><strong>AttributeSelectors</strong><br><em>List of attribute selectors for multiple goal selection.</em></summary>

The list of attributes from seed points that contain integer values used to determine multiple goal indexes.

</details>

#### Usage Example

Use this node when you want to route different start points to different targets based on their properties. For example:

* Assign different enemy types (seeds) to specific target locations (goals) using an attribute like "TargetID"
* Route vehicles to different destinations based on their cargo type or destination attribute
* Create dynamic goal selection where each seed chooses a goal based on its own unique property

#### Notes

* The node assumes integer attributes contain valid indexes into the goal dataset
* Out-of-bounds indexes are handled according to the **Index Safety** setting
* When using multiple attributes, ensure all attributes have matching data types and ranges
* This node is typically used as part of a larger pathfinding setup with Goal Picker nodes
