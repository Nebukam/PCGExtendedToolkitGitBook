---
description: 'In editor :: PCGEx | Cluster : Voronoi 3D'
icon: circle
---

# Voronoi 3D

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Create a 3D Voronoi graph for each input dataset.

#### How It Works

This node builds a 3D Voronoi diagram by first calculating the Delaunay triangulation of the input points in three-dimensional space. From this triangulation, it derives the Voronoi cells.

Each Voronoi cell represents the area closest to its seed point compared to all other seed points. The node calculates the center of each cell using one of three methods:

* **Balanced**: Uses the circumcenter if it's within bounds; otherwise uses the centroid.
* **Canon (Circumcenter)**: Uses the circumcenter of the Delaunay tetrahedron.
* **Centroid**: Uses the average position of all vertices in the Voronoi cell.

If enabled, points outside the specified bounds are removed from the computation. The hull marking feature identifies and marks points and edges that lie on the outer boundary of the diagram, which can be useful for creating edge effects or defining perimeters.

#### Configuration

<details>

<summary><strong>Method</strong><br><em>Method used to find Voronoi cell location.</em></summary>

Controls how the center of each Voronoi cell is calculated.

**Values**:

* **Balanced**: Pick centroid if circumcenter is out of bounds, otherwise uses circumcenter.
* **Canon (Circumcenter)**: Uses Delaunay cells' circumcenter.
* **Centroid**: Uses Delaunay cells' averaged vertice positions.

</details>

<details>

<summary><strong>ExpandBounds</strong><br><em>Bounds used for point pruning &#x26; balanced centroid.</em></summary>

Sets the size of the bounding volume used to contain the Voronoi diagram. Points outside this volume may be pruned if enabled, and the "Balanced" method uses it to determine whether to use the circumcenter or centroid.

</details>

<details>

<summary><strong>bPruneOutOfBounds</strong><br><em>Prune points outside bounds.</em></summary>

When enabled, points that fall outside the defined bounding volume are removed from the Voronoi computation. This helps reduce unnecessary calculations and keeps the diagram within a controlled area.

</details>

<details>

<summary><strong>bMarkHull</strong><br><em>Mark points &#x26; edges that lie on the hull.</em></summary>

When enabled, points and edges that form the outer boundary of the Voronoi diagram are marked. This is useful for creating edge effects or identifying perimeter elements.

</details>

<details>

<summary><strong>HullAttributeName</strong><br><em>Name of the attribute to output the Hull boolean to. True if point is on the hull, otherwise false.</em></summary>

The name of the boolean attribute that will be added to points to indicate whether they are on the hull.

</details>

<details>

<summary><strong>bMarkEdgeOnTouch</strong><br><em>When true, edges that have at least a point on the Hull as marked as being on the hull.</em></summary>

When enabled, edges connected to any hull point are also marked as part of the hull.

</details>

<details>

<summary><strong>GraphBuilderDetails</strong><br><em>Cluster Output Settings</em></summary>

Controls how the graph and its edges are built. Only available when `bPruneOutOfBounds` is enabled, as it otherwise generates a complete graph.

</details>

#### Usage Example

1. Place several points in your scene.
2. Connect them to this node.
3. Set the **Method** to "Centroid" for smoother cell shapes.
4. Enable **bMarkHull** if you want to identify outer boundary points.
5. Use the output points and edges to drive further procedural content, like terrain features or object placement.

#### Notes

* Voronoi diagrams are sensitive to input point distribution; clustering points can lead to irregular cell shapes.
* The "Balanced" method is recommended for better stability when dealing with edge cases.
* Hull marking is most effective when the input dataset forms a coherent cluster.
