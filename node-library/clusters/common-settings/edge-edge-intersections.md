---
icon: xmark-large
---

# Edge/Edge Intersections

#### Settings

<details>

<summary><strong>Enable Self Intersection</strong> <code>bool</code></summary>

If disabled, edges will only be checked against other datasets.

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

**Metadata**

<details>

<summary><strong>Write Crossing</strong> <code>bool</code></summary>

Controls write crossing.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Crossing Attribute Name</strong> <code>FName</code></summary>

Name of the attribute to flag point as crossing (result of an Edge/Edge intersection)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Flag Crossing</strong> <code>bool</code></summary>

Will copy the flag values of attributes from the edges onto the point in order to filter them.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Flag A</strong> <code>FName</code></summary>

Name of an int32 flag to fetch from the first edge

⚡ PCG Overridable

</details>

<details>

<summary><strong>Flag B</strong> <code>FName</code></summary>

Name of an int32 flag to fetch from the second edge

⚡ PCG Overridable

</details>

#### Used In

* PathToClusters
* FuseClusters
* UnionProcessor

***

Defined in: `Source\PCGExBlending\Public\Details\PCGExIntersectionDetails.h`
