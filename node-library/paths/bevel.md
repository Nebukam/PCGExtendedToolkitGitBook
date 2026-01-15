---
description: 'In editor :: PCGEx | Path : Bevel'
icon: circle
---

# Bevel

Bevel paths points.

**How It Works**

> AI-Generated, needs proofreading

* The node applies a bevel operation to the points of a path based on the selected Mode setting.
* It modifies the profile of the beveled area according to the specified Type setting.
* If Keep Corner Point is enabled, the node retains the original corner point and disregards any subdivision settings.
* Main Axis Scaling and Main Axis Scale settings adjust how the custom profile scales along the primary axis.

#### Configuration

<details>

<summary><strong>Mode</strong> <code>PCGExBevelMode</code></summary>

Type of Bevel operation

**Values:**

* **Radius**: Width is used as a radius value to compute distance along each point neighboring segments
* **Distance**: Width is used as a distance along each point neighboring segments

</details>

<details>

<summary><strong>Type</strong> <code>PCGExBevelProfileType</code></summary>

Type of Bevel profile

**Values:**

* **Line**: Line profile
* **Arc**: Arc profile
* **Custom**: Custom profile

</details>

<details>

<summary><strong>Keep Corner Point</strong> <code>bool</code></summary>

Whether to keep the corner point or not. If enabled, subdivision is ignored.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Width Measure</strong> <code>PCGExMeanMeasure</code></summary>

Bevel width value interpretation.

</details>

<details>

<summary><strong>Width Input</strong> <code>PCGExInputValueType</code></summary>

Bevel width source

</details>

<details>

<summary><strong>Width (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Bevel width attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Width</strong> <code>double</code></summary>

Bevel width constant.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Limit</strong> <code>PCGExBevelLimit</code></summary>

Bevel limit type

**Values:**

* **None**: Bevel is not limited
* **Closest neighbor**: Closest neighbor position is used as upper limit
* **Balanced**: Weighted balance against opposite bevel position, falling back to closest neighbor

⚡ PCG Overridable

</details>

<details>

<summary><strong>Slide Along Path</strong> <code>bool</code></summary>

Controls slide along path.

⚡ PCG Overridable

</details>

**Flags**

<details>

<summary><strong>Flag Poles</strong> <code>bool</code></summary>

Controls flag poles.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Pole Flag Name</strong> <code>Name</code></summary>

Name of the boolean flag to write whether the point is a Bevel endpoint or not (Either start or end)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Flag Start Point</strong> <code>bool</code></summary>

Controls flag start point.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Start Point Flag Name</strong> <code>Name</code></summary>

Name of the boolean flag to write whether the point is a Bevel start point or not

⚡ PCG Overridable

</details>

<details>

<summary><strong>Flag End Point</strong> <code>bool</code></summary>

Controls flag end point.

⚡ PCG Overridable

</details>

<details>

<summary><strong>End Point Flag Name</strong> <code>Name</code></summary>

Name of the boolean flag to write whether the point is a Bevel end point or not

⚡ PCG Overridable

</details>

<details>

<summary><strong>Flag Subdivision</strong> <code>bool</code></summary>

Controls flag subdivision.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Subdivision Flag Name</strong> <code>Name</code></summary>

Name of the boolean flag to write whether the point is a subdivision point or not

⚡ PCG Overridable

</details>

**Profile Scaling**

<details>

<summary><strong>Main Axis Scaling</strong> <code>PCGExBevelCustomProfileScaling</code></summary>

Define how the custom profile will be scaled on the main axis.

**Values:**

* **Uniform**: Keep the profile ratio uniform
* **Scale**: Use a scale factor relative to the bevel distance
* **Distance**: Use a fixed distance relative to the bevelled point

⚡ PCG Overridable

</details>

<details>

<summary><strong>Main Axis Scale</strong> <code>double</code></summary>

Scale or Distance value for the main axis.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Cross Axis Scaling</strong> <code>PCGExBevelCustomProfileScaling</code></summary>

Define how the custom profile will be scaled on the cross axis.

**Values:**

* **Uniform**: Keep the profile ratio uniform
* **Scale**: Use a scale factor relative to the bevel distance
* **Distance**: Use a fixed distance relative to the bevelled point

⚡ PCG Overridable

</details>

<details>

<summary><strong>Cross Axis Scale</strong> <code>double</code></summary>

Scale or Distance value for the cross axis.

⚡ PCG Overridable

</details>

**Subdivision**

<details>

<summary><strong>Subdivide</strong> <code>bool</code></summary>

Whether to subdivide the profile

⚡ PCG Overridable

</details>

<details>

<summary><strong>Subdivide Method</strong> <code>PCGExSubdivideMode</code></summary>

Subdivision method

⚡ PCG Overridable

</details>

<details>

<summary><strong>Subdivision Amount Input</strong> <code>PCGExInputValueType</code></summary>

Whether to subdivide the profile

⚡ PCG Overridable

</details>

<details>

<summary><strong>Subdivisions (Distance)</strong> <code>double</code></summary>

Controls subdivisions (distance).

⚡ PCG Overridable

</details>

<details>

<summary><strong>Subdivisions (Count)</strong> <code>int32</code></summary>

Controls subdivisions (count).

⚡ PCG Overridable

</details>

<details>

<summary><strong>Subdividions (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Controls subdividions (attr).

⚡ PCG Overridable

</details>

<details>

<summary><strong>Manhattan</strong> <code>PCGExManhattanDetails</code></summary>

Controls manhattan.

📦 See: Manhattan configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsPaths\Public\Elements\PCGExBevelPath.h`
