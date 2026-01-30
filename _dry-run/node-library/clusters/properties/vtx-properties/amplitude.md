---
icon: wave-sine
description: 'In editor :: PCGEx | Vtx : Amplitude'
---

# Vtx : Amplitude

Compute vertex amplitude based on neighbor positions.

## Overview

Amplitude measures the spatial extent of a vertex's neighbors. It outputs minimum, maximum, and range values as either scalar lengths or per-component vectors. The sign output measures directional bias relative to an up vector.

```
Neighbors:                  Amplitude:
      B (+50)               Min = closest distance
      │                     Max = farthest distance
      │                     Range = max - min
  A───●───C
(-10) ↑ (+30)
     origin
```

## How It Works

1. **Collect neighbors**: Gather positions of all connected neighbors
2. **Compute extents**: Calculate min/max distances or per-axis values
3. **Calculate sign**: Optionally compute directional bias against up vector
4. **Write outputs**: Store computed values as vertex attributes

## Settings

### Minimum Amplitude

<details>
<summary><strong>Write Min Amplitude</strong> <code>bool</code></summary>

Write the minimum amplitude value.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Min</strong> <code>FName</code></summary>

Attribute name for minimum amplitude.

Default: `MinAmplitude`

⚡ PCG Overridable
📋 Visible when: `Write Min Amplitude = true`

</details>

<details>
<summary><strong>Absolute</strong> <code>bool</code></summary>

Use absolute values when computing minimum.

Default: `true`

⚡ PCG Overridable
📋 Visible when: `Write Min Amplitude = true` and `Mode = Individual`

</details>

<details>
<summary><strong>Mode</strong> <code>EPCGExVtxAmplitudeMode</code></summary>

How minimum amplitude is computed.

| Option | Behavior |
|--------|----------|
| **Length** | Single scalar value (vector magnitude) |
| **Individual** | Per-component FVector values |

Default: `Length`

⚡ PCG Overridable
📋 Visible when: `Write Min Amplitude = true`

</details>

### Maximum Amplitude

<details>
<summary><strong>Write Max Amplitude</strong> <code>bool</code></summary>

Write the maximum amplitude value.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Max</strong> <code>FName</code></summary>

Attribute name for maximum amplitude.

Default: `MaxAmplitude`

⚡ PCG Overridable
📋 Visible when: `Write Max Amplitude = true`

</details>

<details>
<summary><strong>Absolute</strong> <code>bool</code></summary>

Use absolute values when computing maximum.

Default: `true`

⚡ PCG Overridable
📋 Visible when: `Write Max Amplitude = true` and `Mode = Individual`

</details>

<details>
<summary><strong>Mode</strong> <code>EPCGExVtxAmplitudeMode</code></summary>

How maximum amplitude is computed.

| Option | Behavior |
|--------|----------|
| **Length** | Single scalar value |
| **Individual** | Per-component FVector values |

Default: `Length`

⚡ PCG Overridable
📋 Visible when: `Write Max Amplitude = true`

</details>

### Amplitude Range

<details>
<summary><strong>Write Amplitude Range</strong> <code>bool</code></summary>

Write the amplitude range (max - min).

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Range</strong> <code>FName</code></summary>

Attribute name for amplitude range.

Default: `AmplitudeRange`

⚡ PCG Overridable
📋 Visible when: `Write Amplitude Range = true`

</details>

<details>
<summary><strong>Absolute</strong> <code>bool</code></summary>

Use absolute values when computing range.

Default: `true`

⚡ PCG Overridable
📋 Visible when: `Write Amplitude Range = true` and `Mode = Individual`

</details>

<details>
<summary><strong>Mode</strong> <code>EPCGExVtxAmplitudeMode</code></summary>

How amplitude range is computed.

| Option | Behavior |
|--------|----------|
| **Length** | Single scalar value |
| **Individual** | Per-component FVector values |

Default: `Length`

⚡ PCG Overridable
📋 Visible when: `Write Amplitude Range = true`

</details>

### Amplitude Sign

<details>
<summary><strong>Write Amplitude Sign</strong> <code>bool</code></summary>

Write the amplitude sign (directional bias).

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Sign</strong> <code>FName</code></summary>

Attribute name for amplitude sign.

Default: `AmplitudeSign`

⚡ PCG Overridable
📋 Visible when: `Write Amplitude Sign = true`

</details>

<details>
<summary><strong>Sign Output Mode</strong> <code>EPCGExVtxAmplitudeSignOutput</code></summary>

How sign value is computed.

| Option | Behavior |
|--------|----------|
| **Raw** | Raw dot product |
| **Size** | Dot product × edge size |
| **Size (Normalized)** | Dot product × normalized edge size |
| **Sign** | Discrete sign only (-1, 0, 1) |

Default: `Size`

⚡ PCG Overridable
📋 Visible when: `Write Amplitude Sign = true`

</details>

<details>
<summary><strong>Absolute</strong> <code>bool</code></summary>

Use absolute value for sign calculation.

Default: `true`

⚡ PCG Overridable
📋 Visible when: `Write Amplitude Sign = true`

</details>

<details>
<summary><strong>Up Mode</strong> <code>EPCGExVtxAmplitudeUpMode</code></summary>

Reference direction for sign calculation.

| Option | Behavior |
|--------|----------|
| **Average Direction** | Use average direction to neighbors |
| **Custom Up Vector** | Use specified up vector |

Default: `Average Direction`

⚡ PCG Overridable
📋 Visible when: `Write Amplitude Sign = true`

</details>

<details>
<summary><strong>Up Input Type</strong> <code>EPCGExInputValueType</code></summary>

Source for custom up vector.

| Option | Behavior |
|--------|----------|
| **Constant** | Use fixed vector value |
| **Attribute** | Read from point attribute |

Default: `Constant`

⚡ PCG Overridable
📋 Visible when: `Write Amplitude Sign = true` and `Up Mode = Custom Up Vector`

</details>

<details>
<summary><strong>Up Vector (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read up vector from.

⚡ PCG Overridable
📋 Visible when: `Up Input Type = Attribute`

</details>

<details>
<summary><strong>Up Vector</strong> <code>FVector</code></summary>

Constant up vector value.

Default: `(0, 0, 1)`

⚡ PCG Overridable
📋 Visible when: `Up Input Type = Constant`

</details>

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Meta/VtxProperties/PCGExVtxPropertyAmplitude.h)
