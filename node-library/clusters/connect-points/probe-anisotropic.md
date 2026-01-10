---
icon: circle-dashed
---

# Probe : Anisotropic

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Probe in 16 directions over the X/Y axis. It's recommended to use internal projection to get the best results.

#### Overview

This subnode defines a probing behavior that searches for nearby connections or points in 16 evenly spaced directions around the X/Y plane. It's particularly useful when you want to detect nearby geometry or connections with directional sensitivity, such as finding adjacent points along specific axes or diagonals. This approach can help avoid issues with random or uniform sampling by focusing on structured angular directions.

It connects to Filter pins on processing nodes that require a probing definition. You can combine multiple probe subnodes to create more complex filtering behaviors.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### How It Works

This subnode performs a directional search in 16 specific angles around the X/Y plane, spaced every 22.5 degrees (0° to 337.5°). For each point, it evaluates candidates in these directions and selects the best match based on angle alignment and distance.

It uses a dot product threshold derived from the MaxAngle setting to determine how closely aligned a candidate must be with the probe direction. If bTransformDirection is enabled, the probe directions are transformed using the point's orientation; otherwise, they remain fixed in world space.

The search radius is determined by the context and candidate points are evaluated against this angular constraint. The best candidate per direction is selected based on how well it aligns with the probe direction and its proximity to the point being processed.

<details>

<summary>Inputs</summary>

* Points to be probed (typically from a point cloud or cluster)
* Candidate data (points or edges to search for connections)

</details>

<details>

<summary>Outputs</summary>

* Filtered points that meet the directional probing criteria
* Connection data based on the best candidates found in each direction

</details>

#### Configuration

<details>

<summary><strong>MaxAngle</strong><br><em>Max angle to search within.</em></summary>

Controls how wide the angular search window is for each probe direction. A smaller value means stricter alignment requirements.

**Values**:

* **0 to 11.25**: Angle in degrees. Higher values allow more lenient matching.

</details>

<details>

<summary><strong>bTransformDirection</strong><br><em>Transform the direction with the point's.</em></summary>

When enabled, the probe directions are rotated according to the point's local orientation (rotation). When disabled, the directions remain fixed in world space.

**Values**:

* **False**: Directions are fixed in world space.
* **True**: Directions are transformed by the point's rotation.

</details>

<details>

<summary><strong>Config</strong><br><em>Filter Config.</em></summary>

A structure that holds the settings for how this probe behaves, including MaxAngle and bTransformDirection.

</details>

#### Usage Example

Use this subnode when you want to detect nearby points or edges in a specific angular pattern. For instance, when connecting clusters of points, you might use this to ensure connections are made only along cardinal directions (north, east, south, west) or diagonals, which can create more structured and predictable layouts.

#### Notes

* The 16 directions are evenly spaced around the X/Y plane.
* Using bTransformDirection = true is recommended for better results when working with rotated points.
* This subnode works best in conjunction with nodes that support directional probing, such as connection or linking operations.
