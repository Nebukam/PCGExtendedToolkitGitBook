---
description: 'In editor :: PCGEx | Probe : Closests'
---

# Closest

**Connect to the N closest points within search radius.**

The most straightforward probe — finds nearby points and connects to the closest ones.

---

## Settings

<details>
<summary><strong>Max Connections Input</strong> <code>EPCGExInputValueType</code></summary>

How to specify the maximum number of connections per point.

| Value | Behavior |
|-------|----------|
| **Constant** | Use a fixed number |
| **Attribute** | Read from an attribute |

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Max Connections</strong> <code>int32</code></summary>

Maximum number of connections to create per point.

Default: `1`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Prevent Coincidence</strong> <code>bool</code></summary>

Attempts to prevent connections that are roughly in the same direction.

Useful for creating more spread-out connections rather than clustered ones.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Coincidence Prevention Tolerance</strong> <code>double</code></summary>

Tolerance for coincidence detection.

*Visible when Prevent Coincidence = true*

Default: `0.001`

</details>

---

## Example Use Cases

- Simple point-to-nearest connections
- Basic clustering
- Minimum spanning tree approximation (with max connections = 1)

---

📦 **Module**: `PCGExElementsProbing` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExElementsProbing/Public/Probes/PCGExProbeClosest.h)
