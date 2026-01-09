---
description: 'In editor :: PCGEx | Attribute Hash'
icon: circle
---

# Attribute Hash

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Generates a unique hash value from attribute data in your point data, which can be used for identification or grouping.

### Overview

This node creates a deterministic hash value based on the values of a specified attribute or property within your point data. The hash is calculated using a combination of the selected attribute's values and can be output as either an attribute or a tag. This is useful for identifying unique combinations of data, creating groupings, or adding metadata that can be used in downstream processing.

{% hint style="info" %}
The generated hash is deterministic — the same input data will always produce the same hash value.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Default Input** (Required): Point data to process. This node accepts multiple inputs if configured to do so.

</details>

<details>

<summary>Outputs</summary>

* **Default Output**: Modified point data with the new hash attribute or tag added.

</details>

### Properties Overview

Controls how the hash is generated and where it's stored.

***

#### Settings

Configures which attribute to use for hashing and how to combine its values.

**Source Attribute**

_The attribute whose values will be used to generate the hash._

* This determines what data contributes to the final hash value.
* You can select any existing attribute from your input point data.

**Hash Scope**

_How to combine multiple values into a single hash._

* **All**: Combines all values in the attribute set.
* **Uniques**: Combines only unique values, ignoring duplicates.
* **First and Last**: Combines values from the first and last points only.
* **First only**: Uses only the value from the first point.
* **Last only**: Uses only the value from the last point.

**Output Name**

_Name of the attribute or tag to write the hash to._

* This is the name that will be used for the output attribute or tag.
* Default is "Hash".

**Output To Tags**

_When enabled, writes the hash as a tag instead of an attribute._

* Tags are simpler metadata that can be used for filtering or grouping in later nodes.
* If both tags and attributes are enabled, both will be written.

**Output To Attribute**

_When enabled, writes the hash as an attribute._

* Attributes store numerical data that can be used in calculations or further processing.
* If both tags and attributes are enabled, both will be written.
