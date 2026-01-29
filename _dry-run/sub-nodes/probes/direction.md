---
description: 'In editor :: PCGEx | Probe : Direction'
---

# Direction

**Connect to points within a specified angular cone.**

Searches for candidates in a particular direction from each point, useful for creating directional connectivity.

---

## Settings

<details>
<summary><strong>Use Component Wise Angle</strong> <code>bool</code></summary>

When enabled, use separate angle thresholds for pitch, yaw, and roll instead of a single max angle.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Max Angle</strong> <code>double</code></summary>

Maximum angle (in degrees) from the direction to search within.

*Visible when Use Component Wise Angle = false*

Range: 0–180

Default: `45`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Max Angles</strong> <code>FRotator</code></summary>

Component-wise angle limits.

*Visible when Use Component Wise Angle = true*

Default: `(45, 45, 45)`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Unsigned Check</strong> <code>bool</code></summary>

Use absolute angle values, treating opposite directions as equivalent.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Direction Input</strong> <code>EPCGExInputValueType</code></summary>

How to specify the probe direction.

| Value | Behavior |
|-------|----------|
| **Constant** | Use a fixed direction |
| **Attribute** | Read from an attribute |

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Direction</strong> <code>FVector</code></summary>

Constant direction to probe in.

*Visible when Direction Input = Constant*

Default: `(1, 0, 0)` (Forward)

⚡ PCG Overridable

</details>

<details>
<summary><strong>Transform Direction</strong> <code>bool</code></summary>

Transform the direction by the point's rotation.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Favor</strong> <code>EPCGExProbeDirectionPriorization</code></summary>

What to prioritize when selecting candidates.

| Value | Behavior |
|-------|----------|
| **Best alignment** | Favor candidates best aligned with direction |
| **Closest position** | Favor closest candidates |

Default: `Closest position`

</details>

<details>
<summary><strong>Do Chained Processing</strong> <code>bool</code></summary>

Process candidates sequentially after other probes.

Default: `false`

⚡ PCG Overridable

</details>

---

## Example Use Cases

- Connect points to others "in front" of them
- Create forward-facing connection patterns
- Build directional flow graphs

---

📦 **Module**: `PCGExElementsProbing` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExElementsProbing/Public/Probes/PCGExProbeDirection.h)
