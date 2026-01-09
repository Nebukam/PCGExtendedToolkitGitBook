---
description: 'In editor :: PCGEx | Lloyd Relax 2D'
icon: circle
---

# Lloyd Relax 2D

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Applies Lloyd relaxation to input points, creating a more uniform distribution by iteratively moving points toward the centroids of their Voronoi cells.

### Overview

Lloyd relaxation is a technique used to improve point distribution by iteratively moving each point to the centroid (center of mass) of its Voronoi cell. This process results in a more even spacing between points, which is useful for creating natural-looking layouts or distributing objects with consistent density.

This node works in 2D space and supports projection onto different planes, making it flexible for various use cases such as terrain point distribution, object placement, or procedural mesh generation.

{% hint style="info" %}
Lloyd relaxation improves point uniformity but does not guarantee perfect uniformity. The number of iterations determines how much the points are adjusted.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Points**: Input points to be relaxed. These will be modified in place.

</details>

<details>

<summary>Outputs</summary>

* **Points**: Output points with updated positions after Lloyd relaxation.

</details>

### Properties Overview

Controls the behavior of the Lloyd relaxation process.

***

#### Settings

Configures how the relaxation is applied.

**Iterations**

_The number of times to apply the Lloyd relaxation step._

* Each iteration moves points closer to their Voronoi cell centroids
* Higher values produce more uniform distributions but take longer to compute
* **Default**: 5

**Influence Details**

_Settings for controlling how much influence each point has during relaxation._

* Adjusts the weight applied to each point's movement
* Can be constant or read from an attribute on input points
* Useful for creating variations in point density or behavior

**Projection Details**

_Settings for projecting points onto a 2D plane before relaxation._

* Defines how the 3D points are projected into 2D space
* Supports normal projection (using a fixed or local normal vector)
* Supports best-fit plane projection (computes the best-fitting plane from the point cloud)

### Notes

* This node is ideal for creating natural-looking distributions of objects, such as vegetation placement or particle systems.
* For best results with large datasets, consider using fewer iterations to maintain performance.
* The projection settings allow you to control how 3D data maps to 2D space, which is especially useful when working with terrain or complex geometry.
* If your points are already well-distributed, additional iterations may not significantly change the result.
