---
icon: atom-simple
---

# Valency

### What is Valency?

**Valency** is a powerful procedural content generation system for creating complex, rule-based modular assemblies in Unreal Engine. Think of it as an advanced Wave Function Collapse (WFC) implementation with unprecedented flexibility—you define connection points (orbitals), build constraint rules, and let the solver figure out how to fit everything together perfectly.

> The name comes from chemistry: just as atoms bond through valence electrons at specific positions, your modular assets connect at specific points with specific rules.

### What Can You Build?

Valency shines wherever you need intelligent modular placement:

* **Architectural Systems**: Buildings, dungeons, interior spaces where walls, corners, and connectors must align perfectly
* **Networks & Infrastructure**: Pipes, cables, roads, paths—anything that branches and connects
* **Mechanical Assemblies**: Machinery parts, modular vehicles, tech panels
* **Pattern Recognition**: Identify specific configurations in solved results and replace them with larger, specialized assets

{% hint style="success" %}
The key difference from traditional WFC? **You're not limited to grid-aligned connections**. Orbitals can point anywhere in 3D space, at any angle, with any number of connection points per module.
{% endhint %}

### Core Workflow

{% stepper %}
{% step %}
### **Author** in Editor

1. Create cages with orbitals
2. Connect cages to define neighbor relationships
3. Group into Context Volumes
4. Build Bonding Rules asset

> Valency cages and layout are editor-only and will require their own dedicated level.
{% endstep %}

{% step %}
### **Solve** in PCG Graph

1. Input: Cluster (graph of connected points)
2. Write Valency Orbitals (prepare data)
3. Valency Staging (solve & assign modules)
4. Output: Points tagged with module assignments
5. Optional pattern matching from solved results
{% endstep %}

{% step %}
### **Spawn**

1. Use module data to spawn appropriate assets
2. Apply local transforms if configured
{% endstep %}
{% endstepper %}

### Key Features

#### Flexible Connection Topology

Unlike grid-locked WFC, Valency uses **user-defined orbitals**. Want 8 cardinal directions? 26 connections for 3D grids? 6 for hexagons? Define once, reuse everywhere.

#### Pattern Replacement

The game-changer: detect specific multi-module arrangements (patterns) in solved clusters and transform them:

* **Remove**: Extract matched sections to separate collections
* **Collapse**: Replace N points with 1 larger asset
* **Swap**: Change modules to specialized variants
* **Annotate**: Tag for downstream processing

Example: Solve a pipe network, then automatically identify T-junctions and replace them with high-detail connector meshes. Combine build facade bits into hero meshes.

#### Cage Properties & Tags

Attach arbitrary data to cages (strings, numbers, vectors, asset references) that flow through to spawned points. Build data-rich generation pipelines without custom code.

#### Palettes

Reusable asset + property bundles. Create a "wood variant" palette, reference it from multiple cages, update once—changes propagate everywhere.

#### Null Cages & Constraints

Explicitly define boundary conditions (edges), required connections (wildcards), or spatial placeholders without runtime constraints.

### Valency vs Traditional WFC

| Feature              | Traditional WFC           | Valency                                      |
| -------------------- | ------------------------- | -------------------------------------------- |
| Connection topology  | Fixed grid (4/8/26)       | User-defined orbitals (any count, any angle) |
| Constraint authoring | Manual socket IDs or code | Visual editor, drag-connect cages            |
| Multi-layer          | Rare                      | Built-in, unlimited layers                   |
| Pattern matching     | Post-process              | Integrated with multiple strategies          |
| Property flow        | Custom implementation     | First-class support                          |
| Transform variants   | Single transform per tile | Multiple local transforms per module         |
| Boundary handling    | Often implicit            | Explicit null cages with modes               |

### When to Use Valency

**Perfect fit:**

* You're desperate to run WFC in PCG
* You need more than 4/8/26 grid directions
* Neighbor rules are complex but visual (easier to connect cages than write rules)
* You want pattern-based replacements after solving
* You're building networks, organic systems, or non-orthogonal structures

**Maybe overkill:**

* Simple grid-locked tile placement with few rules
* Purely random placement without constraints
* Single-asset scattering

### What You'll Need to Know

This documentation assumes you're comfortable with:

* PCG fundamentals (nodes, pins, data flow)
* Graphs and clusters (PCGEx cluster generation)
* Basic Unreal Editor (actors, components, data assets)

If you're fuzzy on clusters or graphs, check the PCG/Cluster Quick Reference before diving in.

***

**Next:** Fundamentals — Core concepts and terminology
