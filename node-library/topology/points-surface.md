---
icon: circle
---

# Points Surface

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Create a Delaunay triangulated surface for each input dataset.

#### How It Works

This node takes a collection of points and creates a smooth, interconnected mesh surface from them. It uses a mathematical process called Delaunay triangulation to determine how the points should connect to form triangles. The result is a mesh where no point lies inside the triangle formed by its neighbors, which helps avoid long, narrow triangles that can look odd or cause rendering issues.

The node first prepares the input points and then projects them into a 2D space using one of several projection methods. Then it builds the triangulated surface from these projected points. If enabled, it also checks for and fixes any invalid or degenerate triangles in the final mesh to ensure clean geometry.

#### Configuration

<details>

<summary><strong>ProjectionDetails</strong><br><em>Projection settings.</em></summary>

Controls how 3D points are converted into 2D space for triangulation.

**Values**:

* **XY Plane**: Projects points onto a flat surface using the X and Y coordinates, ignoring Z
* **XZ Plane**: Projects points onto a flat surface using the X and Z coordinates, ignoring Y
* **YZ Plane**: Projects points onto a flat surface using the Y and Z coordinates, ignoring X
* **Spherical**: Maps points onto the surface of a sphere
* **Planar**: Projects points onto a custom flat surface defined by a normal direction and origin point

</details>

<details>

<summary><strong>bAttemptRepair</strong><br><em>When enabled, attempts to repair degenerate triangles in the output mesh.</em></summary>

When enabled, this setting tells the node to look for and fix any invalid or malformed triangles in the generated mesh. This helps clean up visual artifacts that may appear during triangulation.

</details>

<details>

<summary><strong>RepairDegenerate</strong><br><em>Degeneration settings.</em></summary>

Settings for fixing invalid triangles, which are only used when **bAttemptRepair** is enabled.

**Values**:

* **Remove**: Deletes invalid triangles from the mesh
* **Collapse**: Shrinks edges of invalid triangles to fix them
* **Flip**: Reorients triangle faces to resolve issues

</details>

<details>

<summary><strong>Topology</strong><br><em>Topology settings. Some settings will be ignored based on selected output mode.</em></summary>

Controls how the triangulated mesh is structured and delivered.

**Values**:

* **Per-item Geometry**: Each input dataset produces a separate mesh object
* **Merged Geometry**: All datasets are combined into one single mesh object

</details>

<details>

<summary><strong>bQuietBadVerticesWarning</strong><br><em>When enabled, suppresses warnings about bad vertices.</em></summary>

When enabled, this setting prevents warning messages from appearing in the log if the node encounters points that cannot be processed due to invalid coordinates or other issues.

</details>

#### Usage Example

1. Place a **Point Spawner** node to generate a set of scattered points.
2. Connect the output of the spawner to the input of this **Topology : Point Surface** node.
3. Set the **ProjectionDetails** to **XY Plane** if your points are already in 2D or planar space.
4. Enable **bAttemptRepair** if you notice artifacts in the mesh.
5. Connect the output of this node to a **Mesh Output** node to visualize the triangulated surface.

#### Notes

* Delaunay triangulation is ideal for generating well-shaped triangles and avoiding narrow or sliver-like faces.
* The node works best with relatively evenly distributed points. Clusters or very sparse regions might produce unexpected results.
* For large datasets, consider using **Per-item Geometry** output to avoid memory issues during merging.
