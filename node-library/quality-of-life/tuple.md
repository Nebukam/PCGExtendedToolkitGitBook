---
description: 'In editor :: PCGEx | Tuple'
icon: circle
---

# Tuple

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> A Simple Tuple attribute.

### Overview

This node allows you to create structured data attributes using a tuple format, where each tuple entry can contain multiple typed values. It's useful when you want to store related data together in a single attribute, such as position and color information, or any combination of supported data types.

Each tuple entry is defined by a composition (the structure) and values (the actual data). You define the fields in the composition and then set their values in the values array. This node is particularly helpful for creating complex metadata that can be used later in other nodes or for visualizing data in tools like the PCG Graph Editor.

{% hint style="info" %}
The tuple structure must be defined before setting values. Changing the type of a field after setting values may cause unexpected behavior.
{% endhint %}

<details>

<summary>Inputs</summary>

* None

</details>

<details>

<summary>Outputs</summary>

* **Default Output**: A point or vertex data with the tuple attributes applied.

</details>

### Properties Overview

This node allows you to define a tuple structure and populate it with values. The composition defines the fields, while the values array sets their content.

***

#### General

Defines the tuple's structure and data.

**Composition**

_The list of fields that make up your tuple._

* Each field can be one of several supported types: Boolean, Float, Double, Integer 32, Vector2, Vector, Vector4, Color, Transform, Rotator, String, Name, Soft Object Path, Soft Class Path, or Enum Selector.
* You can define multiple fields in a single tuple.
* The order of fields in the composition determines how they are written to the attribute.

**Values**

_The actual data for each field in your tuple._

* Each row corresponds to one tuple entry.
* The number of values per row must match the number of fields defined in the composition.
* Values can be set directly in this array, and will be applied to the corresponding fields in the composition.

**CommaSeparatedTags**

_A list of tags separated by a comma, for easy overrides._

* Tags can be used to categorize or filter nodes in the graph.
* Useful when you have multiple tuples and want to apply different settings based on tags.
