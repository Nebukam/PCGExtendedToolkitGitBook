---
description: 'In editor :: PCGEx | Vtx Filter : Edge Direction'
icon: circle-dashed
---

# Edge Direction

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Filters points based on the dot product of their connected edges and a direction attribute.

#### How It Works

This subnode evaluates whether the edges connected to each point align with a specified direction. For every edge attached to a point, it calculates how closely that edge's direction matches the reference direction. If any edge meets the alignment criteria, the point passes the filter.

The reference direction can come from a constant value or be read from an attribute on the point. Optionally, this direction can be adjusted using the point's local transformation before comparison.

#### Configuration

<details>

<summary><strong>Comparison Quality</strong><br><em>Type of check; Note that Fast comparison ignores adjacency consolidation.</em></summary>

Determines whether to use a precise dot product comparison or a faster hash-based comparison.

**Values**:

* **Dot (Precise)**: Uses full dot product calculations for accurate results.
* **Hash (Fast)**: Uses simplified hash comparison with tolerance, ignoring adjacency consolidation.

</details>

<details>

<summary><strong>Adjacency</strong><br><em>Adjacency Settings</em></summary>

Settings that define how edges are considered when performing the direction check.

</details>

<details>

<summary><strong>Direction Order</strong><br><em>Direction orientation</em></summary>

Defines whether the edge direction is calculated from node to neighbor or vice versa.

**Values**:

* **From Node to Neighbor**: Edge points from the current node toward its neighbor.
* **From Neighbor to Node**: Edge points from the neighbor toward the current node.

</details>

<details>

<summary><strong>Compare Against</strong><br><em>Where to read the compared direction from.</em></summary>

Controls whether the reference direction is a constant value or read from an attribute on the point.

**Values**:

* **Constant**: Uses the `Direction` constant.
* **Attribute**: Reads the direction from the `Direction` attribute.

</details>

<details>

<summary><strong>Invert</strong><br><em>When enabled, the reference direction is inverted.</em></summary>

When enabled, the reference direction is negated before comparison. Only visible when `CompareAgainst` is set to "Attribute".

</details>

<details>

<summary><strong>Direction</strong><br><em>Direction for computing the dot product against the edge's.</em></summary>

The reference direction used for comparison. This can be a constant vector or an attribute on the point.

</details>

<details>

<summary><strong>Transform Direction</strong><br><em>When enabled, transform the reference direction with the local point' transform.</em></summary>

When enabled, the reference direction is transformed using the point's local transform before comparison.

</details>

<details>

<summary><strong>Dot Comparison Details</strong><br><em>Dot comparison settings</em></summary>

Settings for fine-tuning the dot product comparison, such as tolerance thresholds.

</details>

<details>

<summary><strong>Hash Comparison Details</strong><br><em>Hash comparison settings</em></summary>

Settings for configuring the hash-based comparison, including tolerance and precision.

</details>
