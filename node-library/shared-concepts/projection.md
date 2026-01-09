---
icon: chart-scatter-3d
---

# Projection

## Geo2DProjection## AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what this configuration does.> Controls how 3D spatial data is projected into a 2D plane for processing.

#### Overview

This configuration defines how your procedural content's 3D positions are flattened into 2D space. It's essential when working with 2D algorithms or visualizations that need to ignore the Z-axis. You can choose between fixed and dynamic projection methods, allowing you to project all points onto a specific plane or use local data to determine each point's projection direction.

{% hint style="info" %}
This configuration appears in nodes like: Clipper2 Boolean, Clipper2 Offset, Convex Hull 2D, Delaunay Graph 2D, Voronoi Graph 2D
{% endhint %}

#### Settings

***

<details>

<summary>bSupportLocalNormal _Enables or disables the use of local attributes for projection normal._</summary>

When enabled, allows the projection normal to be fetched from a point attribute instead of using a fixed vector.

</details>

***

<details>

<summary>Method _Determines how the 2D projection plane is defined._</summary>

Controls whether the projection uses a fixed normal or one derived from local data.

**Values**:

* **Normal**: Uses a fixed normal vector defined in the ProjectionNormal setting.
* **Local Normal**: Uses a normal vector from a point attribute, if enabled via bSupportLocalNormal.

</details>

***

<details>

<summary>ProjectionNormal _The fixed vector used to define the 2D projection plane._</summary>

This is the direction that the 2D plane will face. For example, setting this to `(0, 0, 1)` projects all points onto the XY plane.

</details>

***

<details>

<summary>bLocalProjectionNormal _Controls whether to use a local attribute for the projection normal._</summary>

When enabled and Method is set to "Local Normal", this setting allows you to specify an attribute that contains the normal vector for each point's projection.

</details>

***

<details>

<summary>LocalNormal _The attribute containing the normal vector used for projection._</summary>

Specifies which point attribute to read the normal vector from when using local normal projection. This is only active when both Method is set to "Local Normal" and bLocalProjectionNormal is enabled.

</details>

#### Common Use Cases

* **Planar Terrain Generation**: Project 3D terrain points onto a fixed XY plane for 2D heightmap generation.
* **Cluster Analysis**: Flatten clusters of points into 2D space to perform 2D geometric operations like convex hulls or Voronoi diagrams.
* **Local Normal Projection**: Use point attributes to project each point onto its own local surface normal, useful for terrain flattening or alignment.

#### Notes

* The default projection normal is `(0, 0, 1)`, which corresponds to the XY plane.
* When using "Local Normal" method, ensure that your input data contains valid normal vectors in the specified attribute.
* Projection settings affect all downstream processing in nodes where this configuration is used.
