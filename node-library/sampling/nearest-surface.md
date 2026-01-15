---
description: 'In editor :: PCGEx | Sample : Nearest Surface'
icon: circle
---

# Nearest Surface

Find the closest point on the nearest collidable surface.

**How It Works**

> AI-Generated, needs proofreading

* The node identifies the closest point on the nearest collidable surface to each input point by evaluating all surfaces within the specified max distance.
* It uses the actor reference provided in the Surface Source setting to determine which actors' surfaces are considered for proximity calculations.
* If Use Local Max Distance is enabled, it reads the local max distance from the attribute or property specified in Local Max Distance, overriding the global Max Distance on a per-point basis.

#### Configuration

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

<summary><strong>Process Inside As Failed Samples</strong> <code>bool</code></summary>

Consider points that are inside as failed samples.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Process Outside As Failed Samples</strong> <code>bool</code></summary>

Consider points that are outside as failed samples.

⚡ PCG Overridable

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

<summary><strong>Write Phys Mat</strong> <code>bool</code></summary>

Write the actor reference hit.

⚡ PCG Overridable

</details>

<details>

<summary><strong>PhysMat</strong> <code>Name</code></summary>

Name of the 'string' attribute to write actor reference to.

⚡ PCG Overridable

</details>

**Outputs**

<details>

<summary><strong>Write Success</strong> <code>bool</code></summary>

Write whether the sampling was successful or not to a boolean attribute.

⚡ PCG Overridable

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

<summary><strong>Max Distance</strong> <code>double</code></summary>

Search max distance

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Local Max Distance</strong> <code>bool</code></summary>

Use a per-point maximum distance

</details>

<details>

<summary><strong>Local Max Distance</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute or property to read the local max distance from.

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

**Tagging & Forwarding**

<details>

<summary><strong>Attributes Forwarding</strong> <code>PCGExForwardDetails</code></summary>

Which actor reference points attributes to forward on points.

📦 See: Forward configuration

</details>

***

Source: `Source\PCGExElementsSampling\Public\Elements\PCGExSampleNearestSurface.h`
