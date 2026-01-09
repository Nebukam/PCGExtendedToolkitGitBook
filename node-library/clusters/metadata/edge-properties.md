---
description: 'In editor :: PCGEx | Cluster : Edge Properties'
icon: circle
---

# Edge Properties

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Extract & write extra edge informations to the point representing the edge.

### Overview

This node processes edges in a cluster and writes additional information about each edge directly onto the points that represent those edges. It's useful for enriching edge data with properties like length, direction, or heuristic scores that can be used later in your procedural pipeline.

You'd typically use this node when you want to access edge-specific data from point-based operations, such as applying edge-based attributes to vertices or using edge properties for further processing.

{% hint style="info" %}
This node modifies the point data representing edges. The original edge data remains unchanged.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Point): Cluster points, typically vertex data
* **Edges Input** (Point): Edge data points that represent connections between vertices

</details>

<details>

<summary>Outputs</summary>

* **Main Output** (Point): Modified vertex data with edge properties written to it
* **Edges Output** (Point): Modified edge data with additional attributes

</details>

### Properties Overview

Controls how edge information is extracted and written to points.

***

#### Settings|Outputs

What edge properties to extract and write to the point data.

**Write Edge Length**

_When enabled, the length of each edge is computed and stored as an attribute on the point representing that edge._

* How it affects results: Adds a numeric value representing the distance between the two endpoints of the edge
* Value ranges: Any positive number

**Edge Length Attribute Name**

_Name of the attribute where the edge length will be written._

* How it affects results: Determines what name the computed edge length gets in the output data
* Value ranges: Any valid attribute name string

**Write Edge Direction**

_When enabled, the normalized direction vector of each edge is computed and stored as an attribute on the point representing that edge._

* How it affects results: Adds a 3D vector representing the direction from start to end of the edge
* Value ranges: Vector with components between -1 and 1

**Edge Direction Attribute Name**

_Name of the attribute where the edge direction will be written._

* How it affects results: Determines what name the computed edge direction gets in the output data
* Value ranges: Any valid attribute name string

**Endpoints Blending**

_When enabled, point attributes from both endpoints are blended together and written to the edge point._

* How it affects results: Merges properties from the start and end points of an edge using blending rules
* Value ranges: Boolean toggle

**Endpoints Weights**

_Blend balance between start and end points when blending._

* How it affects results: Controls how much influence each endpoint has in the blend (0 = 100% start, 1 = 100% end)
* Value ranges: 0 to 1

**Write Heuristics**

_When enabled, a heuristic score is computed for each edge and stored as an attribute._

* How it affects results: Adds a numeric value representing some measure of edge quality or cost
* Value ranges: Any real number

**Heuristics Attribute Name**

_Name of the attribute where the heuristics will be written._

* How it affects results: Determines what name the computed heuristic gets in the output data
* Value ranges: Any valid attribute name string

**Heuristics Mode**

_How to compute the edge heuristics._

* **Endpoints Order**: Uses the order of endpoints as a heuristic score
* **Smallest Score**: Computes heuristics both ways and keeps the smallest value
* **Highest Score**: Computes heuristics both ways and keeps the highest value

***

#### Settings|Solidification

Controls how edge points are positioned and sized based on their endpoints.

**Write Edge Position**

_When enabled, the position of each edge point is updated to a lerp between its start and end points._

* How it affects results: Moves the edge point along the line connecting its two endpoints
* Value ranges: Boolean toggle

**Edge Position Lerp**

_Position of the edge point between start and end points._

* How it affects results: Determines where along the edge the point is placed (0 = at start, 1 = at end)
* Value ranges: 0 to 1

**Solidification Axis**

_When set to an axis, aligns the edge point's orientation along that axis._

* How it affects results: Rotates the edge point so it faces along the specified axis direction
* Value ranges: None, X, Y, Z

**Solidification Lerp Input**

_Source of the lerp value for solidification._

* **Constant**: Use a fixed constant value
* **Attribute**: Read the lerp value from an attribute on the edge

**Solidification Lerp Attribute**

_Name of the attribute to read the lerp value from._

* How it affects results: Only used when "Solidification Lerp Input" is set to "Attribute"
* Value ranges: Any valid attribute name

**Solidification Lerp Constant**

_Fixed lerp value to use for solidification._

* How it affects results: Only used when "Solidification Lerp Input" is set to "Constant"
* Value ranges: Any real number

***

#### Settings|Solidification|Radiuses

Controls how edge point extents (radius) are computed and written.

**Write Radius X**

_When enabled, the X radius of each edge point is updated._

* How it affects results: Sets or modifies the X extent of the edge point
* Value ranges: Boolean toggle

**Radius X Input**

_Source of the X radius value._

* **Constant**: Use a fixed constant value
* **Attribute**: Read the radius from an attribute on the edge

**Radius X Source**

_Source from which to fetch the X radius value._

* **Point**: Read from the point data (vertex)
* **Edge**: Read from the edge data

**Radius X Source Attribute**

_Name of the attribute to read the X radius from._

* How it affects results: Only used when "Radius X Input" is set to "Attribute"
* Value ranges: Any valid attribute name

**Radius X Constant**

_Fixed X radius value to use._

* How it affects results: Only used when "Radius X Input" is set to "Constant"
* Value ranges: Any positive number

**Write Radius Y**

_When enabled, the Y radius of each edge point is updated._

* How it affects results: Sets or modifies the Y extent of the edge point
* Value ranges: Boolean toggle

**Radius Y Input**

_Source of the Y radius value._

* **Constant**: Use a fixed constant value
* **Attribute**: Read the radius from an attribute on the edge

**Radius Y Source**

_Source from which to fetch the Y radius value._

* **Point**: Read from the point data (vertex)
* **Edge**: Read from the edge data

**Radius Y Source Attribute**

_Name of the attribute to read the Y radius from._

* How it affects results: Only used when "Radius Y Input" is set to "Attribute"
* Value ranges: Any valid attribute name

**Radius Y Constant**

_Fixed Y radius value to use._

* How it affects results: Only used when "Radius Y Input" is set to "Constant"
* Value ranges: Any positive number

**Write Radius Z**

_When enabled, the Z radius of each edge point is updated._

* How it affects results: Sets or modifies the Z extent of the edge point
* Value ranges: Boolean toggle

**Radius Z Input**

_Source of the Z radius value._

* **Constant**: Use a fixed constant value
* **Attribute**: Read the radius from an attribute on the edge

**Radius Z Source**

_Source from which to fetch the Z radius value._

* **Point**: Read from the point data (vertex)
* **Edge**: Read from the edge data

**Radius Z Source Attribute**

_Name of the attribute to read the Z radius from._

* How it affects results: Only used when "Radius Z Input" is set to "Attribute"
* Value ranges: Any valid attribute name

**Radius Z Constant**

_Fixed Z radius value to use._

* How it affects results: Only used when "Radius Z Input" is set to "Constant"
* Value ranges: Any positive number

### Notes

* Edge properties are written directly onto the points that represent edges, not on the edge data itself
* Use "Endpoints Blending" to merge attributes from both endpoints of an edge into the edge point
* The "Heuristics Mode" setting is useful when you want to compute different scores based on edge direction and choose the best one
* Solidification settings can be used to make edges appear as lines or capsules in visualizations
* When using radius settings, make sure the axis selection matches your intended geometry orientation
* This node works best with properly connected clusters where edge data is correctly linked to vertex data
