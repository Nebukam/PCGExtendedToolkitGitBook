---
description: 'In editor :: PCGEx | Heuristics : Heuristics : Attribute'
---

# Attribute

Reads a **vertex or edge attribute** as the heuristic score. Useful for custom cost maps or terrain weights.

```
Vertices with @Cost attribute:
  [1.0]───[0.2]───[0.5]
    │       │       │
  [0.8]───[0.1]───[0.3]    Low @Cost = preferred path
    │       │       │
  [0.9]───[0.4]───[0.7]
```

**Category:** Fully Static

---

## Settings

<details>
<summary><strong>Mode</strong> <code>EPCGExAttributeHeuristicInputMode</code></summary>

How to process the attribute value into a score.

| Value | Behavior |
|-------|----------|
| **Auto Curve** | Normalize using actual min/max from data, then sample curve |
| **Manual Curve** | Normalize using manual min/max values, then sample curve |
| **Raw** | Use attribute value directly as score (use carefully) |

Default: `Auto Curve`

</details>

<details>
<summary><strong>Source</strong> <code>EPCGExClusterElement</code></summary>

Where to read the attribute from.

| Value | Source |
|-------|--------|
| **Vtx** | Vertex attributes |
| **Edge** | Edge attributes |

Default: `Vtx`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

The attribute to read score values from.

⚡ PCG Overridable

</details>

<details>
<summary><strong>In Min</strong> <code>double</code></summary>

Manual minimum value for normalization.

Default: `0`

*Visible when Mode = Manual Curve*

⚡ PCG Overridable

</details>

<details>
<summary><strong>In Max</strong> <code>double</code></summary>

Manual maximum value for normalization.

Default: `1`

*Visible when Mode = Manual Curve*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Use Custom Fallback</strong> <code>bool</code></summary>

Use a custom fallback value when normalization fails (e.g., all values identical).

Default: `false`

</details>

<details>
<summary><strong>Fallback Value</strong> <code>double</code></summary>

Value to use when normalization fails (min == max).

Range: 0–1

Default: `1`

*Visible when Use Custom Fallback = true*

⚡ PCG Overridable

</details>

---

## Behavior Notes

- Values are cached per-cluster for efficient lookup
- When reading from vertices, the "To" node's value is used for edge scoring
- Auto Curve mode automatically determines min/max from all values in the cluster

---

📦 **Module**: `PCGExHeuristics` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExHeuristics/Public/Heuristics/PCGExHeuristicAttribute.h)
