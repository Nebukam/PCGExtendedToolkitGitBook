---
icon: circle
---

# Staging : Type Filter

Filters staged points by their collection entry type.

### Overview

Reads the collection entry type from each staged point and routes or filters points based on that type. Supports three modes: Include keeps only matching types, Exclude removes matching types, and Pin Per Type splits points into separate output pins by type. Requires a collection map from an upstream staging node to resolve entry types.

{% hint style="info" %}
This node support all collections registered in the PCGExCollection registry automatically. If you have collections that are unique to your project, they will show up here!
{% endhint %}

### How It Works

1. **Collection Map**: Reads the Labels input to rebuild the collection mapping from an upstream staging node.
2. **Type Resolution**: For each point, reads the staged entry hash and resolves it through the collection unpacker to determine the entry's collection type.
3. **Filtering**:
   * **Include**: Points whose type matches any enabled type in the type filter are kept; the rest are discarded.
   * **Exclude**: Points whose type matches are removed; the rest are kept.
   * **Pin Per Type**: Each point is routed to a dedicated output pin for its type. Unmatched points go to the Discarded pin if enabled.
4. **Type Inheritance**: Type matching walks up the type hierarchy, so enabling a parent type also matches its subtypes.

**Usage Notes**

* **Upstream Staging Required**: This node operates on points that have already been processed by a staging node. The Labels input carries the collection mapping needed to resolve entry types.
* **Zero-Copy Optimization**: In Pin Per Type mode, if all points in a dataset belong to a single type, the data is forwarded without copying.

### Inputs

| Pin        | Type   | Description                                             |
| ---------- | ------ | ------------------------------------------------------- |
| **In**     | Points | Staged point data with entry hashes                     |
| **Labels** | Param  | Collection map from an upstream staging node (required) |

### Settings

<details>

<summary><strong>Filter Mode</strong> <code>EPCGExStagedTypeFilterMode</code></summary>

How to filter points based on their collection entry type.

| Option           | Description                                    |
| ---------------- | ---------------------------------------------- |
| **Include**      | Keep points that match selected types          |
| **Exclude**      | Remove points that match selected types        |
| **Pin Per Type** | Split points into separate output pins by type |

Default: `Include`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Type Filter</strong> <code>TMap&#x3C;FName, bool></code></summary>

A map of registered collection types with toggles for each. Enable or disable types to control which entries pass the filter. The map is auto-populated from the collection type registry.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Include Invalid</strong> <code>bool</code></summary>

Whether to include points with invalid or unresolved entry types. When disabled, points that can't be resolved to a known type are treated as non-matching.

Default: `false`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Discarded</strong> <code>bool</code></summary>

If enabled, filtered-out points are sent to the Discarded output pin instead of being dropped entirely.

Default: `false`

⚡ PCG Overridable

</details>

#### Inherited Settings

This node inherits common settings from its base class.

> See Points Processor Settings for inherited options.

### Outputs

| Pin             | Type   | Description                                                      |
| --------------- | ------ | ---------------------------------------------------------------- |
| **Out**         | Points | Filtered points (Include/Exclude modes)                          |
| **Discarded**   | Points | Points that were filtered out (when Output Discarded is enabled) |
| _Per-type pins_ | Points | One pin per enabled type (Pin Per Type mode only)                |

***

[![Static Badge](https://img.shields.io/badge/Source-PCGExCollections-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExCollections/Public/Elements/PCGExStagingTypeFilter.h)
