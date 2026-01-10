---
description: 'In editor :: PCGEx | Path : Smooth'
icon: circle
---

# Smooth

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Applies smoothing to path points using configurable methods and influence.

#### How It Works

The Path : Smooth node adjusts the positions of path points to reduce sharp angles and create smoother curves. It works by analyzing each point in relation to its neighbors and applying a mathematical operation based on the selected smoothing method.

The process starts by iterating through all points in a path, with the first and last points optionally remaining unchanged if the preserve settings are enabled. For each point, the node calculates a new position using influence values that determine how much neighboring points affect it. These influence values can be constant or derived from attributes on the input data.

The smoothing amount controls how aggressively the adjustment is applied. Different methods like Gaussian or Catmull-Rom produce different visual results, with some emphasizing natural curves and others maintaining more defined turns. Additionally, the node supports blending attribute values from neighboring points using various modes such as average or linear interpolation, ensuring that not just positions but other data like color, height, or width are smoothly transitioned along the path.

#### Configuration

<details>

<summary><strong>Preserve Start</strong><br><em>When enabled, the start point of each path is not affected by smoothing.</em></summary>

If enabled, the first point in each path remains fixed during the smoothing operation.

</details>

<details>

<summary><strong>Preserve End</strong><br><em>When enabled, the end point of each path is not affected by smoothing.</em></summary>

If enabled, the last point in each path remains fixed during the smoothing operation.

</details>

<details>

<summary><strong>Smoothing Method</strong><br><em>The method used to smooth points.</em></summary>

Selects the algorithm used for smoothing. This defines how neighboring points influence the current point's position.

</details>

<details>

<summary><strong>Influence Input</strong><br><em>Fetch the influence from a local attribute.</em></summary>

Controls whether the influence value is constant or read from an attribute.

**Values**:

* **Constant**: Use a fixed value defined in "Influence (Attr)".
* **Attribute**: Read influence values from a point attribute specified in "Influence (Attr)".

</details>

<details>

<summary><strong>Influence (Attr)</strong><br><em>The amount of smoothing applied.</em></summary>

The attribute to read influence values from when "Influence Input" is set to "Attribute". Influence controls how much a point is affected by its neighbors.

</details>

<details>

<summary><strong>Influence</strong><br><em>The amount of smoothing applied.</em></summary>

A constant value used for influence when "Influence Input" is set to "Constant". Value range is -1 to 1.

</details>

<details>

<summary><strong>Smoothing Amount Type</strong><br><em>Fetch the smoothing from a local attribute.</em></summary>

Controls whether the smoothing amount is constant or read from an attribute.

**Values**:

* **Constant**: Use a fixed value defined in "Smoothing (Attr)".
* **Attribute**: Read smoothing values from a point attribute specified in "Smoothing (Attr)".

</details>

<details>

<summary><strong>Smoothing (Attr)</strong><br><em>The amount of smoothing applied.</em></summary>

The attribute to read smoothing values from when "Smoothing Amount Type" is set to "Attribute". This value determines the strength of the smoothing effect, and its impact depends on the chosen smoothing method.

</details>

<details>

<summary><strong>Smoothing</strong><br><em>The amount of smoothing applied. Range of this value is highly dependant on the chosen smoothing method.</em></summary>

A constant value used for smoothing when "Smoothing Amount Type" is set to "Constant". Must be greater than or equal to 1.

</details>

<details>

<summary><strong>Scale Smoothing Amount Attribute</strong><br><em>Static multiplier for the local smoothing amount.</em></summary>

Multiplies the smoothing value by this factor, allowing fine-tuning of the effect. Minimum value is 0.001.

</details>

<details>

<summary><strong>Blending Interface</strong><br><em>How to blend data from sampled points.</em></summary>

Controls how attributes are blended during smoothing.

**Values**:

* **Individual**: Blending settings are applied per attribute.
* **Monolithic**: A single blending configuration is used for all attributes.

</details>

<details>

<summary><strong>Blending Settings</strong><br><em>Blending settings used to smooth attributes.</em></summary>

Defines how to blend attribute values from neighboring points. Only visible when "Blending Interface" is set to "Monolithic".

**Values**:

* **None**: No blending applied.
* **Average**: Average all sampled values.
* **Weight**: Weights based on distance to blend targets.
* **Min**: Component-wise minimum operation.
* **Max**: Component-wise maximum operation.
* **Copy (Target)**: Copy target data.
* **Sum**: Sum of all values.
* **Weighted Sum**: Sum of all values, weighted.
* **Lerp**: Linear interpolation using weights.
* **Subtract**: Subtract values.
* **Unsigned Min**: Component-wise minimum on unsigned values.
* **Unsigned Max**: Component-wise maximum on unsigned values.

</details>
