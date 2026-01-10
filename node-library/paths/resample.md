---
description: 'In editor :: PCGEx | Path : Resample'
icon: circle
---

# Resample

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Resample path to enforce equally spaced points.

#### How It Works

This node adjusts the distribution of points along a path so that they are evenly spaced. It processes each path individually and can either place new points at regular intervals or redistribute existing points more evenly. The method used depends on the selected mode:

* **Sweep**: The node walks along the path and places new points at fixed intervals, determined by the resolution setting. If the path is closed (like a loop), the last point connects back to the first.
* **Redistribute**: The node redistributes existing points more evenly along the path, without adding or removing points.

The resolution controls how frequently points are placed:

* In **Distance** mode, it defines spacing in world units (e.g., 10 units apart).
* In **Count** mode, it defines a fixed number of points to place along the path.

If enabled, blending settings smooth attribute values between resampled points using interpolation or other methods. The node also supports truncation modes to control how fractional point counts are handled.

#### Configuration

<details>

<summary><strong>Mode</strong><br><em>Resampling approach to use.</em></summary>

Controls how the resampling is performed.

**Values**:

* **Sweep**: Walks along the path and places points at fixed intervals.
* **Redistribute**: Redistributes existing points more evenly without changing point count.

</details>

<details>

<summary><strong>Resolution Mode</strong><br><em>Resolution mode.</em></summary>

Defines how resolution is interpreted.

**Values**:

* **Distance**: Points are placed at a fixed distance apart (in world units).
* **Count**: A fixed number of points are placed along the path.

</details>

<details>

<summary><strong>Redistribute Evenly</strong><br><em>When enabled, redistribute points evenly.</em></summary>

When enabled, the node redistributes existing points more evenly along the path. When disabled, it uses a sweep-based approach.

</details>

<details>

<summary><strong>Preserve Last Point</strong><br><em>(ignored for closed loops)</em></summary>

When enabled, ensures that the last point of an open path is preserved in the resampled output, even if it doesn't align with the resolution interval.

</details>

<details>

<summary><strong>Resolution</strong><br><em>Resolution.</em></summary>

Controls how many points are placed along the path or at what distance they are spaced, depending on the resolution mode.

</details>

<details>

<summary><strong>Truncate</strong><br><em>How to handle fractional point counts.</em></summary>

Determines how to round the number of points when the calculated count is not a whole number.

**Values**:

* **None**: No truncation.
* **Round**: Rounds to the nearest integer.
* **Ceil**: Rounds up to the next integer.
* **Floor**: Rounds down to the previous integer.

</details>

<details>

<summary><strong>Blending Settings</strong><br><em>Blending settings used to smooth attributes.</em></summary>

Controls how attribute values are interpolated or blended between resampled points.

</details>

#### Usage Example

You have a path that represents a winding river, but the points along it are unevenly spaced. You want to create a set of evenly distributed waypoints for AI navigation. Set the mode to **Sweep**, resolution mode to **Distance**, and resolution to 5 units. This will place waypoints every 5 world units along the river, ensuring consistent spacing.

#### Notes

* The node works on individual paths; it does not merge or split them.
* For closed loops, the last point is automatically connected to the first, so preserving the last point has no effect.
* Blending settings are only applied when resampling using the **Sweep** mode.
