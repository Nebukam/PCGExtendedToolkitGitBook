# PCGEx Documentation Reference

> **Purpose**: Single source of truth for Claude sessions working on PCGEx documentation.
> **Last Updated**: 2026-01-29 (Full documentation review completed)

---

## Project Structure

```
D:\GIT\PCGExtendedToolkitGitBook\          # Deprecated GitBook (reference only)
D:\GIT\PCGExtendedToolkitGitBook\_dry-run\ # Working directory for documentation
D:\GIT\PCGExtendedToolkitGitBook\_notes\   # Planning notes and module analysis
D:\GIT\PCGExWorkbench\Plugins\PCGExtendedToolkit\Source\  # Plugin source code
```

---

## Documentation Categories

### 1. Working with PCGEx (Conceptual)

**Tone**: Technical but approachable. Explains *why* and *how*. Progressive complexity.

**Rules**:
- Use-case agnostic - NO assumptions about dungeons/forests/cities/landscapes
- Light analogies OK, but not condescending
- Examples should be abstract or clearly generic
- DON'T mention parallel execution (everything is parallel by default)

**Good warmth** (like existing paths README):
- "Points on a path form a journey from start to finish"
- "Collections are like containers that travel together through your graph"

**Bad warmth**:
- "Your little point friends are about to go on an adventure!"

### 2. Node Library (Reference)

**Tone**: Factual and precise. Document what the implementation actually does.

**Rules**:
- Order of operations matters - document it
- Settings behavior documented accurately
- Cross-references to shared concepts
- Use editor display names, not code identifiers ("Sphere Bounds" not `SphereBounds`)
- CRITICAL: Verify all "Works Well With" relationships against actual code

---

## Shared Concepts Hierarchy

Documentation uses three levels of shared content to avoid repetition:

### Level 1: Plugin-Wide Concepts
Documented once in `shared-concepts/`, referenced everywhere.

| Concept | File | Description |
|---------|------|-------------|
| Input Value Sources | `input-value-sources.md` | Constant vs Attribute pattern (38+ struct variants) |
| Distance & Proximity | `distance-and-proximity.md` | EPCGExDistance modes, EPCGExDistanceType metrics |
| Comparison Operators | `comparison-operators.md` | EPCGExComparison enum, string comparisons |
| Attribute Mapping | `attribute-mapping.md` | FPCGExAttributeSourceToTargetDetails |
| Bitmask Operations | `bitmask-operations.md` | FPCGExBitmask, state tracking |
| Common Node Settings | `common-node-settings.md` | UPCGExSettings base class options |

### Level 2: Module-Wide Shared Settings
Documented in module's `shared-settings/` subfolder.

| Module | Shared Settings |
|--------|-----------------|
| Clusters | Graph builder details, cluster output settings |
| Paths | Tangent methods, subpoints blending modes |
| Pathfinding | Search algorithms, goal pickers, heuristics |
| Blending | Blend modes, weight curves |

### Level 3: Node-Specific Factories
Documented as sub-pages under the node folder.

```
node-name/
├── README.md           # Main node documentation
├── sub-operation-a.md  # Sub-operation page
└── sub-operation-b.md  # Sub-operation page
```

---

## Module Taxonomy

### Tier 1: Core Infrastructure (Always Required)
| Module | Purpose |
|--------|---------|
| PCGExCore | Foundation: FFacade, FPointIO, FCluster, base settings |
| PCGExBlending | Attribute interpolation framework |

### Tier 2: Support Systems
| Module | Purpose |
|--------|---------|
| PCGExFilters | 25 point filters + 5 collection filters |
| PCGExFoundations | Geometry primitives (polylines, tangents) |
| PCGExGraphs | Graph/cluster structures |
| PCGExCollections | Asset management, weighted picking |
| PCGExProperties | Dynamic property system (17 types) |
| PCGExMatching | Data correlation operations |
| PCGExHeuristics | Scoring/weighting for pathfinding |
| PCGExPickers | Selection/picking operations |
| PCGExNoise3D | 3D noise generation |

