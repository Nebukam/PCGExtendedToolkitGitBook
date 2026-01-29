# PCGExElementsShapes Analysis

## Module Type
- [ ] Core Infrastructure
- [ ] Support System (provides factories/operations to other modules)
- [x] Element Module (user-facing nodes)
- [ ] Hybrid

## Dependencies
| Depends On | Why |
|------------|-----|
| PCGExCore | Base framework |

## What This Module Provides

### Nodes (UPCGEx*Settings classes)

**6 Shape Generation Nodes**:

#### Main Node
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExCreateShapesSettings` | "Create Shapes" | Main shape generation node |

#### Shape Builder Factories (5 nodes)
| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExShapeBuilderSettings` | "Shape Builder" | Abstract base |
| `UPCGExShapeBuilderCircleSettings` | "Shape : Circle" | Circle generation |
| `UPCGExShapeBuilderPolygonSettings` | "Shape : Polygon" | Regular polygon |
| `UPCGExShapeBuilderGridSettings` | "Shape : Grid" | Grid pattern |
| `UPCGExShapeBuilderFiblatSettings` | "Shape : Fiblat" | Fibonacci lattice sphere |

### Key Features

- Generate regular shapes from seed points
- Multiple shape types (circle, polygon, grid, Fibonacci)
- Factory pattern for extensible shape builders

### Data Assets (if any)

None directly defined.

---

## Node Classification

### Standalone Nodes
- create-shapes.md [N]

### Nodes with Dedicated Sub-operations

#### 📁 shape-builders/ [S]
- circle.md [F]
- polygon.md [F]
- grid.md [F]
- fiblat.md [F]

---

## Cross-Module Relationships

### Consumes From
- PCGExCore: Base utilities

### Provides To
- Shape generation for any workflow

---

## File Counts

| Type | Count |
|------|-------|
| Nodes [N] | 1 main + 5 builders = 6 |
| Factories [F] | 5 |
