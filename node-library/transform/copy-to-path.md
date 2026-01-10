---
description: 'In editor :: PCGEx | Copy to Path'
icon: circle
---

# Copy to Path

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Deform points along a path or spline.

#### Overview

This node takes input points and deforms them by aligning and positioning them along one or more paths or splines. It's useful for creating effects like objects following a route, distributing items on a curve, or morphing point clouds into spline-based shapes. The deformation can include scaling, rotation, and twisting based on the path's properties.

It allows you to define how points are mapped onto paths, including options to control axis alignment, scale preservation, and twist behavior. You can also choose which parts of the path to use for deformation with masking settings.

{% hint style="info" %}
Connects to **Input** (points), **Path Input** (for splines/paths), and optionally a **Data Matching Subnode**.
{% endhint %}

#### How It Works

This node processes each input point by sampling one or more paths. For each point, it calculates where along the path it should be positioned based on an alpha value (0 to 1) that corresponds to its location on the path. The position is then transformed using the path's tangent and normal vectors to orient the point correctly.

The node supports multiple deformation modes:

* **Main Axis**: Aligns the main axis of the point along the direction of the path.
* **Cross Axis**: Applies transformations perpendicular to the main axis, such as scaling or rotation.
* **Twist**: Rotates points around their main axis based on a twist amount that can vary along the path.
* **Bounds**: Adjusts how the point's bounds are considered when mapping it to the path.

The node supports both closed and open paths. For closed loops, you can choose whether to wrap the deformation or not. It also allows for custom spline point types and tangent handling to fine-tune the shape of the path.

#### Inputs

* **Points Input**: The points that will be deformed.
* **Path Input**: One or more paths/splines used as the deformation guides.
* **Data Matching Subnode (Optional)**: Defines how data is matched to targets for sampling.

#### Outputs

* **Points Output**: Deformed points aligned along the input paths.

#### Configuration

<details>

<summary><strong>DataMatching</strong><br><em>If enabled, allows you to filter out which targets get sampled by which data.</em></summary>

When enabled, this setting lets you define how input points are matched with path data. This is useful when you have multiple paths and want to control which points are affected by which path.

</details>

<details>

<summary><strong>TransformScale</strong><br><em>Which scale components from the sampled transform should be applied to the point.</em></summary>

Controls which components of the sampled transform (scale) are applied to the output points. You can choose to apply all, none, or specific axes.

</details>

<details>

<summary><strong>DefaultPointType</strong><br><em>Default spline point type.</em></summary>

Defines how the path's control points are interpreted. Options include Linear, Curve, Constant, and CurveClamped.

</details>

<details>

<summary><strong>bApplyCustomPointType</strong><br><em>Override the default point type with an attribute.</em></summary>

When enabled, allows you to override the default spline point type using a point attribute.

</details>

<details>

<summary><strong>PointTypeAttribute</strong><br><em>Name of the attribute used to define the point type.</em></summary>

The name of the attribute that defines the spline point type for each point when `bApplyCustomPointType` is enabled.

</details>

<details>

<summary><strong>Tangents</strong><br><em>Settings for tangent handling on the path.</em></summary>

Controls how tangents are calculated or read from attributes. This affects how smoothly the path curves and how points are oriented along it.

</details>

<details>

<summary><strong>BoundsSource</strong><br><em>Which bounds to use when sampling.</em></summary>

Defines whether the point's center, minimum, maximum, or other bounds are used for sampling along the path.

</details>

<details>

<summary><strong>MinBoundsOffset</strong><br><em>Offset applied to the minimum bounds.</em></summary>

Adjusts the minimum bounds of the point before sampling. Can be used to fine-tune how points are positioned.

</details>

<details>

<summary><strong>MaxBoundsOffset</strong><br><em>Offset applied to the maximum bounds.</em></summary>

Adjusts the maximum bounds of the point before sampling. Can be used to fine-tune how points are positioned.

</details>

<details>

<summary><strong>AxisOrder</strong><br><em>Axis transformation order. [Main Axis] > [Cross Axis] > [...]</em></summary>

Defines the order in which axes are transformed during deformation. For example, XYZ means main axis is applied first, then cross axis, etc.

</details>

<details>

<summary><strong>bPreserveOriginalInputScale</strong><br><em>When enabled, preserve the original scale of input points.</em></summary>

When enabled, the original scale of the input points is preserved during transformation.

</details>

<details>

<summary><strong>bPreserveAspectRatio</strong><br><em>When enabled, maintain aspect ratio during scaling.</em></summary>

When enabled, ensures that the point's scale maintains its original proportions when deforming along the path.

</details>

<details>

<summary><strong>FlattenAxis</strong><br><em>Which axis to flatten (set to zero).</em></summary>

Sets one of the axes to zero, effectively flattening the point along that axis.

</details>

<details>

<summary><strong>bWrapClosedLoops</strong><br><em>When enabled, wrap closed loops when mapping points.</em></summary>

When enabled, allows points to wrap around closed paths when mapping them along the path.

</details>

<details>

<summary><strong>MainAxisSettings</strong><br><em>Main axis is "along the spline".</em></summary>

Controls how the main axis of the point is aligned with the path direction. Includes settings for scaling and offset.

</details>

<details>

<summary><strong>bDoTwist</strong><br><em>When enabled, apply twist along the path.</em></summary>

When enabled, applies a rotational twist to points as they move along the path.

</details>

<details>

<summary><strong>TwistSettings</strong><br><em>Twist amount settings for the path.</em></summary>

Defines how much twist is applied along the path. Includes start and end values that can vary per point.

</details>

<details>

<summary><strong>TargetMaskSettings</strong><br><em>Used to shrink the scope per-target, to distribute points only on a subselection.</em></summary>

Allows you to define a range along the path where points are distributed. This is useful for applying deformation only to a section of the path.

</details>

#### Usage Example

You have a set of trees and want to place them along a winding river path. Use this node to deform each tree point so it follows the river's curve, with rotation aligned to the path direction and scale adjusted based on distance along the path.

#### Notes

* The node works best when input points are close to the paths in terms of spatial proximity.
* For closed loops, ensure that `bWrapClosedLoops` is enabled if you want seamless deformation.
* Use `TargetMaskSettings` to apply deformation only to a portion of a path for more nuanced control.
