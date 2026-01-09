---
icon: circle-dashed
---

# Probe : Anisotropic

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a probe that searches in 16 directions around the X/Y axis to find nearby connections. This probe is particularly useful for detecting connections that follow a directional pattern, such as roads or pathways that prefer certain orientations.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like "Connect Points" or "Cluster Points"
{% endhint %}

### Overview

This factory creates a directional probing operation that evaluates potential connections from each point in 16 evenly spaced directions around the X/Y plane. It's designed for scenarios where you want to detect nearby points that align with specific orientations, such as detecting road segments that prefer certain angles.

When used in a PCG graph, this probe will be consumed by nodes that process point connections and can be combined with other filters to create complex connection rules.

### Inputs

* **Points**: Input point data to process
* **Filter**: Connection filter to apply to the probe results

### Outputs

* **Filtered Points**: Output points after applying the probe filter

### How It Works

The probe evaluates each point in 16 directions (every 22.5 degrees) around the X/Y axis. For each direction, it searches for nearby points within a specified radius and checks if they align with that direction based on an angle threshold. The probe returns the best match found in any of these directions.

The search is performed using a directional cosine comparison. Points are considered aligned if their dot product with the probe direction is above a minimum threshold determined by the Max Angle setting.

### Configuration

***

#### General

**Max Angle**

_Controls the maximum angle (in degrees) that a candidate point can deviate from the probe direction to be considered a match._

* A value of 5 degrees means only points within ±5 degrees of the probe direction will be considered.
* Higher values allow for more lenient matching, useful for detecting connections that may not align perfectly.
* The maximum allowed value is 11.25 degrees.

**Transform Direction**

_Controls whether to use the point's transform when calculating probe directions._

* When enabled, the probe directions are transformed using the point's local rotation before comparison.
* When disabled, probe directions are used as-is in world space.
* Recommended to keep enabled for most use cases to properly align with point orientation.

### Usage Example

Use this probe when you want to connect points that follow directional patterns, such as:

1. Connecting road segments that prefer certain orientations
2. Creating pathways that follow specific angular preferences
3. Linking points based on directional alignment rather than simple distance

Connect this factory to a "Connect Points" node's Filter pin. The probe will evaluate each point against its 16 surrounding directions, finding the best matching connection within the specified angle threshold.

### Notes

* The probe uses 16 evenly spaced directions (22.5° increments) around the X/Y axis
* Recommended to use internal projection for best results when working with point orientations
* Higher Max Angle values will produce more connections but may reduce precision
* This probe is particularly effective when combined with other filters to create complex connection rules
