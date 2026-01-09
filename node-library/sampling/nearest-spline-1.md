---
description: 'In editor :: PCGEx | Sample : Nearest Path'
icon: circle
---

# Nearest Path

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Samples the nearest paths from a set of input paths, using point positions as sampling locations.

### Overview

This node finds the closest path(s) to each input point and samples them based on configurable parameters. It's useful for placing objects along roads, rivers, or other linear features, or for creating procedural effects that respond to nearby geometry.

The node can sample multiple paths per point if they're within range, and supports various output options including transforms, distances, angles, and more. You can control which paths are considered (all, closed loops only, open lines only) and how sampling is performed (within range, best candidate, etc.).

{% hint style="info" %}
This node requires path data as input. It will not work with points or other data types.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Default): Points to sample from
* **Paths** (Optional): Path data to sample from

</details>

<details>

<summary>Outputs</summary>

* **Default Output**: Point data with sampling results written to attributes

</details>

### Properties Overview

Controls how the node finds and samples paths.

***

#### General Settings

Controls basic behavior for finding and sampling paths.

**Data Matching**

_Controls how points are matched to path targets._

* When enabled, allows you to filter which targets get sampled by which data
* Useful when you want different points to sample from different subsets of paths

**Projection Settings**

_Configures how point positions are projected onto the 2D plane for distance calculations._

* **Method**: Choose between normal projection or best-fit plane calculation
* **Projection Normal**: Vector defining the plane to project on (defaults to Up vector for XY projection)
* **Local Normal**: Use a local attribute to define the projection normal

**Sample Inputs**

_Controls which paths are considered for sampling._

**Values**:

* **All**: Sample all input paths
* **Closed loops only**: Only sample closed loop paths
* **Open lines only**: Only sample open line paths

**Sampling Method**

_How to select which path(s) to sample._

**Values**:

* **Within Range**: Sample all paths within the specified range
* **Best Candidate**: Sample only the closest path (based on sort direction)

**Sort Direction**

_Controls sorting order when using "Best Candidate" sampling method._

**Values**:

* **Ascending**: Closest paths first
* **Descending**: Farthest paths first

**Always Sample When Inside**

_When enabled, will sample paths even if they're inside the range but further from edges than max range._

**Only Sample When Inside**

_When enabled, only samples paths that are fully inside the specified range._

**Inclusion Offset**

_Apply an offset to the path data for inclusion testing._

* Positive values inset the path boundaries
* Negative values outset the path boundaries

***

#### Sampling Range

Controls how far from a point paths can be to be considered for sampling.

**Range Min Input Type**

_Whether to use a constant or attribute value for minimum range._

**Values**:

* **Constant**: Use a fixed value
* **Attribute**: Read the value from an input attribute

**Range Min Attribute**

_The attribute to read the minimum range from when using "Attribute" mode._

**Range Min Constant**

_The minimum distance to consider paths for sampling._

**Range Max Input Type**

_Whether to use a constant or attribute value for maximum range._

**Values**:

* **Constant**: Use a fixed value
* **Attribute**: Read the value from an input attribute

**Range Max Attribute**

_The attribute to read the maximum range from when using "Attribute" mode._

**Range Max Constant**

_The maximum distance to consider paths for sampling._

**Height Inclusion**

_Vertical check for projected inclusion._

* If greater than 0, performs a vertical check as part of inclusion testing
* Value represents the height tolerance (0 is infinite)

***

#### Alpha Sampling

Controls how alpha values are interpreted when sampling specific points along paths.

**Sample Specific Alpha**

_When enabled, samples at a specific alpha value along the path._

**Sample Alpha Input Type**

_Whether to use a constant or attribute value for alpha._

**Values**:

* **Constant**: Use a fixed value
* **Attribute**: Read the value from an input attribute

**Sample Alpha Mode**

_How to interpret the sample alpha value._

**Values**:

* **Alpha**: Value between 0 and 1 (default)
* **Time**: Value between 0 and number of segments
* **Distance**: Distance along the path to sample at

**Wrap Closed Loops**

_When enabled, wraps alpha values for closed loops._

**Sample Alpha Attribute**

_The attribute to read the alpha value from when using "Attribute" mode._

**Sample Alpha Constant**

_The alpha value to use when using "Constant" mode._

***

#### Weighting

Controls how sampling results are blended and weighted.

**Distance Settings**

_How to measure distance from points to paths._

**Values**:

* **Center**: Use point center
* **Sphere Bounds**: Use sphere bounds with scaled extent
* **Box Bounds**: Use box bounds with point extents

**Weight Method**

_How to weight paths based on distance._

**Values**:

* **Full Range**: Full weighting across the entire range
* **Half Range**: Half weighting (0.5)
* **Inverse Full Range**: Inverse weighting across the full range
* **Inverse Half Range**: Inverse half weighting (0.5)

**Weight From Original Transform**

_Whether to use original point transform for weighting._

* When enabled, uses the original point's transform as base for weighting calculations
* When disabled, uses identity transform

**Use Local Curve**

_Whether to use an in-editor curve or external asset for distance weighting._

**Local Weight Over Distance**

_Curve that balances weight over distance (when using local curve)._

**Weight Over Distance Asset**

_External asset to use for distance weighting (when not using local curve)._

**Weight Curve Lookup**

_Settings for lookup table used for weighting._

***

#### Output Settings

