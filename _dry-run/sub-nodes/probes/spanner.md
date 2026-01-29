---
description: 'In editor :: PCGEx | G-Probe : Greedy Spanner'
---

# Spanner

**Greedy t-spanner — sparse graph with path length guarantees.**

Creates a sparse graph where the path distance between any two points is at most t times the Euclidean distance.

---

## How It Works

```
Complete Graph (many edges):     t-Spanner (sparse):

    ●───●───●                    ●───●───●
    │╲ ╱│╲ ╱│                    │   │   │
    │ ╳ │ ╳ │         ──►        │   │   │
    │╱ ╲│╱ ╲│                    │   │   │
    ●───●───●                    ●───●───●

Path A→B ≤ t × direct_distance(A,B)
```

---

## Settings

<details>
<summary><strong>Stretch Factor (t)</strong> <code>double</code></summary>

Maximum stretch factor — path through graph is at most t × Euclidean distance.

- Lower values (1.0-2.0) = denser, more direct paths
- Higher values (3.0+) = sparser, may detour more

Default: `2.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Max Edge Candidates</strong> <code>int32</code></summary>

Maximum edges to consider (performance limit).

Higher values give better spanner quality at the cost of computation time.

Default: `50000`

⚡ PCG Overridable

</details>

---

## Understanding Stretch Factor

| t Value | Behavior |
|---------|----------|
| 1.0 | Complete graph (all edges needed) |
| 1.5 | Dense, nearly optimal paths |
| 2.0 | Good balance (path at most 2× direct) |
| 3.0 | Sparse, may take longer routes |
| 5.0+ | Very sparse, significant detours |

---

## Algorithm

The greedy spanner algorithm:
1. Sort all possible edges by length
2. For each edge (short to long):
   - If current graph path > t × edge length, add edge
   - Otherwise, skip (path already good enough)

This produces sparse graphs with guaranteed path quality.

---

## Example Use Cases

### Efficient Road Networks
Create road networks with good coverage:
- t = 2.0 ensures no trip is more than 2× direct distance
- Much fewer roads than connecting everything

### Communication Networks
Sparse but well-connected:
- Minimize infrastructure (edges)
- Guarantee message delivery speed

### Navigation Meshes
Pathfinding graphs with quality guarantees:
- Sparse for efficiency
- Bounded detour factor

---

{% hint style="warning" %}
**Performance**: The greedy spanner algorithm can be expensive for large point sets. Use Max Edge Candidates to limit computation time at the cost of spanner quality.
{% endhint %}

---

📦 **Module**: `PCGExElementsProbing` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExElementsProbing/Public/Probes/PCGExGlobalProbeSpanner.h)
