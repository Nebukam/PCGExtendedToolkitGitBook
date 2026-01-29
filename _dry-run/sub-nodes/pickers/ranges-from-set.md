---
description: 'In editor :: PCGEx | Pickers : Picker : Ranges from Set'
---

# Ranges from Set

Reads **index ranges** from Vector2D attributes. Each Vector2D defines a `[start, end]` range.

```
Ranges Input:
┌─────────────────────────────────┐
│ Point 0:  @Range = (0, 2)       │  → {0, 1, 2}
│ Point 1:  @Range = (5, 7)       │  → {5, 6, 7}
│ Point 2:  @Range = (-3, -1)     │  → {last-2, last-1, last}
└─────────────────────────────────┘
                ↓
          Picks: {0, 1, 2, 5, 6, 7, 7, 8, 9}
                 (assuming 10 points)
```

---

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Ranges** | Points | Point collection containing Vector2D range attributes |

---

## Settings

<details>
<summary><strong>Attributes</strong> <code>FPCGAttributePropertyInputSelector[]</code></summary>

List of Vector2D attributes to read ranges from.

- **X component** → Start index
- **Y component** → End index

If empty, the first available Vector2D attribute is used.

Use negative values to select from the end.

⚡ PCG Overridable

</details>

---

## Behavior Notes

- **Vector2D Format**: X = start index, Y = end index
- **Inclusive**: Both start and end are included in the range
- **Auto-Swap**: If start > end, values are swapped automatically
- **Multiple Ranges**: All ranges from all attributes are combined
- **Negative Indexing**: Component values can be negative (`-1` = last point)
- **Deduplication**: The final index set is deduplicated

---

📦 **Module**: `PCGExPickers` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExPickers/Public/Pickers/PCGExPickerAttributeSetRanges.h)