Controls which attributes are written with sampling results.

**Write Success**

_When enabled, writes whether sampling was successful or not._

**Success Attribute Name**

_Name of the boolean attribute to write success status to._

**Write Transform**

_When enabled, writes the sampled transform._

**Transform Attribute Name**

_Name of the transform attribute to write sampled transform to._

**Write LookAt Transform**

_When enabled, writes a look-at transform aligned with the path._

**LookAt Transform Attribute Name**

_Name of the transform attribute to write look-at transform to._

**Align Axis**

_The axis to align the look-at vector to._

**Values**:

* **Forward**: Forward (X+)
* **Backward**: Backward (X-)
* **Right**: Right (Y+)
* **Left**: Left (Y-)
* **Up**: Up (Z+)
* **Down**: Down (Z-)

**Up Vector Source**

_Source for the up vector used in look-at calculation._

**Values**:

* **Constant**: Use a constant vector
* **Source**: Use an attribute from the source point
* **Target**: Use an axis from the target path

**Up Vector Attribute**

_The attribute to read the up vector from when using "Source" mode._

**Up Vector Axis**

_The axis on the target to use as up vector when using "Target" mode._

**Up Vector Constant**

_The constant vector to use as up vector when using "Constant" mode._

**Write Distance**

_When enabled, writes the sampled distance._

**Distance Attribute Name**

_Name of the double attribute to write sampled distance to._

**Output Normalized Distance**

_Whether to output normalized distance._

**Output OneMinus Distance**

_Whether to do a OneMinus on the normalized distance value._

**Distance Scale**

_Scale factor applied to the distance output._

**Write Signed Distance**

_When enabled, writes the signed distance._

**Signed Distance Attribute Name**

_Name of the double attribute to write signed distance to._

**Sign Axis**

_Axis to use to calculate the distance sign._

**Values**:

* **Forward**: Forward (X+)
* **Backward**: Backward (X-)
* **Right**: Right (Y+)
* **Left**: Left (Y-)
* **Up**: Up (Z+)
* **Down**: Down (Z-)

**Only Sign If Closed**

_Only sign the distance if at least one sampled spline is a closed loop._

**Signed Distance Scale**

_Scale factor applied to the signed distance output._

**Write Component Wise Distance**

_When enabled, writes component-wise distance._

**Component Wise Distance Attribute Name**

_Name of the FVector attribute to write component-wise distance to._

**Absolute Component Wise Distance**

_Whether to output absolute or signed component-wise distances._

**Write Angle**

_When enabled, writes the sampled angle._

**Angle Attribute Name**

_Name of the double attribute to write sampled angle to._

**Angle Axis**

_Axis to use to calculate the angle._

**Values**:

* **Forward**: Forward (X+)
* **Backward**: Backward (X-)
* **Right**: Right (Y+)
* **Left**: Left (Y-)
* **Up**: Up (Z+)
* **Down**: Down (Z-)

**Angle Range**

_Unit/range to output the angle to._

**Values**:

* **Radians (0..+PI)**: 0 to +PI radians
* **Radians (-PI..+PI)**: -PI to +PI radians
* **Radians (0..+TAU)**: 0 to TAU radians
* **Degrees (0..+180)**: 0 to +180 degrees
* **Degrees (-180..+180)**: -180 to +180 degrees
* **Degrees (0..+360)**: 0 to +360 degrees
* **Normalized Half (0..180 -> 0..1)**: 0 to 180 degrees mapped to 0 to 1
* **Normalized (0..+360 -> 0..1)**: 0 to 360 degrees mapped to 0 to 1
* **Inv. Normalized Half (0..180 -> 1..0)**: 0 to 180 degrees mapped to 1 to 0
* **Inv. Normalized (0..+360 -> 1..0)**: 0 to 360 degrees mapped to 1 to 0

**Write Time**

_When enabled, writes the sampled time along the path._

**Time Attribute Name**

_Name of the double attribute to write sampled spline time to._

**Write Segment Time**

_When enabled, writes the sampled segment time._

**Segment Time Attribute Name**

_Name of the double attribute to write sampled segment time to._

**Write Num Inside**

_When enabled, writes how many paths the point lies inside._

**Num Inside Attribute Name**

_Name of the int32 attribute to write number of paths this point lies inside._

**Only Increment If Closed**

_Only increment num inside count when comes from a closed loop spline._

**Write Num Samples**

_When enabled, writes how many paths were sampled._

**Num Samples Attribute Name**

_Name of the int32 attribute to write number of sampled neighbors to._

**Write Closed Loop**

_When enabled, writes whether the sampled path is closed._

**Closed Loop Attribute Name**

_Name of the bool attribute to write whether a closed spline was sampled or not._

***

#### Tagging

Controls how tags are applied to output data.

**Tag If Has Successes**

_When enabled, adds a tag if at least one spline has been sampled._

**Has Successes Tag**

_Name of the tag to add when sampling succeeds._

**Tag If Has No Successes**

_When enabled, adds a tag if no spline was found within range._

**Has No Successes Tag**

_Name of the tag to add when sampling fails._

***

#### Advanced Settings

Controls additional processing behavior.

**Process Filtered Out As Fails**

_Whether to mark filtered out points as "failed" or skip them._

**Prune Failed Samples**

_When enabled, removes points that failed to sample anything._

**Ignore Self**

_When enabled, ignores the point itself when sampling._
