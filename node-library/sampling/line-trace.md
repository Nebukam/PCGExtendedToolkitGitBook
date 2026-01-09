---
description: 'In editor :: PCGEx | Sample : Line Trace'
icon: circle
---

# Line Trace

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Find the collision point on the nearest collidable surface in a given direction.

### Overview

This node performs a line trace (raycast) from each input point in a specified direction to find the closest collidable surface. It's useful for placing objects on terrain, aligning geometry to surfaces, or sampling spatial data from the world. The node supports both constant and attribute-based trace distances, and can output various hit information like location, normal, UV coordinates, and material references.

{% hint style="info" %}
This node requires a valid collision setup in your project. Ensure that actors have appropriate collision shapes and that the physics settings are enabled for accurate raycasting.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Points to trace from
* **Point Filters (Optional)**: Filter which points to process

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Processed points with optional new attributes added
* **Filtered Points (Optional)**: Points that failed the filter

</details>

### Properties Overview

Controls how the line trace is performed and what data is written to the output points.

***

#### Settings

Configures the core behavior of the raycast operation.

**Surface Source**

_Controls which surfaces are considered for the trace._

* **Any surface**: Any surface within range will be tested
* **Actor Reference**: Only a list of actor surfaces will be included

**Actor Reference Attribute**

_Name of the attribute that contains a path to an actor in the level, usually from a GetActorData PCG Node in point mode._

* When "Actor Reference" is selected as the surface source, this attribute specifies which actors to trace against.

**Origin**

_Selects the attribute used for the trace origin point._

* This defines where each ray starts from

**Direction**

_Selects the attribute used for the trace direction._

* This defines the direction and length of each ray

**Invert Direction**

_When enabled, reverses the trace direction._

* Useful for casting backwards from a surface normal or other directional vector

**Distance Input**

_Determines how the maximum trace distance is calculated._

* **Direction Length**: Uses the length of the direction vector as the trace distance
* **Constant**: Uses a fixed value set in Max Distance
* **Attribute**: Reads the trace distance from an attribute on the input points

**Max Distance**

_Sets the maximum distance for the trace when using Constant distance input._

* Value must be greater than 0.001

**Local Max Distance Attribute**

_Selects the attribute to read the trace distance from when using Attribute distance input._

* Only used when Distance Input is set to "Attribute"

**Apply Sampling**

_Controls how the sampling results are applied directly to the points._

* Allows you to modify point properties like location, rotation, or scale directly on the input points

**Rotation Construction**

_Determines how the hit transform rotation is constructed._

* **X**: Uses X axis as forward direction
* **XY**: Uses X axis as forward, Y axis as right
* **XZ**: Uses X axis as forward, Z axis as up
* **Y**: Uses Y axis as forward direction
* **YX**: Uses Y axis as forward, X axis as right
* **YZ**: Uses Y axis as forward, Z axis as up
* **Z**: Uses Z axis as forward direction
* **ZX**: Uses Z axis as forward, X axis as right
* **ZY**: Uses Z axis as forward, Y axis as right

**Cross Axis**

_Specifies the secondary axis used for rotation construction._

* Controls the orientation of the rotation matrix when constructing the hit transform

***

#### Outputs

Controls which data is written to the output points.

**Write Success**

_When enabled, writes whether the trace was successful to an attribute._

* Useful for debugging or filtering failed samples later in the graph

**Success Attribute Name**

_Name of the boolean attribute to write success status to._

* Only used when "Write Success" is enabled

**Write Location**

_When enabled, writes the hit location to a vector attribute._

* The point will be placed at the surface intersection

**Location Attribute Name**

_Name of the vector attribute to write hit location to._

* Only used when "Write Location" is enabled

**Write LookAt**

_When enabled, writes a direction pointing from the trace origin to the hit location._

* Useful for orienting objects toward the surface

**LookAt Attribute Name**

_Name of the vector attribute to write look-at direction to._

* Only used when "Write LookAt" is enabled

**Write Normal**

_When enabled, writes the surface normal at the hit location._

* Useful for aligning geometry or calculating lighting

**Normal Attribute Name**

_Name of the vector attribute to write surface normal to._

* Only used when "Write Normal" is enabled

**Write Distance**

_When enabled, writes the distance from origin to hit point._

* Can be normalized and scaled for various effects

