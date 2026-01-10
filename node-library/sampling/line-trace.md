---
description: 'In editor :: PCGEx | Sample : Line Trace'
icon: circle
---

# Line Trace

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Find the collision point on the nearest collidable surface in a given direction.

#### How It Works

This node casts rays from input points to detect intersections with surfaces in the level. For each point, it calculates where a ray would hit based on an origin and direction vector. The ray's maximum distance can be set as a fixed value or read from an attribute. If the ray hits something, it records information like position, surface normal, and distance. You can choose to apply this data directly to the point's location or rotation, or write it to attributes for further use.

The node supports different modes for determining which surfaces to test against, such as all collidable objects or specific actors referenced by an attribute. It also allows you to define how the ray's direction is inverted and how the rotation of the point should be calculated based on the surface hit.

#### Configuration

<details>

<summary><strong>Surface Source</strong><br><em>Controls which surfaces are tested during the raycast.</em></summary>

* **Any surface**: Tests against all collidable surfaces in the level
* **Actor Reference**: Only tests against surfaces belonging to actors referenced by a point attribute

</details>

<details>

<summary><strong>Actor Reference</strong><br><em>Name of the attribute that contains a path to an actor in the level, usually from a GetActorData PCG Node in point mode.</em></summary>

Attribute name used when `SurfaceSource` is set to "Actor Reference". This attribute should contain paths to actors in the level.

</details>

<details>

<summary><strong>Origin</strong><br><em>The origin of the trace</em></summary>

Attribute selector for the starting point of the raycast. This can be a fixed value or an attribute on the input points.

</details>

<details>

<summary><strong>Direction</strong><br><em>The direction to use for the trace</em></summary>

Attribute selector for the direction vector of the raycast. This can be a fixed value or an attribute on the input points.

</details>

<details>

<summary><strong>Invert Direction</strong><br><em>Whether to invert the direction vector before performing the trace.</em></summary>

When enabled, the direction vector is reversed before performing the trace.

</details>

<details>

<summary><strong>Distance Input</strong><br><em>This UV Channel will be selected when retrieving UV Coordinates from a raycast query.</em></summary>

Controls how the maximum distance of the trace is determined:

* **Direction Length**: Uses the length of the direction vector as the max distance
* **Constant**: Uses a fixed value defined by Max Distance
* **Attribute**: Reads the max distance from an attribute on each point

</details>

<details>

<summary><strong>Max Distance</strong><br><em>Trace max distance</em></summary>

Maximum distance for the raycast when `DistanceInput` is set to "Constant".

</details>

<details>

<summary><strong>Local Max Distance</strong><br><em>Attribute or property to read the local size from.</em></summary>

Attribute used to determine the maximum trace distance when `DistanceInput` is set to "Attribute". The value of this attribute is used as the max distance for each point.

</details>

<details>

<summary><strong>Apply Sampling</strong><br><em>Whether and how to apply sampled result directly (not mutually exclusive with output)</em></summary>

Controls whether and how the sampled results are applied directly to the points' transforms. This can be used to position or orient points based on the raycast hit.

</details>

<details>

<summary><strong>Rotation Construction</strong><br><em>How hit transform rotation should be constructed. First value used is the impact normal.</em></summary>

Defines how the rotation of the point is calculated from the raycast hit:

* **X**: Use X axis as forward direction
* **XY**: Use X axis as forward, Y axis as right
* **XZ**: Use X axis as forward, Z axis as up
* **Y**: Use Y axis as forward direction
* **YX**: Use Y axis as forward, X axis as right
* **YZ**: Use Y axis as forward, Z axis as up
* **Z**: Use Z axis as forward direction
* **ZX**: Use Z axis as forward, X axis as right
* **ZY**: Use Z axis as forward, Y axis as right

</details>

<details>

<summary><strong>Cross Axis</strong><br><em>Second value used for constructing rotation</em></summary>

Defines the second axis used to construct the point's rotation when `RotationConstruction` is set to a cross-axis option (e.g., XY, XZ, etc.).

</details>

<details>

<summary><strong>Process Filtered Out As Fails</strong><br><em>If enabled, mark filtered out points as "failed". Otherwise, skip the processing altogether. Only uncheck this if you want to ensure existing attribute values are preserved.</em></summary>

When enabled, points that are filtered out by point filters are marked as failed instead of being skipped entirely.

</details>

<details>

<summary><strong>Prune Failed Samples</strong><br><em>If enabled, points that failed to sample anything will be pruned.</em></summary>

When enabled, points that fail to find a valid surface hit during the raycast are removed from the output.

</details>

#### Usage Example

You want to place trees on terrain by casting rays downward from each point to find ground level. Set:

* **Surface Source** to "Any surface"
* **Origin** to a vector attribute like `TreeHeight` (point's Y offset)
* **Direction** to `(0, 0, -1)` for downward ray
* **Max Distance** to `1000`
* Enable **bWriteLocation**, **bWriteNormal**, and **bWriteDistance**
* Set output attributes to `GroundLocation`, `GroundNormal`, and `HeightFromGround`

This will place each point at the surface it hits, with normal and distance information available for further processing.

#### Notes

* The node supports both simple and complex raycasting modes, depending on your collision settings.
* UV coordinates are only available in complex traces if "Project Settings->Physics->Support UV From Hit Results" is enabled.
* Texture parameters can be extracted from materials when `bExtractTextureParameters` is enabled.
* If you're using actor references, ensure that the referenced actors have valid collision shapes.
