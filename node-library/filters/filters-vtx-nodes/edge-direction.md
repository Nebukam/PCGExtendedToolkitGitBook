---
description: 'In editor :: PCGEx | Vtx Filter : Edge Direction'
icon: circle-dashed
---

# Edge Direction

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Compares the directions of edges connected to each vertex against a reference direction to determine which vertices to keep or remove.

#### Overview

This subnode helps control which vertices remain in your procedural graph based on how their connected edges are oriented. You can use it to ensure that edges point in a certain direction, like making sure roads in a city flow toward the north or that terrain slopes follow a specific pattern.

It works by calculating how aligned each edge is with a reference direction and then checking whether that alignment meets your criteria. The process can be precise or fast, depending on your needs.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### How It Works

This subnode evaluates the orientation of edges connected to each vertex and compares them against a reference direction. For every vertex, it:

1. Collects all edges linked to that vertex.
2. Determines what direction to compare against:
   * If set to **Constant**, it uses a fixed direction you define.
   * If set to **Attribute**, it reads the direction from an attribute on the vertex.
3. Optionally adjusts the reference direction using the vertex's local orientation if enabled.
4. Calculates the direction of each connected edge (from one node to another).
5. Computes how aligned each edge is with the reference direction using a dot product.
6. Compares that alignment value against a threshold or tolerance:
   * If **Dot (Precise)** is selected, it uses detailed calculations.
   * If **Hash (Fast)** is selected, it performs a quicker approximation.
7. A vertex passes the filter if its connected edges meet the alignment requirements.

The result is a yes/no decision for each vertex that determines whether it continues to the next step in your graph.

<details>

<summary>Inputs</summary>

This subnode expects data containing vertices and their connected edges, typically from graph-based processing nodes. It reads edge directions and optionally vertex attributes for reference direction.

</details>

<details>

<summary>Outputs</summary>

The output is a filtered set of vertices that meet the directional alignment criteria defined by this filter.

</details>

#### Configuration

***

**ComparisonQuality**

_Controls whether to use precise dot product comparisons or faster hash-based checks._

When **Dot (Precise)** is selected, it performs detailed calculations with configurable tolerance. When **Hash (Fast)** is selected, it uses a simplified method that ignores adjacency consolidation.

**Values**:

* **Dot (Precise)**: Performs accurate dot product comparisons
* **Hash (Fast)**: Uses fast hash-based comparison

***

**Adjacency**

_Adjacency Settings_

Controls how edges are considered when evaluating the vertex. This includes settings for adjacency consolidation and filtering.

***

**DirectionOrder**

_Determines the orientation of edge directions used in the comparison._

This setting defines whether the edge direction is calculated from node to neighbor or from neighbor to node.

**Values**:

* **From Node to Neighbor**: Edge direction points from the current vertex to its neighbor
* **From Neighbor to Node**: Edge direction points from the neighbor back to the current vertex

***

**CompareAgainst**

_Specifies whether to read the reference direction from a constant value or an attribute._

When set to **Attribute**, it reads the direction vector from a specified vertex attribute. When set to **Constant**, it uses a fixed vector defined in the settings.

**Values**:

* **Constant**: Use a fixed vector
* **Attribute**: Read direction from a vertex attribute

***

**bInvertDirection**

_When enabled, inverts the reference direction before comparison._

This allows flipping the direction for testing alignment in the opposite orientation.

***

**DirectionConstant**

_Reference direction when using constant mode._

A fixed 3D vector that defines the direction to compare against. For example, pointing upward or along the X-axis.

***

**bTransformDirection**

_When enabled, applies the vertex's local transform to the reference direction._

This allows the reference direction to be rotated or scaled according to the vertex’s orientation in space.

***

**DotComparisonDetails**

_Configuration for precise dot product comparisons._

Controls tolerance and comparison logic when using **Dot (Precise)** mode.

***

**HashComparisonDetails**

_Configuration for fast hash-based comparisons._

Controls tolerance and comparison logic when using **Hash (Fast)** mode.

***

#### Usage Example

Use this filter to only keep vertices where connected edges mostly point in a specific direction, such as ensuring all roads in a city grid flow toward the north. You can set the reference direction to point upward and configure the dot product threshold to allow only edges with high alignment (e.g., 0.8 or higher).

#### Notes

* The **Hash (Fast)** mode is less accurate but faster, especially for large graphs.
* Ensure that edge directions are well-defined in your graph data before applying this filter.
* Combining this filter with other vertex filters can create complex directional constraints in procedural generation workflows.
