---
icon: graduation-cap
description: 'How-To: Creating Graphs with Custom Blueprint Logic'
---

# Creating Graphs with Custom Blueprint Logic

This guide explains how to create cluster graphs programmatically using Blueprints. The Custom Graph Builder lets you define graph connectivity through any logic you can express - whether from external data, procedural algorithms, or simple patterns.

## Overview

The Build Custom Graph node generates clusters from your Blueprint logic instead of geometric algorithms. At its core, you simply call `AddEdge(StartIdx, EndIdx)` to create connections - the system handles everything else.

```
┌─────────────────────────────────────────────────────────────┐
│                    Build Custom Graph                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   Your Builder:                                             │
│   1. Initialize() - Create graph settings objects           │
│   2. BuildGraph() - Call AddEdge() to define connections    │
│                                                             │
│   Output: Complete cluster (Vtx + Edges)                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**The key simplification**: Nodes are created automatically. When you call `AddEdge(0, 5)`, both node 0 and node 5 are created if they don't exist, then connected. You don't need to pre-declare anything.

---

## Step 1: Create the Blueprint Classes

You need two Blueprint classes:
1. **Graph Builder** - The main entry point that creates graph settings
2. **Graph Settings** - Where you define nodes and edges

### Create the Graph Builder

1. In the Content Browser, right-click and select **Blueprint Class**
2. Search for `PCGExCustomGraphBuilder` in the parent class picker
3. Select **\[PCGEx] Custom Graph Builder**
4. Name it (e.g., `BP_MyGraphBuilder`)

### Create Graph Settings

1. Create another Blueprint Class
2. Search for `PCGExCustomGraphSettings`
3. Select **\[PCGEx] Custom Graph Settings**
4. Name it (e.g., `BP_MyGraphSettings`)

---

## Step 2: Implement the Graph Builder

The Graph Builder's job is simple: create one or more Graph Settings objects.

### Override Initialize

1. Open your Graph Builder Blueprint
2. In Functions panel, click **Override** → **Initialize**
3. Call `CreateGraphSettings` and set `OutSuccess = true`

### Example Initialize Implementation

```
Event Initialize
    │
    ├── CreateGraphSettings(BP_MyGraphSettings) → OutSettings
    │
    └── Set OutSuccess = true    ◄── REQUIRED!
```

That's it for the builder. The real work happens in Graph Settings.

---

## Step 3: Implement Graph Settings

This is where you define the actual graph structure.

### Override BuildGraph

1. Open your Graph Settings Blueprint
2. Override **BuildGraph**
3. Call `AddEdge(StartIdx, EndIdx)` for each connection you want
4. Set `OutSuccess = true` when done

### The Magic of AddEdge

`AddEdge` does all the heavy lifting:
- **Creates nodes automatically** - Any index you use becomes a node
- **Handles duplicates** - Adding the same edge twice is safe
- **Ignores self-loops** - `AddEdge(5, 5)` does nothing

### Example: Simple Triangle

```
Event BuildGraph
    │
    ├── AddEdge(0, 1)    // Connect node 0 to node 1
    │
    ├── AddEdge(1, 2)    // Connect node 1 to node 2
    │
    ├── AddEdge(2, 0)    // Connect node 2 to node 0
    │
    └── Set OutSuccess = true
```

Result: A triangle with 3 nodes and 3 edges.

### Example: Grid Pattern

```
Event BuildGraph
    │
    ├── For X = 0 to GridWidth-1:
    │   └── For Y = 0 to GridHeight-1:
    │       │
    │       ├── CurrentNode = X + (Y * GridWidth)
    │       │
    │       ├── If X < GridWidth-1:
    │       │   └── AddEdge(CurrentNode, CurrentNode + 1)        // Horizontal
    │       │
    │       └── If Y < GridHeight-1:
    │           └── AddEdge(CurrentNode, CurrentNode + GridWidth) // Vertical
    │
    └── Set OutSuccess = true
```

### Example: Star Pattern (Hub and Spokes)

```
Event BuildGraph
    │
    ├── HubNode = 0
    │
    ├── For i = 1 to NumSpokes:
    │   └── AddEdge(HubNode, i)
    │
    └── Set OutSuccess = true
```

---

## Step 4: Setting Node Positions

By default, all nodes are at the origin. Override `UpdateNodePoint` to set positions.

### Override UpdateNodePoint

This is called for each node after the graph is built.

| Parameter | Description |
|-----------|-------------|
| `InNodeIdx` | The node index you used in AddEdge |
| `InPointIndex` | The PCG point index |
| `OutPoint` | The point to modify - set Transform here |

### Example: Grid Positions

```
Event UpdateNodePoint (InPoint, InNodeIdx, InPointIndex, OutPoint)
    │
    ├── GridWidth = 10
    ├── Spacing = 100.0
    │
    ├── X = (InNodeIdx % GridWidth) * Spacing
    ├── Y = (InNodeIdx / GridWidth) * Spacing
    │
    ├── OutPoint = InPoint
    └── OutPoint.Transform.Location = (X, Y, 0)
```

### Example: Circular Arrangement

```
Event UpdateNodePoint (InPoint, InNodeIdx, InPointIndex, OutPoint)
    │
    ├── Angle = (InNodeIdx / TotalNodes) * 360
    ├── Radius = 500.0
    │
    ├── X = Cos(Angle) * Radius
    ├── Y = Sin(Angle) * Radius
    │
    ├── OutPoint = InPoint
    └── OutPoint.Transform.Location = (X, Y, 0)
