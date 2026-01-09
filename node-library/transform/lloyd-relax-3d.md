---
description: 'In editor :: PCGEx | Lloyd Relax 3D'
icon: circle
---

# Lloyd Relax 3D

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Applies Lloyd relaxation to input points, creating a more uniform distribution by iteratively moving points toward the centroids of their Voronoi cells.

### Overview

Lloyd relaxation is a mathematical process that smooths point distributions by moving each point to the centroid (center of mass) of its Voronoi cell. This node takes an input set of 3D points and applies this iterative process to create more evenly spaced results, which is useful for generating natural-looking patterns or improving mesh quality.

This node works best with a reasonably uniform initial distribution of points. It's commonly used in procedural generation workflows to create organic-looking layouts, such as distributing objects across a surface or creating Voronoi-based tiling patterns.

{% hint style="info" %}
Lloyd relaxation is computationally intensive and can be slow on large datasets. Consider reducing the number of iterations or using it on smaller point clouds for performance.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Points**: Input points to be relaxed. These are typically generated from other PCG nodes like Point Spawner or Random Points.

</details>

<details>

<summary>Outputs</summary>

* **Points**: The relaxed point set, where each point has been moved closer to the centroid of its Voronoi cell based on the specified number of iterations.

</details>

### Properties Overview

Controls how the Lloyd relaxation process is applied to your points.

***

#### Settings

Controls core behavior for the relaxation process.

**Iterations**

_The number of times the relaxation algorithm will be applied._

* Each iteration moves points closer to their Voronoi cell centroids, gradually improving uniformity.
* More iterations produce more uniform results but take longer to compute.
* **Example**: Setting this to 5 means the points will be moved toward Voronoi centroids five times.

**Influence (Attr)**

_The influence of each point's movement during relaxation._

* When set to **Attribute**, reads the influence value from a local attribute on the input points.
* When set to **Constant**, uses a fixed value for all points.
* This setting allows you to control how much individual points affect their neighbors during relaxation.

**Influence**

_The constant influence value when using constant mode._

* Affects how strongly each point is moved toward its Voronoi centroid.
* Values between 0 and 1 are recommended, where:
  * **0** means no movement occurs.
  * **1** means full movement to the centroid.
* Larger values can cause instability or overshooting in the relaxation process.

### Notes

* Lloyd relaxation works best when starting with a relatively uniform distribution of points. If your input points are clustered or irregular, the results may not be as visually pleasing.
* The process is deterministic and will produce the same result for the same inputs and settings.
* For better performance on large datasets, consider using fewer iterations or applying this node after filtering or downsampling other point sources.
* This node does not modify the original input points directly; it outputs a new set of relaxed points.
