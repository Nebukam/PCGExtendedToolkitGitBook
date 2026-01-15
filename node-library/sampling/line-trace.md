---
description: 'In editor :: PCGEx | Sample : Line Trace'
icon: circle
---

# Line Trace

Find the collision point on the nearest collidable surface in a given direction.

**How It Works**

> AI-Generated, needs proofreading

* The Sample : Line Trace node computes a line trace from an origin point in a specified direction to find the nearest collision point on a collidable surface within the scene.
* It uses the actor reference provided by the "Actor Reference" setting to determine the context or specific actors for which to perform the trace operation.
* The node considers the "Origin" and "Direction" settings to define the path of the line trace, with an option to invert the direction based on the "Invert" boolean flag.
* Upon executing the trace, it outputs the collision point data from the nearest collidable surface encountered along the traced line.

#### Configuration

<details>

<summary><strong>Rotation Construction</strong> <code>PCGExMakeRotAxis</code></summary>

How hit transform rotation should be constructed. First value used is the impact normal.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Cross Axis</strong> <code>PCGExInputShorthandSelectorDirection</code></summary>

Second value used for constructing rotation

⚡ PCG Overridable

</details>

<details>

<summary><strong>Collision Settings</strong> <code>PCGExCollisionDetails</code></summary>

Controls collision settings.

📦 See: Collision configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Process Filtered Out As Fails</strong> <code>bool</code></summary>

If enabled, mark filtered out points as "failed". Otherwise, just skip the processing altogether. Only uncheck this if you want to ensure existing attribute values are preserved.

</details>

<details>

<summary><strong>Prune Failed Samples</strong> <code>bool</code></summary>

If enabled, points that failed to sample anything will be pruned.

</details>

<details>

<summary><strong>Quiet UVSettings Warning</strong> <code>bool</code></summary>

Controls quiet uvsettings warning.

</details>

**Output (Actor Data)**

<details>

<summary><strong>Write Actor Reference</strong> <code>bool</code></summary>

Write the actor reference hit.

⚡ PCG Overridable

</details>

<details>

<summary><strong>ActorReference</strong> <code>Name</code></summary>

Name of the 'string' attribute to write actor reference to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Hit Component Reference</strong> <code>bool</code></summary>

Write the actor reference hit.

⚡ PCG Overridable

</details>

<details>

<summary><strong>HitComponent</strong> <code>Name</code></summary>

Name of the 'string' attribute to write actor reference to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Phys Mat</strong> <code>bool</code></summary>

Write the actor reference hit.

⚡ PCG Overridable

</details>

<details>

<summary><strong>PhysMat</strong> <code>Name</code></summary>

Name of the 'string' attribute to write actor reference to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Render Mat</strong> <code>bool</code></summary>

Write the actor reference hit.

⚡ PCG Overridable

</details>

<details>

<summary><strong>RenderMat</strong> <code>Name</code></summary>

Create an attribute for the render material.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Material Index</strong> <code>int32</code></summary>

The index of the render material when it is queried from the hit.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Texture Parameters</strong> <code>bool</code></summary>

Whether to extract texture parameters

⚡ PCG Overridable

</details>

<details>

<summary><strong>Attributes Forwarding</strong> <code>PCGExForwardDetails</code></summary>

Which actor reference points attributes to forward on points.

📦 See: Forward configuration

</details>

**Outputs**

<details>

<summary><strong>Write Success</strong> <code>bool</code></summary>

Write whether the sampling was sucessful or not to a boolean attribute.

</details>

<details>

<summary><strong>Success</strong> <code>Name</code></summary>

Name of the 'boolean' attribute to write sampling success to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Location</strong> <code>bool</code></summary>

Write the sample location.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Location</strong> <code>Name</code></summary>

Name of the 'vector' attribute to write sampled Location to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Look At</strong> <code>bool</code></summary>

Write the sample "look at" direction from the point.

⚡ PCG Overridable

</details>

<details>

<summary><strong>LookAt</strong> <code>Name</code></summary>

Name of the 'vector' attribute to write sampled LookAt to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Normal</strong> <code>bool</code></summary>

Write the sampled normal.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Normal</strong> <code>Name</code></summary>

Name of the 'vector' attribute to write sampled Normal to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Distance</strong> <code>bool</code></summary>

Write the sampled distance.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Distance</strong> <code>Name</code></summary>

Name of the 'double' attribute to write sampled distance to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Normalized</strong> <code>bool</code></summary>

Whether to output normalized distance or not

⚡ PCG Overridable

</details>

<details>

<summary><strong>│ └─ OneMinus</strong> <code>bool</code></summary>

Whether to do a OneMinus on the normalized distance value

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Scale</strong> <code>double</code></summary>

Scale factor applied to the distance output; allows to easily invert it using -1

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Is Inside</strong> <code>bool</code></summary>

Write the inside/outside status of the point.

⚡ PCG Overridable

</details>

<details>

<summary><strong>IsInside</strong> <code>Name</code></summary>

Name of the 'bool' attribute to write sampled point inside or outside the collision.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write UVCoords</strong> <code>bool</code></summary>

Controls write uvcoords.

⚡ PCG Overridable

</details>

<details>

<summary><strong>UV Coords</strong> <code>Name</code></summary>

Controls uv coords.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ UV Channel</strong> <code>int32</code></summary>

This UV Channel will be selected when retrieving UV Coordinates from a raycast query.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Face Index</strong> <code>bool</code></summary>

Controls write face index.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Face Index</strong> <code>Name</code></summary>

Controls face index.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Vertex Color</strong> <code>bool</code></summary>

Whether to attempt to compute the vertex color and write it to the point $Color

⚡ PCG Overridable

</details>

**Sampling**

<details>

<summary><strong>Surface Source</strong> <code>PCGExSurfaceSource</code></summary>

Surface source

</details>

<details>

<summary><strong>Actor Reference</strong> <code>Name</code></summary>

Name of the attribute that contains a path to an actor in the level, usually from a GetActorData PCG Node in point mode.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Origin</strong> <code>PCGAttributePropertyInputSelector</code></summary>

The origin of the trace

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction</strong> <code>PCGAttributePropertyInputSelector</code></summary>

The direction to use for the trace

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Invert</strong> <code>bool</code></summary>

Controls └─ invert.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Distance Input</strong> <code>PCGExTraceSampleDistanceInput</code></summary>

This UV Channel will be selected when retrieving UV Coordinates from a raycast query.

**Values:**

* **Direction Length**: ...
* **Constant**: Constant
* **Attribute**: Attribute

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Distance</strong> <code>double</code></summary>

Trace max distance

⚡ PCG Overridable

</details>

<details>

<summary><strong>Local Max Distance</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute or property to read the local size from.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Apply Sampling</strong> <code>PCGExApplySamplingDetails</code></summary>

Whether and how to apply sampled result directly (not mutually exclusive with output)

📦 See: ApplySampling configuration

</details>

**Tagging**

<details>

<summary><strong>Tag If Has Successes</strong> <code>bool</code></summary>

Controls tag if has successes.

</details>

<details>

<summary><strong>Has Successes Tag</strong> <code>String</code></summary>

Controls has successes tag.

</details>

<details>

<summary><strong>Tag If Has No Successes</strong> <code>bool</code></summary>

Controls tag if has no successes.

</details>

<details>

<summary><strong>Has No Successes Tag</strong> <code>String</code></summary>

Controls has no successes tag.

</details>

***

Source: `Source\PCGExElementsSampling\Public\Elements\PCGExSampleSurfaceGuided.h`
