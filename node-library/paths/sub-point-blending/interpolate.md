---
icon: sliders
---

# Interpolate

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Interpolates values between two points using a lerp-based blending method.

#### How It Works

This subnode smoothly transitions data between two points by calculating intermediate values based on a blending factor. The blending factor determines how much influence each point has on the final result, creating seamless changes along a path.

The interpolation process uses a linear approach where the output value is a weighted average of the input values from both points. The weight is determined by the `BlendOver` setting, which controls whether the transition is based on distance along the path or a fixed value.

When using **Distance**, the system calculates how far along the path you are between the two points, and uses that position to determine the interpolation weight. When using **Fixed**, it applies the same blending factor across all segments, defined by the `Lerp` setting.

#### Configuration

<details>

<summary><strong>BlendOver</strong><br><em>Controls how the interpolation weight is calculated.</em></summary>

Determines what value is used as the blending factor for lerp operations.

**Values**:

* **Distance**: Interpolation weight is based on the relative distance along a path.
* **Fixed**: Uses a constant `Lerp` value for all interpolations.

</details>

<details>

<summary><strong>Lerp</strong><br><em>Constant interpolation factor when BlendOver is set to Fixed.</em></summary>

Controls the lerp factor used in blending when `BlendOver` is set to **Fixed**. A value of 0.0 means 100% from the first point, and 1.0 means 100% from the second point.

</details>

#### Usage Example

Use this subnode in a path processing graph where you want to smoothly transition metadata (like color or scale) between points. For example, if you're generating a winding path and want to gradually change the size of objects placed along it, connect this subnode to the blending input of a path processor node.

#### Notes

* When using **Distance** for `BlendOver`, ensure that path metrics are valid to avoid unexpected behavior.
* The `Lerp` value is only used when `BlendOver` is set to **Fixed**.
* This subnode works best with continuous data such as transforms, colors, or scalar values.
