# PCGEx Documentation Style Guide

> Reference this when writing content. Consistency matters.

---

## Voice & Tone

### The Gradient

Each page follows a **warm-to-technical gradient**. The opening sets up an insight and grounds the reader. The middle builds understanding. The tail provides precise reference material.

**Top of page** (warm, grounding):
- Lead with a bold statement or key insight
- Use short affirmations to anchor the reader: "That's it." / "No special data types."
- Address the reader briefly when it clarifies: "Your spline output? Already a valid path."
- A brief analogy can land a concept faster than a definition

**Middle of page** (building understanding):
- Shift to structured explanations with connective tissue between sections
- Still accessible, but the prose tightens and the detail increases
- Diagrams and examples do the heavy lifting here

**Bottom of page** (technical reference):
- Tables, enumerations, links
- Dense and scannable
- Readers reaching this far want specifics, not reassurance

### Be

- **Direct** — State what things do, not what they might do
- **Technical but empathetic** — Assume smart readers who are encountering these concepts for the first time. Anticipate the "wait, what?" moments and address them naturally
- **Precise** — Use correct terminology consistently
- **Confident** — "This node merges clusters" not "This node can be used to merge clusters"
- **Grounding** — After introducing something new, briefly confirm the reader's footing before moving on. A sentence like "The rest is bookkeeping" or "That's the core of it" goes a long way.

### Avoid

- **Use-case specifics** — Don't say "for building cities" or "when making dungeons"
- **Time estimates** — Never "this takes a few minutes" or "quick operation"
- **Superlatives** — Avoid "powerful", "amazing", "incredibly useful"
- **Hedging** — Avoid "might", "could potentially", "in some cases"
- **Emojis** — Unless explicitly requested
- **Over-explaining** — Don't follow a clear statement with a bullet list restating the same thing. Trust the reader.
- **Flat reference tone throughout** — If the whole page reads like a man page, it's too cold. Warm it up at the top.
- **Sustained conversational tone** — If the whole page reads like a chat message, it's too casual. Tighten it in the middle.

### Em-Dashes

Em-dashes (—) are allowed **sparingly** — one or two per page, where they genuinely improve rhythm or emphasis. Don't chain them. Don't use them where a comma or colon reads just as well.

### Good Examples

```
✓ "Paths are just ordered points. That's it — no special data types, no hidden magic."
✓ "When a node says it works with 'paths,' it means: I'll assume these points are connected in the order you gave them."
✓ "Filters evaluate each point and return pass/fail."
✓ "Your spline sampler output? Already a valid path."

✗ "This powerful node can be used when you want to combine road networks."
✗ "Filters are incredibly useful for all sorts of things."
✗ "This might help if you're building a city generator."
✗ "Clusters are PCGEx's representation of connectivity: relationships between points." (too cold for an opening line)
```

### Tone Calibration

If you're unsure whether a section is landing right, check against these:

**Too cold** — Reads like API documentation. Pure facts, no grounding, no sense of a human explaining to another human. Symptom: every paragraph could start with "The" or a noun.

**Too warm** — Reads like a tutorial blog post. Extended metaphors, "Let's dive in!", excessive hand-holding. Symptom: you're explaining things the reader hasn't asked about yet.

**Just right** — Reads like a senior colleague walking you through something at a whiteboard. They're precise and confident, but they pause to make sure you're following. They don't over-explain, but they don't leave you behind either.

---

## Terminology

### Always Use | Never Use
| Correct | Incorrect |
|---------|-----------|
| Cluster | Graph (in user-facing docs) |
| Vtx | Vertex, Vertices, Node (for cluster nodes) |
| Edges | Connections, Links |
| Points | Data points, PCG points |
| Sub-node | Sub-graph node, Helper node |
| Provider | Factory provider, Source node |
| Consumer | Receiving node, Target node |
| Pin | Port, Socket (for node connections) |
| Vanilla PCG | Native PCG, Built-in PCG, Epic's PCG |

### Terms That Need Context
- **Node** — Ambiguous. Use "PCG node" for graph editor nodes, "Vtx" for cluster topology nodes
- **Graph** — Avoid in user-facing docs. Use "Cluster" for topology, "PCG graph" for the editor

