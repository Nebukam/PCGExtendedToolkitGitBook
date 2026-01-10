---
description: 'In editor :: PCGEx | Sample : Sockets'
icon: circle
---

# Sockets

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Parse static mesh paths and output sockets as points.

#### How It Works

This node extracts attachment points (sockets) from static meshes and outputs them as new points. For each input point, it identifies which static mesh to use — either a constant asset or a path read from an attribute. It then loads the mesh and retrieves all defined sockets, converting their positions into output points. These points maintain the original transform properties but include additional attributes describing the socket data.

The process includes:

1. Determining which static mesh to use for each input point.
2. Loading each mesh on the main thread (since mesh loading is not thread-safe).
3. Parsing the mesh for its socket definitions.
4. Creating new output points at the socket positions.
5. Assigning attributes to these points that describe the socket name and other metadata.

#### Configuration

<details>

<summary><strong>Asset Type</strong><br><em>How the asset gets selected.</em></summary>

Controls whether the static mesh is defined as a constant or read from an attribute on input points.

**Values**:

* **Constant**: Use the Static Mesh setting below.
* **Attribute**: Read the mesh path from the input point's AssetPathAttributeName attribute.

</details>

<details>

<summary><strong>Asset Path Attribute Name</strong><br><em>The name of the attribute to read asset path from.</em></summary>

The name of the attribute on the input points that contains the static mesh path when Asset Type is set to "Attribute".

</details>

<details>

<summary><strong>Static Mesh</strong><br><em>Constant static mesh .</em></summary>

The static mesh asset to use when Asset Type is set to "Constant".

</details>

<details>

<summary><strong>Output Socket Details</strong><br><em>How socket data is output.</em></summary>

A subnode that controls how socket information (like name, transform) is added to the output points.

</details>

#### Usage Example

You have a set of points representing weapon placements on characters. Each point has an attribute called "WeaponAssetPath" that specifies which static mesh to use. You want to sample the attachment points (sockets) from each weapon and place them at the character's location. Connect this node with Asset Type = Attribute, Asset Path Attribute Name = WeaponAssetPath, and set up Output Socket Details to include socket names in the output.

#### Notes

* This node must run on the main thread because static mesh loading is not thread-safe.
* The node will only process points that have a valid static mesh asset path or constant mesh defined.
* If a point's mesh has no sockets, it will be skipped during processing.
