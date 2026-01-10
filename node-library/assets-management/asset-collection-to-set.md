---
description: 'In editor :: PCGEx | Asset Collection to Set'
icon: circle
---

# Asset Collection to Set

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Converts an asset collection into an attribute set for use in procedural generation workflows.

#### How It Works

This node processes an asset collection and turns it into a structured set of data attributes. It goes through each item in the collection and extracts useful information like the asset path, weight, category, bounding box dimensions (min, max, extents), and how deeply nested the item is within sub-collections.

If the collection includes smaller groups or folders (sub-collections), you can choose how to handle them:

* **Ignore**: Skip those groups entirely.
* **Expand**: Include all items from each group.
* **Random**: Pick one item at random from each group.
* **Random weighted**: Pick one item based on its assigned weight.
* **First item**: Use only the first item in each group.
* **Last item**: Use only the last item in each group.

The node then stores this information as attributes that can be used by other nodes in your procedural graph. You can also decide whether to allow duplicate entries or remove invalid items from the output.

#### Configuration

<details>

<summary><strong>Asset Collection</strong><br><em>The asset collection to convert to an attribute set.</em></summary>

The source asset collection from which the node extracts data. This can include assets, categories, and nested sub-collections.

</details>

<details>

<summary><strong>SubCollection Handling</strong><br><em>How to process sub-collections within the main collection.</em></summary>

Controls how entries from sub-collections are handled when processing the main collection:

* **Ignore**: Skip sub-collections entirely.
* **Expand**: Add all items in each sub-collection.
* **Random**: Select one item at random from each sub-collection.
* **Random weighted**: Select one item based on its weight.
* **First item**: Use the first item in each sub-collection.
* **Last item**: Use the last item in each sub-collection.

</details>

<details>

<summary><strong>Allow Duplicates</strong><br><em>If enabled, allows duplicate entries (duplicate is same object path &#x26; category).</em></summary>

When enabled, duplicate asset entries (based on path and category) are preserved. When disabled, duplicates are removed from the output.

</details>

<details>

<summary><strong>Omit Invalid and Empty</strong><br><em>If enabled, invalid or empty entries are removed from the output.</em></summary>

When enabled, any entry that is invalid (e.g., missing asset path) or empty is excluded from the final attribute set.

</details>

<details>

<summary><strong>Write Asset Path</strong><br><em>If enabled, writes the asset path to an attribute.</em></summary>

When enabled, the node adds a new attribute containing the full path of each asset.

**Values**:

* **True**: Writes the asset path.
* **False**: Skips writing this attribute.

</details>

<details>

<summary><strong>Asset Path Attribute Name</strong><br><em>Name of the attribute on the AttributeSet that contains the asset path to be staged.</em></summary>

The name of the attribute that stores the asset path. Defaults to "AssetPath".

</details>

<details>

<summary><strong>Write Weight</strong><br><em>If enabled, writes the asset weight to an attribute.</em></summary>

When enabled, the node adds a new attribute containing the weight of each asset.

**Values**:

* **True**: Writes the asset weight.
* **False**: Skips writing this attribute.

</details>

<details>

<summary><strong>Weight Attribute Name</strong><br><em>Name of the attribute on the AttributeSet that contains the asset weight, if any.</em></summary>

The name of the attribute that stores the asset weight. Defaults to "Weight".

</details>

<details>

<summary><strong>Write Category</strong><br><em>If enabled, writes the asset category to an attribute.</em></summary>

When enabled, the node adds a new attribute containing the category of each asset.

**Values**:

* **True**: Writes the asset category.
* **False**: Skips writing this attribute.

</details>

<details>

<summary><strong>Category Attribute Name</strong><br><em>Name of the attribute on the AttributeSet that contains the asset category, if any.</em></summary>

The name of the attribute that stores the asset category. Defaults to "Category".

</details>

<details>

<summary><strong>Write Extents</strong><br><em>If enabled, writes the asset bounds' Extents to an attribute.</em></summary>

When enabled, the node adds a new attribute containing the bounding box extents of each asset.

**Values**:

* **True**: Writes the asset extents.
* **False**: Skips writing this attribute.

</details>

<details>

<summary><strong>Extents Attribute Name</strong><br><em>Name of the attribute on the AttributeSet that contains the asset bounds' Extents, if any. Otherwise 0.</em></summary>

The name of the attribute that stores the asset extents. Defaults to "Extents".

</details>

<details>

<summary><strong>Write Bounds Min</strong><br><em>If enabled, writes the asset BoundsMin to an attribute.</em></summary>

When enabled, the node adds a new attribute containing the minimum bounds of each asset.

**Values**:

* **True**: Writes the asset bounds min.
* **False**: Skips writing this attribute.

</details>

<details>

<summary><strong>Bounds Min Attribute Name</strong><br><em>Name of the attribute on the AttributeSet that contains the asset BoundsMin, if any. Otherwise 0.</em></summary>

The name of the attribute that stores the asset bounds min. Defaults to "BoundsMin".

</details>

<details>

<summary><strong>Write Bounds Max</strong><br><em>If enabled, writes the asset BoundsMax to an attribute.</em></summary>

When enabled, the node adds a new attribute containing the maximum bounds of each asset.

**Values**:

* **True**: Writes the asset bounds max.
* **False**: Skips writing this attribute.

</details>

<details>

<summary><strong>Bounds Max Attribute Name</strong><br><em>Name of the attribute on the AttributeSet that contains the asset BoundsMax, if any. Otherwise 0.</em></summary>

The name of the attribute that stores the asset bounds max. Defaults to "BoundsMax".

</details>

<details>

<summary><strong>Write Nesting Depth</strong><br><em>If enabled, writes the nesting depth of the asset to an attribute.</em></summary>

When enabled, the node adds a new attribute containing the nesting level (depth) of each asset in the collection hierarchy.

**Values**:

* **True**: Writes the nesting depth.
* **False**: Skips writing this attribute.

</details>

<details>

<summary><strong>Nesting Depth Attribute Name</strong><br><em>Name of the attribute on the AttributeSet that contains the asset depth, if any. Otherwise -1.</em></summary>

The name of the attribute that stores the nesting depth. Defaults to "NestingDepth".

</details>
