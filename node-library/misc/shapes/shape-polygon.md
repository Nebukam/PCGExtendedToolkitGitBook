---
description: 'In editor :: PCGEx | Shape : Polygon'
icon: circle-dashed
---

# Shape : Polygon

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Create points as a regular polygon or star.

### Overview

This node generates polygonal shapes from seed points, allowing you to create regular polygons like triangles, squares, pentagons, and more, or star-shaped patterns. Each seed point becomes the center of a polygon, with the shape's size, number of vertices, and orientation determined by settings and optionally input attributes.

You can generate either convex polygons (like triangles or hexagons) or star shapes with inward-pointing spikes. The node also supports creating a skeleton — a line connection between points — which can be attached to vertices, edges, or both.

{% hint style="info" %}
The output is generated in the local space of each seed point, so the shape will be centered on that point and oriented according to the seed's rotation.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Seed Points**: The points used as centers for polygon generation.

</details>

<details>

<summary>Outputs</summary>

* **Points**: Generated polygon points, optionally with skeleton lines.
* **Shape Builder** (optional): A shape builder object that can be consumed by a Shape processor node.

</details>

### Properties Overview

These settings control how polygons are generated from seed points.

***

#### General Settings

Controls the basic type and properties of the generated polygon.

**Polygon Type**

_Whether to generate a regular convex polygon or a star._

* **Polygon**: Creates a regular convex polygon (e.g., triangle, square).
* **Star**: Creates a star shape with inward-pointing spikes.

**Number of Vertices**

_Number of points that make up the polygon._

* This can be a fixed number or read from an attribute on the seed point.
* Minimum value is 3 (a triangle).
* Example: Setting this to 6 creates a hexagon.

**Values**:

* **Constant**: Use a fixed number.
* **Attribute**: Read the number from an input attribute.

**Add Skeleton**

_When enabled, connects points with lines forming a skeleton._

* Creates a line mesh connecting polygon vertices.
* Useful for visualizing or using the shape as a path.

**Skeleton Connection Mode**

_How the skeleton connects to the polygon._

* **Vertex**: Connects to each vertex of the polygon.
* **Edge**: Connects to the center of each edge.
* **Both**: Connects to both vertices and edges.

**Polygon Orientation**

_How the polygon is aligned relative to the seed point._

* **Vertex Forward**: First vertex points along the local X axis.
* **Edge Forward**: First edge is perpendicular to the local X axis.
* **Custom**: Use a custom angle (in degrees) for alignment.

**Custom Polygon Orientation**

_Custom angle in degrees to rotate the polygon._

* Only used when "Polygon Orientation" is set to "Custom".
* Example: Setting this to 90 rotates the shape so that its first vertex points upward.

**Is Closed Loop**

_When enabled, marks the last point as connecting back to the first._

* Ensures the polygon forms a complete loop.
* Useful for creating closed meshes or paths.

***

#### Output Attributes

Controls which additional attributes are written to the output points.

**Write Hull Attribute**

_When enabled, writes a boolean attribute indicating if a point is on the hull._

* Attribute name can be customized.
* Example: `bIsOnHull` will be true for all polygon vertices and false for skeleton points.

**Write Angle Attribute**

_When enabled, writes an angle value for each point._

* Attribute name can be customized.
* Useful for creating radial patterns or controlling point behavior based on angular position.

**Write Edge Index Attribute**

_When enabled, writes the index of the edge a point belongs to._

* Attribute name can be customized.
* Helps identify which part of the polygon a point is associated with.

**Write Edge Alpha Attribute**

_When enabled, writes a normalized alpha value along each edge._

* Attribute name can be customized.
* Useful for smooth transitions or interpolation along edges.
