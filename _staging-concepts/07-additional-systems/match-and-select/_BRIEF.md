# Section Brief: Resolvers (Matching & Pickers)

> Context for writing this section. Read before working on these docs.

---

## Purpose

Document resolver sub-node systems that are opt-in but fundamental when needed:
- **Matching** - Correlate data between sources/targets (7 match rules)
- **Pickers** - Select indices from collections (4 picker types)

These follow the same provider/consumer pattern as filters but serve different purposes.

---

## Key Messages

1. **Matching is transverse** - Used by filters, sampling, clusters for data correlation
2. **Pickers select indices** - Constant, range, attribute-driven selection
3. **Same pattern as filters** - Provider/consumer, composable
4. **Opt-in but powerful** - Learn when you need data correlation or index selection

---

## Pages in This Section

| Page | Content |
|------|---------|
| `README.md` | Overview of resolver systems |
| `matching.md` | Data matching concept, 7 match rule types |
| `pickers.md` | Index selection, 4 picker types |

---

## Source Material

### For Accuracy
- `_notes/modules/PCGExMatching.md` - Matching architecture (7 rules)
- `_notes/modules/PCGExPickers.md` - Picker architecture (4 types)
- `_staging/PCGExMatching/` - Generated matching docs
- `_staging/PCGExPickers/` - Generated picker docs

---

## Matching Overview

**7 Match Rules**:
| Rule | Purpose |
|------|---------|
| Attr to Attr | Compare attributes between sources |
| Tag to Attr | Match tags against attributes |
| Shared Tag | Match by shared tags (specific/any/all) |
| Overlap | Spatial overlap detection |
| By Index | Match by point index |
| Random | Random match with threshold |
| Copy Tags | Copy tags from matched targets |

**Used by**: Filters (distance), Sampling, Cluster operations, any data correlation

**Key concepts**: Multi-rule aggregation (required + optional), strictness levels, spatial queries

---

## Pickers Overview

**4 Picker Types**:
| Picker | Purpose |
|--------|---------|
| Constant | Single index (discrete or normalized) |
| Range | Contiguous selection [start:end] |
| Indices from Set | Multiple discrete indices from attributes |
| Ranges from Set | Multiple ranges from FVector2D attributes |

**Used by**: Filters (picker filter), selection operations

**Key concepts**: Negative indexing, normalization, index safety modes (ignore/clamp/wrap)

---

## What Belongs Here vs Elsewhere

### In This Section
- Matching concept and rule types
- Picker concept and types
- How they follow provider/consumer pattern

### NOT Here (belongs elsewhere)
- Specific match rule settings → Node Library
- Specific picker settings → Node Library
- Provider/consumer pattern basics → `01-architecture/`

---

## Quality Notes

- Matching is more fundamental than pickers - users will encounter it more
- One page each is sufficient - details in node library
- Emphasize that these are sub-nodes following same pattern as filters
- Matching has complex multi-rule logic (required vs optional) - explain briefly
