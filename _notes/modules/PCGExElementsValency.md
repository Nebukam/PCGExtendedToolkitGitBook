# PCGExElementsValency Analysis

## Module Type
- [ ] Core Infrastructure
- [ ] Support System (provides factories/operations to other modules)
- [x] Element Module (user-facing nodes)
- [ ] Hybrid

## Dependencies
| Depends On | Why |
|------------|-----|
| PCGExCore | Base framework, bitmask system |
| PCGExGraphs | Cluster structures |
| PCGExCollections | Asset collections for staging |
| PCGExProperties | Property system for cage properties |

## What This Module Provides

### Nodes (UPCGEx*Settings classes)

**5 Valency/Orbital Nodes**:

| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExWriteValencyOrbitalsSettings` | "Write Valency Orbitals" | Write orbital data to clusters |
| `UPCGExProbeValencySettings` | "Probe Valency" | Detect orbital patterns |
| `UPCGExWriteModuleSocketsSettings` | "Write Module Sockets" | Write socket data |
| `UPCGExValencyPatternReplacementSettings` | "Valency Pattern Replacement" | Transform patterns |
| `UPCGExValencyStagingSettings` | "Valency Staging" | WFC-like asset staging |

### Key Concepts

**Orbital Bitmask System**:
- Directional orbitals encoded as 64-bit bitmasks
- Used for constraint-based pattern matching
- See `.claude/Orbital_Bitmask_Reference.md` for details

**Valency Architecture**:
- Cage Properties: Per-module property definitions
- Orbital compatibility: Directional constraint solving
- WFC-style staging: Asset selection based on orbital fitness

### Data Assets (if any)

Relies on PCGExCollections data assets with valency-specific properties.

---

## Node Classification

### Standalone Nodes
- write-valency-orbitals.md [N]
- probe-valency.md [N]
- write-module-sockets.md [N]
- valency-pattern-replacement.md [N]
- valency-staging.md [N]

---

## Cross-Module Relationships

### Consumes From
- PCGExGraphs: Cluster structures
- PCGExCollections: Asset collections with orbital data
- PCGExProperties: Cage property system

### Provides To
- WFC-style procedural assembly workflows

---

## Documentation Notes

### Concepts to Cross-Reference
- Bitmask Operations: Orbital states use FPCGExBitmask
- Property System: Cage properties from PCGExProperties

### Tricky Areas
- **NodeIndex vs PointIndex**: Different index spaces
- **Boundary mask semantics**: Orbital direction encoding
- **Transform direction mismatch**: Solver fitness calculation

---

## File Counts

| Type | Count |
|------|-------|
| Nodes [N] | 5 |