```

---

## Step 5: Memory Hints (Optional but Recommended)

Override `InitializeSettings` to tell the system how many nodes/edges to expect. This is purely for memory optimization.

```
Event InitializeSettings
    │
    ├── Set OutNodeReserve = 100      // Expected number of nodes
    ├── Set OutEdgeReserve = 300      // Expected number of edges
    │
    └── Set OutSuccess = true
```

If you don't know the exact count, estimate high - it's better to over-reserve than under-reserve.

---

## Step 6: Adding Node Attributes (Optional)

You can add custom attributes to nodes using `InitNode*` and `SetNode*` functions.

### Initialize Attributes in InitPointAttributes

Override `InitPointAttributes` to declare attributes with default values:

```
Event InitPointAttributes
    │
    ├── InitNodeFloat("Weight", 1.0)
    ├── InitNodeInt32("Level", 0)
    ├── InitNodeBool("IsHub", false)
    │
    └── Set OutSuccess = true
```

### Set Values in BuildGraph

After calling `AddEdge`, you can set attribute values:

```
Event BuildGraph
    │
    ├── AddEdge(0, 1)
    ├── AddEdge(0, 2)
    ├── AddEdge(0, 3)
    │
    ├── SetNodeBool("IsHub", 0, true)      // Node 0 is the hub
    ├── SetNodeFloat("Weight", 0, 5.0)     // Hub has higher weight
    │
    └── Set OutSuccess = true
```

### Available Types

| Init Function | Set Function | Type |
|---------------|--------------|------|
| `InitNodeInt32` | `SetNodeInt32` | int32 |
| `InitNodeInt64` | `SetNodeInt64` | int64 |
| `InitNodeFloat` | `SetNodeFloat` | float |
| `InitNodeDouble` | `SetNodeDouble` | double |
| `InitNodeVector` | `SetNodeVector` | FVector |
| `InitNodeVector2` | `SetNodeVector2` | FVector2D |
| `InitNodeVector4` | `SetNodeVector4` | FVector4 |
| `InitNodeQuat` | `SetNodeQuat` | FQuat |
| `InitNodeTransform` | `SetNodeTransform` | FTransform |
| `InitNodeRotator` | `SetNodeRotator` | FRotator |
| `InitNodeString` | `SetNodeString` | FString |
| `InitNodeBool` | `SetNodeBool` | bool |
| `InitNodeName` | `SetNodeName` | FName |
| `InitNodeSoftObjectPath` | `SetNodeSoftObjectPath` | FSoftObjectPath |
| `InitNodeSoftClassPath` | `SetNodeSoftClassPath` | FSoftClassPath |

---

## Step 7: Using Your Builder

1. Add a **Cluster : Build Custom Graph** node to your PCG graph
2. In the node settings, set the **Builder** to your Graph Builder Blueprint
3. Configure output settings as needed

The node outputs:
- **Vtx** - The vertex points (your nodes)
- **Edges** - The edge data connecting them

---

## Using Actor Data (Optional)

If your graph logic depends on actors in the world, you can access them during initialization.

### Mode: Owner

By default, the PCG Component's owning actor is available in `InputActors`.

### Mode: Actor References

If you have points with actor references:
1. Set **Mode** to `Actor References`
2. Set **Actor Reference Attribute** to the attribute name
3. Access resolved actors in `InputActors` during `Initialize`

```
Event Initialize (in Graph Builder)
    │
    ├── For each Actor in InputActors:
    │   └── // Read component data, build your graph logic
    │
    ├── CreateGraphSettings(BP_MyGraphSettings)
    │
    └── Set OutSuccess = true
```

---

## Complete Example: Hex Grid

Here's a complete example that creates a hexagonal grid pattern.

### Graph Builder - Initialize

```
CreateGraphSettings(BP_HexGridSettings) → Store in "Settings"
Set OutSuccess = true
```

### Graph Settings - InitializeSettings

```
NumRings = 3
NumNodes = 1 + 3*NumRings*(NumRings+1)    // Hex formula
NumEdges = NumNodes * 3                    // Approximate

Set OutNodeReserve = NumNodes
Set OutEdgeReserve = NumEdges
Set OutSuccess = true
```

### Graph Settings - BuildGraph

```
// Center node connects to first ring
For i = 0 to 5:
    AddEdge(0, i+1)

// Each ring connects internally and to next ring
// ... hex grid logic ...

Set OutSuccess = true
```

### Graph Settings - UpdateNodePoint

```
// Convert node index to hex coordinates
// Set position based on hex grid spacing
OutPoint.Transform.Location = HexToWorld(InNodeIdx)
```

---

## Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| No output | `OutSuccess` not set | Set `OutSuccess = true` in all events |
| "No builder selected" | Builder not assigned | Set the Builder property in node settings |
| "Builder generated no graph settings" | `CreateGraphSettings` not called | Call `CreateGraphSettings` in Initialize |
| All nodes at origin | `UpdateNodePoint` not overridden | Override and set `OutPoint.Transform.Location` |
| Missing edges | `AddEdge` not called | Verify your edge creation loop logic |
| "BuildGraph returned false" | `OutSuccess` left as false | Set `OutSuccess = true` at end of BuildGraph |

---

## Execution Flow Reference

```
1. Initialize (Graph Builder)
   └── CreateGraphSettings() for each graph you want

2. For each Graph Settings:
   ├── InitializeSettings() → Memory hints
   ├── BuildGraph() → AddEdge() calls
   ├── InitPointAttributes() → Declare attributes
   └── UpdateNodePoint() → Set positions (per node)

3. Output: Vtx + Edges pins
```

---

📦 **Module**: `PCGExElementsClusters` · [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/PCGExBuildCustomGraph.h)
