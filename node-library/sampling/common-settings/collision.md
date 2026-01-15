---
icon: list-tree
---

# Collision

#### Settings

<details>

<summary><strong>Trace Complex</strong> <code>bool</code></summary>

Controls trace complex.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Collision Type</strong> <code>EPCGExCollisionFilterType</code></summary>

Collision type to check against

**Values:**

* **Channel**: Channel
* **Object Type**: Object Type
* **Profile**: Profile

⚡ PCG Overridable

</details>

<details>

<summary><strong>Collision Object Type</strong> <code>int32</code></summary>

Collision object type to check against

⚡ PCG Overridable

</details>

<details>

<summary><strong>Collision Profile Name</strong> <code>FName</code></summary>

Collision profile to check against

⚡ PCG Overridable

</details>

<details>

<summary><strong>Ignore Self</strong> <code>bool</code></summary>

Ignore this graph' PCG content

⚡ PCG Overridable

</details>

<details>

<summary><strong>Ignore Actors</strong> <code>bool</code></summary>

Ignore a procedural selection of actors

⚡ PCG Overridable

</details>

<details>

<summary><strong>Ignored Actor Selector</strong> <code>FPCGActorSelectorSettings</code></summary>

Controls ignored actor selector.

⚡ PCG Overridable

</details>

#### Used In

* EdgeRefineLineTrace
* SampleNearestSurface
* SampleSurfaceGuided
* TensorSurface

***

Defined in: `Source\PCGExFoundations\Public\Details\PCGExCollisionDetails.h`
