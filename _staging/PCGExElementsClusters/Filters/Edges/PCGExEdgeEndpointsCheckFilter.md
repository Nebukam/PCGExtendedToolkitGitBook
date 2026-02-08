---
icon: filter
description: 'Edge Filter : Endpoints Check - Filters edges based on whether their endpoints pass connected filters'
---

# Edge Filter : Endpoints Check

Filters edges based on whether their endpoint vertices pass the connected point filters.

## Overview

This edge filter evaluates the start and/or end vertices of each edge against connected point filters, then determines the edge's filter result based on the configured mode. This allows you to filter edges based on vertex properties — for example, keeping only edges where both endpoints have a certain attribute value, or edges connecting vertices of different types.

## How It Works

1. **Endpoint Evaluation**: Applies the connected point filters to both the start and end vertices of each edge.
2. **Mode Check**: Based on the selected mode, determines if the edge passes:
   - **None**: Neither endpoint passes the filters
   - **Both**: Both endpoints must pass
   - **Any**: At least one endpoint passes
   - **Start/End**: Specific endpoint must pass
   - **SeeSaw**: One must pass and the other must fail
3. **Result Comparison**: Compares the outcome against the expected result.
4. **Final Result**: Returns pass/fail based on the comparison and invert setting.

#### Usage Notes

- **Requires Point Filters**: Connect point filter providers to define the endpoint checks.
- **Directional Modes**: Start/End modes are affected by edge direction settings on the parent node.
- **SeeSaw Mode**: Useful for finding edges that connect different types of vertices.

## Behavior

```
Mode Examples:

Both (Expects Pass):          Any (Expects Pass):
  [✓]---[✓] → PASS              [✓]---[✗] → PASS
  [✓]---[✗] → FAIL              [✗]---[✗] → FAIL

SeeSaw:                       None (Expects Pass):
  [✓]---[✗] → PASS              [✗]---[✗] → PASS
  [✓]---[✓] → FAIL              [✓]---[✗] → FAIL
```

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Filters** | Point Filter Factories | Filters to evaluate against edge endpoints |

## Settings

<details>
<summary><strong>Mode</strong> <code>EPCGExEdgeEndpointsCheckMode</code></summary>

Determines how endpoint filter results are combined to produce the edge filter result.

| Option | Description |
|--------|-------------|
| **None** | Neither endpoint must pass the filters |
| **Both** | Both endpoints must pass the filters |
| **Any** | At least one endpoint must pass |
| **Start** | The edge's start endpoint must pass |
| **End** | The edge's end endpoint must pass |
| **SeeSaw** | One endpoint must pass and the other must fail |

Default: `Both`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Expects</strong> <code>EPCGExFilterResult</code></summary>

The expected result of the endpoint evaluation based on the selected mode.

| Option | Description |
|--------|-------------|
| **Pass** | The mode condition should evaluate to true |
| **Fail** | The mode condition should evaluate to false |

Default: `Pass`

📋 *Hidden when Mode = SeeSaw*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Invert the final filter result (pass becomes fail and vice versa).

Default: `false`

⚡ PCG Overridable

</details>

---

![Static Badge](https://img.shields.io/badge/Source-PCGExElementsClusters-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Filters/Edges/PCGExEdgeEndpointsCheckFilter.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Filters/Edges/PCGExEdgeEndpointsCheckFilter.h -->

<!-- VERIFICATION REPORT
Node-Specific Properties: 3 documented (Mode, Expects, bInvert)
Inherited Properties: From UPCGExEdgeFilterProviderSettings
Inputs: Point Filters
Outputs: Edge Filter (factory data)
Nested Types: EPCGExEdgeEndpointsCheckMode, FPCGExEdgeEndpointsCheckFilterConfig
-->
