---
description: 'In editor :: PCGEx | Pickers : Picker : Indices from Set'
---

# Indices from Set

Reads **discrete indices** from point attributes. Each unique value in the attribute(s) becomes an index to select.

```
Indices Input:
┌─────────────────────────────┐
│ Point 0:  @Index = 2        │
│ Point 1:  @Index = 5        │
│ Point 2:  @Index = 2        │  (duplicate, deduplicated)
│ Point 3:  @Index = -1       │  (last point)
└─────────────────────────────┘
                ↓
          Picks: {2, 5, last}
```

---

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Indices** | Points | Point collection containing index attributes |

---

## Settings

<details>
<summary><strong>Attributes</strong> <code>FPCGAttributePropertyInputSelector[]</code></summary>

List of attributes to read indices from. Each attribute value becomes an index.

If empty, the first available numeric attribute is used.

Use negative values to select from the end.

⚡ PCG Overridable

</details>

---

## Behavior Notes

- **Deduplication**: Duplicate index values are automatically removed
- **Multiple Attributes**: Values from all listed attributes are combined
- **Auto-Fallback**: If no attributes are specified, the first available one is used
- **Negative Indexing**: Attribute values can be negative (`-1` = last point)

---

📦 **Module**: `PCGExPickers` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExPickers/Public/Pickers/PCGExPickerAttributeSet.h)
