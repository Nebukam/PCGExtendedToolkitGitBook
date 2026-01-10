---
description: 'In editor :: PCGEx | Heuristics : Inertia'
icon: circle-dashed
---

# HX : Inertia

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Heuristics based on direction inertia from last visited nodes. NOTE: Can be quite expensive.

#### How It Works

This subnode evaluates how consistently a path moves in a particular direction by looking at the history of previous steps. It calculates an average direction from recent edges and compares that to the current edge's direction. When the current edge follows the same general direction as past movement, it gets a higher score, indicating smoother travel.

If there aren't enough previous steps to calculate an average (based on the Samples setting), it uses a fallback score instead. Because this subnode needs to track and access past node positions during path evaluation, it can be computationally intensive.

#### Configuration

<details>

<summary><strong>Samples</strong><br><em>How many previous edges should be averaged to compute the inertia.</em></summary>

Controls how many prior edges are considered when calculating the average direction for inertia.

**Values**:

* **1**: Only uses the most recent edge.
* **3**: Averages the last three edges for a smoother inertia calculation.

</details>

<details>

<summary><strong>bIgnoreIfNotEnoughSamples</strong><br><em>If enabled, use fallback score if there is less samples than the specified number.</em></summary>

When enabled, the subnode uses the fallback score instead of failing to compute a score if not enough historical data exists.

**Values**:

* **True**: Uses fallback score when insufficient samples.
* **False**: May return an invalid or unreliable score if samples are too low.

</details>

<details>

<summary><strong>GlobalInertiaScore</strong><br><em>Value used for global score. Primarily used by A* Star to do initial sorting.</em></summary>

The score assigned when computing a global heuristic (used at the start of pathfinding).

**Values**:

* **0**: No preference for any direction.
* **1**: Strong preference for consistent movement.

</details>

<details>

<summary><strong>FallbackInertiaScore</strong><br><em>Fallback heuristic score for when no inertia value can be computed (no previous node).</em></summary>

The score used when there is no travel history to compute inertia from, such as at the start of a path.

**Values**:

* **0**: No preference.
* **1**: Strong preference for consistent movement.

</details>
