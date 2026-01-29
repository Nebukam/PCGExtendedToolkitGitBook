---
icon: project-diagram
description: 'In editor :: PCGEx | Spline to Path'
---

# Spline to Path

Converts Unreal spline data into path point sequences.

## Overview

Spline to Path extracts point data from Unreal Engine splines, converting them into PCG path points. This brings external splines (from landscape tools, blueprint actors, or other sources) into the PCG ecosystem where they can be processed by path nodes.

## How It Works

1. **Read spline component** data from input
2. **Sample spline** at intervals or key points
3. **Create path points** at sampled positions
4. **Extract tangent/metadata** from spline

## Settings

### Sampling

<details>
<summary><strong>Sample Mode</strong> <code>KeyPoints | Distance | Count</code></summary>

How to sample points from the spline:

| Option | Behavior |
|--------|----------|
| **KeyPoints** | Create points only at spline key points |
| **Distance** | Sample at regular distance intervals |
| **Count** | Sample exact number of points along spline |

Default: `KeyPoints`

</details>

<details>
<summary><strong>Sample Distance</strong> <code>double</code></summary>

Distance between samples (when Sample Mode is Distance).

Default: `100`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Sample Count</strong> <code>int32</code></summary>

Number of points to create (when Sample Mode is Count).

Default: `10`

⚡ PCG Overridable

</details>

### Tangent Extraction

<details>
<summary><strong>Extract Tangents</strong> <code>bool</code></summary>

Read and write tangent vectors from the spline.

Default: Enabled

</details>

<details>
<summary><strong>Arrive Tangent Attribute</strong> <code>Attribute Name</code></summary>

Attribute name for arrive tangent output.

Default: `ArriveTangent`

</details>

<details>
<summary><strong>Leave Tangent Attribute</strong> <code>Attribute Name</code></summary>

Attribute name for leave tangent output.

Default: `LeaveTangent`

</details>

### Metadata

<details>
<summary><strong>Copy Spline Metadata</strong> <code>bool</code></summary>

Transfer metadata from spline points to path points.

Default: Enabled

</details>

### Closed Loop

<details>
<summary><strong>Detect Closed Spline</strong> <code>bool</code></summary>

Mark output path as closed loop if the source spline is closed.

Default: Enabled

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Splines** | Spline Data | Input spline components |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Paths** | Points | Extracted path points |

## Examples

**Preserve spline detail** (key points only):
- Sample Mode: `KeyPoints`
- Gets exact spline control points

**Uniform density**:
- Sample Mode: `Distance`
- Sample Distance: `50`
- Even spacing along entire spline

**Exact point count** (for matching):
- Sample Mode: `Count`
- Sample Count: `100`

**Full data extraction**:
- Extract Tangents: Enabled
- Copy Spline Metadata: Enabled

## Use Cases

- **Import landscape splines**: Process road data with path nodes
- **Blueprint integration**: Use splines drawn in blueprints
- **External data**: Convert hand-placed splines to PCG data
- **Round-trip editing**: Spline → Path → process → Spline

## Related

### Spline Operations
- [Create Spline](./create-spline.md) - Inverse operation (path → spline)
- [Copy to Path](./copy-to-path.md) - Deform geometry along splines

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExSplineToPath.cpp)
