---
icon: circle-dashed
---

# Probe : Closest

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Probe in a given radius and connect to closests points.

#### Overview

This subnode defines a probing behavior that searches for the closest points or connections within a specified range. It's used to find nearby elements based on spatial proximity and can optionally prevent coincident connections to avoid overlapping or duplicate links. This is particularly useful when you want to connect points to their nearest neighbors while maintaining clean, non-overlapping outputs.

It connects to **Filter** pins on processing nodes that support probing operations, such as connection or linking nodes. Multiple probe subnodes can be used together to define complex spatial relationships.

{% hint style="info" %}
Connects to Filter pins on processing nodes that support probing.
{% endhint %}

#### How It Works

This subnode performs a spatial search for the closest candidates within a defined range. For each input point, it evaluates nearby elements and selects the nearest ones based on distance. Optionally, it prevents connections that are in similar directions to avoid overlapping or redundant links.

The process works as follows:

1. For each input point, it identifies candidate points within its search radius.
2. It ranks these candidates by proximity (distance).
3. It selects up to a specified number of closest candidates.
4. If enabled, it filters out candidates that are in similar directions to prevent coincident connections.

The algorithm prioritizes spatial proximity and can be tuned using parameters like maximum connections and coincidence prevention tolerance.

<details>

<summary>Inputs</summary>

Expects point data as input, typically from a point source or cluster node.

</details>

<details>

<summary>Outputs</summary>

Produces filtered results based on the probe logic. Points that pass the proximity and coincidence checks are included in the output.

</details>

#### Configuration

<details>

<summary><strong>Max Connections Input</strong><br><em>Controls how many closest points to consider.</em></summary>

Determines whether the maximum number of connections is defined by a constant value or read from an attribute on the input data.

**Values**:

* **Constant**: Use a fixed number of connections.
* **Attribute**: Read the number of connections from a point attribute.

</details>

<details>

<summary><strong>Max Connections (Attr)</strong><br><em>Reads the maximum number of connections from an attribute.</em></summary>

The name of the attribute to read the connection count from, when "Max Connections Input" is set to "Attribute".

</details>

<details>

<summary><strong>Max Connections</strong><br><em>Defines the fixed number of closest points to consider.</em></summary>

The maximum number of connections to consider for each point. Only applies when "Max Connections Input" is set to "Constant".

</details>

<details>

<summary><strong>Prevent Coincidence</strong><br><em>Attempts to prevent connections that are roughly in the same direction.</em></summary>

When enabled, this subnode filters out candidates that are in similar directions to avoid overlapping or redundant links.

</details>

<details>

<summary><strong>Coincidence Prevention Tolerance</strong><br><em>Tolerance for detecting coincident connections.</em></summary>

Controls how strict the coincidence check is. A higher value allows more variation in direction before a connection is filtered out. Only active when "Prevent Coincidence" is enabled.

</details>

#### Usage Example

Use this subnode to connect points to their closest neighbors while avoiding duplicate or overlapping links. For instance, you might use it to create connections between clusters and their nearest neighbors, ensuring that no two connections are nearly parallel.

#### Notes

* The "Prevent Coincidence" feature helps avoid visual clutter in dense point clouds.
* Tweak the "Coincidence Prevention Tolerance" to control how strict the filtering is.
* This subnode works best with spatially distributed data for optimal results.
