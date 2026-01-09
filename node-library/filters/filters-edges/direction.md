---
description: 'In editor :: PCGEx | Edge Filter : Edge Direction'
icon: circle-dashed
---

# Direction

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Dot product comparison of the edge direction against a local attribute or constant.

#### Overview

This subnode filters edges based on their directional alignment with a reference direction. It evaluates whether an edge's orientation matches or opposes a specified direction, which can be either a fixed vector or derived from point attributes. This is useful for creating directional constraints in graph-based procedural generation, such as ensuring paths flow in a certain direction or align with terrain features.

It connects to the **Filter** pin of processing nodes that handle edge data.

#### How It Works

This subnode evaluates each edge in a cluster by computing a dot product between the edge's direction and a reference direction. The result determines whether the edge passes the filter.

* If using **Dot** comparison, it computes the dot product of the edge direction and the reference direction.
* If using **Hash** comparison, it performs a simplified hash-based check with tolerance.
* The reference direction can be a constant value or read from an attribute on the input points.
* When enabled, the reference direction can be transformed by the point's local transform.
* Optionally, the result of the comparison can be inverted.

The subnode supports both **precise** (Dot) and **fast** (Hash) comparison modes. The Hash mode is faster but less accurate, and does not support adjacency consolidation.

<details>

<summary>Inputs</summary>

Expects edge data from a cluster, with optional point attributes for reference direction if using attribute-based input.

</details>

<details>

<summary>Outputs</summary>

Filters edges based on the comparison result. Edges that meet the directional criteria are passed through; those that do not are discarded.

</details>

#### Configuration

***

**DirectionSettings**

_Defines the direction in which points will be ordered to form the final paths._

Controls how edge directions are computed from point positions.

**ComparisonQuality**

_Type of check; Note that Fast comparison ignores adjacency consolidation._

Determines whether to use precise dot product comparison or a faster hash-based method.

**Values**:

* **Dot (Precise)**: Extensive comparison using Dot product
* **Hash (Fast)**: Simplified check using hash comparison with a destructive tolerance

**CompareAgainst**

_Where to read the compared direction from._

Specifies whether the reference direction is a constant value or comes from an attribute.

**Values**:

* **Constant**: Use a constant, user-defined value.
* **Attribute**: Read the value from the input data.

**bInvertDirection**

_When enabled, the reference direction will be inverted for comparison._

Reverses the reference direction before performing the dot product or hash comparison.

**DirectionConstant**

_Direction for computing the dot product against the edge's._

The fixed vector used as the reference direction when CompareAgainst is set to Constant.

**bTransformDirection**

_When enabled, transform the reference direction with the local point' transform._

Applies the point's local transform to the reference direction before comparison.

**DotComparisonDetails**

_Dot comparison settings_

Settings for fine-tuning the dot product comparison, such as tolerance thresholds.

**HashComparisonDetails**

_Hash comparison settings_

Settings for fine-tuning the hash-based comparison, including tolerance and precision.

#### Usage Example

Use this subnode to filter edges so that only those pointing in a specific direction (e.g., upward along a slope) are included in the final graph. For example, you could set the reference direction to `FVector::UpVector` and enable **Invert Direction** to keep only edges that point downward.

#### Notes

* The Hash comparison mode is faster but less precise than Dot.
* When using attribute-based directions, ensure the attribute exists on the input points.
* This filter works best with clusters where edge directions are meaningful (e.g., from a graph or pathfinding setup).
