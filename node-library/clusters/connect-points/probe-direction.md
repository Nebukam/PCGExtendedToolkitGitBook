---
icon: circle-dashed
---

# Probe : Direction

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a probe that searches for nearby connections in a specified direction.

### Overview

This factory defines a probe that looks for nearby points or elements along a given direction vector. It's designed to be connected to Filter pins on processing nodes like "Connect Points" or "Find Neighbors". The probe evaluates candidates based on their alignment with the specified direction and distance from the source point.

{% hint style="info" %}
Connects to Filter pins on processing nodes such as "Connect Points" or "Find Neighbors"
{% endhint %}

### How It Works

The probe searches for nearby points in a specific direction, using either a constant vector or an attribute-driven direction. It evaluates candidates based on how well they align with the search direction and their distance from the source point. The final result is determined by prioritizing either best alignment or closest position.

### Inputs and Outputs

#### Inputs

* **Point Input**: Accepts points to be processed by the probe
* **Attribute Input** (when using attribute mode): Provides directional data for each point

#### Outputs

* **Filtered Points**: Returns points that meet the probe's criteria
* **Connection Data**: Provides connection information between points

### Configuration

***

#### General

**Use Component-Wise Angle**

_When enabled, allows different maximum angles for each axis (X, Y, Z)._

When enabled, you can specify separate angle limits for each component of the direction vector. This creates a directional cone that's not uniform across all axes.

**Max Angle**

_Maximum angle to search within._

Controls how wide the search cone is. A smaller angle means more focused searching in a specific direction. For example, setting this to 30 degrees will only consider candidates within 30 degrees of the probe direction.

**Max Angles**

_Maximum angle per component when using component-wise angle._

When "Use Component-Wise Angle" is enabled, this sets individual angle limits for each axis (X, Y, Z). For example, setting X=60, Y=30, Z=45 means the probe searches 60 degrees in the X direction, 30 degrees in Y, and 45 degrees in Z.

**Unsigned Check**

_When enabled, considers both positive and negative directions._

When enabled, the probe will consider candidates that are aligned with the direction vector or its opposite. For example, if the probe direction is forward (0,1,0), it will also consider candidates behind (0,-1,0) as valid.

**Direction Input**

_Determines how the probe direction is defined._

**Constant**: Use a fixed direction vector. **Attribute**: Read the direction from an attribute on the input points.

**Direction Attribute**

_Attribute to read the direction from when using attribute mode._

When "Direction Input" is set to "Attribute", this selects which attribute contains the direction vectors. The attribute should be of type Vector.

**Invert Direction**

_When enabled, reverses the direction vector._

When enabled, the probe direction is inverted before evaluation. This can be useful for finding candidates in the opposite direction of an attribute.

**Direction (Constant)**

_The fixed direction vector when using constant mode._

This sets the direction vector used by the probe when "Direction Input" is set to "Constant". The default is forward (0,1,0).

**Transform Direction**

_When enabled, applies the point's transform to the direction vector._

When enabled, the probe will apply the point's rotation and scale to the direction vector before searching. This allows for directional probing that respects the orientation of each input point.

**Favor**

_Determines whether to prioritize alignment or distance._

**Best alignment**: Candidates are ranked by how well they align with the probe direction, even if they're further away. **Closest position**: Candidates are ranked by distance from the source point, even if they're not perfectly aligned.

**Do Chained Processing**

_When enabled, processes candidates in a chained manner._

When enabled, the probe evaluates candidates sequentially rather than all at once. This can produce different results when there are multiple valid candidates, as each candidate is processed in order and may affect subsequent evaluations.

### Usage Example

To create a probe that finds nearby points aligned with the forward direction of each input point:

1. Connect this factory to a "Connect Points" node
2. Set "Direction Input" to "Attribute"
3. Select an attribute containing forward-facing vectors (like "ForwardVector")
4. Set "Transform Direction" to true so each point's orientation is respected
5. Adjust "Max Angle" to control how wide the search cone is (e.g., 60 degrees)
6. Set "Favor" to "Best alignment" to prioritize candidates that are most aligned with the direction

This setup will find connections that are both close and aligned with each point's forward direction, creating a directional network.

### Notes

* The probe works best when used with nodes that support filtering, such as Connect Points or Find Neighbors
* When using attribute-based directions, ensure the input data contains valid vector attributes
* Chained processing can be useful for creating sequential connections but may produce different results than standard probing
* For best performance, keep "Max Angle" as small as possible while still capturing desired candidates
* The "Favor" setting allows you to control whether alignment or distance is more important in the final selection
