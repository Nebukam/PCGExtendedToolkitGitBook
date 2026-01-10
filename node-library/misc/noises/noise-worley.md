---
icon: circle-dashed
---

# Noise : Worley

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Generates cell-like patterns using Worley/Cellular noise.

#### How It Works

This subnode creates cell-like patterns by placing feature points in a 3D grid and calculating the distance from any given point to its nearest neighbors. For each input position, it finds the closest and second-closest feature points, then applies a mathematical operation based on the selected return type.

The process works as follows:

1. A 3x3x3 neighborhood of cells around the input position is sampled.
2. Feature points are generated within these cells using a hash-based method.
3. The distance from the input position to each feature point is calculated using the chosen distance function.
4. The closest and second-closest distances are tracked.
5. Based on the return type setting, either one of the distances or their combination is returned.

This produces visually distinct patterns that mimic natural cellular structures like honeycombs, cracked terrain, or mineral veins.

#### Configuration

<details>

<summary><strong>Distance Function</strong><br><em>Distance function to use.</em></summary>

Controls how distances are calculated between points.

**Values**:

* **Euclidean**: Standard straight-line distance.
* **Euclidean Squared**: Squared Euclidean distance (faster, no square root).
* **Manhattan**: Sum of absolute differences along each axis.
* **Chebyshev**: Maximum difference along any axis.

</details>

<details>

<summary><strong>Return Type</strong><br><em>What to return.</em></summary>

Determines the output value based on distances to nearest feature points.

**Values**:

* **F1 (Closest)**: Distance to the closest feature point.
* **F2 (Second Closest)**: Distance to the second closest feature point.
* **F2 - F1 (Edge Detection)**: Difference between the two distances, useful for detecting edges.
* **F1 + F2**: Sum of both distances.
* **F1 \* F2**: Product of both distances.
* **Cell Value**: A scalar value derived from the cell's hash, independent of distance.

</details>

<details>

<summary><strong>Jitter</strong><br><em>Jitter amount (0 = regular grid, 1 = maximum randomness).</em></summary>

Controls how much feature points deviate from a regular grid layout. At 0, points align in perfect grid cells; at 1, they are fully randomized.

Range: 0.0 to 1.0

</details>

#### Usage Example

Use this subnode to generate terrain textures that mimic cracked earth or cellular growth patterns. For example:

* Set **Jitter** to 0.8 for organic-looking cracks.
* Choose **Return Type** as **F2 - F1** to emphasize boundaries between cells.
* Use a **Manhattan** distance function for more angular, grid-like cell shapes.

#### Notes

* Higher jitter values create more natural, less structured patterns.
* The **F2 - F1** return type is particularly effective for edge detection and creating sharp transitions.
* This noise is computationally intensive due to the neighborhood search; consider using lower resolution or caching for performance.
