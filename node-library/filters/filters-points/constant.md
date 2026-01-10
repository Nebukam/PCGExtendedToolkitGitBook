---
description: 'In editor :: PCGEx | Filter : Constant'
icon: circle-dashed
---

# Constant

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Filter that returns a constant value.

#### How It Works

The Constant filter subnode applies a fixed rule to all input points, determining whether they pass or fail a condition. It evaluates every point using a single, unchanging boolean value. When configured to return `true`, all points will pass the filter; when set to `false`, all points will fail. An invert option flips this behavior so that `true` becomes `false` and vice versa.

This filter does not consider individual point properties or data — it applies the same rule uniformly across all input points.

#### Configuration

<details>

<summary><strong>Value</strong><br><em>When enabled, the filter will always return true. When disabled, it returns false.</em></summary>

Controls the base result of the filter. If enabled, all points pass; if disabled, all points fail.

</details>

<details>

<summary><strong>bInvert</strong><br><em>When enabled, the result of the filter is inverted.</em></summary>

If Value is true and bInvert is true, the filter will return false for all points. This allows you to reverse the behavior of the filter.

</details>

#### Usage Example

Use this subnode when you want to force all points to pass or fail a condition in a processing node. For example, if you're using a "Filter Points" node and want to temporarily disable filtering, you can connect this constant filter with `Value` set to `true` and `bInvert` set to `false`. This will make all points pass through the filter.

#### Notes

This subnode is ideal for testing or applying global rules. It's particularly useful in combination with other filters where you want one filter to always pass or fail, regardless of point data.
