# PCGExElementsTensors Analysis

## Module Type
- [ ] Core Infrastructure
- [x] Support System (provides factories/operations to other modules)
- [x] Element Module (user-facing nodes)
- [x] Hybrid

## Dependencies
| Depends On | Why |
|------------|-----|
| PCGExCore | Base framework |
| PCGExNoise3D | Noise-based tensors |
| PCGExHeuristics | Tensor heuristics |
| PCGExFilters | Tensor filtering |

## What This Module Provides

### Nodes (UPCGEx*Settings classes)

**18 Tensor Field Nodes**:

#### Main Nodes (2)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExExtrudeTensorsSettings` | "Extrude Tensors" | Path extrusion using tensor fields |
| `UPCGExTensorsTransformSettings` | "Tensors Transform" | Transform points using tensors |

#### Tensor Factories (14 nodes)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExTensorConstantSettings` | "Tensor : Constant" | Constant direction |
| `UPCGExTensorFlowSettings` | "Tensor : Flow" | Flow field |
| `UPCGExTensorNullSettings` | "Tensor : Null" | Null tensor |
| `UPCGExTensorInertiaSettings` | "Tensor : Inertia" | Inertia-based |
| `UPCGExTensorInertiaConstantSettings` | "Tensor : Inertia Constant" | Constant inertia |
| `UPCGExTensorNoiseSettings` | "Tensor : Noise" | Noise-based |
| `UPCGExTensorNoiseBoundedSettings` | "Tensor : Noise Bounded" | Bounded noise |
| `UPCGExTensorPathFlowSettings` | "Tensor : Path Flow" | Path-based flow |
| `UPCGExTensorPathPoleSettings` | "Tensor : Path Pole" | Path pole |
| `UPCGExTensorPoleSettings` | "Tensor : Pole" | Point pole |
| `UPCGExTensorSpinSettings` | "Tensor : Spin" | Spin field |
| `UPCGExTensorSplineFlowSettings` | "Tensor : Spline Flow" | Spline flow |
| `UPCGExTensorSplinePoleSettings` | "Tensor : Spline Pole" | Spline pole |
| `UPCGExTensorSurfaceSettings` | "Tensor : Surface" | Surface-based |

#### Integration Nodes (2)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExHeuristicsTensorSettings` | "Heuristics : Tensor" | Tensor as heuristic |
| `UPCGExProbeTensorSettings` | "Probe : Tensor" | Tensor-based probing |
| `UPCGExTensorDotFilterSettings` | "Filter : Tensor Dot" | Tensor dot filter |

### Key Features

- Directional vector field definitions
- Multiple tensor types (flows, poles, spins, noise, surface-based)
- Path extrusion using tensor guidance
- Tensor integration with heuristics and probing

### Data Assets (if any)

None directly defined.

---

## Node Classification

### Standalone Nodes
- extrude-tensors.md [N]
- tensors-transform.md [N]

### Nodes with Dedicated Sub-operations

#### 📁 tensors/ [S]
All 14 tensor factory types

---

## Cross-Module Relationships

### Consumes From
- PCGExNoise3D: Noise-based tensor fields
- PCGExHeuristics: Tensor as heuristic source
- PCGExElementsProbing: Tensor-based connectivity

### Provides To
- Path extrusion workflows
- Directional field-guided operations

---

## File Counts

| Type | Count |
|------|-------|
| Nodes [N] | 2 main + 14 tensors + 2 integration = 18 |
| Factories [F] | 14 |
