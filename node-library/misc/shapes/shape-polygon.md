---
description: 'In editor :: PCGEx | Shape : Polygon'
icon: circle-dashed
---

# Shape : Polygon

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Create points as a regular polygon or star.

#### How It Works

This node generates a polygon or star shape by calculating the positions of multiple points around a central location. It starts with a seed point that defines where the shape will be placed, then uses mathematical calculations to determine the locations of each vertex.

For each point in the shape:

* The system calculates its position using trigonometric functions (sine and cosine) based on the number of vertices and the radius.
* For star shapes, it alternates between two different radii to create the pointed appearance.
* If skeleton connections are enabled, additional points are added along edges or vertices to form a skeletal structure.

The orientation of the shape can be controlled:

* **Vertex Forward**: The first point aligns with the local X-axis.
* **Edge Forward**: The first edge is perpendicular to the local X-axis.
* **Custom**: A custom angle in degrees can be specified for precise control.

Finally, it outputs all generated points and optionally adds attributes like angle, edge index, or hull status to help track each point's role in the shape.

#### Configuration

<details>

<summary><strong>Polygon Type</strong><br><em>Type of shape to generate.</em></summary>

Controls whether the output is a regular convex polygon or a star shape.

**Values**:

* **Polygon**: Creates a regular convex polygon.
* **Star**: Creates a star shape with alternating inner and outer radii.

</details>

<details>

<summary><strong>Number of Vertices Source</strong><br><em>Source for the number of vertices.</em></summary>

Determines how the number of vertices is selected.

**Values**:

* **Constant**: Use the constant value specified in the next setting.
* **Attribute**: Read the number from an input attribute.

</details>

<details>

<summary><strong>Number of Vertices</strong><br><em>Constant number of vertices for the polygon.</em></summary>

Defines how many points make up the shape. For example, a pentagon would use 5 vertices.

</details>

<details>

<summary><strong>Add Skeleton Source</strong><br><em>Source for enabling skeleton connections.</em></summary>

Controls whether to generate a skeletal structure that connects the polygon's edges or vertices.

**Values**:

* **Constant**: Use the constant value specified in the next setting.
* **Attribute**: Read from an input attribute.

</details>

<details>

<summary><strong>Add Skeleton</strong><br><em>If enabled, adds skeleton connections to the shape.</em></summary>

When enabled, creates a skeletal structure that connects vertices or edges of the polygon.

</details>

<details>

<summary><strong>Skeleton Connection Mode</strong><br><em>Where the skeleton goes.</em></summary>

Defines how the skeleton is connected to the polygon.

**Values**:

* **Vertex**: Connects skeleton points to each vertex.
* **Edge**: Connects skeleton points to each edge midpoint.
* **Both**: Connects skeleton points to both vertices and edges.

</details>

<details>

<summary><strong>Polygon Orientation</strong><br><em>Alignment for the polygon within the bounds of the seed.</em></summary>

Controls how the shape is oriented relative to the seed point's local space.

**Values**:

* **Vertex Forward**: Aligns the first vertex along the local X-axis.
* **Edge Forward**: Aligns the first edge perpendicular to the local X-axis.
* **Custom**: Uses a custom angle specified in the next setting.

</details>

<details>

<summary><strong>Custom Polygon Orientation</strong><br><em>Custom alignment for the polygon.</em></summary>

When "Polygon Orientation" is set to "Custom", this value defines the rotation of the shape in degrees.

</details>

<details>

<summary><strong>Is Closed Loop</strong><br><em>If enabled, will flag polygon as being closed if possible.</em></summary>

When enabled, marks the generated shape as a closed loop, which can be useful for path or edge-based operations.

</details>

<details>

<summary><strong>Write Hull Attribute</strong><br><em>Output attributes.</em></summary>

When enabled, writes a boolean attribute indicating whether each point is on the hull of the shape.

</details>

<details>

<summary><strong>Hull Attribute Name</strong><br><em>Name of the hull attribute to write.</em></summary>

The name of the boolean attribute that marks points as being part of the shape's hull.

</details>

<details>

<summary><strong>Write Angle Attribute</strong><br><em>Output attributes.</em></summary>

When enabled, writes an angle attribute for each point based on its position around the center.

</details>

<details>

<summary><strong>Angle Attribute Name</strong><br><em>Name of the angle attribute to write.</em></summary>

The name of the float attribute that stores the angular position of each point.

</details>

<details>

<summary><strong>Write Edge Index Attribute</strong><br><em>Output attributes.</em></summary>

When enabled, writes an integer attribute indicating which edge each point belongs to.

</details>

<details>

<summary><strong>Edge Index Attribute Name</strong><br><em>Name of the edge index attribute to write.</em></summary>

The name of the integer attribute that stores the edge index for each point.

</details>

<details>

<summary><strong>Write Edge Alpha Attribute</strong><br><em>Output attributes.</em></summary>

When enabled, writes a float attribute indicating where along an edge each point lies (0.0 to 1.0).

</details>

<details>

<summary><strong>Edge Alpha Attribute Name</strong><br><em>Name of the edge alpha attribute to write.</em></summary>

The name of the float attribute that stores the interpolation value along each edge.

</details>

#### Usage Example

Create a grid of pentagonal shapes using a Point Grid node as input. Connect the output to a Shape : Polygon node, set "Number of Vertices" to 5, and enable "Add Skeleton". This creates a series of pentagons with skeletal connections at each vertex, useful for creating decorative or structural elements.

#### Notes

* The number of vertices should be at least 3 for valid polygons.
* For star shapes, the inner radius must be less than the outer radius to avoid degenerate geometry.
* Skeleton connections increase the total number of output points.
* Orientation settings are especially useful when aligning shapes with terrain or other directional constraints.
