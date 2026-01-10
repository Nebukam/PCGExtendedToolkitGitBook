---
description: 'In editor :: PCGEx | Spatial Triage'
icon: circle
---

# Spatial Triage

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Test relevance of spatial data against singular bounds. Primarily expected to be used with partition bounds to find data that can be uniquely processed by this partition. This is fast box-box check.

#### How It Works

This node quickly compares the bounding volume of each input point with a target bounding volume. For every point, it determines whether the point's bounds are fully contained within, partially intersecting, or completely separate from the target bounds. The comparison uses simple axis-aligned bounding box (AABB) logic that is fast and efficient for filtering spatial data.

The node evaluates the minimum and maximum coordinates of each point's bounds against the corresponding coordinates of the target bounds. Based on this comparison, it assigns each point to one of three output categories: Inside, Touching, or Outside.

#### Configuration

<details>

<summary><strong>Enable Inside Output</strong><br><em>When enabled, points fully inside the bounds are sent to the Inside output pin.</em></summary>

Controls whether the Inside output pin is active and receives data.

</details>

<details>

<summary><strong>Enable Touching Output</strong><br><em>When enabled, points touching or intersecting the bounds are sent to the Touching output pin.</em></summary>

Controls whether the Touching output pin is active and receives data.

</details>

<details>

<summary><strong>Enable Outside Output</strong><br><em>When enabled, points completely outside the bounds are sent to the Outside output pin.</em></summary>

Controls whether the Outside output pin is active and receives data.

</details>

#### Inputs

* **Points** (Required): A collection of points with associated bounds.
* **Bounds** (Optional, via subnode): The reference bounding volume used for spatial checks.

#### Outputs

* **Inside**: Points whose bounds are fully contained within the target bounds.
* **Touching**: Points whose bounds intersect or touch the edges of the target bounds.
* **Outside**: Points whose bounds are completely separate from the target bounds.
