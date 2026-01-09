---
description: 'In editor :: PCGEx | Sample : Nearest Surface'
icon: circle
---

# Nearest Surface

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Find the closest point on the nearest collidable surface.

### Overview

This node searches for the nearest collidable surface to each input point and returns information about that surface, such as location, normal, and distance. It's useful for snapping points to surfaces, finding collision data, or sampling environment geometry.

The node can work with either all collidable surfaces in the world or a specific set of actor references. When using actor references, it expects a point attribute containing paths to actors in the level.

{% hint style="info" %}
This node uses Unreal's physics system for raycasting and surface queries, so your scene must have proper collision setup.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (default): Points to sample
* **Point Filters** (optional): Filter which points get processed

</details>

<details>

<summary>Outputs</summary>

* **Main Output** (default): Points with sampled surface data added as attributes
* **Filtered Output** (optional): Points that failed to sample, if enabled in settings

</details>

### Properties Overview

Controls how the node searches for surfaces and what data it outputs.

***

#### Settings

Controls the core sampling behavior and surface selection.

**Surface Source**

_Whether to search all collidable surfaces or only those referenced by actor paths._

* **Any surface**: Searches for collisions against any collidable object in the world
* **Actor Reference**: Only tests against a list of actors specified by an attribute

**Actor Reference Attribute**

_Name of the point attribute containing actor references._

* Used when "Actor Reference" is selected as Surface Source
* Should contain paths to actors in the level, typically from a GetActorData node

**Max Distance**

_Maximum distance to search for a surface._

* Default: 1000 units
* Points further than this distance will not be sampled
* Set to a smaller value for better performance

**Use Local Max Distance**

_When enabled, use an attribute to define per-point maximum distances._

* If enabled, the Local Max Distance attribute is used instead of the global Max Distance
* Useful for varying search distances based on point properties

**Local Max Distance Attribute**

_Name of the attribute containing per-point max distance values._

* Only used when Use Local Max Distance is enabled
* Should contain numeric values (float or double)

**Apply Sampling**

_Controls how sampled surface data is applied directly to points._

* When enabled, applies position, rotation, and scale from the surface to the input point
* Allows for direct transformation of points based on surface properties

***

#### Outputs

Controls which surface data gets written as attributes to the output points.

**Write Success**

_When enabled, writes a boolean attribute indicating if sampling was successful._

* Creates an attribute named "bSamplingSuccess" by default
* True if a surface was found within range, false otherwise

**Write Location**

_When enabled, writes the sampled surface location._

* Creates an attribute named "NearestLocation" by default
* Contains the 3D position of the closest point on the surface

**Write LookAt**

_When enabled, writes a direction vector from the input point to the surface._

* Creates an attribute named "NearestLookAt" by default
* Useful for orienting objects toward the surface

**Write Normal**

_When enabled, writes the surface normal at the sampled point._

* Creates an attribute named "NearestNormal" by default
* Vector perpendicular to the surface at the sampling location

**Write Distance**

_When enabled, writes the distance from input point to surface._

* Creates an attribute named "NearestDistance" by default
* Can be normalized or scaled using additional options below

**Output Normalized Distance**

_When enabled, outputs a normalized distance between 0 and 1._

* Normalizes the distance based on Max Distance setting
* Useful for creating smooth transitions or effects based on proximity

**Output OneMinus Distance**

_When enabled, subtracts the normalized distance from 1._

* Creates an inverted distance effect (closer = higher value)
* Useful for fading or blending effects

**Distance Scale**

_Scales the output distance by this factor._

* Allows inverting distances using -1
* Can be used to adjust the magnitude of distance values

**Write Is Inside**

_When enabled, writes whether the point is inside a collision volume._

* Creates an attribute named "IsInside" by default
* True if the point is within a solid collision object

**Write Actor Reference**

_When enabled, writes the path to the actor that was sampled._

* Creates an attribute named "ActorReference" by default
* Useful for tracking which surface was hit

**Write Phys Mat**

_When enabled, writes the physical material of the sampled surface._

* Creates an attribute named "PhysMat" by default
* Contains a reference to the physical material used on the surface

***

#### Tagging & Forwarding

Controls how points are tagged and how attributes are forwarded.

**Attributes Forwarding**

_Which actor reference point attributes to forward to the output points._

* Only active when Surface Source is set to "Actor Reference"
* Allows copying attributes from referenced actors to the sampled points
* Supports include/exclude filters for fine-grained control

**Tag If Has Successes**

_When enabled, adds a tag to the output data if any sampling succeeded._

* Adds a tag named "HasSuccesses" by default
* Useful for conditional processing based on sampling results

**Tag If Has No Successes**

_When enabled, adds a tag to the output data if no sampling succeeded._

* Adds a tag named "HasNoSuccesses" by default
* Useful for identifying areas where no surfaces were found

***

#### Settings

Controls how failed samples are handled.

**Process Filtered Out As Fails**

_When enabled, treats points that fail filters as failed samples._

* If disabled, points that don't pass filters are skipped entirely
* Default: Enabled to ensure consistent behavior

**Prune Failed Samples**

_When enabled, removes points that failed to sample from the output._

* Points with no valid surface within range are discarded
* Useful for cleaning up invalid data

**Process Inside As Failed Samples**

_When enabled, treats points inside collision volumes as failed samples._

* Points that start inside a solid object are considered failures
* Useful for ensuring points are always outside surfaces

**Process Outside As Failed Samples**

_When enabled, treats points outside collision volumes as failed samples._

* Points that end up outside any valid surface are considered failures
* Useful when you want to ensure sampling only occurs on actual surfaces
