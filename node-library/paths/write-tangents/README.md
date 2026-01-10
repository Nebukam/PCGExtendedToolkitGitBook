---
description: 'In editor :: PCGEx | Path : Write Tangents'
icon: circle
---

# Write Tangents

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Computes and writes tangents to points along paths.

#### How It Works

This node calculates direction vectors for each point in a path, known as tangents. These tangents define the orientation and direction of the path at each location. The calculation considers the positions of neighboring points to determine smooth transitions between them.

For the first and last points in a path, you can specify special behavior using override subnodes. For all other points, a general tangent computation method is applied. You can also scale these tangents to adjust their influence on orientation or curve shape.

#### Configuration

<details>

<summary><strong>Arrive Name</strong><br><em>Name of the arrive tangent attribute.</em></summary>

Controls the name of the attribute where the arrive tangent will be written. The arrive tangent defines the direction into a point from its predecessor.

</details>

<details>

<summary><strong>Leave Name</strong><br><em>Name of the leave tangent attribute.</em></summary>

Controls the name of the attribute where the leave tangent will be written. The leave tangent defines the direction out of a point to its successor.

</details>

<details>

<summary><strong>Tangents</strong><br><em>Optional module for the start point specifically.</em></summary>

A subnode that defines how tangents are computed for all points in the path, except for the first and last.

</details>

<details>

<summary><strong>Start Override</strong><br><em>Optional module for the start point specifically.</em></summary>

A subnode that defines how tangents are computed specifically for the first point of a path. Overrides the general Tangents setting.

</details>

<details>

<summary><strong>End Override</strong><br><em>Optional module for the end point specifically.</em></summary>

A subnode that defines how tangents are computed specifically for the last point of a path. Overrides the general Tangents setting.

</details>

<details>

<summary><strong>Arrive Scale Input</strong><br><em>How to read arrive scale values.</em></summary>

Determines whether the arrive tangent scale is constant or read from an attribute.

* **Constant**: Use a fixed value defined in Arrive Scale.
* **Attribute**: Read the scale from an input attribute.

</details>

<details>

<summary><strong>Arrive Scale (Attr)</strong><br><em>Attribute to read arrive scale from.</em></summary>

When Arrive Scale Input is set to Attribute, this specifies which attribute to use for scaling the arrive tangent.

</details>

<details>

<summary><strong>Arrive Scale</strong><br><em>Constant value for arrive scale.</em></summary>

When Arrive Scale Input is set to Constant, this defines the fixed scalar applied to the arrive tangent.

</details>

<details>

<summary><strong>Leave Scale Input</strong><br><em>How to read leave scale values.</em></summary>

Determines whether the leave tangent scale is constant or read from an attribute.

* **Constant**: Use a fixed value defined in Leave Scale.
* **Attribute**: Read the scale from an input attribute.

</details>

<details>

<summary><strong>Leave Scale (Attr)</strong><br><em>Attribute to read leave scale from.</em></summary>

When Leave Scale Input is set to Attribute, this specifies which attribute to use for scaling the leave tangent.

</details>

<details>

<summary><strong>Leave Scale</strong><br><em>Constant value for leave scale.</em></summary>

When Leave Scale Input is set to Constant, this defines the fixed scalar applied to the leave tangent.

</details>

#### Usage Example

1. Create a path using a `Path : Generate` node.
2. Connect it to a `Path : Write Tangents` node.
3. Set the Arrive Name and Leave Name to custom attribute names (e.g., "TangentArrive" and "TangentLeave").
4. Assign a tangent subnode like `Tangents : Default` or `Tangents : Catmull-Rom`.
5. Optionally, set different tangent behaviors for start and end points using Start Override and End Override.
6. Use the resulting paths in downstream nodes that require tangent data, such as `Points : Transform` or `Points : Orient`.

#### Notes

* Tangent computation is based on neighboring points; ensure your paths have sufficient resolution for smooth results.
* Using attribute-based scaling allows for dynamic adjustments of tangent influence per point.
* The Start Override and End Override subnodes let you define special behavior at path endpoints, such as fixed or mirrored tangents.
