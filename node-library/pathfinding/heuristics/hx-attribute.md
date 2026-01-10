---
description: 'In editor :: PCGEx | Heuristics : Attribute'
icon: circle-dashed
---

# HX : Attribute

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Reads vertex or edge attributes and uses them as heuristic values for pathfinding.

#### How It Works

This node evaluates attribute values from either points or edges in your data and converts them into scores that influence how pathfinding algorithms make decisions. It can automatically determine the range of values in the attribute, or you can define your own range for consistent results. The final score is then passed to pathfinding nodes so they can use it when calculating the best route.

#### Configuration

<details>

<summary><strong>Mode</strong><br><em>Specify how to deal with the attribute value.</em></summary>

Controls how the attribute value is interpreted and converted into a heuristic score.

**Values**:

* **Auto Curve**: Automatically normalize using the actual minimum and maximum values found in the attribute.
* **Manual Curve**: Normalize using custom minimum and maximum values you provide.
* **Raw**: Use the raw attribute value directly as the score. Use with caution.

</details>

<details>

<summary><strong>Source</strong><br><em>Read the data from either vertices or edges.</em></summary>

Determines whether to read the attribute from point (vertex) data or edge data.

**Values**:

* **Point**: Read attribute from the point being evaluated.
* **Edge**: Read attribute from the edge connecting to the point being evaluated.

</details>

<details>

<summary><strong>Attribute</strong><br><em>Attribute to read modifier value from.</em></summary>

The name of the attribute to use for heuristic calculation. This should be a numeric attribute present in your data.

</details>

<details>

<summary><strong>InMin</strong><br><em>If enabled, will use this value as input min remap reference instead of the one found on the attribute.</em></summary>

The minimum value used for normalization when **Mode** is set to **Manual Curve**. Only active if **Mode** is **Manual Curve**.

</details>

<details>

<summary><strong>InMax</strong><br><em>If enabled, will use this value as input max remap reference instead of the one found on the attribute.</em></summary>

The maximum value used for normalization when **Mode** is set to **Manual Curve**. Only active if **Mode** is **Manual Curve**.

</details>

<details>

<summary><strong>bUseCustomFallback</strong><br><em>Enable custom fallback value for normalization edge cases.</em></summary>

When enabled, a custom fallback value is used when the attribute's min and max are equal (e.g., all values are identical), preventing invalid normalization.

</details>

<details>

<summary><strong>FallbackValue</strong><br><em>Default weight when no valid internal normalization can be made.</em></summary>

The value to use as a fallback when normalization fails due to equal min/max values. Only active if **bUseCustomFallback** is enabled. Value clamped between 0 and 1.

</details>

#### Usage Example

You have a graph representing a terrain with an attribute `Cost` on each edge that indicates how difficult it is to traverse that edge. You want to use this cost as a heuristic in pathfinding, where lower values mean easier traversal.

1. Set **Source** to **Edge**.
2. Set **Attribute** to `Cost`.
3. Set **Mode** to **Auto Curve** to automatically normalize the attribute values.
4. Connect this node to a pathfinding node to use it as a heuristic definition.

#### Notes

* When using **Raw** mode, ensure your attribute values are already in a suitable range for pathfinding (e.g., 0–1).
* If you're unsure about the min/max values of your attribute, use **Auto Curve** mode to let the system determine them.
* For consistent behavior, always validate that your attribute contains valid numeric data before using this node.
