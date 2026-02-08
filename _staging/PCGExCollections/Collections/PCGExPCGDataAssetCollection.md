---
icon: layer-group
description: 'PCG Data Asset Collection - Curated collection of PCG Data Asset references'
---

# PCG Data Asset Collection

Curated collection of PCG Data Asset references.

## Overview

PCG Data Asset Collections organize and manage lists of PCG Data Asset references. Each entry can reference either a specific PCG Data Asset or another PCG Data Asset Collection, allowing for hierarchical organization. Entries support point-level weight overrides, enabling fine control over individual point selection probabilities within each data asset.

## How It Works

1. **Entry Management**: Stores an array of PCG Data Asset references or sub-collections
2. **Point Weighting**: Each entry can optionally override per-point selection weights within its data asset
3. **Categorization**: Entries can be grouped using category tags for filtered access
4. **Bounds Caching**: Pre-computes bounds for efficient spatial queries

#### Usage Notes

- **Reusable Assets**: Collections are data assets that can be referenced by multiple nodes across different graphs
- **Hierarchical Structure**: Sub-collections allow organizing large data asset libraries into logical groups
- **Point-Level Control**: Override weights allow biasing selection toward specific points within a data asset
- **PCG Native**: Works directly with PCG's native data asset format for seamless integration

## Settings

### Collection Entries

<details>
<summary><strong>Entries</strong> <code>TArray<FPCGExPCGDataAssetCollectionEntry></code></summary>

Array of PCG Data Asset references or sub-collections that make up this collection. Each entry contains:

**Base Entry Properties:**
- **Weight**: Selection probability weight for this entry (higher values = more likely to be picked)
- **Category**: Optional category name for filtering entries
- **Is Sub Collection**: Toggle between data asset reference and sub-collection
- **Variation Mode**: Whether to use local or global variation settings
- **Variations**: Transform randomization settings (offset, rotation, scale)
- **Tags**: Set of tags for filtering and matching operations
- **Property Overrides**: Custom property values for this entry
- **Grammar Source**: Whether grammar details come from the asset or collection level
- **Asset Grammar**: Grammar symbol and scaling rules for this specific entry
- **Sub Grammar Mode**: How sub-collections handle grammar (inherit or override)
- **Collection Grammar**: Grammar settings when used as a sub-collection
- **Staging**: Asset staging configuration

**PCG Data Asset-Specific Properties:**
- **Data Asset**: The PCG Data Asset to reference (visible when not a sub-collection)
- **Sub Collection**: Reference to another PCG Data Asset Collection (visible when Is Sub Collection is enabled)
- **Override Weights**: Enable per-point weight customization within the data asset
  - **Weights**: Array of weight values for individual points in the data asset (one per point)

Default: Empty array

</details>

### Inherited Settings

This collection type inherits common asset collection functionality from its base class.

→ See Asset Collection Base documentation for: Global variations, property schemas, grammar settings, and collection-level configuration

---

[![Static Badge](https://img.shields.io/badge/Source-PCGExCollections-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExCollections/Public/Collections/PCGExPCGDataAssetCollection.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExCollections/Public/Collections/PCGExPCGDataAssetCollection.h -->

<!-- VERIFICATION REPORT
Node-Specific Properties: 1 documented (Entries array with PCG data asset-specific fields)
Inherited Properties: Referenced to base UPCGExAssetCollection
Inputs: N/A (data asset)
Outputs: N/A (data asset)
Nested Types: FPCGExPCGDataAssetCollectionEntry documented inline
-->
