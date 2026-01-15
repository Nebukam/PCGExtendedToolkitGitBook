---
icon: xmark-large
---

# Point/Edge Intersections

## Point Edge Intersection

> Shared configuration used in 4 nodes.

#### Settings

<details>

<summary><strong>Enable Self Intersection</strong> <code>bool</code></summary>

If disabled, points will only check edges they aren't mapped to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Fuse Details</strong> <code>FPCGExSourceFuseDetails</code></summary>

Fuse Settings

⚡ PCG Overridable

</details>

<details>

<summary><strong>Snap On Edge</strong> <code>bool</code></summary>

When enabled, point will be moved exactly on the edge.

⚡ PCG Overridable

</details>

**Metadata**

<details>

<summary><strong>Write Is Intersector</strong> <code>bool</code></summary>

Controls write is intersector.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Is Intersector Attribute Name</strong> <code>FName</code></summary>

Name of the attribute to flag point as intersector (result of an Point/Edge intersection)

⚡ PCG Overridable

</details>

#### Used In

* PathToClusters
* FuseClusters
* UnionProcessor

***

Defined in: `Source\PCGExBlending\Public\Details\PCGExIntersectionDetails.h`
