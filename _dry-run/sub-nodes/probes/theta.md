---
description: 'In editor :: PCGEx | G-Probe : Theta Graph'
---

# Theta

**Theta/Yao graph spanner using angular cones.**

Divides space around each point into angular cones and connects to the nearest neighbor in each cone. This creates a sparse graph with good spanner properties.

---

## How It Works

```
6 Cones around point:

         Cone 1
          ╱ ╲
    Cone 6   Cone 2
       │  ●  │
    Cone 5   Cone 3
          ╲ ╱
         Cone 4

Connect to nearest point in each occupied cone
```

---

## Settings

<details>
<summary><strong>Num Cones</strong> <code>int32</code></summary>

Number of angular cones to divide space into.

- Higher values = denser graph, better paths
- Typical values: 6-8

Default: `6`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Cone Axis</strong> <code>FVector</code></summary>

Axis to build cones around (cones are perpendicular to this axis).

Default: `(0, 0, 1)` (Up)

⚡ PCG Overridable

</details>

<details>
<summary><strong>Use Yao Variant</strong> <code>bool</code></summary>

When enabled, uses Yao graph construction (nearest in cone by Euclidean distance).

When disabled, uses Theta graph (nearest by projected distance).

Default: `false`

⚡ PCG Overridable

</details>

---

## Theta vs Yao Graphs

### Theta Graph (default)
Projects distances onto cone bisector:
- Better theoretical spanner properties
- Slightly more complex

### Yao Graph
Uses actual Euclidean distance in cone:
- Simpler distance computation
- Still produces good spanners

---

## Cone Count Tradeoffs

| Cones | Graph Density | Spanner Quality |
|-------|--------------|-----------------|
| 4 | Very sparse | May miss paths |
| 6 | Sparse | Good (common choice) |
| 8 | Moderate | Very good |
| 12+ | Dense | Excellent, but more edges |

---

## Example Use Cases

### Sparse Navigation Graphs
Create efficient pathfinding networks:
- 6-8 cones for good coverage
- Natural directional connectivity

### Grid-Free Connectivity
Connect irregular point distributions:
- Adapts to any point arrangement
- Maintains spanner properties

### Planar Graphs
With appropriate cone count:
- Can create approximately planar graphs
- Good for 2D applications

---

{% hint style="info" %}
**2D vs 3D**: The Cone Axis determines the "up" direction. For 2D-like connectivity on a terrain, use `(0, 0, 1)`. For side-view connectivity, try `(0, 1, 0)`.
{% endhint %}

---

📦 **Module**: `PCGExElementsProbing` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExElementsProbing/Public/Probes/PCGExGlobalProbeTheta.h)
