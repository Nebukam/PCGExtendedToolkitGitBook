---
description: 'In editor :: PCGEx | Cluster : Edge Properties'
icon: circle
---

# Edge Properties

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Extract and write additional edge information to the point representing that edge.

#### How It Works

This node processes each edge in a cluster and computes additional properties based on its start and end points. It then writes these computed values as attributes to the point that represents the edge.

1. For each edge, it calculates:
   * Edge length (distance between start and end points)
   * Edge direction (vector from start to end point)
   * Heuristics score (based on selected mode: endpoint order, smallest, or highest)
2. If enabled, it blends properties from the start and end points using a specified blending method.
3. It optionally adjusts the edge point's position by lerping between the start and end points.
4. It can also update the edge's radius along one or more axes (X, Y, Z) based on input values.

The node supports multiple output modes for heuristics and allows fine-grained control over how edge properties are blended or computed from their endpoints.

#### Configuration

<details>

<summary><strong>Direction Settings</strong><br><em>Defines the direction in which points will be ordered to form the final paths.</em></summary>

Controls how edge endpoints are interpreted when computing properties like direction or heuristics.

</details>

<details>

<summary><strong>Write Edge Length</strong><br><em>Output Edge Length.</em></summary>

When enabled, computes and writes the distance between the start and end points of each edge to an attribute.

**Values**:

* **False**: Skip writing edge length.
* **True**: Write edge length to an attribute.

</details>

<details>

<summary><strong>Edge Length Attribute Name</strong><br><em>Name of the attribute to write edge length to.</em></summary>

The name of the attribute where the computed edge length will be stored. Only used when "Write Edge Length" is enabled.

</details>

<details>

<summary><strong>Write Edge Direction</strong><br><em>Output Edge Direction</em></summary>

When enabled, computes and writes the normalized vector from start to end point of each edge to an attribute.

**Values**:

* **False**: Skip writing edge direction.
* **True**: Write edge direction to an attribute.

</details>

<details>

<summary><strong>Edge Direction Attribute Name</strong><br><em>Name of the attribute to write edge direction to.</em></summary>

The name of the attribute where the computed edge direction will be stored. Only used when "Write Edge Direction" is enabled.

</details>

<details>

<summary><strong>Endpoints Blending</strong><br><em>Edges will inherit point attributes</em></summary>

When enabled, allows blending of properties from the start and end points of each edge to compute values for the edge's representative point.

**Values**:

* **False**: Do not blend endpoint properties.
* **True**: Blend endpoint properties based on weights or other methods.

</details>

<details>

<summary><strong>Endpoints Weights</strong><br><em>Balance between start/end point ( When enabled, this value will be overriden by EdgePositionLerp, and Solidification, in that order. )</em></summary>

Controls the balance between the start and end points when blending properties. A value of 0 means only the start point is considered, while 1 means only the end point.

</details>

<details>

<summary><strong>Blending Interface</strong><br><em>How to blend data from sampled points</em></summary>

Defines how to combine values from multiple points when blending. Options include average, lerp, min, max, and more.

**Values**:

* **Individual**: Blend each component individually.
* **Monolithic**: Blend all components together as a single unit.

</details>

<details>

<summary><strong>Blending Settings</strong><br><em>Defines how fused point properties and attributes are merged together.</em></summary>

Only visible when "Endpoints Blending" is enabled and "Blending Interface" is set to "Monolithic". Controls the specific blending method used.

</details>

<details>

<summary><strong>Write Heuristics</strong><br><em>Output Edge Heuristics.</em></summary>

When enabled, computes and writes a heuristic score for each edge. The score can be based on endpoint order, smallest, or highest values.

**Values**:

* **False**: Skip writing heuristics.
* **True**: Write heuristics to an attribute.

</details>

<details>

<summary><strong>Heuristics Attribute Name</strong><br><em>Name of the attribute to write heuristics to.</em></summary>

The name of the attribute where the computed heuristic score will be stored. Only used when "Write Heuristics" is enabled.

</details>

<details>

<summary><strong>Heuristics Mode</strong><br><em>Heuristic write mode.</em></summary>

Controls how heuristics are computed for each edge.

**Values**:

* **Endpoints Order**: Use the order of the endpoints.
* **Smallest Score**: Compute heuristics both ways and keep the smallest score.
* **Highest Score**: Compute heuristics both ways and keep the highest score.

</details>

<details>

<summary><strong>Write Edge Position</strong><br><em>Update Edge position as a lerp between endpoints (according to the direction method selected above)</em></summary>

When enabled, adjusts the position of the edge point by interpolating between the start and end points.

**Values**:

* **False**: Keep the original edge point position.
* **True**: Interpolate the edge point position based on a lerp value.

</details>

<details>

<summary><strong>Edge Position Lerp</strong><br><em>Position position lerp between start &#x26; end points</em></summary>

Controls how much to interpolate between the start and end points when updating the edge's position. A value of 0 keeps the start point, 1 keeps the end point.

</details>

<details>

<summary><strong>Solidification Axis</strong><br><em>Balance between start/end point ( When enabled, this value will be overriden by EdgePositionLerp, and Solidification, in that order. )</em></summary>

Defines which axis to align the edge along when solidifying its position.

**Values**:

* **None**: Do not solidify.
* **X**: Align along X axis.
* **Y**: Align along Y axis.
* **Z**: Align along Z axis.

