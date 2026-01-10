---
icon: circle-dashed
---

# Probe : Bitmasks

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Probe using bitmasks references & collections.

#### How It Works

This subnode evaluates nearby points based on bitmask flags and collections to determine which ones are suitable for connection or interaction. It checks each point's bitmask against defined filters and uses prioritization rules to select the best candidate. The selection process considers either how well a point aligns with a direction vector or how close it is to the source point, depending on your settings.

When multiple filters are configured, all must pass for a point to be considered valid. The subnode calculates alignment scores using dot products and distance metrics, then applies bitmask composition operations to the selected candidate's flags if all conditions are met.

#### Configuration

<details>

<summary><strong>bTransformDirection</strong><br><em>Transform the direction with the point's.</em></summary>

When enabled, the direction used for alignment checks is adjusted according to each point's local orientation. This allows directional probing that respects individual point orientations.

</details>

<details>

<summary><strong>Favor</strong><br><em>What matters more?</em></summary>

Controls how candidates are prioritized when selecting the best match.

* **Best alignment**: Prioritizes candidates that align most closely with the direction vector, even if they're not the closest.
* **Closest position**: Prioritizes candidates that are nearest to the source point, regardless of alignment.

</details>

<details>

<summary><strong>Angle</strong><br><em>Shared angle threshold</em></summary>

The maximum angle (in degrees) allowed between a candidate's direction and the probe direction for it to be considered in the alignment calculation. A lower value means stricter alignment requirements.

</details>

<details>

<summary><strong>Compositions</strong><br><em>Operations executed on the flag if all filters pass (or if no filter is set)</em></summary>

A list of bitmask operations that are applied to the selected candidate's flags when all filters pass. These operations define how the final bitmask value is computed from the candidate's original flags.

</details>

<details>

<summary><strong>Config</strong><br><em>Filter Config.</em></summary>

The core configuration for this probe, including filter settings and bitmask operations to apply.

</details>

#### Usage Example

Use this subnode in a graph where you want to connect points based on their bitmask compatibility. For example, if you have points representing different types of terrain (mountain, forest, water) defined by bitmasks, you could use this probe to find nearby points that match specific terrain combinations for generating paths or connections.

#### Notes

This subnode is designed to work with point data that has been processed through bitmask-related nodes. The performance of the probe can be affected by the number of candidate points and the complexity of the bitmask operations defined in the Compositions list.
