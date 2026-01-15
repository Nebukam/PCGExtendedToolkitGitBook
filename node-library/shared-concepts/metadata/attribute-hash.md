---
icon: list-tree
---

# Attribute Hash

#### Settings

<details>

<summary><strong>Source Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Which attribute should be used to generate the hash

⚡ PCG Overridable

</details>

<details>

<summary><strong>Scope</strong> <code>EPCGExDataHashScope</code></summary>

Which values will be combined to a hash

**Values:**

* **All**: Combines all the values
* **Uniques**: Combines all the unique values, ignoring duplicates.
* **First and Last**: Combines the value from the first and last point
* **First only**: Uses the value from the first point only
* **Last only**: Uses the value from the last point only

⚡ PCG Overridable

</details>

<details>

<summary><strong>Sort Input Values</strong> <code>bool</code></summary>

Controls sort input values.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Sorting</strong> <code>EPCGExSortDirection</code></summary>

Whether to sort hash components or not.

⚡ PCG Overridable

</details>

#### Used In

* AttributeHash
* DiscardSame

***

Defined in: `Source\PCGExCore\Public\Data\Utils\PCGExAttributeHasher.h`
