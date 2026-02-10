---
icon: diagram-project
description: 'Cluster to Zone Graph - Create Zone Graph from clusters.'
---

# Cluster to Zone Graph

Create Zone Graph from clusters.

## Overview

Converts cluster data into Unreal's Zone Graph shape components, producing navigable road and intersection geometry. The node decomposes cluster chains into spline-shaped roads and polygon-shaped intersections at junction nodes, with support for per-edge lane profiles, auto-computed intersection radii, and optional path data outputs.

## How It Works

1. **Chain decomposition**: The cluster is broken into chains — sequences of connected binary nodes bounded by junctions or endpoints. Optional **Break Conditions** filters designate additional points as chain boundaries, producing more intersection polygons.
2. **Lane profile resolution**: Each road resolves its lane profile from edge attributes via **majority vote** — the most common profile name across the chain's edges wins. The resolved profile's lane widths are cached for use by auto-radius.
3. **Polygon precompute**: Each junction node becomes a polygon intersection. Connected roads are ordered radially, and each connection point receives the lane profile of its connected road. If auto-radius is enabled, intersection radii are derived from the connected roads' lane widths.
4. **Radius sync**: Final polygon radii are pushed back to road endpoints so that road splines terminate cleanly at intersection boundaries.
5. **Road precompute**: Each chain becomes a spline road with its synced endpoint offsets and resolved lane profile.
6. **Component compilation**: All `UZoneShapeComponent` actors are created and attached to the target actor on the main thread.
7. **Path output** *(optional)*: Polygon shapes are output as closed paths; road splines are output as paths with tangent attributes.

#### Usage Notes

- **Editor-only**: This node will log an error and abort if it detects a runtime-generated PCG component.
- **Lane profiles read from edges**: Unlike other overrides which read from vertex attributes, lane profile overrides read from **edge** data. Each road uses majority vote across its chain's edges to resolve a single profile.
- **Per-connection lane profiles**: Each polygon connection point receives the lane profile of its connected road via `AddUniquePerPointLaneProfile`, so a single intersection can route correctly between roads of different widths.
- **Auto-radius**: When enabled, intersection radii are computed from connected roads' lane geometry. This avoids manual radius tuning — wide roads automatically produce larger intersection footprints.
- **Path outputs**: Enable the output toggles to get PCG path data alongside the Zone Graph components. Road paths include tangent vectors; polygon paths include left/right boundary pairs with lane-width spacing.

## Behavior

```
Cluster Input               Zone Graph Output
==================          ==================

  A---B---C---D             Road (Spline): A → B → C → D
      |
      E---F---G             Road (Spline): B → E → F → G

  Node B (3 edges)    →    Polygon at B  (3 connections,
                            each with its road's lane profile)
  Node E (3 edges)    →    Polygon at E  (3 connections)

Optional Path Outputs:
  Polygon Paths  →  Closed path per intersection (boundary points)
  Road Paths     →  Open path per road (with ArriveTangent/LeaveTangent)
```

Non-leaf nodes become polygon intersections. Chains between them become spline roads. Leaf nodes are simple road endpoints.

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

⚡ PCG Overridable

</details>

<details>
<summary><strong>Comma Separated Component Tags</strong> <code>FString</code></summary>

Comma-separated tags applied to every created `UZoneShapeComponent`.

Default: `PCGExZoneGraph`

⚡ PCG Overridable

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

The base radius of intersection polygons — how far each polygon connection point sits from the intersection center. May be overridden per-point or adjusted by auto-radius.

Default: `100`

</details>

<details>
<summary><strong>Radius (Attr)</strong> <code>FName</code></summary>

Per-point polygon radius override. Read from: Vtx. Attribute type: `double`.

Default: `ZG.PolygonRadius`

📋 *Visible when Override Polygon Radius is enabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Auto Radius Mode</strong> <code>EPCGExZGAutoRadiusMode</code></summary>

Auto-compute polygon radius from connected road lane profiles, so intersections scale with road width.

| Option | Description |
|--------|-------------|
| **Disabled** | Use user-specified radius only |
| **Widest Lane** | Radius = the widest single lane across connected roads |
| **Half Profile Width** | Radius = half the total profile width of connected roads |
| **Widest Lane (Min)** | Use the larger of user radius and widest lane |
| **Half Profile Width (Min)** | Use the larger of user radius and half profile width |

