---
icon: scrubber
---

# Connect Points

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Connect points according to a set of probes.

#### Overview

This node establishes connections between points in clusters using probe operations. It allows you to define how points relate to each other by specifying probe behaviors that determine which points are connected. This is useful for generating graphs or networks from clustered point data, such as creating roads between cities, links between nodes in a system, or structural connections in procedural environments.

It takes input points and applies probe-based logic to create edges between them, optionally projecting points onto surfaces or preventing overlapping connections. You can control the output graph structure through various settings related to edge creation and point handling.

{% hint style="info" %}
Connects to **Points** inputs. Subnodes: **Probe**, **Filter (Generators)**, **Filter (Connectables)**
{% endhint %}

#### How It Works

This node processes input points in clusters and uses probe operations to determine how they connect. For each point, it evaluates the defined probes to find potential connections. Probes can be configured to search for nearby points or use specific rules to define relationships.

The system first filters the input points using optional generator and connectable filters. Then, it applies probe operations to generate edges between points based on their spatial relationships or other criteria. These edges are added to a graph builder that constructs the final output structure.

If projection is enabled, points are projected onto surfaces before connection logic is applied. Coincidence prevention ensures that no two points end up at exactly the same location after processing, which helps avoid degenerate cases in the resulting graph.

The node supports multiple types of probe operations:

* Direct connections
* Chained operations (where one point connects to another through a chain)
* Shared operations (where multiple points connect to a common target)
* Global operations (applied across all points)

Each operation type can be configured independently, and their results are combined into a single graph.

#### Configuration

<details>

<summary><strong>Prevent Coincidence</strong><br><em>When enabled, prevents generated points from overlapping.</em></summary>

When enabled, the node ensures that no two output points occupy the exact same location. This helps avoid issues in downstream processing where overlapping points could cause errors or unexpected behavior.

</details>

<details>

<summary><strong>Coincidence Tolerance</strong><br><em>Minimum distance between points to consider them distinct.</em></summary>

Controls how close two points can be before they are considered coincident. A value of 0.001 means that any two points closer than this distance will be treated as overlapping and adjusted to prevent overlap.

</details>

<details>

<summary><strong>Project Points</strong><br><em>When enabled, projects points onto surfaces before connection logic.</em></summary>

When enabled, points are projected onto surfaces (such as terrain or mesh surfaces) before any connection logic is applied. This ensures that connections respect surface geometry.

</details>

<details>

<summary><strong>Projection Details</strong><br><em>Settings for projecting points onto surfaces.</em></summary>

Controls how projection is performed, including the axis used for projection and other geometric considerations.

</details>

<details>

<summary><strong>Cluster Output Settings</strong><br><em>Graph &#x26; Edges output properties.</em></summary>

Defines how the resulting graph and edges are structured. Includes options such as edge radius calculation methods and solidification settings.

</details>

#### Usage Example

1. Create a set of points representing city locations.
2. Add a **Probe** subnode to define how cities connect (e.g., nearest neighbor or distance-based).
3. Optionally add **Filter** subnodes to control which cities can act as generators or targets.
4. Enable **Project Points** if you want connections to respect terrain elevation.
5. Connect the node to your graph output to generate a network of city connections.

#### Notes

* The node works best with clustered point data where logical relationships exist between points.
* Projection settings are only effective when "Project Points" is enabled.
* Coincidence prevention can slightly increase processing time, especially with many points.
* Probe operations must be carefully configured to avoid excessive or unintended edge creation.
