---
description: 'In editor :: PCGEx | Flat Projection'
icon: circle
---

# Flat Projection

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Project points from their position in space to the XY plane.

### Overview

This node projects points onto a 2D plane, typically the XY plane, which is useful for flattening 3D geometry into 2D space. It can be used to create flat layouts, simplify complex geometries, or prepare data for 2D operations like mesh generation or UI layout.

{% hint style="info" %}
The projection operation modifies point positions and optionally stores the original transform information for later restoration.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Default Input** (Points): Points to be projected onto a 2D plane.

</details>

<details>

<summary>Outputs</summary>

* **Default Output** (Points): Projected points with updated positions.
* **Optional Outputs**: If enabled, additional outputs for storing original transforms or applying inverse projections.

</details>

### Properties Overview

Controls how the projection is performed and whether to store or restore transform data.

***

#### Projection Settings

Controls how points are projected onto the 2D plane.

**Restore Previous Projection**

_When enabled, this node will attempt to restore the original point positions using previously stored transform data._

* If disabled, the node performs a new projection.
* This is useful when you want to reverse a previous flat projection.

**Attribute Prefix**

_Name of the attribute prefix used for storing and retrieving transform data._

* Default is "FlatProjection".
* Used to name attributes like `FlatProjection_Transform` if saving data or `FlatProjection_Transform` if restoring.

**Save Attribute For Restore**

_When enabled, the node stores the original point transform in an attribute for later restoration._

* Only active when "Restore Previous Projection" is disabled.
* Allows you to reverse the projection later using another instance of this node.

**Align Local Transform**

_When enabled, aligns the local transform of points with the projection plane._

* Useful for maintaining orientation relative to the 2D plane after projection.

**Projection Method**

_Selects how the projection plane is determined._

* **Normal**: Uses a fixed normal vector to define the projection plane.
* **Best Fit**: Computes the best-fit plane based on point distribution.

**Projection Normal**

_Vector defining the direction of the projection plane._

* Only used when "Projection Method" is set to "Normal".
* Defaults to Up vector (0, 0, 1) for XY plane projection.

**Local Projection Normal**

_When enabled, uses a local attribute to determine the normal vector for each point._

* Requires a valid attribute name in "Local Attribute Name".
* Overrides the fixed "Projection Normal" when enabled.

**Local Attribute Name**

_Name of the attribute containing the normal vector for each point._

* Only used when "Local Projection Normal" is enabled.
* Should contain a vector-type attribute with normalized values.

***

#### Transform Components

Controls which components of the stored transform are applied during restoration.

**Position Components**

_Which position components from the stored transform should be applied to the point._

* Bitmask selection for X, Y, Z components.
* Only active when "Restore Previous Projection" is enabled.

**Rotation Components**

_Which rotation components from the stored transform should be applied to the point._

* Bitmask selection for Pitch, Yaw, Roll components.
* Only active when "Restore Previous Projection" is enabled.

**Scale Components**

_Which scale components from the stored transform should be applied to the point._

* Bitmask selection for X, Y, Z components.
* Only active when "Restore Previous Projection" is enabled.
