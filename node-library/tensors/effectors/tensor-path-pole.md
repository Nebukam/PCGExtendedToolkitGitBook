---
description: 'In editor :: PCGEx | Tensor : Path Pole'
icon: circle-dashed
---

# Tensor : Path Pole

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Creates a tensor that represents a vector/flow field along a path.

#### How It Works

This node builds a directional flow field that follows the shape of input paths. It works by:

1. Sampling points from the input paths based on the selected sampling mode (All, Closed loops only, Open lines only).
2. Creating a spline representation of each path using the chosen point type (Linear, Curve, etc.).
3. For every point in space, it checks how close that point is to the path.
4. If the point is within the defined radius, it calculates a vector pointing along the path at that location.
5. The strength of this vector depends on distance from the path and falloff settings.
6. The resulting tensor field can be used to guide or influence other elements in your procedural graph.

The node supports different spline types for defining how points are interpolated, allowing you to create smooth curves or sharp linear transitions along the path.

#### Configuration

<details>

<summary><strong>Point Type</strong><br><em>Which point type to use. Shared amongst all points; if you want tight control, create a fully-fledged spline instead.</em></summary>

Controls how the path is interpolated between points.

**Values**:

* **Linear (0)**: Points are connected with straight lines.
* **Curve (1)**: Points are connected with smooth curves.
* **Constant (2)**: Each point maintains its value without interpolation.
* **CurveClamped (3)**: Smooth curves with clamped tangents for more predictable results.

</details>

<details>

<summary><strong>Smooth Linear</strong><br><em>When enabled, linear points are smoothed.</em></summary>

When enabled, linear point types will be smoothed to create a more natural-looking path. This is only applicable when Point Type is set to Linear.

</details>

<details>

<summary><strong>Sample Inputs</strong><br><em>Sample inputs.</em></summary>

Determines which input paths are used in the tensor generation.

**Values**:

* **All**: All input paths are sampled.
* **Closed loops only**: Only closed-loop paths (e.g., circles) are used.
* **Open lines only**: Only open-line paths are used.

</details>

<details>

<summary><strong>Radius</strong><br><em>Base radius of the spline. Will be scaled by control points' scale length.</em></summary>

Controls how far from the path the tensor field has an effect. The actual radius is scaled by the scale of each control point in the input paths.

</details>

#### Usage Example

Create a set of open line paths that represent riverbeds or roads. Connect them to this node and configure it to use Curve point types for smooth flow directions. Use the resulting tensor field to guide particle systems or character movement along these paths, creating natural-looking flows or navigation routes.

#### Notes

* The tensor field is evaluated at runtime when other nodes sample it.
* For best performance, avoid very complex or numerous input paths.
*   The radius setting affects both the influence distance and computational cost of the tensor evaluation.

    <div data-gb-custom-block data-tag="hint" data-style="info" class="hint hint-info"><p>Connects to <strong>Tensor</strong> processing nodes as a Subnode.</p></div>
