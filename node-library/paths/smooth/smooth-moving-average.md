---
icon: sliders
---

# Smooth : Moving Average

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Defines a moving average smoothing operation for paths.

#### How It Works

This smoothing subnode creates smoother paths by averaging nearby points in a defined window. For each point in the path, it looks at surrounding points and calculates a new position based on their weighted average. Points closer to the center of the window have more influence on the result than those at the edges. The process works as follows:

1. Each point examines its neighbors within a set window size
2. Neighbors are assigned weights that decrease toward the edges of the window
3. A new position is calculated using this weighted average
4. Boundary conditions are handled based on the selected index safety mode

The algorithm handles both open and closed paths, with different strategies for managing points outside the path's range.

#### Configuration

<details>

<summary><strong>Smoothing</strong><br><em>Controls the size of the averaging window.</em></summary>

Determines how many neighboring points are included in the smoothing calculation. Larger values create more pronounced smoothing effects.

</details>

<details>

<summary><strong>Influence</strong><br><em>Controls how strongly smoothing affects each point.</em></summary>

Adjusts the strength of the smoothing effect. Values range from 0 (no smoothing) to 1 (full smoothing).

</details>

<details>

<summary><strong>Index Safety</strong><br><em>Determines how out-of-bounds indices are handled when collecting neighboring points.</em></summary>

Controls behavior when the smoothing window extends beyond the path boundaries.

**Values**:

* **Ignore**: Out of bounds indices are ignored, leaving gaps in the averaging.
* **Tile**: Indices wrap around to the opposite end of the path (useful for closed loops).
* **Clamp**: Indices are clamped to the nearest valid index (first or last point).
* **Yoyo**: Indices mirror back and forth from the ends of the path.

</details>

{% hint style="info" %}
Connects to the \*\*Smoothing\*\* input pin on path processing nodes like Spline or Path nodes.
{% endhint %}

#### Usage Example

Use this subnode in a path smoothing workflow where you want to reduce sharp angles while preserving overall shape. For example, you might connect it to a Spline node to create smooth terrain paths or organic curves for procedural foliage placement.

#### Notes

* The smoothing parameter acts as the window size, with larger values creating more pronounced smoothing
* Influence controls how strongly the smoothing affects each point (0 = no effect, 1 = full effect)
* For closed loops, consider using "Tile" index safety to maintain continuity
* Performance scales with path length and smoothing window size
