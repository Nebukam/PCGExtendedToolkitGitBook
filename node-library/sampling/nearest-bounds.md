---
description: 'In editor :: PCGEx | Sample : Nearest Bounds'
icon: circle
---

# Nearest Bounds

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Sample data from the nearest target bounds based on point-to-bounds distance.

### Overview

This node finds and samples data from the closest or most relevant target bounds relative to each input point. It's useful for scenarios where you want to pull information from nearby objects, such as sampling terrain properties from nearby terrain bounds, or getting data from nearby buildings or obstacles.

It supports multiple sampling methods, allowing you to choose how many targets to sample and which one to prioritize based on distance or size. You can also blend the sampled data using various blending modes, and output additional information like distances, angles, and transforms.

{% hint style="info" %}
This node requires a valid bounds source (like scaled bounds or custom bounds) for both input points and target data. Make sure your data has proper bounds defined.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Point Data): Points to sample from
* **Target Data** (Point Data): Target points with bounds to sample from

</details>

<details>

<summary>Outputs</summary>

* **Main Output** (Point Data): Modified input points with sampled data and optional outputs

</details>

### Properties Overview

General settings for sampling behavior.

***

#### General

Controls core sampling logic and filtering options.

**Data Matching**

_Controls how target data is matched to source points._

* Allows you to filter which targets get sampled by which data
* Useful when you have multiple sets of targets and want to control which ones are used per point

**Sample Method**

_Selects the method for choosing which bounds to sample from._

* **All**: Process all overlapping bounds
* **Closest Bounds**: Picks & process the closest bounds only
* **Farthest Bounds**: Picks & process the farthest bounds only
* **Largest Bounds**: Picks & process the largest bounds only (extents length)
* **Smallest Bounds**: Picks & process the smallest bounds only (extents length)
* **Best Candidate**: Picks the best candidate based on sorting rules

**Sort Direction**

_Sets the sort direction when using Best Candidate sampling._

* **Ascending**: Sorts from smallest to largest values
* **Descending**: Sorts from largest to smallest values

**Bounds Source**

_Selects which bounds to use for sampling._

* **Scaled Bounds**: Use scaled bounds (default)
* **Bounds**: Use raw bounds
* **Custom**: Use custom bounds defined in attributes

**Distance Type**

_Specifies the distance metric used for calculations._

* **Euclidian**: Standard straight-line distance
* **Manhattan**: Grid-based distance (sum of absolute differences)
* **Chebyshev**: Maximum of absolute differences

**Apply Sampling**

_Controls whether to apply sampled results directly to input points._

* When enabled, sampled values are written directly to the input point attributes
* Not mutually exclusive with output attributes

***

#### Weighting

Controls how weights are calculated for blending.

**Use Local Curve**

_When enabled, uses an in-editor curve for weight remapping._

* Allows you to define custom weighting behavior based on distance

**Weight Remap**

_The curve used to remap weights over distance._

* Only visible when "Use Local Curve" is enabled
* Defines how much influence each sampled point has based on its distance

**Weight Curve Lookup**

_Configures lookup table settings for weight calculation._

* Controls sampling resolution and mode for weight lookups

***

#### Blending

Controls how data from multiple samples is combined.

**Blending Interface**

_Specifies the blending approach to use._

* **Individual**: Blend each attribute separately using its own method
* **Monolithic**: Blend all attributes together using a single method

**Target Attributes**

_Lists attributes to sample from targets when using Monolithic blending._

* Only visible when "Blending Interface" is set to Monolithic
* Defines which attributes are sampled and how they're blended

**Blend Point Properties**

_When enabled, blends point properties like location, rotation, and scale._

* Only visible when "Blending Interface" is set to Monolithic
* Applies blending to core point properties

**Point Properties Blending Settings**

_Configures how point properties are blended._

* Controls the blending type for location, rotation, and scale

***

#### Outputs

Controls which additional data is written to output attributes.

**Write Success**

_When enabled, writes a boolean indicating if sampling was successful._

* Useful for filtering or debugging failed samples

**Success Attribute Name**

_Name of the boolean attribute that stores success status._

* Only visible when "Write Success" is enabled

**Write Transform**

_When enabled, writes the sampled transform._

* Stores the combined transform from all sampled targets

**Transform Attribute Name**

_Name of the transform attribute to write sampled data to._

* Only visible when "Write Transform" is enabled

**Write LookAt Transform**

_When enabled, writes a look-at transform based on sampled data._

* Calculates a transform that points toward the sampled target

**LookAt Transform Attribute Name**

_Name of the transform attribute for look-at data._

* Only visible when "Write LookAt Transform" is enabled

**Align Axis**

_Specifies which axis of the look-at transform to align with the sampling direction._

* **Forward**: Aligns forward axis with direction
* **Backward**: Aligns backward axis with direction
* **Right**: Aligns right axis with direction
* **Left**: Aligns left axis with direction
* **Up**: Aligns up axis with direction
* **Down**: Aligns down axis with direction

**Use Up From**

_Specifies the source for the up vector used in look-at calculations._

