---
description: 'In editor :: PCGEx | G-Probe : Hub & Spoke'
---

# Hub & Spoke

**Create hierarchical hub-and-spoke network topology.**

Identifies hub points using various criteria and connects other points (spokes) to their nearest hub(s).

---

## How It Works

```
Hub Selection:              Hub & Spoke Network:

  ●  ●  ●  ●                    ●
  ●  ★  ●  ●                   ╱│╲
  ●  ●  ●  ●         ──►      ● ★ ●
  ●  ●  ★  ●                   ╲│╱╲
                                ●  ★
★ = Selected as hubs           ╱│╲
                              ● ● ●
```

---

## Settings

<details>
<summary><strong>Hub Selection Mode</strong> <code>EPCGExHubSelectionMode</code></summary>

How hub points are chosen.

| Value | Behavior |
|-------|----------|
| **By Local Density** | Points in dense regions become hubs |
| **By Attribute** | Points with highest attribute values |
| **By Centrality** | Points closest to local centroids |
| **K-Means Centroids** | Run k-means clustering, use centers |

Default: `By Local Density`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Num Hubs</strong> <code>int32</code></summary>

Number of hubs to create. For K-Means mode, this is K.

Default: `10`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Hub Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute for hub selection.

*Visible when Hub Selection Mode = By Attribute*

Default: `$Density`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Connect Hubs</strong> <code>bool</code></summary>

When enabled, also connects hub points to each other.

Creates a backbone network between hubs.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Nearest Hub Only</strong> <code>bool</code></summary>

When enabled, each spoke connects only to its nearest hub.

When disabled, spokes connect to all hubs within radius.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>K-Means Iterations</strong> <code>int32</code></summary>

Number of k-means iterations for hub placement.

*Visible when Hub Selection Mode = K-Means Centroids*

Default: `10`

⚡ PCG Overridable

</details>

---

## Hub Selection Modes

### By Local Density
Points with many neighbors become hubs:
- Natural clustering behavior
- Hubs emerge in dense areas

### By Attribute
Explicit control via attribute:
- Mark important points with high values
- Predictable hub placement

### By Centrality
Points closest to local centers:
- Geometric center of regions
- Balanced hub distribution

### K-Means Centroids
Machine learning clustering:
- Optimal hub placement
- Even distribution across space

---

## Example Use Cases

### Transportation Networks
Create hub airports with spoke routes:
- K-Means for optimal hub placement
- Connect Hubs for hub-to-hub flights

### Server Architecture
Model distributed systems:
- Hubs as data centers
- Spokes as client connections

### Hierarchical Pathfinding
Multi-level navigation:
- Travel to nearest hub
- Hub network for long distance
- Exit at destination hub

---

📦 **Module**: `PCGExElementsProbing` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExElementsProbing/Public/Probes/PCGExGlobalProbeHubSpoke.h)
