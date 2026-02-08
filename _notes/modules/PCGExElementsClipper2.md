# PCGExElementsClipper2 Analysis

## Module Type
- [ ] Core Infrastructure
- [ ] Support System (provides factories/operations to other modules)
- [x] Element Module (user-facing nodes)
- [ ] Hybrid

## Dependencies
| Depends On | Why |
|------------|-----|
| PCGExCore | Base framework |
| ThirdParty/Clipper2 | Clipper2 library for polygon operations |

## What This Module Provides

### Nodes (UPCGEx*Settings classes)

**3 Clipper2 Polygon Nodes**:

| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExClipper2RectClipSettings` | "Clipper2 : Rect Clip" | Rectangle clipping |
| `UPCGExClipper2OffsetSettings` | "Clipper2 : Offset" | Polygon offsetting |
| `UPCGExClipper2BooleanSettings` | "Clipper2 : Boolean" | Boolean operations (union, intersection, difference) |

### Key Features

- 2D polygon boolean operations
- Polygon offset/inset
- Rectangle clipping
- Uses Clipper2 library (third-party)

### Data Assets (if any)

None directly defined.

---

## Node Classification

### Standalone Nodes
- clipper2-rect-clip.md [N]
- clipper2-offset.md [N]
- clipper2-boolean.md [N]

---

## Cross-Module Relationships

### Consumes From
- ThirdParty/Clipper2: Polygon operations library

### Provides To
- 2D polygon manipulation workflows

---

## File Counts

| Type | Count |
|------|-------|
| Nodes [N] | 3 |
