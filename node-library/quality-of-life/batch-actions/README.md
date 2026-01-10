---
description: 'In editor :: PCGEx | Batch Actions'
icon: scrubber
---

# Batch Actions

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Batch various actions together.

#### How It Works

The Batch Actions node processes point data by applying a series of configured operations in sequence. Each operation is executed one after another, with the results flowing from one to the next. This approach allows you to combine multiple transformations into a single processing step, which improves performance and keeps your graph organized.

The node reads all input points and passes them through each defined action subnode in the order they are listed. After all actions have been applied, it can optionally filter or remove certain attributes to manage data flow efficiently.

#### Configuration

<details>

<summary><strong>Default Attributes Filter</strong><br><em>Filter for default attributes to be included or excluded from the processing.</em></summary>

Controls which attributes are considered when applying operations. You can define a list of attribute names to include or exclude, based on the selected filter mode.

**Values**:

* **All**: All attributes are processed.
* **Exclude**: Listed attributes are discarded; others are kept.
* **Include**: Only listed attributes are kept; others are discarded.

</details>

<details>

<summary><strong>bDoConsumeProcessedAttributes</strong><br><em>When enabled, the node consumes processed attributes after applying all actions.</em></summary>

When enabled, this setting causes the node to remove or mark certain attributes for consumption after processing is complete. This helps manage memory and prevents unnecessary attribute retention.

</details>

<details>

<summary><strong>ConsumeProcessedAttributes</strong><br><em>Defines which attributes are consumed when bDoConsumeProcessedAttributes is enabled.</em></summary>

Specifies the names of attributes to be consumed, using a filter mode (Include or Exclude) and a list of attribute names.

**Values**:

* **All**: All attributes are consumed.
* **Exclude**: Listed attributes are not consumed; others are.
* **Include**: Only listed attributes are consumed; others are not.

</details>
