---
description: 'In editor :: PCGEx | Get GUID'
icon: circle
---

# Get GUID

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Retrieves a single GUID from a specified point index, similar to what the standard GetGUID node would produce given the same parameters.

### Overview

This node extracts a unique identifier from a specific point in your input data. It's helpful when you need to access or generate a consistent identifier for a particular point, especially when working with procedural content that requires uniform GUID generation across multiple nodes or sessions.

The output depends on the point index you specify and how you configure the GUID generation settings. This node functions like the standard GetGUID node but lets you target a specific point instead of processing all points.

{% hint style="info" %}
This node does not modify your input data; it simply reads from a specified point and outputs a GUID value.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Point Data): Expects point data to read from. The node will extract a GUID from one of these points.

</details>

<details>

<summary>Outputs</summary>

* **Main Output** (Point Data): Outputs the same point data with an additional attribute containing the generated GUID value.
* **Output Attribute**: A new attribute named based on your configuration settings, containing the GUID value for the specified point.

</details>

### Properties Overview

Settings to control which point to read from and how to generate the GUID.

***

#### Settings

Controls how the node identifies which point to read from and how to format the output GUID.

**Point Index**

_The index of the point from which to retrieve the GUID._

* Determines which specific point in your data set to use for GUID generation
* Must be a valid index within your input data range
* For example, if you have 10 points, valid indices are 0 through 9

**Values**:

* **Index**: Uses point index as a marker of uniqueness
* **Position**: Uses point position as a marker of uniqueness
* **Seed**: Uses point seed as a marker of uniqueness
* **Grid**: Uses PCG component Grid as a marker of uniqueness
* **All**: Uses all markers of uniqueness

**Index Safety**

_Controls how out-of-bounds indices are handled._

* When enabled, the node will use the specified safety mode to handle invalid indices
* For example, if you specify index 15 but only have 10 points, this setting determines what happens

**Values**:

* **Ignore**: Out of bounds indices are ignored (0,1,2,-1,-1,-1,...)
* **Tile**: Out of bounds indices are tiled (0,1,2,0,1,2...)
* **Clamp**: Out of bounds indices are clamped (0,1,2,2,2,2...)
* **Yoyo**: Out of bounds indices are mirrored and back (0,1,2,1,0,1...)

**Config**

_Configuration for how the GUID should be generated._

* Controls the format and type of the output GUID
* Includes options for integer or string output, and various formatting styles

**Values**:

* **Integer**: Output as a 64-bit integer value
* **String**: Output as a formatted string value

**Format Options**:

* **Digits**: 32 digits (e.g., `00000000000000000000000000000000`)
* **Digits (Lowercase)**: 32 digits in lowercase (e.g., `0123abc456def789abcd123ef4a5b6c7`)
* **Digits (Hyphens)**: 32 digits separated by hyphens (e.g., `00000000-0000-0000-0000-000000000000`)
* **Digits (RFC 4122)**: 32 digits separated by hyphens, in lowercase as described by RFC 4122 (e.g., `bd048ce3-358b-46c5-8cee-627c719418f8`)
* **Digits (Hyphens in Braces)**: Same as above but wrapped in braces (e.g., `{bd048ce3-358b-46c5-8cee-627c719418f8}`)

### Notes

* This node is particularly useful when you need to reference a specific point's GUID across multiple nodes
* The output attribute name will be based on your configuration settings and can be used in downstream nodes
* When using Index Safety modes like Tile or Clamp, the node will automatically adjust invalid indices to valid ones
* For performance reasons, consider caching this node if it's used frequently in your graph
* This node works best when you have a consistent point data set with known indices
* The GUID generation is deterministic based on the input parameters, ensuring reproducible results

