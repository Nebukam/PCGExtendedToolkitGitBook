---
icon: crosshairs
description: 'Sampler : Vtx Attributes - Creates a neighbor attribute sampler for use with Sample Neighbors.'
---

# Sampler : Vtx Attributes

Creates a single neighbor attribute sampler, to be used by a Sample Neighbors node.

## Overview

This sampler sub-node configures how vertex attributes are sampled from neighboring points in a cluster. It reads one or more specified attributes from each neighbor and blends them together using a single blend mode. The blended result is written back to the source point, either overwriting the original attribute or writing to a renamed target attribute. For different blend modes on different attributes, use multiple sampler instances.

## How It Works

1. **Attribute Selection**: Specifies which source attribute(s) to read from neighbors.
2. **Neighbor Traversal**: The parent Sample Neighbors node walks the cluster graph to find neighbors within the configured depth.
3. **Blending**: For each attribute, the values from all visited neighbors are combined using the selected blend mode (average, min, max, sum, etc.).
4. **Output**: The blended result is written to the source point's attribute, either keeping the same name or remapping to a different target name.

#### Usage Notes

- **Single Blend Mode**: All attributes in this sampler share the same blend mode. To apply different blend modes to different attributes, create multiple Sampler : Vtx Attributes nodes.
- **Attribute Remapping**: By default, the sampled result overwrites the source attribute. Enable "Output To Different Name" on individual attributes to write to a new attribute instead.
- **Sub-Node**: This node produces a sampler factory and must be connected to a Sample Neighbors node to execute.

## Behavior

**Attribute Sampling with Average Blending:**
```
Cluster:
  A(10)───B(20)───C(30)
          │
          D(40)

Sampling from B, Depth=1, Blend=Average:
  Neighbors: A(10), C(30), D(40)
  Result: (10 + 30 + 40) / 3 = 26.67
  → B.$Attr = 26.67

With Remapping (Source: $Height → Target: $AvgNeighborHeight):
  → B.$AvgNeighborHeight = 26.67
```

## Settings

<details>
<summary><strong>Blending</strong> <code>EPCGExBlendingType</code></summary>

The blend mode applied to all specified attributes. Determines how values from multiple neighbors are combined into a single result.

| Option | Description |
|--------|-------------|
| **None** | No blending |
| **Average** | Average of all neighbor values |
| **Weight** | Weighted blend using sample weights |
| **Min** | Minimum value among neighbors |
| **Max** | Maximum value among neighbors |
| **Copy** | Copy from the last processed neighbor |
| **Sum** | Sum of all neighbor values |
| **Weighted Sum** | Sum scaled by sample weights |
| **Lerp** | Blend smoothly between values using weight as alpha |
| **Subtract** | Subtract neighbor values |

Default: `Average`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Source Attributes</strong> <code>FPCGExAttributeSourceToTargetList</code></summary>

List of attributes to sample from neighbors. Each entry specifies a source attribute name and optionally a different target name for the output.

| Property | Type | Description |
|----------|------|-------------|
| **Source** | `FName` | The attribute to read from neighbors |
| **Output To Different Name** | `bool` | When enabled, writes to a different attribute name |
| **Target** | `FName` | The output attribute name (visible when Output To Different Name is enabled) |

Leave Target as `None` to overwrite the source attribute.

⚡ PCG Overridable

</details>

### Inherited Settings

> See [Neighbor Sampler Base](PCGExNeighborSampleFactoryProvider.md) for: Sampling Config (Max Depth, Blend Over, Weight Curve, Neighbor Source, etc.)

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Sampler** | PCGEx \| Neighbor Sampler | The configured sampler factory |

---

[![Static Badge](https://img.shields.io/badge/Source-PCGExElementsClusters-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Meta/NeighborSamplers/PCGExNeighborSampleAttribute.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Meta/NeighborSamplers/PCGExNeighborSampleAttribute.h -->

<!-- VERIFICATION REPORT
Node-Specific Properties:
Config Struct (FPCGExAttributeSamplerConfigBase):
- Blending (EPCGExBlendingType, default Average, PCG_Overridable)
- SourceAttributes (FPCGExAttributeSourceToTargetList, PCG_Overridable, ShowOnlyInnerProperties)
Inherited Properties: From UPCGExNeighborSampleProviderSettings (SamplingConfig, Priority)
Classes:
- UPCGExNeighborSamplerFactoryAttribute (base: UPCGExNeighborSamplerFactoryData)
- UPCGExNeighborSampleAttributeSettings (display: "Sampler : Vtx Attributes")
-->
