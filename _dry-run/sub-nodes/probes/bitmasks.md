---
description: 'In editor :: PCGEx | Probe : Bitmasks'
---

# Bitmasks

**Connect using bitmask-based directional rules.**

Uses bitmask compositions and collections to define complex directional connection patterns.

---

## Settings

<details>
<summary><strong>Transform Direction</strong> <code>bool</code></summary>

Transform directions by the point's rotation.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Favor</strong> <code>EPCGExProbeBitmasksPriorization</code></summary>

What to prioritize when selecting candidates.

| Value | Behavior |
|-------|----------|
| **Best alignment** | Favor candidates best aligned with direction |
| **Closest position** | Favor closest candidates |

Default: `Closest position`

</details>

<details>
<summary><strong>Angle</strong> <code>double</code></summary>

Shared angle threshold for all directions.

Default: `22.5`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Compositions</strong> <code>TArray&lt;FPCGExBitmaskRef&gt;</code></summary>

Bitmask references defining connection directions.

</details>

<details>
<summary><strong>Collections</strong> <code>TMap</code></summary>

Bitmask collections with operations.

</details>

---

## Example Use Cases

- Complex directional rulesets
- Pattern-based connectivity
- Data-driven connection masks

---

📦 **Module**: `PCGExElementsProbing` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExElementsProbing/Public/Probes/PCGExProbeBitmasks.h)
