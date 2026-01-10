---
icon: circle
---

# Points to Bounds

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Merge points group to a single point representing their bounds.

#### How It Works

This node calculates the spatial boundaries of a collection of points in 3D space. It determines the minimum and maximum coordinates along each axis, forming a box that fully contains all input points. The result is a single representative point that defines this bounding volume.

If enabled, it also computes additional properties like density, color, steepness, or best-fit plane based on the point data. The output behavior depends on how you configure the node:

* In **Collapse** mode, all input points are replaced by one point with computed bounds and blended attributes.
* In **Write Data** mode, the original points remain unchanged, and the computed bounds are added as new data to each point.

When blending is enabled, properties from all input points are combined using rules defined in the blending settings. This allows for smooth transitions or averages across the group. The node supports writing various metadata such as transform, bounds min/max, density, color, steepness, and best-fit plane to custom attribute names.

#### Configuration

<details>

<summary><strong>Output Mode</strong><br><em>How to reduce data.</em></summary>

Controls whether to collapse all input points into a single point or write bounds data without modifying the original point set.

**Values**:

* **Collapse**: Collapse point set to a single point with the blended properties of the whole.
* **Write Data**: Leave points unaffected and write the results to the data domain instead.

</details>

<details>

<summary><strong>Bounds Source</strong><br><em>Overlap overlap test mode.</em></summary>

Determines how bounds are calculated from the input points. Options include scaled bounds, density bounds (scaled + steepness), regular bounds, or a center point with tiny size.

**Values**:

* **Scaled Bounds**: Uses scaled bounds of the point set.
* **Density Bounds**: Includes density and steepness in the bounds calculation.
* **Bounds**: Unscaled bounds.
* **Center**: Treats all points as being at the same location with a tiny size.

</details>

<details>

<summary><strong>Blend Properties</strong><br><em>Bound point is the result of its contents.</em></summary>

When enabled, properties from input points are blended together to form the output point's attributes. This allows for smooth transitions or averages across the group.

</details>

<details>

<summary><strong>Blending Settings</strong><br><em>Defines how fused point properties and attributes are merged into the final point.</em></summary>

Configures how individual point properties (like position, rotation, scale) and metadata are combined when blending. Options include average, weighted sum, lerp, min, max, and more.

</details>

<details>

<summary><strong>Output Oriented Bounding Box</strong><br><em>Output Object Oriented Bounds.</em></summary>

When enabled, computes an oriented bounding box aligned with the principal axes of the point set, rather than axis-aligned bounds. This can provide tighter fits for rotated or skewed data.

</details>

<details>

<summary><strong>Data Details</strong><br><em>Which data to write.</em></summary>

Controls which additional attributes are written to the output point(s). Each toggle enables writing a specific type of bound-related data, such as transform, bounds min/max, density, color, steepness, or best-fit plane.

</details>

<details>

<summary><strong>Write Points Count</strong><br><em>Write point counts.</em></summary>

When enabled, writes the total number of input points into a specified attribute on the output point(s).

</details>

#### Usage Example

Use this node to create a single representative point from a cluster of points, such as generating a spawn point for an object based on where its constituent parts are located. For instance, if you have a group of scattered trees, you could use Points to Bounds to generate one central point that represents the area they occupy, which can then be used to place a larger structure like a cabin or clearing.

#### Notes

* The **Collapse** mode is ideal for summarizing large point clouds into manageable single points.
* The **Write Data** mode preserves original data while enriching it with computed bounds information.
* Blending settings allow fine-tuning of how input properties are merged, useful for creating smooth transitions between point groups.
* Best-fit plane computation can be used to determine the dominant orientation of a point set, which is helpful in terrain or structure alignment tasks.
