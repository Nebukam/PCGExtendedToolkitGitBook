---
description: 'In editor :: PCGEx | Filter : Random'
icon: circle-dashed
---

# Random

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Filter points using a random value based on a threshold and optional weight.

#### How It Works

This Subnode evaluates each point in a dataset by generating a pseudo-random value and comparing it against a defined threshold. The outcome determines whether the point passes or fails the filter.

The process works as follows:

1. For each point, a random number is generated based on a seed value.
2. If using per-point attributes, the Subnode reads threshold and/or weight values from the input data.
3. These values are normalized to a 0-1 range if enabled.
4. A curve transformation can be applied to the weight value before comparison.
5. The resulting value is compared against the threshold.
6. The point either passes or fails based on this comparison, with an option to invert the result.

This approach allows for stochastic filtering that can be controlled through various settings like seed, threshold, and weight attributes.

#### Configuration

<details>

<summary><strong>Random Seed</strong><br><em>Sets the seed for the pseudo-random number generator.</em></summary>

Using the same seed will produce consistent results across runs. This is useful when you need reproducible outcomes in procedural generation.

</details>

<details>

<summary><strong>Threshold Input</strong><br><em>Controls whether the threshold is a constant or read from an attribute.</em></summary>

* **Constant**: Uses the fixed value defined in the Threshold setting.
* **Attribute**: Reads the threshold value from a point attribute.

</details>

<details>

<summary><strong>Remap to 0..1 (Threshold)</strong><br><em>Whether to normalize the threshold internally or not.</em></summary>

When enabled, normalizes the threshold value to a 0-1 range. This is useful when your input threshold values are outside that range.

</details>

<details>

<summary><strong>Threshold</strong><br><em>Pass threshold.</em></summary>

The fixed threshold value used for comparison when Threshold Input is set to Constant. Must be between 0 and 1.

</details>

<details>

<summary><strong>Per-Point Weight</strong><br><em>Whether to use a per-point weight attribute.</em></summary>

When enabled, reads a weight value from a point attribute to influence the random filter outcome.

</details>

<details>

<summary><strong>Weight</strong><br><em>Per-point weight.</em></summary>

The name of the point attribute used for weights when Per-Point Weight is enabled.

</details>

<details>

<summary><strong>Remap to 0..1 (Weight)</strong><br><em>Whether to normalize the weights internally or not.</em></summary>

When enabled, normalizes the weight values to a 0-1 range. Useful when input weights are outside that range.

</details>

<details>

<summary><strong>Use Local Curve</strong><br><em>Whether to use in-editor curve or an external asset.</em></summary>

When enabled, uses the in-editor curve defined in Weight Curve. When disabled, uses an external curve asset.

</details>

<details>

<summary><strong>Weight Curve</strong><br><em>Curve the value will be remapped over.</em></summary>

The curve used to transform weight values before comparison. Either a local editor curve or an external asset depending on Use Local Curve setting.

</details>

<details>

<summary><strong>Invert Result</strong><br><em>Reverses the filter result.</em></summary>

When enabled, reverses the filter result — points that would pass now fail and vice versa.

</details>

#### Usage Example

Use this Subnode to randomly select 30% of points from a dataset. Set Threshold to 0.3, enable Per-Point Weight, and use a constant weight attribute with value 1.0 for all points. This will result in approximately 30% of the points passing the filter.

#### Notes

* The Random Seed ensures reproducible results if needed.
* Use Remap settings when your input data does not naturally fit within a 0-1 range.
* Combining this with other filters allows for complex probabilistic selection logic.
