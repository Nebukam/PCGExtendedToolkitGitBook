---
icon: circle
---

# Reduce

Reduce point but attempts to preserve aspect using tangents

**How It Works**

> AI-Generated, needs proofreading

* The node processes a path by reducing its point count while attempting to maintain the overall shape and aspect ratio using tangents.
* It utilizes an error tolerance setting of type `double` to determine how closely the reduced path should match the original path.
* The node applies a smoothing mode specified by `PCGExTangentSmoothing`, which influences how tangents are adjusted during the reduction process.
* Names for entry (`Arrive Name`) and exit (`Leave Name`) points can be set, though their specific impact on processing is not detailed.

#### Configuration

<details>

<summary><strong>Mode</strong> <code>PCGExPathReduceFilterMode</code></summary>

Controls mode.

**Values:**

* **Preserve**: Filters drive points that are guaranteed to be preserved. Any other may be removed.
* **Anchors**: Filters define which points the path will be reduced to

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Error Tolerance</strong> <code>double</code></summary>

Controls └─ error tolerance.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Arrive Name</strong> <code>Name</code></summary>

Controls arrive name.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Leave Name</strong> <code>Name</code></summary>

Controls leave name.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Smoothing Mode</strong> <code>PCGExTangentSmoothing</code></summary>

Controls smoothing mode.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Smoothing</strong> <code>PCGExInputShorthandNameDouble01</code></summary>

Controls smoothing.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsPaths\Public\Elements\PCGExPathReduce.h`
