---
description: 'In editor :: PCGEx | Path : Resample'
icon: circle
---

# Resample

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Resample path to enforce equally spaced points.

### Overview

This node adjusts the distribution of points along a path so that they are evenly spaced. It's useful when you want to ensure consistent spacing between points, which is important for things like procedural road generation, character movement paths, or any situation where uniform point distribution matters.

The node works by either sampling at fixed intervals (distance-based) or by generating a specific number of points along the path. You can choose between two modes: Sweep, which samples points based on distance or count, and Redistribute, which redistributes existing points more evenly.

{% hint style="info" %}
This node modifies point positions and attributes along paths. Make sure to connect it after nodes that generate or modify paths.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Points representing a path (or multiple paths)
* **Point Filter** (optional): Filters points before processing

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Resampled path(s) with evenly spaced points
* **Point Filter** (optional): Filtered points based on input settings

</details>

### Properties Overview

Controls how the resampling is performed and what attributes are blended.

***

#### General Settings

Controls the core resampling behavior.

**Mode**

_Controls whether to sample points by distance or count._

* **Sweep**: Sample points at regular intervals along the path.
* **Redistribute**: Redistribute existing points more evenly along the path.

**Resolution Mode**

_Controls how the sampling resolution is defined._

* When set to **Distance**, points are spaced by a fixed distance.
* When set to **Count**, a fixed number of points are generated.

**Sample Length**

_Specifies the spacing between points when using Distance mode._

* For example, setting this to `5.0` will place points every 5 units along the path.
* Can be a constant value or read from an attribute on input points.

**Truncate Mode**

_How to round fractional point positions when sampling._

* **None**: No rounding, uses exact position.
* **Round**: Rounds to nearest integer.
* **Ceil**: Rounds up to next integer.
* **Floor**: Rounds down to previous integer.

**Redistribute Evenly**

_When enabled, evenly redistributes points along the path._

* This is only effective in Sweep mode.
* When disabled, points are placed at fixed intervals but may not be perfectly even.

**Preserve Last Point**

_When enabled, keeps the last point of the path during resampling._

* Only applies when **Redistribute Evenly** is disabled.
* Useful for ensuring closed loops or paths that must end at a specific location.

**Blending Settings**

_Configures how attributes are interpolated between resampled points._

* Controls how attribute values are blended across the new point distribution.
* Defaults to Lerp blending, which smoothly interpolates values between points.

**Ensure Unique Seeds**

_When enabled, ensures each resampled path has unique random seeds._

* Prevents identical random behavior when multiple paths are processed together.

***

#### Deprecated Settings

**Resolution\_DEPRECATED**

_Deprecated setting for resolution. Use Sample Length instead._

* This field is no longer functional and should be ignored.
* The new **Sample Length** setting provides the same functionality with more flexibility.
