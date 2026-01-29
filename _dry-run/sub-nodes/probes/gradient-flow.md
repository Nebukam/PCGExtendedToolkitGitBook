---
description: 'In editor :: PCGEx | G-Probe : Gradient Flow'
---

# Gradient Flow

**Connect points following the gradient of an attribute.**

Creates flow networks where connections follow the gradient (direction of increasing or decreasing values) of a scalar attribute.

---

## How It Works

```
Attribute Values (e.g., height):

    [3]     [5]     [7]
       ╲    │    ╱
    [2]──[4]──[6]──[8]
       ╱    │    ╲
    [1]     [3]     [5]

Flow toward higher values:
    ──►  ──►  ──►
    ↗    ↑    ↗
```

---

## Settings

<details>
<summary><strong>Flow Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute defining the scalar field to flow along.

Default: `$Density`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Uphill Only</strong> <code>bool</code></summary>

When enabled, only connect toward higher values (flow uphill).

When disabled, connects in both directions.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Steepest Only</strong> <code>bool</code></summary>

When enabled, only connect to the neighbor with the steepest gradient.

When disabled, connects to all neighbors with valid gradient.

Default: `true`

⚡ PCG Overridable

</details>

---

## Flow Direction

### Uphill Flow
Points connect toward higher values:
- Water flowing uphill (reversed)
- Heat seeking behavior

### Downhill Flow (Uphill = false)
Points connect toward lower values:
- Natural water flow
- Gravity-driven paths

### Steepest Path
Only the strongest gradient:
- Single path per point
- Creates tree-like structure

### Multi-Path (Steepest = false)
All valid gradients:
- Multiple paths per point
- Denser network

---

## Example Use Cases

### Water Flow Simulation
Model drainage patterns:
- Flow Attribute = `$Position.Z`
- Uphill Only = false
- Steepest Only = true

### Heat Diffusion
Connect toward heat sources:
- Flow Attribute = Temperature
- Uphill Only = true

### Density Climbing
Move toward denser regions:
- Flow Attribute = `$Density`
- Uphill Only = true

---

{% hint style="info" %}
**Tree Structure**: With Steepest Only enabled and Uphill Only enabled, the resulting graph typically forms a tree structure (forest) with local maxima as roots.
{% endhint %}

---

📦 **Module**: `PCGExElementsProbing` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExElementsProbing/Public/Probes/PCGExGlobalProbeGradientFlow.h)
