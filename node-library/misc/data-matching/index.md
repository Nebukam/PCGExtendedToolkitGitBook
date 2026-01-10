---
description: 'In editor :: PCGEx | Match by Index'
icon: circle-dashed
---

# Index

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Matches data points based on index values between target and candidate data.

#### How It Works

This node pairs up data points from two sets — a target set and a candidate set — by comparing their index values. It checks whether the index of each point in one set matches an index in the other set, depending on how you configure the matching behavior.

The process works like this:

1. The node reads an index value from either the **Target** or **Candidate** data, based on your selection.
2. For every point in the target data:
   * If the source is **Target**, it compares that point’s index with the candidate data's indices.
   * If the source is **Candidate**, it compares the candidate’s index with the target data's indices.
3. When a match is found, the corresponding points are considered matched.
4. If an index is out of range (like a negative number or one higher than the available data), the node uses a safety mode to decide what to do:
   * **Ignore**: Skips invalid indices.
   * **Tile**: Wraps around so that a negative index becomes a valid one at the end.
   * **Clamp**: Forces invalid indices into the nearest valid range.
   * **Yoyo**: Bounces back and forth between valid indices.

#### Configuration

<details>

<summary><strong>Source</strong><br><em>Which data source to read the index from.</em></summary>

Controls whether the node reads the index value from the target or candidate data for comparison.

**Values**:

* **Target**: The index value is taken from the target data and compared against the candidate's indices.
* **Candidate**: The index value is taken from the candidate data and compared against the target's indices.

</details>

<details>

<summary><strong>IndexAttribute</strong><br><em>The attribute to read on the candidates (the data that's not used as target).</em></summary>

Defines which attribute contains the index values for matching. Only attributes in the `@Data` domain are supported.

</details>

<details>

<summary><strong>IndexSafety</strong><br><em>How to handle out-of-bounds indices.</em></summary>

Controls how the node behaves when an index is outside the valid range of available data.

**Values**:

* **Ignore**: Out-of-bounds indices are skipped.
* **Tile**: Out-of-bounds indices wrap around to valid indices.
* **Clamp**: Out-of-bounds indices are clamped to the nearest valid index.
* **Yoyo**: Out-of-bounds indices are mirrored back and forth.

</details>

#### Usage Example

Imagine you have two sets of points: one representing a mesh’s vertices (target) and another representing particles (candidate). You want to connect each particle to its corresponding vertex based on their position in the list. By setting `Source` to **Target**, reading an index attribute from the target, and using `IndexSafety` as **Tile**, you can match particles to vertices even if there are more particles than vertices.

#### Notes

* Ensure that the index attributes are properly defined and populated on both target and candidate data.
* The `IndexAttribute` must be in the `@Data` domain.
* Out-of-bounds indices are handled according to the selected `IndexSafety` mode, which can significantly affect matching behavior.
