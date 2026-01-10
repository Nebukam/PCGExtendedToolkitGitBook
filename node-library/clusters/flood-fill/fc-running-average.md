---
description: 'In editor :: PCGEx | Fill Control : Running Average'
icon: circle-dashed
---

# FC : Running Average

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the subnode does, but still needs to be proofread by a human.
{% endhint %}

> Ignore candidates whose attribute value isn't within the given tolerance of a running average.

#### Overview

This subnode defines a filtering behavior for flood fill operations that evaluates candidate points based on how their attribute values compare to a moving average of previously accepted candidates. It helps maintain consistency in diffusion by ensuring that new candidates don't deviate too far from recent trends, which is useful when you want to avoid abrupt changes or noise in procedural generation.

It's particularly helpful for creating smooth transitions, avoiding outliers, and maintaining coherence across regions during flood fill processes.

{% hint style="info" %}
Connects to **Candidate** pins on flood fill graph-building nodes.
{% endhint %}

#### How It Works

This subnode calculates a running average of the attribute values from previously accepted candidates in the current diffusion. For each new candidate, it checks whether that candidate's attribute value falls within a specified tolerance range around this running average.

The process works as follows:

1. As candidates are accepted during diffusion, their attribute values are stored.
2. A window size determines how many of the most recent accepted candidates are considered for the average.
3. The average is calculated from these recent values.
4. For each new candidate being evaluated, its attribute value is compared to this average.
5. If the absolute difference between the candidate's value and the average is less than or equal to the tolerance, it is accepted; otherwise, it is rejected.

This ensures that the flood fill process follows a trend rather than accepting values that are too extreme or inconsistent with recent selections.

<details>

<summary>Inputs</summary>

Expects data from a flood fill operation where candidate points are being evaluated for acceptance. It uses an attribute value from these candidates to compare against a running average.

</details>

<details>

<summary>Outputs</summary>

Filters out candidates whose attribute values fall outside the tolerance of the current running average, effectively controlling the spread or variance in diffusion behavior.

</details>

#### Configuration

<details>

<summary><strong>Window Size Input</strong><br><em>Whether to use a constant or attribute value for window size.</em></summary>

Controls whether the window size is fixed or varies per point.

**Values**:

* **Constant**: Use the fixed `Window Size` value.
* **Attribute**: Read the window size from an attribute on the input data.

</details>

<details>

<summary><strong>Window Size</strong><br><em>Window Size Constant.</em></summary>

Defines how many of the most recent accepted candidates are used to compute the running average. Must be at least 1.

</details>

<details>

<summary><strong>Tolerance Input</strong><br><em>Whether to use a constant or attribute value for tolerance.</em></summary>

Controls whether the tolerance is fixed or varies per point.

**Values**:

* **Constant**: Use the fixed `Tolerance` value.
* **Attribute**: Read the tolerance from an attribute on the input data.

</details>

<details>

<summary><strong>Tolerance</strong><br><em>Tolerance Constant.</em></summary>

Defines how far a candidate's attribute value can deviate from the running average and still be accepted. Must be at least 0.

</details>

<details>

<summary><strong>Operand</strong><br><em>The property that will be averaged and checked against candidates -- will be broadcasted to a `double`.</em></summary>

Specifies which attribute of the candidate points is used for comparison. This value is converted to a double before being averaged.

</details>

#### Usage Example

Use this subnode in a flood fill setup where you want to ensure that the values of generated points don't vary too wildly. For example, when generating terrain heights, you could use this to maintain a smooth elevation trend by filtering out candidates whose height values are too far from the average of recent accepted points.

#### Notes

* The window size controls how many previous candidates influence the running average.
* A larger tolerance allows more variation in candidate values.
* This subnode only affects candidate evaluation, not the actual diffusion process itself.
