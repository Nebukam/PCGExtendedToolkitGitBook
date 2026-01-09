---
description: 'In editor :: PCGEx | Match Random'
icon: circle-dashed
---

# Random

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Randomly passes or fails a match based on a threshold value.

### Overview

This node randomly determines whether a match should succeed or fail, using a configurable probability threshold. It's useful for introducing randomness into matching logic, such as randomly selecting candidates from a set, applying chance-based filtering, or creating stochastic behavior in procedural generation workflows.

{% hint style="info" %}
The random seed ensures consistent results across runs when the same seed is used. Changing the seed will produce different match outcomes.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Default Input Pin**: Expects point data to be matched against.
* **Optional Extra Input Pin**: Optional secondary point data for matching.

</details>

<details>

<summary>Outputs</summary>

* **Output Match Rule Label**: Outputs a match rule that can be consumed by nodes that support matching logic.

</details>

### Properties Overview

Controls how the random matching is performed, including the probability threshold and seed.

***

#### General

Configures the core behavior of the random matching.

**Random Seed**

_Sets the seed used for random number generation._

* Affects reproducibility of results. Same seed produces same match outcomes.
* Use different seeds to get varied randomness in your procedural content.

**Threshold Input Type**

_Specifies whether the threshold value is constant or read from an attribute._

* **Constant**: Use a fixed value for the pass threshold.
* **Attribute**: Read the pass threshold from an attribute on the input data.

**Threshold (Attribute)**

_The attribute to read the pass threshold from, when using Attribute mode._

* Only visible when Threshold Input Type is set to "Attribute".
* The attribute should contain values between 0 and 1.

**Threshold**

_The fixed value used as the pass threshold, when using Constant mode._

* Only visible when Threshold Input Type is set to "Constant".
* Values are clamped between 0 and 1.
* A value of 0.5 means a 50% chance of passing the match.

**Invert Threshold**

_When enabled, inverts the pass/fail logic based on the threshold._

* If the threshold is 0.7, and this is enabled, the node will fail 70% of the time.
* Useful for creating inverse matching behavior or probabilistic rejection.
