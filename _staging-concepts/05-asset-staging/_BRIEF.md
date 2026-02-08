# Section Brief: Asset Staging

> Context for writing this section. Read before working on these docs.

---

## Purpose

Explain the asset staging system - how PCGEx handles spawning assets with intelligence. Users should understand:
- What staging solves (the spawning problem)
- Collections as asset containers
- Distribution strategies (how assets are selected)
- Fitting and variations (how transforms are applied)
- That this is foundational (Valency requires it)

---

## Key Messages

1. **Beyond basic spawning** - Intelligent asset selection and placement
2. **Collections are versatile** - Mesh, Actor, PCG Data Asset + per-entry custom properties
3. **Distribution controls selection** - Random, weighted, sequential, material variations
4. **Fitting handles transforms** - Scale, justify, orient (used by staging and other nodes)
5. **Low-level support** - Sockets, material variants built into the system
6. **Foundational system** - Required by Valency, useful everywhere

---

## Pages in This Section

| Page | Content |
|------|---------|
| `README.md` | What staging solves, workflow overview, socket/material variant support |
| `collections.md` | Collections (mesh, actor, PCG data asset), per-entry custom properties |
| `distribution.md` | How assets are picked, material variations |
| `fitting.md` | Scale, justification, variations (used beyond staging too) |

Note: Socket staging is a node feature (`Staging : Load Socket`), not a concept page - mention in README that it's supported at low level. Fitting is optional during staging but used by other nodes too - may need Q&A when writing this section.

---

## Source Material

### Primary (DEPRECATED - needs major rework)
- `working-with-pcgex/asset-staging/README.md` - outdated
- `working-with-pcgex/asset-staging/distribution.md` - outdated
- `working-with-pcgex/asset-staging/fit-to-size.md` - outdated
- `working-with-pcgex/asset-staging/justification.md` - outdated
- `working-with-pcgex/asset-staging/variations.md` - outdated
- `working-with-pcgex/asset-staging/technical-note-asset-collections.md` - outdated

**Note:** Significant improvements since these were written. Use for structure inspiration only, verify against current implementation.

### For Accuracy
- `_notes/modules/PCGExCollections.md` - Collection architecture
- `_staging/PCGExCollections/` - Generated collection docs
- `_staging/PCGExFoundations/` - Staging node docs
- Source: `PCGExCollections/Public/` - Collection classes

---

## What Belongs Here vs Elsewhere

### In This Section
- The staging concept and workflow
- Collection data assets
- Distribution strategies
- Fitting and transform application
- Socket-based assembly
- Variations and alternatives

### NOT Here (belongs elsewhere)
- Specific staging node settings → Node Library
- How Valency uses staging → `08-valency/`
- Path-based spawning specifics → Node Library

---

## Terminology

- **Staging** - The process of preparing points for asset spawning
- **Collection** - Data asset containing assets + metadata
- **Distribution** - Strategy for selecting which asset to use
- **Fitting** - Adjusting transforms to match context
- **Justification** - Alignment/anchoring within bounds
- **Socket** - Named connection point on assets for modular assembly
- **Variation** - Alternative asset choice

---

## Diagrams Needed

1. Collection data asset in editor (what it looks like)
2. Distribution flow: Points → Collection → Selected assets
3. Fitting/justification options visualized
4. Socket connection between two modular pieces
5. Before/after staging showing raw points → placed assets

---

## Cross-Links to Include

**Concepts:**
- `08-valency/` - Valency requires staging for module spawning
- `02-paths/` - Path-based staging exists

**Node Library:**
- `/node-library/staging/` - All staging operations
- `/node-library/staging/collections/` - Collection nodes

---

## Quality Notes

- This is a "selling point" feature but hard to explain abstractly
- Keep it capability-focused, not use-case focused
- **Existing source material is DEPRECATED** - needs major rework, significant improvements since written
- Collections are DATA ASSETS - users need to understand editor workflow
- Collections support more than mesh: Actor, PCG Data Asset, per-entry custom properties
- Material variations are a key distribution feature - emphasize
- Fitting is visual - diagrams will help more than text
- Fitting is used beyond staging (other nodes use it) - note this
- Socket support is low-level (mention in README, details in node library)
- This is FOUNDATIONAL for Valency - mention that dependency
- May need deeper Q&A when actually writing this section
