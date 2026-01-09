---
description: 'In editor :: PCGEx | Socket Staging'
icon: circle
---

# Socket Staging

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Creates point data from sockets defined in asset staging collections.

### Overview

This node extracts socket information from assets that have been staged using the Asset Staging collection system. It allows you to generate procedural points at the locations of these sockets, which can then be used for further processing like spawning actors or placing objects.

The node reads from a collection map containing asset staging data and creates new points at each socket location. You can filter which points get processed and control how socket data is written to the output points.

{% hint style="info" %}
This node requires that you have already created an Asset Staging collection with sockets defined on your assets.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Source Points**: Point data to be filtered and processed
* **Collection Map (Optional)**: Asset staging collection map containing socket data

</details>

<details>

<summary>Outputs</summary>

* **Output Points**: Generated points at socket locations
* **Collection Map (Optional)**: Modified collection map with socket data

</details>

### Properties Overview

Controls how sockets are extracted and written to output points.

***

#### Socket Output Settings

Configures which socket data gets written to the output points.

**Write Socket Name**

_When enabled, writes the socket name to an attribute on the output points._

* Adds a new attribute containing the socket's name
* Useful for identifying which socket each point came from

**Values**:

* **False**: Socket names are not written to output points
* **True**: Socket names are written to output points

**Socket Name Attribute Name**

_The name of the attribute that will contain the socket name._

* Only used when "Write Socket Name" is enabled
* Defaults to "SocketName"

**Write Socket Tag**

_When enabled, writes the socket tag to an attribute on the output points._

* Adds a new attribute containing the socket's tag
* Useful for categorizing sockets during processing

**Values**:

* **False**: Socket tags are not written to output points
* **True**: Socket tags are written to output points

**Socket Tag Attribute Name**

_The name of the attribute that will contain the socket tag._

* Only used when "Write Socket Tag" is enabled
* Defaults to "SocketTag"

**Socket Tag Filters**

_Filter which sockets to include or exclude based on their tag._

* Supports both inclusion and exclusion filtering modes
* Uses a list of tags to match against

**Socket Name Filters**

_Filter which sockets to include or exclude based on their name._

* Supports both inclusion and exclusion filtering modes
* Uses a list of names to match against

### Notes

* This node works with the Asset Staging collection system, so make sure your assets have been staged with socket data defined
* The output points will inherit the position, rotation, and scale from the original socket data
* You can use point filters to control which source points get processed
* Consider using this node in combination with other nodes like "Spawn" or "Transform" to create meaningful procedural content
* Performance is optimized when using point filters to reduce the number of input points that need processing
