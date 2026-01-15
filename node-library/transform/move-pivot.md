---
description: 'In editor :: PCGEx | Move Pivot'
icon: circle
---

# Move Pivot

Move pivot point relative to its bounds.

**How It Works**

> AI-Generated, needs proofreading

* The Move Pivot node adjusts the pivot point of an object based on its bounds.
* It operates within the UVW coordinate system as specified by the PCGExUVW setting.
* The exact algorithm for moving the pivot is not detailed here but involves recalculating the position relative to the object's bounding dimensions.

#### Configuration

<details>

<summary><strong>UVW</strong> <code>PCGExUVW</code></summary>

Controls uvw.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsSpatial\Public\Elements\PCGExMovePivot.h`
