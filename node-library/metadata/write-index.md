---
description: 'In editor :: PCGEx | Write Index'
icon: circle
---

# Write Index

Write the current point index to an attribute.

**How It Works**

> AI-Generated, needs proofreading

* The node writes the current point index to an attribute specified by the user in the Output Attribute Name setting.
* If Output Point Index is enabled, the node writes the index of each individual point to the designated attribute.
* When Normalized is selected, the node outputs the point index as a normalized value relative to the total number of points.
* The One Minus option, if enabled, modifies the output by subtracting it from one, though its exact application depends on other settings.
* If Output Collection Index is enabled, the node also writes the collection index to the attribute alongside or instead of the point index, depending on configuration.

#### Configuration

<details>

<summary><strong>Output Point Index</strong> <code>bool</code></summary>

Whether to write the index of the point on the point.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Attribute Name</strong> <code>Name</code></summary>

The name of the attribute to write its index to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ One Minus</strong> <code>bool</code></summary>

Controls ├─ one minus.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Normalized</strong> <code>bool</code></summary>

Whether to write the index as a normalized output value

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Collection Index</strong> <code>bool</code></summary>

Whether to output the collection index. .

⚡ PCG Overridable

</details>

<details>

<summary><strong>Collection Index</strong> <code>Name</code></summary>

The name of the attribute/tag to write the collection index to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Type</strong> <code>PCGExNumericOutput</code></summary>

Controls ├─ type.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Output to tags</strong> <code>bool</code></summary>

If enabled, output the collection index as a tag

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Collection Num Entries</strong> <code>bool</code></summary>

Whether to output the collection number of entries .

⚡ PCG Overridable

</details>

<details>

<summary><strong>Num Entries</strong> <code>Name</code></summary>

The name of the attribute/tag to write the collection num entries to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Type</strong> <code>PCGExNumericOutput</code></summary>

Controls ├─ type.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Normalized</strong> <code>bool</code></summary>

If enabled, output the normalized collection num entries to the points

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Output to tags</strong> <code>bool</code></summary>

If enabled, output the collection num entries as a tag

⚡ PCG Overridable

</details>

<details>

<summary><strong>Allow Interpolation</strong> <code>bool</code></summary>

Whether the created attributes allows interpolation or not.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsMeta\Public\Elements\PCGExWriteIndex.h`
