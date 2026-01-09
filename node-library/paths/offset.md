---
description: 'In editor :: PCGEx | Path : Offset'
icon: circle
---

# Offset

See : [clipper2-offset.md](clipper2/clipper2-offset.md "mention")

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Offset paths points along their normal or custom direction.

### Overview

This node offsets the points of input paths by a specified distance, moving them perpendicular to the path's direction. It's useful for creating outlines, expanding shapes, or generating parallel paths. The offset can be applied using either the path's natural normal vector or a custom direction vector you provide.

{% hint style="info" %}
The node supports both constant and attribute-based offset values, allowing for dynamic adjustments based on point properties.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Paths to offset (point data with path structure)
* **Filters** _(optional)_: Point filters to determine which points are affected by the offset

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Modified paths with offset points
* **Optional Outputs**:
  * Mutated points flagging (if enabled)
  * Flipped points flagging (if enabled)

</details>

### Properties Overview

Controls how the offset is applied and cleaned up.

***

#### Offset Settings

Controls the method and size of the offset.

**Offset Method**

_Controls whether to use a slide or line/plane method for calculating the offset direction._

* **Slide**: Offsets points along the path's normal, which is calculated from the point's position relative to its neighbors.
* **Line/Plane**: Uses a vector to define the plane on which to project the offset.

**Offset Input**

_Determines whether the offset size is constant or read from an attribute._

* When set to **Constant**, use the **Offset** value.
* When set to **Attribute**, fetch the offset size from the point's **Offset (Attr)** attribute.

**Offset (Attr)**

_The name of the attribute to read the offset size from when using Attribute input._

* Must be a numeric attribute on the input points
* The regular **Offset** parameter acts as a scale multiplier

**Offset**

_The base offset distance when using Constant input._

* Positive values move points outward
* Negative values move points inward
* Default is 1.0

**Apply Point Scale to Offset**

_When enabled, scales the offset by each point's scale._

* Useful for maintaining consistent visual spacing across different scales
* The scale factor is applied as a multiplier to the offset value

**Direction Type**

_Determines whether to use a constant or attribute-based direction vector._

* When set to **Constant**, use the **Direction** value.
* When set to **Attribute**, fetch the direction from the point's **Direction (Attr)** attribute.

**Direction (Attr)**

_The name of the attribute to read the offset direction from when using Attribute input._

* Must be a vector attribute on the input points
* The direction is used as the axis along which to offset the points

**Direction**

_The direction vector used for offsetting when using Constant input with Slide method._

* **Normal**: Uses the path's default normal vector
* **Binormal**: Uses the path's binormal vector (perpendicular to normal)
* **Average Normal**: Uses an averaged normal from adjacent segments

**Invert Direction**

_When enabled, reverses the direction of the offset._

* Can be used instead of negative offset values for consistent behavior
* Useful when you want to ensure the offset always goes in a specific direction regardless of sign

***

#### Adjustment Settings

Controls how tight angles are handled during offsetting.

**Adjustment**

_How to adjust the path points at tight angles._

* **Raw**: No adjustment is made at tight angles.
* **Custom Smooth**: Apply custom smoothing based on the **Adjustment Scale** value.
* **Auto Smooth**: Automatically smooth tight angles using a calculated factor.
* **Mitre**: Use mitre joins, which extend lines to meet at a point.

**Adjustment Scale**

_Controls the intensity of the custom smoothing when using Custom Smooth._

* Positive values create more pronounced curves
* Negative values create sharper turns
* Default is -0.5

**Mitre Limit**

_Maximum length of mitre joins when using Mitre adjustment._

* Controls how far the offset lines extend before being clipped
* Higher values result in longer mitre extensions
* Default is 4.0

***

#### Cleanup Settings

Controls post-processing to handle self-intersections and flipped segments.

**Cleanup Mode**

_How to clean up paths after offsetting._

* **None**: No cleanup is performed.
* **Collapse Flipped Segments**: Remove segments that have been flipped during offsetting.
* **Collapse Sections (Flipped)**: Remove sections of the path that self-intersect if they contain flipped segments.
* **Collapse Sections**: Remove sections of the path that are between self-intersections.

**Intersection Tolerance**

_Tolerance used to determine if two segments overlap during cleanup._

* Affects how aggressively overlapping segments are collapsed
* Higher values mean more lenient overlap detection
* Default is 1.0

**Flag Mutated Points**

_When enabled, marks points that were modified during the offset process._

* Useful for debugging or visualizing which points were adjusted
* Creates a boolean attribute named in **Mutated Attribute Name**

**Mutated Attribute Name**

_Name of the boolean attribute used to flag mutated points._

* Only visible when **Flag Mutated Points** is enabled
* Default is "IsMutated"

**Flag Flipped Points**

_When enabled, marks points that were flipped during offsetting._

* Useful for identifying problematic areas in paths
* Creates a boolean attribute named in **Flipped Attribute Name**

**Flipped Attribute Name**

_Name of the boolean attribute used to flag flipped points._

* Only visible when **Flag Flipped Points** is enabled
* Default is "IsFlipped"

### Notes

* The offset operation can introduce self-intersections or flipped segments, especially with tight angles. Use cleanup modes to address these issues.
* For best results with complex paths, consider using the **Collapse Sections** cleanup mode.
* Attribute-based offsets allow for dynamic path behaviors, such as varying offset distances based on point properties like color or height.
* The **Slide** method is generally recommended for smooth, natural-looking offsets, while **Line/Plane** is useful when you need precise control over the offset plane.
