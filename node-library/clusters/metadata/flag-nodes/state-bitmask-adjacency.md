---
description: 'In editor :: PCGEx | State : Bitmask Adjacency'
icon: circle-dashed
---

# State : Bitmask Adjacency

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> A bulk-check for directional adjacency, using bitmask collections.

#### How It Works

This subnode evaluates whether points in a cluster are adjacent based on directional criteria and applies bitwise operations to set or clear flag bits accordingly. For each point, it calculates the direction vector and compares it with neighboring points using a dot product. If the angle between directions is within the specified threshold, it applies bitwise operations to update the flag bits.

The process works as follows:

1. For each point in the cluster, it calculates the direction vector.
2. It checks the directional relationship with neighboring points using a dot product comparison against the configured angle threshold.
3. If the directional check passes, it applies the success bitmask composition to the point's flag.
4. If the directional check fails and alternative bitmasks are enabled, it applies the fail composition instead.
5. The final flag value is updated based on these bitwise operations.

The subnode supports both regular and inverted directional checks, allowing you to define when flags should be set or cleared based on whether directions match or don't match the threshold.

#### Configuration

<details>

<summary><strong>Angle</strong><br><em>Shared angle threshold</em></summary>

Controls the maximum allowed angular difference between point directions for an adjacency check to pass. Values are in degrees.

</details>

<details>

<summary><strong>bTransformDirection</strong><br><em>Whether to transform directions using the vtx' point transform</em></summary>

When enabled, the direction vectors of points are transformed using their local transforms before performing directional comparisons.

</details>

<details>

<summary><strong>Compositions</strong><br><em>Operations executed on the flag if all filters pass (or if no filter is set)</em></summary>

Defines the bitwise operations to apply when adjacency checks succeed. These operations modify the flag bits of points that meet the directional criteria.

</details>

<details>

<summary><strong>Collections</strong><br><em>Operations executed on the flag if all filters pass (or if no filter is set)</em></summary>

Maps bitmask collections to specific bitwise operations for successful adjacency checks. Each collection defines a set of bitmasks that are applied when conditions are met.

</details>

<details>

<summary><strong>bUseAlternativeBitmasksOnFilterFail</strong><br><em>If enabled, and if filters exist, will apply alternative bitwise operations when filters fail.</em></summary>

When enabled, this setting allows you to define different bitwise operations that are applied when adjacency checks fail.

</details>

<details>

<summary><strong>OnFailCompositions</strong><br><em>Operations executed on the flag if any filters fails</em></summary>

Defines the bitwise operations to apply when adjacency checks fail. Only active when "bUseAlternativeBitmasksOnFilterFail" is enabled.

</details>

<details>

<summary><strong>OnFailCollections</strong><br><em>Operations executed on the flag if any filters fails</em></summary>

Maps bitmask collections to specific bitwise operations for failed adjacency checks. Only active when "bUseAlternativeBitmasksOnFilterFail" is enabled.

</details>

<details>

<summary><strong>bInvert</strong><br><em>Whether to invert the dot product check. Bitmasks will be applied with direction does NOT match.</em></summary>

When enabled, the subnode applies bitmasks when directions do NOT meet the angle threshold instead of when they DO meet it.

</details>

#### Usage Example

Use this subnode in a cluster processing graph where you want to define adjacency relationships based on directional alignment. For example, you might use it to flag points that are aligned with their neighbors as "connected" and those that aren't as "disconnected", using different bitmasks for each case.

#### Notes

* This subnode works best when used in conjunction with other state management nodes.
* The angle threshold should be set based on your specific adjacency requirements.
* Bitmask collections must be defined separately and linked to this node.
* Performance is optimized for large clusters with many points.
