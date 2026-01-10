---
description: 'In editor :: PCGEx | Sample : Nearest Surface'
icon: circle
---

# Nearest Surface

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Find the closest point on the nearest collidable surface for each input point.

#### How It Works

For each input point, this node searches for the nearest collidable surface within a defined range. It performs a raycast or trace from the point in a direction toward potential surfaces and evaluates all hits within that distance. The system then selects the closest valid hit based on collision settings and available data. This process can be constrained to specific actors or include all collidable surfaces in the level.

The node supports optional tagging of points based on whether they successfully sampled a surface or not, and can remove points that fail to sample.

#### Configuration

<details>

<summary><strong>Surface Source</strong><br><em>Surface source</em></summary>

Controls which surfaces are considered for sampling.

**Values**:

* **Any surface**: Tests all collidable surfaces within range.
* **Actor Reference**: Only tests surfaces associated with actors referenced by the "Actor Reference" attribute.

</details>

<details>

<summary><strong>Actor Reference</strong><br><em>Name of the attribute that contains a path to an actor in the level, usually from a GetActorData PCG Node in point mode.</em></summary>

Attribute name containing paths to actors. Only used when "Surface Source" is set to "Actor Reference".

</details>

<details>

<summary><strong>Max Distance</strong><br><em>Search max distance</em></summary>

Maximum distance to search for a surface hit. All hits beyond this distance are ignored.

</details>

<details>

<summary><strong>Use Local Max Distance</strong><br><em>Use a per-point maximum distance</em></summary>

When enabled, uses the value from the "Local Max Distance" attribute instead of the fixed "Max Distance".

</details>

<details>

<summary><strong>Local Max Distance</strong><br><em>Use a per-point maximum distance</em></summary>

Attribute name to read the local max distance from. Only used when "Use Local Max Distance" is enabled.

</details>

<details>

<summary><strong>Apply Sampling</strong><br><em>Whether and how to apply sampled result directly (not mutually exclusive with output)</em></summary>

Controls whether and how the sampling results are applied directly to the point data. This can include setting position, rotation, or other properties.

</details>

<details>

<summary><strong>Write Success</strong><br><em>Write whether the sampling was successful or not to a boolean attribute.</em></summary>

When enabled, writes a boolean value indicating whether the sampling succeeded for each point.

</details>

<details>

<summary><strong>Success Attribute Name</strong><br><em>Name of the 'boolean' attribute to write sampling success to.</em></summary>

Name of the boolean attribute to store the sampling success status.

</details>

<details>

<summary><strong>Write Location</strong><br><em>Write the sample location.</em></summary>

When enabled, writes the sampled surface location as a vector to an attribute.

</details>

<details>

<summary><strong>Location Attribute Name</strong><br><em>Name of the 'vector' attribute to write sampled Location to.</em></summary>

Name of the vector attribute to store the sampled surface location.

</details>

<details>

<summary><strong>Write LookAt</strong><br><em>Write the sample "look at" direction from the point.</em></summary>

When enabled, writes a vector representing the direction from the input point to the sampled surface location.

</details>

<details>

<summary><strong>LookAt Attribute Name</strong><br><em>Name of the 'vector' attribute to write sampled LookAt to.</em></summary>

Name of the vector attribute to store the look-at direction.

</details>

<details>

<summary><strong>Write Normal</strong><br><em>Write the sampled normal.</em></summary>

When enabled, writes the surface normal at the sampled point as a vector.

</details>

<details>

<summary><strong>Normal Attribute Name</strong><br><em>Name of the 'vector' attribute to write sampled Normal to.</em></summary>

Name of the vector attribute to store the surface normal.

</details>

<details>

<summary><strong>Write Distance</strong><br><em>Write the sampled distance.</em></summary>

When enabled, writes the distance from the input point to the sampled surface location.

</details>

<details>

<summary><strong>Distance Attribute Name</strong><br><em>Name of the 'double' attribute to write sampled distance to.</em></summary>

Name of the double attribute to store the sampled distance.

</details>

<details>

<summary><strong>Output Normalized Distance</strong><br><em>Whether to output normalized distance or not</em></summary>

When enabled, outputs a normalized distance value (0-1) based on the maximum search distance.

</details>

<details>

<summary><strong>Output OneMinus Distance</strong><br><em>Whether to do a OneMinus on the normalized distance value</em></summary>

When enabled, subtracts the normalized distance from 1 (i.e., 1 - normalized\_distance) before applying scale.

</details>

<details>

<summary><strong>Distance Scale</strong><br><em>Scale factor applied to the distance output; allows to invert it using -1</em></summary>

