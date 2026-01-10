---
description: 'In editor :: PCGEx | Normalize'
icon: circle
---

# Normalize

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Normalize point positions against data bounds and output them as a new vector attribute.

#### How It Works

The Normalize node adjusts the position of each point so that it falls within a standardized range—typically 0 to 1—based on the boundaries of your input data. This makes it easier to align or scale geometry consistently, especially when working with multiple datasets or preparing data for further processing.

The process works like this:

1. First, it determines the size and shape of the area that contains all input points (the bounding box).
2. If needed, it applies a transformation—like scaling, rotating, or moving—before normalizing.
3. Then, each point's position is mapped into a 0-to-1 range along each axis using the determined bounds.
4. Optional adjustments like offsetting or tiling can be applied to change how the normalized values are distributed.
5. Finally, it creates a new attribute containing these normalized coordinates.

#### Configuration

<details>

<summary><strong>Bounds Source</strong><br><em>Which bounds to use for normalization.</em></summary>

Controls how the bounding box used for normalization is calculated.

* **Scaled Bounds**: Uses the scaled bounds of the data, which may include padding or scaling factors.
* **Density Bounds**: Uses density-based bounds, including steepness adjustments.
* **Bounds**: Uses the raw, unscaled bounds of the data.
* **Center**: Uses a tiny 1x1x1 box centered at the origin.

</details>

<details>

<summary><strong>Offset</strong><br><em>Apply an offset to the normalized values.</em></summary>

Adds a constant offset to the normalized position. For example, setting this to (0.5, 0.5, 0.5) shifts the normalized range from \[0,1] to \[-0.5, 1.5].

</details>

<details>

<summary><strong>Tile</strong><br><em>Apply tiling behavior for out-of-bounds values.</em></summary>

Controls how values outside the 0-1 range are handled when normalized.

* **One Vector (default)**: No tiling, values remain in \[0,1].
* **Custom Vector**: Tiling is applied per axis. For example, setting to (2, 2, 2) will repeat the pattern every 2 units.

</details>

<details>

<summary><strong>Wrapping</strong><br><em>How out-of-bounds indices are handled.</em></summary>

Determines how to treat values that fall outside the normalized range.

* **Tile**: Wraps around, so a value of 1.7 becomes 0.7.
* **Clamp**: Clamps values to the \[0,1] range (e.g., 1.7 becomes 1).
* **Yoyo**: Mirrors and back (e.g., 1.7 becomes 0.3).
* **Ignore**: Leaves out-of-bounds values unchanged.

</details>

<details>

<summary><strong>One Minus</strong><br><em>Which components should be one minus'd.</em></summary>

Inverts the normalized value for selected axes (X, Y, Z). For example, if only X is selected, the X component of the output will be `1 - normalized_X`.

</details>

<details>

<summary><strong>Transform Input</strong><br><em>Whether to read the transform from an attribute or use a constant.</em></summary>

Controls whether the transform applied before normalization is constant or comes from an input attribute.

* **Constant**: Use the `Transform` value.
* **Attribute**: Read the transform from the selected attribute.

</details>

<details>

<summary><strong>Transform (Attr)</strong><br><em>Attribute to read transform from.</em></summary>

If `Transform Input` is set to "Attribute", this selects which attribute to use for the transform.

</details>

<details>

<summary><strong>Transform</strong><br><em>Constant transform applied before normalization.</em></summary>

A constant transform that is applied to each point's position before normalization. This can be used to scale, rotate, or translate points prior to normalization.

</details>

<details>

<summary><strong>Output</strong><br><em>Name of the output vector attribute.</em></summary>

The name of the new vector attribute where normalized positions are stored.

</details>
