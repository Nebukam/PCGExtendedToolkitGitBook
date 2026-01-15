---
description: 'In editor :: PCGEx | Hoist Attributes'
icon: circle
---

# Hoist Attributes

Hoist element values to tags or data domain

**How It Works**

> AI-Generated, needs proofreading

* The Hoist Attributes node transfers specified attribute values to tags or data domain based on configured settings.
* Depending on the selected Action and Resolution modes, the node determines how attribute values are hoisted from elements to their respective targets.
* If Prefix With Attribute Name is enabled, the node prefixes each transferred attribute value with its corresponding attribute name before hoisting it.
* The Selection mode influences which elements' attributes are considered for hoisting according to the specified criteria.

#### Configuration

<details>

<summary><strong>Action</strong> <code>PCGExAttributeToTagsAction</code></summary>

Action.

**Values:**

* **Hoist to Tags**: Hoist element attribute value as data tags
* **Hoist to Attribute Set**: Output to a new attribute set
* **Hoist to @Data**: Hoist element attribute values to @Data domain

</details>

<details>

<summary><strong>Resolution</strong> <code>PCGExAttributeToTagsResolution</code></summary>

Resolution mode.

**Values:**

* **Self**: Matches a single entry to each input collection, from itself
* **Entry to Collection**: Matches a Source entries to each input collection
* **Collection to Collection**

</details>

<details>

<summary><strong>Selection</strong> <code>PCGExCollectionEntrySelection</code></summary>

Selection mode.

**Values:**

* **First Entry**: Uses the first entry in the matching collection
* **Last Entry**: Uses the last entry in the matching collection
* **Random Entry**: Uses a random entry in the matching collection
* **Picker**: Uses pickers to select indices that will be turned into tags
* **Picker First**
* **Picker Last**

</details>

<details>

<summary><strong>Prefix With Attribute Name</strong> <code>bool</code></summary>

If enabled, prefix the attribute value with the attribute name

</details>

<details>

<summary><strong>Attributes</strong> <code>Array of FPCGAttributePropertyInputSelector</code></summary>

Attributes which value will be used as tags.

</details>

<details>

<summary><strong>Comma Separated Attribute Selectors</strong> <code>String</code></summary>

A list of selectors separated by a comma, for easy overrides. Will be appended to the existing array.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Quiet Too Many Collections Warning</strong> <code>bool</code></summary>

Controls quiet too many collections warning.

</details>

***

Source: `Source\PCGExElementsMeta\Public\Elements\PCGExAttributesToTags.h`
