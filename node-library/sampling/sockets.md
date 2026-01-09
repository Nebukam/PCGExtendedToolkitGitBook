---
description: 'In editor :: PCGEx | Sample : Sockets'
icon: circle
---

# Sockets

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Parse static mesh paths and output sockets as points.

### Overview

This node reads static mesh asset paths from input points and extracts socket information from those meshes. It's useful when you want to sample the positions, rotations, and scales of predefined sockets in your static meshes for procedural placement or attachment points.

The node supports both constant mesh inputs and attribute-based mesh selection, allowing you to use different meshes per point. Sockets are output as new points with optional attributes for socket names and tags.

{% hint style="info" %}
This node requires a valid static mesh asset path to function properly. If the mesh is not found or has no sockets, it will return an empty result.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Optional): Points that contain static mesh paths or attributes
* **Point Filters** (Optional): Filters to control which input points are processed

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Points representing the sockets from the static meshes
* **Filtered Output** (Optional): Points filtered by the point filter settings

</details>

### Properties Overview

Controls how the node selects and processes static mesh assets and socket data.

***

#### Asset Selection

How to determine which static mesh to sample sockets from.

**Asset Type**

_Controls whether to use a constant mesh or read paths from an attribute._

* When set to **Constant**, the node uses the specified mesh directly
* When set to **Attribute**, the node reads mesh paths from the input points using the attribute name below

**Values**:

* **Constant**: Use a single static mesh asset
* **Attribute**: Read mesh paths from an attribute on the input points

**Asset Path Attribute Name**

_The name of the attribute that contains static mesh paths._

* Only visible when "Asset Type" is set to **Attribute**
* This attribute should contain valid static mesh paths or references

**Static Mesh**

_The constant static mesh asset to sample sockets from._

* Only visible when "Asset Type" is set to **Constant**
* This is the mesh that will be used for all input points

***

#### Socket Output Settings

Controls how socket data is written to output points.

**Socket Tag Filters**

_Filter which sockets to include or exclude based on their tag._

* Use this to filter sockets by their assigned tags in the static mesh
* Supports both inclusion and exclusion modes

**Socket Name Filters**

_Filter which sockets to include or exclude based on their name._

* Use this to filter sockets by their names in the static mesh
* Supports both inclusion and exclusion modes

**Write Socket Name**

_When enabled, writes socket names as an attribute on output points._

* Creates a new point attribute with the socket's name
* Attribute name is configurable below

**Socket Name Attribute Name**

_Name of the attribute that will contain socket names._

* Only visible when "Write Socket Name" is enabled
* Default is "SocketName"

**Write Socket Tag**

_When enabled, writes socket tags as an attribute on output points._

* Creates a new point attribute with the socket's tag
* Attribute name is configurable below

**Socket Tag Attribute Name**

_Name of the attribute that will contain socket tags._

* Only visible when "Write Socket Tag" is enabled
* Default is "SocketTag"

### Notes

* This node must be executed on the main thread due to asset loading requirements
* Performance can be improved by using a constant mesh instead of per-point attributes
* Sockets are output as points with their transform data (position, rotation, scale) already applied
* If you're working with many different meshes, consider pre-processing them into a single collection for better performance
* You can use socket names and tags to drive further procedural operations like attachment point placement or custom behaviors
