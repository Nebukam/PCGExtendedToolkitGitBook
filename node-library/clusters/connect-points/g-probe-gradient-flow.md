---
icon: circle-dashed
---

# G-Probe : Gradient Flow

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> K-Nearest Neighbors

#### Overview

The G-Probe : Gradient Flow subnode defines a connection behavior that links points based on gradient flow direction and magnitude. It evaluates nearby points using a flow attribute (like density or height) to determine which neighbors are most likely to be connected, simulating natural flow patterns such as water or erosion.

This is useful for creating organic-looking connections between points, such as rivers flowing downhill, or paths following elevation changes. The subnode can be configured to only connect uphill or to follow the steepest gradient path, offering flexibility in how connections are generated.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes that support gradient-based point connection logic.
{% endhint %}

#### How It Works

This subnode evaluates each point in a dataset against its neighbors using a flow attribute (e.g., density or height). It identifies the K nearest neighbors and determines which ones to connect to based on:

1. **Gradient Direction**: If enabled, it only connects to neighbors with higher values (flow uphill).
2. **Steepest Path**: If enabled, it selects only the neighbor that has the steepest gradient.
3. **Flow Attribute**: It uses a specified attribute to determine flow direction and strength.

The algorithm first builds an octree for efficient neighbor lookups, then for each point:

* Finds its K nearest neighbors.
* Filters them based on the gradient flow rules (uphill only, steepest only).
* Establishes connections from the current point to the selected neighbors.

This simulates natural flow behaviors like water following terrain gradients or erosion patterns.

<details>

<summary>Inputs</summary>

Expects a set of points with an associated flow attribute (e.g., density or height) used to determine gradient direction and magnitude. The points must be in a format that supports neighbor lookups, such as point clouds or meshes.

</details>

<details>

<summary>Outputs</summary>

Produces a set of connections between points based on the gradient flow rules defined by the settings. These connections can then be consumed by downstream nodes to generate paths, edges, or other structures.

</details>

#### Configuration

<details>

<summary><strong>bUphillOnly</strong><br><em>If true, only connect to higher values (flow uphill).</em></summary>

When enabled, the subnode will only create connections to neighbors with a higher value in the flow attribute. This simulates upward flow behavior such as water flowing from low to high elevation.

</details>

<details>

<summary><strong>bSteepestOnly</strong><br><em>If true, only connect to the steepest neighbor.</em></summary>

When enabled, the subnode will select only the neighbor with the steepest gradient for connection. This creates more defined and sharp flow paths, rather than connecting to multiple neighbors.

</details>

<details>

<summary><strong>FlowAttribute</strong><br><em>Attribute used to determine gradient direction.</em></summary>

Specifies which attribute is used to evaluate the gradient. For example, using a "Density" or "Height" attribute to simulate how water or flow would move across the terrain.

</details>

<details>

<summary><strong>Config</strong><br><em>Filter Config.</em></summary>

General configuration settings for the probe operation, including neighbor count and other global parameters that affect how points are evaluated.

</details>

#### Usage Example

Use this subnode to create river or erosion patterns in a terrain. Set the flow attribute to "Height" and enable "bUphillOnly" to ensure connections only go from high to low elevations. Then, connect it to a node that generates edges between points to visualize the simulated water flow.

#### Notes

* Requires an octree for efficient neighbor lookups.
* The performance of this subnode scales with the number of points and the K value used for neighbors.
* Can be combined with other filters to refine connection behavior.
