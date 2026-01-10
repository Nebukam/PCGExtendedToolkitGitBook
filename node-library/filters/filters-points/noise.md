---
icon: circle-dashed
---

# Noise

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Compare a point's value against spatial noise using a configurable comparison.

#### How It Works

This subnode evaluates a 3D noise value at each point's location and compares it against a user-defined threshold. The noise value is calculated in world space, meaning the same point will always produce the same noise result, but different points will have varying values. Based on the selected comparison operator, each point either passes or fails the filter.

The process works as follows:

1. A 3D noise value is generated at the point's position
2. This noise value is compared against a fixed or attribute-driven threshold using the chosen operator
3. The result determines whether the point passes the filter (true) or not (false)

#### Configuration

<details>

<summary><strong>Comparison</strong><br><em>How to compare the noise value against the threshold.</em></summary>

The operator used to evaluate the relationship between the noise value and the threshold.

**Values**:

* **==**: Passes if the noise value equals the threshold
* **!=**: Passes if the noise value does not equal the threshold
* **>=**: Passes if the noise value is greater than or equal to the threshold
* **<=**: Passes if the noise value is less than or equal to the threshold
* **>**: Passes if the noise value is strictly greater than the threshold
* **<**: Passes if the noise value is strictly less than the threshold
* **\~=**: Passes if the noise value is nearly equal to the threshold (within a small epsilon)

</details>

<details>

<summary><strong>Config</strong><br><em>Filter Config.</em></summary>

Settings that define how the comparison is performed.

</details>

#### Usage Example

Use this subnode to filter points based on noise values to create organic terrain features. For instance, you can filter points where the noise value is greater than 0.5 to generate a "mountain" shape, or less than 0.3 to create a "valley" effect. Combine with other filters to refine the pattern further.

#### Notes

* The noise generator is deterministic; identical positions will always produce identical noise values.
* Noise values are typically normalized between -1 and 1, so thresholds should be chosen accordingly.
* Performance is affected by the complexity of the noise function and the number of points being evaluated.
