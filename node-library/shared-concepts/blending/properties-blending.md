# Properties Blending

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Controls how property values are combined when sampling or blending data from multiple sources.

#### Overview

This configuration block defines how different properties of points are blended together when sampling data from nearby points or sources. Each property has its own blending mode, allowing you to control whether values are averaged, taken from the nearest source, or handled in other specific ways. This is especially useful when working with clustered or sampled data where multiple points contribute to a single output point.

You would typically adjust these settings when you want fine-grained control over how different attributes like position, color, or scale are combined during sampling operations. The settings work together to define the overall blending behavior for each property type, enabling smooth transitions or sharp distinctions between source data.

{% hint style="info" %}
This configuration appears in nodes like: Neighbor Sample Properties, Sample Nearest Bounds, Sample Nearest Point
{% endhint %}

#### Settings

<details>

<summary><strong>Density Blending</strong><br><em>Controls how density values are combined when sampling from multiple sources.</em></summary>

Determines the method used to blend density values from different points.

**Values**:

* **None**: No blending is applied; the value remains unchanged.
* **Average**: The density values are averaged across all contributing points.
* **Min**: The minimum density value among contributing points is selected.
* **Max**: The maximum density value among contributing points is selected.

</details>

<details>

<summary><strong>BoundsMin Blending</strong><br><em>Controls how the minimum bounds values are combined when sampling from multiple sources.</em></summary>

Determines the method used to blend minimum bounds values from different points.

**Values**:

* **None**: No blending is applied; the value remains unchanged.
* **Average**: The minimum bounds values are averaged across all contributing points.
* **Min**: The smallest minimum bound value among contributing points is selected.
* **Max**: The largest minimum bound value among contributing points is selected.

</details>

<details>

<summary><strong>BoundsMax Blending</strong><br><em>Controls how the maximum bounds values are combined when sampling from multiple sources.</em></summary>

Determines the method used to blend maximum bounds values from different points.

**Values**:

* **None**: No blending is applied; the value remains unchanged.
* **Average**: The maximum bounds values are averaged across all contributing points.
* **Min**: The smallest maximum bound value among contributing points is selected.
* **Max**: The largest maximum bound value among contributing points is selected.

</details>

<details>

<summary><strong>Color Blending</strong><br><em>Controls how color values are combined when sampling from multiple sources.</em></summary>

Determines the method used to blend color values from different points.

**Values**:

* **None**: No blending is applied; the value remains unchanged.
* **Average**: The color values are averaged across all contributing points.
* **Min**: The minimum color value among contributing points is selected.
* **Max**: The maximum color value among contributing points is selected.

</details>

<details>

<summary><strong>Position Blending</strong><br><em>Controls how position values are combined when sampling from multiple sources.</em></summary>

Determines the method used to blend position values from different points.

**Values**:

* **None**: No blending is applied; the value remains unchanged.
* **Average**: The position values are averaged across all contributing points.
* **Min**: The minimum position value among contributing points is selected.
* **Max**: The maximum position value among contributing points is selected.

</details>

<details>

<summary><strong>Rotation Blending</strong><br><em>Controls how rotation values are combined when sampling from multiple sources.</em></summary>

Determines the method used to blend rotation values from different points.

**Values**:

* **None**: No blending is applied; the value remains unchanged.
* **Average**: The rotation values are averaged across all contributing points.
* **Min**: The minimum rotation value among contributing points is selected.
* **Max**: The maximum rotation value among contributing points is selected.

</details>

<details>

<summary><strong>Scale Blending</strong><br><em>Controls how scale values are combined when sampling from multiple sources.</em></summary>

Determines the method used to blend scale values from different points.

**Values**:

* **None**: No blending is applied; the value remains unchanged.
* **Average**: The scale values are averaged across all contributing points.
* **Min**: The minimum scale value among contributing points is selected.
* **Max**: The maximum scale value among contributing points is selected.

</details>

<details>

<summary><strong>Steepness Blending</strong><br><em>Controls how steepness values are combined when sampling from multiple sources.</em></summary>

Determines the method used to blend steepness values from different points.

**Values**:

* **None**: No blending is applied; the value remains unchanged.
* **Average**: The steepness values are averaged across all contributing points.
* **Min**: The minimum steepness value among contributing points is selected.
* **Max**: The maximum steepness value among contributing points is selected.

</details>

<details>

<summary><strong>Seed Blending</strong><br><em>Controls how seed values are combined when sampling from multiple sources.</em></summary>

Determines the method used to blend seed values from different points.

**Values**:

* **None**: No blending is applied; the value remains unchanged.
* **Average**: The seed values are averaged across all contributing points.
* **Min**: The minimum seed value among contributing points is selected.
* **Max**: The maximum seed value among contributing points is selected.

</details>

#### Common Use Cases

* **Smooth Transitions**: Set blending modes to "Average" for properties like color or position to create smooth transitions between sampled data.
* **Sharp Boundaries**: Use "Min" or "Max" blending modes for properties like density or scale to emphasize distinct regions or features.
* **Sampling with Nearest Point**: Choose "None" for most properties when you want to directly copy values from the nearest source point without any blending.

#### Notes

Each property's blending setting is independent, allowing for complex combinations of blending behaviors. The default value for all settings is typically "None", meaning no blending occurs unless explicitly changed. When using "Average", the system calculates a weighted average based on proximity or other factors depending on the node implementation.
