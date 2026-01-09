---
description: 'In editor :: PCGEx | Create Shapes'
icon: scrubber
---

# Create Shapes

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Use shape builders to create shapes from input seed points.

### Overview

This node takes a set of seed points and generates geometric shapes using various shape builder types. Each seed point becomes the origin for one or more shapes, depending on your output mode setting. You can control how many shapes are generated per seed, what attributes are written to the output points, and which shapes get pruned based on point count.

{% hint style="info" %}
Shapes are created in local space by default, but you can use a Transform node before this one to position them globally.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Input Points**: Seed points that define where shapes will be generated.
* **Shape Builders (Optional)**: Shape builder factories used to define the type and parameters of shapes to generate.

</details>

<details>

<summary>Outputs</summary>

* **Output Points**: Generated shape points, with optional attributes like ShapeId.
* **Output Paths (Optional)**: Paths representing the outline or structure of each shape.

</details>

### Properties Overview

Controls how shapes are generated and output.

***

#### General Settings

Controls basic behavior for shape creation.

**Write Shape ID**

_When enabled, writes a unique integer ID to each point in the output._

* This allows you to track which shape each point belongs to later in your graph.
* The attribute name can be customized using the **Shape ID Attribute Name** setting.

**Shape ID Attribute Name**

_Name of the attribute where the ShapeId is written._

* Only used when **Write Shape ID** is enabled.
* Default value is "ShapeId".

**Force Output to Points**

_When enabled, forces output points to be written directly to the point data instead of using a separate data structure._

* This setting only applies when **Output Mode** is set to **Per Shape**.
* Useful for ensuring all shape points are part of the main dataset.

**Output Mode**

_Determines how many outputs are created and how they're structured._

* **Per Dataset**: All shapes are merged into a single output dataset.
* **Per Seed**: One output per seed point, containing all shapes generated from that seed.
* **Per Shape**: Each individual shape gets its own output.

***

#### Pruning Settings

Controls which shapes get discarded based on their point count.

**Remove Below**

_When enabled, discards shapes with fewer points than the specified minimum._

* Useful for filtering out very small or degenerate shapes.
* Default minimum is 2 points.

**Minimum Point Count**

_Smallest number of points a shape must have to be kept._

* Only used when **Remove Below** is enabled.
* Must be at least 0.

**Remove Above**

_When enabled, discards shapes with more points than the specified maximum._

* Prevents extremely large or complex shapes from being output.
* Default maximum is 500 points.

**Maximum Point Count**

_Largest number of points a shape can have to be kept._

* Only used when **Remove Above** is enabled.
* Must be at least 0.
