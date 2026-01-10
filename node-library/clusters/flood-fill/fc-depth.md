---
description: 'In editor :: PCGEx | Fill Control : Depth'
icon: circle-dashed
---

# FC : Depth

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Control flood fill behavior based on how far a point has diffused from its origin.

#### How It Works

This subnode controls how far points can spread during a flood fill operation by tracking their depth. Depth is measured as the number of steps taken from the original starting point. When a new point is considered for inclusion in the fill, this subnode checks whether that point has exceeded the maximum allowed depth. If it has, the point is rejected and won't be included in the diffusion.

The behavior applies to three key stages of the flood fill process:

1. **Capture**: Determines if a point can be used as a seed.
2. **Probe**: Evaluates whether a candidate point can be added to the diffusion.
3. **Candidate**: Checks if a point can be included in the current diffusion step.

Each stage uses the same depth-checking logic, ensuring consistent behavior throughout the operation.

#### Configuration

<details>

<summary><strong>Max Depth Input</strong><br><em>Whether to use a constant or attribute value for Max Depth.</em></summary>

Controls whether the maximum depth is defined by a fixed number or read from an attribute on the input data.

**Values**:

* **Constant**: Use the value set in the "Max Depth" field.
* **Attribute**: Read the maximum depth from an attribute named in the "Max Depth (Attr)" field.

</details>

<details>

<summary><strong>Max Depth (Attr)</strong><br><em>Max depth Attribute.</em></summary>

The name of the attribute to read the maximum diffusion depth from when "Max Depth Input" is set to "Attribute". This allows for per-point variation in how far a diffusion can spread.

</details>

<details>

<summary><strong>Max Depth</strong><br><em>Max depth Constant.</em></summary>

The fixed maximum number of steps a point can diffuse from its original seed before being rejected. Must be at least 1.

</details>

#### Usage Example

Use this subnode in a flood fill setup where you want to limit how far the fill spreads from each starting point. For example, when generating a cave system, you might use a max depth of 5 to ensure that caves don't extend too far from their entrances, creating more realistic and contained spaces.

#### Notes

* The depth is measured in steps, not distance.
* Using an attribute for Max Depth allows for dynamic control over diffusion limits based on input data.
* This subnode works best with graph-building nodes that support probe-based diffusion logic.
