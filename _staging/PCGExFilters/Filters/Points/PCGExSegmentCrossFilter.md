---
icon: filter
description: 'Filter : Segment Cross - Tests whether point segments cross path-like data.'
---

# Filter : Segment Cross

Checks whether segments between consecutive points cross path-like data.

## Overview

This filter evaluates points by testing whether the segment from each point to its neighbor intersects with path-like data (paths, splines, or polygons). Each point defines a segment to the next (or previous) point, and the filter checks if that segment crosses any of the provided boundaries. This is useful for detecting when a path crosses a boundary or enters a restricted zone.

## How It Works

1. **Segment Construction**: For each point, builds a segment to its next or previous neighbor.
2. **Path Preparation**: Samples the connected path/spline data into polygonal boundaries.
3. **Intersection Test**: Tests each segment for intersection with the boundaries.
4. **Result**: Returns pass if the segment crosses any boundary, fail otherwise.

#### Usage Notes

- **Direction**: Choose whether segments go from each point to the next or to the previous point.
- **Point Attribution**: The pass/fail result is assigned to the starting point of the segment.
- **Open/Closed Paths**: Works with both open paths and closed loops.

## Behavior

**Segment Cross Detection:**
```
Path Points: [P0, P1, P2, P3, P4]
Boundary: Spline cutting across the path

Direction: ToNext
P0→P1: No cross → P0: Fail
P1→P2: Crosses boundary → P1: Pass
P2→P3: No cross → P2: Fail
P3→P4: No cross → P3: Fail

Direction: ToPrev
P1→P0: No cross → P1: Fail
P2→P1: Crosses boundary → P2: Pass
```

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Paths/Splines** | Points/Splines | Path-like data defining the boundaries to test against |

## Settings

<details>
<summary><strong>Sample Inputs</strong> <code>EPCGExSplineSamplingIncludeMode</code></summary>

Which input shapes to include in testing.

| Option | Description |
|--------|-------------|
| **All** | Test against all connected shapes |
| **Closed loops only** | Only test against closed/looping shapes |
| **Open lines only** | Only test against open (non-looping) shapes |

Default: `All`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Intersection Settings</strong> <code>FPCGExPathIntersectionDetails</code></summary>

Configuration for how segment-path intersections are detected.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Direction</strong> <code>EPCGExSegmentCrossWinding</code></summary>

Defines how segments are constructed from each point.

| Option | Description |
|--------|-------------|
| **To Next** | Segment goes from current point to next point |
| **To Prev** | Segment goes from current point to previous point |

Default: `To Next`

</details>

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Inverts the result of the test.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Fidelity</strong> <code>double</code></summary>

When sampling splines into polygons, defines the resolution. Lower values produce higher fidelity but slower execution.

Default: `50`

</details>

<details>
<summary><strong>Ignore Self</strong> <code>bool</code></summary>

When enabled, a collection will never be tested against itself.

Default: `true`

⚡ PCG Overridable

</details>

### Inherited Settings

> See [Filter Definition](../../Core/PCGExFilterFactoryProvider.md) for: Priority, Initialization Failure Policy, Missing Data Policy

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Filter** | PCGEx \| Filter (Point) | The configured filter factory |

---

📦 **Module**: `PCGExFilters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Public/Filters/Points/PCGExSegmentCrossFilter.h)

<!-- VERIFICATION REPORT
Node-Specific Properties:
Config Struct (FPCGExSegmentCrossFilterConfig):
- SampleInputs (EPCGExSplineSamplingIncludeMode, default All, PCG_Overridable)
- IntersectionSettings (FPCGExPathIntersectionDetails, PCG_Overridable)
- Direction (EPCGExSegmentCrossWinding, default ToNext)
- bInvert (bool, default false, PCG_Overridable)
- Fidelity (double, default 50, AdvancedDisplay)
- bIgnoreSelf (bool, default true, PCG_Overridable)
Inputs: Paths/Splines pin
Inherited Properties: From UPCGExFilterProviderSettings
Classes:
- UPCGExSegmentCrossFilterFactory (base: UPCGExPolyPathFilterFactory)
- UPCGExSegmentCrossFilterProviderSettings (display: "Filter : Segment Cross")
Enums: EPCGExSegmentCrossWinding (ToNext, ToPrev)
Namespace: PCGExPointFilter::FSegmentCrossFilter
-->
