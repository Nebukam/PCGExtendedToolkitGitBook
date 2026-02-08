# Section Brief: Valency

> Context for writing this section. Read before working on these docs.

---

## Purpose

Explain Valency - the WFC-style constraint solving system. This is a COMPLEX, STANDALONE feature. Users should understand:
- Valency solves module placement via constraints (like Wave Function Collapse)
- Orbitals define connection points
- Cages define modules with orbitals
- Bonding rules constrain what connects to what
- Pattern matching enables post-solve transformations

This section comes LAST because it's complex and self-contained.

---

## Key Messages

1. **Constraint-based solving** - Like WFC but more flexible
2. **Orbitals are connection points** - Define where things connect
3. **Cages are modules** - Assets with orbitals attached
4. **Bonding rules constrain** - What can connect to what
5. **Pattern matching** - Find and replace configurations in results
6. **Requires Asset Staging** - Builds on the staging system

---

## Pages in This Section

| Page | Content |
|------|---------|
| `README.md` | What Valency is, high-level workflow |
| `orbitals-and-cages.md` | Core concepts: orbitals, orbital sets, cages |
| `bonding-rules.md` | How constraints work, context volumes |
| `solving-process.md` | The solve workflow, what happens when |
| `patterns.md` | Pattern matching and replacement |

---

## Source Material

### Primary (comprehensive existing content)
- `working-with-pcgex/valency/README.md` - Good overview
- `working-with-pcgex/valency/orbitals-and-orbital-sets.md`
- `working-with-pcgex/valency/cages-and-modules.md`
- `working-with-pcgex/valency/bonding-rules-and-context-volumes.md`
- `working-with-pcgex/valency/the-solving-process.md`
- `working-with-pcgex/valency/patterns-and-pattern-replacement.md`
- `working-with-pcgex/valency/palettes.md`
- `working-with-pcgex/valency/properties-and-tags.md`
- `working-with-pcgex/valency/null-cages-and-constraints.md`
- `working-with-pcgex/valency/debugging-and-visualization.md`
- `working-with-pcgex/valency/your-first-valency-system.md`
- `working-with-pcgex/valency/pcg-node-reference.md`

### For Accuracy
- `_notes/modules/PCGExElementsValency.md` - Module architecture (if exists)
- `_staging/PCGExElementsValency/` - Generated valency docs (if exists)
- Source: Valency implementation files

---

## What Belongs Here vs Elsewhere

### In This Section
- Valency concepts and workflow
- Orbitals and orbital sets
- Cages and modules
- Bonding rules
- Solving process
- Pattern matching
- Debugging strategies

### NOT Here (belongs elsewhere)
- Specific valency node settings → Node Library
- Cluster fundamentals → `03-clusters/` (prerequisite)
- Asset staging basics → `05-asset-staging/` (prerequisite)

### Prerequisites Users Must Understand First
- Clusters (Valency operates on cluster topology)
- Asset Staging (Valency uses staging for spawning)

---

## Terminology

- **Valency** - The constraint solving system (from chemistry: valence electrons)
- **Orbital** - Connection point on a cage (direction + properties)
- **Orbital Set** - Named group of orbitals (e.g., "Cardinal4", "Hex6")
- **Cage** - A module definition with orbitals
- **Module** - Asset(s) associated with a cage
- **Bonding Rule** - Constraint on what orbitals can connect
- **Context Volume** - Spatial region with specific bonding rules
- **Pattern** - Configuration of multiple solved cages to match/replace
- **Palette** - Reusable bundle of assets + properties
- **Null Cage** - Placeholder for boundaries/wildcards

---

## Diagrams Needed

1. Cage with orbitals attached (3D visualization)
2. Two cages connected via matching orbitals
3. Bonding rule diagram (what connects to what)
4. Context volume defining regional rules
5. Pattern matching: before/after showing replacement
6. Solve workflow: input cluster → write orbitals → solve → spawn

---

## Cross-Links to Include

**Concepts:**
- `03-clusters/` - Valency operates on clusters
- `05-asset-staging/` - Valency uses staging for spawning
- `04-filters/` - Filters can be used in Valency contexts

**Node Library:**
- `/node-library/valency/`

---

## Quality Notes

- **STATUS: DEFERRED** - Use existing docs with WIP flag, revisit later (nodes may change)
- COMPREHENSIVE existing content - adapt rather than rewrite
- This is the MOST COMPLEX feature in PCGEx
- Placed LAST because it's self-contained and requires prior knowledge
- The chemistry metaphor (valence electrons) helps understanding
- Existing "Your First Valency System" is a tutorial - may be too use-case specific
- Verify accuracy against source - Valency may have evolved
- Consider whether debugging/visualization is separate page or merged
- Pattern matching is a key differentiator from standard WFC - emphasize it
