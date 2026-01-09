---
description: 'In editor :: PCGEx | Copy to Path'
icon: circle
---

# Copy to Path

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Deform points along a path or spline.

### Overview

This node allows you to copy or deform point data along a spline or path. It's useful for creating effects like vines growing along a branch, particles following a trajectory, or objects being deformed along a curve. You can control how the points are distributed and transformed along the path, including scaling, rotation, and positioning.

{% hint style="info" %}
This node works by sampling transforms from the input paths/splines and applying them to the point data. The point's position, scale, and rotation will be modified based on where it is along the path.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Points** (Default Input): Point data to be deformed or copied along paths
* **Paths** (Optional): Spline or path data used as the deformation guides

</details>

<details>

<summary>Outputs</summary>

* **Points** (Default Output): Deformed or duplicated point data along the paths

</details>

### Properties Overview

Controls how points are sampled and transformed along the input paths.

***

#### General

Controls general settings for how the node processes data.

**Data Matching**

_Controls how to match input data with paths._

* When enabled, allows you to filter which paths are used to sample each point
* Useful when you have multiple paths and want to control which ones affect which points
* If disabled, all points will be processed using all available paths

***

#### Spline Settings

Controls how the spline or path is interpreted and sampled.

**Default Point Type**

_Specifies the default type of spline points._

* **Linear (0)**: Points are connected with straight lines
* **Curve (1)**: Points are connected with smooth curves
* **Constant (2)**: Points use constant interpolation
* **CurveClamped (3)**: Points use clamped curve interpolation

**Apply Custom Point Type**

_When enabled, allows you to override the point type per point using an attribute._

* If enabled, uses a custom attribute to determine how each point is interpolated along the path
* If disabled, uses the default point type specified above

**Point Type Attribute**

_Name of the attribute that defines the point type._

* Only used when "Apply Custom Point Type" is enabled
* Should contain values matching the spline point types

**Tangents**

_Configures how tangents are calculated for custom tangent points._

* Controls how curves are shaped at each point
* Only relevant when using custom point types or curve interpolation

***

#### Deform Settings

Controls how the point data is transformed along the path.

**Bounds Source**

_Specifies which bounds of the input points are used for deformation._

* **Scaled Bounds**: Use scaled bounds of the point
* **Density Bounds**: Use density-scaled bounds (includes steepness)
* **Bounds**: Use unscaled bounds
* **Center**: Use a tiny size 1 box centered on the point

**Min Bounds Offset**

_Offsets the minimum bounds used for deformation._

* Adjusts how much space is considered when sampling along the path
* Values are added to the point's minimum bounds

**Max Bounds Offset**

_Offsets the maximum bounds used for deformation._

* Adjusts how much space is considered when sampling along the path
* Values are added to the point's maximum bounds

**Axis Order**

_Specifies the order in which axes are processed._

* Controls how transformations are applied (e.g., X, Y, Z)
* Affects how scaling and rotation are calculated

**Transform Scale**

_Controls which components of the transform scale are applied._

* **X**: Apply X component of scale
* **Y**: Apply Y component of scale
* **Z**: Apply Z component of scale
* **All**: Apply all components of scale

**Preserve Original Input Scale**

_When enabled, preserves the original point scale during transformation._

* If disabled, the point's original scale is replaced by the path's sampled scale

**Preserve Aspect Ratio**

_When enabled, maintains the relative proportions of the point's scale._

* Ensures that scaling doesn't distort the shape of the point

**Flatten Axis**

_Specifies which axis to flatten the point along._

* **None**: No flattening
* **X**: Flatten along X axis
* **Y**: Flatten along Y axis
* **Z**: Flatten along Z axis

***

#### Main Axis Settings

Controls how points are positioned along the main axis of the path.

**Wrap Closed Loops**

_When enabled, allows points to wrap around closed paths._

* If disabled, points will not loop back on themselves when the path is closed

**Main Axis Settings**

_Configures how the main axis of the path is used for deformation._

* Controls how points are distributed along the length of the path
* Uses alpha values to determine position along the path

**Do Twist**

_When enabled, applies twisting rotation along the path._

* Rotates points around the path's direction as they move along it

**Twist Settings**

_Configures the twist transformation parameters._

* Controls how much and how the twist is applied along the path
* Uses alpha values to determine twist amount

**Target Mask Settings**

_Specifies a subselection of the path to use for deformation._

* Allows you to limit where along the path points are placed
* Useful for distributing points only on a portion of the path

### Notes

* This node can be used to create complex procedural effects by combining multiple paths and point data
* The "Data Matching" feature allows for fine-grained control over which paths affect which points
* When using closed loops, consider enabling "Wrap Closed Loops" to ensure proper distribution
* For best results with scaling, use consistent bounds across your input data
* You can create interesting effects by combining multiple Copy to Path nodes with different settings
