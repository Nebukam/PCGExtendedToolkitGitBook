---
icon: filter
description: 'Filter : Angle - Tests the angular relationship between consecutive points.'
---

# Filter : Angle

Compares the dot product of directions between a point and its neighbors.

## Overview

This filter evaluates the angular relationship at each point by comparing the directions to its previous and next neighbors. It can measure either curvature (how much the path bends at a point) or spread (the angle formed by looking toward both neighbors). The filter respects closed loop settings and provides fallback behavior for endpoint handling.

## How It Works

1. **Direction Calculation**: Computes direction vectors between the current point and its neighbors.
2. **Mode Selection**: Calculates either curvature or spread based on the selected mode.
3. **Dot Product**: Computes the dot product between the relevant direction vectors, measuring alignment.
4. **Comparison**: Tests the dot product against the configured threshold.
5. **Endpoint Handling**: Uses fallback values for first/last points unless the path is closed.

#### Usage Notes

- **Path Data**: Works best with ordered point sequences representing paths or splines.
- **Closed Loops**: Automatically wraps at endpoints when `@Data.IsClosed` attribute is true.
- **Dot Product Range**: Values range from -1 (opposite directions) to 1 (same direction).

## Behavior

**Curvature Mode:**
```
Measures how much the path bends at a point.
Dot of: (Prev → Current) · (Current → Next)

Straight path: Dot ≈ 1.0 (vectors aligned)
90° turn:      Dot ≈ 0.0 (vectors perpendicular)
180° turn:     Dot ≈ -1.0 (vectors opposite)

    Prev ----→ Current ----→ Next   [Dot = 1.0, straight]

    Prev ----→ Current
                  ↓
                 Next              [Dot = 0.0, 90° turn]
```

**Spread Mode:**
```
Measures the angle formed by looking toward both neighbors.
Dot of: (Current → Prev) · (Current → Next)

Neighbors opposite:  Dot ≈ -1.0 (180° spread)
Neighbors at 90°:    Dot ≈ 0.0 (90° spread)
Neighbors close:     Dot ≈ 1.0 (narrow spread)

    Prev ←---- Current ----→ Next   [Dot = -1.0, 180° spread]

         Prev
           ↑
         Current ----→ Next         [Dot = 0.0, 90° spread]
```

## Settings

<details>
<summary><strong>Mode</strong> <code>EPCGExAngleFilterMode</code></summary>

The angle calculation mode.

| Option | Description |
|--------|-------------|
| **Curvature** | Dot product of (Prev→Current) and (Current→Next), measures path bending |
| **Spread** | Dot product of (Current→Prev) and (Current→Next), measures neighbor spread angle |

Default: `Curvature`

</details>

<details>
<summary><strong>First Point Fallback</strong> <code>EPCGExFilterFallback</code></summary>

Result to return for the first point when the path is not closed.

| Option | Description |
|--------|-------------|
| **Pass** | First point passes the filter |
| **Fail** | First point fails the filter |

Default: `Fail`

</details>

<details>
<summary><strong>Last Point Fallback</strong> <code>EPCGExFilterFallback</code></summary>

Result to return for the last point when the path is not closed.

| Option | Description |
|--------|-------------|
| **Pass** | Last point passes the filter |
| **Fail** | Last point fails the filter |

Default: `Fail`

</details>

<details>
<summary><strong>Dot Comparison Details</strong> <code>FPCGExDotComparisonDetails</code></summary>

Configuration for the dot product comparison including the comparison operator and threshold value.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Invert the result of this filter. Note: this also inverts fallback results.

Default: `false`

</details>

### Inherited Settings

> See [Filter Definition](../../Core/PCGExFilterFactoryProvider.md) for: Priority, Initialization Failure Policy

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Filter** | PCGEx \| Filter (Point) | The configured filter factory |

---

📦 **Module**: `PCGExFilters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Public/Filters/Points/PCGExAngleFilter.h)

<!-- VERIFICATION REPORT
Node-Specific Properties:
Config Struct (FPCGExAngleFilterConfig):
- Mode (EPCGExAngleFilterMode, default Curvature)
- FirstPointFallback (EPCGExFilterFallback, default Fail)
- LastPointFallback (EPCGExFilterFallback, default Fail)
- DotComparisonDetails (FPCGExDotComparisonDetails, PCG_Overridable)
- bInvert (bool, default false)
Inherited Properties: From UPCGExFilterProviderSettings
Classes:
- UPCGExAngleFilterFactory
- UPCGExAngleFilterProviderSettings (display: "Filter : Angle")
Enums: EPCGExAngleFilterMode
Namespace: PCGExPointFilter::FAngleFilter
-->
