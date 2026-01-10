---
description: 'In editor :: PCGEx | Match Random'
icon: circle-dashed
---

# Random

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Randomly determines whether matching operations succeed or fail based on a probability threshold.

#### Overview

The Match : Random subnode adds randomness to data matching workflows. Instead of making fixed decisions about which matches should pass or fail, it uses a probability-based system to determine outcomes. This is useful for creating varied and unpredictable results in procedural content generation, such as randomly selecting which points or edges participate in a match.

This subnode connects to matching processing nodes that support data matching operations. It defines the logic for how matches are evaluated based on a random threshold value.

{% hint style="info" %}
Connects to **Match** processing nodes (e.g., Match Points, Match Edges) via its output pin.
{% endhint %}

#### How It Works

This subnode evaluates each potential match against a randomly generated value. For each candidate being considered for a match:

1. A random number is generated between 0 and 1 using the configured seed.
2. The match passes if this random number is less than or equal to the threshold value.
3. If `bInvertThreshold` is enabled, the match passes when the random number is **greater** than the threshold.
4. The threshold can be a fixed value or read from an attribute on the input data.

This creates a probabilistic matching system where some matches succeed and others fail based on chance, enabling varied procedural outputs.

<details>

<summary>Inputs</summary>

Expects data that supports matching operations (points, edges, etc.), typically connected via pins on matching processing nodes.

</details>

<details>

<summary>Outputs</summary>

Produces a match rule definition that can be consumed by matching processing nodes to determine which candidates pass or fail based on the random threshold logic.

</details>

#### Configuration

<details>

<summary><strong>RandomSeed</strong><br><em>TBD</em></summary>

Controls the seed used for generating random numbers. Changing this value will change the sequence of random decisions made by this subnode.

</details>

<details>

<summary><strong>ThresholdInput</strong><br><em>Type of Threshold value source.</em></summary>

Determines whether the threshold is a constant value or read from an attribute.

**Values**:

* **Constant**: Use the fixed `Threshold` value.
* **Attribute**: Read the threshold from an attribute on the input data.

</details>

<details>

<summary><strong>ThresholdAttribute</strong><br><em>Pass threshold -- Value is expected to fit within a 0-1 range.</em></summary>

The attribute from which to read the threshold value, when `ThresholdInput` is set to **Attribute**.

</details>

<details>

<summary><strong>Threshold</strong><br><em>Pass threshold</em></summary>

The fixed threshold value used for matching decisions when `ThresholdInput` is set to **Constant**. Must be between 0 and 1.

</details>

<details>

<summary><strong>bInvertThreshold</strong><br></summary>

When enabled, the match passes if the random number is greater than the threshold, rather than less than or equal to it.

</details>

#### Usage Example

Use this subnode in a graph where you want to randomly include or exclude certain matches. For example, when matching points to form connections, you could use this to only connect 30% of possible pairs. Set `Threshold` to 0.3 and `bInvertThreshold` to false. This will cause about 30% of potential matches to pass through.

#### Notes

* The random seed ensures reproducible results when the same seed is used.
* When using attribute-based thresholds, ensure the attribute values are within the 0–1 range for consistent behavior.
* This subnode works best in scenarios where you want to introduce variability into deterministic matching systems.
