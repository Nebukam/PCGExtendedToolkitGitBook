---
description: 'In editor :: PCGEx | Attribute Hash'
icon: circle
---

# Attribute Hash

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Generates a hash value from input data based on specified attributes or properties.

#### How It Works

The Attribute Hash node creates a unique numerical identifier for each point in your dataset. This identifier is calculated using values from selected attributes or properties, and it remains consistent every time the same input data is used. The hash can be stored either as an attribute or a tag, depending on how you configure the node.

When you run the node, it first checks which attributes or properties to include in the calculation based on your settings. Then, it processes each point individually and computes a hash value that reflects the combination of those values. This makes it easy to identify similar points, group them together, or use them as stable references in procedural workflows.

#### Configuration

<details>

<summary><strong>HashConfig</strong><br><em>Defines which attributes or properties to use for hashing.</em></summary>

Controls what data is used to compute the hash. You can choose to include a single attribute, multiple attributes, point coordinates, or define custom logic for how the hash is calculated.

**Values**:

* **Single Attribute**: Hashes only the value of one specific attribute.
* **Multiple Attributes**: Combines values from several attributes into a single hash.
* **Point Position**: Uses the X, Y, and Z coordinates of each point in the calculation.
* **Custom Property**: Lets you define custom rules for how the hash is computed.

</details>

<details>

<summary><strong>OutputName</strong><br><em>Name to output the hash to (written on @Data domain)</em></summary>

Specifies the name of the attribute or tag where the computed hash will be stored. For example, if set to "MyHash", the result will appear as an attribute named "MyHash".

</details>

<details>

<summary><strong>bOutputToTags</strong><br><em>Whether to add the hash as a tag</em></summary>

When enabled, stores the computed hash value as a point tag. Tags are useful for filtering or identifying points in later stages.

</details>

<details>

<summary><strong>bOutputToAttribute</strong><br><em>Whether to add the hash as an attribute</em></summary>

When enabled, stores the computed hash value as a numeric point attribute. This allows further mathematical operations or use in other nodes that expect attributes.

</details>

#### Usage Example

Imagine you're generating a forest with trees that have varying heights and trunk diameters. You want to assign each tree a stable identifier so that you can later reference them consistently across multiple procedural passes.

1. Use the Attribute Hash node.
2. Set `HashConfig` to include both "Height" and "Diameter" attributes.
3. Enable `bOutputToAttribute`.
4. Name the output "TreeID".
5. Connect this node to your tree generation graph.
6. The resulting points will now have a unique, deterministic hash value based on their height and diameter.

#### Notes

* Hashes are deterministic; identical input values will always produce the same hash.
* If you change the input attributes or their values, the hashes will change accordingly.
* Using `bOutputToTags` and `bOutputToAttribute` together is allowed but may lead to redundancy.
* Performance is generally fast since hashing is a lightweight operation.
