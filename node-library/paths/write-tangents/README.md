---
description: 'In editor :: PCGEx | Path : Write Tangents'
icon: circle
---

# Write Tangents

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Computes and writes tangent vectors to points along paths.

### Overview

This node calculates tangents for each point in a path and writes them as attributes. It's commonly used to define the direction of movement or orientation along curves, such as for vehicle paths, camera animations, or particle systems that follow a trajectory.

The node supports different tangent computation methods via instanced factories, allowing you to define custom behaviors for how tangents are calculated. You can also apply scaling factors to control the magnitude of the tangents, and override start and end points with specific tangent settings.

{% hint style="info" %}
Tangents are written as vector attributes named "ArriveTangent" and "LeaveTangent" by default. These can be renamed in the node's settings.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Default): Points that define paths
* **Point Filters** (Optional): Filter which points to process

</details>

<details>

<summary>Outputs</summary>

* **Main Output** (Default): Modified points with tangent attributes written

</details>

### Properties Overview

Controls how tangents are computed and written.

***

#### Tangent Settings

Defines the method used to compute tangents for each point in the path.

**Tangents Factory**

_The main tangent computation factory to use._

* Controls how tangents are calculated for points along the path
* Supports various algorithms like linear interpolation, Catmull-Rom splines, etc.
* Can be overridden per-point using Start and End overrides

**Values**:

* **Linear**: Simple linear interpolation between points
* **CatmullRom**: Smooth curve interpolation with tension control
* **Custom**: Use a custom tangent computation module

**Start Tangents Override**

_Override for the first point in each path._

* Applies specific tangent settings to the start of paths
* Useful for defining how paths begin, e.g., with a sharp turn or gradual entry
* Inherits from main Tangents factory when not set

**End Tangents Override**

_Override for the last point in each path._

* Applies specific tangent settings to the end of paths
* Useful for defining how paths terminate, e.g., with a smooth exit or abrupt stop
* Inherits from main Tangents factory when not set

***

#### Attribute Names

Controls the names of the output tangent attributes.

**Arrive Name**

_Name of the arrive tangent attribute._

* Sets the name of the attribute that stores incoming tangents
* Default is "ArriveTangent"
* Used for defining direction into a point from previous points

**Leave Name**

_Name of the leave tangent attribute._

* Sets the name of the attribute that stores outgoing tangents
* Default is "LeaveTangent"
* Used for defining direction out of a point to next points

***

#### Scaling

Controls how the magnitude of computed tangents is scaled.

**Arrive Scale Input**

_How to determine the arrive scale factor._

* **Constant**: Use a fixed scalar value
* **Attribute**: Read the scale from an existing attribute on input points

**Arrive Scale (Attribute)**

_The attribute to read arrive scale from._

* Only visible when "Arrive Scale Input" is set to "Attribute"
* Specifies which attribute contains the scaling factor for arrive tangents

**Arrive Scale (Constant)**

_The constant value to use for arrive scale._

* Only visible when "Arrive Scale Input" is set to "Constant"
* Multiplies the computed tangent vector by this scalar before writing

**Leave Scale Input**

_How to determine the leave scale factor._

* **Constant**: Use a fixed scalar value
* **Attribute**: Read the scale from an existing attribute on input points

**Leave Scale (Attribute)**

_The attribute to read leave scale from._

* Only visible when "Leave Scale Input" is set to "Attribute"
* Specifies which attribute contains the scaling factor for leave tangents

**Leave Scale (Constant)**

_The constant value to use for leave scale._

* Only visible when "Leave Scale Input" is set to "Constant"
* Multiplies the computed tangent vector by this scalar before writing

### Notes

* Tangent attributes are written as vectors, so they can define both direction and magnitude
* Use with path-based data like roads, paths, or trajectories
* Combine with other nodes like "Path : Sample" to create dynamic movement along paths
* The "ArriveTangent" is the tangent pointing into a point from previous points in the path
* The "LeaveTangent" is the tangent pointing out of a point toward next points in the path
* When using Catmull-Rom splines, consider setting the "Closed Loop" option if your paths form continuous loops
* Scaling can be used to adjust how sharp or gradual curves appear in visualizations or animations
