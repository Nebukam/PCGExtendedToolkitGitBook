---
icon: xmark-large
---

# Box Intersection

#### Settings

<details>

<summary><strong>Bounds Source</strong> <code>EPCGExPointBoundsSource</code></summary>

Bounds type.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Is Intersection</strong> <code>bool</code></summary>

If enabled, flag newly created intersection points.

⚡ PCG Overridable

</details>

<details>

<summary><strong>IsIntersection</strong> <code>FName</code></summary>

Name of the attribute to write point intersection boolean to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Cut Type</strong> <code>bool</code></summary>

If enabled, mark non-intersecting points inside the volume with a boolean value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>CutType</strong> <code>FName</code></summary>

Name of the attribute to write point toward inside boolean to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Mapping</strong> <code>TMap</code></summary>

`Pick which value will be written for each cut type.`

</details>

**Forwarding**`Used InBoundsPathIntersectionDefined in: Source\PCGExElementsPaths\Public\Details\PCGExBoxIntersectionDetails.h`
