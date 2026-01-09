---
description: 'In editor :: PCGEx | Vtx Filter : Edge Direction'
icon: circle-dashed
---

# Edge Direction

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Filters points based on the direction of their connected edges, comparing against a reference direction.

### Overview

This filter evaluates whether a point's connected edges align with a specified direction. It's useful for creating rules that only accept points where adjacent connections meet certain directional criteria, such as filtering nodes that only connect to upward edges or edges aligned with a specific axis.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like **Cluster : Filter**, **Cluster : Split**, or **Cluster : Prune**
{% endhint %}

### How It Works

The filter compares the direction of each point's connected edges against a reference direction. For each point, it calculates the dot product between the edge direction and the reference direction, then checks if the result meets the specified comparison criteria.

It supports two comparison methods:

* **Dot (Precise)**: Uses dot product for exact directional alignment
* **Hash (Fast)**: Uses a simplified hash-based comparison for performance

### Inputs

* **Points**: Point data to filter
* **Attribute** (optional): Vector attribute containing reference directions when "Compare Against" is set to "Attribute"

### Outputs

* **Filtered Points**: Points that meet the directional criteria
* **Rejected Points**: Points that do not meet the directional criteria

### Configuration

***

#### General Settings

**Comparison Quality**

_Controls whether to use precise dot product or fast hash comparison._

When set to **Dot (Precise)**, the filter uses exact dot product calculations for accurate directional comparisons. When set to **Hash (Fast)**, it uses a simplified method that's faster but less precise.

**Values**:

* **Dot (Precise)**: Uses dot product for accurate directional alignment checks
* **Hash (Fast)**: Uses hash comparison with tolerance for faster performance

**Direction Order**

_Determines the direction of the edge vector used in the comparison._

Controls whether the edge direction is calculated from the point to its neighbor (**From Node**) or from the neighbor to the point (**From Neighbor**).

**Values**:

* **From Node to Neighbor**: Edge points from the current node toward its neighbor
* **From Neighbor to Node**: Edge points from the neighbor toward the current node

**Compare Against**

_Specifies whether to use a constant direction or read it from an attribute._

When set to **Attribute**, the filter reads the reference direction from a point attribute. When set to **Constant**, it uses the manually specified direction.

**Values**:

* **Constant**: Uses the manually defined direction value
* **Attribute**: Reads the direction from a point attribute

**Direction (Attr)**

_The name of the attribute containing the reference direction._

Only visible when "Compare Against" is set to **Attribute**. This attribute must contain a vector value that represents the direction to compare against.

**└─ Invert**

_When enabled, reverses the reference direction._

When enabled, the filter will test against the inverse of the attribute's direction vector.

**Direction**

_The constant reference direction used for comparison._

Only visible when "Compare Against" is set to **Constant**. This is the fixed direction the edges are compared against.

**Transform Direction**

_When enabled, applies the point's local transform to the reference direction._

When enabled, the filter will rotate and scale the reference direction using the point's local transform before comparison.

***

#### Dot Comparison Settings

**Tolerance**

_The acceptable deviation from the reference direction._

Controls how strict the directional match must be. A lower value requires more precise alignment.

**Min Value**

_The minimum dot product value required for a match._

Only points with edge directions that produce a dot product greater than or equal to this value will pass the filter.

***

#### Hash Comparison Settings

**Tolerance**

_The tolerance used for hash-based comparison._

Controls how much deviation is allowed in the hash comparison. Higher values allow more variation in edge directions.

**Min Value**

_The minimum hash value required for a match._

Only points with edge directions that produce a hash value greater than or equal to this value will pass the filter.

### Usage Example

Create a filter that only accepts points where connected edges point upward (Z-axis positive). Set "Compare Against" to **Constant**, "Direction" to `(0, 0, 1)`, and "Min Value" to `0.5` in the Dot Comparison settings. This will allow only points whose edges have at least 30° deviation from horizontal.

### Notes

* The filter works on point clusters with adjacency data
* For best performance with large datasets, use the **Hash (Fast)** comparison mode
* When using attributes, ensure the attribute exists and contains valid vector data
* The "Transform Direction" option is useful when working with rotated or scaled points
* Combine this filter with other filters to create complex directional rules for point selection
