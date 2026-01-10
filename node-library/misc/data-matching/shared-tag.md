---
icon: circle-dashed
---

# Shared Tag

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Match data that share common tags.

#### How It Works

This node finds and groups data elements that have one or more matching tags. It compares the tags assigned to each element and determines if they share common tag names (and optionally, tag values). When a match is found, it marks those elements as related so they can be grouped or linked together.

The process works by:

1. Reading the tag information from each data element.
2. Comparing these tags against a defined target tag name or attribute.
3. If enabled, checking whether the tag values also match.
4. Returning a result when one or more shared tags are found.

This matching logic is applied to all input elements and determines which ones are considered "related" based on their tag content.

#### Configuration

<details>

<summary><strong>Tag Name Input</strong><br><em>Type of Tag Name value.</em></summary>

Controls whether the tag name is read from a constant string or an attribute on the input data.

**Values**:

* **Constant**: Use a fixed tag name defined in the node.
* **Attribute**: Read the tag name from an attribute on the input data.

</details>

<details>

<summary><strong>Tag Name (Attr)</strong><br><em>Attribute to read tag name value from.</em></summary>

The name of the attribute from which to read the tag name, when **Tag Name Input** is set to **Attribute**.

</details>

<details>

<summary><strong>Tag Name</strong><br><em>Constant tag name value.</em></summary>

The fixed tag name to use for matching, when **Tag Name Input** is set to **Constant**.

</details>

<details>

<summary><strong>Do Value Match</strong><br><em>Whether to do a tag value match or not.</em></summary>

When enabled, the node will also compare the values of the tags. When disabled, only matching tag names are considered.

</details>

#### Usage Example

1. Tag several points with common tags like `"CategoryA"` and `"TypeX"`.
2. Use this node to find all points that share at least one tag.
3. Connect the output to a **Match Points** node to group or link those points together.

#### Notes

* This node works best when input data has been pre-tagged using nodes like **Tag Points** or **Tag Clusters**.
* Matching on tag values adds computational overhead, so disable it if you only care about tag names.
* The matching is performed per data element, so performance scales with the number of elements being matched.
