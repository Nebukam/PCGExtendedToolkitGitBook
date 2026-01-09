---
description: 'In editor :: PCGEx | Path : Shrink'
icon: circle
---

# Shrink

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Shrink path from its beginning and end.

### Overview

This node allows you to reduce the length of paths by removing points from their start and/or end. You can specify how many points or how much distance to remove, giving you precise control over path shortening. This is useful for creating shorter routes, trimming unnecessary segments, or adjusting path lengths for gameplay or visual purposes.

{% hint style="info" %}
This node modifies the input paths in place, removing points from the start and/or end depending on your settings.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Paths (point collections representing paths)
* **Point Filter** (optional): Filters to apply to the points in the path

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Modified paths with points removed from start and/or end

</details>

### Properties Overview

Controls how the node shrinks paths.

***

#### General Settings

Determines which ends of the path to shrink and how to interpret the shrink amount.

**Shrink Endpoint**

_Controls whether to shrink the start, end, or both ends of the path._

* Shrinks from the beginning, end, or both ends depending on your selection
* **Values**:
  * **Start and End**: Both start and end points are removed
  * **Start**: Only the first point is removed
  * **End**: Only the last point is removed

**Settings Mode**

_Controls whether the same shrink amount applies to both ends or different amounts._

* When set to **Shared**, both ends use the primary value
* When set to **Separate**, start uses the primary value, and end uses the secondary value
* Only visible when shrinking both endpoints

**Shrink Mode**

_Selects whether to shrink by point count or distance._

* **Distance**: Removes points based on a physical distance from the path start/end
* **Count**: Removes a specific number of points from each end

***

#### Distance Settings

Controls how distance-based shrinking is applied.

**Primary Distance Details**

_Configures the amount of distance to remove from the selected endpoints._

* When **Distance** mode is selected, this defines how much distance to remove
* Can be set as a constant value or read from an attribute on input points
* **Cut Type**: Determines how the cut point is calculated when shrinking by distance
  * **New Point**: Creates a new point at the exact shrink distance
  * **Previous (Ceil)**: Uses the previous point, rounding up to ensure full distance removal
  * **Next (Floor)**: Uses the next point, rounding down to ensure full distance removal
  * **Closest (Round)**: Uses the closest point, rounding to nearest

**Secondary Distance Details**

_Configures the amount of distance to remove from the opposite endpoint when using separate settings._

* Only visible when both endpoints are shrunk and settings mode is set to **Separate**
* Same as primary but for the second endpoint

***

#### Count Settings

Controls how count-based shrinking is applied.

**Primary Count Details**

_Configures the number of points to remove from the selected endpoints._

* When **Count** mode is selected, this defines how many points to remove
* Can be set as a constant value or read from an attribute on input points
* Minimum value is 1

**Secondary Count Details**

_Configures the number of points to remove from the opposite endpoint when using separate settings._

* Only visible when both endpoints are shrunk and settings mode is set to **Separate**
* Same as primary but for the second endpoint

***

#### Metadata Preservation

Controls whether to preserve metadata from original points.

**Preserve First Metadata**

_When enabled, the point removed from the start inherits metadata from the original first point._

* Useful when you want to maintain properties like height, color, or other attributes from the original path start

**Preserve Last Metadata**

_When enabled, the point removed from the end inherits metadata from the original last point._

* Useful when you want to maintain properties like height, color, or other attributes from the original path end

***

#### Warnings and Errors

Controls how warnings are handled.

**Quiet Closed Loop Warning**

_When enabled, suppresses warnings about closed loops._

* Prevents warning messages if paths are closed loops (start and end points are the same)

### Notes

* This node works on point collections that represent paths.
* When using **Distance** mode, the actual distance is calculated along the path, not as straight-line distance.
* If you're using **Count** mode with a large number of points, ensure it doesn't reduce the path to fewer than 2 points.
* For closed loops, consider enabling **Quiet Closed Loop Warning** if you expect this behavior and don't want noisy warnings.
* You can use attributes to dynamically control how much to shrink paths based on point properties.
