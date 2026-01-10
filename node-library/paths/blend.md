---
description: 'In editor :: PCGEx | Path : Blend'
icon: circle
---

# Blend

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Blend path individual points between its start and end points.

#### How It Works

The Path : Blend node modifies point attributes along a path by smoothly transitioning values from the starting point to the ending point. It calculates how much of each point's attribute should come from the start versus the end, based on where that point sits along the path.

First, it measures the total length of the path and determines how far each point is from the beginning. Then, it assigns a blend factor between 0 (fully start point) and 1 (fully end point) to each point based on its position. Using this factor, it interpolates or blends attribute values using the selected blending method.

The node can optionally apply blending to the first and last points in the path, which helps create smoother transitions when using certain blending modes.

#### Configuration

<details>

<summary><strong>Blend Over</strong><br><em>Attribute to read the direction from.</em></summary>

Controls how the blend factor is calculated along the path.

**Values**:

* **Distance**: Blend based on distance along the path.
* **Fixed**: Use a fixed value for blending (see Lerp Constant and Lerp Input settings).

</details>

<details>

<summary><strong>Lerp Input</strong><br><em>Constant direction.</em></summary>

Defines how to determine the blend factor when "Blend Over" is set to "Fixed".

**Values**:

* **Constant**: Use a fixed constant value for blending.
* **Attribute**: Read the blend factor from an attribute on the input points.

</details>

<details>

<summary><strong>Lerp</strong><br><em>Constant direction.</em></summary>

The fixed blend factor used when "Lerp Input" is set to "Constant". This value should be between 0 and 1, where:

* 0 means only the start point's attributes are used.
* 1 means only the end point's attributes are used.
* 0.5 means a 50/50 blend.

</details>

<details>

<summary><strong>Blending Settings</strong><br><em>Blending settings used to smooth attributes.</em></summary>

Defines how attribute values are blended between points. For example, using "Lerp" will interpolate values linearly, while "Weight" uses distance-based weighting.

**Values**:

* **None**: No blending is applied.
* **Average**: Average all sampled values.
* **Weight**: Weights based on distance to blend targets.
* **Min**: Component-wise minimum operation.
* **Max**: Component-wise maximum operation.
* **Copy (Target)**: Copy target data (second value).
* **Sum**: Sum of all values.
* **Weighted Sum**: Sum of all values, weighted.
* **Lerp**: Uses weight as lerp.
* **Subtract**: Subtract values.
* **Unsigned Min**: Component-wise minimum on unsigned values.
* **Unsigned Max**: Component-wise maximum on unsigned values.

</details>

<details>

<summary><strong>Blend First Point</strong><br><em>If enabled, will apply blending to the first point. Can be useful with some blendmodes.</em></summary>

When enabled, the node applies blending to the first point in the path, which can help smooth transitions when using certain blending modes.

</details>

<details>

<summary><strong>Blend Last Point</strong><br><em>If enabled, will apply blending to the last point. Can be useful with some blendmodes.</em></summary>

When enabled, the node applies blending to the last point in the path, which can help smooth transitions when using certain blending modes.

</details>

#### Usage Example

1. Create a path using a Path : Generate node.
2. Add a Path : Blend node and connect it to the path output.
3. Set "Blend Over" to "Distance" to blend based on path length.
4. Configure "Blending Settings" to use "Lerp" for smooth transitions.
5. Connect an attribute (e.g., color) to the input of the Path : Blend node.
6. The resulting points will have interpolated attribute values from start to end.

#### Notes

* Blending is applied per point, so the effect depends on how many points are in your path.
* For best results with "Lerp", keep the blend factor between 0 and 1.
* If you're using a fixed blend factor, ensure that it aligns with your desired blending behavior.
