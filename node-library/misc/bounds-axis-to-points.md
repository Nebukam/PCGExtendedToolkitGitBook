---
description: 'In editor :: PCGEx | Bounds Axis To Points'
icon: circle
---

# Bounds Axis To Points

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Generate a two-point from a bound axis.

### Overview

This node creates two points along a selected axis of each input point's bounds. It's useful for visualizing or working with the dimensions of objects, such as creating axis-aligned bounding boxes, generating alignment guides, or extracting dimension data for further processing.

The node allows you to select which axis (shortest, longest, or median) to use and apply constraints based on direction or size to refine the selection. You can then control where these points are placed along that axis and set their properties like extent and scale.

{% hint style="info" %}
This node works with point data that has bounds information, such as from mesh instances or other spatial data sources.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Point data with bounds (scaled, density, or regular bounds)
* **Optional Filters**: Point filters can be applied to limit which points are processed

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Generated two-point pairs per input point
* **Per-Point Data** (when enabled): Additional output with per-point data, such as axis information or extent values

</details>

### Properties Overview

Controls how the axis is selected and where the points are generated.

***

#### Axis Selection

Controls which axis of the bounds is used for generating the two points.

**Bounds Reference**

_The type of bounds to use when calculating axes._

* Uses either scaled, density, regular, or center bounds
* Scaled bounds are typically used for better representation of object dimensions

**Values**:

* **Scaled Bounds**: Use scaled bounds (default)
* **Density Bounds**: Use density-scaled bounds
* **Bounds**: Use raw bounds
* **Center**: Use a tiny size 1 box centered on the point

**Priority**

_Which axis to prioritize when selecting from the three axes._

* Selects the shortest, longest, or median axis based on length
* Useful for focusing on specific dimensions (e.g., height vs. width)

**Values**:

* **Shortest**: Use the shortest axis
* **Longest**: Use the longest axis
* **Median**: Use the middle-length axis

**Direction Constraint**

_Whether to prefer or avoid a specific direction when selecting the axis._

* Helps align the generated points with a desired orientation
* Useful for ensuring axes point toward or away from a reference point

**Values**:

* **None**: No directional constraint
* **Avoid**: Avoid selecting an axis that points toward the specified direction
* **Favor**: Prefer selecting an axis that points toward the specified direction

**Direction**

_The reference direction used when applying the Direction Constraint._

* Only used when Direction Constraint is set to Avoid or Favor
* Affects which axis is selected based on its alignment with this vector

**Size Constraint**

_Whether to prefer axes that are greater or smaller than a threshold size._

* Helps filter out very small or large dimensions
* Useful for ignoring noise or focusing on dominant features

**Values**:

* **None**: No size constraint
* **Greater**: Prefer axes larger than the threshold
* **Smaller**: Prefer axes smaller than the threshold

**Size Threshold**

_The minimum or maximum axis length to consider when applying Size Constraint._

* Only used when Size Constraint is set to Greater or Smaller
* Affects which axis is selected based on its size relative to this value

**Constraints Order**

_Determines the priority of Direction and Size constraints when both are active._

* Controls whether direction or size takes precedence in axis selection
* Useful for fine-tuning how constraints interact

**Values**:

* **Size matters more**: Size constraint overrides direction
* **Direction matters more**: Direction constraint overrides size

***

#### Point Placement

Controls where along the selected axis the two points are placed.

**U**

_Position of the first point along the selected axis._

* Value is a multiplier for the axis extent (e.g., 1.0 = full extent, 0.5 = half extent)
* Controls how far along the axis the first point is positioned

**Set Extents**

_Whether to set the output points' extents._

* When enabled, sets the extent of each generated point

**Extents**

_The extent value applied to the output points when enabled._

* Affects the size of the generated points in world space
* Default is 0.5 for both points

**Set Scale**

_Whether to set the output points' scale._

* When enabled, sets the scale of each generated point

**Scale**

_The scale value applied to the output points when enabled._

* Affects how large or small the generated points appear
* Default is 1.0 for both points

***

#### Output Options

Controls how the results are structured and what data is included.

**Generate Per Point Data**

_Whether to generate a separate output with per-point data._

* When enabled, creates additional data containing information about the selected axis and constraints applied
* Useful for debugging or further processing of axis selection logic

**Point Attributes To Output Tags**

_Which point attributes to copy to tags in the per-point output._

* Allows you to preserve specific attribute values in the generated output
* Only used when Generate Per Point Data is enabled
