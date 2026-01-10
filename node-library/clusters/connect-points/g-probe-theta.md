---
icon: circle-dashed
---

# G-Probe : Theta

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Theta/Yao graph spanner - connects to nearest in angular cones.

#### Overview

This subnode defines a probing behavior that creates connections between points using angular cone-based logic. Instead of connecting each point to its nearest neighbor in all directions, it divides the space around each point into cones and finds the closest point within each cone. This approach is useful for creating structured, spanner-like graphs where connections are distributed more evenly across directions.

It's particularly effective when you want to generate a graph that maintains good angular distribution of edges, avoiding overly clustered or sparse regions. It's commonly used in procedural graph generation for navigation meshes, connectivity networks, or spatial relationships.

{% hint style="info" %}
Connects to **Probe** pins on graph-building nodes such as "Build Graph from Points".
{% endhint %}

#### How It Works

This subnode builds a graph by defining angular cones around each point and connecting it to the nearest point within each cone. The process works as follows:

1. For each point, the space around it is divided into a number of angular cones.
2. Each cone is defined by its bisector direction, which is perpendicular to the specified axis.
3. For each cone, the system searches for the nearest point in that direction.
4. If a point is found within the cone, a connection is made from the current point to that neighbor.
5. This process is repeated for all cones around every point.

The **Yao graph variant** modifies this behavior by connecting each point to the _nearest point_ in each cone, rather than projecting points onto the cone bisector and then finding the nearest. The standard **Theta graph** approach projects the search direction onto the cone bisector before finding the nearest neighbor.

This method produces more structured and evenly distributed graphs compared to simple nearest-neighbor approaches, especially when using a higher number of cones.

<details>

<summary>Inputs</summary>

Expects a set of points in 3D space. The probe operates on these points to define connections between them.

</details>

<details>

<summary>Outputs</summary>

Produces a set of directed edges connecting the input points based on angular cone logic.

</details>

#### Configuration

<details>

<summary><strong>NumCones</strong><br><em>Number of cones (typically 6-8). Higher = denser graph, better spanner.</em></summary>

Controls how many angular cones are created around each point. A higher number results in more connections and a denser graph.

**Values**:

* **4**: Minimal cone count, sparse graph.
* **8**: Standard for balanced density.
* **32**: Very dense graph with many connections per point.

</details>

<details>

<summary><strong>ConeAxis</strong><br><em>Axis to build cones around (cones are perpendicular to this)</em></summary>

Defines the axis around which the angular cones are oriented. Cones are constructed perpendicular to this vector, effectively slicing space into wedges around this direction.

For example, setting this to `UpVector` creates horizontal cones, while setting it to `ForwardVector` creates vertical cones.

</details>

<details>

<summary><strong>bUseYaoVariant</strong><br><em>If true, uses Yao graph construction (nearest in cone) instead of Theta (projected nearest)</em></summary>

When enabled, the probe uses the Yao graph logic. Instead of projecting points onto a cone bisector before finding the nearest neighbor, it directly finds the closest point within each cone.

When disabled, it uses the standard Theta graph logic, which projects the search direction to find neighbors.

</details>

#### Usage Example

You have a set of scattered points representing locations in a world and want to connect them into a structured graph where each point connects to its nearest neighbor in several angular directions. You would:

1. Place this subnode in your graph.
2. Set `NumCones` to 8 for a good balance.
3. Set `ConeAxis` to `UpVector` to create horizontal cones.
4. Connect it to the **Probe** input of a "Build Graph from Points" node.

This setup ensures that each point connects to neighbors in a well-distributed angular pattern, useful for generating navigation or connectivity networks.

#### Notes

* A higher number of cones increases the density of connections but also increases processing time.
* The `ConeAxis` setting allows you to control the orientation of the angular distribution (e.g., horizontal vs vertical).
* The Yao variant is more computationally expensive but can produce better spanner properties in some cases.
