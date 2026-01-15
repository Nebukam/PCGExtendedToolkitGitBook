---
description: 'In editor :: PCGEx | Asset Collection to Set'
icon: circle
---

# Asset Collection to Set

Converts an asset collection to an attribute set.

**How It Works**

> AI-Generated, needs proofreading

* The node takes an asset collection as input and converts it into an attribute set.
* Depending on the "Sub Collection Handling" setting, the node assigns attribute names to sub-collections within the asset collection.
* If "Allow Duplicates" is enabled, the node includes duplicate entries based on object path and category in the output; otherwise, duplicates are not included.
* When "Omit Invalid And Empty" is enabled, any invalid or empty entries from the input asset collection are excluded from the resulting attribute set.
* The node outputs a boolean value for "Write Asset Path", indicating whether to include the asset paths in the attribute set.

#### Configuration

<details>

<summary><strong>Asset Collection</strong> <code>PCGExAssetCollection</code></summary>

The asset collection to convert to an attribute set

⚡ PCG Overridable

</details>

<details>

<summary><strong>Sub Collection Handling</strong> <code>PCGExSubCollectionToSet</code></summary>

Attribute names

**Values:**

* **Ignore**: Ignore sub-collections
* **Expand**: Expand the entire sub-collection
* **Random**: Pick one at random
* **Random weighted**: Pick one at random, weighted
* **First item**: Pick the first item
* **Last item**: Pick the last item

⚡ PCG Overridable

</details>

<details>

<summary><strong>Allow Duplicates</strong> <code>bool</code></summary>

If enabled, allows duplicate entries (duplicate is same object path & category)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Omit Invalid And Empty</strong> <code>bool</code></summary>

If enabled, invalid or empty entries are removed from the output

⚡ PCG Overridable

</details>

**Outputs**

<details>

<summary><strong>Write Asset Path</strong> <code>bool</code></summary>

Controls write asset path.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Asset Path</strong> <code>Name</code></summary>

Name of the attribute on the AttributeSet that contains the asset path to be staged

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Weight</strong> <code>bool</code></summary>

Controls write weight.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Weight</strong> <code>Name</code></summary>

Name of the attribute on the AttributeSet that contains the asset weight, if any.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Category</strong> <code>bool</code></summary>

Controls write category.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Category</strong> <code>Name</code></summary>

Name of the attribute on the AttributeSet that contains the asset category, if any.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Extents</strong> <code>bool</code></summary>

Controls write extents.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Extents</strong> <code>Name</code></summary>

Name of the attribute on the AttributeSet that contains the asset bounds' Extents, if any. Otherwise 0

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Bounds Min</strong> <code>bool</code></summary>

Controls write bounds min.

⚡ PCG Overridable

</details>

<details>

<summary><strong>BoundsMin</strong> <code>Name</code></summary>

Name of the attribute on the AttributeSet that contains the asset BoundsMin, if any. Otherwise 0

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Bounds Max</strong> <code>bool</code></summary>

Controls write bounds max.

⚡ PCG Overridable

</details>

<details>

<summary><strong>BoundsMax</strong> <code>Name</code></summary>

Name of the attribute on the AttributeSet that contains the asset BoundsMax, if any. Otherwise 0

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Nesting Depth</strong> <code>bool</code></summary>

Controls write nesting depth.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Nesting Depth</strong> <code>Name</code></summary>

Name of the attribute on the AttributeSet that contains the asset depth, if any. Otherwise -1

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExCollections\Public\Elements\PCGExAssetCollectionToSet.h`
