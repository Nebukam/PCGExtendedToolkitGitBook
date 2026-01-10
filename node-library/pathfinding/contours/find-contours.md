---
description: 'In editor :: PCGEx | Pathfinding : Find Cells'
icon: circle
---

# Find Cells

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Finds closed polygonal shapes, or "cells," around seed points by tracing connected edges in a graph.

#### How It Works

This node searches for closed loops formed by connecting edges in a graph around each seed point. It starts at a seed and follows connected edges to trace out a shape. If the resulting shape meets specific criteria defined in the settings, it's considered a valid cell and is output as a path.

The process evaluates whether the traced shape satisfies constraints such as minimum or maximum number of sides, angle thresholds, or other geometric rules. Valid cells are returned as closed polygons, while the original seed points can optionally be filtered based on whether they successfully created a valid cell.

To improve performance with large datasets, the node can use an octree-based search to quickly locate the closest edge to each seed point instead of checking every edge individually.

#### Configuration

<details>

<summary><strong>SeedPicking</strong><br><em>Controls how a seed selects which edge or vertex to start tracing from.</em></summary>

Determines where the tracing begins around each seed point. This affects where the contour starts and can influence the shape of the resulting cell.

</details>

<details>

<summary><strong>Constraints</strong><br><em>Rules that define what makes a valid cell.</em></summary>

Sets criteria for evaluating whether a traced shape is considered valid. These include settings like minimum or maximum number of sides, angle thresholds, and other geometric properties.

</details>

<details>

<summary><strong>Artifacts</strong><br><em>Data computed or output for each generated cell.</em></summary>

Controls how additional information about each cell is calculated or included in the output. This can include properties like convexity, steepness, or color values derived from the cell's structure.

</details>

<details>

<summary><strong>bOutputFilteredSeeds</strong><br><em>Whether to output a separate set of seeds that successfully created valid cells.</em></summary>

When enabled, this subnode outputs an additional point set containing only those seed points that generated a valid closed cell. This helps identify which seeds worked well and can be useful for debugging or filtering.

</details>

<details>

<summary><strong>SeedMutations</strong><br><em>Transformations applied to the seed point before generating the cell.</em></summary>

Defines modifications made to the seed point before it's used in tracing. For example, shifting its position or adjusting its properties to influence the resulting shape.

</details>

<details>

<summary><strong>ProjectionDetails</strong><br><em>Settings for projecting 3D points onto a 2D plane.</em></summary>

Controls how three-dimensional data is flattened into two dimensions for processing. This is helpful when working with geographic or spatial data that needs to be simplified for contour detection.

</details>

<details>

<summary><strong>SeedAttributesToPathTags</strong><br><em>Mapping of seed attributes to tags on the resulting path.</em></summary>

Defines how properties from the original seed point are transferred to tags on the generated cell. This allows associating metadata from the seed with the resulting shape.

</details>

<details>

<summary><strong>SeedForwarding</strong><br><em>Which seed attributes are copied to the output paths.</em></summary>

Specifies which properties from the original seed points should be carried over to the generated cells. This helps retain important information like ID, color, or other attributes.

</details>

<details>

<summary><strong>bUseOctreeSearch</strong><br><em>Whether to use an octree structure for finding the closest edge to a seed.</em></summary>

When enabled, this subnode uses an octree to speed up the process of locating nearby edges. This improves performance when working with large datasets but may slow things down in some cases.

</details>
