# PCGExElementsBridges Analysis

## Module Type
- [ ] Core Infrastructure
- [ ] Support System (provides factories/operations to other modules)
- [x] Element Module (user-facing nodes)
- [ ] Hybrid

## Dependencies
| Depends On | Why |
|------------|-----|
| PCGExCore | Base framework |
| PCG | PCG component integration |

## What This Module Provides

### Nodes (UPCGEx*Settings classes)

**1 Bridge Node**:

| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExWaitForPCGDataSettings` | "Wait for PCG Data" | Wait for external PCG Components Generated output |

### Key Features

- Synchronizes PCGEx graphs with external PCG component generation
- Enables dependency between PCG graphs

### Data Assets (if any)

None directly defined.

---

## Node Classification

### Standalone Nodes
- wait-for-pcg-data.md [N]

---

## Cross-Module Relationships

### Consumes From
- External PCG Components

### Provides To
- PCGEx graph synchronization

---

## File Counts

| Type | Count |
|------|-------|
| Nodes [N] | 1 |
