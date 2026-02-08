---
icon: diagram-project
description: 'Cluster : Subdivide Edges - Inserts new vertices along cluster edges'
---

# Cluster : Subdivide Edges

Subdivide edges by inserting new vertices along their length.

## Overview

This node subdivides cluster edges by inserting additional vertices between existing endpoints. You can control subdivision by specifying a target distance between points, a fixed count of subdivisions, or using Manhattan distance calculations. The new vertices are interpolated along the edge, and their attributes can be blended from the edge endpoints.

## How It Works

1. **Edge Direction**: Establishes start and end points for each edge based on direction settings.
2. **Subdivision Calculation**: Determines how many new vertices to insert based on the chosen method (distance, count, or Manhattan).
3. **Vertex Insertion**: Creates new vertices at evenly-spaced intervals along each edge.
4. **Attribute Blending**: Interpolates attributes for new vertices using the selected blending mode.
5. **Edge Reconstruction**: Replaces each original edge with a chain of smaller edges connecting the new vertices.

#### Usage Notes

- **Distance Mode**: Edges shorter than the specified distance will not be subdivided.
- **Count Mode**: Every edge receives exactly the specified number of subdivisions, regardless of length.
- **Manhattan Mode**: Uses Manhattan (taxicab) distance rather than Euclidean distance for subdivision calculations.

## Behavior

```
Before Subdivision:             After Subdivision (Count = 2):

    A---------B                 A---o---o---B
                                    ^   ^
                                    new vertices

Distance Mode (dist = 3):       Count Mode (count = 3):
Edge length = 10                Edge length = 10

    A--o--o--o--B               A--o--o--o--B
    (3 subdivisions)            (3 subdivisions, evenly spaced)
```

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Cluster vertices |
| **Edges** | Points | Cluster edges |

## Settings

### Subdivision Settings

<details>
<summary><strong>Direction Settings</strong> <code>FPCGExEdgeDirectionSettings</code></summary>

Defines the direction of an edge, and which endpoints should be considered the start and end. This affects blending interpolation order.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Subdivide Method</strong> <code>EPCGExSubdivideMode</code></summary>

Determines how subdivision points are calculated.

| Option | Description |
|--------|-------------|
| **Distance** | Insert vertices at regular distance intervals |
| **Count** | Insert a fixed number of vertices per edge |
| **Manhattan** | Use Manhattan (taxicab) distance for interval calculation |

Default: `Distance`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Amount Input</strong> <code>EPCGExInputValueType</code></summary>

Whether to use a constant value or read from an attribute.

| Option | Description |
|--------|-------------|
| **Constant** | Use a fixed value for all edges |
| **Attribute** | Read the subdivision amount from an attribute |

Default: `Constant`

</details>

<details>
<summary><strong>Subdivisions (Distance)</strong> <code>double</code></summary>

Target distance between subdivision points when using Distance mode.

Default: `10`

📋 *Visible when Subdivide Method = Distance and Amount Input = Constant*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Subdivisions (Count)</strong> <code>int32</code></summary>

Number of subdivision points to insert per edge when using Count mode.

Default: `10`

📋 *Visible when Subdivide Method = Count and Amount Input = Constant*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Amount Source</strong> <code>EPCGExClusterElement</code></summary>

Where to read the subdivision amount attribute from.

| Option | Description |
|--------|-------------|
| **Point** | Read from vertex attributes |
| **Edge** | Read from edge attributes |

Default: `Edge`

📋 *Visible when Amount Input = Attribute*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Subdivisions (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute selector for reading subdivision amount per edge.

📋 *Visible when Amount Input = Attribute*

⚡ PCG Overridable

</details>

### Blending

<details>
<summary><strong>Blending</strong> <code>UPCGExSubPointsBlendInstancedFactory</code></summary>

Controls how attributes are interpolated for newly created subdivision vertices.

**Available Options:**
- **Inherit End** - New vertices inherit attributes from the edge's end point
- **Inherit Start** - New vertices inherit attributes from the edge's start point
- **None** - No attribute blending for new vertices

⚡ PCG Overridable

</details>

### Additional Outputs

<details>
<summary><strong>Flag Sub Vtx</strong> <code>bool</code></summary>

When enabled, writes a boolean flag to identify newly created subdivision vertices.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Sub Vtx Flag Name</strong> <code>FName</code></summary>

Attribute name for the subdivision vertex flag.

Default: `IsSubVtx`

📋 *Visible when Flag Sub Vtx is enabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Flag Sub Edge</strong> <code>bool</code></summary>

When enabled, writes a boolean flag to identify edges created by subdivision.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Sub Edge Flag Name</strong> <code>FName</code></summary>

Attribute name for the subdivision edge flag.

Default: `IsSubEdge`

📋 *Visible when Flag Sub Edge is enabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Vtx Alpha</strong> <code>bool</code></summary>

When enabled, writes an alpha value (0-1) representing each vertex's position along the original edge.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Vtx Alpha Attribute Name</strong> <code>FName</code></summary>

Attribute name for the vertex alpha value.

Default: `Alpha`

📋 *Visible when Write Vtx Alpha is enabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Default Vtx Alpha</strong> <code>double</code></summary>

Alpha value assigned to original (non-subdivided) vertices.

Default: `1`

📋 *Visible when Write Vtx Alpha is enabled*

⚡ PCG Overridable

</details>

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Cluster vertices including new subdivision points |
| **Edges** | Points | Subdivided cluster edges |

---

![Static Badge](https://img.shields.io/badge/Module-PCGExElementsClusters-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/PCGExSubdivideEdges.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 14 documented
Inherited Properties: N/A
Inputs: Vtx, Edges
Outputs: Vtx, Edges
Nested Types: EPCGExSubdivideMode, EPCGExInputValueType, EPCGExClusterElement
-->
