---
icon: diagram-project
description: 'Cluster to Zone Graph - Create Zone Graph shapes from clusters'
---

# Cluster to Zone Graph

Create Zone Graph from clusters.

## Overview

Decomposes clusters into Zone Graph polygon shapes (intersections) and spline shapes (roads). Non-leaf vertices become polygons; chains of edges between them become roads. The result is a fully navigable Zone Graph created directly from cluster topology.

## How It Works

1. **Chain Extraction**: Decomposes the cluster into chains between intersection vertices. Vertices matching the Break Conditions filter act as additional chain-breaking points.
2. **Orientation**: Each road is oriented using sort-direction rules, BFS depth ordering, or a global direction vector.
3. **Lane Profile Resolution**: Each road resolves its lane profile from node settings or per-edge attribute override (majority vote across the chain's edges).
4. **Polygon Construction**: Non-leaf vertices become polygon shapes. Connected roads are sorted angularly around the center, with connection points placed at the polygon radius.
5. **Auto-Radius**: If enabled, polygon radii are derived from connected road lane widths.
6. **Road Trimming**: Road endpoints are clipped to the polygon boundary. An optional buffer distance prevents auto-bezier artifacts near the trim edge.
7. **Component Creation**: Zone Shape components are created on the target actor.

#### Usage Notes

- **Editor Only**: Cannot run in runtime-generated PCG components. Zone Graph requires editor-time execution.
- **Degenerate Roads**: Roads entirely contained within a polygon radius are discarded. This can happen when vertices are very close together relative to the radius.
- **Component Tags**: All created Zone Shape components receive the configured tags.

→ See [Zone Graph Techniques](Guide-ZoneGraphTechniques.md) for practical patterns: forced intersections, auto-radius, trim buffer, orientation, and more.

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Cluster vertex points |
| **Edges** | Points | Cluster edge data |
| **Break Conditions** | Factories (Filters) | Optional filters to designate vertices as chain-breaking intersection points |

## Settings

### Direction

<details>
<summary><strong>Direction Settings</strong> <code>FPCGExEdgeDirectionSettings</code></summary>

Defines the direction in which points will be ordered to form the final paths.

⚡ PCG Overridable

→ See [Edge Direction Settings](../../PCGExCore/_structs/Clusters/PCGExEdgeDirectionDetails/FPCGExEdgeDirectionSettings.md) for details.

</details>

<details>
<summary><strong>Orientation Mode</strong> <code>EPCGExZGOrientationMode</code></summary>

How road orientation is determined. Affects lane profile alignment at intersections.

| Option | Description |
|--------|-------------|
| **Sort Direction** | Use the Direction Settings sorting rules to determine road orientation |
| **Depth-First** | Use BFS depth ordering to orient roads from lower to higher depth. Consistent for tree-like graphs |
| **Global Direction** | Orient all roads to flow along a global direction vector |

Default: `Depth-First`

</details>

<details>
<summary><strong>Invert Orientation</strong> <code>bool</code></summary>

Flip all road orientations.

Default: `false`

📋 *Visible when Orientation Mode ≠ Sort Direction*

</details>

<details>
<summary><strong>Orientation Direction</strong> <code>FVector</code></summary>

Global direction vector used to orient roads. Each road is oriented so its travel direction aligns with this vector.

Default: `(1, 0, 0)` (Forward)

📋 *Visible when Orientation Mode = Global Direction*

</details>

### General

<details>
<summary><strong>Comma Separated Component Tags</strong> <code>FString</code></summary>

Comma-separated tags applied to all created Zone Shape components.

Default: `"PCGExZoneGraph"`

⚡ PCG Overridable

</details>

### Zone Graph

<details>
<summary><strong>Polygon Radius</strong> <code>double</code></summary>

Base radius for polygon intersection shapes. Determines how far connection points are placed from the intersection center.

Default: `100`

</details>

<details>
<summary><strong>Radius (Attr)</strong> <code>FName</code></summary>

Per-point polygon radius override. Read from vertex points.

Default: `"ZG.PolygonRadius"`

📋 *Visible when Override Polygon Radius is enabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Auto Radius Mode</strong> <code>EPCGExZGAutoRadiusMode</code></summary>

Auto-compute polygon radius from connected road lane profiles.

| Option | Description |
|--------|-------------|
| **Disabled** | Use user radius only |
| **Widest Lane** | Radius equals the widest single lane across connected roads |
| **Half Profile Width** | Radius equals the maximum total profile width / 2 across connected roads |
| **Widest Lane (Min)** | Use the larger of user radius and widest lane |
| **Half Profile Width (Min)** | Use the larger of user radius and half profile width |

Default: `Disabled`

</details>

<details>
<summary><strong>Trim Road Endpoints</strong> <code>bool</code></summary>

Trim road shape points inside the polygon boundary so roads start/end precisely at the polygon edge. When disabled, road endpoints are simply offset by the polygon radius along the road direction.

Default: `true`

</details>

<details>
<summary><strong>Endpoint Trim Buffer</strong> <code>double</code></summary>

After trimming, remove road points closer than this distance to the polygon boundary. Prevents auto-bezier artifacts from near-coincident points at the trim boundary.

Default: `0`

📋 *Visible when Trim Road Endpoints = true*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Polygon Routing Type</strong> <code>EZoneShapePolygonRoutingType</code></summary>

Routing type for polygon intersection shapes.

Default: `Arcs`

</details>

<details>
<summary><strong>Polygon Routing (Attr)</strong> <code>FName</code></summary>

Per-point polygon routing override. Read from vertex points. Values: 0 = Bezier, 1 = Arcs.

Default: `"PolygonRoutingType"`

📋 *Visible when Override Polygon Routing Type is enabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Polygon Point Type</strong> <code>FZoneShapePointType</code></summary>

Shape point type for polygon connection points.

Default: `LaneProfile`

</details>

<details>
<summary><strong>Polygon Point Type (Attr)</strong> <code>FName</code></summary>

Per-point polygon shape point type override. Read from vertex points. Values: 0 = Sharp, 1 = Bezier, 2 = AutoBezier, 3 = LaneProfile.

Default: `"PolygonPointType"`

📋 *Visible when Override Polygon Point Type is enabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Road Point Type</strong> <code>FZoneShapePointType</code></summary>

Shape point type for road spline points.

Default: `AutoBezier`

</details>

<details>
<summary><strong>Road Point Type (Attr)</strong> <code>FName</code></summary>

Per-edge road shape point type override. Read from vertex points. Values: 0 = Sharp, 1 = Bezier, 2 = AutoBezier, 3 = LaneProfile.

Default: `"RoadPointType"`

📋 *Visible when Override Road Point Type is enabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Lane Profile</strong> <code>FZoneLaneProfileRef</code></summary>

Default lane profile used for all roads and polygons. Initialized from the first profile in Zone Graph settings.

</details>

<details>
<summary><strong>Lane Profile (Attr)</strong> <code>FName</code></summary>

Lane profile override by name. For roads, reads from edge attributes (majority vote across the chain). For polygons, reads from vertex points. The attribute value must match a registered lane profile name in Zone Graph settings.

Default: `"LaneProfile"`

📋 *Visible when Override Lane Profile is enabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Additional Intersection Tags</strong> <code>FZoneGraphTagMask</code></summary>

Additional Zone Graph tags applied to polygon intersection shapes.

Default: `None`

</details>

<details>
<summary><strong>Intersection Tags (Attr)</strong> <code>FName</code></summary>

Per-point intersection tag override. Read from vertex points. Attribute type: int32, interpreted as a Zone Graph tag bitmask.

Default: `"IntersectionTags"`

📋 *Visible when Override Additional Intersection Tags is enabled*

⚡ PCG Overridable

</details>

### Output

<details>
<summary><strong>Output Polygon Paths</strong> <code>bool</code></summary>

Output polygon shapes as closed PCG paths on the Polygon Paths pin.

Default: `false`

</details>

<details>
<summary><strong>Output Road Paths</strong> <code>bool</code></summary>

Output road splines as PCG paths with tangent attributes on the Road Paths pin.

Default: `false`

</details>

<details>
<summary><strong>Arrive Name</strong> <code>FName</code></summary>

Attribute name for the arrive tangent vector written to road path outputs.

Default: `"ArriveTangent"`

📋 *Visible when Output Road Paths = true*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Leave Name</strong> <code>FName</code></summary>

Attribute name for the leave tangent vector written to road path outputs.

Default: `"LeaveTangent"`

📋 *Visible when Output Road Paths = true*

⚡ PCG Overridable

</details>

### Advanced

<details>
<summary><strong>Post Process Function Names</strong> <code>TArray&lt;FName&gt;</code></summary>

Specify a list of functions to be called on the target actor after Zone Graph creation. Functions need to be parameter-less and with the "CallInEditor" flag enabled.

</details>

<details>
<summary><strong>Attachment Rules</strong> <code>FPCGExAttachmentRules</code></summary>

Controls how created Zone Shape components are attached to the target actor.

→ See [Attachment Rules](../../PCGExCore/_structs/Details/PCGExAttachmentRules/FPCGExAttachmentRules.md) for details.

</details>

### Inherited Settings

This node inherits common settings from its base class.

> See [Clusters Processor Settings](../../PCGExElementsClusters/Elements/Common/ClustersProcessor.md) for inherited options.

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Forwarded cluster vertices |
| **Edges** | Points | Forwarded cluster edges |
| **Polygon Paths** | Points | Polygon intersection shapes as closed paths (when enabled) |
| **Road Paths** | Points | Road splines as paths with tangent attributes (when enabled) |

---

[![Static Badge](https://img.shields.io/badge/Source-PCGExElementsZoneGraph-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsZoneGraph/Public/Graph/PCGExClusterToZoneGraph.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 25 documented (OrientationMode, bInvertOrientation, OrientationDirection, CommaSeparatedComponentTags, PolygonRadius, bOverridePolygonRadius, PolygonRadiusAttribute, AutoRadiusMode, bTrimRoadEndpoints, EndpointTrimBuffer, PolygonRoutingType, bOverridePolygonRoutingType, PolygonRoutingTypeAttribute, PolygonPointType, bOverridePolygonPointType, PolygonPointTypeAttribute, RoadPointType, bOverrideRoadPointType, RoadPointTypeAttribute, LaneProfile, bOverrideLaneProfile, LaneProfileAttribute, AdditionalIntersectionTags, bOverrideAdditionalIntersectionTags, AdditionalIntersectionTagsAttribute, bOutputPolygonPaths, bOutputRoadPaths, ArriveName, LeaveName, PostProcessFunctionNames, AttachmentRules)
Inherited Properties: Referenced to UPCGExClustersProcessorSettings
Shared Struct References: FPCGExEdgeDirectionSettings, FPCGExAttachmentRules
Inputs: Vtx, Edges, Break Conditions (factory pin)
Outputs: Vtx, Edges, Polygon Paths, Road Paths
Nested Types: EPCGExZGOrientationMode, EPCGExZGAutoRadiusMode
-->
