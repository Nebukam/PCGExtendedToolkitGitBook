---
description: 'In editor :: PCGEx | Path : Insert'
icon: circle
---

# Insert

Insert nearest points into the path using different methods.

**How It Works**

> AI-Generated, needs proofreading

* The node inserts nearest points into an existing path using specified methods.
* If "Snap To Path" is enabled, inserted points are adjusted to align with the path; otherwise, they remain at their original locations.
* The node uses settings like "Within Range," "Range Input," and "Max Count" attributes or constants to determine how many and which points get inserted into the path.

#### Configuration

<details>

<summary><strong>Snap To Path</strong> <code>bool</code></summary>

If enabled, inserted points will be snapped to the path. Otherwise, they retain their original location

⚡ PCG Overridable

</details>

<details>

<summary><strong>Within Range</strong> <code>bool</code></summary>

Controls within range.

</details>

<details>

<summary><strong>Range Input</strong> <code>PCGExInputValueType</code></summary>

Controls range input.

</details>

<details>

<summary><strong>Range (Attr)</strong> <code>Name</code></summary>

Max Count Attribute

⚡ PCG Overridable

</details>

<details>

<summary><strong>Range</strong> <code>double</code></summary>

Max Count Constant

⚡ PCG Overridable

</details>

<details>

<summary><strong>Carry Over Settings</strong> <code>PCGExCarryOverDetails</code></summary>

Meta filter settings.

📦 See: CarryOver configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsPaths\Public\Elements\PCGExPathInsert.h`
