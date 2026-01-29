---
description: 'In editor :: PCGEx | G-Probe : KNN'
---

# KNN (K-Nearest Neighbors)

**Connect each point to its K nearest neighbors.**

Classic K-Nearest Neighbors connectivity — a fundamental graph construction algorithm.

---

## How It Works

```
With K = 3:

  ●2          ●3
   ╲         ╱
    ╲       ╱
    ●1─────●─────●4
          ╱╲
         ╱  ╲
        ●5   ●6

Center point connects to 3 closest neighbors
```

---

## Settings

<details>
<summary><strong>K</strong> <code>int32</code></summary>

Number of nearest neighbors to connect to.

Can also be read from an attribute named "K".

Default: `5`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Mode</strong> <code>EPCGExProbeKNNMode</code></summary>

How connections are established.

| Value | Behavior |
|-------|----------|
| **Default** | Connect A→B if B is in A's K-nearest |
| **Mutual** | Only connect if both points consider each other nearest |

Default: `Mutual`

⚡ PCG Overridable

</details>

---

## Mutual Mode

```
Default Mode:           Mutual Mode:
A──►B                   A───B
(B may not point to A)  (Both must agree)
```

Mutual mode creates symmetric, cleaner graphs but with fewer edges.

---

## Example Use Cases

### Basic Clustering
Low K values create sparse, local connections:
- K = 3-5 for minimal networks

### Dense Networks
Higher K values create denser graphs:
- K = 10-20 for highly connected regions

### Symmetric Graphs
Use Mutual mode for undirected-style connectivity:
- Good for pathfinding and traversal

---

📦 **Module**: `PCGExElementsProbing` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExElementsProbing/Public/Probes/PCGExGlobalProbeKNN.h)
