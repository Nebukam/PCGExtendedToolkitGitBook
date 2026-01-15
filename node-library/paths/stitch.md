---
description: 'In editor :: PCGEx | Path : Stitch'
icon: circle
---

# Stitch

Stitch paths together by their endpoints.

**How It Works**

> AI-Generated, needs proofreading

* The node stitches together paths based on their endpoints using a selected method for connection.
* Users can choose between different operations such as averaging endpoint positions to connect paths seamlessly.
* If "Only Match Start And Ends" is enabled, the node connects a path's end point exclusively with another path's start point; otherwise, connections are made based solely on spatial proximity.

#### Configuration

<details>

<summary><strong>Method</strong> <code>PCGExStitchMethod</code></summary>

Choose how paths are connected.

**Values:**

* **Connect**
* **Fuse**: Merge points that should be connected, only leaving a single one.

</details>

<details>

<summary><strong>Method</strong> <code>PCGExStitchFuseMethod</code></summary>

Choose how paths are connected.

**Values:**

* **Keep Start**: Keep start point during the merge
* **Keep End**: Keep end point during the merge

</details>

<details>

<summary><strong>Operation</strong> <code>PCGExStitchFuseOperation</code></summary>

Choose how paths are connected.

**Values:**

* **None**: Keep the chosen point as-is
* **Average**: Average connect point position
* **Line Intersection**: Connection point position is at the line/line intersection

</details>

<details>

<summary><strong>└─ Average</strong> <code>bool</code></summary>

Controls └─ average .

⚡ PCG Overridable

</details>

<details>

<summary><strong>Only Match Start And Ends</strong> <code>bool</code></summary>

If enabled, stitching will only happen between a path's end point and another path start point. Otherwise, it's based on spatial proximity alone.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Do Require Alignment</strong> <code>bool</code></summary>

Controls do require alignment.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Requires Alignment</strong> <code>PCGExStaticDotComparisonDetails</code></summary>

If enabled, foreign segments must be aligned within a given angular threshold.

📦 See: StaticDotComparison configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Controls tolerance.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Sort Direction</strong> <code>PCGExSortDirection</code></summary>

Controls the order in which data will be sorted

⚡ PCG Overridable

</details>

<details>

<summary><strong>Carry Over Settings</strong> <code>PCGExCarryOverDetails</code></summary>

Meta filter settings.

📦 See: CarryOver configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsPaths\Public\Elements\PCGExPathStitch.h`
