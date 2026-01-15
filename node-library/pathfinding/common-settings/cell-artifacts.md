---
icon: list-tree
---

# Cell Artifacts

#### Settings

<details>

<summary><strong>Write Cell Hash</strong> <code>bool</code></summary>

Controls write cell hash.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Cell Hash</strong> <code>FName</code></summary>

Write cell unique hash as a @Data attribute

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Area</strong> <code>bool</code></summary>

Controls write area.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Cell Area</strong> <code>FName</code></summary>

Write cell area as a @Data attribute

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Compactness</strong> <code>bool</code></summary>

Controls write compactness.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Cell Compactness</strong> <code>FName</code></summary>

Write cell compactness as a @Data attribute

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Vtx Id</strong> <code>bool</code></summary>

Controls write vtx id.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Vtx ID</strong> <code>FName</code></summary>

Name of the attribute to write the vtx index of its point to. This is useful if you want to find contours, mutate the cluster it comes from and remap the updated cluster positions onto the original cell.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Flag Terminal Point</strong> <code>bool</code></summary>

Controls flag terminal point.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Flag Terminal</strong> <code>FName</code></summary>

Flag terminal points

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Num Repeat</strong> <code>bool</code></summary>

Controls write num repeat.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Repeat</strong> <code>FName</code></summary>

Number of time a point is repeated in the cell

⚡ PCG Overridable

</details>

**Tagging**

<details>

<summary><strong>Tag Concave</strong> <code>bool</code></summary>

.

</details>

<details>

<summary><strong>Concave Tag</strong> <code>FString</code></summary>

.

</details>

<details>

<summary><strong>Tag Convex</strong> <code>bool</code></summary>

.

</details>

<details>

<summary><strong>Convex Tag</strong> <code>FString</code></summary>

.

</details>

<details>

<summary><strong>Tag Forwarding</strong> <code>FPCGExNameFiltersDetails</code></summary>

Tags to be forwarded from clusters

⚡ PCG Overridable

</details>

#### Used In

* PathfindingFindAllCells
* PathfindingFindClusterHull
* PathfindingFindContours

***

Defined in: `Source\PCGExCore\Public\Clusters\Artifacts\PCGExCellDetails.h`
