---
description: 'In editor :: PCGEx | Write GUID'
icon: circle
---

# Write GUID

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Assigns a unique identifier to each point in your dataset.

#### How It Works

This node creates a unique identifier for every point by combining several pieces of information:

1. A base value (seed) that can be fixed or pulled from an attribute.
2. Point-specific data like index, position, seed, or grid information, depending on how you configure the uniqueness settings.
3. These values are combined and processed through a hashing algorithm to generate a unique identifier.

The result is formatted according to your chosen style (like with or without hyphens) and stored in a new attribute on each point.

#### Configuration

<details>

<summary><strong>Output Attribute Name</strong><br><em>The name of the attribute where the GUID will be stored.</em></summary>

Sets the name of the new attribute that will contain the generated GUID. The default is "GUID".

</details>

<details>

<summary><strong>Output Type</strong><br><em>Whether to store the GUID as an integer or a string.</em></summary>

Controls how the GUID is saved:

* **Integer**: Stores a 32-bit hash of the full GUID string.
* **String**: Saves the complete formatted GUID as text.

</details>

<details>

<summary><strong>Format</strong><br><em>How the GUID string is displayed.</em></summary>

Defines the layout of the GUID:

* **Digits**: 32 hexadecimal digits without separators.
* **Digits (Lowercase)**: Lowercase version of Digits.
* **Digits (Hyphens)**: Digits separated by hyphens.
* **Digits (RFC 4122)**: RFC 4122-compliant lowercase format with hyphens.
* **{Digits}**: Same as Digits (Hyphens) but enclosed in braces.
* **(Digits)**: Same as Digits (Hyphens) but enclosed in parentheses.
* **{Hex}**: Comma-separated hexadecimal values in braces.
* **Unique Object GUID**: Format used by Unreal's FUniqueObjectGuid class.
* **Short (Base64)**: Short Base64 encoded version with custom character set.
* **Short (Base36)**: Base-36 encoded version, suitable for case-insensitive file systems.

</details>

<details>

<summary><strong>Uniqueness</strong><br><em>What data contributes to making the GUID unique.</em></summary>

Determines which aspects of each point help ensure its GUID is unique:

* **Index**: Uses the point’s position in the dataset.
* **Position**: Uses the point’s world location.
* **Seed**: Uses the point's seed value.
* **Grid**: Uses grid-related data from the PCG component.

**Options:**

* **None**: Only base key is used.
* **Index**: Adds index to uniqueness.
* **Position**: Adds position to uniqueness.
* **Seed**: Adds seed to uniqueness.
* **Grid**: Adds grid data to uniqueness.
* **All**: Combines all components for maximum uniqueness.

</details>

<details>

<summary><strong>Unique Key Input</strong><br><em>How the base value for GUID generation is selected.</em></summary>

Chooses whether the starting value (seed) is a fixed number or comes from an attribute:

* **Constant**: Uses the fixed value set in "Unique Key".
* **Attribute**: Reads the value from an input attribute.

</details>

<details>

<summary><strong>Unique Key (Attr)</strong><br><em>The attribute to read the base key from.</em></summary>

When "Unique Key Input" is set to "Attribute", this selects which attribute to pull the base key from.

</details>

<details>

<summary><strong>Unique Key</strong><br><em>The fixed value used as a starting point for GUID generation.</em></summary>

When "Unique Key Input" is set to "Constant", this sets the fixed base key used in GUID creation.

</details>

<details>

<summary><strong>Allow Interpolation</strong><br><em>Whether the output attribute supports interpolation.</em></summary>

When enabled, the attribute can be interpolated during point transformations. When disabled, it is treated as a discrete value.

</details>

<details>

<summary><strong>Grid Hash Collision</strong><br><em>How precisely grid data contributes to uniqueness.</em></summary>

Controls how detailed the grid information is when used for generating unique identifiers. Smaller values increase precision.

</details>

<details>

<summary><strong>Position Hash Collision</strong><br><em>How accurately point positions are considered for uniqueness.</em></summary>

Determines how closely point locations affect the GUID. Smaller values make the system more sensitive to position differences.

</details>

<details>

<summary><strong>Position Hash Offset</strong><br><em>A fixed offset added to position before hashing.</em></summary>

Adds a consistent offset to each point's location before generating its hash, which helps avoid collisions in dense point clouds.

</details>

#### Usage Example

1. Add a "Write GUID" node after a point generation or filtering step.
2. Name the output attribute "MyPointID".
3. Choose "String" as the output type and "Digits (RFC 4122)" for a clean, readable format.
4. Select "All" in Uniqueness to ensure every point gets a truly unique identifier.
5. Set "Unique Key" to 42 to provide a consistent seed across runs.

This setup ensures that each point has a unique and identifiable value that can be used later in your workflow for tracking or linking data.
