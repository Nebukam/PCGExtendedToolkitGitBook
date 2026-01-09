---
description: 'In editor :: PCGEx | Filter : Random'
icon: circle-dashed
---

# Random

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Creates a filter that evaluates points based on a random value, using configurable thresholds and weights.

### Overview

This filter determines whether each point passes or fails a condition based on a randomly generated value. It's useful for introducing randomness into procedural workflows, such as filtering out a percentage of points, creating randomized distributions, or applying stochastic behaviors to your content.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like **Point Filter**, **Point Switch**, or **Point Split**.
{% endhint %}

### How It Works

The filter generates a random value for each point and compares it against a threshold. If the random value is greater than or equal to the threshold, the point passes the filter; otherwise, it fails.

Random values are generated using either:

* A fixed seed (same results every run)
* Per-point seeds (different results per point)
* A combination of both

You can also apply a curve to remap the random weights for more nuanced control over how randomness is distributed.

### Configuration

***

#### General

**Random Seed**

_Sets the base seed used for generating random numbers._

When set to a fixed value, all points will get the same random sequence. When using per-point seeds, this value becomes the starting point for the seed calculation.

**Threshold Input**

_Specifies whether the threshold is constant or read from an attribute._

* **Constant**: Use a fixed threshold value.
* **Attribute**: Read the threshold value from an input attribute.

**Threshold (Attr)**

_Reads the pass threshold from an attribute on the input data._

Only visible when "Threshold Input" is set to "Attribute". The value should be between 0 and 1, where:

* 0 means all points fail
* 1 means all points pass

**Remap to 0..1**

_When enabled, remaps the threshold values to fit within a 0–1 range._

Only visible when "Threshold Input" is set to "Attribute". Enable this if your attribute values are outside the 0–1 range and you want them normalized.

**Threshold**

_Sets the fixed pass threshold value._

Only visible when "Threshold Input" is set to "Constant". Value must be between 0 and 1:

* 0 means all points fail
* 1 means all points pass
* 0.5 means half of the points pass

**Per-Point Weight**

_When enabled, uses a per-point weight instead of a fixed threshold._

This allows different points to have different thresholds for passing the filter.

**Weight**

_Reads the random weight from an attribute on the input data._

Only visible when "Per-Point Weight" is enabled. The value should be between 0 and 1.

**Remap to 0..1 (Weight)**

_When enabled, remaps the weight values to fit within a 0–1 range._

Only visible when "Per-Point Weight" is enabled. Enable this if your attribute values are outside the 0–1 range and you want them normalized.

**Use Local Curve**

_When enabled, uses an in-editor curve for weighting._

Controls whether to use the local curve or an external asset.

**Weight Curve (Local)**

_A custom curve used to remap random weights._

Only visible when "Use Local Curve" is enabled. This curve defines how the random values are distributed. For example:

* A steep curve will make most points fail
* A gradual curve will allow more points to pass

**Weight Curve (External)**

_An external asset used to remap random weights._

Only visible when "Use Local Curve" is disabled. This allows you to load a pre-made curve from an asset.

**Invert Result**

_When enabled, reverses the filter result._

If the filter normally passes points with random values ≥ threshold, enabling this will make it pass points with random values < threshold.

### Usage Example

Create a **Point Filter** node and connect this factory to its **Filter** pin. Set the threshold to 0.3 to allow 30% of points to pass. This is useful for creating sparse distributions or randomly selecting subsets of data.

You can also use it with an attribute to vary the pass rate per point, such as filtering based on a "rarity" attribute where rare items have a lower chance of passing.

### Notes

* The filter works by generating a random number between 0 and 1 for each point.
* If you're using multiple filters in a group, combine them with an **AND** or **OR** node to control how they interact.
* For consistent results across runs, use a fixed seed. For varied outcomes, let the system generate seeds automatically.
* The weight curve can be used to create non-uniform distributions — for example, a bell-shaped curve to make most points pass near the middle of the range.

### Inputs

* **Points**: Input point data to filter
* **Threshold Attribute** (optional): Attribute containing threshold values per point
* **Weight Attribute** (optional): Attribute containing weight values per point

### Outputs

* **Filtered Points**: Points that passed the random filter
* **Rejected Points**: Points that failed the random filter
