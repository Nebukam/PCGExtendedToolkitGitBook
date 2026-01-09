---
description: 'In editor :: PCGEx | Path : Blend'
icon: circle
---

# Blend

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Blend path individual points between its start and end points.

### Overview

This node blends attributes along the length of a path, smoothly interpolating values from the first point to the last. It's useful for creating gradual transitions in properties like color, scale, or rotation along a path. You can control how the blending is applied using different blending modes and settings.

{% hint style="info" %}
This node works on paths that have been processed by other PCGEx nodes such as "Path : Extract" or "Path : Generate". It modifies point data within each path.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input (Default)**: Points representing a path. Each path is processed independently.

</details>

<details>

<summary>Outputs</summary>

* **Main Output (Default)**: Modified points with blended attributes along the path.

</details>

### Properties Overview

Controls how the blending operation is performed along each path.

***

#### Blending Mode

Determines how the blending is applied from start to end of the path.

**Path Blend Mode**

_Controls how the blending is applied along the path._

* When set to **Start to End**, the blending transitions from the first point to the last.
* When set to **Switch**, it switches between two different behaviors based on filters.

**Values**:

* **Start to End**: Blend properties & attributes of all path' points from start point to last point
* **Switch**: Switch between pruning/non-pruning based on filters

***

#### Blending Settings

Controls how attribute values are blended between points.

**Blend Over**

_Determines the basis for blending along the path._

* When set to **Distance**, blending is based on the distance along the path.
* When set to **Fixed**, blending uses a constant value or an attribute to determine the blend factor.

**Values**:

* **Distance**: Blend based on the actual distance along the path
* **Fixed**: Use a fixed blend factor

**Lerp Input**

_Specifies whether the blend factor is constant or derived from an attribute._

* When set to **Constant**, use the value in the "Lerp" field.
* When set to **Attribute**, read the blend factor from the specified attribute.

**Values**:

* **Constant**: Use a constant, user-defined value
* **Attribute**: Read the value from the input data

**Lerp (Attr)**

_The attribute to read the blend factor from when "Lerp Input" is set to Attribute._

* This field only appears when "Lerp Input" is set to **Attribute**.
* The attribute should contain values between 0 and 1.

**Lerp**

_The constant blend factor to use when "Lerp Input" is set to Constant._

* Value range: 0 to 1.
* A value of 0 means no blending, 1 means full blending from start to end.

**Blending Type**

_Selects the method used to blend values._

* **None**: No blending applied.
* **Average**: Average all sampled values.
* **Weight**: Weights based on distance to blend targets. If results are unexpected, try 'Lerp' instead.
* **Min/Max**: Component-wise MIN/MAX operations.
* **Copy (Target)**: Copy target data (second value).
* **Sum**: Sum of all values.
* **Weighted Sum**: Sum of all the data, weighted.
* **Lerp**: Uses weight as lerp. If results are unexpected, try 'Weight' instead.
* **Subtract**: Subtract values.
* **Unsigned Min/Max**: Component-wise MIN/MAX on unsigned value, but keeps the sign on written data.
* **Absolute Min/Max**: Component-wise MIN/MAX of absolute value.

**Blend First Point**

_When enabled, applies blending to the first point in the path._

* Useful for ensuring smooth transitions from the start of the path.

**Blend Last Point**

_When enabled, applies blending to the last point in the path._

* Useful for ensuring smooth transitions to the end of the path.

### Notes

* This node modifies point attributes along a path, so it should be used after paths have been generated or extracted.
* The "Lerp" value controls how much blending occurs from start to end (0 = no blend, 1 = full blend).
* Use the "Blend First Point" and "Blend Last Point" options if you want to ensure the start and/or end points are also affected by the blending.
* For smooth transitions, consider using a blending type like **Lerp** or **Weight**.
* You can use an attribute as the blend factor to create more dynamic effects, such as varying blend intensity along the path.
