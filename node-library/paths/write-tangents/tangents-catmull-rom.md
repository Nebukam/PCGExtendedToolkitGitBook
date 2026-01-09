---
icon: sliders
---

# Tangents : Catmull-Rom

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates tangents for points along a path using the Catmull-Rom spline interpolation method.

### Overview

This factory generates smooth, natural-looking tangent vectors that define the direction and curvature of points along a path. It's commonly used in procedural animation, path following, and curve-based effects where you want smooth transitions between waypoints.

{% hint style="info" %}
Connects to **Tangent** input pins on nodes like **Write Tangents**, **Path Follow**, or **Spline Mesh**
{% endhint %}

### How It Works

The Catmull-Rom method calculates tangents by taking the vector between the previous and next points in a sequence, then scaling it to create smooth curves. For each point, it computes both an arriving tangent (how the path approaches the point) and a leaving tangent (how the path continues from the point). The result is a smooth curve that passes through all control points.

### Inputs

* **Points**: Input points to generate tangents for
* **Closed Loop**: Enable to treat first and last points as adjacent for continuous looping

### Outputs

* **Tangents**: Generated tangent vectors for each input point

### Configuration

***

#### General Settings

**Closed Loop**

_When enabled, the first and last points are treated as adjacent to create a continuous loop._

This setting affects how tangents are calculated at the start and end of the path. When disabled (default), the first point uses the second and third points to calculate its tangent, and the last point uses the second-to-last and second points.

### Usage Example

Use this factory when you want to create smooth paths for vehicles, characters, or effects that follow waypoints. For example, if you have a series of points representing a race track, connect this factory to a **Write Tangents** node to generate smooth curves that make the path look natural and flowing.

### Notes

* The Catmull-Rom method produces visually pleasing curves but may not be suitable for all mathematical applications
* For closed loops, ensure your point sequence forms a proper continuous shape
* Combine with other tangent factories to create varied path behaviors along different sections of your data
