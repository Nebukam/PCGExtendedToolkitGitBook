---
description: 'In editor :: PCGEx | Path : Bevel'
icon: circle
---

# Bevel

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Bevels path points to create smooth transitions or custom shapes at corners.

#### How It Works

The Path : Bevel node modifies path data by replacing sharp angles with smooth or shaped transitions. It analyzes each point in the path and determines whether it should be beveled based on filters. When a point is selected for beveling, the node calculates how far the bevel extends along the incoming and outgoing segments of the path.

It then constructs a profile shape (line, arc, or custom) at that corner using the specified width and profile type. The resulting points are added to the output path, replacing the original corner point. If subdivision is enabled, additional points are inserted along the bevel profile for smoother curves or more detailed shapes.

For paths with multiple beveled points, it applies limiting logic to prevent overlapping bevels. Bevels can also slide along the path to avoid conflicts, especially when using "Closest neighbor" or "Balanced" limit types.

When enabled, flags are written to indicate which points are bevel endpoints, start points, end points, or subdivision points for further processing or visualization.

#### Configuration

<details>

<summary><strong>Mode</strong><br><em>Type of Bevel operation.</em></summary>

Controls how the width value is interpreted when computing bevel distances.

* **Radius**: Width is treated as a radius to compute the distance along each segment.
* **Distance**: Width is used directly as a distance along each segment.

</details>

<details>

<summary><strong>Type</strong><br><em>Type of Bevel profile.</em></summary>

Defines the shape of the bevel at each corner.

* **Line**: Simple straight-line transition between segments.
* **Arc**: Curved arc profile for smooth transitions.
* **Custom**: Use a custom profile defined in a subnode.

</details>

<details>

<summary><strong>bKeepCornerPoint</strong><br><em>Whether to keep the corner point or not. If enabled, subdivision is ignored.</em></summary>

When enabled, the original corner point is retained and not replaced by the bevel shape. Subdivision settings are ignored in this case.

</details>

<details>

<summary><strong>MainAxisScaling</strong><br><em>Define how the custom profile will be scaled on the main axis.</em></summary>

Controls how the custom profile is stretched or shrunk along its primary direction.

* **Uniform**: Keep the original profile ratio.
* **Scale**: Scale the profile based on a factor relative to the bevel distance.
* **Distance**: Use a fixed distance relative to the bevelled point.

</details>

<details>

<summary><strong>CrossAxisScaling</strong><br><em>Define how the custom profile will be scaled on the cross axis.</em></summary>

Controls how the custom profile is stretched or shrunk along its secondary direction.

* **Uniform**: Keep the original profile ratio.
* **Scale**: Scale the profile based on a factor relative to the bevel distance.
* **Distance**: Use a fixed distance relative to the bevelled point.

</details>

<details>

<summary><strong>WidthMeasure</strong><br><em>Bevel width value interpretation.</em></summary>

Determines how the width value is interpreted (relative or absolute).

* **Relative**: Input value is normalized between 0..1, or used as a factor.
* **Discrete**: Raw value is used directly.

</details>

<details>

<summary><strong>WidthInput</strong><br><em>Bevel width source.</em></summary>

Controls whether the bevel width is constant or read from an attribute.

* **Constant**: Use a fixed value defined in WidthConstant.
* **Attribute**: Read the width from an input point attribute.

</details>

<details>

<summary><strong>WidthConstant</strong><br><em>Bevel width constant.</em></summary>

The fixed width value used when WidthInput is set to Constant. This value is interpreted based on WidthMeasure.

</details>

<details>

<summary><strong>Limit</strong><br><em>Bevel limit type.</em></summary>

Controls how bevels interact with each other to prevent overlap or conflict.

* **None**: Bevels are not limited.
* **ClosestNeighbor**: Bevels are limited by the position of the nearest non-beveled point.
* **Balanced**: Bevels balance against opposite bevel positions, falling back to closest neighbor if needed.

</details>

<details>

<summary><strong>bSlideAlongPath</strong><br><em>Whether to allow sliding along path.</em></summary>

When enabled, bevels can extend past non-beveled points, limited only by neighboring bevels or path endpoints. Bevel endpoints will traverse along the path geometry, and intermediate non-beveled points will be removed.

