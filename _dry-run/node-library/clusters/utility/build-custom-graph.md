---
icon: code
description: Create clusters using custom Blueprint objects
---

# Build Custom Graph

Creates clusters procedurally using Blueprint-defined logic. Provides full programmatic control over vertex and edge creation through a blueprintable interface.

```
Blueprint Builder:              Output Clusters:
  ┌──────────────────┐              ●───●───●
  │ Initialize()     │              │   │   │
  │ BuildGraph()     │      →      ●───●───●
  │ UpdateNodePoint()│              │   │   │
  └──────────────────┘              ●───●───●

  Custom logic                  Generated cluster
```

## Inputs & Outputs

| Label | Type | Description |
|-------|------|-------------|
| **In** | Points | Actor references (when Mode = ActorReferences) |
| **Vtx** | Points | Generated vertex points |
| **Edges** | Points | Generated edge points |

## Settings

### Actor Source

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Mode | ⚡ Enum | `Owner` | Where to get actor references |
| Actor Reference Attribute | ⚡ Name | `ActorReference` | Attribute containing actor references |

**Mode** (`EPCGExCustomGraphActorSourceMode`):
| Value | Description |
|-------|-------------|
| `Owner` | Use PCG Component's owner actor |
| `ActorReferences` | Read actor references from point attributes |

### Builder

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Builder | ⚡ Custom Graph Builder | - | Blueprint class instance defining graph logic |

### Output Settings

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Cluster Output Settings | ⚡ Graph Builder Details | - | Standard cluster output configuration |

### Warnings

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Quiet Unprocessed Settings Warning | Bool | `false` | Suppress warning when settings aren't processed |
| Quiet Failed Build Graph Warning | Bool | `false` | Suppress warning when BuildGraph fails |

## Blueprint Interface

### UPCGExCustomGraphBuilder

The main builder class that you subclass in Blueprint:

**Events:**
- **Initialize**: Called once to set up graph settings. Create `UPCGExCustomGraphSettings` instances here.
- **BuildGraph**: Called for each graph settings object to build the actual graph.

**Functions:**
- `CreateGraphSettings(Class)`: Create a new graph settings object

### UPCGExCustomGraphSettings

Each settings object represents one cluster to generate:

**Events:**
- **InitializeSettings**: Set node and edge reservations
- **BuildGraph**: Add edges between nodes
- **InitPointAttributes**: Initialize default attribute values
- **UpdateNodePoint**: Transform each node's point data

**Functions:**
- `AddEdge(StartIdx, EndIdx)`: Create an edge between two node indices
- `RemoveEdge(StartIdx, EndIdx)`: Remove an edge
- `InitNode*(AttributeName, Value)`: Initialize attribute defaults
- `SetNode*(AttributeName, NodeIdx, Value)`: Set attribute values per node

Supported types: Int32, Int64, Float, Double, Vector2, Vector, Vector4, Quat, Transform, String, Bool, Rotator, Name, SoftObjectPath, SoftClassPath

## Workflow

```
1. Initialize()
   └─→ CreateGraphSettings() for each cluster needed

2. For each GraphSettings:
   └─→ InitializeSettings()
       ├─→ OutNodeReserve = expected node count
       └─→ OutEdgeReserve = expected edge count

3. For each GraphSettings:
   └─→ BuildGraph()
       └─→ AddEdge() calls to define connections

4. InitPointAttributes()
   └─→ InitNode*() to set default attribute values

5. For each Node:
   └─→ UpdateNodePoint()
       └─→ Set point transform, properties, and attributes
```

## Example Use Cases

### Grid Graph

```blueprint
// In BuildGraph:
for Y = 0 to GridHeight:
    for X = 0 to GridWidth:
        NodeIdx = Y * GridWidth + X

        // Connect to right neighbor
        if X < GridWidth - 1:
            AddEdge(NodeIdx, NodeIdx + 1)

        // Connect to bottom neighbor
        if Y < GridHeight - 1:
            AddEdge(NodeIdx, NodeIdx + GridWidth)
```

### Procedural Tree

```blueprint
// In BuildGraph:
for each Branch:
    ParentIdx = Branch.Parent
    ChildIdx = Branch.Index
    AddEdge(ParentIdx, ChildIdx)
```

### Data-Driven Graph

```blueprint
// In Initialize:
// Read edge data from actor's data table
for each Row in DataTable:
    AddEdge(Row.From, Row.To)
```

## Thread Safety

- `Initialize()` runs on the main thread
- `BuildGraph()` runs in a multi-threaded context
- Graph Settings objects are thread-safe
- The Builder object itself is NOT thread-safe

---

📦 **Module**: `PCGExElementsClusters`
