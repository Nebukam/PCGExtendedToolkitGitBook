---
description: 'In editor :: PCGEx | Sample : Texture'
icon: circle
---

# Sample Texture

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Sample texture data using UV coordinates.

### Overview

This node samples texture data at the location of each point using UV coordinates, allowing you to transfer visual information from textures into your procedural data. It's commonly used for terrain texturing, material assignment, or any scenario where you want to use texture values as attributes on points.

The node reads UV coordinates from a specified attribute and uses those coordinates to sample one or more textures. You can configure which channels (R, G, B, A) to sample and how to output the results as point attributes.

{% hint style="info" %}
This node supports multiple texture parameters and can sample different data types (float, vector, etc.) based on your configuration.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Points**: Input points to sample textures for
* **Texture Parameters** (optional): Texture parameter factories that define which textures to sample from

</details>

<details>

<summary>Outputs</summary>

* **Points**: Points with new attributes containing sampled texture data

</details>

### Properties Overview

This node allows you to configure UV source, output attribute names, and how to handle failed samples.

***

#### Settings

Controls the core sampling behavior.

**UV Source**

_The attribute that contains the UV coordinates to sample from._

* These coordinates are used to sample the textures
* Must be a Vector2D or Vector attribute
* If not specified, the node will use default UVs (0,0)

**Process Filtered Out As Fails**

_When enabled, points that fail to pass filters are marked as "failed" instead of being skipped._

* Only applies if point filters are configured
* Useful for tracking which points couldn't be processed

**Prune Failed Samples**

_When enabled, points that failed to sample anything will be removed from the output._

* Points with no valid texture samples are discarded
* Can help reduce noise in downstream processing

***

#### Tagging

Add tags to mark points based on sampling success.

**Tag If Has Successes**

_When enabled, points that successfully sampled at least one texture are tagged._

* Creates a boolean attribute named according to "Has Successes Tag"
* Useful for filtering or visualizing successful samples

**Has Successes Tag**

_The name of the tag attribute for points with successful samples._

* Default is "HasSuccesses"
* Used when "Tag If Has Successes" is enabled

**Tag If Has No Successes**

_When enabled, points that failed to sample any textures are tagged._

* Creates a boolean attribute named according to "Has No Successes Tag"
* Useful for identifying failed samples in downstream processing

**Has No Successes Tag**

_The name of the tag attribute for points with no successful samples._

* Default is "HasNoSuccesses"
* Used when "Tag If Has No Successes" is enabled

***

#### Warnings and Errors

Controls how warnings are handled during execution.

**Quiet Duplicate Sample Names Warning**

_When enabled, suppresses warnings about duplicate sample names._

* Useful if you're intentionally using the same attribute name for multiple samples
* Prevents log spam when working with many texture parameters
