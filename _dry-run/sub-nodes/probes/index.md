---
description: 'In editor :: PCGEx | Probe : Index'
---

# Index

**Connect to specific points by index.**

Creates connections based on explicit index references rather than spatial proximity. Ignores search radius.

---

## Settings

<details>
<summary><strong>Mode</strong> <code>EPCGExProbeTargetMode</code></summary>

How to use the index value.

| Value | Behavior |
|-------|----------|
| **Target** | Index is the absolute target point |
| **One-way Offset** | Index is offset from current point |
| **Two-way Offset** | Creates connections at ±offset |

Default: `Target`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Index Safety</strong> <code>EPCGExIndexSafety</code></summary>

How to handle out-of-range indices.

| Value | Behavior |
|-------|----------|
| **Ignore** | Skip invalid indices |
| **Clamp** | Clamp to valid range |
| **Tile** | Wrap around with modulo |

Default: `Ignore`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Index Input</strong> <code>EPCGExInputValueType</code></summary>

How to specify the target index.

| Value | Behavior |
|-------|----------|
| **Constant** | Use a fixed index |
| **Attribute** | Read from an attribute |

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Index</strong> <code>int32</code></summary>

The target index or offset value.

Default: `1`

⚡ PCG Overridable

</details>

---

## Example Use Cases

- Create explicit linked list (offset = 1)
- Connect to central hub (target = 0)
- Bi-directional neighbors (two-way offset)

---

📦 **Module**: `PCGExElementsProbing` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExElementsProbing/Public/Probes/PCGExProbeIndex.h)
