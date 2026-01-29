# PCGEx Documentation Templates

> **Purpose**: Exact templates for documentation pages. Copy and adapt these structures.

---

## Node Documentation Template

Use for filters, path nodes, cluster nodes, sampling nodes, etc.

```markdown
---
icon: <icon-name>
description: 'In editor :: PCGEx | <Category> : <Node Display Name>'
---

# Node Display Name

One-line description of what this node does.

## Overview

2-3 sentences explaining:
- What this node does at a high level
- Key behavior or approach (how it differs from similar nodes)

> Keep use-case agnostic. Describe *what* it does, not *why* someone would use it.

## Before / After (optional)

For nodes that transform data in ways that benefit from visualization:

```
Before:  ●────●────●────●────●
         (description of input state)

After:   ●──●──●──●──●──●──●──●
         (description of output state)
```

> Use ASCII diagrams for abstract operations. Skip for nodes with obvious behavior.

## How It Works

1. **First step**: What happens first
2. **Second step**: What happens next
3. **Final step**: Output generation

## Settings

### Setting Group Name

<details>
<summary><strong>Setting Name</strong> <code>Type</code></summary>

Description of what this setting controls (1-2 sentences).

| Option | Behavior |
|--------|----------|
| **Option1** | What it does |
| **Option2** | What it does |

Default: `value`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Another Setting</strong> <code>bool</code></summary>

Description of this boolean setting.

Default: `false`

</details>

### Another Setting Group

[Continue with more settings...]

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Input point data |
| **Targets** | Points | Target points for comparison |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Out** | Points | Filtered/processed output |

## Output Attributes

| Attribute | Type | Description |
|-----------|------|-------------|
| `$AttributeName` | Double | Created attribute description |

## Examples

**Scenario description**:
- **Setting Name**: `Value`
- **Another Setting**: `Value`

**Another scenario**:
- **Setting Name**: `Different Value`

## Related

Organize by relationship type. Use subcategories when helpful:

### Similar Nodes
- [Related Node](./related-node.md) - Brief note on relationship

### Path Shaping (example subcategory)
- [Subdivide](./subdivide.md) - Add intermediate points
- [Resample](./resample.md) - Redistribute points evenly

### See Also
- [Shared Concept](../../shared-concepts/concept.md) - For deeper understanding

---

📦 **Module**: `PCGExModuleName` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExModuleName/Private/Category/PCGExNodeName.cpp)
```

---

## Filter Documentation Template

Filters have specific patterns for the Settings section.

```markdown
---
icon: filter
description: 'In editor :: PCGEx | Filter : <Filter Display Name>'
---

# Filter Display Name

One-line description of what this filter evaluates.

## Overview

2-3 sentences explaining:
- What condition this filter tests
- When points pass vs fail
- Key characteristics (tolerance, self-comparison, etc.)

> Keep use-case agnostic. Describe *what* it evaluates, not *why* someone would use it.

## How It Works

1. **For each point**: What the filter evaluates
2. **Comparison**: How it determines pass/fail
3. **Result**: What happens to passing/failing points

## Settings

### Comparison Settings

<details>
<summary><strong>Comparison</strong> <code>EPCGExComparison</code></summary>

How to compare values.

See [Comparison Operators](../../shared-concepts/comparison-operators.md) for all options.

Default: `Strictly Greater`

⚡ PCG Overridable

</details>

### Value Source

<details>
<summary><strong>Compare Against</strong> <code>Constant | Attribute</code></summary>

Whether to compare against a fixed value or read from an attribute.

- **Constant** - Use the value specified below
- **Attribute** - Read value from a point attribute

Default: `Constant`

</details>

<details>
<summary><strong>Operand B (Constant)</strong> <code>double</code></summary>

The constant value to compare against.

*Visible when Compare Against = Constant*

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Operand B (Attribute)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read comparison value from.

*Visible when Compare Against = Attribute*

</details>

### Filter Output

<details>
<summary><strong>Invert Result</strong> <code>bool</code></summary>

If enabled, inverts the filter result (pass becomes fail, fail becomes pass).

Default: `false`

</details>

## Examples

**Keep points where Value > 50**:
- **Comparison**: `Strictly Greater`
- **Compare Against**: `Constant`
- **Operand B**: `50`

**Keep points where AttributeA >= AttributeB**:
- **Comparison**: `Equal or Greater`
- **Compare Against**: `Attribute`
- **Operand B**: `AttributeB`

## Related

### Similar Filters
- [Other Filter](./other-filter.md) - Comparison

### See Also
- [Comparison Operators](../../shared-concepts/comparison-operators.md)
- [Input Value Sources](../../shared-concepts/input-value-sources.md)

---

📦 **Module**: `PCGExFilters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/PCGExFilterName.cpp)
```

---

## Shared Concept Template

For plugin-wide concepts documented once and referenced everywhere.

```markdown
---
icon: book-open
---

# Concept Name

One sentence explaining what this concept is and why it exists.

## When You'll See This

This setting appears in:
- **Filter nodes** - For conditional evaluation
- **Sampling operations** - For proximity queries
- **Matching operations** - For data correlation

## Options

| Value | Description |
|-------|-------------|
| **Option 1** | What this option does |
| **Option 2** | What this option does |
| **Option 3** | What this option does |

## How It Works

Explain the underlying logic (theory level, not code):
- What happens when each option is selected
- Order of operations if relevant
- Edge cases or special behaviors

## Common Configurations

**Typical setup for scenario A**:
- Setting: `Value`

