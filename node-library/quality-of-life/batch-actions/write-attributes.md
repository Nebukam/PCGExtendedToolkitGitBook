---
description: 'In editor :: PCGEx | Action : Write Attributes'
icon: circle-dashed
---

# Write Attributes

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Forward attributes based on the match result.

#### How It Works

This subnode controls which attributes are passed through to output points depending on whether a matching condition is met or not. When a condition matches successfully, it forwards attributes defined in the Success Attributes Filter. When the condition fails, it forwards attributes from the Fail Attributes Filter.

The filtering process uses different modes like "All", "Include", or "Exclude" to determine which attributes are selected. Each filter works independently, allowing you to specify exactly what data should be written based on the outcome of a match.

#### Configuration

**SuccessAttributesFilter**

Defines which attributes to forward when a match succeeds. You can choose to include all attributes, only specific ones, or exclude certain ones using the available filtering modes.

**FailAttributesFilter**

Defines which attributes to forward when a match fails. Like the success filter, this supports "All", "Include", or "Exclude" modes for flexible attribute selection.

#### Usage Example

Use this subnode in workflows where you want to apply different attribute values based on matching conditions. For example, if you're sorting points by distance from a center point and want to color them red when close and blue when far, you would set up two attribute filters: one for success (red) and one for failure (blue).
