---
icon: circle-dashed
---

# Probe : Tensor

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Creates a probe that samples tensor field data at point locations and determines probe direction based on tensor properties.

### Overview

This factory generates a specialized probe that evaluates tensor field data at each point's location to determine an optimal direction for probing. It's designed to work with tensor fields (like gradient or orientation fields) to guide point selection toward meaningful directions in the data.

{% hint style="info" %}
Connects to Filter pins on processing nodes like "Find Connections" or "Find Nearest"
{% endhint %}

### How It Works

This probe samples tensor field data at each point's location and uses that information to determine a preferred direction for finding nearby connections. Instead of simply looking for the closest points, it evaluates the local tensor field to find candidates that align with the tensor's orientation.

The probe can prioritize either:

* **Best alignment**: Candidates that best match the tensor's direction
* **Closest position**: Candidates that are nearest regardless of alignment

### Configuration

***

#### General Settings

**Invert Tensor Direction**

_When enabled, the sampled tensor direction is mirrored (multiplied by -1) before being used for probing._

This allows you to reverse the direction that the tensor suggests for probing.

**Favor**

_Controls whether the probe prioritizes candidates based on alignment with the tensor field or proximity to the point._

**Values**:

* **Best alignment**: The probe favors candidates that align best with the tensor's direction, even if they're not the closest.
* **Closest position**: The probe favors candidates that are closest to the point, regardless of their alignment with the tensor.

**Use Component-Wise Angle**

_When enabled, the angle constraint is applied separately on each axis._

This allows for different maximum angles in X, Y, and Z directions.

**Max Angle**

_Maximum angle (in degrees) within which candidates will be considered when not using component-wise angles._

Only candidates within this angular threshold relative to the tensor direction will be considered.

**Max Angles**

_Maximum angles (in degrees) per axis when using component-wise angle constraints._

Controls the maximum angle allowed in each of the X, Y, and Z directions separately.

**Do Chained Processing**

_When enabled, the probe performs additional processing after initial candidate selection._

This can yield different results by allowing for more complex candidate evaluation logic.

**Tensor Sampling Settings**

_Configuration for how tensor data is sampled at point locations._

These settings control how the tensor field is evaluated:

* **Radius**: The sampling area around each point
* **Min Step Fraction**: Minimum step size as a fraction of base radius
* **Max Step Fraction**: Maximum step size as a fraction of base radius
* **Error Tolerance**: How closely the sampling follows the tensor field
* **Max Sub-Steps**: Maximum number of steps per sample

### Usage Example

Use this probe when you want to find connections that follow a specific tensor field direction, such as:

* Finding terrain features aligned with slope gradients
* Connecting points along flow directions in fluid simulations
* Creating structures that follow magnetic field lines or other directional fields

Connect this factory to a "Find Connections" node's Filter pin. The probe will then evaluate each point against the tensor field and only pass through candidates that align with the tensor direction within your specified angle constraints.

### Notes

* This probe works best when connected to nodes that support directional probing
* The tensor sampling settings can be tuned based on the complexity of your tensor field
* Consider using "Closest position" favoring if you want to maintain some proximity while still respecting tensor directions
* Component-wise angles allow for more nuanced control over directional constraints in different spatial dimensions
