---
description: 'In editor :: PCGEx | Cluster : Fuse'
icon: circle
---

# Fuse Clusters

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Finds Point/Edge and Edge/Edge intersections between all input clusters.

#### How It Works

The Cluster : Fuse node identifies where points and edges from different clusters intersect with each other. It processes each pair of clusters and checks for three types of intersections:

1. **Point/Point**: When two points from different clusters are close enough to be considered a single point
2. **Point/Edge**: When a point from one cluster intersects with an edge from another cluster
3. **Edge/Edge**: When edges from two different clusters cross each other

For each detected intersection, the node creates new fused geometry at that location. It blends properties and attributes of intersecting elements based on configured blending rules. The result is a collection of new points and edges that represent the merged spatial relationships between input clusters.

#### Configuration

**Point/Point Settings**

Controls how point-to-point intersections are detected and processed. Includes distance thresholds and blending options.

**Find Point-Edge intersection**

Enable detection of Point-Edge intersections.

[**Point/Edge Settings**](../shared-concepts/intersections/point-edge-intersections.md)

Controls how point-edge intersections are detected and processed. Includes distance thresholds and blending options.

**Find Edge-Edge intersection**

Enable detection of Edge-Edge intersections.

[**Edge/Edge Settings**](../shared-concepts/intersections/edge-edge-intersections.md)

Controls how edge-edge intersections are detected and processed. Includes distance thresholds and blending options.

**Default Points** [**Blending Details**](../shared-concepts/blending/)

Defines how fused point properties and attributes are merged together for fused points. This includes position, normal, and custom attributes.

**Default Edges** [**Blending Details**](../shared-concepts/blending/)

Defines how fused point properties and attributes are merged together for fused edges. This includes start/end points, attributes, etc.

**Use Custom Point-Edge Blending**

Enable custom blending rules for Point/Edge intersections.

**Custom Point-Edge** [**Blending Details**](../shared-concepts/blending/)

Defines how fused point properties and attributes are merged together for Point/Edge intersections.

**Use Custom Edge-Edge Blending**

Enable custom blending rules for Edge/Edge intersections.

**Custom Edge-Edge** [**Blending Details**](../shared-concepts/blending/)

Defines how fused point properties and attributes are merged together for Edge/Edge intersections (Crossings).

**Carry Over Settings - Vtx**

Controls which vertex attributes are carried over from input clusters to the fused output points.

**Carry Over Settings - Edges**

Controls which edge attributes are carried over from input clusters to the fused output edges.

**Cluster Output Settings**

Defines how the resulting graph and edge data are structured in the output. Includes options for edge creation, connectivity handling, and output formatting.

#### Usage Example

A common use case is to fuse road networks from multiple clusters to create a unified intersection network. You would:

1. Feed two or more cluster inputs representing different road segments
2. Enable Point-Edge and Edge-Edge intersections
3. Set appropriate distance thresholds for detecting intersections
4. Configure blending rules to preserve important attributes like road type or direction
5. Use the output points and edges to generate a complete road network with proper connectivity

#### Notes

* Performance can be affected by the number of clusters and their complexity; consider using filters to limit input data.
* The node works best when cluster boundaries are well-defined and not overly dense.
* Custom blending settings allow for advanced scenarios like preserving original edge directions or merging attributes in specific ways.
