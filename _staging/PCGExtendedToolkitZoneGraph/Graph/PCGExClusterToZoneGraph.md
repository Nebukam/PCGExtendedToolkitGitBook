---
icon: diagram-project
description: 'Cluster to Zone Graph - Create Zone Graph from clusters.'
---

# Cluster to Zone Graph

Create Zone Graph from clusters.

## Overview

Converts cluster data into Unreal's Zone Graph shape components, producing navigable road and intersection geometry. The node decomposes cluster chains into spline-shaped roads and creates polygon-shaped intersections at junction nodes where multiple roads meet.

## How It Works

1. **Chain decomposition**: The node breaks the cluster into chains -- sequences of connected nodes between junctions or endpoints. Optional **Break Conditions** filters let you designate additional points as chain boundaries, generating more intersection polygons.
2. **Road creation**: Each chain becomes a spline-shaped `UZoneShapeComponent`. Direction Settings control the traversal order of points along each road.
3. **Intersection creation**: Every non-leaf node (a node with more than two connections) becomes a polygon-shaped `UZoneShapeComponent`. Connected roads are ordered radially around the intersection center, and each polygon point is placed at the configured radius along the direction of its road.
4. **Radius offsetting**: Road endpoints that connect to intersections are offset inward by the polygon radius so that roads meet the intersection boundary cleanly.
5. **Component compilation**: All shape components are created and attached to the target actor on the main thread, as required by the Zone Graph system.

#### Usage Notes

- **Editor-only**: This node should not be used with runtime-generated PCG components. It will log an error and abort if it detects a runtime generation trigger.
- **Per-point overrides**: Every Zone Graph property (radius, routing type, point type, lane profile, intersection tags) can be driven by a point attribute instead of using a single constant value. Enable the corresponding override toggle to activate attribute-based control.
- **Lane profile resolution**: When overriding lane profiles per-point, the attribute value must be an `FName` that matches a registered lane profile name in your project's Zone Graph settings. Unrecognized names fall back to the default lane profile.
- **Break conditions**: By default, only non-leaf junction nodes produce intersection polygons. Use the Break Conditions filter pin to force additional points to act as chain-breaking junctions.

## Behavior

```
Cluster Input               Zone Graph Output
==================          ==================

  A---B---C---D             Road (Spline): A → B → C → D
      |
      E---F---G             Road (Spline): B → E → F → G

  Node B (3 edges)    →    Polygon (Intersection) at B
                            with 3 radial connection points
```

Non-leaf nodes become polygon intersections. Chains between them become spline roads. Leaf nodes are simple road endpoints with no polygon.

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Cluster vertices |
| **Edges** | Points | Cluster edges |
| **Break Conditions** | PCGExClusterNodeFilters | Filters to designate which points act as chain-breaking junctions, producing additional polygon shapes |

## Settings

### Node-Specific Settings

<details>
<summary><strong>Direction Settings</strong> <code>FPCGExEdgeDirectionSettings</code></summary>

Defines the direction in which points will be ordered to form the final paths.

> See [Edge Direction Settings](../../_staging-concepts/shared-settings/edge-direction-settings.md) for full details.

</details>

<details>
<summary><strong>Comma Separated Component Tags</strong> <code>FString</code></summary>

Comma-separated tags applied to every created `UZoneShapeComponent`.

Default: `PCGExZoneGraph`

</details>

<details>
<summary><strong>Post Process Function Names</strong> <code>TArray&lt;FName&gt;</code></summary>

A list of functions to call on the target actor after Zone Graph component creation. Functions must be parameter-less and have the `CallInEditor` flag enabled.

</details>

<details>
<summary><strong>Attachment Rules</strong> <code>FPCGExAttachmentRules</code></summary>

Controls how created components are attached to the target actor.

> See [Attachment Rules](../../_staging-concepts/shared-settings/attachment-rules.md) for full details.

</details>

---

#### Zone Graph Settings

<details>
<summary><strong>Polygon Radius</strong> <code>double</code></summary>

The radius of intersection polygons -- how far each polygon connection point sits from the intersection center.

Default: `100`

</details>

<details>
<summary><strong>Radius (Attr)</strong> <code>FName</code></summary>

Per-point polygon radius override. Attribute type: `double`.

Default: `ZG.PolygonRadius`

