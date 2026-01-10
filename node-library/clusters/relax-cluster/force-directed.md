---
description: Force Directed
icon: sliders
---

# Force Directed

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Applies a force-directed layout algorithm to clusters, adjusting point positions based on spring and electrostatic forces.

#### How It Works

This node creates a balanced layout by simulating physical forces between points in a cluster. It applies two types of forces:

* **Attractive forces** pull connected points together, mimicking springs that try to keep related elements close
* **Repulsive forces** push all points away from each other, like electric charges that repel

The node calculates these forces for every point and adjusts their positions iteratively. Over multiple passes, this process helps organize the cluster into a stable, visually pleasing arrangement where connected items are grouped together while unrelated items stay apart.

#### Configuration

<details>

<summary><strong>Spring Constant</strong><br><em>Controls how strongly connected points are pulled together.</em></summary>

Higher values make connected points stick closer. Lower values allow more space between related elements.

**Values**:

* **0.1**: Default, moderate spring tension
* **1.0**: Stronger attraction between connected points

</details>

<details>

<summary><strong>Electrostatic Constant</strong><br><em>Controls how strongly all points repel each other.</em></summary>

Higher values increase spacing between unrelated points. Lower values let them cluster more closely.

**Values**:

* **1000**: Default, strong repulsion
* **500**: Reduced repulsion

</details>
