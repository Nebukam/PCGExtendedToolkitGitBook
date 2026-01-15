---
description: 'In editor :: PCGEx | Filter : Time'
icon: circle-dashed
---

# Time

Creates a filter definition that checks points position against a path/spline/polygon2D closest alpha.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node evaluates each point's position relative to a specified path, spline, or polygon2D by determining the closest alpha value on that geometry.
* It uses comparison settings to define how the point's computed alpha value is compared against an operand B, which could be another value or variable.
* If multiple splines are present and a point falls both inside and outside these splines, the "Pick" setting dictates whether the node favors the inside or outside condition for that point.
* The "Time Consolidation" parameter specifies how time-related data is handled in the context of spline-based operations, affecting the overall filtering process.

#### Configuration

<details>

<summary><strong>Sample Inputs</strong> <code>PCGExSplineSamplingIncludeMode</code></summary>

Sample inputs.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Pick</strong> <code>PCGExSplineFilterPick</code></summary>

If a point is both inside and outside a spline (if there are multiple ones), decide what value to favor.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Time Consolidation</strong> <code>PCGExSplineTimeConsolidation</code></summary>

Controls time consolidation.

**Values:**

* **Min**: ...
* **Max**: ...
* **Average**: ...

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExComparison</code></summary>

Comparison

⚡ PCG Overridable

</details>

<details>

<summary><strong>Compare Against</strong> <code>PCGExInputValueType</code></summary>

Type of OperandB

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand B (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand B for testing -- Will be translated to `double` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand B</strong> <code>float</code></summary>

Operand B for testing

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Near-equality tolerance

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

If enabled, invert the result of the test

⚡ PCG Overridable

</details>

<details>

<summary><strong>Winding Mutation</strong> <code>PCGExWindingMutation</code></summary>

Lets you enforce a path winding for testing

</details>

<details>

<summary><strong>Fidelity</strong> <code>double</code></summary>

When projecting, defines the resolution of the polygon created from the spline. Lower values means higher fidelity, but slower execution.

</details>

<details>

<summary><strong>Check Against Data Bounds</strong> <code>bool</code></summary>

If enabled, when used with a collection filter, will use collection bounds as a proxy point instead of per-point testing

⚡ PCG Overridable

</details>

<details>

<summary><strong>Ignore Self</strong> <code>bool</code></summary>

If enabled, a collection will never be tested against itself

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExTimeFilterConfig</code></summary>

Filter Config.

📦 See: TimeFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Sample Inputs</strong> <code>PCGExSplineSamplingIncludeMode</code></summary>

Sample inputs.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Pick</strong> <code>PCGExSplineFilterPick</code></summary>

If a point is both inside and outside a spline (if there are multiple ones), decide what value to favor.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Time Consolidation</strong> <code>PCGExSplineTimeConsolidation</code></summary>

Controls time consolidation.

**Values:**

* **Min**: ...
* **Max**: ...
* **Average**: ...

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExComparison</code></summary>

Comparison

⚡ PCG Overridable

</details>

<details>

<summary><strong>Compare Against</strong> <code>PCGExInputValueType</code></summary>

Type of OperandB

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand B (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand B for testing -- Will be translated to `double` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand B</strong> <code>float</code></summary>

Operand B for testing

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Near-equality tolerance

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

If enabled, invert the result of the test

⚡ PCG Overridable

</details>

<details>

<summary><strong>Winding Mutation</strong> <code>PCGExWindingMutation</code></summary>

Lets you enforce a path winding for testing

</details>

<details>

<summary><strong>Fidelity</strong> <code>double</code></summary>

When projecting, defines the resolution of the polygon created from the spline. Lower values means higher fidelity, but slower execution.

</details>

<details>

<summary><strong>Check Against Data Bounds</strong> <code>bool</code></summary>

If enabled, when used with a collection filter, will use collection bounds as a proxy point instead of per-point testing

⚡ PCG Overridable

</details>

<details>

<summary><strong>Ignore Self</strong> <code>bool</code></summary>

If enabled, a collection will never be tested against itself

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFilters\Public\Filters\Points\PCGExTimeFilter.h`
