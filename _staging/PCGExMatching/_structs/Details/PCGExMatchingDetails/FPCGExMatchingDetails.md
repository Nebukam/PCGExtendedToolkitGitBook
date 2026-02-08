---
icon: link
description: 'Matching Details - Configure how data collections are paired together'
---

# Matching Details

Configures how data collections are matched and paired for operations requiring multiple inputs.

## Overview

This settings block controls data matching — the process of pairing source and target collections for operations like Copy to Points, sampling, or path operations. Matching can be disabled (process all combinations), or enabled with tag-based filtering to pair specific collections together. This enables precise control over which data sets interact with each other.

## How It Works

1. **Select Mode**: Choose matching behavior (Disabled, All tags, Any tag)
2. **Match Collections**: Pair source/target collections based on shared tags
3. **Handle Unmatched**: Configure what happens to collections without matches
4. **Apply Limits**: Optionally limit how many matches each collection can have

## Behavior

```
Matching Modes:

Disabled: All sources process all targets
  Sources: [A, B]  ×  Targets: [X, Y]
  Result: A→X, A→Y, B→X, B→Y

All (tag match): Must share ALL specified tags
  Source [tag:Red, tag:Big] matches Target [tag:Red, tag:Big]
  Source [tag:Red] does NOT match Target [tag:Red, tag:Big]

Any (tag match): Must share AT LEAST ONE tag
  Source [tag:Red] matches Target [tag:Red, tag:Big]
  Source [tag:Blue] does NOT match Target [tag:Red, tag:Big]
```

## Settings

<details>
<summary><strong>Mode</strong> <code>EPCGExMapMatchMode</code></summary>

Controls how collections are matched together.

| Option | Description |
|--------|-------------|
| **Disabled** | No matching; all sources interact with all targets |
| **All** | Collections must share ALL matching tags to be paired |
| **Any** | Collections sharing ANY matching tag are paired |

Default: `Disabled`

</details>

<details>
<summary><strong>Cluster Match Mode</strong> <code>EPCGExClusterComponentTagMatchMode</code></summary>

For cluster operations, specifies which component's tags to use for matching.

| Option | Description |
|--------|-------------|
| **Vtx** | Match using vertex data tags |
| **Edges** | Match using edge data tags |
| **Any** | Match if either component matches |
| **Both** | Both components must match |
| **Separated** | Match components independently |

📋 *Visible when used with cluster data*

</details>

<details>
<summary><strong>Split Unmatched</strong> <code>bool</code></summary>

When enabled, unmatched data is output separately. When disabled, controls whether unmatched data is included or discarded.

Default: `true`

</details>

<details>
<summary><strong>Output Unmatched</strong> <code>bool</code></summary>

When Split Unmatched is disabled, determines whether unmatched collections are included in normal output.

📋 *Visible when Split Unmatched = false*

</details>

<details>
<summary><strong>Quiet Unmatched Warning</strong> <code>bool</code></summary>

When enabled, suppresses warnings about unmatched collections.

📋 *Visible when Split Unmatched = false*

</details>

<details>
<summary><strong>Limit Matches</strong> <code>bool</code></summary>

When enabled, limits how many target matches each source can have.

Default: `false`

📋 *Visible when Mode ≠ Disabled*

</details>

<details>
<summary><strong>Limit</strong> <code>int32</code></summary>

Maximum number of matches per source collection. Can be a constant or read from an attribute.

Default: `1`

📋 *Visible when Limit Matches = true*

⚡ PCG Overridable

</details>

---

![Static Badge](https://img.shields.io/badge/Source-PCGExMatching-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExMatching/Public/Details/PCGExMatchingDetails.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExMatching/Public/Details/PCGExMatchingDetails.h -->

<!-- VERIFICATION REPORT
Node-Specific Properties: 7 documented (Mode, ClusterMatchMode, bSplitUnmatched, bOutputUnmatched, bQuietUnmatchedWarning, bLimitMatches, Limit)
Inherited Properties: None
Nested Types: EPCGExMapMatchMode, EPCGExClusterComponentTagMatchMode, EPCGExInputValueType
Used By: 12+ nodes including Copy to Points, sampling nodes, path operations
-->
