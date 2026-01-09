---
icon: scrubber
---

# Connect Points

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Connect points according to a set of probes.

### Overview

This node creates connections between points in clusters using probe operations, which define how points are linked together. It's useful for generating networks, paths, or relationships between clustered data. The node supports multiple connection strategies and can project points onto 2D planes for more controlled layouts.

{% hint style="info" %}
The node requires a valid set of probes to function. These are typically created using the "Probe : Factory" node.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Points** (Main): Input points to be connected
* **Probes** (Optional): Probe factory data used to define connection rules

</details>

<details>

<summary>Outputs</summary>

* **Vertices**: Output points with new connections
* **Edges**: Generated edges connecting the points

</details>

### Properties Overview

Controls how points are connected and processed.

***

#### Connection Settings

Define how points connect based on probe operations.

**Prevent Coincidence**

_When enabled, prevents multiple connections from being created at the same location._

* Avoids overlapping or duplicate connections in the output
* Useful for avoiding visual clutter in dense networks

**Values**:

* **Disabled**: Allow connections to overlap
* **Enabled**: Prevent overlapping connections (default)

**Coincidence Tolerance**

_Controls how close two connections can be before they are considered coincident._

* Only used when "Prevent Coincidence" is enabled
* Value is in world units, default is 0.001

**Project Points**

_When enabled, projects points onto a 2D plane before processing._

* Can help create cleaner, flatter layouts for networks or graphs
* Useful for 2D map generation or planar visualization

**Values**:

* **Disabled**: Process points in 3D space (default)
* **Enabled**: Project points to 2D plane

**Projection Details**

_Configuration for how points are projected onto a 2D plane._

* Only used when "Project Points" is enabled
* Choose between normal-based or best-fit projection methods
* Can use local normals from attributes if available

***

#### Graph Output Settings

Controls the structure and properties of the generated graph.

**Cluster Output Settings**

_Settings for how the resulting graph is built._

* Defines how edges are constructed and connected
* Includes options for edge radius handling and solidification
* Controls whether edges align to a specific axis (X, Y, or Z)

**Solidification Axis**

_Selects which axis to align edge points along._

* When set to "None", no alignment occurs
* Useful for creating structured layouts where edges should be aligned along a particular direction

**Values**:

* **None**: No alignment (default)
* **X**: Align along X axis
* **Y**: Align along Y axis
* **Z**: Align along Z axis

**Radius Type**

_Determines how edge radius is calculated._

* Controls the thickness or width of connections in the graph
* Affects visual appearance and can be used for data visualization

**Values**:

* **Average**: Average of endpoint radii (default)
* **Lerp**: Interpolated between endpoint radii
* **Min**: Minimum of endpoint radii
* **Max**: Maximum of endpoint radii
* **Fixed**: Use a constant fixed size

**Radius Constant**

_The fixed radius value when "Radius Type" is set to "Fixed"._

* Only used when "Radius Type" is set to "Fixed"
* Value represents the edge width in world units

**Radius Scale**

_Scales the computed edge radius by a factor._

* Multiplies the calculated radius by this value
* Useful for adjusting visual thickness of connections

**Edge Solidification**

_Controls how edges are solidified or aligned._

* Can make edges appear more structured or aligned along an axis
* Helps with creating clean, geometric layouts

### Notes

* This node works best when used with probe factories that define clear connection rules
* For complex networks, consider using multiple probe operations to create varied connection patterns
* Projection can significantly change the visual appearance of your graph and is useful for 2D visualization tasks
* The "Prevent Coincidence" feature helps avoid overlapping connections in dense clusters
* Performance can be improved by disabling "Project Points" when working with large datasets
