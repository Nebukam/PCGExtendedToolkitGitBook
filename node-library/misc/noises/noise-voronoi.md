---
icon: circle-dashed
---

# Noise : Voronoi

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Generates Voronoi cell patterns with multiple output modes for procedural content.

#### How It Works

This subnode creates a 3D Voronoi pattern by calculating the distance from any point in space to its nearest feature point. Each point belongs to the cell defined by the closest feature point, forming distinct cells. The process uses a grid-based search over a 3x3x3 neighborhood of cells to find the closest feature point and computes the distance to it.

The output mode determines what value is returned:

* **Cell Value**: Returns an integer representing which cell the point belongs to.
* **Distance to Center**: Returns the Euclidean distance from the point to its nearest feature point.
* **Edge Distance**: Returns the shortest distance to any edge of the Voronoi cell.
* **Crackle (F2-F1)**: Returns the difference between the two closest distances, creating a "crackled" effect.

The jitter parameter controls how much feature points are displaced from their grid positions, adding variation. The smoothness parameter modifies how sharp or soft the cell boundaries appear when computing distances.

#### Configuration

<details>

<summary><strong>Output Type</strong><br><em>Controls what value is returned by the noise.</em></summary>

Determines how the Voronoi pattern's output is interpreted.

**Values**:

* **Cell Value**: Returns an integer ID for each cell
* **Distance to Center**: Returns distance from point to nearest feature point
* **Edge Distance**: Returns distance to the closest edge of the Voronoi cell
* **Crackle (F2-F1)**: Returns difference between two closest distances

</details>

<details>

<summary><strong>Jitter</strong><br><em>Amount of displacement for feature points.</em></summary>

Controls how much each Voronoi feature point is randomly displaced from its grid position.

Range: 0.0 to 1.0

* 0.0 = No jitter, regular grid
* 1.0 = Full jitter, maximum displacement

</details>

<details>

<summary><strong>Smoothness</strong><br><em>Controls the softness of cell boundaries.</em></summary>

Applies a smooth minimum function to blend distances between cells.

Range: 0.0 to 1.0

* 0.0 = Sharp, hard edges
* 1.0 = Very soft, blended edges

</details>

#### Usage Example

Use this subnode in a path smoothing operation where you want to vary the smoothness or shape of the path based on Voronoi cell patterns. For instance, you could use it to create organic-looking terrain paths that follow Voronoi cell boundaries, with the "Edge Distance" output driving the curvature.

#### Notes

* Voronoi noise is computationally efficient and works well for large-scale procedural generation.
* The "Crackle" mode can be used to add texture variation or noise-like effects.
* Higher jitter values produce more organic-looking patterns.
* Smoothness affects performance slightly, as it uses an iterative smooth minimum calculation.
