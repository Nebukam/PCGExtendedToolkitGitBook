---
description: 'Refine : Line Trace'
icon: sliders
---

# Line Trace

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Filters edges based on line-of-sight checks between their start and end points, optionally using scatter sampling for robustness.

#### Overview

This subnode determines whether an edge is valid by performing a line trace between its start and end points. It's useful for creating connections that are not obstructed by geometry, such as in navigation mesh generation or visibility-based graph construction. You can configure it to perform a single check or multiple scattered checks to improve robustness against occlusions.

{% hint style="info" %}
Connects to the **Refine** input pin on cluster processing nodes like **Cluster : Build Graph**.
{% endhint %}

#### How It Works

This subnode evaluates each edge in a cluster by casting a line from its start point to its end point. If the line trace is blocked by geometry, the edge is marked as invalid. Optionally, it can perform multiple scattered line traces around the main segment to better detect occlusions.

* For each edge, it calculates the start and end positions.
* It performs one or more line casts:
  * If **Scatter** is disabled: A single line cast from start to end.
  * If **Scatter** is enabled: Multiple line casts from start to randomly scattered points around the end position.
* If any of these checks succeed (i.e., no collision), the edge is considered valid.
* If all checks fail, the edge is marked as invalid.
* The **Two-Way Check** setting ensures that if the first direction fails, it tries the reverse direction to catch back-facing geometry.

<details>

<summary>Inputs</summary>

Expects a cluster with valid vertex and edge data. It uses the positions of the start and end points of each edge for line tracing.

</details>

<details>

<summary>Outputs</summary>

Modifies the validity of edges in the cluster. Valid edges are kept; invalid ones are marked as such and can be filtered out by downstream nodes.

</details>

#### Configuration

<details>

<summary><strong>Collision Settings</strong><br><em>Defines what geometry to check against for line traces.</em></summary>

Controls how the line trace interacts with the world. Options include checking against collision channels, object types, or physics profiles.

</details>

<details>

<summary><strong>Two-Way Check</strong><br><em>If the first linecast fails, tries the other way around.</em></summary>

When enabled, performs a second line cast in the reverse direction if the initial one fails. This helps detect backfacing geometry but increases processing cost.

</details>

<details>

<summary><strong>Scatter</strong><br><em>Perform multiple line traces from start to scattered points around end.</em></summary>

When enabled, performs multiple line traces from the start point to randomly scattered positions around the end point. This improves robustness against occlusions but increases computation.

</details>

<details>

<summary><strong>Samples</strong><br><em>Number of scattered samples to perform when Scatter is enabled.</em></summary>

Controls how many random points are generated around the end position for line tracing. Higher values increase accuracy but also cost.

**Range:** Minimum 1

</details>

<details>

<summary><strong>Radius</strong><br><em>Scattering radius around the end point.</em></summary>

Defines the maximum distance from the end point where scattered samples are placed. Larger radii increase coverage but may slow down processing.

</details>

<details>

<summary><strong>Invert</strong><br><em>When enabled, invalidates edges that pass the line trace instead of valid ones.</em></summary>

When enabled, edges that pass the line trace are marked as invalid, and those that fail are kept. Useful for creating exclusion zones or removing visible connections.

</details>

#### Usage Example

Use this subnode to build a graph where only edges with clear line-of-sight between their start and end points are included. For instance, in a navigation mesh generation setup, you might use it to ensure paths don't go through walls or obstacles.

#### Notes

* This subnode requires the main thread for initialization due to collision settings.
* Enabling **Scatter** significantly increases processing time but improves accuracy.
* The **Two-Way Check** setting is useful when dealing with backfacing geometry or complex meshes.
