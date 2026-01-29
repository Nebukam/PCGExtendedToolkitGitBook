---
description: 'In editor :: PCGEx | G-Probe : DBSCAN'
---

# DBSCAN

**Density-based spatial clustering connectivity.**

Uses the DBSCAN algorithm to identify core points (dense regions) and connect them, with optional border point handling.

---

## How It Works

```
MinPoints = 3, Epsilon = Search Radius

Core Points (≥3 neighbors):    ●  ●  ●
Border Points (<3 neighbors):   ○
Noise Points (isolated):        ×

     ●───●───●
      ╲ ╱ ╲ ╱
       ●   ●
       │
       ○  (border connects to nearest core)

     × (noise - not connected)
```

---

## Settings

<details>
<summary><strong>Min Points</strong> <code>int32</code></summary>

Minimum number of points within Epsilon (search radius) to be considered a core point.

Points with fewer neighbors are border or noise points.

Default: `3`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Core To Core Only</strong> <code>bool</code></summary>

When enabled, only connects core points to each other.

Border and noise points remain unconnected.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Border To Nearest Core Only</strong> <code>bool</code></summary>

When enabled, border points connect only to their nearest core point.

When disabled, border points connect to all reachable core points.

Default: `true`

⚡ PCG Overridable

</details>

---

## Point Classification

| Type | Definition | Connection Behavior |
|------|------------|---------------------|
| **Core** | ≥ MinPoints neighbors | Connects to other cores |
| **Border** | < MinPoints, but near a core | Connects to core(s) |
| **Noise** | Isolated, no core nearby | No connections |

---

## Example Use Cases

### Cluster Detection
Identify dense regions automatically:
- Core points form cluster centers
- Border points mark cluster edges

### Noise Filtering
Naturally exclude outliers:
- Isolated points don't connect
- Only meaningful structure remains

### Hierarchical Networks
Build spine networks through dense regions:
- Core-to-core creates main paths
- Borders connect to nearest main path

---

{% hint style="info" %}
**Search Radius as Epsilon**: The standard probe search radius setting serves as the DBSCAN epsilon parameter.
{% endhint %}

---

📦 **Module**: `PCGExElementsProbing` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExElementsProbing/Public/Probes/PCGExGlobalProbeDBSCAN.h)
