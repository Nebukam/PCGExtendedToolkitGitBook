---
description: 'In editor :: PCGEx | Filter : Inclusion (Bounds)'
icon: circle-dashed
---

# Inclusion (Bounds)

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Creates a filter definition that tests whether points are inside or intersecting with target bounds.

### Overview

This filter factory defines a condition that determines whether input points pass or fail based on their spatial relationship to target bounds. It's commonly used to include or exclude points based on their position relative to other geometric volumes.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like "Filter Points" or "Select Points"
{% endhint %}

### How It Works

This filter compares the bounds of input points against target bounds using various spatial relationship tests. The comparison can be done either point-by-point or using combined collection bounds, and supports multiple check types including intersection, containment, and boundary inclusion.

### Inputs

* **Points**: Input points to test
* **Target**: Target bounds data to compare against

### Outputs

* **Filter**: Filter definition for use in downstream nodes

### Configuration

***

#### General

**Mode**

_Controls whether to test each point individually or use combined collection bounds._

* **Per Point Bounds**: Each input point is tested against target bounds independently
* **Collection Bounds**: The entire input collection's combined bounds are used as a single test volume

**Bounds Target**

_Determines which bounds to use from the target data (the data connected to the filter)._

* **Scaled Bounds**: Bounds scaled by point size
* **Density Bounds**: Bounds scaled by density and steepness
* **Bounds**: Unscaled bounds
* **Center**: A tiny 1-unit box centered on the point

**Check Type**

_Specifies the spatial relationship test to perform._

* **Intersects**: Point's OBB overlaps target OBBs
* **Is Inside**: Point center is inside target OBBs
* **Is Inside or On**: Point center is inside or on boundary of target OBBs
* **Is Inside or Intersects**: Point center inside OR point's OBB overlaps target OBBs

**Bounds Source**

_Bounds to use from input points when performing intersection tests._

Only visible when Check Type is "Intersects" or "Is Inside or Intersects"

* **Scaled Bounds**: Bounds scaled by point size
* **Density Bounds**: Bounds scaled by density and steepness
* **Bounds**: Unscaled bounds
* **Center**: A tiny 1-unit box centered on the point

**Test Mode**

_Specifies the shape type used for testing._

* **Box**: Standard axis-aligned box test
* **Expanded Box**: Box expanded by an amount
* **Sphere**: Sphere using bounds extents size
* **Expanded Sphere**: Sphere expanded by an amount

**Expansion**

_Controls how much to expand target bounds when using Expanded Box or Expanded Sphere modes._

A value of 10 means the bounds will be expanded by 10 units in all directions.

**Invert**

_When enabled, reverses the result of the test._

If a point would normally pass, it fails, and vice versa.

**Check Against Data Bounds**

_When enabled, uses collection bounds as a single proxy point instead of per-point testing._

This is useful for quickly filtering entire collections based on their overall bounds rather than individual points.

### Usage Example

Create a filter that includes only points inside a specific volume. Connect your target volume data to the filter's input pin, then set:

* Check Type to "Is Inside"
* Test Mode to "Box"
* Bounds Target to "Scaled Bounds"

This will pass only points whose centers are fully contained within the target volume's bounds.

### Notes

* The filter works with both point and collection-based bounds
* For performance-critical workflows, use Collection Bounds mode when possible
* Combine multiple filters using Filter nodes to create complex inclusion rules
* When using "Is Inside or Intersects", points that are either fully inside OR intersecting will pass the test
