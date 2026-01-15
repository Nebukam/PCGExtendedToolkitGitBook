---
icon: arrows-maximize
---

# Apply Sampling

#### Settings

<details>

<summary><strong>Apply Transform</strong> <code>bool</code></summary>

Controls apply transform.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Position</strong> <code>uint8</code></summary>

Which position components from the sampled transform should be applied to the point.

</details>

<details>

<summary><strong>├─ Rotation</strong> <code>uint8</code></summary>

Which rotation components from the sampled transform should be applied to the point.

</details>

<details>

<summary><strong>└─ Scale</strong> <code>uint8</code></summary>

Which scale components from the sampled transform should be applied to the point.

</details>

<details>

<summary><strong>Apply Look At</strong> <code>bool</code></summary>

Controls apply look at.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Position</strong> <code>uint8</code></summary>

Which position components from the sampled look at should be applied to the point.

</details>

<details>

<summary><strong>└─ Rotation</strong> <code>uint8</code></summary>

Which rotation components from the sampled look at should be applied to the point.

</details>

<details>

<summary><strong>└─ Scale</strong> <code>uint8</code></summary>

Which scale components from the sampled look at should be applied to the point.

</details>

#### Used In

* SampleVtxByID
* SampleNearestBounds
* SampleNearestPath
* SampleNearestPoint
* SampleNearestSpline
* SampleNearestSurface
* SampleSurfaceGuided

***

Defined in: `Source\PCGExBlending\Public\Sampling\PCGExApplySamplingDetails.h`
