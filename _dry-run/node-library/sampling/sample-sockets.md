---
icon: crosshairs
description: 'In editor :: PCGEx | Sample : Sockets'
---

# Sample : Sockets

Extract **socket positions** from Static Meshes and output them as points.

## Overview

This node reads socket data from Static Meshes referenced by input points and outputs the sockets as new points. Each socket becomes a point with its transform (position, rotation, scale) preserved from the mesh definition.

## Key Behavior

```
    Input Point with Mesh Reference
           │
           ↓ Read mesh sockets
    ┌─────────────────────┐
    │   Static Mesh       │
    │                     │
    │   ◆ Socket_01       │
    │   ◆ Socket_02       │
    │   ◆ Socket_Attach   │
    │                     │
    └─────────────────────┘
           │
           ↓
    Output: 3 points at socket locations
```

## Use Cases

- **Attachment points**: Get predefined attachment locations from meshes
- **Spawn locations**: Use mesh sockets as spawn points
- **Effect placement**: Place effects at socket positions
- **Modular connections**: Connect modular pieces via sockets

## Inputs

| Pin | Type | Required | Description |
|-----|------|----------|-------------|
| **In** | Points | Yes | Points with static mesh references |
| **Point Filters** | Filters | No | Filter which points get processed |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Sockets** | Points | Socket positions as points |

## Settings

### Asset Selection

<details>
<summary><strong>Asset Type</strong> <code>EPCGExInputValueType</code></summary>

How to get the static mesh reference.

| Option | Behavior |
|--------|----------|
| **Constant** | Use a single static mesh for all points |
| **Attribute** | Read mesh path from point attribute |

Default: `Attribute`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Asset Path Attribute Name</strong> <code>FName</code></summary>

Attribute containing static mesh asset paths.

Default: `AssetPath`

⚡ PCG Overridable
📋 Visible when: `Asset Type != Constant`

</details>

<details>
<summary><strong>Static Mesh</strong> <code>TSoftObjectPtr<UStaticMesh></code></summary>

Constant static mesh to read sockets from.

⚡ PCG Overridable
📋 Visible when: `Asset Type == Constant`

</details>

### Socket Output

<details>
<summary><strong>Output Socket Details</strong> <code>FPCGExSocketOutputDetails</code></summary>

Configuration for socket output:

- Socket name filtering
- Transform inheritance
- Attribute forwarding

⚡ PCG Overridable

</details>

## Example: Effect Attachment Points

**Goal**: Place particle effects at mesh socket locations.

1. Have points with `AssetPath` attribute pointing to static meshes
2. Use Sample Sockets with:
   - Asset Type: `Attribute`
   - Asset Path Attribute Name: `AssetPath`
3. Each mesh's sockets become output points
4. Spawn particle effects at socket point locations

## Notes

- Sockets inherit transforms from their parent mesh
- Point transforms are applied to socket world positions
- Empty meshes or meshes without sockets produce no output

---

📦 **Module**: `PCGExElementsSampling` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsSampling/Public/Elements/PCGExSampleSockets.h)
