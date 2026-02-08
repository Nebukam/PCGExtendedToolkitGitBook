---
icon: book
---

# Orbital Set

Defines a set of directional orbitals for one layer of the valency system. Each orbital maps a spatial direction to a bitmask, enabling the solver to reason about connectivity by direction.

### Overview

An Orbital Set is a `UDataAsset` that lists directional connection points (orbitals) for a single layer. Each orbital references a bitmask collection entry that provides both a direction vector and a bitmask value. At runtime, the **Write Valency Orbitals** node uses this asset to match edge directions against orbitals and write orbital masks and indices to cluster attributes.

### How It Works

1. **Define Orbitals**: Each entry references a bitmask collection entry, which provides a direction and bitmask value.
2. **Direction Matching**: When processing a cluster, edge directions are compared against orbital directions using the angle threshold. An edge whose direction falls within the threshold of an orbital is assigned that orbital's index.
3. **Attribute Writing**: Matched orbitals produce per-Vtx bitmask attributes (`PCGEx/V/Mask/{LayerName}`) and per-edge orbital index attributes (`PCGEx/V/Orbital/{LayerName}`).

**Usage Notes**

* **Layer Name**: Determines the attribute namespace. Multiple orbital sets with different layer names enable multi-layer valency systems — e.g., one layer for cardinal directions, another for diagonals.
* **Angle Threshold**: Controls how permissive direction matching is. At 22.5°, a direction must be within 22.5° of an orbital to match. Wider thresholds are more forgiving but risk ambiguous matches.
* **Transform Direction**: When enabled, orbital directions are compared in the Vtx's local space rather than world space. This allows rotated clusters to match orbitals correctly.
* **Bitmask References**: Orbitals derive their direction and identity from a `UPCGExBitmaskCollection` asset. The bitmask collection is the single source of truth for directional semantics.

### Settings

<details>

<summary><strong>Layer Name</strong> <code>FName</code></summary>

Name of this orbital layer. Determines attribute naming for masks and indices — attributes are written as `PCGEx/V/Mask/{LayerName}`, `PCGEx/V/Orbital/{LayerName}`, and `PCGEx/V/Module/{LayerName}`.

Default: `Main`

</details>

<details>

<summary><strong>Angle Threshold</strong> <code>double</code></summary>

Maximum angle (in degrees) between an edge direction and an orbital direction for the edge to be considered a match. Wider thresholds are more permissive but may cause ambiguous matches when orbitals are close together.

Default: `22.5`

Range: 0.0 – 90.0

</details>

<details>

<summary><strong>Transform Direction</strong> <code>bool</code></summary>

Whether to transform orbital directions into the Vtx's local space before matching. Enable this when your cluster Vtx have meaningful rotations and orbitals should be relative to each Vtx's orientation rather than world axes.

Default: `true`

</details>

<details>

<summary><strong>Orbitals</strong> <code>TArray&#x3C;FPCGExValencyOrbitalEntry></code></summary>

The list of orbital definitions for this layer. Each entry contains:

| Field            | Type               | Description                                                                               |
| ---------------- | ------------------ | ----------------------------------------------------------------------------------------- |
| **Bitmask Ref**  | `FPCGExBitmaskRef` | Reference to a bitmask collection entry — provides direction vector and bitmask value     |
| **Display Name** | `FText`            | Optional display name for UI and debugging. Falls back to the bitmask identifier if empty |
| **Debug Color**  | `FLinearColor`     | Color used for debug visualization of this orbital                                        |

Default: empty

</details>

***

[![Static Badge](https://img.shields.io/badge/Source-PCGExElementsValency-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsValency/Public/Core/PCGExValencyOrbitalSet.h)


