---
description: 'In editor :: PCGEx | Filter : Inclusion (Bounds)'
icon: circle-dashed
---

# Inclusion (Bounds)

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that compares bounds of points against target bounds.

#### Overview

This subnode defines a filtering behavior based on spatial relationships between point bounds and target bounds. It's used to determine whether individual points fall within or interact with specific spatial regions defined by other data.

It helps you selectively include or exclude points depending on their position relative to other bounds, such as collections, volumes, or shapes. This is useful for creating spatial constraints in procedural generation workflows — like ensuring points stay within a building's footprint or avoid certain zones.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### How It Works

This subnode evaluates the relationship between two sets of bounds: one from the input points and one from the target data. For each point, it determines if that point's bounds intersect, are inside, or otherwise relate to the target bounds.

It supports multiple comparison modes:

* **Per Point Bounds**: Each point is tested individually against the target bounds.
* **Collection Bounds**: The entire collection's combined bounds are used as a single proxy for testing.

The actual test can be one of several spatial checks:

* **Intersects**: The point's bounds overlap with the target bounds.
* **Is Inside**: The point's center lies within the target bounds.
* **Is Inside or On**: The point's center is inside or exactly on the boundary of the target bounds.
* **Is Inside or Intersects**: Either condition above passes.

You can also expand the target bounds slightly using an epsilon value to create a buffer zone. Optionally, you can invert the result so that points that would normally pass now fail and vice versa.

<details>

<summary>Inputs</summary>

Expects point data with associated bounds information (scaled, density, or raw bounds). The target bounds are provided via a connected data source.

</details>

<details>

<summary>Outputs</summary>

Produces a filter definition that can be consumed by processing nodes to include or exclude points based on spatial inclusion rules.

</details>

#### Configuration

***

**Mode**

_Controls how the bounds comparison is performed._

Determines whether each point is tested individually or if the entire collection's combined bounds are used for testing.

**Values**:

* **Per Point Bounds**: Each point is evaluated separately.
* **Collection Bounds**: All points are treated as a single unit when comparing to target bounds.

***

**BoundsTarget**

_Controls which type of bounds to use from the target data._

Specifies how to interpret the bounds of the target data being compared against.

**Values**:

* **Scaled Bounds**: Uses scaled version of bounds.
* **Density Bounds**: Uses density-scaled bounds.
* **Bounds**: Uses raw, unscaled bounds.
* **Center**: Treats each point as a tiny 1-unit box centered at its position.

***

**CheckType**

_Type of spatial check to perform._

Defines the logic used to decide whether a point passes or fails the filter.

**Values**:

* **Intersects**: Point's OBB overlaps target OBBs.
* **Is Inside**: Point center is inside target OBBs.
* **Is Inside or On**: Point center is inside or on boundary of target OBBs.
* **Is Inside or Intersects**: Point center inside OR point's OBB overlaps target OBBs.

***

**BoundsSource**

_Controls which type of bounds to use from the input points._

Specifies how to interpret the bounds of the points being filtered.

**Values**:

* **Scaled Bounds**: Uses scaled version of bounds.
* **Density Bounds**: Uses density-scaled bounds.
* **Bounds**: Uses raw, unscaled bounds.
* **Center**: Treats each point as a tiny 1-unit box centered at its position.

***

**TestMode**

_Shape type used for testing._

Controls how the target bounds are interpreted during comparison.

**Values**:

* **Box**: Standard box shape.
* **Expanded Box**: Box expanded by an epsilon value.
* **Sphere**: Sphere defined by the bounds' extents.
* **Expanded Sphere**: Sphere expanded by an epsilon value.

***

**Expansion**

_Epsilon value used to expand target bounds._

A small numerical offset added to the bounds during comparison, effectively creating a buffer zone around the target shape.

***

**bInvert**

_If enabled, inverts the result of the test._

When enabled, points that would normally pass the filter will be excluded and vice versa.

***

**bCheckAgainstDataBounds**

_If enabled, uses collection bounds as a single proxy point instead of per-point testing._

When enabled, all input points are tested against the combined bounds of the target data, rather than individually.

#### Usage Example

You're generating trees in a forest and want to avoid placing them inside a designated clearing area. You can use this subnode to filter out points that fall within the bounds of the clearing.

1. Connect your tree placement points to the input.
2. Connect the clearing's bounds data to the filter pin.
3. Set **CheckType** to "Is Inside" and enable **bInvert**.
4. This will exclude any point whose center lies inside the clearing bounds.

#### Notes

* The performance of this filter can be optimized by using **Collection Bounds** mode when applicable.
* Expansion is especially useful for creating soft boundaries or avoiding exact edge collisions.
* Combining multiple filters allows for complex spatial logic, such as including points only if they're both inside a region and not intersecting another shape.
