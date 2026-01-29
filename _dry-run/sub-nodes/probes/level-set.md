---
description: 'In editor :: PCGEx | G-Probe : Level Set'
---

# Level Set

**Connect points with similar scalar values (isolines/contours).**

Creates connections between points that have similar values for a given attribute, like connecting points at the same elevation to form contour lines.

---

## How It Works

```
Points with height values:

    [100]     [102]     [200]
    [98]      [101]     [201]
    [99]      [103]     [199]

With Max Level Difference = 5:

    [100]─────[102]     [200]─────[201]
      │         │         │         │
    [98]──────[101]     [199]───────┘
      │         │
    [99]──────[103]

Two separate contour groups form
```

---

## Settings

<details>
<summary><strong>Level Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute defining the scalar field for level comparison.

Default: `$Position.Z`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Max Level Difference</strong> <code>double</code></summary>

Maximum difference in scalar value to allow a connection.

Points with larger differences won't connect.

Default: `10.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Normalize Levels</strong> <code>bool</code></summary>

When enabled, normalizes level values to 0-1 range before comparison.

Useful when attribute values have unpredictable ranges.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Max Connections Per Point</strong> <code>int32</code></summary>

Maximum number of connections per point within the level tolerance.

Default: `4`

⚡ PCG Overridable

</details>

---

## Level Normalization

### Without Normalization
Max Level Difference is in attribute units:
- Height: 10 means 10 units of elevation
- Temperature: 10 means 10 degrees

### With Normalization
Max Level Difference is relative (0-1 scale):
- 0.1 means 10% of the value range
- Adapts to actual data range

---

## Example Use Cases

### Elevation Contours
Connect points at similar heights:
- Level Attribute = `$Position.Z`
- Creates contour lines on terrain

### Temperature Bands
Group by thermal similarity:
- Level Attribute = Temperature
- Connect similar thermal regions

### Attribute Clustering
Group by any numeric similarity:
- Level Attribute = custom attribute
- Connect similar values

### Isovalue Surfaces
Build isosurface-like structures:
- Connect points with similar density, pressure, etc.

---

{% hint style="info" %}
**Search Radius Still Applies**: Points must also be within the search radius to connect. Level Set filtering is applied on top of spatial proximity.
{% endhint %}

---

📦 **Module**: `PCGExElementsProbing` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExElementsProbing/Public/Probes/PCGExGlobalProbeLevelSet.h)
