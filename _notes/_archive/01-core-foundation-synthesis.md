# PCGEx Core Foundation Synthesis

## Overview

This document synthesizes understanding of PCGEx's foundational architecture from existing `.claude/skills/` documentation. This is the starting point for documentation discovery.

---

## Architectural Pillars

### 1. State Machine Lifecycle (NOT Vanilla PCG)

PCGEx replaces vanilla PCG's single-shot `ExecuteInternal()` with a state machine that can spread work across multiple frames:

```
Boot(Context)           → One-time setup, validation, buffer allocation
      │
      ▼
PostBoot(Context)       → Optional additional setup
      │
      ▼
AdvanceWork(Context)    → Called repeatedly until TryComplete() returns true
      │                    Supports multi-frame execution
      ▼
CompleteWork(Context)   → Optional finalization
```

**Why this matters for docs**: Users need to understand this isn't "run once and done" - PCGEx can process massive datasets without blocking the editor.

### 2. Three-Layer Data Model

```
UPCGBasePointData (vanilla PCG)
        │
        ▼
FPointIO (wrapper for input/output management)
        │ TSharedRef<FPointIO>
        ▼
FFacade (abstraction layer with caching)
        │
        ├── TBuffer<T> (attribute cache - per-point or single-value)
        │
        └── Value ranges (native PCG access for transforms/seeds)
```

**Key Insight**: `FFacade->Source` is `TSharedRef<FPointIO>` - NEVER null-check it. This is a common source of confusion.

### 3. Processor Pattern

Each input gets its own processor instance:

```
Element (orchestrator)
    │
    └── Batch (factory/manager)
            │
            └── Processor[] (per-input, runs in parallel)
                    ├── Process()        - Setup, start async
                    ├── ProcessPoints()  - PARALLEL hot loop
                    ├── CompleteWork()   - Single-threaded post-process
                    ├── Write()          - Buffer serialization
                    └── Output()         - Stage output pins
```

**Why this matters**: Explains why settings have seemingly redundant structures - there's a settings → context → processor data flow.

### 4. Factory → Operation Pattern

For extensible operations (filters, blenders, samplers, etc.):

```
Settings (Editor UI)
    │ CreateFactory()
    ▼
Factory Data (UObject, configuration container, travels through graph)
    │ CreateOperation() / CreateFilter()
    ▼
Operation (TSharedPtr, runtime logic, binds to facades)
```

**Why this matters**: Sub-nodes (Filters, Heuristics, Blenders, etc.) all follow this pattern. Understanding it once explains the entire ecosystem.

---

## Threading Model (CRITICAL)

PCGEx runs **OFF the game thread**. This has major implications:

### Safe Operations
- Read-only access to UAssets
- Pre-allocated buffer writes to unique indices
- Atomic operations for counters/flags
- `TSharedPtr` / `TSharedRef` usage
- Reading from octrees (immutable after creation)

### Unsafe Operations (NEVER DO)
- `LoadSynchronous()` → Use `PCGExHelpers::LoadBlocking_AnyThread()`
- `NewObject<T>()` → Create UObjects in Boot phase only
- Mutating shared state in parallel loops
- `TArray::Add()` in hot paths (can reallocate)
- Calling game-thread-only APIs

### The Golden Rule for Hot Paths

```cpp
// Pre-allocate everything in Boot/Process
OutputBuffer = Facade->GetWritable<double>(Name, Default);

// In ProcessPoints - write to unique indices only
PCGEX_SCOPE_LOOP(Index)
{
    OutputBuffer->SetValue(Index, Value);  // Safe: unique index
}
```

---

## Cluster/Graph System

Clusters are connected networks with dual facades:

```
VtxDataFacade  ← Vertex/node points
EdgeDataFacade ← Edge points (one per connection)

FCluster
    ├── Nodes[] (FNode - vertex with adjacency list)
    └── Edges[] (FEdge - connection between two nodes)

FNode
    ├── NodeIndex (position in Nodes array)
    ├── PointIndex (position in vertex point data)
    └── Links[] (FLink - references to neighbors + connecting edges)

FEdge
    ├── EdgeIndex (position in Edges array)
    ├── PointIndex (position in edge point data)
    ├── Start (node index)
    └── End (node index)
```

### Index Spaces (Common Pitfall)

| Index Type | Meaning |
|------------|---------|
| `NodeIndex` | Position in `Cluster->Nodes` array |
| `EdgeIndex` | Position in `Cluster->Edges` array |
| `Node.PointIndex` | Position in vertex point data |
| `Edge.PointIndex` | Position in edge point data |

**These are NOT the same!** Confusing them is a common bug source.

---

## Module Dependency Graph

```
PCG (Vanilla) + Core UE Modules
       │
       ▼
   PCGExCore ◄─────────────────────────────────────┐
       │                                            │
       ▼                                            │
┌──────────────────────────────────────────────┐   │
│  PCGExBlending, PCGExProperties,             │   │
│  PCGExMatching, PCGExPickers, PCGExHeuristics│   │
└──────────────────────────────────────────────┘   │
       │                                            │
       ▼                                            │
┌──────────────────────────────────────────────┐   │
│  PCGExFilters, PCGExFoundations,             │   │
│  PCGExCollections, PCGExGraphs               │───┘
└──────────────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────────┐
│  PCGExElements* (all element modules)        │
└──────────────────────────────────────────────┘
```

---

## Shared Settings Patterns (Candidates for Shared Concepts)

Based on the architecture, these likely appear across many nodes:

| Pattern | Description |
|---------|-------------|
| `FPCGAttributePropertyInputSelector` | Attribute selection with type conversion |
| Filter chains | AND/OR groups, inversion, fallback policies |
| Blending configs | Attribute blending with various modes |
| Heuristic configs | Scoring/weighting for pathfinding, selection |
| IO initialization modes | `NoInit`, `New`, `Duplicate`, `Forward` |
| Buffer initialization | `Inherit` vs `New` |

These should be documented once and cross-referenced.

---

## Discovery Questions

Things I need to verify against actual code:

1. **Exact list of shared settings structs** - Which ones are truly reused across multiple modules?
2. **Node categorization** - How do nodes map to modules vs. functional categories?
3. **Factory types inventory** - What are all the factory types and their specific purposes?
4. **Output pin patterns** - How do different element types stage their outputs?
5. **Error handling patterns** - How do nodes report failures to users?

---

## Documentation Structure Implications

### Working with PCGEx (Conceptual)

Should cover these concepts progressively:
1. **Basics** - Points, paths, order, attributes
2. **Data Flow** - How data moves through PCGEx nodes
3. **Filters & Operations** - The sub-node ecosystem
4. **Clusters** - When you need graph relationships
5. **Threading Awareness** - What users should know about parallel execution
6. **Advanced Patterns** - Combining systems, optimization

### Node Library (Reference)

Should organize by:
1. **Functional category** (not just module)
2. **Shared settings** documented once, linked everywhere
3. **Implementation details** - order of operations, what actually happens
4. **Cross-references** - which other nodes this works well with

---

## Next Steps

1. Explore actual module source to verify this synthesis
2. Build node inventory per module
3. Identify shared settings structs in code
4. Map user-facing features to internal architecture
5. Draft documentation structure proposal
