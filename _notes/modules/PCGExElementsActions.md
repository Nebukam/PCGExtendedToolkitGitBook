# PCGExElementsActions Analysis

## Module Type
- [ ] Core Infrastructure
- [ ] Support System (provides factories/operations to other modules)
- [x] Element Module (user-facing nodes)
- [ ] Hybrid

## Dependencies
| Depends On | Why |
|------------|-----|
| PCGExCore | Base framework |
| PCGExMatching | Match-based actions |

## What This Module Provides

### Nodes (UPCGEx*Settings classes)

**3 Action Nodes**:

| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExActionWriteAttributesSettings` | "Action : Write Attributes" | Conditional attribute writing |
| `UPCGExBatchActionsSettings` | "Batch Actions" | Batch action execution |
| `UPCGExActionAbstractSettings` | "Action Abstract" | Abstract action base |

### Data Assets (if any)

None directly defined.

---

## Node Classification

### Standalone Nodes
- action-write-attributes.md [N]
- batch-actions.md [N]
- action-abstract.md [N]

---

## Cross-Module Relationships

### Consumes From
- PCGExMatching: Match results trigger actions

### Provides To
- Conditional attribute processing workflows

---

## File Counts

| Type | Count |
|------|-------|
| Nodes [N] | 3 |
