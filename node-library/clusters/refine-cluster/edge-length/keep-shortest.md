# Keep Shortest

Keep the shortest edge

⚙️ **Behavior** — Instanced edge refinement.

**How It Works**

> AI-Generated, needs proofreading

* The node evaluates edges based on their length and retains the shortest edge according to the setting defined in "Keep".
* It compares edges against a specified tolerance value; if two edges are within this distance of each other, they are treated as intersecting.
* If "Use Min Angle" is enabled, the node also considers a minimum angle threshold in its evaluation process.
* Similarly, when "Use Max Angle" is selected, an additional maximum angle constraint influences the edge comparison and retention.

#### Configuration

<details>

<summary><strong>Keep</strong> <code>PCGExEdgeOverlapPick</code></summary>

Which edge to keep when doing comparison.

**Values:**

* **Shortest**: Keep the shortest edge
* **Longest**: Keep the longest edge

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Distance at which two edges are considered intersecting.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Min Angle</strong> <code>bool</code></summary>

.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Min Angle</strong> <code>double</code></summary>

Min angle.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Max Angle</strong> <code>bool</code></summary>

.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Angle</strong> <code>double</code></summary>

Maximum angle.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\Refining\PCGExEdgeRefineRemoveOverlap.h`
