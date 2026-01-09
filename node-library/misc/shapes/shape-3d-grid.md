---
icon: circle-dashed
---

# Shape : 3D Grid

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Create points in a 3D grid shape.

### Overview

This node generates a 3D grid of points based on a seed point, allowing you to create structured layouts for procedural content. It's useful for placing objects in regular patterns, such as building foundations, terrain features, or organizing assets in space.

The grid can be configured with different resolution modes and clamping options to control how many points are generated along each axis. You can also adjust the extents of the grid to fit your desired size.

{% hint style="info" %}
Each seed point defines one grid. If you have multiple seed points, this node will create a separate grid for each one.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Seed Points**: The input points that define the origin and transform of each grid.

</details>

<details>

<summary>Outputs</summary>

* **Output Points**: The generated 3D grid points, positioned relative to the seed point.
* **Shape Builder** (optional): A shape builder for further processing with other shape nodes.

</details>

### Properties Overview

Controls how the 3D grid is generated and distributed.

***

#### General Settings

Controls core behavior of the grid generation.

**Resolution Mode**

_Controls whether the resolution is defined by a fixed count or by distance._

* When set to **Distance**, points are spaced evenly based on the resolution value.
* When set to **Count**, the resolution defines how many points to place along each axis.

**Values**:

* **Distance**: Points-per-meter
* **Count**: Fixed number of points

**Resolution Input Type**

_Controls whether the resolution is a constant or derived from an attribute._

* When set to **Constant**, use the constant value.
* When set to **Attribute**, use the value from the selected attribute.

**Values**:

* **Constant**: Use a fixed numeric value
* **Attribute**: Use a point attribute

**Resolution (Constant)**

_The spacing between points when using Distance mode, or the number of points along each axis when using Count mode._

* In Distance mode, this is the distance in world units between points.
* In Count mode, this is the number of points along each axis.

**Resolution (Attribute)**

_The attribute to use for resolution when using Attribute input type._

* This attribute must be a scalar value.
* The value will be used as the resolution for each seed point.

**Adjust Fit**

_Adjusts the grid extents so they fill the selected axis._

* When enabled, the grid will stretch to fit the selected axis.
* Use the bitmask to select which axes should be adjusted:
  * Bit 0 (1): X-axis
  * Bit 1 (2): Y-axis
  * Bit 2 (4): Z-axis

**Truncate X / Y / Z**

_Rounds the number of points along each axis._

* When using Distance mode, this controls how to round the calculated point count.
* Can be used to ensure a specific number of points.

**Values**:

* **None**: No rounding applied
* **Round**: Round to nearest integer
* **Ceil**: Round up to next integer
* **Floor**: Round down to previous integer

**Clamp Count X / Y / Z**

_Limits the minimum and maximum number of points along each axis._

* Applies clamping to the calculated point count after truncation.
* Useful for preventing too few or too many points.

#### Extents Settings

Controls how large the grid is in world space.

**Extents**

_The total size of the grid in world units._

* Defines the width, depth, and height of the grid.
* The grid will be centered around the seed point.

**Offset**

_Adjusts the position of the grid relative to the seed point._

* Moves the entire grid by this offset vector.
* Useful for aligning grids with other elements or creating offsets.