**Distance Attribute Name**

_Name of the double attribute to write hit distance to._

* Only used when "Write Distance" is enabled

**Output Normalized Distance**

_When enabled, outputs a normalized value between 0 and 1._

* Useful for controlling effects based on proximity

**Output OneMinus Distance**

_When enabled, inverts the normalized distance (1 - normalized)._

* Creates an inverse relationship with distance

**Distance Scale**

_Scales the output distance by this factor._

* Allows easy inversion using -1

**Write Is Inside**

_When enabled, writes whether the point was inside a collision volume._

* Useful for detecting if points are embedded in geometry

**Is Inside Attribute Name**

_Name of the boolean attribute to write inside/outside status to._

* Only used when "Write Is Inside" is enabled

**Write UV Coords**

_When enabled, writes UV coordinates from the hit surface._

* Requires 'Project Settings->Physics->Support UV From Hit Results' set to true

**UV Coords Attribute Name**

_Name of the vector2D attribute to write UV coordinates to._

* Only used when "Write UV Coords" is enabled

**UV Channel**

_Selects which UV channel to read from the hit surface._

* Only used when "Write UV Coords" is enabled

**Write Face Index**

_When enabled, writes the index of the face that was hit._

* Useful for mesh-based sampling or material assignment

**Face Index Attribute Name**

_Name of the integer attribute to write face index to._

* Only used when "Write Face Index" is enabled

**Write Vertex Color**

_When enabled, attempts to extract vertex color from the hit surface._

* Requires complex trace settings and proper mesh setup

**Write Actor Reference**

_When enabled, writes a reference to the actor that was hit._

* Useful for linking points to specific actors in your scene

**Actor Reference Attribute Name**

_Name of the string attribute to write actor reference to._

* Only used when "Write Actor Reference" is enabled

**Write Hit Component Reference**

_When enabled, writes a reference to the component that was hit._

* Useful for identifying which part of an actor was hit

**Hit Component Reference Attribute Name**

_Name of the string attribute to write component reference to._

* Only used when "Write Hit Component Reference" is enabled

**Write Phys Mat**

_When enabled, writes a reference to the physical material of the hit surface._

* Useful for applying different behaviors based on surface type

**Phys Mat Attribute Name**

_Name of the string attribute to write physical material reference to._

* Only used when "Write Phys Mat" is enabled

**Write Render Mat**

_When enabled, writes a reference to the render material of the hit surface._

* Useful for copying visual properties from surfaces

**Render Mat Attribute Name**

_Name of the string attribute to write render material reference to._

* Only used when "Write Render Mat" is enabled

**Render Material Index**

_Selects which material index to query from the hit component._

* Only used when "Write Render Mat" is enabled

**Extract Texture Parameters**

_When enabled, attempts to extract texture parameters from the render material._

* Requires a valid texture parameter factory setup

***

#### Output (Actor Data)

Controls how actor data attributes are forwarded.

**Attributes Forwarding**

_Specifies which attributes from the source actors should be copied to the output points._

* Allows you to maintain information about the actors that were hit during the trace

***

#### Tagging

Controls how success/failure states are tagged on points.

**Tag If Has Successes**

_When enabled, tags points that successfully found a surface._

* Useful for filtering or debugging

**Has Successes Tag**

_Name of the tag to apply to points with successful traces._

* Only used when "Tag If Has Successes" is enabled

**Tag If Has No Successes**

_When enabled, tags points that failed to find a surface._

* Useful for identifying problematic areas in your generation

**Has No Successes Tag**

_Name of the tag to apply to points with failed traces._

* Only used when "Tag If Has No Successes" is enabled

***

#### Settings

Controls how filtered-out points are handled.

**Process Filtered Out As Fails**

_When enabled, marks filtered out points as failed instead of skipping them._

* Useful for maintaining consistent output counts

**Prune Failed Samples**

_When enabled, removes points that failed to sample a surface._

* Useful for cleaning up invalid data from your point cloud

### Notes

* This node is computationally expensive and should be used sparingly in large datasets
* For best performance, use constant distances when possible instead of attribute-based values
* UV coordinates require specific engine settings to work properly
* Texture parameter extraction requires additional setup with texture parameter factories
* Consider using point filters to reduce the number of traces performed
* The "Apply Sampling" feature can be used to directly modify point properties without needing additional nodes
