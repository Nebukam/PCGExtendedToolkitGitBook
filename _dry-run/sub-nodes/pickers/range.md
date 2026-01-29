---
description: 'In editor :: PCGEx | Pickers : Picker : Range'
---

# Range

Selects a **contiguous range** of points between start and end indices (inclusive).

```
Points:     ○───○───○───○───○───○───○───○───○───○
            0   1   2   3   4   5   6   7   8   9

[2:5]:          ●───●───●───●                       → {2,3,4,5}
[0:2]:      ●───●───●                               → {0,1,2}
[-3:-1]:                        ●───●───●           → {7,8,9}
[7:3]:              ●───●───●───●───●               → {3,4,5,6,7} (auto-swapped)
```

---

## Settings

### Start Index

<details>
<summary><strong>Discrete Start Index</strong> <code>int32</code></summary>

Starting index of the range. Use negative values to select from the end.

Default: `0`

*Visible when Treat as Normalized = false*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Relative Start Index</strong> <code>double</code></summary>

Normalized start position (0.0 = first, 1.0 = last).

Default: `0`

*Visible when Treat as Normalized = true*

⚡ PCG Overridable

</details>

### End Index

<details>
<summary><strong>Discrete End Index</strong> <code>int32</code></summary>

Ending index of the range (inclusive). Use negative values to select from the end.

Default: `0`

*Visible when Treat as Normalized = false*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Relative End Index</strong> <code>double</code></summary>

Normalized end position (0.0 = first, 1.0 = last).

Default: `0`

*Visible when Treat as Normalized = true*

⚡ PCG Overridable

</details>

---

## Behavior Notes

- **Inclusive Range**: Both start and end indices are included in the selection
- **Auto-Swap**: If start > end after resolution, the values are swapped automatically
- **Negative Indexing**: `-1` = last, `-2` = second-to-last, etc.

---

📦 **Module**: `PCGExPickers` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExPickers/Public/Pickers/PCGExPickerConstantRange.h)
