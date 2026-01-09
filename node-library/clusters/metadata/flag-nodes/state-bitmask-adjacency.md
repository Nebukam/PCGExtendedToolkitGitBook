---
description: 'In editor :: PCGEx | State : Bitmask Adjacency'
icon: circle-dashed
---

# State : Bitmask Adjacency

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> A bulk-check for directional adjacency, using bitmask collections.

#### Overview

This subnode evaluates the adjacency relationships between points in a cluster based on their directional orientation. It performs a fast, bulk check to determine whether points are aligned in specific directions and applies bitwise operations to flag them accordingly. This is useful for defining spatial relationships or directional constraints within procedural data.

It connects to **Filter** pins on processing nodes that support cluster state definitions.

#### How It Works

This subnode evaluates adjacency by comparing the direction of each point's orientation with its neighbors. For each point, it calculates a dot product between its own direction and the direction of adjacent points. If the angle between these directions is within a specified threshold, the point is considered aligned.

It then applies bitwise operations to a flag based on this alignment check:

* When all adjacency checks pass, it applies the **Compositions** and **Collections** defined for success.
* If any check fails and **bUseAlternativeBitmasksOnFilterFail** is enabled, it applies alternative bitwise operations from **OnFailCompositions** and **OnFailCollections**.

The direction used in the dot product can optionally be transformed using the point's local transform if **bTransformDirection** is enabled. The result of the dot product check can also be inverted by enabling **bInvert**, which flips the logic so that non-matching directions are flagged instead.

#### Configuration

***

**Angle**

_Shared angle threshold_

Controls the maximum angular difference (in degrees) allowed between two directions for them to be considered aligned. A value of 22.5° means that if two points have orientations within 22.5° of each other, they are considered adjacent in direction.

**bTransformDirection**

_Whether to transform directions using the vtx' point transform_

When enabled, the direction used in the dot product is transformed by the point's local transform before comparison. This allows for directional checks in world space rather than object space.

**Compositions**

_Operations executed on the flag if all filters pass (or if no filter is set)_

A list of bitmask operations to apply when adjacency conditions are met. These define how the flag is modified if all directional checks pass.

**Collections**

_Operations executed on the flag if all filters pass (or if no filter is set)_

A map of bitmask collections and their associated bitwise operations to apply when adjacency conditions are met.

**bUseAlternativeBitmasksOnFilterFail**

_If enabled, and if filters exist, will apply alternative bitwise operations when filters fail._

When enabled, this subnode applies different bitwise operations if any adjacency check fails. This allows for more nuanced flagging based on partial success or failure.

**OnFailCompositions**

_Operations executed on the flag if any filters fails_

A list of bitmask operations to apply when at least one adjacency condition fails. Only used if **bUseAlternativeBitmasksOnFilterFail** is enabled.

**OnFailCollections**

_Operations executed on the flag if any filters fails_

A map of bitmask collections and their associated bitwise operations to apply when at least one adjacency condition fails. Only used if **bUseAlternativeBitmasksOnFilterFail** is enabled.

**bInvert**

_Whether to invert the dot product check. Bitmasks will be applied with direction does NOT match._

When enabled, the logic is inverted so that points are flagged if their directions do **not** align within the threshold instead of when they **do** align.

#### Usage Example

Use this subnode in a cluster state definition to flag points that have aligned neighbors. For instance, you might use it to mark all points that are facing similar directions as part of a terrain or structure alignment system. You could then use these flags to influence further procedural operations like mesh generation or material assignment.

#### Notes

* This subnode is designed for performance and works on bulk adjacency checks.
* It does not modify the actual point data, only applies flags based on directional relationships.
* The **Angle** setting should be tuned to match the expected spatial orientation of your data.