</details>

<details>

<summary><strong>Solidification Lerp Input</strong><br><em>Solidification Lerp attribute (read from Edge).</em></summary>

Controls whether the lerp value for solidification is a constant or read from an edge attribute.

**Values**:

* **Constant**: Use a fixed lerp value.
* **Attribute**: Read the lerp value from an edge attribute.

</details>

<details>

<summary><strong>Solidification Lerp Attribute</strong><br><em>Solidification Lerp attribute (read from Edge).</em></summary>

The name of the edge attribute to read the solidification lerp value from. Only used when "Solidification Lerp Input" is set to "Attribute".

</details>

<details>

<summary><strong>Solidification Lerp Constant</strong><br><em>Solidification Lerp constant.</em></summary>

The fixed lerp value to use for solidification. Only used when "Solidification Lerp Input" is set to "Constant".

</details>

<details>

<summary><strong>Write Radius X</strong><br><em>Whether or not to write the edge extents over the local X axis.</em></summary>

When enabled, writes a radius value along the X axis for the edge.

**Values**:

* **False**: Skip writing radius on X.
* **True**: Write radius on X.

</details>

<details>

<summary><strong>Radius X Input</strong><br><em>Type of Radius X value</em></summary>

Controls whether the radius value is a constant or read from an attribute.

**Values**:

* **Constant**: Use a fixed value.
* **Attribute**: Read from an attribute.

</details>

<details>

<summary><strong>Radius X Source</strong><br><em>Source from which to fetch the Radius X value</em></summary>

The source of the radius value for X axis. Only used when "Radius X Input" is set to "Attribute".

**Values**:

* **Point**: Use point data.
* **Edge**: Use edge data.

</details>

<details>

<summary><strong>Radius X Source Attribute</strong><br><em>Attribute read on edge endpoints</em></summary>

The name of the attribute to read the radius value from. Only used when "Radius X Input" is set to "Attribute".

</details>

<details>

<summary><strong>Radius X Constant</strong><br><em>Radius X Constant</em></summary>

The fixed value to use for the X axis radius. Only used when "Radius X Input" is set to "Constant".

</details>

<details>

<summary><strong>Write Radius Y</strong><br><em>Whether or not to write the edge extents over the local Y axis.</em></summary>

When enabled, writes a radius value along the Y axis for the edge.

**Values**:

* **False**: Skip writing radius on Y.
* **True**: Write radius on Y.

</details>

<details>

<summary><strong>Radius Y Input</strong><br><em>Type of Radius Y value</em></summary>

Controls whether the radius value is a constant or read from an attribute.

**Values**:

* **Constant**: Use a fixed value.
* **Attribute**: Read from an attribute.

</details>

<details>

<summary><strong>Radius Y Source</strong><br><em>Source from which to fetch the Radius Y value</em></summary>

The source of the radius value for Y axis. Only used when "Radius Y Input" is set to "Attribute".

**Values**:

* **Point**: Use point data.
* **Edge**: Use edge data.

</details>

<details>

<summary><strong>Radius Y Source Attribute</strong><br><em>Attribute read on edge endpoints</em></summary>

The name of the attribute to read the radius value from. Only used when "Radius Y Input" is set to "Attribute".

</details>

<details>

<summary><strong>Radius Y Constant</strong><br><em>Radius Y Constant</em></summary>

The fixed value to use for the Y axis radius. Only used when "Radius Y Input" is set to "Constant".

</details>

<details>

<summary><strong>Write Radius Z</strong><br><em>Whether or not to write the edge extents over the local Z axis.</em></summary>

When enabled, writes a radius value along the Z axis for the edge.

**Values**:

* **False**: Skip writing radius on Z.
* **True**: Write radius on Z.

</details>

<details>

<summary><strong>Radius Z Input</strong><br><em>Type of Radius Z value</em></summary>

Controls whether the radius value is a constant or read from an attribute.

**Values**:

* **Constant**: Use a fixed value.
* **Attribute**: Read from an attribute.

</details>

<details>

<summary><strong>Radius Z Source</strong><br><em>Source from which to fetch the Radius Z value</em></summary>

The source of the radius value for Z axis. Only used when "Radius Z Input" is set to "Attribute".

**Values**:

* **Point**: Use point data.
* **Edge**: Use edge data.

</details>

<details>

<summary><strong>Radius Z Source Attribute</strong><br><em>Attribute read on edge endpoints</em></summary>

The name of the attribute to read the radius value from. Only used when "Radius Z Input" is set to "Attribute".

</details>

<details>

<summary><strong>Radius Z Constant</strong><br><em>Radius Z Constant</em></summary>

The fixed value to use for the Z axis radius. Only used when "Radius Z Input" is set to "Constant".

</details>

#### Usage Example

You are building a procedural road network and want to store edge length and direction on the points that represent each road segment. You enable "Write Edge Length" and "Write Edge Direction", then assign names like "RoadLength" and "RoadDirection" to their respective attributes. This allows downstream nodes to use these values for lighting, texturing, or pathfinding.

#### Notes

* When using "Endpoints Blending", ensure that the blending method matches your desired visual or logical outcome.
* Solidification settings can be used to align edges with a specific axis, which is useful for creating uniform structures like walls or roads.
* Heuristics are particularly useful when working with graph algorithms where edge quality or cost needs to be represented.
