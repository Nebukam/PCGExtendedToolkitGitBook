---
icon: list-tree
---

# Edge Direction

#### Settings

<details>

<summary><strong>Direction Method</strong> <code>EPCGExEdgeDirectionMethod</code></summary>

Method to pick the edge direction amongst various possibilities.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Dir Source Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute picker for the selected Direction Method.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction Choice</strong> <code>EPCGExEdgeDirectionChoice</code></summary>

Further refine the direction method. Not all methods make use of this property.

⚡ PCG Overridable

</details>

#### Used In

* WriteEdgeProperties
* BreakClustersToPaths
* EdgeOrder
* SubdivideEdges
* IsoEdgeDirectionFilter
* ClusterMT

***

Defined in: `Source\PCGExCore\Public\Clusters\PCGExEdgeDirectionDetails.h`
