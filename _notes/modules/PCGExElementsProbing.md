# PCGExElementsProbing Analysis

## Module Type
- [ ] Core Infrastructure
- [ ] Support System (provides factories/operations to other modules)
- [x] Element Module (user-facing nodes)
- [ ] Hybrid

## Dependencies
| Depends On | Why |
|------------|-----|
| PCGExCore | Base framework |
| PCGExGraphs | Cluster generation |
| PCGExFilters | Connection filtering |

## What This Module Provides

### Nodes (UPCGEx*Settings classes)

**17 Probing Nodes**:

#### Main Node
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExConnectPointsSettings` | "Connect Points" | Main connectivity node |

#### Probe Factories (16 nodes)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExAbstractProbeSettings` | "Probe Abstract" | Abstract base |
| `UPCGExProbeDBSCANSettings` | "Probe : DBSCAN" | DBSCAN clustering |
| `UPCGExProbeSpannerSettings` | "Probe : Spanner" | Graph spanner |
| `UPCGExProbeChainSettings` | "Probe : Chain" | Chain connectivity |
| `UPCGExProbeHubSpokeSettings` | "Probe : Hub Spoke" | Hub-spoke pattern |
| `UPCGExProbeGradientFlowSettings` | "Probe : Gradient Flow" | Gradient-based flow |
| `UPCGExProbeGlobalAnisotropicSettings` | "Probe : Global Anisotropic" | Global anisotropic |
| `UPCGExProbeKNNSettings` | "Probe : KNN" | K-nearest neighbors |
| `UPCGExProbeLevelSetSettings` | "Probe : Level Set" | Level set connectivity |
| `UPCGExProbeBitmasksSettings` | "Probe : Bitmasks" | Bitmask-based |
| `UPCGExProbeThetaSettings` | "Probe : Theta" | Theta connectivity |
| `UPCGExProbeAnisotropicSettings` | "Probe : Anisotropic" | Anisotropic probing |
| `UPCGExProbeDirectionSettings` | "Probe : Direction" | Directional probing |
| `UPCGExProbeClosestSettings` | "Probe : Closest" | Closest point |
| `UPCGExProbeIndexSettings` | "Probe : Index" | Index-based |
| `UPCGExProbeNumericCompareSettings` | "Probe : Numeric Compare" | Numeric comparison |

### Key Features

- Multiple probe types for establishing point connections
- Creates clusters from point sets
- Supports spatial, directional, and attribute-based connectivity

### Data Assets (if any)

None directly defined.

---

## Node Classification

### Standalone Nodes
- connect-points.md [N]

### Nodes with Dedicated Sub-operations

#### 📁 probes/ [S]
All 16 probe factory types

---

## Cross-Module Relationships

### Consumes From
- PCGExGraphs: Cluster output generation
- PCGExFilters: Connection filtering

### Provides To
- Cluster/graph generation from point clouds

---

## File Counts

| Type | Count |
|------|-------|
| Nodes [N] | 1 main + 16 probe factories = 17 |
| Factories [F] | 16 |
