---
description: 'In editor :: PCGEx | Path : Shrink'
icon: circle
---

# Shrink

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Shrinks paths from their beginning and end by a specified amount.

#### How It Works

This node adjusts the length of each path by removing points from both the start and end. It determines how many points or how much distance to remove based on your chosen method — either by counting points or measuring physical distance. The process can be applied to one or both ends of each path, depending on your settings.

When using **Distance** mode, it calculates how much space to cut from each end using a fixed value or data from an attribute. When using **Count** mode, it removes a set number of points from each end. You can also choose how the path is adjusted at the point where it's cut — for example, whether to create a new point or use an existing one.

The node supports different cut types that define how the path behaves at the cut location. It also allows you to preserve metadata from the original first or last points when removing them.

#### Configuration

<details>

<summary><strong>Shrink Endpoint</strong><br><em>Which ends of the path to shrink.</em></summary>

Controls whether the node shrinks from both ends, only the start, or only the end of each path.

**Values**:

* **Start and End**: Shrink from both ends.
* **Start**: Shrink only from the beginning.
* **End**: Shrink only from the end.

</details>

<details>

<summary><strong>Settings Mode</strong><br><em>How to handle values for start and end when shrinking both.</em></summary>

When shrinking both ends, this setting controls whether the same value is used or separate values are applied.

**Values**:

* **Shared**: Both start and end use the primary value.
* **Separate**: Start uses the primary value, end uses the secondary value.

</details>

<details>

<summary><strong>Shrink Mode</strong><br><em>Whether to shrink by count or distance.</em></summary>

Determines how the amount of shrinkage is defined — either as a number of points or a physical distance.

**Values**:

* **Count**: Shrink by a number of points.
* **Distance**: Shrink by a physical distance.

</details>

<details>

<summary><strong>Primary Distance Details</strong><br><em>Settings for the amount to shrink from each end when using distance mode.</em></summary>

Controls how much distance is removed from each end. Can use a constant or an attribute.

**Values**:

* **Amount Input**: Choose between constant or attribute-based value.
* **Distance Attribute**: If using attribute, specify which attribute to read the distance from.
* **Distance**: If using constant, set the distance to remove.
* **Cut Type**: How to handle the point at the cut location — whether to create a new point, use the previous, next, or closest existing point.

</details>

<details>

<summary><strong>Secondary Distance Details</strong><br><em>Settings for the amount to shrink from the end when using distance mode and separate settings.</em></summary>

Controls how much distance is removed from the end when shrinking both ends with separate values. Only visible if Settings Mode is set to Separate.

**Values**:

* **Amount Input**: Choose between constant or attribute-based value.
* **Distance Attribute**: If using attribute, specify which attribute to read the distance from.
* **Distance**: If using constant, set the distance to remove.
* **Cut Type**: How to handle the point at the cut location — whether to create a new point, use the previous, next, or closest existing point.

</details>

<details>

<summary><strong>Primary Count Details</strong><br><em>Settings for the number of points to shrink from each end when using count mode.</em></summary>

Controls how many points are removed from each end. Can use a constant or an attribute.

**Values**:

* **Value Source**: Choose between constant or attribute-based value.
* **Count Attribute**: If using attribute, specify which attribute to read the point count from.
* **Count**: If using constant, set the number of points to remove.
* **Cut Type**: How to handle the point at the cut location — whether to create a new point, use the previous, next, or closest existing point.

</details>

<details>

<summary><strong>Secondary Count Details</strong><br><em>Settings for the number of points to shrink from the end when using count mode and separate settings.</em></summary>

Controls how many points are removed from the end when shrinking both ends with separate values. Only visible if Settings Mode is set to Separate.

**Values**:

* **Value Source**: Choose between constant or attribute-based value.
* **Count Attribute**: If using attribute, specify which attribute to read the point count from.
* **Count**: If using constant, set the number of points to remove.
* **Cut Type**: How to handle the point at the cut location — whether to create a new point, use the previous, next, or closest existing point.

</details>

<details>

<summary><strong>Endpoints Ignore Stop Conditions</strong><br><em>Whether to ignore stop conditions when shrinking endpoints.</em></summary>

When enabled, the node will not respect stop conditions at the start or end of paths when cutting points.

</details>

<details>

<summary><strong>Preserve First Metadata</strong><br><em>If enabled, the point cut from the start will inherit metadata from the original first point.</em></summary>

When enabled, the point that is removed from the beginning of the path will keep the metadata from the original first point in the path.

</details>

<details>

<summary><strong>Preserve Last Metadata</strong><br><em>If enabled, the point cut from the end will inherit metadata from the original last point.</em></summary>

When enabled, the point that is removed from the end of the path will keep the metadata from the original last point in the path.

</details>

#### Usage Example

You have a path representing a road and want to remove 5 meters from both ends to avoid overlap with other elements. Set **Shrink Mode** to **Distance**, **Primary Distance Details** to a constant value of 5, and **Shrink Endpoint** to **Start and End**. This will shorten the road by 5 meters at each end.

#### Notes

* The node works on individual paths; it does not merge or split paths.
* If a path is too short to shrink by the specified amount, it may result in an empty or invalid path.
* When using **Count** mode, ensure that the count is less than the total number of points in the path to avoid errors.
