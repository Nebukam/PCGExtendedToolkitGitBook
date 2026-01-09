---
description: 'In editor :: PCGEx | Filter : Random'
icon: circle-dashed
---

# Random

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Filter points using a random value based on a threshold and optional weight.

#### Overview

This subnode filters points by comparing a random value against a defined threshold. It can optionally use per-point weights to influence the filtering behavior, making it useful for creating randomized selection or exclusion patterns across point data. This is especially helpful when you want to introduce stochastic variation into procedural generation workflows.

It connects to **Filter** pins on processing nodes that accept point filters. Multiple filter subnodes can be combined to create more complex filtering logic.

#### How It Works

This subnode generates a random value for each point and compares it against a threshold to determine whether the point passes or fails the filter. The random number is generated using a seed, which can be constant or derived from point attributes. Optionally, a weight per point can be used to adjust the effective threshold or influence how the random value is interpreted.

The process works as follows:

1. For each point, a random number is generated within the 0-1 range.
2. If a **per-point weight** is enabled, that weight is retrieved and optionally remapped to the 0-1 range.
3. The threshold is either a constant value or taken from an attribute, and can also be remapped if needed.
4. The random value is compared against the adjusted threshold:
   * If the random value is **less than** the threshold, the point passes the filter.
   * If the **bInvertResult** is enabled, this logic is flipped.
5. A curve can optionally remap the weight to alter how it influences the filtering behavior.

<details>

<summary>Inputs</summary>

Expects a set of points with optional attributes for threshold and weight if using attribute-based inputs.

</details>

<details>

<summary>Outputs</summary>

Points that pass the random filter are passed through; those that fail are excluded from further processing.

</details>

#### Configuration

***

**RandomSeed**

_The seed used to initialize the random number generator._

Controls the starting point for the random sequence. Using a fixed seed ensures reproducible results, while a dynamic seed (e.g., based on point position) introduces variation per point.

**ThresholdInput**

_Type of value source for the threshold._

Determines whether the threshold is a constant or read from an attribute on the input points.

**Values**:

* **Constant**: Use a fixed numeric value.
* **Attribute**: Read the threshold value from a specified attribute.

**bRemapThresholdInternally**

_Whether to normalize the threshold internally._

When enabled, the threshold value is remapped to fit within a 0–1 range. Useful when your input threshold values are outside that range.

**Threshold**

_The fixed threshold value used for comparison._

Only active when **ThresholdInput** is set to **Constant**. Value must be between 0 and 1.

**bPerPointWeight**

_Whether to use per-point weights for filtering._

When enabled, each point can have a different weight that affects the random filtering behavior.

**Weight**

_The attribute used to define per-point weights._

Only active when **bPerPointWeight** is enabled. Defines which attribute to read the weight from.

**bRemapWeightInternally**

_Whether to normalize the weight internally._

When enabled, the weight value is remapped to fit within a 0–1 range. Useful if your input weights are outside that range.

**bUseLocalCurve**

_Whether to use an in-editor curve or an external asset._

Controls whether to define the weight curve directly in the node or reference an external curve asset.

**LocalWeightCurve**

_The curve used to remap the weight._

Only visible when **bUseLocalCurve** is enabled. Defines how weights are transformed before being applied.

**WeightCurve**

_External curve asset used for weight remapping._

Only active when **bUseLocalCurve** is disabled. Allows referencing a pre-defined curve asset from disk.

**bInvertResult**

_Whether to invert the filter result._

When enabled, points that would normally pass now fail and vice versa.

**Config**

_Filter configuration settings._

Contains all of the above settings grouped together for easier management.

#### Usage Example

Use this subnode to randomly select 30% of points from a point cloud. Set **Threshold** to `0.3`, enable **bPerPointWeight**, and use an attribute like "Density" as the weight. This creates a weighted random selection where denser areas are more likely to be included.

#### Notes

* The random seed can be set to a constant or derived from point attributes for varied results.
* When using per-point weights, consider remapping them to a 0–1 range if they're not already.
* Combining this filter with other filters allows for complex conditional logic in procedural workflows.
