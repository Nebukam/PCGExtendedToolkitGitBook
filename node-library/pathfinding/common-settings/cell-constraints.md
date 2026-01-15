---
icon: list-tree
---

# Cell Constraints

#### Settings

<details>

<summary><strong>Output Winding</strong> <code>EPCGExWinding</code></summary>

Controls output winding.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Aspect Filter</strong> <code>EPCGExCellShapeTypeOutput</code></summary>

Controls aspect filter.

**Values:**

* **Convex & Concave**: Output both convex and concave cells
* **Convex Only**: Output only convex cells
* **Concave Only**: Output only concave cells

⚡ PCG Overridable

</details>

<details>

<summary><strong>Keep Cells With Leaves</strong> <code>bool</code></summary>

Whether to keep cells that include dead ends wrapping

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Duplicate Leaf points</strong> <code>bool</code></summary>

Whether to duplicate dead end points

⚡ PCG Overridable

</details>

<details>

<summary><strong>Omit Wrapping Bounds</strong> <code>bool</code></summary>

Controls omit wrapping bounds.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Classification Tolerance</strong> <code>double</code></summary>

Omit cells with areas that closely match the computed wrapper. 0 to disable.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Keep if Sole</strong> <code>bool</code></summary>

Controls └─ keep if sole.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Omit Below Bounds Size</strong> <code>bool</code></summary>

Controls omit below bounds size.

⚡ PCG Overridable

</details>

<details>

<summary><strong>┌─ Min Bounds Size</strong> <code>double</code></summary>

Omit cells whose bounds size.length is smaller than the specified amount

⚡ PCG Overridable

</details>

<details>

<summary><strong>Omit Above Bounds Size</strong> <code>bool</code></summary>

Controls omit above bounds size.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Max Bounds Size</strong> <code>double</code></summary>

Omit cells whose bounds size.length is larger than the specified amount

⚡ PCG Overridable

</details>

<details>

<summary><strong>Omit Below Point Count</strong> <code>bool</code></summary>

Controls omit below point count.

⚡ PCG Overridable

</details>

<details>

<summary><strong>┌─ Min Point Count</strong> <code>int32</code></summary>

Omit cells whose point count is smaller than the specified amount

⚡ PCG Overridable

</details>

<details>

<summary><strong>Omit Above Point Count</strong> <code>bool</code></summary>

Controls omit above point count.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Max Point Count</strong> <code>int32</code></summary>

Omit cells whose point count is larger than the specified amount

⚡ PCG Overridable

</details>

<details>

<summary><strong>Omit Below Area</strong> <code>bool</code></summary>

Controls omit below area.

⚡ PCG Overridable

</details>

<details>

<summary><strong>┌─ Min Area</strong> <code>double</code></summary>

Omit cells whose area is smaller than the specified amount

⚡ PCG Overridable

</details>

<details>

<summary><strong>Omit Above Area</strong> <code>bool</code></summary>

Controls omit above area.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Max Area</strong> <code>double</code></summary>

Omit cells whose area is larger than the specified amount

⚡ PCG Overridable

</details>

<details>

<summary><strong>Omit Below Perimeter</strong> <code>bool</code></summary>

Controls omit below perimeter.

⚡ PCG Overridable

</details>

<details>

<summary><strong>┌─ Min Perimeter</strong> <code>double</code></summary>

Omit cells whose perimeter is smaller than the specified amount

⚡ PCG Overridable

</details>

<details>

<summary><strong>Omit Above Perimeter</strong> <code>bool</code></summary>

Controls omit above perimeter.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Max Perimeter</strong> <code>double</code></summary>

Omit cells whose perimeter is larger than the specified amount

⚡ PCG Overridable

</details>

<details>

<summary><strong>Omit Below Segment Length</strong> <code>bool</code></summary>

Controls omit below segment length.

⚡ PCG Overridable

</details>

<details>

<summary><strong>┌─ Min Segment Length</strong> <code>double</code></summary>

Omit cells that contains any segment which length is smaller than the specified amount

⚡ PCG Overridable

</details>

<details>

<summary><strong>Omit Above Segment Length</strong> <code>bool</code></summary>

Controls omit above segment length.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Max Segment Length</strong> <code>double</code></summary>

Omit cells that contains any segment which length is larger than the specified amount

⚡ PCG Overridable

</details>

<details>

<summary><strong>Omit Below Compactness</strong> <code>bool</code></summary>

Controls omit below compactness.

⚡ PCG Overridable

</details>

<details>

<summary><strong>┌─ Min Compactness</strong> <code>double</code></summary>

Omit cells that contains any segment which length is smaller than the specified amount

⚡ PCG Overridable

</details>

<details>

<summary><strong>Omit Above Compactness</strong> <code>bool</code></summary>

Controls omit above compactness.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Max Compactness</strong> <code>double</code></summary>

Omit cells that contains any segment which length is larger than the specified amount

⚡ PCG Overridable

</details>

#### Used In

* PathfindingFindAllCells
* PathfindingFindClusterHull
* PathfindingFindContours
* TopologyClustersProcessor

***

Defined in: `Source\PCGExCore\Public\Clusters\Artifacts\PCGExCellDetails.h`
