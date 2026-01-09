---
icon: scrubber
---

# Uber Noise

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Generate noise or mutate existing attribute using noises.

### Overview

This node generates procedural noise values and either creates a new attribute with those values or blends them with an existing attribute. It's useful for adding organic variation, texture, or randomized effects to your point data. You can control the type of noise, its parameters, and how it interacts with existing data.

{% hint style="info" %}
This node supports multiple noise types and blending modes, making it a versatile tool for procedural variation in your PCG workflows.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Source Filters**: Optional point filters to control which points are affected by the noise
* **Main Input**: Point data to process

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Modified point data with new or updated attributes

</details>

### Properties Overview

Controls how the noise is generated and applied.

***

#### Mode

Determines whether a new attribute is created or an existing one is modified.

**Mode**

_Controls whether to create a new attribute or mutate an existing one._

* When set to **New Attribute**, a new attribute is created with the noise values
* When set to **Mutate Attribute**, an existing attribute is blended with the noise

**Values**:

* **New Attribute**: Create new attribute
* **Mutate Attribute**: Blend noise with an existing attribute

***

#### Output Settings

Controls the creation of new attributes when in "New Attribute" mode.

**Output Type**

_Specifies the data type for the new attribute._

* Determines whether the output is a float, double, integer, etc.
* Affects memory usage and precision of the generated noise values

**Values**:

* **Double**: Double-precision floating point number
* **Float**: Single-precision floating point number
* **Int32**: 32-bit signed integer
* **Int64**: 64-bit signed integer

**Attributes**

_Configures which attribute to create or modify._

* Defines the name and domain of the output attribute
* When in "New Attribute" mode, this controls what the new attribute will be named
* When in "Mutate Attribute" mode, this defines which existing attribute to blend with

***

#### Mutation Settings

Controls how noise is blended with existing attributes when in "Mutate Attribute" mode.

**Blend Mode**

_Selects the blending operation used when mutating an attribute._

* Determines how the noise values are combined with existing data
* Common modes include Add, Multiply, Average, and Min/Max operations

**Values**:

* **Average**: (A + B) / 2
* **Weight**: (A + B) / Weight. Values are normalized if weight > 1
* **Multiply**: A \* B
* **Divide**: A / B
* **Min**: Min(A, B)
* **Max**: Max(A, B)
* **Copy (Target)**: = B
* **Copy (Source)**: = A
* **Add**: A + B
* **Subtract**: A - B
* **Weighted Add**: A + (B \* Weight)

**Source Value Weight**

_Sets the weight applied to the noise when blending._

* Controls how much influence the noise has during blending
* Values can be constant or read from an attribute
* A weight of 1 means full influence, while 0 means no influence

**Values**:

* **Constant**: Use a fixed value for all points
* **Attribute**: Read the weight from an existing attribute
* **Disabled**: No weighting applied

### Notes

* The node supports multiple noise types through its underlying noise generator
* When mutating attributes, consider using a low weight to avoid overwriting existing data completely
* For best performance with large datasets, enable bulk initialization and caching where possible
* Combine this node with filters to apply noise only to specific points in your dataset
* Use the "Mutate Attribute" mode to add subtle variations to existing properties like scale or rotation
