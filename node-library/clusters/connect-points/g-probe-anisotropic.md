---
icon: circle-dashed
---

# G-Probe : Anisotropic

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Ellipsoidal distance metric for directional connectivity.

#### Overview

The GlobalAnisotropic probe defines a method for determining spatial connections between points based on an ellipsoidal distance metric that accounts for directional preferences. Instead of using simple Euclidean distance, it weights the space along specific axes to favor certain directions when looking for nearby points. This is particularly useful in scenarios where you want to simulate directional constraints—such as preferring connections along a surface normal or a preferred axis.

This probe subnode connects to Probe pins on graph-building nodes and determines how candidates are evaluated for connection. It's ideal when your point data has inherent directional properties, such as terrain normals or object orientations, that should influence which points connect to each other.

{% hint style="info" %}
Connects to **Probe** pins on graph-building nodes.
{% endhint %}

#### How It Works

This probe evaluates candidate points using an ellipsoidal distance metric. It constructs a transformation matrix based on three axes: primary, secondary, and tertiary (computed as the cross product of the first two). Each axis is scaled according to user-defined scale factors, effectively warping the space in which distances are computed.

When looking for neighbors, it calculates the squared distance between a point and its candidates using this transformed coordinate system. The result is used to rank candidates by proximity, with closer points (in ellipsoidal space) being more likely to be selected as connections.

The probe uses a global K-nearest neighbor search, where K defines how many candidates are considered for each point. It can optionally use per-point normals as the primary axis, allowing for dynamic directional preferences based on geometry.

#### Inputs

This subnode does not take direct inputs but is configured via its settings and connects to graph-building nodes that define the point data to be processed.

#### Outputs

This subnode defines a probe behavior that modifies how connections are evaluated in downstream graph-building operations. It does not produce or modify data directly.

#### Configuration

<details>

<summary><strong>PrimaryAxis</strong><br><em>Primary axis (preferred connection direction)</em></summary>

Defines the preferred direction for connections. This axis is scaled by `PrimaryScale` to influence how candidates are ranked.

</details>

<details>

<summary><strong>SecondaryAxis</strong><br><em>Secondary axis (cross direction)</em></summary>

Defines a secondary axis perpendicular to the primary one. Together with the primary axis, it forms the basis of the ellipsoidal space used for distance calculations.

</details>

<details>

<summary><strong>PrimaryScale</strong><br><em>Scale factor for primary axis (>1 = prefer connections along this axis)</em></summary>

Controls how much weight is given to the primary axis when computing distances. A value greater than 1 makes connections along this axis more likely, while a value less than 1 reduces preference.

**Range:** Minimum 0.1

</details>

<details>

<summary><strong>SecondaryScale</strong><br><em>Scale factor for secondary axis</em></summary>

Controls the scaling of the secondary axis in distance calculations. A higher value increases the influence of this direction on connection preferences.

**Range:** Minimum 0.1

</details>

<details>

<summary><strong>TertiaryScale</strong><br><em>Scale factor for tertiary axis (computed as cross product)</em></summary>

Controls the scaling of the tertiary axis, which is automatically computed as the cross product of the primary and secondary axes.

**Range:** Minimum 0.1

</details>

<details>

<summary><strong>K</strong><br><em>Number of nearest neighbors (in GlobalAnisotropic distance)</em></summary>

Determines how many candidates are considered when finding connections for each point. A higher value increases the number of potential connections.

**Range:** Minimum 1

</details>

<details>

<summary><strong>bUsePerPointNormal</strong><br><em>If true, uses per-point normals as primary axis</em></summary>

When enabled, the probe will use the normal vector of each point (if available) as its primary axis. This allows for dynamic directional preferences based on geometry.

</details>

#### Usage Example

Imagine you're generating a network of roads that should follow terrain slopes. You can set the `PrimaryAxis` to align with the surface normal, and scale it higher than the other axes using `PrimaryScale`. This makes the probe prefer connecting points along the slope direction, creating more natural-looking road layouts.

#### Notes

* The probe uses an ellipsoidal distance metric, which means it's not a straight line but rather a warped space.
* If `bUsePerPointNormal` is enabled, ensure your point data includes normal attributes for best results.
* Increasing `K` can lead to more connections but may also increase computational cost.
* The scaling factors affect how the ellipsoid is stretched or compressed in each direction, allowing fine-tuning of directional preferences.