📋 *Visible when Override Polygon Radius is enabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Polygon Routing Type</strong> <code>EZoneShapePolygonRoutingType</code></summary>

How connections are routed within intersection polygons.

| Option | Description |
|--------|-------------|
| **Bezier** | Smooth bezier curves between connection points |
| **Arcs** | Arc-based routing between connection points |

Default: `Arcs`

</details>

<details>
<summary><strong>Polygon Routing (Attr)</strong> <code>FName</code></summary>

Per-point polygon routing override. Attribute type: `int32`. Values: 0=Bezier, 1=Arcs.

Default: `ZG.PolygonRoutingType`

📋 *Visible when Override Polygon Routing Type is enabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Polygon Point Type</strong> <code>FZoneShapePointType</code></summary>

The shape point type used for polygon intersection points.

| Option | Value | Description |
|--------|-------|-------------|
| **Sharp** | 0 | Hard corner, no smoothing |
| **Bezier** | 1 | Bezier-controlled curve |
| **AutoBezier** | 2 | Automatically computed bezier |
| **LaneProfile** | 3 | Uses the lane profile for shape |

Default: `LaneProfile`

</details>

<details>
<summary><strong>Polygon Point Type (Attr)</strong> <code>FName</code></summary>

Per-point polygon shape point type override. Attribute type: `int32`. Values: 0=Sharp, 1=Bezier, 2=AutoBezier, 3=LaneProfile.

Default: `ZG.PolygonPointType`

📋 *Visible when Override Polygon Point Type is enabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Road Point Type</strong> <code>FZoneShapePointType</code></summary>

The shape point type used for road spline points.

| Option | Value | Description |
|--------|-------|-------------|
| **Sharp** | 0 | Hard corner, no smoothing |
| **Bezier** | 1 | Bezier-controlled curve |
| **AutoBezier** | 2 | Automatically computed bezier |
| **LaneProfile** | 3 | Uses the lane profile for shape |

Default: `LaneProfile`

</details>

<details>
<summary><strong>Road Point Type (Attr)</strong> <code>FName</code></summary>

Per-point road shape point type override. Attribute type: `int32`. Values: 0=Sharp, 1=Bezier, 2=AutoBezier, 3=LaneProfile.

Default: `ZG.RoadPointType`

📋 *Visible when Override Road Point Type is enabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Lane Profile</strong> <code>FZoneLaneProfileRef</code></summary>

The lane profile applied to all generated Zone Graph shapes. Defaults to the project's default lane profile from Zone Graph settings.

</details>

<details>
<summary><strong>Lane Profile (Attr)</strong> <code>FName</code></summary>

Per-point lane profile override. The attribute value must be an `FName` matching a registered lane profile name in Zone Graph settings.

Default: `ZG.LaneProfile`

📋 *Visible when Override Lane Profile is enabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Additional Intersection Tags</strong> <code>FZoneGraphTagMask</code></summary>

Extra Zone Graph tags applied to intersection polygon shapes.

Default: `None`

</details>

<details>
<summary><strong>Intersection Tags (Attr)</strong> <code>FName</code></summary>

Per-point intersection tag override. Attribute type: `int32`, interpreted as a Zone Graph tag bitmask (`uint32`).

Default: `ZG.IntersectionTags`

📋 *Visible when Override Additional Intersection Tags is enabled*

⚡ PCG Overridable

</details>

### Inherited Settings

This node inherits common cluster processor settings from its base class.

> See [Clusters Processor Settings](../../_staging-concepts/shared-settings/clusters-processor-settings.md) for shared settings.

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Forwarded cluster vertices |
| **Edges** | Points | Forwarded cluster edges |

---

[![Static Badge](https://img.shields.io/badge/Source-PCGExtendedToolkitZoneGraph-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExtendedToolkitZoneGraph/Public/Graph/PCGExClusterToZoneGraph.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 16 documented (6 primary values + 6 override toggles + 6 override attributes, plus DirectionSettings, ComponentTags, PostProcessFunctionNames, AttachmentRules)
Inherited Properties: Referenced to UPCGExClustersProcessorSettings
Inputs: Vtx, Edges, Break Conditions (ClusterNodeFilters)
Outputs: Vtx (forwarded), Edges (forwarded)
Nested Types: EPCGExOptionState, EPCGExExecutionPolicy (inherited, not documented)
-->
