---
description: 'In editor :: PCGEx | Collocation Count'
icon: circle
---

# Collocation Count

Write the number of time a point shares its location with another.

**How It Works**

> AI-Generated, needs proofreading

* The Collocation Count node calculates how many times a point occupies the same location as another within a specified tolerance.
* It writes the count of these collocations to an attribute named according to the setting "Collication Num Attribute Name".
* If "Write Linear Occurences" is set to true, it also records linear occurrences into an attribute named based on the "Linear Occurences Attribute Name" setting.
* The node uses a tolerance value (a double) to determine if points are considered at the same location.

#### Configuration

<details>

<summary><strong>Collication Num Attribute Name</strong> <code>Name</code></summary>

The name of the attribute to write collocation to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Linear Occurences</strong> <code>bool</code></summary>

Controls write linear occurences.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Linear Occurences Attribute Name</strong> <code>Name</code></summary>

The name of the attribute to write linear occurences to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Controls tolerance.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsSpatial\Public\Elements\PCGExCollocationCount.h`
