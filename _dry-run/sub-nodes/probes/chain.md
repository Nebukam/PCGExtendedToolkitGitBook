---
description: 'In editor :: PCGEx | G-Probe : Chain/Path'
---

# Chain

**Create sequential chain connections based on sorting criteria.**

Sorts points using various methods and connects them in sequence to form a path or loop.

---

## How It Works

```
Points sorted by attribute:     Chain connection:

  ●(5)  ●(2)  ●(7)             ●(2)──●(5)──●(7)
  ●(1)  ●(9)  ●(4)      ──►    │           │
                               ●(1)        ●(9)
                                    ╲    ╱
                                     ●(4)

Closed Loop adds: ●(9)──●(1)
```

---

## Settings

<details>
<summary><strong>Sort Mode</strong> <code>EPCGExProbeChainSortMode</code></summary>

How points are sorted before chaining.

| Value | Behavior |
|-------|----------|
| **By Attribute** | Sort by a scalar attribute value |
| **By Axis Projection** | Sort by projection onto an axis |
| **By Spatial Curve (TSP)** | Greedy traveling salesman approximation |
| **By Hilbert Curve** | Hilbert curve index for spatial locality |

Default: `By Attribute`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Sort Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to sort by.

*Visible when Sort Mode = By Attribute*

Default: `$Density`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Projection Axis</strong> <code>FVector</code></summary>

Axis to project positions onto for sorting.

*Visible when Sort Mode = By Axis Projection*

Default: `(1, 0, 0)` (Forward)

⚡ PCG Overridable

</details>

<details>
<summary><strong>Closed Loop</strong> <code>bool</code></summary>

When enabled, connects the last point back to the first, creating a closed loop.

Default: `false`

⚡ PCG Overridable

</details>

---

## Sort Mode Details

### By Attribute
Sort points by any numeric attribute:
- Height, density, custom values
- Great for ordered progressions

### By Axis Projection
Project positions onto an axis and sort:
- Forward axis for left-to-right chains
- Up axis for bottom-to-top stacking

### By Spatial Curve (TSP)
Greedy traveling salesman approximation:
- Attempts to minimize total path length
- Good for spatially coherent paths

### By Hilbert Curve
Space-filling curve ordering:
- Preserves spatial locality
- Points near in space tend to be near in chain

---

## Example Use Cases

### Height-Based Paths
Connect points from low to high:
- Sort Mode = By Attribute
- Attribute = `$Position.Z`

### Procedural Roads
Create paths through point sets:
- Sort Mode = TSP
- Creates reasonable route through all points

### Contour Lines
Connect elevation bands:
- Sort Mode = By Attribute
- Closed Loop = true for rings

---

📦 **Module**: `PCGExElementsProbing` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExElementsProbing/Public/Probes/PCGExGlobalProbeChain.h)
