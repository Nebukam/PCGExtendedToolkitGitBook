---
description: 'In editor :: PCGEx | Spline to Path'
icon: circle
---

# Spline to Path

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Converts spline data into path data for use in procedural graphs.

#### How It Works

This node takes input splines and transforms them into path structures that can be used for further processing. For each spline, it calculates key attributes like tangent vectors, cumulative length, and normalized position along the path. These attributes help maintain the shape and characteristics of the original spline while making it compatible with path-based operations.

The node supports different sampling options to control which splines are processed:

* All input splines
* Only closed-loop splines (like circles or loops)
* Only open-line splines (like straight paths or curves)

It also allows you to write additional information about each point into attributes, such as arrive and leave tangents, cumulative length, normalized position (alpha), and point type identifiers. These extra details are useful for downstream processing like object placement, animation, or visualization.

Tags from the original splines can be carried over to help maintain metadata during conversion.

{% hint style="info" %}
This node connects to **Points** processing nodes and works well with other path-based nodes in your procedural graph.
{% endhint %}

#### Configuration

<details>

<summary><strong>Transform Details</strong><br><em>Point transform settings</em></summary>

Controls how the spline points are transformed into the output path space.

</details>

<details>

<summary><strong>Sample Inputs</strong><br><em>Which splines to sample</em></summary>

Determines which input splines are converted:

* **All**: Convert all input splines.
* **Closed loops only**: Only convert closed-loop splines.
* **Open lines only**: Only convert open-line splines.

</details>

<details>

<summary><strong>Write Arrive Tangent</strong><br><em>Writes arrive tangents to a vector attribute</em></summary>

When enabled, the node writes tangent vectors at the start of each path point into an attribute named in **Arrive Tangent**.

</details>

<details>

<summary><strong>Arrive Tangent</strong><br><em>Name of the 'FVector' attribute to write arrive tangents to</em></summary>

The name of the vector attribute where arrive tangents are written if **Write Arrive Tangent** is enabled.

</details>

<details>

<summary><strong>Write Leave Tangent</strong><br><em>Writes leave tangents to a vector attribute</em></summary>

When enabled, the node writes tangent vectors at the end of each path point into an attribute named in **Leave Tangent**.

</details>

<details>

<summary><strong>Leave Tangent</strong><br><em>Name of the 'FVector' attribute to write leave tangents to</em></summary>

The name of the vector attribute where leave tangents are written if **Write Leave Tangent** is enabled.

</details>

<details>

<summary><strong>Tags To Data</strong><br><em>Tag handling options</em></summary>

Controls how tags from source splines are handled:

* **Do Nothing**: Ignore tags.
* **To @Data**: Copy tag:value to @Data domain attributes.
* **Attribute**: Copy tag:value to element domain attributes.

</details>

<details>

<summary><strong>Write Length At Point</strong><br><em>Writes cumulative length at each point</em></summary>

When enabled, the node writes the total path length up to each point into an attribute named in **Length at Point**.

</details>

<details>

<summary><strong>Length At Point</strong><br><em>Name of the 'double' attribute to write length at point to</em></summary>

The name of the double attribute where cumulative lengths are written if **Write Length At Point** is enabled.

</details>

<details>

<summary><strong>Write Alpha</strong><br><em>Writes normalized alpha values for each point</em></summary>

When enabled, the node writes a normalized position value (0 to 1) along the path into an attribute named in **Alpha**.

</details>

<details>

<summary><strong>Alpha</strong><br><em>Name of the 'double' attribute to write alpha values to</em></summary>

The name of the double attribute where alpha values are written if **Write Alpha** is enabled.

</details>

<details>

<summary><strong>Write Point Type</strong><br><em>Writes a point type identifier</em></summary>

When enabled, the node writes an integer identifier for each point into an attribute named in **Point Type**.

</details>

<details>

<summary><strong>Point Type</strong><br><em>Name of the 'int32' attribute to store point types</em></summary>

The name of the int32 attribute where point types are written if **Write Point Type** is enabled.

</details>

<details>

<summary><strong>Tag Forwarding</strong><br><em>Tags to forward from source splines</em></summary>

Filters which tags from the input splines should be carried over to the output paths.

</details>

<details>

<summary><strong>Carry Over Settings</strong><br><em>Meta filter settings</em></summary>

Controls how metadata and attributes are passed through from the source splines to the output paths.

</details>

#### Usage Example

Use this node when you have a set of splines that represent routes or paths in your scene, such as roads, rivers, or character movement paths. After converting them into paths, you can apply path filters, sample points along them, or use them for procedural generation like placing objects or generating navmeshes.

#### Notes

* The node supports both open and closed splines.
* Tangent attributes are useful for smooth interpolation in downstream nodes.
* Alpha values allow for normalized sampling along the path.
* Tag forwarding can be used to carry over metadata such as road types or terrain tags.
