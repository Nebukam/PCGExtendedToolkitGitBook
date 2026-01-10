---
description: Laplacian (Poisson)
icon: sliders
---

# Laplacian (Poisson)

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Applies a Laplacian relaxation operation to cluster vertices, smoothing their positions based on neighboring influences.

#### How It Works

This node adjusts vertex positions within clusters by averaging the locations of connected neighbors. For each vertex, it calculates the average position of all directly connected vertices and moves the original vertex toward that average. This process is repeated for every vertex in the cluster, gradually smoothing out irregularities and creating a more uniform layout.

The method mimics a physical relaxation process where each vertex is influenced by its immediate surroundings, pulling it toward a balanced state. This results in cleaner, more evenly distributed arrangements of points within clusters.

#### Configuration

<details>

<summary><strong>Floating Point Precision</strong><br><em>Controls internal precision for position calculations.</em></summary>

Determines how many decimal places are preserved during internal computations. Higher values increase accuracy but may slightly impact performance.

**Values**:

* **100**: Default precision, allows for two decimal places of accuracy.
* **1000**: Increases precision to three decimal places.
* **10000**: Increases precision to four decimal places.

</details>

#### Usage Example

Use this node after generating a cluster with some initial vertex positions and connections. For example, in a mesh generation pipeline, you might generate a set of points with random placement and connect them into a graph structure. Applying Laplacian relaxation will smooth out the mesh so that vertices are more evenly spaced, resulting in a cleaner visual output.

#### Notes

* This relaxation technique is effective for reducing jitter or irregularities in clustered layouts.
* The number of iterations can be controlled by repeating this node multiple times in sequence.
* For best results, ensure that your cluster has well-defined edges connecting the vertices to allow meaningful neighbor influence.