### Tier 3: Element Modules (User-Facing Nodes)
| Module | Nodes | Purpose |
|--------|-------|---------|
| PCGExElementsPaths | 26 | Path manipulation |
| PCGExElementsClusters | 22 | Graph algorithms, Delaunay, Voronoi |
| PCGExElementsSampling | 13 | Data/texture/surface sampling |
| PCGExElementsMeta | 12 | Attribute operations |
| PCGExElementsPathfinding | 8 | A* pathfinding |
| PCGExElementsSpatial | 8 | Bounds, layout |
| PCGExElementsTopology | 5 | Mesh topology |
| PCGExElementsValency | 4 | WFC-style constraint solving |
| PCGExElementsClipper2 | 3 | 2D polygon booleans |
| PCGExElementsTensors | 2 | Tensor field extrusion |
| PCGExElementsPathfindingNavmesh | 2 | Navmesh integration |
| PCGExElementsFloodFill | 1 | Region flood-fill |
| PCGExElementsActions | 3 | Batch action processing |
| PCGExElementsBridges | 1 | Data routing |
| PCGExElementsProbing | 1 | Probe-based connections |
| PCGExElementsShapes | 1 | Shape primitives |

---

## Key Architectural Concepts

### State Machine Lifecycle
PCGEx replaces vanilla PCG's single-shot execution:
```
Boot → PostBoot → AdvanceWork (repeats) → CompleteWork
```

### Three-Layer Data Model
```
UPCGBasePointData (vanilla)
    → FPointIO (wrapper)
        → FFacade (abstraction with caching)
```

### Factory → Operation Pattern
For extensible operations (filters, blenders, samplers):
```
Settings (Editor UI)
    → Factory Data (configuration, travels through graph)
        → Operation (runtime logic)
```

### Cluster Index Spaces
| Index Type | Meaning |
|------------|---------|
| NodeIndex | Position in Cluster->Nodes array |
| EdgeIndex | Position in Cluster->Edges array |
| Node.PointIndex | Position in vertex point data |
| Edge.PointIndex | Position in edge point data |

**These are NOT the same!** Confusing them is a common bug source.

---

## Documentation Templates

**See [TEMPLATES.md](./TEMPLATES.md) for complete, copy-paste templates including:**
- Node documentation (filters, paths, clusters, etc.)
- Filter-specific template
- Shared concept template
- Sub-operation template
- Category README template
- Formatting reference (icons, hints, links, tables)
- Footer format with module/source links

### Quick Reference

**Frontmatter format:**
```yaml
---
icon: <icon-name>
description: 'In editor :: PCGEx | <Category> : <Node Display Name>'
---
```

**Settings block format:**
```html
<details>
<summary><strong>Setting Name</strong> <code>Type</code></summary>

Description text.

Default: `value`

⚡ PCG Overridable

</details>
```

**Footer format:**
```markdown
---

📦 **Module**: `ModuleName` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/ModuleName/Private/Path/FileName.cpp)
```

---

## Review Pass Requirements

> **CRITICAL**: Previous documentation passes produced inconsistent output with missing properties and invented settings. All documentation MUST go through verification before being considered complete.

### Review Workflow

**Phase 1: Initial Draft**
- Write documentation based on source code reading
- Mark file as `DRAFT` in progress tracking

**Phase 2: Verification Pass**
- Re-read the actual source file (header + implementation)
- Check EVERY documented setting against `UPROPERTY` declarations
- Verify NO invented properties exist
- Confirm display names match `DisplayName` meta specifier
- Check default values against code
- Mark file as `VERIFIED` after pass

**Phase 3: Cross-Reference Check**
- Verify all "Related" links point to real nodes/concepts
- Confirm "Works Well With" claims are accurate
- Check shared concept links are correct
- Mark file as `REVIEWED`

### Verification Checklist (Per Node)