### Capitalization
- **Node names**: Title Case matching Unreal display names ("Fuse Clusters", "Delaunay 2D")
- **Concepts**: lowercase unless starting sentence ("clusters", "filters", "paths")
- **PCGEx**: Always "PCGEx" not "PCGEX" or "pcgex"
- **Pin names**: Match exactly as shown in editor ("Vtx", "Edges", "Filters")

---

## Formatting

### Headers
```markdown
# Page Title (H1 - one per page)
## Major Section (H2)
### Subsection (H3)
#### Detail (H4 - use sparingly)
```

### Code & Technical Terms
- Node names: **Bold** on first mention, plain after ("Use **Fuse Clusters** to merge...")
- Attribute names: `backticks` (`@Data.IsClosed`, `$Position`)
- Class names: `backticks` (`FPCGExCluster`, `UPCGExSettings`)
- File paths: `backticks` (`Source/PCGExCore/Public/...`)
- Inline code/values: `backticks` (`true`, `0.5`, `Default`)

### Tables
Use for:
- Input/Output pins
- Settings with type/default/description
- Comparison matrices

```markdown
| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Cluster vertices |
| **Edges** | Points | Cluster edge data |
```

### Hints/Callouts (GitBook syntax)
```markdown
{% hint style="info" %}
Informational note - nice to know
{% endhint %}

{% hint style="success" %}
Pro tip - recommended practice
{% endhint %}

{% hint style="warning" %}
Caution - common mistake or gotcha
{% endhint %}

{% hint style="danger" %}
Critical warning - will cause problems
{% endhint %}
```

### Images
Use HTML comments with descriptions:
```markdown
<!-- IMAGE: Diagram showing Vtx points connected by Edge points, with labels -->
<!-- IMAGE: Before/after comparison of cluster fusion -->
<!-- IMAGE: PCG graph screenshot showing filter nodes connected to consumer -->
```

Be specific about what the image should show. These will be created manually later.

### Links

**To node library (from concepts):**
```markdown
See [Fuse Clusters](/node-library/clusters/fuse-clusters.md) for details.
```

**To concepts (from node library):**
```markdown
For background, see [Cluster Fundamentals](/concepts/03-clusters/README.md).
```

**Internal section links:**
```markdown
See [Composition](composition.md) for combining filters.
```

---

## Document Structure

### Conceptual Pages
```markdown
# Title

Opening — bold insight or grounding statement. One or two sentences that land the core idea.

## Core Concept
The main mental model. Brief analogy if it helps. Grounding affirmation.

## How It Works
Mechanics with enough connective tissue to follow. Diagrams carry weight here.

## Key Details
Important specifics, organized logically. Increasingly technical.

## Reference / Patterns
Tables, comparison matrices, quick-reference material.

## Related
- Links to related concept pages
- Links to relevant node library sections
```

### Section README Pages
```markdown
# Section Title

Brief intro — what this section covers, framed as an insight rather than a table of contents.

## Overview
Key concepts, with the warm-to-technical gradient in miniature.

## In This Section
- [Page 1](page-1.md) - Brief description
- [Page 2](page-2.md) - Brief description

## Prerequisites
What to read/understand first.
```

---

## Content Principles

### Accuracy Over Speed
- Reference source code when describing behavior
- Check generated node docs in `_staging/` for settings accuracy
- When uncertain, leave a `<!-- TODO: verify -->` comment

### DRY (Don't Repeat Yourself)
- Link to other pages rather than duplicating
- If something is explained well elsewhere, reference it
- Node library handles specifics; concepts handle understanding

### Progressive Disclosure
- Start with the simple case
- Add complexity gradually
- Advanced details can be in subsections or linked pages

### Abstract Over Concrete
- Describe what operations DO, not what they're FOR
- "Merges overlapping vertices" not "Combines road intersections"
- Capabilities, not applications

---

## Quality Checklist

Before considering a page complete:
- [ ] Opening grounds the reader (not a dry definition)
- [ ] Warm-to-technical gradient is present
- [ ] No use-case specific examples
- [ ] No time estimates
- [ ] Terminology matches this guide
- [ ] Em-dashes used sparingly (0-2 per page)
- [ ] Links to related content work
- [ ] Image placeholders have clear descriptions
- [ ] Accuracy verified against source/generated docs
- [ ] Flows logically from prior content