</details>

<details>

<summary><strong>bSubdivide</strong><br><em>Whether to subdivide the profile.</em></summary>

When enabled, additional points are inserted along the bevel profile for smoother curves or more detailed shapes.

</details>

<details>

<summary><strong>SubdivideMethod</strong><br><em>Subdivision method.</em></summary>

Controls how subdivision is calculated.

* **Distance**: Number of subdivisions depends on length.
* **Count**: Fixed number of subdivisions.
* **Manhattan**: Manhattan subdivision, number of subdivisions depends on spatial relationship between the points; will be in the \[0..2] range.

</details>

<details>

<summary><strong>SubdivisionAmountInput</strong><br><em>Whether to subdivide the profile.</em></summary>

Controls whether the subdivision count is constant or read from an attribute.

* **Constant**: Use a fixed value defined in SubdivisionCount or SubdivisionDistance.
* **Attribute**: Read the subdivision amount from an input point attribute.

</details>

<details>

<summary><strong>SubdivisionDistance</strong><br><em>Subdivisions (Distance).</em></summary>

The distance between subdivision points when SubdivideMethod is Distance and SubdivisionAmountInput is Constant.

</details>

<details>

<summary><strong>SubdivisionCount</strong><br><em>Subdivisions (Count).</em></summary>

The number of subdivisions to use when SubdivideMethod is Count and SubdivisionAmountInput is Constant.

</details>

<details>

<summary><strong>SubdivisionAmount</strong><br><em>Subdividions (Attr).</em></summary>

The attribute to read subdivision count from when SubdivisionAmountInput is Attribute.

</details>

<details>

<summary><strong>ManhattanDetails</strong><br><em>Manhattan.</em></summary>

Settings for Manhattan subdivision, such as minimum and maximum subdivision counts.

</details>

<details>

<summary><strong>bFlagPoles</strong><br><em>Whether to flag bevel poles.</em></summary>

When enabled, a boolean flag is written to indicate whether the point is a bevel endpoint (either start or end).

</details>

<details>

<summary><strong>PoleFlagName</strong><br><em>Name of the boolean flag to write whether the point is a Bevel endpoint or not.</em></summary>

The name of the attribute where the pole flag will be written.

</details>

<details>

<summary><strong>bFlagStartPoint</strong><br><em>Whether to flag start points.</em></summary>

When enabled, a boolean flag is written to indicate whether the point is a bevel start point.

</details>

<details>

<summary><strong>StartPointFlagName</strong><br><em>Name of the boolean flag to write whether the point is a Bevel start point or not.</em></summary>

The name of the attribute where the start point flag will be written.

</details>

<details>

<summary><strong>bFlagEndPoint</strong><br><em>Whether to flag end points.</em></summary>

When enabled, a boolean flag is written to indicate whether the point is a bevel end point.

</details>

<details>

<summary><strong>EndPointFlagName</strong><br><em>Name of the boolean flag to write whether the point is a Bevel end point or not.</em></summary>

The name of the attribute where the end point flag will be written.

</details>

<details>

<summary><strong>bFlagSubdivision</strong><br><em>Whether to flag subdivision points.</em></summary>

When enabled, a boolean flag is written to indicate whether the point is a subdivision point.

</details>

<details>

<summary><strong>SubdivisionFlagName</strong><br><em>Name of the boolean flag to write whether the point is a subdivision point or not.</em></summary>

The name of the attribute where the subdivision flag will be written.

</details>

#### Usage Example

1. Create a path using a Path : Generate node.
2. Add a Path : Bevel node to the graph.
3. Set **Type** to "Arc" and **WidthConstant** to 0.5.
4. Enable **bSubdivide** with **SubdivideMethod** set to Count and **SubdivisionCount** to 5.
5. Connect the path output to the Path : Bevel input.
6. The resulting path will have smooth arc-shaped bevels at each corner, with additional subdivision points for smoother curves.

#### Notes

* Beveling affects only points that pass the filters; other points remain unchanged.
* When using "Balanced" or "Closest neighbor" limits, overlapping bevels are resolved by adjusting their extent.
* Custom profiles must define a shape that can be scaled and applied to each corner.
* Subdivision settings have no effect when **bKeepCornerPoint** is enabled.
