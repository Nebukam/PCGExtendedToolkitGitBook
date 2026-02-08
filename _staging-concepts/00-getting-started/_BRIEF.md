# Section Brief: Getting Started

> Context for writing this section. Read before working on these docs.

---

## Purpose

Provide the minimal on-ramp to PCGEx. Users should:
- Understand what PCGEx is and who it's for
- Get the plugin installed and working
- See PCGEx in action with a minimal example
- Know where to go next

This is NOT a comprehensive tutorial. It's "get running, then learn."

---

## Key Messages

1. **PCGEx extends PCG** - It's an addition, not a replacement
2. **Novel concepts ahead** - PCGEx introduces things that don't exist in vanilla
3. **Technical users welcome** - Aimed at technical artists and engineer-minded folks
4. **Quick to start** - Installation is straightforward

---

## Pages in This Section

| Page | Content |
|------|---------|
| `README.md` | What is PCGEx, who is it for, what can you build |
| `installation.md` | How to install, version compatibility, dependencies |
| `first-graph.md` | Minimal example: create cluster → draw edges → find path |
| `example-project.md` | The 100+ example project - bird's-eye view of features |

---

## Source Material

### Primary (adapt/cherry-pick)
- `general/quickstart/README.md`
- `general/quickstart/installation.md`
- `general/quickstart/example-project.md`
- `general/quickstart/pcg-basics.md` (if relevant parts exist)

### For Accuracy
- Plugin marketplace/GitHub page for installation steps
- Current version compatibility matrix
- Example project repository/download location

---

## What Belongs Here vs Elsewhere

### In This Section
- What PCGEx is (brief)
- Installation steps
- "Hello world" level example
- Navigation guidance ("go here next")

### NOT Here (belongs elsewhere)
- Deep explanations of concepts → `01-architecture/`
- Specific feature tutorials → respective sections
- Node-by-node documentation → Node Library

---

## Terminology

- Introduce key terms briefly, link to full explanations
- Don't overwhelm with jargon in the first pages
- "Cluster", "Path", "Filter" can be mentioned but explained later

---

## Diagrams Needed

1. Simple PCG graph showing a few PCGEx nodes
2. Result of "first graph" example in viewport

---

## Cross-Links to Include

**Concepts:**
- `01-architecture/README.md` - "To understand how PCGEx works..."
- `04-filters/README.md` - "Filters are used throughout..."

**Node Library:**
- Brief mention that it exists for reference

---

## Quality Notes

- Keep it SHORT - users want to get started, not read essays
- Installation should be copy-paste reliable
- "First graph" example: create cluster → draw edges → find path (shows core value)
- Example project page is important - 100+ examples provide bird's-eye view
- Avoid use-case specific language even in examples
- This section is written LAST (after core content exists) so we know what to point to
