---
description: 'In editor :: PCGEx | Sample : Inside Path'
icon: circle
---

# Inside Path

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Sample points that lie inside paths, with optional distance-based filtering and blending.

### Overview

This node samples points that are located inside one or more paths (such as splines or polygons). It determines whether each input point lies within the boundaries of a path and optionally samples nearby target points based on distance criteria. This is useful for placing objects inside areas defined by paths, such as placing trees inside forests or buildings inside lots.

{% hint style="info" %}
The node works with both closed loops (polygons) and open lines (splines). You can configure whether to sample only closed paths or include open lines.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Required): Points to be sampled
* **Target Paths** (Required): Paths that define the areas to sample inside
* **Filter** (Optional): Optional point filter to apply before sampling

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Points with sampling results and optional attributes written based on settings
* **Success Only** (Optional, when "Split" output mode is selected): Points that successfully sampled at least one target
* **Failure Only** (Optional, when "Split" output mode is selected): Points that failed to sample any targets

</details>

### Properties Overview

These settings control how the node samples points inside paths and what data it outputs.

***

#### General

Controls basic sampling behavior and path inclusion logic.

**Process Inputs**

_Controls which types of paths are processed._

* **All**: Process all input paths, whether they are closed loops or open lines.
* **Closed loops only**: Only process closed-loop paths (e.g., polygons).
* **Open lines only**: Only process open-line paths (e.g., splines).

**Sample Method**

_Determines how points are sampled from the target paths._

* **Within Range**: Sample points within a specified distance range.
* **Best Candidate**: Select the closest point to each input point among all targets.

**Sort Direction**

_Specifies the sorting order when using "Best Candidate" sampling._

* **Ascending**: Sort by ascending distance (closest first).
* **Descending**: Sort by descending distance (farthest first).

**Always Sample When Inside**

_When enabled, points inside a path are sampled even if they're outside the max range._

**Only Sample When Inside**

_When enabled, only points that lie inside a path will be considered for sampling._

**Inclusion Offset**

_Adds an offset to the path boundaries for inclusion testing. Positive values inset the path, negative values outset it._

**Distance Type**

_Selects the distance metric used for inclusion and sampling calculations._

* **Euclidian**: Standard straight-line distance.
* **Manhattan**: Distance along grid lines (sum of absolute differences).
* **Chebyshev**: Maximum of absolute differences.

**Height Inclusion**

_If non-zero, adds a vertical check to inclusion testing. Points must be within this height range above or below the path._

***

#### Sampling Range

Controls the distance-based filtering for sampling.

**Range Min Input**

_Selects how the minimum sampling range is defined._

* **Constant**: Use a fixed value.
* **Attribute**: Read the value from an input point attribute.

**Range Min (Attribute)**

_The name of the attribute to read the minimum range from, when "Attribute" is selected._

**Range Min**

_The constant minimum distance for sampling, when "Constant" is selected._

**Range Max Input**

_Selects how the maximum sampling range is defined._

* **Constant**: Use a fixed value.
* **Attribute**: Read the value from an input point attribute.

**Range Max (Attribute)**

_The name of the attribute to read the maximum range from, when "Attribute" is selected._

**Range Max**

_The constant maximum distance for sampling, when "Constant" is selected._

***

#### Weighting

Controls how weights are calculated for blending sampled data.

**Weight Method**

_Determines how distances are normalized for weighting._

* **Full Range**: Normalize in the \[0..1] range using \[0..Max Value] range.
* **Effective Range**: Remap the input \[Min..Max] range to \[0..1].

**Use Local Curve**

_When enabled, uses a local curve for weight distribution over distance._

**Weight Over Distance (Local)**

_The curve used to define how weight decreases with distance when "Use Local Curve" is enabled._

**Weight Over Distance (External)**

_The external curve asset used for weight distribution when "Use Local Curve" is disabled._

**Weight Curve Lookup**

_Configures the lookup table settings for the weighting curve._

***

#### Outputs

Controls which data is written to output points and how results are filtered.

**Output Mode**

_Specifies which points are output from this node._

* **All**: Output all input points, regardless of whether they sampled any targets.
* **Success only**: Only output points that successfully sampled at least one target.
* **Split**: Split the output into two pins: one for successful samples and one for failed.

**Write Success**

_When enabled, writes a boolean attribute indicating if sampling was successful._

**Success Attribute Name**

_Name of the boolean attribute to write success status to._

**Write Distance**

_When enabled, writes the sampled distance to an attribute._

**Distance Attribute Name**

_Name of the double attribute to write sampled distance to._

**Write Num Inside**

_When enabled, writes a count of how many paths each point lies inside._

**Num Inside Attribute Name**

_Name of the int32 attribute to write the number of paths inside to._

**Only If Closed Path**

_When enabled, only counts closed-loop paths when writing "Num Inside"._

**Write Num Samples**

_When enabled, writes a count of how many targets were sampled per point._

**Num Samples Attribute Name**

_Name of the int32 attribute to write the number of samples to._

**Tag If Has Successes**

_When enabled, adds a tag to the output data if at least one target was sampled._

**Has Successes Tag**

_Name of the tag added when sampling succeeds for at least one target._

**Tag If Has No Successes**

_When enabled, adds a tag to the output data if no targets were sampled._

**Has No Successes Tag**

_Name of the tag added when sampling fails for all targets._

***

#### Advanced

Advanced settings that affect performance and behavior.

**Ignore Self**

_When enabled, prevents points from sampling themselves (if they are also part of the target paths)._

**Data Matching**

_Configures how to match input points to target data. Can be used to filter which targets get sampled by which points._