**Typical setup for scenario B**:
- Setting: `Different Value`

## Tips

{% hint style="info" %}
Helpful tip about using this concept effectively.
{% endhint %}

{% hint style="warning" %}
Common mistake or gotcha to avoid.
{% endhint %}

---

📦 **Module**: `PCGExCore` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExCore/Public/PCGExRelevantHeader.h)
```

---

## Sub-Operation Template

For node-specific factories (smoothing methods, tangent types, etc.)

```markdown
---
icon: puzzle-piece
description: 'Sub-operation for <Parent Node>'
---

# Operation Name

One-line description of this specific operation variant.

## Overview

Explain:
- What makes this operation different from alternatives
- When you would choose this over others
- Key characteristics

## How It Works

1. **Step one**: Algorithm detail
2. **Step two**: Processing logic
3. **Result**: What gets produced

## Settings

<details>
<summary><strong>Setting Name</strong> <code>Type</code></summary>

Description specific to this operation.

Default: `value`

⚡ PCG Overridable

</details>

## Comparison to Other Operations

| Operation | Best For | Characteristics |
|-----------|----------|-----------------|
| **This Operation** | Use case | Key trait |
| **Alternative A** | Different use case | Different trait |
| **Alternative B** | Another use case | Another trait |

## Related

- [Parent Node](../README.md) - Main node documentation
- [Alternative Operation](./alternative.md) - When to use instead

---

📦 **Module**: `PCGExModuleName` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExModuleName/Private/Operations/PCGExOperationName.cpp)
```

---

## Category README Template

For index pages (filters/README.md, paths/README.md, etc.)

```markdown
---
icon: folder-open
description: '<Category> operations in PCGEx'
---

# Category Name

Overview of this category (2-3 sentences).

## Quick Reference

| Node | Purpose |
|------|---------|
| [Node A](./node-a.md) | Brief description |
| [Node B](./node-b.md) | Brief description |
| [Node C](./node-c.md) | Brief description |

## Common Patterns

### Pattern Name

Describe a common workflow or configuration pattern.

### Another Pattern

Another common workflow.

## Shared Settings

These settings appear across multiple nodes in this category:

- **[Setting Group](./shared-settings/setting.md)** - What it controls

## Tips

{% hint style="info" %}
Category-specific tip.
{% endhint %}

---

📦 **Module**: `PCGExModuleName`
```

---

## Formatting Reference

### Icons

Common icons used:
- `filter` - Filter nodes
- `route` - Path nodes
- `diagram-project` - Cluster nodes
- `crosshairs` - Sampling nodes
- `book-open` - Shared concepts
- `puzzle-piece` - Sub-operations
- `folder-open` - Category indexes
- `cog` - Settings/configuration
- `arrows-left-right` - Transformation nodes

### Hints

```markdown
{% hint style="info" %}
Informational note - helpful tips, clarifications
{% endhint %}

{% hint style="warning" %}
Warning - common mistakes, gotchas, things to watch for
{% endhint %}

{% hint style="danger" %}
Danger - critical warnings, data loss potential, breaking changes
{% endhint %}

{% hint style="success" %}
Success - best practices, recommended approaches
{% endhint %}
```

### Links

```markdown
<!-- Same folder -->
[Other Node](./other-node.md)

<!-- Parent folder -->
[Category Index](../README.md)

<!-- Different category -->
[Filter Name](../filters/points/filter-name.md)

<!-- Shared concepts -->
[Concept Name](../../shared-concepts/concept-name.md)
```

### Settings Details Block

```html
<details>
<summary><strong>Display Name</strong> <code>Type</code></summary>

Description text.

Default: `value`

⚡ PCG Overridable

</details>
```

### Tables

```markdown
| Column A | Column B | Column C |
|----------|----------|----------|
| **Bold** | `code` | Normal |
```

### Footer

```markdown
---

📦 **Module**: `ModuleName` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/ModuleName/Private/Path/FileName.cpp)
```

---

## Writing Guidelines

### Use-Case Agnostic Language

Documentation should describe **what** a node does, not **why** someone would use it. Avoid assumptions about user intent.

**Avoid:**
> "Use this for creating roads, rivers, or cable routing..."

**Prefer:**
> "Replaces corner points with arcs or chamfers, creating smooth transitions at path corners."

The Examples section can show concrete configurations, but let users determine their own applications.

### ASCII Diagrams

Add Before/After diagrams for nodes that:
- Transform spatial data in abstract ways (Shift, Slide, Subdivide)
- Have behavior that's hard to visualize from description alone (Attribute Rolling)
- Compare two approaches (Subdivide vs Resample)

Skip diagrams for nodes with obvious behavior (Create Spline, Write Attribute).

### Overview vs How It Works

- **Overview**: High-level "what" (1-3 sentences, conceptual)
- **How It Works**: Step-by-step "how" (numbered list, procedural)

---

## Checklist Before Submitting

- [ ] Frontmatter has correct icon and description
- [ ] Description matches format: `'In editor :: PCGEx | Category : Name'`
- [ ] All settings use `<details>` blocks
- [ ] Types shown in `<code>` tags
- [ ] Defaults specified for all settings
- [ ] PCG Overridable marked with ⚡ where applicable
- [ ] Footer has correct module name
- [ ] Footer source link points to correct file
- [ ] All internal links use relative paths
- [ ] No invented settings (verified against source)
- [ ] Overview is use-case agnostic
- [ ] ASCII diagram included if operation is abstract
