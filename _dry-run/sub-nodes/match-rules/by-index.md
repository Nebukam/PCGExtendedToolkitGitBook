---
description: 'In editor :: PCGEx | Match : By Index'
---

# By Index

**Matches elements based on their index position.**

This rule creates direct index-based relationships between targets and candidates — useful for ordered pairing where position matters.

---

## How It Works

```
Targets (Source=Target)          Candidates
┌────────────────────┐          ┌──────────────┐
│ Point 0 (idx=0)    │◄────────►│ Candidate 0  │
│ Point 1 (idx=1)    │◄────────►│ Candidate 1  │
│ Point 2 (idx=2)    │◄────────►│ Candidate 2  │
│ Point 3 (idx=0) ───┼──────────►│ Candidate 0  │  (uses attribute)
└────────────────────┘          └──────────────┘
```

The rule reads an index value from either the target or candidate, then matches it against the actual index position of the other side.

---

## Settings

<details>
<summary><strong>Source</strong> <code>EPCGExMatchByIndexSource</code></summary>

Which side provides the index attribute to read.

| Value | Behavior |
|-------|----------|
| **Target** | Read index from target attribute, match against candidate's position |
| **Candidate** | Read index from candidate attribute, match against target's position |

Default: `Target`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Index Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

The attribute to read the index value from.

{% hint style="info" %}
Only supports `@Data` domain — reads from the data level, not individual points.
{% endhint %}

Default: `$Index`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Index Safety</strong> <code>EPCGExIndexSafety</code></summary>

How to handle out-of-range indices.

| Value | Behavior |
|-------|----------|
| **Ignore** | Skip if index is out of range |
| **Clamp** | Clamp to valid range [0, count-1] |
| **Tile** | Wrap around using modulo |

Default: `Tile`

⚡ PCG Overridable

</details>

---

## Understanding Source Direction

The `Source` setting determines the direction of the lookup:

### Source = Target
```
Target Point          Candidates
┌──────────────┐     ┌────────────────┐
│ Index = 2    │────►│ [0] Mesh A     │
│              │     │ [1] Mesh B     │
│              │     │ [2] Mesh C  ◄──┤ Match!
└──────────────┘     └────────────────┘
```
Read the index from target's attribute → find candidate at that position.

### Source = Candidate
```
Targets              Candidate
┌────────────────┐   ┌──────────────┐
│ [0] Point A    │   │ Index = 1    │
│ [1] Point B ◄──┼───│              │ Match!
│ [2] Point C    │   │              │
└────────────────┘   └──────────────┘
```
Read the index from candidate's attribute → find target at that position.

---

## Example Use Cases

### Sequential Pairing
Pair points with meshes in order:
- 5 points with indices 0-4
- 5 mesh candidates
- Each point gets exactly one mesh

### Repeating Patterns
With `Tile` safety, create repeating assignments:
- Points with indices 0, 1, 2, 3, 4, 5...
- 3 candidates
- Results: 0→A, 1→B, 2→C, 3→A, 4→B, 5→C...

### Attribute-Driven Selection
Use a custom attribute to control which candidate each point gets:
- Points have `MeshVariant` attribute set to 0, 1, or 2
- Candidates provide 3 mesh options
- Each point selects its designated mesh

---

📦 **Module**: `PCGExMatching` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExMatching/Public/Matching/PCGExMatchByIndex.h)
