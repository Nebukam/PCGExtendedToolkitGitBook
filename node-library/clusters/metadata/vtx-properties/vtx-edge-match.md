---
description: 'In editor :: PCGEx | Vtx : Edge Match'
icon: circle-dashed
---

# Vtx : Edge Match

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Find the edge that matches the closest provided direction.

### Overview

This node identifies the edge connected to each vertex that best aligns with a specified direction. It's useful for determining which neighbor a vertex is pointing toward, or finding edges that match a particular orientation in your procedural mesh or terrain.

The node compares the direction of each edge against a user-defined reference direction using dot product calculations. It then selects the edge with the highest alignment score (closest to 1.0 for same direction, -1.0 for opposite direction).

{% hint style="info" %}
This node works on vertex-edge relationships in clusters, so it requires cluster data as input.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Cluster data containing vertices and edges
* **Optional Filter Inputs**: Point filter factories to restrict which edges are considered

</details>

<details>

<summary>Outputs</summary>

* **Property Output**: Vertex properties with the index of the matching edge and optionally its direction

</details>

### Properties Overview

Settings for defining how to compute the edge match.

***

#### Direction Settings

Controls how the reference direction is defined and compared against edges.

**Direction Orientation**

_Whether to measure the edge direction from node to neighbor or neighbor to node._

* **From Node to Neighbor**: Edge direction points from vertex toward its neighbor
* **From Neighbor to Node**: Edge direction points from neighbor toward vertex

**Direction Input Type**

_How to define the reference direction for comparison._

* **Constant**: Use a fixed vector value
* **Attribute**: Read the direction from an attribute on the input data

**Direction Attribute**

_The attribute containing the reference direction when "Attribute" is selected._

* Only visible when Direction Input Type is set to "Attribute"

**Invert Direction**

_Reverse the reference direction before comparison._

* When enabled, the comparison uses the opposite of the specified direction

**Direction Constant**

_The fixed vector value used when "Constant" is selected._

* Only visible when Direction Input Type is set to "Constant"
* Default value is forward vector (1, 0, 0)

**Transform Direction**

_Apply the vertex's transform to the reference direction._

* When enabled, the reference direction is transformed by the vertex's world position and rotation before comparison

***

#### Comparison Settings

Controls how edge directions are compared against the reference direction.

**Dot Comparison Mode**

_The method used to compare edge alignment with the reference direction._

* **Scalar**: Compare using dot product directly (range -1.0 to 1.0)
* **Degrees**: Compare using angle in degrees (range 0° to 180°)

**Comparison Threshold**

_The minimum dot product value required for an edge to be considered a match._

* For "Scalar" mode: Value between -1.0 and 1.0
* For "Degrees" mode: Value between 0 and 180 (in degrees)
* Higher values mean stricter matching

**Comparison Operator**

_How to evaluate the dot product against the threshold._

* **Equal or Greater**: Match if dot product is greater than or equal to threshold
* **Strictly Greater**: Match only if dot product is strictly greater than threshold
* **Nearly Equal**: Match if dot product is close to threshold (within tolerance)

***

#### Output Settings

Controls what information is written to the vertex properties.

**Output Edge Index**

_Whether to store the index of the matching edge._

* When enabled, stores the index of the best-matching edge in the output attribute

**Output Edge Direction**

_Whether to store the direction of the matching edge._

* When enabled, stores the normalized direction vector of the best-matching edge in the output attribute

### Notes

* This node is particularly useful for creating directional features like roads, rivers, or wind patterns that follow vertex connectivity
* The "From Node to Neighbor" orientation works well when you want to know which neighbor a vertex points toward
* The "From Neighbor to Node" orientation works well when you want to know which edge leads back to the current vertex
* When using attribute input for direction, make sure the attribute contains normalized vectors for consistent results
* For performance, consider using filter inputs to exclude edges that are unlikely to match your criteria
* The output edge index is relative to the vertex's adjacency list, not the global edge index in the cluster
