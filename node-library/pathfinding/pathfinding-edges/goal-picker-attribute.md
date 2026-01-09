---
description: Index Attribute
icon: sliders
---

# Goal Picker : Attribute

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Selects goal indices from attributes on the input data.

### Overview

This node lets you pick one or more goal indices from attributes in your input data. It's useful when you want to define goals based on pre-existing data, such as selecting specific points or areas from a dataset rather than using random or calculated values. You can choose either a single attribute or multiple attributes to determine the goal indices.

{% hint style="info" %}
This node works with point data and requires that your input data contains valid index attributes.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Seeds** (optional): Points used as starting locations for pathfinding.
* **Goals**: Points that serve as destinations for pathfinding.

</details>

<details>

<summary>Outputs</summary>

* **Output**: Modified data with goal indices assigned based on attribute values.

</details>

### Properties Overview

Controls how the node selects and uses goal indices from attributes.

***

#### General

Determines whether to select a single or multiple goal indices.

**Goal Count**

_Selects whether to use a single or multiple attributes to define goal indices._

* When set to **Single Attribute**, the node picks one goal index per seed using a single attribute.
* When set to **Multiple Attributes**, the node picks multiple goal indices per seed using several attributes.

**Values**:

* **Single Attribute**: Selects one goal index from a single attribute.
* **Multiple Attributes**: Selects multiple goal indices from multiple attributes.

**Single Selector**

_Selects the attribute used when "Goal Count" is set to "Single Attribute"._

* This attribute must contain integer values representing valid indices into your goals data.
* The node will use these values to determine which goal point to select for each seed.

**Comma Separated Names**

_Used to quickly define multiple attributes when "Goal Count" is set to "Multiple Attributes"._

* Enter a comma-separated list of attribute names (e.g., `GoalA,GoalB,GoalC`).
* These will be added as selectors in the **Attribute Selectors** list below.

**Attribute Selectors**

_List of attributes used when "Goal Count" is set to "Multiple Attributes"._

* Each attribute must contain integer values representing valid indices into your goals data.
* The node will use these values to determine which goal points to select for each seed.
