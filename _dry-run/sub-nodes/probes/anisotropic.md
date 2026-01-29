---
description: 'In editor :: PCGEx | Probe : Anisotropic'
---

# Anisotropic

**Connect in 16 fixed directions around the X/Y plane.**

Searches in 16 evenly-spaced directions (22.5° apart) to create grid-like connectivity patterns.

---

## How It Works

```
16 directions around the point (top-down view)

        ↑
      ↖ │ ↗
    ←───●───→
      ↙ │ ↘
        ↓

(+ 8 intermediate directions at 22.5° intervals)
```

---

## Settings

<details>
<summary><strong>Max Angle</strong> <code>double</code></summary>

Maximum angle deviation for each direction cone.

Range: 0–11.25 (half the spacing between directions)

Default: `5`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Transform Direction</strong> <code>bool</code></summary>

Transform the 16 directions by the point's rotation.

Default: `true`

⚡ PCG Overridable

</details>

---

## Example Use Cases

- Grid-aligned connectivity
- Uniform connection spread
- Cardinal + diagonal patterns

{% hint style="info" %}
**Best with Projection**: Use with internal projection to project points onto a plane first for optimal grid-like results.
{% endhint %}

---

📦 **Module**: `PCGExElementsProbing` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExElementsProbing/Public/Probes/PCGExProbeAnisotropic.h)
