# Documentation Decisions Log

> Track decisions made during the documentation overhaul.

---

## Confirmed Decisions

### Structure
- [x] Conceptual docs live in `working-with-pcgex/` (promoted from `_staging-concepts/`)
- [x] `_staging-concepts/` retains only meta files (style guide, plans, progress, decisions)
- [x] `_staging/` is 1:1 codebase mirror — auto-generated node docs organized by module
- [x] `node-library/` is user-facing reorganization of `_staging/` with different folder structure and filenames
- [x] Node library uses operation-type sub-grouping (generate/refine/transform/analyze)
- [x] All filters unified in one location regardless of source module
- [x] Valency docs go last due to complexity and self-containment
- [x] Shapes gets its own root folder in node library
- [x] Node library gets a homepage explaining structure for discovery
- [x] "Misc" folder renamed to `utilities/` (merges misc + QoL)

### Content Approach
- [x] Use-case agnostic - describe capabilities, not applications
- [x] "Everything is points" emphasized specifically for Paths/Clusters, not as overarching theme
- [x] Conceptual docs link to node library for specifics
- [x] Node library doesn't teach workflows - just documents nodes
- [x] Cross-links: inline what's relevant, collect "worth exploring" at end (no hard rule)
- [x] Images: HTML comments with descriptions (`<!-- IMAGE: description -->`)

### Audience
- [x] Target: Technical artists, engineer-minded folks
- [x] Assume: Knows Unreal, possibly Houdini, may be new to PCG
- [x] Don't assume: Prior PCG knowledge

---

## Pending Decisions

_(None currently - all major decisions confirmed)_

---

### Cross-Linking Strategy
**Question:** How should conceptual docs link to node library?

**Options:**
1. Inline links to specific nodes when mentioned
2. "See also" sections at end of conceptual pages
3. Both

**Decision:** _pending_

---

### Existing Content Disposition
**Question:** What happens to `working-with-pcgex/` after migration?

**Decision:** `working-with-pcgex/` IS the canonical location for concept content. Content was promoted in-place rather than migrated elsewhere. The `_staging-concepts/` subdirectories were removed; only meta files remain.

---

## Future Considerations

- Image/diagram placeholders in conceptual docs - need asset creation workflow
- Example project references - should we maintain one?
- Video content integration - if any exists or is planned
