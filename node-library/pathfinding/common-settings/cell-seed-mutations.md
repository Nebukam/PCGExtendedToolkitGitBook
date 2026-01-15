---
icon: list-tree
---

# Cell Seed Mutations

#### Settings

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

<summary><strong>Location</strong> <code>EPCGExCellSeedLocation</code></summary>

Change the good seed position

**Values:**

* **Original**: Seed position is unchanged
* **Centroid**: Place the seed at the centroid of the path
* **Path bounds center**: Place the seed at the center of the path' bounds
* **First Node**: Place the seed on the position of the node that started the cell.
* **Last Node**: Place the seed on the position of the node that ends the cell.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Match Cell Bounds</strong> <code>bool</code></summary>

Controls match cell bounds.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Reset Scale</strong> <code>bool</code></summary>

Controls reset scale.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Reset Rotation</strong> <code>bool</code></summary>

Controls reset rotation.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Area To</strong> <code>EPCGExPointPropertyOutput</code></summary>

Controls area to.

**Values:**

* **None**: ...
* **Density**: ...
* **Steepness**: ...
* **R Channel**: ...
* **G Channel**: ...
* **B Channel**: ...
* **A Channel**: ...

⚡ PCG Overridable

</details>

<details>

<summary><strong>Perimeter To</strong> <code>EPCGExPointPropertyOutput</code></summary>

Controls perimeter to.

**Values:**

* **None**: ...
* **Density**: ...
* **Steepness**: ...
* **R Channel**: ...
* **G Channel**: ...
* **B Channel**: ...
* **A Channel**: ...

⚡ PCG Overridable

</details>

<details>

<summary><strong>Compactness To</strong> <code>EPCGExPointPropertyOutput</code></summary>

Controls compactness to.

**Values:**

* **None**: ...
* **Density**: ...
* **Steepness**: ...
* **R Channel**: ...
* **G Channel**: ...
* **B Channel**: ...
* **A Channel**: ...

⚡ PCG Overridable

</details>

#### Used In

* PathfindingFindContours

***

Defined in: `Source\PCGExCore\Public\Clusters\Artifacts\PCGExCellDetails.h`
