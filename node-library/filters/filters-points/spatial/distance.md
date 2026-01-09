---
description: 'In editor :: PCGEx | Filter : Distance'
icon: circle-dashed
---

# Distance

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that compares the distance from the point to the nearest target.

### Overview

This filter evaluates whether each input point is within a specified distance threshold from its nearest target point or collection. It's commonly used for spatial filtering, such as keeping points near specific landmarks, removing points too close to others, or selecting points based on proximity to a set of reference locations.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like **Point Filter**, **Point Collection Filter**, or **Point Transform**.
{% endhint %}

### How It Works

The filter calculates the distance from each input point to the nearest target point or collection. It then compares this distance against a threshold value using a specified comparison operator (e.g., "less than", "equal to", etc.). If the comparison passes, the point is considered to pass the filter.

You can define the source and target points using different methods:

* **Source**: Point position, bounds center, or density bounds
* **Target**: Point position, bounds center, or density bounds

The comparison operator determines how the calculated distance is evaluated against the threshold value. For example, if you're testing "distance <= 10", a point passing this filter would be within 10 units of its nearest target.

### Inputs

* **Input Points**: The points to be filtered
* **Target Points**: The reference points used for distance calculations

### Outputs

* **Filtered Points**: Points that pass the distance filter criteria

### Configuration

***

#### General

**Distance Method**

_Controls how distances are computed between source and target points._

* **Source**: Defines the reference point for the input data (e.g., point center, bounds center)
* **Target**: Defines the reference point for the target data (e.g., point center, bounds center)
* **Distance Type**: Choose between Euclidean, Manhattan, or other distance metrics
* **Overlap Is Zero**: When enabled, overlapping points are treated as zero-distance

**Comparison**

_Determines how the calculated distance is compared to the threshold._

**Values**:

* **==**: Distance must be exactly equal to threshold
* **!=**: Distance must not be equal to threshold
* **>=**: Distance must be greater than or equal to threshold
* **<=**: Distance must be less than or equal to threshold
* **>**: Distance must be strictly greater than threshold
* **<**: Distance must be strictly less than threshold
* **\~=**: Distance must be nearly equal to threshold (within tolerance)
* \*\*!\~=: Distance must not be nearly equal to threshold (outside tolerance)

**Compare Against**

_Specifies whether the distance threshold is a constant or read from an attribute._

**Values**:

* **Constant**: Use a fixed value defined in the next setting
* **Attribute**: Read the threshold value from an input point attribute

**Distance Threshold (Attr)**

_The attribute to read the comparison value from, when "Compare Against" is set to "Attribute"._

**Distance Threshold**

_The fixed distance threshold value, when "Compare Against" is set to "Constant"._

**Near-Equality Tolerance**

_Tolerance for nearly equal comparisons. Only used when using&#x20;_~~_= or !_~~_= operators._

**Ignore Self**

_When enabled, a point will not be compared against itself._

**Check Against Data Bounds**

_When enabled, uses collection bounds instead of individual points for comparison._

### Usage Example

You want to keep only points that are within 5 units of any tree in your scene.

1. Set **Compare Against** to **Constant**
2. Set **Distance Threshold** to `5`
3. Set **Comparison** to **<=**
4. Connect this filter to a **Point Filter** node
5. Connect your point data and target tree data to the respective inputs

This will pass only those points that are within 5 units of any tree.

### Notes

* The filter supports both constant thresholds and attribute-based thresholds
* When using "Check Against Data Bounds", the filter evaluates against collection bounds instead of individual points, which can be more efficient for large datasets
* For performance-critical workflows, consider enabling "Ignore Self" if you don't want to compare points against themselves
* The tolerance setting is only relevant when using nearly equal comparisons (e.g., ~~= or !~~=)
