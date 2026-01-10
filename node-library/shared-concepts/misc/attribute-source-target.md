# Attribute Source/Target

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Controls how attribute data is read from an input and written to an output, with options for using different names for source and target.

#### Overview

This configuration block defines how attribute data flows from an input point to an output point in a procedural graph. You can choose which attribute to read from the input and optionally write it to a different attribute name on the output. This is useful when you want to rename or duplicate attributes during processing without modifying the original data.

When working with multiple attributes, this setup allows you to map one attribute to another, either with the same name or a new one. It's commonly used in operations that need to preserve original data while creating modified versions, or when preparing data for downstream nodes that expect specific attribute names.

{% hint style="info" %}
This configuration appears in nodes like: Attribute Remap, Reduce Data Attribute, Uber Noise
{% endhint %}

#### Settings

<details>

<summary><strong>Source</strong><br><em>The name of the input attribute to read data from.</em></summary>

Specifies which attribute on the input point data will be used as the source for this operation. For example, if you have an attribute named "Height", you would set this to "Height" to read that value.

</details>

<details>

<summary><strong>Output To Different Name</strong><br><em>When enabled, the attribute is written to a different output name.</em></summary>

When enabled, the attribute data will be written to an output attribute with a different name than the source. This allows you to duplicate or rename attributes without overwriting the original.

</details>

<details>

<summary><strong>Target</strong><br><em>The name of the output attribute to write data to.</em></summary>

This setting is only visible when "Output To Different Name" is enabled. It defines the name of the attribute that will be created or modified on the output point data. For example, if you're reading from an attribute named "Height", you could set this to "ModifiedHeight" to create a new attribute with that name.

</details>

#### Common Use Cases

* **Attribute Duplication**: Read an attribute like "Color" and write it to a new attribute called "OriginalColor" to preserve the original while working with a modified version.
* **Attribute Renaming**: Take an attribute named "TempValue" and output it as "FinalValue" for better clarity in downstream nodes.
* **Data Preparation**: Prepare point data for a node that expects a specific attribute name by mapping from one attribute to another.

#### Notes

* If "Output To Different Name" is disabled, the attribute will be written back to the same name as the source.
* The target attribute will be created if it doesn't already exist on the output.
* This configuration works with all point data types and can be used in various processing workflows where attribute mapping is needed.
