---
description: 'In editor :: PCGEx | Branch on Data'
icon: circle
---

# Branch on Data

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Branch on a @Data domain attribute to route points to different outputs based on their values.

### Overview

This node allows you to split your point data into multiple output branches based on the value of an attribute from the @Data domain. It's useful for organizing points into categories or applying different processing logic depending on their attribute values.

For example, you could route points to different outputs based on a "Type" attribute that contains values like "Forest", "Desert", or "Ocean". Each branch can then be processed separately with different settings or operations.

{% hint style="info" %}
The node creates dynamic output pins based on your configuration. You must connect all active output pins to avoid warnings in the graph.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Default Input**: Points to process (from previous node)
* **@Data Domain**: Attribute data used for branching

</details>

<details>

<summary>Outputs</summary>

* **Default Output**: Points that don't match any defined branch
* **Dynamic Outputs**: Created based on your branch configuration, each containing points matching a specific value

</details>

### Properties Overview

Controls how the node evaluates attribute values and routes points to outputs.

***

#### General

Controls the main branching behavior.

**Branch Source**

_The @Data domain attribute to check for branching._

* Points are evaluated using this attribute's value
* Must be an existing attribute in the @Data domain
* Example: If you have a "Material" attribute with values like "Stone", "Wood", "Metal", this is where you'd specify that attribute

**Selection Mode**

_How to determine which output pin to route points to._

**Values**:

* **UserDefined**: Manually define each branch condition and value
* **EnumInteger**: Use an enum's integer values as branches
* **EnumName**: Use an enum's string names as branches

**Default Pin Name**

_Name of the default/fallback output pin._

* Points that don't match any defined branch go to this output
* Useful when you want to handle unmatched cases in a specific way
* Example: If you have branches for "Forest", "Desert", and "Ocean", points with other values will go to this "Default" output

***

#### User Defined Branches

Configure individual branches when Selection Mode is set to UserDefined.

**Branches**

_List of conditions and values that define each branch._

* Each branch defines a comparison type, operator, and value
* Points matching the condition are routed to that branch's output pin
* Example: A branch with "Numeric Compare" = "Greater Than", "Value" = 50 would route points where the attribute is > 50 to this branch

***

#### Enum Branches

Settings for when Selection Mode is set to EnumInteger or EnumName.

**Enum Source**

_Where to get the enum definition from._

**Values**:

* **Picker**: Browse through Blueprint enums
* **Selector**: Browse through C++ enums

**Enum Class**

_The enum type to use for branching._

* Required when Enum Source is Picker
* Selects which enum values will become output pins
* Example: If you select an enum with values "Red", "Green", "Blue", three output pins will be created

**Enum Picker**

_The enum type to use for branching._

* Required when Enum Source is Selector
* Selects which enum values will become output pins
* Example: If you select an enum with values "Small", "Medium", "Large", three output pins will be created
