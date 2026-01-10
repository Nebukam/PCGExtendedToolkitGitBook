# Attribute Hash Config

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Controls how attribute values are combined and hashed for unique identification or filtering.

#### Overview

This configuration defines how to generate a hash value based on attribute data. The hash can be used for deduplication, grouping, or identifying unique combinations of attribute values. You can choose which attribute to use as input, whether to combine multiple values into one hash, and if the order of those values should be sorted before hashing.

Adjust these settings when you need to ensure consistent identification of similar data points or want to filter out duplicates based on specific attribute combinations.

{% hint style="info" %}
This configuration appears in nodes like: Meta Attribute Hash, Discard Same
{% endhint %}

#### Settings

<details>

<summary><strong>Source Attribute</strong><br><em>Which attribute should be used to generate the hash.</em></summary>

Select the input attribute whose values will be used to compute the hash. This is typically a scalar or vector attribute, but can also be a string or boolean.

</details>

<details>

<summary><strong>Scope</strong><br><em>Which values will be combined to a hash.</em></summary>

Define how multiple values from the selected attribute are grouped before hashing.

* **Uniques**: Each unique value is hashed individually.
* **Grouped**: All values in a group are combined into one hash.
* **All**: All values across all groups are combined into a single hash.

For example, if you have a vector attribute with three values per point and choose "Grouped", each point's three values will be combined into one hash. If you choose "Uniques", each value is hashed separately.

</details>

<details>

<summary><strong>Sort Input Values</strong><br><em>Whether to sort hash components or not.</em></summary>

When enabled, the input values are sorted before being used in the hash calculation. This ensures that different orders of the same values produce the same hash.

For example, if you have a vector attribute with values \[1, 3, 2], sorting will reorder them to \[1, 2, 3] before hashing.

</details>

<details>

<summary><strong>Sorting</strong><br><em>Controls how values are sorted when sorting is enabled.</em></summary>

Specify the order in which values are sorted if sorting is enabled.

* **Ascending**: Values are sorted from smallest to largest.
* **Descending**: Values are sorted from largest to smallest.

This setting only applies when "Sort Input Values" is enabled.

</details>

#### Common Use Cases

* **Deduplicating Points**: Use the hash to identify and remove duplicate points based on their attribute values.
* **Grouping Similar Data**: Combine multiple attributes into a single hash to group similar data together.
* **Filtering Unique Combinations**: Ensure that only unique combinations of attribute values are processed further in your graph.

#### Notes

* Sorting input values ensures consistent hashing regardless of input order, which is especially important when dealing with unordered data like arrays or collections.
* The scope setting determines how many values contribute to the final hash — choose based on whether you want individual values or combined groups to be hashed.