Per-road radii are computed independently — if one road is wider than another, its connection point will sit further from the intersection center.

Default: `Disabled`

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

Per-point polygon routing override. Read from: Vtx. Attribute type: `int32`. Values: 0=Bezier, 1=Arcs.

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

Per-point polygon shape point type override. Read from: Vtx. Attribute type: `int32`. Values: 0=Sharp, 1=Bezier, 2=AutoBezier, 3=LaneProfile.

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

Per-point road shape point type override. Read from: Vtx. Attribute type: `int32`. Values: 0=Sharp, 1=Bezier, 2=AutoBezier, 3=LaneProfile.

Default: `ZG.RoadPointType`

📋 *Visible when Override Road Point Type is enabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Lane Profile</strong> <code>FZoneLaneProfileRef</code></summary>

The default lane profile applied to generated Zone Graph shapes. Initialized from your project's default lane profile in Zone Graph settings.

</details>

<details>
<summary><strong>Lane Profile (Attr)</strong> <code>FName</code></summary>

Lane profile override. Read from: **Edges** (roads use majority vote across chain edges; polygon connections inherit from their road). The attribute value must be an `FName` matching a registered lane profile name in Zone Graph settings. Unrecognized names fall back to the default.

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

Per-point intersection tag override. Read from: Vtx. Attribute type: `int32`, interpreted as a Zone Graph tag bitmask (`uint32`).

Default: `ZG.IntersectionTags`

📋 *Visible when Override Additional Intersection Tags is enabled*

⚡ PCG Overridable

</details>

---

#### Output Settings

<details>
<summary><strong>Output Polygon Paths</strong> <code>bool</code></summary>

When enabled, each intersection polygon is output as a closed PCG path on the **Polygon Paths** pin. Points are placed in left/right pairs at each connection, capturing the polygon boundary with lane-width spacing.

Default: `false`

</details>

<details>
<summary><strong>Output Road Paths</strong> <code>bool</code></summary>

When enabled, each road spline is output as a PCG path on the **Road Paths** pin, with per-point tangent attributes.

Default: `false`

</details>

<details>
<summary><strong>Arrive Name</strong> <code>FName</code></summary>

Attribute name for the arrive tangent vector written to road path points.

Default: `ArriveTangent`

📋 *Visible when Output Road Paths is enabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Leave Name</strong> <code>FName</code></summary>

Attribute name for the leave tangent vector written to road path points.

Default: `LeaveTangent`

📋 *Visible when Output Road Paths is enabled*

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
| **Polygon Paths** | Points | Intersection polygons as closed paths (one path per intersection) |
| **Road Paths** | Points | Road splines as paths with `ArriveTangent`/`LeaveTangent` attributes |

---

[![Static Badge](https://img.shields.io/badge/Source-PCGExtendedToolkitZoneGraph-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExtendedToolkitZoneGraph/Public/Graph/PCGExClusterToZoneGraph.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 22 documented
  General: DirectionSettings, CommaSeparatedComponentTags, PostProcessFunctionNames, AttachmentRules
  ZoneGraph: PolygonRadius, bOverridePolygonRadius+Attr, AutoRadiusMode, PolygonRoutingType, bOverridePolygonRoutingType+Attr, PolygonPointType, bOverridePolygonPointType+Attr, RoadPointType, bOverrideRoadPointType+Attr, LaneProfile, bOverrideLaneProfile+Attr, AdditionalIntersectionTags, bOverrideAdditionalIntersectionTags+Attr
  Output: bOutputPolygonPaths, bOutputRoadPaths, ArriveName, LeaveName
New enum: EPCGExZGAutoRadiusMode (5 values)
Inherited Properties: Referenced to UPCGExClustersProcessorSettings
Inputs: Vtx, Edges, Break Conditions (ClusterNodeFilters)
Outputs: Vtx (forwarded), Edges (forwarded), Polygon Paths (new), Road Paths (new)
Key behavioral changes: Edge-based lane profile resolution with majority vote, per-connection lane profiles on polygons, per-road auto-radius, path output generation
-->
