---
description: 'In editor :: PCGEx | Filter : Distance'
icon: circle-dashed
---

# Distance

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that compares the distance from the point to the nearest target.

#### How It Works

This subnode evaluates the spatial relationship between input points and their nearest target points or collection bounds. For each point, it calculates the distance to the closest target using the selected method, then compares that distance against a defined threshold value using the chosen comparison operator. If the comparison is true, the point passes the filter; otherwise, it fails.

The process works as follows:

1. For each input point, find the closest target point or collection.
2. Compute the distance between the two points using the configured distance method.
3. Compare that distance to the threshold value using the selected comparison operator.
4. If the comparison evaluates to true, the point passes the filter; otherwise, it fails.

The subnode supports both fixed and attribute-based thresholds, allowing for dynamic filtering based on point properties like size or importance.

#### Configuration

<details>

<summary><strong>Distance Details</strong><br><em>Distance method to be used for source &#x26; target points.</em></summary>

Defines how distance is calculated between points. Options include Euclidean, Manhattan, and others depending on implementation.

</details>

<details>

<summary><strong>Comparison</strong><br><em>Comparison operator to use when evaluating the distance against the threshold.</em></summary>

Determines how the computed distance is compared to the threshold value. **Values**:

* **Strictly Equal**: Distance equals threshold
* **Strictly Not Equal**: Distance does not equal threshold
* **Equal Or Greater**: Distance is greater than or equal to threshold
* **Equal Or Smaller**: Distance is less than or equal to threshold
*
  * **Strictly Greater**: Distance is strictly greater than threshold
* **Strictly Smaller**: Distance is strictly smaller than threshold
* **Nearly Equal**: Distance is approximately equal to threshold (within tolerance)
* **Nearly Not Equal**: Distance is not approximately equal to threshold

</details>

<details>

<summary><strong>Compare Against</strong><br><em>Type of operand B for comparison.</em></summary>

Controls whether the threshold value is a constant or read from an attribute. **Values**:

* **Constant**: Use a fixed numeric value
* **Attribute**: Read the threshold value from a point attribute

</details>

<details>

<summary><strong>Distance Threshold (Attr)</strong><br><em>Operand B for testing when Compare Against is set to Attribute.</em></summary>

The name of the attribute that contains the distance threshold values. Only visible when "Compare Against" is set to "Attribute".

</details>

<details>

<summary><strong>Distance Threshold</strong><br><em>Operand B for testing when Compare Against is set to Constant.</em></summary>

A fixed numeric value used as the comparison threshold. Only visible when "Compare Against" is set to "Constant".

</details>

<details>

<summary><strong>Tolerance</strong><br><em>Near-equality tolerance for comparisons.</em></summary>

Used only when using "Nearly Equal" or "Nearly Not Equal" comparisons. Defines how close two values must be to be considered equal.

</details>

<details>

<summary><strong>Ignore Self</strong><br><em>If enabled, a collection will never be tested against itself.</em></summary>

When enabled, prevents a point from being compared to itself during filtering, which is useful when working with self-referencing collections.

</details>

<details>

<summary><strong>Check Against Data Bounds</strong><br><em>If enabled, when used with a collection filter, will use collection bounds as a proxy point instead of per-point testing.</em></summary>

When enabled, the distance is calculated from each point to the bounding box of the target collection rather than to individual points. This improves performance for large collections.

</details>

#### Usage Example

Use this subnode in a point filtering operation where you want to keep only points that are within a certain radius of a set of targets. For instance, you might filter out all points that are more than 10 units away from any building in your scene. You could set the threshold to 10 and use "Equal Or Smaller" as the comparison.

#### Notes

* Performance is optimized when using "Check Against Data Bounds" with large collections.
* The tolerance setting only affects comparisons involving approximate equality.
* When using attribute-based thresholds, ensure that the attribute exists on all input points.
