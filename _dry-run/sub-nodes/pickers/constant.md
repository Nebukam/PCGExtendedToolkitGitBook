---
description: 'In editor :: PCGEx | Pickers : Picker : Constant'
---

# Constant

Selects a **single point** by index.

```
Points:     ○───○───○───○───○───○───○───○───○───○
            0   1   2   3   4   5   6   7   8   9

Index = 3:              ●                           → {3}
Index = -1:                                     ●   → {9}
Index = -3:                             ●           → {7}
```

---

## Settings

<details>
<summary><strong>Discrete Index</strong> <code>int32</code></summary>

The index to select. Use negative values to select from the end.

| Value | Meaning |
|-------|---------|
| `0` | First point |
| `3` | Fourth point |
| `-1` | Last point |
| `-2` | Second-to-last |

Default: `0`

*Visible when Treat as Normalized = false*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Relative Index</strong> <code>double</code></summary>

Normalized position in the collection (0.0 = first, 1.0 = last).

| Value | Meaning |
|-------|---------|
| `0.0` | First point |
| `0.5` | Middle point |
| `1.0` | Last point |

Default: `0`

*Visible when Treat as Normalized = true*

⚡ PCG Overridable

</details>

---

📦 **Module**: `PCGExPickers` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExPickers/Public/Pickers/PCGExPickerConstant.h)