```
□ Read header file: Source/[Module]/Public/[Node].h
□ Read implementation: Source/[Module]/Private/[Node].cpp
□ List ALL UPROPERTY fields from settings class
□ Compare against documented settings - flag any:
  - Missing properties (in code but not documented)
  - Invented properties (documented but not in code)
  - Wrong types or descriptions
□ Check NodeDisplayName in source vs documented name
□ Verify input/output pins match GetInputPinLabels/GetOutputPinLabels
□ Check if node accepts filters (look for filter factory inputs)
□ Verify default values
□ Check PCG_Overridable markers
```

### Common Errors to Watch For

| Error Type | Example | How to Catch |
|------------|---------|--------------|
| Invented settings | Documenting "Tolerance" when it doesn't exist | Compare against UPROPERTY list |
| Missing settings | Skipping nested struct properties | Expand all FPCGEx* structs |
| Wrong defaults | "Default: true" when code says false | Check UPROPERTY initializer |
| Wrong display names | "Distance Mode" vs actual "Source Distance" | Check DisplayName meta |
| Phantom relationships | "Works well with X" when X can't connect | Verify pin compatibility |
| Misunderstood behavior | Describing wrong order of operations | Read Process/ProcessPoints impl |

### Review Status Markers

Add to Progress Tracking:
- `DRAFT` - Initial documentation written, not verified
- `VERIFIED` - Settings verified against source code
- `REVIEWED` - Cross-references and relationships verified
- `NEEDS-REWRITE` - Significant errors found, requires rewrite

### Batch Review Process

When reviewing existing documentation:

1. **Pick a category** (e.g., filters/points/)
2. **For each file**:
   - Open the doc and corresponding source side-by-side
   - Run through verification checklist
   - Log discrepancies
   - Fix or mark for rewrite
3. **Update progress tracking** with review status
4. **Create issues list** for systematic problems

### Source Code Reference Patterns

**Finding settings class:**
```cpp
// In header, look for:
UCLASS(...)
class UPCGEx[NodeName]Settings : public UPCGExSettings
{
    UPROPERTY(EditAnywhere, Category = "Settings", meta = (PCG_Overridable))
    // ... these are the settings to document
};
```

**Finding display name:**
```cpp
// In implementation, look for:
FName UPCGEx[NodeName]Settings::GetNodeName() const
{
    return FName("NodeDisplayName");  // OR check AdditionalTaskName()
}
```

**Finding input/output pins:**
```cpp
TArray<FPCGPinProperties> UPCGEx[NodeName]Settings::GetInputPinProperties() const
TArray<FPCGPinProperties> UPCGEx[NodeName]Settings::GetOutputPinProperties() const
```

---

## Progress Tracking

> **Detailed change tracking moved to [CHANGE-TRACKING.md](./CHANGE-TRACKING.md)**

### Not Yet Documented
- [ ] **Clusters nodes** (22 nodes)
- [ ] **Sampling nodes** (13 nodes)
- [ ] **Meta nodes** (12 nodes)
- [ ] **Pathfinding nodes** (10 nodes)
- [ ] **Spatial nodes** (8 nodes)
- [ ] **Topology nodes** (5 nodes)
- [ ] **Valency nodes** (4 nodes)
- [ ] **Generation nodes** (Clipper2, Tensors, Shapes)
- [ ] **Specialized nodes** (Probing, Bridges, FloodFill, Actions)
- [ ] **Working with PCGEx** conceptual guides

---

## Session Notes

### Key Learnings (Validated)
1. Don't mention parallel execution - everything is parallel by default
2. Use editor display names, not code identifiers
3. Expand Related sections for feature discovery
4. ASCII diagrams desirable for simple flows; HTML comments for complex screenshots
5. CRITICAL: Verify all "Works Well With" relationships against actual code
6. Always expand nested USTRUCT properties - they're often undocumented
7. Check EditCondition meta for property visibility rules
8. Source default values often differ from intuitive expectations

### Open Questions
- Which nodes are most-used? (Priority for documentation)
- How do node errors surface to users in the editor?
