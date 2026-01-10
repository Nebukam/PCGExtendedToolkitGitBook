---
description: 'In editor :: PCGEx | Create Spline'
icon: circle
---

# Create Spline

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Create splines from input points.

#### How It Works

This node takes a collection of points and builds one or more spline structures from them. It starts by reading the point data and determining how each point contributes to the overall shape — whether it's a straight line, a curve, or a constant value.

If enabled, it uses a custom attribute to define how individual points behave in the spline. For curved splines, it calculates direction and curvature based on either:

* Predefined values
* Tangent attributes from the input points
* In-place calculations

The node supports two output modes:

* **Create Data Only**: Generates spline data that can be used by other nodes.
* **Create Mesh Actor**: Builds a visual spline mesh in the world using the generated spline.

It also allows specifying a target actor for post-processing functions, which can modify or finalize the spline mesh after creation.

#### Configuration

<details>

<summary><strong>Mode</strong><br><em>How the node outputs the spline.</em></summary>

Controls whether the node only creates spline data or also generates a mesh actor in the world.

**Values**:

* **Create Data Only**: Outputs spline data for further processing.
* **Create Mesh Actor**: Creates a spline mesh actor in the world using the generated spline.

</details>

<details>

<summary><strong>DefaultPointType</strong><br><em>Default spline point type.</em></summary>

Sets how each point is interpreted by default when creating the spline. This can be overridden per point if custom point types are enabled.

**Values**:

* **Linear (0)**: Points are connected with straight lines.
* **Curve (1)**: Points are connected with curves using standard tangent calculations.
* **Constant (2)**: Point values remain constant between segments.
* **CurveClamped (3)**: Curved segments with clamped tangents.

</details>

<details>

<summary><strong>bApplyCustomPointType</strong><br><em>Whether to use a custom point type attribute.</em></summary>

When enabled, the node reads a point attribute to determine how each point should be interpreted in the spline. This allows for per-point control over whether points are linear or curved.

</details>

<details>

<summary><strong>PointTypeAttribute</strong><br><em>Name of the attribute used for custom point types.</em></summary>

The name of the attribute that defines how each point should be interpreted in the spline. Only used if `bApplyCustomPointType` is enabled.

</details>

<details>

<summary><strong>Tangents</strong><br><em>Per-point tangent settings. Can't be set if the spline is linear.</em></summary>

Defines how tangents are calculated for each point in the spline. Only applies when using curved point types.

</details>

<details>

<summary><strong>TargetActor</strong><br><em>Actor to which the spline mesh will be attached or processed.</em></summary>

The actor that will receive the spline mesh data. If not set, the node uses the context's target actor.

</details>

<details>

<summary><strong>PostProcessFunctionNames</strong><br><em>Specify a list of functions to be called on the target actor after spline mesh creation.</em></summary>

A list of function names that will be called on the target actor after the spline mesh is created. These functions must have no parameters and be marked with the "CallInEditor" flag.

</details>

<details>

<summary><strong>AttachmentRules</strong><br><em>How the spline mesh is attached to the target actor.</em></summary>

Defines how the spline mesh is attached to the target actor, including location, rotation, and scale rules.

</details>

#### Usage Example

1. Take a set of points representing a path.
2. Connect them to the Create Spline node.
3. Set the mode to "Create Mesh Actor".
4. Assign a target actor (e.g., a level actor or empty actor).
5. Optionally, enable custom point types and assign an attribute to define curve behavior per point.
6. Run the graph to generate a spline mesh in the world.

#### Notes

* The node supports both linear and curved splines.
* Tangent settings are ignored if the spline is set to linear mode.
* Custom point types allow for mixed spline behaviors within a single input set.
* For performance, consider using "Create Data Only" when you don't need an actor mesh immediately.
