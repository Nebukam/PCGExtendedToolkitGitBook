---
description: 'In editor :: PCGEx | Filter : Inclusion (Bounds)'
icon: circle-dashed
---

# Inclusion (Bounds)

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the subnode does, but still needs to be proofread by a human.
{% endhint %}

> Filters points based on whether they fall within specified spatial bounds.

#### Overview

This subnode defines a filtering behavior that compares the spatial position of input points against target geometry bounds. It determines whether each point is inside, outside, or overlapping with defined areas such as boxes or spheres. You can use this to include or exclude points depending on their location relative to other geometries in your collection.

This subnode connects to Filter pins on processing nodes and is used when you want to control which points are processed based on spatial inclusion logic. It's particularly useful for culling points that are outside of a defined area, or ensuring only points within certain bounds are considered in downstream operations.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### How It Works

This subnode performs spatial inclusion tests between input points and target bounds. For each point being tested:

1. It retrieves the bounds of the input point using a specified source (e.g., scaled, density, or raw bounds).
2. It compares these bounds against the target bounds (from the connected data) based on a chosen check type:
   * **Intersects**: The point's OBB overlaps with the target OBB.
   * **Is Inside**: The point center is fully inside the target OBB.
   * **Is Inside or On**: The point center is inside or exactly on the boundary of the target OBB.
   * **Is Inside or Intersects**: Either condition is true (point center inside OR overlaps).
3. Optionally, it can expand the target bounds by a fixed amount for more lenient comparisons.
4. If enabled, the result can be inverted so that points that would normally pass now fail and vice versa.
5. It supports two modes of operation:
   * **Per Point Bounds**: Each point is tested individually against the target bounds.
   * **Collection Bounds**: The entire collection's combined bounds are used as a single proxy for testing.

The test uses either box or sphere-based comparisons depending on the selected mode, allowing flexibility in how spatial relationships are interpreted.

<details>

<summary>Inputs</summary>

* Input points to be filtered
* Target bounds data (from connected data source)

</details>

<details>

<summary>Outputs</summary>

* A boolean result indicating whether each point passes the filter test

</details>

#### Configuration

<details>

<summary><strong>Mode</strong><br><em>How to compare bounds.</em></summary>

Controls whether to test individual points or use the collection's combined bounds.

**Values**:

* **Per Point Bounds**: Test each point individually
* **Collection Bounds**: Test using collection's combined bounds

</details>

<details>

<summary><strong>BoundsTarget</strong><br><em>Bounds to use on target bounds data. (Those are the bounds connected to the filter)</em></summary>

Specifies which type of bounds to use from the target data.

**Values**:

* **Scaled Bounds**: Scaled version of the point's bounds
* **Density Bounds**: Density-scaled bounds with steepness applied
* **Bounds**: Raw, unscaled bounds
* **Center**: A tiny size 1 box centered at the point

</details>

<details>

<summary><strong>CheckType</strong><br><em>Type of bounds check to perform.</em></summary>

Determines how to evaluate spatial inclusion between input points and target bounds.

**Values**:

* **Intersects**: Point's OBB overlaps target OBBs
* **Is Inside**: Point center is inside target OBBs
* **Is Inside or On**: Point center is inside or on boundary of target OBBs
*
  * **Is Inside or Intersects**: Point center inside OR point's OBB overlaps target OBBs

</details>

<details>

<summary><strong>BoundsSource</strong><br><em>Bounds to use on input points (the points being filtered).</em></summary>

Specifies which type of bounds to use from the input points when performing checks.

**Values**:

* **Scaled Bounds**: Scaled version of the point's bounds
* **Density Bounds**: Density-scaled bounds with steepness applied
* **Bounds**: Raw, unscaled bounds
* **Center**: A tiny size 1 box centered at the point

</details>

<details>

<summary><strong>TestMode</strong><br><em>Shape type for testing.</em></summary>

Defines the geometric shape used to perform the spatial test.

**Values**:

* **Box**: Standard box
* **Expanded Box**: Box expanded by an amount
* **Sphere**: Sphere based on bounds' extents size
* **Expanded Sphere**: Sphere expanded by an amount

</details>

<details>

<summary><strong>Expansion</strong><br><em>Epsilon value used to slightly expand target bounds.</em></summary>

Amount by which the target bounds are expanded for testing, useful for creating a buffer zone.

</details>

<details>

<summary><strong>bInvert</strong><br><em>If enabled, invert the result of the test.</em></summary>

When enabled, points that would normally pass the filter will be excluded and vice versa.

</details>

<details>

<summary><strong>bCheckAgainstDataBounds</strong><br><em>If enabled, uses collection bounds as a single proxy point instead of per-point testing.</em></summary>

When enabled, tests all input points against the combined bounds of the target data rather than individually.

</details>

#### Usage Example

Use this subnode to filter out points that are outside a defined region. For example:

1. Connect a collection of points (e.g., terrain features) to the filter.
2. Set the **CheckType** to "Is Inside" and **BoundsTarget** to "Scaled Bounds".
3. Connect another collection (e.g., a volume or zone) to define the target bounds.
4. This will keep only those points whose centers are fully inside the target volume.

#### Notes

* The filter supports both box and sphere-based comparisons for flexibility in spatial logic.
* Expansion can be used to create a buffer around bounds for more inclusive filtering.
* Using **Collection Bounds** mode is efficient when testing many points against a single large region.
* Inverting results allows you to exclude rather than include specific areas.
