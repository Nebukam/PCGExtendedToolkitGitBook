---
icon: bezier-curve
---

# Tangents

## Tangents

> Shared configuration used in 5 nodes.

#### Settings

<details>

<summary><strong>Source</strong> <code>EPCGExTangentSource</code></summary>

Controls source.

**Values:**

* **No Tangents**: No tangents
* **Attribute**: Tangents are read from attributes
* **In-place**: Tangents are calculated in-place using a custom module

</details>

<details>

<summary><strong>Arrive Tangent Attribute</strong> <code>FName</code></summary>

Controls arrive tangent attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Leave Tangent Attribute</strong> <code>FName</code></summary>

Controls leave tangent attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tangents</strong> <code>UPCGExTangentsInstancedFactory</code></summary>

Controls tangents.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Start Override (Opt.)</strong> <code>UPCGExTangentsInstancedFactory</code></summary>

Optional module for the start point specifically

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ End Override (Opt.)</strong> <code>UPCGExTangentsInstancedFactory</code></summary>

Optional module for the end point specifically

⚡ PCG Overridable

</details>

<details>

<summary><strong>Scaling</strong> <code>FPCGExTangentsScalingDetails</code></summary>

Controls scaling.

⚡ PCG Overridable

</details>

#### Used In

* PathSplineMesh
* CopyToPaths
* CreateSpline
* PathSplineMeshSimple

***

Defined in: `Source\PCGExFoundations\Public\Tangents\PCGExTangentsInstancedFactory.h`
