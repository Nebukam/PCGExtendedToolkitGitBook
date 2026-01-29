---
description: 'In editor :: PCGEx | Match : Match : Shared Tag'
---

# Shared Tag

Matches collections that **share common tags**. Can match a specific tag or any/all shared tags.

```
Candidate tags: [Region:Forest, Type:Trees]
Target tags:    [Region:Forest, Biome:Temperate]
                      ↓
Shared: "Region:Forest" → Match!
```

---

## Settings

<details>
<summary><strong>Mode</strong> <code>EPCGExTagMatchMode</code></summary>

How to match tags.

| Value | Behavior |
|-------|----------|
| **Specific Tag** | Match a specific tag by name |
| **Any Shared** | Match if ANY tag is shared |
| **All Shared** | Match if ALL candidate tags exist in target |

Default: `Specific Tag`

⚡ PCG Overridable

</details>

### Specific Tag Mode

<details>
<summary><strong>Tag Name Input</strong> <code>EPCGExInputValueType</code></summary>

Source of the tag name to match.

| Value | Behavior |
|-------|----------|
| **Constant** | Use a fixed tag name |
| **Attribute** | Read tag name from attribute |

Default: `Constant`

*Visible when Mode = Specific Tag*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tag Name</strong> <code>FString</code></summary>

The specific tag name to match.

Default: `Tag`

*Visible when Mode = Specific Tag and Tag Name Input = Constant*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tag Name (Attr)</strong> <code>FName</code></summary>

Attribute to read the tag name from.

Default: `ReadTagFrom`

*Visible when Mode = Specific Tag and Tag Name Input = Attribute*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Do Value Match</strong> <code>bool</code></summary>

When enabled, also matches the tag value (the part after the colon).

Example: `Region:Forest` only matches `Region:Forest`, not `Region:Desert`.

Default: `false`

*Visible when Mode = Specific Tag*

⚡ PCG Overridable

</details>

### Shared Tag Modes

<details>
<summary><strong>Match Tag Values</strong> <code>bool</code></summary>

When enabled, tag values must also match (not just tag names).

Default: `false`

*Visible when Mode = Any Shared or All Shared*

⚡ PCG Overridable

</details>

---

## Behavior Notes

- Tags use format `Name:Value` (e.g., `Region:Forest`)
- Without value matching, only the tag name (before `:`) is compared
- **Any Shared**: If candidate has tags [A, B] and target has [B, C], they match (B is shared)
- **All Shared**: If candidate has tags [A, B], target must have both A AND B

---

📦 **Module**: `PCGExMatching` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExMatching/Public/Matching/PCGExMatchSharedTag.h)
