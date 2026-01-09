---
description: 'In editor :: PCGEx | Vtx : Amplitude'
icon: circle-dashed
---

# Vtx : Amplitude

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Amplitude of a vertex, based on neighboring connections.

### Overview

This node calculates the amplitude of each vertex in a cluster based on its connection to neighboring vertices. It measures how much a vertex deviates from its neighbors in terms of distance or directional orientation, which is useful for creating organic shapes, surface variations, or procedural displacement effects.

The amplitude can be computed as either a scalar value (overall length) or component-wise (individual X/Y/Z components), and it supports writing multiple outputs including minimum, maximum, and range values. You can also compute a sign value that indicates whether the vertex is pointing toward or away from its neighbors using an up vector.

{% hint style="info" %}
This node works on cluster data and requires an input with vertex and edge information. It's commonly used in terrain generation, mesh deformation, or procedural surface manipulation workflows.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Cluster data containing vertices and edges
* **Optional Filters**: Point filters to restrict which vertices are processed

</details>

<details>

<summary>Outputs</summary>

* **Property Output**: Vertex properties written to the cluster's vertex data
  * Min amplitude (scalar or vector)
  * Max amplitude (scalar or vector)
  * Amplitude range (scalar or vector)
  * Amplitude sign (scalar)

</details>

### Properties Overview

Controls how amplitude is calculated and what outputs are generated.

***

#### Amplitude Settings

Configures the core amplitude calculation behavior.

**Write Min Amplitude**

_When enabled, writes the minimum amplitude value to an attribute._

* This can be scalar or vector depending on the mode selected
* Useful for identifying the most constrained or least mobile points in a cluster

**Values**:

* **False**: Do not write minimum amplitude
* **True**: Write minimum amplitude

**Min Amplitude Attribute Name**

_Name of the attribute where the minimum amplitude will be written._

* Default is "MinAmplitude"
* Can be any valid attribute name

**Absolute Min**

_When enabled, takes absolute value of the min amplitude._

* Useful for analyzing magnitude regardless of direction
* Only applies when using individual mode

**Min Mode**

_Selects whether to compute amplitude as a scalar or component-wise._

**Values**:

* **Length**: Computes amplitude as a single scalar value (overall length)
* **Individual**: Computes amplitude per component (X, Y, Z)

**Write Max Amplitude**

_When enabled, writes the maximum amplitude value to an attribute._

* This can be scalar or vector depending on the mode selected
* Useful for identifying the most extended or mobile points in a cluster

**Values**:

* **False**: Do not write maximum amplitude
* **True**: Write maximum amplitude

**Max Amplitude Attribute Name**

_Name of the attribute where the maximum amplitude will be written._

* Default is "MaxAmplitude"
* Can be any valid attribute name

**Absolute Max**

_When enabled, takes absolute value of the max amplitude._

* Useful for analyzing magnitude regardless of direction
* Only applies when using individual mode

**Max Mode**

_Selects whether to compute amplitude as a scalar or component-wise._

**Values**:

* **Length**: Computes amplitude as a single scalar value (overall length)
* **Individual**: Computes amplitude per component (X, Y, Z)

**Write Amplitude Range**

_When enabled, writes the difference between max and min amplitude._

* This can be scalar or vector depending on the mode selected
* Useful for creating variation maps or controlling displacement intensity

**Values**:

* **False**: Do not write amplitude range
* **True**: Write amplitude range

**Amplitude Range Attribute Name**

_Name of the attribute where the amplitude range will be written._

* Default is "AmplitudeRange"
* Can be any valid attribute name

**Absolute Range**

_When enabled, takes absolute value of the amplitude range._

* Useful for analyzing magnitude regardless of direction
* Only applies when using individual mode

**Range Mode**

_Selects whether to compute amplitude as a scalar or component-wise._

**Values**:

* **Length**: Computes amplitude as a single scalar value (overall length)
* **Individual**: Computes amplitude per component (X, Y, Z)

**Write Amplitude Sign**

_When enabled, writes a sign value indicating the vertex's orientation relative to neighbors._

* Useful for controlling directional displacement or surface normals
* The sign is computed using dot product with an up vector

**Values**:

* **False**: Do not write amplitude sign
* **True**: Write amplitude sign

**Amplitude Sign Attribute Name**

_Name of the attribute where the amplitude sign will be written._

* Default is "AmplitudeSign"
* Can be any valid attribute name

**Sign Output Mode**

_Selects how the sign value is calculated and output._

**Values**:

* **Raw**: Raw dot product value
* **Size**: Dot product multiplied by edge size
* **Size (Normalized)**: Dot product multiplied by normalized edge size
* **Sign**: Returns 0, 1, or -1 based on sign

**Absolute Sign**

_When enabled, takes absolute value of the amplitude sign._

* Useful for analyzing magnitude regardless of direction

**Up Mode**

_Selects how the up vector is determined for sign calculation._

**Values**:

* **Average Direction**: Uses average direction to neighbors
* **Custom Up Vector**: Uses a user-defined up vector

**Up Input Type**

_Controls whether the up vector is defined as a constant or read from an attribute._

**Values**:

* **Constant**: Use a fixed vector value
* **Attribute**: Read up vector from an input attribute

**Up Vector (Attribute)**

_The attribute to read the up vector from when using attribute input type._

* Only visible when "Up Input Type" is set to "Attribute"

**Up Vector**

_The constant up vector used for sign calculation when using constant input type._

* Only visible when "Up Input Type" is set to "Constant"
* Default is FVector::UpVector (0, 0, 1)
