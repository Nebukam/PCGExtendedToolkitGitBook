# PCGExPickers Analysis

## Module Type
- [ ] Core Infrastructure
- [x] Support System (provides factories/operations to other modules)
- [ ] Element Module (user-facing nodes)
- [ ] Hybrid

## Dependencies
| Depends On | Why |
|------------|-----|
| PCGExCore | Base framework, facades |

## What This Module Provides

### Nodes (UPCGEx*Settings classes)

**4 Picker Providers**:

| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExPickerConstantSettings` | "Picker : Constant" | Single value picker |
| `UPCGExPickerConstantRangeSettings` | "Picker : Range" | Range-based picker [start:end] |
| `UPCGExPickerAttributeSetSettings` | "Picker : Indices from Set" | Multi-index from attributes |
| `UPCGExPickerAttributeSetRangesSettings` | "Picker : Ranges from Set" | Multi-range from FVector2D attributes |

### Factories/Providers

| Factory Class | Purpose |
|---------------|---------|
| `UPCGExPickerConstantFactory` | Single index picking |
| `UPCGExPickerConstantRangeFactory` | Range picking |
| `UPCGExPickerAttributeSetFactory` | Attribute-driven indices |
| `UPCGExPickerAttributeSetRangesFactory` | Attribute-driven ranges |

### Shared Structs/Details

| Struct | Purpose |
|--------|---------|
| `FPCGExPickerConfigBase` | bTreatAsNormalized, TruncateMode, Safety |
| `FPCGExPickerConstantConfig` | DiscreteIndex, RelativeIndex |
| `FPCGExPickerConstantRangeConfig` | Start/End indices (discrete and relative) |
| `FPCGExPickerAttributeSetConfig` | Attributes array |
| `FPCGExPickerAttributeSetRangesConfig` | Attributes array (FVector2D) |

### Index Safety Modes

| Mode | Behavior |
|------|----------|
| Ignore | Skip invalid picks |
| Clamp | Clamp to bounds |
| Wrap | Modulo wrap |

### Global Helper Function

```cpp
namespace PCGExPickers
{
    bool GetPicks(
        const TArray<TObjectPtr<const UPCGExPickerFactoryData>>& Factories,
        const TSharedPtr<PCGExData::FFacade>& InFacade,
        TSet<int32>& OutPicks
    );
}
```

### Picker Types

#### Constant (Single Value)
- **Mode**: Discrete or Normalized
- **Features**: Negative indexing support, truncation modes
- **Display**: "Pick @{index}"

#### Range (Contiguous Selection)
- **Mode**: Discrete or Normalized for both start and end
- **Features**: Auto-swaps if reversed, inclusive range
- **Display**: "Pick [{start}:{end}]"

#### Attribute-Set (Multiple Discrete)
- **Features**: Reads from point attributes, unique value extraction
- **Input**: "Indices" pin

#### Attribute-Set Ranges (Multiple Ranges)
- **Features**: FVector2D as range pairs, chains multiple ranges
- **Input**: "Ranges" pin

---

## Node Classification

### Standalone Nodes
- picker-constant.md [N] - `UPCGExPickerConstantSettings`
- picker-range.md [N] - `UPCGExPickerConstantRangeSettings`
- picker-attribute-set.md [N] - `UPCGExPickerAttributeSetSettings`
- picker-attribute-set-ranges.md [N] - `UPCGExPickerAttributeSetRangesSettings`

### Nodes with Shared Factories
- (none - each picker is self-contained)

### Nodes with Dedicated Sub-operations
- (none)

---

## Shared Factory Folders (Module-Level)

### pickers/ [S]
- Used by: Nodes accepting picker inputs (filters, selection)
- Operations:
  - constant.md [F]
  - range.md [F]
  - attribute-set.md [F]
  - attribute-set-ranges.md [F]

---

## Cross-Module Relationships

### Consumes From
- PCGExCore: FFacade, factory patterns

### Provides To
- PCGExFilters: Picker filter uses picker framework
- Any node needing index selection

---

## Documentation Notes

### Concepts to Cross-Reference
- Input Value Sources: Discrete vs Normalized mode
- Index Safety: Same safety modes as other index operations

### Tricky Areas
- **Negative indexing**: Python-style back-relative selection
- **Normalization**: 0.0-1.0 mapped to list bounds with truncation
- **TSet output**: Automatically deduplicates picks
- **Attribute preparation**: Isolated in InitInternalData()

### Key Design Features
- Stateless samplers operating on point counts
- Multiple picker types combinable in single output
- Index safety deferred to sanitization step

---

## Header File Structure

**Total Public Headers**: 7 files

| Directory | Content |
|-----------|---------|
| Root | Module header, common types |
| Core/ | Factory provider base |
| Pickers/ | 4 picker implementations |

---

## File Counts

| Type | Count |
|------|-------|
| Nodes [N] | 4 |
| Providers [P] | 4 |
| Factories [F] | 4 |
| Shared Folders [S] | 1 (pickers) |
| Data Assets [A] | 0 |
| Public Headers | 7 |
