---
icon: pen-to-square
description: 'In editor :: PCGEx | Action : Write Attributes'
---

# Write Attributes

Forwards attributes from source data to points based on whether they match or fail the action's filter conditions.

## Overview

Write Attributes copies attribute values from separate "success" and "fail" data sources to points based on filter results. Points that pass the filter receive attributes from the MatchSuccess source, while points that fail receive attributes from the MatchFail source. This enables conditional attribute assignment in a single pass.

## How It Works

1. **Filter Evaluation**: Each point is tested against connected filter factories
2. **Source Selection**: Matching points use MatchSuccess data, failing points use MatchFail data
3. **Attribute Forwarding**: Selected attributes are copied from the appropriate source to the point
4. **Attribute Filtering**: Name filters control which attributes get forwarded

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Conditions** | Filter Factories | Conditions that determine success/fail routing (inherited from base) |
| **MatchSuccess** | Any | Attribute source for points that pass filters |
| **MatchFail** | Any | Attribute source for points that fail filters |

## Settings

### Success Attributes Filter

<details>
<summary><strong>Filter Mode</strong> <code>EPCGExAttributeFilter</code></summary>

How to filter which attributes are forwarded from the MatchSuccess source.

| Option | Behavior |
|--------|----------|
| **All** | Forward all attributes |
| **Exclude** | Discard listed attributes, forward the others |
| **Include** | Forward only listed attributes |

Default: `All`

</details>

<details>
<summary><strong>Matches</strong> <code>TMap&lt;FString, EPCGExStringMatchMode&gt;</code></summary>

Map of attribute name patterns to match modes. Any successful match passes the filter.

*Visible when Filter Mode ≠ All*

</details>

<details>
<summary><strong>Comma Separated Names</strong> <code>FString</code></summary>

Attribute names separated by commas for easy bulk specification. All names use the shared filter mode below.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Comma Separated Name Filter</strong> <code>EPCGExStringMatchMode</code></summary>

Match mode applied to all comma-separated names.

*Visible when Filter Mode ≠ All*

Default: `Equals`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Preserve PCGEx Data</strong> <code>bool</code></summary>

If enabled, PCGEx internal attributes and tags won't be affected. Cluster-related nodes rely on these to work correctly.

Default: `true`

</details>

### Fail Attributes Filter

Same settings as Success Attributes Filter, but applied to the MatchFail source data.

## Examples

**Write different colors based on height**:
1. Create a filter checking if `$Position.Z > 100`
2. Connect high-color data to MatchSuccess
3. Connect low-color data to MatchFail
4. Points above Z=100 get high colors, others get low colors

**Conditional material assignment**:
1. Filter by some condition (e.g., slope angle)
2. MatchSuccess provides "steep" material attributes
3. MatchFail provides "flat" material attributes

## Related

- [Batch Actions](../../node-library/quality-of-life/batch-actions.md) - Parent node that processes actions

---

📦 **Module**: `PCGExElementsActions` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsActions/Public/Actions/PCGExActionWriteValues.h)
