---
icon: circle-dashed
---

# Copy Tags

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Copy matched targets tags to candidate.

#### Overview

This node allows you to copy attribute tags from matching target data to candidate data during a match operation. It's useful when you want to propagate metadata or properties from one dataset to another based on matching criteria. For example, if you're matching points from two different datasets and want to transfer tags like "Type", "Color", or "Category" from the matched targets to their corresponding candidates.

This node is typically used in conjunction with matching nodes that support tag copying, such as those performing shape-based or attribute-based matching. It helps enrich your candidate data with information derived from matched target data.

{% hint style="info" %}
Connects to **Match Rule Definition** subnodes.
{% endhint %}

#### How It Works

This node operates during the matching phase of a PCG graph. When a match is found between a candidate and one or more targets, this node copies the tags (attributes) from the matched target(s) to the candidate. The copying behavior depends on how the matching rules are configured.

The process involves:

1. Evaluating whether a match exists between a candidate and targets.
2. If a match is successful, retrieving the tag data from the matched target(s).
3. Applying those tags to the candidate point or data element.

This operation does not modify the original target data; it only affects the candidate data being processed.

#### Configuration

<details>

<summary><strong>Config</strong><br><em>Rules properties.</em></summary>

This setting group defines how matching rules are applied. It includes settings for controlling match behavior, such as strictness and mode of operation.

</details>

#### Usage Example

1. Create two datasets: one with points labeled "Target" and another with points labeled "Candidate".
2. Set up a matching node that uses this "Match : Copy Tags" subnode.
3. Configure the matching rules to define how candidates should match targets (e.g., by proximity or attribute values).
4. Run the graph — the candidate points will receive tags from their matched target points.

#### Notes

* This node only works in contexts where matching is performed.
* Ensure that the matching rules are properly defined to avoid unexpected tag propagation.
* Tags copied from multiple targets during a single match operation may overwrite each other depending on the order of processing.
