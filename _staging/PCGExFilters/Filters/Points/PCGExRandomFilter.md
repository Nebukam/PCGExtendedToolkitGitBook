---
icon: filter
description: 'Filter : Random - Filters points using random probability.'
---

# Filter : Random

Filter using a random value.

## Overview

This filter evaluates points by generating a random value for each and comparing it against a threshold. It supports per-point weight attributes to bias the random distribution, optional weight curves for non-linear probability shaping, and per-point thresholds for spatially varying selection density. The random generation is seeded for reproducible results.

## How It Works

1. **Random Generation**: Generates a random value (0-1) for each point using the configured seed.
2. **Weight Application**: Optionally applies a per-point weight and weight curve to bias the random value.
3. **Threshold Comparison**: Compares the weighted random value against the threshold.
4. **Result**: Returns pass if the random value is below the threshold, fail otherwise.

#### Usage Notes

- **Reproducibility**: The same seed produces the same results, enabling deterministic random filtering.
- **Threshold**: A threshold of 0.5 selects approximately 50% of points; 0.25 selects approximately 25%.
- **Weight Curve**: Applies a curve to reshape the weight distribution before comparison.

## Behavior

**Random Selection:**
```
Threshold: 0.5
Seed: 42

Point 0: Random = 0.23 → 0.23 < 0.5: Pass
Point 1: Random = 0.78 → 0.78 < 0.5: Fail
Point 2: Random = 0.41 → 0.41 < 0.5: Pass
Point 3: Random = 0.95 → 0.95 < 0.5: Fail
```

**With Per-Point Weight:**
```
Threshold: 0.5
Point A: Weight = 0.8 → Biased toward pass
Point B: Weight = 0.2 → Biased toward fail
```

## Settings

<details>
<summary><strong>Random Seed</strong> <code>int32</code></summary>

Seed for random number generation. The same seed produces identical results across executions.

Default: `42`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Threshold Input</strong> <code>EPCGExInputValueType</code></summary>

Whether to use a constant threshold or read from an attribute.

| Option | Description |
|--------|-------------|
| **Constant** | Use the specified constant threshold |
| **Attribute** | Read threshold from a point attribute |

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Threshold (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

The attribute to read the threshold from. Value should be in the 0-1 range.

⚡ PCG Overridable

📋 *Visible when Threshold Input = Attribute*

</details>

<details>
<summary><strong>Remap to 0..1 (Threshold)</strong> <code>bool</code></summary>

When enabled, normalizes the per-point threshold to a 0-1 range internally.

Default: `false`

⚡ PCG Overridable

📋 *Visible when Threshold Input = Attribute*

</details>

<details>
<summary><strong>Threshold</strong> <code>double</code></summary>

The constant pass threshold. Values are in the 0-1 range where higher values select more points.

Default: `0.5`

⚡ PCG Overridable

📋 *Visible when Threshold Input = Constant*

</details>

<details>
<summary><strong>Per Point Weight</strong> <code>bool</code></summary>

When enabled, reads a per-point weight attribute to bias the random selection.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Weight</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

The attribute to read per-point weights from.

⚡ PCG Overridable

📋 *Visible when Per Point Weight is enabled*

</details>

<details>
<summary><strong>Remap to 0..1 (Weight)</strong> <code>bool</code></summary>

When enabled, normalizes the per-point weight to a 0-1 range internally.

Default: `false`

⚡ PCG Overridable

📋 *Visible when Per Point Weight is enabled*

</details>

<details>
<summary><strong>Use Local Curve</strong> <code>bool</code></summary>

Whether to use an in-editor curve or an external curve asset for weight distribution.

Default: `false`

</details>

<details>
<summary><strong>Weight Curve (Local)</strong> <code>FRuntimeFloatCurve</code></summary>

In-editor curve used to reshape the weight distribution.

📋 *Visible when Use Local Curve is enabled*

</details>

<details>
<summary><strong>Weight Curve</strong> <code>TSoftObjectPtr&lt;UCurveFloat&gt;</code></summary>

External curve asset used to reshape the weight distribution.

⚡ PCG Overridable

📋 *Visible when Use Local Curve is disabled*

</details>

<details>
<summary><strong>Weight Curve Lookup</strong> <code>FPCGExCurveLookupDetails</code></summary>

Configuration for how the weight curve is sampled.

</details>

<details>
<summary><strong>Invert Result</strong> <code>bool</code></summary>

Inverts the filter result.

Default: `false`

⚡ PCG Overridable

</details>

### Inherited Settings

> See [Filter Definition](../../Core/PCGExFilterFactoryProvider.md) for: Priority, Initialization Failure Policy

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Filter** | PCGEx \| Filter (Point) | The configured filter factory |

---

![Static Badge](https://img.shields.io/badge/Source-PCGExFilters-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Public/Filters/Points/PCGExRandomFilter.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Public/Filters/Points/PCGExRandomFilter.h -->

<!-- VERIFICATION REPORT
Node-Specific Properties:
Config Struct (FPCGExRandomFilterConfig):
- RandomSeed (int32, default 42, PCG_Overridable)
- ThresholdInput (EPCGExInputValueType, default Constant, PCG_Overridable)
- ThresholdAttribute (FPCGAttributePropertyInputSelector, conditional, PCG_Overridable)
- bRemapThresholdInternally (bool, default false, conditional, PCG_Overridable)
- Threshold (double, default 0.5, conditional, PCG_Overridable)
- bPerPointWeight (bool, default false, PCG_Overridable)
- Weight (FPCGAttributePropertyInputSelector, conditional, PCG_Overridable)
- bRemapWeightInternally (bool, default false, conditional, PCG_Overridable)
- bUseLocalCurve (bool, default false)
- LocalWeightCurve (FRuntimeFloatCurve, conditional)
- WeightCurve (TSoftObjectPtr<UCurveFloat>, conditional, PCG_Overridable)
- WeightCurveLookup (FPCGExCurveLookupDetails)
- bInvertResult (bool, default false, PCG_Overridable)
Inherited Properties: From UPCGExFilterProviderSettings
Classes:
- UPCGExRandomFilterFactory
- UPCGExRandomFilterProviderSettings (display: "Filter : Random")
Namespace: PCGExPointFilter::FRandomFilter
-->
