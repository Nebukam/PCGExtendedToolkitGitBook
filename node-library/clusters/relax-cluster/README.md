---
description: 'In editor :: PCGEx | Cluster : Relax'
icon: scrubber
---

# Relax Cluster

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Relax point positions using edges connecting them.

### Overview

This node applies a relaxation process to points within clusters, moving them based on forces derived from the edges connecting them. It's commonly used to smooth out point distributions, create natural-looking layouts, or simulate physical systems where connected elements influence each other's positions.

The relaxation algorithm iteratively adjusts point locations over a number of steps, using edge connections as the basis for movement. You can control how much influence each edge has and which relaxation method is applied.

{% hint style="info" %}
This node works on clusters of points and requires an input with cluster data. It modifies point positions based on their connectivity within clusters.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input (Points)**: Points to be relaxed, must be part of a cluster
* **Edges**: Edge connections between points used for relaxation calculations

</details>

<details>

<summary>Outputs</summary>

* **Output Points**: Modified point positions after relaxation
* **Output Edges**: Original edges, potentially updated with new data if needed

</details>

### Properties Overview

Controls how the relaxation process is applied and what output attributes are generated.

***

#### General Settings

Controls core relaxation behavior and iteration count.

**Iterations**

_Number of times to apply the relaxation algorithm._

* Each iteration refines the point positions further
* Higher values produce more stable results but take longer to compute
* Typical range: 5–50, depending on cluster size and desired smoothness

**Relaxing Arithmetics**

_The type of relaxation operation to perform._

* Select from a list of available relaxation methods (e.g., spring-based, force-directed)
* Each method defines how point positions are adjusted based on edge connections
* Different methods may produce different visual results

***

#### Influence Settings

Controls how much each edge influences the relaxation.

**Influence Input Type**

_Whether to use a constant or attribute value for influence._

* **Constant**: Use a fixed influence value
* **Attribute**: Read influence from a point attribute

**Influence (Constant)**

_Fixed influence value when using constant input._

* Affects how strongly edges pull connected points together
* Values typically range from 0.1 to 1.0
* Higher values result in stronger relaxation forces

**Influence (Attribute)**

_Point attribute used for per-point influence._

* Attribute must be a scalar value
* Each point's influence is read from this attribute
* Useful for creating varied relaxation effects within a cluster

***

#### Output Settings

Controls which additional attributes are written to the output points.

**Write Direction And Size**

_When enabled, writes both direction and size of the relaxation._

* Creates an `FVector` attribute named "DirectionAndSize"
* The vector's length represents the relaxation amplitude
* The direction shows where the point was moved

**Direction And Size Attribute Name**

_Name of the output attribute for direction and size._

* Only used when **Write Direction And Size** is enabled
* Default name: `DirectionAndSize`

**Write Direction**

_When enabled, writes only the direction of the relaxation._

* Creates an `FVector` attribute named "Direction"
* Shows the direction in which the point was moved

**Direction Attribute Name**

_Name of the output attribute for direction._

* Only used when **Write Direction** is enabled
* Default name: `Direction`

**Write Amplitude**

_When enabled, writes the size of the relaxation._

* Creates a `double` attribute named "Amplitude"
* The scalar value represents the magnitude of movement

**Amplitude Attribute Name**

_Name of the output attribute for amplitude._

* Only used when **Write Amplitude** is enabled
* Default name: `Amplitude`

### Notes

* Relaxation works best on small to medium-sized clusters; large clusters may require many iterations or reduced influence for performance.
* Combine with filtering to apply relaxation only to specific points within a cluster.
* Use the output attributes to drive additional effects like particle movement or visual deformation.
* For complex layouts, consider using multiple relaxation passes with different settings.