* **Constant**: Uses a fixed constant value
* **Attribute**: Uses an attribute from the input points
* **Target**: Uses the up vector from target data

**Up Vector Attribute**

_Name of the attribute to use as the up vector when "Use Up From" is set to Attribute._

* Only visible when "Use Up From" is set to Attribute

**Up Vector Constant**

_Fixed value used for the up vector when "Use Up From" is set to Constant._

* Only visible when "Use Up From" is set to Constant

**Write Distance**

_When enabled, writes the sampled distance._

* Stores the calculated distance from point to target bounds

**Distance Attribute Name**

_Name of the double attribute to write distance to._

* Only visible when "Write Distance" is enabled

**Normalize Distance**

_When enabled, outputs normalized distance instead of actual distance._

* Normalizes the distance between 0 and 1 based on maximum distance

**One Minus Distance**

_When enabled, outputs 1 - normalized distance._

* Useful for inverse weighting or opacity calculations

**Distance Scale**

_Scales the output distance value._

* Multiplies the final distance by this factor

**Write Signed Distance**

_When enabled, writes a signed distance._

* Calculates distance with directionality (positive/negative based on axis)

**Signed Distance Attribute Name**

_Name of the double attribute to write signed distance to._

* Only visible when "Write Signed Distance" is enabled

**Sign Axis**

_Specifies which axis to use for calculating the signed distance._

* **Forward**: Uses X-axis
* **Backward**: Uses -X-axis
* **Right**: Uses Y-axis
* **Left**: Uses -Y-axis
* **Up**: Uses Z-axis
* **Down**: Uses -Z-axis

**Signed Distance Scale**

_Scales the output signed distance value._

* Multiplies the final signed distance by this factor

**Write Component Wise Distance**

_When enabled, writes component-wise distances._

* Outputs separate distances for each axis (X, Y, Z)

**Component Wise Distance Attribute Name**

_Name of the FVector attribute to write component-wise distances to._

* Only visible when "Write Component Wise Distance" is enabled

**Absolute Component Wise Distance**

_When enabled, outputs absolute values for component-wise distances._

* Makes all components positive

**Write Angle**

_When enabled, writes an angle calculated from sampled data._

* Computes the angle between point and target direction

**Angle Attribute Name**

_Name of the double attribute to write angle to._

* Only visible when "Write Angle" is enabled

**Angle Axis**

_Specifies which axis to use for angle calculation._

* **Forward**: Uses X-axis
* **Backward**: Uses -X-axis
* **Right**: Uses Y-axis
* **Left**: Uses -Y-axis
* **Up**: Uses Z-axis
* **Down**: Uses -Z-axis

**Angle Range**

_Specifies the output range for angle values._

* **Radians (0..+PI)**: 0 to π radians
* **Radians (-PI..+PI)**: -π to π radians
* **Radians (0..+TAU)**: 0 to 2π radians
* **Degrees (0..+180)**: 0 to 180 degrees
* **Degrees (-180..+180)**: -180 to 180 degrees
* **Degrees (0..+360)**: 0 to 360 degrees
* **Normalized Half (0..180 -> 0..1)**: Normalized 0 to 180 degrees to 0 to 1
* **Normalized (0..+360 -> 0..1)**: Normalized 0 to 360 degrees to 0 to 1
* **Inv. Normalized Half (0..180 -> 1..0)**: Inverted normalized 0 to 180 degrees to 1 to 0
* **Inv. Normalized (0..+360 -> 1..0)**: Inverted normalized 0 to 360 degrees to 1 to 0

**Write Num Samples**

_When enabled, writes the number of samples processed._

* Useful for debugging or understanding how many targets were considered

**Num Samples Attribute Name**

_Name of the int32 attribute to write sample count to._

* Only visible when "Write Num Samples" is enabled

**Write Sampled Index**

_When enabled, writes the index of the sampled target._

* Stores which target was selected for sampling (closest index when multiple points are sampled)

**Sampled Index Attribute Name**

_Name of the int32 attribute to write sampled index to._

* Only visible when "Write Sampled Index" is enabled

***

#### Tagging

Controls how points are tagged based on sampling results.

**Tag If Has Successes**

_When enabled, tags points that successfully sampled data._

* Adds a tag to points that had at least one successful sample

**Has Successes Tag**

_Name of the tag to add when sampling succeeds._

* Only visible when "Tag If Has Successes" is enabled

**Tag If Has No Successes**

_When enabled, tags points that failed to sample data._

* Adds a tag to points that had no successful samples

**Has No Successes Tag**

_Name of the tag to add when sampling fails._

* Only visible when "Tag If Has No Successes" is enabled

***

#### Settings

Additional processing options.

**Process Filtered Out As Fails**

_When enabled, treats filtered-out points as failed samples._

* Otherwise, skips processing entirely for filtered points
* Useful for preserving existing attribute values

**Prune Failed Samples**

_When enabled, removes points that failed to sample anything._

* Points with no valid samples are removed from output

**Ignore Self**

_When enabled, ignores the point itself when sampling._

* Prevents a point from sampling its own bounds
* Useful when sampling from a dataset that includes the source points
