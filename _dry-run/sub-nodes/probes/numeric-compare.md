---
description: 'In editor :: PCGEx | Probe : Numeric Compare'
---

# Numeric Compare

**Connect points where attribute comparison passes.**

Creates connections only when a numeric attribute comparison between the probing point and candidate point succeeds.

---

## Settings

<details>
<summary><strong>Max Connections</strong> <code>int32</code></summary>

Maximum number of connections per point.

Default: `1`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

The attribute to compare between points.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Comparison</strong> <code>EPCGExComparison</code></summary>

The comparison operator.

| Value | Behavior |
|-------|----------|
| **StrictlyEqual** | Source == Candidate |
| **StrictlyNotEqual** | Source != Candidate |
| **EqualOrGreater** | Source >= Candidate |
| **EqualOrSmaller** | Source <= Candidate |
| **StrictlyGreater** | Source > Candidate |
| **StrictlySmaller** | Source < Candidate |
| **NearlyEqual** | Source ≈ Candidate |
| **NearlyNotEqual** | Source !≈ Candidate |

Default: `StrictlyGreater`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Tolerance for near-equality comparisons.

*Visible when using NearlyEqual or NearlyNotEqual*

</details>

<details>
<summary><strong>Prevent Coincidence</strong> <code>bool</code></summary>

Prevent connections in roughly the same direction.

Default: `true`

⚡ PCG Overridable

</details>

---

## Example Use Cases

- Connect to points with higher values (flow uphill)
- Connect points with similar densities
- Create hierarchical connections by attribute rank

---

📦 **Module**: `PCGExElementsProbing` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExElementsProbing/Public/Probes/PCGExProbeNumericCompare.h)
