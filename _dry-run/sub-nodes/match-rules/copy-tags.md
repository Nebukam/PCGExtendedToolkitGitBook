---
description: 'In editor :: PCGEx | Match : Copy Tags'
---

# Copy Tags

**Copies tags from matched targets to candidates.**

Unlike other match rules that filter or test relationships, this rule is an **action rule** — it always passes and performs a side effect: copying tags from targets to the matched candidate data.

---

## How It Works

```
Target Point                    Candidate (after match)
┌──────────────────┐           ┌──────────────────┐
│ Tags:            │           │ Tags:            │
│  - Biome:Forest  │──copy──►  │  - Biome:Forest  │
│  - Zone:A        │           │  - Zone:A        │
│  - Priority:High │           │  - Priority:High │
└──────────────────┘           └──────────────────┘
```

When a target-candidate pair passes all other match rules, this rule copies the target's tags onto the candidate data.

---

## Settings

This rule has no additional settings beyond the standard match rule options (Enabled, Strictness).

The rule always passes and copies all tags from the target to the matched candidate.

---

## Behavior

{% hint style="info" %}
**Always Passes**: This rule always returns `true` for the match test. Its purpose is the side effect of copying tags, not filtering matches.
{% endhint %}

### Tag Inheritance
- All tags from the target point's parent data are copied
- Existing tags on the candidate are preserved
- Duplicate tags may be created if both sides have the same tag

---

## Example Use Cases

### Propagating Metadata
Pass contextual information from points to their matched data:
- Terrain points tagged with biome type
- Matched foliage inherits biome tags for downstream filtering

### Zone Marking
Transfer zone assignments through the matching process:
- Building footprint points have zone tags
- Matched architectural prefabs inherit zone information
- Enables zone-based post-processing

### Debug Tracing
Track which targets matched to which candidates:
- Add unique identifier tags to target points
- Copy Tags rule transfers IDs to matched data
- Trace relationships in output

---

## Combining with Other Rules

Copy Tags should typically be used alongside filtering rules:

```
Rules: [Attributes, Overlap, Copy Tags]
Match Mode: All

1. Attributes rule filters to valid type matches
2. Overlap rule ensures spatial validity
3. Copy Tags copies metadata for downstream use
   (always passes, so doesn't affect filtering)
```

---

{% hint style="warning" %}
**Order Independence**: Since Copy Tags always passes, its position in the rule list doesn't affect which matches succeed. However, tags are only copied for pairs that pass all **other** rules.
{% endhint %}

---

📦 **Module**: `PCGExMatching` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExMatching/Public/Matching/PCGExMatchCopyTags.h)
