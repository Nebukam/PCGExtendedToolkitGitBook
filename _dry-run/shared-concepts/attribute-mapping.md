---
icon: arrow-right-arrow-left
---

# Attribute Mapping

How PCGEx copies and renames attributes between source and target.

## When You'll See This

Attribute mapping appears in nodes that transfer data between points or transform attribute values:

- **Remap nodes**: Copy attributes with optional renaming
- **Sampling nodes**: Pull attributes from sampled points
- **Blending nodes**: Combine attributes from multiple sources
- **Reduction nodes**: Aggregate attributes across collections

---

## The Basic Pattern

An attribute mapping answers three questions:

1. **Source**: Which attribute to read from?
2. **Rename?**: Should the output have a different name?
3. **Target**: If renaming, what's the new name?

In the editor, you'll see:

| Setting | Purpose |
|---------|---------|
| **Source** | Attribute name to read (can also be a property like `$Position`) |
| **Output to Different Name** | Toggle to enable renaming |
| **Target** | New attribute name (only visible when renaming is enabled) |

---

## Simple Copy (Same Name)

When you just want to transfer an attribute without renaming:

- **Source**: `MyAttribute`
- **Output to Different Name**: Disabled
- **Result**: Reads and writes `MyAttribute`

The attribute keeps its original name.

---

## Rename on Copy

When you want the output attribute to have a different name:

- **Source**: `OldName`
- **Output to Different Name**: Enabled
- **Target**: `NewName`
- **Result**: Reads `OldName`, writes `NewName`

Useful when merging data from multiple sources that might have naming conflicts.

---

## Property to Attribute

You can read from built-in point properties and write them as regular attributes:

- **Source**: `$Position`
- **Output to Different Name**: Enabled
- **Target**: `OriginalPosition`
- **Result**: Copies the point's position into an attribute called `OriginalPosition`

Common properties you can read:
- `$Position` - Point location
- `$Rotation` - Point rotation
- `$Scale` - Point scale
- `$Density` - Point density
- `$Seed` - Point seed

---

## Multiple Attribute Mappings

Many nodes accept a **list** of attribute mappings, letting you configure several at once:

```
Attribute 1: Score → Score
Attribute 2: OldTag → NewTag
Attribute 3: $Position → StartPosition
```

Each mapping in the list is processed independently.

---

## How It Works

1. **Validation**: At boot time, the node checks that source attributes exist
2. **Selector creation**: Internal selectors are built for reading and writing
3. **Processing**: For each point, source values are read and written to the output name
4. **Type preservation**: The attribute type (float, vector, etc.) is maintained

If a source attribute doesn't exist, the node typically logs a warning and skips that mapping.

---

## Common Patterns

**Preserve original before modification**:
- Source: `$Position`, Target: `OriginalPosition`
- Then modify positions
- You can restore or compare later

**Merge data with naming conflicts**:
- DataSet A has `Value`
- DataSet B has `Value`
- Remap one to `ValueFromB` before merging

**Extract property for filtering**:
- Source: `$Density`, Target: `DensityValue`
- Now you can use attribute-based filters on density

---

## Tips

{% hint style="info" %}
**Properties use $ prefix**: When referencing built-in point properties (not custom attributes), prefix with `$`. For regular attributes, just use the name.
{% endhint %}

{% hint style="info" %}
**Empty target = same as source**: If you enable "Output to Different Name" but leave Target empty or set it to the same as Source, no renaming occurs.
{% endhint %}