A scalar value to multiply the distance by. Useful for inverting or scaling the result.

</details>

<details>

<summary><strong>Write Is Inside</strong><br><em>Write the inside/outside status of the point.</em></summary>

When enabled, writes a boolean indicating whether the point is considered inside a surface (e.g., embedded in geometry).

</details>

<details>

<summary><strong>IsInside Attribute Name</strong><br><em>Name of the 'bool' attribute to write sampled point inside or outside the collision.</em></summary>

Name of the boolean attribute to store whether the point is inside.

</details>

<details>

<summary><strong>Write Actor Reference</strong><br><em>Write the actor reference hit.</em></summary>

When enabled, writes a string path to the actor that was hit by the sampling ray.

</details>

<details>

<summary><strong>ActorReference Attribute Name</strong><br><em>Name of the 'string' attribute to write actor reference to.</em></summary>

Name of the string attribute to store the actor reference path.

</details>

<details>

<summary><strong>Write Phys Mat</strong><br><em>Write the actor reference hit.</em></summary>

When enabled, writes a string path to the physical material of the surface that was hit.

</details>

<details>

<summary><strong>PhysMat Attribute Name</strong><br><em>Name of the 'string' attribute to write actor reference to.</em></summary>

Name of the string attribute to store the physical material reference path.

</details>

<details>

<summary><strong>Attributes Forwarding</strong><br><em>Which actor reference points attributes to forward on points.</em></summary>

Defines which attributes from the referenced actors should be forwarded to the output points. Only used when "Surface Source" is set to "Actor Reference".

</details>

<details>

<summary><strong>Collision Settings</strong><br><em>Collision settings for sampling.</em></summary>

Subnode defining how collision tests are performed (channel, object type, profile, etc.).

</details>

<details>

<summary><strong>Process Filtered Out As Fails</strong><br><em>If enabled, mark filtered out points as "failed". Otherwise, skip the processing altogether. Only uncheck this if you want to ensure existing attribute values are preserved.</em></summary>

When enabled, points that are filtered out by point filters are marked as failed samples.

</details>

<details>

<summary><strong>Prune Failed Samples</strong><br><em>If enabled, points that failed to sample anything will be pruned.</em></summary>

When enabled, points that fail to sample a surface are removed from the output.

</details>

<details>

<summary><strong>Process Inside As Failed Samples</strong><br><em>Consider points that are inside as failed samples.</em></summary>

When enabled, points that are determined to be inside a surface are treated as failed sampling attempts.

</details>

<details>

<summary><strong>Process Outside As Failed Samples</strong><br><em>Consider points that are outside as failed samples.</em></summary>

When enabled, points that are determined to be outside the collision bounds are treated as failed sampling attempts.

</details>

<details>

<summary><strong>Tag If Has Successes</strong><br><em>Tag points that have at least one successful sample.</em></summary>

When enabled, adds a tag to points that successfully sampled at least once.

</details>

<details>

<summary><strong>Has Successes Tag</strong><br><em>Tag name for points with successes.</em></summary>

Name of the tag to apply to points that have at least one successful sample.

</details>

<details>

<summary><strong>Tag If Has No Successes</strong><br><em>Tag points that have no successful samples.</em></summary>

When enabled, adds a tag to points that failed to sample any surface.

</details>

<details>

<summary><strong>Has No Successes Tag</strong><br><em>Tag name for points with no successes.</em></summary>

Name of the tag to apply to points that have no successful samples.

</details>

#### Usage Example

1. **Snap Points to Ground**: Use this node to snap a set of points (e.g., placed randomly in the air) to the nearest ground surface.
   * Set "Surface Source" to "Any surface".
   * Set "Max Distance" to a value like `500`.
   * Enable "Write Location" and "Write Normal".
   * Optionally enable "Apply Sampling" to directly move points to the sampled location.
2. **Align Objects to Terrain**: Place objects at the surface of terrain or other collidable geometry.
   * Use a "GetActorData" node with point mode to assign actor references to points.
   * Set "Surface Source" to "Actor Reference".
   * Configure the "ActorReference" attribute name accordingly.
   * Enable "Write Location", "Write Normal", and "Apply Sampling".

#### Notes

* This node uses multi-threading for sampling operations, making it efficient for large datasets.
* The "Apply Sampling" option can be used to directly modify point positions or rotations in the graph.
* When using "Actor Reference" as surface source, ensure that the referenced actors are valid and have collision components.
* Performance can be affected by high "Max Distance" values or complex geometry. Consider using local max distances for better control.
