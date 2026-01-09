---
description: 'In editor :: PCGEx | Filter : Inclusion (Path/Splines)'
icon: circle-dashed
---

# Inclusion (Path/Splines)

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that checks points inclusion against path-like data (paths, splines, polygons).

### Overview

This filter factory determines whether points are inside or outside path-like geometric data such as paths, splines, or polygons. It's commonly used to select points that fall within specific boundaries or regions.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like **Point Filter**, **Point Spawner**, or **Point Transform**.
{% endhint %}

### How It Works

This filter evaluates each point against one or more input paths/splines. It checks if a point is inside or outside the defined shape, using geometric algorithms to determine inclusion. The result can be inverted for opposite behavior.

### Inputs and Outputs

#### Inputs

* **Filter**: Main filter input that connects to processing nodes
* **Paths/Splines**: Input collection of path-like data to test against
* **Points**: Points to evaluate for inclusion

#### Outputs

* **Filter**: Output that can be connected to downstream processing nodes

### Configuration

***

#### General

**Projection Details**

_Controls how 3D points are projected onto a 2D plane for inclusion testing._

Set the axis to use for projection (X, Y, Z) and whether to use the point's local space or world space. This is essential when working with 3D data that needs to be flattened for 2D inclusion tests.

**Sample Inputs**

_How many points from each input path to sample for inclusion testing._

* **All**: Test against all points in the path (most accurate but slower)
* **Closest**: Only test against the closest point on each path

**Check Type**

_What type of inclusion test to perform._

* **Is Inside**: Point must be inside the shape to pass
* **Is Outside**: Point must be outside the shape to pass
* **Is On Edge**: Point must be exactly on the edge to pass

**Pick**

_How to handle multiple paths when a point is tested against several._

* **Closest**: Only consider the closest path's result
* **All**: Require all paths to agree (AND logic)

**Tolerance**

_The distance within which a point is considered "on" a spline._

A value of 1 means any point within 1 unit of the spline will be treated as being on it. Increase this for more lenient matching.

**bSplineScalesTolerance**

_When enabled, scales tolerance based on spline thickness._

If enabled, tolerance becomes relative to the spline's actual length, making it more adaptive to different path sizes.

**Inclusion Offset**

_Adds an offset to the shape boundary for inclusion testing._

A positive value expands the shape, while a negative value shrinks it. Useful for creating buffer zones around paths.

**bUseMinInclusionCount**

_When enabled, requires a minimum number of paths to include a point._

If enabled, a point must be included by at least `MinInclusionCount` paths to pass the filter.

**MinInclusionCount**

_The minimum number of paths that must include a point for it to pass._

For example, if set to 2, a point must be inside at least 2 of the input paths to be accepted.

**bUseMaxInclusionCount**

_When enabled, requires a maximum number of paths to include a point._

If enabled, a point must be included by no more than `MaxInclusionCount` paths to pass the filter.

**MaxInclusionCount**

_The maximum number of paths that can include a point for it to pass._

For example, if set to 5, a point must be inside no more than 5 of the input paths to be accepted.

**bInvert**

_When enabled, inverts the result of the inclusion test._

If the filter normally passes points inside a shape, enabling this will make it pass points outside instead.

**Expand Z Axis**

_Controls how the Z-axis is expanded for 2D projection._

Set to -1 to use default behavior. Higher values expand the Z-dimension for better 2D projection accuracy.

**Winding Mutation**

_Enforces a specific winding order for polygon inclusion testing._

* **Unchanged**: Use original winding order
* **Clockwise**: Force all polygons to be clockwise
* **CounterClockwise**: Force all polygons to be counter-clockwise

**Fidelity**

_Number of points used to approximate the spline as a polygon._

Higher values create more accurate polygon approximations but take longer to compute. Default is 50.

**bCheckAgainstDataBounds**

_When enabled, uses collection bounds instead of individual points for testing._

Useful for performance when working with large collections where bounds are sufficient for inclusion testing.

**bIgnoreSelf**

_When enabled, prevents a collection from being tested against itself._

This avoids false positives when using a collection as both input and target in the same graph.
