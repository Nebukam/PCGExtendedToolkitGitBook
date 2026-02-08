---
icon: puzzle-piece
description: 'Probe : Orbital (Valency) - Probe using Valency orbital set directions'
---

# Probe : Orbital (Valency)

Probe using Valency orbital set directions.

## Overview

A per-point probe that searches for neighbors in the directions defined by a Valency orbital set. For each orbital direction, the probe finds the best candidate within the search radius and angle threshold, creating connectivity that matches the orbital layout. This bridges the probing system with the valency system — the resulting cluster already has edges aligned to orbital directions.

## How It Works

1. **Load Orbital Set**: Pre-resolves all orbital directions and the angle threshold from the referenced orbital set asset.
2. **Per-Point Processing**: For each point, iterates over all orbital directions.
3. **Direction Transform**: If the orbital set has `TransformDirection` enabled, rotates each orbital direction by the point's transform.
4. **Candidate Matching**: For each orbital, finds the candidate within the search radius that best matches the direction (within the angle threshold).
5. **Prioritization**: When multiple candidates fall within an orbital's cone, selects based on the Favor setting — either best alignment or closest distance.

#### Usage Notes

- **One Edge Per Orbital**: Each orbital direction produces at most one connection per point, creating structured connectivity patterns that mirror the orbital layout.
- **Orbital Set Determines Topology**: The orbital set's directions and angle threshold directly control the resulting cluster structure. A 4-cardinal orbital set produces grid-like graphs; an 8-direction set produces denser connectivity.
- **Downstream Compatibility**: Clusters built with this probe are already aligned to the orbital directions, making downstream Write Valency Orbitals matching straightforward.

## Behavior

```
Orbital Probe (4-cardinal, threshold=22.5°):

    Orbital directions:
         ↑ North
    ← West ● East →
         ↓ South

    Per-point: finds best candidate in each direction's cone

         •(N match)
         |
    •────●────•(E match)
         |
         •(S match)

    With Favor=Closest: picks nearest point in each cone
    With Favor=Best Alignment: picks most aligned point in each cone
```

## Settings

<details>
<summary><strong>Orbital Set</strong> <code>TSoftObjectPtr&lt;UPCGExValencyOrbitalSet&gt;</code></summary>

The orbital set asset defining probe directions, angle threshold, and transform behavior. Each orbital in the set becomes a probe direction.

Default: `None`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Favor</strong> <code>EPCGExProbeValencyPriorization</code></summary>

How to prioritize among candidates within an orbital's angle cone.

| Option | Description |
|--------|-------------|
| **Best Alignment** | Favor the candidate that best aligns with the orbital direction |
| **Closest Position** | Favor the nearest candidate within the cone |

Default: `Closest Position`

</details>

### Search Radius (Inherited)

<details>
<summary><strong>Search Radius Input</strong> <code>EPCGExInputValueType</code></summary>

Whether the search radius is a constant value or read from an attribute.

| Option | Description |
|--------|-------------|
| **Constant** | Use the constant value specified below |
| **Attribute** | Read the radius from a point attribute |

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Search Radius</strong> <code>double</code></summary>

The maximum distance to search for neighbors in each orbital direction.

Default: `100`

📋 *Visible when Search Radius Input = Constant*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Offset</strong> <code>double</code></summary>

Additional offset added to the search radius value.

Default: `0`

⚡ PCG Overridable

</details>

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Probe** | PCGEx \| Probe | The probe factory to connect to Connect Points |

---

📦 **Module**: `PCGExElementsValency` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsValency/Public/Probes/PCGExProbeValency.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 2 documented (OrbitalSet, Favor)
Inherited Properties: FPCGExProbeConfigBase (SearchRadiusInput, SearchRadius, Offset)
Inputs: None
Outputs: Probe (PCGEx | Probe)
Nested Types: FPCGExProbeConfigValency, EPCGExProbeValencyPriorization
-->
