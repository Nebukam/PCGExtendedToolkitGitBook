---
description: 'In editor :: PCGEx | Filter : Distance'
icon: circle-dashed
---

# Distance

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that compares the distance from the point to the nearest target.

#### Overview

This subnode defines a filtering condition based on the spatial distance between points and their nearest target. It's useful for selecting points that are within or beyond a certain distance threshold from another set of points, collections, or attributes.

It helps you isolate points that meet specific proximity criteria in your procedural content, such as placing objects only near certain landmarks or avoiding overlap between elements.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### How It Works

This subnode calculates the distance from each input point to its nearest target. The distance is computed using a specified method (e.g., Euclidean, Manhattan). Then, it compares that distance against a threshold value using a comparison operator.

The filtering decision depends on whether the calculated distance meets the defined condition (e.g., is less than or greater than the threshold). If the point passes the test, it's included in the output; otherwise, it's filtered out.

When used with collections, you can choose to compare against individual points or use collection bounds as a proxy for performance. It also supports ignoring self-comparisons when filtering against the same collection.

<details>

<summary>Inputs</summary>

Expects point data as input, typically from a source or collection node in the graph.

</details>

<details>

<summary>Outputs</summary>

Filters points based on their proximity to targets and outputs only those that pass the defined condition.

</details>

#### Configuration

***

**DistanceDetails**

_Controls how distance is calculated between points._

Defines the method used for computing distances, such as Euclidean or Manhattan. This affects the shape of the "distance field" used in comparisons.

**Values**:

* **Euclidean**: Straight-line distance (most common)
* **Manhattan**: Sum of absolute differences along axes
* **Chebyshev**: Maximum of absolute differences along any axis

**Comparison**

_Determines how to compare the computed distance against the threshold._

Specifies the logical condition used for filtering. For example, "Less Than" or "Greater Than" will include points that meet those criteria.

**Values**:

* **Strictly Equal**: Distance equals threshold exactly
* **Strictly Not Equal**: Distance does not equal threshold
* **Equal Or Greater**: Distance is greater than or equal to threshold
* **Equal Or Smaller**: Distance is less than or equal to threshold
* **Strictly Greater**: Distance is strictly greater than threshold
* **Strictly Smaller**: Distance is strictly smaller than threshold
* **Nearly Equal**: Distance is close to threshold (within tolerance)
* **Nearly Not Equal**: Distance is not close to threshold (outside tolerance)

**CompareAgainst**

_Specifies whether the comparison uses a constant value or an attribute._

Controls how Operand B (the threshold) is defined. You can use a fixed number or read it from a point attribute.

**Values**:

* **Constant**: Use a fixed numeric value
* **Attribute**: Read the threshold from a point attribute

**DistanceThresholdConstant**

_The fixed distance threshold when CompareAgainst is set to Constant._

Sets the value used for comparison if using a constant threshold. For example, setting this to `5.0` will filter points that are exactly 5 units away from their nearest target.

**Tolerance**

_Tolerance for near-equality comparisons._

Only applies when using "Nearly Equal" or "Nearly Not Equal". Defines how close the distance must be to the threshold to be considered equal.

**bIgnoreSelf**

_When enabled, prevents a collection from being compared against itself._

Useful when filtering points within the same collection. If enabled, a point will not be tested against itself, avoiding false positives in self-referencing comparisons.

**bCheckAgainstDataBounds**

_When enabled, uses collection bounds instead of individual points for comparison._

Improves performance when filtering large collections by using bounding volumes rather than testing each point individually. Only effective with collection-based filtering.

#### Usage Example

1. Create a **Filter : Distance** subnode.
2. Set **CompareAgainst** to **Attribute** and assign an attribute like `DistanceThreshold`.
3. Configure **Comparison** to **Equal Or Greater**.
4. Connect this filter to a processing node that has a collection of target points.
5. This setup will include only those input points whose distance to the nearest target is greater than or equal to the value stored in the `DistanceThreshold` attribute.

#### Notes

* The subnode works with both point and collection inputs.
* Performance can be improved by using **bCheckAgainstDataBounds** when working with large datasets.
* When using attributes as thresholds, ensure they exist on all input points to avoid runtime errors.
* This filter supports multiple comparisons, making it flexible for various spatial logic needs.
