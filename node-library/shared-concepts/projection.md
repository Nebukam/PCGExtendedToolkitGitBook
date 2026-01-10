---
icon: chart-scatter-3d
---

# Projection

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Controls how 3D points are projected onto a 2D plane for processing.

#### Overview

This configuration block defines how to project 3D spatial data into a 2D coordinate system. It's commonly used in geometric operations like clustering, pathfinding, and polygon clipping where working in 2D simplifies calculations. You can choose between different projection methods, such as using a fixed normal vector or deriving it from point attributes. When working with point data that has varying orientations, you might want to enable local normal support to adapt the projection per point.

{% hint style="info" %}
This configuration appears in nodes like: Clipper2 Boolean, Clipper2 Offset, Build Convex Hull 2D, Build Delaunay Graph 2D, Build Voronoi Graph 2D, Break Clusters To Paths, Connect Clusters, Pathfinding Find All Cells, Pathfinding Find Cluster Hull, Pathfinding Find Contours
{% endhint %}

#### Settings

<details>

<summary><strong>bSupportLocalNormal</strong><br><em>When enabled, allows the projection normal to be fetched from a local attribute.</em></summary>

When enabled, this option lets you use a point attribute to define the normal vector for each individual point's 2D projection. This is useful when your data has varying orientations or needs custom projections per point.

</details>

<details>

<summary><strong>Method</strong><br><em>Determines how the 2D projection plane is defined.</em></summary>

Controls the method used to define the 2D projection plane. This setting affects which other options are available.

**Values**:

* **Normal**: Uses a fixed or local normal vector to define the projection plane.
* **XY**: Projects onto the XY plane (Z values are ignored).
* **XZ**: Projects onto the XZ plane (Y values are ignored).
* **YZ**: Projects onto the YZ plane (X values are ignored).

</details>

<details>

<summary><strong>ProjectionNormal</strong><br><em>The fixed normal vector used for projection when Method is set to Normal.</em></summary>

Defines the direction of the 2D projection plane. This is only used when the Method is set to "Normal". It defaults to pointing upward (Up vector) for an XY projection.

</details>

<details>

<summary><strong>bLocalProjectionNormal</strong><br><em>When enabled, fetches the projection normal from a local attribute.</em></summary>

When enabled and Method is set to Normal, this setting allows you to specify a point attribute that contains the normal vector for each point's projection. This overrides the fixed ProjectionNormal.

</details>

<details>

<summary><strong>LocalNormal</strong><br><em>The name of the attribute containing the local normal vector used for projection.</em></summary>

Specifies which attribute to use when bLocalProjectionNormal is enabled. This attribute should contain a vector that defines the orientation of the 2D projection plane for each point.

</details>

#### Common Use Cases

* **Clustering operations**: Projecting 3D points onto a 2D plane before building convex hulls or Voronoi diagrams.
* **Pathfinding**: Simplifying navigation mesh generation by projecting complex 3D terrain into 2D space.
* **Polygon clipping**: Converting 3D polygons to 2D for easier intersection and boolean operations.
* **Terrain analysis**: Working with elevation data in a 2D representation to simplify calculations.

#### Notes

* The projection method affects how point positions are interpreted during processing. For example, using XY projection ignores Z coordinates.
* When using local normals, ensure the attribute exists and contains valid vector data for each point.
* The default normal is set to UpVector (0, 0, 1), which corresponds to an XY projection plane.
* If you're unsure about the orientation of your data, start with the XY or XZ method to see how it affects your results.
