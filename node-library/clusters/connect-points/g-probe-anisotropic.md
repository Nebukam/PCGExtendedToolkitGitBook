---
icon: circle-dashed
---

# G-Probe : Anisotropic

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a directional connectivity probe that uses an ellipsoidal distance metric to define spatial relationships between points.

### Overview

This probe factory defines how connections are discovered in a graph by using an anisotropic (directional) distance metric. It's particularly useful for creating directional networks like roads, pipes, or flow structures where certain directions should be preferred over others.

{% hint style="info" %}
Connects to **Probe** pins on graph-building nodes such as "Connect Points" or "Build Graph"
{% endhint %}

### How It Works

Instead of measuring distance using a simple Euclidean metric (like a sphere), this probe uses an ellipsoidal shape that can be stretched along different axes. This allows you to define preferred connection directions by adjusting the scale factors along each axis.

The probe finds connections by looking at K nearest neighbors within this custom ellipsoidal space, rather than a uniform sphere around each point.

### Configuration

***

#### General

**Primary Axis**

_The preferred direction for connections._

When "Use Per-Point Normal" is disabled, this vector defines the primary axis of the ellipsoid. For example, setting this to Up Vector makes vertical connections more likely than horizontal ones.

**Secondary Axis**

_The cross direction for connections._

This vector defines a secondary axis perpendicular to the primary axis. Together with the primary axis, it helps define the orientation of the ellipsoidal probe.

**Primary Scale**

_Scale factor for the primary axis (higher = prefer connections along this axis)._

Controls how much the ellipsoid is stretched along the primary axis. A value of 2.0 means connections are twice as likely along this direction compared to perpendicular directions.

**Secondary Scale**

_Scale factor for the secondary axis._

Controls stretching along the secondary axis. Higher values make connections more likely in this direction.

**Tertiary Scale**

_Scale factor for the tertiary axis (computed as cross product)._

The third axis is automatically computed as the cross product of primary and secondary axes, then scaled accordingly.

**K**

_Number of nearest neighbors to consider._

This defines how many potential connection targets are evaluated when looking for candidates. A value of 5 means each point will look at its 5 closest neighbors in ellipsoidal space.

**Use Per-Point Normal**

_When enabled, uses the point's normal as the primary axis._

If enabled, this overrides the Primary Axis setting and instead uses the normal vector of each point to define the preferred connection direction. This is useful for creating connections that follow surface orientation (like roads following terrain slopes).

### Usage Example

Create a mesh with normals pointing in various directions, then use this probe with:

* Primary Axis = Up Vector
* Secondary Scale = 3.0
* K = 3

This setup will create connections that prefer vertical movement but still allow for wider horizontal spread, useful for generating network structures like tree branches or pipe systems.

### Notes

* The probe works globally across all points in the dataset
* Higher scale values make the ellipsoid more elongated along that axis
* When using "Use Per-Point Normal", ensure your input data has valid normal attributes
* This probe is computationally more expensive than standard probes due to the anisotropic distance calculation
* Combine with "Connect Points" or similar graph-building nodes for best results
