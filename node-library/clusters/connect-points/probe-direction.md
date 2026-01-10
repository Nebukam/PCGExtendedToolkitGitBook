---
icon: circle-dashed
---

# Probe : Direction

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Defines a probe that searches for nearby connections in a specified direction.

#### How It Works

This subnode evaluates nearby points or edges and filters them based on how well their orientation aligns with a given direction. It calculates the angle between each candidate's direction and the probe's direction to determine relevance. The probe can be configured to favor either alignment (how closely the directions match) or proximity (distance from the source), allowing for flexible directional searches.

The process works as follows:

1. First, it determines the search direction, which can come from a fixed vector or an attribute on the input points.
2. Then it evaluates all nearby candidates using an angle constraint that defines how closely their directions must match the probe's direction.
3. Candidates are scored based on their directional alignment and optionally filtered by distance.
4. Finally, it selects the best candidate according to the prioritization setting.

#### Configuration

<details>

<summary><strong>bUseComponentWiseAngle</strong><br><em>Use separate angles for each axis.</em></summary>

When enabled, allows defining different maximum angles per X, Y, and Z axis instead of a single angle.

</details>

<details>

<summary><strong>MaxAngle</strong><br><em>Max angle to search within.</em></summary>

The maximum angle (in degrees) allowed between the probe direction and candidate directions. Only applies when `bUseComponentWiseAngle` is disabled.

</details>

<details>

<summary><strong>MaxAngles</strong><br><em>Max angle to search within.</em></summary>

Separate maximum angles for each axis when `bUseComponentWiseAngle` is enabled.

</details>

<details>

<summary><strong>bUnsignedCheck</strong><br><em>Allow both positive and negative directions.</em></summary>

When enabled, the probe considers both forward and reverse directions for alignment checks.

</details>

<details>

<summary><strong>DirectionInput</strong><br><em>Constant direction</em></summary>

Controls whether the probe direction is defined by a constant value or read from an attribute on the input points.

**Values**:

* **Constant**: Use the `DirectionConstant` setting.
* **Attribute**: Read direction from the specified attribute.

</details>

<details>

<summary><strong>bInvertDirection</strong><br><em>└─ Invert</em></summary>

When enabled, reverses the direction read from an attribute before using it for probing.

</details>

<details>

<summary><strong>DirectionConstant</strong><br><em>Constant direction</em></summary>

The fixed direction vector used when `DirectionInput` is set to "Constant".

</details>

<details>

<summary><strong>bTransformDirection</strong><br><em>Transform the direction with the point's</em></summary>

When enabled, applies the point’s rotation or transform to the probe direction before comparison.

</details>

<details>

<summary><strong>Favor</strong><br><em>What matters more?</em></summary>

Determines whether to prioritize candidates that best align with the probe direction (`Dot`) or those closest in position (`Dist`).

**Values**:

* **Best alignment**: Prioritizes candidates with the highest directional match.
* **Closest position**: Prioritizes candidates that are nearest, even if they have lower alignment.

</details>

<details>

<summary><strong>bDoChainedProcessing</strong><br><em>This probe will sample candidates after the other. Can yield different results.</em></summary>

When enabled, this probe performs additional processing steps after other probes, potentially yielding different outcomes depending on earlier filtering.

</details>

#### Usage Example

Use this subnode when you want to connect points that are aligned in a specific direction, such as placing roads or pipes along a consistent orientation. For example, you could define a probe that searches for nearby points within 30 degrees of the forward vector and prioritizes alignment over distance.

#### Notes

* The probe works best with point data where each point has a defined orientation.
* Combining multiple probes can help refine connection logic in complex scenarios.
* Directional probing is especially effective when used alongside other filters like distance or angle constraints.
