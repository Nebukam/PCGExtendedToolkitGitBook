---
description: 'In editor :: PCGEx | Transform Points'
icon: circle
---

# Transform Points

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Apply position, rotation, and scale transformations with per-point variation support.

### Overview

This node allows you to transform points by applying random variations to their position, rotation, and scale. It's useful for creating procedural variation in point-based assets like foliage, particles, or instanced meshes. You can control how much variation is applied to each transformation component and whether the final result should be snapped to specific increments.

{% hint style="info" %}
The node supports attribute overrides for all transformation parameters, allowing you to vary transformations based on input data.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Points): Points to transform
* **Filters** (Optional): Point filters to apply before transforming

</details>

<details>

<summary>Outputs</summary>

* **Main Output** (Points): Transformed points with updated positions, rotations, and scales

</details>

### Properties Overview

This node allows you to control position, rotation, and scale transformations with optional variation and snapping.

***

#### Position

Controls how the point positions are transformed.

**Offset Min**

_The minimum offset applied to each point's position._

* When using an attribute, the value is read from the input points
* Values are added to the original position

**Offset Max**

_The maximum offset applied to each point's position._

* When using an attribute, the value is read from the input points
* Values are added to the original position

**Scaling**

_Scales both Offset Min and Offset Max by this factor._

* Applied after min/max values are determined
* Useful for adjusting the overall magnitude of variation

**Snap Position**

_Controls how variation values are snapped to specific increments._

**Values**:

* **No Snapping**: Variation values are applied as-is
* **Snap Offset**: The variation value is snapped before being added to the position
* **Snap Result**: The final result is snapped to the specified increment

**Offset Step**

_The increment to snap to when snapping is enabled._

* Only visible when Snap Position is not "No Snapping"
* Used for both offset and scale snapping

**Absolute Offset**

_When enabled, offsets are applied relative to world space instead of local space._

* Useful for applying global offsets that don't depend on point orientation

***

#### Rotation

Controls how the point rotations are transformed.

**Reset Rotation**

_When enabled, all rotation is reset to zero before applying variation._

* Ensures consistent starting point for random rotation

**Rotation Min**

_The minimum rotation applied to each point._

* When using an attribute, the value is read from the input points
* Values are added to the original rotation

**Rotation Max**

_The maximum rotation applied to each point._

* When using an attribute, the value is read from the input points
* Values are added to the original rotation

**Scaling**

_Scales both Rotation Min and Rotation Max by this factor._

* Applied after min/max values are determined
* Useful for adjusting the overall magnitude of rotation variation

**Snap Rotation**

_Controls how rotation variation values are snapped to specific increments._

**Values**:

* **No Snapping**: Variation values are applied as-is
* **Snap Offset**: The variation value is snapped before being added to the rotation
* **Snap Result**: The final result is snapped to the specified increment

**Rotation Step**

_The increment to snap to when snapping is enabled._

* Only visible when Snap Rotation is not "No Snapping"
* Used for both offset and rotation snapping

**Absolute Rotation**

_Controls which components of rotation are applied absolutely._

* **Pitch**: Apply pitch rotation absolutely (world space)
* **Yaw**: Apply yaw rotation absolutely (world space)
* **Roll**: Apply roll rotation absolutely (world space)

***

#### Scale

Controls how the point scales are transformed.

**Reset Scale**

_When enabled, all scale is reset to 1 before applying variation._

* Ensures consistent starting point for random scaling

**Scale Min**

_The minimum scale applied to each point._

* When using an attribute, the value is read from the input points
* Values are multiplied with the original scale

**Scale Max**

_The maximum scale applied to each point._

* When using an attribute, the value is read from the input points
* Values are multiplied with the original scale

**Scaling**

_Scales both Scale Min and Scale Max by this factor._

* Applied after min/max values are determined
* Useful for adjusting the overall magnitude of scale variation

**Uniform Scale**

_When enabled, all three axes are scaled uniformly._

* Ensures that X, Y, and Z scales remain equal
* Applies to both min and max scale values

**Snap Scale**

_Controls how scale variation values are snapped to specific increments._

**Values**:

* **No Snapping**: Variation values are applied as-is
* **Snap Offset**: The variation value is snapped before being multiplied with the scale
* **Snap Result**: The final result is snapped to the specified increment

***

#### Extras

Additional options for controlling the transformation behavior.

**Apply Scale To Bounds**

_When enabled, applies the scale transformation to the point bounds._

* Useful when working with bounds-based operations or collision detection

**Reset Point Center**

_When enabled, resets the point center to a specific location._

* Can be used to adjust how bounds are calculated after transformation

**Point Center Location**

_The relative location within the bounds to use as the new center._

* Only visible when Reset Point Center is enabled
* Values range from 0 (min) to 1 (max) for each axis
